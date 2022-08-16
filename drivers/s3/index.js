const { MobilettoError, M_DIR, M_FILE, readCloseHandler, MobilettoNotFoundError} = require('../../index')

const {
    S3Client,
    ListObjectsCommand,
    HeadObjectCommand, GetObjectCommand, PutObjectCommand, DeleteObjectCommand
} = require('@aws-sdk/client-s3')

const { Readable } = require('stream');
const {Upload} = require("@aws-sdk/lib-storage");

const DEFAULT_REGION = 'us-east-1'
const DEFAULT_PREFIX = ''

class StorageClient {
    client
    region
    bucket
    prefix
    constructor(key, secret, opts) {
        if (!key || !secret || !opts || !opts.bucket) {
            throw new MobilettoError('key, secret, and opts.bucket are required')
        }
        this.bucket = opts.bucket
        this.prefix = opts.prefix || DEFAULT_PREFIX
            ? opts.prefix.endsWith('/')
                ? opts.prefix
                : opts.prefix + '/'
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

    async list (path) {
        return (await this._list(path)).map(obj => {
            return {
                name: obj,
                type: obj.endsWith('/') ? M_DIR : M_FILE
            }
        })
    }

    async _list (path, params = {}) {
        const logPrefix = `_list(path=${path}):`

        // Declare truncated as a flag that the while loop is based on.
        let truncated = true

        const Prefix = this.prefix + (path.startsWith('/') ? path.substring(0) : path)
        const bucketParams = Object.assign({}, params, {
            Region: this.region,
            Bucket: this.bucket,
            Prefix,
            Delimiter: '/'
        })
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
                // If truncated is true, assign the key of the last element in the response to the pageMarker variable.
                if (truncated) {
                    try {
                        bucketParams.Marker = response.NextMarker
                    } catch (truncErr) {
                        console.log(`${logPrefix} unexpectedly early truncation (can happen when files and folders have the same name) err = ${truncErr}`)
                        return objects
                    }
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
            : this.prefix + (path.startsWith('/') ? path.substring(1) : path)

    async metadata (path) {
        const Key = this.normalizeKey(path)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Delimiter: '/'
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
            if (err.name && err.name === 'NotFound') {
                throw new MobilettoNotFoundError(Key)
            }
            console.error(`wtf: ${err}`)
            throw err
        }
    }

    async write (path, generator) {
        const Key = this.normalizeKey(path)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Body: Readable.from(generator),
            Delimiter: '/'
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
            console.log(`write(${bucketParams.Key}): ${JSON.stringify(progress)}`)
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
        console.log(`read: reading Key: ${path} - ${Key}`)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key,
            Delimiter: '/'
        }
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
    }

    async remove (path) {
        const Key = this.normalizeKey(path)
        const bucketParams = {
            Region: this.region,
            Bucket: this.bucket,
            Key
        }
        const response = await this.client.send(new DeleteObjectCommand(bucketParams))
        return response.$metadata.httpStatusCode === 204
    }
}

function storageClient (key, secret, opts) {
    if (!key || !secret || !opts || !opts.bucket) {
        throw new MobilettoError('key, secret, and opts.bucket are required')
    }
    return new StorageClient(key, secret, opts)
}

module.exports = {storageClient}
