Mobiletto
 ==========

 Mobiletto ass eng JavaScript Späicherabstraktiounsschicht, mat optionalem transparenter Client-Säit Verschlësselung.

 # Inhalter
 * [Firwat Mobiletto?](#Why-Mobiletto?)
 * [Quickstart](#Quickstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Installatioun](#Installatioun)
 * [Support a Finanzéierung](#Support-a-Finanzéierung)
 * [Basis Benotzung](#Basis Benotzung)
 * [Metadaten](#Metadaten)
 * [Alternativ Importstil](#Alternate-Import-Style)
 * [Caching](#Caching)
 * [Spigel](#Spigel)
 * [Transparent Verschlësselung](#Transparent Verschlësselung)
 * [Schlësselrotatioun](#Schlësselrotatioun)
 * [Driver Interface](#Driver-Interface)
 * [Logging](#Logging)

 # Liest dëst an enger anerer Sprooch
 Dëst README.md Dokument gouf iwwersat, iwwer [hokeylization](https://github.com/cobbzilla/hokeylization), an
 **[all Sprooch ënnerstëtzt vu Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ech si sécher datt et net perfekt ass, awer ech hoffen et ass besser wéi näischt!

 [🇸🇦 Arabesch](../ar/README.md)
 [🇧🇩 Bengalesch](../bn/README.md)
 [🇩🇪 Däitsch](../de/README.md)
 [🇺🇸 Englesch](../en/README.md)
 [🇪🇸 Spuenesch](../es/README.md)
 [🇫🇷 Franséisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesesch](../id/README.md)
 [🇮🇹 Italienesch](../it/README.md)
 [🇯🇵 Japanesch](../ja/README.md)
 [🇰🇷 Koreanesch](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polnesch](../pl/README.md)
 [🇧🇷 Portugisesch](../pt/README.md)
 [🇷🇺 Russesch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tierkesch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesesch](../vi/README.md)
 [🇨🇳 Chinesesch](../zh/README.md)


 **[📚 ... All Sproochen ...](../README.md)**
 ----

 ### Gëtt et e Problem mat dëser Iwwersetzung vum README?
 Dës speziell Iwwersetzung vum Original [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kann fehlerhaft sinn -- *Korrekturen si ganz wëllkomm!* Schéckt w.e.g. eng [Pull Ufro op GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 oder wann Dir net bequem sidd dat ze maachen, [maacht en Thema op](https://github.com/cobbzilla/mobiletto/issues)

 Wann Dir en neit GitHub Thema iwwer eng Iwwersetzung erstellt, maacht w.e.g.:
 * enthält d'Säit URL (Kopie / Paste vun der Adressbar vum Browser)
 * enthält den exakten Text dee falsch ass (copy/paste vum Browser)
 * beschreiw w.e.g. wat falsch ass - ass d'Iwwersetzung falsch? ass d'Formatéierung iergendwéi gebrach?
 * bitt frëndlech e Virschlag fir eng besser Iwwersetzung un, oder wéi den Text richteg formatéiert soll sinn
 * **Merci!**

 ## Firwat Mobiletto?

 ### Äddi Verkeefer Spär!
 Déi verschidde Cloud Storage Ubidder hunn inkompatibel APIen. Och déi, déi no "S3 Kompatibilitéit" striewen
 hunn idiosynkratesch Verhalen.

 Wann Dir e bestëmmte Stockage Verkeefer fir Är App wielt, wann Dir direkt op hir API, Är App codéiert
 ass elo vun deem Service ofhängeg. Wéi d'Zäit vergaang ass a Code accumuléiert, verännert Verkeefer
 ëmmer méi onhaltbar. Wëllkomm op der lëschter Welt vum Verkeefer Lock-in!

 Mobiletto gouf entwéckelt fir dëse Problem ze léisen. Andeems Dir Är App op Mobiletto's API kodéiert, kënnt Dir einfach
 Ännere Späicherprovider a wësst datt d'Späicherschicht vun Ärer App identesch behuelen.

 ### Extensiv Testen
 All Chauffeuren gi fir identesch Verhalen getest mat 60+ Tester fir all Chauffeur.
 Mir testen all Chauffeuren mat all Kombinatioun vun:
 * Verschlësselung: souwuel aktivéiert wéi behënnert
 * Redis Cache: souwuel aktivéiert wéi behënnert

 Dës Approche gëtt eis Fridden vum Geescht datt den mobiletto d'selwecht wäert behuelen egal wéi ee Chauffer Dir benotzt,
 an egal ob Dir Caching an / oder Verschlësselung aktivéiert.

 ### Driver Ënnerstëtzung
 Aktuelle Mobiletto Späichertreiber:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokal Dateiesystem

 * Bäiträg fir méi Cloud Storage Ubidder z'ënnerstëtzen si ganz wëllkomm!*

 ## mobiletto-cli
 Mobiletto soll als Bibliothéik vun anere JavaScript Code benotzt ginn.

 Fir mat mobiletto op der Kommandozeil ze schaffen, benotzt [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Quell
 * [mobiletto op GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto op npm](https://www.npmjs.com/package/mobiletto)

 ## Ënnerstëtzung a Finanzéierung
 Ech probéieren e professionnelle Open Source Software Entwéckler ze sinn. Ech hu geschafft an
 der Software Industrie fir vill Joren, Ech hunn erfollegräich Betriber ugefaangen a verkaf hinnen un ëffentlech Firmen.
 Viru kuerzem hunn ech meng Aarbecht verluer, an ech hu wierklech keng aner Aarbecht opgestallt

 Also ech probéieren hëllefräich Software ze schreiwen a kucken ob dat funktionnéiert

 Wann Dir genéisst dës Software ze benotzen, Ech wier ganz dankbar fir souguer de
 klengste [monatlecht Bäitrag iwwer Patreon](https://www.patreon.com/cobbzilla)

 *Merci!*

 ## Installatioun
 Installéiere mat `npm` oder `yarn` . Dir wëllt wahrscheinlech d' `lite` Versioun déi net all
 iwwersat README Dateien:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Wann Dir wierklech d'README Dateien an all Sprooch wëllt, installéiert déi komplett Versioun:

    npm install mobiletto
    yarn add mobiletto

 ## Schnellstart
 E kuerzt Beispill mat dem mobiletto `s3` Chauffer.

 Dëse Code géif d'selwecht lafen wann de Chauffeur `b2` oder `local` .

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
 ## Basis Benotzung
 E vill méi extensiv Beispill, deen déi meescht vun de ugebueden Features weist:

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

 ## Metadaten
 De Kommando `metadata` Metadaten iwwer eng eenzeg Dateiesystementrée zréck.
 Och de `list` Kommando "Lëscht" ass eng Array vu Metadatenobjekter.

 E Metadatenobjekt gesäit esou aus:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 D'Eegeschaft `type` ' kann `file` ' , `dir` , `link` oder `special` .

 Ofhängeg vun der Aart vum Chauffer, kann e `list` Kommando net all Felder zréckginn. Den `name` an `type` Eegeschaften
 soll ëmmer präsent sinn. E spéideren `metadata` Kommando wäert all verfügbare Properties zréckginn.

 ## Alternativ Importstil
 Importéiert de komplett-scoped Modul a benotzt d' `connect` Funktioun:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto funktionnéiert am Beschten mat engem <a href="https://redis.io">Redis</a> Cache.

 Mobiletto wäert probéieren mat enger Redis Instanz op 127.0.0.1:6379 ze verbannen

 Dir kënnt entweder vun dësen iwwerschreiden:
 * Setzt den `MOBILETTO_REDIS_HOST` env var, mobiletto fir hei ze verbannen amplaz vum localhost
 * Setzt den `MOBILETTO_REDIS_PORT` env var, dësen Hafen gëtt benotzt

 Mobiletto späichert all seng Redis Schlësselen mam Präfix `_mobiletto__` . Dir kënnt dëst änneren
 andeems Dir den `MOBILETTO_REDIS_PREFIX` env var.

 Dir kënnt och Per-Connection Caching mat dem `opts.redisConfig` Objet setzen:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Wëllt Dir kee Redis Caching?
 Fir auszeschalten: pass `enabled: false` an Ärem `opts.redisConfig` Objet wann Dir Är Verbindung opstellt.

 Wéi hei ënnendrënner diskutéiert, wäert d'Caching auszeschalten en negativen Effekt op d'Performance hunn a méi Ufroe maachen
 zu Stockage datt Dir wierklech muss.

 ### Caching Leedung
 **Verschlësselte Späichere**: d'Verschlësselungslagerung liesen / schreiwen ass nëmmen e bësse méi lues wéi normal,
 mee navigéieren ronderëm Verzeechnes (wat e puer Saache maachen) ass zimlech deier. Benotzt e Redis Cache
 ginn Iech eng bedeitend Leeschtung Schwong.

 De Standard-Cache ass sécher, awer funktionnéiert net gutt wann Dir vill Schreif- / Ewechaarbechten hutt.
 All Schreif- oder Entfernungsoperatioun ongëlteg de ganze Cache, a garantéiert datt spéider Liesungen de
 lescht Ännerungen.

 ### CLI Tools
 Wann Dir e CLI Tool benotzt wéi [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Dir wëllt definitiv de Redis Cache aktivéieren, well et dauert iwwer Uruff vum `mo` Kommando.

 ## Spigelen

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 De Kommando `mirror` mécht eng eemoleg Kopie vun all Dateie vun engem Mobiletto op en aneren.
 Et leeft kee Prozess fir de Spigel iwwer Zäit z'erhalen. Run de Kommando `mirror` erëm
 fir fehlend Dateien ze synchroniséieren.

 De `mirror` vum 'Spigel' ass en einfachen Objet mat Zähler fir wéi vill Dateien erfollegräich waren
 gespigelt a wéi vill Dateie Feeler haten:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 OPGEPASST: Mirroréiere vu groussen Datesets ka ganz Zäitopwendeg a Bandbreedintensiv sinn

 Mat der `mirror` ' Call Semantik kann et heiansdo duerchernee sinn ze verstoen wien ass
 Lieser a wien de Schrëftsteller ass. Stellt Iech vir wéi eng Uerderungserklärung: de "lénkse Mobiletto"
 ass d'Saach déi zougewisen gëtt (Spigeldaten geschriwwen), an de "riets Mobiletto" (den
 Argument fir d' `mirror` Methode) ass de Wäert deen zougewisen gëtt (Spigeldaten gi gelies).

 ## Transparent Verschlësselung
 Aktivéiert transparent Client-Säit Verschlësselung:

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

 Waat leeft? Eng separat "Verzeechnesentrée" (dirent) Verzeechnes (verschlësselte) verfollegt wéi eng Dateien an deem sinn
 Verzeechnes (alias den dirent Verzeechnes).
 * De Kommando `list` liest d'Verzeechnesentrée Dateien, entschlësselt all opgelëscht Wee; gitt dann Metadaten fir all Fichier zréck
 * `list` Kommandoe si méi ineffizient, besonnesch fir Verzeichnisser mat enger grousser Zuel vu Dateien
 * De Kommando "schreiwen" schreift `write` Dateien an all Elterendeel hir dirent Verzeechnes, rekursiv; da schreift de Fichier
 * `write` Kommandoen wäerten O(N) Schreift entstoen, mat N = Déift an der Verzeechneshierarchie
 * De Kommando "läschen" läscht déi entspriechend `remove` Datei, a seng Elterendeel wann eidel, rekursiv; läscht dann d'Datei
 * Net-rekursiv `remove` Befehle wäerten O(N) liesen a potenziell sou vill Läschen, mat N = Déift an der Verzeechneshierarchie
 * Rekursiv `remove` Kommandoen op grouss an déif Dateiesystemer kënnen deier sinn

 Notéiert datt och mat Client-Säit Verschlësselung aktivéiert, e Géigner mat voller Visibilitéit op Är verschlësselte Serversäit
 Stockage, och ouni de Schlëssel, kann nach d'total Zuel vun Verzeechnes gesinn a wéivill Fichieren sinn an all, a mat
 puer Efforten , Entdeckt e puer oder all vun der Gesamtstruktur vun der directory Hierarchie.
 *Notiz: Benotzt eng relativ flaach Struktur fir besser Sécherheet.*
 De Géigner géif d'Nimm vun den Verzeichnisser/Dateien net kennen, ausser si woussten och Är Verschlësselung
 Schlëssel oder soss erfollegräich d'Verschlësselung geknackt. All Spillwette sinn dann aus!

 ### Leeschtung an Cache
 Operatiounen op verschlësselte Späichere kënne lues sinn. Rekursiv Oplëschtungen an Entfernunge kënne ganz lues sinn.
 Caching iwwer Redis hëlleft enorm, awer bemierkt datt de Cache bei all Schreiwen oder ewechgeholl gëtt.

 ## Schlëssel Rotatioun
 Erstellt e Mobiletto mat Ärem neie Schlëssel, spigelt dann déi al Daten an et:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Driver Interface
 E Chauffer ass all JS-Datei déi eng 'storageClient' Funktioun mat dëser Ënnerschrëft exportéiert:

    function storageClient (key, secret, opts)

 * `key` : eng String, Ären API Schlëssel (fir de `local` Chauffer ass dëst de Basisverzeechnes)
 * `secret` : eng String, Äert API Geheimnis (kann fir de `local` Chauffer ewechgelooss ginn)
 * `opts` : en Objet, d'Eegeschafte si pro Chauffer:
 * Fir 'lokal' bestëmmen d'Eegeschafte `fileMode` `local` `dirMode` wéi nei Dateien a Verzeichnisser erstallt ginn
 * Fir `s3` ' ass d'Eigenschaft `bucket` erfuerderlech. Optional Eegeschafte sinn:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Den Objet deen d'StorageClient Funktioun zréckkënnt muss dës Funktiounen definéieren:

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

 ## Logged
 Mobiletto benotzt d'[winston](https://www.npmjs.com/package/winston) Logbibliothéik.

 Logbicher **wäerten** Dateiweeër a Fehlermeldungen enthalen, awer wäerten **ni** Schlësselen, Geheimnisser,
 oder all aner Verbindung Configuratioun Informatiounen.

 ### Logniveau
 Benotzt d' `MOBILETTO_LOG_LEVEL` Ëmfeld Variabel fir de Logniveau ze setzen, mat engem
 vun den `npm` Niveauen definéiert an [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 De Standardniveau ass `error` . Dee verboseste Niveau ass `silly` , obwuel de Moment Mobiletto
 loggt net op Niveauen ënner `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log Datei
 Par défaut schreift de Logger op d'Konsole. Fir Logbicher op eng Datei ze schécken, set de `MOBILETTO_LOG_FILE`
 Ëmfeld Variabel. Wann Dir op eng Datei loggt, ginn d'Logbicher net méi op d'Konsole geschriwwe ginn.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Fir de Logbuch auszeschalten:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
