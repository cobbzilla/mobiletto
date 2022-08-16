Mobiletto
=========

Mobiletto is a JavaScript storage abstraction layer.

It supports apps that are agnostic to where files are stored.

# Using storage services
    const { mobiletto } = require('mobiletto')
    const local = await mobiletto('local', '/home/ubuntu/tmp')
    const s3 = await mobiletto('s3', aws_key, aws_secret, {bucket: 'example-bucket'})

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
    local.remove(path)
    s3.remove(path)

    // recursively delete a directory
    const recursive = true
    local.remove(path, recursive)
    s3.remove(path, recursive)

# Driver Interface
A driver is any JS file that exports a 'storageClient' function like this:

    function storageClient (key, secret, opts)

* key: your API key (for the `local` driver this is the base directory)
* secret: your API secret (can be omitted for the `local` driver)
* opts: depends on the driver
  * For `local`, this can be omitted
  * For `s3`, the 'bucket' property is required. Other properties can be specified:
    * region: the S3 region (default is us-east-1)
    * prefix: a prefix to prepend to all S3 paths

The object that the storageClient function returns must support these functions:

    // Find DNS records that match the given domain, type (if provided) and name (if provided)
    async list (path)  // path may be omitted
    
    // Read metadata for a path
    async metadata (path)
    
    // Read a file
    async read (path, callback) // callback receives a chunk of data; a null chunk signals end of data

    // Write a file
    async write (path, readFunc) // readFunc returns the data you want to write, or null to finish
