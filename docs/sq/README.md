Mobiletto
 =========

 Mobiletto është një shtresë abstraksioni i ruajtjes së JavaScript, me enkriptim transparent opsional nga ana e klientit.

 # Përmbajtje
 * [Pse Mobiletto?](#Pse-Mobiletto?)
 * [Fillimi i shpejtë](#Fillimi i shpejtë)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Burimi](#Burimi)
 * [Instalim](#Instalim)
 * [Mbështetje dhe financim](#Support-and-Funding)
 * [Përdorimi bazë](#Basic-usage)
 * [Metadata](#Metadata)
 * [Stil alternativ importi](#Alternate-import-style)
 * [Caching](#Caching)
 * [Pasqyrim](#Pasqyrim)
 * [Kriptimi transparent](#Transparent-encryption)
 * [Rrotullimi i çelësit](#Rrotullimi i çelësit)
 * [Ndërfaqja e shoferit](#Driver-interface)
 * [Logging](#Logging)

 # Lexojeni këtë në një gjuhë tjetër
 Ky dokument README.md është përkthyer, nëpërmjet [hokeylization](https://github.com/cobbzilla/hokeylization), në
 **[çdo gjuhë e mbështetur nga Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jam i sigurt se nuk është perfekt, por shpresoj të jetë më mirë se asgjë!

 [🇸🇦 Arabisht](../ar/README.md)
 [🇧🇩 Bengalisht](../bn/README.md)
 [🇩🇪 gjermanisht](../de/README.md)
 [🇺🇸 Anglisht](../en/README.md)
 [🇪🇸 spanjisht](../es/README.md)
 [🇫🇷 Frengjisht](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonezisht](../id/README.md)
 [🇮🇹 Italisht](../it/README.md)
 [🇯🇵 Japonisht](../ja/README.md)
 [🇰🇷 Koreane](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonisht](../pl/README.md)
 [🇧🇷 Portugeze](../pt/README.md)
 [🇷🇺 Rusisht](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turqisht](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamisht](../vi/README.md)
 [🇨🇳 Kinezisht](../zh/README.md)


 **[📚 ... Të gjitha gjuhët ...](../README.md)**
 ----

 ### A ka ndonjë problem me këtë përkthim të README?
 Ky përkthim i veçantë i origjinalit [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mund të jetë me të meta -- *korrigjimet janë shumë të mirëseardhura!* Ju lutemi dërgoni një [kërkesë për tërheqje në GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ose nëse nuk jeni të kënaqur ta bëni këtë, [hapni një çështje](https://github.com/cobbzilla/mobiletto/issues)

 Kur krijoni një problem të ri të GitHub në lidhje me një përkthim, ju lutemi bëni:
 * përfshini URL-në e faqes (kopjoni/ngjisni nga shiriti i adresave të shfletuesit)
 * përfshini tekstin e saktë që është i gabuar (kopjoni/ngjisni nga shfletuesi)
 * ju lutemi përshkruani se çfarë nuk shkon -- a është përkthimi i gabuar? a është thyer disi formatimi?
 * me mirësi ofroni një sugjerim për një përkthim më të mirë, ose se si teksti duhet të formatohet siç duhet
 * **Faleminderit!**

 ## Pse Mobiletto?

 ### Mirupafshim mbyllje e shitësit!
 Ofruesit e ndryshëm të ruajtjes së cloud kanë API të papajtueshme. Edhe ata që përpiqen për "përputhshmërinë S3"
 kanë sjellje idiosinkratike.

 Kur zgjidhni një shitës të veçantë ruajtjeje për aplikacionin tuaj, nëse kodoni drejtpërdrejt në API-në e tyre, aplikacionin tuaj
 tani është i varur nga ai shërbim. Me kalimin e kohës dhe grumbullimin e kodit, ndryshimi i shitësve bëhet
 gjithnjë e më e paqëndrueshme. Mirë se vini në botën argëtuese të mbylljes së shitësve!

 Mobiletto u krijua për të zgjidhur këtë problem. Duke koduar aplikacionin tuaj në API-në e mobiletto, ju mund të lehtë
 ndryshoni ofruesit e ruajtjes dhe dijeni se shtresa e ruajtjes së aplikacionit tuaj do të sillet në mënyrë identike.

 ### Testim i gjerë
 Të gjithë drejtuesit testohen për sjellje identike me mbi 60 teste për çdo shofer.
 Ne testojmë të gjithë drejtuesit me çdo kombinim të:
 * Kriptimi: i aktivizuar dhe i çaktivizuar
 * Redis cache: si i aktivizuar ashtu edhe i çaktivizuar

 Kjo qasje na jep paqe mendore se mobiletto do të sillet njësoj pavarësisht nga shoferi që përdorni,
 dhe pavarësisht nëse aktivizoni memorien dhe/ose enkriptimin.

 ### Mbështetje e shoferit
 Drejtuesit aktualë të ruajtjes Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistemi i skedarëve lokal

 *Kontributet për të mbështetur më shumë ofrues të ruajtjes së cloud janë shumë të mirëseardhura!*

 ## celulartto-cli
 Mobiletto synohet të përdoret si bibliotekë nga kode të tjera JavaScript.

 Për të punuar me mobiletto në linjën e komandës, përdorni [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Burimi
 * [mobiletto në GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto në npm](https://www.npmjs.com/package/mobiletto)

 ## Mbështetje dhe financim
 Po përpiqem të jem një zhvillues profesionist i softuerit me burim të hapur. Unë kam punuar në
 në industrinë e softuerit për shumë vite, kam krijuar kompani të suksesshme dhe ua kam shitur kompanive publike.
 Kohët e fundit kam humbur punën time dhe nuk kam asnjë punë tjetër të rreshtuar

 Kështu që unë do të përpiqem të shkruaj softuer të dobishëm dhe të shikoj nëse funksionon

 Nëse ju pëlqen të përdorni këtë softuer, do të isha shumë mirënjohës edhe për këtë
 më i vogël [kontributi mujor nëpërmjet Patreon](https://www.patreon.com/cobbzilla)

 *Faleminderit!*

 ## Instalimi
 Instaloni duke përdorur `npm` " ose `yarn` . Ju ndoshta dëshironi versionin `lite` që nuk i përfshin të gjitha
 Skedarët e përkthyer README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Nëse vërtet dëshironi skedarët README në çdo gjuhë, instaloni versionin e plotë:

    npm install mobiletto
    yarn add mobiletto

 ## Fillim i shpejte
 Një shembull i shkurtër duke përdorur drejtuesin e mobiletto `s3` .

 Ky kod do të funksiononte njësoj nëse drejtuesi do të ishte `b2` " ose `local` .

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
 ## Përdorimi bazë
 Një shembull shumë më i gjerë, që tregon shumicën e veçorive të ofruara:

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

 ## Të dhënat meta
 Komanda `metadata` kthen meta të dhënat për një hyrje të vetme të sistemit të skedarëve.
 Po kështu, vlera e kthyer nga komanda `list` është një grup objektesh meta të dhënash.

 Një objekt i meta të dhënave duket kështu:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` mund të jetë `file` `dir` , 'dir', `link` , ose `special` .

 Në varësi të llojit të drejtuesit, një komandë `list` mund të mos kthejë të gjitha fushat. `name` " dhe `type`
 duhet të jetë gjithmonë i pranishëm. Një komandë e mëpasshme `metadata` do të kthejë të gjitha vetitë e disponueshme.

 ## Stili i importit alternativ
 Importoni modulin me shtrirje të plotë dhe përdorni funksionin `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto funksionon më mirë me një cache <a href="https://redis.io">redis</a> .

 Mobiletto do të përpiqet të lidhet me një shembull redis në 127.0.0.1:6379

 Ju mund të anashkaloni njërën nga këto:
 * Vendosni `MOBILETTO_REDIS_HOST` env var, celular për t'u lidhur këtu në vend të hostit lokal
 * Vendosni `MOBILETTO_REDIS_PORT` env var, kjo portë do të përdoret

 Mobiletto do të ruajë të gjithë çelësat e tij redis me prefiksin `_mobiletto__` . Ju mund ta ndryshoni këtë
 duke vendosur `MOBILETTO_REDIS_PREFIX` .

 Ju gjithashtu mund të caktoni caching për lidhje me objektin `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nuk dëshironi redis caching?
 Për të çaktivizuar: kaloni `enabled: false` " në objektin tuaj `opts.redisConfig` kur krijoni lidhjen tuaj.

 Siç diskutohet më poshtë, çaktivizimi i memorjes në memorie do të ketë një efekt negativ në performancën dhe do të shkaktojë më shumë kërkesa
 në ruajtje që ju duhet vërtet.

 ### Udhëzime për ruajtjen e memories
 **Magazinimi i koduar**: leximi/shkrimi i ruajtjes së koduar është vetëm pak më i ngadalshëm se normalja,
 por lundrimi nëpër drejtori (që disa gjëra e bëjnë) është mjaft i shtrenjtë. Përdorimi i një cache redis
 do t'ju japë një rritje të konsiderueshme të performancës.

 Memoria e paracaktuar është e sigurt, por nuk funksionon mirë nëse keni shumë operacione shkrimi/fshirjeje.
 Çdo operacion shkrimi ose heqjeje e zhvlerëson të gjithë memorien e fshehtë, duke siguruar që leximet e mëvonshme do ta shohin atë
 ndryshimet e fundit.

 ### Mjetet CLI
 Nëse jeni duke përdorur një mjet CLI si [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 patjetër që do të dëshironi që cache-i redis të aktivizohet, pasi zgjat gjatë thirrjeve të komandës `mo` .

 ## Pasqyrim

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` kryen një kopje një herë të të gjithë skedarëve nga një celular në tjetrin.
 Nuk kryen asnjë proces për të ruajtur pasqyrën me kalimin e kohës. Ekzekutoni përsëri komandën `mirror`
 për të sinkronizuar çdo skedar që mungon.

 Vlera e kthyer nga `mirror` është një objekt i thjeshtë me numërues për numrin e skedarëve të suksesshëm
 pasqyruar dhe sa skedarë kishin gabime:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 PARALAJMËRIM: Pasqyrimi i grupeve të mëdha të të dhënave mund të marrë shumë kohë dhe me gjerësi brezi

 Me semantikën e quajtur `mirror` , ndonjëherë mund të jetë konfuze të kuptosh se kush është
 lexuesi dhe kush është shkrimtari. Imagjinoni si një deklaratë detyre: "mobili i dorës së majtë"
 është gjëja që i është caktuar (të dhënat e pasqyruara janë shkruar), dhe "celulari i dorës së djathtë" (i
 argumenti i metodës `mirror` ) është vlera që caktohet (lexohen të dhënat e pasqyruara).

 ## Kriptim transparent
 Aktivizo kriptim transparent nga ana e klientit:

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

 Cfare po ndodh? Një direktori e veçantë "hyrje në direktori" (dirent) (i koduar) gjurmon se cilat skedarë janë në të
 drejtoria (aka direktoria dirent).
 * `list` lexon skedarët e hyrjes në drejtori, deshifron çdo shteg të listuar; pastaj kthen meta të dhënat për çdo skedar
 * `list` janë më joefikase, veçanërisht për drejtoritë me një numër të madh skedarësh
 * `write` shkruan skedarë dirent në drejtorinë dirent të secilit prind, në mënyrë rekursive; pastaj shkruan skedarin
 * `write` do të shkaktojnë shkrime O(N), me N = thellësi në hierarkinë e drejtorisë
 * `remove` heq skedarin dirent përkatës dhe prindin e tij nëse është bosh, në mënyrë rekursive; pastaj heq skedarin
 * Komandat jo-rekurzive të `remove` do të shkaktojnë lexime O(N) dhe potencialisht po aq fshirje, me N = thellësi në hierarkinë e drejtorisë
 * Komandat rekursive `remove` në sisteme skedarësh të mëdhenj dhe të thellë mund të jenë të shtrenjta

 Vini re se edhe me enkriptimin nga ana e klientit të aktivizuar, një kundërshtar me shikueshmëri të plotë në anën tuaj të koduar nga serveri
 ruajtja, edhe pa çelësin, mund të shohë përsëri numrin e përgjithshëm të drejtorive dhe sa skedarë janë në secilën prej tyre dhe me
 disa përpjekje, zbuloni disa ose të gjithë strukturën e përgjithshme të hierarkisë së drejtorive.
 *Shënim: Përdorni një strukturë relativisht të sheshtë për siguri më të mirë.*
 Kundërshtari nuk do t'i dinte emrat e drejtorive/skedarëve nëse nuk dinte gjithashtu enkriptimin tuaj
 kyç ose kishte thyer me sukses kriprimin. Të gjitha bastet janë jashtë atëherë!

 ### Performanca dhe caching
 Operacionet në ruajtjen e koduar mund të jenë të ngadalta. Listimet dhe heqjet rekursive mund të jenë shumë të ngadalta.
 Memoria e memories nëpërmjet redis ndihmon jashtëzakonisht shumë, por kini parasysh se memoria e fshehtë shpërndahet pas çdo shkrimi ose heqjeje.

 ## Rrotullimi i tastit
 Krijoni një celular me çelësin tuaj të ri, më pas pasqyroni të dhënat e vjetra në të:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Ndërfaqja e shoferit
 Një drejtues është çdo skedar JS që eksporton një funksion 'storageClient' me këtë nënshkrim:

    function storageClient (key, secret, opts)

 * `key` : një varg, çelësi juaj API (për drejtuesin `local` ky është drejtoria bazë)
 * `secret` : një varg, sekreti juaj i API-së (mund të hiqet për drejtuesin `local` )
 * `opts` : një objekt, vetitë janë për drejtues:
 * Për `local` , `fileMode` " dhe `dirMode` përcaktojnë se si krijohen skedarë dhe drejtori të reja të krijimit
 * Për `s3` , kërkohet `bucket` . Karakteristikat opsionale janë:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekti që kthen funksioni storageClient duhet të përcaktojë këto funksione:

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

 ## Regjistrimi
 Mobiletto përdor bibliotekën e regjistrimit [winston](https://www.npmjs.com/package/winston).

 Regjistrat **do** të përmbajnë shtigje skedarësh dhe mesazhe gabimi, por **nuk** do të përmbajnë çelësa, sekrete,
 ose ndonjë informacion tjetër për konfigurimin e lidhjes.

 ### Niveli i regjistrit
 Përdorni variablin e mjedisit `MOBILETTO_LOG_LEVEL` për të vendosur nivelin e regjistrit, duke përdorur një
 e niveleve `npm` të përcaktuara në [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Niveli i parazgjedhur është `error` . Niveli më i folur është `silly` , megjithëse aktualisht është i lëvizshëm
 nuk regjistrohet në nivele nën `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Skedari i regjistrit
 Si parazgjedhje, regjistruesi shkruan në tastierë. Për të dërguar regjistrat në një skedar, caktoni `MOBILETTO_LOG_FILE`
 variabli i mjedisit. Kur regjistroheni në një skedar, regjistrat nuk do të shkruhen më në tastierë.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Për të çaktivizuar regjistrimin:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
