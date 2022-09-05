ମୋବାଇଲଟୋ |
 =========

 ମୋବାଇଲଟୋ ହେଉଛି ଏକ ଜାଭାସ୍କ୍ରିପ୍ଟ ଷ୍ଟୋରେଜ୍ ଅବଷ୍ଟ୍ରାକସନ ସ୍ତର, ଇଚ୍ଛାଧୀନ ସ୍ୱଚ୍ଛ କ୍ଲାଏଣ୍ଟ-ସାଇଡ୍ ଏନକ୍ରିପସନ୍ ସହିତ |

 # ବିଷୟବସ୍ତୁ
 * [ମୋବାଇଲ୍ କାହିଁକି?](# କାହିଁକି-ମୋବାଇଲଟୋ?)
 * [ଶୀଘ୍ର ଆରମ୍ଭ](# ଶୀଘ୍ର ଆରମ୍ଭ)
 * [Mobiletto CLI](# mobiletto-cli)
 * [ଉତ୍ସ](# ଉତ୍ସ)
 * [ମ Basic ଳିକ ବ୍ୟବହାର](# ମ Basic ଳିକ-ବ୍ୟବହାର)
 * [ମେଟାଡାଟା](# ମେଟାଡାଟା)
 * [ବିକଳ୍ପ ଆମଦାନୀ ଶ style ଳୀ](# ବିକଳ୍ପ-ଆମଦାନୀ-ଶ style ଳୀ)
 * [କ୍ୟାଚିଂ](# କ୍ୟାଚିଂ)
 * [ଦର୍ପଣ](# ଦର୍ପଣ)
 * [ସ୍ୱଚ୍ଛ ଏନକ୍ରିପସନ୍](# ସ୍ୱଚ୍ଛ-ଏନକ୍ରିପସନ୍)
 * [କି ଘୂର୍ଣ୍ଣନ](# କି-ଘୂର୍ଣ୍ଣନ)
 * [ଡ୍ରାଇଭର ଇଣ୍ଟରଫେସ୍](# ଡ୍ରାଇଭର-ଇଣ୍ଟରଫେସ୍)
 * [ଲଗିଂ](# ଲଗିଂ)

 # ଏହାକୁ ଅନ୍ୟ ଭାଷାରେ ପ Read ନ୍ତୁ |
 ଏହି README.md ଡକ୍ୟୁମେଣ୍ଟକୁ [hokeylization](https://github.com/cobbzilla/hokeylization) ମାଧ୍ୟମରେ ଅନୁବାଦ କରାଯାଇଛି |
 ** [ଗୁଗୁଲ୍ ଅନୁବାଦ ଦ୍ୱାରା ସମର୍ଥିତ ପ୍ରତ୍ୟେକ ଭାଷା](https://cloud.google.com/translate/docs/languages)! **

 ମୁଁ ନିଶ୍ଚିତ ଯେ ଏହା ସିଦ୍ଧ ନୁହେଁ, କିନ୍ତୁ ମୁଁ ଆଶା କରେ ଏହା କିଛି ନୁହେଁ!

 [🇸🇦 ଆରବୀ](ଡକସ୍ / ଆର / README.md)
 [🇧🇩 ବଙ୍ଗାଳୀ](ଡକସ୍ / bn / README.md)
 [🇩🇪 ଜର୍ମାନ](ଡକସ୍ / ଡି / README.md)
 [🇺🇸 ଇଂରାଜୀ](ଡକସ୍ / en / README.md)
 [🇪🇸 ସ୍ପାନିସ୍](ଡକସ୍ / ଏସ୍ / README.md)
 [🇫🇷 ଫରାସୀ](ଡକସ୍ / fr / README.md)
 [🇹🇩 ହାଉସା](ଡକସ୍ / ହା / README.md)
 [🇮🇳 ହିନ୍ଦୀ](ଡକସ୍ / ହାଏ / README.md)
 [🇮🇩 ଇଣ୍ଡୋନେସିଆ](ଡକସ୍ / id / README.md)
 [🇮🇹 ଇଟାଲୀୟ](ଡକସ୍ / ଏହା / README.md)
 [🇯🇵 ଜାପାନିଜ୍](ଡକସ୍ / ja / README.md)
 [🇰🇷 କୋରିଆନ୍](ଡକସ୍ / କୋ / README.md)
 [🇮🇳 ମାରନ୍ତୀ](ଡକସ୍ / mr / README.md)
 [🇵🇱 ପୋଲାଣ୍ଡ](ଡକସ୍ / pl / README.md)
 [🇧🇷 ପର୍ତ୍ତୁଗୀଜ୍](ଡକସ୍ / pt / README.md)
 [🇷🇺 Russian ଷିୟ](ଡକସ୍ / ru / README.md)
 [Wa ସ୍ Swahili ାହିଲୀ](ଡକସ୍ / sw / README.md)
 [Ag ଟ୍ୟାଗଲଗ୍](ଡକସ୍ / tl / README.md)
 [🇹🇷 ତୁର୍କୀ](ଡକସ୍ / ଟ୍ର / README.md)
 [🇵🇰 ଉର୍ଦ୍ଦୁ](ଡକସ୍ / ur / README.md)
 [🇻🇳 ଭିଏତନାମ](ଡକସ୍ / vi / README.md)
 [🇨🇳 ଚାଇନିଜ୍](ଡକସ୍ / zh / README.md)


 ** [📚 ... ସମସ୍ତ ଭାଷା ...](ଡକସ୍ / README.md) **
 ----

 ### README ର ଏହି ଅନୁବାଦରେ କିଛି ଅସୁବିଧା ଅଛି କି?
 ମୂଳ [README] ର ଏହି ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁବାଦ (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ତ୍ରୁଟିଯୁକ୍ତ ହୋଇପାରେ - * ସଂଶୋଧନଗୁଡିକ ଅତ୍ୟନ୍ତ ସ୍ୱାଗତଯୋଗ୍ୟ! * ଦୟାକରି [GitHub ରେ ଟାଣ ଅନୁରୋଧ] ପଠାନ୍ତୁ (https://github.com/cobbzilla/mobiletto/pulls),
 କିମ୍ବା ଯଦି ଆପଣ ତାହା କରିବାକୁ ଆରାମଦାୟକ ନୁହଁନ୍ତି, [ଏକ ସମସ୍ୟା ଖୋଲନ୍ତୁ](https://github.com/cobbzilla/mobiletto/issues)

 ଯେତେବେଳେ ଆପଣ ଏକ ଅନୁବାଦ ବିଷୟରେ ଏକ ନୂତନ GitHub ଇସୁ ସୃଷ୍ଟି କରନ୍ତି, ଦୟାକରି କରନ୍ତୁ:
 * ପୃଷ୍ଠା URL ଅନ୍ତର୍ଭୂକ୍ତ କରନ୍ତୁ (ବ୍ରାଉଜର୍ ଠିକଣା ଦଣ୍ଡିକାରୁ କପି / ଲେପନ କରନ୍ତୁ)
 * ଭୁଲ ସଠିକ୍ ପାଠ୍ୟ ଅନ୍ତର୍ଭୂକ୍ତ କରନ୍ତୁ (ବ୍ରାଉଜରରୁ କପି / ଲେପନ କରନ୍ତୁ)
 * ଦୟାକରି କ’ଣ ଭୁଲ୍ ବର୍ଣ୍ଣନା କର - ଅନୁବାଦ ଭୁଲ୍ କି? ଫର୍ମାଟିଂ କ h ଣସି ପ୍ରକାରେ ଭାଙ୍ଗିଗଲା କି?
 * ଦୟାକରି ଏକ ଉତ୍ତମ ଅନୁବାଦର ଏକ ପ୍ରସ୍ତାବ ପ୍ରଦାନ କରନ୍ତୁ, କିମ୍ବା ପାଠ କିପରି ସଠିକ୍ ଭାବରେ ଫର୍ମାଟ୍ ହେବା ଉଚିତ |
 * **ଧନ୍ୟବାଦ!**

 ## ମୋବାଇଲ୍ କାହିଁକି?

 ### ବିଦାୟ ବିକ୍ରେତା ଲକ୍-ଇନ୍!
 ବିଭିନ୍ନ କ୍ଲାଉଡ୍ ଷ୍ଟୋରେଜ୍ ପ୍ରଦାନକାରୀଙ୍କର ଅସଙ୍ଗତ API ଗୁଡିକ ଅଛି | ଏପରିକି ଯେଉଁମାନେ "S3 ସୁସଙ୍ଗତତା" ପାଇଁ ଚେଷ୍ଟା କରନ୍ତି |
 ଇଡିଓସିନ୍କ୍ରାଟିକ୍ ଆଚରଣ ଅଛି |

 ଯେତେବେଳେ ତୁମେ ତୁମର ଆପ୍ ପାଇଁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଷ୍ଟୋରେଜ୍ ବିକ୍ରେତା ବାଛିବ, ଯଦି ତୁମେ ସିଧାସଳଖ ସେମାନଙ୍କ API, ତୁମର ଆପ୍ କୁ କୋଡ୍ କର |
 ବର୍ତ୍ତମାନ ସେହି ସେବା ଉପରେ ନିର୍ଭରଶୀଳ | ସମୟ ଗଡିବା ସହ କୋଡ୍ ଜମା ହେବା ସହିତ ବିକ୍ରେତା ପରିବର୍ତ୍ତନ ହୁଏ |
 ଦିନକୁ ଦିନ ଅସମ୍ଭବ | ବିକ୍ରେତା ଲକ୍-ଇନ୍ ର ମଜାଳିଆ ଦୁନିଆକୁ ସ୍ Welcome ାଗତ!

 ଏହି ସମସ୍ୟାର ସମାଧାନ ପାଇଁ ମୋବାଇଲଟୋ ଡିଜାଇନ୍ କରାଯାଇଥିଲା | ମୋବାଇଲ୍ ଆପ୍ ର API କୁ ଆପଣଙ୍କର ଆପ୍ କୋଡ୍ କରି, ଆପଣ ସହଜରେ କରିପାରିବେ |
 ଷ୍ଟୋରେଜ୍ ପ୍ରଦାନକାରୀ ପରିବର୍ତ୍ତନ କରନ୍ତୁ ଏବଂ ଜାଣନ୍ତୁ ଯେ ଆପଣଙ୍କର ଆପର ଷ୍ଟୋରେଜ୍ ସ୍ତର ସମାନ ଭାବରେ ଆଚରଣ କରିବ |

 ### ବିସ୍ତୃତ ପରୀକ୍ଷା |
 ପ୍ରତ୍ୟେକ ଡ୍ରାଇଭର ପାଇଁ 60+ ପରୀକ୍ଷା ସହିତ ସମାନ ଆଚରଣ ପାଇଁ ସମସ୍ତ ଡ୍ରାଇଭର ପରୀକ୍ଷା କରାଯାଏ |
 ଆମେ ପ୍ରତ୍ୟେକ ଡ୍ରାଇଭରକୁ ପ୍ରତ୍ୟେକ ମିଶ୍ରଣ ସହିତ ପରୀକ୍ଷା କରୁ:
 * ଏନକ୍ରିପସନ୍: ଉଭୟ ସକ୍ଷମ ଏବଂ ଅକ୍ଷମ |
 * ରେଡିସ୍ କ୍ୟାଚ୍: ଉଭୟ ସକ୍ଷମ ଏବଂ ଅକ୍ଷମ |

 ଏହି ପନ୍ଥା ଆମକୁ ଶାନ୍ତି-ମାନସିକତା ଦେଇଥାଏ ଯେ ଆପଣ କେଉଁ ଡ୍ରାଇଭର ବ୍ୟବହାର କରନ୍ତି ନା କାହିଁକି ମୋବାଇଲଟୋ ସମାନ ଆଚରଣ କରିବ,
 ଏବଂ ଆପଣ କ୍ୟାଚିଂ ଏବଂ / କିମ୍ବା ଏନକ୍ରିପସନ୍ ସକ୍ଷମ କରନ୍ତି କି ନାହିଁ ନିର୍ବିଶେଷରେ |

 ### ଡ୍ରାଇଭର ସମର୍ଥନ
 ସାମ୍ପ୍ରତିକ ମୋବାଇଲ୍ ଷ୍ଟୋରେଜ୍ ଡ୍ରାଇଭରଗୁଡ଼ିକ:
 * `s3` : ଆମାଜନ S3 |
 * `b2` : ବ୍ୟାକବ୍ଲେଜ୍ B2 |
 * `local` ସ୍ଥାନୀୟ": ସ୍ଥାନୀୟ ଫାଇଲ୍ ସିଷ୍ଟମ୍ |

 * ଅଧିକ କ୍ଲାଉଡ୍ ଷ୍ଟୋରେଜ୍ ପ୍ରଦାନକାରୀଙ୍କୁ ସମର୍ଥନ କରିବାକୁ ଅବଦାନଗୁଡିକ ସ୍ୱାଗତଯୋଗ୍ୟ! *

 ## mobiletto-cli
 ମୋବାଇଲଟୋ ଅନ୍ୟ ଜାଭାସ୍କ୍ରିପ୍ଟ କୋଡ୍ ଦ୍ୱାରା ଲାଇବ୍ରେରୀ ଭାବରେ ବ୍ୟବହୃତ ହେବା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ |

 ମୋବାଇଲ୍ ଲାଇନ୍ ସହିତ କମାଣ୍ଡ୍ ଲାଇନ୍ ରେ କାମ କରିବାକୁ, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ବ୍ୟବହାର କରନ୍ତୁ |

 ## ଉତ୍ସ |
 * [GitHub ରେ mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm ରେ mobiletto](https://www.npmjs.com/package/mobiletto)

 ## ଶୀଘ୍ର ଆରମ୍ଭ |
 Mobiletto `s3` ଡ୍ରାଇଭର ବ୍ୟବହାର କରି ଏକ ସଂକ୍ଷିପ୍ତ ଉଦାହରଣ |

 ଯଦି ଡ୍ରାଇଭର `b2` କିମ୍ବା `local` ” ଥାଏ ତେବେ ଏହି କୋଡ୍ ସମାନ ଭାବରେ ଚାଲିବ |

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
 ## ମ Basic ଳିକ ବ୍ୟବହାର |
 ପ୍ରଦାନ କରାଯାଇଥିବା ଅଧିକାଂଶ ବ features ଶିଷ୍ଟ୍ୟଗୁଡିକ ଦର୍ଶାଇ ଏକ ଅଧିକ ବିସ୍ତୃତ ଉଦାହରଣ:

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

 ## ମେଟାଡାଟା |
 ଗୋଟିଏ `metadata` କମାଣ୍ଡ ଗୋଟିଏ ଫାଇଲ୍ ସିଷ୍ଟମ୍ ଏଣ୍ଟ୍ରି ବିଷୟରେ ମେଟାଡାଟା ରିଟର୍ନ କରେ |
 ସେହିଭଳି, `list` ରିଟର୍ନ ଭାଲ୍ୟୁ ହେଉଛି ମେଟାଡାଟା ବସ୍ତୁର ଏକ ଆରେ |

 ଏକ ମେଟାଡାଟା ବସ୍ତୁ ଏହିପରି ଦେଖାଯାଏ:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ସମ୍ପତ୍ତି "ଫାଇଲ୍", `dir` , `link` , କିମ୍ବା `special` `file`

 ଡ୍ରାଇଭର ପ୍ରକାର ଉପରେ ନିର୍ଭର କରି, ଏକ `list` ନିର୍ଦ୍ଦେଶ ସମସ୍ତ କ୍ଷେତ୍ର ଫେରସ୍ତ କରିପାରିବ ନାହିଁ | `name` ଏବଂ `type` ଗୁଣ |
 ସର୍ବଦା ଉପସ୍ଥିତ ରହିବା ଉଚିତ୍ | ପରବର୍ତ୍ତୀ `metadata` କମାଣ୍ଡ ସମସ୍ତ ଉପଲବ୍ଧ ଗୁଣଗୁଡିକ ଫେରସ୍ତ କରିବ |

 ## ବିକଳ୍ପ ଆମଦାନୀ ଶ style ଳୀ |
 ସମ୍ପୁର୍ଣ୍ଣ ସ୍କୋପଡ୍ ମଡ୍ୟୁଲ୍ ଆମଦାନୀ କରନ୍ତୁ ଏବଂ `connect` କାର୍ଯ୍ୟକୁ ବ୍ୟବହାର କରନ୍ତୁ:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## କ୍ୟାଚିଂ
 <a href="https://redis.io">ମୋବାଇଲଟୋ</a> ଏକ ରେଡିସ୍ କ୍ୟାଚ୍ ସହିତ ସର୍ବୋତ୍ତମ କାର୍ଯ୍ୟ କରେ |

 ମୋବାଇଲଟୋ 127.0.0.1:6379 ରେ ଏକ ରେଡିସ୍ ଇନଷ୍ଟାଣ୍ଟ ସହିତ ସଂଯୋଗ କରିବାକୁ ଚେଷ୍ଟା କରିବ |

 ଆପଣ ଏଥିରୁ କ either ଣସିଟିକୁ ନବଲିଖନ କରିପାରିବେ:
 * `MOBILETTO_REDIS_HOST` env var ସେଟ୍ କରନ୍ତୁ, ମୋବାଇଲଟୋ ଲୋକାଲ୍ ହୋଷ୍ଟ ପରିବର୍ତ୍ତେ ଏଠାରେ ସଂଯୋଗ କରନ୍ତୁ |
 * `MOBILETTO_REDIS_PORT` env var ସେଟ୍ କରନ୍ତୁ, ଏହି ପୋର୍ଟ ବ୍ୟବହାର ହେବ |

 ମୋବାଇଲଟୋ ଏହାର ସମସ୍ତ ରେଡିସ୍ ଚାବିକୁ ଉପସର୍ଗ `_mobiletto__` ସହିତ ସଂରକ୍ଷଣ କରିବ | ଆପଣ ଏହାକୁ ପରିବର୍ତ୍ତନ କରିପାରିବେ |
 `MOBILETTO_REDIS_PREFIX` env var ସେଟିଂ କରି |

 ଆପଣ `opts.redisConfig` ବସ୍ତୁ ସହିତ ପ୍ରତି-ସଂଯୋଗ କ୍ୟାଚିଂ ମଧ୍ୟ ସେଟ୍ କରିପାରିବେ:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ରେଡିସ୍ କ୍ୟାଚିଂ ଚାହୁଁନାହାଁନ୍ତି କି?
 ଅକ୍ଷମ କରିବାକୁ: ଯେତେବେଳେ ତୁମେ ତୁମର ସଂଯୋଗ ସ୍ଥାପନ କର, ତୁମର `opts.redisConfig` ବସ୍ତୁରେ `enabled: false` ପାସ୍ କର |

 ଯେପରି ନିମ୍ନରେ ଆଲୋଚନା କରାଯାଇଛି, କ୍ୟାଚିଂ ଅକ୍ଷମ କରିବା କାର୍ଯ୍ୟଦକ୍ଷତା ଉପରେ ପ୍ରତିକୂଳ ପ୍ରଭାବ ପକାଇବ ଏବଂ ଅଧିକ ଅନୁରୋଧ ବହନ କରିବ |
 ଷ୍ଟୋରେଜ୍ କରିବାକୁ ଯାହା ଆପଣଙ୍କୁ ପ୍ରକୃତରେ ଆବଶ୍ୟକ |

 ### କ୍ୟାଚିଂ ଗାଇଡ୍
 ** ଏନକ୍ରିପ୍ଟେଡ୍ ଷ୍ଟୋରେଜ୍ **: ଏନକ୍ରିପ୍ଟେଡ୍ ଷ୍ଟୋରେଜ୍ ପ reading ିବା / ଲେଖିବା ସାଧାରଣ ଅପେକ୍ଷା ଟିକେ ମନ୍ଥର,
 କିନ୍ତୁ ଡିରେକ୍ଟୋରୀଗୁଡିକ (ଯାହା କିଛି ଜିନିଷ କରେ) ଚାରିପାଖରେ ନେଭିଗେଟ୍ କରିବା ଯଥେଷ୍ଟ ମହଙ୍ଗା ଅଟେ | ଏକ ରେଡିସ୍ କ୍ୟାଚ୍ ବ୍ୟବହାର କରି |
 ଆପଣଙ୍କୁ ଏକ ମହତ୍ performance ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟଦକ୍ଷତା ବୃଦ୍ଧି କରିବ |

 ଡିଫଲ୍ଟ କ୍ୟାଚ୍ ସୁରକ୍ଷିତ, କିନ୍ତୁ ଯଦି ଆପଣଙ୍କର ବହୁତ ଲେଖା / ଅପସାରଣ କାର୍ଯ୍ୟ ଅଛି ତେବେ ଭଲ ପ୍ରଦର୍ଶନ କରେ ନାହିଁ |
 ଯେକ Any ଣସି ଲେଖା କିମ୍ବା ଅପସାରଣ ଅପରେସନ୍ ସମଗ୍ର କ୍ୟାଚ୍କୁ ଅବ alid ଧ କରେ, ପରବର୍ତ୍ତୀ ପଠନଗୁଡ଼ିକ ନିଶ୍ଚିତ କରିବ |
 ସର୍ବଶେଷ ପରିବର୍ତ୍ତନଗୁଡ଼ିକ |

 ### CLI ସାଧନଗୁଡ଼ିକ |
 ଯଦି ଆପଣ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ପରି ଏକ CLI ଉପକରଣ ବ୍ୟବହାର କରୁଛନ୍ତି,
 ଆପଣ ନିଶ୍ଚିତ ଭାବରେ ରେଡିସ୍ କ୍ୟାଚ୍ ସକ୍ଷମ କରିବାକୁ ଚାହାଁନ୍ତି, ଯେହେତୁ ଏହା `mo` କମାଣ୍ଡର ଆହ୍ୱାନରେ ରହିଥାଏ |

 ## ଦର୍ପଣ |

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` କମାଣ୍ଡ୍ ଗୋଟିଏ ମୋବାଇଲ୍ ଟୋଟ୍ ରୁ ଅନ୍ୟ ଫାଇଲ୍ ର ଏକ ଥର କପି କରିଥାଏ |
 ସମୟ ସହିତ ଦର୍ପଣକୁ ବଜାୟ ରଖିବା ପାଇଁ ଏହା କ any ଣସି ପ୍ରକ୍ରିୟା ଚଲାଇ ନଥାଏ | ପୁନର୍ବାର `mirror` ନିର୍ଦ୍ଦେଶକୁ ଚଲାନ୍ତୁ |
 ଯେକ missing ଣସି ନିଖୋଜ ଫାଇଲଗୁଡ଼ିକୁ ସିଙ୍କ୍ରୋନାଇଜ୍ କରିବାକୁ |

 `mirror` ରୁ ରିଟର୍ନ ମୂଲ୍ୟ ହେଉଛି କେତେ ସରଳ ଫାଇଲ୍ ପାଇଁ କାଉଣ୍ଟର ସହିତ ଏକ ସରଳ ବସ୍ତୁ |
 ପ୍ରତିବିମ୍ବିତ ଏବଂ କେତେ ଫାଇଲରେ ତ୍ରୁଟି ଥିଲା:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ସତର୍କବାଣୀ: ବଡ଼ ଡାଟା ସେଟ୍କୁ ଦର୍ପଣ କରିବା ଅତ୍ୟନ୍ତ ସମୟ ସାପେକ୍ଷ ଏବଂ ବ୍ୟାଣ୍ଡୱିଡଥ୍-ଇଣ୍ଟେନ୍ସିଭ୍ ହୋଇପାରେ |

 `mirror` |
 ପାଠକ ଏବଂ ଲେଖକ କିଏ | ଏହାକୁ ଏକ ଆସାଇନମେଣ୍ଟ ଷ୍ଟେଟମେଣ୍ଟ ପରି କଳ୍ପନା କର: "ବାମହାତୀ ମୋବାଇଲ୍" |
 ଜିନିଷଟି (ଦର୍ପଣ ତଥ୍ୟ ଲିଖିତ), ଏବଂ "ଡାହାଣ ହାତ ମୋବାଇଲ୍" (
 `mirror` ପଦ୍ଧତିକୁ ଯୁକ୍ତି ହେଉଛି ନ୍ୟସ୍ତ ହୋଇଥିବା ମୂଲ୍ୟ (ପ୍ରତିବିମ୍ବିତ ତଥ୍ୟ ପ read ାଯାଏ) |

 ## ସ୍ୱଚ୍ଛ ଏନକ୍ରିପସନ୍ |
 ସ୍ୱଚ୍ଛ କ୍ଲାଏଣ୍ଟ ପାର୍ଶ୍ୱ ଏନକ୍ରିପସନ୍ ସକ୍ଷମ କରନ୍ତୁ:

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

 କଣ ସବୁ ଘଟିଯାଉଛି? ଏକ ପୃଥକ "ଡିରେକ୍ଟୋରୀ ଏଣ୍ଟ୍ରି" (ଡାଇରେଣ୍ଟ୍) ଡିରେକ୍ଟୋରୀ (ଏନକ୍ରିପ୍ଟ) ସେଥିରେ କେଉଁ ଫାଇଲଗୁଡିକ ଅଛି ତାହା ଟ୍ରାକ୍ କରେ |
 ଡିରେକ୍ଟୋରୀ (ଓକେ ଡାଇରେକ୍ଟ୍ ଡିରେକ୍ଟୋରୀ) |
 * `list` , ତାଲିକାଭୁକ୍ତ ପ୍ରତ୍ୟେକ ପଥକୁ ଡିକ୍ରିପ୍ଟ କରେ | ତାପରେ ପ୍ରତ୍ୟେକ ଫାଇଲ୍ ପାଇଁ ମେଟାଡାଟା ରିଟର୍ନ କରେ |
 * `list` a ବହୁ ସଂଖ୍ୟକ ଫାଇଲ୍ ଥିବା ଡିରେକ୍ଟୋରୀ ପାଇଁ |
 * `write` କମାଣ୍ଡ ପ୍ରତ୍ୟେକ ପିତାମାତାଙ୍କ ଡାଇରେକ୍ଟ୍ ଡିରେକ୍ଟୋରୀରେ ବାରମ୍ବାର ଫାଇଲ୍ ଲେଖେ | ତାପରେ ଫାଇଲ୍ ଲେଖେ |
 ଡିରେକ୍ଟୋରୀ କ୍ରମରେ N = ଗଭୀରତା ସହିତ `write` N ଲେଖିବା କମାଣ୍ଡଗୁଡ଼ିକ O (N) ଲେଖିବ |
 * `remove` ଅପସାରଣ” ନିର୍ଦ୍ଦେଶ ସଂପୃକ୍ତ ଡାଇରେଣ୍ଟ୍ ଫାଇଲ୍ ଅପସାରଣ କରେ, ଏବଂ ଏହାର ପିତାମାତା ଯଦି ଖାଲି, ବାରମ୍ବାର; ତାପରେ ଫାଇଲ୍ ଅପସାରଣ କରେ |
 ଡି-ଡିରେକ୍ଟୋରୀ କ୍ରମରେ N = ଗଭୀରତା ସହିତ ଅଣ-ପୁନରାବୃତ୍ତିକାରୀ `remove` ଏବଂ ସମ୍ଭବତ as ଯେତେ ଡିଲିଟ୍ ହେବ |
 ବଡ଼ ଏବଂ ଗଭୀର ଫାଇଲତନ୍ତ୍ର ଉପରେ ବାରମ୍ବାର `remove` ନିର୍ଦ୍ଦେଶଗୁଡ଼ିକ ମହଙ୍ଗା ହୋଇପାରେ |

 ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ କ୍ଲାଏଣ୍ଟ-ସାଇଡ୍ ଏନକ୍ରିପସନ୍ ସକ୍ଷମ ହୋଇଥିଲେ ମଧ୍ୟ, ଆପଣଙ୍କର ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସର୍ଭର-ପାର୍ଶ୍ୱରେ ପୂର୍ଣ୍ଣ ଦୃଶ୍ୟମାନତା ସହିତ ଏକ ଶତ୍ରୁ |
 ଷ୍ଟୋରେଜ୍, ଚାବି ବିନା ମଧ୍ୟ, ସମୁଦାୟ ଡିରେକ୍ଟୋରୀଗୁଡିକର ସଂଖ୍ୟା ଏବଂ ପ୍ରତ୍ୟେକରେ କେତେ ଫାଇଲ୍ ଅଛି ଏବଂ ସହିତ ଦେଖିପାରିବେ |
 କିଛି ପ୍ରୟାସ, ଡିରେକ୍ଟୋରୀ କ୍ରମର କିଛି କିମ୍ବା ସମସ୍ତ ସାମଗ୍ରିକ ଗଠନ ଆବିଷ୍କାର କର |
 * ଟିପନ୍ତୁ: ଉନ୍ନତ ସୁରକ୍ଷା ପାଇଁ ଏକ ଅପେକ୍ଷାକୃତ ସମତଳ ସଂରଚନା ବ୍ୟବହାର କରନ୍ତୁ |
 ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱୀ ଡିରେକ୍ଟୋରୀ / ଫାଇଲଗୁଡିକର ନାମ ଜାଣିପାରିବେ ନାହିଁ ଯଦି ସେମାନେ ମଧ୍ୟ ଆପଣଙ୍କର ଏନକ୍ରିପସନ୍ ଜାଣନ୍ତି ନାହିଁ |
 ଚାବି କିମ୍ବା ଅନ୍ୟଥା ସଫଳତାର ସହିତ ଏନକ୍ରିପସନ୍ ଫାଟିଯାଇଥିଲା | ସମସ୍ତ ବେଟ୍ ବନ୍ଦ!

 ### ପ୍ରଦର୍ଶନ ଏବଂ କ୍ୟାଚିଂ |
 ଏନକ୍ରିପ୍ଟେଡ୍ ଷ୍ଟୋରେଜ୍ ଉପରେ ଅପରେସନ୍ ଧୀର ହୋଇପାରେ | ବାରମ୍ବାର ତାଲିକା ଏବଂ ଅପସାରଣ ବହୁତ ଧୀର ହୋଇପାରେ |
 ରେଡିସ୍ ମାଧ୍ୟମରେ କ୍ୟାଚିଂ ବହୁତ ସାହାଯ୍ୟ କରେ, କିନ୍ତୁ ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ କ୍ୟାଚ୍ ଯେକ any ଣସି ଲେଖା କିମ୍ବା ଅପସାରଣ ଉପରେ ଫ୍ଲାଶ୍ ହୁଏ |

 ## ଚାବି ଘୂର୍ଣ୍ଣନ |
 ଆପଣଙ୍କର ନୂତନ ଚାବି ସହିତ ଏକ ମୋବାଇଲଟୋ ସୃଷ୍ଟି କରନ୍ତୁ, ତାପରେ ଏଥିରେ ପୁରୁଣା ତଥ୍ୟକୁ ଦର୍ପଣ କରନ୍ତୁ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ଡ୍ରାଇଭର ଇଣ୍ଟରଫେସ୍ |
 ଡ୍ରାଇଭର ହେଉଛି ଯେକ JS ଣସି JS ଫାଇଲ ଯାହା ଏହି ଦସ୍ତଖତ ସହିତ ଏକ 'ଷ୍ଟୋରେଜ୍ କ୍ଲାଏଣ୍ଟ' ଫଙ୍କସନ୍ ରପ୍ତାନି କରେ:

    function storageClient (key, secret, opts)

 * `key` କି": ଏକ ଷ୍ଟ୍ରିଙ୍ଗ୍, ଆପଣଙ୍କର API କି ( `local` ଡ୍ରାଇଭର ପାଇଁ ଏହା ହେଉଛି ଆଧାର ଡିରେକ୍ଟୋରୀ)
 * `secret` : ଏକ ଷ୍ଟ୍ରିଙ୍ଗ୍, ଆପଣଙ୍କର API ଗୁପ୍ତ ( `local` ଡ୍ରାଇଭର ପାଇଁ ବାଦ ଦିଆଯାଇପାରେ)
 * `opts` : ଏକ ବସ୍ତୁ, ଗୁଣଗୁଡ଼ିକ ପ୍ରତି ଡ୍ରାଇଭର:
 * `local` ପାଇଁ, "ଫାଇଲ୍ ମୋଡ୍" ଏବଂ `dirMode` `fileMode` ନିର୍ଣ୍ଣୟ କରେ କିପରି ନୂତନ ସୃଷ୍ଟି ଫାଇଲ୍ ଏବଂ ଡିରେକ୍ଟୋରୀଗୁଡିକ ସୃଷ୍ଟି ହୁଏ |
 * `s3` ପାଇଁ, `bucket` ସମ୍ପତ୍ତି ଆବଶ୍ୟକ | ବ properties କଳ୍ପିକ ଗୁଣଗୁଡ଼ିକ ହେଉଛି:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ଷ୍ଟୋରେଜ୍ କ୍ଲାଏଣ୍ଟ୍ ଫଙ୍କସନ୍ ରିଟର୍ନ କରୁଥିବା ବସ୍ତୁ ନିଶ୍ଚିତ ଭାବରେ ଏହି କାର୍ଯ୍ୟଗୁଡ଼ିକୁ ବ୍ୟାଖ୍ୟା କରିବ:

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

 ## ଲଗିଂ |
 ମୋବାଇଲଟୋ [winston](https://www.npmjs.com/package/winston) ଲଗିଂ ଲାଇବ୍ରେରୀ ବ୍ୟବହାର କରେ |

 ଲଗ୍ ** ଫାଇଲ୍ ପଥ ଏବଂ ତ୍ରୁଟି ସନ୍ଦେଶ ଧାରଣ କରିବ, କିନ୍ତୁ ** କଦାପି ** ଚାବି, ରହସ୍ୟ ଧାରଣ କରିବ ନାହିଁ,
 କିମ୍ବା ଅନ୍ୟ କ connection ଣସି ସଂଯୋଗ ବିନ୍ୟାସ ସୂଚନା |

 ### ଲଗ୍ ସ୍ତର |
 ଗୋଟିଏ ବ୍ୟବହାର କରି ଲଗ ସ୍ତର ସେଟ୍ କରିବା ପାଇଁ `MOBILETTO_LOG_LEVEL` ପରିବେଶ ଭେରିଏବଲ୍ ବ୍ୟବହାର କରନ୍ତୁ |
 [https://www.npmjs.com/package/winston#logging-levels)(https://www.npmjs.com/package/winston#logging-levels) ରେ ବ୍ୟାଖ୍ୟା କରାଯାଇଥିବା `npm` ସ୍ତରଗୁଡିକ |

 ଡିଫଲ୍ଟ ସ୍ତର ହେଉଛି `error` | ସବୁଠାରୁ କ୍ରିୟାଶୀଳ ସ୍ତର ହେଉଛି `silly` , ଯଦିଓ ସମ୍ପ୍ରତି ମୋବାଇଲ୍ |
 `debug` ତଳେ ଥିବା ସ୍ତରରେ ଲଗ୍ କରେ ନାହିଁ |

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ଫାଇଲ୍ ଲଗ୍ କରନ୍ତୁ |
 ଡିଫଲ୍ଟ ଭାବରେ, ଲଗର୍ କନସୋଲକୁ ଲେଖେ | ଏକ ଫାଇଲ୍ କୁ ଲଗ୍ ପଠାଇବାକୁ, `MOBILETTO_LOG_FILE` ସେଟ୍ କରନ୍ତୁ |
 ପରିବେଶ ଭେରିଏବଲ୍ | ଏକ ଫାଇଲ୍ କୁ ଲଗ୍ କରିବାବେଳେ, ଲଗ୍ ଆଉ କନସୋଲରେ ଲେଖାଯିବ ନାହିଁ |

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ଲଗିଂ ବନ୍ଦ କରିବାକୁ:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
