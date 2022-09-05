Mobiletto
 =========

 Mobiletto என்பது ஜாவாஸ்கிரிப்ட் சேமிப்பக சுருக்க அடுக்கு, விருப்ப வெளிப்படையான கிளையன்ட் பக்க குறியாக்கத்துடன்.

 # உள்ளடக்கம்
 * [ஏன் Mobiletto?](#Why-Mobiletto?)
 * [விரைவான தொடக்கம்](#விரைவு-தொடக்கம்)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ஆதாரம்](#மூலம்)
 * [நிறுவல்](#நிறுவல்)
 * [ஆதரவு மற்றும் நிதியுதவி](#ஆதரவு-மற்றும்-நிதி)
 * [அடிப்படை பயன்பாடு](#அடிப்படை-பயன்பாடு)
 * [மெட்டாடேட்டா](#மெட்டாடேட்டா)
 * [மாற்று இறக்குமதி பாணி](#மாற்று-இறக்குமதி-பாணி)
 * [கேச்சிங்](#கேச்சிங்)
 * [மிரரிங்](#மிரரிங்)
 * [வெளிப்படையான குறியாக்கம்](#வெளிப்படையான-குறியாக்கம்)
 * [விசை சுழற்சி](#விசை சுழற்சி)
 * [டிரைவர் இடைமுகம்](#டிரைவர் இடைமுகம்)
 * [பதிவு](#பதிவு)

 # இதை வேறொரு மொழியில் படியுங்கள்
 இந்த README.md ஆவணம் [hokeylization](https://github.com/cobbzilla/hokeylization) வழியாக மொழிபெயர்க்கப்பட்டுள்ளது.
 **[Google மொழிபெயர்ப்பால் ஆதரிக்கப்படும் ஒவ்வொரு மொழியும்](https://cloud.google.com/translate/docs/languages)!**

 இது சரியானது அல்ல என்று நான் உறுதியாக நம்புகிறேன், ஆனால் இது எதையும் விட சிறந்தது என்று நம்புகிறேன்!

 [🇸🇦 அரபு](../ar/README.md)
 [🇧🇩 பெங்காலி](../bn/README.md)
 [🇩🇪 ஜெர்மன்](../de/README.md)
 [🇺🇸 ஆங்கிலம்](../en/README.md)
 [🇪🇸 ஸ்பானிஷ்](../es/README.md)
 [🇫🇷 பிரஞ்சு](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 இந்தி](../hi/README.md)
 [🇮🇩 இந்தோனேசிய](../id/README.md)
 [🇮🇹 இத்தாலியன்](../it/README.md)
 [🇯🇵 ஜப்பானிய](../ja/README.md)
 [🇰🇷 கொரியன்](../ko/README.md)
 [🇮🇳 மராந்தி](../mr/README.md)
 [🇵🇱 போலந்து](../pl/README.md)
 [🇧🇷 போர்த்துகீசியம்](../pt/README.md)
 [🇷🇺 ரஷியன்](../ru/README.md)
 [🇰🇪 சுவாஹிலி](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 துருக்கியம்](../tr/README.md)
 [🇵🇰 உருது](../ur/README.md)
 [🇻🇳 வியட்நாம்](../vi/README.md)
 [🇨🇳 சீன](../zh/README.md)


 **[📚 ... அனைத்து மொழிகளும் ...](../README.md)**
 ----

 ### README இன் இந்த மொழிபெயர்ப்பில் சிக்கல் உள்ளதா?
 அசல் [README] இன் இந்த குறிப்பிட்ட மொழிபெயர்ப்பு (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 குறைபாடுகள் இருக்கலாம் -- *திருத்தங்கள் மிகவும் வரவேற்கப்படுகின்றன!* தயவுசெய்து [GitHub இல் இழுக்கும் கோரிக்கை](https://github.com/cobbzilla/mobiletto/pulls),
 அல்லது நீங்கள் அதைச் செய்ய வசதியாக இல்லை என்றால், [சிக்கலைத் திறக்கவும்](https://github.com/cobbzilla/mobiletto/issues)

 மொழிபெயர்ப்பில் புதிய GitHub சிக்கலை உருவாக்கும் போது, தயவுசெய்து பின்வருவனவற்றைச் செய்யுங்கள்:
 * பக்க URL ஐச் சேர்க்கவும் (உலாவி முகவரிப் பட்டியில் இருந்து நகலெடுத்து ஒட்டவும்)
 * தவறான உரையைச் சேர்க்கவும் (உலாவியிலிருந்து நகலெடுக்கவும்/ஒட்டவும்)
 * என்ன தவறு என்று விவரிக்கவும் -- மொழிபெயர்ப்பு தவறானதா? வடிவமைப்பு எப்படியாவது உடைந்துவிட்டதா?
 * சிறந்த மொழிபெயர்ப்பு அல்லது உரையை எவ்வாறு சரியாக வடிவமைக்க வேண்டும் என்ற ஆலோசனையை தயவுசெய்து வழங்கவும்
 * **நன்றி!**

 ## ஏன் Mobiletto?

 ### குட்பை விற்பனையாளர் லாக்-இன்!
 பல்வேறு கிளவுட் ஸ்டோரேஜ் வழங்குநர்கள் இணக்கமற்ற APIகளைக் கொண்டுள்ளனர். "S3 இணக்கத்தன்மைக்கு" பாடுபடுபவர்களும் கூட
 தனித்துவ நடத்தை கொண்டவர்கள்.

 உங்கள் பயன்பாட்டிற்கான குறிப்பிட்ட சேமிப்பக விற்பனையாளரைத் தேர்ந்தெடுக்கும்போது, அவர்களின் API, உங்கள் பயன்பாட்டிற்கு நேரடியாகக் குறியீடு செய்தால்
 இப்போது அந்த சேவையை சார்ந்துள்ளது. நேரம் செல்ல செல்ல குறியீடு குவிந்து, விற்பனையாளர்கள் மாறுகிறார்கள்
 பெருகிய முறையில் ஏற்றுக்கொள்ள முடியாதது. விற்பனையாளர் லாக்-இன் வேடிக்கையான உலகத்திற்கு வரவேற்கிறோம்!

 இந்த சிக்கலை தீர்க்க Mobiletto உருவாக்கப்பட்டது. உங்கள் பயன்பாட்டை mobiletto இன் API க்கு குறியிடுவதன் மூலம், நீங்கள் எளிதாக செய்யலாம்
 சேமிப்பக வழங்குநர்களை மாற்றி, உங்கள் பயன்பாட்டின் சேமிப்பக அடுக்கு ஒரே மாதிரியாக செயல்படும் என்பதை அறிந்து கொள்ளுங்கள்.

 ### விரிவான சோதனை
 ஒவ்வொரு டிரைவருக்கும் 60+ சோதனைகள் மூலம் அனைத்து டிரைவர்களும் ஒரே மாதிரியான நடத்தைக்காக சோதிக்கப்படுகிறார்கள்.
 அனைத்து இயக்கிகளையும் ஒவ்வொரு கலவையுடன் நாங்கள் சோதிக்கிறோம்:
 * குறியாக்கம்: இயக்கப்பட்டது மற்றும் முடக்கப்பட்டது
 * ரெடிஸ் கேச்: இயக்கப்பட்டது மற்றும் முடக்கப்பட்டது

 நீங்கள் எந்த டிரைவரைப் பயன்படுத்தினாலும், mobiletto ஒரே மாதிரியாகவே செயல்படும் என்பதை இந்த அணுகுமுறை எங்களுக்கு நிம்மதி அளிக்கிறது.
 நீங்கள் கேச்சிங் மற்றும்/அல்லது குறியாக்கத்தை இயக்குகிறீர்களா என்பதைப் பொருட்படுத்தாமல்.

 ### டிரைவர் ஆதரவு
 தற்போதைய Mobiletto சேமிப்பக இயக்கிகள்:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : உள்ளூர் கோப்பு முறைமை

 *மேலும் கிளவுட் ஸ்டோரேஜ் வழங்குநர்களை ஆதரிப்பதற்கான பங்களிப்புகள் வரவேற்கப்படுகின்றன!*

 ## mobiletto-cli
 Mobiletto என்பது பிற ஜாவாஸ்கிரிப்ட் குறியீட்டால் நூலகமாகப் பயன்படுத்தப்பட வேண்டும்.

 கட்டளை வரியில் mobiletto உடன் பணிபுரிய, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ஐப் பயன்படுத்தவும்

 ## ஆதாரம்
 * [GitHub இல் மொபைலெட்டோ](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## ஆதரவு மற்றும் நிதி
 நான் ஒரு தொழில்முறை திறந்த மூல மென்பொருள் உருவாக்குநராக இருக்க முயற்சிக்கிறேன். நான் வேலை செய்து வருகிறேன்
 பல ஆண்டுகளாக மென்பொருள் துறையில், வெற்றிகரமான நிறுவனங்களைத் தொடங்கி, அவற்றை பொது நிறுவனங்களுக்கு விற்று வருகிறேன்.
 சமீபத்தில் நான் என் வேலையை இழந்தேன், எனக்கு வேறு எந்த வேலையும் இல்லை

 எனவே பயனுள்ள மென்பொருளை எழுத முயற்சிக்கிறேன், அது செயல்படுகிறதா என்று பார்க்கிறேன்

 நீங்கள் இந்த மென்பொருளைப் பயன்படுத்தி மகிழ்ந்தால், அதற்கும் நான் மிகவும் நன்றியுள்ளவனாக இருப்பேன்
 சிறியது [Patreon வழியாக மாதாந்திர பங்களிப்பு](https://www.patreon.com/cobbzilla)

 *நன்றி!*

 ## நிறுவல்
 `npm` அல்லது `yarn` பயன்படுத்தி நிறுவவும். அனைத்தையும் உள்ளடக்காத `lite` பதிப்பை நீங்கள் விரும்பலாம்
 மொழிபெயர்க்கப்பட்ட README கோப்புகள்:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ஒவ்வொரு மொழியிலும் README கோப்புகளை நீங்கள் உண்மையிலேயே விரும்பினால், முழுப் பதிப்பையும் நிறுவவும்:

    npm install mobiletto
    yarn add mobiletto

 ## விரைவு தொடக்கம்
 mobiletto `s3` இயக்கியைப் பயன்படுத்தும் ஒரு சிறிய எடுத்துக்காட்டு.

 இயக்கி `b2` அல்லது `local` என்றால் இந்தக் குறியீடு ஒரே மாதிரியாக இயங்கும்.

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
 ## அடிப்படை பயன்பாடு
 மிகவும் விரிவான உதாரணம், வழங்கப்படும் பெரும்பாலான அம்சங்களைக் காட்டுகிறது:

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

 ## மெட்டாடேட்டா
 `metadata` கட்டளையானது ஒற்றை கோப்பு முறைமை உள்ளீட்டைப் பற்றிய மெட்டாடேட்டாவை வழங்குகிறது.
 அதேபோல், `list` கட்டளையிலிருந்து திரும்பும் மதிப்பு மெட்டாடேட்டா பொருள்களின் வரிசையாகும்.

 ஒரு மெட்டாடேட்டா பொருள் இப்படி இருக்கும்:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` வகை` சொத்து `file` , `dir` , `link` அல்லது `special` .

 இயக்கியின் வகையைப் பொறுத்து, `list` கட்டளை அனைத்து புலங்களையும் வழங்காது. `name` மற்றும் `type` வகை` பண்புகள்
 எப்போதும் இருக்க வேண்டும். அடுத்த `metadata` கட்டளையானது கிடைக்கக்கூடிய அனைத்து பண்புகளையும் வழங்கும்.

 ## மாற்று இறக்குமதி பாணி
 முழு நோக்கமுள்ள தொகுதியை இறக்குமதி செய்து, `connect` செயல்பாட்டைப் பயன்படுத்தவும்:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## கேச்சிங்
 ரெடிஸ் கேச் மூலம் <a href="https://redis.io">Mobiletto</a> சிறப்பாக செயல்படுகிறது.

 Mobiletto 127.0.0.1:6379 இல் ரெடிஸ் நிகழ்வை இணைக்க முயற்சிக்கும்

 இவற்றில் ஏதேனும் ஒன்றை நீங்கள் மேலெழுதலாம்:
 * லோக்கல் ஹோஸ்டுக்குப் பதிலாக `MOBILETTO_REDIS_HOST` env var, mobiletto இணைக்க இங்கே அமைக்கவும்
 * `MOBILETTO_REDIS_PORT` env var ஐ அமைக்கவும், இந்த போர்ட் பயன்படுத்தப்படும்

 Mobiletto அதன் அனைத்து ரெடிஸ் விசைகளையும் `_mobiletto__` முன்னொட்டுடன் சேமிக்கும். நீங்கள் இதை மாற்றலாம்
 `MOBILETTO_REDIS_PREFIX` env var ஐ அமைப்பதன் மூலம்.

 நீங்கள் `opts.redisConfig` ஆப்ஜெக்ட்டைக் கொண்டு ஒவ்வொரு இணைப்பு தற்காலிக சேமிப்பையும் அமைக்கலாம்:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis caching வேண்டாமா?
 முடக்க: உங்கள் இணைப்பை நிறுவும் போது, உங்கள் `opts.redisConfig` ஆப்ஜெக்டில் `enabled: false` கடந்து செல்லவும்.

 கீழே விவாதிக்கப்பட்டபடி, தற்காலிக சேமிப்பை முடக்குவது செயல்திறனில் எதிர்மறையான விளைவை ஏற்படுத்தும் மற்றும் அதிக கோரிக்கைகளை ஏற்படுத்தும்
 நீங்கள் உண்மையில் தேவைப்படும் சேமிப்பகத்திற்கு.

 ### கேச்சிங் வழிகாட்டுதல்
 ** மறைகுறியாக்கப்பட்ட சேமிப்பிடம்**: மறைகுறியாக்கப்பட்ட சேமிப்பகத்தைப் படிப்பது/எழுதுவது இயல்பை விட சற்று மெதுவாக இருக்கும்,
 ஆனால் அடைவுகளைச் சுற்றிச் செல்வது (சில விஷயங்கள்) மிகவும் விலை உயர்ந்தது. ரெடிஸ் கேச் பயன்படுத்துதல்
 குறிப்பிடத்தக்க செயல்திறன் ஊக்கத்தை உங்களுக்கு வழங்கும்.

 இயல்புநிலை கேச் பாதுகாப்பானது, ஆனால் உங்களிடம் நிறைய எழுதுதல்/அகற்றுதல் செயல்பாடுகள் இருந்தால் சரியாகச் செயல்படாது.
 எழுதுதல் அல்லது அகற்றுதல் செயல்பாடு முழுத் தற்காலிக சேமிப்பையும் செல்லாததாக்குகிறது, அடுத்தடுத்த வாசிப்புகள் அதைக் காணும்
 சமீபத்திய மாற்றங்கள்.

 ### CLI கருவிகள்
 நீங்கள் [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) போன்ற CLI கருவியைப் பயன்படுத்துகிறீர்கள் என்றால்,
 ரெடிஸ் கேச் இயக்கப்பட்டிருக்க வேண்டும், ஏனெனில் இது `mo` கட்டளையின் அழைப்புகள் முழுவதும் நீடிக்கும்.

 ## பிரதிபலிக்கிறது

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` கட்டளையானது ஒரு மொபைலில் இருந்து மற்றொன்றுக்கு அனைத்து கோப்புகளின் ஒரு முறை நகலைச் செய்கிறது.
 காலப்போக்கில் கண்ணாடியை பராமரிக்க இது எந்த செயல்முறையையும் இயக்காது. `mirror` கட்டளையை மீண்டும் இயக்கவும்
 விடுபட்ட கோப்புகளை ஒத்திசைக்க.

 எத்தனை கோப்புகள் வெற்றிகரமாக இருந்தன என்பதற்கான கவுண்டர்களைக் கொண்ட ஒரு எளிய பொருள் `mirror` இலிருந்து திரும்பும் மதிப்பு
 பிரதிபலித்தது மற்றும் எத்தனை கோப்புகளில் பிழைகள் உள்ளன:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 எச்சரிக்கை: பெரிய தரவுத் தொகுப்புகளைப் பிரதிபலிப்பது அதிக நேரத்தைச் செலவழிக்கும் மற்றும் அலைவரிசை-தீவிரமானதாக இருக்கும்

 `mirror` அழைப்பு சொற்பொருள் மூலம் அது யார் என்பதைப் புரிந்துகொள்வது சில நேரங்களில் குழப்பமாக இருக்கும்
 வாசகர் மற்றும் எழுத்தாளர் யார். இது ஒரு அசைன்மென்ட் ஸ்டேட்மென்ட் போல் கற்பனை செய்து பாருங்கள்: "இடது கை மொபைல்ட்டோ"
 (எழுதப்பட்ட பிரதிபலிப்பு தரவு) மற்றும் "வலது கை மொபைல்ட்டோ" (தி
 `mirror` முறைக்கான வாதம்) ஒதுக்கப்படும் மதிப்பு (பிரதிபலித்த தரவு படிக்கப்படுகிறது).

 ## வெளிப்படையான குறியாக்கம்
 வெளிப்படையான கிளையன்ட் பக்க குறியாக்கத்தை இயக்கு:

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

 என்ன நடக்கிறது? ஒரு தனி "டைரக்டரி என்ட்ரி" (டைரண்ட்) டைரக்டரி (குறியாக்கப்பட்ட) அதில் என்ன கோப்புகள் உள்ளன என்பதைக் கண்காணிக்கும்.
 அடைவு (அதாவது டைரண்ட் டைரக்டரி).
 * `list` கட்டளை அடைவு நுழைவு கோப்புகளைப் படிக்கிறது, பட்டியலிடப்பட்ட ஒவ்வொரு பாதையையும் மறைகுறியாக்குகிறது; ஒவ்வொரு கோப்பிற்கும் மெட்டாடேட்டாவை வழங்குகிறது
 * `list` கட்டளைகள் மிகவும் திறனற்றவை, குறிப்பாக அதிக எண்ணிக்கையிலான கோப்புகளைக் கொண்ட கோப்பகங்களுக்கு
 * `write` கட்டளையானது ஒவ்வொரு பெற்றோரின் டைரண்ட் டைரக்டரியிலும் டைரண்ட் கோப்புகளை மீண்டும் மீண்டும் எழுதுகிறது; பின்னர் கோப்பை எழுதுகிறார்
 * `write` கட்டளைகள் O(N) எழுத்துகளை உள்ளடக்கும், N = அடைவு படிநிலையில் ஆழம்
 * `remove` கட்டளையானது தொடர்புடைய டைரண்ட் கோப்பையும், அதன் பெற்றோர் காலியாக இருந்தால், மீண்டும் மீண்டும் நீக்குகிறது; பின்னர் கோப்பை நீக்குகிறது
 * `remove` கட்டளைகள் O(N) வாசிப்புகளையும், அடைவு படிநிலையில் N = ஆழம் கொண்ட பல நீக்கங்களையும் ஏற்படுத்தும்.
 * பெரிய மற்றும் ஆழமான கோப்பு முறைமைகளில் சுழல்நிலை `remove` கட்டளைகள் விலை உயர்ந்ததாக இருக்கும்

 கிளையன்ட் பக்க குறியாக்கம் இயக்கப்பட்டிருந்தாலும், உங்கள் மறைகுறியாக்கப்பட்ட சர்வர் பக்கத்தில் முழுத் தெரிவுநிலையுடன் எதிரி
 சேமிப்பகம், சாவி இல்லாவிட்டாலும், கோப்பகங்களின் மொத்த எண்ணிக்கையையும் ஒவ்வொன்றிலும் எத்தனை கோப்புகள் உள்ளன என்பதையும், அதனுடன் இருப்பதையும் பார்க்கலாம்
 சில முயற்சிகள், அடைவு படிநிலையின் ஒட்டுமொத்த கட்டமைப்பில் சில அல்லது அனைத்தையும் கண்டறியவும்.
 *குறிப்பு: சிறந்த பாதுகாப்பிற்காக ஒப்பீட்டளவில் தட்டையான கட்டமைப்பைப் பயன்படுத்தவும்.*
 உங்கள் குறியாக்கத்தை அறியாதவரை, எதிரிக்கு கோப்பகங்கள்/கோப்புகளின் பெயர்கள் தெரியாது.
 விசை அல்லது குறியாக்கத்தை வெற்றிகரமாக சிதைத்துவிட்டது. அனைத்து பந்தயங்களும் நிறுத்தப்படும்!

 ### செயல்திறன் மற்றும் கேச்சிங்
 மறைகுறியாக்கப்பட்ட சேமிப்பகத்தின் செயல்பாடுகள் மெதுவாக இருக்கும். சுழல்நிலை பட்டியல்கள் மற்றும் அகற்றுதல்கள் மிகவும் மெதுவாக இருக்கும்.
 ரெடிஸ் மூலம் கேச்சிங் பெரிதும் உதவுகிறது, ஆனால் எந்த எழுத்து அல்லது நீக்கும் போது கேச் சுத்தப்படுத்தப்படுகிறது என்பதை நினைவில் கொள்ளவும்.

 ## விசை சுழற்சி
 உங்கள் புதிய விசையுடன் மொபைலை உருவாக்கவும், பின்னர் பழைய தரவை அதில் பிரதிபலிக்கவும்:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## டிரைவர் இடைமுகம்
 இயக்கி என்பது இந்த கையொப்பத்துடன் 'storageClient' செயல்பாட்டை ஏற்றுமதி செய்யும் JS கோப்பு:

    function storageClient (key, secret, opts)

 * `key` : ஒரு சரம், உங்கள் API விசை ( `local` இயக்கிக்கு இது அடிப்படை அடைவு)
 * `secret` : ஒரு சரம், உங்கள் API ரகசியம் ( `local` இயக்கிக்கு தவிர்க்கப்படலாம்)
 * `opts` : ஒரு பொருள், ஒரு இயக்கிக்கு பண்புகள்:
 * `local` , `fileMode` மற்றும் `dirMode` பண்புகள் புதிய உருவாக்கும் கோப்புகள் மற்றும் கோப்பகங்கள் எவ்வாறு உருவாக்கப்படுகின்றன என்பதை தீர்மானிக்கிறது
 * `s3` , `bucket` சொத்து தேவை. விருப்ப பண்புகள்:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ஸ்டோரேஜ் கிளையண்ட் செயல்பாடு திரும்பும் பொருள் இந்த செயல்பாடுகளை வரையறுக்க வேண்டும்:

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

 ## பதிவு
 Mobiletto ஆனது [winston](https://www.npmjs.com/package/winston) பதிவு நூலகத்தைப் பயன்படுத்துகிறது.

 பதிவுகள் **** கோப்பு பாதைகள் மற்றும் பிழை செய்திகளைக் கொண்டிருக்கும், ஆனால் **ஒருபோதும்** விசைகள், ரகசியங்கள்,
 அல்லது வேறு ஏதேனும் இணைப்பு கட்டமைப்பு தகவல்.

 ### பதிவு நிலை
 பதிவு அளவை அமைக்க `MOBILETTO_LOG_LEVEL` சூழல் மாறியைப் பயன்படுத்தவும், ஒன்றைப் பயன்படுத்தி
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) இல் வரையறுக்கப்பட்ட `npm` நிலைகள்

 இயல்பு நிலை `error` . தற்போது mobiletto என்றாலும், மிகவும் வாய்மொழி நிலை `silly` சில்லி`
 `debug` கீழே உள்ள நிலைகளில் உள்நுழைவதில்லை

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### பதிவு கோப்பு
 முன்னிருப்பாக, பதிவர் பணியகத்திற்கு எழுதுகிறார். ஒரு கோப்பிற்கு பதிவுகளை அனுப்ப, `MOBILETTO_LOG_FILE`
 சுற்றுச்சூழல் மாறி. ஒரு கோப்பில் உள்நுழையும்போது, பதிவுகள் கன்சோலில் எழுதப்படாது.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 பதிவு செய்வதை முடக்க:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
