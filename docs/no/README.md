Mobiletto
 =========

 Mobiletto er et JavaScript-lagringsabstraksjonslag, med valgfri transparent kryptering på klientsiden.

 # Innhold
 * [Hvorfor Mobiletto?](#Why-Mobiletto?)
 * [Hurtigstart](#Hurtigstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Kilde](#Kilde)
 * [Installasjon](#Installasjon)
 * [Support and Funding](#Support-and-Funding)
 * [Grunnleggende bruk](#Grunnleggende bruk)
 * [Metadata](#Metadata)
 * [Alternativ importstil](#Alternate-import-style)
 * [Caching](#Caching)
 * [Speiling](#Speiling)
 * [Transparent kryptering](#Transparent-kryptering)
 * [Nøkkelrotasjon](#Nøkkelrotasjon)
 * [Drivergrensesnitt](#Driver-grensesnitt)
 * [Logging](#Logging)

 # Les dette på et annet språk
 Dette README.md-dokumentet har blitt oversatt, via [hokeylization](https://github.com/cobbzilla/hokeylization), til
 **[alle språk som støttes av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på at det ikke er perfekt, men jeg håper det er bedre enn ingenting!

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


 **[📚 ... Alle språk ...](../README.md)**
 ----

 ### Er det et problem med denne oversettelsen av README?
 Denne spesielle oversettelsen av originalen [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kan være feil -- *rettelser er svært velkomne!* Send en [pull request på GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 eller hvis du ikke er komfortabel med å gjøre det, [åpne et problem](https://github.com/cobbzilla/mobiletto/issues)

 Når du oppretter et nytt GitHub-problem om en oversettelse, vennligst gjør:
 * Ta med sidens URL (kopier/lim inn fra nettleserens adresselinje)
 * Ta med den eksakte teksten som er feil (kopier/lim inn fra nettleseren)
 * beskriv hva som er galt -- er oversettelsen feil? er formateringen ødelagt på en eller annen måte?
 * kom gjerne med et forslag til en bedre oversettelse, eller hvordan teksten bør formateres riktig
 * **Takk skal du ha!**

 ## Hvorfor Mobiletto?

 ### Farvel leverandørlåsing!
 De ulike skylagringsleverandørene har inkompatible APIer. Selv de som streber etter "S3-kompatibilitet"
 har idiosynkratisk oppførsel.

 Når du velger en bestemt lagringsleverandør for appen din, hvis du koder direkte til deres API, appen din
 er nå avhengig av den tjenesten. Etter hvert som tiden går og koden akkumuleres, blir det skiftende leverandører
 stadig mer uholdbar. Velkommen til den morsomme verdenen med leverandørlåsing!

 Mobiletto ble designet for å løse dette problemet. Ved å kode appen din til mobilettos API kan du enkelt
 endre lagringsleverandør og vite at appens lagringslag vil oppføre seg identisk.

 ### Omfattende testing
 Alle sjåfører testes for identisk oppførsel med 60+ tester for hver sjåfør.
 Vi tester alle sjåfører med hver kombinasjon av:
 * Kryptering: både aktivert og deaktivert
 * Redis cache: både aktivert og deaktivert

 Denne tilnærmingen gir oss trygghet om at mobiletto vil oppføre seg likt uavhengig av hvilken driver du bruker,
 og uavhengig av om du aktiverer caching og/eller kryptering.

 ### Driverstøtte
 Gjeldende Mobiletto-lagringsdrivere:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalt filsystem

 *Bidrag for å støtte flere leverandører av nettskylagring er svært velkomne!*

 ## mobiletto-cli
 Mobiletto er ment å brukes som et bibliotek av annen JavaScript-kode.

 For å jobbe med mobiletto på kommandolinjen, bruk [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Kilde
 * [mobiletto på GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto på npm](https://www.npmjs.com/package/mobiletto)

 ## Støtte og finansiering
 Jeg prøver å være en profesjonell programvareutvikler med åpen kildekode. Jeg har jobbet i
 programvareindustrien i mange år, har jeg startet suksessfulle selskaper og solgt dem til offentlige selskaper.
 Nylig mistet jeg jobben min, og jeg har egentlig ikke noe annet arbeid på rad

 Så jeg skal prøve å skrive nyttig programvare og se om det fungerer

 Hvis du liker å bruke denne programvaren, vil jeg være veldig takknemlig for selv
 minste [månedlig bidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Takk skal du ha!*

 ## Installasjon
 Installer med `npm` eller `yarn` . Du vil sannsynligvis ha `lite` versjonen som ikke inkluderer alle
 oversatte README-filer:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Hvis du virkelig vil ha README-filene på alle språk, installer fullversjonen:

    npm install mobiletto
    yarn add mobiletto

 ## Kjapp start
 Et kort eksempel ved bruk av mobiletto `s3` driveren.

 Denne koden ville kjøre det samme hvis driveren var `b2` eller `local` .

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
 ## Grunnleggende bruk
 Et mye mer omfattende eksempel som viser de fleste funksjonene som tilbys:

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
 Kommandoen `metadata` returnerer metadata om en enkelt filsystemoppføring.
 På samme måte er returverdien fra kommandoen `list` en rekke metadataobjekter.

 Et metadataobjekt ser slik ut:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Egenskapen `type` kan være `file` ' , `dir` , `link` ' eller `special` .

 Avhengig av typen driver kan det hende at en `list` kommando ikke returnerer alle feltene. Egenskapene `name` og `type` .
 skal alltid være tilstede. En påfølgende `metadata` kommando vil returnere alle tilgjengelige egenskaper.

 ## Alternativ importstil
 Importer den fullstendige modulen og bruk `connect` -funksjonen:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Buffer
 Mobiletto fungerer best med en <a href="https://redis.io">redis-</a> cache.

 Mobiletto vil forsøke å koble til en redis-forekomst på 127.0.0.1:6379

 Du kan overstyre en av disse:
 * Angi `MOBILETTO_REDIS_HOST` env var, mobiletfor å koble til her i stedet for localhost
 * Sett `MOBILETTO_REDIS_PORT` env var, denne porten vil bli brukt

 Mobiletto vil lagre alle redis-nøkler med prefikset `_mobiletto__` . Du kan endre dette
 ved å sette `MOBILETTO_REDIS_PREFIX` env var.

 Du kan også angi caching per tilkobling med `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Vil du ikke ha redis caching?
 For å deaktivere: pass `enabled: false` i `opts.redisConfig` objektet når du oppretter forbindelsen.

 Som diskutert nedenfor, vil deaktivering av caching ha en negativ effekt på ytelsen og medføre flere forespørsler
 til lagring som du virkelig trenger.

 ### Bufferveiledning
 **Kryptert lagring**: lesing/skriving av kryptert lagring er bare litt tregere enn normalt,
 men å navigere rundt i kataloger (som noen ting gjør) er ganske dyrt. Bruke en redis cache
 vil gi deg et betydelig ytelsesløft.

 Standardbufferen er trygg, men fungerer ikke bra hvis du har mange skrive-/fjernoperasjoner.
 Enhver skrive- eller fjernoperasjon ugyldiggjør hele hurtigbufferen, og sikrer at påfølgende lesninger vil se
 siste endringer.

 ### CLI-verktøy
 Hvis du bruker et CLI-verktøy som [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 du vil definitivt ha redis-cachen aktivert, siden den varer på tvers av påkallinger av `mo` kommandoen.

 ## Speiling

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` -kommandoen utfører en engangskopi av alle filer fra en mobiletto til en annen.
 Den kjører ingen prosess for å vedlikeholde speilet over tid. Kjør `mirror` -kommandoen på nytt
 for å synkronisere eventuelle manglende filer.

 Returverdien fra `mirror` er et enkelt objekt med tellere for hvor mange filer som ble vellykket
 speilet og hvor mange filer som hadde feil:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ADVARSEL: Speiling av store datasett kan være svært tidkrevende og båndbreddekrevende

 Med `mirror` kan det noen ganger være forvirrende å forstå hvem som er
 leser og hvem som er forfatter. Se for deg det som en oppgaveerklæring: "venstre mobiltto"
 er tingen som er tilordnet (speilet data skrevet), og "høyre mobiltto" (den
 argumentet til `mirror` -metoden) er verdien som tildeles (speilet data leses).

 ## Transparent kryptering
 Aktiver gjennomsiktig kryptering på klientsiden:

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

 Hva skjer? En separat "katalogoppføring" (dirent) katalog (kryptert) sporer hvilke filer som er i den
 katalog (alias den direkte katalogen).
 * Kommandoen `list` leser katalogoppføringsfilene, dekrypterer hver bane som er oppført; returnerer deretter metadata for hver fil
 * `list` kommandoer er mer ineffektive, spesielt for kataloger med et stort antall filer
 * `write` kommandoen skriver dirent-filer i hver forelders dirent-katalog, rekursivt; skriver deretter filen
 * `write` kommandoer vil medføre O(N)-skrivinger, med N = dybde i kataloghierarkiet
 * Kommandoen `remove` fjerner den korresponderende dirent-filen, og dens overordnede hvis tom, rekursivt; fjerner deretter filen
 * Ikke-rekursive `remove` -kommandoer vil medføre O(N)-lesninger og potensielt like mange slettinger, med N = dybde i kataloghierarkiet
 * Rekursive `remove` kommandoer på store og dype filsystemer kan være dyrt

 Vær oppmerksom på at selv med kryptering på klientsiden aktivert, er en motstander med full synlighet til den krypterte serversiden din
 lagring, selv uten nøkkel, kan fortsatt se det totale antallet kataloger og hvor mange filer som er i hver, og med
 litt innsats, oppdage noe eller hele den generelle strukturen til kataloghierarkiet.
 *Merk: Bruk en relativt flat struktur for bedre sikkerhet.*
 Motstanderen ville ikke vite navnene på katalogene/filene med mindre de også kjente krypteringen din
 nøkkel eller på annen måte hadde knekket krypteringen. Da er alle spill av!

 ### Ytelse og hurtigbufring
 Operasjoner på kryptert lagring kan være treg. Rekursive oppføringer og fjerninger kan være veldig sakte.
 Bufring via redis hjelper enormt, men merk at hurtigbufferen tømmes ved skriving eller fjerning.

 ## Nøkkelrotasjon
 Lag en mobiletto med den nye nøkkelen, og spei den gamle dataen inn i den:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Drivergrensesnitt
 En driver er en hvilken som helst JS-fil som eksporterer en 'storageClient'-funksjon med denne signaturen:

    function storageClient (key, secret, opts)

 * `key` : en streng, API-nøkkelen din (for den `local` driveren er dette basiskatalogen)
 * `secret` : en streng, API-hemmeligheten din (kan utelates for den `local` driveren)
 * `opts` : et objekt, egenskapene er per driver:
 * For `local` bestemmer egenskapene `fileMode` og `dirMode` hvordan nye opprettende filer og kataloger opprettes
 * For `s3` `bucket` egenskapen "bøtte". Valgfrie egenskaper er:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektet som storageClient-funksjonen returnerer må definere disse funksjonene:

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

 ## Hogst
 Mobiletto bruker loggingsbiblioteket [winston](https://www.npmjs.com/package/winston).

 Logger **vil** inneholde filstier og feilmeldinger, men vil **aldri** inneholde nøkler, hemmeligheter,
 eller annen tilkoblingskonfigurasjonsinformasjon.

 ### Loggnivå
 Bruk `MOBILETTO_LOG_LEVEL` for å angi loggnivået ved å bruke en
 av `npm` definert i [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Standardnivået er `error` . Det mest omfattende nivået er `silly` , men for øyeblikket mobiletto
 logger ikke på nivåer under `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Loggfil
 Som standard skriver loggeren til konsollen. For å sende logger til en fil, sett `MOBILETTO_LOG_FILE`
 miljøvariabel. Når du logger til en fil, vil logger ikke lenger skrives til konsollen.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Slik slår du av logging:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
