موبائلٹو
 =========

 Mobiletto اختیاری شفاف کلائنٹ سائڈ انکرپشن کے ساتھ ایک JavaScript اسٹوریج تجریدی پرت ہے۔

 # مشمولات
 * [Why Mobiletto؟](#Why-Mobiletto؟)
 * [فوری آغاز](# فوری آغاز)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ماخذ](#ذریعہ)
 * [انسٹالیشن](# انسٹالیشن)
 * [سپورٹ اور فنڈنگ](#سپورٹ اور فنڈنگ)
 * [بنیادی استعمال](#بنیادی استعمال)
 * [میٹا ڈیٹا](#میٹا ڈیٹا)
 * [متبادل درآمدی انداز](#متبادل درآمدی طرز)
 * [کیچنگ](#کیچنگ)
 * [آئینہ](#آئینہ)
 * [شفاف خفیہ کاری](#شفاف-انکرپشن)
 * [کلیدی گردش](#کلید گردش)
 * [ڈرائیور انٹرفیس](#ڈرائیور انٹرفیس)
 * [لاگنگ](#لاگنگ)

 # اسے دوسری زبان میں پڑھیں
 اس README.md دستاویز کا ترجمہ [hokeylization](https://github.com/cobbzilla/hokeylization) کے ذریعے کیا گیا ہے
 **[گوگل ٹرانسلیٹ کے ذریعے تعاون یافتہ ہر زبان](https://cloud.google.com/translate/docs/languages)!**

 مجھے یقین ہے کہ یہ کامل نہیں ہے، لیکن مجھے امید ہے کہ یہ کچھ بھی نہیں سے بہتر ہے!

 [🇸🇦 عربی](../ar/README.md)
 [🇧🇩 بنگالی](../bn/README.md)
 [🇩🇪 جرمن](../de/README.md)
 [🇺🇸 انگریزی](../en/README.md)
 [🇪🇸 ہسپانوی](../es/README.md)
 [🇫🇷 فرانسیسی](../fr/README.md)
 [🇹🇩 ہاؤسا](../ha/README.md)
 [🇮🇳 ہندی](../hi/README.md)
 [🇮🇩 انڈونیشیائی](../id/README.md)
 [🇮🇹 اطالوی](../it/README.md)
 [🇯🇵 جاپانی](../ja/README.md)
 [🇰🇷 کورین](../ko/README.md)
 [🇮🇳 مرانتھی](../mr/README.md)
 [🇵🇱 پولش](../pl/README.md)
 [🇧🇷 پرتگالی](../pt/README.md)
 [🇷🇺 روسی](../ru/README.md)
 [🇰🇪 سواحلی](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترکی](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ویتنامی](../vi/README.md)
 [🇨🇳 چینی](../zh/README.md)


 **[📚 ... تمام زبانیں ...](../README.md)**
 ----

 ### کیا README کے اس ترجمے میں کوئی مسئلہ ہے؟
 اصل کا یہ خاص ترجمہ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 خامی ہو سکتی ہے -- *اصلاحات بہت خوش آئند ہیں!* براہ کرم [GitHub پر پل کی درخواست](https://github.com/cobbzilla/mobiletto/pulls) بھیجیں،
 یا اگر آپ کو ایسا کرنے میں آسانی نہیں ہے تو، [ایک مسئلہ کھولیں](https://github.com/cobbzilla/mobiletto/issues)

 جب آپ ترجمہ کے بارے میں ایک نیا GitHub مسئلہ بناتے ہیں، تو براہ کرم یہ کریں:
 * صفحہ کا یو آر ایل شامل کریں (براؤزر ایڈریس بار سے کاپی/پیسٹ کریں)
 * درست متن شامل کریں جو غلط ہے (براؤزر سے کاپی/پیسٹ)
 *براہ کرم بیان کریں کہ کیا غلط ہے -- کیا ترجمہ غلط ہے؟ کیا فارمیٹنگ کسی طرح ٹوٹ گئی ہے؟
 * براہِ کرم ایک بہتر ترجمے کی تجویز پیش کریں، یا متن کو کس طرح مناسب طریقے سے فارمیٹ کیا جائے۔
 *** آپ کا شکریہ!**

 ## موبائلٹو کیوں؟

 ### الوداع وینڈر لاک ان!
 مختلف کلاؤڈ اسٹوریج فراہم کنندگان کے پاس غیر مطابقت پذیر APIs ہیں۔ یہاں تک کہ وہ لوگ جو "S3 مطابقت" کے لئے کوشش کرتے ہیں
 غیر معمولی رویے ہیں.

 جب آپ اپنی ایپ کے لیے کسی خاص اسٹوریج وینڈر کا انتخاب کرتے ہیں، اگر آپ براہ راست ان کے API پر کوڈ کرتے ہیں، تو آپ کی ایپ
 اب اس سروس پر منحصر ہے۔ جیسے جیسے وقت گزرتا ہے اور کوڈ جمع ہوتا جاتا ہے، وینڈرز بدلتے جاتے ہیں۔
 تیزی سے ناقابل برداشت. وینڈر لاک ان کی تفریحی دنیا میں خوش آمدید!

 Mobiletto اس مسئلے کو حل کرنے کے لیے ڈیزائن کیا گیا تھا۔ اپنی ایپ کو mobiletto کے API میں کوڈنگ کرکے، آپ آسانی سے کر سکتے ہیں۔
 اسٹوریج فراہم کنندگان کو تبدیل کریں اور جان لیں کہ آپ کی ایپ کی اسٹوریج پرت یکساں برتاؤ کرے گی۔

 ### وسیع پیمانے پر جانچ
 تمام ڈرائیوروں کو ہر ڈرائیور کے لیے 60+ ٹیسٹوں کے ساتھ یکساں سلوک کے لیے ٹیسٹ کیا جاتا ہے۔
 ہم تمام ڈرائیوروں کو ان کے ہر مجموعہ کے ساتھ جانچتے ہیں:
 * خفیہ کاری: فعال اور غیر فعال دونوں
 * ریڈیس کیشے: فعال اور غیر فعال دونوں

 یہ نقطہ نظر ہمیں ذہنی سکون فراہم کرتا ہے کہ آپ جس ڈرائیور کو استعمال کرتے ہیں اس سے قطع نظر موبائلٹو وہی سلوک کرے گا،
 اور اس سے قطع نظر کہ آپ کیشنگ اور/یا خفیہ کاری کو فعال کرتے ہیں۔

 ### ڈرائیور سپورٹ
 موجودہ موبائلٹو اسٹوریج ڈرائیورز:
 * `s3` : Amazon S3
 * `b2` : بیک بلیز B2
 * `local` مقامی' : مقامی فائل سسٹم

 *مزید کلاؤڈ سٹوریج فراہم کرنے والوں کی مدد کے لیے تعاون بہت خوش آئند ہے!*

 ## mobiletto-cli
 Mobiletto کا مقصد دیگر JavaScript کوڈ کے ذریعے لائبریری کے طور پر استعمال کرنا ہے۔

 کمانڈ لائن پر mobiletto کے ساتھ کام کرنے کے لیے، [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) استعمال کریں۔

 ## ذریعہ
 * [گٹ ہب پر موبائلیٹو](https://github.com/cobbzilla/mobiletto)
 * [npm پر موبائلیٹو](https://www.npmjs.com/package/mobiletto)

 ## سپورٹ اور فنڈنگ
 میں ایک پیشہ ور اوپن سورس سافٹ ویئر ڈویلپر بننے کی کوشش کر رہا ہوں۔ میں کام کرتا رہا ہوں۔
 سافٹ ویئر انڈسٹری میں کئی سالوں سے، میں نے کامیاب کمپنیاں شروع کی ہیں اور انہیں پبلک کمپنیوں کو فروخت کیا ہے۔
 حال ہی میں میں نے اپنا کام کھو دیا، اور میرے پاس واقعی کوئی اور کام نہیں ہے۔

 تو میں مددگار سافٹ ویئر لکھنے کی کوشش کروں گا اور دیکھوں گا کہ آیا یہ کام کرتا ہے۔

 اگر آپ اس سافٹ ویئر کو استعمال کرنے سے لطف اندوز ہوتے ہیں، تو میں اس کے لیے بھی بہت شکر گزار ہوں گا۔
 سب سے چھوٹا [پیٹریون کے ذریعے ماہانہ تعاون](https://www.patreon.com/cobbzilla)

 *شکریہ!*

 ## انسٹالیشن
 `npm` یا `yarn` کا استعمال کرتے ہوئے انسٹال کریں۔ آپ شاید `lite` ورژن چاہتے ہیں جس میں سبھی شامل نہ ہوں۔
 ترجمہ شدہ README فائلیں:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 اگر آپ واقعی README فائلیں ہر زبان میں چاہتے ہیں تو مکمل ورژن انسٹال کریں:

    npm install mobiletto
    yarn add mobiletto

 ## فورا شروع کرنا
 Mobiletto `s3` ڈرائیور کا استعمال کرتے ہوئے ایک مختصر مثال۔

 اگر ڈرائیور `b2` یا `local` ہوتا تو یہ کوڈ یکساں چلتا۔

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
 ## بنیادی استعمال
 ایک بہت زیادہ وسیع مثال، پیش کردہ زیادہ تر خصوصیات کو ظاہر کرتی ہے:

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

 ## میٹا ڈیٹا
 `metadata` کمانڈ ایک فائل سسٹم کے اندراج کے بارے میں میٹا ڈیٹا لوٹاتا ہے۔
 اسی طرح، `list` کمانڈ سے واپسی کی قدر میٹا ڈیٹا آبجیکٹ کی ایک صف ہے۔

 ایک میٹا ڈیٹا آبجیکٹ اس طرح لگتا ہے:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` type` کی خاصیت `file` , `dir` , `link` , یا `special` ہے۔

 ڈرائیور کی قسم پر منحصر ہے، `list` کمانڈ تمام فیلڈز کو واپس نہیں کر سکتی ہے۔ `name` اور `type` کی خصوصیات
 ہمیشہ موجود ہونا چاہئے. بعد میں آنے والی `metadata` کمانڈ تمام دستیاب خصوصیات کو واپس کر دے گی۔

 ## متبادل درآمدی انداز
 مکمل دائرہ کار والا ماڈیول درآمد کریں اور `connect` فنکشن استعمال کریں:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## کیشنگ
 Mobiletto ایک <a href="https://redis.io">redis</a> کیشے کے ساتھ بہترین کام کرتا ہے۔

 Mobiletto 127.0.0.1:6379 پر ایک redis مثال سے منسلک کرنے کی کوشش کرے گا

 آپ ان میں سے کسی کو اوور رائیڈ کر سکتے ہیں:
 * `MOBILETTO_REDIS_HOST` env var سیٹ کریں، موبائل کو لوکل ہوسٹ کے بجائے یہاں کنیکٹ کریں
 * `MOBILETTO_REDIS_PORT` env var سیٹ کریں، یہ پورٹ استعمال کیا جائے گا

 Mobiletto اپنی تمام redis کیز کو `_mobiletto__` کے سابقہ کے ساتھ ذخیرہ کرے گا۔ آپ اسے تبدیل کر سکتے ہیں۔
 `MOBILETTO_REDIS_PREFIX` env var سیٹ کر کے۔

 آپ `opts.redisConfig` آبجیکٹ کے ساتھ فی کنکشن کیشنگ بھی سیٹ کر سکتے ہیں:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis کیچنگ نہیں چاہتے؟
 غیر فعال کرنے کے لیے: جب آپ اپنا کنکشن قائم کریں تو اپنے `opts.redisConfig` آبجیکٹ میں `enabled: false` پاس کریں۔

 جیسا کہ ذیل میں بحث کی گئی ہے، کیشنگ کو غیر فعال کرنے سے کارکردگی پر منفی اثر پڑے گا اور مزید درخواستیں آئیں گی۔
 ذخیرہ کرنے کے لیے جس کی آپ کو واقعی ضرورت ہے۔

 ### کیشنگ رہنمائی
 **انکرپٹڈ اسٹوریج**: انکرپٹڈ اسٹوریج کو پڑھنا/لکھنا معمول سے تھوڑا سا سست ہے،
 لیکن ڈائریکٹریز کے ارد گرد تشریف لے جانا (جو کچھ چیزیں کرتے ہیں) کافی مہنگا ہے۔ ریڈیس کیشے کا استعمال
 آپ کو ایک اہم کارکردگی کو فروغ دے گا.

 پہلے سے طے شدہ کیش محفوظ ہے، لیکن اگر آپ کے پاس لکھنے/ ہٹانے کی بہت سی کارروائیاں ہیں تو اچھی کارکردگی نہیں دکھاتی۔
 لکھنے یا ہٹانے کا کوئی بھی عمل پورے کیشے کو باطل کر دیتا ہے، اس بات کو یقینی بناتے ہوئے کہ بعد میں پڑھنے والے اس کو دیکھیں گے۔
 تازہ ترین تبدیلیاں.

 ### CLI ٹولز
 اگر آپ CLI ٹول استعمال کر رہے ہیں جیسا کہ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)،
 آپ یقینی طور پر redis کیشے کو فعال کرنا چاہیں گے، کیونکہ یہ `mo` کمانڈ کی درخواستوں تک جاری رہتا ہے۔

 ## آئینہ دکھانا

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` کمانڈ ایک موبائل سے دوسرے موبائل میں تمام فائلوں کی ایک بار نقل کرتی ہے۔
 یہ وقت کے ساتھ عکس کو برقرار رکھنے کے لیے کوئی عمل نہیں چلاتا۔ `mirror` کمانڈ دوبارہ چلائیں۔
 کسی بھی گمشدہ فائلوں کو مطابقت پذیر بنانے کے لیے۔

 `mirror` سے واپسی کی قیمت ایک سادہ آبجیکٹ ہے جس میں کاؤنٹرز ہیں کہ کتنی فائلیں کامیابی کے ساتھ تھیں۔
 mirrored اور کتنی فائلوں میں غلطیاں تھیں:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 انتباہ: بڑے ڈیٹا سیٹوں کی عکس بندی کرنا بہت وقت طلب اور بینڈوتھ کے لحاظ سے بہت زیادہ ہو سکتا ہے

 `mirror` کال سیمنٹکس کے ساتھ بعض اوقات یہ سمجھنے میں الجھن ہو سکتی ہے کہ کون ہے۔
 قاری اور مصنف کون ہے؟ اسے اسائنمنٹ کے بیان کی طرح تصور کریں: "بائیں ہاتھ کا موبائلٹو"
 کیا چیز کو تفویض کیا جا رہا ہے (آئینے والے ڈیٹا کو لکھا گیا ہے)، اور "دائیں ہاتھ کا موبائلٹو" (دی
 `mirror` طریقہ کار کی دلیل) تفویض کی جانے والی قدر ہے (عکس شدہ ڈیٹا کو پڑھا جاتا ہے)۔

 ## شفاف خفیہ کاری
 شفاف کلائنٹ سائڈ انکرپشن کو فعال کریں:

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

 کیا ہو رہا ہے؟ ایک علیحدہ "ڈائریکٹری اندراج" (ڈائرنٹ) ڈائرکٹری (انکرپٹڈ) ٹریک کرتی ہے کہ اس میں کون سی فائلیں ہیں
 ڈائریکٹری (عرف ڈائرینٹ ڈائرکٹری)۔
 * `list` کمانڈ ڈائرکٹری انٹری فائلوں کو پڑھتی ہے، درج ہر راستے کو ڈیکرپٹ کرتی ہے۔ پھر ہر فائل کے لیے میٹا ڈیٹا لوٹاتا ہے۔
 * `list` کمانڈز زیادہ غیر موثر ہیں، خاص طور پر بڑی تعداد میں فائلوں والی ڈائریکٹریوں کے لیے
 * `write` میں ڈائرنٹ فائلز کو بار بار لکھتی ہے۔ پھر فائل لکھتا ہے۔
 * `write` کمانڈز O(N) لکھتے ہیں، N = گہرائی کے ساتھ ڈائریکٹری کے درجہ بندی میں
 * `remove` کمانڈ متعلقہ ڈائرنٹ فائل کو ہٹاتا ہے، اور اگر خالی ہو تو اس کے پیرنٹ کو بار بار ہٹاتا ہے۔ پھر فائل کو ہٹاتا ہے
 * غیر تکراری `remove` کمانڈز O(N) پڑھے جائیں گے اور ممکنہ طور پر زیادہ سے زیادہ حذف کریں گے، ڈائرکٹری کے درجہ بندی میں N = گہرائی کے ساتھ
 * بڑے اور گہرے فائل سسٹم پر `remove` کمانڈ مہنگی ہو سکتی ہیں۔

 نوٹ کریں کہ کلائنٹ سائڈ انکرپشن کے فعال ہونے کے باوجود، آپ کے انکرپٹڈ سرور سائیڈ میں مکمل مرئیت کے ساتھ ایک مخالف
 اسٹوریج، یہاں تک کہ کلید کے بغیر، پھر بھی ڈائریکٹریوں کی کل تعداد اور ہر ایک میں کتنی فائلیں ہیں، اور اس کے ساتھ دیکھ سکتا ہے۔
 کچھ کوشش، ڈائریکٹری کے درجہ بندی کے کچھ یا تمام مجموعی ڈھانچے کو دریافت کریں۔
 *نوٹ: بہتر سیکیورٹی کے لیے نسبتاً فلیٹ ڈھانچہ استعمال کریں۔*
 مخالف کو ڈائریکٹریز / فائلوں کے نام نہیں معلوم ہوں گے جب تک کہ وہ آپ کی خفیہ کاری کو بھی نہ جانتے ہوں
 کلید یا دوسری صورت میں کامیابی کے ساتھ انکرپشن کو کریک کر دیا تھا۔ پھر تمام شرطیں بند ہیں!

 ### کارکردگی اور کیشنگ
 انکرپٹڈ اسٹوریج پر آپریشنز سست ہوسکتے ہیں۔ تکراری فہرستیں اور ہٹانا بہت سست ہو سکتا ہے۔
 redis کے ذریعے کیش کرنے سے بہت مدد ملتی ہے، لیکن نوٹ کریں کہ کیش کسی بھی تحریر یا ہٹانے پر فلش ہوجاتا ہے۔

 ## کلیدی گردش
 اپنی نئی کلید کے ساتھ ایک موبائلٹو بنائیں، پھر اس میں پرانے ڈیٹا کی عکس بندی کریں:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ڈرائیور انٹرفیس
 ڈرائیور کوئی بھی JS فائل ہے جو اس دستخط کے ساتھ 'storageClient' فنکشن برآمد کرتی ہے۔

    function storageClient (key, secret, opts)

 * `key` : ایک تار، آپ کی API کلید ( `local` ڈرائیور کے لیے یہ بنیادی ڈائریکٹری ہے)
 * `secret` : ایک سٹرنگ، آپ کا API راز ('مقامی' ڈرائیور کے لیے `local` جا سکتا ہے)
 * `opts` : ایک شے، خصوصیات فی ڈرائیور ہیں:
 * `local` کے لیے، `fileMode` اور `dirMode` خصوصیات اس بات کا تعین کرتی ہیں کہ نئی فائلیں اور ڈائریکٹریز کیسے بنتی ہیں
 * `s3` کے لئے، `bucket` خاصیت درکار ہے۔ اختیاری خصوصیات ہیں:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 وہ اعتراض جو اسٹوریج کلائنٹ فنکشن واپس کرتا ہے ان فنکشنز کی وضاحت کرنا ضروری ہے:

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
 Mobiletto [winston](https://www.npmjs.com/package/winston) لاگنگ لائبریری کا استعمال کرتا ہے۔

 لاگز **فائل پاتھز اور ایرر میسیجز پر مشتمل ہوں گے، لیکن **کبھی نہیں** چابیاں، راز،
 یا کنکشن کنفیگریشن کی کوئی دوسری معلومات۔

 ### لاگ لیول
 لاگ لیول سیٹ کرنے کے لیے `MOBILETTO_LOG_LEVEL` ماحولیاتی متغیر کا استعمال کریں، ایک کا استعمال کرتے ہوئے
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) میں بیان کردہ `npm` سطحوں کی

 پہلے سے طے شدہ سطح `error` ہے۔ سب سے زیادہ لفظی سطح ہے `silly` ، حالانکہ فی الحال mobiletto ہے۔
 `debug` سے نیچے کی سطحوں پر لاگ ان نہیں ہوتا ہے۔

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### لاگ فائل
 پہلے سے طے شدہ طور پر، لاگر کنسول کو لکھتا ہے۔ کسی فائل میں لاگ بھیجنے کے لیے، `MOBILETTO_LOG_FILE` سیٹ کریں۔
 ماحولیاتی متغیر. فائل میں لاگ ان کرتے وقت، کنسول پر لاگز مزید نہیں لکھے جائیں گے۔

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 لاگنگ کو بند کرنے کے لیے:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
