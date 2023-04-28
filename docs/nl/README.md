Mobiletto
 =========

 Mobiletto is een JavaScript-opslagabstractielaag, met optionele transparante versleuteling aan de clientzijde.

 # Inhoud
 * [Waarom Mobiletto?](#Waarom-Mobiletto?)
 * [Snelstart](#Snelstart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Bron](#Bron)
 * [Installatie](#Installatie)
 * [Ondersteuning en financiering](#Ondersteuning en financiering)
 * [Basisgebruik](#Basic-gebruik)
 * [Metagegevens](#Metagegevens)
 * [Alternatieve importstijl](#Alternatieve-importstijl)
 * [Caching](#Caching)
 * [Spiegelen](#Spiegelen)
 * [Transparante encryptie](#Transparante-encryptie)
 * [Sleutelrotatie](#Sleutelrotatie)
 * [Driver-interface](#Driver-interface)
 * [Logboekregistratie](#logboekregistratie)

 # Lees dit in een andere taal
 Dit README.md-document is via [hokeylization](https://github.com/cobbzilla/hokeylization) vertaald in
 **[elke taal ondersteund door Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ik weet zeker dat het niet perfect is, maar ik hoop dat het beter is dan niets!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Duits](../de/README.md)
 [🇺🇸 Nederlands](../en/README.md)
 [🇪🇸 Spaans](../es/README.md)
 [🇫🇷 Frans](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italiaans](../it/README.md)
 [🇯🇵 Japans](../ja/README.md)
 [🇰🇷 Koreaans](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pools](../pl/README.md)
 [🇧🇷 Portugees](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turks](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamees](../vi/README.md)
 [🇨🇳 Chinees](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is er een probleem met deze vertaling van de README?
 Deze specifieke vertaling van het origineel [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kan gebrekkig zijn -- *correcties zijn zeer welkom!* Stuur een [pull-verzoek op GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 of als u zich daar niet prettig bij voelt, [open een probleem](https://github.com/cobbzilla/mobiletto/issues)

 Wanneer u een nieuw GitHub-probleem maakt over een vertaling, doet u het volgende:
 * inclusief de pagina-URL (kopiëren/plakken uit de adresbalk van de browser)
 * voeg de exacte tekst toe die fout is (kopiëren/plakken vanuit browser)
 * beschrijf a.u.b. wat er mis is -- is de vertaling onjuist? is de opmaak op de een of andere manier kapot?
 * graag een suggestie voor een betere vertaling, of hoe de tekst correct moet worden opgemaakt
 * **Dank je!**

 ## Waarom Mobiletto?

 ### Vaarwel vendor lock-in!
 De verschillende cloudopslagproviders hebben incompatibele API's. Zelfs degenen die streven naar "S3-compatibiliteit"
 eigenzinnig gedrag hebben.

 Wanneer u een bepaalde opslagleverancier voor uw app kiest en u rechtstreeks codeert naar hun API, uw app
 is nu afhankelijk van die dienst. Naarmate de tijd verstrijkt en de code zich opstapelt, wordt het veranderen van leverancier
 steeds onhoudbaarder. Welkom in de leuke wereld van vendor lock-in!

 Mobiletto is ontworpen om dit probleem op te lossen. Door uw app te coderen naar de API van mobiletto, kunt u gemakkelijk
 verander opslagproviders en weet dat de opslaglaag van uw app zich identiek zal gedragen.

 ### Uitgebreid testen
 Alle chauffeurs worden getest op identiek gedrag met 60+ tests voor elke chauffeur.
 We testen alle chauffeurs met elke combinatie van:
 * Encryptie: zowel ingeschakeld als uitgeschakeld
 * Redis-cache: zowel ingeschakeld als uitgeschakeld

 Deze aanpak geeft ons gemoedsrust dat mobiletto zich hetzelfde zal gedragen, ongeacht welke driver je gebruikt,
 en ongeacht of u caching en/of encryptie inschakelt.

 ### Bestuurdersondersteuning
 Huidige Mobiletto-opslagstuurprogramma's:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokaal bestandssysteem

 *Bijdragen om meer cloudopslagproviders te ondersteunen zijn van harte welkom!*

 ## mobiletto-cli
 Mobiletto is bedoeld om te worden gebruikt als bibliotheek door andere JavaScript-code.

 Gebruik [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) om met mobiletto op de opdrachtregel te werken

 ## Bron
 * [mobiletto op GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto op npm](https://www.npmjs.com/package/mobiletto)

 ## Ondersteuning en financiering
 Ik probeer een professionele open source softwareontwikkelaar te worden. ik heb gewerkt in
 jarenlang in de software-industrie, heb ik succesvolle bedrijven gestart en verkocht aan openbare bedrijven.
 Onlangs verloor ik mijn baan, en ik heb niet echt ander werk op de planning

 Dus ik ga proberen nuttige software te schrijven en kijken of dat werkt

 Als u deze software graag gebruikt, zou ik u zeer dankbaar zijn, zelfs voor de
 kleinste [maandelijkse bijdrage via Patreon](https://www.patreon.com/cobbzilla)

 *Dank je!*

 ## Installatie
 Installeer met `npm` of `yarn` . U wilt waarschijnlijk de `lite` versie die niet alle
 vertaalde README-bestanden:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Als je echt de README-bestanden in elke taal wilt, installeer dan de volledige versie:

    npm install mobiletto
    yarn add mobiletto

 ## Snelle start
 Een kort voorbeeld met de mobiletto `s3` driver.

 Deze code zou hetzelfde werken als het stuurprogramma `b2` of `local` .

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
 ## Basisgebruik
 Een veel uitgebreider voorbeeld dat de meeste aangeboden functies laat zien:

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

 ## Metagegevens
 De opdracht `metadata` retourneert metadata over een enkele invoer in het bestandssysteem.
 Evenzo is de retourwaarde van de opdracht `list` een array van metadata-objecten.

 Een metadata-object ziet er als volgt uit:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 De eigenschap `type` kan `file` , `dir` , `link` of `special` .

 Afhankelijk van het type stuurprogramma, kan het zijn dat een `list` opdracht niet alle velden retourneert. De eigenschappen `name` en `type`
 moet altijd aanwezig zijn. Een volgend `metadata` commando retourneert alle beschikbare eigenschappen.

 ## Alternatieve importstijl
 Importeer de full-scoped module en gebruik de `connect` functie:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto werkt het beste met een <a href="https://redis.io">redis-</a> cache.

 Mobiletto zal proberen verbinding te maken met een redis-instantie op 127.0.0.1:6379

 U kunt een van deze overschrijven:
 * Stel de `MOBILETTO_REDIS_HOST` env var, mobiletto hier verbinden in plaats van localhost
 * Stel de `MOBILETTO_REDIS_PORT` env var in, deze poort zal worden gebruikt

 Mobiletto slaat al zijn redis-sleutels op met het voorvoegsel `_mobiletto__` . Je kunt dit veranderen
 door de `MOBILETTO_REDIS_PREFIX` env var.

 U kunt caching per verbinding ook instellen met het object `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Wil je geen redis-caching?
 Om uit te schakelen: geef `enabled: false` in uw `opts.redisConfig` object wanneer u uw verbinding tot stand brengt.

 Zoals hieronder wordt besproken, zal het uitschakelen van caching een negatief effect hebben op de prestaties en meer verzoeken veroorzaken
 tot opslag die u echt nodig heeft.

 ### Caching-begeleiding
 **Versleutelde opslag**: lezen/schrijven van versleutelde opslag gaat maar iets langzamer dan normaal,
 maar navigeren door mappen (wat sommige dingen doen) is vrij duur. Een redis-cache gebruiken
 geeft u een aanzienlijke prestatieverbetering.

 De standaardcache is veilig, maar werkt niet goed als u veel schrijf-/verwijderbewerkingen uitvoert.
 Elke schrijf- of verwijderbewerking maakt de hele cache ongeldig, zodat bij volgende leesbewerkingen de
 laatste wijzigingen.

 ### CLI-tools
 Als u een CLI-tool zoals [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) gebruikt,
 je wilt zeker dat de redis-cache is ingeschakeld, omdat deze blijft bestaan bij het aanroepen van het `mo` commando.

 ## Spiegelen

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Het `mirror` commando voert een eenmalige kopie uit van alle bestanden van de ene mobiletto naar de andere.
 Er wordt geen proces uitgevoerd om de spiegel in de loop van de tijd te onderhouden. Voer de opdracht `mirror` opnieuw uit
 om ontbrekende bestanden te synchroniseren.

 De retourwaarde van `mirror` is een eenvoudig object met tellers voor het aantal bestanden dat met succes is uitgevoerd
 gespiegeld en hoeveel bestanden fouten bevatten:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WAARSCHUWING: Het spiegelen van grote datasets kan erg tijdrovend en bandbreedte-intensief zijn

 Met de `mirror` -oproepsemantiek kan het soms verwarrend zijn om te begrijpen wie de
 lezer en wie is de schrijver. Stel je het voor als een opdrachtverklaring: de "linkse mobiletto"
 is het ding dat wordt toegewezen aan (gespiegelde gegevens geschreven), en de "right-hand mobiletto" (de
 argument voor de `mirror` methode) is de waarde die wordt toegewezen (gespiegelde gegevens worden gelezen).

 ## Transparante encryptie
 Schakel transparante versleuteling aan de clientzijde in:

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

 Wat is er gaande? Een aparte "directory entry" (dirent) directory (gecodeerd) houdt bij welke bestanden daarin staan
 directory (ook wel de dirent directory genoemd).
 * Het `list` commando leest de directory-invoerbestanden, decodeert elk vermeld pad; retourneert vervolgens metadata voor elk bestand
 * `list` commando's zijn inefficiënter, vooral voor mappen met een groot aantal bestanden
 * Het `write` commando schrijft recursief dirent-bestanden in de dirent-directory van elke ouder; schrijft vervolgens het bestand
 * `write` commando's zullen O(N) schrijfacties veroorzaken, met N = diepte in de directoryhiërarchie
 * Het `remove` commando verwijdert het corresponderende dirent-bestand, en zijn ouder indien leeg, recursief; verwijdert vervolgens het bestand
 * Niet-recursieve `remove` -commando's leiden tot O(N)-leesbewerkingen en mogelijk evenveel verwijderingen, met N = diepte in de directoryhiërarchie
 * Recursieve `remove` commando's op grote en diepe bestandssystemen kunnen duur zijn

 Merk op dat zelfs als versleuteling aan de clientzijde is ingeschakeld, een tegenstander volledig inzicht heeft in uw versleutelde server-side
 opslag, zelfs zonder de sleutel, kan nog steeds het totale aantal mappen zien en hoeveel bestanden zich in elke map bevinden, en met
 enige moeite, ontdek dan een deel of de hele algemene structuur van de directoryhiërarchie.
 *Opmerking: gebruik een relatief platte structuur voor een betere beveiliging.*
 De tegenstander zou de namen van de mappen/bestanden niet kennen, tenzij ze ook uw encryptie kenden
 sleutel of de codering op een andere manier succesvol had gekraakt. Alle weddenschappen zijn dan af!

 ### Prestaties en caching
 Bewerkingen op versleutelde opslag kunnen traag zijn. Recursieve vermeldingen en verwijderingen kunnen erg traag zijn.
 Caching via redis helpt enorm, maar houd er rekening mee dat de cache wordt leeggemaakt bij elke schrijf- of verwijderingsactie.

 ## Sleutelrotatie
 Maak een mobiletto met uw nieuwe sleutel en spiegel de oude gegevens erin:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Driver-interface
 Een stuurprogramma is elk JS-bestand dat een 'storageClient'-functie exporteert met deze handtekening:

    function storageClient (key, secret, opts)

 * `key` : een string, je API-sleutel (voor de `local` driver is dit de basisdirectory)
 * `secret` : een string, uw API-geheim (kan worden weggelaten voor de `local` driver)
 * `opts` : een object, de eigenschappen zijn per driver:
 * Voor `local` bepalen de eigenschappen `fileMode` en `dirMode` hoe nieuwe bestanden en mappen worden aangemaakt
 * Voor `s3` is de eigenschap `bucket` vereist. Optionele eigenschappen zijn:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Het object dat de functie storageClient retourneert, moet deze functies definiëren:

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

 ## Loggen
 Mobiletto gebruikt de logbibliotheek van [winston](https://www.npmjs.com/package/winston).

 Logboeken **zal** bestandspaden en foutmeldingen bevatten, maar **nooit** sleutels, geheimen,
 of andere informatie over de verbindingsconfiguratie.

 ### Log niveau
 Gebruik de `MOBILETTO_LOG_LEVEL` omgevingsvariabele om het logniveau in te stellen, met één
 van de `npm` niveaus gedefinieerd in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Het standaardniveau is `error` . Het meest uitgebreide niveau is `silly` , hoewel momenteel mobiletto
 logt niet in op niveaus onder `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logbestand
 Standaard schrijft de logger naar de console. Om logs naar een bestand te sturen, stelt u de `MOBILETTO_LOG_FILE`
 omgevingsvariabele. Wanneer u zich aanmeldt bij een bestand, worden er geen logboeken meer naar de console geschreven.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Logboekregistratie uitschakelen:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
