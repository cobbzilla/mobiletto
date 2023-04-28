Mobiletto
 =========

 Mobiletto er et JavaScript-lagerabstraktionslag med valgfri transparent kryptering på klientsiden.

 # Indhold
 * [Hvorfor Mobiletto?](#Why-Mobiletto?)
 * [Hurtig start](#Hurtigstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Kilde](#Kilde)
 * [Installation](#Installation)
 * [Support and Funding](#Support-and-Funding)
 * [Grundlæggende brug](#Basis-brug)
 * [Metadata](#Metadata)
 * [Alternativ import-stil](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparent kryptering](#Transparent-kryptering)
 * [Nøglerotation](#Nøgle-rotation)
 * [Driver-interface](#Driver-interface)
 * [Logging](#Logging)

 # Læs dette på et andet sprog
 Dette README.md-dokument er blevet oversat via [hokeylization](https://github.com/cobbzilla/hokeylization), til
 **[alle sprog understøttet af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på, at det ikke er perfekt, men jeg håber, det er bedre end ingenting!

 [🇸🇦 arabisk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 tysk](../de/README.md)
 [🇺🇸 engelsk](../en/README.md)
 [🇪🇸 spansk](../es/README.md)
 [🇫🇷 fransk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesisk](../id/README.md)
 [🇮🇹 italiensk](../it/README.md)
 [🇯🇵 japansk](../ja/README.md)
 [🇰🇷 koreansk](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polsk](../pl/README.md)
 [🇧🇷 portugisisk](../pt/README.md)
 [🇷🇺 russisk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkisk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesisk](../vi/README.md)
 [🇨🇳 kinesisk](../zh/README.md)


 **[📚 ... Alle sprog ...](../README.md)**
 ----

 ### Er der et problem med denne oversættelse af README?
 Denne særlige oversættelse af originalen [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kan være defekt -- *rettelser er meget velkomne!* Send venligst en [pull request på GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 eller hvis du ikke er tryg ved at gøre det, [åbn et problem](https://github.com/cobbzilla/mobiletto/issues)

 Når du opretter et nyt GitHub-problem om en oversættelse, skal du gøre følgende:
 * inkludere sidens URL (kopier/indsæt fra browserens adresselinje)
 * medtag den nøjagtige tekst, der er forkert (kopier/indsæt fra browser)
 * beskriv venligst hvad der er galt -- er oversættelsen forkert? er formateringen brudt på en eller anden måde?
 * kom med et forslag til en bedre oversættelse, eller hvordan teksten skal formateres korrekt
 * **Tak skal du have!**

 ## Hvorfor Mobiletto?

 ### Farvel leverandørlåsning!
 De forskellige cloud storage-udbydere har inkompatible API'er. Selv dem, der stræber efter "S3-kompatibilitet"
 har idiosynkratisk adfærd.

 Når du vælger en bestemt lagerleverandør til din app, hvis du koder direkte til deres API, din app
 er nu afhængig af den service. Efterhånden som tiden går, og koden akkumuleres, bliver det skiftende leverandører
 stadig mere uholdbare. Velkommen til den sjove verden med leverandørlåsning!

 Mobiletto blev designet til at løse dette problem. Ved at kode din app til mobiletto's API kan du nemt
 skifte lagerudbyder og vide, at din apps lagerlag vil opføre sig identisk.

 ### Omfattende test
 Alle chauffører testes for identisk adfærd med 60+ tests for hver fører.
 Vi tester alle drivere med hver kombination af:
 * Kryptering: både aktiveret og deaktiveret
 * Redis cache: både aktiveret og deaktiveret

 Denne tilgang giver os tryghed i, at mobiletto vil opføre sig ens, uanset hvilken driver du bruger,
 og uanset om du aktiverer caching og/eller kryptering.

 ### Driversupport
 Nuværende Mobiletto-lagerdrivere:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalt filsystem

 *Bidrag til at understøtte flere cloud storage-udbydere er meget velkomne!*

 ## mobiletto-cli
 Mobiletto er beregnet til at blive brugt som et bibliotek af anden JavaScript-kode.

 For at arbejde med mobiletto på kommandolinjen skal du bruge [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Kilde
 * [mobiletto på GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto på npm](https://www.npmjs.com/package/mobiletto)

 ## Støtte og finansiering
 Jeg forsøger at være en professionel open source softwareudvikler. Jeg har arbejdet i
 softwareindustrien i mange år, har jeg startet succesrige virksomheder og solgt dem til offentlige virksomheder.
 For nylig mistede jeg mit job, og jeg har ikke rigtig noget andet arbejde i kø

 Så jeg vil prøve at skrive nyttig software og se om det virker

 Hvis du kan lide at bruge denne software, ville jeg være meget taknemmelig for selv
 mindste [månedligt bidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Tak skal du have!*

 ## Installation
 Installer med `npm` eller `yarn` . Du vil sandsynligvis have `lite` versionen, der ikke inkluderer alle
 oversatte README-filer:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Hvis du virkelig vil have README-filerne på alle sprog, skal du installere den fulde version:

    npm install mobiletto
    yarn add mobiletto

 ## Hurtig start
 Et kort eksempel ved hjælp af mobiletto `s3` driveren.

 Denne kode ville køre det samme, hvis driveren var `b2` eller `local` .

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
 ## Grundlæggende brug
 Et meget mere omfattende eksempel, der viser de fleste af de tilbudte funktioner:

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
 Kommandoen `metadata` returnerer metadata om en enkelt filsystemindgang.
 På samme måde er returværdien fra kommandoen `list` en række metadataobjekter.

 Et metadataobjekt ser sådan ud:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Egenskaben `type` type` kan være `file` , `dir` , `link` link` eller `special` .

 Afhængigt af drivertypen returnerer en `list` -kommando muligvis ikke alle felter. Egenskaberne `name` og "type `type` .
 skal altid være til stede. En efterfølgende `metadata` kommando vil returnere alle tilgængelige egenskaber.

 ## Alternativ importstil
 Importer det fuldt omfangsrige modul og brug funktionen `connect` ":

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto fungerer bedst med en <a href="https://redis.io">redis-</a> cache.

 Mobiletto vil forsøge at oprette forbindelse til en redis-instans på 127.0.0.1:6379

 Du kan tilsidesætte en af disse:
 * Indstil `MOBILETTO_REDIS_HOST` env var, mobiletfor at oprette forbindelse her i stedet for localhost
 * Indstil `MOBILETTO_REDIS_PORT` env var, denne port vil blive brugt

 Mobiletto gemmer alle sine redis-nøgler med præfikset `_mobiletto__` . Du kan ændre dette
 ved at indstille `MOBILETTO_REDIS_PREFIX` env var.

 Du kan også indstille caching pr. forbindelse med objektet `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Vil du ikke have redis caching?
 For at deaktivere: `enabled: false` i dit `opts.redisConfig` objekt, når du etablerer din forbindelse.

 Som diskuteret nedenfor, vil deaktivering af caching have en negativ effekt på ydeevnen og medføre flere anmodninger
 til opbevaring, som du virkelig har brug for.

 ### Cachingvejledning
 **Krypteret lagring**: læsning/skrivning af krypteret lagring er kun en smule langsommere end normalt,
 men at navigere rundt i mapper (hvilket nogle ting gør) er ret dyrt. Brug af en redis cache
 vil give dig et markant præstationsløft.

 Standardcachen er sikker, men fungerer ikke godt, hvis du har mange skrive-/fjernhandlinger.
 Enhver skrive- eller fjernoperation ugyldiggør hele cachen, hvilket sikrer, at efterfølgende læsninger vil se
 seneste ændringer.

 ### CLI-værktøjer
 Hvis du bruger et CLI-værktøj som [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 du vil helt sikkert have redis-cachen aktiveret, da den varer på tværs af påkaldelser af `mo` kommandoen.

 ## Spejling

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Kommandoen `mirror` " udfører en engangskopi af alle filer fra en mobiletto til en anden.
 Det kører ikke nogen proces for at vedligeholde spejlet over tid. Kør kommandoen `mirror` " igen
 for at synkronisere eventuelle manglende filer.

 Returværdien fra `mirror` er et simpelt objekt med tællere for, hvor mange filer der lykkedes
 spejlet, og hvor mange filer havde fejl:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ADVARSEL: Spejling af store datasæt kan være meget tidskrævende og båndbreddekrævende

 Med `mirror` kaldet semantik kan det nogle gange være forvirrende at forstå, hvem der er
 læser og hvem der er forfatter. Forestil dig det som en opgaveerklæring: "venstre mobiltto"
 er den ting, der tildeles (spejlet data skrevet), og "højre mobiltto" (den
 argument til `mirror` -metoden) er den værdi, der tildeles (spejlede data læses).

 ## Gennemsigtig kryptering
 Aktiver gennemsigtig kryptering på klientsiden:

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

 Hvad sker der? En separat "mappeindgang" (dirent) mappe (krypteret) sporer, hvilke filer der er i den
 bibliotek (alias den dirent-mappe).
 * Kommandoen `list` læser mappeindgangsfilerne, dekrypterer hver sti på listen; returnerer derefter metadata for hver fil
 * `list` kommandoer er mere ineffektive, især for mapper med et stort antal filer
 * Kommandoen `write` skriver dirent-filer i hver forælders dirent-mappe, rekursivt; skriver derefter filen
 * `write` kommandoer vil medføre O(N)-skrivninger, med N = dybde i mappehierarkiet
 * Kommandoen `remove` fjerner den tilsvarende dirent-fil, og dens forælder, hvis den er tom, rekursivt; fjerner derefter filen
 * Ikke-rekursive `remove` -kommandoer vil medføre O(N)-læsninger og potentielt lige så mange sletninger, med N = dybde i mappehierarkiet
 * Rekursive `remove` kommandoer på store og dybe filsystemer kan være dyre

 Bemærk, at selv med klientsidekryptering aktiveret, er en modstander med fuld synlighed på din krypterede serverside
 opbevaring, selv uden nøglen, kan stadig se det samlede antal mapper og hvor mange filer der er i hver og med
 nogle anstrengelser, opdage noget af eller hele den overordnede struktur af kataloghierarkiet.
 *Bemærk: Brug en relativt flad struktur for bedre sikkerhed.*
 Modstanderen ville ikke kende navnene på mapperne/filerne, medmindre de også kendte din kryptering
 nøgle eller på anden måde havde knækket krypteringen. Så er alle væddemål slået fra!

 ### Ydeevne og cachelagring
 Operationer på krypteret lager kan være langsomme. Rekursive lister og fjernelser kan være meget langsomme.
 Caching via redis hjælper enormt, men bemærk, at cachen tømmes ved enhver skrivning eller fjernelse.

 ## Nøglerotation
 Opret en mobiletto med din nye nøgle, og spejle de gamle data ind i den:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Drivergrænseflade
 En driver er enhver JS-fil, der eksporterer en 'storageClient'-funktion med denne signatur:

    function storageClient (key, secret, opts)

 * `key` : en streng, din API-nøgle (for den `local` driver er dette basismappen)
 * `secret` : en streng, din API-hemmelighed (kan udelades for den `local` driver)
 * `opts` : et objekt, egenskaberne er pr. driver:
 * For `local` bestemmer egenskaberne `fileMode` og `dirMode` , hvordan nye oprettelsesfiler og mapper oprettes
 * For `s3` er egenskaben `bucket` påkrævet. Valgfri egenskaber er:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektet, som storageClient-funktionen returnerer, skal definere disse funktioner:

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

 ## Logning
 Mobiletto bruger logbiblioteket [winston](https://www.npmjs.com/package/winston).

 Logfiler **vil** indeholde filstier og fejlmeddelelser, men vil **aldrig** indeholde nøgler, hemmeligheder,
 eller enhver anden forbindelseskonfigurationsinformation.

 ### Logniveau
 Brug `MOBILETTO_LOG_LEVEL` til at indstille logniveauet ved at bruge en
 af `npm` -niveauerne defineret i [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Standardniveauet er `error` . Det mest udførlige niveau er `silly` , selvom det i øjeblikket er mobiletto
 logger ikke på niveauer under `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logfil
 Som standard skriver loggeren til konsollen. For at sende logfiler til en fil skal du indstille `MOBILETTO_LOG_FILE`
 miljøvariabel. Når du logger på en fil, vil der ikke længere blive skrevet logfiler til konsollen.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Sådan slår du logning fra:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
