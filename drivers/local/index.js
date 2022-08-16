const {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    MobilettoError, writeStream, closeStream, readCloseHandler, MobilettoNotFoundError
} = require('../../index')

const fs = require('fs')

class StorageClient {
    baseDir
    constructor(baseDir) {
        const resolved = this.resolveSymlinks(baseDir)
        if (!resolved.stat.isDirectory()) {
            throw new MobilettoError(`local.storageClient: not a directory: ${baseDir}${symlinksFollowed ? ` (resolved to ${dir})` : ''}`)
        }
        const dir = resolved.path
        this.baseDir = dir.endsWith('/') ? dir : dir + '/'
    }
    resolveSymlinks (path) {
        let stat = fs.lstatSync(path)
        let symlinksFollowed = false
        while (!stat.isDirectory() && stat.isSymbolicLink()) {
            path = fs.readlinkSync(path)
            if (path.startsWith('private/')) {
                path = '/' + path
            }
            stat = fs.lstatSync(path)
            symlinksFollowed = true
        }
        return { path, stat }
    }
    async testConfig () {
        return await this.list('')
    }
    fileType (stat) {
        if (stat.isDirectory()) {
            return M_DIR
        }
        if (stat.isFile()) {
            return M_FILE
        }
        if (stat.isSymbolicLink()) {
            return M_LINK
        }
        return M_SPECIAL
    }
    normalizePath(path) {
        if (path.startsWith('/')) {
            path = path.substring(1)
        }
        return this.baseDir + path
    }
    async list (path) {
        const dir = this.normalizePath(path)
        const files = fs.readdirSync(dir)
        return files.map(f => {
            const stat = fs.lstatSync(dir + '/' + f)
            const type = this.fileType(stat)
            const entry = {
                name: f,
                type
            }
            if (type === M_LINK) {
                const resolved = this.resolveSymlinks(dir + '/' + f)
                entry.link = resolved.path
            }
            return entry
        })
    }
    async metadata (path) {
        const file = this.normalizePath(path)
        try {
            const lstat = fs.lstatSync(file)
            if (!lstat) {
                throw new MobilettoError(`metadata: lstat error`)
            }
            return {
                name: file,
                type: this.fileType(lstat),
                size: lstat.size,
                mtime: lstat.mtimeMs
            }
        } catch (err) {
            if (err.code && err.code === 'ENOENT') {
                throw new MobilettoNotFoundError(err.message)
            }
            throw err
        }
    }
    async write (path, generator) {
        const file = this.normalizePath(path);
        // console.log(`write: writing path ${path} -> ${file}`)
        const stream = fs.createWriteStream(file)
        const writer = writeStream(stream)
        const closer = closeStream(stream)
        let count = 0
        let chunk = generator.next().value
        while (chunk) {
            count += chunk.length
            writer(chunk)
            chunk = generator.next().value
        }
        closer()
        return Promise.resolve(count)
    }

    async read (path, callback) {
        const file = this.normalizePath(path)
        // console.log(`read: reading path: ${path} - ${file}`)
        const stream = fs.createReadStream(file)
        let count = 0
        const streamHandler = stream =>
            new Promise((resolve, reject) => {
                stream.on('data', (data) => {
                    count += data ? data.length : 0
                    callback(data)
                })
                stream.on('error', reject)
                stream.on('end', () => { callback(null); resolve() })
            })
        await streamHandler(stream)
        return count
    }

    async remove (path) {
        const file = this.normalizePath(path)
        // console.log(`remove: deleting path: ${path} = ${file}`)
        fs.unlinkSync(file)
        return Promise.resolve(true)
    }
}

function storageClient (key, secret, opts) {
    if (!key) {
        throw new MobilettoError('local.storageClient: key is required')
    }
    return new StorageClient(key)
}

module.exports = {storageClient}
