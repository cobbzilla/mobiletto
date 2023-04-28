Mobiletto
 =========

 Mobiletto JavaScript biltegiratze abstrakzio geruza bat da, aukerako bezeroaren aldeko enkriptazio gardena duena.

 # Edukiak
 * [Zergatik Mobiletto?](#Zergatik-Mobiletto?)
 * [Hasiera azkarra](#Abiarazte azkarra)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Iturria](#Iturria)
 * [Instalazioa](#Instalazioa)
 * [Laguntza eta finantzaketa](#Support-and-Funding)
 * [Oinarrizko erabilera](#Oinarrizko erabilera)
 * [Metadatuak](#Metadatuak)
 * [Alternate inportazio estiloa](#Alternate-inportazio-estiloa)
 * [Caching](#Caching)
 * [Ispilu](#Ispilu)
 * [Enkriptatzea gardena](#Transparent-encryption)
 * [Teklaren biraketa](#Teklaren biraketa)
 * [Gidari-interfazea](#Driver-interfazea)
 * [Logging](#Logging)

 # Irakurri hau beste hizkuntza batean
 README.md dokumentu hau [hokeylization](https://github.com/cobbzilla/hokeylization) bidez itzuli da.
 **[Google Translate-k onartzen duen hizkuntza guztietan](https://cloud.google.com/translate/docs/languages)!**

 Ziur nago ez dela perfektua, baina espero dut ezer baino hobea izatea!

 [🇸🇦 arabiera](../ar/README.md)
 [🇧🇩 bengalera](../bn/README.md)
 [🇩🇪 alemana](../de/README.md)
 [🇺🇸 Ingelesa](../eu/README.md)
 [🇪🇸 Gaztelania](../es/README.md)
 [🇫🇷 frantsesa](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesiera](../id/README.md)
 [🇮🇹 italiera](../it/README.md)
 [🇯🇵 Japoniera](../ja/README.md)
 [🇰🇷 koreera](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poloniera](../pl/README.md)
 [🇧🇷 portugesa](../pt/README.md)
 [🇷🇺 errusiera](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiera](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamera](../vi/README.md)
 [🇨🇳 txinera](../zh/README.md)


 **[📚 ... Hizkuntza guztiak ...](../README.md)**
 ----

 ### Arazorik al dago IRAKURRI-ren itzulpen honekin?
 [README] jatorrizkoaren itzulpen zehatz hau (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 akatsa izan daiteke -- *zuzenketak oso ongi etorriak dira!* Bidali [pull eskaera GitHub-en](https://github.com/cobbzilla/mobiletto/pulls),
 edo hori egiten eroso ez bazaude, [ireki arazo bat](https://github.com/cobbzilla/mobiletto/issues)

 Itzulpen bati buruzko GitHub-en arazo berri bat sortzen duzunean, egin:
 * Sartu orriaren URLa (kopiatu/itsatsi arakatzailearen helbide barratik)
 * sartu oker dagoen testu zehatza (kopiatu/itsatsi arakatzailetik)
 * Mesedez, deskribatu zer dagoen gaizki -- itzulpena okerra al da? formatua hautsi al da nolabait?
 * Mesedez, eskaini itzulpen hobeago baten iradokizuna, edo testua nola formateatu behar den
 * **Eskerrik asko!**

 ## Zergatik Mobiletto?

 ### Agur saltzaileen blokeoa!
 Hodeiko biltegiratze hornitzaile ezberdinek API bateraezinak dituzte. "S3 bateragarritasuna" bilatzen dutenek ere
 jokabide idiosinkratikoak dituzte.

 Zure aplikaziorako biltegiratze-saltzaile jakin bat aukeratzen duzunean, zuzenean haien APIan kodetzen baduzu, zure aplikazioan
 zerbitzu horren menpe dago orain. Denbora pasa eta kodea pilatu ahala, saltzaileen aldaketa bihurtzen da
 gero eta jasangaitzagoa. Ongi etorri saltzaileen blokeoaren mundu dibertigarrira!

 Mobiletto arazo hau konpontzeko diseinatu zen. Zure aplikazioa mobiletto-ren APIra kodetuz, erraz egin dezakezu
 aldatu biltegiratze-hornitzaileak eta jakin zure aplikazioaren biltegiratze-geruzak berdin-berdin jokatuko duela.

 ### Proba zabalak
 Gidari guztiek portaera berdina duten probak egiten dituzte gidari bakoitzeko 60 proba baino gehiagorekin.
 Gidari guztiak probatzen ditugu honako konbinazio guztiekin:
 * Enkriptatzea: gaituta eta desgaituta
 * Redis cachea: gaituta eta desgaituta

 Ikuspegi honek lasaitasuna ematen digu mobilettok berdin jokatuko duela erabiltzen duzun gidari edozein dela ere,
 eta cachea eta/edo enkriptatzea gaitzen duzun ala ez.

 ### Gidariaren laguntza
 Egungo Mobiletto biltegiratze kontrolatzaileak:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : fitxategi-sistema lokala

 *Hodeiko biltegiratze hornitzaile gehiago laguntzeko ekarpenak oso ongi etorriak dira!*

 ## mobiletto-cli
 Mobiletto beste JavaScript kode batzuek liburutegi gisa erabiltzeko pentsatuta dago.

 Mobiletto-rekin komando lerroan lan egiteko, erabili [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Iturria
 * [mobiletto GitHub-en](https://github.com/cobbzilla/mobiletto)
 * [mobiletto npm-n](https://www.npmjs.com/package/mobiletto)

 ## Laguntza eta finantzaketa
 Kode irekiko software garatzaile profesionala izaten saiatzen ari naiz. lanean aritu naiz
 urte askotan softwarearen industrian, enpresa arrakastatsuak sortu eta enpresa publikoei saldu ditut.
 Duela gutxi lana galdu nuen, eta ez daukat beste lanik prest

 Beraz, software lagungarria idazten saiatuko naiz eta ea funtzionatzen duen

 Software hau erabiltzea gustatzen bazaizu, asko eskertuko nuke
 txikiena [Patreon bidezko hileko ekarpena](https://www.patreon.com/cobbzilla)

 *Eskerrik asko!*

 ## Instalazioa
 Instalatu `npm` edo `yarn` erabiliz. Seguruenik, `lite` bertsioa nahi duzu guztiak barne hartzen ez dituena
 itzulitako README fitxategiak:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 README fitxategiak hizkuntza guztietan nahi badituzu, instalatu bertsio osoa:

    npm install mobiletto
    yarn add mobiletto

 ## Hasiera azkarra
 Adibide labur bat mobiletto `s3` kontrolatzailea erabiliz.

 Kode hau berdin exekutatuko litzateke kontrolatzailea `b2` edo `local` .

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
 ## Oinarrizko erabilera
 Adibide askoz zabalagoa, eskaintzen diren ezaugarri gehienak erakusten dituena:

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

 ## Metadatuak
 `metadata` komandoak fitxategi-sistemako sarrera bakar bati buruzko metadatuak itzultzen ditu.
 Era berean, `list` komandoaren itzulera-balioa metadatu objektuen array bat da.

 Metadatu objektu batek itxura hau du:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` propietatea `file` , `dir` , `link` edo `special` .

 Gidari motaren arabera, `list` komandoak baliteke eremu guztiak ez itzultzea. `name` eta `type` propietateak
 beti egon behar du. Ondorengo `metadata` komando batek erabilgarri dauden propietate guztiak itzuliko ditu.

 ## Inportazio estilo alternatiboa
 Inportatu eremu osoko modulua eta erabili `connect` funtzioa:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Cachean gordetzea
 Mobiletto-k hobekien funtzionatzen du <a href="https://redis.io">redis</a> cache batekin.

 Mobiletto redis instantzia batera konektatzen saiatuko da 127.0.0.1:6379

 Hauetako bat gainidatzi dezakezu:
 * Ezarri `MOBILETTO_REDIS_HOST` env var, mugikorra hemen konektatu tokiko ostalariaren ordez
 * Ezarri `MOBILETTO_REDIS_PORT` env var, ataka hau erabiliko da

 Mobiletto-k bere redis gako guztiak gordeko ditu `_mobiletto__` aurrizkiarekin. Hau alda dezakezu
 `MOBILETTO_REDIS_PREFIX` env var.

 Konexio bakoitzeko cachea ere ezar dezakezu `opts.redisConfig` objektuarekin:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ez duzu nahi redis cachean?
 Desgaitzeko: pasa `enabled: false` zure `opts.redisConfig` objektuan zure konexioa ezartzen duzunean.

 Jarraian azaltzen den bezala, cachea desgaitzeak eragin kaltegarria izango du errendimenduan eta eskaera gehiago sortuko ditu
 benetan behar duzun biltegiratzera.

 ### Cachean gordetzeko jarraibideak
 **Biltegiratze enkriptatua**: biltegiratze enkriptatutako irakurketa/idazketa normala baino apur bat motelagoa da,
 baina direktorioetan zehar nabigatzea (gauza batzuk egiten dutena) nahiko garestia da. Redis cachea erabiliz
 errendimenduaren bultzada nabarmena emango dizu.

 Cache lehenetsia segurua da, baina ez du ondo funtzionatzen idazteko/kentzeko eragiketa asko egiten badituzu.
 Idazteko edo kentzeko eragiketa orok cache osoa baliogabetzen du, ondorengo irakurketak ikusiko duela bermatuz
 azken aldaketak.

 ### CLI tresnak
 [mobiletto-cli] bezalako CLI tresna bat erabiltzen ari bazara (https://www.npmjs.com/package/mobiletto-cli),
 zalantzarik gabe, redis cachea gaituta nahi izango duzu, `mo` komandoaren deialdietan irauten baitu.

 ## Ispilua

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` komandoak fitxategi guztien kopia bat egiten du mobiletto batetik bestera.
 Ez du prozesurik exekutatzen ispilua denboran mantentzeko. Exekutatu `mirror` komandoa berriro
 falta diren fitxategiak sinkronizatzeko.

 `mirror` -ren itzulera-balioa objektu soil bat da, zenbat fitxategi arrakastatsu izan diren kontagailuak dituena
 ispilu eta zenbat fitxategi izan dituzten erroreak:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 OHARRA: datu-multzo handiak islatzea oso denbora asko eta banda zabalera handia izan daiteke

 `mirror` dei semantikarekin batzuetan nahasgarria izan daiteke nor den ulertzea
 irakurlea eta nor den idazlea. Imajinatu esleipen adierazpen bat bezala: "ezkerreko mobiletto"
 esleitzen zaion gauza da (ispilutako datuak idatzita), eta "eskuineko mobiletto" (the
 `mirror` metodoari argumentua) esleitzen ari den balioa da (ispilutako datuak irakurtzen dira).

 ## Enkriptatzea gardena
 Gaitu bezeroaren aldeko enkriptatzea gardena:

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

 Zer ari da gertatzen? "Directory sarrera" (zuzeneko) direktorio (zifratuta) bereizi batek zer fitxategi dauden jarraitzen du
 direktorioa (aka dirent direktorioa).
 * `list` komandoak direktorioko sarrera fitxategiak irakurtzen ditu, zerrendatutako bide bakoitza deszifratzen du; ondoren, fitxategi bakoitzaren metadatuak itzultzen ditu
 * `list` komandoak eraginkorragoak dira, batez ere fitxategi kopuru handia duten direktorioetarako
 * `write` komandoak dirent fitxategiak idazten ditu guraso bakoitzaren dirent direktorioan, modu errekurtsiboan; ondoren fitxategia idazten du
 * `write` komandoek O (N) idazketak eragingo dituzte, N = sakontasuna direktorio hierarkian
 * `remove` komandoak dagokion dirent fitxategia kentzen du, eta bere gurasoa hutsik badago, errekurtsiboki; gero fitxategia kentzen du
 * `remove` komando ez-errekurtsiboek O(N) irakurketa eragingo dute eta, agian, beste hainbeste ezabatuko dituzte, N = sakontasuna direktorio hierarkian
 * `remove` komando errekurtsiboak fitxategi-sistema handi eta sakonetan garestiak izan daitezke

 Kontuan izan bezeroaren alboko enkriptatzea gaituta dagoen arren, zure zerbitzariaren enkriptatutako ikusgarritasun osoa duen arerio bat
 biltegiratzeak, gakorik gabe ere, direktorio-kopuru osoa eta bakoitzean zenbat fitxategi dauden ikus dezake
 ahalegin bat, aurki ezazu direktorio-hierarkiaren egitura orokorraren zati bat edo guztia.
 *Oharra: erabili egitura nahiko laua segurtasun hobea lortzeko.*
 Aurkariak ez luke direktorio/fitxategien izenak jakingo zure enkriptatzea ere ezagutu ezean
 gakoa edo, bestela, enkriptatzea arrakastaz pitzatu izana. Apustu guztiak desaktibatuta daude orduan!

 ### Errendimendua eta cachea
 Biltegiratze enkriptatutako eragiketak motelak izan daitezke. Zerrenda errekurtsiboak eta kentzeak oso motelak izan daitezke.
 Redis bidez gordetzeak izugarri laguntzen du, baina kontuan izan cachea idazten edo kentzen denean garbitzen dela.

 ## Teklaren biraketa
 Sortu mobiletto bat zure gako berriarekin, gero datu zaharrak bertan islatu:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Gidariaren interfazea
 Gidatzailea sinadura honekin 'storageClient' funtzio bat esportatzen duen JS fitxategia da:

    function storageClient (key, secret, opts)

 * `key` : kate bat, zure API gakoa ( `local` kontrolatzailearentzat hau da oinarrizko direktorioa)
 * `secret` : kate bat, zure API sekretua ( `local` kontrolatzailerako ezaba daiteke)
 * `opts` : objektu bat, propietateak kontrolatzaile bakoitzeko dira:
 * `local` -rako, `fileMode` eta `dirMode` propietateek zehazten dute nola sortzen diren fitxategi eta direktorio berriak sortzeko
 * `s3` -rako, `bucket` propietatea beharrezkoa da. Aukerako propietateak hauek dira:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 StorageClient funtzioak itzultzen duen objektuak funtzio hauek definitu behar ditu:

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

 ## Erregistroa
 Mobiletto-k [winston](https://www.npmjs.com/package/winston) erregistro-liburutegia erabiltzen du.

 Erregistroek **fitxategien bideak eta errore-mezuak** izango dituzte, baina **inoiz** ez dituzte izango gakoak, sekretuak,
 edo konexioaren konfigurazioko beste edozein informazio.

 ### Erregistro-maila
 Erabili `MOBILETTO_LOG_LEVEL` ingurune-aldagaia erregistro-maila ezartzeko, bat erabiliz
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) atalean definitutako `npm` mailen artean

 Maila lehenetsia `error` da. Maila `silly` da, nahiz eta gaur egun mobiletto
 ez du `debug` azpiko mailetan erregistratzen

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Erregistro fitxategia
 Lehenespenez, erregistratzaileak kontsolan idazten du. Fitxategi batera erregistroak bidaltzeko, ezarri `MOBILETTO_LOG_FILE`
 ingurune-aldagaia. Fitxategi batean saioa hastean, erregistroak ez dira gehiago kontsolan idatziko.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Saioa desaktibatzeko:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
