const {
    M_DIR, M_FILE,
    MobilettoError, MobilettoNotFoundError, readStream
} = require('../../index')

const {
    S3Client,
    ListObjectsCommand,
    HeadObjectCommand, GetObjectCommand, DeleteObjectCommand, DeleteObjectsCommand, NoSuchKey
} = require('@aws-sdk/client-s3')

const { Readable } = require('stream')
const {Upload} = require("@aws-sdk/lib-storage")

const DEFAULT_REGION = 'us-east-1'
const DEFAULT_PREFIX = ''
const DEFAULT_DELIMITER = '/'

const DELETE_OBJECTS_MAX_KEYS = 1000

class StorageClient {
    client
    region
    bucket
    prefix
    delimiter
    constructor(key, secret, opts) {
        if (!key || !secret || !opts || !opts.bucket) {
            throw new MobilettoError('key, secret, and opts.bucket are required')
        }
        this.bucket = opts.bucket
        const delim = this.delimiter = opts.delimiter || DEFAULT_DELIMITER
        this.prefix = opts.prefix || DEFAULT_PREFIX
            ? opts.prefix.endsWith(delim)
                ? opts.prefix
                : opts.prefix + delim
            : ''
        this.region = opts.region || DEFAULT_REGION
        const credentials = {
            accessKeyId: key,
            secretAccessKey: secret
        }
        this.client = new S3Client({region: this.region, credentials})
    }

    // noinspection JSUnusedGlobalSymbols -- called by driver init
    testConfig = async () => await this._list('', false, null, { MaxKeys: 1 })

    stripPrefix = (name) => name.startsWith(this.prefix) ? name.substring(this.prefix.length) : name

    nameToObj = (name) => {
        const relName = this.stripPrefix(name)
        return {
            name: relName,
            type: relName.endsWith(this.delimiter) ? M_DIR : M_FILE
        }
    }

    async list (path = '', recursive = false, visitor = null) {
        return await this._list(path, recursive, visitor)
    }

    async _list (path, recursive = false, visitor = null, params = {}) {
        const logPrefix = `_list(path=${path}):`

        // Declare truncated as a flag that the while loop is based on.
        let truncated = true

        const Prefix = this.prefix +
            (path.startsWith(this.delimiter) ? path.substring(0) : path) +
            (path.length === 0 || path.endsWith(this.delimiter) ? '' : this.delimiter)
        const bucketParams = Object.assign({}, params, {
            Region: this.region,
            Bucket: this.bucket,
            Prefix
        })
        if (!recursive) {
            bucketParams.Delimiter = this.delimiter
        }
        const objects = []
        let objectCount = 0
        // console.log(`${logPrefix} bucketParams=${JSON.stringify(bucketParams)}`)

        // while loop that runs until 'response.truncated' is false.
        while (truncated) {
            try {
                const response = await this.client.send(new ListObjectsCommand(bucketParams))
                const hasContents = typeof response.Contents !== 'undefined'
                if (hasContents) {
                    for (const item of response.Contents) {
                        const obj = this.nameToObj(item.Key);
                        if (visitor) {
                            await visitor(obj)
                        }
                        objects.push(obj)
                        objectCount++
                    }
                }
                const hasCommonPrefixes = typeof response.CommonPrefixes !== 'undefined'
                if (hasCommonPrefixes) {
                    for (const item of response.CommonPrefixes) {
                        const obj = this.nameToObj(item.Prefix)
                        if (visitor) {
                            await visitor(obj)
                        }
                        objects.push(obj)
                        objectCount++
                    }
                }
                truncated = response.IsTruncated
                // If truncated is true, advance the marker
                if (truncated) {
                    bucketParams.Marker = response.NextMarker
                } else if (!hasContents && !hasCommonPrefixes) {
                    if (path === '') {
                        break
                    }
                    throw new MobilettoNotFoundError(path)
                }
            } catch (err) {
                if (err instanceof MobilettoNotFoundError) {
                    throw err
                }
                throw new MobilettoError(`${logPrefix} Error: ${err}`)
            }
        }
        if (recursive && objectCount === 0 && path !== '') {
            throw new MobilettoNotFoundError(path)
        }
        const filtered = objects.filter(o => o.name !== path)
        return filtered
    }

    normalizeKey = (path) => {
        const p = (path.startsWith(this.prefix)
            ? path
            : this.prefix + (path.startsWith(this.delimiter) ? path.substring(1) : path))
        return p.replaceAll(/\/{2,}/g, '/')
    }
    denormalizeKey = (key) => {
        return key.startsWith(this.prefix)
            ? key.substring(this.prefix.length)
            : key
    }

    s3error (err, key, path, method) {
        return (err instanceof MobilettoError || err instanceof MobilettoNotFoundError)
            ? err
            : (err instanceof NoSuchKey) || (err.name && err.name === 'NotFound')
                ? new MobilettoNotFoundError(key)
                : new MobilettoError(`${method}(${path}) error: ${err}`, err)
    }

    async metadata (path) {
        const Key = this.normalizeKey(path)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Delimiter: this.delimiter
        }
        try {
            const head = await this.client.send(new HeadObjectCommand(bucketParams))
            const meta = {
                name: this.stripPrefix(path),
                size: head.ContentLength
            }
            if (head.LastModified) {
                meta.mtime = Date.parse(head.LastModified)
            }
            return meta
        } catch (err) {
            throw this.s3error(err, Key, path, 'metadata')
        }
    }

    async write (path, generator) {
        const Key = this.normalizeKey(path)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Body: Readable.from(generator),
            Delimiter: this.delimiter
        }

        const uploader = new Upload({
            client: this.client,
            params: bucketParams,
            queueSize: 1, // optional concurrency configuration
            partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
            leavePartsOnError: false // optional manually handle dropped parts
        })
        let total = 0
        uploader.on('httpUploadProgress', (progress) => {
            // console.log(`write(${bucketParams.Key}): ${JSON.stringify(progress)}`)
            total += progress.loaded
        })
        const response = await uploader.done()
        if (response.Key !== Key) {
            throw new MobilettoError(`s3.write: after writing, expected Key=${Key} but found response.Key=${response.Key}`)
        }
        return total
    }

    async read (path, callback, endCallback = null) {
        const Key = this.normalizeKey(path)
        // console.log(`read: reading Key: ${path} - ${Key}`)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Delimiter: this.delimiter
        }
        try {
            const data = await this.client.send(new GetObjectCommand(bucketParams))
            return await readStream(data.Body, callback, endCallback)
        } catch (err) {
            throw this.s3error(err, Key, path, 'read')
        }
    }

    async remove (path, recursive, quiet) {
        if (recursive) {
            const removed = []
            let objects = await this._list(path, true, null, { MaxKeys: DELETE_OBJECTS_MAX_KEYS })
            while (objects && objects.length > 0) {
                const Delete = {
                    Objects: objects.map(obj => { return {Key: this.normalizeKey(obj.name)} })
                }
                if (quiet) {
                    Delete.Quiet = true
                }
                const bucketParams = {
                    Region: this.region,
                    Bucket: this.bucket,
                    Delete
                }
                // console.log(`remove(${path}): deleting objects: ${JSON.stringify(objects)}`)
                const response = await this.client.send(new DeleteObjectsCommand(bucketParams))
                let statusCode = response.$metadata.httpStatusCode
                let statusClass = Math.floor(statusCode / 100)
                if (statusClass !== 2) {
                    throw new MobilettoError(`remove(${path}): DeleteObjectsCommand returned HTTP status ${statusCode}`)
                }
                if (!quiet && response.Errors && response.Errors.length > 0) {
                    throw new MobilettoError(`remove(${path}): DeleteObjectsCommand returned Errors: ${JSON.stringify(response.Errors)}`)
                }
                if (response.Deleted) {
                    removed.push(...response.Deleted.map(del => this.denormalizeKey(del.Key)))
                }
                try {
                    objects = await this._list(path, true, null, {MaxKeys: DELETE_OBJECTS_MAX_KEYS})
                } catch (e) {
                    if (!(e instanceof MobilettoNotFoundError)) {
                        throw e instanceof MobilettoError ? e : new MobilettoError(`remove(${path}): error listing: ${e}`)
                    }
                    objects = null
                }
            }
            return removed
        } else {
            const Key = this.normalizeKey(path)
            const bucketParams = {
                Region: this.region,
                Bucket: this.bucket,
                Key
            }
            try {
                // DeleteObjectCommand silently succeeds and returns HTTP 204 even for non-existent Keys
                // Thus, if quiet is false, we must check metadata explicitly, which will fail with
                // MobilettoNotFoundError, which is the correct behavior
                if (!quiet) {
                    await this.metadata(path)
                }
                const response = await this.client.send(new DeleteObjectCommand(bucketParams))
                let statusCode = response.$metadata.httpStatusCode
                let statusClass = Math.floor(statusCode / 100)
                if (statusClass !== 2) {
                    throw new MobilettoError(`remove: DeleteObjectCommand returned HTTP status ${statusCode}`)
                }
            } catch (err) {
                throw this.s3error(err, Key, path, 'remove')
            }
            return path
        }
    }
}

function storageClient (key, secret, opts) {
    if (!key || !secret || !opts || !opts.bucket) {
        throw new MobilettoError('key, secret, and opts.bucket are required')
    }
    return new StorageClient(key, secret, opts)
}

module.exports = {storageClient}
