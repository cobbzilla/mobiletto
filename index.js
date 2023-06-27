const {
    registerDriver, mobiletto, connect,
    redis, closeRedis
} = require('mobiletto-base')

const {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    MobilettoError, MobilettoNotFoundError,
    logger, setLogLevel
} = require('mobiletto-common')

const registerDrivers = () => {
    registerDriver('local', require('mobiletto-driver-local'))
    registerDriver('s3', require('mobiletto-driver-s3'))
    registerDriver('b2', require('mobiletto-driver-b2'))
    registerDriver('indexeddb', require('mobiletto-driver-indexeddb'))
}

module.exports = {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    MobilettoError, MobilettoNotFoundError,
    logger, setLogLevel,
    registerDrivers,
    registerDriver,
    mobiletto,
    connect,
    redis,
    closeRedis
}
