Mobiletto
 =========

 Mobiletto estas JavaScript-stoka abstrakta tavolo, kun laŭvola travidebla klientflanka ĉifrado.

 # Enhavo
 * [Kial Mobiletto?](#Kial-Mobiletto?)
 * [Rapida komenco](#Rapida komenco)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Fonto](#Fonto)
 * [Instalado](#Instalo)
 * [Subteno kaj Financado](#Subteno-kaj-Fincado)
 * [Baza uzado](#Baza uzado)
 * [Metadatumoj](#Metadatumoj)
 * [Alterna importa stilo](#Alternate-import-stilo)
 * [Kaŝmemoro](#Kaŝmemoro)
 * [Spegulado](#Spegulado)
 * [Travidebla ĉifrado](#Travidebla-ĉifrado)
 * [Ŝlosilrotacio](#Ŝlosilo-rotacio)
 * [ŝofora interfaco](#Driver-interfaco)
 * [Logging](#Logging)

 # Legu ĉi tion en alia lingvo
 Ĉi tiu dokumento README.md estis tradukita, per [hokeylization](https://github.com/cobbzilla/hokeylization), en
 **[ĉiu lingvo subtenata de Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Mi certas, ke ĝi ne estas perfekta, sed mi esperas, ke ĝi estas pli bona ol nenio!

 [🇸🇦 araba](../ar/README.md)
 [🇧🇩 bengala](../bn/README.md)
 [🇩🇪 germana](../de/README.md)
 [🇺🇸 angla](../eo/README.md)
 [🇪🇸 Hispana](../es/README.md)
 [🇫🇷 Franca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindia](../hi/README.md)
 [🇮🇩 indonezia](../id/README.md)
 [🇮🇹 itala](../it/README.md)
 [🇯🇵 japana](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pola](../pl/README.md)
 [🇧🇷 portugala](../pt/README.md)
 [🇷🇺 Rusa](../ru/README.md)
 [🇰🇪 Svahila](../sw/README.md)
 [🇵🇭 Tagaloga](../tl/README.md)
 [🇹🇷 Turka](../tr/README.md)
 [🇵🇰 Urdua](../ur/README.md)
 [🇻🇳 vjetnama](../vi/README.md)
 [🇨🇳 Ĉina](../zh/README.md)


 **[📚 ... Ĉiuj lingvoj ...](../README.md)**
 ----

 ### Ĉu estas problemo kun ĉi tiu traduko de la README?
 Ĉi tiu aparta traduko de la originalo [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 povas esti misa -- *korektoj estas tre bonvenaj!* Bonvolu sendi [tiropeton sur GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 aŭ se vi ne komfortas fari tion, [malfermu temon](https://github.com/cobbzilla/mobiletto/issues)

 Kiam vi kreas novan GitHub-an numeron pri traduko, bonvolu fari:
 * inkluzivu la paĝon URL (kopiu/gluu el retumila adresbreto)
 * inkluzivu la ĝustan tekston malĝustan (kopiu/gluu el retumilo)
 * bonvolu priskribi kio estas malĝusta -- ĉu la traduko estas malĝusta? ĉu la formatado estas rompita iel?
 * bonvolu proponi sugeston pri pli bona traduko, aŭ kiel la teksto estu taŭge formatita
 * **Dankon!**

 ## Kial Mobiletto?

 ### Adiaŭ enŝlosado de vendisto!
 La diversaj provizantoj de nuba stokado havas malkongruajn API-ojn. Eĉ tiuj, kiuj strebas al "S3-kongruo"
 havas idiosinkraziajn kondutojn.

 Kiam vi elektas apartan stokan vendiston por via programo, se vi kodas rekte al ilia API, via programo
 nun dependas de tiu servo. Dum tempo pasas kaj kodo akumuliĝas, ŝanĝiĝas vendistoj
 ĉiam pli netenebla. Bonvenon al la amuza mondo de vendoŝlosado!

 Mobiletto estis dizajnita por solvi ĉi tiun problemon. Kodigante vian apon al la API de mobiletto, vi povas facile
 ŝanĝu provizantojn de stokado kaj sciu, ke la stokatavolo de via programo kondutos idente.

 ### Ampleksa testado
 Ĉiuj ŝoforoj estas testitaj pri identa konduto kun 60+ testoj por ĉiu ŝoforo.
 Ni testas ĉiujn ŝoforojn kun ĉiu kombinaĵo de:
 * Ĉifrado: kaj ebligita kaj malŝaltita
 * Redis kaŝmemoro: ambaŭ ebligita kaj malŝaltita

 Ĉi tiu aliro donas al ni trankvilon, ke mobiletto kondutos same sendepende de kiu ŝoforo vi uzas,
 kaj sendepende de ĉu vi ebligas kaŝmemoron kaj/aŭ ĉifradon.

 ### Ŝoforsubteno
 Nunaj Mobiletto-stokaj ŝoforoj:
 * `s3` : Amazon S3
 * `b2` : Malantaŭbrilo B2
 * `local` : loka dosiersistemo

 *Kontribuoj por subteni pli da nuba stokado provizantoj estas tre bonvenaj!*

 ## mobiletto-cli
 Mobiletto estas celita esti uzata kiel biblioteko per alia JavaScript-kodo.

 Por labori kun mobiletto ĉe la komandlinio, uzu [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fonto
 * [mobiletto sur GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto sur npm](https://www.npmjs.com/package/mobiletto)

 ## Subteno kaj Financado
 Mi provas esti profesia liberkoda programisto. Mi laboris en
 la programara industrio dum multaj jaroj, mi komencis sukcesajn kompaniojn kaj vendis ilin al publikaj kompanioj.
 Lastatempe mi perdis mian laboron, kaj mi vere ne havas alian laboron vicigita

 Do mi provos verki helpeman programaron kaj vidi ĉu tio funkcias

 Se vi ĝuas uzi ĉi tiun programaron, mi tre dankus eĉ pro la
 plej malgranda [monata kontribuo per Patreon](https://www.patreon.com/cobbzilla)

 *Dankon!*

 ## Instalado
 Instalu uzante `npm` aŭ `yarn` . Vi verŝajne volas la version `lite` kiu ne inkluzivas ĉiujn
 tradukitaj README-dosieroj:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Se vi vere volas la README-dosierojn en ĉiu lingvo, instalu la plenan version:

    npm install mobiletto
    yarn add mobiletto

 ## Rapida Komenco
 Mallonga ekzemplo uzante la ŝoforon mobiletto `s3` .

 Ĉi tiu kodo rulus same se la ŝoforo estus `b2` aŭ `local` .

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
 ## Baza uzado
 Multe pli ampleksa ekzemplo, montranta la plej multajn el la ofertitaj funkcioj:

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

 ## Metadatumoj
 La komando `metadata` resendas metadatenojn pri ununura dosiersistem-eniro.
 Same, la revenvaloro de la komando `list` estas tabelo de metadatumaj objektoj.

 Metadatuma objekto aspektas jene:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 La `type` posedaĵo povas esti `file` , `dir` , `link` , aŭ `special` .

 Depende de la tipo de ŝoforo, komando `list` eble ne resendas ĉiujn kampojn. La `name` kaj `type`
 devus ĉiam ĉeesti. Posta `metadata` komando resendos ĉiujn disponeblajn ecojn.

 ## Alterna importa stilo
 Importu la plene-skopitan modulon kaj uzu la funkcion `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Kaŝmemoro
 Mobiletto funkcias plej bone kun <a href="https://redis.io">redis-</a> kaŝmemoro.

 Mobiletto provos konektiĝi al redis-instanco sur 127.0.0.1:6379

 Vi povas anstataŭi iun el ĉi tiuj:
 * Agordu la env var `MOBILETTO_REDIS_HOST` , mobilepor konekti ĉi tie anstataŭ lokagastiganto
 * Agordu la env `MOBILETTO_REDIS_PORT` , ĉi tiu pordo estos uzata

 Mobiletto stokos ĉiujn ĝiajn redis-ŝlosilojn kun la prefikso `_mobiletto__` . Vi povas ŝanĝi ĉi tion
 per agordo de la `MOBILETTO_REDIS_PREFIX` var.

 Vi ankaŭ povas agordi pokonektan kaŝmemoron per la objekto `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ne volas redis-kaŝmemoron?
 Por malŝalti: pasu `enabled: false` en via `opts.redisConfig` objekto kiam vi establas vian konekton.

 Kiel diskutite malsupre, malŝalti kaŝmemoron havos malfavoran efikon al rendimento kaj ricevos pli da petoj
 al stokado, kiun vi vere bezonas.

 ### Gvidlibro pri kaŝmemoro
 **Ĉifrita stokado**: legado/skribado de ĉifrita stokado estas nur iom pli malrapida ol normale,
 sed navigi tra dosierujoj (kion faras iuj aferoj) estas sufiĉe multekosta. Uzante redis-kaŝmemoron
 donos al vi signifan rendimentan akcelon.

 La defaŭlta kaŝmemoro estas sekura, sed ne funkcias bone se vi havas multajn skribi/forigi operaciojn.
 Ajna operacio de skribo aŭ forigo malvalidigas la tutan kaŝmemoron, certigante ke postaj legoj vidos la
 lastaj ŝanĝoj.

 ### CLI-iloj
 Se vi uzas CLI-ilon kiel [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 vi certe volos la redis-kaŝmemoron ebligita, ĉar ĝi daŭras tra alvokoj de la komando `mo` .

 ## Spegulado

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 La komando `mirror` faras unufojan kopion de ĉiuj dosieroj de unu mobiletto al alia.
 Ĝi ne funkciigas ajnan procezon por konservi la spegulon laŭlonge de la tempo. Rulu la komandon `mirror` denove
 por sinkronigi ajnajn mankantajn dosierojn.

 La revena valoro de `mirror` estas simpla objekto kun nombriloj por kiom da dosieroj estis sukcese
 spegulita kaj kiom da dosieroj havis erarojn:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVERTO: Speguli grandajn datumajn arojn povas esti tre temporaba kaj bendolarĝo-intensa

 Kun la `mirror` voka semantiko foje povas esti konfuze kompreni kiu estas la
 leganto kaj kiu estas la verkisto. Imagu ĝin kiel asigno deklaro: la "maldekstra mano mobiletto"
 estas la aĵo asignita al (spegulaj datumoj skribitaj), kaj la "dekstra mano" (la
 argumento al la metodo `mirror` ) estas la valoro asignita (spegulita datumo estas legata).

 ## Travidebla ĉifrado
 Ebligu travideblan klientflankan ĉifradon:

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

 Kio okazas? Aparta "dosierujo eniro" (direkta) dosierujo (ĉifrita) spuras kiajn dosierojn estas en tio
 dosierujo (alinome la dosierujo dirent).
 * La komando `list` legas la dosierujojn enirdosierojn, malĉifras ĉiun listigitan vojon; tiam resendas metadatenojn por ĉiu dosiero
 * `list` komandoj estas pli malefikaj, precipe por dosierujoj kun granda nombro da dosieroj
 * La komando `write` skribas dirent-dosierojn en la dosierujo de ĉiu gepatro, rekursie; poste skribas la dosieron
 * `write` komandoj provos O(N) skribojn, kun N = profundo en la dosierujo-hierarkio
 * La komando `remove` forigas la respondan dirent-dosieron, kaj ĝian gepatron se malplena, rekursie; tiam forigas la dosieron
 * Ne- `remove` komandoj ricevos O(N) legadojn kaj eble tiom da forigoj, kun N = profundo en la dosierujo-hierarkio
 * Rekursivaj `remove` komandoj sur grandaj kaj profundaj dosiersistemoj povas esti multekostaj

 Notu, ke eĉ kun klientflanka ĉifrado ebligita, kontraŭulo kun plena videbleco en vian ĉifritan servilflankon
 stokado, eĉ sen la ŝlosilo, ankoraŭ povas vidi la totalan nombron da dosierujoj kaj kiom da dosieroj estas en ĉiu, kaj kun
 iom da peno, malkovru iujn aŭ ĉion el la ĝenerala strukturo de la dosierujo-hierarkio.
 *Noto: Uzu relative platan strukturon por pli bona sekureco.*
 La kontraŭulo ne scius la nomojn de la dosierujoj/dosieroj krom se ili ankaŭ scius vian ĉifradon
 ŝlosilo aŭ alie sukcese fendis la ĉifradon. Ĉiuj vetoj estas forigitaj tiam!

 ### Agado kaj kaŝmemoro
 Operacioj pri ĉifrita stokado povas esti malrapidaj. Rekursivaj listoj kaj forigoj povas esti tre malrapidaj.
 Kaŝmemoro per redis helpas ege, sed notu, ke la kaŝmemoro estas purigita post iuj skriboj aŭ forigoj.

 ## Ŝlosila rotacio
 Kreu mobiletto per via nova ŝlosilo, tiam spegulu la malnovajn datumojn en ĝi:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Ŝoforinterfaco
 Ŝoforo estas ajna JS-dosiero, kiu eksportas funkcion 'storageClient' kun ĉi tiu subskribo:

    function storageClient (key, secret, opts)

 * `key` : ĉeno, via API-ŝlosilo (por la `local` ŝoforo ĉi tio estas la baza dosierujo)
 * `secret` : ĉeno, via API-sekreto (povas esti preterlasita por la `local` ŝoforo)
 * `opts` : objekto, la propraĵoj estas po-ŝoforoj:
 * Por `local` , la `fileMode` kaj `dirMode` determinas kiel novaj kreaj dosieroj kaj dosierujoj estas kreitaj
 * Por `s3` , la posedaĵo `bucket` estas bezonata. Laŭvolaj propraĵoj estas:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 La objekto, kiun resendas la funkcio storageClient, devas difini ĉi tiujn funkciojn:

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

 ## Registrado
 Mobiletto uzas la [winston](https://www.npmjs.com/package/winston) registran bibliotekon.

 Registroj **enhavos dosiervojojn kaj erarmesaĝojn, sed **neniam** enhavos ŝlosilojn, sekretojn,
 aŭ ajna alia koneksa agorda informo.

 ### Lognivelo
 Uzu la `MOBILETTO_LOG_LEVEL` por agordi la protokolnivelon, uzante unu
 de la `npm` niveloj difinitaj en [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 La defaŭlta nivelo estas `error` . La plej vorta nivelo estas `silly` , kvankam nuntempe mobiletto
 ne ensalutas je niveloj sub `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logdosiero
 Defaŭlte, la registrilo skribas al la konzolo. Por sendi protokolojn al dosiero, agordu la `MOBILETTO_LOG_FILE`
 mediovariablo. Dum ensalutado al dosiero, protokoloj ne plu estos skribitaj al la konzolo.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Por malŝalti registradon:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
