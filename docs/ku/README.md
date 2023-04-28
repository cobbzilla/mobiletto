Mobiletto
 =========

 Mobiletto qatek abstrakasyona hilanînê ya JavaScript-ê ye, bi şîfrekirina bijarte ya ji alîyê xerîdar ve.

 # Naverok
 * [Çima Mobiletto?](#Çima-Mobiletto?)
 * [Destpêka Bilez](#Destpêka Zû)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Çavkanî](#Çavkanî)
 * [Sazkirin](# Sazkirin)
 * [Piştgirî û Fînanse](#Piştgirî-û-Fona)
 * [Bikaranîna bingehîn](#Bikaranîna bingehîn)
 * [Metadata](#Metadata)
 * [Şêweya importa alternatîf](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Şîfrekirina Transparent](#Transparent-şîfrekirin)
 * [Zivirandina Bişkojê](#zivirandina Bişkojê)
 * [Navbera ajokerê](#Navenda ajokar)
 * [Têketin](# Têketin)

 # Vê bi zimanekî din bixwînin
 Ev belgeya README.md, bi rêya [hokeylization](https://github.com/cobbzilla/hokeylization) hatiye wergerandin.
 **[her ziman ji hêla Google Wergerê ve tê piştgirî kirin](https://cloud.google.com/translate/docs/languages)!**

 Ez bawer im ku ew ne bêkêmasî ye, lê ez hêvî dikim ku ew ji tunebûnê çêtir e!

 [🇸🇦 Erebî](belge/ar/README.md)
 [🇧🇩 Bengali](belge/bn/README.md)
 [🇩🇪 Almanî](belge/de/README.md)
 [🇺🇸 Îngilîzî](belge/ku/README.md)
 [🇪🇸 Spanî](belge/es/README.md)
 [🇫🇷 Fransî](belge/fr/README.md)
 [🇹🇩 Hausa](belge/ha/README.md)
 [🇮🇳 Hindi](belge/hi/README.md)
 [🇮🇩 Endonezyayî](belge/id/README.md)
 [🇮🇹 Îtalî](belge/it/README.md)
 [🇯🇵 Japonî](belge/ja/README.md)
 [🇰🇷 Koreyî](../ko/README.md)
 [🇮🇳 Marathi](belge/mr/README.md)
 [🇵🇱 Polonî](belge/pl/README.md)
 [🇧🇷 Portekîzî](belge/pt/README.md)
 [🇷🇺 Rûsî](belge/ru/README.md)
 [🇰🇪 Swahili](belge/sw/README.md)
 [🇵🇭 Tagalog](belge/tl/README.md)
 [🇹🇷 Tirkî](../tr/README.md)
 [🇵🇰 Urdu](belge/ur/README.md)
 [🇻🇳 Viyetnamî](belge/vi/README.md)
 [🇨🇳 Çînî](belge/zh/README.md)


 **[📚 ... Hemû Ziman ...](belge/README.md)**
 ----

 ### Di vê wergera README de pirsgirêkek heye?
 Ev wergera taybetî ya orîjînal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 dibe ku xelet be -- *serrastkirin pir bi xêr hatin!* Ji kerema xwe [daxwaza vekişînê li ser GitHub] bişînin (https://github.com/cobbzilla/mobiletto/pulls),
 an heke hûn ne rehet in ku wiya bikin, [pirsek veke](https://github.com/cobbzilla/mobiletto/issues)

 Dema ku hûn der barê wergerekê de pirsgirêkek nû ya GitHub çêkin, ji kerema xwe bikin:
 * URL-ya rûpelê têxe (ji barika navnîşana gerokê kopî/pêç bike)
 * nivîsa tam a ku xelet e tê de (ji gerokê kopî/paste)
 * ji kerema xwe re şirove bike ka çi xelet e -- werger xelet e? formatkirin bi rengekî şikestî ye?
 * Ji kerema xwe pêşniyarek wergerek çêtir pêşkêşî bikin, an jî nivîs çawa bi rêkûpêk were şekil kirin
 * **Spas dikim!**

 ## Çima Mobiletto?

 ### Bi xatirê te lock-in firoşkar!
 Pêşkêşvanên cihêreng hilanîna ewr xwedan API-yên hevgirtî ne. Tewra yên ku ji bo "lihevhatina S3" hewl didin
 xwedî tevgerên xwerû.

 Gava ku hûn ji bo sepana xwe firoşkarek hilanînê ya taybetî hilbijêrin, heke hûn rasterast li API-ya wan, sepana xwe kod bikin
 niha girêdayî wê xizmetê ye. Her ku dem derbas dibe û kod kom dibe, guhertina firoşkaran dibe
 her ku diçe bêhêz dibe. Hûn bi xêr hatin cîhana kêfê ya firoşkarê kilîtkirî!

 Mobiletto ji bo çareserkirina vê pirsgirêkê hate çêkirin. Bi kodkirina sepana xwe li API-ya mobiletto, hûn dikarin bi hêsanî
 pêşkêşkerên hilanînê biguhezînin û zanibin ku qata hilanîna serîlêdana we dê bi heman rengî tevbigere.

 ### Testkirina berfireh
 Hemî ajokar ji bo her ajokerek 60+ ceribandinan ji bo behreyên yeksan têne ceribandin.
 Em hemî ajokaran bi her kombînasyona:
 * Şîfrekirin: hem çalak û hem jî neçalak
 * Redis cache: hem çalak û hem jî neçalak

 Ev nêzîkatî ji me re aramiyê dide ku mobiletto dê bi heman rengî tevbigere bêyî ku hûn kîjan ajokerê bikar bînin,
 û bêyî ku hûn cachkirin û/an şîfrekirinê çalak bikin.

 ### Piştgiriya ajokar
 Ajokarên hilanînê yên Mobiletto yên heyî:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : pergala pelan a herêmî

 *Beşdariyên ji bo piştgirîkirina bêtir pêşkêşkerên hilanîna ewr pir bi xêr hatin!*

 ## mobiletto-cli
 Mobiletto armanc e ku wekî pirtûkxane ji hêla kodên din ên JavaScript-ê ve were bikar anîn.

 Ji bo ku di xeta fermanê de bi mobiletto re bixebitin, [mobiletto-cli] bikar bînin (https://www.npmjs.com/package/mobiletto-cli)

 ## Çavkanî
 * [mobiletto li ser GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto li ser npm](https://www.npmjs.com/package/mobiletto)

 ## Piştgirî û Fînanse
 Ez hewl didim ku bibim pêşdebirek nermalava çavkaniya vekirî ya profesyonel. Ez tê de dixebitim
 pîşesaziya nermalava gelek salan, min dest bi pargîdaniyên serfiraz kir û wan firot pargîdaniyên gelemperî.
 Di van demên dawî de min karê xwe winda kir, û bi rastî jî tu karekî din li ber destê min nîn e

 Ji ber vê yekê ez ê hewl bidim ku nermalava alîkar binivîsim û bibînim ka ew kar dike

 Heke hûn ji karanîna vê nermalavê kêfxweş dibin, ez ê ji bo wê jî pir spasdar bim
 herî piçûk [beşdariya mehane bi rêya Patreon](https://www.patreon.com/cobbzilla)

 *Spas dikim!*

 ## Sazkirin
 Bi karanîna `npm` an jî `yarn` . Dibe ku hûn guhertoya `lite` ya ku hemîyan tê de nake dixwazin
 pelên README wergerandin:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Heke hûn bi rastî pelên README bi her zimanî dixwazin, guhertoya tevahî saz bikin:

    npm install mobiletto
    yarn add mobiletto

 ## Destpêka Zû
 Mînakek kurt a ajokera `s3` ya mobiletto bikar tîne.

 Heke ajoker `b2` an jî "herêmî" be ev kod dê bi heman rengî `local` .

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
 ## Bikaranîna bingehîn
 Mînakek pir berfirehtir, ku piraniya taybetmendiyên pêşkêşkirî destnîşan dike:

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
 Fermana `metadata` metadata li ser yek têketina pergala pelan vedigerîne.
 Bi heman awayî, nirxa vegerê ya ji fermana `list` komek ji tiştên metadata ye.

 Tiştek metadata wiha xuya dike:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Taybetmendiya `type` dikare bibe `file` , `dir` , `link` an jî `special` .

 Li gorî celebê ajokerê, dibe ku `list` hemî qadan venegerîne. Taybetmendiyên `name` û `type`
 divê her tim hebe. Fermana `metadata` ya paşîn dê hemî taybetmendiyên berdest vegerîne.

 ## Şêweya importa alternatîf
 Modula bi tevahî-scope derxînin û fonksiyona `connect` bikar bînin:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto bi cache <a href="https://redis.io">redis</a> çêtirîn dixebite.

 Mobiletto dê hewl bide ku li ser 127.0.0.1:6379 bi mînakek redis ve girêbide

 Hûn dikarin van yek ji wan bişopînin:
 * `MOBILETTO_REDIS_HOST` env var saz bike, ji bo ku li şûna hosteya herêmî li vir were girêdan
 * `MOBILETTO_REDIS_PORT` env var saz bike, ev port dê were bikar anîn

 Mobiletto dê hemî bişkojkên xwe yên redis bi pêşgira `_mobiletto__` . Hûn dikarin vê biguherînin
 bi `MOBILETTO_REDIS_PREFIX` env var.

 Her weha hûn dikarin cachkirina per-girêdanê bi `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Redis caching naxwazin?
 Ji bo neçalakkirinê: gava ku hûn pêwendiya xwe saz dikin, di `opts.redisConfig` de `enabled: false` " derbas bikin.

 Wekî ku li jêr hate nîqaş kirin, neçalakkirina caching dê bandorek neyînî li ser performansê bike û bêtir daxwaziyan bike
 hilanîna ku hûn bi rastî hewce ne.

 ### Rêbernameya caching
 **Depokirina şîfrekirî **: xwendin/nivîsandina hilanîna şîfrekirî tenê ji ya normal hinekî hêdîtir e,
 lê gera li dora pelrêçan (yên ku hin tişt dikin) pir biha ye. Bikaranîna cache redis
 dê performansek girîng bide we.

 Cache-ya xwerû ewle ye, lê heke gelek operasyonên nivîsandinê/rakirina we hebin baş naxebite.
 Her operasyonek nivîsandinê an jêbirinê tevahiya cache betal dike, û piştrast dike ku xwendina paşîn dê wê bibîne
 guhertinên dawî.

 ### Amûrên CLI
 Ger hûn amûrek CLI wekî [mobiletto-cli] bikar tînin (https://www.npmjs.com/package/mobiletto-cli),
 hûn ê bê guman bixwazin ku cacheya redisê were çalak kirin, ji ber ku ew di nav bangên fermana `mo` de dimîne.

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Fermana `mirror` kopiyek yek-carî ya hemî pelan ji yek mobilettoyek din pêk tîne.
 Ji bo domandina neynikê bi demê re pêvajoyek nameşîne. Fermana `mirror` dîsa bixebite
 ji bo senkronîzekirina pelên wenda.

 Nirxa vegerê ya ji `mirror` tiştek sade ye bi hejmarkerên ku ji bo çend pelan bi serketî bûne
 mirrored û çend pelan xelet bûn:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 HIŞYARÎ: Neynkirina berhevokên daneya mezin dikare pir dem dixwe û firehiya bandê giran be

 Bi semantîka navê `mirror` re carinan dibe ku meriv têbigihêje ka kî ye
 xwendevan û nivîskar kî ye. Wê wekî daxuyaniyek peywirê bihesibînin: "mobîla destê çepê"
 tişta ku jê re tê veqetandin (daneyên neynûkî hatine nivîsandin), û "mobîla destê rastê" (ya
 argumana rêbaza `mirror` ) nirxa ku tê veqetandin e (daneyên neynikê têne xwendin).

 ## Şîfrekirina zelal
 Şîfrekirina şefaf ji aliyê xerîdar ve çalak bike:

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

 Çi diqewime? Pelrêkek "têketina pelrêçê" (dirent) (şîfrekirî) ya cihê ku pelên di wê de hene dişopîne
 pelrêça (navê pelrêça dirent).
 * Fermana `list` pelên têketina pelrêçayê dixwîne, her rêyên ku hatine navnîş kirin deşîfre dike; paşê ji bo her pelê metadata vedigerîne
 * `list` in, nemaze ji bo pelrêçên ku hejmareke mezin a pelan hene
 * Fermana `write` nivîsandinê` pelên dirent di pelrêça dirent a her dêûbavan de, bi paşverû dinivîse; paşê pelê dinivîse
 * `write` dê O(N) binivîse, bi N = kûrahî di hiyerarşiya pelrêçê de
 * Fermana `remove` a têkildar, û dêûbavê wê heke vala be, bi dûbare jê dike; paşê pelê jê dike
 * Fermanên `remove` yên ne-veger dê O(N) bixwîne û bi potansiyel bi qasî jêbirin, bi N = kûrahiya di hiyerarşiya pelrêçê de.
 * `remove` yên vegerî yên li ser pergalên pelan ên mezin û kûr dikarin biha bin

 Bala xwe bidinê ku tevî şîfrekirina ji aliyê xerîdar ve çalak be jî, dijminek bi xuyangiya tam li ser server-aliyê weya şîfrekirî
 hilanînê, bêyî mifteyê jî, dîsa jî dikare jimara giştî ya pelrêçan û çend pelan di her yekê de û bi wan re bibîne
 hin hewildan, hin an hemî avahiya giştî ya hiyerarşiya pelrêça kifş bikin.
 * Nîşe: Ji bo ewlekariya çêtir avahiyek berbiçav bikar bînin.*
 Dijmin dê navên pelrêçan/pelan nizanibe heya ku ew şîfrekirina we jî nezane
 kilît an jî bi awayekî serketî şîfre şikandibû. Wê demê hemû behîs bi dawî ne!

 ### Performansa û caching
 Operasyonên li ser hilanîna şîfrekirî dikarin hêdî bibin. Lîsteyên veger û jêbirin dikarin pir hêdî bibin.
 Veşartina bi rêya redis pir alîkariyek mezin dike, lê bala xwe bidin ku cache li ser her nivîsandinê an jêbirinê tê rijandin.

 ## Zivirîna key
 Bi mifteya xweya nû re mobiletto biafirînin, dûv re daneyên kevn di nav wê de neynikê bikin:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Navbera ajokar
 Ajokar her pelek JS ye ku fonksiyonek 'storageClient' bi vê îmzeyê derdixe:

    function storageClient (key, secret, opts)

 * `key` : rêzek, mifteya API-ya we (ji bo ajokera `local` ev pelrêça bingehîn e)
 * `secret` : xêzek, sira API-ya we (dibe ku ji bo ajokera `local` were derxistin)
 * `opts` : tiştek, taybetmendî li ser ajokerê ne:
 * Ji bo `local` , taybetmendiyên `fileMode` û `dirMode` diyar dikin ka pel û peldankên nû çawa têne afirandin.
 * Ji bo `s3` , taybetmendiya `bucket` hewce ye. Taybetmendiyên bijartî ev in:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Tişta ku fonksiyona storageClient vedigerîne divê van fonksiyonan diyar bike:

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

 ## Têketin
 Mobiletto pirtûkxaneya têketinê [winston](https://www.npmjs.com/package/winston) bikar tîne.

 Têketin ** dê ** rêyên pelan û peyamên xeletiyê hebin, lê dê ** çu carî ** mifteyên, razan nehewîne,
 an agahdariya veavakirina girêdanê ya din.

 ### Asta têketinê
 Guherbara jîngehê ya `MOBILETTO_LOG_LEVEL` bikar bînin da ku asta têketinê saz bikin, yek bikar bînin
 ji astên `npm` yên ku di [https://www.npmjs.com/package/winston#logging-levels] de hatine diyarkirin (https://www.npmjs.com/package/winston#logging-levels)

 Asta `error` . Asta herî devkî `silly` e, her çend niha mobîl e
 di astên li jêr `debug` de têkevê nake

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Pelê têketinê
 Bi xwerû, logger li konsolê dinivîse. Ji bo şandina têketinên pelê, `MOBILETTO_LOG_FILE` bike
 guhêrbar jîngehê. Dema ku têketin pelê, têketin dê êdî li konsolê neyên nivîsandin.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ji bo qefilandina têketinê:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
