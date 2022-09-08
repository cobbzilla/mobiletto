const winston = require('winston')

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    level: process.env.MOBILETTO_LOG_LEVEL || 'error',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf((info) => {
            return `${info.timestamp} [${info.level.toUpperCase()}] ${info.message}`
        })),
    transports: process.env.MOBILETTO_LOG_FILE
        ? [ new winston.transports.File({ filename: process.env.MOBILETTO_LOG_FILE }) ]
        : [ new winston.transports.Console({ stderrLevels: Object.keys(winston.config.npm.levels) }) ]
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
