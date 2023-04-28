Mobiletto
 =========

 Mobiletto je vrstva abstrakce úložiště JavaScript s volitelným transparentním šifrováním na straně klienta.

 # Obsah
 * [Proč Mobiletto?](#Proč-Mobiletto?)
 * [Rychlý start](#Rychlý start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Zdroj](#Source)
 * [Instalace](#Instalace)
 * [Support and Funding](#Support-and-Funding)
 * [Základní použití](#Basic-usage)
 * [Metadata](#Metadata)
 * [Alternativní styl importu](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparentní šifrování](#Transparentní šifrování)
 * [Otočení klíče](#Otočení klíče)
 * [Rozhraní ovladače](#Rozhraní ovladače)
 * [Logging](#Logging)

 # Přečtěte si to v jiném jazyce
 Tento dokument README.md byl přeložen prostřednictvím [hokeylizace](https://github.com/cobbzilla/hokeylization) do
 **[každý jazyk podporovaný Překladačem Google](https://cloud.google.com/translate/docs/languages)!**

 Jsem si jistý, že to není dokonalé, ale doufám, že je to lepší než nic!

 [🇸🇦 arabština](../ar/README.md)
 [🇧🇩 bengálština](../bn/README.md)
 [🇩🇪 němčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španělština](../es/README.md)
 [🇫🇷 francouzština](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindština](../hi/README.md)
 [🇮🇩 indonéština](../id/README.md)
 [🇮🇹 italština](../it/README.md)
 [🇯🇵 japonština](../ja/README.md)
 [🇰🇷 korejština](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polština](../pl/README.md)
 [🇧🇷 portugalština](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilština](../sw/README.md)
 [🇵🇭 tagalština](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdština](../ur/README.md)
 [🇻🇳 vietnamština](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všechny jazyky ...](../README.md)**
 ----

 ### Je problém s tímto překladem souboru README?
 Tento konkrétní překlad originálu [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 může být chyba -- *opravy jsou velmi vítány!* Odešlete [žádost o stažení na GitHubu](https://github.com/cobbzilla/mobiletto/pulls),
 nebo pokud se vám to nelíbí, [otevřete problém](https://github.com/cobbzilla/mobiletto/issues)

 Když vytvoříte nový problém na GitHubu o překladu, proveďte prosím:
 * zahrňte adresu URL stránky (zkopírujte/vložte z adresního řádku prohlížeče)
 * uveďte přesný text, který je nesprávný (zkopírujte/vložte z prohlížeče)
 * popište prosím, co je špatně - je překlad nesprávný? je formátování nějak narušené?
 * laskavě nabídněte návrh lepšího překladu nebo jak by měl být text správně naformátován
 * **Děkuji!**

 ## Proč Mobiletto?

 ### Sbohem vendor lock-in!
 Různí poskytovatelé cloudového úložiště mají nekompatibilní rozhraní API. Dokonce i ti, kteří usilují o "kompatibilitu S3"
 mají idiosynkratické chování.

 Když si vyberete konkrétního dodavatele úložiště pro svou aplikaci, pokud kódujete přímo do jejich API, vaše aplikace
 je nyní na této službě závislý. Jak čas plyne a kód se hromadí, mění se dodavatelé
 čím dál neudržitelnější. Vítejte v zábavném světě vendor lock-in!

 Mobiletto bylo navrženo k vyřešení tohoto problému. Nakódováním vaší aplikace do API mobiletto to můžete snadno
 změnit poskytovatele úložiště a vědět, že vrstva úložiště vaší aplikace se bude chovat identicky.

 ### Rozsáhlé testování
 Všechny ovladače jsou testovány na identické chování s 60+ testy pro každý ovladač.
 Testujeme všechny ovladače s každou kombinací:
 * Šifrování: povoleno i zakázáno
 * Mezipaměť Redis: povolena i zakázána

 Tento přístup nám dává jistotu, že mobiletto se bude chovat stejně bez ohledu na to, jaký ovladač používáte,
 a bez ohledu na to, zda povolíte ukládání do mezipaměti a/nebo šifrování.

 ### Podpora ovladačů
 Aktuální ovladače úložiště Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : místní souborový systém

 *Příspěvky na podporu více poskytovatelů cloudových úložišť jsou velmi vítány!*

 ## mobiletto-cli
 Mobiletto je určeno k použití jako knihovna jiným kódem JavaScript.

 Chcete-li pracovat s mobiletto na příkazovém řádku, použijte [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Zdroj
 * [mobiletto na GitHubu](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Podpora a financování
 Snažím se být profesionálním vývojářem open source softwaru. Pracoval jsem v
 v softwarovém průmyslu jsem zakládal úspěšné společnosti a prodal je veřejným společnostem.
 Nedávno jsem přišel o práci a vlastně žádnou jinou práci nemám

 Takže zkusím napsat užitečný software a uvidím, jestli to funguje

 Pokud rádi používáte tento software, byl bych za něj velmi vděčný
 nejmenší [měsíční příspěvek přes Patreon](https://www.patreon.com/cobbzilla)

 *Děkuji!*

 ## Instalace
 Nainstalujte pomocí `npm` nebo `yarn` . Pravděpodobně budete chtít `lite` verzi, která nezahrnuje všechny
 přeložené soubory README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Pokud opravdu chcete soubory README v každém jazyce, nainstalujte si plnou verzi:

    npm install mobiletto
    yarn add mobiletto

 ## Rychlý start
 Krátký příklad použití ovladače mobiletto `s3` .

 Tento kód by běžel stejně, kdyby byl ovladač `b2` nebo `local` .

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
 ## Základní použití
 Mnohem rozsáhlejší příklad ukazující většinu nabízených funkcí:

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
 Příkaz `metadata` vrací metadata o jedné položce souborového systému.
 Podobně vrácená hodnota z příkazu `list` je pole objektů metadat.

 Objekt metadat vypadá takto:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Vlastnost `type` type` může být `file` , `dir` , `link` nebo `special` .

 V závislosti na typu ovladače nemusí příkaz `list` vrátit všechna pole. Vlastnosti `name` a `type` type`
 by měl být vždy přítomen. Následující příkaz `metadata` vrátí všechny dostupné vlastnosti.

 ## Alternativní styl importu
 Importujte modul s plným rozsahem a použijte funkci `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Ukládání do mezipaměti
 Mobiletto funguje nejlépe s <a href="https://redis.io">redis</a> cache.

 Mobiletto se pokusí připojit k instanci redis na 127.0.0.1:6379

 Můžete přepsat kteroukoli z těchto možností:
 * Nastavte env var `MOBILETTO_REDIS_HOST` , mobilet, abyste se připojili sem místo localhost
 * Nastavte env var `MOBILETTO_REDIS_PORT` , tento port bude použit

 Mobiletto uloží všechny své redis klíče s předponou `_mobiletto__` . Můžete to změnit
 nastavením `MOBILETTO_REDIS_PREFIX` env var.

 Můžete také nastavit ukládání do mezipaměti pro jednotlivá připojení pomocí objektu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nechcete znovu ukládat do mezipaměti?
 Zakázání: předejte `enabled: false` ve vašem objektu `opts.redisConfig` při navazování spojení.

 Jak je uvedeno níže, zakázání ukládání do mezipaměti bude mít nepříznivý vliv na výkon a vyvolá více požadavků
 úložiště, které opravdu potřebujete.

 ### Pokyny pro ukládání do mezipaměti
 **Šifrované úložiště**: čtení/zápis šifrovaného úložiště je jen o něco pomalejší než normálně,
 ale procházení adresářů (což některé věci dělají) je poměrně drahé. Použití mezipaměti redis
 vám poskytne výrazné zvýšení výkonu.

 Výchozí mezipaměť je bezpečná, ale nefunguje dobře, pokud máte mnoho operací zápisu/odebírání.
 Jakákoli operace zápisu nebo odstranění zneplatní celou mezipaměť a zajistí, že následná čtení uvidí soubor
 nejnovější změny.

 ### Nástroje CLI
 Pokud používáte nástroj CLI, jako je [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 určitě budete chtít povolenou mezipaměť redis, protože trvá při vyvolání příkazu `mo` .

 ## Zrcadlení

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Příkaz `mirror` provede jednorázovou kopii všech souborů z jednoho mobiletto do druhého.
 Nespouští žádný proces pro udržování zrcadla v průběhu času. Spusťte znovu příkaz `mirror`
 pro synchronizaci chybějících souborů.

 Vrácená hodnota z `mirror` je jednoduchý objekt s počítadly, kolik souborů bylo úspěšně dokončeno
 zrcadleno a kolik souborů mělo chyby:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 VAROVÁNÍ: Zrcadlení velkých souborů dat může být velmi časově náročné a náročné na šířku pásma

 Se sémantikou volání `mirror` může být někdy matoucí pochopit, kdo je
 čtenář a kdo je autorem. Představte si to jako příkaz k zadání: „levé mobiltto“
 je věc, které je přiřazena (zapsána zrcadlená data), a "pravé mobilnítto" (
 argument k metodě `mirror` ) je přiřazovaná hodnota (přečtou se zrcadlená data).

 ## Transparentní šifrování
 Povolit transparentní šifrování na straně klienta:

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

 Co se děje? Samostatný adresář „položka adresáře“ (přímý) (zašifrovaný) sleduje, jaké soubory se v něm nacházejí
 adresář (neboli dirent adresář).
 * Příkaz `list` čte soubory záznamů adresáře, dešifruje každou uvedenou cestu; pak vrátí metadata pro každý soubor
 * Příkazy `list` jsou neefektivnější, zvláště pro adresáře s velkým počtem souborů
 * Příkaz `write` zapisuje dirent soubory do adresáře dirent každého rodiče rekurzivně; pak zapíše soubor
 * Příkazy `write` budou mít O(N) zápisů, přičemž N = hloubka v hierarchii adresářů
 * Příkaz `remove` odstraní odpovídající soubor dirent a jeho rodič, pokud je prázdný; poté soubor odstraní
 * Nerekurzivní příkazy `remove` způsobí O(N) čtení a potenciálně tolik mazání, přičemž N = hloubka v hierarchii adresářů
 * Rekurzivní příkazy `remove` na velkých a hlubokých souborových systémech mohou být drahé

 Všimněte si, že i když je povoleno šifrování na straně klienta, protivník s plnou viditelností na vaší šifrované straně serveru
 úložiště, i bez klíče, stále vidí celkový počet adresářů a kolik souborů je v každém a s
 nějaké úsilí, objevit některé nebo všechny celkové struktury hierarchie adresářů.
 *Poznámka: Pro lepší zabezpečení použijte relativně plochou strukturu.*
 Protivník by neznal názvy adresářů/souborů, pokud by neznal také vaše šifrování
 klíč nebo jinak úspěšně prolomil šifrování. Pak jsou všechny sázky pryč!

 ### Výkon a ukládání do mezipaměti
 Operace na šifrovaném úložišti mohou být pomalé. Rekurzivní výpisy a odstraňování mohou být velmi pomalé.
 Ukládání do mezipaměti přes redis ohromně pomáhá, ale mějte na paměti, že mezipaměť se vyprázdní při každém zápisu nebo odstranění.

 ## Rotace klíče
 Vytvořte mobiletto se svým novým klíčem a poté do něj zrcadlte stará data:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Rozhraní ovladače
 Ovladač je jakýkoli soubor JS, který exportuje funkci „storageClient“ s tímto podpisem:

    function storageClient (key, secret, opts)

 * `key` : řetězec, váš klíč API (pro `local` ovladač je to základní adresář)
 * `secret` : řetězec, vaše tajemství API (může být vynecháno pro `local` ovladač)
 * `opts` : objekt, vlastnosti jsou pro každý ovladač:
 * Pro `local` určují vlastnosti `fileMode` a `dirMode` způsob vytváření nových souborů a adresářů
 * Pro `s3` je vyžadována vlastnost `bucket` . Volitelné vlastnosti jsou:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt, který funkce storageClient vrací, musí definovat tyto funkce:

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

 ## Protokolování
 Mobiletto používá protokolovací knihovnu [winston](https://www.npmjs.com/package/winston).

 Protokoly **budou** obsahovat cesty k souborům a chybové zprávy, ale **nikdy** nebudou obsahovat klíče, tajemství,
 nebo jakékoli jiné informace o konfiguraci připojení.

 ### Úroveň protokolu
 K nastavení úrovně protokolu použijte proměnnou prostředí `MOBILETTO_LOG_LEVEL`
 z úrovní `npm` definovaných v [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Výchozí úroveň je `error` . Nejpodrobnější úroveň je `silly` , i když momentálně mobiletto
 se nepřihlásí na úrovních pod `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log soubor
 Ve výchozím nastavení zapisovač zapisuje do konzoly. Chcete-li odeslat protokoly do souboru, nastavte `MOBILETTO_LOG_FILE`
 proměnná prostředí. Při přihlašování do souboru se již protokoly nebudou zapisovat do konzole.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Postup vypnutí protokolování:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
