Mobiletto
 =========

 Mobiletto is 'n JavaScript berging abstraksie laag, met opsionele deursigtige kliënt-kant enkripsie.

 # Inhoud
 * [Hoekom Mobiletto?](#Why-Mobiletto?)
 * [Vinnige begin](#Vinnige begin)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Bron](#Bron)
 * [Installasie](#Installasie)
 * [Ondersteuning en befondsing](#Ondersteuning-en-befondsing)
 * [Basiese gebruik](#Basiese gebruik)
 * [Metadata](#Metadata)
 * [Alternatiewe invoerstyl](#Alternatiewe invoerstyl)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Deursigtige enkripsie](#Deursigtige-enkripsie)
 * [Sleutelrotasie](#Sleutelrotasie)
 * [Drywer-koppelvlak](#Drywer-koppelvlak)
 * [Logging](#Logging)

 # Lees dit in 'n ander taal
 Hierdie README.md-dokument is vertaal, via [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[elke taal wat deur Google Translate ondersteun word](https://cloud.google.com/translate/docs/languages)!**

 Ek is seker dit is nie perfek nie, maar ek hoop dit is beter as niks!

 [🇸🇦 Arabies](../ar/README.md)
 [🇧🇩 Bengaals](../bn/README.md)
 [🇩🇪 Duits](../de/README.md)
 [🇺🇸 Engels](../en/README.md)
 [🇪🇸 Spaans](../es/README.md)
 [🇫🇷 Frans](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesies](../id/README.md)
 [🇮🇹 Italiaans](../it/README.md)
 [🇯🇵 Japannees](../ja/README.md)
 [🇰🇷 Koreaans](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pools](../pl/README.md)
 [🇧🇷 Portugees](../pt/README.md)
 [🇷🇺 Russies](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turks](../tr/README.md)
 [🇵🇰 Oerdoe](../ur/README.md)
 [🇻🇳 Viëtnamees](../vi/README.md)
 [🇨🇳 Chinees](../zh/README.md)


 **[📚 ... Alle tale ...](../README.md)**
 ----

 ### Is daar 'n probleem met hierdie vertaling van die README?
 Hierdie spesifieke vertaling van die oorspronklike [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mag gebrekkig wees -- *regstellings is baie welkom!* Stuur asseblief 'n [trekversoek op GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 of as jy nie gemaklik is om dit te doen nie, [maak 'n kwessie oop](https://github.com/cobbzilla/mobiletto/issues)

 Wanneer jy 'n nuwe GitHub-uitgawe oor 'n vertaling skep, doen asseblief:
 * sluit die bladsy-URL in (kopieer/plak vanaf blaaieradresbalk)
 * sluit die presiese teks in wat verkeerd is (kopieer/plak vanaf blaaier)
 * Beskryf asseblief wat fout is -- is die vertaling verkeerd? is die formatering op een of ander manier gebreek?
 * Bied asseblief 'n voorstel van 'n beter vertaling, of hoe die teks behoorlik geformateer moet word
 * **Dankie!**

 ## Hoekom Mobiletto?

 ### Totsiens verkoper toesluit!
 Die verskillende wolkbergingsverskaffers het onversoenbare API's. Selfs diegene wat streef na "S3-versoenbaarheid"
 idiosinkratiese gedrag het.

 As jy 'n spesifieke bergingverskaffer vir jou program kies, as jy direk na hul API, jou program, kodeer
 is nou van daardie diens afhanklik. Soos die tyd verbygaan en kode ophoop, word veranderende verskaffers
 toenemend onhoudbaar. Welkom by die prettige wêreld van verskaffer-toesluit!

 Mobiletto is ontwerp om hierdie probleem op te los. Deur jou toepassing na Mobiletto se API te kodeer, kan jy maklik
 verander bergingverskaffers en weet dat jou toepassing se berginglaag identies sal optree.

 ### Uitgebreide toetsing
 Alle bestuurders word getoets vir identiese gedrag met 60+ toetse vir elke bestuurder.
 Ons toets alle bestuurders met elke kombinasie van:
 * Enkripsie: beide geaktiveer en gedeaktiveer
 * Redis-kas: beide geaktiveer en gedeaktiveer

 Hierdie benadering gee ons gemoedsrus dat mobiletto dieselfde sal optree, ongeag watter bestuurder jy gebruik,
 en ongeag of jy caching en/of enkripsie aktiveer.

 ### Bestuurderondersteuning
 Huidige Mobiletto-bergingbestuurders:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : plaaslike lêerstelsel

 *Bydraes om meer wolkbergingverskaffers te ondersteun is baie welkom!*

 ## mobiletto-cli
 Mobiletto is bedoel om as 'n biblioteek deur ander JavaScript-kode gebruik te word.

 Om met mobiletto by die opdragreël te werk, gebruik [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Bron
 * [mobiletto op GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto op npm](https://www.npmjs.com/package/mobiletto)

 ## Ondersteuning en befondsing
 Ek probeer om 'n professionele oopbron sagteware-ontwikkelaar te wees. Ek het gewerk in
 die sagteware-industrie vir baie jare, het ek suksesvolle maatskappye begin en dit aan openbare maatskappye verkoop.
 Onlangs het ek my werk verloor, en ek het nie regtig enige ander werk in die ry nie

 So ek gaan probeer om nuttige sagteware te skryf en kyk of dit werk

 As jy dit geniet om hierdie sagteware te gebruik, sal ek baie dankbaar wees vir selfs die
 kleinste [maandelikse bydrae via Patreon](https://www.patreon.com/cobbzilla)

 *Dankie!*

 ## Installasie
 Installeer met `npm` of `yarn` . Jy wil waarskynlik die `lite` weergawe hê wat nie al die
 vertaalde README-lêers:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 As jy regtig die README-lêers in elke taal wil hê, installeer die volledige weergawe:

    npm install mobiletto
    yarn add mobiletto

 ## Vinnige begin
 'n Kort voorbeeld wat die mobiletto `s3` bestuurder gebruik.

 Hierdie kode sal dieselfde loop as die bestuurder `b2` of `local` .

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
 ## Basiese gebruik
 'N Veel meer uitgebreide voorbeeld, wat die meeste van die kenmerke wat aangebied word, toon:

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
 Die `metadata` -opdrag gee metadata oor 'n enkele lêerstelsel-inskrywing terug.
 Net so is die terugkeerwaarde van die `list` -opdrag 'n verskeidenheid metadata-objekte.

 'n Metadata-objek lyk soos volg:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Die `type` eienskap kan `file` , `dir` , `link` of `special` .

 Afhangende van die tipe bestuurder, sal 'n `list` -opdrag dalk nie alle velde terugstuur nie. Die `name` en `type` eienskappe
 moet altyd teenwoordig wees. 'n Volgende `metadata` -opdrag sal alle beskikbare eienskappe terugstuur.

 ## Alternatiewe invoerstyl
 Voer die volledig-omvang module in en gebruik die `connect` funksie:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Kas
 Mobiletto werk die beste met 'n <a href="https://redis.io">herdis-</a> kas.

 Mobiletto sal probeer om aan 'n herdis-instansie te koppel op 127.0.0.1:6379

 Jy kan enige van hierdie ignoreer:
 * Stel die `MOBILETTO_REDIS_HOST` env var, mobiletto om hier te koppel in plaas van localhost
 * Stel die `MOBILETTO_REDIS_PORT` env var, hierdie poort sal gebruik word

 Mobiletto sal al sy herdissleutels met die voorvoegsel `_mobiletto__` . Jy kan dit verander
 deur die `MOBILETTO_REDIS_PREFIX` env var.

 Jy kan ook per-verbinding caching stel met die `opts.redisConfig` voorwerp:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Wil jy nie herdis-cache hê nie?
 Om te deaktiveer: gee `enabled: false` in jou `opts.redisConfig` voorwerp deur wanneer jy jou verbinding tot stand bring.

 Soos hieronder bespreek, sal die deaktivering van cache 'n nadelige uitwerking op werkverrigting hê en meer versoeke aangaan
 tot berging wat jy regtig nodig het.

 ### Kas leiding
 **Geënkripteerde berging**: lees/skryf van geënkripteerde berging is net 'n bietjie stadiger as normaal,
 maar om deur gidse te navigeer (wat sommige dinge doen) is redelik duur. Gebruik 'n herdis-kas
 sal jou 'n aansienlike prestasie hupstoot gee.

 Die verstekkas is veilig, maar werk nie goed as jy baie skryf/verwyder-bewerkings het nie.
 Enige skryf- of verwyderbewerking maak die hele kas ongeldig, om te verseker dat daaropvolgende lees die
 jongste veranderinge.

 ### CLI-gereedskap
 As jy 'n CLI-nutsding soos [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) gebruik),
 jy sal beslis die redis-kas geaktiveer wil hê, want dit duur oor die oproepe van die `mo` opdrag.

 ## Spieëling

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Die `mirror` -opdrag voer 'n eenmalige kopie van alle lêers van een mobiletto na 'n ander uit.
 Dit voer geen proses uit om die spieël oor tyd in stand te hou nie. Voer die `mirror` opdrag weer uit
 om enige ontbrekende lêers te sinchroniseer.

 Die terugkeerwaarde van `mirror` is 'n eenvoudige voorwerp met tellers vir hoeveel lêers suksesvol was
 weerspieël en hoeveel lêers het foute gehad:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WAARSKUWING: Die spieël van groot datastelle kan baie tydrowend en bandwydte-intensief wees

 Met die `mirror` oproep semantiek kan dit soms verwarrend wees om te verstaan wie die is
 leser en wie die skrywer is. Stel jou dit voor soos 'n opdragstelling: die "linkerhandse mobiletto"
 is die ding waaraan toegewys word (weerspieël data geskryf), en die "regterhand mobiletto" (die
 argument aan die `mirror` metode) is die waarde wat toegeken word (gespieëlde data word gelees).

 ## Deursigtige enkripsie
 Aktiveer deursigtige kliënt-kant-enkripsie:

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

 Wat is besig om te gebeur? 'n Aparte "gidsinskrywing" (dirent) gids (geïnkripteer) spoor watter lêers daarin is
 gids (ook bekend as die dirent gids).
 * Die `list` -opdrag lees die gidsinskrywingslêers, dekripteer elke pad wat gelys is; gee dan metadata vir elke lêer terug
 * `list` -opdragte is meer ondoeltreffend, veral vir dopgehou met 'n groot aantal lêers
 * Die `write` opdrag skryf dirent lêers in elke ouer se dirent gids, rekursief; skryf dan die lêer
 * `write` opdragte sal O(N) skryfwerk aangaan, met N = diepte in die gidshiërargie
 * Die `remove` opdrag verwyder die ooreenstemmende dirent lêer, en sy ouer indien leeg, rekursief; verwyder dan die lêer
 * Nie-rekursiewe `remove` en moontlik soveel verwyderings aangaan, met N = diepte in die gidshiërargie
 * Rekursiewe `remove` opdragte op groot en diep lêerstelsels kan duur wees

 Let daarop dat selfs met kliënt-kant-enkripsie geaktiveer, 'n teëstander met volle sigbaarheid in jou geënkripteerde bedienerkant
 berging, selfs sonder die sleutel, kan steeds die totale aantal dopgehou sien en hoeveel lêers in elk is, en met
 'n bietjie moeite, ontdek sommige of al die algehele struktuur van die gidshiërargie.
 *Let wel: Gebruik 'n relatief plat struktuur vir beter sekuriteit.*
 Die teëstander sal nie die name van die gidse/lêers ken nie, tensy hulle ook jou enkripsie ken
 sleutel of andersins die enkripsie suksesvol gekraak het. Alle weddenskappe is dan af!

 ### Prestasie en kas
 Bewerkings op geënkripteerde berging kan stadig wees. Rekursiewe lyste en verwyderings kan baie stadig wees.
 Cache via redis help geweldig, maar let daarop dat die kas gespoel word met enige skryf of verwydering.

 ## Sleutelrotasie
 Skep 'n mobiletto met jou nuwe sleutel en spieël dan die ou data daarin:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Bestuurder-koppelvlak
 'n Bestuurder is enige JS-lêer wat 'n 'storageClient'-funksie uitvoer met hierdie handtekening:

    function storageClient (key, secret, opts)

 * `key` : 'n string, jou API-sleutel (vir die `local` drywer is dit die basisgids)
 * `secret` : 'n string, jou API-geheim (kan weggelaat word vir die `local` drywer)
 * `opts` : 'n voorwerp, die eienskappe is per bestuurder:
 * Vir `local` die `fileMode` en `dirMode` eienskappe hoe nuwe skeplêers en dopgehou geskep word
 * Vir `s3` word die `bucket` eienskap vereis. Opsionele eienskappe is:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Die objek wat die storageClient-funksie terugstuur, moet hierdie funksies definieer:

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

 ## Teken
 Mobiletto gebruik die [winston](https://www.npmjs.com/package/winston) aantekenbiblioteek.

 Logs **sal** lêerpaaie en foutboodskappe bevat, maar sal **nooit** sleutels, geheime,
 of enige ander verbinding konfigurasie inligting.

 ### Log vlak
 Gebruik die `MOBILETTO_LOG_LEVEL` omgewingsveranderlike om die logvlak te stel deur een te gebruik
 van die `npm` vlakke gedefinieer in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Die verstekvlak is `error` . Die mees verbose vlak is `silly` , hoewel tans mobiletto
 teken nie aan op vlakke onder `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Loglêer
 By verstek skryf die logger na die konsole. Om logs na 'n lêer te stuur, stel die `MOBILETTO_LOG_FILE`
 omgewingsveranderlike. Wanneer u by 'n lêer aanteken, sal logs nie meer na die konsole geskryf word nie.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Om aantekening af te skakel:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
