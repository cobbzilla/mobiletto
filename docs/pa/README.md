ਮੋਬਾਈਲਟੋ
 =========

 Mobiletto ਇੱਕ JavaScript ਸਟੋਰੇਜ ਐਬਸਟਰੈਕਸ਼ਨ ਲੇਅਰ ਹੈ, ਜਿਸ ਵਿੱਚ ਵਿਕਲਪਿਕ ਪਾਰਦਰਸ਼ੀ ਕਲਾਇੰਟ-ਸਾਈਡ ਐਨਕ੍ਰਿਪਸ਼ਨ ਹੈ।

 # ਸਮੱਗਰੀ
 * [Why Mobiletto?](#Why-Mobiletto?)
 * [ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ](# ਤੇਜ਼-ਸ਼ੁਰੂ)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ਸਰੋਤ](#ਸਰੋਤ)
 * [ਮੁੱਢਲੀ ਵਰਤੋਂ](#ਮੂਲ-ਵਰਤੋਂ)
 * [ਮੇਟਾਡੇਟਾ](#ਮੇਟਾਡੇਟਾ)
 * [ਵਿਕਲਪਕ ਆਯਾਤ ਸ਼ੈਲੀ](# ਵਿਕਲਪਕ-ਆਯਾਤ-ਸ਼ੈਲੀ)
 * [ਕੈਚਿੰਗ](#ਕੈਚਿੰਗ)
 * [ਮੀਰਰਿੰਗ](#ਮੀਰਰਿੰਗ)
 * [ਪਾਰਦਰਸ਼ੀ ਐਨਕ੍ਰਿਪਸ਼ਨ](#ਪਾਰਦਰਸ਼ੀ-ਇਨਕ੍ਰਿਪਸ਼ਨ)
 * [ਕੁੰਜੀ ਰੋਟੇਸ਼ਨ](#ਕੀ-ਰੋਟੇਸ਼ਨ)
 * [ਡਰਾਈਵਰ ਇੰਟਰਫੇਸ](#ਡਰਾਈਵਰ-ਇੰਟਰਫੇਸ)
 * [ਲੌਗਿੰਗ](#ਲੌਗਿੰਗ)

 # ਇਸਨੂੰ ਕਿਸੇ ਹੋਰ ਭਾਸ਼ਾ ਵਿੱਚ ਪੜ੍ਹੋ
 ਇਸ README.md ਦਸਤਾਵੇਜ਼ ਦਾ ਅਨੁਵਾਦ [hokeylization](https://github.com/cobbzilla/hokeylization) ਰਾਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ, ਇਸ ਵਿੱਚ
 **[Google ਅਨੁਵਾਦ ਦੁਆਰਾ ਸਮਰਥਿਤ ਹਰ ਭਾਸ਼ਾ](https://cloud.google.com/translate/docs/languages)!**

 ਮੈਨੂੰ ਯਕੀਨ ਹੈ ਕਿ ਇਹ ਸੰਪੂਰਨ ਨਹੀਂ ਹੈ, ਪਰ ਮੈਨੂੰ ਉਮੀਦ ਹੈ ਕਿ ਇਹ ਕੁਝ ਵੀ ਨਹੀਂ ਹੈ!

 [🇸🇦 ਅਰਬੀ](../ar/README.md)
 [🇧🇩 ਬੰਗਾਲੀ](../bn/README.md)
 [🇩🇪 ਜਰਮਨ](../de/README.md)
 [🇺🇸 ਅੰਗਰੇਜ਼ੀ](../en/README.md)
 [🇪🇸 ਸਪੇਨੀ](../es/README.md)
 [🇫🇷 ਫ੍ਰੈਂਚ](../fr/README.md)
 [🇹🇩 ਹਾਉਸਾ](../ha/README.md)
 [🇮🇳 ਹਿੰਦੀ](../hi/README.md)
 [🇮🇩 ਇੰਡੋਨੇਸ਼ੀਆਈ](../id/README.md)
 [🇮🇹 ਇਤਾਲਵੀ](../it/README.md)
 [🇯🇵 ਜਪਾਨੀ](../ja/README.md)
 [🇰🇷 ਕੋਰੀਆਈ](../ko/README.md)
 [🇮🇳 ਮਰਾਂਥੀ](../mr/README.md)
 [🇵🇱 ਪੋਲਿਸ਼](../pl/README.md)
 [🇧🇷 ਪੁਰਤਗਾਲੀ](../pt/README.md)
 [🇷🇺 ਰੂਸੀ](../ru/README.md)
 [🇰🇪 ਸਵਾਹਿਲੀ](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ਤੁਰਕੀ](../tr/README.md)
 [🇵🇰 ਉਰਦੂ](../ur/README.md)
 [🇻🇳 ਵੀਅਤਨਾਮੀ](../vi/README.md)
 [🇨🇳 ਚੀਨੀ](../zh/README.md)


 **[📚 ... ਸਾਰੀਆਂ ਭਾਸ਼ਾਵਾਂ ...](../README.md)**
 ----

 ### ਕੀ README ਦੇ ਇਸ ਅਨੁਵਾਦ ਵਿੱਚ ਕੋਈ ਸਮੱਸਿਆ ਹੈ?
 ਮੂਲ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) ਦਾ ਇਹ ਵਿਸ਼ੇਸ਼ ਅਨੁਵਾਦ
 ਨੁਕਸ ਹੋ ਸਕਦੇ ਹਨ -- *ਸੁਧਾਰਾਂ ਦਾ ਬਹੁਤ ਸੁਆਗਤ ਹੈ!* ਕਿਰਪਾ ਕਰਕੇ [GitHub 'ਤੇ ਪੁੱਲ ਬੇਨਤੀ](https://github.com/cobbzilla/mobiletto/pulls) ਭੇਜੋ,
 ਜਾਂ ਜੇ ਤੁਸੀਂ ਅਜਿਹਾ ਕਰਨ ਵਿੱਚ ਅਰਾਮਦੇਹ ਨਹੀਂ ਹੋ, [ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ](https://github.com/cobbzilla/mobiletto/issues)

 ਜਦੋਂ ਤੁਸੀਂ ਅਨੁਵਾਦ ਬਾਰੇ ਇੱਕ ਨਵਾਂ GitHub ਮੁੱਦਾ ਬਣਾਉਂਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਕਰੋ:
 * ਪੰਨਾ URL ਸ਼ਾਮਲ ਕਰੋ (ਬ੍ਰਾਊਜ਼ਰ ਐਡਰੈੱਸ ਬਾਰ ਤੋਂ ਕਾਪੀ/ਪੇਸਟ ਕਰੋ)
 * ਸਹੀ ਟੈਕਸਟ ਸ਼ਾਮਲ ਕਰੋ ਜੋ ਗਲਤ ਹੈ (ਬ੍ਰਾਊਜ਼ਰ ਤੋਂ ਕਾਪੀ/ਪੇਸਟ ਕਰੋ)
 * ਕਿਰਪਾ ਕਰਕੇ ਦੱਸੋ ਕਿ ਕੀ ਗਲਤ ਹੈ -- ਕੀ ਅਨੁਵਾਦ ਗਲਤ ਹੈ? ਕੀ ਫਾਰਮੈਟਿੰਗ ਕਿਸੇ ਤਰ੍ਹਾਂ ਟੁੱਟ ਗਈ ਹੈ?
 * ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਬਿਹਤਰ ਅਨੁਵਾਦ ਦਾ ਸੁਝਾਅ ਪੇਸ਼ ਕਰੋ, ਜਾਂ ਟੈਕਸਟ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਕਿਵੇਂ ਫਾਰਮੈਟ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ
 * **ਤੁਹਾਡਾ ਧੰਨਵਾਦ!**

 ## ਮੋਬਾਈਲਟੋ ਕਿਉਂ?

 ### ਅਲਵਿਦਾ ਵਿਕਰੇਤਾ ਲਾਕ-ਇਨ!
 ਵੱਖ-ਵੱਖ ਕਲਾਉਡ ਸਟੋਰੇਜ ਪ੍ਰਦਾਤਾਵਾਂ ਕੋਲ ਅਸੰਗਤ API ਹਨ। ਇੱਥੋਂ ਤੱਕ ਕਿ ਉਹ ਜੋ "S3 ਅਨੁਕੂਲਤਾ" ਲਈ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਨ
 ਮੁਹਾਵਰੇ ਵਾਲੇ ਵਿਵਹਾਰ ਹਨ.

 ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੀ ਐਪ ਲਈ ਕੋਈ ਖਾਸ ਸਟੋਰੇਜ ਵਿਕਰੇਤਾ ਚੁਣਦੇ ਹੋ, ਜੇਕਰ ਤੁਸੀਂ ਸਿੱਧੇ ਉਹਨਾਂ ਦੇ API ਨੂੰ ਕੋਡ ਕਰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਡੀ ਐਪ
 ਹੁਣ ਉਸ ਸੇਵਾ 'ਤੇ ਨਿਰਭਰ ਹੈ। ਜਿਵੇਂ ਸਮਾਂ ਬੀਤਦਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕੋਡ ਇਕੱਠਾ ਹੁੰਦਾ ਹੈ, ਬਦਲਦੇ ਵਿਕਰੇਤਾ ਬਣ ਜਾਂਦੇ ਹਨ
 ਵੱਧ ਤੋਂ ਵੱਧ ਅਸਮਰੱਥ. ਵਿਕਰੇਤਾ ਲਾਕ-ਇਨ ਦੀ ਮਜ਼ੇਦਾਰ ਦੁਨੀਆ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ!

 Mobiletto ਇਸ ਸਮੱਸਿਆ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਸੀ. ਮੋਬਾਈਲਟੋ ਦੇ API ਵਿੱਚ ਆਪਣੀ ਐਪ ਨੂੰ ਕੋਡਿੰਗ ਕਰਕੇ, ਤੁਸੀਂ ਆਸਾਨੀ ਨਾਲ ਕਰ ਸਕਦੇ ਹੋ
 ਸਟੋਰੇਜ਼ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਬਦਲੋ ਅਤੇ ਜਾਣੋ ਕਿ ਤੁਹਾਡੀ ਐਪ ਦੀ ਸਟੋਰੇਜ ਲੇਅਰ ਸਮਾਨ ਵਿਵਹਾਰ ਕਰੇਗੀ।

 ### ਵਿਆਪਕ ਟੈਸਟਿੰਗ
 ਸਾਰੇ ਡਰਾਈਵਰਾਂ ਨੂੰ ਹਰੇਕ ਡਰਾਈਵਰ ਲਈ 60+ ਟੈਸਟਾਂ ਨਾਲ ਇੱਕੋ ਜਿਹੇ ਵਿਵਹਾਰ ਲਈ ਟੈਸਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
 ਅਸੀਂ ਸਾਰੇ ਡਰਾਈਵਰਾਂ ਨੂੰ ਇਹਨਾਂ ਦੇ ਹਰ ਸੁਮੇਲ ਨਾਲ ਟੈਸਟ ਕਰਦੇ ਹਾਂ:
 * ਏਨਕ੍ਰਿਪਸ਼ਨ: ਸਮਰੱਥ ਅਤੇ ਅਯੋਗ ਦੋਵੇਂ
 * ਰੀਡਿਸ ਕੈਸ਼: ਸਮਰੱਥ ਅਤੇ ਅਯੋਗ ਦੋਵੇਂ

 ਇਹ ਪਹੁੰਚ ਸਾਨੂੰ ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ ਕਿ ਮੋਬਾਈਲਟੋ ਉਸੇ ਤਰ੍ਹਾਂ ਦਾ ਵਿਵਹਾਰ ਕਰੇਗਾ ਭਾਵੇਂ ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਡਰਾਈਵਰ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ,
 ਅਤੇ ਇਸ ਗੱਲ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਕਿ ਤੁਸੀਂ ਕੈਚਿੰਗ ਅਤੇ/ਜਾਂ ਏਨਕ੍ਰਿਪਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰਦੇ ਹੋ।

 ### ਡਰਾਈਵਰ ਸਹਾਇਤਾ
 ਮੌਜੂਦਾ ਮੋਬਾਈਲਟੋ ਸਟੋਰੇਜ ਡਰਾਈਵਰ:
 * `s3` : Amazon S3
 * `b2` : ਬੈਕਬਲੇਜ਼ B2
 * `local` : ਲੋਕਲ ਫਾਈਲ ਸਿਸਟਮ

 *ਹੋਰ ਕਲਾਉਡ ਸਟੋਰੇਜ ਪ੍ਰਦਾਤਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ ਯੋਗਦਾਨਾਂ ਦਾ ਬਹੁਤ ਸਵਾਗਤ ਹੈ!*

 ## mobiletto-cli
 Mobiletto ਨੂੰ ਹੋਰ JavaScript ਕੋਡ ਦੁਆਰਾ ਇੱਕ ਲਾਇਬ੍ਰੇਰੀ ਦੇ ਤੌਰ ਤੇ ਵਰਤਣ ਦਾ ਇਰਾਦਾ ਹੈ।

 ਕਮਾਂਡ-ਲਾਈਨ 'ਤੇ mobiletto ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ਦੀ ਵਰਤੋਂ ਕਰੋ

 ## ਸਰੋਤ
 * [ਗੀਟਹਬ 'ਤੇ ਮੋਬਾਈਲਟੋ](https://github.com/cobbzilla/mobiletto)
 * [npm 'ਤੇ ਮੋਬਾਈਲਟੋ](https://www.npmjs.com/package/mobiletto)

 ## ਤੇਜ਼ ਸ਼ੁਰੂਆਤ
 Mobiletto `s3` ਡਰਾਈਵਰ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਇੱਕ ਛੋਟੀ ਜਿਹੀ ਉਦਾਹਰਨ।

 ਇਹ ਕੋਡ ਉਹੀ ਚੱਲੇਗਾ ਜੇਕਰ ਡਰਾਈਵਰ `b2` ਜਾਂ `local` ।

    const storage = require('mobiletto')
    const bucket = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk'})

    // list objects: returns array of metadata objects
    const listing = await bucket.list()
    const dirList = await bucket.list('some/dir/')
    const everything = await bucket.list('', {recursive: true})

    // write an entire file
    let bytesWritten = await bucket.writeFile('some/path', someBufferOfData)

    // write a file from a stream/generator
    bytesWritten = await bucket.write('some/path', streamOrGenerator)

    // read an entire file
    // returns null if an exception would otherwise be thrown
    const bufferOrNull = await bucket.safeReadFile('some/path')

    // stream-read a file, passing data to callback
    const bytesRead = await bucket.read('some/path', (chunk) => { ...do something with chunk... } )

    // remove a file, returns the path removed
    let removed = await bucket.remove('some/path') // removed is a string

    // remove a directory, returns array of paths removed
    removed = await bucket.remove('some/directory', {recursive: true}) // removed is now an array!

 ----
 ## ਮੁੱਢਲੀ ਵਰਤੋਂ
 ਇੱਕ ਬਹੁਤ ਜ਼ਿਆਦਾ ਵਿਆਪਕ ਉਦਾਹਰਨ, ਪੇਸ਼ ਕੀਤੀਆਂ ਗਈਆਂ ਜ਼ਿਆਦਾਤਰ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ:

    const { mobiletto } = require('mobiletto')

    // General usage
    const api = await mobiletto(driverName, key, secret, opts)

    // To use 'local' driver:
    // * key: base directory
    // * secret: ignored, can be null
    // * opts object:
    // * readOnly: optional, never change anything on the filesystem; default is false
    // * fileMode: optional, permissions used when creating new files, default is 0600. can be string or integer
    // * dirMode: optional, permissions used when creating new directories, default is 0700. can be string or integer
    const local = await mobiletto('local', '/home/ubuntu/tmp', null, {fileMode: 0o0600, dirMode: '0700'})

    // To use 's3' driver:
    // * key: AWS Access Key ID
    // * secret: AWS Secret Key
    // * opts object:
    // * readOnly: optional, never change anything on the bucket; default is false
    // * bucket: required, name of the S3 bucket
    // * region: optional, the AWS region to communicate with, default is us-east-1
    // * prefix: optional, all read/writes within the S3 bucket will be under this prefix
    // * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'})

    // To use 'b2' driver:
    // * key: Backblaze Key ID
    // * secret: Backblaze Application Key
    // * opts object:
    // * readOnly: optional, never change anything on the bucket; default is false
    // * bucket: required, the ID (**not the name**) of the B2 bucket
    // * prefix: optional, all read/writes within the B2 bucket will be under this prefix
    // * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    // * partSize: optional, large files will be split into chunks of this size when uploading
    const b3 = await mobiletto('b2', b2_key_id, b2_app_key, {bucket: 'bk', partSize: 10000000})

    // List files
    api.list() // --> returns an array of metadata objects

    // List files recursively
    api.list({ recursive: true })

    // List files in a directory
    const path = 'some/path'
    api.list(path)
    api.list(path, { recursive: true }) // also supports recursive flag

    // Visit files in a directory -- visitor function must be async
    api.list(path, { visitor: myAsyncFunc })
    api.list(path, { visitor: myAsyncFunc, recursive: true })

    // The `list` method throws MobilettoNotFoundError if the path does not exist
    // When you call `safeList` on a non-existent path, it returns an empty array
    api.safeList('/path/that/does/not/exist') // returns []
    
    // Read metadata for a file
    api.metadata(path) // returns metadata object

    // The `metadata` method throws MobilettoNotFoundError if the path does not exist
    // When you call `safeMetadata` on a non-existent path, it returns null
    api.safeMetadata('/tmp/does_not_exist') // returns null
    
    // Read a file
    // Provide a callback that writes the data someplace
    const callback = (chunk) => { ... write chunk somewhere ... }
    api.read(path, callback) // returns count of bytes read

    // Read an entire file at once
    const data = await api.readFile(path) // returns a byte Buffer of the file contents
    
    // Read an entire file at once
    // returns null if an exception would otherwise be thrown
    const bufferOrNull = await bucket.safeReadFile('some/path')

    // Write a file
    // Provide a generator function that yields chunks of data
    const generator = function* () {
      while ( ... more-data-to-return ... ) {
        data = ... load-data ...
        yield data
      }
    }
    local.api(path, generator) // returns count of bytes written

    // Write an entire file at once (convenience method)
    await api.writeFile(path, bufferOrString) // returns count of bytes written

    // Delete a file
    // Quiet param is optional (default false), when set errors will not be thrown if the path does not exist
    // Always returns a value or throws an error.
    // Return value may be a single string of the file removed, or an array of all files removed (driver-dependent)
    const quiet = true
    api.remove(path, {quiet}) // returns single path removed

    // Recursively delete a directory and do it quietly (do not report errors)
    const recursive = true
    const quiet = true
    api.remove(path, {recursive, quiet}) // returns array of paths removed

 ## ਮੈਟਾਡੇਟਾ
 `metadata` ਕਮਾਂਡ ਇੱਕ ਸਿੰਗਲ ਫਾਈਲ ਸਿਸਟਮ ਐਂਟਰੀ ਬਾਰੇ ਮੈਟਾਡੇਟਾ ਵਾਪਸ ਕਰਦੀ ਹੈ।
 ਇਸੇ ਤਰ੍ਹਾਂ, `list` ਕਮਾਂਡ ਤੋਂ ਵਾਪਸੀ ਮੁੱਲ ਮੈਟਾਡੇਟਾ ਵਸਤੂਆਂ ਦੀ ਇੱਕ ਐਰੇ ਹੈ।

 ਇੱਕ ਮੈਟਾਡੇਟਾ ਆਬਜੈਕਟ ਇਸ ਤਰ੍ਹਾਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ਵਿਸ਼ੇਸ਼ਤਾ `file` , `dir` , `link` , ਜਾਂ `special` ਹੋ ਸਕਦੀ ਹੈ।

 ਡਰਾਈਵਰ ਦੀ ਕਿਸਮ 'ਤੇ ਨਿਰਭਰ ਕਰਦਿਆਂ, ਇੱਕ `list` ਕਮਾਂਡ ਸਾਰੇ ਖੇਤਰਾਂ ਨੂੰ ਵਾਪਸ ਨਹੀਂ ਕਰ ਸਕਦੀ ਹੈ। `name` ਅਤੇ `type` ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ
 ਹਮੇਸ਼ਾ ਮੌਜੂਦ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ. ਇੱਕ ਅਗਲੀ `metadata` ਕਮਾਂਡ ਸਾਰੀਆਂ ਉਪਲਬਧ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਨੂੰ ਵਾਪਸ ਕਰੇਗੀ।

 ## ਵਿਕਲਪਿਕ ਆਯਾਤ ਸ਼ੈਲੀ
 ਪੂਰੀ-ਸਕੋਪ ਵਾਲੇ ਮੋਡੀਊਲ ਨੂੰ ਆਯਾਤ ਕਰੋ ਅਤੇ `connect` ਫੰਕਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰੋ:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ਕੈਚਿੰਗ
 Mobiletto ਇੱਕ <a href="https://redis.io">redis</a> ਕੈਸ਼ ਨਾਲ ਵਧੀਆ ਕੰਮ ਕਰਦਾ ਹੈ.

 Mobiletto 127.0.0.1:6379 ਨੂੰ ਇੱਕ redis ਉਦਾਹਰਨ ਨਾਲ ਜੁੜਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੇਗਾ

 ਤੁਸੀਂ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਨੂੰ ਵੀ ਓਵਰਰਾਈਡ ਕਰ ਸਕਦੇ ਹੋ:
 * ਲੋਕਲਹੋਸਟ ਦੀ ਬਜਾਏ 'MOBILETTO_REDIS_HOST `MOBILETTO_REDIS_HOST` var, mobiletto ਇੱਥੇ ਕਨੈਕਟ ਕਰੋ ਸੈੱਟ ਕਰੋ
 * `MOBILETTO_REDIS_PORT` var ਸੈੱਟ ਕਰੋ, ਇਹ ਪੋਰਟ ਵਰਤਿਆ ਜਾਵੇਗਾ

 Mobiletto ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਰੀਡਿਸ ਕੁੰਜੀਆਂ ਨੂੰ `_mobiletto__` ਅਗੇਤਰ ਨਾਲ ਸਟੋਰ ਕਰੇਗਾ। ਤੁਸੀਂ ਇਸਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ
 `MOBILETTO_REDIS_PREFIX` var ਸੈੱਟ ਕਰਕੇ।

 ਤੁਸੀਂ `opts.redisConfig` ਆਬਜੈਕਟ ਨਾਲ ਪ੍ਰਤੀ-ਕੁਨੈਕਸ਼ਨ ਕੈਚਿੰਗ ਵੀ ਸੈਟ ਕਰ ਸਕਦੇ ਹੋ:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ਕੀ ਰੀਡਿਸ ਕੈਚਿੰਗ ਨਹੀਂ ਚਾਹੁੰਦੇ ਹੋ?
 ਅਸਮਰੱਥ ਕਰਨ ਲਈ: ਜਦੋਂ ਤੁਸੀਂ ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਸਥਾਪਿਤ ਕਰਦੇ ਹੋ ਤਾਂ ਆਪਣੇ `opts.redisConfig` ਵਸਤੂ ਵਿੱਚ `enabled: false` ਪਾਸ ਕਰੋ।

 ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਚਰਚਾ ਕੀਤੀ ਗਈ ਹੈ, ਕੈਚਿੰਗ ਨੂੰ ਅਯੋਗ ਕਰਨ ਨਾਲ ਪ੍ਰਦਰਸ਼ਨ 'ਤੇ ਬੁਰਾ ਪ੍ਰਭਾਵ ਪਵੇਗਾ ਅਤੇ ਹੋਰ ਬੇਨਤੀਆਂ ਆਉਣਗੀਆਂ
 ਸਟੋਰੇਜ ਲਈ ਜਿਸਦੀ ਤੁਹਾਨੂੰ ਅਸਲ ਵਿੱਚ ਲੋੜ ਹੈ।

 ### ਕੈਚਿੰਗ ਮਾਰਗਦਰਸ਼ਨ
 **ਏਨਕ੍ਰਿਪਟਡ ਸਟੋਰੇਜ**: ਇਨਕ੍ਰਿਪਟਡ ਸਟੋਰੇਜ ਨੂੰ ਪੜ੍ਹਨਾ/ਲਿਖਣਾ ਆਮ ਨਾਲੋਂ ਥੋੜ੍ਹਾ ਹੌਲੀ ਹੈ,
 ਪਰ ਡਾਇਰੈਕਟਰੀਆਂ ਦੇ ਦੁਆਲੇ ਨੈਵੀਗੇਟ ਕਰਨਾ (ਜੋ ਕੁਝ ਚੀਜ਼ਾਂ ਕਰਦੇ ਹਨ) ਕਾਫ਼ੀ ਮਹਿੰਗਾ ਹੈ। ਇੱਕ ਰੀਡਿਸ ਕੈਸ਼ ਦੀ ਵਰਤੋਂ ਕਰਨਾ
 ਤੁਹਾਨੂੰ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਹੁਲਾਰਾ ਦੇਵੇਗਾ.

 ਪੂਰਵ-ਨਿਰਧਾਰਤ ਕੈਸ਼ ਸੁਰੱਖਿਅਤ ਹੈ, ਪਰ ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਬਹੁਤ ਸਾਰੇ ਲਿਖਣ/ਹਟਾਉਣ ਦੀਆਂ ਕਾਰਵਾਈਆਂ ਹਨ ਤਾਂ ਵਧੀਆ ਪ੍ਰਦਰਸ਼ਨ ਨਹੀਂ ਕਰਦਾ।
 ਕੋਈ ਵੀ ਲਿਖਣ ਜਾਂ ਹਟਾਉਣ ਦੀ ਕਾਰਵਾਈ ਸਮੁੱਚੀ ਕੈਸ਼ ਨੂੰ ਅਯੋਗ ਕਰ ਦਿੰਦੀ ਹੈ, ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹੋਏ ਕਿ ਅਗਲੀਆਂ ਰੀਡਜ਼ ਦੇਖ ਸਕਣਗੀਆਂ
 ਨਵੀਨਤਮ ਬਦਲਾਅ.

 ### CLI ਟੂਲ
 ਜੇਕਰ ਤੁਸੀਂ CLI ਟੂਲ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ ਜਿਵੇਂ ਕਿ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ `mo` ਕੈਸ਼ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਣਾ ਚਾਹੋਗੇ, ਕਿਉਂਕਿ ਇਹ 'mo' ਕਮਾਂਡ ਦੇ ਸੱਦੇ ਤੱਕ ਰਹਿੰਦਾ ਹੈ।

 ## ਮਿਰਰਿੰਗ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` ਕਮਾਂਡ ਇੱਕ ਮੋਬਾਈਲ ਤੋਂ ਦੂਜੀ ਤੱਕ ਸਾਰੀਆਂ ਫਾਈਲਾਂ ਦੀ ਇੱਕ-ਵਾਰ ਕਾਪੀ ਕਰਦੀ ਹੈ।
 ਇਹ ਸਮੇਂ ਦੇ ਨਾਲ ਸ਼ੀਸ਼ੇ ਨੂੰ ਬਣਾਈ ਰੱਖਣ ਲਈ ਕੋਈ ਪ੍ਰਕਿਰਿਆ ਨਹੀਂ ਚਲਾਉਂਦਾ. `mirror` ਕਮਾਂਡ ਨੂੰ ਦੁਬਾਰਾ ਚਲਾਓ
 ਕਿਸੇ ਵੀ ਗੁੰਮ ਫਾਇਲ ਨੂੰ ਸਮਕਾਲੀ ਕਰਨ ਲਈ.

 `mirror` ਤੋਂ ਵਾਪਸੀ ਮੁੱਲ ਇੱਕ ਸਧਾਰਨ ਵਸਤੂ ਹੈ ਜਿਸ ਵਿੱਚ ਕਾਊਂਟਰ ਹਨ ਕਿ ਕਿੰਨੀਆਂ ਫਾਈਲਾਂ ਸਫਲਤਾਪੂਰਵਕ ਸਨ
 ਮਿਰਰਡ ਅਤੇ ਕਿੰਨੀਆਂ ਫਾਈਲਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਸਨ:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ਚੇਤਾਵਨੀ: ਵੱਡੇ ਡੇਟਾ ਸੈੱਟਾਂ ਨੂੰ ਪ੍ਰਤੀਬਿੰਬਤ ਕਰਨਾ ਬਹੁਤ ਸਮਾਂ ਬਰਬਾਦ ਕਰਨ ਵਾਲਾ ਅਤੇ ਬੈਂਡਵਿਡਥ-ਸਹਿਤ ਹੋ ਸਕਦਾ ਹੈ

 `mirror` ' ਕਾਲ ਦੇ ਅਰਥ ਵਿਗਿਆਨ ਨਾਲ ਇਹ ਸਮਝਣਾ ਕਈ ਵਾਰ ਉਲਝਣ ਵਾਲਾ ਹੋ ਸਕਦਾ ਹੈ ਕਿ ਕੌਣ ਹੈ
 ਪਾਠਕ ਅਤੇ ਲੇਖਕ ਕੌਣ ਹੈ। ਇਸਨੂੰ ਇੱਕ ਅਸਾਈਨਮੈਂਟ ਸਟੇਟਮੈਂਟ ਵਾਂਗ ਕਲਪਨਾ ਕਰੋ: "ਖੱਬੇ ਹੱਥ ਦਾ ਮੋਬਾਈਲਟੋ"
 ਕੀ ਚੀਜ਼ ਨੂੰ ਨਿਰਧਾਰਤ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ (ਮਿਰਰਡ ਡੇਟਾ ਲਿਖਿਆ ਗਿਆ ਹੈ), ਅਤੇ "ਸੱਜੇ ਹੱਥ ਮੋਬਾਈਲਟੋ" (ਦੀ
 `mirror` ਵਿਧੀ ਲਈ ਆਰਗੂਮੈਂਟ) ਨਿਰਧਾਰਤ ਕੀਤਾ ਜਾ ਰਿਹਾ ਮੁੱਲ ਹੈ (ਮਿਰਰਡ ਡੇਟਾ ਪੜ੍ਹਿਆ ਜਾਂਦਾ ਹੈ)।

 ## ਪਾਰਦਰਸ਼ੀ ਐਨਕ੍ਰਿਪਸ਼ਨ
 ਪਾਰਦਰਸ਼ੀ ਕਲਾਇੰਟ-ਸਾਈਡ ਇਨਕ੍ਰਿਪਸ਼ਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ:

    // Pass encryption parameters
    const encryption = {
      // key is required, must be >= 16 chars
      key: randomstring.generate(128),

      // optional, the default is to derive IV from key
      // when set, IV must be >= 16 chars
      iv: randomstring.generate(128),

      // optional, the default is aes-256-cbc
      algo: 'aes-256-cbc'
    }
    const api = await mobiletto(driverName, key, secret, opts, encryption)

    // Subsequent write operations will encrypt data (client side) when writing
    // Subsequent read operations will decrypt data (client side) when reading

 ਕੀ ਹੋ ਰਿਹਾ ਹੈ? ਇੱਕ ਵੱਖਰੀ "ਡਾਇਰੈਕਟਰੀ ਐਂਟਰੀ" (ਡਾਇਰੈਂਟ) ਡਾਇਰੈਕਟਰੀ (ਏਨਕ੍ਰਿਪਟਡ) ਟਰੈਕ ਕਰਦੀ ਹੈ ਕਿ ਉਸ ਵਿੱਚ ਕਿਹੜੀਆਂ ਫਾਈਲਾਂ ਹਨ
 ਡਾਇਰੈਕਟਰੀ (ਉਰਫ਼ ਡਾਇਰੈਂਟ ਡਾਇਰੈਕਟਰੀ)।
 * `list` ਕਮਾਂਡ ਡਾਇਰੈਕਟਰੀ ਐਂਟਰੀ ਫਾਈਲਾਂ ਨੂੰ ਪੜ੍ਹਦੀ ਹੈ, ਸੂਚੀਬੱਧ ਹਰੇਕ ਮਾਰਗ ਨੂੰ ਡੀਕ੍ਰਿਪਟ ਕਰਦੀ ਹੈ; ਫਿਰ ਹਰੇਕ ਫਾਈਲ ਲਈ ਮੈਟਾਡੇਟਾ ਵਾਪਸ ਕਰਦਾ ਹੈ
 * `list` ਕਮਾਂਡਾਂ ਵਧੇਰੇ ਅਯੋਗ ਹਨ, ਖਾਸ ਤੌਰ 'ਤੇ ਵੱਡੀ ਗਿਣਤੀ ਵਿੱਚ ਫਾਈਲਾਂ ਵਾਲੀਆਂ ਡਾਇਰੈਕਟਰੀਆਂ ਲਈ
 * `write` ਫਾਈਲਾਂ ਨੂੰ ਵਾਰ-ਵਾਰ ਲਿਖਦੀ ਹੈ; ਫਿਰ ਫਾਈਲ ਲਿਖਦਾ ਹੈ
 * `write` ਕਮਾਂਡਾਂ ਨੂੰ ਡਾਇਰੈਕਟਰੀ ਲੜੀ ਵਿੱਚ N = ਡੂੰਘਾਈ ਦੇ ਨਾਲ O(N) ਰਾਈਟ ਆਵੇਗਾ।
 * `remove` ਫਾਈਲ ਨੂੰ ਹਟਾਉਂਦੀ ਹੈ, ਅਤੇ ਇਸਦੇ ਪੇਰੈਂਟ ਨੂੰ ਜੇਕਰ ਖਾਲੀ ਹੋਵੇ, ਵਾਰ-ਵਾਰ; ਫਿਰ ਫਾਇਲ ਨੂੰ ਹਟਾ ਦਿੰਦਾ ਹੈ
 * ਗੈਰ-ਆਵਰਤੀ `remove` ਕਮਾਂਡਾਂ ਵਿੱਚ ਡਾਇਰੈਕਟਰੀ ਲੜੀ ਵਿੱਚ N = ਡੂੰਘਾਈ ਦੇ ਨਾਲ O(N) ਰੀਡਜ਼ ਅਤੇ ਸੰਭਾਵੀ ਤੌਰ 'ਤੇ ਜਿੰਨੇ ਵੀ ਮਿਟਾਏ ਜਾਣਗੇ।
 * ਵੱਡੇ ਅਤੇ ਡੂੰਘੇ ਫਾਈਲ ਸਿਸਟਮਾਂ 'ਤੇ ਆਵਰਤੀ `remove` ਕਮਾਂਡਾਂ ਮਹਿੰਗੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ

 ਨੋਟ ਕਰੋ ਕਿ ਕਲਾਇੰਟ-ਸਾਈਡ ਇਨਕ੍ਰਿਪਸ਼ਨ ਸਮਰਥਿਤ ਹੋਣ ਦੇ ਬਾਵਜੂਦ, ਤੁਹਾਡੇ ਐਨਕ੍ਰਿਪਟਡ ਸਰਵਰ-ਸਾਈਡ ਵਿੱਚ ਪੂਰੀ ਦਿੱਖ ਵਾਲਾ ਵਿਰੋਧੀ
 ਸਟੋਰੇਜ, ਭਾਵੇਂ ਕੁੰਜੀ ਤੋਂ ਬਿਨਾਂ, ਫਿਰ ਵੀ ਡਾਇਰੈਕਟਰੀਆਂ ਦੀ ਕੁੱਲ ਸੰਖਿਆ ਅਤੇ ਹਰੇਕ ਵਿੱਚ ਕਿੰਨੀਆਂ ਫਾਈਲਾਂ ਹਨ, ਅਤੇ ਨਾਲ ਦੇਖ ਸਕਦਾ ਹੈ
 ਕੁਝ ਕੋਸ਼ਿਸ਼, ਡਾਇਰੈਕਟਰੀ ਲੜੀ ਦੇ ਕੁਝ ਜਾਂ ਸਾਰੇ ਢਾਂਚੇ ਦੀ ਖੋਜ ਕਰੋ।
 *ਨੋਟ: ਬਿਹਤਰ ਸੁਰੱਖਿਆ ਲਈ ਮੁਕਾਬਲਤਨ ਸਮਤਲ ਢਾਂਚੇ ਦੀ ਵਰਤੋਂ ਕਰੋ।*
 ਵਿਰੋਧੀ ਨੂੰ ਡਾਇਰੈਕਟਰੀਆਂ/ਫਾਇਲਾਂ ਦੇ ਨਾਮ ਨਹੀਂ ਪਤਾ ਹੋਵੇਗਾ ਜਦੋਂ ਤੱਕ ਉਹ ਤੁਹਾਡੀ ਐਨਕ੍ਰਿਪਸ਼ਨ ਨੂੰ ਵੀ ਨਹੀਂ ਜਾਣਦਾ
 ਕੁੰਜੀ ਜਾਂ ਹੋਰ ਸਫਲਤਾਪੂਰਵਕ ਏਨਕ੍ਰਿਪਸ਼ਨ ਕਰੈਕ ਕੀਤੀ ਸੀ। ਫਿਰ ਸਾਰੇ ਸੱਟੇ ਬੰਦ ਹਨ!

 ### ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਕੈਚਿੰਗ
 ਐਨਕ੍ਰਿਪਟਡ ਸਟੋਰੇਜ 'ਤੇ ਓਪਰੇਸ਼ਨ ਹੌਲੀ ਹੋ ਸਕਦੇ ਹਨ। ਆਵਰਤੀ ਸੂਚੀਆਂ ਅਤੇ ਹਟਾਉਣਾ ਬਹੁਤ ਹੌਲੀ ਹੋ ਸਕਦਾ ਹੈ।
 ਰੈਡਿਸ ਦੁਆਰਾ ਕੈਚ ਕਰਨਾ ਬਹੁਤ ਮਦਦ ਕਰਦਾ ਹੈ, ਪਰ ਨੋਟ ਕਰੋ ਕਿ ਕੈਸ਼ ਕਿਸੇ ਵੀ ਲਿਖਤ ਜਾਂ ਹਟਾਉਣ 'ਤੇ ਫਲੱਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

 ## ਕੁੰਜੀ ਰੋਟੇਸ਼ਨ
 ਆਪਣੀ ਨਵੀਂ ਕੁੰਜੀ ਨਾਲ ਮੋਬਾਈਲਟੋ ਬਣਾਓ, ਫਿਰ ਇਸ ਵਿੱਚ ਪੁਰਾਣੇ ਡੇਟਾ ਨੂੰ ਮਿਰਰ ਕਰੋ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ਡਰਾਈਵਰ ਇੰਟਰਫੇਸ
 ਇੱਕ ਡਰਾਈਵਰ ਕੋਈ ਵੀ JS ਫਾਈਲ ਹੈ ਜੋ ਇਸ ਦਸਤਖਤ ਨਾਲ ਇੱਕ 'storageClient' ਫੰਕਸ਼ਨ ਨੂੰ ਨਿਰਯਾਤ ਕਰਦੀ ਹੈ:

    function storageClient (key, secret, opts)

 * `key` : ਇੱਕ ਸਤਰ, ਤੁਹਾਡੀ API ਕੁੰਜੀ ( `local` ਡਰਾਈਵਰ ਲਈ ਇਹ ਬੇਸ ਡਾਇਰੈਕਟਰੀ ਹੈ)
 * `secret` : ਇੱਕ ਸਤਰ, ਤੁਹਾਡਾ API ਗੁਪਤ ( `local` ਡਰਾਈਵਰ ਲਈ ਛੱਡਿਆ ਜਾ ਸਕਦਾ ਹੈ)
 * `opts` : ਇੱਕ ਵਸਤੂ, ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਪ੍ਰਤੀ-ਡਰਾਈਵਰ ਹਨ:
 * `local` ਲਈ, `fileMode` ਅਤੇ `dirMode` ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਇਹ ਨਿਰਧਾਰਤ ਕਰਦੀਆਂ ਹਨ ਕਿ ਨਵੀਆਂ ਬਣਾਉਣ ਵਾਲੀਆਂ ਫਾਈਲਾਂ ਅਤੇ ਡਾਇਰੈਕਟਰੀਆਂ ਕਿਵੇਂ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ
 * `s3` ਲਈ, `bucket` ਵਿਸ਼ੇਸ਼ਤਾ ਦੀ ਲੋੜ ਹੈ। ਵਿਕਲਪਿਕ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਹਨ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ਉਹ ਵਸਤੂ ਜੋ ਸਟੋਰੇਜ ਕਲਾਇੰਟ ਫੰਕਸ਼ਨ ਰਿਟਰਨ ਕਰਦਾ ਹੈ ਇਹਨਾਂ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ:

    // Test the driver before using, ensure proper configuration
    async testConfig ()

    // List files in path (or from base-directory)
    // If recursive is true, list recursively
    // If visitor is defined, it will be an async function. await the visitor function on each file found
    // Otherwise, perform the listing and return an array of objects
    async list (path, recursive = false, visitor = null) // path may be omitted
    
    // Read metadata for a path
    async metadata (path)
    
    // Read a file
    // callback receives a chunk of data. endCallback is called at end-of-stream
    async read (path, callback, endCallback = null)

    // Write a file
    // driver must be able to handle a generator or a stream
    async write (path, generatorOrReadableStream)

    // Remove a file, or recursively delete a directory
    // returns a string of a single path removed, or an array of multiple paths removed
    async remove (path, recursive = false, quiet = false)

 ## ਲਾਗਿੰਗ
 Mobiletto [winston](https://www.npmjs.com/package/winston) ਲੌਗਿੰਗ ਲਾਇਬ੍ਰੇਰੀ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।

 ਲੌਗਾਂ ਵਿੱਚ **ਫਾਇਲ ਮਾਰਗ ਅਤੇ ਤਰੁੱਟੀ ਸੁਨੇਹੇ ਸ਼ਾਮਲ ਹੋਣਗੇ, ਪਰ **ਕਦੇ ਨਹੀਂ** ਕੁੰਜੀਆਂ, ਰਾਜ਼,
 ਜਾਂ ਕੋਈ ਹੋਰ ਕਨੈਕਸ਼ਨ ਕੌਂਫਿਗਰੇਸ਼ਨ ਜਾਣਕਾਰੀ।

 ### ਲਾਗ ਪੱਧਰ
 ਲੌਗ ਪੱਧਰ ਸੈੱਟ ਕਰਨ ਲਈ `MOBILETTO_LOG_LEVEL` ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ ਦੀ ਵਰਤੋਂ ਕਰੋ, ਇੱਕ ਦੀ ਵਰਤੋਂ ਕਰਕੇ
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ `npm` ਪੱਧਰਾਂ ਦਾ

 ਪੂਰਵ-ਨਿਰਧਾਰਤ ਪੱਧਰ `error` ' ਹੈ। ਸਭ ਤੋਂ ਵੱਧ ਵਰਬੋਜ਼ ਪੱਧਰ `silly` ' ਹੈ, ਹਾਲਾਂਕਿ ਵਰਤਮਾਨ ਵਿੱਚ ਮੋਬਾਈਲਟੋ
 ' `debug` ' ਤੋਂ ਹੇਠਾਂ ਦੇ ਪੱਧਰਾਂ 'ਤੇ ਲੌਗ ਨਹੀਂ ਹੁੰਦਾ

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ਲੌਗ ਫਾਈਲ
 ਮੂਲ ਰੂਪ ਵਿੱਚ, ਲਾਗਰ ਕੰਸੋਲ ਨੂੰ ਲਿਖਦਾ ਹੈ। ਕਿਸੇ ਫ਼ਾਈਲ ਵਿੱਚ ਲੌਗ ਭੇਜਣ ਲਈ, `MOBILETTO_LOG_FILE` ਸੈੱਟ ਕਰੋ
 ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ. ਜਦੋਂ ਇੱਕ ਫਾਈਲ ਵਿੱਚ ਲਾਗਿੰਗ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਲਾਗ ਹੁਣ ਕੰਸੋਲ ਵਿੱਚ ਨਹੀਂ ਲਿਖੇ ਜਾਣਗੇ।

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ਲੌਗਿੰਗ ਬੰਦ ਕਰਨ ਲਈ:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
