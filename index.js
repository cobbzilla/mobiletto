const crypt = require('./util/crypt')

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

async function mobiletto (driverPath, key, secret, opts, encryptionKey = null, encryptionIV = null) {
    const driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    const client = driver.storageClient(key, secret, opts)
    if (!(await client.testConfig())) {
        throw new MobilettoError(`mobiletti(${driverPath}) error: test API call failed`)
    }
    return encryptionKey === null
        ? client
        : {
            list: async (path) => client.list(path),
            metadata: async (path) => client.metadata(path),
            read: async (path, callback) => {
                const cipher = crypt.startDecryptStream(encryptionKey, encryptionIV)
                return client.read(path, (chunk) => {
                    return callback(crypt.updateCryptStream(cipher, chunk))
                }, () => {
                    return crypt.closeCryptStream(cipher)
                })
            },
            write: async (path, readFunc) => {
                function* cryptGenerator(plaintextGenerator) {
                    let chunk = plaintextGenerator.next().value
                    while (chunk) {
                        cipher.update(chunk)
                    }
                    cipher.final()
                }
                const cipher = crypt.startEncryptStream(encryptionKey, encryptionIV)
                return client.write(path, cryptGenerator(readFunc))
            },
            remove: async (path, {recursive = false, quiet = false}) =>
                client.remove(path, { recursive, quiet })
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
                    const data = endCallback()
                    if (data) {
                        callback(data)
                    }
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
            stream.on('end', () => {
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
        console.log('streamhandler ended')
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
