موبيليتو
 =========

 Mobiletto عبارة عن طبقة تجريدية لتخزين JavaScript ، مع تشفير اختياري شفاف من جانب العميل.

 # محتويات
 * [لماذا موبيليتو؟](# لماذا موبيليتو؟)
 * [بداية سريعة](# بدء سريع)
 * [Mobiletto CLI](# mobiletto-cli)
 * [المصدر](# المصدر)
 * [التثبيت](# التثبيت)
 * [الدعم والتمويل](# دعم وتمويل)
 * [الاستخدام الأساسي](# الاستخدام الأساسي)
 * [البيانات الوصفية](# بيانات وصفية)
 * [نمط الاستيراد البديل](# نمط الاستيراد البديل)
 * [Caching](# Caching)
 * [انعكاس](# انعكاس)
 * [تشفير شفاف](# تشفير شفاف)
 * [Key rotation](# Key-rotation) (دوران المفتاح #)
 * [واجهة السائق](# واجهة سائق)
 * [تسجيل](# تسجيل)

 # اقرأ هذا بلغة أخرى
 تمت ترجمة هذا المستند README.md عبر [hokeylization](https://github.com/cobbzilla/hokeylization) إلى
 ** [كل لغة تدعمها ترجمة Google](https://cloud.google.com/translate/docs/languages)! **

 أنا متأكد من أنها ليست مثالية ، لكني آمل أن تكون أفضل من لا شيء!

 [🇸🇦 عربي](docs / ar / README.md)
 [🇧🇩 بنغالي](docs / bn / README.md)
 [🇩🇪 ألماني](docs / de / README.md)
 [🇺🇸 إنجليزي](docs / en / README.md)
 [🇪🇸 إسباني](docs / es / README.md)
 [🇫🇷 فرنسي](docs / fr / README.md)
 [🇹🇩 الهوسا](docs / ha / README.md)
 [🇮🇳 هندي](docs / hi / README.md)
 [🇮🇩 إندونيسي](docs / id / README.md)
 [🇮🇹 إيطالي](docs / it / README.md)
 [🇯🇵 باليابانية](docs / ja / README.md)
 [🇰🇷 كوري](docs / ko / README.md)
 [🇮🇳 مارانثي](مستندات / السيد / README.md)
 [🇵🇱 بولندي](docs / pl / README.md)
 [🇧🇷 برتغالي](docs / pt / README.md)
 [🇷🇺 بالروسية](docs / ru / README.md)
 [🇰🇪 السواحيلية](docs / sw / README.md)
 [🇵🇭 تاغالوغ](docs / tl / README.md)
 [🇹🇷 التركية](docs / tr / README.md)
 [🇵🇰 الأردية](docs / ur / README.md)
 [🇻🇳 فيتنامي](docs / vi / README.md)
 [🇨🇳 الصينية](docs / zh / README.md)


 ** [📚 ... كل اللغات ...](docs / README.md) **
 ----

 ### هل هناك مشكلة في ترجمة التمهيدي؟
 هذه الترجمة المحددة لـ [README] الأصلي (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 قد يكون معيبًا - * نرحب بالتصحيحات! * يُرجى إرسال [طلب سحب على GitHub](https://github.com/cobbzilla/mobiletto/pulls) ،
 أو إذا لم تكن مرتاحًا لفعل ذلك ، [افتح مشكلة](https://github.com/cobbzilla/mobiletto/issues)

 عند إنشاء مشكلة جديدة على GitHub بخصوص ترجمة ، يرجى القيام بما يلي:
 * تضمين عنوان URL للصفحة (نسخ / لصق من شريط عنوان المتصفح)
 * تضمين النص الخاطئ بالضبط (نسخ / لصق من المتصفح)
 * يرجى وصف ما هو الخطأ - هل الترجمة غير صحيحة؟ هل التنسيق معطل بطريقة ما؟
 * يرجى تقديم اقتراح بترجمة أفضل ، أو كيفية تنسيق النص بشكل صحيح
 * **شكرًا لك!**

 ## لماذا موبيليتو؟

 ### وداعا حبس البائع!
 لدى مختلف موفري التخزين السحابي واجهات برمجة تطبيقات غير متوافقة. حتى أولئك الذين يسعون جاهدين من أجل "التوافق مع S3"
 لديهم سلوكيات خاصة.

 عندما تختار بائع تخزين معين لتطبيقك ، إذا قمت بالتشفير مباشرة إلى واجهة برمجة التطبيقات الخاصة بهم ، فإن تطبيقك
 تعتمد الآن على تلك الخدمة. مع مرور الوقت وتراكم الكود ، يصبح تغيير البائعين
 لا يمكن الدفاع عنه على نحو متزايد. مرحبًا بك في عالم المرح من قفل البائع!

 تم تصميم Mobiletto لحل هذه المشكلة. من خلال ترميز التطبيق الخاص بك إلى واجهة برمجة التطبيقات الخاصة بشركة Mobiletto ، يمكنك ذلك بسهولة
 قم بتغيير موفري التخزين واعلم أن طبقة تخزين التطبيق الخاص بك سوف تتصرف بشكل متماثل.

 ### اختبارات مكثفة
 يتم اختبار جميع السائقين من أجل سلوك متطابق مع أكثر من 60 اختبارًا لكل سائق.
 نقوم باختبار جميع السائقين مع كل مجموعة من:
 * التشفير: ممكّن ومعطل
 * ذاكرة التخزين المؤقت Redis: ممكّنة ومعطلة

 يمنحنا هذا النهج راحة البال التي سيتصرف بها Mobiletto بغض النظر عن السائق الذي تستخدمه ،
 وبغض النظر عما إذا كنت تقوم بتمكين التخزين المؤقت و / أو التشفير.

 ### دعم السائق
 برامج تشغيل التخزين Mobiletto الحالية:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : نظام ملفات محلي

 * نرحب بالمساهمات لدعم المزيد من مزودي التخزين السحابي! *

 ## Mobiletto-CLI
 يهدف Mobiletto إلى استخدامه كمكتبة بواسطة كود JavaScript آخر.

 للعمل مع mobiletto في سطر الأوامر ، استخدم [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## مصدر
 * [mobiletto على GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## الدعم والتمويل
 أحاول أن أكون مطور برامج محترف مفتوح المصدر. لقد كنت أعمل في
 صناعة البرمجيات لسنوات عديدة ، لقد بدأت شركات ناجحة وقمت ببيعها لشركات عامة.
 لقد فقدت وظيفتي مؤخرًا ، وليس لدي حقًا أي عمل آخر مرتب

 لذلك سأحاول كتابة برنامج مفيد ومعرفة ما إذا كان ذلك يعمل

 إذا كنت تستمتع باستخدام هذا البرنامج ، فسأكون ممتنًا جدًا حتى لملفات
 أصغر [مساهمة شهرية عبر Patreon](https://www.patreon.com/cobbzilla)

 *شكرًا لك!*

 ## تثبيت
 التثبيت باستخدام `npm` `yarn` . ربما تريد الإصدار `lite` الذي لا يتضمن جميع ملفات
 ملفات README المترجمة:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 إذا كنت تريد حقًا ملفات README بكل لغة ، فقم بتثبيت الإصدار الكامل:

    npm install mobiletto
    yarn add mobiletto

 ## بداية سريعة
 مثال قصير على استخدام مشغل mobiletto `s3` .

 سيعمل هذا الرمز بنفس الطريقة إذا كان برنامج التشغيل `b2` " أو `local` .

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
 ## الاستخدام الأساسي
 مثال أكثر شمولاً ، يُظهر معظم الميزات المعروضة:

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

 ## البيانات الوصفية
 يقوم الأمر `metadata` بإرجاع البيانات الوصفية حول إدخال واحد في نظام الملفات.
 وبالمثل ، فإن القيمة المعادة من الأمر `list` هي مصفوفة من كائنات البيانات الوصفية.

 يبدو كائن البيانات الوصفية كما يلي:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 يمكن أن تكون خاصية `type` `file` " `link` أو " `dir` " أو `special` أو "خاص".

 اعتمادًا على نوع برنامج التشغيل ، قد لا يقوم أمر `list` بإرجاع جميع الحقول. خصائص `name` الاسم" و `type`
 يجب أن يكون حاضرًا دائمًا. سيعيد أمر `metadata` اللاحق جميع الخصائص المتاحة.

 ## أسلوب الاستيراد البديل
 قم باستيراد الوحدة كاملة النطاق `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## التخزين المؤقت
 Mobiletto يعمل بشكل أفضل مع مخبأ <a href="https://redis.io">redis</a> .

 سيحاول Mobiletto الاتصال بنسخة redis على 127.0.0.1:6379

 يمكنك تجاوز أي مما يلي:
 * اضبط `MOBILETTO_REDIS_HOST` env var ، mobiletto connect هنا بدلاً من localhost
 * اضبط `MOBILETTO_REDIS_PORT` env var ، سيتم استخدام هذا المنفذ

 ستقوم Mobiletto بتخزين جميع مفاتيح redis الخاصة بها بالبادئة `_mobiletto__` . يمكنك تغيير هذا
 عن طريق تعيين `MOBILETTO_REDIS_PREFIX` var.

 يمكنك أيضًا تعيين التخزين المؤقت لكل اتصال باستخدام الكائن `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ألا تريد تخزين redis مؤقتًا؟
 للتعطيل: قم بتمرير `enabled: false` خطأ" في كائن `opts.redisConfig` عند إنشاء اتصالك.

 كما هو موضح أدناه ، سيكون لتعطيل التخزين المؤقت تأثير سلبي على الأداء وسيتسبب في المزيد من الطلبات
 للتخزين الذي تحتاجه حقًا.

 ### إرشادات التخزين المؤقت
 ** التخزين المشفر **: قراءة / كتابة التخزين المشفر أبطأ قليلاً من المعتاد ،
 لكن التنقل حول الدلائل (وهو ما تفعله بعض الأشياء) مكلف إلى حد ما. استخدام ذاكرة التخزين المؤقت redis
 سيعطيك دفعة كبيرة في الأداء.

 ذاكرة التخزين المؤقت الافتراضية آمنة ، ولكنها لا تعمل بشكل جيد إذا كان لديك الكثير من عمليات الكتابة / الإزالة.
 تؤدي أي عملية كتابة أو إزالة إلى إبطال ذاكرة التخزين المؤقت بالكامل ، مما يضمن أن القراءات اللاحقة ستشاهد ملف
 أحدث التغييرات.

 ### أدوات CLI
 إذا كنت تستخدم أداة CLI مثل [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ،
 ستحتاج بالتأكيد إلى تمكين ذاكرة التخزين المؤقت redis ، لأنها تدوم عبر استدعاءات الأمر `mo` .

 ## انعكاس

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 ينفذ الأمر `mirror` " نسخة لمرة واحدة من جميع الملفات من Mobiletto إلى آخر.
 لا يتم تشغيل أي عملية للحفاظ على المرآة بمرور الوقت. قم بتشغيل أمر `mirror` مرة أخرى
 لمزامنة أي ملفات مفقودة.

 القيمة المعادة من `mirror` هي كائن بسيط به عدادات لعدد الملفات التي تم بنجاح
 معكوسة وعدد الملفات التي بها أخطاء:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 تحذير: يمكن أن يكون عكس مجموعات البيانات الكبيرة مستهلكًا للوقت ومكثفًا للنطاق الترددي

 باستخدام دلالات استدعاء `mirror` ، قد يكون من المربك أحيانًا فهم من هو
 القارئ ومن هو الكاتب. تخيلها مثل بيان مهمة: "left-hand mobiletto"
 هو الشيء الذي يتم تخصيصه لـ (بيانات معكوسة مكتوبة) ، و "Mobiletto الأيمن" (
 الوسيطة إلى طريقة `mirror` ) هي القيمة التي يتم تعيينها (تتم قراءة البيانات المنعكسة).

 ## تشفير شفاف
 تمكين التشفير الشفاف من جانب العميل:

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

 ماذا يحدث؟ يتتبع دليل "إدخال الدليل" (dirent) المنفصل (المشفر) الملفات الموجودة في ذلك الدليل
 الدليل (المعروف أيضًا باسم دليل dirent).
 * يقرأ الأمر `list` ملفات إدخال الدليل ، ويفك تشفير كل مسار مدرج ؛ ثم تقوم بإرجاع البيانات الوصفية لكل ملف
 * أوامر `list` غير فعالة بشكل أكبر ، خاصة بالنسبة للأدلة التي تحتوي على عدد كبير من الملفات
 * يقوم الأمر `write` بكتابة ملفات dirent في دليل الدليل الخاص بكل والد ، بشكل متكرر ؛ ثم يكتب الملف
 * أوامر `write` ستتضمن كتابة O (N) ، مع N = عمق في التسلسل الهرمي للدليل
 * يقوم الأمر `remove` بإزالة ملف الدليل المقابل ، وملفه الأصلي إذا كان فارغًا ، بشكل متكرر ؛ ثم يزيل الملف
 * أوامر `remove` غير العودية ستتعرض لقراءات O (N) ويحتمل أن يتم حذف العديد منها ، مع N = العمق في التسلسل الهرمي للدليل
 * أوامر `remove` على أنظمة الملفات الكبيرة والعميقة يمكن أن تكون باهظة الثمن

 لاحظ أنه حتى مع تمكين التشفير من جانب العميل ، فإن الخصم يتمتع برؤية كاملة من جانب الخادم المشفر
 التخزين ، حتى بدون المفتاح ، لا يزال بإمكانه رؤية العدد الإجمالي للأدلة وعدد الملفات الموجودة في كل منها ومع
 بعض الجهد ، اكتشف بعض أو كل الهيكل العام للتسلسل الهرمي للدليل.
 * ملاحظة: استخدم هيكلًا مسطحًا نسبيًا لتحسين الأمان. *
 لن يعرف الخصم أسماء الدلائل / الملفات ما لم يعرف أيضًا تشفيرك
 مفتاح أو نجح في كسر التشفير. كل الرهانات بعد ذلك!

 ### الأداء والتخزين المؤقت
 يمكن أن تكون العمليات على التخزين المشفر بطيئة. يمكن أن تكون عمليات الإزالة والقوائم المتكررة بطيئة للغاية.
 يساعد التخزين المؤقت عبر redis بشكل كبير ، ولكن لاحظ أنه يتم مسح ذاكرة التخزين المؤقت عند الكتابة أو الإزالة.

 ## مفتاح التناوب
 قم بإنشاء Mobiletto باستخدام مفتاحك الجديد ، ثم قم بنسخ البيانات القديمة فيه:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## واجهة السائق
 السائق هو أي ملف JS يصدر وظيفة "storageClient" بهذا التوقيع:

    function storageClient (key, secret, opts)

 * `key` : سلسلة ، مفتاح API الخاص بك (بالنسبة لبرنامج `local` ، هذا هو الدليل الأساسي)
 * `secret` : سلسلة ، سر واجهة برمجة التطبيقات (يمكن حذفه لبرنامج `local` )
 * `opts` : كائن ، الخصائص لكل سائق:
 * بالنسبة إلى `local` " ، تحدد خصائص " `fileMode` " و `dirMode` كيفية إنشاء ملفات وأدلة جديدة
 * بالنسبة لـ `s3` ، تكون `bucket` مطلوبة. الخصائص الاختيارية هي:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 يجب أن يحدد الكائن الذي تعرضه دالة storageClient هذه الوظائف:

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

 ## تسجيل
 يستخدم Mobiletto مكتبة التسجيل [winston](https://www.npmjs.com/package/winston).

 سوف تحتوي السجلات ** ** على مسارات ملفات ورسائل خطأ ، ولكنها لن ** ** أبدًا ** تحتوي على مفاتيح وأسرار ،
 أو أي معلومات تكوين اتصال أخرى.

 ### تسجيل مستوى
 استخدم متغير البيئة `MOBILETTO_LOG_LEVEL` لتعيين مستوى السجل ، باستخدام واحد
 من مستويات `npm` المحددة في [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 المستوى الافتراضي هو `error` . المستوى الأكثر تفصيلاً هو `silly` ، على الرغم من أن Mobiletto حاليًا
 لا يسجل في المستويات أدناه `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ملف تسجيل
 بشكل افتراضي ، يكتب المسجل إلى وحدة التحكم. لإرسال سجلات إلى ملف ، قم بتعيين `MOBILETTO_LOG_FILE`
 متغيرات البيئة. عند تسجيل الدخول إلى ملف ، لن تتم كتابة السجلات إلى وحدة التحكم.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 لإيقاف التسجيل:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
