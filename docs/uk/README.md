Mobiletto
 =========

 Mobiletto — це абстрактний рівень зберігання JavaScript із додатковим прозорим шифруванням на стороні клієнта.

 # Вміст
 * [Чому Mobiletto?](#Чому-Mobiletto?)
 * [Швидкий старт](#Швидкий старт)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Джерело](#Джерело)
 * [Встановлення](#Встановлення)
 * [Підтримка та фінансування](#Support-and-Funding)
 * [Основне використання](#Basic-usage)
 * [Метадані](#Метадані)
 * [Альтернативний стиль імпорту](#Alternate-import-style)
 * [Кешування](#Кешування)
 * [Дзеркалювання](#Дзеркалювання)
 * [Прозоре шифрування](#Transparent-encryption)
 * [Обертання клавіш](#Обертання клавіш)
 * [Інтерфейс драйвера](#Driver-interface)
 * [Логування](#Logging)

 # Прочитайте це іншою мовою
 Цей документ README.md було перекладено за допомогою [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[усі мови, які підтримує Перекладач Google](https://cloud.google.com/translate/docs/languages)!**

 Я впевнений, що це не ідеально, але я сподіваюся, що це краще, ніж нічого!

 [🇸🇦 арабською](../ar/README.md)
 [🇧🇩 Бенгальська](../bn/README.md)
 [🇩🇪 німецька](../de/README.md)
 [🇺🇸 англійською](../en/README.md)
 [🇪🇸 іспанська](../es/README.md)
 [🇫🇷 французька](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хінді](../hi/README.md)
 [🇮🇩 індонезійська](../id/README.md)
 [🇮🇹 італійська](../it/README.md)
 [🇯🇵 японська](../ja/README.md)
 [🇰🇷 Корейська](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 польською](../pl/README.md)
 [🇧🇷 португальською](../pt/README.md)
 [🇷🇺 російська](../ru/README.md)
 [🇰🇪 суахілі](../sw/README.md)
 [🇵🇭 Тагальська](../tl/README.md)
 [🇹🇷 турецька](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 в'єтнамська](../vi/README.md)
 [🇨🇳 китайська](../zh/README.md)


 **[📚 ... Усі мови ...](../README.md)**
 ----

 ### Чи є проблема з цим перекладом README?
 Цей конкретний переклад оригіналу [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 може мати недоліки -- *виправлення дуже вітаються!* Надішліть [запит на вилучення на GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 або якщо вам не зручно це робити, [відкрийте проблему](https://github.com/cobbzilla/mobiletto/issues)

 Коли ви створюєте нову проблему GitHub щодо перекладу, виконайте:
 * включити URL-адресу сторінки (скопіювати/вставити з адресного рядка браузера)
 * включити точний неправильний текст (скопіювати/вставити з браузера)
 * опишіть, будь ласка, що не так -- переклад невірний? форматування якось порушено?
 * люб'язно запропонуйте кращий переклад або те, як правильно оформити текст
 * **Дякую!**

 ## Чому Mobiletto?

 ### До побачення, блокування постачальника!
 Різні постачальники хмарних сховищ мають несумісні API. Навіть ті, які прагнуть до «сумісності з S3»
 мають ідіосинкратичну поведінку.

 Коли ви обираєте певного постачальника сховища для своєї програми, якщо ви кодуєте безпосередньо його API, ваша програма
 зараз залежить від цієї служби. З часом і накопиченням коду змінюються постачальники
 все більш неспроможним. Ласкаво просимо до веселого світу блокування постачальників!

 Mobiletto був розроблений, щоб вирішити цю проблему. Закодувавши програму в API mobiletto, ви можете легко
 змініть постачальника сховища та знайте, що рівень сховища вашої програми поводитиметься однаково.

 ### Широке тестування
 Усі драйвери перевіряються на однакову поведінку за допомогою понад 60 тестів для кожного драйвера.
 Ми тестуємо всі драйвери з кожною комбінацією:
 * Шифрування: увімкнено та вимкнено
 * Кеш Redis: увімкнено та вимкнено

 Цей підхід дає нам спокій, що mobiletto поводитиметься однаково незалежно від того, який драйвер ви використовуєте,
 і незалежно від того, чи ввімкнено кешування та/або шифрування.

 ### Підтримка драйверів
 Поточні драйвери пам’яті Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : локальна файлова система

 *Внески для підтримки більшої кількості постачальників хмарних сховищ дуже вітаються!*

 ## mobiletto-cli
 Mobiletto призначений для використання іншим кодом JavaScript як бібліотека.

 Для роботи з mobiletto в командному рядку використовуйте [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Джерело
 * [mobiletto на GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto на npm](https://www.npmjs.com/package/mobiletto)

 ## Підтримка та фінансування
 Я намагаюся бути професійним розробником програмного забезпечення з відкритим кодом. Я працював у
 У індустрії програмного забезпечення протягом багатьох років я створював успішні компанії та продавав їх державним компаніям.
 Нещодавно я втратив роботу, і в мене насправді немає іншої роботи

 Тож я спробую написати корисне програмне забезпечення та перевірю, чи це спрацює

 Якщо вам подобається користуватися цією програмою, я буду дуже вдячний навіть за
 найменший [щомісячний внесок через Patreon](https://www.patreon.com/cobbzilla)

 *Дякую!*

 ## Встановлення
 Встановіть за допомогою `npm` або `yarn` . Ймовірно, вам потрібна `lite` версія, яка не включає всі
 перекладені файли README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Якщо вам справді потрібні файли README кожною мовою, встановіть повну версію:

    npm install mobiletto
    yarn add mobiletto

 ## Швидкий початок
 Короткий приклад використання драйвера mobiletto `s3` .

 Цей код працюватиме так само, якби драйвер був `b2` або `local` .

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
 ## Базове використання
 Набагато розширеніший приклад, який демонструє більшість пропонованих функцій:

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

 ## Метадані
 Команда `metadata` повертає метадані про один запис файлової системи.
 Подібним чином значення, яке повертає команда `list` , є масивом об’єктів метаданих.

 Об’єкт метаданих виглядає так:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` може бути `file` , `dir` , `link` або `special` .

 Залежно від типу драйвера команда `list` може не повертати всі поля. `name` і `type`
 має бути присутнім завжди. Наступна команда `metadata` поверне всі доступні властивості.

 ## Альтернативний стиль імпорту
 Імпортуйте повний модуль і використовуйте функцію `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кешування
 <a href="https://redis.io">Mobiletto</a> найкраще працює з кеш-пам’яттю Redis.

 Mobiletto спробує підключитися до примірника redis на 127.0.0.1:6379

 Ви можете замінити будь-який із цих варіантів:
 * Установіть змінну env `MOBILETTO_REDIS_HOST` , мобільний пристрій підключатиметься тут замість локального хосту
 * Установіть змінну env `MOBILETTO_REDIS_PORT` , цей порт використовуватиметься

 Mobiletto зберігатиме всі свої ключі redis із префіксом `_mobiletto__` . Ви можете це змінити
 встановивши змінну env `MOBILETTO_REDIS_PREFIX` .

 Ви також можете встановити кешування кожного з’єднання за допомогою об’єкта `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не хочете кешувати redis?
 Щоб вимкнути: передайте `enabled: false` у вашому об’єкті `opts.redisConfig` під час встановлення з’єднання.

 Як описано нижче, вимкнення кешування матиме негативний вплив на продуктивність і призведе до збільшення кількості запитів
 для зберігання, яке вам справді потрібно.

 ### Керівництво з кешування
 **Зашифроване сховище**: читання/запис зашифрованого сховища лише трохи повільніше, ніж зазвичай,
 але навігація по каталогах (що деякі речі роблять) досить дорога. Використання кешу Redis
 дасть вам значний приріст продуктивності.

 Кеш за замовчуванням є безпечним, але не працює добре, якщо у вас багато операцій запису/видалення.
 Будь-яка операція запису або видалення робить весь кеш недійсним, гарантуючи, що наступні читання побачать
 останні зміни.

 ### Інструменти CLI
 Якщо ви використовуєте такий інструмент CLI, як [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ви точно захочете ввімкнути кеш redis, оскільки він триває під час викликів команди `mo` .

 ## Дзеркалювання

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Команда `mirror` виконує одноразове копіювання всіх файлів з одного мобільного пристрою на інший.
 Він не запускає жодних процесів для підтримки дзеркала протягом тривалого часу. `mirror`
 щоб синхронізувати будь-які відсутні файли.

 Значення, яке повертає `mirror` , — це простий об’єкт із лічильниками кількості успішних файлів
 віддзеркалено та скільки файлів мали помилки:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ПОПЕРЕДЖЕННЯ. Віддзеркалення великих наборів даних може зайняти багато часу та пропускної здатності

 Із семантикою виклику `mirror` іноді може бути заплутано зрозуміти, хто є
 читач і хто такий письменник. Уявіть це як оператор призначення: "лівий mobiletto"
 це річ, якій призначається (записані дзеркальні дані), і "правий mobiletto" (the
 аргумент методу `mirror` ) — це значення, яке присвоюється (зчитуються дзеркальні дані).

 ## Прозоре шифрування
 Увімкнути прозоре шифрування на стороні клієнта:

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

 Що відбувається? Окремий «запис каталогу» (dirent) каталог (зашифрований) відстежує, які файли в ньому знаходяться
 каталог (він же каталог dirent).
 * Команда `list` читає файли запису каталогу, розшифровує кожен шлях у списку; потім повертає метадані для кожного файлу
 * Команди `list` більш неефективні, особливо для каталогів з великою кількістю файлів
 * Команда `write` записує файли dirent у каталог dirent кожного батька; потім записує файл
 * Команди `write` викличуть O(N) записів, з N = глибиною в ієрархії каталогів
 * Команда `remove` видаляє відповідний dirent-файл і його батьківський файл, якщо він порожній; потім видаляє файл
 * Нерекурсивні команди `remove` викличуть O(N) читань і потенційно стільки ж видалень, з N = глибиною в ієрархії каталогів
 * Рекурсивні команди `remove` у великих і глибоких файлових системах можуть бути дорогими

 Зауважте, що навіть якщо шифрування на стороні клієнта ввімкнено, зловмисник з повною видимістю вашої зашифрованої сторони сервера
 сховище, навіть без ключа, може бачити загальну кількість каталогів і кількість файлів у кожному, а також з
 деякі зусилля, виявити частину або всю загальну структуру ієрархії каталогів.
 *Примітка. Для кращої безпеки використовуйте відносно плоску конструкцію.*
 Зловмисник не знав би назв каталогів/файлів, якщо б він також не знав ваше шифрування
 ключ або іншим чином успішно зламали шифрування. Тоді всі ставки зняті!

 ### Продуктивність і кешування
 Операції в зашифрованому сховищі можуть бути повільними. Рекурсивні списки та видалення можуть бути дуже повільними.
 Кешування через redis надзвичайно допомагає, але зауважте, що кеш очищається після будь-яких записів або видалень.

 ## Обертання ключів
 Створіть mobiletto з вашим новим ключем, а потім віддзеркаліть старі дані в ньому:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Інтерфейс драйвера
 Драйвер — це будь-який файл JS, який експортує функцію «storageClient» із таким підписом:

    function storageClient (key, secret, opts)

 * `key` : рядок, ваш ключ API (для `local` драйвера це базовий каталог)
 * `secret` : рядок, ваш секрет API (можна опустити для драйвера `local` )
 * `opts` : об'єкт, властивості залежать від драйвера:
 * Для `local` local` властивості `fileMode` і `dirMode` визначають, як створюються нові створювані файли та каталоги
 * Для `s3` необхідна властивість `bucket` . Додаткові властивості:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Об’єкт, який повертає функція storageClient, повинен визначати ці функції:

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

 ## Ведення журналу
 Mobiletto використовує бібліотеку журналювання [winston](https://www.npmjs.com/package/winston).

 Журнали **будуть** містити шляхи до файлів і повідомлення про помилки, але **ніколи** не будуть містити ключі, секрети,
 або будь-яку іншу інформацію про конфігурацію підключення.

 ### Рівень журналу
 Використовуйте змінну середовища `MOBILETTO_LOG_LEVEL` , щоб установити рівень журналу, використовуючи один
 рівнів `npm` , визначених у [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Типовим рівнем є `error` . Найбільш багатослівним рівнем є `silly` , хоча зараз mobiletto
 не реєструє на рівнях нижче `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Файл журналу
 За замовчуванням реєстратор записує на консоль. Щоб надсилати журнали у файл, установіть `MOBILETTO_LOG_FILE`
 змінна середовища. Під час входу у файл журнали більше не записуватимуться на консоль.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Щоб вимкнути журналювання:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
