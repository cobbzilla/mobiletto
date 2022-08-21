// adapted from https://stackoverflow.com/a/64136185
const crypto = require('crypto')
const shasum = require('shasum')

const WARN_PLAINTEXT = !process.env.IGNORE_DISABLED_ENCRYPTION
const MIN_KEY_LEN = 16
const DEFAULT_CRYPT_ALGO = 'aes-256-cbc';

function normalizeKey (k) {
    return (typeof k === 'string' && k.trim().length > MIN_KEY_LEN)
        ? Buffer.from(shasum(k)).subarray(0, 32)
        : null
}

function normalizeIV (iv, key) {
    return (typeof iv === 'string')
        ? Buffer.from(shasum(iv)).subarray(0, 16)
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
    return crypto.createCipheriv(enc.algo, enc.key, enc.iv);
}

function encrypt (plainText, key = KEY, iv = CRYPTO_IV, outputEncoding = 'base64') {
    if (!key) {
        if (WARN_PLAINTEXT) {
            console.warn(` ****** key is undefined, encryption of user-data is DISABLED`)
        }
        return plainText
    }
    const cipher = getCipher(key, iv)
    return Buffer.concat([cipher.update(plainText), cipher.final()]).toString(outputEncoding)
}

function getDecipher(enc) {
    return crypto.createDecipheriv(enc.algo, enc.key, enc.iv);
}

function decrypt (cipherText, key = KEY, iv = CRYPTO_IV, outputEncoding = 'utf8') {
    if (!key) {
        return cipherText
    }
    const cipher = getDecipher(key, iv)
    const data = Buffer.from(cipherText, 'base64')
    return Buffer.concat([cipher.update(data), cipher.final()]).toString(outputEncoding)
}

const startEncryptStream = (enc) => getCipher(enc)
const startDecryptStream = (enc) => getDecipher(enc)
const updateCryptStream = (cipher, data) => cipher.update(data)
const closeCryptStream = (cipher) => cipher.final()

module.exports = {
    DEFAULT_CRYPT_ALGO,
    setDefaultKey, setDefaultIV,
    encrypt, decrypt,
    normalizeKey, normalizeIV,
    startEncryptStream, startDecryptStream, updateCryptStream, closeCryptStream
}
