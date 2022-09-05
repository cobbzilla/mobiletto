موبائيلٽو
 ========

 Mobiletto هڪ جاوا اسڪرپٽ اسٽوريج خلاصي پرت آهي، اختياري شفاف ڪلائنٽ-سائيڊ انڪرپشن سان.

 # مواد
 * [Why Mobiletto؟](#Why-Mobiletto؟)
 * [جلدي شروعات](# جلدي شروع)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ذريعو](#ذريعو)
 * [تنصيب](# تنصيب)
 * [مدد ۽ فنڊنگ](#سپورٽ ۽ فنڊنگ)
 * [بنيادي استعمال](#بنيادي استعمال)
 * [Metadata](#Metadata)
 * [متبادل درآمد وارو انداز](#متبادل-درآمد انداز)
 * [ڪيشنگ](#ڪيشنگ)
 * [عڪس ڪرڻ](#عڪس ڏيڻ)
 * [شفاف انڪرپشن](# شفاف-انڪريپشن)
 * [ڪي گھمڻ](# ڪيئي گھمڻ)
 * [ڊرائيور انٽرفيس](#ڊرائيور-انٽرفيس)
 * [لاگنگ](#لاگنگ)

 # ھي پڙھو ٻي ٻولي ۾
 هي README.md دستاويز ترجمو ڪيو ويو آهي، ذريعي [hokeylization](https://github.com/cobbzilla/hokeylization)، ۾
 **[گوگل ترجمي جي مدد سان هر ٻولي](https://cloud.google.com/translate/docs/languages)!**

 مون کي پڪ آهي ته اهو مڪمل ناهي، پر مون کي اميد آهي ته اهو ڪجهه به نه کان بهتر آهي!

 [🇸🇦 عربي](../ar/README.md)
 [🇧🇩 بنگالي](../bn/README.md)
 [🇩🇪 جرمن](../de/README.md)
 [🇺🇸 انگريزي](../en/README.md)
 [🇪🇸 اسپينش](../es/README.md)
 [🇫🇷 فرانسيسي](../fr/README.md)
 [🇹🇩 هائوسا](../ha/README.md)
 [🇮🇳 هندي](../hi/README.md)
 [🇮🇩 انڊونيشيا](../id/README.md)
 [🇮🇹 اطالوي](../it/README.md)
 [🇯🇵 جاپاني](../ja/README.md)
 [🇰🇷 ڪورين](../ko/README.md)
 [🇮🇳 مارانٿي](../mr/README.md)
 [🇵🇱 پولش](../pl/README.md)
 [🇧🇷 پرتگالي](../pt/README.md)
 [🇷🇺 روسي](../ru/README.md)
 [🇰🇪 سواهلي](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترڪي](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ويٽنامي](../vi/README.md)
 [🇨🇳 چيني](../zh/README.md)


 **[📚 ... سڀ ٻوليون ...](../README.md)**
 ----

 ### ڇا README جي ھن ترجمي ۾ ڪو مسئلو آھي؟
 هي خاص ترجمو اصل جو [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 غلطي ٿي سگھي ٿي -- *اصلاح تمام ڀليڪار آھي!* مھرباني ڪري موڪليو [pull request on GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 يا جيڪڏهن توهان اهو ڪرڻ ۾ آرام نه آهيو، [هڪ مسئلو کوليو](https://github.com/cobbzilla/mobiletto/issues)

 جڏهن توهان ترجمي بابت هڪ نئون GitHub مسئلو ٺاهيو، مهرباني ڪري ڪريو:
 * صفحي جو URL شامل ڪريو (براؤزر ايڊريس بار مان ڪاپي/پيسٽ ڪريو)
 * صحيح متن شامل ڪريو جيڪو غلط آهي (براؤزر مان ڪاپي / پيسٽ ڪريو)
 * مهرباني ڪري وضاحت ڪريو ڇا غلط آهي - ڇا ترجمو غلط آهي؟ ڇا فارميٽنگ ڪنهن طرح ڀڄي وئي آهي؟
 * مھرباني ڪري بھتر ترجمي جي تجويز پيش ڪريو، يا متن کي ڪيئن صحيح شڪل ۾ ھجڻ گھرجي
 * **توهان جي مهرباني!**

 ## ڇو موبائيلٽو؟

 ### الوداع وينڊر لاڪ-ان!
 مختلف ڪلائوڊ اسٽوريج فراهم ڪندڙن وٽ غير مطابقت رکندڙ APIs آهن. جيتوڻيڪ اهي جيڪي "S3 مطابقت" لاء ڪوشش ڪندا آهن
 idiosyncratic رويي آهي.

 جڏهن توهان پنهنجي ايپ لاءِ هڪ خاص اسٽوريج وينڊر چونڊيو ٿا، جيڪڏهن توهان سڌو سنئون انهن جي API ڏانهن ڪوڊ ڪريو ٿا، توهان جي ايپ
 هاڻي ان خدمت تي منحصر آهي. جيئن وقت گذري ٿو ۽ ڪوڊ گڏ ڪري ٿو، وينڊرز تبديل ٿي ويندا آهن
 وڌندڙ ناقابل برداشت. وينڊر لاڪ ان جي مزيدار دنيا ۾ ڀليڪار!

 Mobiletto هن مسئلي کي حل ڪرڻ لاء ٺهيل هو. موبائيلٽو جي API ۾ توهان جي ايپ کي ڪوڊ ڪندي، توهان آساني سان ڪري سگهو ٿا
 تبديل ڪريو اسٽوريج فراهم ڪندڙ ۽ ڄاڻو ته توهان جي ايپ جي اسٽوريج پرت هڪجهڙائي ڪندي.

 ### وسيع جاچ
 هر ڊرائيور لاءِ 60+ ٽيسٽن سان سڀني ڊرائيورن کي هڪجهڙي رويي لاءِ آزمايو ويو آهي.
 اسان سڀني ڊرائيورن جي هر ميلاپ سان جانچ ڪريون ٿا:
 * انڪوشن: ٻئي فعال ۽ غير فعال
 * ريڊس ڪيش: ٻئي فعال ۽ معذور

 اهو طريقو اسان کي ذهن ۾ اطمينان ڏئي ٿو ته موبائيلٽو ساڳيو ئي ورتاءُ ڪندو بغير ڪنهن ڊرائيور جي توهان استعمال ڪيو،
 ۽ قطع نظر ته توهان ڪيشنگ ۽/يا انڪرپشن کي فعال ڪيو ٿا.

 ### ڊرائيور سپورٽ
 موجوده Mobiletto اسٽوريج ڊرائيور:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : مقامي فائيل سسٽم

 *وڌيڪ ڪلائوڊ اسٽوريج فراهم ڪندڙن جي مدد لاءِ تعاون تمام ڀليڪار آهي!*

 ## mobiletto-cli
 Mobiletto جو مقصد ٻين JavaScript ڪوڊ ذريعي لائبريري طور استعمال ڪيو ويندو.

 ڪمانڊ لائن تي mobiletto سان ڪم ڪرڻ لاءِ، استعمال ڪريو [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## ذريعو
 * [موبائلٽو گيٽ هب تي](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## سپورٽ ۽ فنڊنگ
 مان هڪ پروفيشنل اوپن سورس سافٽ ويئر ڊولپر ٿيڻ جي ڪوشش ڪري رهيو آهيان. ۾ ڪم ڪري چڪو آهيان
 سافٽ ويئر انڊسٽري ڪيترن ئي سالن تائين، مون ڪامياب ڪمپنيون شروع ڪيون آهن ۽ انهن کي عوامي ڪمپنين کي وڪرو ڪيو آهي.
 تازو مون پنهنجي نوڪري وڃائي ڇڏيو، ۽ مون وٽ حقيقت ۾ ڪو ٻيو ڪم نه آهي

 تنهن ڪري مان ڪوشش ڪرڻ وارو آهيان مددگار سافٽ ويئر لکڻ ۽ ڏسو ته اهو ڪم ڪري ٿو

 جيڪڏهن توهان هن سافٽ ويئر کي استعمال ڪندي لطف اندوز ڪيو، مان توهان جي لاء تمام شڪرگذار ٿيندس
 سڀ کان ننڍو [ماهوار حصو Patreon ذريعي](https://www.patreon.com/cobbzilla)

 *توهان جي مهرباني!*

 ## تنصيب
 انسٽال ڪريو `npm` يا `yarn` استعمال ڪندي. توھان شايد توھان چاھيو ٿا `lite` ورزن جنهن ۾ سڀ شامل نه آھن
 ترجمو ٿيل README فائلون:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 جيڪڏهن توهان واقعي چاهيو ٿا README فائلون هر ٻولي ۾، انسٽال ڪريو مڪمل ورزن:

    npm install mobiletto
    yarn add mobiletto

 ## جلدي شروع
 موبائيلٽو `s3` ڊرائيور استعمال ڪندي هڪ مختصر مثال.

 اهو ڪوڊ ساڳيو هلندو جيڪڏهن ڊرائيور `b2` يا `local` .

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
 ## بنيادي استعمال
 ھڪڙو وڌيڪ وسيع مثال، پيش ڪيل سڀ کان وڌيڪ خاصيتون ڏيکاريندي:

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

 ## ميٽا ڊيٽا
 `metadata` حڪم هڪ واحد فائل سسٽم داخل ٿيڻ بابت ميٽا ڊيٽا واپس ڪري ٿو.
 ساڳئي طرح، `list` حڪم مان واپسي جي قيمت ميٽاداٽ شين جي هڪ صف آهي.

 هڪ ميٽاداٽ اعتراض هن طرح نظر اچي ٿو:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ملڪيت ٿي سگھي ٿي `file` , `dir` , `link` , or `special` .

 ڊرائيور جي قسم تي مدار رکندي، هڪ `list` حڪم سڀني شعبن کي واپس نه ڏئي سگھي. `name` ۽ `type` جا خاصيتون
 هميشه موجود هجڻ گهرجي. هڪ بعد ۾ `metadata` حڪم سڀني موجود ملڪيت واپس ڪندو.

 ## متبادل درآمد وارو انداز
 مڪمل طور تي اسڪوپ ٿيل ماڊل درآمد ڪريو ۽ `connect` فنڪشن استعمال ڪريو:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ڪيشنگ
 Mobiletto هڪ <a href="https://redis.io">redis</a> ڪيش سان بهترين ڪم ڪري ٿو.

 Mobiletto 127.0.0.1:6379 تي ريڊيس مثال سان ڳنڍڻ جي ڪوشش ڪندو

 توھان انھن مان ڪنھن ھڪڙي کي ختم ڪري سگھو ٿا:
 * سيٽ ڪريو `MOBILETTO_REDIS_HOST` var، mobiletto هتي ڳنڍڻ بدران لوڪل هوسٽ
 * سيٽ ڪريو `MOBILETTO_REDIS_PORT` var، هي پورٽ استعمال ڪيو ويندو

 Mobiletto ان جي سڀني redis ڪنجين کي `_mobiletto__` سان گڏ ڪندو. توھان ھن کي تبديل ڪري سگھو ٿا
 ترتيب ڏيڻ سان `MOBILETTO_REDIS_PREFIX` var.

 توھان پڻ سيٽ ڪري سگھو ٿا في ڪنيڪشن ڪيشنگ سان `opts.redisConfig` اعتراض:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis caching نٿا چاهيون؟
 غير فعال ڪرڻ لاءِ: پاس ڪريو `enabled: false` توهان جي `opts.redisConfig` اعتراض ۾ جڏهن توهان پنهنجو ڪنيڪشن قائم ڪيو.

 جيئن هيٺ بحث ڪيو ويو، ڪيشنگ کي غير فعال ڪرڻ سان ڪارڪردگي تي خراب اثر پوندو ۽ وڌيڪ درخواستون ٿينديون
 اسٽوريج لاء جيڪو توهان کي واقعي جي ضرورت آهي.

 ### ڪيشنگ ھدايت
 **انڪريپٽ ٿيل اسٽوريج**: انڪريپٽ ٿيل اسٽوريج پڙهڻ/لکڻ عام کان ٿورو سست آهي،
 پر ڊائريڪٽرن جي چوڌاري نيويگيٽ ڪرڻ (جيڪي ڪجھ شيون ڪن ٿيون) ڪافي قيمتي آهي. redis cache استعمال ڪندي
 توهان کي هڪ اهم ڪارڪردگي واڌارو ڏيندو.

 ڊفالٽ ڪيش محفوظ آهي، پر اهو سٺو ڪم نٿو ڪري جيڪڏهن توهان وٽ تمام گهڻو لکڻ/هٽائي آپريشن آهي.
 ڪو به لکڻ يا ختم ڪرڻ وارو عمل سڄي ڪيش کي باطل ڪري ٿو، انهي کي يقيني بڻائي ته ايندڙ پڙهڻ وارا ڏسندا
 تازيون تبديليون.

 ### CLI اوزار
 جيڪڏهن توهان CLI اوزار استعمال ڪري رهيا آهيو جهڙوڪ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)،
 توھان ضرور چاھيو ٿا redis cache فعال، جيئن اھو `mo` ڪمانڊ جي دعوتن ۾ رھي.

 ## آئينو

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` حڪم سڀني فائلن جي ھڪڙي وقت واري ڪاپي کي ھڪڙي موبائيل کان ٻئي ڏانھن انجام ڏئي ٿو.
 اهو وقت تي آئيني کي برقرار رکڻ لاء ڪو به عمل نه هلندو آهي. `mirror` حڪم ٻيهر هلايو
 ڪنهن به غائب فائلن کي هم وقت سازي ڪرڻ لاء.

 واپسي جي قيمت `mirror` مان هڪ سادي شئي آهي ڳڻپيندڙن سان گڏ ڪيتريون فائلون ڪاميابي سان
 mirrored ۽ ڪيتريون فائلون غلطيون هيون:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 خبردار: وڏي ڊيٽا سيٽن کي آئيني ڏيڻ تمام گهڻو وقت ساز ۽ بينڊوڊٿ-گھڻي ٿي سگھي ٿو

 `mirror` ڪال سيمينٽڪس سان ڪڏهن ڪڏهن اهو سمجهڻ ۾ مونجهارو ٿي سگهي ٿو ته ڪير آهي
 پڙهندڙ ۽ ليکڪ ڪير آهي. تصور ڪريو ان کي تفويض واري بيان وانگر: "کاٻي هٿ جو موبائيلٽو"
 اها شيءِ آهي جيڪا تفويض ڪئي پئي وڃي (عڪس ٿيل ڊيٽا لکيو ويو)، ۽ "ساڄي هٿ موبائيلٽو" (جي
 `mirror` طريقي سان) اهو قدر آهي جيڪو تفويض ڪيو پيو وڃي (عڪس ٿيل ڊيٽا پڙهي ويندي آهي).

 ## شفاف انڪرپشن
 شفاف ڪلائنٽ سائڊ انڪرپشن کي فعال ڪريو:

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

 ڇا ٿي رهيو آهي؟ هڪ الڳ "ڊائريڪٽري داخلا" (ڊائرينٽ) ڊاريڪٽري (انڪرپٽ ٿيل) ٽريڪ ڪري ٿي ته ڪهڙيون فائلون ان ۾ آهن
 ڊاريڪٽري (اڪا ڊارينٽ ڊاريڪٽري).
 * `list` حڪم ڊاريڪٽري داخل ٿيڻ واري فائلن کي پڙهي ٿو، هر رستي جي فهرست کي رد ڪري ٿو. ان کان پوء هر فائل لاء ميٽا ڊيٽا واپس آڻيندو
 * `list` حڪم وڌيڪ غير موثر آهن، خاص طور تي وڏي تعداد ۾ فائلن سان ڊائريڪٽرن لاء
 * `write` حڪم هر والدين جي ڊائرينٽ ڊاريڪٽري ۾ ڊائرينٽ فائلون لکي ٿو، بار بار؛ پوءِ فائل لکندو
 * `write` ڪمانڊ O (N) لکندو، N = ڊاريڪٽري جي درجي ۾ کوٽائي سان.
 * `remove` حڪم سان لاڳاپيل ڊائرينٽ فائل کي هٽائي ٿو، ۽ ان جو والدين جيڪڏهن خالي هجي، بار بار؛ پوء فائل کي هٽائي ٿو
 * غير ٻيهر `remove` O (N) پڙھندا ۽ ممڪن طور تي ڪيترائي حذف ڪندا، N = ڊاريڪٽري جي درجي ۾ کوٽائي سان
 * وڏي ۽ گہرے فائل سسٽم تي `remove` حڪم مهانگو ٿي سگهي ٿو

 نوٽ ڪريو ته ڪلائنٽ-سائڊ انڪرپشن فعال ٿيڻ سان به، هڪ مخالف توهان جي انڪرپٽ ٿيل سرور-سائڊ ۾ مڪمل نمائش سان
 اسٽوريج، چاٻي کان سواء، اڃا تائين ڊائريڪٽرن جو ڪل تعداد ڏسي سگهي ٿو ۽ هر هڪ ۾ ڪيتريون فائلون آهن، ۽ سان
 ڪجھ ڪوشش، ڊاريڪٽري جي درجه بندي جي مجموعي جوڙجڪ مان ڪجھ يا سڀ دريافت ڪريو.
 *نوٽ: بهتر سيڪيورٽي لاءِ نسبتاً فليٽ ڍانچو استعمال ڪريو.*
 مخالف کي ڊائريڪٽرن/فائلن جا نالا معلوم نه هوندا جيستائين اهي توهان جي انڪرپشن کي به نه ڄاڻن
 key يا ٻي صورت ۾ ڪاميابيءَ سان انڪرپشن کي ٽوڙي ڇڏيو هو. پوء سڀ شرط بند آهن!

 ### ڪارڪردگي ۽ ڪيشنگ
 انڪوڊ ٿيل اسٽوريج تي آپريشن سست ٿي سگھي ٿو. ٻيهر ورجائيندڙ لسٽنگ ۽ هٽائڻ تمام سست ٿي سگهن ٿا.
 ريڊس ذريعي ڪيش ڪرڻ تمام گهڻي مدد ڪري ٿي، پر ياد رکو ته ڪيش ڪنهن به لکڻ يا هٽائڻ تي فلش ڪيو ويندو آهي.

 ## اهم گردش
 پنهنجي نئين ڪيئي سان موبائيلٽو ٺاهيو، پوءِ ان ۾ پراڻي ڊيٽا کي آئينو ڪريو:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ڊرائيور انٽرفيس
 ڊرائيور ڪنهن به JS فائل آهي جيڪو برآمد ڪري ٿو 'storageClient' فنڪشن هن دستخط سان:

    function storageClient (key, secret, opts)

 * `key` : هڪ اسٽرنگ، توهان جي API ڪيئي ( `local` ڊرائيور لاءِ هي بنيادي ڊاريڪٽري آهي)
 * `secret` : هڪ اسٽرنگ، توهان جو API راز (خفيه ٿي سگهي ٿو `local` ڊرائيور لاءِ)
 * `opts` : هڪ اعتراض، خاصيتون في ڊرائيور آهن:
 * `local` لاءِ، `fileMode` ۽ `dirMode` جا خاصيتون طئي ڪندا آهن ته ڪيئن نيون ٺاهڻ واريون فائلون ۽ ڊائريڪٽريون ٺاهيون وينديون آهن.
 * `s3` لاءِ، `bucket` ملڪيت گھربل آھي. اختياري خاصيتون آهن:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 اهو اعتراض جيڪو اسٽوريج ڪلائنٽ فنڪشن واپس ڪري ٿو انهن ڪمن کي وضاحت ڪرڻ گهرجي:

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

 ## لاگنگ
 Mobiletto استعمال ڪري ٿو [winston](https://www.npmjs.com/package/winston) لاگنگ لائبريري.

 لاگز ** ھوندا** فائل رستا ۽ غلطي پيغامن تي مشتمل آھن، پر ** ڪڏھن به نه** ڪنجيون، راز،
 يا ڪا ٻي ڪنيڪشن ٺاھڻ جي معلومات.

 ### لاگ سطح
 لاگ ليول سيٽ ڪرڻ لاءِ `MOBILETTO_LOG_LEVEL` ماحوليات جو استعمال ڪريو، ھڪڙو استعمال ڪندي
 ۾ بيان ڪيل `npm` سطحن جو [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 ڊفالٽ سطح `error` آهي. سڀ کان وڌيڪ لفظي سطح آهي `silly` ، جيتوڻيڪ في الحال موبائيلٽو
 `debug` هيٺ ڏنل سطحن تي لاگ ان نٿو ٿئي

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### لاگ فائل
 ڊفالٽ طور، لاگر ڪنسول ڏانهن لکي ٿو. فائل ڏانهن لاگ موڪلڻ لاءِ، سيٽ `MOBILETTO_LOG_FILE`
 ماحولياتي متغير. جڏهن فائل ۾ لاگ ان ٿيندي، لاگ ان کان وڌيڪ ڪنسول ڏانهن نه لکيو ويندو.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 لاگنگ بند ڪرڻ لاءِ:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
