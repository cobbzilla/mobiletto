Mobiletto
=========

Mobiletto is a JavaScript storage abstraction layer, with optional transparent client-side encryption.

It supports apps that are agnostic to where files are stored.

All drivers are tested for identical behavior with over 35 tests for each driver.

Today the supported drivers are:

* `s3`: read/write an Amazon S3 bucket
* `local`: read/write to local filesystem

# Basic usage
    const { mobiletto } = require('mobiletto')

    // General usage
    const api = await mobiletto(driverName, key, secret, opts)

    // To use 'local' driver:
    //   * key: base directory
    //   * secret: ignored, can be null
    //   * opts object:
    //     * readOnly: optional, never change anything on the filesystem; default is false
    //     * mode: optional, filesystem permissions to set when creating new files and directories, default is 0700
    const local = await mobiletto('local', '/home/ubuntu/tmp', null, {mode: '0700'})

    // To use 's3' driver:
    //   * key: AWS access key
    //   * secret: AWS secret key
    //   * opts object:
    //     * readOnly: optional, never change anything on the bucket; default is false
    //     * bucket: required, name of the S3 bucket
    //     * region: optional, the AWS region to communicate with, default is us-east-1
    //     * prefix: optional, all read/writes within the S3 bucket will be under this prefix
    //     * delimiter: optional, directory delimiter, default is '/' (note: always '/' when encryption is enabled)
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'})

    // List files
    local.list()  // --> returns an array of file objects
    s3.list()     // --> returns an array of file objects

    // List files in a directory
    const path = 'some/path'
    local.list(path)  // --> returns an array of file objects
    s3.list(path)     // --> returns an array of file objects
    
    // Read metadata for a file
    local.metadata(path)
    s3.metadata(path)
    
    // Read a file
    // Provide a callback that writes the data someplace
    const callback = (chunk) => { ... write chunk somewhere ...  } 
    local.read(path, callback)
    s3.read(path, callback)

    // Read an entire file at once (convenience method)
    const localData = await local.readFile(path)  // returns a byte Buffer of the file contents
    const s3Data = await s3.readFile(path)  // returns a byte Buffer of the file contents
    
    // Write a file
    // Provide a generator function that yields chunks of data 
    const generator = function* () {
      while ( ... more-data-to-return ... ) {
        data = ... load-data ...
        yield data
      }
    } 
    local.write(path, generator)
    s3.write(path, generator)

    // Write an entire file at once (convenience method)
    await local.writeFile(path, bufferOrString)  // returns count of bytes written
    await s3.writeFile(path, bufferOrString)      // returns count of bytes written

    // Delete a file
    // Quiet param is optional (default false), when set errors will not be thrown if the path does not exist 
    const quiet = true
    local.remove(path, {quiet})
    s3.remove(path, {quiet})

    // Recursively delete a directory
    const recursive = true
    local.remove(path, {recursive, quiet})
    s3.remove(path, {recursive, quiet})

# Alternate usage
Import the fully-scoped module and use the `connect` function:

    const storage = require('mobiletto')
    const s3 = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'})
    const objectData = await s3.readFile('some/path')

# Transparent Encryption
Enable transparent client-side encryption:

    // Pass encryption parameters
    const encryption = {
      key: randomstring.generate(128), // required, must be >= 32 chars
      iv: randomstring.generate(128),  // optional, default is to derive IV from key
      algo: 'aes-256-cbc'              // optional, aes-256-cbc is the default
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

# Driver Interface
A driver is any JS file that exports a 'storageClient' function with this signature:

    function storageClient (key, secret, opts)

* `key`: a string, your API key (for the `local` driver this is the base directory)
* `secret`: a string, your API secret (can be omitted for the `local` driver)
* `opts`: an object, the properties are per-driver:
  * For `local`, the `mode` property is the file permissions to set when creating new files and directories
  * For `s3`, the `bucket` property is required. Optional properties are:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

The object that the storageClient function returns must define these functions:

    // Test the driver before using, ensure proper configuration
    async testConfig ()

    // Find DNS records that match the given domain, type (if provided) and name (if provided)
    async list (path)  // path may be omitted
    
    // Read metadata for a path
    async metadata (path)
    
    // Read a file
    // callback receives a chunk of data. endCallback is called at end-of-stream
    async read (path, callback, endCallback = null)

    // Write a file
    // readFunc returns the data you want to write
    async write (path, readFunc)

    // Remove a file, or recursively delete a directory
    async remove (path, {recursive = false, quiet = false})
