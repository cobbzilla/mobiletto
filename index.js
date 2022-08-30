const fs = require('fs')
const path = require('path')
const { Readable, Transform } = require('stream')
const { logger } = require('./util/logger')
const redis = require('./util/redis')
const { basename, dirname } = require('path')
const shasum = require('shasum')
const randomstring = require('randomstring')

const crypt = require('./util/crypt')
const {DEFAULT_CRYPT_ALGO, normalizeKey, normalizeIV, encrypt, decrypt} = require("./util/crypt")

const DIR_ENT_DIR_SUFFIX = '__.dirent'
const DIR_ENT_FILE_PREFIX = 'dirent__'
const ENC_PAD_SEP = ' ~ '

const initMobilettoTempDir = () => {
    const dir = process.env.MOBILETTO_TMP || process.env.TMPDIR || '/tmp'
    return dir.endsWith('/') ? dir.substring(0, dir.length - 1) : dir
}
const MOBILETTO_TMP = initMobilettoTempDir()

// adapted from https://stackoverflow.com/a/27724419
function MobilettoError (message, err) {
    this.message = `${message}: ${err ? err : ''}`
    // noinspection JSUnusedGlobalSymbols
    this.err = err
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
        // noinspection JSUnusedGlobalSymbols
        this.stack = (new Error(this.message)).stack
    }
}

// adapted from https://stackoverflow.com/a/27724419
function MobilettoNotFoundError (message) {
    this.message = `${message}`
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
        // noinspection JSUnusedGlobalSymbols
        this.stack = (new Error(this.message)).stack
    }
}

const reader = (chunks) => (chunk) => { if (chunk) { chunks.push(chunk) } }

const isAsyncGenerator = (func) => func[Symbol.toStringTag] === 'AsyncGenerator'
const isReadable = (thing) => thing instanceof fs.ReadStream || thing instanceof Transform || thing instanceof Readable

const getMetaCache = (size = 100) => redis.scopedCache('meta', size)
const getListingCache = (size = 100) => redis.scopedCache('listingCache', size)

const READ_FILE_CACHE_SIZE_THRESHOLD = 128 * 1024 // we can cache files of this size

// noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
const UTILITY_FUNCTIONS = {
    list: (client) => async (path, opts) => {
        const cache = getListingCache()
        let cached = cache ? await cache.get(path) : null
        if (cached) {
            if (Array.isArray(cached)) { return cached }
            throw cached
        }
        const recursive = opts && opts.recursive ? opts.recursive : false
        const visitor = opts && opts.visitor ? opts.visitor : null
        if (visitor && typeof visitor !== 'function') {
            throw new MobilettoError(`list: visitor is not a function: ${typeof visitor}`)
        }
        try {
            // noinspection JSUnresolvedFunction
            const results = await client.driver_list(path, recursive, visitor)
            if (cache) {
                cache.set(path, results).then(
                    () => { logger.debug(`list(${path}) cached ${results ? results.length : `unknown? ${JSON.stringify(results)}`} results`) },
                    (err) => { logger.error(`list(${path}) error: ${err}`) }
                )
            }
            return results
        } catch (e) {
            if (cache && e instanceof MobilettoNotFoundError) {
                cache.set(path, e).then(
                    () => { logger.debug(`list(${path}) cached error ${e}`) },
                    (err) => { logger.error(`list(${path}) error ${err} caching MobilettoNotFoundError`) }
                )
            }
            throw e
        }
    },
    safeList: (client) => async (path, opts) => {
        const recursive = opts && opts.recursive ? opts.recursive : false
        const visitor = opts && opts.visitor ? opts.visitor : null
        try {
            // noinspection JSUnresolvedFunction
            return await client.driver_list(path, recursive, visitor)
        } catch (e) {
            if (e instanceof MobilettoNotFoundError) {
                return []
            }
            throw e
        }
    },
    metadata: (client) => async (path) => {
        const cache = getMetaCache()
        const cached = cache ? await cache.get(path) : null
        if (cached) {
            return cached
        }
        // noinspection JSUnresolvedFunction
        const meta = await client.driver_metadata(path);
        if (cache) {
            cache.set(path, meta).then(
                () => { logger.debug(`metadata(${path}) cached meta = ${JSON.stringify(meta)}`) },
                (err) => { logger.error(`metadata(${path}) error: ${err}`) }
            )
        }
        return meta
    },
    safeMetadata: (client) => async (path) => {
        try {
            return await client.metadata(path)
        } catch (e) {
            if (e instanceof MobilettoNotFoundError) {
                return null
            }
            throw e
        }
    },
    remove: (client) => async (path, opts) => {
        const recursive = opts && opts.recursive ? opts.recursive : false
        const quiet = opts && opts.quiet ? opts.quiet : false
        // noinspection JSUnresolvedFunction
        const result = await client.driver_remove(path, recursive, quiet)
        await redis.flushMobiletto()
        return result
    },
    readFile: (client) => async (path) => {
        const cache = redis.scopedCache('readFile')
        const cached = cache ? await cache.get(path) : null
        if (cached) {
            return Buffer.from(cached, 'base64')
        }
        const chunks = []
        await client.read(path, reader(chunks))
        const data = Buffer.concat(chunks);
        if (cache && data.length < READ_FILE_CACHE_SIZE_THRESHOLD) {
            cache.set(path, data.toString('base64'))
        }
        return data
    },
    write: (client) => async (path, data) => {
        // noinspection JSUnresolvedFunction
        const bytesWritten = await client.driver_write(path, data)
        await redis.flushMobiletto()
        return bytesWritten
    },
    writeFile: (client) => async (path, data) => {
        const readFunc = function* () { yield data }
        return await client.write(path, readFunc())
    },
    mirror: (client) => async (source, clientPath = '', sourcePath = '') => {
        logger.info(`mirror: starting, sourcePath=${sourcePath} -> clientPath=${clientPath}`)
        const results = {
            success: 0,
            errors: 0
        }
        const visitor = async (obj) => {
            if (obj.type && obj.type === M_FILE) {
                logger.verbose(`mirror: mirroring file: ${obj.name}`)
                const tempPath = `${MOBILETTO_TMP}/mobiletto_${shasum(JSON.stringify(obj))}.${randomstring.generate(10)}`
                logger.debug(`mirror: writing ${obj.name} to temp file ${tempPath} ...`)
                const destName = obj.name.startsWith(sourcePath)
                    ? obj.name.substring(sourcePath.length)
                    : obj.name
                const destFullPath = clientPath + destName;
                try {
                    // if dest already exists and is the same size, don't copy it again
                    let srcSize = null
                    if (obj.size) {
                        srcSize = obj.size
                    } else {
                        const srcMeta = source.safeMetadata(obj.name)
                        if (srcMeta && srcMeta.size) {
                            srcSize = srcMeta.size
                        }
                    }
                    // only continue if we could determine the source size
                    if (srcSize) {
                        const destMeta = client.safeMetadata(destFullPath)
                        if (destMeta && destMeta.size && destMeta.size && destMeta.size === srcSize) {
                            logger.info(`mirror: dest object (${destFullPath}) has same size (${srcSize}) as src object ${sourcePath}, not copying`)
                            return
                        }
                    }

                    // write from source -> write to temp file
                    const fd = fs.openSync(tempPath, 'wx', 0o0600)
                    const writer = fs.createWriteStream(tempPath, {fd, flags: 'wx'})
                    await source.read(obj.name, async (chunk) => {
                        if (chunk) { writer.write(chunk) }
                    }, () => {
                        writer.close((err) => {
                            if (err) { throw new MobilettoError(`mirror: error closing temp file: ${err}`) }
                            logger.debug(`mirror: finished writing ${obj.name} to temp file ${tempPath}`)
                        })
                    }).then(async () => {
                        // read from temp file -> write to mirror
                        const fd = fs.openSync(tempPath, 'r')
                        const reader = fs.createReadStream(tempPath, {fd})
                        logger.debug(`mirror: writing temp file ${tempPath} to destination: ${destFullPath}`)
                        await client.write(destFullPath, reader)
                        logger.debug(`mirror: finished writing temp file ${tempPath} to destination: ${destFullPath}`)
                    })
                    results.success++
                } catch (e) {
                    logger.warn(`mirror: error copying file: ${e}`)
                    results.errors++
                } finally {
                    logger.verbose(`mirror: file mirrored successfully: ${obj.name}`)
                    fs.rmSync(tempPath, {force: true})
                }
            }
        }
        await mirrorDir(source, sourcePath, visitor)
        return results
    }
}

async function mirrorDir (source, sourcePath, visitor) {
    logger.verbose(`mirrorDir: mirroring dir: ${sourcePath}`)
    const listing = await source.list(sourcePath, {recursive: false, visitor})
    for (const obj of listing) {
        if (obj.type === M_DIR) {
            const dir = obj.name.startsWith(sourcePath) ? obj.name : sourcePath + obj.name
            await mirrorDir(source, dir, visitor)
        }
    }
}

function addUtilityFunctions (client, readOnly = false) {
    for (const func of Object.keys(UTILITY_FUNCTIONS)) {
        client[`driver_${func}`] = client[func] // save previous function, we will need `list` at least
        client[func] = UTILITY_FUNCTIONS[func](client)
    }
    if (readOnly) {
        for (const writeFunc of ['write', 'remove', 'writeFile']) {
            client[writeFunc] = async () => {
                logger.warn(`${writeFunc} not supported in readOnly mode`)
                return false
            }
        }
    }
    return client
}

async function connect (driverPath, key, secret, opts, encryption = null) {
    return await mobiletto(driverPath, key, secret, opts, encryption)
}

async function mobiletto (driverPath, key, secret, opts, encryption = null) {
    logger.info(`mobiletto: connecting with driver ${driverPath}`)
    const driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    const client = driver.storageClient(key, secret, opts)
    if (!(await client.testConfig())) {
        const message = `mobiletto(${driverPath}) error: test API call failed`
        logger.error(message)
        throw new MobilettoError(message)
    }
    const readOnly = opts ? !!opts.readOnly : false
    if (encryption === null) {
        logger.info(`mobiletto: successfully connected using driver ${driverPath}, returning client (encryption not enabled)`)
        return addUtilityFunctions(client, readOnly)
    }
    const encKey = normalizeKey(encryption.key)
    if (!encKey) {
        const message = `mobiletto(${driverPath}): invalid encryption key`
        logger.error(message)
        throw new MobilettoError(message)
    }
    const iv = normalizeIV(encryption.iv, encKey)
    if (!iv) {
        const message = `mobiletto(${driverPath}): invalid encryption IV`
        logger.error(message)
        throw new MobilettoError(message)
    }
    const enc = {
        key: encKey,
        iv,
        algo: encryption.algo || DEFAULT_CRYPT_ALGO,
        dirLevels: encryption.dirLevels || 4,
        encPathPadding: () => ENC_PAD_SEP + randomstring.generate(1 + Math.floor(2*Math.random()))
    }
    function encryptPath (path) {
        const encrypted = shasum(enc.key + ' ' + path)
        let newPath = ''
        for (let i = 0; i <= enc.dirLevels; i++) {
            if (newPath.length > 0) newPath += '/'
            newPath += encrypted.substring(i*2, (i*2)+2)
        }
        return newPath + encrypted
    }
    const metaPath = path => encryptPath(path + ' ~ META')
    const direntDir = dir => encryptPath(dir + DIR_ENT_DIR_SUFFIX)
    const direntFile = (dirent, path) => dirent + '/' + shasum(DIR_ENT_FILE_PREFIX + ' ' + path)

    const _metadata = (client) => async (path) => {
        const cache = redis.scopedCache('_metadata')
        const cached = cache ? await cache.get(path) : null
        if (cached) {
            return cached
        }
        let metaObj
        try {
            let chunks = []
            await client.read(metaPath(path), reader(chunks))
            metaObj = JSON.parse(decrypt(Buffer.concat(chunks).toString(), enc))
        } catch (e) {
            metaObj = {}
        }
        let meta
        try {
            meta = await client.metadata(encryptPath(path))
        } catch (e) {
            if (e instanceof MobilettoNotFoundError) {
                const dd = direntDir(path);
                try {
                    meta = await client.metadata(dd)
                } catch (err) {
                    if (err instanceof MobilettoNotFoundError) {
                        const contents = await client.list(dd)
                        if (Array.isArray(contents) && contents.length > 0) {
                            return { name: path, type: M_DIR }
                        } else {
                            throw err
                        }
                    } else {
                        throw err
                    }
                }
            } else {
                throw e
            }
        }
        meta.type ||= M_FILE
        meta.name = path // rewrite name back to plaintext name
        const finalMeta = Object.assign({}, meta, metaObj);
        if (cache) {
            cache.set(path, finalMeta).then(
                () => { logger.debug(`_metadata(${path}) cached meta = ${JSON.stringify(finalMeta)}`) },
                (err) => { logger.error(`_metadata(${path}) error: ${err}`) }
            )
        }
        return finalMeta
    }

    const _loadMeta = async (dirent, entries) => {
        const files = []
        for (const entry of entries) {
            const cipherText = []
            await client.read(dirent + '/' + basename(entry.name), reader(cipherText))
            const plain = decrypt(cipherText.toString(), enc)
            const realPath = plain.split(ENC_PAD_SEP)[0]
            const meta = await _metadata(client)(realPath)
            files.push(meta)
        }
        return files
    }

    async function removeDirentFile(path) {
        const df = direntFile(direntDir(dirname(path)), path);
        const recursive = false
        const quiet = true
        await client.remove(df, recursive, quiet)
        await client.remove(encryptPath(path), recursive, quiet)
        await client.remove(metaPath(path), recursive, quiet)
    }

    function stringGenerator (value, enc) {
        return function* () {
            yield encrypt(value, enc)
        }
    }

    const encClient = {
        list: async (pth = '', recursive, visitor) => {
            const p = pth === '' ? '.' : pth.endsWith('/') ? pth.substring(0, pth.length - 1) : pth
            const dirent = direntDir(p)
            let entries

            const cacheKey = `${p} ~ ${recursive}`
            const cache = visitor ? null : redis.scopedCache('enc_list')
            const cached = cache && await cache.get(cacheKey)

            function cacheAndReturn (thing) {
                if (cache) {
                    cache.set(cacheKey, thing).then(
                        () => { logger.debug(`enc_list: cached ${p} r=${recursive}`) },
                        (err) => { logger.error(`enc_list(${p}) error: ${err}`) }
                    )
                }
                return thing
            }

            if (cached) {
                entries = cached
            } else {
                try {
                    entries = await client.list(dirent, recursive)
                } catch (e) {
                    if (e instanceof MobilettoNotFoundError && p.includes('/')) {
                        // it might be a single file, try listing the parent dir
                        const parentDirent = direntDir(path.dirname(p));
                        entries = await client.list(parentDirent, false)
                        const objects = await _loadMeta(parentDirent, entries)
                        const found = objects.find(o => o.name === p)
                        if (found) {
                            return cacheAndReturn([found])
                        }
                        throw e
                    }
                }
            }
            if (cache) {
                cache.set(cacheKey, entries).then(
                    () => { logger.debug(`enc_list: cached ${p} r=${recursive}`) },
                    (err) => { logger.error(`enc_list(${p}) error: ${err}`) }
                )
            }
            if (!entries || entries.length === 0) {
                return []
            }
            if (visitor) {
                const objects = await _loadMeta(dirent, entries)
                for (const obj of objects) {
                    await visitor(obj)
                }
                return objects
            } else {
                return _loadMeta(dirent, entries)
            }
        },
        metadata: _metadata(client),
        read: async (path, callback) => {
            const realPath = encryptPath(path)
            const cipher = crypt.getDecipher(enc)
            return await client.read(realPath,
                (chunk) => {
                    return callback(cipher.update(chunk))
                }, () => {
                    callback(cipher.final())
                })
        },
        write: async (path, readFunc) => {
            // if encrypting paths, write dirent file(s) for all parent directories
            let p = path
            while (true) {
                const direntGenerator = stringGenerator(p + enc.encPathPadding(), enc)
                const dir = direntDir(dirname(p))
                const df = direntFile(dir, p);
                if (!(await client.write(df, direntGenerator()))) {
                    throw new MobilettoError('write: error writing dirent file')
                }
                p = dirname(p)
                if (p === '.' || p === '') {
                    break
                }
            }

            const cipher = crypt.getCipher(enc)
            const realPath = encryptPath(path)
            let generatorBytes = 0
            const createEncryptStream = (input) =>
                input.pipe(new Transform({
                    transform(chunk, encoding, callback) {
                        generatorBytes += chunk.length
                        this.push(cipher.update(chunk))
                        callback()
                    },
                    flush(callback) {
                        this.push(cipher.final())
                        callback()
                    }
                }))

            // If we were passed a Readable, call write with a transform method
            if (isReadable(readFunc)) {
                await client.write(realPath, createEncryptStream(readFunc))
            } else {
                // If we were passed a generator, wrap it with another generator that encrypts
                function* cryptGenerator(plaintextGenerator) {
                    let chunk = plaintextGenerator.next().value
                    while (chunk) {
                        generatorBytes += chunk.length
                        yield cipher.update(chunk)
                        chunk = plaintextGenerator.next().value
                    }
                    yield cipher.final()
                }
                await client.write(realPath, cryptGenerator(readFunc))
            }
            // write metadata
            const meta = { name: path, size: generatorBytes, type: M_FILE }
            await client.write(metaPath(path), stringGenerator(JSON.stringify(meta), enc)())
            return generatorBytes
        },
        // todo: remove should return an array of the paths that were actually removed
        remove: async (path, options) => {
            const recursive = options === true || (options && options.recursive) || false
            // const quiet = (options && options.quiet) || false
            if (recursive) {
                // ugh. we have to iterate over all dirent files, and remove each file/subdir one by one
                async function recRm (path) {
                    const dirent = direntDir(path)
                    let entries
                    try {
                        entries = await client.list(dirent)
                    } catch (e) {
                        if (!(e instanceof MobilettoNotFoundError)) {
                            throw e instanceof MobilettoError
                                ? e
                                : new MobilettoError('error listing files for recursive deletion', e)
                        }
                    }
                    if (entries && entries.length > 0) {
                        const files = await _loadMeta(dirent, entries)
                        for (const f of files) {
                            await recRm(f.name)
                        }
                    }
                    await removeDirentFile(path);
                }
                await recRm(path)
            }

            // remove the single file/dir
            await removeDirentFile(path);

            // if we were the last dirent file, then also remove dirent directory, and recursively upwards
            let parent = path
            let dirent = direntDir(parent)
            const df = direntFile(dirent, path)
            await client.remove(df, false, true)
            while (true) {
                try {
                    const entries = await client.list(dirent)
                    if (entries.length === 0) {
                        await removeDirentFile(parent)
                    }
                } catch (e) {
                    if (!(e instanceof MobilettoNotFoundError)) {
                        throw e
                    }
                }
                if (parent === '.' || parent === '/') {
                    // do not remove dirent for root dir
                    break
                }
                parent = dirname(parent)
                dirent = direntDir(parent)
            }
            return true
        }
    }
    logger.info(`mobiletto: successfully connected using driver ${driverPath}, returning client (encryption enabled)`)
    return addUtilityFunctions(encClient, readOnly)
}

async function readStream(stream, callback, endCallback) {
    const counter = {count: 0}
    const streamHandler = stream =>
        new Promise((resolve, reject) => {
            stream.on('data', (data) => {
                counter.count += data ? data.length : 0
                callback(data)
            })
            stream.on('error', reject)
            stream.on('end', () => {
                if (endCallback) {
                    endCallback()
                }
                resolve()
            })
        })
    await streamHandler(stream)
    return counter.count
}

function writeStream (stream) {
    return (chunk) => {
        if (chunk) {
            stream.write(chunk, (err) => {
                if (err) {
                    logger.error(`writeStream: error writing: ${err}`)
                    throw err
                }
            })
        }
    }
}

function closeStream (stream) {
    return () => stream.close((err) => {
        if (err) {
            logger.error(`closeStream: error closing: ${err}`)
            throw err
        }
    })
}

const M_FILE = 'file'
const M_DIR = 'dir'
const M_LINK = 'link'
const M_SPECIAL = 'special'

module.exports = {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    isAsyncGenerator, isReadable,
    mobiletto, connect,
    MobilettoError, MobilettoNotFoundError,
    readStream, writeStream, closeStream
}
