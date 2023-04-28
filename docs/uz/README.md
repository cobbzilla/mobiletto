Mobiletto
 =========

 Mobiletto - bu ixtiyoriy shaffof mijoz tomonidan shifrlash bilan JavaScript saqlash abstraksiya qatlami.

 # Tarkib
 * [Nega Mobiletto?](#Why-Mobiletto?)
 * [Tez boshlash](#Tez boshlash)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Manba](#Manba)
 * [O'rnatish](#O'rnatish)
 * [Yordam va moliyalashtirish](#Yordam va moliyalashtirish)
 * [Asosiy foydalanish](#Basic-usage)
 * [Metamaʼlumotlar](#Metamaʼlumotlar)
 * [Muqobil import uslubi](#Alternate-import uslubi)
 * [Keshlash](#Keshlash)
 * [Ko‘zgu](#Ko‘zgu)
 * [Shaffof shifrlash](#Transparent-shifrlash)
 * [Klaviaturani aylantirish](#Klaviaturani aylantirish)
 * [Haydovchi interfeysi](#Driver-interfeys)
 * [Jurnallar](#Jurnallar)

 # Buni boshqa tilda o'qing
 Ushbu README.md hujjati [hokeylization](https://github.com/cobbzilla/hokeylization) orqali tarjima qilingan.
 **[Google Translate tomonidan qo‘llab-quvvatlanadigan barcha tillar](https://cloud.google.com/translate/docs/languages)!**

 Ishonchim komilki, bu mukammal emas, lekin umid qilamanki, bu hech narsadan yaxshiroq!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengal](../bn/README.md)
 [🇩🇪 Nemis](../de/README.md)
 [🇺🇸 Ingliz tili](../en/README.md)
 [🇪🇸 Ispancha](../es/README.md)
 [🇫🇷 Fransuzcha](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziya](../id/README.md)
 [🇮🇹 Italiancha](../it/README.md)
 [🇯🇵 Yapon](../ja/README.md)
 [🇰🇷 Koreys](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polsha](../pl/README.md)
 [🇧🇷 Portugalcha](../pt/README.md)
 [🇷🇺 Ruscha](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkcha](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vetnamcha](../vi/README.md)
 [🇨🇳 Xitoy](../zh/README.md)


 **[📚 ... Barcha tillar ...](../README.md)**
 ----

 ### README tarjimasida muammo bormi?
 Asl nusxaning ushbu tarjimasi [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 nuqsonli bo'lishi mumkin -- *tuzatishlar juda mamnuniyat bilan qabul qilinadi!* Iltimos, [GitHub'da tortish so'rovi](https://github.com/cobbzilla/mobiletto/pulls) yuboring
 yoki buni qilish sizga mos kelmasa, [muammoni oching](https://github.com/cobbzilla/mobiletto/issues)

 Tarjima haqida yangi GitHub muammosini yaratganingizda, iltimos:
 * sahifa URL manzilini qo'shing (brauzer manzil satridan nusxalash/joylashtirish)
 * noto'g'ri bo'lgan aniq matnni kiriting (brauzerdan nusxalash/joylashtirish)
 * nima noto'g'ri ekanligini tushuntirib bering -- tarjima noto'g'ri? formatlash qandaydir tarzda buzilganmi?
 * Yaxshiroq tarjima bo'yicha taklif yoki matnni qanday qilib to'g'ri formatlash kerakligini taklif qiling
 * **Rahmat!**

 ## Nima uchun Mobiletto?

 ### Xayr, sotuvchi qulf!
 Turli xil bulutli saqlash provayderlarida mos kelmaydigan API mavjud. Hatto "S3 muvofiqligi" ga intilayotganlar ham
 o'ziga xos xatti-harakatlarga ega.

 Ilovangiz uchun ma'lum bir saqlash sotuvchisini tanlaganingizda, ularning API-siga to'g'ridan-to'g'ri kodlasangiz, ilovangiz
 endi bu xizmatga bog'liq. Vaqt o'tishi va kod to'planishi bilan o'zgaruvchan sotuvchilar bo'ladi
 tobora chidab bo'lmas. Sotuvchini blokirovka qilishning qiziqarli dunyosiga xush kelibsiz!

 Mobiletto ushbu muammoni hal qilish uchun yaratilgan. Ilovangizni mobiletto API-ga kodlash orqali siz osonlikcha
 saqlash provayderlarini o'zgartiring va ilovangizning saqlash qatlami xuddi shunday harakat qilishini biling.

 ### Keng qamrovli sinov
 Barcha haydovchilar bir xil xatti-harakatlar uchun sinovdan o'tkaziladi, har bir haydovchi uchun 60 dan ortiq testlar.
 Biz barcha drayverlarni har bir kombinatsiya bilan sinab ko'ramiz:
 * Shifrlash: ham yoqilgan, ham o'chirilgan
 * Redis keshi: yoqilgan va o'chirilgan

 Ushbu yondashuv bizga qaysi drayverni ishlatishingizdan qat'i nazar, mobiletto xuddi shunday yo'l tutishiga xotirjamlik beradi,
 va keshlash va/yoki shifrlashni yoqishingizdan qat'i nazar.

 ### Haydovchilarni qo'llab-quvvatlash
 Joriy Mobiletto saqlash drayverlari:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` mahalliy`: mahalliy fayl tizimi

 *Koʻproq bulutli saqlash provayderlarini qoʻllab-quvvatlash uchun qoʻshilgan hissalar mamnuniyat bilan qabul qilinadi!*

 ## mobiletto-cli
 Mobiletto boshqa JavaScript kodi bilan kutubxona sifatida foydalanish uchun mo'ljallangan.

 Buyruqlar qatorida mobiletto bilan ishlash uchun [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) dan foydalaning.

 ## Manba
 * [GitHub-da mobiletto](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Qo'llab-quvvatlash va moliyalashtirish
 Men professional ochiq kodli dasturiy ta'minot ishlab chiqaruvchisi bo'lishga harakat qilaman. Men ishlaganman
 ko'p yillar davomida dasturiy ta'minot sanoatida men muvaffaqiyatli kompaniyalarni ishga tushirdim va ularni ommaviy kompaniyalarga sotdim.
 Yaqinda men ishimni yo'qotdim va boshqa ishim yo'q

 Shuning uchun men foydali dasturiy ta'minot yozishga harakat qilaman va bu ishlayotganligini tekshiraman

 Agar siz ushbu dasturdan foydalanishni yoqtirsangiz, men hattoki uchun juda minnatdorman
 eng kichik [Patreon orqali oylik hissa](https://www.patreon.com/cobbzilla)

 *Rahmat!*

 ## O'rnatish
 `npm` yoki `yarn` yordamida o`rnating. Ehtimol, siz hamma narsani o'z ichiga olmaydigan " `lite` versiyasini xohlaysiz
 tarjima qilingan README fayllari:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Agar siz haqiqatan ham har bir tilda README fayllarini olishni istasangiz, toʻliq versiyasini oʻrnating:

    npm install mobiletto
    yarn add mobiletto

 ## Tez boshlash
 Mobiletto `s3` drayveridan foydalanishga qisqacha misol.

 Agar drayver " `b2` yoki "mahalliy" bo'lsa, bu kod xuddi shunday `local` .

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
 ## Asosiy foydalanish
 Taklif etilgan xususiyatlarning aksariyatini ko'rsatadigan yanada kengroq misol:

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
 " `metadata` " buyrug'i bitta fayl tizimi yozuvi haqidagi metama'lumotlarni qaytaradi.
 Xuddi shunday, " `list` buyrug'idan qaytariladigan qiymat metadata ob'ektlari massividir.

 Metadata ob'ekti quyidagicha ko'rinadi:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` xususiyati `file` , `dir` , `link` yoki `special` .

 Drayv turiga qarab, " `list` buyrug'i barcha maydonlarni qaytarmasligi mumkin. `name` va `type` xususiyatlari
 har doim mavjud bo'lishi kerak. Keyingi " `metadata` " buyrug'i barcha mavjud xususiyatlarni qaytaradi.

 ## Muqobil import uslubi
 To'liq hajmli modulni import qiling va " `connect` funksiyasidan foydalaning:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Keshlash
 Mobiletto eng yaxshi <a href="https://redis.io">redis</a> keshi bilan ishlaydi.

 Mobiletto 127.0.0.1:6379 da redis nusxasiga ulanishga harakat qiladi.

 Siz ulardan birini bekor qilishingiz mumkin:
 * Localhost oʻrniga bu yerga ulanish uchun “ `MOBILETTO_REDIS_HOST` ” env var, mobiletni oʻrnating
 * `MOBILETTO_REDIS_PORT` env parametrini o'rnating, bu port ishlatiladi

 Mobiletto o'zining barcha redis kalitlarini `_mobiletto__` prefiksi bilan saqlaydi. Buni o'zgartirishingiz mumkin
 `MOBILETTO_REDIS_PREFIX` env var.

 Shuningdek, " `opts.redisConfig` obyekti bilan har bir ulanish uchun keshlashni o'rnatishingiz mumkin:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Qayta diskni keshlashni xohlamaysizmi?
 Oʻchirish uchun: ulanishni oʻrnatishda “ `opts.redisConfig` ” obyektida “ `enabled: false` ” ni oʻtkazing.

 Quyida muhokama qilinganidek, keshlashni o'chirib qo'yish ishlashga salbiy ta'sir qiladi va ko'proq so'rovlarni keltirib chiqaradi
 haqiqatan ham kerak bo'lgan saqlash uchun.

 ### Keshlash bo'yicha ko'rsatmalar
 **Shifrlangan xotira**: shifrlangan xotirani o‘qish/yozish odatdagidan biroz sekinroq,
 lekin kataloglar atrofida navigatsiya qilish (ba'zi narsalar qiladi) juda qimmat. Redis keshidan foydalanish
 unumdorlikni sezilarli darajada oshiradi.

 Standart kesh xavfsiz, lekin agar sizda yozish/oʻchirish operatsiyalari koʻp boʻlsa, yaxshi ishlamaydi.
 Har qanday yozish yoki o'chirish operatsiyasi butun keshni bekor qiladi, bu keyingi o'qishlar ko'rishni ta'minlaydi
 so'nggi o'zgarishlar.

 ### CLI vositalari
 Agar siz [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) kabi CLI vositasidan foydalansangiz,
 Siz albatta redis keshini yoqishni xohlaysiz, chunki u " `mo` buyrug'ining chaqiruvlarida davom etadi.

 ## Ko'zgu

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 " `mirror` " buyrug'i barcha fayllarni bir mobil telefondan ikkinchisiga bir martalik nusxalashni amalga oshiradi.
 Vaqt o'tishi bilan oynani saqlab qolish uchun hech qanday jarayonni amalga oshirmaydi. " `mirror` buyrug'ini qayta ishga tushiring
 etishmayotgan fayllarni sinxronlashtirish uchun.

 " `mirror` " dan qaytariladigan qiymat - bu qancha fayl muvaffaqiyatli bo'lganligi uchun hisoblagichlarga ega oddiy ob'ekt
 aks ettirilgan va qancha faylda xatolik bor:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 OGOHLANTIRISH: Katta ma'lumotlar to'plamlarini aks ettirish juda ko'p vaqt va o'tkazish qobiliyatini talab qilishi mumkin

 " `mirror` qo'ng'iroq semantikasi bilan ba'zan kim ekanligini tushunish chalkash bo'lishi mumkin
 o'quvchi va yozuvchi kim. Buni topshiriq bayonoti kabi tasavvur qiling: "chap qo'l mobiletto"
 tayinlangan narsa (yozilgan aks ettirilgan ma'lumotlar) va "o'ng qo'l mobiletto" (
 `mirror` usuliga argument) tayinlanayotgan qiymatdir (ko'zgu ma'lumotlari o'qiladi).

 ## Shaffof shifrlash
 Mijoz tomonidan shaffof shifrlashni yoqing:

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

 Nimalar bo'lyapti? Alohida "katalogga kirish" (to'g'ridan-to'g'ri) katalog (shifrlangan) unda qanday fayllar borligini kuzatib boradi
 katalog (aka to'g'ridan-to'g'ri katalog).
 * `list` katalogga kirish fayllarini o`qiydi, ro`yxatdagi har bir yo`lning shifrini ochadi; keyin har bir fayl uchun metadata qaytaradi
 * `list` buyruqlari samarasizroq, ayniqsa fayllar soni ko'p bo'lgan kataloglar uchun
 * “ `write` ” buyrug'i rekursiv ravishda har bir ota-onaning dirent katalogiga dirent fayllarni yozadi; keyin faylni yozadi
 * `write` buyruqlari katalog ierarxiyasida N = chuqurlik bilan O(N) yozishni talab qiladi.
 * " `remove` " buyrug'i mos keladigan dirent faylni va agar bo'sh bo'lsa, uning ota-onasini rekursiv ravishda olib tashlaydi; keyin faylni olib tashlaydi
 * `remove` bo'lmagan "o'chirish" buyruqlari O(N) o'qish va potentsial ko'p o'chirishga olib keladi, N = katalog ierarxiyasidagi chuqurlik bilan
 * Katta va chuqur fayl tizimlarida `remove` “oʻchirish” buyruqlari qimmat boʻlishi mumkin

 E'tibor bering, hatto mijoz tomonida shifrlash yoqilgan bo'lsa ham, sizning shifrlangan server tomonida to'liq ko'rinadigan raqib.
 saqlash, hatto kalit bo'lmasa ham, kataloglarning umumiy sonini va har birida qancha fayl borligini ko'rishi mumkin
 ba'zi harakatlar, katalog ierarxiyasining umumiy tuzilishining bir qismini yoki barchasini kashf eting.
 *Eslatma: Yaxshiroq xavfsizlik uchun nisbatan tekis tuzilmadan foydalaning.*
 Raqib sizning shifrlashni bilmasa, katalog/fayllar nomlarini bilmaydi
 kalit yoki boshqa yo'l bilan shifrlashni muvaffaqiyatli buzgan. Shunda barcha garovlar bekor!

 ### Ishlash va keshlash
 Shifrlangan saqlash bo'yicha operatsiyalar sekin bo'lishi mumkin. Rekursiv ro'yxatlar va olib tashlashlar juda sekin bo'lishi mumkin.
 Redis orqali keshlash juda yaxshi yordam beradi, lekin shuni yodda tutingki, kesh har qanday yozish yoki olib tashlashda tozalanadi.

 ## Kalitni aylantirish
 Yangi kalitingiz bilan mobiletto yarating, so'ng unga eski ma'lumotlarni aks ettiring:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Haydovchi interfeysi
 Drayv bu imzo bilan "storageClient" funksiyasini eksport qiluvchi har qanday JS faylidir:

    function storageClient (key, secret, opts)

 * `key` : string, sizning API kalitingiz ( `local` drayver uchun bu asosiy katalog)
 * `secret` : string, sizning API siringiz ( `local` drayver uchun o`tkazib yuborilishi mumkin)
 * `opts` : ob'ekt, xususiyatlar har bir haydovchi uchun:
 * “ `local` ” uchun “ `fileMode` ” va “ `dirMode` xossalari yangi yaratiladigan fayllar va kataloglar qanday yaratilishini aniqlaydi.
 * `s3` uchun `bucket` xususiyati talab qilinadi. Ixtiyoriy xususiyatlar quyidagilardir:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 StorageClient funktsiyasi qaytaradigan ob'ekt quyidagi funktsiyalarni belgilashi kerak:

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

 ## Jurnal yozish
 Mobiletto [winston](https://www.npmjs.com/package/winston) jurnallar kutubxonasidan foydalanadi.

 Jurnallar **fayl yo'llari va xato xabarlarini o'z ichiga oladi, lekin **hech qachon** kalitlar, sirlar,
 yoki boshqa ulanish konfiguratsiyasi ma'lumotlari.

 ### Jurnal darajasi
 Jurnal darajasini oʻrnatish uchun “ `MOBILETTO_LOG_LEVEL` ” muhit oʻzgaruvchisidan foydalaning.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) da belgilangan “ `npm` darajalari

 Odatiy daraja – “ `error` . Hozirda `silly` bo'lsa-da, eng batafsil daraja "ahmoqona"
 `debug` past darajalarda tizimga kirmaydi

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Jurnal fayli
 Odatiy bo'lib, logger konsolga yozadi. Jurnallarni faylga yuborish uchun “ `MOBILETTO_LOG_FILE` ”ni oʻrnating
 atrof-muhit o'zgaruvchisi. Faylga kirishda jurnallar endi konsolga yozilmaydi.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Jurnalga kirishni o'chirish uchun:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
