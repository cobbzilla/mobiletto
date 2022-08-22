const { basename, dirname } = require('path')
const shasum = require('shasum')
const randomstring = require('randomstring')

const crypt = require('./util/crypt')
const {DEFAULT_CRYPT_ALGO, normalizeKey, normalizeIV, encrypt, decrypt} = require("./util/crypt");

const DIR_ENT_DIR_SUFFIX = '__.dirent'
const DIR_ENT_FILE_PREFIX = 'dirent__'
const ENC_PAD_SEP = ' ~ '

// adapted from https://stackoverflow.com/a/27724419
function MobilettoError (message, err) {
    this.message = `${message}`
    this.err = err
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
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
        this.stack = (new Error(this.message)).stack
    }
}

const reader = (chunks) => (chunk) => { if (chunk) { chunks.push(chunk) } }

const UTILITY_FUNCTIONS = {
    readFile: (client) => async (path) => {
        const chunks = []
        await client.read(path, reader(chunks))
        return Buffer.concat(chunks)
    },
    writeFile: (client) => async (path, data) => {
        const readFunc = function* () { yield data }
        return await client.write(path, readFunc)
    }
}

function addUtilityFunctions (client, readOnly = false) {
    for (const func of Object.keys(UTILITY_FUNCTIONS)) {
        client[func] = UTILITY_FUNCTIONS[func](client)
    }
    if (readOnly) {
        for (const writeFunc of ['write', 'remove', 'writeFile']) {
            client[writeFunc] = async () => {
                // console.warn(`${writeFunc} not supported in readOnly mode`)
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
    const driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    const client = driver.storageClient(key, secret, opts)
    if (!(await client.testConfig())) {
        throw new MobilettoError(`mobiletto(${driverPath}) error: test API call failed`)
    }
    const readOnly = opts ? !!opts.readOnly : false
    if (encryption === null) {
        return addUtilityFunctions(client, readOnly)
    }
    const encKey = normalizeKey(encryption.key)
    if (!encKey) {
        throw new MobilettoError(`mobiletto(${driverPath}): invalid encryption key`)
    }
    const iv = normalizeIV(encryption.iv, encKey)
    if (!iv) {
        throw new MobilettoError(`mobiletto(${driverPath}): invalid encryption IV`)
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
        meta.name = path // rewrite name back to plaintext name
        return Object.assign({}, meta, metaObj)
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
        await client.remove(df, {recursive: false, quiet: true})
        await client.remove(encryptPath(path), {recursive: false, quiet: true})
        await client.remove(metaPath(path), {recursive: false, quiet: true})
    }

    function stringGenerator (value, enc) {
        return function* () {
            yield encrypt(value, enc)
        }
    }

    const encClient = {
        list: async (path) => {
            const dirent = direntDir(path)
            const entries = await client.list(dirent)
            if (!entries || entries.length === 0) {
                return []
            }
            return _loadMeta(dirent, entries)
        },
        metadata: _metadata(client),
        read: async (path, callback) => {
            const realPath = encryptPath(path)
            const cipher = crypt.startDecryptStream(enc)
            return client.read(realPath,
                (chunk) => {
                    return callback(crypt.updateCryptStream(cipher, chunk))
                }, () => {
                    return callback(crypt.closeCryptStream(cipher))
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

            let bytesRead = 0
            function* cryptGenerator(plaintextGenerator) {
                let chunk = plaintextGenerator.next().value
                while (chunk) {
                    bytesRead += chunk.length
                    yield cipher.update(chunk)
                    chunk = plaintextGenerator.next().value
                }
                yield cipher.final()
            }
            const cipher = crypt.startEncryptStream(enc)
            const realPath = encryptPath(path)
            await client.write(realPath, cryptGenerator(readFunc))
            await client.write(metaPath(path), stringGenerator(JSON.stringify({ size: bytesRead }), enc)())
            return bytesRead
        },
        remove: async (path, options) => {
            const recursive = (options && options.recursive) || false
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
            await client.remove(df, {recursive: false, quiet: true})
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
                    console.error(`writeStream: error writing: ${err}`)
                    throw err
                }
            })
        }
    }
}

function closeStream (stream) {
    return () => stream.close((err) => {
        if (err) {
            console.error(`closeStream: error closing: ${err}`)
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
    mobiletto, connect,
    MobilettoError, MobilettoNotFoundError,
    readStream, writeStream, closeStream
}
