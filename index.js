// adapted from https://stackoverflow.com/a/27724419
function MobilettoError (message) {
    this.message = `${message}`
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

async function mobiletto (driverPath, key, secret, opts) {
    const driver = require(driverPath.includes('/') ? driverPath : `./drivers/${driverPath}/index.js`)
    const client = driver.storageClient(key, secret, opts)
    if (!(await client.testConfig())) {
        throw new MobilettoError(`mobiletti(${driverPath}) error: test API call failed`)
    }
    return client
}

function writeStream (stream) {
    return (chunk) => {
        if (chunk) {
            stream.write(chunk, (err) => {
                if (err) {
                    console.log(`writeStream: error writing to ${file}: ${err}`)
                    throw err
                }
            })
        }
    }
}

function closeStream (stream) {
    return () => stream.close((err) => {
        if (err) {
            console.log(`closeStream: error closing file ${file}: ${err}`)
            throw err
        }
    })
}

function readCloseHandler (promise, closeHandler) {
    return () => {
        if (closeHandler) {
            closeHandler()
        }
        promise.resolve()
    }
}

const M_FILE = 'file'
const M_DIR = 'dir'
const M_LINK = 'link'
const M_SPECIAL = 'special'

module.exports = {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    mobiletto,
    MobilettoError, MobilettoNotFoundError,
    writeStream, closeStream, readCloseHandler
}

