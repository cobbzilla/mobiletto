موبایلټو
 =========

 Mobiletto د جاواسکریپټ ذخیره کولو خلاصون پرت دی، د اختیاري شفاف پیرودونکي اړخ کوډ کولو سره.

 # منځپانګې
 * [ولې موبايلټو؟](#ولې-Mobiletto؟)
 * [چټک پیل](#چټک پیل)
 * [Mobiletto CLI](#mobiletto-cli)
 * [سرچینه](#سرچینه)
 * [نصب](# نصب)
 * [ملاتړ او تمویل](#ملاتړ او تمویل)
 * [اساسي استعمال](#اساسي استعمال)
 * [میټاډاټا](# میټاډاټا)
 * [د وارداتو بدیل سټایل]
 * [کیشینګ](#کیشینګ)
 * [عکس کول](#عکس کول)
 * [شفاف کوډ کول](# شفاف کوډ کول)
 * [کیلي گردش](#کیلي گردش)
 * [د ډرایور انٹرفیس](#ډرایور-انټرفیس)
 * [ننوتل](#ننوتل)

 # دا په بله ژبه ولولئ
 دا README.md سند د [hokeylization](https://github.com/cobbzilla/hokeylization) له لارې ژباړل شوی دی
 **[هره ژبه چې د ګوګل ژباړې لخوا ملاتړ کیږي](https://cloud.google.com/translate/docs/languages)!**

 زه ډاډه یم چې دا بشپړ نه دی، مګر زه هیله لرم چې دا د هیڅ شی څخه غوره نه وي!

 [🇸🇦 عربي](../ar/README.md)
 [🇧🇩 بنگالي](../bn/README.md)
 [🇩🇪 الماني](../de/README.md)
 [🇺🇸 انګلیسي](../en/README.md)
 [🇪🇸 هسپانوي](../es/README.md)
 [🇫🇷 فرانسوي](../fr/README.md)
 [🇹🇩 هوسا](../ha/README.md)
 [🇮🇳 هندي](../hi/README.md)
 [🇮🇩 اندونیزیا](../id/README.md)
 [🇮🇹 ایټالوی](../it/README.md)
 [🇯🇵 جاپاني](../ja/README.md)
 [🇰🇷 کوریا](../ko/README.md)
 [🇮🇳 مارانتي](../mr/README.md)
 [🇵🇱 پولنډ](../pl/README.md)
 [🇧🇷 پرتګالي](../pt/README.md)
 [🇷🇺 روسي](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترکي](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ويتنامي](../vi/README.md)
 [🇨🇳 چینایي](../zh/README.md)


 **[📚 ... ټولې ژبې ...](../README.md)**
 -----

 ### ایا د README د دې ژباړې سره کومه ستونزه شتون لري؟
 د اصلي [README] دا ځانګړې ژباړه (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 کیدای شي نیمګړتیا وي -- *اصلاحات ډیر ښه راغلاست دي!* مهرباني وکړئ [په GitHub کې د پلولو غوښتنه](https://github.com/cobbzilla/mobiletto/pulls) واستوئ
 یا که تاسو په دې کولو کې آرام نه یاست، [یوه مسله پرانیزئ](https://github.com/cobbzilla/mobiletto/issues)

 کله چې تاسو د ژباړې په اړه د GitHub نوې مسله رامینځته کړئ ، مهرباني وکړئ دا وکړئ:
 * د پاڼې URL شامل کړئ (کاپي/پیسټ د براوزر ادرس بار څخه)
 * دقیق متن شامل کړئ چې غلط دی (کاپي / د براوزر څخه پیسټ)
 * مهرباني وکړئ تشریح کړئ چې څه غلط دي -- آیا ژباړه غلطه ده؟ ایا فارمینګ په یو ډول مات شوی؟
 * په مهربانۍ سره د غوره ژباړې وړاندیز وړاندې کړئ، یا دا چې متن باید په سمه توګه فارمیټ شي
 * **مننه!**

 ## ولې موبايلټو؟

 ### الوداع د پلورونکي تالاشۍ!
 د بادل ذخیره کولو مختلف چمتو کونکي غیر مطابقت لرونکي APIs لري. حتی هغه څوک چې د "S3 مطابقت" لپاره هڅه کوي
 غیر متمرکز چلند لري.

 کله چې تاسو د خپل اپلیکیشن لپاره یو ځانګړی ذخیره پلورونکی غوره کړئ، که تاسو مستقیم د دوی API ته کوډ کړئ، ستاسو ایپ
 اوس په دې خدمت پورې اړه لري. لکه څنګه چې وخت تیریږي او کوډ راټولیږي، د پلورونکو بدلول کیږي
 په زیاتیدونکي توګه د نه منلو وړ. د پلورونکي لاک ان ساتیرۍ نړۍ ته ښه راغلاست!

 Mobiletto د دې ستونزې د حل لپاره ډیزاین شوی و. د موبایلټټو API ته د خپل اپلیکیشن کوډ کولو سره، تاسو کولی شئ په اسانۍ سره
 د ذخیره کولو چمتو کونکي بدل کړئ او پوه شئ چې ستاسو د اپلیکیشن ذخیره کولو پرت به ورته چلند وکړي.

 ### پراخه ازموینه
 ټول چلوونکي د هر موټر چلوونکي لپاره د 60+ ازموینو سره د ورته چلند لپاره ازمول شوي.
 موږ ټول موټر چلوونکي د هر ترکیب سره معاینه کوو:
 * کوډ کول: دواړه فعال او غیر فعال شوي
 * د ریډیس کیچ: دواړه فعال او غیر فعال شوي

 دا طریقه موږ ته د زړه سکون راکوي چې موبایلټو به ورته چلند وکړي پرته لدې چې تاسو کوم ډرایور کاروئ،
 او پرته له دې چې تاسو کیشینګ او/یا کوډ کول فعال کړئ.

 ### د موټر چلوونکي ملاتړ
 د ګرځنده ذخیره کولو اوسني چلوونکي:
 * `s3` : امازون S3
 * `b2` : Backblaze B2
 * `local` سیمه ایز': محلي فایل سیسټم

 * د نورو بادل ذخیره کولو چمتو کونکو ملاتړ لپاره مرستې خورا ښه راغلاست دي!*

 ## mobiletto-cli
 Mobiletto د نورو جاواسکریپټ کوډ لخوا د کتابتون په توګه کارول کیږي.

 په کمانډ لاین کې د موبایلټو سره کار کولو لپاره، [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) وکاروئ

 ## سرچینه
 * [موبایلټو په GitHub کې](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## ملاتړ او تمویل
 زه هڅه کوم چې د مسلکي خلاصې سرچینې سافټویر جوړونکی شم. زه په کې کار کوم
 د ډیرو کلونو لپاره د سافټویر صنعت، ما بریالي شرکتونه پیل کړل او عامه شرکتونو ته یې وپلورل.
 په دې وروستیو کې ما خپله دنده له لاسه ورکړه، او زه واقعیا کوم بل کار نه لرم

 نو زه به د ګټور سافټویر لیکلو هڅه وکړم او وګورم چې ایا دا کار کوي

 که تاسو د دې سافټویر کارولو څخه خوند واخلئ، زه به حتی د دې لپاره ډیره مننه وکړم
 تر ټولو کوچنی [د پیټریون له لارې میاشتنۍ مرسته](https://www.patreon.com/cobbzilla)

 *مننه!*

 ## لګول
 د `npm` یا `yarn` په کارولو سره نصب کړئ. تاسو شاید د `lite` نسخه غواړئ چې ټول پکې شامل نه وي
 ژباړل شوي README فایلونه:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 که تاسو واقعیا په هره ژبه کې د README فایلونه غواړئ، بشپړ نسخه نصب کړئ:

    npm install mobiletto
    yarn add mobiletto

 ## چټک پیل
 د mobiletto `s3` ډرایور کارولو لنډ مثال.

 دا کوډ به ورته چلیږي که چیرې ډرایور `b2` یا `local` وي.

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

 -----
 ## اساسی کارول
 یو ډیر پراخه بیلګه، د وړاندیز شوي ډیری ځانګړتیاوې ښیې:

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

 ## میټاډاټا
 د `metadata` کمانډ د یو واحد فایل سیسټم ننوتلو په اړه میټاډاټا بیرته راګرځوي.
 په ورته ډول، د 'لیست' کمانډ څخه د بیرته ستنیدو ارزښت د `list` څیزونو لړۍ ده.

 د میټاډاټا څیز داسې ښکاري:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 د `type` ملکیت کېدای شي `file` , `dir` , `link` ، یا `special` .

 د ډرایور ډول پورې اړه لري، د `list` کمانډ ممکن ټولې ساحې بیرته نه راولي. د `name` او `type` ملکیتونه
 باید تل حاضر وي. وروسته `metadata` کمانډ به ټول موجود ملکیتونه بیرته راولي.

 ## د وارداتو بدیل سټایل
 په بشپړ ډول پوښل شوي ماډل وارد کړئ او د `connect` فعالیت وکاروئ:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## کیچ کول
 <a href="https://redis.io">Mobiletto</a> د ریډیس کیچ سره غوره کار کوي.

 موبایلټو به هڅه وکړي چې په 127.0.0.1: 6379 کې د ریډیس مثال سره وصل شي

 تاسو کولی شئ له دې څخه یو یې وګرځوئ:
 * د `MOBILETTO_REDIS_HOST` var تنظیم کړئ ، د ځایی هوسټ پرځای ګرځنده دلته وصل کړئ
 * د `MOBILETTO_REDIS_PORT` var تنظیم کړئ، دا بندر به وکارول شي

 Mobiletto به خپل ټول ریډیس کیلي د مخکینۍ `_mobiletto__` سره ذخیره کړي. تاسو کولی شئ دا بدل کړئ
 د `MOBILETTO_REDIS_PREFIX` var په ترتیبولو سره.

 تاسو کولی شئ د هر پیوستون کیشینګ د `opts.redisConfig` څیز سره تنظیم کړئ:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### د ریډیس کیشینګ نه غواړئ؟
 د غیر فعالولو لپاره: ستاسو په `opts.redisConfig` اعتراض کې `enabled: false` تېر کړئ کله چې تاسو خپله اړیکه جوړه کړئ.

 لکه څنګه چې لاندې بحث شوی، د کیشینګ غیر فعال کول به په فعالیت باندې ناوړه اغیزه ولري او ډیرې غوښتنې رامنځته کړي
 د ذخیره کولو لپاره چې تاسو واقعیا ورته اړتیا لرئ.

 ### د کیچ کولو لارښود
 **کوډ شوی ذخیره**: د کوډ شوي ذخیره لوستل / لیکل یوازې د نورمال څخه یو څه ورو دي،
 مګر د لارښودونو شاوخوا ګرځیدل (کوم چې ځینې شیان ترسره کوي) خورا ګران دي. د ریډیس کیچ کارول
 تاسو ته به د پام وړ فعالیت وده درکړي.

 ډیفالټ کیچ خوندي دی ، مګر ښه فعالیت نه کوي که تاسو د لیکلو / لرې کولو ډیری عملیات ولرئ.
 د لیکلو یا لرې کولو هر ډول عملیات ټوله زیرمه باطلوي، ډاډ ترلاسه کوي چې راتلونکی لوستل به وګوري
 وروستي بدلونونه.

 ### د CLI وسیلې
 که تاسو د CLI وسیله کاروئ لکه [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)،
 تاسو به خامخا غواړئ د ریډیس کیچ فعاله کړئ ، ځکه چې دا د `mo` کمانډ غوښتنې ته دوام ورکوي.

 ## عکس اخیستل

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 د `mirror` کمانډ د ټولو فایلونو یو ځل کاپي له یو موبایل څخه بل ته ترسره کوي.
 دا د وخت په تیریدو سره د عکس ساتلو لپاره هیڅ پروسه نه پرمخ وړي. بیا د `mirror` کمانډ چل کړئ
 هر ورک شوي فایلونه همغږي کول.

 د `mirror` څخه د بیرته ستنیدو ارزښت یو ساده څیز دی چې شمیرونکي لري چې څومره فایلونه په بریالیتوب سره وو
 منعکس شوي او څومره فایلونه غلطۍ لري:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 خبرداری: د لوی ډیټا سیټونو عکس کول خورا وخت مصرف او د بینډ ویت متمرکز کیدی شي

 د `mirror` کال سیمانټیک سره دا ځینې وختونه مغشوش کیږي چې پوه شي چې څوک دی
 لوستونکی او لیکوال څوک دی. دا د دندې بیان په څیر تصور کړئ: "کیڼ لاس ګرځنده"
 هغه شی دی چې ګمارل شوی دی (د عکس لیکل شوی ډاټا)، او د "ښي لاس موبایلټو" (د
 د `mirror` میتود ته دلیل) هغه ارزښت دی چې ټاکل شوی (عکس شوي ډاټا لوستل کیږي).

 ## شفاف کوډ کول
 د روڼ پیرودونکي اړخ کوډ کول فعال کړئ:

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

 ‍‍‍څه خبرې دي؟ یو جلا "ډارکټري ننوتل" (ډیرینټ) ډایرکټر (کوډ شوی) تعقیبوي چې کوم فایلونه پدې کې دي
 ډایرکټر (aka dirent Directory).
 * د `list` کوي؛ بیا د هرې فایل لپاره میټاډاټا بیرته راګرځي
 * `list` ډیر غیر موثر دي ، په ځانګړي توګه د ډیری فایلونو سره لارښودونو لپاره
 * د لیکلو کمانډ د هر مور او پلار په `write` ډایرکټر کې مستقیم فایلونه لیکي ، په تکراري ډول؛ بیا فایل لیکي
 * `write` کمانډونه به د O(N) لیکنې ولري، د N = ژورتیا سره د لارښود په درجه بندي کې
 * د `remove` لیرې کولو' کمانډ اړونده ډیرینټ فایل لرې کوي، او د هغې مور او پلار که خالي وي، په تکراري توګه؛ بیا فایل لرې کوي
 * غیر `remove` کمانډونه به د O(N) لوستل او په احتمالي توګه ډیری حذفونه رامینځته کړي ، د N = ژورتیا سره د لارښود په درجه بندۍ کې
 * په لوی او ژور فایل سیسټمونو کې `remove` ګران کیدی شي

 په یاد ولرئ چې حتی د پیرودونکي اړخ کوډ کول فعال شوي، یو مخالف ستاسو د کوډ شوي سرور اړخ ته د بشپړ لید سره
 ذخیره ، حتی د کیلي پرته ، لاهم کولی شي د لارښودونو ټولټال شمیره وګوري او په هر یو کې څومره فایلونه دي ، او سره
 ځینې هڅې، د ډایرکټر درجه بندي ځینې یا ټول ټول جوړښت کشف کړئ.
 *یادونه: د ښه امنیت لپاره نسبتا فلیټ جوړښت وکاروئ.*
 مخالف به د لارښودونو / فایلونو نومونه نه پیژني مګر دا چې دوی ستاسو کوډ کول هم نه پوهیږي
 کیلي یا بل ډول یې په بریالیتوب سره کوډ کړی و. بیا ټول شرطونه بند دي!

 ### فعالیت او کیچ کول
 په کوډ شوي ذخیره کې عملیات سست کیدی شي. تکراري لیست کول او لرې کول خورا ورو کیدی شي.
 د ریډیس له لارې کیچ کول خورا ډیره مرسته کوي، مګر په یاد ولرئ چې کیچ په هر لیکلو یا لیرې کولو کې فلش کیږي.

 ## کلیدي گردش
 د خپل نوي کیلي سره موبیلټو جوړ کړئ، بیا زاړه معلومات په هغې کې منعکس کړئ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## د ډرایور انٹرفیس
 ډرایور د JS فایل دی چې د دې لاسلیک سره د 'storageClient' فعالیت صادروي:

    function storageClient (key, secret, opts)

 * `key` : یو تار، ستاسو د API کیلي (د `local` ډرایور لپاره دا د اساس لارښود دی)
 * `secret` : یو تار، ستاسو د API راز (د `local` ډرایور لپاره پریښودل کیدی شي)
 * `opts` : یو څیز، ملکیتونه د هر چلوونکي دي:
 * د `local` لپاره، `fileMode` او `dirMode` ملکیتونه مشخص کوي چې څنګه نوي رامینځته شوي فایلونه او لارښودونه رامینځته کیږي
 * د `s3` لپاره، د `bucket` ملکیت ته اړتیا ده. اختیاري ملکیتونه دي:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 هغه څیز چې د ذخیره کولو کلینټ فنکشن بیرته راګرځي باید دا افعال تعریف کړي:

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

 ## ننوتل
 Mobiletto د [winston](https://www.npmjs.com/package/winston) د ننوتلو کتابتون کاروي.

 لاګ ** به د فایل لارې او د خطا پیغامونه ولري، مګر ** هیڅکله به ** کیلي، رازونه،
 یا کوم بل ارتباطي ترتیب معلومات.

 ### د ننوتلو کچه
 د `MOBILETTO_LOG_LEVEL` د چاپیریال متغیر څخه د لاګ کچه تنظیم کولو لپاره وکاروئ، د یو په کارولو سره
 د `npm` کچه په [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) کې تعریف شوي

 ډیفالټ کچه `error` ده. تر ټولو لفظي کچه `silly` ، که څه هم اوس مهال ګرځنده
 د `debug` لاندې سطحو ته نه ننوځي

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### دوتنې ننوتل
 په ډیفالټ ډول، لوګر کنسول ته لیکي. فایل ته د لاګونو لیږلو لپاره، `MOBILETTO_LOG_FILE`
 د چاپیریال متغیر. کله چې فایل ته ننوتل ، نو لاګونه به نور کنسول ته نه لیکل کیږي.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 د ننوتلو بندولو لپاره:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
