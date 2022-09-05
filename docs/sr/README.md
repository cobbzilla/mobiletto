Мобилетто
 =========

 Мобилетто је слој апстракције за ЈаваСцрипт складиштење, са опционим транспарентним шифровањем на страни клијента.

 # Садржај
 * [Зашто Мобилетто?](#Вхи-Мобилетто?)
 * [Брзи почетак](#Брзи почетак)
 * [Мобилетто ЦЛИ](#мобилетто-цли)
 * [Извор](#Извор)
 * [Основна употреба](#Басиц-усаге)
 * [Метаподаци](#Метаподаци)
 * [Алтернативни стил увоза](#Алтернате-импорт-стиле)
 * [Кеширање](#Кеширање)
 * [Мироринг](#Мирроринг)
 * [Транспарентно шифровање](#Транспарент-енцриптион)
 * [Ротација тастера](#Кеи-ротатион)
 * [Интерфејс управљачког програма](#Дривер-интерфаце)
 * [Логгинг](#Логгинг)

 # Прочитајте ово на другом језику
 Овај РЕАДМЕ.мд документ је преведен, преко [хокеилизатион](хттпс://гитхуб.цом/цоббзилла/хокеилизатион), на
 **[сваки језик који подржава Гоогле преводилац](хттпс://цлоуд.гоогле.цом/транслате/доцс/лангуагес)!**

 Сигуран сам да није савршено, али надам се да је боље него ништа!

 [🇸🇦 арапски](доцс/ар/РЕАДМЕ.мд)
 [🇧🇩 бенгалски](доцс/бн/РЕАДМЕ.мд)
 [🇩🇪 немачки](доцс/де/РЕАДМЕ.мд)
 [🇺🇸 енглески](доцс/ен/РЕАДМЕ.мд)
 [🇪🇸 шпански](доцс/ес/РЕАДМЕ.мд)
 [🇫🇷 француски](доцс/фр/РЕАДМЕ.мд)
 [🇹🇩 Хауса](доцс/ха/РЕАДМЕ.мд)
 [🇮🇳 хинди](доцс/хи/РЕАДМЕ.мд)
 [🇮🇩 индонежански](доцс/ид/РЕАДМЕ.мд)
 [🇮🇹 италијански](доцс/ит/РЕАДМЕ.мд)
 [🇯🇵 јапански](доцс/ја/РЕАДМЕ.мд)
 [🇰🇷 корејски](доцс/ко/РЕАДМЕ.мд)
 [🇮🇳 Марантхи](доцс/мр/РЕАДМЕ.мд)
 [🇵🇱 пољски](доцс/пл/РЕАДМЕ.мд)
 [🇧🇷 португалски](доцс/пт/РЕАДМЕ.мд)
 [🇷🇺 руски](доцс/ру/РЕАДМЕ.мд)
 [🇰🇪 свахили](доцс/св/РЕАДМЕ.мд)
 [🇵🇭 Тагалог](доцс/тл/РЕАДМЕ.мд)
 [🇹🇷 турски](доцс/тр/РЕАДМЕ.мд)
 [🇵🇰 урду](доцс/ур/РЕАДМЕ.мд)
 [🇻🇳 вијетнамски](доцс/ви/РЕАДМЕ.мд)
 [🇨🇳 кинески](доцс/зх/РЕАДМЕ.мд)


 **[📚 ... Сви језици ...](доцс/РЕАДМЕ.мд)**
 ----

 ### Да ли постоји проблем са овим преводом РЕАДМЕ-а?
 Овај конкретни превод оригинала [РЕАДМЕ](хттпс://гитхуб.цом/цоббзилла/мобилетто/блоб/мастер/РЕАДМЕ.мд)
 може бити мањкав -- *исправке су добродошле!* Молимо пошаљите [захтев за повлачење на ГитХуб](хттпс://гитхуб.цом/цоббзилла/мобилетто/пуллс),
 или ако вам то не одговара, [отворите проблем](хттпс://гитхуб.цом/цоббзилла/мобилетто/иссуес)

 Када креирате нови ГитХуб проблем о преводу, урадите следеће:
 * укључите УРЛ странице (копирајте/налепите из траке за адресу прегледача)
 * укључите тачан текст који је погрешан (копирајте/налепите из претраживача)
 * опишите шта није у реду -- да ли је превод нетачан? да ли је форматирање некако покварено?
 * љубазно понудите предлог бољег превода, односно како текст треба да буде правилно форматиран
 * **Хвала вам!**

 ## Зашто Мобилетто?

 ### Збогом закључавање добављача!
 Различити добављачи складиштења у облаку имају некомпатибилне АПИ-је. Чак и они који теже "компатибилности са С3"
 имају идиосинкратична понашања.

 Када изаберете одређеног продавца складишта за своју апликацију, ако кодирате директно на њихов АПИ, своју апликацију
 сада зависи од те услуге. Како време пролази и код се акумулира, мењање добављача постаје
 све неодрживији. Добродошли у забавни свет закључавања добављача!

 Мобилетто је дизајниран да реши овај проблем. Кодирањем своје апликације на АПИ-ју мобилетто-а можете лако
 промените добављаче складишта и знајте да ће се слој складишта ваше апликације понашати идентично.

 ### Опсежно тестирање
 Сви возачи су тестирани на идентично понашање са 60+ тестова за сваког возача.
 Тестирамо све возаче са сваком комбинацијом:
 * Шифровање: омогућено и онемогућено
 * Редис кеш: омогућен и онемогућен

 Овај приступ нам даје безбрижност да ће се мобилетто понашати исто без обзира који драјвер користите,
 и без обзира да ли сте омогућили кеширање и/или шифровање.

 ### Подршка за возаче
 Тренутни Мобилетто драјвери за складиштење:
 * `s3` : Амазон С3
 * `b2` : Бацкблазе Б2
 * `local` : локални систем датотека

 *Доприноси за подршку више добављача складиштења у облаку су добродошли!*

 ## мобилетто-цли
 Мобилетто је намењен да се користи као библиотека другим ЈаваСцрипт кодом.

 Да бисте радили са мобилетто на командној линији, користите [мобилетто-цли](хттпс://ввв.нпмјс.цом/пацкаге/мобилетто-цли)

 ## Извор
 * [мобилетто на ГитХуб](хттпс://гитхуб.цом/цоббзилла/мобилетто)
 * [мобилетто на нпм](хттпс://ввв.нпмјс.цом/пацкаге/мобилетто)

 ## Брз почетак
 Кратак пример коришћења драјвера мобилетто `s3` .

 Овај код би радио исто да је драјвер `b2` или `local` .

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
 Много опширнији пример, који показује већину понуђених функција:

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

 ## Метаподаци
 Команда `metadata` враћа метаподатке о једном уносу система датотека.
 Слично томе, повратна вредност из команде `list` је низ објеката метаподатака.

 Објекат метаподатака изгледа овако:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Својство `type` типе` може бити `file` , `dir` , `link` или `special` .

 У зависности од типа драјвера, команда `list` можда неће вратити сва поља. `name` и `type` типе`
 увек треба да буде присутан. Следећа команда `metadata` ће вратити сва доступна својства.

 ## Алтернативни стил увоза
 Увезите модул са пуним опсегом и користите функцију `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кеширање
 Мобилетто најбоље ради са <a href="https://redis.io">редис</a> кеш меморијом.

 Мобилетто ће покушати да се повеже са редис инстанцом на 127.0.0.1:6379

 Можете заменити било шта од овога:
 * Подесите `MOBILETTO_REDIS_HOST` енв вар, мобилни да се повеже овде уместо локалног хоста
 * Подесите `MOBILETTO_REDIS_PORT` енв вар, овај порт ће се користити

 Мобилетто ће ускладиштити све своје редис кључеве са префиксом `_mobiletto__` . Можете променити ово
 подешавањем `MOBILETTO_REDIS_PREFIX` енв вар.

 Такође можете подесити кеширање по конекцији помоћу објекта `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не желите да се редис кешује?
 Да бисте онемогућили: проследите `enabled: false` у свој објекат `opts.redisConfig` када успоставите своју везу.

 Као што је објашњено у наставку, онемогућавање кеширања ће имати негативан утицај на перформансе и изазвати више захтева
 до складишта које вам је заиста потребно.

 ### Смернице за кеширање
 **Шифровано складиште**: читање/писање шифроване меморије је само мало спорије од нормалног,
 али кретање по директоријумима (што неке ствари раде) је прилично скупо. Коришћење редис кеша
 ће вам дати значајно повећање перформанси.

 Подразумевана кеш меморија је сигурна, али не ради добро ако имате много операција писања/уклањања.
 Свака операција писања или уклањања поништава цео кеш, осигуравајући да ће наредна читања видети
 најновије промене.

 ### ЦЛИ алати
 Ако користите ЦЛИ алат као што је [мобилетто-цли](хттпс://ввв.нпмјс.цом/пацкаге/мобилетто-цли),
 дефинитивно ћете желети да је редис кеш омогућен, јер траје током позивања команде `mo` .

 ## Мирроринг

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Команда `mirror` врши једнократну копију свих датотека са једног мобилног телефона на други.
 Не покреће никакав процес за одржавање огледала током времена. Поново покрените команду `mirror`
 да бисте синхронизовали све датотеке које недостају.

 Повратна вредност из `mirror` је једноставан објекат са бројачима колико је датотека успешно
 пресликано и колико датотека има грешака:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 УПОЗОРЕЊЕ: Пресликавање великих скупова података може да одузме много времена и захтева пропусни опсег

 Са семантиком позива `mirror` понекад може бити збуњујуће разумети ко је
 читалац и ко је писац. Замислите то као изјаву о задатку: "леви мобилни телефон"
 је ствар којој се додељује (пресликани подаци уписани), а „десни мобилни телефон“ (
 аргумент методи `mirror` ) је вредност која се додељује (пресликани подаци се читају).

 ## Транспарентно шифровање
 Омогућите транспарентно шифровање на страни клијента:

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

 Шта се дешава? Одвојени директоријум (дирент) (шифрован) прати које се датотеке налазе у њему
 директоријум (ака дирент директоријум).
 * Команда `list` чита датотеке уноса директоријума, дешифрује сваку наведену путању; затим враћа метаподатке за сваку датотеку
 * Команде `list` су неефикасније, посебно за директоријуме са великим бројем датотека
 * Команда `write` уписује дирент фајлове у дирент директоријум сваког родитеља; затим уписује датотеку
 * команде `write` ће изазвати О(Н) уписивања, са Н = дубином у хијерархији директоријума
 * Команда `remove` уклања одговарајућу дирент датотеку и њен родитељ ако је празан; затим уклања датотеку
 * Нерекурзивне команде `remove` ће изазвати О(Н) читања и потенцијално исто толико брисања, са Н = дубином у хијерархији директоријума
 * Рекурзивне команде `remove` на великим и дубоким системима датотека могу бити скупе

 Имајте на уму да чак и када је шифровање на страни клијента омогућено, противник са потпуном видљивошћу у вашој шифрованој страни сервера
 складиште, чак и без кључа, и даље може да види укупан број директоријума и колико датотека се налази у сваком и са
 мало труда, откријте неке или све укупне структуре хијерархије директоријума.
 *Напомена: Користите релативно равну структуру ради боље безбедности.*
 Противник не би знао имена директоријума/датотека осим ако није знао и вашу енкрипцију
 кључ или је на други начин успешно разбио шифровање. Тада су све опкладе искључене!

 ### Перформансе и кеширање
 Операције на шифрованом складишту могу бити споре. Рекурзивни спискови и уклањања могу бити веома спори.
 Кеширање преко редис-а изузетно помаже, али имајте на уму да се кеш испире након сваког уписивања или уклањања.

 ## Ротација тастера
 Направите мобилни телефон са својим новим кључем, а затим пресликајте старе податке у њега:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Интерфејс драјвера
 Драјвер је било која ЈС датотека која извози функцију 'сторагеЦлиент' са овим потписом:

    function storageClient (key, secret, opts)

 * `key` : стринг, ваш АПИ кључ (за `local` драјвер ово је основни директоријум)
 * `secret` : стринг, ваша тајна АПИ-ја (може се изоставити за `local` драјвер)
 * `opts` : објекат, својства су по возачу:
 * За `local` , својства `fileMode` и `dirMode` одређују како се креирају нове датотеке и директоријуми
 * За `s3` , својство `bucket` је потребно. Опциона својства су:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Објекат који функција сторагеЦлиент враћа мора да дефинише ове функције:

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

 ## Логгинг
 Мобилетто користи библиотеку евиденције [винстон](хттпс://ввв.нпмјс.цом/пацкаге/винстон).

 Дневници **ће** садржати путање датотека и поруке о грешкама, али **никада** неће садржати кључеве, тајне,
 или било које друге информације о конфигурацији везе.

 ### Ниво дневника
 Користите променљиву окружења `MOBILETTO_LOG_LEVEL` да бисте подесили ниво евиденције, користећи један
 нивоа `npm` дефинисаних у [хттпс://ввв.нпмјс.цом/пацкаге/винстон#логгинг-левелс](хттпс://ввв.нпмјс.цом/пацкаге/винстон#логгинг-левелс)

 Подразумевани ниво је `error` . Најопширнији ниво је `silly` , иако тренутно мобилетто
 не евидентира на нивоима испод `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Лог фајл
 Подразумевано, логер пише у конзолу. Да бисте послали евиденцију у датотеку, подесите `MOBILETTO_LOG_FILE`
 варијабла окружења. Када се евидентирате у датотеку, евиденције се више неће уписивати у конзолу.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Да бисте искључили евидентирање:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
