// adapted from https://stackoverflow.com/a/64136185
const crypto = require('crypto')
const shasum = require('shasum')

const WARN_PLAINTEXT = !process.env.IGNORE_DISABLED_ENCRYPTION
const MIN_KEY_LEN = 16
const DEFAULT_CRYPT_ALGO = 'aes-256-cbc';

function normalizeKey (k) {
    return (typeof k === 'string' && k.trim().length > MIN_KEY_LEN)
        ? Buffer.from(shasum(k.trim())).subarray(0, 32)
        : null
}

function normalizeIV (iv, key) {
    return (typeof iv === 'string' && iv.trim().length >= 16)
        ? Buffer.from(shasum(iv.trim())).subarray(0, 16)
        : key
            ? Buffer.from(shasum(key)).subarray(0, 16)
            : null
}

// ensure key long enough for security, and is 32 bytes for AES-256
let KEY = null
function setDefaultKey (key) {
    KEY = normalizeKey(key)
}

// ensure IV is 16 bytes for AES-256
let CRYPTO_IV = null
function setDefaultIV (iv) {
    CRYPTO_IV = normalizeIV(iv, KEY)
}

function getCipher(enc) {
    try {
        let c = crypto.createCipheriv(enc.algo, enc.key, enc.iv);
        c.setAutoPadding(true)
        return c
    } catch (e) {
        throw e
    }
}

function encrypt (plainText, encryption, outputEncoding = 'base64') {
    if (!encryption || !encryption.key) {
        if (WARN_PLAINTEXT) {
            console.warn(` ****** encryption.key is undefined, encryption is DISABLED`)
        }
        return plainText
    }
    const cipher = getCipher(encryption)
    const encoded = Buffer.concat([cipher.update(plainText), cipher.final()])
    return encoded.toString(outputEncoding)
}

function getDecipher(enc) {
    let c = crypto.createDecipheriv(enc.algo, enc.key, enc.iv);
    c.setAutoPadding(true)
    return c
}

function decrypt (cipherText, encryption, outputEncoding = 'utf8', inputEncoding = 'base64') {
    if (!encryption || !encryption.key) {
        return cipherText
    }
    const cipher = getDecipher(encryption)
    const data = Buffer.from(cipherText, inputEncoding)
    return Buffer.concat([cipher.update(data), cipher.final()]).toString(outputEncoding)
}

module.exports = {
    DEFAULT_CRYPT_ALGO,
    setDefaultKey, setDefaultIV,
    encrypt, decrypt,
    normalizeKey, normalizeIV,
    getCipher, getDecipher
}
