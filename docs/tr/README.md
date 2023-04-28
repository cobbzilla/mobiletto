cep telefonu
 =========

 Mobiletto, isteğe bağlı şeffaf istemci tarafı şifrelemeli bir JavaScript depolama soyutlama katmanıdır.

 # İçindekiler
 * [Neden Mobiletto?](#Neden-Mobiletto?)
 * [Hızlı başlangıç](#Hızlı başlangıç)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Kaynak](#Kaynak)
 * [Kurulum](#Kurulum)
 * [Destek ve Finansman](#Destek-ve-Finansman)
 * [Temel kullanım](#Temel kullanım)
 * [Meta Veri](#Meta Veri)
 * [Alternatif içe aktarma stili](#Alternatif içe aktarma stili)
 * [Önbelleğe Alma](#Önbelleğe Alma)
 * [Yansıtma](#Yansıtma)
 * [Şeffaf şifreleme](#Şeffaf şifreleme)
 * [Anahtar döndürme](#Anahtar döndürme)
 * [Sürücü arayüzü](#Sürücü arayüzü)
 * [Günlük](#Günlük)

 # Bunu başka bir dilde oku
 Bu README.md belgesi [hokeylization](https://github.com/cobbzilla/hokeylization) aracılığıyla şu dile çevrildi:
 **[Google Çeviri tarafından desteklenen her dil](https://cloud.google.com/translate/docs/languages)!**

 Mükemmel olmadığına eminim ama umarım hiç yoktan iyidir!

 [🇸🇦 Arapça](../ar/README.md)
 [🇧🇩 Bengalce](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilizce](../en/README.md)
 [🇪🇸 İspanyolca](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [çiçek](../ha/README.md)
 [🇮🇳 Hintçe](../hi/README.md)
 [🇮🇩 Endonezyaca](../id/README.md)
 [🇮🇷 İtalyanca](../it/README.md)
 [🇯🇵 Japonca](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Lehçe](../pl/README.md)
 [🇧🇷 Portekizce](../pt/README.md)
 [🇷🇺 Rusça](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urduca](../ur/README.md)
 [🇻🇳 Vietnamca](../vi/README.md)
 [🇨🇳 Çince](../zh/README.md)


 **[📚 ... Tüm Diller ...](../README.md)**
 ----

 ### README'nin bu çevirisiyle ilgili bir sorun mu var?
 Orijinal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)'nin bu özel çevirisi
 kusurlu olabilir -- *düzeltmeler memnuniyetle karşılanır!* Lütfen bir [GitHub üzerinden çekme isteği gönderin](https://github.com/cobbzilla/mobiletto/pulls),
 veya bunu yapmaktan çekiniyorsanız [bir sorun açın](https://github.com/cobbzilla/mobiletto/issues)

 Bir çeviriyle ilgili yeni bir GitHub sorunu oluşturduğunuzda lütfen şunları yapın:
 * sayfa URL'sini ekleyin (tarayıcı adres çubuğundan kopyala/yapıştır)
 * yanlış olan metni tam olarak ekleyin (tarayıcıdan kopyala/yapıştır)
 * lütfen neyin yanlış olduğunu açıklayın -- çeviri yanlış mı? biçimlendirme bir şekilde bozuk mu?
 * lütfen daha iyi bir çeviri veya metnin nasıl düzgün biçimlendirilmesi gerektiği konusunda bir öneride bulunun
 * **Teşekkürler!**

 ## Neden Mobiletto?

 ### Elveda satıcı kilidi!
 Çeşitli bulut depolama sağlayıcılarının uyumsuz API'leri vardır. "S3 uyumluluğu" için çabalayanlar bile
 kendine özgü davranışları vardır.

 Uygulamanız için belirli bir depolama satıcısı seçtiğinizde, doğrudan onların API'sine kodlarsanız, uygulamanız
 artık bu hizmete bağımlıdır. Zaman geçtikçe ve kod biriktikçe, değişen satıcılar
 giderek savunulamaz hale geliyor. Satıcı kilitlemenin eğlenceli dünyasına hoş geldiniz!

 Mobiletto bu sorunu çözmek için tasarlandı. Uygulamanızı mobileetto'nun API'sine kodlayarak kolayca yapabilirsiniz.
 depolama sağlayıcılarını değiştirin ve uygulamanızın depolama katmanının aynı şekilde davranacağını bilin.

 ### Kapsamlı testler
 Tüm sürücüler, her sürücü için 60'tan fazla testle aynı davranış için test edilir.
 Tüm sürücüleri aşağıdakilerin her kombinasyonuyla test ediyoruz:
 * Şifreleme: hem etkin hem de devre dışı
 * Redis önbelleği: hem etkin hem de devre dışı

 Bu yaklaşım, hangi sürücüyü kullanırsanız kullanın, mobiletto'nun aynı şekilde davranacağı konusunda bize gönül rahatlığı veriyor,
 ve önbelleğe almayı ve/veya şifrelemeyi etkinleştirip etkinleştirmediğinizden bağımsız olarak.

 ### Sürücü desteği
 Mevcut Mobiletto depolama sürücüleri:
 * `s3` : Amazon S3
 * `b2` : Arkadan Yanan B2
 * `local` : yerel dosya sistemi

 *Daha fazla bulut depolama sağlayıcısını desteklemeye yönelik katkılara açığız!*

 ## mobiletto-cli
 Mobiletto, diğer JavaScript kodları tarafından bir kitaplık olarak kullanılmak üzere tasarlanmıştır.

 Mobiletto ile komut satırında çalışmak için [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) kullanın

 ## Kaynak
 * [GitHub'da mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm'de mobiletto](https://www.npmjs.com/package/mobiletto)

 ## Destek ve Finansman
 Profesyonel bir açık kaynaklı yazılım geliştiricisi olmaya çalışıyorum. çalışıyorum
 yazılım sektöründe uzun yıllar başarılı şirketler kurdum ve bunları halka açık şirketlere sattım.
 Son zamanlarda işimi kaybettim ve sıralanmış başka işim yok

 Bu yüzden yararlı bir yazılım yazmayı deneyeceğim ve işe yarayıp yaramadığını göreceğim.

 Bu yazılımı kullanmaktan zevk alıyorsanız, bunun için bile çok minnettar olurum.
 en küçük [Patreon aracılığıyla aylık katkı](https://www.patreon.com/cobbzilla)

 *Teşekkürler!*

 ## Kurulum
 `npm` veya `yarn` kullanarak kurun. Muhtemelen tüm `lite` sürümünü istiyorsunuz.
 çevrilmiş README dosyaları:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 README dosyalarını gerçekten her dilde istiyorsanız, tam sürümü yükleyin:

    npm install mobiletto
    yarn add mobiletto

 ## Hızlı başlangıç
 Mobiletto `s3` sürücüsünün kullanıldığı kısa bir örnek.

 Bu kod, sürücü `b2` veya `local` .

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
 ## Temel kullanım
 Sunulan özelliklerin çoğunu gösteren çok daha kapsamlı bir örnek:

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

 ## Meta veri
 `metadata` komutu, tek bir dosya sistemi girişiyle ilgili meta verileri döndürür.
 Benzer şekilde, `list` komutundan gelen dönüş değeri, bir meta veri nesneleri dizisidir.

 Bir meta veri nesnesi şöyle görünür:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` özelliği `file` ' , `dir` , `link` veya `special` .

 Sürücünün türüne bağlı olarak, bir `list` komutu tüm alanları döndürmeyebilir. `name` ve `type` özellikleri
 her zaman mevcut olmalıdır. Sonraki bir `metadata` komutu, mevcut tüm özellikleri döndürür.

 ## Alternatif içe aktarma stili
 Tam kapsamlı modülü içe aktarın ve `connect` işlevini kullanın:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Önbelleğe almak
 Mobiletto en iyi <a href="https://redis.io">redis</a> önbelleğiyle çalışır.

 Mobiletto, 127.0.0.1:6379'da bir redis örneğine bağlanmayı deneyecek

 Bunlardan herhangi birini geçersiz kılabilirsiniz:
 * `MOBILETTO_REDIS_HOST` env değişkenini ayarlayın, mobiletto connect localhost yerine buraya
 * `MOBILETTO_REDIS_PORT` env değişkenini ayarlayın, bu port kullanılacaktır

 Mobiletto, tüm redis anahtarlarını `_mobiletto__` ön ekiyle saklayacaktır. bunu değiştirebilirsin
 `MOBILETTO_REDIS_PREFIX` env değişkenini ayarlayarak.

 `opts.redisConfig` bağlantı başına önbelleğe almayı da ayarlayabilirsiniz:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Yeniden önbelleğe almayı istemiyor musunuz?
 Devre dışı bırakmak için: bağlantınızı kurduğunuzda `opts.redisConfig` `enabled: false` ' yazın.

 Aşağıda tartışıldığı gibi, önbelleğe almayı devre dışı bırakmak performans üzerinde olumsuz bir etkiye sahip olacak ve daha fazla istek doğuracaktır.
 gerçekten ihtiyacınız olan depolamaya.

 ### Önbelleğe alma kılavuzu
 **Şifreli depolama**: şifreli depolamayı okuma/yazma normalden biraz daha yavaştır,
 ancak dizinler arasında gezinmek (ki bazı şeyler bunu yapar) oldukça pahalıdır. redis önbelleği kullanma
 size önemli bir performans artışı sağlayacaktır.

 Varsayılan önbellek güvenlidir, ancak çok sayıda yazma/kaldırma işleminiz varsa iyi performans göstermez.
 Herhangi bir yazma veya kaldırma işlemi tüm önbelleği geçersiz kılar ve sonraki okumaların
 son değişiklikler.

 ### CLI araçları
 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) gibi bir CLI aracı kullanıyorsanız,
 `mo` komutunun çağrıları boyunca sürdüğü için kesinlikle redis önbelleğinin etkinleştirilmesini isteyeceksiniz.

 ## Yansıtma

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` komutu, tüm dosyaların bir mobilettodan diğerine tek seferlik bir kopyasını gerçekleştirir.
 Aynayı zaman içinde korumak için herhangi bir işlem çalıştırmaz. `mirror` komutunu tekrar çalıştırın
 eksik dosyaları senkronize etmek için.

 `mirror` dan dönüş değeri, kaç dosyanın başarılı olduğunu gösteren sayaçları olan basit bir nesnedir.
 yansıtıldı ve kaç dosyada hata var:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 UYARI: Büyük veri kümelerini yansıtmak çok zaman alabilir ve bant genişliği açısından yoğun olabilir

 `mirror` çağrı semantiği ile bazen kimin olduğunu anlamak kafa karıştırıcı olabilir.
 okuyucu ve yazar kim. Bunu bir atama ifadesi gibi hayal edin: "sol el mobiletto"
 atanan şeydir (yansıtılmış veri yazılır) ve "sağ el mobiletto" (
 `mirror` yönteminin argümanı) atanan değerdir (yansıtılmış veri okunur).

 ## Şeffaf şifreleme
 Şeffaf istemci tarafı şifrelemeyi etkinleştirin:

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

 Ne oluyor? Ayrı bir "dizin girişi" (dirent) dizini (şifreli), içinde hangi dosyaların olduğunu izler.
 dizin (diğer adıyla dirent dizini).
 * `list` komutu, dizin giriş dosyalarını okur, listelenen her yolun şifresini çözer; sonra her dosya için meta verileri döndürür
 * `list` komutları, özellikle çok sayıda dosya içeren dizinler için daha verimsizdir.
 * `write` komutu dirent dosyalarını her ebeveynin dirent dizinine yinelemeli olarak yazar; sonra dosyayı yazar
 * `write` komutları, dizin hiyerarşisinde N = derinlik ile O(N) yazma işlemine neden olur
 * `remove` komutu karşılık gelen dirent dosyasını ve eğer boşsa ebeveynini tekrar tekrar kaldırır; sonra dosyayı kaldırır
 * Özyinelemeli olmayan `remove` komutları, dizin hiyerarşisinde N = derinlik ile O(N) okuma ve potansiyel olarak birçok silme işlemine neden olur
 * Büyük ve derin dosya sistemlerinde özyinelemeli `remove` komutları pahalı olabilir

 İstemci tarafı şifreleme etkin olsa bile, şifrelenmiş sunucu tarafınıza tam görünürlük sağlayan bir düşman olduğunu unutmayın.
 depolama, anahtar olmadan bile, toplam dizin sayısını ve her birinde kaç dosya olduğunu görebilir ve
 biraz çaba, dizin hiyerarşisinin genel yapısının bir kısmını veya tamamını keşfedin.
 *Not: Daha iyi güvenlik için nispeten düz bir yapı kullanın.*
 Düşman, şifrelemenizi de bilmedikçe dizinlerin/dosyaların adlarını bilemez.
 veya şifrelemeyi başka bir şekilde başarıyla kırmıştır. O zaman tüm bahisler kapalı!

 ### Performans ve önbelleğe alma
 Şifreli depolamadaki işlemler yavaş olabilir. Özyinelemeli listelemeler ve kaldırma işlemleri çok yavaş olabilir.
 Redis yoluyla önbelleğe alma çok yardımcı olur, ancak herhangi bir yazma veya kaldırma işleminde önbelleğin temizlendiğini unutmayın.

 ## Anahtar döndürme
 Yeni anahtarınızla bir mobiletto oluşturun, ardından eski verileri ona yansıtın:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Sürücü arayüzü
 Sürücü, bu imzayla bir 'storageClient' işlevini dışa aktaran herhangi bir JS dosyasıdır:

    function storageClient (key, secret, opts)

 * `key` : bir dize, API anahtarınız ( `local` sürücü için bu temel dizindir)
 * `secret` : bir dize, API sırrınız ( `local` sürücü için atlanabilir)
 * `opts` : bir nesne, özellikler sürücü başınadır:
 * `local` için, `fileMode` ' ve `dirMode` özellikleri, yeni oluşturma dosyalarının ve dizinlerinin nasıl oluşturulacağını belirler
 * `s3` için `bucket` özelliği gereklidir. İsteğe bağlı özellikler şunlardır:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 StorageClient işlevinin döndürdüğü nesne şu işlevleri tanımlamalıdır:

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

 ## Kerestecilik
 Mobiletto, [winston](https://www.npmjs.com/package/winston) günlük kitaplığını kullanır.

 Günlükler **dosya yollarını ve hata mesajlarını içerir**, ancak **asla** anahtarları, sırları,
 veya diğer bağlantı yapılandırma bilgileri.

 ### Günlük düzeyi
 Günlük seviyesini ayarlamak için `MOBILETTO_LOG_LEVEL` ortam değişkenini kullanın.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) içinde tanımlanan `npm` düzeylerinin

 Varsayılan düzey `error` . Şu anda mobiletto olmasına rağmen, en ayrıntılı düzey `silly` aptalca'dır.
 `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log dosyası
 Varsayılan olarak, günlükçü konsola yazar. Günlükleri bir dosyaya göndermek için `MOBILETTO_LOG_FILE`
 Çevre değişkeni. Bir dosyada oturum açarken, günlükler artık konsola yazılmaz.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Günlüğe kaydetmeyi kapatmak için:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
