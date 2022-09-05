Mobiletto
 =========

 Mobiletto е слој за апстракција на складирање JavaScript, со опционално транспарентно шифрирање од страна на клиентот.

 # Содржини
 * [Зошто Mobiletto?](#Зошто-Mobiletto?)
 * [Брз почеток](#Брз почеток)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Извор](#Извор)
 * [Инсталација](#Инсталација)
 * [Поддршка и финансирање](#Support-and-Funding)
 * [Основна употреба](#Основна употреба)
 * [Метаподатоци](#Метаподатоци)
 * [Стил на алтернативен увоз](#Алтернативен стил на увоз)
 * [Кеширање](#Кеширање)
 * [Rirroring](# Mirroring)
 * [Транспарентно шифрирање](#Transparent-енкрипција)
 * [Ротација на клучеви](# Ротација на клучеви)
 * [Интерфејс за возачот](#интерфејс за возачот)
 * [Најавување](# Пријавување)

 # Прочитајте го ова на друг јазик
 Овој документ README.md е преведен, преку [hokeylization](https://github.com/cobbzilla/hokeylization), на
 **[секој јазик поддржан од Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Сигурен сум дека не е совршено, но се надевам дека е подобро од ништо!

 [🇸🇦 Арапски](../ar/README.md)
 [🇧🇩 бенгалски](../bn/README.md)
 [🇩🇪 германски](../de/README.md)
 [🇺🇸 англиски](../en/README.md)
 [🇪🇸 шпански](../es/README.md)
 [🇫🇷 француски](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 индонезиски](../id/README.md)
 [🇮🇹 италијански](../it/README.md)
 [🇯🇵 Јапонски](../ja/README.md)
 [🇰🇷 корејски](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 полски](../pl/README.md)
 [🇧🇷 португалски](../pt/README.md)
 [🇷🇺 руски](../ru/README.md)
 [🇰🇪 свахили](../sw/README.md)
 [🇵🇭 тагалог](../tl/README.md)
 [🇹🇷 турски](../tr/README.md)
 [🇵🇰 Урду](../ur/README.md)
 [🇻🇳 виетнамски](../vi/README.md)
 [🇨🇳 кинески](../zh/README.md)


 **[📚 ... Сите јазици ...](../README.md)**
 ----

 ### Дали има проблем со овој превод на README?
 Овој конкретен превод на оригиналот [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 може да има недостатоци -- *корекциите се многу добредојдени!* Ве молиме испратете [барање за повлекување на GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 или ако не ви е удобно да го правите тоа, [отворете проблем](https://github.com/cobbzilla/mobiletto/issues)

 Кога креирате нов проблем на GitHub за превод, ве молиме направете:
 * Вклучете ја URL-адресата на страницата (копирајте/залепете од лентата за адреси на прелистувачот)
 * Вклучете го точниот текст што е погрешен (копирајте/залепете од прелистувачот)
 * Ве молиме опишете што не е во ред -- дали преводот е неточен? форматирањето некако е скршено?
 * љубезно понудете предлог за подобар превод или како текстот треба да биде правилно форматиран
 * **Ви благодарам!**

 ## Зошто Mobiletto?

 ### Збогум заклучување на продавачот!
 Различните даватели на облак складирање имаат некомпатибилни API. Дури и оние кои се стремат кон „S3 компатибилност“
 имаат идиосинкратично однесување.

 Кога избирате одреден продавач на складирање за вашата апликација, ако кодирате директно на нивниот API, вашата апликација
 сега е зависен од таа услуга. Како што поминува времето и се акумулира кодот, така се менуваат продавачите
 сè понеодржлива. Добредојдовте во забавниот свет на заклучување на продавачите!

 Mobiletto беше дизајниран да го реши овој проблем. Со кодирање на вашата апликација на API на mobiletto, можете лесно
 сменете ги давателите на складирање и знајте дека слојот за складирање на вашата апликација ќе се однесува идентично.

 ### Обемно тестирање
 Сите возачи се тестираат за идентично однесување со 60+ тестови за секој возач.
 Ги тестираме сите возачи со секоја комбинација од:
 * Шифрирање: и овозможено и оневозможено
 * Редис кеш: и овозможено и оневозможено

 Овој пристап ни дава мир на умот дека mobiletto ќе се однесува исто без оглед на тоа кој драјвер го користите.
 и без разлика дали ќе овозможите кеширање и/или шифрирање.

 ### Поддршка за возачот
 Тековни драјвери за складирање на Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : локален датотечен систем

 *Придонесите за поддршка на повеќе даватели на складирање облак се многу добредојдени!*

 ## мобилен за-кли
 Mobiletto е наменет да се користи како библиотека со друг JavaScript код.

 За да работите со mobiletto на командната линија, користете [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Извор
 * [mobiletto на GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto на npm](https://www.npmjs.com/package/mobiletto)

 ## Поддршка и финансирање
 Се обидувам да бидам професионален развивач на софтвер со отворен код. Јас сум работел во
 Софтверската индустрија долги години, основав успешни компании и ги продавав на јавни претпријатија.
 Неодамна останав без работа и навистина немам друга работа

 Затоа, ќе се обидам да напишам корисен софтвер и да видам дали тоа функционира

 Ако уживате во користењето на овој софтвер, би ви бил многу благодарен дури и за тоа
 најмал [месечен придонес преку Patreon](https://www.patreon.com/cobbzilla)

 *Ви благодарам!*

 ## Инсталација
 Инсталирајте користејќи `npm` или `yarn` . Веројатно сакате `lite` верзија која не ги вклучува сите
 преведени README-датотеки:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ако навистина ги сакате датотеките README на секој јазик, инсталирајте ја целосната верзија:

    npm install mobiletto
    yarn add mobiletto

 ## Брз почеток
 Краток пример со користење на двигателот на mobiletto `s3` .

 Овој код ќе работи исто ако двигателот е `b2` или `local` .

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
 ## Основна употреба
 Многу поопширен пример, кој ги прикажува повеќето од понудените карактеристики:

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

 ## Метаподатоци
 Командата `metadata` враќа метаподатоци за еден запис во датотечен систем.
 Исто така, вратената вредност од командата `list` е низа од објекти на метаподатоци.

 Објектот за метаподатоци изгледа вака:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Својството `type` може да биде `file` “, `dir` “ , `link` “ или `special` .

 Во зависност од типот на драјверот, командата `list` може да не ги врати сите полиња. `name` “ и `type`
 секогаш треба да бидат присутни. Следната команда `metadata` ќе ги врати сите достапни својства.

 ## Алтернативен стил на увоз
 Увезете го модулот со целосен опсег и користете ја функцијата `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кеширање
 Mobiletto најдобро функционира со кешот на <a href="https://redis.io">redis</a> .

 Mobiletto ќе се обиде да се поврзе со примерок од redis на 127.0.0.1:6379

 Можете да отфрлите било кое од овие:
 * Поставете го `MOBILETTO_REDIS_HOST` env var, mobile за да се поврзете овде наместо локален хост
 * Поставете го `MOBILETTO_REDIS_PORT` env var, оваа порта ќе се користи

 Mobiletto ќе ги складира сите свои копчиња за редиис со префиксот `_mobiletto__` . Можете да го промените ова
 со поставување на `MOBILETTO_REDIS_PREFIX` env var.

 Можете исто така да поставите кеширање по конекција со објектот `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не сакате редиза кеширање?
 За да се оневозможи: поминете `enabled: false` “ во вашиот објект `opts.redisConfig` кога ќе ја воспоставите вашата врска.

 Како што беше дискутирано подолу, оневозможувањето на кеширањето ќе има негативен ефект врз перформансите и ќе предизвика повеќе барања
 за складирање што навистина ви треба.

 ### Насоки за кеширање
 **Шифрирано складирање**: читањето/пишувањето шифрирана меморија е само малку побавно од нормалното,
 но навигацијата низ директориуми (што некои работи го прават) е прилично скапо. Користење на кеш на редиза
 ќе ви даде значително зголемување на перформансите.

 Стандардниот кеш е безбеден, но не функционира добро ако имате многу операции за пишување/отстранување.
 Секоја операција за запишување или отстранување го поништува целиот кеш, осигурувајќи дека следните читања ќе го видат
 најновите промени.

 ### CLI алатки
 Ако користите CLI алатка како [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 дефинитивно ќе сакате да е овозможен кешот за редиис, бидејќи трае низ повикувањата на командата `mo` .

 ## Пресликување

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Командата `mirror` врши еднократна копија на сите датотеки од еден мобилен на друг.
 Не извршува никаков процес за одржување на огледалото со текот на времето. Повторно извршете ја командата `mirror`
 за да ги синхронизирате сите датотеки што недостасуваат.

 Повратната вредност од `mirror` е едноставен објект со бројачи за тоа колку датотеки биле успешно
 огледува и колку датотеки имаа грешки:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ПРЕДУПРЕДУВАЊЕ: Пресликувањето големи збирки податоци може да одзема многу време и интензивно да бара пропусен опсег

 Со повикот `mirror` семантика понекогаш може да биде збунувачки да се разбере кој е
 читателот и кој е писателот. Замислете го како изјава за задача: „мобилното лево“
 е она на кое му е доделено (напишани се огледални податоци), и „десниот мобилен телефон“ (на
 аргумент на методот `mirror` ) е вредноста што се доделува (се читаат огледалните податоци).

 ## Транспарентно шифрирање
 Овозможете транспарентно шифрирање од страна на клиентот:

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

 Што се случува? Посебен директориум за „влез во директориум“ (дирентен) (шифриран) следи кои датотеки се наоѓаат во него
 директориум (познат како дирент директориум).
 * Командата `list` чита датотеките за влез во директориумот, ја дешифрира секоја наведена патека; потоа враќа метаподатоци за секоја датотека
 * `list` се понеефикасни, особено за директориуми со голем број датотеки
 * Командата `write` запишува дирентни датотеки во дирент директориумот на секој родител, рекурзивно; потоа ја пишува датотеката
 * `write` ќе предизвикаат O(N) запишувања, со N = длабочина во хиерархијата на директориумот
 * Командата `remove` ја отстранува соодветната dirent датотека, а нејзиниот родител ако е празен, рекурзивно; потоа ја отстранува датотеката
 * `remove` наредби „отстрани“ ќе предизвикаат O(N) читања и потенцијално исто толку бришења, со N = длабочина во хиерархијата на директориумот
 * Рекурзивните `remove` команди на големи и длабоки датотечни системи може да бидат скапи

 Имајте предвид дека дури и кога е овозможено шифрирање од страна на клиентот, противник со целосна видливост на вашата шифрирана серверска страна
 складирањето, дури и без клучот, сè уште може да го види вкупниот број директориуми и колку датотеки има во секоја и со
 некои напори, откријте дел или целата структура на хиерархијата на директориумот.
 *Забелешка: користете релативно рамна структура за подобра безбедност.*
 Противникот не би ги знаел имињата на директориумите/датотеките освен ако не го знаел и вашето шифрирање
 клуч или на друг начин успешно ја пробиле шифрирањето. Тогаш сите облози се исклучени!

 ### Перформанси и кеширање
 Операциите на шифрирана меморија може да бидат бавни. Рекурзивните списоци и отстранувања може да бидат многу бавни.
 Кеширањето преку redis неверојатно помага, но имајте предвид дека кешот се исчистува при секое запишување или отстранување.

 ## Ротација на клучеви
 Создадете мобилно со вашиот нов клуч, а потоа пресликувајте ги старите податоци во него:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Интерфејс на возачот
 Драјвер е која било JS-датотека што извезува функција „storageClient“ со овој потпис:

    function storageClient (key, secret, opts)

 * `key` : низа, вашиот API клуч (за `local` драјвер ова е основниот директориум)
 * `secret` : низа, вашата API тајна (може да се испушти за `local` двигател)
 * `opts` : објект, својствата се по двигател:
 * За `local` “ , својствата `fileMode` и `dirMode` одредуваат како се создаваат нови датотеки и директориуми за креирање
 * За `s3` , потребно е својството `bucket` . Изборните својства се:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Објектот што го враќа функцијата storageClient мора да ги дефинира овие функции:

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

 ## Сеча
 Mobiletto ја користи библиотеката за логирање [winston](https://www.npmjs.com/package/winston).

 Дневниците **ќе** содржат патеки за датотеки и пораки за грешка, но **никогаш** нема да содржат клучеви, тајни,
 или која било друга информација за конфигурацијата на врската.

 ### Ниво на дневник
 Користете ја променливата на околината `MOBILETTO_LOG_LEVEL` за да го поставите нивото на дневник, користејќи еден
 од нивоата на `npm` дефинирани во [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Стандардното ниво е `error` . `silly` , иако моментално е мобилно
 не се најавува на нивоа под `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Датотека за евиденција
 Стандардно, логерот запишува на конзолата. За да испратите дневници во датотека, поставете го `MOBILETTO_LOG_FILE`
 променлива на животната средина. Кога се најавувате на датотека, дневниците повеќе нема да се пишуваат на конзолата.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 За да го исклучите евидентирањето:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
