const Redis = require('ioredis')
const generators = require('redis-async-gen')
const { logger } = require('./logger')
const LRU = require("lru-cache");

const { DEFAULT_REDIS_OPTIONS } = require('ioredis/built/redis/RedisOptions')
const REDIS_HOST = process.env.MOBILETTO_REDIS_HOST || '127.0.0.1'
const REDIS_PORT = process.env.MOBILETTO_REDIS_PORT || 6379
const REDIS_PREFIX = process.env.MOBILETTO_REDIS_PREFIX || '_mobiletto__'

const prefix = key => REDIS_PREFIX + key
const unprefix = key => key && key.startsWith(REDIS_PREFIX) ? key.substring(REDIS_PREFIX.length) : key

const NO_REDIS = { redis: 'not-found'}

let REDIS_CLIENT = null

const getRedis = () => {
    if (REDIS_CLIENT === null) {
        try {
            REDIS_CLIENT = new Redis(Object.assign({}, DEFAULT_REDIS_OPTIONS, {
                host: REDIS_HOST,
                port: REDIS_PORT
            }))
            flushMobiletto().then(
                () => { logger.info(`getRedis: successfully flushed`) },
                (e) => { logger.error(`getRedis: error flushing: ${e}`) }
            )
        } catch (e) {
            logger.error(`getRedis(host=${REDIS_HOST}, port=${REDIS_PORT}) connection error: ${e}`)
            REDIS_CLIENT = NO_REDIS
        }
    }
    return REDIS_CLIENT
}

const DEFAULT_EXPIRATION_MILLIS = 1000 * 60 * 60 * 24 // 1 day

const isNoRedis = r => !r || r === NO_REDIS

const doRedisAsync = async (func, defaultValue = null) => {
    const redis = getRedis()
    return isNoRedis(redis) ? defaultValue : await func(redis)
}

const doRedis = (func, defaultValue = null) => {
    const redis = getRedis()
    return isNoRedis(redis) ? defaultValue : func(redis)
}

function get (key) {
    return doRedis(r => r.get(prefix(key)), null)
}

async function set (key, val, expirationMillis = DEFAULT_EXPIRATION_MILLIS) {
    return await doRedisAsync(r => r.set(prefix(key), val, 'EX', expirationMillis / 1000))
}

async function sadd (key, val) {
    return await doRedisAsync(r => r.sadd(prefix(key), val))
}

async function expire (key, expirationMillis) {
    return await doRedisAsync(r => r.expire(prefix(key), expirationMillis / 1000))
}

function smembers (key) {
    return doRedis(r => r.smembers(prefix(key)), [])
}

async function del (key) {
    return await doRedisAsync(r => r.del(prefix(key)))
}

async function flushall () {
    return await doRedisAsync(r => r.flushall())
}

async function findMatchingKeys (pattern) {
    const redis = getRedis();
    if (isNoRedis(redis)) {
        return []
    }
    const { keysMatching } = generators.using(redis)
    const keys = []
    for await (const key of keysMatching(prefix(pattern))) {
        keys.push(unprefix(key))
    }
    return keys
}

async function removeMatchingKeys (pattern) {
    return await applyToMatchingKeys(pattern, del)
}

async function applyToMatchingKeys (pattern, asyncFunc) {
    const redis = getRedis();
    if (isNoRedis(redis)) {
        return []
    }
    const { keysMatching } = generators.using(redis)
    const results = []
    for await (const key of keysMatching(prefix(pattern))) {
        results.push(await asyncFunc(unprefix(key)))
    }
    return results
}

const CACHES = {}

const flushMobiletto = async (redis = getRedis()) => {
    return redis ? await removeMatchingKeys('*') : null
}

const scopedCache = (name, size = 100) => {
    if (CACHES[name]) {
        return CACHES[name]
    }
    const redis = getRedis()
    if (isNoRedis(redis)) {
        return size && size > 0 ? new LRU({ max: size }) : null
    }
    const realKey = k => k ? `${name}_${k}` : null
    const cache = {
        get: async key => {
            const val = await get(realKey(key))
            if (!val) return null
            try {
                return JSON.parse(val)
            } catch (e) {
                logger.warn(`get(${key}) error: ${e}`)
                return null
            }
        },
        set: async (key, value) => {
            if (key && value) {
                try {
                    await set(realKey(key), JSON.stringify(value))
                } catch (e) {
                    logger.warn(`set(${key}) error: ${e}`)
                }
            }
        }
    }
    CACHES[name] = cache
    return cache
}

teardown = () => {
    const redis = getRedis()
    if (redis) {
        redis.disconnect()
    }
}

module.exports = {
    get,
    set,
    del,
    expire,
    sadd,
    smembers,
    flushall,
    findMatchingKeys,
    removeMatchingKeys,
    applyToMatchingKeys,
    scopedCache,
    flushMobiletto,
    teardown
}
