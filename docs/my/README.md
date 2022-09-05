Mobiletto
 =========

 Mobiletto သည် ရွေးချယ်နိုင်သော ဖောက်သည်ဘက်မှ လျှို့ဝှက်ကုဒ်ဖြင့် ဖောက်ထွင်းမြင်ရသည့် အလွှာတစ်ခုပါရှိသော JavaScript သိုလှောင်မှု abstraction အလွှာဖြစ်သည်။

 # မာတိကာ
 * [ဘာကြောင့် Mobiletto?](#Why-Mobiletto?)
 * [အမြန်စတင်ခြင်း](#အမြန်စတင်ခြင်း)
 * [Mobiletto CLI](#mobiletto-cli)
 * [အရင်းအမြစ်](#အရင်းအမြစ်)
 * [တပ်ဆင်ခြင်း](#တပ်ဆင်ခြင်း)
 * [ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ](#ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ)
 * [အခြေခံအသုံးပြုမှု](#အခြေခံအသုံးပြုမှု)
 * [Metadata](#Metadata)
 * [အလှည့်ကျ တင်သွင်းမှုပုံစံ](#Alternate-import-style)
 * [Caching](#Caching)
 * [ကြေးမုံရိုက်ခြင်း](# Mirroring)
 * [ဖောက်ထွင်းမြင်ရသော ကုဒ်ဝှက်ခြင်း](#Transparent-encryption)
 * [သော့လှည့်ခြင်း](#သော့လှည့်ခြင်း)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # ဤအရာကို အခြားဘာသာစကားဖြင့် ဖတ်ပါ။
 ဤ README.md စာတမ်းကို [hokeylization](https://github.com/cobbzilla/hokeylization) မှတဆင့် ဘာသာပြန်ပြီးပါပြီ၊
 **[Google Translate မှပံ့ပိုးထားသော ဘာသာစကားတိုင်း](https://cloud.google.com/translate/docs/languages)!**

 မပြည့်စုံဘူးဆိုတာ သေချာပါတယ်၊ ဒါပေမယ့် ဘာမှထက် ပိုကောင်းမယ်လို့ မျှော်လင့်ပါတယ်။

 [🇸🇦 အာရဗီ](../ar/README.md)
 [🇧🇩 ဘင်္ဂါလီ](../bn/README.md)
 [🇩🇪 ဂျာမန်](../de/README.md)
 [🇺🇸 အင်္ဂလိပ်](../en/README.md)
 [🇪🇸 စပိန်](../es/README.md)
 [🇫🇷 ပြင်သစ်](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 ဟိန္ဒီ](../hi/README.md)
 [🇮🇩 အင်ဒိုနီးရှား](../id/README.md)
 [🇮🇹 အီတလီ](../it/README.md)
 [🇯🇵 ဂျပန်](../ja/README.md)
 [🇰🇷 ကိုးရီးယား](../ko/README.md)
 [🇮🇳 မာရသီ](../mr/README.md)
 [🇵🇱 ပိုလန်](../pl/README.md)
 [🇧🇷 ပေါ်တူဂီ](../pt/README.md)
 [🇷🇺 ရုရှား](../ru/README.md)
 [🇰🇪 ဆွာဟီလီ](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 တူရကီ](../tr/README.md)
 [🇵🇰 အူရဒူ](../ur/README.md)
 [🇻🇳 ဗီယက်နမ်](../vi/README.md)
 [🇨🇳 တရုတ်](../zh/README.md)


 **[📚 ... ဘာသာစကားအားလုံး ...](../README.md)**
 ----

 ### ဤ README ဘာသာပြန်ဆိုရာတွင် ပြဿနာရှိပါသလား။
 မူရင်း [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ချို့ယွင်းချက်ရှိနိုင်သည် -- *ပြင်ဆင်မှုများသည် အလွန်ကြိုဆိုပါသည်!* ကျေးဇူးပြု၍ [GitHub ပေါ်တွင် ဆွဲတင်တောင်းဆိုမှု](https://github.com/cobbzilla/mobiletto/pulls) ကို ပေးပို့ပါ။
 သို့မဟုတ် ထိုသို့လုပ်ရန် အဆင်မပြေပါက၊ [ပြဿနာတစ်ခုကို ဖွင့်ပါ](https://github.com/cobbzilla/mobiletto/issues)

 ဘာသာပြန်ခြင်းဆိုင်ရာ GitHub ပြဿနာအသစ်တစ်ခုကို သင်ဖန်တီးသောအခါ၊ ကျေးဇူးပြု၍ လုပ်ဆောင်ပါ။
 * စာမျက်နှာ URL ကိုထည့်သွင်းပါ (ဘရောက်ဆာလိပ်စာဘားမှကူးယူ / ကူးထည့်ပါ)
 * မှားယွင်းသော စာသားအတိအကျကို ထည့်သွင်းပါ (ဘရောက်ဆာမှ ကော်ပီ/ကူးထည့်ပါ)
 * အမှားကို ဖော်ပြပါ- ဘာသာပြန်မှု မှားနေပါသလား။ formatting က တစ်နည်းနည်းနဲ့ ပျက်နေပါသလား။
 * ပိုမိုကောင်းမွန်သော ဘာသာပြန်ဆိုမှု သို့မဟုတ် စာသားကို မှန်ကန်စွာ ဖော်မတ်ထားသင့်ပုံကို ကျေးဇူးပြု၍ အကြံပြုတင်ပြပါ။
 * **ကျေးဇူးတင်ပါတယ်!**

 ## ဘာကြောင့် Mobiletto?

 ### နှုတ်ဆက်ပါတယ် ရောင်းချသူ lock-in။
 အမျိုးမျိုးသော cloud သိုလှောင်မှုပံ့ပိုးပေးသူများတွင် တွဲဖက်သုံးမရသော API များရှိသည်။ "S3 compatibility" အတွက် ကြိုးပမ်းသူများပင်၊
 ရိုင်းစိုင်းသော အပြုအမူများရှိသည်။

 သင့်အက်ပ်အတွက် သီးခြားသိုလှောင်ရောင်းချသူအား သင်ရွေးချယ်သောအခါ၊ သင်သည် ၎င်းတို့၏ API သို့ တိုက်ရိုက်ကုဒ်လုပ်ပါက၊ သင့်အက်ပ်
 ယခုအခါ အဆိုပါဝန်ဆောင်မှုအပေါ် မှီခိုနေရသည်။ အချိန်ကြာလာသည်နှင့်အမျှ ကုဒ်များစုပုံလာသည်နှင့်အမျှ စျေးသည်များ ပြောင်းလဲလာသည်။
 တိုး၍မရပါ။ ရောင်းချသူလော့ခ်ချခြင်း၏ ပျော်စရာကမ္ဘာမှ ကြိုဆိုပါတယ်။

 Mobiletto သည် ဤပြဿနာကိုဖြေရှင်းရန် ဒီဇိုင်းထုတ်ထားသည်။ သင့်အက်ပ်ကို mobiletto ၏ API သို့ ကုဒ်ဖြင့် ကုဒ်ဖြင့် အလွယ်တကူ ပြုလုပ်နိုင်သည်။
 သိုလှောင်မှုဝန်ဆောင်မှုပေးသူများကို ပြောင်းလဲပြီး သင့်အက်ပ်၏ သိုလှောင်မှုအလွှာသည် တစ်ထပ်တည်းဖြစ်နေမည်ကို သိပါ။

 ### ကျယ်ကျယ်ပြန့်ပြန့် စမ်းသပ်ခြင်း။
 ယာဉ်မောင်းတစ်ဦးစီအတွက် 60+ စမ်းသပ်မှုများဖြင့် တူညီသောအပြုအမူအတွက် ယာဉ်မောင်းအားလုံးကို စမ်းသပ်ထားသည်။
 ကျွန်ုပ်တို့သည် ပေါင်းစပ်မှုတိုင်းဖြင့် ယာဉ်မောင်းအားလုံးကို စမ်းသပ်သည်။
 * ကုဒ်ဝှက်ခြင်း- ဖွင့်ထားသည်နှင့် ပိတ်ထားသည်။
 * Redis cache- နှစ်ခုစလုံးကို ဖွင့်ပြီး ပိတ်ထားသည်။

 ဤနည်းလမ်းသည် မည်သည့်ယာဉ်မောင်းကိုသုံးသည်ဖြစ်စေ mobiletto သည် ကျွန်ုပ်တို့အား စိတ်အေးချမ်းသာစွာ ပေးစွမ်းနိုင်သည်၊
 ကက်ရှ်နှင့်/သို့မဟုတ် ကုဒ်ဝှက်ခြင်းကို သင်ဖွင့်သည်ဖြစ်စေ မသက်ဆိုင်ပါ။

 ### ယာဉ်မောင်းပံ့ပိုးမှု
 လက်ရှိ Mobiletto သိုလှောင်မှုဒရိုက်ဗာများ
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : ဒေသတွင်း ဖိုင်စနစ်

 * နောက်ထပ် cloud သိုလှောင်မှု ပံ့ပိုးပေးသူများကို ပံ့ပိုးရန် ပံ့ပိုးကူညီမှုများကို အလွန်ကြိုဆိုပါသည်။*

 ## mobiletto-cli
 Mobiletto ကို အခြားသော JavaScript ကုဒ်ဖြင့် စာကြည့်တိုက်တစ်ခုအဖြစ် အသုံးပြုရန် ရည်ရွယ်ပါသည်။

 command-line တွင် mobiletto နှင့်အလုပ်လုပ်ရန် [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ကိုသုံးပါ။

 ## အရင်းအမြစ်
 * [GitHub ရှိ mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm on mobiletto](https://www.npmjs.com/package/mobiletto)

 ## ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ
 ပရော်ဖက်ရှင်နယ် open source software developer တစ်ယောက်ဖြစ်ဖို့ ကြိုးစားနေပါတယ်။ ကျွန်တော် အလုပ်လုပ်ဖူးပါတယ်။
 ဆော့ဖ်ဝဲလ်စက်မှုလုပ်ငန်းကို နှစ်အတော်ကြာအောင် အောင်မြင်တဲ့ ကုမ္ပဏီတွေကို စတင်ခဲ့ပြီး အများပိုင်ကုမ္ပဏီတွေကို ရောင်းချခဲ့ပါတယ်။
 မကြာသေးမီက ကျွန်တော် အလုပ်ပြုတ်သွားခဲ့ပြီး အခြားအလုပ်များ တန်းစီနေခြင်းမရှိပါ။

 ဒါကြောင့် အသုံးဝင်တဲ့ ဆော့ဖ်ဝဲလ်ကို ရေးပြီး စမ်းကြည့်မယ်။

 ဒီဆော့ဝဲလ်ကို သုံးရတာကို နှစ်သက်တယ်ဆိုရင်တော့ ဒီဆော့ဝဲလ်လေးကိုတောင် ကျေးဇူးတင်မိမှာပါ။
 အသေးငယ်ဆုံး [Patreon မှတစ်ဆင့် လစဉ်ပံ့ပိုးကူညီမှု](https://www.patreon.com/cobbzilla)

 *ကျေးဇူးတင်ပါတယ်!*

 ## တပ်ဆင်ခြင်း။
 `npm` သို့မဟုတ် `yarn` ကို အသုံးပြု၍ ထည့်သွင်းပါ။ အားလုံးမပါဝင်သည့် `lite` ဗားရှင်းကို သင်လိုချင်ပေမည်။
 ဘာသာပြန်ထားသော README ဖိုင်များ-

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ဘာသာစကားတိုင်းတွင် README ဖိုင်များကို အမှန်တကယ်လိုချင်ပါက ဗားရှင်းအပြည့်အစုံကို ထည့်သွင်းပါ။

    npm install mobiletto
    yarn add mobiletto

 ## အမြန်စတင်ပါ။
 mobiletto `s3` driver ကိုအသုံးပြုထားသော ဥပမာအတို။

 ဒရိုင်ဘာသည် `b2` သို့မဟုတ် `local` ဖြစ်ပါက ဤကုဒ်သည် တူညီမည်ဖြစ်သည်။

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
 ## အခြေခံအသုံးပြုမှု
 ပိုမိုကျယ်ပြန့်သော ဥပမာတစ်ခု၊ ပေးဆောင်ထားသည့် အင်္ဂါရပ်အများစုကို ပြသသည်-

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

 ## မက်တာဒေတာ
 `metadata` အမိန့်သည် ဖိုင်စနစ်ထည့်သွင်းမှုတစ်ခုအတွက် မက်တာဒေတာကို ပြန်ပေးသည်။
 အလားတူ၊ `list` command မှ ပြန်တန်ဖိုးသည် မက်တာဒေတာအရာဝတ္တုများ၏ array တစ်ခုဖြစ်သည်။

 မက်တာဒေတာ အရာဝတ္ထုသည် ဤကဲ့သို့ ဖြစ်သည်-

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ပိုင်ဆိုင်မှုသည် `file` ၊ `dir` ၊ `link` သို့မဟုတ် `special` ။

 ဒရိုက်ဘာအမျိုးအစားပေါ် မူတည်၍ `list` ညွှန်ကြားချက်သည် အကွက်အားလုံးကို ပြန်မရနိုင်ပါ။ `name` နှင့် `type` ဂုဏ်သတ္တိများ
 အမြဲရှိနေသင့်တယ်။ နောက်ဆက်တွဲ `metadata` ညွှန်ကြားချက်သည် ရနိုင်သော ဂုဏ်သတ္တိအားလုံးကို ပြန်ပေးပါမည်။

 ## အစားထိုးတင်သွင်းမှုပုံစံ
 အပြည့်အ၀သတ်မှတ်ထားသော module ကိုတင်သွင်းပြီး `ချိတ်ဆက်ရန် `connect` လုပ်ဆောင်ချက်ကို အသုံးပြုပါ-

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## သိမ်းဆည်းခြင်း။
 Mobiletto သည် <a href="https://redis.io">redis</a> cache ဖြင့် အကောင်းဆုံးလုပ်ဆောင်သည်။

 Mobiletto သည် 127.0.0.1:6379 တွင် redis instance တစ်ခုသို့ ချိတ်ဆက်ရန် ကြိုးစားပါမည်။

 သင်သည် ဤအရာများထဲမှ နှစ်ခုလုံးကို ကျော်နိုင်သည်-
 * localhost အစား ဤနေရာတွင် ချိတ်ဆက်ရန် `MOBILETTO_REDIS_HOST` env var၊ mobiletto ကို သတ်မှတ်ပါ
 * `MOBILETTO_REDIS_PORT` env var ကို သတ်မှတ်ပါ၊ ဤ port ကို အသုံးပြုပါမည်။

 Mobiletto သည် ၎င်း၏ အနီကီးများအားလုံးကို `_mobiletto__` ၏ ရှေ့ဆက်အဖြစ် သိမ်းဆည်းပါမည်။ ဒါကို သင်ပြောင်းလဲနိုင်ပါတယ်။
 `MOBILETTO_REDIS_PREFIX` env var ကို သတ်မှတ်ခြင်းဖြင့်

 `opts.redisConfig` object ဖြင့် per-connection caching ကို သင် သတ်မှတ်နိုင်သည်။

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis caching မလုပ်ချင်ဘူးလား။
 ပိတ်ရန်- သင်၏ချိတ်ဆက်မှုကို စတင်သောအခါတွင် သင်၏ `opts.redisConfig` အရာဝတ္တုတွင် `enabled: false` ကို ဖြတ်သန်းပါ။

 အောက်တွင် ဆွေးနွေးထားသည့်အတိုင်း၊ ကက်ရှ်ကို ပိတ်ခြင်းသည် စွမ်းဆောင်ရည်အပေါ် ဆိုးရွားစွာ သက်ရောက်မှုရှိပြီး နောက်ထပ် တောင်းဆိုမှုများ ရှိလာမည်ဖြစ်သည်။
 သင်အမှန်တကယ်လိုအပ်သောသိုလှောင်မှုဆီသို့။

 ### သိမ်းဆည်းခြင်းလမ်းညွှန်
 **ကုဒ်ဝှက်ထားသော သိုလှောင်မှု**- ကုဒ်ဝှက်ထားသော သိုလှောင်မှုမှာ စာဖတ်ခြင်း/ရေးခြင်းမှာ ပုံမှန်ထက် အနည်းငယ် နှေးကွေးပါသည်။
 သို့သော် (အချို့အရာများပြုလုပ်သည့်) လမ်းညွှန်များပတ် ၀ န်းကျင်ရှာဖွေခြင်းသည်စျေးကြီးသည်။ redis cache ကိုအသုံးပြုခြင်း။
 သိသာထင်ရှားတဲ့ စွမ်းဆောင်ရည်ကို မြှင့်တင်ပေးပါလိမ့်မယ်။

 မူရင်း ကက်ရှ်သည် ဘေးကင်းသော်လည်း သင့်တွင် စာရေးခြင်း/ဖယ်ရှားခြင်း လုပ်ဆောင်မှုများ အများအပြားရှိနေပါက ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်မည် မဟုတ်ပါ။
 စာရေးခြင်း သို့မဟုတ် ဖယ်ရှားခြင်း လုပ်ဆောင်ချက်သည် ကက်ရှ်တစ်ခုလုံးကို ပျက်ပြယ်စေပြီး နောက်ဆက်တွဲဖတ်ရှုမှုများကို မြင်တွေ့ရမည်ဖြစ်ကြောင်း သေချာစေပါသည်။
 နောက်ဆုံးအပြောင်းအလဲများ။

 ### CLI ကိရိယာများ
 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ကဲ့သို့သော CLI tool ကို သင်အသုံးပြုနေပါက၊
 `mo` command ၏ invocation များတွင် ကြာရှည်ခံသောကြောင့် redis cache ကို ဖွင့်ထားရန် သေချာပေါက် လိုချင်ပါသည်။

 ## ကြေးမုံ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` အမိန့်သည် မိုဘိုင်းလ်tto တစ်ခုမှ အခြားဖိုင်အားလုံး၏ တစ်ကြိမ်တည်းကူးယူမှုကို လုပ်ဆောင်သည်။
 အချိန်ကြာလာသည်နှင့်အမျှ မှန်ကို ထိန်းသိမ်းရန် မည်သည့်လုပ်ငန်းစဉ်မျှ မလုပ်ဆောင်ပါ။ `mirror` အမိန့်ကို ထပ်မံလုပ်ဆောင်ပါ။
 ပျောက်ဆုံးနေသော ဖိုင်များကို ထပ်တူပြုရန်။

 `mirror` မှ ပြန်ပို့သည့်တန်ဖိုးသည် ဖိုင်အရေအတွက်မည်မျှအောင်မြင်ခဲ့သည်အတွက် ကောင်တာများပါရှိသော ရိုးရှင်းသော အရာတစ်ခုဖြစ်သည်။
 mirrored လုပ်ပြီး ဖိုင်ဘယ်နှစ်ယောက်မှာ errors ရှိသလဲ-

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 သတိပေးချက်- ကြီးမားသောဒေတာအတွဲများကို ရောင်ပြန်ဟပ်ခြင်းသည် အချိန်ကုန်ပြီး bandwidth အလွန်အမင်းသုံးနိုင်သည်

 `mirror` ခေါ်ပညာဖြင့် ၎င်းသည် မည်သူဖြစ်သည်ကို နားလည်ရန် တစ်ခါတစ်ရံ ရှုပ်ထွေးသွားနိုင်သည်။
 စာဖတ်သူနဲ့ စာရေးဆရာက ဘယ်သူလဲ။ ၎င်းကို assignment statement တစ်ခုကဲ့သို့ မြင်ယောင်ကြည့်ပါ- "ဘယ်ဘက်လက်ဖြင့် mobiletto"
 (မှန်ပြောင်းရေးထားသော အချက်အလက်) နှင့် "ညာဖက်လက်ကိုင်ဖုန်း" (the
 `mirror` နည်းလမ်းအတွက် အငြင်းအခုံ) သည် သတ်မှတ်ပေးထားသည့် တန်ဖိုးဖြစ်သည် (ကြေးမုံပြင်ဒေတာကို ဖတ်သည်)။

 ## ဖောက်ထွင်းမြင်ရသော ကုဒ်ဝှက်စနစ်
 ဖောက်သည်ဘက်မှ ကုဒ်ဝှက်ခြင်းကို ဖွင့်ပါ-

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

 ဘာဖြစ်တာလဲ? သီးခြား "directory entry" (dirent) directory (encrypted) သည် မည်သည့်ဖိုင်များပါရှိသည်ကို ခြေရာခံသည်။
 လမ်းညွှန် (Dirent Directory)။
 * `list` command သည် directory entry ဖိုင်များကိုဖတ်သည်၊ စာရင်းသွင်းထားသောလမ်းကြောင်းတစ်ခုစီကိုစာဝှက်ပေးသည်။ ထို့နောက် ဖိုင်တစ်ခုစီအတွက် မက်တာဒေတာကို ပြန်ပေးသည်။
 * `list` အမိန့်များသည် အထူးသဖြင့် ဖိုင်အများအပြားရှိသော လမ်းညွှန်များအတွက် ပိုထိရောက်မှုမရှိပါ။
 * `write` အမိန့်သည် မိဘတစ်ခုစီ၏ တိုက်ရိုက်လမ်းညွှန်တွင် ဖိုင်များကို ထပ်ခါတလဲလဲ ရေးသားသည်။ ပြီးရင် ဖိုင်ကိုရေးတယ်။
 * `write` ညွှန်ကြားချက်များသည် O(N) ရေးခြင်းကို ခံရမည်ဖြစ်ပြီး၊ လမ်းညွှန်တွင် N= depth ဖြင့်၊
 * `remove` အမိန့်သည် သက်ဆိုင်ရာ dirent ဖိုင်ကို ဖယ်ရှားမည်ဖြစ်ပြီး ၎င်းသည် ဗလာဖြစ်နေပါက၊ ထပ်ခါတလဲလဲလုပ်ပါ။ ထို့နောက်ဖိုင်ကိုဖယ်ရှားပါ။
 * ထပ်ခါတလဲလဲမဟုတ်သော `remove` မိန့်များသည် O(N) ဖတ်ပြီး ဖျက်ပစ်နိုင်ချေများစွာရှိမည်ဖြစ်ပြီး၊ လမ်းညွှန်၏အဆင့်တွင် N = အတိမ်အနက်ဖြင့်၊
 * ကြီးမားပြီး နက်နဲသော ဖိုင်စနစ်များပေါ်တွင် `remove` မိန့်ပေးချက်များသည် စျေးကြီးနိုင်ပါသည်။

 client-side encryption ကိုဖွင့်ထားသော်လည်း၊ သင်၏ encrypted server-side သို့အပြည့်အဝမြင်နိုင်စွမ်းရှိသောရန်သူသည်သတိပြုပါ။
 သိုလှောင်မှုတွင် သော့မပါလျှင်ပင်၊ လမ်းညွှန်စုစုပေါင်းအရေအတွက်နှင့် တစ်ခုစီတွင် ဖိုင်မည်မျှရှိသည်ကို မြင်နိုင်သေးသည်။
 ကြိုးပမ်းမှုအချို့၊ အချို့သော သို့မဟုတ် အလုံးစုံသော လမ်းကြောင်း၏ အထက်အောက်ဖွဲ့စည်းပုံကို ရှာဖွေပါ။
 *မှတ်ချက်- ပိုမိုကောင်းမွန်သော လုံခြုံရေးအတွက် အတော်လေး ပြားချပ်သော ဖွဲ့စည်းပုံကို အသုံးပြုပါ။*
 သင်၏ ကုဒ်ဝှက်ခြင်းကို ၎င်းတို့မှ မသိပါက လမ်းညွှန်/ဖိုင်များ၏ အမည်များကို ရန်သူက သိမည်မဟုတ်ပါ။
 သော့ သို့မဟုတ် အခြားနည်းဖြင့် ကုဒ်ဝှက်ခြင်းကို အောင်မြင်စွာ crack လုပ်ထားသည်။ အလောင်းအစားအားလုံး ပိတ်သွားပါပြီ။

 ### စွမ်းဆောင်ရည်နှင့် သိမ်းဆည်းခြင်း။
 ကုဒ်ဝှက်ထားသော သိုလှောင်မှုတွင် လုပ်ဆောင်မှုများ နှေးကွေးနိုင်ပါသည်။ ထပ်ခါထပ်ခါ စာရင်းများနှင့် ဖယ်ရှားမှုများသည် အလွန်နှေးကွေးနိုင်ပါသည်။
 redis မှတစ်ဆင့် ကက်ရှ်လုပ်ခြင်းသည် များစွာအထောက်အကူဖြစ်စေသော်လည်း ရေးသည် သို့မဟုတ် ဖယ်ရှားသည့်အခါတွင် ကက်ရှ်သည် လွင့်စင်သွားကြောင်း သတိပြုပါ။

 ## သော့လှည့်ခြင်း။
 သင့်သော့အသစ်ဖြင့် mobiletto တစ်ခုကို ဖန်တီးပါ၊ ထို့နောက် ဒေတာဟောင်းကို ၎င်းထဲသို့ ပြန်ပြောင်းပါ။

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ဒရိုက်ဘာ အင်တာဖေ့စ်
 ဒရိုက်ဘာသည် ဤလက်မှတ်ဖြင့် 'storageClient' လုပ်ဆောင်ချက်ကို ထုတ်ပေးသည့် JS ဖိုင်တိုင်းဖြစ်သည်-

    function storageClient (key, secret, opts)

 * `key` : စာကြောင်းတစ်ကြောင်း၊ သင်၏ API သော့ ( `local` အတွက်၊ ၎င်းသည် အခြေခံလမ်းညွှန်ဖြစ်သည်)
 * `secret` - စာကြောင်းတစ်ကြောင်း၊ သင်၏ API လျှို့ဝှက်ချက် ( `local` အတွက် ချန်လှပ်ထားနိုင်သည်)
 * `opts` : အရာဝတ္ထုတစ်ခု၊ ဂုဏ်သတ္တိများသည် တစ်ဦးလျှင် ဒရိုက်ဗာဖြစ်သည်-
 * `local` အတွက်၊ `fileMode` နှင့် `dirMode` ဂုဏ်သတ္တိများသည် ဖိုင်များနှင့် လမ်းညွှန်အသစ်များ ဖန်တီးပုံကို ဆုံးဖြတ်သည်
 * `s3` အတွက် `bucket` ပိုင်ဆိုင်မှု လိုအပ်သည်။ ရွေးချယ်နိုင်သော ဂုဏ်သတ္တိများမှာ-
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient function မှ ပြန်လာသော အရာဝတ္ထုသည် ဤလုပ်ဆောင်ချက်များကို သတ်မှတ်ရပါမည်-

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

 ## သစ်ခုတ်ခြင်း။
 Mobiletto သည် [winston](https://www.npmjs.com/package/winston) မှတ်တမ်းစာကြည့်တိုက်ကို အသုံးပြုသည်။

 မှတ်တမ်းများတွင် **ရှိလိမ့်မည်** သည် ဖိုင်လမ်းကြောင်းများနှင့် အမှားမက်ဆေ့ချ်များ ပါဝင်သော်လည်း **ဘယ်သောအခါမှ** သော့များ၊ လျှို့ဝှက်ချက်များ ပါဝင်မည်မဟုတ်ပါ။
 သို့မဟုတ် အခြားချိတ်ဆက်မှုဖွဲ့စည်းပုံအချက်အလက်။

 ### မှတ်တမ်းအဆင့်
 တစ်ခုအသုံးပြု၍ မှတ်တမ်းအဆင့်ကို သတ်မှတ်ရန် `MOBILETTO_LOG_LEVEL` ပတ်ဝန်းကျင် ကိန်းရှင်ကို အသုံးပြုပါ။
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) တွင် သတ်မှတ်ထားသော `npm` အဆင့်များ

 မူရင်းအဆင့်မှာ `error` ဖြစ်သည်။ `silly` အရှိဆုံးအဆင့်မှာ လောလောဆယ် mobiletto ဖြစ်သော်လည်း၊
 `debug` အောက်ရှိ အဆင့်များတွင် မှတ်တမ်းမတင်ပါ။

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### မှတ်တမ်းဖိုင်
 ပုံမှန်အားဖြင့်၊ logger သည် console သို့ စာရေးသည်။ ဖိုင်တစ်ခုသို့ မှတ်တမ်းများပေးပို့ရန်၊ `MOBILETTO_LOG_FILE` ကို သတ်မှတ်ပါ။
 ပတ်ဝန်းကျင် ပြောင်းလဲမှု။ ဖိုင်တစ်ခုသို့ လော့ဂ်အင်လုပ်သောအခါ၊ မှတ်တမ်းများကို ကွန်ဆိုးလ်သို့ ရေးမှတ်တော့မည်မဟုတ်ပါ။

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 စာရင်းသွင်းခြင်းကို ပိတ်ရန်-

    MOBILETTO_LOG_FILE=/dev/null

</pre>
