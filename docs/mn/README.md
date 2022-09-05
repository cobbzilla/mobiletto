Mobiletto
 =========

 Mobiletto нь JavaScript хадгалалтын хийсвэр давхарга бөгөөд үйлчлүүлэгч талын нэмэлт шифрлэлттэй.

 # Агуулга
 * [Яагаад Mobiletto?](#Why-Mobiletto?)
 * [Түргэн эхлүүлэх](# Түргэн эхлүүлэх)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Эх сурвалж](#Эх сурвалж)
 * [Суулгалт](#Суулгалт)
 * [Дэмжлэг ба санхүүжилт](#Дэмжлэг ба санхүүжилт)
 * [Үндсэн хэрэглээ](#Үндсэн хэрэглээ)
 * [Мета өгөгдөл](#Мета өгөгдөл)
 * [Импортын өөр загвар](#Алтернатив импортын хэв маяг)
 * [Кэш хийх](#Кэш хийх)
 * [Толь тусгах](#Толь тусгах)
 * [Ил тод шифрлэлт](#Ил тод-шифрлэлт)
 * [Түлхүүр эргүүлэх](#Түлхүүр эргүүлэх)
 * [Драйверын интерфейс](#Драйвер-интерфэйс)
 * [Бүртгэл](#Бүртгэл)

 # Үүнийг өөр хэлээр уншина уу
 Энэхүү README.md баримтыг [hokeylization](https://github.com/cobbzilla/hokeylization) руу орчуулсан.
 **[Google Translate дэмждэг бүх хэл](https://cloud.google.com/translate/docs/languages)!**

 Энэ нь төгс биш гэдэгт би итгэлтэй байна, гэхдээ энэ нь юу ч биш байснаас дээр гэж найдаж байна!

 [🇸🇦 Араб хэл](../ar/README.md)
 [🇧🇩 Бенгал](../bn/README.md)
 [🇩🇪 Герман](../de/README.md)
 [🇺🇸 Англи хэл](../en/README.md)
 [🇪🇸 Испани](../es/README.md)
 [🇫🇷 Франц](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонези](../id/README.md)
 [🇮🇹 Итали](../it/README.md)
 [🇯🇵 Япон](../ja/README.md)
 [🇰🇷 Солонгос хэл](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 Польш](../pl/README.md)
 [🇧🇷 Португали](../pt/README.md)
 [🇷🇺 Орос](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Турк](../tr/README.md)
 [🇵🇰 Урду](../ur/README.md)
 [🇻🇳 Вьетнам](../vi/README.md)
 [🇨🇳 Хятад](../zh/README.md)


 **[📚 ... Бүх хэл ...](../README.md)**
 ----

 ### Энэ README орчуулгад асуудал гарсан уу?
 Анхны [README] орчуулга (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 алдаатай байж магадгүй -- *засвар хийхэд таатай байна!* [GitHub дээр татах хүсэлт](https://github.com/cobbzilla/mobiletto/pulls) илгээнэ үү.
 эсвэл та үүнийг хийхэд эвгүй байгаа бол [асуудал нээнэ үү](https://github.com/cobbzilla/mobiletto/issues)

 Орчуулгын талаар шинэ GitHub асуудал үүсгэхдээ дараах зүйлийг хийнэ үү:
 * хуудасны URL-г оруулах (хөтчийн хаягийн мөрөнд хуулах/хуулах)
 * алдаатай текстийг оруулах (хөтөчөөс хуулах/хуулах)
 * юу буруу байгааг тайлбарлана уу -- орчуулга буруу байна уу? формат ямар нэг байдлаар эвдэрсэн үү?
 * Илүү сайн орчуулга эсвэл текстийг хэрхэн зөв форматлах талаар санал болго
 * **Баярлалаа!**

 ## Яагаад Mobiletto гэж?

 ### Баяртай худалдагч түгжээ!
 Төрөл бүрийн үүл хадгалах үйлчилгээ үзүүлэгчид тохирохгүй API-ууд байдаг. "S3 нийцтэй байдал"-ыг эрмэлздэг хүмүүс ч гэсэн
 өвөрмөц зан үйлтэй байдаг.

 Хэрэв та өөрийн аппликейшнд зориулж хадгалах сангийн тодорхой борлуулагчийг сонгохдоо тэдгээрийн API руу шууд кодлох юм бол таны апп
 одоо тэр үйлчилгээнээс хамааралтай болсон. Цаг хугацаа өнгөрөх тусам код хуримтлагдах тусам үйлдвэрлэгчид өөрчлөгддөг
 улам бүр тэвчих боломжгүй болсон. Худалдагчийг түгжих хөгжилтэй ертөнцөд тавтай морилно уу!

 Mobiletto нь энэ асуудлыг шийдэх зорилготой юм. Та өөрийн программыг mobiletto-ийн API-д кодчилсноор хялбархан хийж чадна
 хадгалах үйлчилгээ үзүүлэгчийг сольж, таны апп-ын хадгалах давхарга адилхан ажиллах болно гэдгийг мэдэж аваарай.

 ### Өргөн хүрээний туршилт
 Жолооч бүрд 60 гаруй шалгалт өгч, бүх жолооч нар адилхан зан авиртай эсэхийг шалгадаг.
 Бид бүх жолооч нарыг дараах хослолоор туршиж үздэг.
 * Шифрлэлт: идэвхжүүлсэн болон идэвхгүй болгосон
 * Redis кэш: идэвхжүүлсэн болон идэвхгүй болгосон

 Энэ арга нь та ямар жолооч ашиглаж байгаагаас үл хамааран mobiletto ижилхэн ажиллах болно гэдгийг бидэнд тайвшруулж,
 мөн кэш ба/эсвэл шифрлэлтийг идэвхжүүлсэн эсэхээс үл хамааран.

 ### Жолоочийн дэмжлэг
 Одоогийн Mobiletto хадгалах драйверууд:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : локал файлын систем

 *Илүү олон үүлэн хадгалах үйлчилгээ үзүүлэгчдийг дэмжихэд хувь нэмэр оруулахыг урьж байна!*

 ## mobiletto-cli
 Mobiletto нь бусад JavaScript кодоор номын сан болгон ашиглах зорилготой юм.

 Командын мөрөнд mobiletto-тэй ажиллахын тулд [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)-г ашиглана уу.

 ## Эх сурвалж
 * [GitHub дээрх мобайл](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Дэмжлэг ба санхүүжилт
 Би мэргэжлийн нээлттэй эхийн програм хангамж хөгжүүлэгч болохыг хичээж байна. Би ажиллаж байсан
 Програм хангамжийн салбарт олон жилийн турш би амжилттай компаниудыг байгуулж, олон нийтийн компаниудад зарсан.
 Саяхан би ажлаасаа халагдсан, надад өөр ажил алга

 Тиймээс би хэрэгтэй программ бичихийг оролдоод, энэ нь ажиллах эсэхийг шалгах болно

 Хэрэв та энэ програмыг ашиглах дуртай бол би энэ програмыг ашиглахад маш их талархах болно
 хамгийн бага [Patreon-оор дамжуулан сарын хандив](https://www.patreon.com/cobbzilla)

 *Баярлалаа!*

 ## Суурилуулалт
 `npm` эсвэл `yarn` ашиглан суулгана уу. Та бүх зүйлийг оруулаагүй `lite` хувилбарыг авахыг хүсч байгаа байх
 орчуулсан README файлууд:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Хэрэв та бүх хэл дээрх README файлуудыг үнэхээр хүсч байвал бүрэн хувилбарыг нь суулгана уу:

    npm install mobiletto
    yarn add mobiletto

 ## Хурдан эхлэх
 Mobiletto `s3` драйвер ашиглах богино жишээ.

 Хэрэв драйвер нь `b2` эсвэл `local` local` байсан бол энэ код ижилхэн ажиллах болно.

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
 ## Үндсэн хэрэглээ
 Санал болгож буй функцүүдийн ихэнхийг харуулсан илүү өргөн жишээ:

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

 ## Мета өгөгдөл
 `metadata` команд нь нэг файлын системийн оруулгын мета өгөгдлийг буцаана.
 Үүний нэгэн адил `list` буцах утга нь мета өгөгдлийн объектуудын массив юм.

 Мета өгөгдлийн объект дараах байдалтай байна.

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` шинж чанар нь `file` , `dir` , `link` эсвэл `special` болно.

 Драйверын төрлөөс хамааран `list` команд нь бүх талбарыг буцааж өгөхгүй байж болно. "Нэр `name` ба `type` шинж чанарууд
 үргэлж байх ёстой. Дараагийн `metadata` команд нь боломжтой бүх шинж чанарыг буцаана.

 ## Импортын өөр хэв маяг
 Бүрэн хэмжээний модулийг импортлон `connect` функцийг ашиглана уу:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэш хийх
 Mobiletto нь <a href="https://redis.io">redis</a> кэштэй хамгийн сайн ажилладаг.

 Mobiletto 127.0.0.1:6379 дээр redis instance-д холбогдохыг оролдох болно.

 Та эдгээрийн аль нэгийг нь дарж болно:
 * Localhost-ын оронд энд холбогдохын тулд `MOBILETTO_REDIS_HOST` env var, mobilet-г тохируулна уу
 * `MOBILETTO_REDIS_PORT` env var тохируулбал энэ портыг ашиглах болно

 Mobiletto нь бүх redis түлхүүрээ `_mobiletto__` болно. Та үүнийг өөрчилж болно
 `MOBILETTO_REDIS_PREFIX` env var-ыг тохируулснаар.

 Та мөн `opts.redisConfig` объектоор холболт тус бүрийн кэшийг тохируулж болно:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Redis кэш хийхийг хүсэхгүй байна уу?
 Идэвхгүй болгохын тулд: холболтоо тохируулахдаа `opts.redisConfig` `enabled: false` -г оруулна уу.

 Доор дурьдсанчлан кэшийг идэвхгүй болгох нь гүйцэтгэлд сөргөөр нөлөөлж, илүү олон хүсэлт гаргах болно
 танд үнэхээр хэрэгтэй хадгалах.

 ### Кэш хийх заавар
 **Шифрлэгдсэн хадгалах сан**: шифрлэгдсэн санах ойг унших/бичих нь ердийнхөөс арай удаан,
 гэхдээ лавлахуудын эргэн тойронд (зарим зүйл хийдэг) нэлээн үнэтэй байдаг. Redis кэш ашиглаж байна
 гүйцэтгэлийг мэдэгдэхүйц нэмэгдүүлэх болно.

 Өгөгдмөл кэш нь аюулгүй боловч бичих/хасах олон үйлдэлтэй бол сайн ажиллахгүй.
 Аливаа бичих, устгах үйлдэл нь кэшийг бүхэлд нь хүчингүй болгож, дараагийн уншилтууд нь үүнийг харах болно
 хамгийн сүүлийн үеийн өөрчлөлтүүд.

 ### CLI хэрэгслүүд
 Хэрэв та [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) зэрэг CLI хэрэгслийг ашиглаж байгаа бол
 "mo" командын дуудлагууд үргэлжилдэг тул та `mo` кэшийг идэвхжүүлэх нь гарцаагүй.

 ## Толин тусгал

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` команд нь бүх файлыг нэг гар утаснаас нөгөө рүү нэг удаа хуулах ажлыг гүйцэтгэдэг.
 Энэ нь цаг хугацааны явцад толин тусгалыг арчлах ямар ч процессыг явуулдаггүй. `mirror` командыг дахин ажиллуулна уу
 дутуу файлуудыг синхрончлох.

 `mirror` -аас буцах утга нь хэдэн файл амжилттай болсныг тоологчтой энгийн объект юм
 толин тусгал болон хэдэн файлд алдаа гарсан:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 АНХААРУУЛГА: Том өгөгдлийн багцыг толин тусгал болгох нь маш их цаг хугацаа, зурвасын өргөнийг шаарддаг

 `mirror` дуудлагын семантикийн хувьд заримдаа хэн болохыг ойлгоход төөрөлддөг
 уншигч, зохиолч нь хэн бэ. Үүнийг даалгаврын мэдэгдэл гэж төсөөлөөд үз дээ: "зүүн гар утас"
 нь оноож байгаа зүйл (толин тусгалтай өгөгдөл бичигдсэн), мөн "баруун гар талын mobiletto" (
 `mirror` аргын аргумент) нь оноож буй утга (толин тусгалтай өгөгдлийг уншина).

 ## Ил тод шифрлэлт
 Үйлчлүүлэгч талын ил тод шифрлэлтийг идэвхжүүлэх:

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

 Юу болоод байна? Тусдаа "сангийн оруулга" (шууд) лавлах (шифрлэгдсэн) дотор нь ямар файл байгааг хянадаг
 лавлах (шууд лавлах гэх мэт).
 * `list` команд нь лавлах файлуудыг уншиж, жагсаасан зам бүрийг тайлдаг; дараа нь файл бүрийн мета өгөгдлийг буцаана
 * `list` командууд нь ялангуяа олон тооны файл бүхий лавлахуудад илүү үр ашиггүй байдаг
 * `write` команд нь шууд файлуудыг эцэг эх бүрийн шууд лавлахад рекурсив байдлаар бичдэг; дараа нь файлыг бичнэ
 * `write` командуудад O(N) бичих ба N = лавлахын шатлалын гүн байх болно
 * `remove` команд нь харгалзах шууд файлыг, хэрэв хоосон бол түүний эцэг эхийг рекурсив байдлаар устгадаг; дараа нь файлыг устгана
 * Рекурсив бус `remove` командууд нь O(N) уншигдах ба тэр хэмжээгээр устгагдах ба N = лавлах шатлалын гүнтэй байх болно.
 * Том болон гүн файлын систем дээрх рекурсив `remove` командууд үнэтэй байж болно

 Үйлчлүүлэгч талын шифрлэлтийг идэвхжүүлсэн ч гэсэн дайсан таны шифрлэгдсэн сервер талд бүрэн харагдах боломжтой гэдгийг анхаарна уу.
 Түлхүүргүй байсан ч хадгалах сан нь нийт лавлах тоо, тус бүрд хэдэн файл байгааг харах боломжтой хэвээр байна
 бага зэрэг хүчин чармайлт гаргаж, лавлах шатлалын ерөнхий бүтцийг бүхэлд нь эсвэл заримыг нь олж мэдээрэй.
 *Тэмдэглэл: Аюулгүй байдлыг сайжруулахын тулд харьцангуй тэгш бүтэц ашиглана уу.*
 Дайсан таны шифрлэлтийг бас мэдэхгүй л бол лавлах/файлуудын нэрийг мэдэхгүй байх болно
 түлхүүр эсвэл өөр аргаар шифрлэлтийг амжилттай эвдсэн. Дараа нь бүх бооцоо хасагдана!

 ### Гүйцэтгэл ба кэш
 Шифрлэгдсэн хадгалалтын ажиллагаа удаан байж болно. Рекурсив жагсаалт болон хасалт нь маш удаан байж болно.
 Redis-ээр кэш хийх нь маш их тустай боловч ямар ч бичих эсвэл устгах үед кэш нь цэвэрлэгддэг гэдгийг анхаарна уу.

 ## Түлхүүрийг эргүүлэх
 Шинэ түлхүүрээрээ mobiletto үүсгээд хуучин өгөгдлийг түүн рүү тусгана уу:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Жолоочийн интерфейс
 Драйвер нь энэ гарын үсэг бүхий 'storageClient' функцийг экспортлох аливаа JS файл юм:

    function storageClient (key, secret, opts)

 * `key` : мөр, таны API түлхүүр ("орон `local` драйверын хувьд энэ нь үндсэн лавлах юм)
 * `secret` : мөр, таны API нууц ("орон `local` драйверын хувьд орхигдуулж болно)
 * `opts` : объект, шинж чанарууд нь жолооч тус бүрд байна:
 * `local` local`-ын хувьд `fileMode` болон `dirMode` шинж чанарууд нь шинээр үүсгэх файлууд болон сангуудыг хэрхэн үүсгэхийг тодорхойлдог.
 * `s3` -ын хувьд `bucket` шинж чанар шаардлагатай. Нэмэлт шинж чанарууд нь:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient функцийн буцаадаг объект нь эдгээр функцийг тодорхойлох ёстой:

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

 ## Мод бэлтгэх
 Mobiletto нь [winston](https://www.npmjs.com/package/winston) бүртгэлийн номын санг ашигладаг.

 Бүртгэлд **файлын зам болон алдааны мэдэгдлүүдийг агуулна, гэхдээ **хэзээ ч** түлхүүр, нууц,
 эсвэл бусад холболтын тохиргооны мэдээлэл.

 ### Бүртгэлийн түвшин
 Бүртгэлийн түвшинг тохируулахын тулд `MOBILETTO_LOG_LEVEL` орчны хувьсагчийг ашиглан нэгийг ашиглана уу.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)-д тодорхойлсон `npm` түвшингүүдийн

 Өгөгдмөл түвшин нь `error` юм. Одоогийн байдлаар mobiletto байгаа хэдий ч хамгийн дэлгэрэнгүй түвшин бол `silly` юм
 `debug` доош түвшинд нэвтэрдэггүй

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Бүртгэлийн файл
 Анхдагч байдлаар, бүртгэл хөтлөгч консол руу бичдэг. Лог файл руу илгээхийн тулд `MOBILETTO_LOG_FILE` -г тохируулна уу
 орчны хувьсагч. Файл руу нэвтрэх үед логууд консол дээр бичигдэхээ болино.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Бүртгэлийг унтраахын тулд:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
