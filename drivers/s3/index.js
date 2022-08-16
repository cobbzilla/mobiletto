const { MobilettoError, M_DIR, M_FILE, MobilettoNotFoundError} = require('../../index')

const {
    S3Client,
    ListObjectsCommand,
    HeadObjectCommand, GetObjectCommand, DeleteObjectCommand, DeleteObjectsCommand, NoSuchKey
} = require('@aws-sdk/client-s3')

const { Readable } = require('stream');
const {Upload} = require("@aws-sdk/lib-storage");

const DEFAULT_REGION = 'us-east-1'
const DEFAULT_PREFIX = ''
const DEFAULT_DELIMITER = '/'

const DELETE_OBJECTS_MAX_KEYS = 1000;

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

    async testConfig () {
        return await this._list('', { MaxKeys: 1 })
    }

    async list (path = '') {
        return (await this._list(path)).map(obj => {
            return {
                name: obj,
                type: obj.endsWith(this.delimiter) ? M_DIR : M_FILE
            }
        })
    }

    async _list (path, params = {}, recursive = false) {
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
        // console.log(`${logPrefix} bucketParams=${JSON.stringify(bucketParams)}`)

        // while loop that runs until 'response.truncated' is false.
        while (truncated) {
            try {
                const response = await this.client.send(new ListObjectsCommand(bucketParams))
                if (typeof response.Contents !== 'undefined') {
                    response.Contents.forEach((item) => {
                        objects.push(item.Key) // todo: transform into standard object
                    })
                }
                if (typeof response.CommonPrefixes !== 'undefined') {
                    response.CommonPrefixes.forEach((item) => {
                        objects.push(item.Prefix) // todo: transform into standard object
                    })
                }
                truncated = response.IsTruncated
                // If truncated is true, advance the marker
                if (truncated) {
                    bucketParams.Marker = response.NextMarker
                }
                // At end of the list, response.truncated is false, and the function exits the while loop.
            } catch (err) {
                console.log(`${logPrefix} Error: ${err}`)
                truncated = false
            }
        }
        return objects
    }

    normalizeKey = (path) =>
        path.startsWith(this.prefix)
            ? path
            : this.prefix + (path.startsWith(this.delimiter) ? path.substring(1) : path)

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
                name: path,
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

    async read (path, callback) {
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
            await streamHandler(data.Body)
            return count
        } catch (err) {
            throw this.s3error(err, Key, path, 'read')
        }
    }

    async remove (path, options = null) {
        const recursive = options && options.recursive
        const quiet = options && options.quiet
        if (recursive) {
            let objects = await this._list(path, { MaxKeys: DELETE_OBJECTS_MAX_KEYS }, true)
            while (objects && objects.length > 0) {
                const Delete = {
                    Objects: objects.map(obj => { return {Key: obj} })
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
                let statusCode = response.$metadata.httpStatusCode;
                let statusClass = Math.floor(statusCode / 100);
                if (statusClass !== 2) {
                    throw new MobilettoError(`remove(${path}): DeleteObjectsCommand returned HTTP status ${statusCode}`)
                }
                if (!quiet && response.Errors && response.Errors.length > 0) {
                    throw new MobilettoError(`remove(${path}): DeleteObjectsCommand returned Errors: ${JSON.stringify(response.Errors)}`)
                }
                objects = await this._list(path, {MaxKeys: DELETE_OBJECTS_MAX_KEYS})
            }
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
                let statusCode = response.$metadata.httpStatusCode;
                let statusClass = Math.floor(statusCode / 100);
                if (statusClass !== 2) {
                    throw new MobilettoError(`remove: DeleteObjectCommand returned HTTP status ${statusCode}`)
                }
            } catch (err) {
                throw this.s3error(err, Key, path, 'remove')
            }
        }
        return true
    }
}

function storageClient (key, secret, opts) {
    if (!key || !secret || !opts || !opts.bucket) {
        throw new MobilettoError('key, secret, and opts.bucket are required')
    }
    return new StorageClient(key, secret, opts)
}

module.exports = {storageClient}
