Mobiletto
 =========

 Mobiletto minangka lapisan abstraksi panyimpenan JavaScript, kanthi enkripsi sisih klien transparan opsional.

 # Isi
 * [Kenapa Mobiletto?](#Kenapa-Mobiletto?)
 * [Wiwit cepet](#Wiwit cepet)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sumber](#Sumber)
 * [Pasang](#Pasang)
 * [Dhukungan lan Pendanaan](#Support-and-Funding)
 * [Panggunaan dhasar](#Panggunaan dhasar)
 * [Metadata](#Metadata)
 * [Gaya impor alternatif](#Gaya-impor alternatif)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Enkripsi transparan](#Enkripsi-transparan)
 * [Rotasi tombol](#Rotasi tombol)
 * [Antarmuka driver](#Antarmuka driver)
 * [Logging](#Logging)

 # Waca iki ing basa liya
 Dokumen README.md iki wis diterjemahake, liwat [hokeylization](https://github.com/cobbzilla/hokeylization), menyang
 **[saben basa didhukung Google Terjemahan](https://cloud.google.com/translate/docs/languages)!**

 Aku yakin ora sampurna, nanging muga-muga luwih apik tinimbang ora ana!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Jepang](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polandia](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Kabeh Basa ...](../README.md)**
 ----

 ### Apa ana masalah karo terjemahan README iki?
 Terjemahan khusus iki saka [README] asli (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 bisa uga ana cacat -- *koreksi banget ditampa!* Mangga ngirim [panjalukan tarik ing GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 utawa yen sampeyan ora kepenak nglakoni, [mbukak masalah](https://github.com/cobbzilla/mobiletto/issues)

 Nalika sampeyan nggawe masalah GitHub anyar babagan terjemahan, mangga tindakake:
 * kalebu URL kaca (salinan / tempel saka bilah alamat browser)
 * Lebokna teks pas sing salah (salin/tempel saka browser)
 * monggo katrangan apa sing salah -- apa terjemahane salah? format rusak piye wae?
 * nyuwun saran terjemahan sing luwih apik, utawa carane teks kudu diformat kanthi bener
 **Matur nuwun!**

 ## Kenapa Mobiletto?

 ### Pamit vendor lock-in!
 Maneka warna panyedhiya panyimpenan awan duwe API sing ora kompatibel. Malah sing ngupayakake "kompatibilitas S3"
 duweni tingkah laku idiosinkratik.

 Nalika sampeyan milih vendor panyimpenan tartamtu kanggo app, yen kode langsung menyang API, app sampeyan
 saiki gumantung ing layanan kasebut. Minangka wektu liwat lan kode accumulates, ngganti vendor dadi
 sansaya ora bisa ditindakake. Sugeng rawuh ing jagad sing nyenengake vendor lock-in!

 Mobiletto dirancang kanggo ngatasi masalah iki. Kanthi ngodhe app menyang API mobiletto, sampeyan bisa kanthi gampang
 ngganti panyedhiya panyimpenan lan ngerti yen lapisan panyimpenan app bakal tumindak identik.

 ### Pengujian ekstensif
 Kabeh pembalap dites kanggo prilaku sing padha karo 60+ tes kanggo saben pembalap.
 Kita nyoba kabeh pembalap kanthi saben kombinasi:
 * Enkripsi: diaktifake lan dipateni
 * Cache Redis: diaktifake lan dipateni

 Pendekatan iki menehi kita tentrem-of-atine sing mobiletto bakal tumindak padha preduli saka driver sing sampeyan gunakake,
 lan preduli saka apa sampeyan ngaktifake cache lan / utawa enkripsi.

 ### Dhukungan driver
 Driver panyimpenan Mobiletto saiki:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistem berkas lokal

 *Kontribusi kanggo ndhukung panyedhiya panyimpenan awan luwih akeh ditampa!*

 ## mobiletto-cli
 Mobiletto dimaksudake kanggo digunakake minangka perpustakaan dening kode JavaScript liyane.

 Kanggo nggarap mobiletto ing baris perintah, gunakake [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sumber
 * [mobiletto ing GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto ing npm](https://www.npmjs.com/package/mobiletto)

 ## Dhukungan lan Pendanaan
 Aku nyoba dadi pangembang piranti lunak sumber terbuka profesional. Aku wis kerja ing
 industri lunak kanggo akèh taun, Aku wis miwiti perusahaan sukses lan didol menyang perusahaan umum.
 Bubar iki aku kelangan pegaweyan, lan aku ora duwe gaweyan liyane

 Dadi aku bakal nyoba nulis piranti lunak sing migunani lan ndeleng manawa bisa digunakake

 Yen sampeyan seneng nggunakake piranti lunak iki, aku bakal matur nuwun banget kanggo
 paling cilik [kontribusi saben wulan liwat Patreon](https://www.patreon.com/cobbzilla)

 *Matur nuwun!*

 ## Instalasi
 Instal nggunakake `npm` utawa `yarn` . Sampeyan mbokmenawa pengin versi `lite` sing ora kalebu kabeh
 file README sing diterjemahake:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Yen sampeyan pengin file README ing saben basa, instal versi lengkap:

    npm install mobiletto
    yarn add mobiletto

 ## Mulai cepet
 Conto singkat nggunakake driver mobiletto `s3` .

 Kode iki bakal mlaku padha yen driver `b2` utawa `local` .

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
 ## Panggunaan dhasar
 Conto sing luwih akeh, nuduhake umume fitur sing ditawakake:

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
 Printah `metadata` ngasilake metadata babagan entri filesystem siji.
 Kajaba iku, nilai bali saka printah `list` minangka susunan obyek metadata.

 Objek metadata katon kaya iki:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Properti `type` bisa dadi `file` , `dir` , `link` , utawa `special` .

 Gumantung saka jinis driver, printah `list` ora bisa ngasilake kabeh kolom. Properti `name` lan `type`
 kudu tansah ana. Printah `metadata` sabanjure bakal ngasilake kabeh properti sing kasedhiya.

 ## Gaya impor alternatif
 Impor modul lengkap lan gunakake fungsi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto paling apik karo cache <a href="https://redis.io">redis</a> .

 Mobiletto bakal nyoba nyambung menyang conto redis ing 127.0.0.1:6379

 Sampeyan bisa ngganti salah siji saka iki:
 * Setel `MOBILETTO_REDIS_HOST` env var, mobiletto sambung ing kene tinimbang localhost
 * Setel env var `MOBILETTO_REDIS_PORT` , port iki bakal digunakake

 Mobiletto bakal nyimpen kabeh tombol redis kanthi awalan `_mobiletto__` . Sampeyan bisa ngganti iki
 kanthi nyetel `MOBILETTO_REDIS_PREFIX` env var.

 Sampeyan uga bisa nyetel caching saben sambungan nganggo obyek `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ora pengin redis caching?
 Kanggo mateni: pass `enabled: false` ing obyek `opts.redisConfig` nalika sampeyan nggawe sambungan.

 Kaya sing wis dibahas ing ngisor iki, mateni caching bakal duwe pengaruh sing ora becik kanggo kinerja lan entuk panjaluk liyane
 kanggo panyimpenan sing pancene kudu.

 ### Panuntun cache
 **Panyimpenan sing dienkripsi**: panyimpenan sing dienkripsi maca/nulis mung luwih alon tinimbang biasane,
 nanging navigasi ing direktori (sing ditindakake sawetara perkara) cukup larang. Nggunakake cache redis
 bakal menehi ngedongkrak kinerja pinunjul.

 Cache standar aman, nanging ora nindakake kanthi apik yen sampeyan duwe akeh operasi nulis / mbusak.
 Sembarang operasi nulis utawa mbusak invalidates kabeh cache, mesthekake maca sakteruse bakal weruh
 owah-owahan paling anyar.

 ### Alat CLI
 Yen sampeyan nggunakake alat CLI kaya [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 temtunipun sampeyan pengin cache redis diaktifake, amarga tetep ing invocations saka printah `mo` .

 ## Pangilon

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` nindakake salinan siji-wektu kabeh file saka siji mobiletto menyang liyane.
 Ora ana proses kanggo njaga pangilon saka wektu. `mirror` maneh
 kanggo nyinkronake file sing ilang.

 Nilai bali saka `mirror` iku obyek prasaja karo counters carane akeh file sing kasil
 mirrored lan carane akeh file duwe kesalahan:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 PÈNGET: Mirroring set data gedhe bisa banget wektu-akeh lan bandwidth-intensif

 Kanthi semantik panggilan `mirror` kadhangkala bisa mbingungake kanggo mangerteni sapa sing
 pamaca lan sapa panulise. Bayangake kaya pernyataan tugas: "mobiletto kiwa"
 yaiku bab sing ditugasake (data cermin sing ditulis), lan "mobiletto tengen" (ing
 argumen kanggo metode `mirror` ) yaiku nilai sing ditugasake (data cermin diwaca).

 ## Enkripsi transparan
 Aktifake enkripsi sisih klien sing transparan:

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

 Apa sing kedadeyan? Direktori "entri direktori" (dirent) sing kapisah (dienkripsi) nglacak file apa sing ana
 direktori (alias direktori direktori).
 * `list` maca file entri direktori, dekripsi saben path sing kadhaptar; banjur ngasilake metadata kanggo saben file
 * `list` luwih ora efisien, utamane kanggo direktori kanthi jumlah file sing akeh
 * `write` nulis file dirent ing direktori dirent saben wong tuwa, kanthi rekursif; banjur nulis file kasebut
 * `write` bakal entuk O(N) nulis, kanthi N = ambane ing hirarki direktori
 * `remove` mbusak file dirent sing cocog, lan induke yen kosong, rekursif; banjur mbusak file kasebut
 * Printah `remove` non-rekursif bakal entuk O(N) diwaca lan bisa uga bisa dibusak, kanthi N = ambane ing hirarki direktori
 * `remove` rekursif ing sistem file gedhe lan jero bisa uga larang

 Elinga yen sanajan enkripsi sisih klien diaktifake, mungsuh kanthi visibilitas lengkap menyang sisih server sing dienkripsi.
 panyimpenan, malah tanpa tombol, isih bisa ndeleng nomer total direktori lan carane akeh file ing saben, lan karo
 sawetara efforts , nemokake sawetara utawa kabeh struktur sakabèhé saka hirarki direktori.
 *Cathetan: Gunakake struktur sing rata kanggo keamanan sing luwih apik.*
 Mungsuh ora bakal ngerti jeneng direktori / file kajaba dheweke uga ngerti enkripsi sampeyan
 kunci utawa wis kasil retak enkripsi. Kabeh taruhan mati banjur!

 ### Kinerja lan cache
 Operasi ing panyimpenan ndhelik bisa alon. Daftar rekursif lan penghapusan bisa dadi alon banget.
 Caching liwat redis mbantu banget, nanging elinga yen cache disiram nalika nulis utawa mbusak.

 ## Rotasi tombol
 Gawe mobiletto nganggo kunci anyar, banjur kaca data lawas menyang:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Antarmuka driver
 Driver yaiku file JS sing ngekspor fungsi 'storageClient' kanthi tandha iki:

    function storageClient (key, secret, opts)

 * `key` : string, kunci API sampeyan (kanggo driver `local` iki minangka direktori dhasar)
 * `secret` : string, rahasia API sampeyan (bisa diilangi kanggo driver `local` )
 * `opts` : obyek, properti kasebut saben driver:
 * Kanggo `local` , `fileMode` lan `dirMode` nemtokake cara nggawe file lan direktori anyar.
 * Kanggo `s3` , properti `bucket` dibutuhake. Properti opsional yaiku:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Obyek sing bali fungsi storageClient kudu nemtokake fungsi kasebut:

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

 ## Logging
 Mobiletto nggunakake perpustakaan log [winston](https://www.npmjs.com/package/winston).

 Log **bakal** ngemot path file lan pesen kesalahan, nanging bakal **ora tau** ngemot kunci, rahasia,
 utawa informasi konfigurasi sambungan liyane.

 ### Tingkat log
 Gunakake variabel lingkungan `MOBILETTO_LOG_LEVEL` kanggo nyetel level log, nggunakake siji
 saka tingkat `npm` ditetepake ing [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Tingkat standar yaiku `error` . Tingkat paling verbose yaiku `silly` , sanajan saiki mobiletto
 ora mlebu ing tingkat ngisor `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### File log
 Kanthi gawan, logger nulis menyang console. Kanggo ngirim log menyang file, setel `MOBILETTO_LOG_FILE`
 variabel lingkungan. Nalika mlebu menyang file, log ora bakal ditulis maneh ing console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Kanggo mateni logging:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
