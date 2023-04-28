Мобилето
 =========

 Mobiletto е абстрактен слой за съхранение на JavaScript с незадължително прозрачно криптиране от страна на клиента.

 # Съдържание
 * [Защо Mobiletto?](#Защо-Mobiletto?)
 * [Бърз старт](#Бърз старт)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Източник](#Източник)
 * [Инсталация](#Инсталация)
 * [Подкрепа и финансиране](#Support-and-Funding)
 * [Основно използване](#Основно използване)
 * [Метаданни](#Метаданни)
 * [Алтернативен стил на импортиране](#Alternate-import-style)
 * [Кеширане](#Кеширане)
 * [Огледално отразяване](#Огледално отразяване)
 * [Прозрачно криптиране](#Transparent-encryption)
 * [Ключ ротация](#Ключ ротация)
 * [Интерфейс на драйвер](#Driver-интерфейс)
 * [Регистриране](#Регистриране)

 # Прочетете това на друг език
 Този документ README.md е преведен чрез [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[всеки език, поддържан от Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Сигурен съм, че не е перфектно, но се надявам да е по-добре от нищо!

 [🇸🇦 арабски](../ar/README.md)
 [🇧🇩 бенгалски](../bn/README.md)
 [🇩🇪 немски](../de/README.md)
 [🇺🇸 английски](../en/README.md)
 [🇪🇸 испански](../es/README.md)
 [🇫🇷 френски](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 индонезийски](../id/README.md)
 [🇮🇹 италиански](../it/README.md)
 [🇯🇵 японски](../ja/README.md)
 [🇰🇷 корейски](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 полски](../pl/README.md)
 [🇧🇷 португалски](../pt/README.md)
 [🇷🇺 руски](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 турски](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 виетнамски](../vi/README.md)
 [🇨🇳 китайски](../zh/README.md)


 **[📚 ... Всички езици ...](../README.md)**
 ----

 ### Има ли проблем с този превод на README?
 Този конкретен превод на оригинала [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 може да има недостатъци -- *корекциите са добре дошли!* Моля, изпратете [заявка за изтегляне в GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 или ако не ви е удобно да правите това, [отворете проблем](https://github.com/cobbzilla/mobiletto/issues)

 Когато създавате нов проблем в GitHub относно превод, моля, направете следното:
 * включете URL адреса на страницата (копирайте/поставете от адресната лента на браузъра)
 * включете точния грешен текст (копирайте/поставете от браузъра)
 * моля, опишете какво не е наред -- преводът неправилен ли е? форматирането повредено ли е по някакъв начин?
 * любезно предложете предложение за по-добър превод или как текстът да бъде правилно форматиран
 * **Благодаря ти!**

 ## Защо Mobiletto?

 ### Довиждане, блокиране на доставчика!
 Различните доставчици на облачно хранилище имат несъвместими API. Дори тези, които се стремят към "S3 съвместимост"
 имат идиосинкратично поведение.

 Когато изберете конкретен доставчик на хранилище за вашето приложение, ако кодирате директно към неговия API, вашето приложение
 сега зависи от тази услуга. С течение на времето и кодът се натрупва, смяната на доставчиците става
 все по-несъстоятелни. Добре дошли в забавния свят на блокиране на продавача!

 Mobiletto е проектиран да реши този проблем. Като кодирате приложението си към API на mobiletto, можете лесно
 сменете доставчиците на съхранение и знайте, че слоят за съхранение на вашето приложение ще се държи по същия начин.

 ### Обстойно тестване
 Всички драйвери са тествани за идентично поведение с 60+ теста за всеки драйвер.
 Тестваме всички драйвери с всяка комбинация от:
 * Шифроване: както активирано, така и деактивирано
 * Кеш на Redis: както активиран, така и деактивиран

 Този подход ни дава спокойствие, че mobiletto ще се държи по същия начин, независимо кой драйвер използвате,
 и независимо дали активирате кеширане и/или криптиране.

 ### Поддръжка на драйвери
 Текущи драйвери за съхранение на Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : локална файлова система

 *Приносът за поддръжка на повече доставчици на облачно хранилище е добре дошъл!*

 ## mobiletto-cli
 Mobiletto е предназначен да се използва като библиотека от друг JavaScript код.

 За да работите с mobiletto в командния ред, използвайте [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Източник
 * [mobiletto в GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto на npm](https://www.npmjs.com/package/mobiletto)

 ## Подкрепа и финансиране
 Опитвам се да бъда професионален разработчик на софтуер с отворен код. Работил съм в
 в софтуерната индустрия в продължение на много години, основах успешни компании и ги продадох на публични компании.
 Наскоро загубих работата си и всъщност нямам никаква друга работа

 Така че ще се опитам да напиша полезен софтуер и да видя дали работи

 Ако обичате да използвате този софтуер, ще съм много благодарен дори за
 най-малката [месечна вноска чрез Patreon](https://www.patreon.com/cobbzilla)

 *Благодаря ти!*

 ## Инсталация
 Инсталирайте с помощта на `npm` или `yarn` . Вероятно искате `lite` версия, която не включва всички
 преведени README файлове:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ако наистина искате файловете README на всеки език, инсталирайте пълната версия:

    npm install mobiletto
    yarn add mobiletto

 ## Бърз старт
 Кратък пример за използване на драйвера mobiletto `s3` .

 Този код ще работи по същия начин, ако драйверът е `b2` или `local` .

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
 Много по-обширен пример, показващ повечето от предлаганите функции:

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

 ## Метаданни
 Командата `metadata` връща метаданни за един запис във файловата система.
 По същия начин върнатата стойност от командата `list` е масив от обекти с метаданни.

 Обект на метаданни изглежда така:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Свойството `type` type` може да бъде `file` , `dir` , `link` или `special` .

 В зависимост от типа драйвер, командата `list` може да не върне всички полета. `name` и `type` type`
 винаги трябва да присъства. Следваща команда `metadata` ще върне всички налични свойства.

 ## Алтернативен стил на импортиране
 Импортирайте модула с пълен обхват и използвайте функцията `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кеширане
 Mobiletto работи най-добре с <a href="https://redis.io">Redis</a> кеш.

 Mobiletto ще се опита да се свърже с екземпляр на redis на 127.0.0.1:6379

 Можете да отмените едно от следните:
 * Задайте `MOBILETTO_REDIS_HOST` env променлива, мобилно да се свързва тук вместо localhost
 * Задайте env `MOBILETTO_REDIS_PORT` , този порт ще се използва

 Mobiletto ще съхранява всички свои redis ключове с префикса `_mobiletto__` . Можете да промените това
 като зададете `MOBILETTO_REDIS_PREFIX` env var.

 Можете също да зададете кеширане за всяка връзка с обекта `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не искате redis кеширане?
 За да деактивирате: подайте `enabled: false` във вашия обект `opts.redisConfig` , когато установите вашата връзка.

 Както е обсъдено по-долу, деактивирането на кеширането ще има неблагоприятен ефект върху производителността и ще доведе до повече заявки
 за съхранение, от което наистина се нуждаете.

 ### Указания за кеширане
 **Шифровано хранилище**: четенето/записването на криптирано хранилище е само малко по-бавно от нормалното,
 но навигирането из директории (което някои неща правят) е доста скъпо. Използване на redis кеш
 ще ви даде значително повишаване на производителността.

 Кешът по подразбиране е безопасен, но не работи добре, ако имате много операции за запис/премахване.
 Всяка операция за запис или премахване обезсилва целия кеш, като гарантира, че следващите четения ще видят
 последни промени.

 ### CLI инструменти
 Ако използвате CLI инструмент като [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 определено ще искате redis кеша да е активиран, тъй като той продължава при извиквания на командата `mo` .

 ## Отразяване

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Командата `mirror` извършва еднократно копиране на всички файлове от едно мобилно устройство на друго.
 Не изпълнява никакъв процес за поддържане на огледалото във времето. Изпълнете отново командата `mirror`
 за синхронизиране на всички липсващи файлове.

 Върнатата стойност от `mirror` е прост обект с броячи за това колко файла са били успешно извършени
 огледален и колко файла са имали грешки:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ПРЕДУПРЕЖДЕНИЕ: Дублирането на големи набори от данни може да отнеме много време и интензивно на честотната лента

 Със семантиката на повикването `mirror` понякога може да е объркващо да разберете кой е
 читател и кой е писателят. Представете си го като декларация за присвояване: "лявата мобилно устройство"
 е нещото, към което се присвоява (записани огледални данни) и „мобилното устройство отдясно“ (the
 аргумент на метода `mirror` ) е стойността, която се присвоява (огледалните данни се четат).

 ## Прозрачно криптиране
 Активирайте прозрачно криптиране от страна на клиента:

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

 Какво се случва? Отделна директория "запис в директория" (dirent) (криптирана) проследява какви файлове има в нея
 директория (известна още като директория dirent).
 * Командата `list` чете файловете за въвеждане на директория, дешифрира всеки изброен път; след това връща метаданни за всеки файл
 * Командите `list` са по-неефективни, особено за директории с голям брой файлове
 * Командата `write` записва dirent файлове във всяка родителска dirent директория, рекурсивно; след това записва файла
 * Командите `write` ще предизвикат O(N) записвания, с N = дълбочина в йерархията на директорията
 * Командата `remove` премахва съответния дирентен файл и неговия родител, ако е празен, рекурсивно; след това премахва файла
 * `remove` команди за премахване ще доведат до O(N) четения и потенциално толкова много изтривания, с N = дълбочина в йерархията на директорията
 * Рекурсивните команди `remove` на големи и дълбоки файлови системи могат да бъдат скъпи

 Обърнете внимание, че дори с активирано криптиране от страна на клиента, противник с пълна видимост във вашата криптирана страна на сървъра
 съхранение, дори и без ключа, пак може да види общия брой директории и колко файла има във всяка, и с
 известно усилие, открийте част или цялата цялостна структура на йерархията на директорията.
 *Забележка: Използвайте сравнително плоска структура за по-добра сигурност.*
 Противникът няма да знае имената на директориите/файловете, освен ако не знае и вашето криптиране
 ключ или по друг начин успешно е разбил криптирането. Тогава всички залози отпадат!

 ### Производителност и кеширане
 Операциите върху криптирано хранилище може да са бавни. Рекурсивните списъци и премахвания могат да бъдат много бавни.
 Кеширането чрез redis помага изключително много, но имайте предвид, че кешът се изчиства при всякакви записи или премахвания.

 ## Ключова ротация
 Създайте mobiletto с вашия нов ключ, след което огледайте старите данни в него:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Интерфейс на драйвера
 Драйвер е всеки JS файл, който експортира функция „storageClient“ с този подпис:

    function storageClient (key, secret, opts)

 * `key` : низ, вашият API ключ (за `local` драйвера това е основната директория)
 * `secret` : низ, вашата API тайна (може да бъде пропусната за `local` драйвера)
 * `opts` : обект, свойствата са за всеки драйвер:
 * За `local` , свойствата `fileMode` и `dirMode` определят как се създават нови файлове и директории
 * За `s3` се изисква свойството `bucket` . Незадължителните свойства са:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Обектът, който функцията storageClient връща, трябва да дефинира тези функции:

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

 ## Регистриране
 Mobiletto използва [winston](https://www.npmjs.com/package/winston) библиотеката за регистриране.

 Регистрационните файлове **ще** съдържат пътеки към файлове и съобщения за грешки, но **никога** няма да съдържат ключове, тайни,
 или друга информация за конфигурация на връзката.

 ### Ниво на регистър
 Използвайте променливата на средата `MOBILETTO_LOG_LEVEL` , за да зададете нивото на регистрационния файл, използвайки едно
 на нивата `npm` , дефинирани в [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Нивото по подразбиране е `error` . Най-подробното ниво е `silly` , въпреки че в момента е mobiletto
 не се регистрира на нива под `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Регистрационен файл
 По подразбиране регистраторът записва в конзолата. За да изпратите регистрационни файлове към файл, задайте `MOBILETTO_LOG_FILE`
 променлива на средата. Когато влизате във файл, регистрационните файлове вече няма да се записват в конзолата.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 За да изключите регистрирането:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
