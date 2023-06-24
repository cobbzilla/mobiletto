const Redis = require('ioredis')
const redisScan = require('node-redis-scan')
const { logger } = require('mobiletto-common')
const LRU = require('lru-cache')

const { DEFAULT_REDIS_OPTIONS } = require('ioredis/built/redis/RedisOptions')

let REDIS_CLIENTS = {}

const getRedis = (name, host, port, prefix) => {
    if (typeof REDIS_CLIENTS[name] === 'undefined') {
        REDIS_CLIENTS[name] = new MobilettoCache(name, host, port, prefix + name + '_')
    }
    return REDIS_CLIENTS[name]
}

const DEFAULT_EXPIRATION_MILLIS = 1000 * 60 * 60 * 24 // 1 day

const ZERO_COUNTERS = {
    get: 0,
    set: 0,
    del: 0,
    flush: 0,
    hit: 0,
    miss: 0
}

class MobilettoCache {
    name
    redis
    scanner
    prefix
    scopedCaches = {}
    counters = Object.assign({}, ZERO_COUNTERS)
    printStatsInterval = 1000
    constructor(name,
                host = '127.0.0.1',
                port = 6379,
                prefix = '_mobiletto__') {
        this.name = name
        if (host && port) {
            try {
                this.redis = new Redis(Object.assign({}, DEFAULT_REDIS_OPTIONS, {host, port}))
            } catch (e) {
                logger.error(`redis(${name}) error connecting to redis, using fallback LRU for scoped caches: ${e}`)
                this.redis = null
            }
        } else {
            logger.warn(`redis(${name}) no host or port provided, using fallback LRU for scoped caches`)
            this.redis = null
        }
        this.prefix = prefix
        if (this.redis) {
            // test connection by flushing
            this.scanner = new redisScan(this.redis)
            this.flush()
                .then(() => { logger.debug(`redis(${name}) successfully flushed`) })
                .catch((e) => {
                    logger.warn(`redis(${name}) error flushing: ${e}, disabling redis`)
                    this.redis = null
                })
        }
    }

    stats = () => this.counters
    resetStats = () => { this.counters = Object.assign({}, ZERO_COUNTERS) }
    hitRate = () => this.counters.get === 0 ? 0 : (100 * this.counters.hit) / this.counters.get
    toString = () => `MobilettoCache(${this.name}) [${this.counters.hit}/${this.counters.get} = ${this.hitRate()}% hit] stats=${JSON.stringify(this.counters)}`

    pfx = key => key.startsWith(this.prefix) ? key : this.prefix + key
    unprefix = key => key && key.startsWith(this.prefix) ? key.substring(this.prefix.length) : key

    doRedisAsync = async (func, defaultValue = null) => {
        try {
            return this.redis ? await func(this.redis) : defaultValue
        } catch (e) {
            logger.warn(`redis(${this.name}) doRedisAsync(${func}) ${e} (returning default value: ${defaultValue})`)
            return defaultValue
        }
    }

    doRedis = (func, defaultValue = null) => {
        try {
            return this.redis ? func(this.redis) : defaultValue
        } catch (e) {
            logger.warn(`redis(${this.name}) doRedis(${func}) ${e} (returning default value: ${defaultValue})`)
            return defaultValue
        }
    }

    get = async key => {
        this.counters.get++
        logger.silly(`redis(${this.name}) get(${key}) starting`)
        const val = await this.doRedis(r => r.get(this.pfx(key)), null)
        logger.silly(`redis(${this.name}) get(${key}) found value: ${val}`)
        if (val) {
            this.counters.hit++
        } else {
            this.counters.miss++
        }
        if (this.printStatsInterval && this.printStatsInterval > 0 && this.counters.get % this.printStatsInterval === 0) {
            const message = `${new Date()}: ${this}`
            logger.info(message)
        }
        return val
    }

    set = async (key, val, expirationMillis = DEFAULT_EXPIRATION_MILLIS) => {
        this.counters.set++
        logger.silly(`redis(${this.name}) set(${key}, ${val}, ${expirationMillis}) starting`)
        await this.doRedisAsync(r => r.set(this.pfx(key), val, 'EX', expirationMillis / 1000))
        logger.silly(`redis(${this.name}) set(${key}, ${val}, ${expirationMillis}) finished`)
    }

    del = async key => {
        this.counters.del++
        await this.doRedisAsync(r => r.del(this.pfx(key)))
    }

    findMatchingKeys = async (pattern) => {
        return await new Promise((resolve, reject) => {
            this.scanner.scan(this.pfx(pattern), (err, matchingKeys) => {
                if (err) reject(err)
                resolve(matchingKeys)
            })
        })
    }

    applyToMatchingKeys = async (pattern, asyncFunc) => {
        const results = []
        let keyMatchCount = 0
        const logPrefix = `applyToMatchingKeys(${pattern}, ${asyncFunc && asyncFunc.name ? asyncFunc.name : 'nameless function'})`
        const start = Date.now()
        return await new Promise((resolve, reject) => {
            this.scanner.eachScan(this.pfx(pattern), {}, async (matchingKeys) => {
                if (!matchingKeys || typeof matchingKeys.length !== 'number') {
                    const message = `${logPrefix}: eachScan received invalid matchingKeys = ${typeof matchingKeys !== 'undefined' ? matchingKeys : 'undefined'}`
                    logger.error(message)
                    reject(message)
                } else {
                    keyMatchCount += matchingKeys.length
                }
                for (const key of matchingKeys) {
                    asyncFunc(key)
                        .then((val) => {
                            if (typeof val !== 'undefined') {
                                logger.silly(`${logPrefix} found key ${key} = ${val}`)
                                results.push(val)
                            } else {
                                logger.silly(`${logPrefix} found key with undefined value: ${key}`)
                            }
                        })
                        .catch((e) => {
                            const message = `${logPrefix} error with key ${key}: ${e}`
                            logger.error(message)
                            reject(message)
                        })
                }
            }, (err, matchCount) => {
                if (err) {
                    logger.error(`${logPrefix} error in final callback: ${err}`)
                    reject(err)
                }
                const duration = Date.now() - start
                logger.debug(`${logPrefix} resolving with matchCount=${matchCount}, keyMatchCount=${keyMatchCount}, results.length=${results.length}, duration ${duration/1000} seconds`)
                resolve(results)
            })
        })
    }

    removeMatchingKeys = async pattern => await this.applyToMatchingKeys(pattern, this.del)

    flush = async () => {
        this.counters.flush++
        await this.removeMatchingKeys('*')
    }

    scopedCache = (name, size = 100) => {
        if (this.scopedCaches[name]) {
            return this.scopedCaches[name]
        }
        if (!this.redis) {
            return size && size > 0 ? new LRU({ max: size }) : null
        }
        const realKey = k => k ? `${name}_${k}` : null
        const cache = {
            get: async key => {
                const val = await this.get(realKey(key))
                if (!val) return null
                try {
                    return JSON.parse(val)
                } catch (e) {
                    logger.warn(`redis(${this.name}) get(${key}) error: ${e}`)
                    return null
                }
            },
            set: async (key, value) => {
                if (key && value) {
                    try {
                        await this.set(realKey(key), JSON.stringify(value))
                    } catch (e) {
                        logger.warn(`redis(${this.name}) set(${key}) error: ${e}`)
                    }
                }
            }
        }
        this.scopedCaches[name] = cache
        return cache
    }
}

const forAllCaches = async (func) => {
    const promises = []
    for (const name of Object.keys(REDIS_CLIENTS)) {
        promises.push(func(REDIS_CLIENTS[name]))
    }
    return Promise.all(promises)
}

const teardown = async () => await forAllCaches((client) => {
    try {
        if (client.redis) {
            client.redis.disconnect()
            client.redis = null
        }
    } catch (e) {
        logger.warn(`teardown: error disconnecting from redis(${client.name}) ${e}`)
    }
})

const flushAll = async () => await forAllCaches(client => client.flush())

module.exports = { getRedis, flushAll, teardown }
