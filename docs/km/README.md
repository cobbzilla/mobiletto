ទូរស័ព្ទចល័ត
 =========

 Mobiletto គឺជាស្រទាប់អរូបីនៃការផ្ទុក JavaScript ជាមួយនឹងការអ៊ិនគ្រីបផ្នែកខាងអតិថិជនដែលមានតម្លាភាពជាជម្រើស។

 # ខ្លឹមសារ
 * [ហេតុអ្វី Mobiletto?](#Why-Mobiletto?)
 * [ការចាប់ផ្តើមរហ័ស](# ចាប់ផ្តើមរហ័ស)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ប្រភព](#ប្រភព)
 * [ការដំឡើង](#ការដំឡើង)
 * [ជំនួយ និងថវិកា](#ជំនួយ និងថវិកា)
 * [ការប្រើប្រាស់ជាមូលដ្ឋាន](#Basic-usage)
 * [ទិន្នន័យមេតា](#ទិន្នន័យមេតា)
 * [រចនាប័ទ្មនាំចូលជំនួស](#រចនាប័ទ្មនាំចូលជំនួស)
 * [ឃ្លាំងសម្ងាត់](#ឃ្លាំងសម្ងាត់)
 * [ការឆ្លុះកញ្ចក់](#ការឆ្លុះ)
 * [ការអ៊ិនគ្រីបតម្លាភាព](#Transparent-encryption)
 * [ការបង្វិលគ្រាប់ចុច](# ការបង្វិលគ្រាប់ចុច)
 * [ចំណុចប្រទាក់កម្មវិធីបញ្ជា](# ចំណុចប្រទាក់អ្នកបើកបរ)
 * [Logging](#Logging)

 # អាននេះជាភាសាផ្សេង
 ឯកសារ README.md នេះត្រូវបានបកប្រែតាមរយៈ [hokeylization](https://github.com/cobbzilla/hokeylization) ទៅជា
 **[គ្រប់ភាសាដែលគាំទ្រដោយ Google Translate](https://cloud.google.com/translate/docs/languages)!**

 ខ្ញុំប្រាកដថាវាមិនល្អឥតខ្ចោះ ប៉ុន្តែខ្ញុំសង្ឃឹមថាវាប្រសើរជាងគ្មានអ្វីសោះ!

 [🇸🇦 អារ៉ាប់](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 អាឡឺម៉ង់](../de/README.md)
 [🇺🇸 ភាសាអង់គ្លេស](../en/README.md)
 [🇪🇸 អេស្ប៉ាញ](../es/README.md)
 [🇫🇷 បារាំង](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 ហិណ្ឌូ](../hi/README.md)
 [🇮🇩 ឥណ្ឌូនេស៊ី](../id/README.md)
 [🇮🇹 អ៊ីតាលី](../it/README.md)
 [🇯🇵ជប៉ុន](../ja/README.md)
 [🇰🇷កូរ៉េ](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 ប៉ូឡូញ](../pl/README.md)
 [🇧🇷 ព័រទុយហ្គាល់](../pt/README.md)
 [🇷🇺 រុស្ស៊ី](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷ទួរគី](../tr/README.md)
 [🇵🇰 អ៊ូឌូ](../ur/README.md)
 [🇻🇳 វៀតណាម](../vi/README.md)
 [🇨🇳 ចិន](../zh/README.md)


 **[📚...គ្រប់ភាសា...](../README.md)**
 ----

 ### មានបញ្ហាជាមួយការបកប្រែ README នេះទេ?
 ការបកប្រែពិសេសនេះនៃ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ប្រហែលជាមានកំហុស -- *ការកែតម្រូវត្រូវបានស្វាគមន៍យ៉ាងខ្លាំង!* សូមផ្ញើ [សំណើរទាញនៅលើ GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ឬប្រសិនបើអ្នកមិនសុខចិត្តធ្វើបែបនោះ [បើកបញ្ហា](https://github.com/cobbzilla/mobiletto/issues)

 នៅពេលអ្នកបង្កើតបញ្ហា GitHub ថ្មីអំពីការបកប្រែ សូមធ្វើ៖
 * រួមបញ្ចូល URL ទំព័រ (ចម្លង/បិទភ្ជាប់ពីរបារអាសយដ្ឋានកម្មវិធីរុករក)
 * រួមបញ្ចូលអត្ថបទពិតប្រាកដដែលខុស (ចម្លង/បិទភ្ជាប់ពីកម្មវិធីរុករក)
 * សូមពណ៌នាអំពីអ្វីដែលខុស -- តើការបកប្រែមិនត្រឹមត្រូវទេ? តើទម្រង់ខូចដោយរបៀបណា?
 * សូម​ផ្តល់​ជា​យោបល់​អំពី​ការ​បក​ប្រែ​ដ៏​ល្អ​ប្រសើរ​មួយ ឬ​របៀប​ដែល​អត្ថបទ​គួរ​ត្រូវ​បាន​ធ្វើ​ទ្រង់ទ្រាយ​ត្រឹមត្រូវ។
 **សូមអរគុណ!**

 ## ហេតុអ្វី Mobiletto?

 ### លាហើយអ្នកលក់ចាក់សោរ!
 អ្នកផ្តល់សេវាផ្ទុកពពកផ្សេងៗមាន API ដែលមិនឆបគ្នា។ សូម្បីតែអ្នកដែលខិតខំសម្រាប់ "ភាពឆបគ្នា S3"
 មានអាកប្បកិរិយា idiosyncratic ។

 នៅពេលអ្នកជ្រើសរើសអ្នកលក់កន្លែងផ្ទុកជាក់លាក់មួយសម្រាប់កម្មវិធីរបស់អ្នក ប្រសិនបើអ្នកសរសេរកូដដោយផ្ទាល់ទៅ API របស់ពួកគេ កម្មវិធីរបស់អ្នក។
 ឥឡូវនេះពឹងផ្អែកលើសេវាកម្មនោះ។ ពេល​វេលា​កន្លង​ផុត​ទៅ​ហើយ​កូដ​កាន់​តែ​ច្រើន ការ​ផ្លាស់​ប្តូរ​អ្នក​លក់​ក៏​ក្លាយ​ជា
 កាន់តែមិនអាចទ្រាំទ្របាន។ សូមស្វាគមន៍មកកាន់ពិភពរីករាយនៃការចាក់សោរអ្នកលក់!

 Mobiletto ត្រូវបានរចនាឡើងដើម្បីដោះស្រាយបញ្ហានេះ។ តាមរយៈការសរសេរកូដកម្មវិធីរបស់អ្នកទៅ API របស់ mobiletto អ្នកអាចធ្វើបានយ៉ាងងាយស្រួល
 ផ្លាស់ប្តូរអ្នកផ្តល់សេវាផ្ទុកទិន្នន័យ ហើយដឹងថាស្រទាប់ផ្ទុករបស់កម្មវិធីរបស់អ្នកនឹងមានលក្ខណៈដូចគ្នាបេះបិទ។

 ### ការធ្វើតេស្តទូលំទូលាយ
 អ្នកបើកបរទាំងអស់ត្រូវបានធ្វើតេស្តសម្រាប់ឥរិយាបថដូចគ្នាជាមួយនឹងការធ្វើតេស្ត 60+ សម្រាប់អ្នកបើកបរនីមួយៗ។
 យើងសាកល្បងអ្នកបើកបរទាំងអស់ជាមួយនឹងការរួមបញ្ចូលគ្នានៃ:
 * ការអ៊ិនគ្រីប៖ ទាំងបើក និងបិទ
 * ឃ្លាំងសម្ងាត់ Redis៖ ទាំងបានបើក និងបិទ

 វិធីសាស្រ្តនេះផ្តល់ឱ្យយើងនូវសន្តិភាពនៃចិត្តថា mobiletto នឹងមានឥរិយាបទដូចគ្នាដោយមិនគិតពីអ្នកបើកបរណាមួយដែលអ្នកប្រើ,
 ហើយដោយមិនគិតពីថាតើអ្នកបើកដំណើរការឃ្លាំងសម្ងាត់ និង/ឬការអ៊ិនគ្រីបទេ។

 ### ជំនួយអ្នកបើកបរ
 កម្មវិធីបញ្ជាផ្ទុក Mobiletto បច្ចុប្បន្ន៖
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : ប្រព័ន្ធឯកសារមូលដ្ឋាន

 *ការរួមចំណែកដើម្បីគាំទ្រអ្នកផ្តល់សេវាផ្ទុកពពកកាន់តែច្រើនត្រូវបានស្វាគមន៍យ៉ាងខ្លាំង!*

 ## mobiletto-cli
 Mobiletto មានបំណងប្រើជាបណ្ណាល័យដោយកូដ JavaScript ផ្សេងទៀត។

 ដើម្បីធ្វើការជាមួយ mobiletto នៅបន្ទាត់ពាក្យបញ្ជា សូមប្រើ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## ប្រភព
 * [mobiletto នៅលើ GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto នៅលើ npm](https://www.npmjs.com/package/mobiletto)

 ## ជំនួយ និងថវិកា
 ខ្ញុំកំពុងព្យាយាមធ្វើជាអ្នកបង្កើតកម្មវិធីប្រភពបើកចំហដែលមានជំនាញវិជ្ជាជីវៈ។ ខ្ញុំបានធ្វើការនៅ
 ឧស្សាហកម្មសូហ្វវែរអស់រយៈពេលជាច្រើនឆ្នាំ ខ្ញុំបានចាប់ផ្តើមក្រុមហ៊ុនជោគជ័យ ហើយលក់ពួកគេទៅឱ្យក្រុមហ៊ុនសាធារណៈ។
 ថ្មីៗ​នេះ ខ្ញុំ​បាន​បាត់​បង់​ការងារ ហើយ​ខ្ញុំ​ពិត​ជា​មិន​មាន​ការ​ងារ​ផ្សេង​ទៀត​ដែល​ត្រូវ​បាន​រៀប​ចំ​ឡើង

 ដូច្នេះខ្ញុំនឹងព្យាយាមសរសេរកម្មវិធីមានប្រយោជន៍ ហើយមើលថាតើវាដំណើរការឬអត់

 ប្រសិនបើអ្នកចូលចិត្តប្រើកម្មវិធីនេះ ខ្ញុំនឹងអរគុណខ្លាំងណាស់សម្រាប់សូម្បីតែកម្មវិធី
 តូចបំផុត [ការរួមចំណែកប្រចាំខែតាមរយៈ Patreon](https://www.patreon.com/cobbzilla)

 *សូមអរគុណ!*

 ## ការដំឡើង
 ដំឡើងដោយប្រើ `npm` ឬ `yarn` ។ អ្នកប្រហែលជាចង់បានកំណែ `lite` ដែលមិនរួមបញ្ចូលទាំងអស់។
 ឯកសារ README បកប្រែ៖

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ប្រសិនបើអ្នកពិតជាចង់បានឯកសារ README ជាគ្រប់ភាសា សូមដំឡើងកំណែពេញ៖

    npm install mobiletto
    yarn add mobiletto

 ## ចាប់ផ្តើមរហ័ស
 ឧទាហរណ៍ខ្លីៗដោយប្រើកម្មវិធីបញ្ជា `s3` ។

 លេខកូដនេះនឹងដំណើរការដូចគ្នាប្រសិនបើកម្មវិធីបញ្ជាគឺ `b2` ឬ `local` ។

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
 ## ការប្រើប្រាស់ជាមូលដ្ឋាន
 ឧទាហរណ៍ដ៏ទូលំទូលាយជាងនេះ បង្ហាញពីលក្ខណៈពិសេសភាគច្រើនដែលបានផ្តល់ជូន៖

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

 ## ទិន្នន័យមេតា
 ពាក្យបញ្ជា `metadata` ត្រឡប់ទិន្នន័យមេតាអំពីការបញ្ចូលប្រព័ន្ធឯកសារតែមួយ។
 ដូចគ្នានេះដែរ តម្លៃត្រឡប់ពីពាក្យបញ្ជា `list` គឺជាអារេនៃវត្ថុទិន្នន័យមេតា។

 វត្ថុទិន្នន័យមេតាមើលទៅដូចនេះ៖

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 លក្ខណៈសម្បត្តិ `type` ប្រភេទ` អាចជា `file` `dir` `link` ឬ `special` ។

 អាស្រ័យ​លើ​ប្រភេទ​កម្មវិធី​បញ្ជា ពាក្យ​បញ្ជា `list` អាច​នឹង​មិន​ត្រឡប់​វាល​ទាំងអស់​ទេ។ លក្ខណៈសម្បត្តិ `name` ' និង `type`
 គួរតែមានវត្តមានជានិច្ច។ ពាក្យបញ្ជា `metadata` ជាបន្តបន្ទាប់នឹងត្រឡប់លក្ខណៈសម្បត្តិដែលមានទាំងអស់។

 ## រចនាប័ទ្មនាំចូលជំនួស
 នាំចូលម៉ូឌុលដែលមានវិសាលភាពពេញលេញ ហើយប្រើមុខងារ `connect` ៖

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ឃ្លាំងសម្ងាត់
 Mobiletto ដំណើរការល្អបំផុតជាមួយឃ្លាំងសម្ងាត់ <a href="https://redis.io">redis</a> ។

 Mobiletto នឹង​ព្យាយាម​តភ្ជាប់​ទៅ​វត្ថុ​ដែល​កែប្រែ​ឡើងវិញ​នៅ​លើ 127.0.0.1:6379

 អ្នកអាចបដិសេធទាំងពីរនេះ៖
 * កំណត់ `MOBILETTO_REDIS_HOST` env var, mobiletto ភ្ជាប់នៅទីនេះជំនួសឱ្យ localhost
 * កំណត់ `MOBILETTO_REDIS_PORT` env var ច្រកនេះនឹងត្រូវបានប្រើ

 Mobiletto នឹងរក្សាទុកគ្រាប់ចុច redis ទាំងអស់របស់វាជាមួយនឹងបុព្វបទ `_mobiletto__` ។ អ្នកអាចផ្លាស់ប្តូរវាបាន
 ដោយកំណត់ `MOBILETTO_REDIS_PREFIX` env var ។

 អ្នកក៏អាចកំណត់ឃ្លាំងសម្ងាត់ក្នុងមួយការតភ្ជាប់ជាមួយវត្ថុ `opts.redisConfig` ៖

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### មិន​ចង់​បាន redis ឃ្លាំង​សម្ងាត់​?
 ដើម្បីបិទ៖ ឆ្លងកាត់ `enabled: false` នៅក្នុងវត្ថុ `opts.redisConfig` របស់អ្នក នៅពេលអ្នកបង្កើតការតភ្ជាប់របស់អ្នក។

 ដូចដែលបានពិភាក្សាខាងក្រោម ការបិទឃ្លាំងសម្ងាត់នឹងជះឥទ្ធិពលអវិជ្ជមានដល់ដំណើរការ និងទាមទារបន្ថែមទៀត
 ដើម្បីផ្ទុកដែលអ្នកពិតជាត្រូវការ។

 ### ការណែនាំអំពីឃ្លាំងសម្ងាត់
 **ទំហំផ្ទុកដែលបានអ៊ិនគ្រីប**៖ ការអាន/សរសេរ ការផ្ទុកដែលបានអ៊ិនគ្រីបគឺយឺតជាងធម្មតាបន្តិច។
 ប៉ុន្តែការរុករកជុំវិញថតឯកសារ (ដែលរឿងខ្លះធ្វើ) គឺមានតម្លៃថ្លៃណាស់។ ដោយប្រើឃ្លាំងសម្ងាត់ redis
 នឹងផ្តល់ឱ្យអ្នកនូវការជំរុញការអនុវត្តដ៏សំខាន់។

 ឃ្លាំងសម្ងាត់លំនាំដើមមានសុវត្ថិភាព ប៉ុន្តែមិនដំណើរការល្អទេ ប្រសិនបើអ្នកមានប្រតិបត្តិការសរសេរ/ដកចេញច្រើន។
 រាល់ប្រតិបត្តិការសរសេរ ឬលុបចេញ ធ្វើឱ្យឃ្លាំងសម្ងាត់ទាំងមូលមានសុពលភាព ដោយធានាថាការអានជាបន្តបន្ទាប់នឹងឃើញ
 ការផ្លាស់ប្តូរចុងក្រោយ។

 ### ឧបករណ៍ CLI
 ប្រសិនបើអ្នកកំពុងប្រើឧបករណ៍ CLI ដូចជា [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 អ្នកប្រាកដជាចង់បើកដំណើរការឃ្លាំងសម្ងាត់ redis ព្រោះវាមានរយៈពេលឆ្លងកាត់ការហៅពាក្យបញ្ជា `mo` ។

 ## ការឆ្លុះកញ្ចក់

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 ពាក្យបញ្ជា `mirror` អនុវត្តច្បាប់ចម្លងតែមួយដងនៃឯកសារទាំងអស់ពី mobiletto មួយទៅមួយទៀត។
 វាមិនដំណើរការដំណើរការណាមួយដើម្បីរក្សាកញ្ចក់តាមពេលវេលានោះទេ។ ដំណើរការពាក្យបញ្ជា `mirror` ម្តងទៀត
 ដើម្បីធ្វើសមកាលកម្មឯកសារដែលបាត់ណាមួយ។

 តម្លៃត្រឡប់ពី `mirror` គឺជាវត្ថុសាមញ្ញដែលមានបញ្ជរសម្រាប់ចំនួនឯកសារដែលទទួលបានជោគជ័យ
 ឆ្លុះបញ្ចាំង និងចំនួនឯកសារដែលមានកំហុស៖

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ការព្រមាន៖ ការឆ្លុះមើលសំណុំទិន្នន័យធំអាចចំណាយពេលច្រើន និងពឹងផ្អែកលើកម្រិតបញ្ជូន

 ជាមួយនឹងការហៅពាក្យ `mirror` វាអាចមានការភ័ន្តច្រឡំក្នុងការយល់ថាអ្នកណាជា
 អ្នកអាន និងអ្នកណាជាអ្នកសរសេរ។ ស្រមៃថាវាដូចជាសេចក្តីថ្លែងការណ៍កិច្ចការមួយ: "ដៃឆ្វេង mobiletto"
 គឺ​ជា​វត្ថុ​ដែល​ត្រូវ​បាន​គេ​ចាត់​ឱ្យ​ទៅ (ទិន្នន័យ​ដែល​បាន​សរសេរ​ឆ្លុះ) និង "ដៃ​ស្ដាំ mobiletto" (the
 អាគុយម៉ង់ទៅនឹងវិធីសាស្ត្រ `mirror` ) គឺជាតម្លៃដែលត្រូវបានផ្តល់ (ទិន្នន័យដែលឆ្លុះបញ្ចាំងត្រូវបានអាន) ។

 ## ការអ៊ិនគ្រីបតម្លាភាព
 បើកការអ៊ិនគ្រីបផ្នែកខាងអតិថិជនដែលមានតម្លាភាព៖

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

 តើ​មាន​រឿង​អ្វី​កើតឡើង? ថត "ការចូលថត" (ផ្ទាល់) ដាច់ដោយឡែក (បានអ៊ិនគ្រីប) តាមដានថាតើឯកសារណាខ្លះនៅក្នុងនោះ។
 ថតឯកសារ (ហៅថាថតផ្ទាល់) ។
 * ពាក្យបញ្ជា `list` អានឯកសារចូលថត ឌិគ្រីបផ្លូវនីមួយៗដែលបានរាយបញ្ជី។ បន្ទាប់មកត្រឡប់ទិន្នន័យមេតាសម្រាប់ឯកសារនីមួយៗ
 * ពាក្យបញ្ជា `list` មិនមានប្រសិទ្ធភាពជាង ជាពិសេសសម្រាប់ថតឯកសារដែលមានឯកសារច្រើន។
 * ពាក្យបញ្ជា `write` សរសេរ' សរសេរឯកសារ dirent នៅក្នុងថត dirent របស់មេនីមួយៗ សរសេរឡើងវិញ; បន្ទាប់មកសរសេរឯកសារ
 * ពាក្យបញ្ជា `write` នឹងទទួលការសរសេរ O(N) ជាមួយនឹង N = ជម្រៅនៅក្នុងឋានានុក្រមថត
 * ពាក្យបញ្ជា `remove` យកឯកសារ dirent ដែលត្រូវគ្នាចេញ ហើយមេរបស់វា ប្រសិនបើទទេ កើតឡើងដដែលៗ។ បន្ទាប់មកយកឯកសារចេញ
 * ពាក្យបញ្ជា `remove` ដែលមិនប្រើឡើងវិញនឹងធ្វើឱ្យ O(N) អាន និងអាចលុបបានច្រើនជាមួយនឹង N = ជម្រៅនៅក្នុងឋានានុក្រមថត
 * ពាក្យបញ្ជា `remove` នៅលើប្រព័ន្ធឯកសារធំ និងជ្រៅអាចមានតម្លៃថ្លៃ

 សូមចំណាំថា ទោះបីជាមានការបើកការអ៊ិនគ្រីបផ្នែកខាងអតិថិជនក៏ដោយ ក៏សត្រូវដែលអាចមើលឃើញពេញលេញទៅក្នុងផ្នែកម៉ាស៊ីនមេដែលបានអ៊ិនគ្រីបរបស់អ្នក
 កន្លែងផ្ទុក ទោះបីជាគ្មានសោក៏ដោយ ក៏នៅតែអាចមើលឃើញចំនួនសរុបនៃថត និងចំនួនឯកសារដែលមាននៅក្នុងនីមួយៗ និងជាមួយ
 កិច្ចខិតខំប្រឹងប្រែងមួយចំនួន ស្វែងរករចនាសម្ព័ន្ធទាំងមូល ឬខ្លះនៃឋានានុក្រមថត។
 *ចំណាំ៖ ប្រើរចនាសម្ព័ន្ធរាបស្មើ ដើម្បីសុវត្ថិភាពកាន់តែប្រសើរ។*
 មារសត្រូវនឹងមិនស្គាល់ឈ្មោះថត/ឯកសារទេ លុះត្រាតែពួកគេស្គាល់ការអ៊ិនគ្រីបរបស់អ្នក។
 key ឬបានបំបែកការអ៊ិនគ្រីបដោយជោគជ័យ។ ការភ្នាល់ទាំងអស់ត្រូវបានបិទ!

 ### ការអនុវត្ត និងឃ្លាំងសម្ងាត់
 ប្រតិបត្តិការលើការផ្ទុកដែលបានអ៊ិនគ្រីបអាចយឺត។ ការចុះបញ្ជីឡើងវិញ និងការដកយកចេញអាចយឺតណាស់។
 ឃ្លាំងសម្ងាត់តាមរយៈ redis ជួយបានយ៉ាងច្រើន ប៉ុន្តែត្រូវចំណាំថាឃ្លាំងសម្ងាត់ត្រូវបានលុបចោលនៅពេលសរសេរ ឬលុបចេញ។

 ## ការបង្វិលគ្រាប់ចុច
 បង្កើត mobiletto ដោយប្រើសោថ្មីរបស់អ្នក បន្ទាប់មកឆ្លុះទិន្នន័យចាស់ចូលទៅក្នុងវា៖

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ចំណុចប្រទាក់កម្មវិធីបញ្ជា
 កម្មវិធីបញ្ជាគឺជាឯកសារ JS ដែលនាំចេញមុខងារ 'storageClient' ដែលមានហត្ថលេខានេះ៖

    function storageClient (key, secret, opts)

 * `key` : ខ្សែអក្សរ API របស់អ្នក (សម្រាប់កម្មវិធីបញ្ជា `local` នេះគឺជាថតមូលដ្ឋាន)
 * `secret` : ខ្សែអក្សរ, API សម្ងាត់របស់អ្នក (អាចត្រូវបានលុបចោលសម្រាប់កម្មវិធីបញ្ជា `local` )
 * `opts` : វត្ថុមួយ លក្ខណៈសម្បត្តិគឺក្នុងមួយអ្នកបើកបរ៖
 * សម្រាប់ `local` `fileMode` និង `dirMode` កំណត់ពីរបៀបបង្កើតឯកសារ និងថតឯកសារថ្មី
 * សម្រាប់ `s3` `bucket` ត្រូវបានទាមទារ។ លក្ខណៈសម្បត្តិស្រេចចិត្តគឺ៖
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 វត្ថុដែលអនុគមន៍ storageClient ត្រឡប់ត្រូវតែកំណត់មុខងារទាំងនេះ៖

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

 ## កំណត់ហេតុ
 Mobiletto ប្រើបណ្ណាល័យកត់ត្រា [winston](https://www.npmjs.com/package/winston) ។

 កំណត់ហេតុ ** នឹង ** មានផ្លូវឯកសារ និងសារកំហុស ប៉ុន្តែនឹង ** មិនដែល ** មានកូនសោ អាថ៌កំបាំង
 ឬព័ត៌មានកំណត់រចនាសម្ព័ន្ធការតភ្ជាប់ផ្សេងទៀត។

 ### កម្រិតកំណត់ហេតុ
 ប្រើអថេរបរិស្ថាន `MOBILETTO_LOG_LEVEL` ដើម្បីកំណត់កម្រិតកំណត់ហេតុ ដោយប្រើមួយ។
 នៃកម្រិត `npm` ដែលបានកំណត់ក្នុង [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 កម្រិតលំនាំដើមគឺ `error` ។ កម្រិតពាក្យសំដីបំផុតគឺ `silly` ទោះបីជាបច្ចុប្បន្ន mobiletto
 មិនកត់ត្រានៅកម្រិតខាងក្រោម `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ឯកសារកំណត់ហេតុ
 តាមលំនាំដើម អ្នកកាប់ឈើសរសេរទៅកុងសូល។ ដើម្បីផ្ញើកំណត់ហេតុទៅឯកសារ កំណត់ `MOBILETTO_LOG_FILE`
 បរិស្ថានប្រែប្រួល។ នៅពេលចូលឯកសារ កំណត់ហេតុនឹងមិនត្រូវបានសរសេរទៅកុងសូលទៀតទេ។

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ដើម្បីបិទការកត់ត្រា៖

    MOBILETTO_LOG_FILE=/dev/null

</pre>
