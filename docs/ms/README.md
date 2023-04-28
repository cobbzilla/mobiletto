Mobiletto
 =========

 Mobiletto ialah lapisan abstraksi storan JavaScript, dengan penyulitan bahagian pelanggan telus pilihan.

 # Kandungan
 * [Kenapa Mobiletto?](#Why-Mobiletto?)
 * [Quick start](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sumber](#Source)
 * [Pemasangan](#Pemasangan)
 * [Sokongan dan Pembiayaan](#Sokongan-dan-Pembiayaan)
 * [Penggunaan asas](#Penggunaan Asas)
 * [Metadata](#Metadata)
 * [Gaya import ganti](gaya import-ganti)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Penyulitan telus](#penyulitan telus)
 * [Putaran kekunci](#Putaran kekunci)
 * [Antara muka pemandu](#Antara muka Pemandu)
 * [Logging](#Logging)

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, melalui [hokeylization](https://github.com/cobbzilla/hokeylization), ke dalam
 **[setiap bahasa disokong oleh Terjemahan Google](https://cloud.google.com/translate/docs/languages)!**

 Saya pasti ia tidak sempurna, tetapi saya harap ia lebih baik daripada tiada!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Bahasa Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggeris](../ms/README.md)
 [🇪🇸 Bahasa Sepanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Bahasa Jepun](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Poland](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Semua Bahasa ...](../README.md)**
 ----

 ### Adakah terdapat masalah dengan terjemahan README ini?
 Terjemahan khusus [README] asal ini (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mungkin cacat -- *pembetulan amat dialu-alukan!* Sila hantar [permintaan tarik pada GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 atau jika anda tidak selesa berbuat demikian, [buka isu](https://github.com/cobbzilla/mobiletto/issues)

 Apabila anda membuat isu GitHub baharu tentang terjemahan, sila lakukan:
 * sertakan URL halaman (salin/tampal dari bar alamat penyemak imbas)
 * sertakan teks tepat yang salah (salin/tampal dari penyemak imbas)
 * sila terangkan apa yang salah -- adakah terjemahan itu salah? adakah pemformatan rosak entah bagaimana?
 * sila tawarkan cadangan terjemahan yang lebih baik, atau cara teks harus diformat dengan betul
 * **Terima kasih!**

 ## Mengapa Mobiletto?

 ### Selamat tinggal vendor lock-in!
 Pelbagai penyedia storan awan mempunyai API yang tidak serasi. Malah mereka yang berusaha untuk "keserasian S3"
 mempunyai tingkah laku idiosinkratik.

 Apabila anda memilih vendor storan tertentu untuk apl anda, jika anda mengekod terus ke API mereka, apl anda
 kini bergantung kepada perkhidmatan itu. Apabila masa berlalu dan kod terkumpul, menukar vendor menjadi
 semakin tidak dapat dipertahankan. Selamat datang ke dunia yang menyeronokkan vendor lock-in!

 Mobiletto telah direka untuk menyelesaikan masalah ini. Dengan mengekodkan apl anda kepada API mobiletto, anda boleh dengan mudah
 tukar penyedia storan dan ketahui bahawa lapisan storan apl anda akan berkelakuan sama.

 ### Ujian yang meluas
 Semua pemandu diuji untuk tingkah laku yang sama dengan 60+ ujian untuk setiap pemandu.
 Kami menguji semua pemandu dengan setiap kombinasi:
 * Penyulitan: didayakan dan dilumpuhkan
 * Cache Redis: kedua-duanya didayakan dan dilumpuhkan

 Pendekatan ini memberi kami ketenangan fikiran bahawa mobiletto akan berkelakuan sama tanpa mengira pemandu yang anda gunakan,
 dan tidak kira sama ada anda mendayakan caching dan/atau penyulitan.

 ### Sokongan pemandu
 Pemacu storan Mobiletto semasa:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistem fail tempatan

 *Sumbangan untuk menyokong lebih banyak penyedia storan awan amat dialu-alukan!*

 ## mobiletto-cli
 Mobiletto bertujuan untuk digunakan sebagai perpustakaan oleh kod JavaScript lain.

 Untuk bekerja dengan mobiletto pada baris arahan, gunakan [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sumber
 * [mobiletto di GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Sokongan dan Pembiayaan
 Saya cuba menjadi pembangun perisian sumber terbuka profesional. Saya telah bekerja di
 industri perisian selama bertahun-tahun, saya telah memulakan syarikat yang berjaya dan menjualnya kepada syarikat awam.
 Baru-baru ini saya kehilangan pekerjaan, dan saya tidak mempunyai sebarang kerja lain yang disediakan

 Jadi saya akan cuba menulis perisian yang berguna dan melihat sama ada ia berfungsi

 Jika anda gemar menggunakan perisian ini, saya akan sangat berterima kasih kerana
 terkecil [sumbangan bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 *Terima kasih!*

 ## Pemasangan
 Pasang menggunakan `npm` atau `yarn` . Anda mungkin mahu versi `lite` yang tidak termasuk semua
 fail README yang diterjemahkan:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jika anda benar-benar mahukan fail README dalam setiap bahasa, pasang versi penuh:

    npm install mobiletto
    yarn add mobiletto

 ## Permulaan pantas
 Contoh ringkas menggunakan pemacu `s3` .

 Kod ini akan berjalan sama jika pemandu adalah `b2` atau `local` .

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
 ## Penggunaan asas
 Contoh yang lebih meluas, menunjukkan kebanyakan ciri yang ditawarkan:

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
 Perintah `metadata` mengembalikan metadata tentang satu kemasukan sistem fail.
 Begitu juga, nilai pulangan daripada arahan `list` ialah tatasusunan objek metadata.

 Objek metadata kelihatan seperti ini:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Sifat `type` boleh menjadi `file` , `dir` , `link` , atau `special` .

 Bergantung pada jenis pemacu, arahan `list` mungkin tidak mengembalikan semua medan. Sifat `name` dan `type`
 hendaklah sentiasa ada. Perintah `metadata` seterusnya akan mengembalikan semua sifat yang tersedia.

 ## Gaya import ganti
 Import modul berskop sepenuhnya dan gunakan fungsi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto berfungsi paling baik dengan cache <a href="https://redis.io">redis</a> .

 Mobiletto akan cuba menyambung ke contoh redis pada 127.0.0.1:6379

 Anda boleh mengatasi salah satu daripada ini:
 * Tetapkan var env `MOBILETTO_REDIS_HOST` , mobiletto sambung di sini dan bukannya localhost
 * Tetapkan env var `MOBILETTO_REDIS_PORT` , port ini akan digunakan

 Mobiletto akan menyimpan semua kunci redisnya dengan awalan `_mobiletto__` . Anda boleh mengubah ini
 dengan menetapkan var env `MOBILETTO_REDIS_PREFIX` .

 Anda juga boleh menetapkan caching per sambungan dengan objek `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Tidak mahu caching redis?
 Untuk melumpuhkan: `enabled: false` dalam objek `opts.redisConfig` anda apabila anda membuat sambungan anda.

 Seperti yang dibincangkan di bawah, melumpuhkan caching akan memberi kesan buruk pada prestasi dan menimbulkan lebih banyak permintaan
 kepada storan yang anda perlukan.

 ### Panduan caching
 **Storan disulitkan**: membaca/menulis storan disulitkan hanya perlahan sedikit daripada biasa,
 tetapi menavigasi di sekitar direktori (yang dilakukan oleh beberapa perkara) agak mahal. Menggunakan cache redis
 akan memberi anda peningkatan prestasi yang ketara.

 Cache lalai adalah selamat, tetapi tidak berfungsi dengan baik jika anda mempunyai banyak operasi tulis/buang.
 Sebarang operasi tulis atau alih keluar membatalkan keseluruhan cache, memastikan bacaan seterusnya akan melihat
 perubahan terkini.

 ### Alat CLI
 Jika anda menggunakan alat CLI seperti [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 anda pasti mahu cache redis didayakan, kerana ia berlangsung merentasi seruan perintah `mo` .

 ## Mencerminkan

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Arahan `mirror` melakukan salinan satu kali semua fail dari satu mobiletto ke yang lain.
 Ia tidak menjalankan sebarang proses untuk mengekalkan cermin dari semasa ke semasa. Jalankan arahan `mirror` sekali lagi
 untuk menyegerakkan mana-mana fail yang hilang.

 Nilai pulangan daripada `mirror` ialah objek ringkas dengan pembilang untuk bilangan fail yang berjaya
 dicerminkan dan bilangan fail yang mempunyai ralat:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AMARAN: Mencerminkan set data yang besar boleh memakan masa dan intensif lebar jalur

 Dengan semantik panggilan `mirror` kadangkala boleh mengelirukan untuk memahami siapa itu
 pembaca dan siapa penulisnya. Bayangkan ia seperti pernyataan tugasan: "mobiletto kiri"
 ialah perkara yang ditugaskan kepada (data bercermin ditulis), dan "mobiletto kanan" (the
 hujah kepada kaedah `mirror` ) ialah nilai yang diberikan (data bercermin dibaca).

 ## Penyulitan telus
 Dayakan penyulitan sisi pelanggan yang telus:

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

 Apa yang sedang berlaku? Direktori "masukan direktori" (dirent) berasingan (disulitkan) menjejaki fail yang terdapat di dalamnya
 direktori (aka direktori dirent).
 * Perintah `list` membaca fail kemasukan direktori, menyahsulit setiap laluan yang disenaraikan; kemudian mengembalikan metadata untuk setiap fail
 * Arahan `list` adalah lebih tidak cekap, terutamanya untuk direktori dengan bilangan fail yang banyak
 * Perintah `write` menulis fail dirent dalam direktori dirent setiap ibu bapa, secara rekursif; kemudian menulis fail
 * Arahan `write` akan dikenakan O(N) menulis, dengan N = kedalaman dalam hierarki direktori
 * Perintah `remove` mengalih keluar fail dirent yang sepadan, dan induknya jika kosong, secara rekursif; kemudian mengeluarkan fail
 * `remove` bukan rekursif akan dikenakan O(N) bacaan dan berkemungkinan sebanyak pemadaman, dengan N = kedalaman dalam hierarki direktori
 * `remove` rekursif pada sistem fail besar dan dalam boleh jadi mahal

 Ambil perhatian bahawa walaupun dengan penyulitan bahagian klien didayakan, musuh dengan keterlihatan penuh ke bahagian pelayan anda yang disulitkan
 storan, walaupun tanpa kunci, masih boleh melihat jumlah direktori dan bilangan fail dalam setiap satu, dan dengan
 sedikit usaha, temui sebahagian atau semua struktur keseluruhan hierarki direktori.
 *Nota: Gunakan struktur yang agak rata untuk keselamatan yang lebih baik.*
 Pihak lawan tidak akan mengetahui nama direktori/fail melainkan mereka juga mengetahui penyulitan anda
 kunci atau telah berjaya memecahkan penyulitan. Semua pertaruhan dibatalkan!

 ### Prestasi dan caching
 Operasi pada storan yang disulitkan boleh menjadi perlahan. Penyenaraian dan pengalihan keluar rekursif boleh menjadi sangat perlahan.
 Caching melalui redis sangat membantu, tetapi ambil perhatian bahawa cache disiram apabila sebarang penulisan atau dialih keluar.

 ## Putaran kunci
 Buat mobiletto dengan kunci baharu anda, kemudian cerminkan data lama ke dalamnya:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Antara muka pemandu
 Pemacu ialah sebarang fail JS yang mengeksport fungsi 'storageClient' dengan tandatangan ini:

    function storageClient (key, secret, opts)

 * `key` : rentetan, kunci API anda (untuk pemacu `local` ini ialah direktori asas)
 * `secret` : rentetan, rahsia API anda (boleh ditinggalkan untuk pemacu `local` )
 * `opts` : objek, sifatnya adalah per-driver:
 * Untuk `local` , sifat `fileMode` dan `dirMode` menentukan cara membuat fail dan direktori baharu dicipta
 * Untuk `s3` , sifat `bucket` diperlukan. Ciri-ciri pilihan ialah:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objek yang dikembalikan oleh fungsi storageClient mesti menentukan fungsi ini:

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

 ## Pembalakan
 Mobiletto menggunakan perpustakaan pengelogan [winston](https://www.npmjs.com/package/winston).

 Log **akan** mengandungi laluan fail dan mesej ralat, tetapi **tidak akan** mengandungi kunci, rahsia,
 atau sebarang maklumat konfigurasi sambungan lain.

 ### Tahap log
 Gunakan pembolehubah persekitaran `MOBILETTO_LOG_LEVEL` untuk menetapkan tahap log, menggunakan satu
 daripada tahap `npm` yang ditakrifkan dalam [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Tahap lalai ialah `error` . Tahap yang paling bertele-tele ialah `silly` , walaupun pada masa ini mobiletto
 tidak log pada tahap di bawah `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Fail log
 Secara lalai, logger menulis ke konsol. Untuk menghantar log ke fail, tetapkan `MOBILETTO_LOG_FILE`
 pembolehubah persekitaran. Apabila log masuk ke fail, log tidak lagi akan ditulis ke konsol.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Untuk mematikan pengelogan:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
