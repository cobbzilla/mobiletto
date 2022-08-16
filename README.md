Mobiletto
=========

Mobiletto is a JavaScript storage abstraction layer.

It supports apps that are agnostic to where files are stored.

# Using storage services
    const { mobiletto } = require('mobiletto')

    // general usage
    const api = await mobiletto(driverName, key, secret, opts)

    // to use 'local' driver:
    //   * key: base directory
    //   * secret: ignored, can be null
    //   * opts object:
    //     * mode: optional, filesystem permissions to set when creating new files and directories, default is 0700
    const local = await mobiletto('local', '/home/ubuntu/tmp', null, {mode: '0700'})

    // to use 's3' driver:
    //   * key: AWS access key
    //   * secret: AWS secret key
    //   * opts object:
    //     * bucket: required, name of the S3 bucket
    //     * region: optional, the AWS region to communicate with, default is us-east-1
    //     * prefix: optional, all read/writes within the S3 bucket will be under this prefix
    //     * delimiter: optional, directory delimiter, default is '/'
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'})

    // list files
    local.list()  // --> returns an array of file objects
    s3.list()     // --> returns an array of file objects

    // list files in a directory
    const path = 'some/path'
    local.list(path)  // --> returns an array of file objects
    s3.list(path)     // --> returns an array of file objects
    
    // read metadata for a file
    local.metadata(path)
    s3.metadata(path)
    
    // read a file
    // Provide a callback that writes the data someplace
    const callback = (chunk) => { ... write chunk somewhere ...  } 
    local.read(path, callback)
    s3.read(path, callback)
    
    // write a file
    // Provide a generator function that yields chunks of data 
    const generator = function* () {
      while ( ... more-data-to-return ... ) {
        data = ... load-data ...
        yield data
      }
    } 
    local.write(path, generator)
    s3.write(path, generator)

    // delete a file
    // Quiet param is optional (default false), when set errors will not be thrown if the path does not exist 
    const quiet = true
    local.remove(path, {quiet})
    s3.remove(path, {quiet})

    // recursively delete a directory
    const recursive = true
    local.remove(path, {recursive, quiet})
    s3.remove(path, {recursive, quiet})

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

    // Find DNS records that match the given domain, type (if provided) and name (if provided)
    async list (path)  // path may be omitted
    
    // Read metadata for a path
    async metadata (path)
    
    // Read a file
    async read (path, callback) // callback receives a chunk of data; a null chunk signals end of data

    // Write a file
    async write (path, readFunc) // readFunc returns the data you want to write, or null to finish

    // Remove a file, or recursively delete a directory
    async remove (path, {recursive = false, quiet = false})
