Mobiletto
 =========

 Mobiletto adalah lapisan abstraksi penyimpanan JavaScript, dengan enkripsi sisi klien transparan opsional.

 # Isi
 * [Mengapa Mobiletto?](#Mengapa-Mobiletto?)
 * [Mulai cepat](#Mulai cepat)
 * [Mobiletto CLI](#mobileto-cli)
 * [Sumber](#Sumber)
 * [Pemasangan](#Pemasangan)
 * [Dukungan dan Pendanaan](#Dukungan-dan-Pendanaan)
 * [Penggunaan dasar](#Penggunaan dasar)
 * [Metadata](#Metadata)
 * [Gaya impor alternatif](#Gaya impor alternatif)
 * [Caching](#Caching)
 * [Pencerminan](#Pencerminan)
 * [Enkripsi transparan](#Enkripsi-transparan)
 * [Rotasi tombol](#Rotasi tombol)
 * [Antarmuka driver](#Driver-antarmuka)
 * [Logging](#Logging)

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, melalui [hokeylization](https://github.com/cobbzilla/hokeylization), ke
 **[setiap bahasa didukung oleh Google Terjemahan](https://cloud.google.com/translate/docs/languages)!**

 Saya yakin itu tidak sempurna, tapi saya harap ini lebih baik daripada tidak sama sekali!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Bahasa Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Bahasa Jepang](../ja/README.md)
 [🇰🇷 Bahasa Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Bahasa Polandia](../pl/README.md)
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

 ### Apakah ada masalah dengan terjemahan README ini?
 Terjemahan khusus dari [README] asli ini(https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mungkin salah -- *koreksi sangat diharapkan!* Silakan kirim [permintaan tarik di GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 atau jika Anda tidak nyaman melakukannya, [buka masalah](https://github.com/cobbzilla/mobiletto/issues)

 Saat Anda membuat masalah GitHub baru tentang terjemahan, lakukan:
 * sertakan URL halaman (salin/tempel dari bilah alamat browser)
 * sertakan teks persis yang salah (salin/tempel dari browser)
 * tolong jelaskan apa yang salah -- apakah terjemahannya salah? apakah formatnya rusak entah bagaimana?
 * mohon menawarkan saran terjemahan yang lebih baik, atau bagaimana teks harus diformat dengan benar
 * **Terima kasih!**

 ## Mengapa Mobiletto?

 ### Selamat tinggal vendor lock-in!
 Berbagai penyedia penyimpanan cloud memiliki API yang tidak kompatibel. Bahkan mereka yang berusaha keras untuk "kompatibilitas S3"
 memiliki perilaku idiosinkratik.

 Saat Anda memilih vendor penyimpanan tertentu untuk aplikasi Anda, jika Anda membuat kode langsung ke API mereka, aplikasi Anda
 sekarang tergantung pada layanan itu. Seiring berjalannya waktu dan kode terakumulasi, mengubah vendor menjadi
 semakin tidak dapat dipertahankan. Selamat datang di dunia penguncian vendor yang menyenangkan!

 Mobiletto dirancang untuk memecahkan masalah ini. Dengan mengkodekan aplikasi Anda ke API selulerto, Anda dapat dengan mudah
 ubah penyedia penyimpanan dan ketahui bahwa lapisan penyimpanan aplikasi Anda akan berperilaku sama.

 ### Pengujian ekstensif
 Semua driver diuji untuk perilaku yang identik dengan 60+ tes untuk setiap driver.
 Kami menguji semua driver dengan setiap kombinasi:
 * Enkripsi: diaktifkan dan dinonaktifkan
 * Cache redis: diaktifkan dan dinonaktifkan

 Pendekatan ini memberi kami ketenangan pikiran bahwa mobiletto akan berperilaku sama terlepas dari driver mana yang Anda gunakan,
 dan terlepas dari apakah Anda mengaktifkan caching dan/atau enkripsi.

 ### Dukungan pengemudi
 Driver penyimpanan Mobileto saat ini:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistem file lokal

 *Kontribusi untuk mendukung lebih banyak penyedia penyimpanan cloud sangat diharapkan!*

 ## mobiletto-cli
 Mobiletto dimaksudkan untuk digunakan sebagai perpustakaan oleh kode JavaScript lainnya.

 Untuk bekerja dengan mobiletto di baris perintah, gunakan [mobiletto-cli](https://www.npmjs.com/package/mobileto-cli)

 ## Sumber
 * [mobiletto di GitHub](https://github.com/cobbzilla/mobileto)
 * [mobiletto di npm](https://www.npmjs.com/package/mobileto)

 ## Dukungan dan Pendanaan
 Saya mencoba menjadi pengembang perangkat lunak sumber terbuka profesional. Saya telah bekerja di
 industri perangkat lunak selama bertahun-tahun, saya telah memulai perusahaan yang sukses dan menjualnya ke perusahaan publik.
 Baru-baru ini saya kehilangan pekerjaan saya, dan saya tidak memiliki pekerjaan lain yang menunggu

 Jadi saya akan mencoba menulis perangkat lunak yang bermanfaat dan melihat apakah itu berhasil

 Jika Anda menikmati menggunakan perangkat lunak ini, saya akan sangat berterima kasih bahkan untuk
 terkecil [kontribusi bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 *Terima kasih!*

 ## Instalasi
 Instal menggunakan `npm` atau `yarn` . Anda mungkin menginginkan versi `lite` yang tidak menyertakan semua
 file README yang diterjemahkan:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jika Anda benar-benar menginginkan file README dalam setiap bahasa, instal versi lengkapnya:

    npm install mobiletto
    yarn add mobiletto

 ## Mulai cepat
 Contoh singkat menggunakan driver `s3` .

 Kode ini akan berjalan sama jika drivernya adalah `b2` atau `local` .

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
 ## Penggunaan dasar
 Contoh yang jauh lebih luas, menunjukkan sebagian besar fitur yang ditawarkan:

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
 Perintah `metadata` mengembalikan metadata tentang satu entri sistem file.
 Demikian juga, nilai kembalian dari perintah `list` adalah larik objek metadata.

 Objek metadata terlihat seperti ini:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Properti `type` dapat berupa `file` , `dir` , `link` , atau `special` .

 Tergantung pada tipe driver, perintah `list` mungkin tidak mengembalikan semua kolom. Properti `name` dan `type`
 harus selalu hadir. Perintah `metadata` berikutnya akan mengembalikan semua properti yang tersedia.

 ## Gaya impor alternatif
 Impor modul cakupan penuh dan gunakan fungsi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto bekerja paling baik dengan cache <a href="https://redis.io">redis</a> .

 Mobileetto akan mencoba menyambung ke instance redis pada 127.0.0.1:6379

 Anda dapat mengganti salah satu dari ini:
 * Setel env var `MOBILETTO_REDIS_HOST` , hubungkan mobiletto di sini alih-alih localhost
 * Atur env var `MOBILETTO_REDIS_PORT` , port ini akan digunakan

 Mobiletto akan menyimpan semua kunci redisnya dengan awalan `_mobiletto__` . Anda dapat mengubah ini
 dengan mengatur `MOBILETTO_REDIS_PREFIX` env var.

 Anda juga dapat menyetel caching per koneksi dengan objek `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Tidak ingin cache redis?
 Untuk menonaktifkan: teruskan `enabled: false` false` di objek `opts.redisConfig` saat Anda membuat koneksi.

 Seperti yang dibahas di bawah, menonaktifkan caching akan berdampak buruk pada kinerja dan menimbulkan lebih banyak permintaan
 untuk penyimpanan yang Anda benar-benar perlu.

 ### Panduan cache
 **Penyimpanan terenkripsi**: membaca/menulis penyimpanan terenkripsi hanya sedikit lebih lambat dari biasanya,
 tetapi menavigasi di sekitar direktori (yang dilakukan beberapa hal) cukup mahal. Menggunakan cache redis
 akan memberi Anda peningkatan kinerja yang signifikan.

 Cache default aman, tetapi tidak berfungsi dengan baik jika Anda memiliki banyak operasi tulis/hapus.
 Setiap operasi tulis atau hapus akan membatalkan seluruh cache, memastikan pembacaan selanjutnya akan melihat
 perubahan terbaru.

 ### alat CLI
 Jika Anda menggunakan alat CLI seperti [mobileto-cli](https://www.npmjs.com/package/mobileto-cli),
 Anda pasti ingin cache redis diaktifkan, karena ini berlangsung di seluruh pemanggilan perintah `mo` .

 ## Mencerminkan

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Perintah `mirror` melakukan salinan satu kali semua file dari satu mobiletto ke mobil lainnya.
 Itu tidak menjalankan proses apa pun untuk mempertahankan cermin dari waktu ke waktu. Jalankan kembali perintah `mirror`
 untuk menyinkronkan file yang hilang.

 Nilai kembalian dari `mirror` adalah objek sederhana dengan penghitung untuk berapa banyak file yang berhasil
 dicerminkan dan berapa banyak file yang memiliki kesalahan:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 PERINGATAN: Mencerminkan kumpulan data besar bisa sangat memakan waktu dan bandwidth-intensif

 Dengan semantik panggilan `mirror` terkadang membingungkan untuk memahami siapa yang
 pembaca dan siapa penulisnya. Bayangkan itu seperti pernyataan tugas: "mobiletto kiri"
 adalah benda yang ditugaskan (data cermin ditulis), dan "mobiletto kanan" (
 argumen ke metode `mirror` ) adalah nilai yang diberikan (data yang dicerminkan dibaca).

 ## Enkripsi transparan
 Aktifkan enkripsi sisi klien transparan:

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

 Apa yang terjadi? Sebuah "entri direktori" terpisah (dirent) direktori (terenkripsi) melacak file apa yang ada di dalamnya
 direktori (alias direktori dirent).
 * Perintah `list` membaca file entri direktori, mendekripsi setiap jalur yang terdaftar; kemudian mengembalikan metadata untuk setiap file
 * Perintah `list` lebih tidak efisien, terutama untuk direktori dengan banyak file
 * Perintah `write` menulis file dirent di direktori dirent masing-masing induk, secara rekursif; kemudian menulis file
 * Perintah `write` akan dikenakan O(N) menulis, dengan N = kedalaman dalam hierarki direktori
 * Perintah `remove` menghapus file dirent yang sesuai, dan induknya jika kosong, secara rekursif; lalu hapus file
 * Perintah `remove` non-rekursif akan menyebabkan O(N) membaca dan berpotensi menghapus sebanyak mungkin, dengan N = kedalaman dalam hierarki direktori
 * Perintah `remove` rekursif pada sistem file besar dan dalam bisa mahal

 Perhatikan bahwa bahkan dengan enkripsi sisi klien diaktifkan, musuh dengan visibilitas penuh ke sisi server terenkripsi Anda
 penyimpanan, bahkan tanpa kunci, masih dapat melihat jumlah total direktori dan berapa banyak file di masing-masing, dan dengan
 beberapa upaya, temukan beberapa atau semua struktur keseluruhan dari hierarki direktori.
 *Catatan: Gunakan struktur yang relatif datar untuk keamanan yang lebih baik.*
 Musuh tidak akan mengetahui nama direktori/file kecuali mereka juga mengetahui enkripsi Anda
 kunci atau telah berhasil memecahkan enkripsi. Semua taruhan dibatalkan!

 ### Performa dan cache
 Operasi pada penyimpanan terenkripsi bisa lambat. Daftar dan penghapusan rekursif bisa sangat lambat.
 Caching melalui redis sangat membantu, tetapi perhatikan bahwa cache dihapus pada setiap penulisan atau penghapusan.

 ## Rotasi kunci
 Buat mobiletto dengan kunci baru Anda, lalu cerminkan data lama ke dalamnya:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Antarmuka pengemudi
 Driver adalah file JS apa pun yang mengekspor fungsi 'storageClient' dengan tanda tangan ini:

    function storageClient (key, secret, opts)

 * `key` : string, kunci API Anda (untuk driver `local` ini adalah direktori dasar)
 * `secret` : string, rahasia API Anda (dapat dihilangkan untuk driver `local` )
 * `opts` : sebuah objek, propertinya adalah per-driver:
 * Untuk `local` , properti `fileMode` dan `dirMode` menentukan cara pembuatan file dan direktori baru
 * Untuk `s3` , properti `bucket` diperlukan. Properti opsional adalah:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objek yang dikembalikan oleh fungsi storageClient harus mendefinisikan fungsi-fungsi ini:

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

 ## Masuk
 Mobiletto menggunakan perpustakaan logging [winston](https://www.npmjs.com/package/winston).

 Log **akan** berisi jalur file dan pesan kesalahan, tetapi **tidak akan pernah** berisi kunci, rahasia,
 atau informasi konfigurasi koneksi lainnya.

 ### Tingkat log
 Gunakan variabel lingkungan `MOBILETTO_LOG_LEVEL` untuk menyetel level log, menggunakan satu
 level `npm` yang ditentukan di [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Tingkat default adalah `error` . Level yang paling bertele-tele adalah `silly` , meskipun saat ini mobiletto
 tidak masuk pada level di bawah `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Berkas log
 Secara default, logger menulis ke konsol. Untuk mengirim log ke file, setel `MOBILETTO_LOG_FILE`
 variabel lingkungan. Saat masuk ke file, log tidak akan lagi ditulis ke konsol.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Untuk mematikan pencatatan:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
