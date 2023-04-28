Mobiletto
 =========

 Mobiletto بولسا JavaScript ساقلاش ئابستراكت قەۋىتى بولۇپ ، ئىختىيارى سۈزۈك خېرىدار تەرەپ شىفىرلىنىدۇ.

 # مەزمۇن
 * [نېمىشقا Mobiletto؟](# نېمىشقا Mobiletto؟)
 * [تېز باشلاش](# تېز باشلاش)
 * [Mobiletto CLI](# mobiletto- خېرىدار)
 * [مەنبە](# مەنبە)
 * [قاچىلاش](# قاچىلاش)
 * [قوللاش ۋە مەبلەغ](# قوللاش-مەبلەغ)
 * [ئاساسىي ئىشلىتىش](# ئاساسىي ئىشلىتىش)
 * [Metadata](# Metadata)
 * [قوشۇمچە ئىمپورت ئۇسلۇبى](# Alternate-import-style)
 * [Caching](# Caching)
 * [ئەينەك قىلىش](# ئەينەك)
 * [سۈزۈك مەخپىيلەشتۈرۈش](# سۈزۈك مەخپىيلەشتۈرۈش)
 * [ئاچقۇچ ئايلىنىش](# ئاچقۇچ ئايلىنىش)
 * [قوزغاتقۇچ كۆرۈنمە يۈزى](# قوزغاتقۇچ كۆرۈنمە يۈزى)
 * [كىرىش](# كىرىش)

 # بۇنى باشقا تىلدا ئوقۇڭ
 بۇ README.md ھۆججىتى [hokeylization](https://github.com/cobbzilla/hokeylization) ئارقىلىق تەرجىمە قىلىندى
 ** [Google تەرجىمىسى قوللايدىغان ھەر بىر تىل](https://cloud.google.com/translate/docs/languages)! **

 مەن ئۇنىڭ مۇكەممەل ئەمەسلىكىگە ئىشىنىمەن ، ئەمما ئۇنىڭ ھېچ ئىشتىن ياخشى بولۇشىنى ئۈمىد قىلىمەن!

 [🇸🇦 ئەرەبچە](docs / ar / README.md)
 [🇧🇩 بېنگالچە](docs / bn / README.md)
 [🇩🇪 گېرمانچە](docs / de / README.md)
 [🇺🇸 ئىنگلىزچە](docs / en / README.md)
 [🇪🇸 ئىسپانچە](docs / es / README.md)
 [🇫🇷 فىرانسۇزچە](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 ھىندونېزىيە](docs / id / README.md)
 [🇮🇹 ئىتالىيانچە](docs / it / README.md)
 [🇯🇵 ياپونچە](docs / ja / README.md)
 [🇰🇷 كورېيەچە](docs / ko / README.md)
 [🇮🇳 Marathi](docs / mr / README.md)
 [🇵🇱 پولشاچە](docs / pl / README.md)
 [🇧🇷 پورتۇگالچە](docs / pt / README.md)
 [🇷🇺 رۇسچە](docs / ru / README.md)
 [🇰🇪 Swahili](docs / sw / README.md)
 [Ag Tagalog](docs / tl / README.md)
 [🇹🇷 تۈركچە](docs / tr / README.md)
 [🇵🇰 ئوردۇچە](docs / ur / README.md)
 [🇻🇳 ۋېيتنامچە](docs / vi / README.md)
 [🇨🇳 خەنزۇچە](docs / zh / README.md)


 ** [📚 ... بارلىق تىللار ...](docs / README.md) **
 ----

 ### README نىڭ بۇ تەرجىمىسىدە مەسىلە بارمۇ؟
 ئەسلى [README] نىڭ بۇ ئالاھىدە تەرجىمىسى (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 كەمتۈك بولۇشى مۇمكىن - * تۈزىتىشلەرنى قارشى ئالىمىز! * [GitHub غا تارتىش ئىلتىماسى] ئەۋەتىڭ.
 ياكى بۇنداق قىلىشقا راھەت بولمىساڭىز ، [مەسىلە ئېچىڭ](https://github.com/cobbzilla/mobiletto/issues)

 تەرجىمىگە مۇناسىۋەتلىك يېڭى GitHub مەسىلىسىنى قۇرغاندا ، قىلىڭ:
 * بەت ئادرېسىنى ئۆز ئىچىگە ئالىدۇ (توركۆرگۈ ئادرېس ستونىدىن كۆچۈرۈش / چاپلاش)
 * خاتا بولغان تېكىستنى ئۆز ئىچىگە ئالىدۇ (توركۆرگۈدىن كۆچۈرۈش / چاپلاش)
 * نېمىنىڭ خاتا ئىكەنلىكىنى تەسۋىرلەپ بېرىڭ - تەرجىمە خاتامۇ؟ فورمات قانداقتۇر بۇزۇلدىمۇ؟
 * ياخشىراق تەرجىمە ياكى تېكىستنى قانداق فورماتلاش كېرەكلىكى توغرىسىدا تەكلىپ بىلەن تەمىنلەڭ
 * ** رەھمەت سىزگە! **

 ## نېمىشقا Mobiletto؟

 ### خەيرلىك ساتقۇچى قۇلۇپ!
 ھەر خىل بۇلۇت ساقلاش تەمىنلىگۈچىلەرنىڭ ماس كەلمەيدىغان API لىرى بار. ھەتتا «S3 ماسلىشىشچانلىقى» ئۈچۈن تىرىشىدىغانلارمۇ
 ئۆزگىچە ھەرىكەتلىرى بار.

 ئەپىڭىز ئۈچۈن مەلۇم ساقلاش ساتقۇچىنى تاللىسىڭىز ، بىۋاسىتە ئۇلارنىڭ API ، ئەپىڭىزگە كود قىلسىڭىز
 ھازىر ئۇ مۇلازىمەتكە تايىنىدۇ. ۋاقىتنىڭ ئۆتۈشىگە ۋە كودلارنىڭ توپلىنىشىغا ئەگىشىپ ، ساتقۇچىلار ئۆزگىرىدۇ
 بارغانسىرى پۇت تىرەپ تۇرالمايدۇ. مال ساتقۇچىنىڭ قىزىقارلىق دۇنياسىغا خۇش كەپسىز!

 Mobiletto بۇ مەسىلىنى ھەل قىلىش ئۈچۈن لايىھەلەنگەن. ئەپنى mobiletto نىڭ API غا كودلاش ئارقىلىق ، ئاسانلا قىلالايسىز
 ساقلاش تەمىنلىگۈچىلەرنى ئۆزگەرتىڭ ۋە ئەپلىرىڭىزنىڭ ساقلاش قەۋىتىنىڭ ئوخشاش ھەرىكەت قىلىدىغانلىقىنى بىلىڭ.

 ### كەڭ كۆلەمدە سىناق
 بارلىق قوزغاتقۇچلار ھەر بىر قوزغاتقۇچ ئۈچۈن 60+ سىناق بىلەن ئوخشاش ھەرىكەتتە سىناق قىلىنىدۇ.
 بىز بارلىق قوزغاتقۇچلارنى ھەر خىل بىرلەشتۈرۈش ئارقىلىق سىنايمىز:
 * مەخپىيلەشتۈرۈش: ھەم قوزغىتىلغان ۋە چەكلەنگەن
 * Redis cache: ھەم قوزغىتىلغان ۋە چەكلەنگەن

 بۇ خىل ئۇسۇل بىزگە كۆچمە خاتىرجەملىك ئاتا قىلىدۇ ، مەيلى قايسى شوپۇرنى ئىشلىتىشىڭىزدىن قەتئىينەزەر ، كۆچمە خەۋەرلىشىش شىركىتى ئوخشاش ھەرىكەت قىلىدۇ ،
 مەيلى سىز غەملەك ۋە / ياكى مەخپىيلەشتۈرۈشنى قوزغىتىڭ.

 ### شوپۇرلارنى قوللاش
 نۆۋەتتىكى Mobiletto ساقلاش قوزغاتقۇسى:
 * `s3` : ئامازون S3
 * `b2` : Backblaze B2
 * `local` : يەرلىك ھۆججەت سىستېمىسى

 * تېخىمۇ كۆپ بۇلۇت ساقلاش تەمىنلىگۈچىلەرنى قوللايدىغان تۆھپىلەرنى قارشى ئالىمىز! *

 ## mobiletto-client
 Mobiletto باشقا JavaScript كودى تەرىپىدىن كۇتۇپخانا سۈپىتىدە ئىشلىتىشنى مەقسەت قىلىدۇ.

 Mobiletto بىلەن بۇيرۇق قۇرىدا ئىشلەش ئۈچۈن [mobiletto-client] نى ئىشلىتىڭ (https://www.npmjs.com/package/mobiletto-cli)

 ## مەنبە
 * [GitHub دىكى mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm دىكى mobiletto](https://www.npmjs.com/package/mobiletto)

 ## قوللاش ۋە مەبلەغ
 مەن كەسپىي ئوچۇق كودلۇق يۇمشاق دېتال ئاچقۇچى بولۇشقا تىرىشىۋاتىمەن. مەن ئىشلەۋاتىمەن
 يۇمشاق دېتال كەسپى ئۇزۇن يىللاردىن بۇيان ، مەن مۇۋەپپەقىيەتلىك شىركەتلەرنى قۇرۇپ ، ئۇنى ئاممىۋى شىركەتلەرگە ساتتىم.
 يېقىندا مەن خىزمىتىمدىن ئايرىلدىم ، مېنىڭ باشقا خىزمەتلىرىم رەتكە تۇرغۇزۇلمىدى

 شۇڭا پايدىلىق يۇمشاق دېتاللارنى يېزىپ سىناپ باقاي

 ئەگەر بۇ يۇمشاق دېتالنى ئىشلىتىشنى ياقتۇرسىڭىز ، مەن ھەتتا ئۇنىڭغا كۆپ رەھمەت ئېيتىمەن
 ئەڭ كىچىك [Patreon ئارقىلىق ئايلىق تۆھپە](https://www.patreon.com/cobbzilla)

 * رەھمەت سىزگە! *

 ## قاچىلاش
 `npm` `yarn` قاچىلاڭ. سىز بەلكىم ھەممىسىنى ئۆز ئىچىگە ئالمىغان « `lite` نەشرىنى ئويلىشىڭىز مۇمكىن
 تەرجىمە قىلىنغان README ھۆججىتى:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ئەگەر سىز ھەر بىر تىلدىكى README ھۆججىتىنى ھەقىقىي ئويلىسىڭىز ، تولۇق نەشرىنى قاچىلاڭ:

    npm install mobiletto
    yarn add mobiletto

 ## تېز باشلاش
 Mobiletto `s3` قوزغاتقۇچنى ئىشلىتىشنىڭ قىسقىچە مىسالى.

 ئەگەر قوزغاتقۇچ « `b2` ياكى « `local` » بولسا ، بۇ كود ئوخشاش ئىجرا بولىدۇ.

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
 ## ئاساسىي ئىشلىتىش
 تەمىنلەنگەن نۇرغۇن ئىقتىدارلارنى كۆرسىتىپ بېرىدىغان تېخىمۇ كەڭ مىسال:

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

 ## Metadata
 `metadata` بۇيرۇقى بىر ھۆججەت سىستېمىسىغا مۇناسىۋەتلىك مېتا سانلىق مەلۇماتنى قايتۇرىدۇ.
 ئوخشاشلا ، « `list` » بۇيرۇقىدىكى قايتۇرۇش قىممىتى بىر تۈركۈم مېتا سانلىق مەلۇمات ئوبيېكتى.

 مېتا سانلىق مەلۇمات ئوبيېكتى مۇنداق:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` `file` «ھۆججەت» ، `dir` ، `link` » ياكى `special` .

 قوزغاتقۇچنىڭ تۈرىگە ئاساسەن ، « `list` » بۇيرۇقى ھەممە يەرنى قايتۇرالمايدۇ. `name` `type` خاسلىقى
 ھەمىشە ھازىر بولۇشى كېرەك. كېيىنكى `metadata` بۇيرۇقى بارلىق خاسلىقنى قايتۇرىدۇ.

 ## باشقا ئىمپورت ئۇسلۇبى
 تولۇق قاپلانغان مودۇلنى ئەكىرىڭ ۋە « `connect` ئىقتىدارىنى ئىشلىتىڭ:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 <a href="https://redis.io">Mobiletto redis</a> cache بىلەن ئەڭ ياخشى ئىشلەيدۇ.

 Mobiletto 127.0.0.1:6379 دىكى قايتا قوزغىلىشقا ئۇلىنىدۇ

 سىز بۇلارنىڭ ھەر ئىككىسىنى قاپلىۋېتەلەيسىز:
 * `MOBILETTO_REDIS_HOST` env var نى تەڭشەڭ ، mobiletto بۇ يەرنى localhost نىڭ ئورنىغا ئۇلاڭ
 * `MOBILETTO_REDIS_PORT` env var نى تەڭشەڭ ، بۇ ئېغىز ئىشلىتىلىدۇ

 Mobiletto بارلىق redis كۇنۇپكىلىرىنى prefix `_mobiletto__` بىلەن ساقلايدۇ. بۇنى ئۆزگەرتەلەيسىز
 « `MOBILETTO_REDIS_PREFIX` env var نى تەڭشەش ئارقىلىق.

 سىز يەنە « `opts.redisConfig` ئوبيېكتى بىلەن ئۇلىنىش ئۇلىنىشىنى تەڭشىيەلەيسىز:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### قايتا رېمونت قىلىشنى خالامسىز؟
 چەكلەش: `opts.redisConfig` ئوبيېكتىڭىزدا « `enabled: false` يالغان» دىن ئۆتۈڭ.

 تۆۋەندە سۆزلەنگەندەك ، غەملەكنى چەكلەش ئىقتىدارغا پايدىسىز تەسىر كۆرسىتىدۇ ۋە تېخىمۇ كۆپ تەلەپلەرنى ئوتتۇرىغا قويىدۇ
 سىز ئېھتىياجلىق بولغان ساقلاشقا.

 ### كەش يېتەكلەش
 ** شىفىرلانغان ساقلاش **: شىفىرلانغان ساقلاشنى ئوقۇش / يېزىش ئادەتتىكىدىن سەل ئاستا ،
 ئەمما مۇندەرىجىلەرنى ئايلىنىپ مېڭىش (بەزى ئىشلارنى قىلىدۇ) بىر قەدەر قىممەت. Redis ساقلىغۇچ ئىشلىتىش
 سىزگە كۆرۈنەرلىك ئۈنۈم بېرىدۇ.

 سۈكۈتتىكى ساقلىغۇچ بىخەتەر ، ئەمما نۇرغۇن يېزىش / ئۆچۈرۈش مەشغۇلاتىڭىز بولسا ياخشى ئىشلىمەيدۇ.
 ھەر قانداق يېزىش ياكى ئۆچۈرۈش مەشغۇلاتى پۈتكۈل ساقلىغۇچنى ئىناۋەتسىز قىلىدۇ ، كېيىنكى ئوقۇشلارنىڭ كۆرۈشىگە كاپالەتلىك قىلىدۇ
 ئەڭ يېڭى ئۆزگىرىشلەر.

 ### CLI قورالى
 ئەگەر [mobiletto-client](https://www.npmjs.com/package/mobiletto-cli) غا ئوخشاش CLI قورالىنى ئىشلىتىۋاتقان بولسىڭىز ،
 سىز چوقۇم redis غەملەكنىڭ قوزغىتىلىشىنى ئۈمىد قىلىسىز ، چۈنكى ئۇ « `mo` بۇيرۇقىنىڭ چاقىرىقلىرىغىچە داۋاملىشىدۇ.

 ## ئەينەك

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 « `mirror` بۇيرۇقى بىر كۆچمە تېلېفوندىن يەنە بىر ھۆججەتكە بارلىق ھۆججەتلەرنىڭ بىر قېتىم كۆپەيتىلگەن نۇسخىسىنى ئىجرا قىلىدۇ.
 ۋاقىتنىڭ ئۆتۈشىگە ئەگىشىپ ئەينەكنى ساقلاپ قېلىش ئۈچۈن ھېچقانداق جەريان ئىجرا قىلمايدۇ. « `mirror` بۇيرۇقىنى قايتا ئىجرا قىلىڭ
 يوقاپ كەتكەن ھۆججەتلەرنى ماسقەدەملەش.

 « `mirror` » تىن قايتۇرۇش قىممىتى قانچە ھۆججەتنىڭ مۇۋەپپەقىيەتلىك بولغانلىقىغا ھېسابلىغۇچ بار ئاددىي ئوبيېكت
 ئەينەك ۋە قانچە ھۆججەتتە خاتالىق بار:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ئاگاھلاندۇرۇش: چوڭ سانلىق مەلۇمات توپلىمىنى ئەينەك قىلىش ۋاقىت ئىسراپچىلىقى ۋە كەڭ بەلۋاغ كەڭلىكى بولىدۇ

 « `mirror` چاقىرىش مەنىسى بىلەن بەزىدە كىمنىڭ ئىكەنلىكىنى چۈشىنىش ئادەمنى گاڭگىرىتىپ قويىدۇ
 ئوقۇرمەن ۋە يازغۇچى كىم. ئۇنى تاپشۇرۇق باياناتىغا ئوخشاش تەسەۋۋۇر قىلىپ بېقىڭ: «سول تەرەپتىكى كۆچمە تېلېفون»
 تەقسىم قىلىنغان نەرسە (ئەينەك سانلىق مەلۇمات يېزىلغان) ، ۋە «ئوڭ قول كۆچمە خەۋەرلىشىش» (
 « `mirror` ئۇسۇلىغا بولغان تالاش-تارتىش تەقسىم قىلىنغان قىممەت (ئەينەك سانلىق مەلۇمات ئوقۇلىدۇ).

 ## سۈزۈك مەخپىيلەشتۈرۈش
 سۈزۈك خېرىدار تەرەپ مەخپىيلەشتۈرۈشنى قوزغىتىڭ:

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

 نېمە ئىش بولۇۋاتىدۇ؟ ئايرىم «مۇندەرىجە كىرىش» (dirent) مۇندەرىجىسى (شىفىرلانغان) ئۇنىڭدا قايسى ھۆججەتلەرنىڭ بارلىقىنى ئىزلايدۇ
 مۇندەرىجە (يەنى مۇندەرىجە مۇندەرىجىسى).
 * `list` تىزىملىك» بۇيرۇقى مۇندەرىجە كىرىش ھۆججىتىنى ئوقۇيدۇ ، تىزىملىكتىكى ھەر بىر يولنى يېشىپ بېرىدۇ. ئاندىن ھەر بىر ھۆججەتنىڭ مېتا سانلىق مەلۇماتلىرىنى قايتۇرىدۇ
 * `list` بۇيرۇقلىرى تېخىمۇ ئۈنۈمسىز ، بولۇپمۇ ھۆججەت سانى كۆپ بولغان مۇندەرىجە ئۈچۈن
 * « `write` » بۇيرۇقى ھەر بىر ئاتا-ئانىنىڭ مۇندەرىجە مۇندەرىجىسىگە قايتا-قايتا ھۆججەت يازىدۇ. ئاندىن ھۆججەتنى يازىدۇ
 * `write` بۇيرۇقلىرى O (N) نى ئۆز ئىچىگە ئالىدۇ ، N = چوڭقۇرلۇقى مۇندەرىجە قاتلىمىدا
 * `remove` چىقىرىۋېتىش» بۇيرۇقى مۇناسىپ يۆنىلىشلىك ھۆججەتنى ئۆچۈرۈۋېتىدۇ ، ئۇنىڭ ئاتا-ئانىسى قۇرۇق بولسا قايتا-قايتا. ئاندىن ھۆججەتنى ئۆچۈرۈۋېتىدۇ
 * قايتا-قايتا تەكرارلانمايدىغان `remove` بۇيرۇقلىرى O (N) ئوقۇشنى كەلتۈرۈپ چىقىرىدۇ ۋە ئۆچۈرۈلۈش ئېھتىماللىقى بار ، مۇندەرىجە قاتلىمىدا N = چوڭقۇرلۇق بار.
 * چوڭ ۋە چوڭقۇر ھۆججەت سىستېمىسىدىكى قايتا-قايتا `remove` بۇيرۇقلىرى قىممەت بولۇشى مۇمكىن

 شۇنىڭغا دىققەت قىلىڭكى ، خېرىدارلار تەرەپ مەخپىيلەشتۈرۈش ئىقتىدارى قوزغىتىلغان تەقدىردىمۇ ، شىفىرلانغان مۇلازىمېتىر تەرىپىڭىزگە تولۇق كۆرۈنۈشلۈك رەقىبى
 ساقلاش ، ئاچقۇچ بولمىسىمۇ ، يەنىلا مۇندەرىجە ئومۇمىي سانىنى ۋە ھەر بىر ھۆججەتتە قانچە ھۆججەت بارلىقىنى كۆرەلەيسىز
 بەزى تىرىشچانلىقلار ، مۇندەرىجە قاتلاملىرىنىڭ ئومۇمىي قۇرۇلمىسىنىڭ بەزىلىرىنى ياكى ھەممىسىنى بايقاش.
 * ئەسكەرتىش: تېخىمۇ ياخشى بىخەتەرلىك ئۈچۈن نىسبەتەن تەكشى قۇرۇلمىنى ئىشلىتىڭ. *
 رەقىبى سىزنىڭ شىفىرلاشنىمۇ بىلمىسىلا مۇندەرىجە / ھۆججەتلەرنىڭ ئىسمىنى بىلمەيدۇ
 ئاچقۇچ ياكى مەخپىيلەشتۈرۈشنى مۇۋەپپەقىيەتلىك ھالدا يېرىۋەتكەن. بارلىق دو تىكىشلەر شۇ ۋاقىتتا!

 ### ئىقتىدار ۋە غەملەك
 شىفىرلانغان ساقلاش مەشغۇلاتى ئاستا بولىدۇ. تەكرار تىزىملىك ۋە چىقىرىۋېتىش ناھايىتى ئاستا بولىدۇ.
 Redis ئارقىلىق غەملەك قىلىش ناھايىتى چوڭ ياردەم بېرىدۇ ، ئەمما دىققەت قىلىڭ ، بۇ كەش ھەر قانداق يازمىلارغا چاپلانغان ياكى ئۆچۈرۈلگەن.

 ## ئاچقۇچ ئايلىنىش
 يېڭى ئاچقۇچ بىلەن كۆچمە تېلېفون قۇرۇڭ ، ئاندىن ئۇنىڭغا كونا سانلىق مەلۇماتلارنى ئەينەك قىلىڭ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## قوزغاتقۇچ كۆرۈنمە يۈزى
 قوزغاتقۇچ بۇ ئىمزا بىلەن «storageClient» ئىقتىدارىنى ئېكسپورت قىلىدىغان ھەر قانداق JS ھۆججىتى:

    function storageClient (key, secret, opts)

 * `key` : بىر قۇر ، API ئاچقۇچىڭىز ( `local` قوزغاتقۇچ ئۈچۈن بۇ ئاساسىي مۇندەرىجە)
 * `secret` : بىر قۇر ، API مەخپىيىتىڭىز (« `local` قوزغاتقۇچ ئۈچۈن چىقىرىۋېتىلىدۇ)
 * `opts` : ئوبيېكت ، خاسلىقى ھەر بىر قوزغاتقۇچ:
 * « `local` ئۈچۈن ، « `fileMode` ۋە « `dirMode` خاسلىقى يېڭى ھۆججەت ۋە مۇندەرىجىلەرنىڭ قانداق قۇرۇلغانلىقىنى بەلگىلەيدۇ.
 * `s3` ئۈچۈن « `bucket` خاسلىقى تەلەپ قىلىنىدۇ. ئىختىيارى خۇسۇسىيەتلەر:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 StorageClient ئىقتىدارى قايتۇرىدىغان ئوبيېكت چوقۇم بۇ ئىقتىدارلارغا ئېنىقلىما بېرىشى كېرەك:

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

 ## كىرىش
 Mobiletto [winston](https://www.npmjs.com/package/winston) خاتىرىلەش ئامبىرىنى ئىشلىتىدۇ.

 خاتىرىلەر ** ھۆججەت يولى ۋە خاتالىق ئۇچۇرىنى ئۆز ئىچىگە ئالىدۇ ، ئەمما ** ھەرگىزمۇ ** ئاچقۇچ ، مەخپىيەتلىكنى ئۆز ئىچىگە ئالمايدۇ.
 ياكى باشقا ئۇلىنىش سەپلىمىسى ئۇچۇرلىرى.

 ### خاتىرە دەرىجىسى
 « `MOBILETTO_LOG_LEVEL` مۇھىت ئۆزگەرگۈچى مىقدارنى ئىشلىتىپ خاتىرە دەرىجىسىنى تەڭشەڭ
 [https://www.npmjs.com/package/winston#logging-levels] دۆلەت بەلگىلىگەن `npm` سەۋىيىسى

 سۈكۈتتىكى دەرىجىسى « `error` . گەرچە ھازىر كۆچمە خەۋەرلىشىش بولسىمۇ ، ئەڭ كۆپ `silly` دەرىجىسى «ئەخمەق»
 "debug" دىن تۆۋەن سەۋىيىگە `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### خاتىرە ھۆججىتى
 سۈكۈت بويىچە ، خاتىرىلىگۈچى كونترول سۇپىسىغا يازىدۇ. ھۆججەتلەرنى ھۆججەتكە ئەۋەتىش ئۈچۈن « `MOBILETTO_LOG_FILE`
 مۇھىت ئۆزگەرگۈچى. ھۆججەتكە تىزىملاتقاندا ، كونترول سۇپىسىغا خاتىرە يېزىلمايدۇ.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 كېسىشنى تاقاش:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
