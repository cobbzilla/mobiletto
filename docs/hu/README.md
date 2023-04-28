Mobiletto
 =========

 A Mobiletto egy JavaScript tárolási absztrakciós réteg, opcionális transzparens kliensoldali titkosítással.

 # Tartalom
 * [Miért Mobiletto?](#Miért-Mobiletto?)
 * [Gyors indítás](#Gyorsindítás)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Forrás](#Forrás)
 * [Telepítés](#Telepítés)
 * [Támogatás és finanszírozás](#Support-and-Funding)
 * [Alaphasználat](#Basic-usage)
 * [Metaadatok](#Metadata)
 * [Alternatív importstílus](#Alternate-import-style)
 * [Gyorsítótárazás](#Caching)
 * [Tükrözés](#Tükrözés)
 * [Átlátszó titkosítás](#Transparent-encryption)
 * [Key-rotation](#Key-rotation)
 * [Illesztőprogram-felület](#Driver-interface)
 * [Naplózás](#naplózás)

 # Olvassa el ezt egy másik nyelven
 Ezt a README.md dokumentumot a [hokeylization](https://github.com/cobbzilla/hokeylization) segítségével lefordították nyelvre
 **[a Google Fordító által támogatott minden nyelv](https://cloud.google.com/translate/docs/languages)!**

 Biztos vagyok benne, hogy nem tökéletes, de remélem, jobb a semminél!

 [🇸🇦 arab](../ar/README.md)
 [🇧🇩 bengáli](../bn/README.md)
 [🇩🇪 német](../de/README.md)
 [🇺🇸 angol](../en/README.md)
 [🇪🇸 spanyol](../es/README.md)
 [🇫🇷 francia](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonéz](../id/README.md)
 [🇮🇹 olasz](../it/README.md)
 [🇯🇵 japán](../ja/README.md)
 [🇰🇷 koreai](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 lengyel](../pl/README.md)
 [🇧🇷 portugál](../pt/README.md)
 [🇷🇺 orosz](../ru/README.md)
 [🇰🇪 szuahéli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 török](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 kínai](../zh/README.md)


 **[📚 ... Minden nyelv ...](../README.md)**
 ----

 ### Probléma van a README fordításával?
 Ez a konkrét fordítás az eredeti [README]-nek (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 hibás lehet -- *a javításokat nagyon szívesen fogadjuk!* Kérjük, küldjön [lehívási kérelmet a GitHubon](https://github.com/cobbzilla/mobiletto/pulls),
 vagy ha nem érzi jól magát, [nyisson meg egy problémát](https://github.com/cobbzilla/mobiletto/issues)

 Amikor új GitHub-kiadást hoz létre egy fordítással kapcsolatban, tegye a következőket:
 * tartalmazza az oldal URL-jét (másolás/beillesztés a böngésző címsorából)
 * Pontosan adja meg a hibás szöveget (másolás/beillesztés a böngészőből)
 * Kérem írja le, mi a hiba -- hibás a fordítás? elromlott valahogy a formázás?
 * Kérem, tegyen javaslatot jobb fordításra, vagy a szöveg helyes formázására
 * **Köszönöm!**

 ## Miért a Mobiletto?

 ### Viszlát szállítói bezárás!
 A különböző felhőalapú tárolási szolgáltatók nem kompatibilis API-kkal rendelkeznek. Még azok is, amelyek "S3-kompatibilitásra" törekszenek
 sajátos viselkedésük van.

 Amikor kiválaszt egy adott tárhelyszolgáltatót az alkalmazáshoz, ha közvetlenül az API-jába, az alkalmazásába kódol
 most ettől a szolgáltatástól függ. Ahogy telik az idő, és a kód felhalmozódik, úgy válik a változó szállítókká
 egyre tarthatatlanabb. Üdvözöljük a szállítói bezárás szórakoztató világában!

 A Mobiletto-t ennek a problémának a megoldására tervezték. Ha az alkalmazást a mobiletto API-jába kódolja, egyszerűen megteheti
 váltson tárhelyszolgáltatót, és tudja, hogy az alkalmazás tárhelyrétege azonos módon fog viselkedni.

 ### Kiterjedt tesztelés
 Minden illesztőprogram azonos viselkedését tesztelik, minden vezetőnél több mint 60 tesztet végeznek.
 Minden illesztőprogramot tesztelünk a következők minden kombinációjával:
 * Titkosítás: engedélyezett és letiltott
 * Redis cache: engedélyezett és letiltott

 Ez a megközelítés nyugalmat biztosít számunkra, hogy a mobiletto ugyanúgy fog viselkedni, függetlenül attól, hogy melyik illesztőprogramot használja,
 és függetlenül attól, hogy engedélyezi-e a gyorsítótárazást és/vagy a titkosítást.

 ### Illesztőprogram-támogatás
 Jelenlegi Mobiletto tároló-illesztőprogramok:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : helyi fájlrendszer

 *Nagyon szívesen fogadjuk a további felhőalapú tárolási szolgáltatók támogatását!*

 ## mobiletto-cli
 A Mobiletto-t más JavaScript-kódok könyvtárként kívánják használni.

 A mobiletto parancssori használatához használja a [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) parancsot.

 ## Forrás
 * [mobiletto a GitHubon](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Támogatás és finanszírozás
 Megpróbálok professzionális nyílt forráskódú szoftverfejlesztő lenni. ben dolgoztam
 A szoftveriparban évek óta sikeres cégeket alapítottam, amelyeket állami cégeknek adtam el.
 Nemrég elvesztettem a munkámat, és nem igazán van más dolgom

 Tehát megpróbálok hasznos szoftvereket írni, és megnézem, működik-e

 Ha szívesen használja ezt a szoftvert, nagyon hálás lennék még a
 legkisebb [havi hozzájárulás a Patreonon keresztül](https://www.patreon.com/cobbzilla)

 *Köszönöm!*

 ## Telepítés
 Telepítés az `npm` vagy a `yarn` . Valószínűleg a `lite` verziót szeretné, amely nem tartalmazza az összes
 lefordított README fájlok:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ha valóban szeretné a README fájlokat minden nyelven, telepítse a teljes verziót:

    npm install mobiletto
    yarn add mobiletto

 ## Gyors indítás
 Egy rövid példa a mobiletto `s3` illesztőprogram használatára.

 Ez a kód ugyanúgy futna, ha az illesztőprogram `b2` vagy `local` .

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
 ## Alapvető használat
 Egy sokkal kiterjedtebb példa, amely bemutatja a legtöbb kínált szolgáltatást:

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

 ## Metaadatok
 A `metadata` parancs egyetlen fájlrendszer-bejegyzés metaadatait adja vissza.
 Hasonlóképpen, a `list` parancs visszatérési értéke metaadat-objektumok tömbje.

 Egy metaadat objektum így néz ki:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 A `type` type" tulajdonság lehet `file` " , `link` `dir` " , "link" vagy `special` .

 Az illesztőprogram típusától függően előfordulhat, hogy a `list` parancs nem adja vissza az összes mezőt. A `name` és a `type` tulajdonságok
 mindig jelen kell lennie. A következő `metadata` parancs minden elérhető tulajdonságot visszaad.

 ## Alternatív importálási stílus
 Importálja a teljes körű modult, és használja a `connect` funkciót:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Gyorsítótár
 A Mobiletto a <a href="https://redis.io">redis</a> gyorsítótárral működik a legjobban.

 A Mobiletto megpróbál csatlakozni egy redis példányhoz a 127.0.0.1:6379 címen

 A következők bármelyikét felülbírálhatja:
 * Állítsa be a `MOBILETTO_REDIS_HOST` env var-t, a mobilhoz itt csatlakozzon a localhost helyett
 * Állítsa be a `MOBILETTO_REDIS_PORT` env var értékét, ez a port lesz használatban

 A Mobiletto az összes redis kulcsát a `_mobiletto__` előtaggal fogja tárolni. Ezt megváltoztathatod
 a `MOBILETTO_REDIS_PREFIX` env var.

 A kapcsolatonkénti gyorsítótárat is beállíthatja az `opts.redisConfig` objektummal:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nem akarja, hogy az újbóli gyorsítótár legyen?
 A letiltáshoz adja meg az `enabled: false` ' értéket az `opts.redisConfig` objektumban a kapcsolat létrehozásakor.

 Az alábbiakban tárgyaltak szerint a gyorsítótárazás letiltása kedvezőtlenül hat a teljesítményre, és több kérést von maga után
 tárolóhelyre, amire valóban szüksége van.

 ### Gyorsítótárazási útmutató
 **Titkosított tárhely**: a titkosított tárhely olvasása/írása csak egy kicsit lassabb a normálnál,
 de a könyvtárakban való navigálás (amit egyes dolgok igen) meglehetősen drága. Redis gyorsítótár használata
 jelentős teljesítménynövekedést ad.

 Az alapértelmezett gyorsítótár biztonságos, de nem működik jól, ha sok írási/eltávolítási műveletet végez.
 Bármilyen írási vagy eltávolítási művelet érvényteleníti a teljes gyorsítótárat, így a későbbi olvasások látni fogják a
 legújabb változások.

 ### CLI eszközök
 Ha olyan CLI-eszközt használ, mint a [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 mindenképpen engedélyezni kell a redis gyorsítótárat, mivel az a `mo` parancs meghívásain át tart.

 ## Tükrözés

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 A `mirror` parancs az összes fájl egyszeri átmásolását hajtja végre egyik mobilról a másikra.
 Nem futtat semmilyen folyamatot a tükör időbeli karbantartására. Futtassa újra a `mirror` parancsot
 a hiányzó fájlok szinkronizálásához.

 A `mirror` visszatérési értéke egy egyszerű objektum, amely számlálja, hogy hány fájl volt sikeres
 tükrözve, és hány fájlban volt hiba:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 FIGYELMEZTETÉS: A nagy adatkészletek tükrözése nagyon idő- és sávszélesség-igényes lehet.

 A `mirror` hívás szemantikával néha zavaró lehet megérteni, hogy ki az
 olvasó és ki az író. Képzeld el, mint egy hozzárendelési utasítást: a "bal oldali mobilt"
 a hozzárendelt dolog (tükrözött adatok írva), és a "jobb oldali mobiltto" (a
 argumentum a `mirror` tükrözés" metódushoz) a hozzárendelt érték (a tükrözött adatok beolvasása).

 ## Átlátszó titkosítás
 Átlátszó kliensoldali titkosítás engedélyezése:

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

 Mi történik? Egy külön "könyvtárbejegyzés" (dirent) könyvtár (titkosítva) követi, hogy milyen fájlok vannak abban
 könyvtárat (más néven dirent könyvtárat).
 * A `list` parancs beolvassa a könyvtárbejegyzés fájljait, dekódolja az egyes felsorolt elérési útvonalakat; majd minden fájl metaadatait adja vissza
 * A `list` parancsok nem hatékonyak, különösen a sok fájlt tartalmazó könyvtárak esetében
 * A `write` parancs rekurzívan ír dirent fájlokat minden szülő dirent könyvtárába; majd megírja a fájlt
 * `write` parancsok O(N) írást vonnak maguk után, ahol N = mélység a könyvtárhierarchiában
 * A `remove` parancs rekurzív módon eltávolítja a megfelelő dirent fájlt, és ha üres, a szülőjét; majd eltávolítja a fájlt
 * A nem rekurzív `remove` parancsok O(N) olvasást és potenciálisan annyi törlést vonnak maguk után, ahol N = mélység a könyvtárhierarchiában
 * A rekurzív `remove` parancsok nagy és mély fájlrendszereken drágák lehetnek

 Ne feledje, hogy még akkor is, ha a kliensoldali titkosítás engedélyezve van, az ellenfél teljes rálátással rendelkezik a titkosított szerveroldalra
 A tárhely még a kulcs nélkül is láthatja a könyvtárak teljes számát, valamint azt, hogy hány fájl van az egyes mappákban, és együtt
 némi erőfeszítéssel fedezze fel a címtárhierarchia általános szerkezetének egy részét vagy egészét.
 *Megjegyzés: A nagyobb biztonság érdekében használjon viszonylag lapos szerkezetet.*
 Az ellenfél nem ismeri a könyvtárak/fájlok nevét, hacsak nem ismeri a titkosításodat is
 kulcsot, vagy más módon sikeresen feltörte a titkosítást. Akkor minden fogadás lejár!

 ### Teljesítmény és gyorsítótár
 A titkosított tárhelyen végzett műveletek lassúak lehetnek. A rekurzív listázás és eltávolítás nagyon lassú lehet.
 A redis-en keresztüli gyorsítótár rendkívül sokat segít, de vegye figyelembe, hogy a gyorsítótár kiürül minden íráskor vagy eltávolításkor.

 ## Kulcsforgatás
 Hozzon létre egy mobilt az új kulccsal, majd tükrözze bele a régi adatokat:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Illesztőprogram felület
 Az illesztőprogram bármely JS-fájl, amely a következő aláírással exportál egy „storageClient” függvényt:

    function storageClient (key, secret, opts)

 * `key` : egy karakterlánc, az API-kulcs (a `local` illesztőprogramnál ez az alapkönyvtár)
 * `secret` : egy karakterlánc, az API titkos kódja (elhagyható a `local` illesztőprogramnál)
 * `opts` : egy objektum, a tulajdonságok illesztőprogramonként:
 * A `local` esetén a `fileMode` és a " `dirMode` tulajdonságok határozzák meg az új létrehozó fájlok és könyvtárak létrehozásának módját
 * Az `s3` esetén a `bucket` tulajdonság kötelező. Az opcionális tulajdonságok a következők:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 A storageClient függvény által visszaadott objektumnak meg kell határoznia a következő függvényeket:

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

 ## Naplózás
 A Mobiletto a [winston](https://www.npmjs.com/package/winston) naplózási könyvtárat használja.

 A naplók **tartalmaznak** fájl elérési utat és hibaüzeneteket, de **soha** nem tartalmaznak kulcsokat, titkokat,
 vagy bármilyen más kapcsolat konfigurációs információ.

 ### Naplószint
 Használja a `MOBILETTO_LOG_LEVEL` környezeti változót a naplózási szint beállításához, egyet használva
 a [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) helyen meghatározott `npm` szintek közül

 Az alapértelmezett szint a `error` . A legbőbeszédesebb szint a `silly` , bár jelenleg mobiltto
 nem jelentkezik be a `debug` alatti szinteken

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log fájl
 Alapértelmezés szerint a naplózó ír a konzolra. A naplók fájlba küldéséhez állítsa be a `MOBILETTO_LOG_FILE`
 környezeti változó. Amikor bejelentkezik egy fájlba, a naplók többé nem kerülnek a konzolra.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 A naplózás kikapcsolása:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
