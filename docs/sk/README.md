Mobiletto
 =========

 Mobiletto je vrstva abstrakcie úložiska JavaScript s voliteľným transparentným šifrovaním na strane klienta.

 # Obsah
 * [Prečo Mobiletto?](#Prečo-Mobiletto?)
 * [Rýchly štart](#Rýchly štart)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Inštalácia](#Inštalácia)
 * [Support and Funding](#Support-and-Funding)
 * [Základné použitie](#Basic-usage)
 * [Metadáta](#Metadáta)
 * [Alternatívny štýl importu](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparentné šifrovanie](#Transparentné šifrovanie)
 * [Otočenie kľúča](#Otočenie kľúča)
 * [Rozhranie ovládača](#Rozhranie ovládača)
 * [Logging](#Logging)

 # Prečítajte si to v inom jazyku
 Tento dokument README.md bol preložený prostredníctvom [hokeylizácie](https://github.com/cobbzilla/hokeylization) do
 **[každý jazyk podporovaný Prekladačom Google](https://cloud.google.com/translate/docs/languages)!**

 Som si istý, že to nie je dokonalé, ale dúfam, že je to lepšie ako nič!

 [🇸🇦 arabčina](../ar/README.md)
 [🇧🇩 bengálčina](../bn/README.md)
 [🇩🇪 nemčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španielčina](../es/README.md)
 [🇫🇷 francúzština](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindčina](../hi/README.md)
 [🇮🇩 indonézština](../id/README.md)
 [🇮🇹 taliančina](../it/README.md)
 [🇯🇵 japončina](../ja/README.md)
 [🇰🇷 kórejčina](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poľština](../pl/README.md)
 [🇧🇷 portugalčina](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilčina](../sw/README.md)
 [🇵🇭 tagalčina](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdčina](../ur/README.md)
 [🇻🇳 vietnamčina](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všetky jazyky ...](../README.md)**
 ----

 ### Vyskytol sa problém s týmto prekladom súboru README?
 Tento konkrétny preklad originálu [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 môže byť chybný -- *opravy sú veľmi vítané!* Pošlite [žiadosť o stiahnutie na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 alebo ak sa vám to nepáči, [otvorte problém](https://github.com/cobbzilla/mobiletto/issues)

 Keď vytvoríte nový problém na GitHub o preklade, postupujte takto:
 * uveďte adresu URL stránky (skopírujte/prilepte z panela s adresou prehliadača)
 * uveďte presný text, ktorý je nesprávny (skopírujte/prilepte z prehliadača)
 * popíšte, čo je nesprávne - je preklad nesprávny? je formátovanie nejako porušené?
 * láskavo ponúknite návrh na lepší preklad alebo ako by mal byť text správne naformátovaný
 * **Ďakujem!**

 ## Prečo Mobiletto?

 ### Zbohom vendor lock-in!
 Rôzni poskytovatelia cloudových úložísk majú nekompatibilné rozhrania API. Dokonca aj tí, ktorí sa snažia o „kompatibilitu S3“
 majú idiosynkratické správanie.

 Keď si vyberiete konkrétneho dodávateľa úložiska pre svoju aplikáciu, ak kódujete priamo do ich API, vaša aplikácia
 je teraz závislý od tejto služby. Ako plynie čas a kód sa hromadí, menia sa predajcovia
 čoraz neudržateľnejšie. Vitajte v zábavnom svete blokovania predajcov!

 Mobiletto bol navrhnutý na vyriešenie tohto problému. Zakódovaním vašej aplikácie do API mobiletto to môžete ľahko
 zmeniť poskytovateľa úložiska a vedieť, že vrstva úložiska vašej aplikácie sa bude správať rovnako.

 ### Rozsiahle testovanie
 Všetci vodiči sú testovaní na rovnaké správanie pomocou 60+ testov pre každého vodiča.
 Testujeme všetky ovládače s každou kombináciou:
 * Šifrovanie: povolené aj zakázané
 * Vyrovnávacia pamäť Redis: povolená aj zakázaná

 Tento prístup nám dáva istotu, že mobiletto sa bude správať rovnako bez ohľadu na to, aký ovládač používate,
 a bez ohľadu na to, či povolíte ukladanie do vyrovnávacej pamäte a/alebo šifrovanie.

 ### Podpora ovládačov
 Aktuálne ovládače úložiska Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokálny súborový systém

 *Príspevky na podporu viacerých poskytovateľov cloudových úložísk sú veľmi vítané!*

 ## mobiletto-cli
 Mobiletto je určené na použitie ako knižnica iným kódom JavaScript.

 Ak chcete pracovať s mobiletto na príkazovom riadku, použite [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Zdroj
 * [mobiletto na GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Podpora a financovanie
 Snažím sa byť profesionálnym vývojárom open source softvéru. Pracoval som v
 v softvérovom priemysle som zakladal úspešné spoločnosti a predal ich verejným spoločnostiam.
 Nedávno som prišiel o prácu a vlastne nemám žiadnu inú prácu

 Takže skúsim napísať užitočný softvér a uvidím, či to funguje

 Ak radi používate tento softvér, bol by som veľmi vďačný aj za to
 najmenší [mesačný príspevok cez Patreon](https://www.patreon.com/cobbzilla)

 *Ďakujem!*

 ## Inštalácia
 Nainštalujte pomocou `npm` alebo `yarn` . Pravdepodobne budete chcieť `lite` verziu, ktorá neobsahuje všetky
 preložené súbory README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ak naozaj chcete súbory README v každom jazyku, nainštalujte si plnú verziu:

    npm install mobiletto
    yarn add mobiletto

 ## Rýchly štart
 Krátky príklad použitia ovládača mobiletto `s3` .

 Tento kód by fungoval rovnako, ak by bol ovládač `b2` alebo `local` .

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
 ## Základné použitie
 Oveľa rozsiahlejší príklad zobrazujúci väčšinu ponúkaných funkcií:

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

 ## Metadáta
 Príkaz `metadata` vracia metadáta o jednej položke súborového systému.
 Podobne návratová hodnota z príkazu `list` je pole objektov metadát.

 Objekt metadát vyzerá takto:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Vlastnosť `type` type“ môže byť `file` “, `dir` “, `link` alebo `special` .

 V závislosti od typu ovládača nemusí príkaz `list` vrátiť všetky polia. Vlastnosti `name` a `type` .
 by mal byť vždy prítomný. Nasledujúci príkaz `metadata` vráti všetky dostupné vlastnosti.

 ## Alternatívny štýl importu
 Importujte modul s úplným rozsahom a použite funkciu `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Ukladanie do vyrovnávacej pamäte
 Mobiletto funguje najlepšie s vyrovnávacou pamäťou <a href="https://redis.io">redis</a> .

 Mobiletto sa pokúsi pripojiť k inštancii redis na 127.0.0.1:6379

 Môžete prepísať jednu z týchto možností:
 * Nastavte env var, mobilet `MOBILETTO_REDIS_HOST` , aby ste sa pripojili sem namiesto localhost
 * Nastavte env var `MOBILETTO_REDIS_PORT` , tento port sa použije

 Mobiletto uloží všetky svoje redis kľúče s predponou `_mobiletto__` . Môžete to zmeniť
 nastavením premennej env `MOBILETTO_REDIS_PREFIX`

 Môžete tiež nastaviť ukladanie do vyrovnávacej pamäte pre jednotlivé pripojenia pomocou objektu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nechcete znovu ukladať do vyrovnávacej pamäte?
 Ak chcete zakázať: pri vytváraní pripojenia odovzdajte `enabled: false` v objekte `opts.redisConfig` .

 Ako je uvedené nižšie, zakázanie ukladania do vyrovnávacej pamäte bude mať nepriaznivý vplyv na výkon a spôsobí viac požiadaviek
 do úložiska, ktoré skutočne potrebujete.

 ### Pokyny pre ukladanie do vyrovnávacej pamäte
 **Šifrované úložisko**: čítanie/zápis šifrovaného úložiska je len o niečo pomalšie ako normálne,
 ale navigácia v adresároch (čo niektoré veci robia) je pomerne drahá. Použitie vyrovnávacej pamäte redis
 vám poskytne výrazné zvýšenie výkonu.

 Predvolená vyrovnávacia pamäť je bezpečná, ale nefunguje dobre, ak máte veľa operácií zápisu/odstránenia.
 Akákoľvek operácia zápisu alebo odstránenia znehodnotí celú vyrovnávaciu pamäť, čím sa zabezpečí, že nasledujúce čítania uvidia súbor
 najnovšie zmeny.

 ### Nástroje CLI
 Ak používate nástroj CLI ako [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 určite budete chcieť povoliť vyrovnávaciu pamäť redis, pretože trvá pri vyvolaní príkazu `mo` .

 ## Zrkadlenie

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Príkaz `mirror` vykoná jednorazovú kópiu všetkých súborov z jedného mobiletto do druhého.
 Nespúšťa žiadny proces na udržiavanie zrkadla v priebehu času. Znova spustite príkaz `mirror`
 na synchronizáciu chýbajúcich súborov.

 Návratová hodnota z `mirror` je jednoduchý objekt s počítadlami, koľko súborov bolo úspešne dokončených
 zrkadlené a koľko súborov malo chyby:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 VAROVANIE: Zrkadlenie veľkých súborov údajov môže byť veľmi časovo náročné a náročné na šírku pásma

 So sémantikou volania `mirror` môže byť niekedy mätúce pochopiť, kto je
 čitateľ a kto je spisovateľ. Predstavte si to ako príkaz na zadanie: „mobiltto na ľavej strane“
 je vec, ku ktorej sa priraďuje (zapísané zrkadlené dáta) a „pravé mobilné tto“ (
 argument k metóde `mirror` ) je priradená hodnota (čítajú sa zrkadlové dáta).

 ## Transparentné šifrovanie
 Povoliť transparentné šifrovanie na strane klienta:

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

 Čo sa deje? Samostatný (zašifrovaný) adresár „položka adresára“ (zašifrovaný) sleduje, aké súbory sa v ňom nachádzajú
 adresár (známy ako priamy adresár).
 * Príkaz `list` prečíta vstupné súbory adresára, dešifruje každú uvedenú cestu; potom vráti metadáta pre každý súbor
 * Príkazy `list` sú neefektívnejšie, najmä pre adresáre s veľkým počtom súborov
 * Príkaz `write` zapisuje dirent súbory do adresára dirent každého rodiča rekurzívne; potom zapíše súbor
 * Príkazy `write` budú mať za následok O(N) zápisov, pričom N = hĺbka v hierarchii adresárov
 * Príkaz `remove` odstráni zodpovedajúci dirent súbor a jeho rodič, ak je prázdny; potom súbor odstráni
 * `remove` budú mať za následok O(N) čítaní a potenciálne toľko vymazaní, pričom N = hĺbka v hierarchii adresárov
 * Rekurzívne príkazy `remove` na veľkých a hlbokých súborových systémoch môžu byť drahé

 Všimnite si, že aj keď je zapnuté šifrovanie na strane klienta, protivník s plnou viditeľnosťou na vašej zašifrovanej strane servera
 úložisko, dokonca aj bez kľúča, stále vidí celkový počet adresárov a koľko súborov je v každom a s
 nejaké úsilie, objaviť časť alebo celú celkovú štruktúru hierarchie adresárov.
 *Poznámka: Pre lepšiu bezpečnosť použite relatívne plochú štruktúru.*
 Protivník by nevedel názvy adresárov/súborov, pokiaľ by nepoznal aj vaše šifrovanie
 kľúč alebo inak úspešne prelomil šifrovanie. Potom sú všetky stávky vypnuté!

 ### Výkon a ukladanie do vyrovnávacej pamäte
 Operácie na šifrovanom úložisku môžu byť pomalé. Rekurzívne zoznamy a odstraňovania môžu byť veľmi pomalé.
 Ukladanie do vyrovnávacej pamäte cez redis nesmierne pomáha, ale nezabudnite, že vyrovnávacia pamäť sa vyprázdni pri každom zápise alebo odstránení.

 ## Rotácia kľúča
 Vytvorte mobiletto s vaším novým kľúčom a potom doň zrkadlite staré údaje:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Rozhranie ovládača
 Ovládač je akýkoľvek súbor JS, ktorý exportuje funkciu „storageClient“ s týmto podpisom:

    function storageClient (key, secret, opts)

 * `key` : reťazec, váš kľúč API (pre `local` ovládač je to základný adresár)
 * `secret` : reťazec, vaše tajomstvo API (môže byť vynechané pre `local` ovládač)
 * `opts` : objekt, vlastnosti sú pre ovládač:
 * Pre `local` , vlastnosti `fileMode` a `dirMode` určujú, ako sa vytvárajú nové súbory a adresáre
 * Pre `s3` sa vyžaduje vlastnosť `bucket` . Voliteľné vlastnosti sú:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt, ktorý funkcia storageClient vracia, musí definovať tieto funkcie:

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

 ## Prihlásenie
 Mobiletto používa protokolovaciu knižnicu [winston](https://www.npmjs.com/package/winston).

 Protokoly **budú** obsahovať cesty k súborom a chybové hlásenia, ale **nikdy** nebudú obsahovať kľúče, tajomstvá,
 alebo akékoľvek iné informácie o konfigurácii pripojenia.

 ### Úroveň denníka
 Na nastavenie úrovne denníka použite premennú prostredia `MOBILETTO_LOG_LEVEL`
 z úrovní `npm` definovaných v [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Predvolená úroveň je `error` . Najpodrobnejšia úroveň je `silly` , aj keď momentálne mobiletto
 neprihlási na úrovniach pod `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Súbor denníka
 V predvolenom nastavení zapisovač zapisuje do konzoly. Ak chcete odoslať protokoly do súboru, nastavte `MOBILETTO_LOG_FILE`
 premenná prostredia. Pri prihlasovaní do súboru sa už protokoly nebudú zapisovať do konzoly.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ak chcete vypnúť protokolovanie:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
