Mobiletto
=========

Mobiletto is a JavaScript storage abstraction layer, with optional transparent client-side encryption.

# Contents
* [Why Mobiletto?](#Why-Mobiletto?)
* [Quick start](#Quick-start)
* [Mobiletto CLI](#mobiletto-cli)
* [Source](#Source)
* [Installation](#Installation)
  * [Minimal install](#Minimal-install)
* [Support and Funding](#Support-and-Funding)
* [Basic usage](#Basic-usage)
* [Metadata](#Metadata)
* [Alternate import style](#Alternate-import-style)
* [Caching](#Caching)
* [Mirroring](#Mirroring)
* [Transparent encryption](#Transparent-encryption)
* [Key rotation](#Key-rotation)
* [Driver interface](#Driver-interface)
* [Logging](#Logging)

# Read this in another language
This README.md document has been translated, via [hokeylization](https://github.com/cobbzilla/hokeylization), into
**[every language supported by Google Translate](https://cloud.google.com/translate/docs/languages)!**

I'm certain it's not perfect, but I hope it's better than nothing!

&nbsp;&nbsp;&nbsp;[🇸🇦 Arabic](docs/ar/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇩 Bengali](docs/bn/README.md)
&nbsp;&nbsp;&nbsp;[🇩🇪 German](docs/de/README.md)
&nbsp;&nbsp;&nbsp;[🇺🇸 English](docs/en/README.md)
&nbsp;&nbsp;&nbsp;[🇪🇸 Spanish](docs/es/README.md)
&nbsp;&nbsp;&nbsp;[🇫🇷 French](docs/fr/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇩 Hausa](docs/ha/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Hindi](docs/hi/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇩 Indonesian](docs/id/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇹 Italian](docs/it/README.md)
&nbsp;&nbsp;&nbsp;[🇯🇵 Japanese](docs/ja/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇷 Korean](docs/ko/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Marathi](docs/mr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇱 Polish](docs/pl/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇷 Portuguese](docs/pt/README.md)
&nbsp;&nbsp;&nbsp;[🇷🇺 Russian](docs/ru/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇪 Swahili](docs/sw/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇭 Tagalog](docs/tl/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇷 Turkish](docs/tr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇰 Urdu](docs/ur/README.md)
&nbsp;&nbsp;&nbsp;[🇻🇳 Vietnamese](docs/vi/README.md)
&nbsp;&nbsp;&nbsp;[🇨🇳 Chinese](docs/zh/README.md)
<br/>
&nbsp;&nbsp;&nbsp;**[📚 ... All Languages ...](docs/README.md)**
----

### Is there a problem with this translation of the README?
This particular translation of the original [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
may be flawed -- *corrections are very welcome!* Please send a [pull request on GitHub](https://github.com/cobbzilla/mobiletto/pulls),
or if you're not comfortable doing that, [open an issue](https://github.com/cobbzilla/mobiletto/issues)

When you create a new GitHub issue about a translation, please do:
* include the page URL (copy/paste from browser address bar)
* include the exact text that is wrong (copy/paste from browser)
* please describe what is wrong -- is the translation incorrect? is the formatting broken somehow?
* kindly offer a suggestion of a better translation, or how the text should be properly formatted
* **Thank you!**

## Why Mobiletto?

### Goodbye vendor lock-in!
The various cloud storage providers have incompatible APIs. Even those that strive for "S3 compatibility"
have idiosyncratic behaviors.

When you choose a particular storage vendor for your app, if you code directly to their API, your app
is now dependent on that service. As time goes by and code accumulates, changing vendors becomes
increasingly untenable. Welcome to the fun world of vendor lock-in!

Mobiletto was designed to solve this problem. By coding your app to mobiletto's API, you can easily
change storage providers and know that your app's storage layer will behave identically.

### Extensive testing
All drivers are tested for identical behavior with 60+ tests for each driver.
We test all drivers with every combination of:
* Encryption: both enabled and disabled
* Redis cache: both enabled and disabled

This approach gives us peace-of-mind that mobiletto will behave the same regardless of which driver you use,
and regardless of whether you enable caching and/or encryption.

### Driver support
Current Mobiletto storage drivers:
* `s3`: Amazon S3
* `b2`: Backblaze B2
* `local`: local filesystem
* `indexeddb`: IndexedDB storage

*Contributions to support more cloud storage providers are very welcome!*

## Quick Start
A short example using the mobiletto `s3` driver.

This code would run the same with any other mobiletto storage driver.

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
    let removed = await bucket.remove('some/path')  // removed is a string

    // remove a directory, returns array of paths removed
    removed = await bucket.remove('some/directory', {recursive: true})  // removed is now an array!

## mobiletto-cli
Mobiletto is intended to be used as a library by other JavaScript code.

To work with mobiletto at the command-line, use [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

## Source
* [mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
* [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

## Support and Funding
I would be very thankful for any [contribution via Patreon](https://www.patreon.com/cobbzilla)

## Installation
Install using `npm` or `yarn`. You probably want the `lite` version that does not include all the
translated README files:

    npm install mobiletto-lite
    yarn add mobiletto-lite

If you really want the README files in every language, install the full version:

    npm install mobiletto
    yarn add mobiletto

### Minimal install
The `mobiletto` and `mobiletto-lite` packages include support for all mobiletto storage drivers.

If you know the storage driver(s) that you will need ahead of time, you can lighten your app's
footprint by installing the `mobiletto-base` package, and then one or more of the `mobiletto-driver-` packages:

#### Minimal installation with npm

    npm install mobiletto-base                # install driver-less mobiletto

    npm install mobiletto-driver-s3           # install Amazon S3 driver
    npm install mobiletto-driver-b2           # install Backblaze B2 driver
    npm install mobiletto-driver-local        # install local filesystem driver
    npm install mobiletto-driver-indexeddb    # install IndexedDB driver

#### Minimal installation with yarn

    yarn add mobiletto-base                # install driver-less mobiletto

    yarn add mobiletto-driver-s3           # install Amazon S3 driver
    yarn add mobiletto-driver-b2           # install Backblaze B2 driver
    yarn add mobiletto-driver-local        # install local filesystem driver
    yarn add mobiletto-driver-indexeddb    # install IndexedDB driver

----
## Basic usage
A much more extensive example, showing most of the features offered:

    // When using mobiletto or mobiletto-lite, all drivers are included
    const { mobiletto } = require('mobiletto')

    // When using mobiletto-base, use registerDriver to load a storage driver before connecting 
    const { registerDriver, mobiletto } = = require('mobiletto-base')
    registerDriver('s3', require('mobiletto-driver-s3'))
    registerDriver('b2', require('mobiletto-driver-b2'))
    registerDriver('local', require('mobiletto-driver-local'))
    registerDriver('indexeddb', require('mobiletto-driver-indexeddb'))

    // General usage
    const api = await mobiletto(driverName, key, secret, opts)

    // To use 'local' driver:
    //   * key: base directory
    //   * secret: ignored, can be null
    //   * opts object:
    //     * readOnly: optional, never change anything on the filesystem; default is false
    //     * fileMode: optional, permissions used when creating new files, default is 0600. can be string or integer
    //     * dirMode: optional, permissions used when creating new directories, default is 0700. can be string or integer
    const local = await mobiletto('local', '/home/ubuntu/tmp', null, {fileMode: 0o0600, dirMode: '0700'})

    // To use 's3' driver:
    //   * key: AWS Access Key ID
    //   * secret: AWS Secret Key
    //   * opts object:
    //     * readOnly: optional, never change anything on the bucket; default is false
    //     * bucket: required, name of the S3 bucket
    //     * region: optional, the AWS region to communicate with, default is us-east-1
    //     * prefix: optional, all read/writes within the S3 bucket will be under this prefix
    //     * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'})

    // To use 'b2' driver:
    //   * key: Backblaze Key ID
    //   * secret: Backblaze Application Key
    //   * opts object:
    //     * readOnly: optional, never change anything on the bucket; default is false
    //     * bucket: required, the ID (**not the name**) of the B2 bucket
    //     * prefix: optional, all read/writes within the B2 bucket will be under this prefix
    //     * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    //     * partSize: optional, large files will be split into chunks of this size when uploading
    const b3 = await mobiletto('b2', b2_key_id, b2_app_key, {bucket: 'bk', partSize: 10000000})

    // To use 'indexeddb' driver:
    //   * key: IndexedDB database name
    //   * secret: ignored, can be null
    //   * opts object:
    //     * indexedDB: required, the indexedDB object (an instance of IDBFactory)
    const idb = await mobiletto('indexeddb', 'my_db', null, { indexedDB })

    // List files
    api.list()  // --> returns an array of metadata objects

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
    api.metadata(path)    // returns metadata object

    // The `metadata` method throws MobilettoNotFoundError if the path does not exist
    // When you call `safeMetadata` on a non-existent path, it returns null
    api.safeMetadata('/tmp/does_not_exist') // returns null
    
    // Read a file
    // Provide a callback that writes the data someplace
    const callback = (chunk) => { ... write chunk somewhere ...  } 
    api.read(path, callback)  // returns count of bytes read

    // Read an entire file at once
    const data = await api.readFile(path)  // returns a byte Buffer of the file contents
    
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
    local.api(path, generator)  // returns count of bytes written

    // Write an entire file at once (convenience method)
    await api.writeFile(path, bufferOrString)   // returns count of bytes written

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

## Metadata
The `metadata` command returns metadata about a single filesystem entry.
Likewise, the return value from the `list` command is an array of metadata objects.

A metadata object looks like this:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

The `type` property can be `file`, `dir`, `link`, or `special`.

Depending on the type of driver, a `list` command may not return all fields. The `name` and `type` properties
should always be present. A subsequent `metadata` command will return all available properties.

## Alternate import style
Import the fully-scoped module and use the `connect` function:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

## Caching
Mobiletto works best with a <a href="https://redis.io">redis</a> cache.

Mobiletto will attempt to connect to a redis instance on 127.0.0.1:6379

You can override either of these:
* Set the `MOBILETTO_REDIS_HOST` env var, mobiletto connect here instead of localhost
* Set the `MOBILETTO_REDIS_PORT` env var, this port will be used

Mobiletto will store all of its redis keys with the prefix `_mobiletto__`. You can change this
by setting the `MOBILETTO_REDIS_PREFIX` env var.

You can also set per-connection caching with the `opts.redisConfig` object:

    const redisConfig = {
        enabled: true,     // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

### Don't want redis caching?
To disable: pass `enabled: false` in your `opts.redisConfig` object when you establish your connection.

As discussed below, disabling caching will have an adverse effect on performance and incur more requests
to storage than you really need to.

### Caching guidance
**Encrypted storage**: reading/writing encrypted storage is only a little slower than normal,
but navigating around directories (which some things do) is fairly expensive. Using a redis cache
will give you a significant performance boost.

The default cache is safe, but doesn't perform well if you have a lot of write/remove operations.
Any write or remove operation invalidates the entire cache, ensuring subsequent reads will see the
latest changes.

### CLI tools
If you're using a CLI tool like [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
you'll definitely want the redis cache enabled, as it lasts across invocations of the `mo` command.

## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

The `mirror` command performs a one-time copy of all files from one mobiletto to another.
It does not run any process to maintain the mirror over time. Run the `mirror` command again
to synchronize any missing files.

The return value from `mirror` is a simple object with counters for how many files were successfully
mirrored and how many files had errors:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

WARNING: Mirroring large data sets can be very time-consuming and bandwidth-intensive

With the `mirror` call semantics it can sometimes be confusing to understand who is the
reader and who is the writer. Imagine it like an assignment statement: the "left-hand mobiletto"
is the thing being assigned to (mirrored data written), and the "right-hand mobiletto" (the
argument to the `mirror` method) is the value being assigned (mirrored data is read).

## Transparent encryption
Enable transparent client-side encryption:

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

What's happening? A separate "directory entry" (dirent) directory (encrypted) tracks what files are in that
directory (aka the dirent directory).
* The `list` command reads the directory entry files, decrypts each path listed; then returns metadata for each file
  * `list` commands are more inefficient, especially for directories with a large number of files
* The `write` command writes dirent files in each parent's dirent directory, recursively; then writes the file
  * `write` commands will incur O(N) writes, with N = depth in the directory hierarchy
* The `remove` command removes the corresponding dirent file, and its parent if empty, recursively; then removes the file
  * Non-recursive `remove` commands will incur O(N) reads and potentially as many deletes, with N = depth in the directory hierarchy
  * Recursive `remove` commands on large and deep filesystems can be expensive

Note that even with client-side encryption enabled, an adversary with full visibility into your encrypted server-side
storage, even without the key, can still see the total number of directories and how many files are in each, and with
some effort, discover some or all of the overall structure of the directory hierarchy.
*Note: Use a relatively flat structure for better security.*
The adversary would not know the names of the directories/files unless they also knew your encryption
key or had otherwise successfully cracked the encryption. All bets are off then!

### Performance and caching
Operations on encrypted storage can be slow. Recursive listings and removals can be very slow.
Caching via redis helps tremendously, but note that the cache is flushed upon any writes or removes.

## Key rotation
Create a mobiletto with your new key, then mirror the old data into it:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

## Driver interface
A driver is any JS file that exports a 'storageClient' function with this signature:

    function storageClient (key, secret, opts)

* `key`: a string, your API key (for the `local` driver this is the base directory)
* `secret`: a string, your API secret (can be omitted for the `local` driver)
* `opts`: an object, the properties are per-driver:
  * For `local`, the `fileMode` and `dirMode` properties determine how new creating files and directories are created
  * For `s3`, the `bucket` property is required. Optional properties are:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

The object that the storageClient function returns must define these functions:

    // Test the driver before using, ensure proper configuration
    async testConfig ()

    // List files in path (or from base-directory)
    // If recursive is true, list recursively
    // If visitor is defined, it will be an async function. await the visitor function on each file found
    // Otherwise, perform the listing and return an array of objects
    async list (path, recursive = false, visitor = null)  // path may be omitted
    
    // Read metadata for a path
    async metadata (path)
    
    // Read a file, return bytes read
    // callback receives a chunk of data. endCallback is called at end-of-stream
    async read (path, callback, endCallback = null)

    // Write a file, return bytes written
    // driver must be able to handle a generator or a stream
    async write (path, generatorOrReadableStream)

    // Remove a file, or recursively delete a directory
    // returns a string of a single path removed, or an array of multiple paths removed
    async remove (path, recursive = false, quiet = false)

## Logging
Mobiletto uses the [winston](https://www.npmjs.com/package/winston) logging library.

Logs **will** contain file paths and error messages, but will **never** contain keys, secrets,
or any other connection configuration information.

### Log level
Use the `MOBILETTO_LOG_LEVEL` environment variable to set the log level, using one
of the `npm` levels defined in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

The default level is `error`. The most verbose level is `silly`, although currently mobiletto
does not log at levels below `debug`

    MOBILETTO_LOG_LEVEL=silly   # maximum logs!

### Log file
By default, the logger writes to the console. To send logs to a file, set the `MOBILETTO_LOG_FILE`
environment variable. When logging to a file, logs will no longer be written to the console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

To turn off logging:

    MOBILETTO_LOG_FILE=/dev/null
