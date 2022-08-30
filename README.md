Mobiletto
=========

Mobiletto is a JavaScript storage abstraction layer, with optional transparent client-side encryption.

It supports apps that are agnostic to where files are stored.

All drivers are tested for identical behavior with over 55 tests for each driver.

Today the supported drivers are:

* `s3`: read/write an Amazon S3 bucket
* `local`: read/write to local filesystem

### mobiletto-cli
Mobiletto is intended to be used as a library by other JavaScript code.

To work with mobiletto at the command-line, use [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

### Source
* [mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
* [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

## TLDR
A simple example using the mobiletto `s3` driver.

This code would run the same if the driver were `local`.

    const storage = require('mobiletto')
    const s3 = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk'})

    // list objects: returns array of metadata objects
    const listing = await s3.list()
    const dirList = await s3.list('some/dir/')
    const everything = await s3.list('', {recursive: true})

    // write an entire file in one-shot
    let bytesWritten = await s3.writeFile('some/path', someBufferOfData)

    // write a file from a stream/generator
    bytesWritten = await s3.write('some/path', streamOrGenerator)

    // read an entire file in one-shot
    const byteBuffer = await s3.readFile('some/path')

    // read file as a stream using data callback
    const bytesRead = await s3.read('some/path', (chunk) => { ...do something with chunk... } )

    // remove a file, returns true upon success
    const removed = await s3.remove('some/path')

----
# Contents
* [Basic usage](#Basic-usage)
* [Metadata](#Metadata)
* [Caching](#Caching)
* [Mirroring](#Caching)
* [Alternate import style](#Alternate-import-style)
* [Transparent encryption](#Transparent-encryption)
* [Key rotation](#Key-rotation)
* [Driver interface](#Driver-interface)
* [Logging](#Logging)
----
## Basic usage
    const { mobiletto } = require('mobiletto')

    // General usage
    const api = await mobiletto(driverName, key, secret, opts)

    // To use 'local' driver:
    //   * key: base directory
    //   * secret: ignored, can be null
    //   * opts object:
    //     * readOnly: optional, never change anything on the filesystem; default is false
    //     * fileMode: optional, permissions used when creating new files, default is 0600. can be string or integer
    //     * dirMode: optional, permissions used when creating new directories, default is 0700. can be string or integer
    //     * cacheSize: optional, LRU cache for `list` results, default is no cache
    const local = await mobiletto('local', '/home/ubuntu/tmp', null, {fileMode: 0o0600, dirMode: '0700', cacheSize: 100})

    // To use 's3' driver:
    //   * key: AWS access key
    //   * secret: AWS secret key
    //   * opts object:
    //     * readOnly: optional, never change anything on the bucket; default is false
    //     * bucket: required, name of the S3 bucket
    //     * region: optional, the AWS region to communicate with, default is us-east-1
    //     * prefix: optional, all read/writes within the S3 bucket will be under this prefix
    //     * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    //     * cacheSize: optional, LRU cache for `list` results, default is no cache
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1', cacheSize: 100})

    // List files
    local.list()  // --> returns an array of metadata objects
    s3.list()     // --> returns an array of metadata objects

    // List files recursively
    local.list({ recursive: true })
    s3.list({ recursive: true })

    // List files in a directory
    const path = 'some/path'
    local.list(path)
    s3.list(path, { recursive: true }) // also supports recursive flag

    // Visit files in a directory -- visitor function must be async
    local.list(path, { visitor: myAsyncFunc })
    s3.list(path, { visitor: myAsyncFunc, recursive: true })

    // The `list` method throws MobilettoNotFoundError if the path does not exist
    // When you call `safeList` on a non-existent path, it returns an empty array
    s3.safeList('/path/that/does/not/exist') // returns []
    
    // Read metadata for a file
    local.metadata(path)    // returns metadata object
    s3.metadata(path)       // returns metadata object

    // The `metadata` method throws MobilettoNotFoundError if the path does not exist
    // When you call `safeMetadata` on a non-existent path, it returns null
    local.safeMetadata('/tmp/does_not_exist') // returns null
    
    // Read a file
    // Provide a callback that writes the data someplace
    const callback = (chunk) => { ... write chunk somewhere ...  } 
    local.read(path, callback)  // returns count of bytes read
    s3.read(path, callback)     // returns count of bytes read

    // Read an entire file at once (convenience method)
    const localData = await local.readFile(path)  // returns a byte Buffer of the file contents
    const s3Data = await s3.readFile(path)        // returns a byte Buffer of the file contents
    
    // Write a file
    // Provide a generator function that yields chunks of data 
    const generator = function* () {
      while ( ... more-data-to-return ... ) {
        data = ... load-data ...
        yield data
      }
    } 
    local.write(path, generator)  // returns count of bytes written
    s3.write(path, generator)     // returns count of bytes written

    // Write an entire file at once (convenience method)
    await local.writeFile(path, bufferOrString)   // returns count of bytes written
    await s3.writeFile(path, bufferOrString)      // returns count of bytes written

    // Delete a file
    // Quiet param is optional (default false), when set errors will not be thrown if the path does not exist
    // Always returns a value or throws an error.
    // Return value may be a single string of the file removed, or an array of all files removed (driver-dependent)
    const quiet = true
    local.remove(path, {quiet}) // returns single path removed
    s3.remove(path, {quiet})    // returns single path removed

    // Recursively delete a directory and do it quietly (do not report errors)
    const recursive = true
    const quiet = true
    local.remove(path, {recursive, quiet}) // returns  paths removed
    s3.remove(path, {recursive, quiet})    // returns array containing all paths removed

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
    const opts = {bucket: 'bk', region: 'us-east-1', cacheSize: 100}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

## Caching
Many apps, by design, will repeatedly call `list` even though the data the app is listing hasn't changed at all.

Save bandwidth and increase performance by passing a `cacheSize` option in the `opts` object. 

Any `write` or `remove` operation will clear the entire cache.

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
    
    // Read a file
    // callback receives a chunk of data. endCallback is called at end-of-stream
    async read (path, callback, endCallback = null)

    // Write a file
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

The default level is `warn`. The most verbose level is `silly`, although currently mobiletto
does not log at levels below `debug`

    MOBILETTO_LOG_LEVEL=silly   # maximum logs!

### Log file
By default, the logger writes to the console. To send logs to a file, set the `MOBILETTO_LOG_FILE`
environment variable. When logging to a file, logs will no longer be written to the console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

To turn off logging:

    MOBILETTO_LOG_FILE=/dev/null
