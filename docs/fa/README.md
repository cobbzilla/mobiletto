موبایلتو
 =========

 Mobiletto یک لایه انتزاعی ذخیره سازی جاوا اسکریپت است، با رمزگذاری شفاف اختیاری سمت مشتری.

 # فهرست
 * [چرا Mobiletto؟](#Why-Mobiletto؟)
 * [شروع سریع](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [منبع](#منبع)
 * [نصب](#نصب)
 * [Support and Funding](#Support-and-Funding)
 * [استفاده پایه](#استفاده پایه)
 * [فراداده](#فراداده)
 * [سبک واردات جایگزین](#Alternate-import-style)
 * [Caching](#Caching)
 * [آینه کاری](#آینه کاری)
 * [رمزگذاری شفاف](#Transparent-encryption)
 * [چرخش کلید](#چرخش کلید)
 * [رابط درایور](#رابط راننده)
 * [Logging](#Logging)

 # این را به زبان دیگری بخوانید
 این سند README.md از طریق [hokeylization](https://github.com/cobbzilla/hokeylization) به
 **[هر زبانی که توسط Google Translate پشتیبانی می‌شود](https://cloud.google.com/translate/docs/languages)!**

 من مطمئنم که کامل نیست، اما امیدوارم از هیچی بهتر باشد!

 [🇸🇦 عربی](../ar/README.md)
 [🇧🇩 بنگالی](../bn/README.md)
 [🇩🇪 آلمانی](../de/README.md)
 [🇺🇸 انگلیسی](../en/README.md)
 [🇪🇸 اسپانیایی](../es/README.md)
 [🇫🇷 فرانسوی](../fr/README.md)
 [🇹🇩 هاوسا](../ha/README.md)
 [🇮🇳 هندی](../hi/README.md)
 [🇮🇩 اندونزیایی](../id/README.md)
 [🇮🇹 ایتالیایی](../it/README.md)
 [🇯🇵 ژاپنی](../ja/README.md)
 [🇰🇷 کره ای](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 لهستانی](../pl/README.md)
 [🇧🇷 پرتغالی](../pt/README.md)
 [🇷🇺 روسی](../ru/README.md)
 [🇰🇪 سواحیلی](../sw/README.md)
 [🇵🇭 تاگالوگ](../tl/README.md)
 [🇹🇷 ترکی](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ویتنامی](../vi/README.md)
 [🇨🇳 چینی](../zh/README.md)


 **[📚 ... همه زبان ها ...](../README.md)**
 ----

 ### آیا این ترجمه README مشکلی دارد؟
 این ترجمه خاص از [README] اصلی (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ممکن است ناقص باشد -- *اصلاحات بسیار خوش آمدید!* لطفاً یک [درخواست کشش در GitHub] ارسال کنید (https://github.com/cobbzilla/mobiletto/pulls)،
 یا اگر از انجام آن راحت نیستید، [مشکلی را باز کنید](https://github.com/cobbzilla/mobiletto/issues)

 هنگامی که یک مشکل جدید GitHub در مورد ترجمه ایجاد می کنید، لطفاً این کار را انجام دهید:
 * شامل URL صفحه (کپی/پیست از نوار آدرس مرورگر)
 * متن دقیق اشتباه را شامل شود (کپی/پیست از مرورگر)
 * لطفاً توضیح دهید که چه چیزی اشتباه است -- آیا ترجمه صحیح نیست؟ آیا قالب بندی به نوعی خراب است؟
 * لطفاً پیشنهادی برای ترجمه بهتر یا نحوه قالب بندی صحیح متن ارائه دهید
 * **متشکرم!**

 ## چرا Mobiletto؟

 ### خداحافظ قفل فروشنده!
 ارائه دهندگان مختلف ذخیره سازی ابری دارای APIهای ناسازگار هستند. حتی آنهایی که برای "سازگاری S3" تلاش می کنند
 رفتارهای خاص دارند

 هنگامی که یک فروشنده فضای ذخیره‌سازی خاص را برای برنامه خود انتخاب می‌کنید، اگر مستقیماً به API آنها کدنویسی کنید، برنامه شما
 اکنون به آن سرویس وابسته است. با گذشت زمان و انباشت کد، فروشندگان تغییر می کنند
 به طور فزاینده ای غیر قابل دفاع به دنیای سرگرم کننده قفل فروشنده خوش آمدید!

 Mobiletto برای حل این مشکل طراحی شده است. با کدگذاری برنامه خود در API mobiletto، به راحتی می توانید
 ارائه دهندگان فضای ذخیره سازی را تغییر دهید و بدانید که لایه ذخیره سازی برنامه شما یکسان عمل می کند.

 ### تست گسترده
 همه رانندگان برای رفتار یکسان با بیش از 60 تست برای هر راننده آزمایش می شوند.
 ما همه درایورها را با هر ترکیبی از موارد زیر آزمایش می کنیم:
 * رمزگذاری: هم فعال و هم غیرفعال است
 * حافظه پنهان Redis: هم فعال و هم غیرفعال است

 این رویکرد به ما آرامش می دهد که mobiletto صرف نظر از اینکه از کدام درایور استفاده می کنید یکسان رفتار خواهد کرد.
 و صرف نظر از اینکه آیا ذخیره و/یا رمزگذاری را فعال می کنید.

 ### پشتیبانی از درایور
 درایورهای فعلی ذخیره سازی Mobiletto:
 * `s3` : آمازون S3
 * `b2` : Backblaze B2
 * `local` : فایل سیستم محلی

 *مشارکت برای حمایت بیشتر از ارائه دهندگان فضای ذخیره سازی ابری بسیار خوش آمدید!*

 ## mobiletto-cli
 Mobiletto برای استفاده به عنوان یک کتابخانه توسط سایر کدهای جاوا اسکریپت در نظر گرفته شده است.

 برای کار با mobiletto در خط فرمان، از [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) استفاده کنید.

 ## منبع
 * [mobiletto در GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## پشتیبانی و تامین مالی
 من سعی می کنم یک توسعه دهنده نرم افزار متن باز حرفه ای باشم. من در حال کار بوده ام
 در صنعت نرم افزار سال هاست که شرکت های موفقی راه اندازی کرده ام و آنها را به شرکت های دولتی فروخته ام.
 اخیراً کارم را از دست داده‌ام و واقعاً کار دیگری ندارم

 بنابراین من سعی می کنم نرم افزار مفید بنویسم و ببینم آیا کار می کند یا خیر

 اگر از استفاده از این نرم افزار لذت می برید، حتی از این کار بسیار سپاسگزار خواهم بود
 کوچکترین [کمک مالی ماهانه از طریق Patreon](https://www.patreon.com/cobbzilla)

 *متشکرم!*

 ## نصب و راه اندازی
 با استفاده از `npm` » یا `yarn` کنید. احتمالاً نسخه `lite` را می‌خواهید که شامل همه موارد نباشد
 فایل های README ترجمه شده:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 اگر واقعاً فایل های README را به هر زبانی می خواهید، نسخه کامل را نصب کنید:

    npm install mobiletto
    yarn add mobiletto

 ## شروع سریع
 یک مثال کوتاه با استفاده از درایور mobiletto `s3` .

 اگر درایور `b2` » یا `local` باشد، این کد یکسان اجرا می‌شود.

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
 ## استفاده اساسی
 یک مثال بسیار گسترده تر، که بیشتر ویژگی های ارائه شده را نشان می دهد:

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

 ## فراداده
 دستور `metadata` ابرداده مربوط به یک ورودی سیستم فایل را برمی گرداند.
 به همین ترتیب، مقدار بازگشتی از دستور `list` آرایه ای از اشیاء ابرداده است.

 یک شی ابرداده به شکل زیر است:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 ویژگی `type` می تواند `file` `dir` ، «dir»، `link` » یا `special` باشد.

 بسته به نوع درایور، دستور `list` ممکن است همه فیلدها را برنگرداند. ویژگی های `name` " و `type`
 باید همیشه حضور داشته باشد یک دستور `metadata` بعدی، تمام ویژگی های موجود را برمی گرداند.

 ## سبک واردات جایگزین
 ماژول با دامنه کامل را وارد کنید و از تابع `connect` استفاده کنید:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ذخیره سازی
 Mobiletto با حافظه پنهان <a href="https://redis.io">redis</a> بهترین کار را می کند.

 Mobiletto سعی خواهد کرد به یک نمونه redis در 127.0.0.1:6379 متصل شود.

 شما می توانید یکی از این موارد را لغو کنید:
 * `MOBILETTO_REDIS_HOST` env var، mobile را تنظیم کنید تا به جای localhost به اینجا متصل شوید
 * `MOBILETTO_REDIS_PORT` env var را تنظیم کنید، این پورت استفاده خواهد شد

 Mobiletto همه کلیدهای redis خود را با پیشوند `_mobiletto__` می کند. شما می توانید این را تغییر دهید
 با تنظیم `MOBILETTO_REDIS_PREFIX` env var.

 همچنین می‌توانید کش هر اتصال را با شی `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ذخیره مجدد redis را نمی خواهید؟
 برای غیرفعال کردن: هنگامی که اتصال خود را برقرار می کنید `enabled: false` » را در شی `opts.redisConfig` دهید.

 همانطور که در زیر توضیح داده شد، غیرفعال کردن حافظه پنهان تأثیر نامطلوبی بر عملکرد خواهد داشت و درخواست های بیشتری را متحمل می شود
 به فضای ذخیره سازی که واقعاً به آن نیاز دارید.

 ### راهنمای ذخیره سازی
 **ذخیره سازی رمزگذاری شده**: خواندن/نوشتن ذخیره سازی رمزگذاری شده فقط کمی کندتر از حالت عادی است،
 اما پیمایش در دایرکتوری ها (که برخی کارها انجام می دهند) نسبتاً گران است. استفاده از کش ردیس
 عملکرد قابل توجهی را به شما می دهد.

 حافظه پنهان پیش‌فرض امن است، اما اگر عملیات نوشتن/حذف زیاد داشته باشید، عملکرد خوبی ندارد.
 هر گونه عملیات نوشتن یا حذف، کل حافظه پنهان را باطل می کند و اطمینان حاصل می کند که خواندن های بعدی آن را مشاهده می کنند
 آخرین تغییرات

 ### ابزارهای CLI
 اگر از ابزار CLI مانند [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) استفاده می کنید،
 مطمئناً می‌خواهید حافظه نهان redis فعال باشد، زیرا در فراخوانی‌های فرمان `mo` .

 ## آینه کاری

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 دستور `mirror` یک کپی یکباره از همه فایل ها از یک موبایل به موبایل دیگر را انجام می دهد.
 هیچ فرآیندی برای نگهداری آینه در طول زمان اجرا نمی کند. دوباره دستور `mirror` را اجرا کنید
 برای همگام سازی فایل های از دست رفته

 مقدار بازگشتی از `mirror` یک شی ساده با شمارنده‌های تعداد فایل‌هایی است که با موفقیت انجام شده‌اند
 mirrored و چند فایل خطا داشتند:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 هشدار: انعکاس مجموعه داده های بزرگ می تواند بسیار زمان بر و پهنای باند فشرده باشد.

 با نام `mirror` معناشناسی گاهی اوقات می‌تواند گیج‌کننده باشد که بفهمیم کیست
 خواننده و نویسنده کیست آن را مانند یک بیانیه تکلیف تصور کنید: "موبایل دست چپ"
 چیزی است که به آن اختصاص داده می شود (داده های آینه ای نوشته شده) و "موبایل سمت راست" (
 آرگومان به روش `mirror` ) مقداری است که اختصاص داده می شود (داده های آینه شده خوانده می شوند).

 ## رمزگذاری شفاف
 رمزگذاری شفاف سمت کلاینت را فعال کنید:

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

 چه اتفاقی می افتد؟ یک دایرکتوری جداگانه "ورود دایرکتوری" (دایرنت) (رمزگذاری شده) فایل های موجود در آن را ردیابی می کند
 دایرکتوری (معروف به دایرکتوری dirent).
 * دستور `list` فایل های ورودی دایرکتوری را می خواند، هر مسیر فهرست شده را رمزگشایی می کند. سپس متادیتا را برای هر فایل برمی گرداند
 * دستورات `list` ناکارآمدتر هستند، به خصوص برای دایرکتوری هایی که تعداد فایل های زیادی دارند
 * دستور `write` فایل‌های dirent را در دایرکتوری dirent هر والد به صورت بازگشتی می‌نویسد. سپس فایل را می نویسد
 * دستورات `write` O(N) همراه با N = عمق در سلسله مراتب دایرکتوری مواجه می شوند.
 * دستور `remove` فایل dirent مربوطه را حذف می کند و اگر خالی باشد، والد آن را به صورت بازگشتی حذف می کند. سپس فایل را حذف می کند
 * دستورات `remove` غیر بازگشتی با خواندن O(N) و به طور بالقوه به همان اندازه حذف خواهند شد، با N = عمق در سلسله مراتب دایرکتوری
 * دستورات `remove` بازگشتی در فایل سیستم های بزرگ و عمیق ممکن است گران باشد

 توجه داشته باشید که حتی با فعال بودن رمزگذاری سمت سرویس گیرنده، یک دشمن با دید کامل در سمت سرور رمزگذاری شده شما
 ذخیره سازی، حتی بدون کلید، همچنان می تواند تعداد کل دایرکتوری ها و تعداد فایل های موجود در هر کدام را مشاهده کند
 برخی از تلاش ها، برخی یا تمام ساختار کلی سلسله مراتب دایرکتوری را کشف کنید.
 *توجه: برای امنیت بهتر از ساختار نسبتاً مسطح استفاده کنید.*
 حریف نام دایرکتوری ها/فایل ها را نمی داند مگر اینکه رمزگذاری شما را نیز بداند
 کلید یا در غیر این صورت رمزگذاری را با موفقیت شکسته است. پس از آن همه شرط ها خاموش است!

 ### عملکرد و ذخیره سازی
 عملیات روی حافظه رمزگذاری شده ممکن است کند باشد. فهرست ها و حذف های بازگشتی می تواند بسیار کند باشد.
 ذخیره سازی حافظه پنهان از طریق redis بسیار کمک می کند، اما توجه داشته باشید که حافظه پنهان پس از نوشتن یا حذف پاک می شود.

 ## چرخش کلید
 با کلید جدید خود یک Mobiletto ایجاد کنید، سپس داده های قدیمی را در آن منعکس کنید:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## رابط درایور
 درایور هر فایل JS است که تابع "storageClient" را با این امضا صادر می کند:

    function storageClient (key, secret, opts)

 * `key` : یک رشته، کلید API شما (برای درایور `local` این دایرکتوری پایه است)
 * `secret` : یک رشته، راز API شما (برای درایور `local` می توان آن را حذف کرد)
 * `opts` : یک شی، ویژگی ها برای هر درایور هستند:
 * برای `local` ، `fileMode` » و `dirMode` نحوه ایجاد فایل‌ها و دایرکتوری‌های جدید را تعیین می‌کنند.
 * برای `s3` ، ویژگی `bucket` مورد نیاز است. خواص اختیاری عبارتند از:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 شیئی که تابع storageClient برمی گرداند باید این توابع را تعریف کند:

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

 ## ورود به سیستم
 Mobiletto از کتابخانه logging [winston](https://www.npmjs.com/package/winston) استفاده می کند.

 گزارش‌ها **** حاوی مسیرهای فایل و پیام‌های خطا خواهند بود، اما **هرگز** حاوی کلیدها، اسرار،
 یا هر گونه اطلاعات پیکربندی اتصال دیگر.

 ### سطح گزارش
 از متغیر محیطی `MOBILETTO_LOG_LEVEL` برای تنظیم سطح گزارش استفاده کنید.
 از سطوح `npm` تعریف شده در [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 سطح پیش‌فرض `error` است. `silly` است، اگرچه در حال حاضر قابل حمل است
 در سطوح زیر `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ورود به سیستم فایل
 به طور پیش فرض، لاگر در کنسول می نویسد. برای ارسال گزارش‌ها به یک فایل، `MOBILETTO_LOG_FILE` را تنظیم کنید
 متغیر محیطی. هنگام ورود به یک فایل، گزارش‌ها دیگر روی کنسول نوشته نمی‌شوند.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 برای خاموش کردن ورود به سیستم:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
