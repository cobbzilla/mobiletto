const crypt = require('./util/crypt')
const {DEFAULT_CRYPT_ALGO, normalizeKey, normalizeIV} = require("./util/crypt");

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

async function mobiletto (driverPath, key, secret, opts, encryption = null) {
    const driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    const client = driver.storageClient(key, secret, opts)
    if (!(await client.testConfig())) {
        throw new MobilettoError(`mobiletto(${driverPath}) error: test API call failed`)
    }
    if (encryption === null) {
        return client
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
        algo: encryption.algo || DEFAULT_CRYPT_ALGO
    }
    return {
        list: async (path) => client.list(path),
        metadata: async (path) => client.metadata(path),
        read: async (path, callback) => {
            const cipher = crypt.startDecryptStream(enc)
            return client.read(path,
                (chunk) => {
                    return callback(crypt.updateCryptStream(cipher, chunk))
                }, () => {
                    return callback(crypt.closeCryptStream(cipher))
                })
        },
        write: async (path, readFunc) => {
            function* cryptGenerator(plaintextGenerator) {
                let chunk = plaintextGenerator.next().value
                while (chunk) {
                    yield cipher.update(chunk)
                    chunk = plaintextGenerator.next().value
                }
                yield cipher.final()
            }
            const cipher = crypt.startEncryptStream(enc)
            return client.write(path, cryptGenerator(readFunc))
        },
        remove: async (path, options) => {
            const recursive = (options && options.recursive) || false
            const quiet = (options && options.quiet) || false
            return client.remove(path, {recursive, quiet})
        }
    }
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
                    console.log(`writeStream: error writing: ${err}`)
                    throw err
                }
            })
        }
    }
}

function closeStream (stream) {
    return () => stream.close((err) => {
        if (err) {
            console.log(`closeStream: error closing: ${err}`)
            throw err
        }
    })
}

async function streamReader (stream, callback, endCallback) {
    let count = 0
    const streamHandler = async (stream) => {
        new Promise((resolve, reject) => {
            stream.on('data', (data) => {
                count += data ? data.length : 0
                callback(data)
            })
            stream.on('error', reject)
            stream.on('end', (resolve) => {
                if (typeof endCallback === 'function') {
                    const endData = endCallback()
                    if (endData) {
                        count += endData.length
                        callback(endData)
                    }
                }
                resolve()
            })
        })
    }
    await streamHandler(stream).then(() => {
        // console.log('streamHandler ended')
    })
    return count
}

const M_FILE = 'file'
const M_DIR = 'dir'
const M_LINK = 'link'
const M_SPECIAL = 'special'

module.exports = {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    mobiletto,
    MobilettoError, MobilettoNotFoundError,
    readStream, writeStream, closeStream, streamReader
}
