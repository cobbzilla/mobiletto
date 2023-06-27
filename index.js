const { registerDriver } = require('mobiletto-base')

const registerDrivers = () => {
    registerDriver('local', require('mobiletto-driver-local'))
    registerDriver('s3', require('mobiletto-driver-s3'))
    registerDriver('b2', require('mobiletto-driver-b2'))
    registerDriver('indexeddb', require('mobiletto-driver-indexeddb'))
}

module.exports = { registerDrivers }
