Mobiletto
 =========

 Mobiletto is in JavaSkript-opslachabstraksjelaach, mei opsjonele transparante fersifering oan de client-side.

 # Ynhâld
 * [Wêrom Mobiletto?](#Why-Mobiletto?)
 * [Fluchstart](#Fluchstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Boarne](#Boarne)
 * [Ynstallaasje](#Ynstallaasje)
 * [Support and Funding](#Support-and-Funding)
 * [Basisgebrûk](#Basisgebrûk)
 * [Metadata](#Metadata)
 * [Alternate ymportstyl](#Alternate-ymportstyl)
 * [Caching](#Caching)
 * [Spiegeljen](#Spiegeljen)
 * [Transparante fersifering](#Transparante-fersifering)
 * [Key rotation](#Key-rotation)
 * [Sjauffeur-ynterface](#Bestjoerder-ynterface)
 * [Logging](#Logging)

 # Lês dit yn in oare taal
 Dit README.md dokumint is oerset, fia [hokeylization](https://github.com/cobbzilla/hokeylization), yn
 **[elke taal stipe troch Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ik bin der wis fan dat it net perfekt is, mar ik hoopje dat it better is as neat!

 [🇸🇦 Arabysk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Dútsk](../de/README.md)
 [🇺🇸 Ingelsk](../en/README.md)
 [🇪🇸 Spaansk](../es/README.md)
 [🇫🇷 Frânsk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Yndonesysk](../id/README.md)
 [🇮🇹 Italjaansk](../it/README.md)
 [🇯🇵 Japansk](../ja/README.md)
 [🇰🇷 Koreaansk](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Poalsk](../pl/README.md)
 [🇧🇷 Portugeesk](../pt/README.md)
 [🇷🇺 Russysk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turksk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Fietnameesk](../vi/README.md)
 [🇨🇳 Sineesk](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is der in probleem mei dizze oersetting fan de README?
 Dizze bysûndere oersetting fan it orizjineel [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kin defekt wêze -- *korreksjes binne tige wolkom!* Stjoer asjebleaft in [pull request on GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 of as jo it net noflik binne om dat te dwaan, [iepenje in probleem](https://github.com/cobbzilla/mobiletto/issues)

 As jo in nij GitHub-probleem oanmeitsje oer in oersetting, dwaan dan:
 * befetsje de side-URL (kopiearje / plakke fan browseradresbalke)
 * befetsje de krekte tekst dy't ferkeard is (kopiearje / plakke fan browser)
 * beskriuw asjebleaft wat der mis is -- is de oersetting ferkeard? is de opmaak op ien of oare manier brutsen?
 * biede freonlik in suggestje foar in bettere oersetting, of hoe't de tekst goed opmakke wurde moat
 * **Dankewol!**

 ## Wêrom Mobiletto?

 ### Goodbye ferkeaper lock-in!
 De ferskate oanbieders fan wolkopslach hawwe ynkompatibele API's. Sels dyjingen dy't stribje nei "S3-kompatibiliteit"
 hawwe eigensinnige gedrach.

 As jo in bepaalde opslachferkeaper kieze foar jo app, as jo direkt koade nei har API, jo app
 is no ôfhinklik fan dy tsjinst. As de tiid trochgiet en koade accumulearret, wurde wikseljende leveransiers
 hieltyd mear ûnhâldber. Wolkom by de leuke wrâld fan ferkeaper lock-in!

 Mobiletto is ûntworpen om dit probleem op te lossen. Troch jo app te kodearjen nei de API fan mobiletto, kinne jo maklik
 feroarje opslachproviders en wit dat de opslachlaach fan jo app identyk sil gedrage.

 ### Wiidweidige testen
 Alle bestjoerders wurde hifke foar identyk gedrach mei 60+ tests foar elke bestjoerder.
 Wy testen alle bestjoerders mei elke kombinaasje fan:
 * Fersifering: sawol yn- as útskeakele
 * Redis-cache: sawol ynskeakele as útskeakele

 Dizze oanpak jout ús frede fan geast dat mobiletto itselde sil gedrage, nettsjinsteande hokker bestjoerder jo brûke,
 en nettsjinsteande oft jo caching en / of fersifering ynskeakelje.

 ### Driverstipe
 Aktuele Mobiletto-opslachbestjoerders:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokaal bestânssysteem

 *Bydragen om mear oanbieders fan wolkopslach te stypjen binne tige wolkom!*

 ## mobiletto-cli
 Mobiletto is bedoeld om te wurde brûkt as bibleteek troch oare JavaScript-koade.

 Om te wurkjen mei mobiletto by de kommando-rigel, brûk [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Boarne
 * [mobiletto op GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto op npm](https://www.npmjs.com/package/mobiletto)

 ## Stipe en finansiering
 Ik besykje in profesjonele ûntwikkelder fan iepen boarne software te wêzen. Ik haw wurke yn
 de software yndustry foar in protte jierren, Ik haw begûn suksesfolle bedriuwen en ferkocht se oan iepenbiere bedriuwen.
 Koartlyn bin ik myn baan kwytrekke, en ik haw eins gjin oar wurk opsteld

 Dat ik sil besykje nuttige software te skriuwen en te sjen oft dat wurket

 As jo genietsje fan in gebrûk dizze sêftguod, Ik soe wêze hiel tankber foar sels de
 lytste [moanlikse bydrage fia Patreon](https://www.patreon.com/cobbzilla)

 *Dankewol!*

 ## Ynstallaasje
 Ynstallearje mei `npm` of `yarn` . Jo wolle wierskynlik de `lite` ferzje dy't net alle
 oersette README-bestannen:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 As jo de README-bestannen wirklik yn elke taal wolle, ynstallearje dan de folsleine ferzje:

    npm install mobiletto
    yarn add mobiletto

 ## Flugge start
 In koart foarbyld mei de mobiletto `s3` -bestjoerder.

 Dizze koade soe itselde rinne as de bestjoerder `b2` of `local` .

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
 ## Basisgebrûk
 In folle wiidweidiger foarbyld, dat de measte fan 'e oanbeane funksjes toant:

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
 It kommando `metadata` jout metadata werom oer in inkele triemsysteemyngong.
 Likemin is de weromkommende wearde fan it kommando `list` in array fan metadata-objekten.

 In metadata-objekt sjocht der sa út:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 De eigenskip `type` kin `file` , `dir` , `link` , of `special` .

 Ofhinklik fan it type bestjoerder kin in `list` kommando net alle fjilden weromjaan. De eigenskippen `name` namme' en `type`
 moat altyd oanwêzich wêze. In folgjende kommando `metadata` sil alle beskikbere eigenskippen weromjaan.

 ## Alternatyf ymportstyl
 Ymportearje de module mei folslein berik en brûk de funksje `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto wurket it bêste mei in <a href="https://redis.io">redis</a> -cache.

 Mobiletto sil besykje te ferbinen mei in redis-eksimplaar op 127.0.0.1:6379

 Jo kinne ien fan dizze oerskriuwe:
 * Stel de `MOBILETTO_REDIS_HOST` env var, mobilet yn om hjir te ferbinen ynstee fan localhost
 * Stel de `MOBILETTO_REDIS_PORT` env var yn, dizze poarte sil brûkt wurde

 Mobiletto sil al syn redis-kaaien opslaan mei it foarheaksel `_mobiletto__` . Jo kinne dit feroarje
 troch it ynstellen fan `MOBILETTO_REDIS_PREFIX` env var.

 Jo kinne ek caching per ferbining ynstelle mei it objekt `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Wolle jo gjin redis caching?
 Om út te skeakeljen: pass `enabled: false` yn jo `opts.redisConfig` objekt as jo jo ferbining meitsje.

 Lykas hjirûnder besprutsen, sil it útskeakeljen fan caching in negatyf effekt hawwe op prestaasjes en mear oanfragen meitsje
 oan opslach dy't jo echt nedich binne.

 ### Caching-begelieding
 ** Fersifere opslach **: it lêzen/skriuwen fan fersifere opslach is mar in bytsje stadiger dan normaal,
 mar navigearje om mappen (wat guon dingen dogge) is frij djoer. Mei help fan in redis-cache
 sil jaan dy in wichtige prestaasje ympuls.

 De standert cache is feilich, mar docht net goed as jo in protte skriuw-/ferwideringsoperaasjes hawwe.
 Eltse skriuw- of fuortsmite operaasje ûnjildich de hiele cache, garandearjen pafolgende lêzen sil sjen de
 lêste feroarings.

 ### CLI-ark
 As jo in CLI-ark brûke lykas [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 jo sille perfoarst wolle dat de redis-cache ynskeakele is, om't it duorret oer oproppen fan it kommando `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 It kommando `mirror` fiert in ienmalige kopy út fan alle bestannen fan de iene mobiletto nei de oare.
 It rint gjin proses om de spegel oer de tiid te behâlden. Laad it kommando `mirror` wer út
 om alle ûntbrekkende bestannen te syngronisearjen.

 De `mirror` is in ienfâldich objekt mei tellers foar hoefolle bestannen mei súkses wiene
 spegele en hoefolle bestannen hawwe flaters:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WARSKUWING: It spegeljen fan grutte datasets kin heul tiidslinend en bânbreedte-yntinsyf wêze

 Mei de `mirror` oprop semantyk kin it soms betiizjend wêze om te begripen wa't de is
 lêzer en wa is de skriuwer. Stel jo it foar as in opdrachtferklearring: de "linkerhand mobiletto"
 is it ding dat wurdt tawiisd oan (spegele gegevens skreaun), en de "rjochterhand mobiletto" (de
 argumint oan 'e `mirror` metoade) is de wearde dy't wurdt tawiisd (spegele gegevens wurde lêzen).

 ## Transparante fersifering
 Transparante fersifering oan de clientside ynskeakelje:

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

 Wat bart der? In aparte "directory-yngong" (dirent) map (fersifere) tracks hokker bestannen dêryn binne
 map (alias de dirent map).
 * It kommando 'list' lêst de triemmen yn 'e `list` , ûntsiferet elk fermelde paad; jout dan metadata foar elke triem werom
 * Kommando's 'list' binne `list` , foaral foar mappen mei in grut oantal bestannen
 * It kommando `write` skriuwt dirent bestannen yn de dirent map fan elke âlder, rekursyf; dan skriuwt de triem
 * `write` kommando's sille O(N) skriuwe, mei N = djipte yn 'e maphierarchy
 * It kommando 'ferwiderje' ferwideret it korrespondearjende `remove` bestân, en syn âlder as leech, rekursyf; dan fuortsmite de triem
 * Net-rekursive `remove` en mooglik safolle wiskjen, mei N = djipte yn 'e maphierarchy
 * Rekursive `remove` kommando's op grutte en djippe bestânssystemen kinne djoer wêze

 Tink derom dat sels mei fersifering oan kliïntside ynskeakele, in tsjinstanner mei folsleine sichtberens yn jo fersifere serverside
 opslach, sels sûnder de kaai, kin noch sjen it totale oantal mappen en hoefolle triemmen binne yn elk, en mei
 guon ynspannings , ûntdekke guon of al de totale struktuer fan de triemtafel hiërargy.
 *Opmerking: Brûk in relatyf platte struktuer foar bettere feiligens.*
 De tsjinstanner soe de nammen fan 'e mappen/bestannen net kenne, útsein as se jo fersifering ek wisten
 kaai of hie oars de fersifering mei súkses kreake. Alle bets binne dan út!

 ### Prestaasje en caching
 Operaasjes op fersifere opslach kinne stadich wêze. Rekursive listings en ferwideringen kinne heul stadich wêze.
 Caching fia redis helpt enoarm, mar tink derom dat de cache wurdt spoeld by elk skriuwt of fuorthelle.

 ## Toetsrotaasje
 Meitsje in mobiletto mei jo nije kaai, en spegelje dan de âlde gegevens deryn:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Driver ynterface
 In stjoerprogramma is elk JS-bestân dat in 'storageClient'-funksje eksportearret mei dizze hantekening:

    function storageClient (key, secret, opts)

 * `key` : in tekenrige, jo API-kaai (foar it `local` stjoerprogramma is dit de basismap)
 * `secret` : in tekenrige, jo API-geheim (kin weilitten wurde foar de `local` stjoerprogramma)
 * `opts` : in objekt, de eigenskippen binne per bestjoerder:
 * Foar `local` de `fileMode` en `dirMode` eigenskippen hoe nije oanmeitsjende triemmen en mappen wurde oanmakke
 * Foar `s3` is de eigenskip `bucket` fereaske. Opsjonele eigenskippen binne:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 It objekt dat de storageClient-funksje werombringt moat dizze funksjes definiearje:

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
 Mobiletto brûkt de [winston](https://www.npmjs.com/package/winston) logging bibleteek.

 Logboeken **sil** triempaden en flaterberjochten befetsje, mar sille **nea** kaaien, geheimen,
 of hokker oare ferbining konfiguraasje ynformaasje.

 ### Lognivo
 Brûk de omjouwingsfariabele `MOBILETTO_LOG_LEVEL` om it lognivo yn te stellen, mei ien
 fan de `npm` nivo's definieare yn [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 It standertnivo is `error` . It meast verbose nivo is `silly` , hoewol op it stuit mobiletto
 `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logtriem
 Standert skriuwt de logger nei de konsole. Om logs nei in bestân te stjoeren, set de `MOBILETTO_LOG_FILE`
 omjouwing fariabele. By it oanmelden nei in bestân sille logs net mear nei de konsole skreaun wurde.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Om logging út te skeakeljen:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
