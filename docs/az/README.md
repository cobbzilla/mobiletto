Mobiletto
 =========

 Mobiletto isteğe bağlı şəffaf müştəri tərəfi şifrələməsi ilə JavaScript yaddaş abstraksiya qatıdır.

 # Məzmun
 * [Niyə Mobiletto?](#Why-Mobiletto?)
 * [Quick start](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Mənbə](#Mənbə)
 * [Quraşdırma](#Quraşdırma)
 * [Dəstək və Maliyyələşdirmə](#Dəstək və Maliyyələşdirmə)
 * [Əsas istifadə](#Basic-istifadə)
 * [Metadata](#Metadata)
 * [Alternativ idxal üslubu](#Alternativ idxal stili)
 * [Keşləmə](#Keşləmə)
 * [Yansıtma](#Aynatma)
 * [Şəffaf şifrələmə](#Şəffaf-şifrələmə)
 * [Açarların fırlanması](#Açarların fırlanması)
 * [Sürücü interfeysi](#Sürücü interfeysi)
 * [Giriş](#Giriş)

 # Bunu başqa dildə oxuyun
 Bu README.md sənədi [hokeylization](https://github.com/cobbzilla/hokeylization) vasitəsilə tərcümə olunub
 **[Google Translate tərəfindən dəstəklənən bütün dillər](https://cloud.google.com/translate/docs/languages)!**

 Əminəm ki, mükəmməl deyil, amma ümid edirəm ki, heç nədən yaxşıdır!

 [🇸🇦 Ərəb](../ar/README.md)
 [🇧🇩 Benqal dili](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilis dili](../en/README.md)
 [🇪🇸 İspan](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 İndoneziya dili](../id/README.md)
 [🇮🇹 İtalyanca](../it/README.md)
 [🇯🇵 Yapon](../ja/README.md)
 [🇰🇷 Koreya](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polyak](../pl/README.md)
 [🇧🇷 Portuqal dili](../pt/README.md)
 [🇷🇺 Rus dili](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Taqaloq](../tl/README.md)
 [🇹🇷 Türkcə](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vyetnam dili](../vi/README.md)
 [🇨🇳 Çin](../zh/README.md)


 **[📚 ... Bütün Dillər ...](../README.md)**
 ----

 ### README-nin bu tərcüməsində problem varmı?
 Orijinalın bu xüsusi tərcüməsi [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 qüsurlu ola bilər -- *düzəlişlər çox xoşdur!* Lütfən, [GitHub-da çəkmə sorğusu] göndərin (https://github.com/cobbzilla/mobiletto/pulls),
 və ya bunu etməkdə rahat deyilsinizsə, [məsələ açın](https://github.com/cobbzilla/mobiletto/issues)

 Tərcümə ilə bağlı yeni GitHub məsələsi yaratdığınız zaman, lütfən:
 * səhifənin URL-ni daxil edin (brauzerin ünvan çubuğundan kopyalayın/yapışdırın)
 * səhv olan mətni daxil edin (brauzerdən kopyalayın/yapışdırın)
 * zəhmət olmasa nəyin səhv olduğunu təsvir edin -- tərcümə səhvdir? formatlama birtəhər pozuldu?
 * lütfən daha yaxşı tərcümə təklifi və ya mətnin düzgün formatlaşdırılması ilə bağlı təklif verin
 * **Çox sağ ol!**

 ## Niyə Mobiletto?

 ### Əlvida satıcı kilidi!
 Müxtəlif bulud saxlama təminatçıları uyğun olmayan API-lərə malikdir. Hətta "S3 uyğunluğu" üçün səy göstərənlər
 özünəməxsus davranışlara malikdir.

 Tətbiqiniz üçün xüsusi yaddaş təchizatçısı seçdiyiniz zaman, birbaşa onların API-sinə kodlasanız, tətbiqiniz
 indi həmin xidmətdən asılıdır. Zaman keçdikcə və kod yığıldıqca dəyişən satıcılar olur
 getdikcə dözülməz olur. Satıcı kilidinin əyləncəli dünyasına xoş gəlmisiniz!

 Mobiletto bu problemi həll etmək üçün hazırlanmışdır. Tətbiqinizi mobiletto-nun API-yə kodlaşdırmaqla siz asanlıqla edə bilərsiniz
 yaddaş provayderlərini dəyişdirin və tətbiqinizin yaddaş təbəqəsinin eyni şəkildə davranacağını bilin.

 ### Geniş sınaq
 Bütün sürücülər hər bir sürücü üçün 60+ testlə eyni davranış üçün sınaqdan keçirilir.
 Biz bütün sürücüləri hər kombinasiya ilə sınaqdan keçiririk:
 * Şifrələmə: həm aktiv, həm də əlil
 * Redis keşi: həm aktiv, həm də qeyri-aktivdir

 Bu yanaşma bizə rahatlıq verir ki, hansı sürücüdən istifadə etməyinizdən asılı olmayaraq mobiletto eyni davranacaq.
 və keşləmə və/yaxud şifrələməni aktiv edib etməməyinizdən asılı olmayaraq.

 ### Sürücü dəstəyi
 Cari Mobiletto yaddaş sürücüləri:
 * `s3` : Amazon S3
 * `b2` : arxa yanma B2
 * `local` : yerli fayl sistemi

 *Daha çox bulud saxlama təminatçılarını dəstəkləmək üçün töhfələr çox xoşdur!*

 ## mobiletto-cli
 Mobiletto digər JavaScript kodu ilə kitabxana kimi istifadə olunmaq üçün nəzərdə tutulub.

 Komanda xəttində mobiletto ilə işləmək üçün [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) istifadə edin.

 ## Mənbə
 * [GitHub-da mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm-də mobiletto](https://www.npmjs.com/package/mobiletto)

 ## Dəstək və Maliyyələşdirmə
 Mən peşəkar açıq mənbə proqram təminatı tərtibatçısı olmağa çalışıram. məndə işləmişəm
 Uzun illər proqram sektorunda müvəffəqiyyətli şirkətlər qurdum və onları açıq şirkətlərə satdım.
 Bu yaxınlarda işimi itirdim və başqa işim yoxdur

 Beləliklə, mən faydalı proqram yazmağa çalışacağam və bunun işlədiyini görəcəyəm

 Bu proqramdan istifadə etməkdən zövq alırsınızsa, mən hətta bu proqram üçün çox minnətdar olaram
 ən kiçik [Patreon vasitəsilə aylıq töhfə](https://www.patreon.com/cobbzilla)

 *Çox sağ ol!*

 ## Quraşdırma
 `npm` və ya `yarn` istifadə edərək quraşdırın. Siz yəqin ki, hamısını daxil etməyən `lite` versiyasını istəyirsiniz
 tərcümə edilmiş README faylları:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Həqiqətən hər dildə README fayllarını istəyirsinizsə, tam versiyanı quraşdırın:

    npm install mobiletto
    yarn add mobiletto

 ## Tez Başlanğıc
 mobiletto `s3` sürücüsündən istifadə edən qısa bir nümunə.

 Sürücü `b2` və ya `local` olsaydı, bu kod eyni işləyəcəkdi.

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
 ## Əsas istifadə
 Təklif olunan xüsusiyyətlərin əksəriyyətini göstərən daha geniş bir nümunə:

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
 `metadata` əmri bir fayl sistemi girişi haqqında metadata qaytarır.
 Eynilə, `list` əmrindən qaytarılan dəyər metadata obyektlərinin massividir.

 Metadata obyekti belə görünür:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` xüsusiyyəti `file` , `dir` , `link` və ya `special` ola bilər.

 Sürücünün növündən asılı olaraq, `list` əmri bütün sahələri qaytarmaya bilər. `name` və `type` xassələri
 həmişə mövcud olmalıdır. Sonrakı `metadata` əmri bütün mövcud xassələri qaytaracaq.

 ## Alternativ idxal üslubu
 Tam əhatəli modulu idxal edin və `connect` funksiyasından istifadə edin:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Keşləmə
 Mobiletto <a href="https://redis.io">redis</a> keşi ilə yaxşı işləyir.

 Mobiletto 127.0.0.1:6379-da redis instansiyasına qoşulmağa çalışacaq.

 Bunlardan hər hansı birini ləğv edə bilərsiniz:
 * Localhost əvəzinə buraya qoşulmaq üçün `MOBILETTO_REDIS_HOST` var, mobilet seçin
 * `MOBILETTO_REDIS_PORT` var seçin, bu port istifadə olunacaq

 Mobiletto bütün redis açarlarını `_mobiletto__` prefiksi ilə saxlayacaq. Bunu dəyişə bilərsiniz
 `MOBILETTO_REDIS_PREFIX` var.

 Siz həmçinin `opts.redisConfig` obyekti ilə hər qoşulma keşini təyin edə bilərsiniz:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Redis caching istəmirsiniz?
 Deaktiv etmək üçün `opts.redisConfig` obyektinizdə `enabled: false` ' düyməsini keçirin.

 Aşağıda müzakirə edildiyi kimi, keşləşdirməni söndürmək performansa mənfi təsir göstərəcək və daha çox sorğuya səbəb olacaq
 həqiqətən ehtiyacınız olan saxlama üçün.

 ### Keşləmə təlimatı
 **Şifrələnmiş yaddaş**: şifrələnmiş yaddaşın oxunması/yazılması normaldan bir qədər yavaşdır,
 lakin kataloqlar ətrafında naviqasiya (bəzi şeylər bunu edir) kifayət qədər bahalıdır. Redis keşindən istifadə
 sizə əhəmiyyətli performans təkan verəcək.

 Defolt keş təhlükəsizdir, lakin çoxlu yazma/silmə əməliyyatlarınız varsa, yaxşı işləmir.
 İstənilən yazma və ya silmə əməliyyatı bütün önbelleği etibarsız edir və sonrakı oxunuşların görəcəyini təmin edir
 son dəyişikliklər.

 ### CLI alətləri
 Əgər [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) kimi bir CLI alətindən istifadə edirsinizsə,
 siz mütləq redis keşinin aktiv olmasını istəyəcəksiniz, çünki o, `mo` əmrinin çağırışları arasında davam edir.

 ## Yansıtma

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` əmri bütün faylların bir mobildən digərinə birdəfəlik surətini çıxarır.
 Zamanla güzgü saxlamaq üçün heç bir proses işlətmir. `mirror` əmrini yenidən yerinə yetirin
 itkin faylları sinxronlaşdırmaq üçün.

 `mirror` -dən qaytarılan dəyər neçə faylın uğurla alındığını göstərən sayğacları olan sadə obyektdir
 yansıtılmış və neçə faylda xəta var:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 XƏBƏRDARLIQ: Böyük məlumat dəstlərinin əks etdirilməsi çox vaxt aparan və bant genişliyi tələb edə bilər

 `mirror` çağırış semantikası ilə kimin olduğunu anlamaq bəzən çaşqın ola bilər
 oxucu və yazıçı kimdir. Bunu bir tapşırıq bəyanatı kimi təsəvvür edin: "sol əl mobiltto"
 təyin olunan şeydir (yazılan güzgü məlumatı) və "sağ tərəfdən mobiletto" (
 `mirror` metodunun arqumenti) təyin olunan dəyərdir (güzgü məlumatı oxunur).

 ## Şəffaf şifrələmə
 Müştəri tərəfində şəffaf şifrələməni aktivləşdirin:

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

 Nə baş verir? Ayrı bir "kataloq girişi" (birbaşa) kataloq (şifrlənmiş) orada hansı faylların olduğunu izləyir
 kataloq (aka dirent kataloq).
 * `list` əmri kataloqa daxil olan faylları oxuyur, sadalanan hər yolun şifrəsini açır; sonra hər bir fayl üçün metadata qaytarır
 * `list` əmrləri xüsusilə çox sayda faylı olan qovluqlar üçün daha səmərəsizdir
 * `write` əmri rekursiv şəkildə hər bir valideynin dirent kataloquna dirent faylları yazır; sonra faylı yazır
 * `write` əmrləri qovluq iyerarxiyasında N = dərinlik ilə O(N) yazılarına səbəb olacaq
 * `remove` əmri müvafiq dirent faylı və onun əsas faylını boşdursa, rekursiv şəkildə silir; sonra faylı silir
 * Qeyri-rekursiv `remove` əmrləri O(N) oxumağa və potensial olaraq bir o qədər çox silməyə səbəb olacaq, N = kataloq iyerarxiyasında dərinlik
 * Böyük və dərin fayl sistemlərində `remove` əmrləri bahalı ola bilər

 Nəzərə alın ki, hətta müştəri tərəfində şifrələmə aktiv olsa belə, şifrələnmiş server tərəfinizdə tam görünən bir rəqib
 yaddaş, açar olmadan belə, yenə də qovluqların ümumi sayını və hər birində neçə fayl olduğunu görə bilər
 bir az səy göstərin, kataloq iyerarxiyasının ümumi strukturunun bir hissəsini və ya hamısını kəşf edin.
 *Qeyd: Daha yaxşı təhlükəsizlik üçün nisbətən düz strukturdan istifadə edin.*
 Rəqib şifrləmənizi bilməsə, kataloqların/faylların adlarını bilməyəcək
 açarı və ya şifrələməni müvəffəqiyyətlə sındırıb. O zaman bütün mərclər dayandırılır!

 ### Performans və keşləmə
 Şifrələnmiş yaddaşda əməliyyatlar yavaş ola bilər. Rekursiv siyahılar və silinmələr çox yavaş ola bilər.
 Redis vasitəsilə keşləmə çox kömək edir, lakin qeyd edin ki, hər hansı yazı və ya silinmə zamanı keş silinir.

 ## Açarın fırlanması
 Yeni açarınızla mobiletto yaradın, sonra köhnə məlumatları ona əks etdirin:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Sürücü interfeysi
 Sürücü bu imza ilə 'storageClient' funksiyasını ixrac edən istənilən JS faylıdır:

    function storageClient (key, secret, opts)

 * `key` : sətir, sizin API açarınız ( `local` sürücü üçün bu əsas kataloqdur)
 * `secret` : sətir, sizin API sirriniz ( `local` sürücü üçün buraxıla bilər)
 * `opts` : obyekt, xassələr hər sürücü üçün:
 * `local` üçün `fileMode` və `dirMode` xassələri yeni yaradılan fayl və qovluqların necə yaradıldığını müəyyən edir.
 * `s3` üçün `bucket` xüsusiyyəti tələb olunur. İsteğe bağlı xüsusiyyətlər bunlardır:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient funksiyasının qaytardığı obyekt bu funksiyaları müəyyən etməlidir:

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

 ## Giriş
 Mobiletto [winston](https://www.npmjs.com/package/winston) giriş kitabxanasından istifadə edir.

 Qeydlər **fayl yollarını və səhv mesajlarını ehtiva edəcək, lakin **heç vaxt** açarları, sirləri,
 və ya hər hansı digər əlaqə konfiqurasiyası məlumatı.

 ### Qeyd səviyyəsi
 Birindən istifadə edərək jurnal səviyyəsini təyin etmək üçün `MOBILETTO_LOG_LEVEL` mühit dəyişənindən istifadə edin
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) saytında müəyyən edilmiş `npm` səviyyələrinin

 Defolt səviyyə `error` . Hal-hazırda mobiletto olsa da, ən ətraflı səviyyə `silly` '
 `debug` aşağı səviyyələrdə daxil olmur

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Günlük faylı
 Varsayılan olaraq, logger konsola yazır. Qeydləri fayla göndərmək üçün `MOBILETTO_LOG_FILE`
 mühit dəyişəni. Fayla daxil olarkən loglar artıq konsola yazılmayacaq.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Girişi söndürmək üçün:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
