const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.MOBILETTO_LOG_LEVEL || 'debug',
    format: winston.format.simple(),
    transports: process.env.MOBILETTO_LOG_FILE
        ? [ new winston.transports.File({ filename: process.env.MOBILETTO_LOG_FILE }) ]
        : [ new winston.transports.Console() ]
})

const setLogLevel = (level) => { logger.level = level }

const setLogTransports = (transports) => {
    logger.transports.splice(0, logger.transports.length)
    logger.transports.push(...transports)
}

module.exports = {
    logger,
    setLogLevel,
    setLogTransports
}
