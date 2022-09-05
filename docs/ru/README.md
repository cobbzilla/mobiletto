Мобилетто
 =========

 Mobiletto — это уровень абстракции хранилища JavaScript с дополнительным прозрачным шифрованием на стороне клиента.

 # Содержание
 * [Почему Mobiletto?](#Почему-Mobiletto?)
 * [Быстрый старт](#Быстрый старт)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Источник](#Источник)
 * [Основное использование](#Basic-использование)
 * [Метаданные](#Метаданные)
 * [Альтернативный стиль импорта](#Альтернативный-стиль импорта)
 * [Кэширование](#Кэширование)
 * [Зеркальное отображение](#Зеркальное отображение)
 * [Прозрачное шифрование](#Прозрачное-шифрование)
 * [Вращение ключа](#Вращение ключа)
 * [Интерфейс драйвера](#Driver-interface)
 * [Ведение журнала](#Ведение журнала)

 # Прочтите это на другом языке
 Этот документ README.md был переведен с помощью [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[все языки, поддерживаемые Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Я уверен, что это не идеально, но я надеюсь, что это лучше, чем ничего!

 [🇸🇦 арабский](../ar/README.md)
 [🇧🇩 Бенгальский](../bn/README.md)
 [🇩🇪 Немецкий](../de/README.md)
 [🇺🇸 английский](../en/README.md)
 [🇪🇸 Испанский](../es/README.md)
 [🇫🇷 Французский](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонезийский](../id/README.md)
 [🇮🇹 итальянский](../it/README.md)
 [🇯🇵 Японский](../ja/README.md)
 [🇰🇷 Корейский](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 Польский](../pl/README.md)
 [🇧🇷 Португальский](../pt/README.md)
 [🇷🇺 Русский](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагальский](../tl/README.md)
 [🇹🇷 Турецкий](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 Вьетнамский](../vi/README.md)
 [🇨🇳 Китайский](../zh/README.md)


 **[📚 ... Все языки ...](../README.md)**
 ----

 ### Есть ли проблема с этим переводом README?
 Этот конкретный перевод оригинального [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 может быть ошибочным -- *исправления очень приветствуются!* Пожалуйста, отправьте [запрос на извлечение на GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 или, если вам неудобно это делать, [откройте вопрос](https://github.com/cobbzilla/mobiletto/issues)

 Когда вы создаете новый выпуск GitHub о переводе, сделайте следующее:
 * включить URL страницы (скопировать/вставить из адресной строки браузера)
 * включить точный текст, который неверен (скопировать/вставить из браузера)
 * пожалуйста, опишите, что не так -- перевод неверен? форматирование как-то нарушено?
 * любезно предложите лучший перевод или как текст должен быть правильно отформатирован
 * **Спасибо!**

 ## Почему Мобилетто?

 ### Прощай, привязка к поставщику!
 Различные поставщики облачных хранилищ имеют несовместимые API. Даже те, кто стремится к «совместимости с S3».
 имеют идиосинкразическое поведение.

 Когда вы выбираете конкретного поставщика хранилища для своего приложения, если вы кодируете непосредственно его API, ваше приложение
 теперь зависит от этой службы. По мере того как время идет и код накапливается, смена поставщиков становится
 все более несостоятельным. Добро пожаловать в увлекательный мир привязки к поставщику!

 Mobiletto был разработан, чтобы решить эту проблему. Кодируя свое приложение для API mobiletto, вы можете легко
 смените поставщика хранилища и знайте, что уровень хранилища вашего приложения будет вести себя идентично.

 ### Расширенное тестирование
 Все драйверы тестируются на идентичное поведение с более чем 60 тестами для каждого драйвера.
 Мы тестируем все драйверы с каждой комбинацией:
 * Шифрование: как включено, так и отключено
 * Кэш Redis: как включен, так и отключен

 Такой подход дает нам уверенность в том, что mobiletto будет вести себя одинаково независимо от того, какой драйвер вы используете.
 и независимо от того, включаете ли вы кэширование и/или шифрование.

 ### Поддержка драйверов
 Текущие драйверы хранилища Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : локальная файловая система

 *Вклады в поддержку большего количества поставщиков облачных хранилищ очень приветствуются!*

 ## mobiletto-кли
 Mobiletto предназначен для использования в качестве библиотеки другим кодом JavaScript.

 Для работы с mobiletto в командной строке используйте [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Источник
 * [mobiletto на GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto на npm](https://www.npmjs.com/package/mobiletto)

 ## Быстрый старт
 Короткий пример использования драйвера mobiletto `s3` .

 Этот код работал бы так же, если бы драйвер был `b2` или `local` .

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
 ## Основное использование
 Гораздо более обширный пример, показывающий большинство предлагаемых функций:

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

 ## Метаданные
 Команда `metadata` возвращает метаданные об одной записи файловой системы.
 Точно так же возвращаемое значение команды `list` представляет собой массив объектов метаданных.

 Объект метаданных выглядит следующим образом:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Свойство `type` может быть `file` , `dir` , `link` или `special` .

 В зависимости от типа драйвера команда `list` может возвращать не все поля. `name` и `type`
 всегда должны присутствовать. Последующая команда `metadata` вернет все доступные свойства.

 ## Альтернативный стиль импорта
 Импортируйте модуль с полной областью действия и используйте функцию `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэширование
 Mobiletto лучше всего работает с кешем <a href="https://redis.io">Redis</a> .

 Mobiletto попытается подключиться к экземпляру Redis по адресу 127.0.0.1:6379.

 Вы можете переопределить любой из них:
 * Установите `MOBILETTO_REDIS_HOST` , чтобы мобильное соединение подключалось сюда вместо локального хоста
 * Установите `MOBILETTO_REDIS_PORT` , этот порт будет использоваться

 Mobiletto будет хранить все свои ключи Redis с префиксом `_mobiletto__` . Вы можете изменить это
 установив переменную окружения `MOBILETTO_REDIS_PREFIX` .

 Вы также можете установить кэширование для каждого соединения с помощью объекта `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не хотите кэшировать Redis?
 Чтобы отключить: передайте `enabled: false` в вашем объекте `opts.redisConfig` , когда вы устанавливаете соединение.

 Как обсуждается ниже, отключение кэширования отрицательно скажется на производительности и приведет к увеличению количества запросов.
 для хранения, что вам действительно нужно.

 ### Руководство по кэшированию
 **Зашифрованное хранилище**: чтение/запись зашифрованного хранилища происходит лишь немного медленнее, чем обычно,
 но навигация по каталогам (что делают некоторые вещи) довольно дорогая. Использование кеша Redis
 даст вам значительный прирост производительности.

 Кэш по умолчанию безопасен, но плохо работает, если у вас много операций записи/удаления.
 Любая операция записи или удаления делает недействительным весь кеш, гарантируя, что последующие чтения увидят
 последние изменения.

 ### Инструменты командной строки
 Если вы используете инструмент командной строки, например [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 вам определенно нужно, чтобы кеш Redis был включен, так как он сохраняется при вызовах команды `mo` .

 ## Зеркалирование

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Команда `mirror` выполняет однократное копирование всех файлов с одного мобильного телефона на другой.
 Он не запускает никаких процессов для обслуживания зеркала с течением времени. Запустите команду `mirror` еще раз
 для синхронизации отсутствующих файлов.

 Возвращаемое значение от `mirror` представляет собой простой объект со счетчиками того, сколько файлов было успешно
 зеркально и сколько файлов было с ошибками:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ПРЕДУПРЕЖДЕНИЕ. Зеркалирование больших наборов данных может занять очень много времени и ресурсов сети.

 С семантикой `mirror` вызова иногда может быть сложно понять, кто является оператором.
 читатель и кто писатель. Представьте себе это как оператор присваивания: «левый мобилетто».
 это вещь, которой присваивается (записаны зеркальные данные), и «правый мобильетто» (
 аргумент метода `mirror` ) — это присваиваемое значение (считываются зеркальные данные).

 ## Прозрачное шифрование
 Включите прозрачное шифрование на стороне клиента:

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

 Что творится? Отдельный каталог «вход в каталог» (Dirent) (зашифрованный) отслеживает, какие файлы находятся в этом
 каталог (также известный как прямой каталог).
 * Команда `list` читает файлы входа в каталог, расшифровывает каждый указанный путь; затем возвращает метаданные для каждого файла
 * команды `list` менее эффективны, особенно для каталогов с большим количеством файлов
 * Команда `write` записывает файлы в каталог dirent каждого родителя; затем записывает файл
 * Команды `write` O(N) операций записи, где N = глубина в иерархии каталогов
 * Команда `remove` удаляет соответствующий прямой файл и его родительский файл, если он пуст; затем удаляет файл
 * Нерекурсивные команды `remove` O(N) операций чтения и, возможно, столько же операций удаления, где N = глубина иерархии каталогов.
 * Рекурсивные команды `remove` на больших и глубоких файловых системах могут быть дорогими.

 Обратите внимание, что даже при включенном шифровании на стороне клиента злоумышленник с полным доступом к вашей зашифрованной стороне сервера
 хранилище, даже без ключа, все еще может видеть общее количество каталогов и сколько файлов в каждом, а с
 приложив некоторые усилия, откройте часть или всю общую структуру иерархии каталогов.
 *Примечание. Используйте относительно плоскую структуру для большей безопасности.*
 Злоумышленник не знал бы имен каталогов/файлов, если бы они также не знали ваше шифрование.
 ключ или иным образом успешно взломал шифрование. Тогда все ставки сняты!

 ### Производительность и кэширование
 Операции с зашифрованным хранилищем могут быть медленными. Рекурсивные списки и удаления могут быть очень медленными.
 Кэширование через Redis очень помогает, но обратите внимание, что кеш сбрасывается при любой записи или удалении.

 ## Ключевое вращение
 Создайте мобильное устройство с новым ключом, а затем отразите в нем старые данные:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Интерфейс драйвера
 Драйвер — это любой файл JS, который экспортирует функцию «storageClient» со следующей сигнатурой:

    function storageClient (key, secret, opts)

 * `key` : строка, ваш ключ API (для `local` драйвера это базовый каталог)
 * `secret` : строка, секрет вашего API (может быть опущена для `local` драйвера)
 * `opts` : объект, свойства для каждого драйвера:
 * Для `local` свойства `fileMode` и `dirMode` определяют, как создаются новые создаваемые файлы и каталоги.
 * Для `s3` требуется свойство `bucket` . Дополнительные свойства:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Объект, возвращаемый функцией storageClient, должен определять следующие функции:

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

 ## Логирование
 Mobiletto использует библиотеку протоколирования [winston](https://www.npmjs.com/package/winston).

 Журналы **будут** содержать пути к файлам и сообщения об ошибках, но **никогда** не будут содержать ключей, секретов,
 или любую другую информацию о конфигурации соединения.

 ### Уровень журнала
 Используйте переменную среды `MOBILETTO_LOG_LEVEL` , чтобы установить уровень журнала, используя один
 уровней `npm` , определенных в [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Уровень по умолчанию — `error` . Самый подробный уровень — `silly` , хотя в настоящее время mobiletto
 не регистрируется на уровнях ниже `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Журнальный файл
 По умолчанию логгер пишет в консоль. Чтобы отправлять журналы в файл, установите `MOBILETTO_LOG_FILE`
 переменная окружения. При записи в файл журналы больше не будут записываться в консоль.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Чтобы отключить ведение журнала:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
