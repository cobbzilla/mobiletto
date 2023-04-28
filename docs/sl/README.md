Mobiletto
 =========

 Mobiletto je abstraktna plast za shranjevanje JavaScript z izbirnim preglednim šifriranjem na strani odjemalca.

 # Vsebina
 * [Zakaj Mobiletto?](#Zakaj-Mobiletto?)
 * [Hitri začetek](#Hitri začetek)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Vir](#Vir)
 * [Namestitev](#Namestitev)
 * [Podpora in financiranje](#Podpora-in-financiranje)
 * [Osnovna uporaba](#Basic-usage)
 * [Metapodatki](#Metapodatki)
 * [Nadomestni slog uvoza](#Alternate-import-style)
 * [Caching](#Caching)
 * [Zrcaljenje](#Zrcaljenje)
 * [Prozorno šifriranje](#Transparent-encryption)
 * [Vrtenje tipk](#Vrtenje tipk)
 * [Vmesnik gonilnika](#Vmesnik gonilnika)
 * [Beleženje](#Beleženje)

 # Preberite to v drugem jeziku
 Ta dokument README.md je bil preveden prek [hokeylization](https://github.com/cobbzilla/hokeylization) v
 **[vsak jezik, ki ga podpira Google Prevajalnik](https://cloud.google.com/translate/docs/languages)!**

 Prepričan sem, da ni popolno, a upam, da je bolje kot nič!

 [🇸🇦 arabščina](../ar/README.md)
 [🇧🇩 bengalščina](../bn/README.md)
 [🇩🇪 nemščina](../de/README.md)
 [🇺🇸 angleščina](../en/README.md)
 [🇪🇸 španščina](../es/README.md)
 [🇫🇷 francoščina](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonezijščina](../id/README.md)
 [🇮🇹 italijanščina](../it/README.md)
 [🇯🇵 japonščina](../ja/README.md)
 [🇰🇷 korejščina](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poljščina](../pl/README.md)
 [🇧🇷 portugalščina](../pt/README.md)
 [🇷🇺 rusko](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turščina](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnamščina](../vi/README.md)
 [🇨🇳 kitajščina](../zh/README.md)


 **[📚 ... Vsi jeziki ...](../README.md)**
 ----

 ### Ali obstaja težava s tem prevodom README?
 Ta poseben prevod izvirnika [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 je lahko pomanjkljivo -- *popravki so zelo dobrodošli!* Prosimo, pošljite [zahtevo za vlečenje na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ali če vam to ni všeč, [odprite težavo](https://github.com/cobbzilla/mobiletto/issues)

 Ko ustvarite novo težavo GitHub o prevodu, naredite naslednje:
 * vključite URL strani (kopirajte/prilepite iz naslovne vrstice brskalnika)
 * vključi točno besedilo, ki je napačno (kopiraj/prilepi iz brskalnika)
 * Prosimo, opišite, kaj je narobe -- ali je prevod napačen? je formatiranje nekako pokvarjeno?
 * vljudno prosim za predlog boljšega prevoda oziroma kako naj bo besedilo pravilno oblikovano
 * **Hvala vam!**

 ## Zakaj Mobiletto?

 ### Adijo zaklepanje prodajalca!
 Različni ponudniki shranjevanja v oblaku imajo nezdružljive API-je. Tudi tisti, ki si prizadevajo za "združljivost S3"
 imajo idiosinkratično vedenje.

 Ko izberete določenega prodajalca prostora za shranjevanje za svojo aplikacijo, če kodirate neposredno v njihov API, vašo aplikacijo
 je zdaj odvisen od te storitve. Ko čas mineva in se koda kopiči, pride do menjave prodajalcev
 vse bolj nevzdržno. Dobrodošli v zabavnem svetu zaklenjenosti prodajalca!

 Mobiletto je bil zasnovan za rešitev tega problema. Če svojo aplikacijo kodirate v API mobiletto, lahko enostavno
 spremenite ponudnike shranjevanja in vedite, da se bo plast shranjevanja vaše aplikacije obnašala enako.

 ### Obsežno testiranje
 Vsi vozniki so preizkušeni glede enakega obnašanja s 60+ testi za vsakega voznika.
 Testiramo vse voznike z vsako kombinacijo:
 * Šifriranje: omogočeno in onemogočeno
 * Predpomnilnik Redis: omogočen in onemogočen

 S tem pristopom smo prepričani, da se bo mobiletto obnašal enako ne glede na to, kateri gonilnik uporabljate,
 in ne glede na to, ali omogočite predpomnjenje in/ali šifriranje.

 ### Podpora za gonilnike
 Trenutni gonilniki za shranjevanje Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalni datotečni sistem

 *Prispevki za podporo več ponudnikov shranjevanja v oblaku so zelo dobrodošli!*

 ## mobiletto-cli
 Mobiletto naj bi ga kot knjižnico uporabljala druga koda JavaScript.

 Za delo z mobiletto v ukazni vrstici uporabite [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Vir
 * [mobiletto na GitHubu](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Podpora in financiranje
 Poskušam biti profesionalni razvijalec odprtokodne programske opreme. Delal sem v
 v industriji programske opreme že vrsto let ustanavljam uspešna podjetja in jih prodajam javnim podjetjem.
 Pred kratkim sem izgubil službo in pravzaprav nimam nobenega drugega dela

 Zato bom poskusil napisati uporabno programsko opremo in preveril, ali deluje

 Če radi uporabljate to programsko opremo, vam bom zelo hvaležen celo za
 najmanjši [mesečni prispevek prek Patreona](https://www.patreon.com/cobbzilla)

 *Hvala vam!*

 ## Namestitev
 Namestite z uporabo `npm` ali `yarn` . Verjetno želite `lite` različico, ki ne vključuje vseh
 prevedene datoteke README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Če res želite datoteke README v vseh jezikih, namestite polno različico:

    npm install mobiletto
    yarn add mobiletto

 ## Hiter začetek
 Kratek primer uporabe gonilnika mobiletto `s3` .

 Ta koda bi delovala enako, če bi bil gonilnik `b2` ali `local` .

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
 ## Osnovna uporaba
 Veliko obširnejši primer, ki prikazuje večino ponujenih funkcij:

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

 ## Metapodatki
 Ukaz `metadata` vrne metapodatke o posameznem vnosu datotečnega sistema.
 Podobno je vrnjena vrednost iz ukaza `list` niz metapodatkovnih objektov.

 Metapodatkovni objekt je videti takole:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Lastnost `type` type` je lahko `file` file`, `dir` , `link` ali `special` .

 Odvisno od vrste gonilnika ukaz `list` morda ne vrne vseh polj. Lastnosti `name` in `type`
 mora biti vedno prisoten. Naslednji ukaz `metadata` bo vrnil vse razpoložljive lastnosti.

 ## Nadomestni slog uvoza
 Uvozite modul s polnim obsegom in uporabite funkcijo `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Predpomnilnik
 Mobiletto najbolje deluje s predpomnilnikom <a href="https://redis.io">redis</a> .

 Mobiletto se bo poskušal povezati z instanco redis na 127.0.0.1:6379

 Preglasite lahko eno od teh možnosti:
 * Nastavite spremenljivko env `MOBILETTO_REDIS_HOST` MOBILETTO_REDIS_HOST`, mobile naj se poveže tukaj namesto lokalnega gostitelja
 * Nastavite spremenljivko env `MOBILETTO_REDIS_PORT` , ta vrata bodo uporabljena

 Mobiletto bo vse svoje ključe redis shranil s predpono `_mobiletto__` . To lahko spremenite
 z nastavitvijo `MOBILETTO_REDIS_PREFIX` env var.

 Predpomnjenje za vsako povezavo lahko nastavite tudi s predmetom `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ne želite redis predpomnjenja?
 Če želite onemogočiti: `enabled: false` v svoj objekt `opts.redisConfig` , ko vzpostavite povezavo.

 Kot je razloženo spodaj, bo onemogočanje predpomnjenja negativno vplivalo na zmogljivost in povzročilo več zahtev
 za shranjevanje, ki ga resnično potrebujete.

 ### Navodila za predpomnjenje
 **Šifrirano shranjevanje**: branje/zapisovanje v šifrirano shranjevanje je le malo počasnejše od običajnega,
 vendar je navigacija po imenikih (kar nekatere stvari počnejo) precej draga. Uporaba predpomnilnika redis
 vam bo znatno povečal učinkovitost.

 Privzeti predpomnilnik je varen, vendar ne deluje dobro, če imate veliko operacij pisanja/odstranjevanja.
 Vsaka operacija zapisovanja ali odstranjevanja razveljavi celoten predpomnilnik, kar zagotavlja, da bodo naslednja branja videla
 zadnje spremembe.

 ### Orodja CLI
 Če uporabljate orodje CLI, kot je [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 zagotovo boste želeli omogočiti predpomnilnik `mo` .

 ## Zrcaljenje

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Ukaz `mirror` izvede enkratno kopijo vseh datotek z enega mobilnega telefona na drugega.
 Ne izvaja nobenega postopka za vzdrževanje ogledala skozi čas. Znova zaženite ukaz `mirror`
 za sinhronizacijo morebitnih manjkajočih datotek.

 Vrednost, vrnjena iz `mirror` , je preprost objekt s števci za število uspešno obdelanih datotek
 zrcaljeno in koliko datotek je imelo napake:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 OPOZORILO: Zrcaljenje velikih naborov podatkov je lahko zelo zamudno in zahteva pasovno širino

 S semantiko klica `mirror` je lahko včasih zmedeno razumeti, kdo je
 bralec in kdo je pisec. Predstavljajte si to kot izjavo o dodelitvi: "levi mobiletto"
 je stvar, ki je dodeljena (zapisani zrcaljeni podatki) in "desni mobiletto" (
 argument metode `mirror` ) je vrednost, ki se dodeli (preberejo se zrcalni podatki).

 ## Transparentno šifriranje
 Omogoči pregledno šifriranje na strani odjemalca:

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

 Kaj se dogaja? Ločen "vnos imenika" (dirent) imenik (šifriran) spremlja, katere datoteke so v njem
 imenik (ali dirent imenik).
 * Ukaz `list` prebere vnosne datoteke imenika in dešifrira vsako navedeno pot; nato vrne metapodatke za vsako datoteko
 * Ukazi `list` so bolj neučinkoviti, še posebej za imenike z velikim številom datotek
 * Ukaz `write` zapiše dirent datoteke v dirent direktorij vsakega starša, rekurzivno; nato zapiše datoteko
 * Ukazi `write` bodo povzročili O(N) zapisov, pri čemer je N = globina v hierarhiji imenika
 * Ukaz `remove` odstrani ustrezno dirent datoteko in njeno nadrejeno datoteko, če je prazna; nato odstrani datoteko
 * Nerekurzivni ukazi `remove` bodo povzročili O(N) branj in potencialno prav toliko brisov, pri čemer je N = globina v hierarhiji imenika
 * Rekurzivni ukazi `remove` v velikih in globokih datotečnih sistemih so lahko dragi

 Upoštevajte, da tudi z omogočenim šifriranjem na strani odjemalca nasprotnik s popolnim vpogledom v vašo šifrirano stran strežnika
 shranjevanje lahko tudi brez ključa še vedno vidi skupno število imenikov in koliko datotek je v vsakem ter z
 malo truda, odkrijte del ali celotno celotno strukturo hierarhije imenika.
 *Opomba: za večjo varnost uporabite razmeroma ravno strukturo.*
 Nasprotnik ne bi poznal imen imenikov/datotek, razen če bi poznal tudi vaše šifriranje
 ključ ali kako drugače uspešno razbil šifriranje. Potem so vse stave izključene!

 ### Zmogljivost in predpomnjenje
 Operacije v šifriranem pomnilniku so lahko počasne. Rekurzivni seznami in odstranitve so lahko zelo počasni.
 Predpomnjenje prek redisa izjemno pomaga, vendar upoštevajte, da se predpomnilnik izprazni ob kakršnem koli zapisovanju ali odstranjevanju.

 ## Vrtenje ključev
 Ustvarite mobiletto s svojim novim ključem, nato pa vanj zrcaljite stare podatke:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Vmesnik gonilnika
 Gonilnik je katera koli datoteka JS, ki izvozi funkcijo 'storageClient' s tem podpisom:

    function storageClient (key, secret, opts)

 * `key` : niz, vaš API ključ (za `local` gonilnik je to osnovni imenik)
 * `secret` : niz, vaša skrivnost API-ja (lahko jo izpustite za `local` gonilnik)
 * `opts` : objekt, lastnosti so za vsak gonilnik:
 * Za `local` local` lastnosti `fileMode` in `dirMode` določata, kako se ustvarjajo nove datoteke in imeniki
 * Za `s3` je zahtevana lastnost `bucket` . Izbirne lastnosti so:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt, ki ga vrne funkcija storageClient, mora definirati te funkcije:

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

 ## Beleženje
 Mobiletto uporablja knjižnico za beleženje [winston](https://www.npmjs.com/package/winston).

 Dnevniki **bodo** vsebovali poti datotek in sporočila o napakah, vendar **nikoli** ne bodo vsebovali ključev, skrivnosti,
 ali katere koli druge informacije o konfiguraciji povezave.

 ### Nivo dnevnika
 Uporabite spremenljivko okolja `MOBILETTO_LOG_LEVEL` , da nastavite raven dnevnika z eno
 ravni `npm` , opredeljenih v [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Privzeta raven je `error` . Najbolj podrobna raven je `silly` , čeprav trenutno mobiletto
 se ne beleži na ravneh pod `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Dnevniška datoteka
 Privzeto beležnik piše v konzolo. Za pošiljanje dnevnikov v datoteko nastavite `MOBILETTO_LOG_FILE`
 spremenljivka okolja. Ko se prijavite v datoteko, se dnevniki ne bodo več zapisovali v konzolo.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Za izklop beleženja:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
