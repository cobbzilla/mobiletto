const { dirname } = require('path')

const {
    M_FILE, M_DIR, M_LINK, M_SPECIAL,
    MobilettoError, writeStream, closeStream, MobilettoNotFoundError
} = require('../../index')

const fs = require('fs')

const DEFAULT_MODE = '0700'

class StorageClient {
    baseDir
    mode
    constructor(baseDir, opts) {
        const resolved = this.resolveSymlinks(baseDir)
        if (!resolved.stat.isDirectory()) {
            const dest = resolved.path === baseDir ? null : resolved.path
            throw new MobilettoError(`local.storageClient: not a directory: ${baseDir}${dest ? ` (resolved to ${dest})` : ''}`)
        }
        const dir = resolved.path
        this.baseDir = dir.endsWith('/') ? dir : dir + '/'
        this.mode = opts && opts.mode ? opts.mode : DEFAULT_MODE
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
        return await this.list()
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
    async list (path = '') {
        const dir = this.normalizePath(path)
        try {
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
        } catch (err) {
            throw new MobilettoError(`list(${path}) error: ${err}`, err)
        }
    }
    async metadata (path) {
        const file = this.normalizePath(path)
        try {
            const lstat = fs.lstatSync(file)
            if (!lstat) {
                throw new MobilettoError(`metadata: lstat error`)
            }
            return {
                name: file.startsWith(this.baseDir) ? file.substring(this.baseDir.length) : file,
                type: this.fileType(lstat),
                size: lstat.size,
                mtime: lstat.mtimeMs
            }
        } catch (err) {
            if (err.code && err.code === 'ENOENT') {
                throw new MobilettoNotFoundError(path)
            }
            throw new MobilettoError(`metadata(${path}) error: ${err}`, err)
        }
    }

    mkdirs (path) {
        try {
            // console.log(`mkdirs: creating directory: ${path}`)
            fs.mkdirSync(path, {recursive: true, mode: this.mode})
        } catch (err) {
            throw new MobilettoError(`mkdirs: error creating directory ${path}: ${err}`, err)
        }
    }

    async write (path, generator) {
        const file = this.normalizePath(path)

        // console.log(`read: reading path: ${path} - ${file}`)
        const parent = dirname(file);
        let dirStat
        try {
            dirStat = fs.lstatSync(parent)
        } catch (err) {
            if (err.code && err.code === 'ENOENT') {
                this.mkdirs(parent)
            } else {
                throw new MobilettoError(`write: lstat error on ${parent}: ${err}`, err)
            }
        }
        if (typeof dirStat === 'undefined') {
            this.mkdirs(parent)
        } else if (!dirStat.isDirectory()) {
            throw new MobilettoError(`write: not a directory: ${parent} (cannot write file ${file})`)
        }

        // console.log(`write: writing path ${path} -> ${file}`)
        const stream = fs.createWriteStream(file, {mode: this.mode})
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
        try {
            const stream = fs.createReadStream(file)
            let count = 0
            const streamHandler = stream =>
                new Promise((resolve, reject) => {
                    stream.on('data', (data) => {
                        count += data ? data.length : 0
                        callback(data)
                    })
                    stream.on('error', reject)
                    stream.on('end', resolve)
                })
            await streamHandler(stream)
            return count
        } catch (err) {
            if (err.code && err.code === 'ENOENT') {
                throw new MobilettoNotFoundError(path)
            }
            throw new MobilettoError(`read(${path}) error: ${err}`, err)
        }
    }

    async remove (path, options) {
        const recursive = options && options.recursive ? options.recursive : false
        const quiet = options && options.quiet ? options.quiet : false
        const file = this.normalizePath(path)
        // console.log(`remove: deleting path: ${path} = ${file}`)
        try {
            fs.rmSync(file, {recursive: recursive, force: quiet, maxRetries: 2})
        } catch (err) {
            if (err.code && err.code === 'ENOENT') {
                if (!quiet) {
                    throw new MobilettoNotFoundError(path)
                }
            } else {
                throw new MobilettoError(`remove(${path}) error: ${err}`, err)
            }
        }
        return Promise.resolve(true)
    }
}

function storageClient (key, secret, opts) {
    if (!key) {
        throw new MobilettoError('local.storageClient: key is required')
    }
    return new StorageClient(key, opts)
}

module.exports = {storageClient}
