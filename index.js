const fs = require('fs')
const { Transform } = require('stream')
const Queue = require('bull')

const {
    M_FILE, M_DIR, isReadable, logger,
    MobilettoError, MobilettoNotFoundError
} = require('mobiletto-common')

const redis = require('./util/redis');
const { getRedis, teardown } = redis
const { basename, dirname } = require('path')
const shasum = require('shasum')
const randomstring = require('randomstring')

const crypt = require('./util/crypt')
const {DEFAULT_CRYPT_ALGO, normalizeKey, normalizeIV, encrypt, decrypt} = require("./util/crypt")
const LRU = require('lru-cache')

const DIR_ENT_DIR_SUFFIX = '__.dirent'
const DIR_ENT_FILE_PREFIX = 'dirent__'
const ENC_PAD_SEP = ' ~ '

const initMobilettoTempDir = () => {
    const dir = process.env.MOBILETTO_TMP || process.env.TMPDIR || '/tmp'
    return dir.endsWith('/') ? dir.substring(0, dir.length - 1) : dir
}
const MOBILETTO_TMP = initMobilettoTempDir()

const REDIS_HOST = process.env.MOBILETTO_REDIS_HOST || '127.0.0.1'
const REDIS_PORT = process.env.MOBILETTO_REDIS_PORT || 6379
const REDIS_PREFIX = process.env.MOBILETTO_REDIS_PREFIX || '_mobiletto__'

const reader = (chunks) => (chunk) => { if (chunk) { chunks.push(chunk) } }

const READ_FILE_CACHE_SIZE_THRESHOLD = 128 * 1024 // we can cache files of this size

class AwaitableLRU {
    lru
    constructor(size) {
        this.lru = new LRU({ max: size })
    }
    get = key => Promise.resolve(this.lru.get(key))
    set = (key, value) => Promise.resolve(this.lru.set(key, value))
}

const CACHE_FUNCTIONS = {
    redis: client => () => {
        if (typeof client.cache !== 'undefined') return client.cache
        const redisConfig = client.redisConfig || {}
        const enabled = redisConfig.enabled !== false
        if (!enabled) {
            logger.info(`redis: client.redisConfig.enabled === false, disabling cache`)
            client.cache = null
            return client.cache
        }
        const host = redisConfig.host || REDIS_HOST
        const port = redisConfig.port || REDIS_PORT
        const prefix = redisConfig.prefix || REDIS_PREFIX
        if (!client.id) {
            logger.warn(`redis: all nameless connections will share one cache`)
            client.cache = getRedis('~nameless~', host, port, prefix)
        } else {
            client.cache = getRedis(client.id, host, port, prefix)
        }
        return client.cache
    },
    scopedCache: client => (cacheName, size = 100) => {
        const redis = client.redis()
        return redis ? redis.scopedCache(cacheName, size) : new AwaitableLRU(size)
    },
    flush: client => async () => {
        const redis = client.redis()
        return redis ? redis.flush() : true
    }
}

// noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
const UTILITY_FUNCTIONS = {
    list: client => async (path, opts) => {
        const cache = client.scopedCache('list')
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
    safeList: client => async (path, opts) => {
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
    metadata: client => async (path) => {
        const cache = client.scopedCache('metadata')
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
    safeMetadata: client => async (path) => {
        try {
            return await client.metadata(path)
        } catch (e) {
            if (e instanceof MobilettoNotFoundError) {
                return null
            }
            throw e
        }
    },
    remove: client => async (path, opts) => {
        const recursive = opts && opts.recursive ? opts.recursive : false
        // noinspection JSUnresolvedVariable
        const quiet = opts && opts.quiet ? opts.quiet : false
        // noinspection JSUnresolvedFunction
        const result = await client.driver_remove(path, recursive, quiet)
        await client.flush()
        return result
    },
    readFile: client => async (path) => {
        const cache = client.scopedCache('readFile')
        const cached = cache ? await cache.get(path) : null
        if (cached) {
            return Buffer.from(cached, 'base64')
        }
        const chunks = []
        await client.read(path, reader(chunks))
        const data = Buffer.concat(chunks);
        if (cache && data.length < READ_FILE_CACHE_SIZE_THRESHOLD) {
            const setVal = cache.set(path, data.toString('base64')) // redis returns promise, LRU does not
            if (setVal instanceof Promise) {
                setVal.then(
                    () => { logger.debug(`readFile(${path}) cached ${data.length} bytes`) },
                    (err) => { logger.error(`readFile(${path}) error: ${err}`) }
                )
            }
        }
        return data
    },
    safeReadFile: client => async (path) => {
        try {
            return await client.readFile(path)
        } catch (e) {
            logger.info(`safeReadFile(${path}) ${e}`)
            return null
        }
    },
    write: client => async (path, data) => {
        logger.debug(`util.write(${path}) starting ...`)
        const p = path.startsWith('/') ? path.substring(1) : path
        if (p !== path) {
            logger.debug(`util.write(${path}) removed leading ${this.delimiter}`)
        }
        // noinspection JSUnresolvedFunction
        const bytesWritten = await client.driver_write(p, data)
        await client.flush()
        logger.debug(`util.write(${p}) wrote ${bytesWritten} bytes`)
        return bytesWritten
    },
    writeFile: client => async (path, data) => {
        const readFunc = function* () { yield data }
        return await client.write(path, readFunc())
    },
    mirror: client => async (source, clientPath = '', sourcePath = '') => {
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
                const destFullPath = (clientPath.endsWith('/') ? clientPath : clientPath + '/') +
                    (destName.startsWith('/') ? destName.substring(1) : destName)
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

function utilityFunctionConflict (client, func) {
    if (typeof client[func] === 'function') {
        if (typeof client[`driver_${func}`] !== 'undefined') {
            logger.warn(`utilityFunctionConflict: driver_${func} has already been added`)
            return false
        } else {
            client[`driver_${func}`] = client[func] // save original driver function
            return true
        }
    } else if (typeof client[func] !== 'undefined') {
        throw new MobilettoError(`utilityFunctionConflict: client defines a property ${func}, mobiletto function would overwrite`)
    }
}

const addUtilityFunctions = (client, readOnly = false) => {
    addClientFunctions(client, UTILITY_FUNCTIONS, utilityFunctionConflict)
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

const addCacheFunctions = client => addClientFunctions(client, CACHE_FUNCTIONS, (client, func) => {
    logger.warn(`addCacheFunctions: ${func} already exists, not re-adding`)
    return false
})

const addClientFunctions = (client, functions, conflictFunc) => {
    for (const func of Object.keys(functions)) {
        let add = true
        if (client[func]) {
            add = conflictFunc ? conflictFunc(client, func) : false
        }
        if (add) {
            client[func] = functions[func](client)
        }
    }
    return client
}

async function connect (driverPath, key, secret, opts, encryption = null) {
    return await mobiletto(driverPath, key, secret, opts, encryption)
}

async function mobiletto (driverPath, key, secret, opts, encryption = null) {
    logger.info(`mobiletto: connecting with driver ${driverPath}`)
    let driver
    if (ALL_DRIVERS[driverPath]) {
        driver = ALL_DRIVERS[driverPath]
    } else {
        driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    }
    const client = driver.storageClient(key, secret, opts)
    const configValue = await client.testConfig();
    if (!configValue) {
        const message = `mobiletto(${driverPath}) error: test API call failed: ${configValue}`
        logger.error(message)
        throw new MobilettoError(message)
    }
    const readOnly = opts ? !!opts.readOnly : false
    client.redisConfig = opts && opts.redisConfig ? opts.redisConfig : {}

    const internalIdForDriver = () =>
        driverPath + '_' + shasum(`${key}\n${JSON.stringify(opts)}\n${(encryption ? JSON.stringify(encryption) : '')}`)

    // If the driver didn't give the client a name, generate a unique internal name
    if (!client.id) {
        client.id = internalIdForDriver()
    }
    if (encryption === null) {
        logger.info(`mobiletto: successfully connected using driver ${driverPath}, returning client (encryption not enabled)`)
        return addUtilityFunctions(addCacheFunctions(client), readOnly)
    }
    const encKey = normalizeKey(encryption.key)
    if (!encKey) {
        const message = `mobiletto(${driverPath}) invalid encryption key`
        logger.error(message)
        throw new MobilettoError(message)
    }
    const iv = normalizeIV(encryption.iv, encKey)
    if (!iv) {
        const message = `mobiletto(${driverPath}) invalid encryption IV`
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

    const outerClient = addCacheFunctions(client)
    const _metadata = client => async (path) => {
        const cache = outerClient.scopedCache('metadata')
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

    const _singleMeta = async (job) => {
        const dirent = job.data.dirent
        const entry = job.data.entry
        const logPrefix = `_singleMeta(${dirent}/${basename(entry.name)})`
        return new Promise((resolve, reject) => {
            const cipherText = []
            client.read(dirent + '/' + basename(entry.name), reader(cipherText))
                .then((bytesRead) => {
                    if (!bytesRead) {
                        logger.warn(`${logPrefix} returned no data`)
                        resolve({})
                    } else {
                        const plain = decrypt(cipherText.toString(), enc)
                        const realPath = plain.split(ENC_PAD_SEP)[0]
                        _metadata(client)(realPath)
                            .then(meta => resolve(meta))
                            .catch((err) => {
                                const message = `${logPrefix} error fetching _metadata: ${err}`
                                logger.warn(message)
                                reject(message)
                            })
                    }
                })
                .catch((err) => {
                    const message = `${logPrefix} error reading file: ${err}`
                    logger.warn(message)
                    reject(message)
                })
        })
    }

    const META_LOAD_QUEUE_NAME = '_loadMetaQueue'
    const META_LOAD_JOB_NAME = '_loadMetaJob'
    const META_LOAD_CONCURRENCY = process.env.MOBILETTO_META_LOAD_CONCURRENCY || 10
    let META_LOAD_QUEUE = null
    const metaLoadQueue = () => {
        if (META_LOAD_QUEUE === null) {
            if (!client.redisConfig) {
                const message = 'metaLoadQueue: redis is required but not enabled'
                logger.error(message)
                throw new MobilettoError(message)
            }
            META_LOAD_QUEUE = new Queue(META_LOAD_QUEUE_NAME, `redis://${client.redisConfig.host || REDIS_HOST}:${client.redisConfig.port || REDIS_PORT}`)
            META_LOAD_QUEUE.mobilettoHandlers = {}
            META_LOAD_QUEUE.mobilettoErrorHandlers = {}
            META_LOAD_QUEUE.process(META_LOAD_JOB_NAME, META_LOAD_CONCURRENCY, _singleMeta)
            META_LOAD_QUEUE.on('completed', function (job, result) {
                logger.info(`${META_LOAD_JOB_NAME} completed with result: ${JSON.stringify(result)}`)
                if (job.data.mobilettoJobID && META_LOAD_QUEUE.mobilettoHandlers[job.data.mobilettoJobID]) {
                    META_LOAD_QUEUE.mobilettoHandlers[job.data.mobilettoJobID](result)
                }
            })
            META_LOAD_QUEUE.on('failed', function (job, result) {
                logger.info(`${META_LOAD_JOB_NAME} failed with result: ${JSON.stringify(result)}`)
                if (job.data.mobilettoJobID && META_LOAD_QUEUE.mobilettoErrorHandlers[job.data.mobilettoJobID]) {
                    META_LOAD_QUEUE.mobilettoErrorHandlers[job.data.mobilettoJobID](result)
                }
            })
        }
        return META_LOAD_QUEUE
    }

    const _loadMeta = async (dirent, entries) => {
        const files = []

        const waitForFiles = (resolve) => {
            if (files.length === entries.length) {
                resolve(files)
            } else {
                setTimeout(() => waitForFiles(resolve), 1000)
            }
        }

        const mobilettoJobID = randomstring.generate(10)
        const mq = metaLoadQueue()
        mq.mobilettoHandlers[mobilettoJobID] = meta => files.push(meta)
        mq.mobilettoErrorHandlers[mobilettoJobID] = err => files.push(err)
        for (const entry of entries) {
            const job = { mobilettoJobID, dirent, entry }
            mq.add(META_LOAD_JOB_NAME, job)
        }
        await new Promise(resolve => waitForFiles(resolve))
        delete mq.mobilettoHandlers[mobilettoJobID]
        delete mq.mobilettoErrorHandlers[mobilettoJobID]
        return files
    }

    async function removeDirentFile(path) {
        const df = direntFile(direntDir(dirname(path)), path);
        const recursive = false
        const quiet = true

        logger.debug(`removeDirentFile(${path}) removing df=${df}`)
        await client.remove(df, recursive, quiet)

        logger.debug(`removeDirentFile(${path}) removing encryptPath(path)=${encryptPath(path)}`)
        await client.remove(encryptPath(path), recursive, quiet)

        logger.debug(`removeDirentFile(${path}) removing metaPath(path)=${metaPath(path)}`)
        await client.remove(metaPath(path), recursive, quiet)
    }

    function stringGenerator (value, enc) {
        return function* () {
            yield encrypt(value, enc)
        }
    }

    // noinspection JSUnusedGlobalSymbols
    const encClient = {
        id: internalIdForDriver(),
        redisConfig: client.redisConfig,
        list: async (pth = '', recursive, visitor) => {
            const p = pth === '' ? '.' : pth.endsWith('/') ? pth.substring(0, pth.length - 1) : pth
            const dirent = direntDir(p)
            let entries

            const cacheKey = `${p} ~ ${recursive}`
            const cache = visitor ? null : client.scopedCache('enc_list')
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

            async function tryParentDirForSingleFile (p, visitor, e) {
                // it might be a single file, try listing the parent dir
                const parentDirent = direntDir(dirname(p))
                entries = await client.list(parentDirent)
                const objects = await _loadMeta(parentDirent, entries)
                const found = objects.find(o => o.name === p)
                if (found) {
                    if (visitor) {
                        await visitor(found)
                    }
                    logger.debug(`tryParentDirForSingleFile(${p}) found ${found.name}`)
                    return cacheAndReturn([found])
                }
                logger.debug(`tryParentDirForSingleFile(${p}) nothing found! e=${e}`)
                throw e === null ? new MobilettoNotFoundError(p) : e
            }

            if (cached) {
                entries = cached
            } else {
                try {
                    entries = await _loadMeta(dirent, await client.list(dirent))
                } catch (e) {
                    if (e instanceof MobilettoNotFoundError) {
                        if (p.includes('/')) {
                            return await tryParentDirForSingleFile(p, visitor, e)
                        }
                        throw e
                    } else {
                        throw new MobilettoError(`encClient.list(${p}) ${e}`, e)
                    }
                }
                if (recursive) {
                    const dirs = entries.filter(obj => obj.type === M_DIR)
                    while (dirs.length > 0) {
                        const dir = dirs.shift()
                        const subdir = direntDir(dir.name)
                        const subdirListing = await client.list(subdir)
                        if (subdirListing && subdirListing.length > 0) {
                            const subdirEntries = await _loadMeta(subdir, subdirListing)
                            if (visitor) {
                                for (const obj of subdirEntries) {
                                    await visitor(obj)
                                }
                            }
                            entries.push(...subdirEntries)
                            const moreDirs = subdirEntries.filter(obj => obj.type === M_DIR)
                            dirs.unshift(...moreDirs)
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
                }
            }
            if (entries.length === 0 && p.includes('/')) {
                return await tryParentDirForSingleFile(p, visitor, null)
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
                for (const obj of entries) {
                    await visitor(obj)
                }
            }
            return entries
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

        remove: async (path, options) => {
            logger.debug(`enc.remove(${path}) starting`)
            const recursive = options === true || (options && options.recursive) || false
            // const quiet = (options && options.quiet) || false
            if (recursive) {
                // ugh. we have to iterate over all dirent files, and remove each file/subdir one by one
                const removed = []
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
                    await removeDirentFile(path)
                    removed.push(path)
                }
                await recRm(path)
                return removed
            }

            // remove the single file/dir
            await removeDirentFile(path)

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
            return path
        }
    }
    logger.info(`mobiletto: successfully connected using driver ${driverPath}, returning client (encryption enabled)`)
    return addUtilityFunctions(addCacheFunctions(encClient), readOnly)
}

const closeRedis = async () => { await teardown() }

const ALL_DRIVERS = {}

function registerDriver (name, driver) {
    if (ALL_DRIVERS[name]) {
        logger.warn(`registerDriver(${name}): driver already registered, not re-registering`)
    } else {
        if (typeof(driver) === 'object' && typeof(driver.storageClient) === 'function') {
            ALL_DRIVERS[name] = driver.storageClient
        } else {
            ALL_DRIVERS[name] = driver
        }
    }
    return ALL_DRIVERS[name]
}

module.exports = {
    registerDriver, mobiletto, connect,
    redis, closeRedis
}
