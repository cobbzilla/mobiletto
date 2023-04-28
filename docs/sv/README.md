Mobiletto
 =========

 Mobiletto är ett JavaScript-lagringsabstraktionslager, med valfri transparent kryptering på klientsidan.

 # Innehåll
 * [Varför Mobiletto?](#Why-Mobiletto?)
 * [Snabbstart](#Snabbstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Källa](#Källa)
 * [Installation](#Installation)
 * [Support and Funding](#Support-and-Funding)
 * [Basic usage](#Basic-usage)
 * [Metadata](#Metadata)
 * [Alternativ importstil](#Alternate-import-style)
 * [Caching](#Caching)
 * [Spegling](#Spegling)
 * [Transparent kryptering](#Transparent-kryptering)
 * [Nyckelrotation](#Key-rotation)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Läs detta på ett annat språk
 Detta README.md-dokument har översatts, via [hokeylization](https://github.com/cobbzilla/hokeylization), till
 **[alla språk som stöds av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jag är säker på att det inte är perfekt, men jag hoppas att det är bättre än ingenting!

 [🇸🇦 arabiska](../ar/README.md)
 [🇧🇩 bengaliska](../bn/README.md)
 [🇩🇪 tyska](../de/README.md)
 [🇺🇸 engelska](../en/README.md)
 [🇪🇸 spanska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesiska](../id/README.md)
 [🇮🇹 italienska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 koreanska](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polska](../pl/README.md)
 [🇧🇷 portugisiska](../pt/README.md)
 [🇷🇺 ryska](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiska](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesiska](../vi/README.md)
 [🇨🇳 kinesiska](../zh/README.md)


 **[📚 ... Alla språk ...](../README.md)**
 ----

 ### Finns det ett problem med denna översättning av README?
 Denna speciella översättning av originalet [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kan vara felaktiga -- *korrigeringar är mycket välkomna!* Skicka en [pull request på GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 eller om du inte är bekväm med att göra det, [öppna ett problem](https://github.com/cobbzilla/mobiletto/issues)

 När du skapar ett nytt GitHub-nummer om en översättning, vänligen gör:
 * inkludera sidans URL (kopiera/klistra in från webbläsarens adressfält)
 * inkludera den exakta texten som är fel (kopiera/klistra in från webbläsaren)
 * vänligen beskriv vad som är fel -- är översättningen felaktig? är formateringen trasig på något sätt?
 * kom gärna med ett förslag på en bättre översättning eller hur texten bör formateras korrekt
 * **Tack!**

 ## Varför Mobiletto?

 ### Adjö leverantörens inlåsning!
 De olika molnlagringsleverantörerna har inkompatibla API:er. Även de som strävar efter "S3-kompatibilitet"
 har idiosynkratiska beteenden.

 När du väljer en viss lagringsleverantör för din app, om du kodar direkt till deras API, din app
 är nu beroende av den tjänsten. Allt eftersom tiden går och koden ackumuleras, byter leverantörer
 allt mer ohållbar. Välkommen till den roliga världen av leverantörslåsning!

 Mobiletto designades för att lösa detta problem. Genom att koda din app till mobilettos API kan du enkelt
 byt lagringsleverantör och vet att din apps lagringslager kommer att bete sig identiskt.

 ### Omfattande testning
 Alla förare testas för identiskt beteende med 60+ tester för varje förare.
 Vi testar alla förare med varje kombination av:
 * Kryptering: både aktiverad och inaktiverad
 * Redis cache: både aktiverad och inaktiverad

 Detta tillvägagångssätt ger oss trygghet i att mobiletto kommer att bete sig likadant oavsett vilken drivrutin du använder,
 och oavsett om du aktiverar cachning och/eller kryptering.

 ### Drivrutinsstöd
 Aktuella Mobiletto-lagringsdrivrutiner:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalt filsystem

 *Bidrag för att stödja fler molnlagringsleverantörer är mycket välkomna!*

 ## mobiletto-cli
 Mobiletto är avsedd att användas som ett bibliotek av annan JavaScript-kod.

 För att arbeta med mobiletto på kommandoraden, använd [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Källa
 * [mobiletto på GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto på npm](https://www.npmjs.com/package/mobiletto)

 ## Stöd och finansiering
 Jag försöker bli en professionell mjukvaruutvecklare med öppen källkod. Jag har jobbat i
 mjukvaruindustrin i många år har jag startat framgångsrika företag och sålt dem till offentliga företag.
 Nyligen förlorade jag mitt jobb, och jag har egentligen inget annat arbete på gång

 Så jag ska försöka skriva användbar programvara och se om det fungerar

 Om du gillar att använda den här programvaran skulle jag vara mycket tacksam för även den
 minsta [månadsbidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Tack!*

 ## Installation
 Installera med `npm` eller `yarn` . Du vill förmodligen ha `lite` -versionen som inte inkluderar alla
 översatta README-filer:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Om du verkligen vill ha README-filerna på alla språk, installera den fullständiga versionen:

    npm install mobiletto
    yarn add mobiletto

 ## Snabbstart
 Ett kort exempel med drivrutinen för mobiletto `s3` .

 Den här koden skulle köras på samma sätt om drivrutinen var `b2` eller `local` .

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
 ## Grundläggande användning
 Ett mycket mer omfattande exempel som visar de flesta funktioner som erbjuds:

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
 Kommandot `metadata` returnerar metadata om en enda filsystempost.
 På samma sätt är returvärdet från kommandot `list` en array av metadataobjekt.

 Ett metadataobjekt ser ut så här:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` kan vara `file` , `dir` , `link` eller `special` .

 Beroende på typ av drivrutin kan ett `list` kommando inte returnera alla fält. `name` och `type`
 ska alltid vara närvarande. Ett efterföljande `metadata` kommando kommer att returnera alla tillgängliga egenskaper.

 ## Alternativ importstil
 Importera den fullständiga modulen och använd `connect` -funktionen:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Cachning
 Mobiletto fungerar bäst med en <a href="https://redis.io">redis-</a> cache.

 Mobiletto kommer att försöka ansluta till en redis-instans på 127.0.0.1:6379

 Du kan åsidosätta någon av dessa:
 * Ställ in `MOBILETTO_REDIS_HOST` var, mobiletto ansluta här istället för localhost
 * Ställ in `MOBILETTO_REDIS_PORT` var, denna port kommer att användas

 Mobiletto kommer att lagra alla sina redis-nycklar med prefixet `_mobiletto__` . Du kan ändra detta
 genom att ställa in `MOBILETTO_REDIS_PREFIX` var.

 Du kan också ställa in cachelagring per anslutning med objektet `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Vill du inte ha redis caching?
 För att inaktivera: skicka `enabled: false` i ditt `opts.redisConfig` objekt när du upprättar din anslutning.

 Som diskuteras nedan kommer att inaktivera cachning ha en negativ effekt på prestandan och få fler förfrågningar
 till förvaring som du verkligen behöver.

 ### Cachningsvägledning
 **Krypterad lagring**: läsning/skrivning av krypterad lagring är bara lite långsammare än normalt,
 men att navigera runt i kataloger (vilket vissa saker gör) är ganska dyrt. Använder en redis cache
 kommer att ge dig en betydande prestandaökning.

 Standardcachen är säker, men fungerar inte bra om du har många skriv-/borttagningsåtgärder.
 Varje skriv- eller borttagningsoperation ogiltigförklarar hela cachen, vilket säkerställer att efterföljande läsningar kommer att se
 senaste ändringarna.

 ### CLI-verktyg
 Om du använder ett CLI-verktyg som [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 du vill definitivt att redis-cachen är aktiverad, eftersom den varar över anrop av kommandot `mo` .

 ## Spegling

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` utför en engångskopia av alla filer från en mobiltto till en annan.
 Den kör ingen process för att underhålla spegeln över tid. Kör kommandot `mirror` igen
 för att synkronisera eventuella saknade filer.

 Returvärdet från `mirror` är ett enkelt objekt med räknare för hur många filer som lyckades
 speglade och hur många filer hade fel:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 VARNING: Spegling av stora datamängder kan vara mycket tidskrävande och bandbreddskrävande

 Med `mirror` kan det ibland vara förvirrande att förstå vem som är
 läsare och vem som är författare. Föreställ dig det som en uppgiftsbeskrivning: "vänsterhandsmobilen"
 är saken som tilldelas (speglad data skriven), och "höger mobiltto" (den
 argument till `mirror` ) är värdet som tilldelas (speglad data läses).

 ## Transparent kryptering
 Aktivera transparent kryptering på klientsidan:

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

 Vad händer? En separat "katalogpost" (dirent) katalog (krypterad) spårar vilka filer som finns i den
 katalog (alias dirent-katalogen).
 * `list` läser kataloginmatningsfilerna, dekrypterar varje listad sökväg; returnerar sedan metadata för varje fil
 * `list` kommandon är mer ineffektiva, speciellt för kataloger med ett stort antal filer
 * `write` skriver dirent-filer i varje förälders dirent-katalog, rekursivt; skriver sedan filen
 * `write` kommandon kommer att medföra O(N)-skrivningar, med N = djup i kataloghierarkin
 * `remove` tar bort motsvarande dirent-fil och dess överordnade om den är tom, rekursivt; tar sedan bort filen
 * Icke-rekursiva `remove` kommandon kommer att medföra O(N)-läsningar och potentiellt lika många borttagningar, med N = djup i kataloghierarkin
 * Rekursiva `remove` kommandon på stora och djupa filsystem kan vara dyrt

 Observera att även med kryptering på klientsidan aktiverad, en motståndare med full insyn i din krypterade serversida
 lagring, även utan nyckel, kan fortfarande se det totala antalet kataloger och hur många filer som finns i varje, och med
 lite ansträngning, upptäck en del eller hela den övergripande strukturen i kataloghierarkin.
 *Obs! Använd en relativt platt struktur för bättre säkerhet.*
 Motståndaren skulle inte veta namnen på katalogerna/filerna om de inte också kände till din kryptering
 nyckel eller på annat sätt hade lyckats knäcka krypteringen. Då är alla spel avstängda!

 ### Prestanda och cachelagring
 Operationer på krypterad lagring kan vara långsamma. Rekursiva listor och borttagningar kan vara mycket långsamma.
 Cachning via redis hjälper enormt, men observera att cachen töms vid alla skrivningar eller borttagningar.

 ## Tangentrotation
 Skapa en mobiltto med din nya nyckel och spegla sedan den gamla datan i den:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Drivrutinsgränssnitt
 En drivrutin är en JS-fil som exporterar en 'storageClient'-funktion med denna signatur:

    function storageClient (key, secret, opts)

 * `key` : en sträng, din API-nyckel (för den `local` drivrutinen är detta baskatalogen)
 * `secret` : en sträng, din API-hemlighet (kan utelämnas för den `local` drivrutinen)
 * `opts` : ett objekt, egenskaperna är per drivrutin:
 * För `local` bestämmer egenskaperna `fileMode` och `dirMode` hur nya skapande filer och kataloger skapas
 * För `s3` krävs egenskapen `bucket` . Valfria egenskaper är:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektet som storageClient-funktionen returnerar måste definiera dessa funktioner:

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

 ## Loggning
 Mobiletto använder loggningsbiblioteket [winston](https://www.npmjs.com/package/winston).

 Loggar **kommer** att innehålla sökvägar och felmeddelanden, men kommer **aldrig** att innehålla nycklar, hemligheter,
 eller annan information om anslutningskonfiguration.

 ### Loggnivå
 Använd `MOBILETTO_LOG_LEVEL` för att ställa in loggnivån med en
 av `npm` som definieras i [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Standardnivån är `error` . Den mest utförliga nivån är "fånigt", även om `silly` för närvarande är
 loggar inte på nivåer under `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Loggfil
 Som standard skriver loggern till konsolen. För att skicka loggar till en fil, ställ in `MOBILETTO_LOG_FILE`
 miljöfaktor. När du loggar till en fil kommer loggar inte längre att skrivas till konsolen.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Så här stänger du av loggning:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
