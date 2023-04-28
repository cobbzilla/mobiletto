Mobiletto
 =========

 Mobiletto se yon kouch abstraksyon depo JavaScript, ak si ou vle chifreman transparan bò kliyan.

 # Kontni
 * [Poukisa Mobiletto?](#Poukisa-Mobiletto?)
 * [Kòmanse rapid](#Kòmanse rapid)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sous](#Sous)
 * [Enstalasyon](#Enstalasyon)
 * [Sipò ak Finansman](#Sipò-ak-Finansman)
 * [Itilizasyon debaz](#Itilizasyon debaz)
 * [Metadone](#Metadone)
 * [Altènatif enpòte style](#Altènatif-enpòte-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparan chifreman](#Transparent-chiffrement)
 * [Wotasyon kle](#Kle-wotasyon)
 * [Koòdone chofè](#Driver-koòdone)
 * [Logging](#Logging)

 # Li sa nan yon lòt lang
 Dokiman README.md sa a te tradui, atravè [hokeylization](https://github.com/cobbzilla/hokeylization), nan
 **[chak lang Google Translate sipòte](https://cloud.google.com/translate/docs/languages)!**

 Mwen sèten li pa pafè, men mwen espere ke li pi bon pase anyen!

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alman](../de/README.md)
 [🇺🇸 Angle](../en/README.md)
 [🇪🇸 Panyòl](../es/README.md)
 [🇫🇷 Franse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Endonezyen](../id/README.md)
 [🇮🇹 Italyen](../it/README.md)
 [🇯🇵 Japonè](../ja/README.md)
 [🇰🇷 Koreyen](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonè](../pl/README.md)
 [🇧🇷 Pòtigè](../pt/README.md)
 [🇷🇺 Ris](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tik](../tr/README.md)
 [🇵🇰 Oudou](../ur/README.md)
 [🇻🇳 Vyetnamyen](../vi/README.md)
 [🇨🇳 Chinwa](../zh/README.md)


 **[📚 ... Tout Lang ...](../README.md)**
 ----

 ### Èske gen yon pwoblèm ak tradiksyon README sa a?
 Tradiksyon patikilye sa a orijinal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ka gen defo -- *koreksyon yo trè akeyi!* Tanpri voye yon [pull demand sou GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 oswa si w pa konfòtab pou w fè sa, [louvri yon pwoblèm](https://github.com/cobbzilla/mobiletto/issues)

 Lè ou kreye yon nouvo pwoblèm GitHub sou yon tradiksyon, tanpri fè:
 * enkli URL paj la (kopi/kole nan ba adrès navigatè a)
 * enkli tèks egzak ki mal (kopi/kole nan navigatè a)
 * Tanpri dekri sa ki mal -- èske tradiksyon an pa kòrèk? se fòma a kase yon jan kanmenm?
 * Tanpri ofri yon sijesyon sou yon pi bon tradiksyon, oswa ki jan tèks la ta dwe byen fòma
 * **Mèsi!**

 ## Poukisa Mobiletto?

 ### Orevwa machann lock-in!
 Divès kalite founisè depo nwaj yo gen API enkonpatib. Menm moun ki fè efò pou "S3 konpatibilite"
 gen konpòtman idiosinkratik.

 Lè w chwazi yon machann depo patikilye pou aplikasyon w lan, si w kode dirèkteman nan API yo, aplikasyon w lan
 se kounye a depann sou sèvis sa a. Kòm tan ap pase ak kòd akimile, chanje fournisseurs vin
 de pli zan pli insoutenab. Byenveni nan mond lan amizan nan fèmen vandè!

 Mobiletto te fèt pou rezoud pwoblèm sa a. Lè w kode aplikasyon w lan nan API mobiletto a, ou ka fasilman
 chanje founisè depo epi konnen ke kouch depo app ou a ap konpòte menm jan an.

 ### Tès vaste
 Tout chofè yo teste pou konpòtman ki idantik ak plis pase 60 tès pou chak chofè.
 Nou teste tout chofè ak tout konbinezon de:
 * Chifre: tou de aktive ak enfim
 * Redis kachèt: tou de aktive ak enfim

 Apwòch sa a ban nou lapè-of-espri ke mobiletto pral konpòte menm jan kèlkeswa chofè ou itilize,
 ak kèlkeswa si ou pèmèt kachèt ak/oswa chifreman.

 ### Sipò chofè
 Chofè depo Mobiletto aktyèl yo:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistèm dosye lokal

 *Kontribisyon pou sipòte plis founisè depo nwaj yo trè akeyi!*

 ## mobiletto-cli
 Mobiletto fèt pou itilize kòm yon bibliyotèk pa lòt kòd JavaScript.

 Pou travay ak mobiletto nan liy lòd la, sèvi ak [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sous
 * [mobiletto sou GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto sou npm](https://www.npmjs.com/package/mobiletto)

 ## Sipò ak Finansman
 Mwen eseye vin yon pwofesyonèl devlopè lojisyèl sous louvri. Mwen te travay nan
 endistri a lojisyèl pou anpil ane, mwen te kòmanse konpayi siksè ak vann yo bay konpayi piblik yo.
 Dènyèman mwen pèdi travay mwen, e mwen pa vrèman gen okenn lòt travay ki aliye

 Se konsa, mwen pral eseye ekri lojisyèl itil epi wè si sa ap travay

 Si ou renmen itilize lojisyèl sa a, mwen ta trè rekonesan pou menm a
 pi piti [kontribisyon chak mwa atravè Patreon](https://www.patreon.com/cobbzilla)

 *Mèsi!*

 ## Enstalasyon
 Enstale lè l sèvi avèk `npm` oswa `yarn` . Ou pwobableman vle vèsyon an `lite` ki pa gen ladann tout
 dosye README tradui:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Si ou reyèlman vle dosye README yo nan tout lang, enstale vèsyon konplè a:

    npm install mobiletto
    yarn add mobiletto

 ## Kòmanse rapid
 Yon egzanp kout lè l sèvi avèk chofè mobiletto `s3` .

 Kòd sa a ta kouri menm si chofè a te `b2` oswa `local` .

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
 ## Itilizasyon debaz
 Yon egzanp pi plis vaste, ki montre pi fò nan karakteristik yo ofri:

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
 Kòmand `metadata` la retounen metadata sou yon sèl antre sistèm fichye.
 Menm jan an tou, valè retounen nan lòd `list` la se yon etalaj de objè metadata.

 Yon objè metadata sanble sa a:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Pwopriyete `type` a kapab `file` , `dir` , `link` , oswa `special` .

 Tou depan de kalite chofè a, yon lòd `list` ka pa retounen tout jaden yo. Pwopriyete `name` ak `type`
 ta dwe toujou prezan. Yon lòd `metadata` ki vin apre ap retounen tout pwopriyete ki disponib yo.

 ## Altène style enpòte
 Enpòte modil totalman an epi sèvi ak fonksyon `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Cache
 Mobiletto travay pi byen ak yon kachèt <a href="https://redis.io">redis</a> .

 Mobiletto pral eseye konekte ak yon egzanp redis sou 127.0.0.1:6379

 Ou ka depase youn nan sa yo:
 * Mete `MOBILETTO_REDIS_HOST` env var, mobiletto konekte isit la olye de localhost
 * Mete `MOBILETTO_REDIS_PORT` env var, pò sa a pral itilize

 Mobiletto pral estoke tout kle redis li yo ak prefiks `_mobiletto__` . Ou ka chanje sa
 pa mete `MOBILETTO_REDIS_PREFIX` env var.

 Ou kapab tou mete kach pou chak koneksyon ak objè `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ou pa vle redis kachèt?
 Pou enfim: pase `enabled: false` nan objè `opts.redisConfig` ou lè ou etabli koneksyon ou.

 Jan yo diskite pi ba a, enfimite kachèt pral gen yon efè negatif sou pèfòmans ak antrene plis demann
 nan depo ke ou reyèlman bezwen.

 ### Kache konsèy
 **Depo kode**: lekti/ekri depo kode se sèlman yon ti kras pi dousman pase nòmal,
 men navige nan repèrtwar (ki kèk bagay fè) se jistis chè. Sèvi ak yon kachèt redis
 pral ba ou yon ogmantasyon siyifikatif pèfòmans.

 Kachèt default la an sekirite, men li pa fè byen si ou gen anpil operasyon ekri/retire.
 Nenpòt operasyon ekri oswa retire invalid kachèt la tout antye, asire lekti ki vin apre yo pral wè
 dènye chanjman.

 ### CLI zouti
 Si w ap itilize yon zouti CLI tankou [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ou pral definitivman vle redis kachèt la aktive, kòm li dire atravè envokasyon nan lòd `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` la fè yon kopi yon sèl fwa nan tout dosye soti nan yon mobiltto nan yon lòt.
 Li pa kouri okenn pwosesis pou kenbe glas la sou tan. Kouri kòmand `mirror` ankò
 pou senkronize nenpòt ki dosye ki manke.

 Valè retounen nan `mirror` se yon objè senp ak kontè pou konbyen dosye yo te reyisi
 reflete ak konbyen dosye ki te gen erè:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVÈTISMAN: Reflete seri gwo done yo ka pran anpil tan ak Pleasant-entansif

 Avèk semantik apèl `mirror` li pafwa kapab konfizyon pou w konprann kiyès ki la
 lektè ak ki moun ki ekriven an. Imajine li tankou yon deklarasyon devwa: "mobiletto nan men gòch"
 se bagay yo te plase nan (replike done ekri), ak "mobiletto adwat" (la
 agiman nan metòd `mirror` ) se valè yo te bay (done yo miroir li).

 ## Chifre transparan
 Pèmèt transparan chifreman bò kliyan:

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

 Sak ap pase? Yon separe "antre anyè" (direksyon) anyè (chiffre) swiv ki fichye yo nan sa
 anyè (aka anyè dirent).
 * `list` la li dosye yo antre anyè, dekripte chak chemen ki nan lis la; Lè sa a, retounen metadata pou chak dosye
 * `list` yo pi efikas, espesyalman pou anyè ki gen yon gwo kantite fichye
 * `write` ekri fichye dirent nan anyè diret chak paran, yon fason rekursif; Lè sa a, ekri fichye a
 * `write` yo pral fè O(N) ekri, ak N = pwofondè nan yerachi anyè a.
 * `remove` retire fichye dirent ki koresponn lan, ak paran li si li vid, yon fason repetitif; Lè sa a, retire dosye a
 * `remove` ki pa rekursif yo pral fè lekti O(N) ak potansyèlman anpil efase, ak N = pwofondè nan yerachi anyè a.
 * `remove` repetitif sou sistèm fichye gwo ak gwo twou san fon ka chè

 Remake byen ke menm avèk chifreman bò kliyan pèmèt, yon advèsè ki gen yon vizibilite konplè sou bò sèvè chiffres ou.
 depo, menm san kle a, ka toujou wè kantite total anyè ak konbyen fichye yo nan chak, ak
 kèk efò, dekouvri kèk oswa tout estrikti an jeneral nan yerachi anyè a.
 *Remak: Sèvi ak yon estrikti relativman plat pou pi bon sekirite.*
 Advèsè a pa ta konnen non anyè / fichye yo sof si yo te konnen tou chifreman ou
 kle oswa te gen otreman avèk siksè fann chifreman an. Lè sa a, tout parye yo koupe!

 ### Pèfòmans ak kachèt
 Operasyon sou depo chiffres kapab dousman. Lis rekursif ak retire ka trè dousman.
 Cache atravè redis ede anpil, men sonje ke kachèt la vide sou nenpòt ki ekri oswa retire.

 ## Wotasyon kle
 Kreye yon mobiletto ak nouvo kle ou a, epi reflete ansyen done yo nan li:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Koòdone chofè
 Yon chofè se nenpòt fichye JS ki ekspòte yon fonksyon 'storageClient' ak siyati sa a:

    function storageClient (key, secret, opts)

 * `key` : yon kòd, kle API ou (pou chofè `local` sa a se anyè debaz la)
 * `secret` : yon kòd, sekrè API ou (yo ka omisyon pou chofè `local` )
 * `opts` : yon objè, pwopriyete yo se pou chak chofè:
 * Pou `local` , pwopriyete `fileMode` ak `dirMode` detèmine fason yo kreye nouvo fichye ak anyè.
 * Pou `s3` , pwopriyete a `bucket` obligatwa. Pwopriyete opsyonèl yo se:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objè ke fonksyon storageClient retounen dwe defini fonksyon sa yo:

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

 ## Enregistrement
 Mobiletto sèvi ak bibliyotèk ki anrejistre [winston](https://www.npmjs.com/package/winston).

 Jounal yo **ap** gen ladann chemen fichye yo ak mesaj erè, men yo p ap **pa janm** genyen kle, sekrè,
 oswa nenpòt lòt enfòmasyon konfigirasyon koneksyon.

 ### Log nivo
 Sèvi ak varyab anviwònman `MOBILETTO_LOG_LEVEL` pou mete nivo mòso a, lè l sèvi avèk youn
 nan nivo `npm` yo defini nan [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Nivo default la se `error` . Nivo ki pi pwolib la se `silly` , byenke kounye a mobiletto
 pa konekte nan nivo anba a `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log dosye
 Pa default, logger la ekri nan konsole a. Pou voye mòso bwa nan yon fichye, mete `MOBILETTO_LOG_FILE`
 anviwònman varyab. Lè w ap antre nan yon dosye, mòso bwa yo p ap ekri sou konsole a ankò.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Pou fèmen enregistrement:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
