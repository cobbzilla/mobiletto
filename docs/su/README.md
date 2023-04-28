Mobiletto
 =========

 Mobiletto mangrupikeun lapisan abstraksi neundeun JavaScript, kalayan énkripsi sisi klien transparan pilihan.

 # Eusi
 * [Naha Mobiletto?](#Naha-Mobiletto?)
 * [Mimitian Gancang](#Mimitian Gancang)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sumber](#Sumber)
 * [Pamasangan](#Pasang)
 * [Rojongan sareng Pembiayaan](#Rojongan-sareng-Dana)
 * [Pamakéan Dasar](#Pamakéan Dasar)
 * [Metadata](#Metadata)
 * [Gaya impor alternatip](#gaya-impor alternatif)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Enkripsi Transparan](#Enkripsi Transparan)
 * [Rotasi konci](#Rotasi konci)
 * [Antarmuka Supir](#Supir-antarmuka)
 * [Logging](#Logging)

 # Baca ieu dina basa sanés
 Dokumén README.md ieu parantos ditarjamahkeun, ngalangkungan [hokeylization](https://github.com/cobbzilla/hokeylization), kana
 **[sagala basa dirojong ku Google Tarjamah](https://cloud.google.com/translate/docs/languages)!**

 Kuring yakin éta teu sampurna, tapi kuring miharep éta leuwih hade tinimbang nanaon!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Basa Sunda](../en/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonésia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Basa Jepang](../ja/README.md)
 [🇰🇷 Koréa](../ko/README.md)
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


 **[📚 ... Sadaya Basa ...](../README.md)**
 ----

 ### Naha aya masalah sareng tarjamahan README ieu?
 Tarjamahan khusus ieu tina [README] asli (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 meureun cacad -- *koreksi pisan wilujeng sumping!* Punten kirimkeun [permintaan tarik dina GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 atanapi upami anjeun teu nyaman ngalakukeun éta, [buka masalah](https://github.com/cobbzilla/mobiletto/issues)

 Lamun anjeun nyieun masalah GitHub anyar ngeunaan tarjamahan, mangga ngalakukeun:
 * kalebet URL halaman (salinan/témpél tina bar alamat browser)
 * kalebet téks anu leres anu salah (salin/témpél tina browser)
 * Punten terangkeun naon anu lepat -- naha tarjamahanna lepat? formatna rusak kumaha bae?
 * punten nawiskeun usulan tarjamahan anu langkung saé, atanapi kumaha téks kedah diformat leres
 * **Hatur nuhun!**

 ## Naha Mobiletto?

 ### Wilujeung seller lock-in!
 Rupa-rupa panyadia panyimpen awan gaduh API anu teu cocog. Malah anu narékahan pikeun "kasaluyuan S3"
 boga paripolah idiosinkratis.

 Lamun anjeun milih ngajual gudang husus pikeun aplikasi Anjeun, lamun kode langsung ka API maranéhna, aplikasi Anjeun
 ayeuna gumantung kana jasa éta. Salaku waktu ngalir jeung kode accumulates, ngarobah ngical paralatan janten
 beuki teu bisa dipertahankeun. Wilujeng sumping di dunya anu pikaresepeun tina vendor lock-in!

 Mobiletto dirancang pikeun ngajawab masalah ieu. Ku coding aplikasi anjeun ka mobiletto urang API, anjeun bisa kalayan gampang
 robih panyadia panyimpen sareng terang yén lapisan panyimpen aplikasi anjeun bakal kalakuanana idéntik.

 ### Tés éksténsif
 Sadaya supir diuji pikeun paripolah anu sami sareng 60+ tés pikeun tiap supir.
 Kami nguji sadaya supir kalayan unggal kombinasi:
 * Énkripsi: duanana diaktipkeun sareng ditumpurkeun
 * Redis cache: duanana diaktipkeun jeung ditumpurkeun

 Pendekatan ieu masihan urang katenangan yén mobiletto bakal kalakuanana sami henteu paduli supir anu anjeun anggo,
 sareng henteu paduli naha anjeun ngaktipkeun cache sareng / atanapi énkripsi.

 ### Pangrojong supir
 Panggerak panyimpen Mobiletto ayeuna:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistem file lokal

 *Kontribusi pikeun ngadukung langkung seueur panyadia panyimpen awan ditampi pisan!*

 ## mobiletto-cli
 Mobiletto dimaksudkeun pikeun dipaké salaku perpustakaan ku kode JavaScript séjén.

 Pikeun damel sareng mobiletto dina garis paréntah, paké [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sumber
 * [mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Rojongan sareng Pembiayaan
 Kuring nyobian janten pamekar software open source profésional. Kuring geus digawé di
 industri software salila sababaraha taun, Kuring geus dimimitian pausahaan suksés jeung dijual ka pausahaan umum.
 Anyar-anyar ieu kuring kaleungitan padamelan, sareng kuring henteu ngagaduhan padamelan anu sanés

 Janten kuring badé nyobian nyerat parangkat lunak anu mangpaat sareng ningali upami éta jalanna

 Upami anjeun resep nganggo parangkat lunak ieu, kuring bakal nganuhunkeun pisan pikeun malah
 pangleutikna [kontribusi bulanan via Patreon](https://www.patreon.com/cobbzilla)

 *Hatur nuhun!*

 ## Pamasangan
 Pasang nganggo `npm` atawa `yarn` . Anjeun panginten hoyong versi `lite` anu henteu kalebet sadayana
 file README ditarjamahkeun:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Upami anjeun hoyong file README dina unggal basa, pasang versi lengkepna:

    npm install mobiletto
    yarn add mobiletto

 ## Mimitian Gancang
 Conto pondok nganggo supir `s3` .

 Kode ieu bakal dijalankeun sami upami supirna `b2` atanapi `local` .

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
 ## Pamakéan dasar
 Conto anu langkung ageung, nunjukkeun seueur fitur anu ditawarkeun:

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

 ## Métadata
 Paréntah `metadata` mulangkeun metadata ngeunaan éntri sistem file tunggal.
 Kitu ogé, nilai mulang tina paréntah `list` mangrupa susunan objék metadata.

 Obyék metadata sapertos kieu:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` bisa jadi `file` , `dir` , `link` , atawa `special` .

 Gumantung kana jinis supir, paréntah `list` moal tiasa mulangkeun sadaya widang. The `name` jeung `type` sipat
 kudu salawasna hadir. Paréntah `metadata` salajengna bakal mulangkeun sadaya sipat anu sayogi.

 ## Gaya impor alternatip
 Impor modul pinuh-scoped tur nganggo fungsi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Cache
 Mobiletto jalan pangalusna kalawan cache <a href="https://redis.io">redis</a> .

 Mobiletto bakal nyobian nyambung ka instansi redis on 127.0.0.1:6379

 Anjeun tiasa nimpa salah sahiji ieu:
 * Setel `MOBILETTO_REDIS_HOST` env var, mobiletto nyambung ka dieu tinimbang localhost
 * Setel env var `MOBILETTO_REDIS_PORT` , port ieu bakal dianggo

 Mobiletto bakal nyimpen sadaya konci redis na nganggo awalan `_mobiletto__` . Anjeun tiasa ngarobah ieu
 ku nyetel `MOBILETTO_REDIS_PREFIX` env var.

 Anjeun ogé tiasa nyetél cache per-konéksi sareng obyék `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Henteu hoyong redis cache?
 Pikeun nganonaktipkeun: `enabled: false` dina obyék `opts.redisConfig` anjeun nalika anjeun netepkeun sambungan anjeun.

 Sapertos anu dibahas di handap, nganonaktipkeun cache bakal gaduh pangaruh anu ngabahayakeun kana kinerja sareng nyababkeun langkung seueur pamundut
 ka gudang nu bener kudu.

 ### Pitunjuk cache
 **Panyimpenan énkripsi**: Panyimpenan énkripsi maca/nulis ngan ukur langkung laun tibatan biasana,
 tapi nganapigasi sabudeureun directories (anu sababaraha hal ngalakukeun) cukup mahal. Ngagunakeun cache redis
 bakal masihan anjeun dorongan kinerja anu signifikan.

 The cache standar geus aman, tapi teu nedunan ogé lamun geus loba nulis / miceun operasi.
 Sagala operasi nulis atawa cabut invalidates sakabéh cache, mastikeun maca saterusna bakal ningali
 parobahan panganyarna.

 ### parabot CLI
 Upami anjeun nganggo alat CLI sapertos [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Anjeun pasti bakal hoyong cache redis diaktipkeun, sabab lumangsung dina invocations tina paréntah `mo` .

 ## Ngeunteung

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Paréntah `mirror` ngalakukeun salinan hiji-waktos sadaya file tina hiji mobiletto ka anu sanés.
 Éta henteu ngajalankeun prosés naon waé pikeun ngajaga eunteung kana waktosna. Jalankeun paréntah `mirror` deui
 pikeun nyingkronkeun file anu leungit.

 Nilai balik ti `mirror` mangrupakeun obyék basajan kalawan counters pikeun sabaraha file anu hasil
 mirrored sareng sabaraha file anu ngagaduhan kasalahan:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 PERHATOSAN: Mirroring set data badag bisa jadi pisan consuming waktu jeung rubakpita-intensif

 Ku `mirror` semantik panggero kadang bisa jadi bingung ngartos saha teh
 pamaca jeung saha nu nulisna. Bayangkeun éta sapertos pernyataan tugas: "mobiletto kénca"
 nyaeta hal anu ditugaskeun ka (data mirrored ditulis), sarta "mobiletto-leungeun katuhu" (the
 argumen kana métode `mirror` ) nyaéta nilai anu ditugaskeun (data mirrored dibaca).

 ## Énkripsi transparan
 Aktipkeun énkripsi sisi klien transparan:

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

 Aya naon? Diréktori "Éntri diréktori" (dirent) anu misah (énkripsi) ngalacak file naon anu aya dina éta
 diréktori (alias diréktori langsung).
 * Paréntah `list` maca file éntri diréktori, ngadekrip unggal jalur anu didaptarkeun; lajeng mulih metadata pikeun tiap file
 * Paréntah `list` langkung teu éfisién, khususna pikeun diréktori anu seueur file
 * Paréntah `write` nyerat file dirent dina diréktori dirent unggal indungna, sacara rekursif; teras nyerat file
 * Paréntah `write` bakal ditanggung O(N) nyerat, kalayan N = jerona dina hirarki diréktori
 * Paréntah `remove` ngahapus file dirent anu saluyu, sareng indungna upami kosong, sacara rekursif; lajeng miceun file
 * Paréntah `remove` non-rekursif bakal ngahasilkeun O(N) maca sareng berpotensi ngahapus, kalayan N = jerona dina hirarki diréktori
 * Paréntah `remove` dina sistem file anu ageung sareng jero tiasa mahal

 Catet yén sanajan énkripsi sisi klien diaktipkeun, musuh anu gaduh visibilitas pinuh kana sisi server énkripsi anjeun.
 gudang, sanajan tanpa konci, masih bisa ningali jumlah total directories na sabaraha file dina unggal, tur kalawan
 sababaraha usaha , manggihan sababaraha atawa sakabéh struktur sakabéh hirarki diréktori.
 *Catetan: Anggo struktur anu kawilang datar pikeun kaamanan anu langkung saé.*
 Musuh moal terang nami diréktori / file kecuali aranjeunna ogé terang énkripsi anjeun
 konci atawa geus disebutkeun hasil retakan enkripsi. Kabéh bets pareum lajeng!

 ### Kinerja sareng cache
 Operasi dina panyimpenan énkripsi tiasa laun. Listing rekursif sareng panyabutan tiasa lambat pisan.
 Caching via redis mantuan tremendously, tapi perhatikeun yén cache ieu flushed kana sagala nyerat atanapi ngahapus.

 ## Rotasi konci
 Jieun mobiletto kalawan konci anyar anjeun, lajeng eunteung data heubeul kana eta:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Antarmuka supir
 Supir mangrupikeun file JS anu ngékspor fungsi 'storageClient' kalayan tanda tangan ieu:

    function storageClient (key, secret, opts)

 * `key` : string, konci API anjeun (pikeun supir `local` ieu diréktori dasar)
 * `secret` : string, rusiah API anjeun (tiasa dileungitkeun pikeun supir `local` )
 * `opts` : hiji obyék, sipatna per-driver:
 * Pikeun `local` , `fileMode` jeung `dirMode` nangtukeun kumaha nyieun file jeung diréktori anyar dijieun.
 * Pikeun `s3` , sipat `bucket` diperlukeun. Sipat opsional nyaéta:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Obyék anu dipulangkeun ku fungsi storageClient kedah nangtukeun fungsi ieu:

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

 ## logging
 Mobiletto ngagunakeun perpustakaan logging [winston](https://www.npmjs.com/package/winston).

 Log ** bakal ** ngandung jalur file sareng pesen kasalahan, tapi bakal ** moal pernah ** ngandung konci, rahasia,
 atanapi inpormasi konfigurasi sambungan anu sanés.

 ### Tingkat log
 Anggo variabel lingkungan `MOBILETTO_LOG_LEVEL` pikeun nyetél tingkat log, nganggo hiji
 tina tingkat `npm` didefinisikeun dina [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Tingkat standar nyaéta `error` . Tingkat paling verbose nyaéta `silly` , sanajan ayeuna mobiletto
 teu asup dina tingkat handap `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Berkas log
 Sacara standar, logger nyerat kana konsol. Pikeun ngirim log ka file, setel `MOBILETTO_LOG_FILE`
 variabel lingkungan. Nalika asup kana file, log moal ditulis deui kana konsol.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Pikeun mareuman logging:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
