const { dirname, basename } = require('path')

const {
    M_FILE, M_DIR, M_LINK, M_SPECIAL, isAsyncGenerator, isReadable, logger,
    MobilettoError, MobilettoNotFoundError, readStream, writeStream, closeStream
} = require('mobiletto-common')

const fs = require('fs')

const DEFAULT_FILE_MODE = '0600'
const DEFAULT_DIR_MODE = '0700'

const isNotExistError = (err) => err.code && (err.code === 'ENOENT' || err.code === 'ENOTDIR')

const fileType = (stat) => {
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

class StorageClient {
    baseDir
    fileMode
    dirMode
    constructor(baseDir, opts) {
        if (!baseDir) {
            throw new MobilettoError('local.StorageClient: key (baseDir) is required')
        }
        const resolved = this.resolveSymlinks(baseDir)
        if (!resolved.stat.isDirectory()) {
            const dest = resolved.path === baseDir ? null : resolved.path
            throw new MobilettoError(`local.StorageClient: not a directory: ${baseDir}${dest ? ` (resolved to ${dest})` : ''}`)
        }
        const dir = resolved.path
        this.baseDir = dir.endsWith('/') ? dir : dir + '/'
        this.fileMode = opts && opts.fileMode ? opts.fileMode : DEFAULT_FILE_MODE
        this.dirMode = opts && opts.dirMode ? opts.dirMode : DEFAULT_DIR_MODE
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
    testConfig = async () => await this.list()

    normalizePath = (path) => path.startsWith(this.baseDir)
        ? path
        : this.baseDir + (path.startsWith('/') ? path.substring(1) : path)
    denormalizePath = (path) => {
        const norm = path.startsWith(this.baseDir) ? path.substring(this.baseDir.length) : path
        return norm.startsWith('/') ? norm.substring(1) : norm
    }
    ioError = (err, path, method) => isNotExistError(err)
        ? err instanceof MobilettoNotFoundError
            ? err
            : new MobilettoNotFoundError(this.denormalizePath(path))
        : err instanceof MobilettoError || err instanceof MobilettoNotFoundError
            ? err
            : new MobilettoError(`${method}(${path}) error: ${err}`, err)


    fileToObject = (dir) => (f) => {
        const normPath = (dir.endsWith('/') ? dir : dir + '/') + f;
        const stat = fs.lstatSync(normPath)
        const type = fileType(stat)
        const entry = {
            name: this.denormalizePath(normPath),
            type
        }
        if (type === M_LINK) {
            const resolved = this.resolveSymlinks(normPath)
            entry.link = resolved.path
        }
        return entry
    }

    readDirFiles = async (dir, recursive, visitor) => {
        if (!recursive) {
            return await this.dirFiles(dir, visitor)
        }
        const files = await this.dirFiles(dir, visitor)
        for (const file of files) {
            if (file.type === M_DIR) {
                await this.readDirFiles(file.name, true, visitor)
            }
        }
    }

    dirFiles = async (dir, visitor) => {
        const norm = this.normalizePath(dir);
        try {
            const names = fs.readdirSync(norm);
            const files = names.map(this.fileToObject(norm))
            for (const f of files) {
                await visitor(f)
            }
            return files
        } catch (e) {
            if (isNotExistError(e)) {
                // try to list the parent directory and filter for just this file
                const files = []
                try {
                    const parent = dirname(norm)
                    const base = basename(norm)
                    const names = fs.readdirSync(parent)
                    for (const n of names) {
                        if (n === base) {
                            const f = this.fileToObject(parent)(base)
                            files.push(f)
                            await visitor(f)
                        }
                    }
                } catch (e2) {
                    logger.warn(`dirFiles (try-file) error: ${JSON.stringify(e2)}`)
                    throw this.ioError(e2, norm, 'dirFiles')
                }
                if (files.length > 0) {
                    return files
                } else {
                    logger.warn(`dirFiles (try-file) not found: ${norm}`)
                    throw this.ioError(e, norm, 'dirFiles')
                }
            }
            logger.warn(`dirFiles error: ${JSON.stringify(e)}`)
            throw this.ioError(e, norm, 'dirFiles')
        }
    }

    async list (pth = '', recursive = false, visitor = null) {
        const dir = this.normalizePath(pth)
        try {
            if (visitor === null) {
                const results = []
                await this.readDirFiles(dir, recursive, (obj) => results.push(obj))
                return results
            } else {
                return await this.readDirFiles(dir, recursive, visitor)
            }
        } catch (err) {
            if (err instanceof MobilettoNotFoundError && !recursive && pth.includes('/')) {
                // are we trying to list a single file?
                const parentDir = this.normalizePath(dirname(pth))
                const results = []
                await this.readDirFiles(parentDir, false, (obj) => {
                    if (obj.name === pth) {
                        results.push(obj)
                    }
                })
                if (results.length === 0) {
                    throw err
                }
                return results
            }
            throw this.ioError(err, pth, 'list')
        }
    }
    async metadata (path) {
        const file = this.normalizePath(path)
        try {
            const lstat = fs.lstatSync(file)
            if (!lstat) {
                throw new MobilettoError('metadata: lstat error')
            }
            const type = fileType(lstat)
            if (type === M_DIR && path !== '') {
                const contents = await this.list(path)
                if (contents.length === 0) {
                    throw new MobilettoNotFoundError(path)
                }
            }
            return {
                name: this.denormalizePath(file),
                type,
                size: lstat.size,
                mtime: lstat.mtimeMs
            }
        } catch (err) {
            throw this.ioError(err, path, 'metadata')
        }
    }

    mkdirs (path) {
        try {
            logger.debug(`mkdirs: creating directory: ${path}`)
            fs.mkdirSync(path, {recursive: true, mode: this.dirMode})
        } catch (err) {
            throw new MobilettoError(`mkdirs: error creating directory ${path}: ${err}`, err)
        }
    }

    async normalizePathAndEnsureParentDirs (path) {
        const file = this.normalizePath(path)

        logger.debug(`read: reading path: ${path} - ${file}`)
        const parent = dirname(file)
        let dirStat
        try {
            dirStat = fs.lstatSync(parent)
        } catch (err) {
            if (isNotExistError(err)) {
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
        return file
    }

    async write (path, generatorOrReadableStream) {
        const file = await this.normalizePathAndEnsureParentDirs(path)
        logger.debug(`write: writing path ${path} -> ${file}`)
        const stream = fs.createWriteStream(file, {mode: this.fileMode})
        const writer = writeStream(stream)
        const closer = closeStream(stream)
        let count = 0

        if (isReadable(generatorOrReadableStream)) {
            const readable = generatorOrReadableStream
            const streamHandler = stream =>
                new Promise((resolve, reject) => {
                    stream.on('data', (data) => {
                        if (data) {
                            writer(data)
                            count += data.length
                        }
                    })
                    stream.on('error', reject)
                    stream.on('end', () => {
                        closer()
                        resolve()
                    })
                })
            await streamHandler(readable)
            return count
        }

        const generator = generatorOrReadableStream
        let chunk = isAsyncGenerator(generator)
            ? (await generator.next()).value
            : generator.next().value
        let nullCount = 0
        while (chunk || nullCount < 5) {
            if (chunk) {
                count += chunk.length
                writer(chunk)
            } else {
                nullCount++
            }
            chunk = isAsyncGenerator(generator)
                ? (await generator.next()).value
                : generator.next().value
        }
        closer()
        return count
    }

    async read (path, callback, endCallback = null) {
        const file = this.normalizePath(path)
        logger.debug(`read: reading path: ${path} - ${file}`)
        try {
            const stream = fs.createReadStream(file)
            return await readStream(stream, callback, endCallback)
        } catch (err) {
            throw this.ioError(err, path, 'read')
        }
    }

    async remove (path, recursive, quiet) {
        const file = this.normalizePath(path)
        logger.debug(`remove: deleting path: ${path} = ${file}`)
        try {
            fs.rmSync(file, {recursive: recursive, force: quiet, maxRetries: 2})
        } catch (err) {
            if (isNotExistError(err)) {
                if (!quiet) {
                    throw new MobilettoNotFoundError(path)
                }
            } else {
                throw new MobilettoError(`remove(${path}) error: ${err}`, err)
            }
        }
        return path
    }
}

function storageClient (key, secret, opts) {
    if (!key) {
        throw new MobilettoError('local.storageClient: key is required')
    }
    return new StorageClient(key, opts)
}

module.exports = { storageClient }
