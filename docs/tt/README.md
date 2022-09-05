Мобильтто
 =========

 Mobiletto - JavaScript саклагыч абстракция катламы, клиент ягыннан өстәмә ачык шифрлау.

 # Эчтәлек
 * [Нигә Мобилтто?](# Нигә-Мобилтто?)
 * [Тиз башлау](# Тиз башлау)
 * [Mobiletto CLI](# mobiletto-клиент)
 * [Чыганак](# Чыганак)
 * [Урнаштыру](# урнаштыру)
 * [Ярдәм һәм финанслау](# Ярдәм-финанслау)
 * [Төп куллану](# Төп куллану)
 * [Мета мәгълүматлар](# Мета мәгълүматлар)
 * [Альтернатив импорт стиле](# Альтернатив-импорт-стиль)
 * [Кэшлау](# Кэш)
 * [Көзге] [# Көзге)
 * [Ачык шифрлау](# Ачык-шифрлау)
 * [Ачкыч әйләнеше](# Ачкыч әйләнеше)
 * [Драйвер интерфейсы](# Драйвер-интерфейс)
 * [Керү](# Керү)

 # Моны бүтән телдә укыгыз
 Бу README.md документ [hokeylization](https://github.com/cobbzilla/hokeylization) аша тәрҗемә ителде
 ** [Google Translate ярдәмендә һәр тел](https://cloud.google.com/translate/docs/languages)! **

 Мин камил түгел дип ышанам, ләкин бернәрсәдән дә яхшырак түгел дип ышанам!

 [🇸🇦 Гарәпчә](docs / ar / README.md)
 [🇧🇩 Бенгали](docs / bn / README.md)
 [🇩🇪 Алманча](docs / de / README.md)
 [🇺🇸 Инглизчә](docs / en / README.md)
 [🇪🇸 Испанча](docs / es / README.md)
 [🇫🇷 Французча](docs / fr / README.md)
 [🇹🇩 Хауса](докс / га / README.md)
 [🇮🇳 Hindiинди](docs / hi / README.md)
 [🇮🇩 Индонезия](docs / id / README.md)
 [🇮🇹 Италия](docs / it / README.md)
 [🇯🇵 Япон](docs / ja / README.md)
 [🇰🇷 Корея](docs / ko / README.md)
 [🇮🇳 Маранти](docs / mr / README.md)
 [🇵🇱 Поляк](docs / pl / README.md)
 [🇧🇷 Португалча](docs / pt / README.md)
 [🇷🇺 русча](docs / ru / README.md)
 [🇰🇪 Суахили](docs / sw / README.md)
 [🇵🇭 Тагалог](docs / tl / README.md)
 [🇹🇷 Төрекчә](docs / tr / README.md)
 [🇵🇰 Урду](docs / ur / README.md)
 [🇻🇳 Вьетнам](docs / vi / README.md)
 [🇨🇳 Кытай](docs / zh / README.md)


 ** [📚 ... Барлык телләр ...](docs / README.md) **
 ----

 ### README тәрҗемәсендә проблема бармы?
 Бу оригиналь тәрҗемә [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 кимчелекле булырга мөмкин - * төзәтмәләр бик рәхимле! * Зинһар өчен, GitHub'ка тарту соравын җибәрегез (https://github.com/cobbzilla/mobiletto/pulls),
 яисә моны эшләү уңайлы булмаса, [проблеманы ачыгыз](https://github.com/cobbzilla/mobiletto/issues)

 Тәрҗемә турында яңа GitHub чыгарганда, зинһар өчен:
 * битнең URL-ны кертегез (браузер адрес тактасыннан күчереп языгыз)
 * дөрес булмаган текстны кертегез (браузердан күчереп языгыз)
 * зинһар, нәрсә начар икәнен сурәтләгез - тәрҗемә дөрес түгелме? форматлау ничектер бозылганмы?
 * яхшырак тәрҗемә итү тәкъдимен тәкъдим итегез, яки текстны ничек форматларга кирәк
 * **Рәхмәт!**

 ## Нигә Мобилтто?

 ### Сау бул, сатучы йозак!
 Төрле болыт саклаучыларның туры килмәгән API-лары бар. "S3 яраклашуы" өчен омтылганнар да
 идиосинкратик тәртипкә ия.

 Сезнең кушымтагыз өчен билгеле саклаучы сатучы сайлаганда, турыдан-туры аларның API, кушымтагызга код бирсәгез
 хәзер бу хезмәткә бәйле. Вакыт узу белән код туплангач, сатучылар үзгәрә
 көннән-көн тотрыксыз. Сатучыларның кызыклы дөньясына рәхим итегез!

 Mobiletto бу проблеманы чишү өчен эшләнгән. Кушымтагызны мобильто API-ка кодлап, сез җиңел генә эшли аласыз
 саклагычларны үзгәртегез һәм сезнең кушымтаның саклагыч катламы бертөрле эш итәчәген белегез.

 ### Зур тест
 Барлык драйверлар да бер йөртүче өчен 60+ тест белән бер үк тәртип өчен сынала.
 Без барлык драйверларны һәр комбинация белән сынап карыйбыз:
 * Шифрлау: кушылган да, инвалид та
 * Redis кэш: кушылган да, инвалид та

 Бу ысул безгә тынычлык бирә, мобилтто нинди драйвер куллансаң да үзен шулай тотар,
 һәм сез кэшлау һәм / яки шифрлау мөмкинлеген бирәсез.

 ### Шофер ярдәме
 Хәзерге Mobiletto саклагычлары:
 * `s3` : Amazon S3
 * `b2` : В2
 * `local` җирле": җирле файл системасы

 * Болыт саклаучыларга ярдәм итү өчен кертемнәр бик рәхимле! *

 ## mobiletto-клиент
 Mobiletto бүтән JavaScript коды белән китапханә буларак кулланылырга тиеш.

 Мобильтто белән боерык сызыгында эшләү өчен, [mobiletto-cli] кулланыгыз (https://www.npmjs.com/package/mobiletto-cli)

 ## Чыганак
 * [GitHub'та мобильто](https://github.com/cobbzilla/mobiletto)
 * [төнге мобильто](https://www.npmjs.com/package/mobiletto)

 ## Ярдәм һәм финанслау
 Мин профессиональ ачык чыганак программа тәэминаты булырга тырышам. Мин эшлим
 озак еллар программа тәэминаты индустриясе, мин уңышлы компанияләр башладым һәм аларны җәмәгать компанияләренә саттым.
 Күптән түгел мин эшемне югалттым, һәм минем бүтән тезелешем юк

 Шуңа күрә мин файдалы программа язарга тырышам һәм моның эшләвен тикшерәм

 Әгәр дә сез бу программаны кулланырга яратсагыз, мин хәтта бик рәхмәтле булыр идем
 иң кечкенә [Патрон аша айлык өлеш](https://www.patreon.com/cobbzilla)

 *Рәхмәт!*

 ## урнаштыру
 `npm` яки `yarn` " кулланып урнаштырыгыз. Сез, мөгаен, " `lite` версиясен телисез
 тәрҗемә ителгән README файллары:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Әгәр дә сез README файлларын һәр телдә телисез икән, тулы версиясен урнаштырыгыз:

    npm install mobiletto
    yarn add mobiletto

 ## Тиз башлау
 `s3` "s3" драйверын кулланып кыска мисал.

 Әгәр дә драйвер " `b2` яки " `local` " булса, бу код шул ук эшләячәк.

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
 ## Төп куллану
 Тәкъдим ителгән үзенчәлекләрнең күбесен күрсәтеп, күпкә киңрәк мисал:

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

 ## Мета мәгълүматлар
 " `metadata` " боерыгы бер файл системасы турында мета-мәгълүматларны кайтара.
 Нәкъ шулай ук, " `list` " командасыннан кире кыйммәт мета-мәгълүмат объектлары массивы.

 Мета мәгълүматлар объектына охшаган:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 " `type` " милеге "файл", `dir` `file` , " `link` " яки " `special` " булырга мөмкин.

 Драйвер төренә карап, " `list` " боерыгы барлык кырларны кире кайтара алмый. " `name` " һәм " `type` үзлекләре
 һәрвакыт булырга тиеш. Киләсе " `metadata` " боерыгы барлык булган әйберләрне кире кайтарачак.

 ## Альтернатив импорт стиле
 Тулы күләмле модульне импортлагыз һәм " `connect` функциясен кулланыгыз:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэш
 Мобилтто <a href="https://redis.io">редис</a> кэш белән иң яхшы эшли.

 Mobiletto 127.0.0.1:6379 телефоны буенча редис инстанциясенә тоташырга тырышачак

 Сез аларның икесен дә кире кагарга мөмкин:
 * " `MOBILETTO_REDIS_HOST` env var, мобильто монда локальхост урынына тоташу
 * " `MOBILETTO_REDIS_PORT` " env вариантын куегыз, бу порт кулланылачак

 Mobiletto барлык редис ачкычларын " `_mobiletto__` " префиксы белән саклаячак. Сез моны үзгәртә аласыз
 " `MOBILETTO_REDIS_PREFIX` env вариантын куеп.

 Сез шулай ук " `opts.redisConfig` объекты белән тоташу кэшын куя аласыз:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Редис кэш теләмисезме?
 Сүндерү өчен: сезнең бәйләнешне урнаштырганда `opts.redisConfig` объектында " `enabled: false` " тапшырыгыз.

 Түбәндә каралганча, кэшны сүндерү эшкә тискәре йогынты ясар һәм күбрәк сорау бирер
 чыннан да кирәк булган саклауга.

 ### Кэш белән идарә итү
 ** Шифрланган саклагыч **: шифрланган саклауны уку / язу гадәтигә караганда әкренрәк,
 ләкин каталоглар буенча йөрү (кайбер әйберләр эшли) шактый кыйммәт. Редис кэш куллану
 сизелерлек эшне арттырачак.

 Килешү кэш куркынычсыз, ләкин язу / бетерү операцияләре күп булса, яхшы эшләми.
 Теләсә нинди язу яки бетерү операциясе бөтен кэшны юкка чыгара, алдагы укуларны күрәчәк
 соңгы үзгәрешләр.

 ### CLI кораллары
 Әгәр дә сез [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) кебек CLI коралын кулланасыз икән,
 сез, һичшиксез, редис кэшының эшләвен теләрсез, чөнки ул " `mo` боерыгы буенча дәвам итә.

 ## Көзге

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 " `mirror` " боерыгы бер мобильтодан икенчесенә барлык файлларның бер тапкыр күчерелмәсен башкара.
 Вакыт узу белән көзге саклау өчен ул бернинди процесс та эшләми. " `mirror` командасын яңадан эшләгез
 югалган файлларны синхронлаштыру.

 " `mirror` " дән кире кыйммәт - ничә файл уңышлы булганы өчен счетчиклары булган гади объект
 көзгеле һәм күпме файлларда хаталар булган:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 Кисәтү: зур мәгълүмат җыелмаларын чагылдыру бик күп вакыт таләп итә һәм киңлек киңлеген таләп итә

 " `mirror` " чакыру семантикасы белән кайвакыт кем икәнен аңлау буталчык булырга мөмкин
 укучы һәм язучы кем. Аны бирем сүзләре кебек күз алдыгызга китерегез: "сул кул мобильто"
 билгеләнгән әйбер (көзге мәгълүматлар язылган), һәм "уң кул мобильто" (
 " `mirror` " ысулына аргумент - билгеләнгән кыйммәт (көзге мәгълүматлар укыла).

 ## Ачык шифрлау
 Клиент ягыннан ачык шифрлау мөмкинлеген бирегез:

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

 Бу ни бу? Аерым "каталог кертү" (дирент) каталог (шифрланган) андагы файлларның нинди булуын күзәтә
 каталог (дирент каталог).
 * " `list` " боерыгы каталогка керү файлларын укый, күрсәтелгән һәр юлны шифрлый; аннары һәр файл өчен мета-мәгълүматларны кайтара
 * " `list` " боерыклары эффектив түгел, аеруча күп санлы файллар булган каталоглар өчен
 * " `write` " боерыгы ата-аналарның каталогына рекурсив рәвештә файллар яза; аннары файл яза
 * `write` боерыклары O (N) язуларын китерәчәк, N = каталог иерархиясендә
 * " `remove` " боерыгы тиешле файлны бетерә, һәм аның әти-әнисе буш булса, рекурсив рәвештә; аннары файлны бетерә
 * Рекурсив булмаган " `remove` боерыклары O (N) укуга китерәчәк һәм потенциаль күп бетерүләр, каталог иерархиясендә N = тирәнлеге белән.
 * Зур һәм тирән файл системаларында рекурсив " `remove` боерыклары кыйммәт булырга мөмкин

 Игътибар итегез, хәтта клиент ягыннан шифрлау кушылган булса да, шифрланган сервер ягына тулы күренеп торган дошман.
 саклау, ачкычсыз булса да, каталогларның гомуми санын һәм һәрберсендә ничә файл барлыгын һәм белән
 ниндидер тырышлык, каталог иерархиясенең гомуми структурасын табу.
 * Искәрмә: яхшырак куркынычсызлык өчен чагыштырмача яссы структураны кулланыгыз. *
 Дошман каталогларның / файлларның исемнәрен белми, алар сезнең шифрлауны белмәсәләр
 ачкыч яки шифрлауны уңышлы яраклаштырган. Барлык коймаклар ул вакытта!

 ### Спектакль һәм кэш
 Шифрланган саклагычтагы операцияләр әкрен булырга мөмкин. Рекурсив исемлекләр һәм чыгару бик әкрен булырга мөмкин.
 Редис аша кэш бик зур ярдәм итә, ләкин игътибар итегез, кэш теләсә нинди язуларга яисә бетерелгәннәргә.

 ## Ачкыч әйләнү
 Яңа ачкыч белән мобильто ясагыз, аннары иске мәгълүматны чагылдырыгыз:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Шофер интерфейсы
 Драйвер - бу имза белән 'storageClient' функциясен экспортлаучы JS файл.

    function storageClient (key, secret, opts)

 * " `key` : тезмә, сезнең API ачкычы (" `local` драйвер өчен бу төп каталог)
 * `secret` : тезмә, сезнең API серегез (" `local` " драйвер өчен калдырылырга мөмкин)
 * `opts` : объект, характеристика бер йөртүчегә:
 * " `local` " өчен, " `fileMode` " һәм " `dirMode` үзлекләре яңа файллар һәм каталоглар ничек барлыкка килүен билгели.
 * " `s3` " өчен " `bucket` " милеге кирәк. Өстәмә үзенчәлекләр:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Саклау клиенты функциясе кире кайткан объект бу функцияләрне билгеләргә тиеш:

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

 ## Керү
 Мобилто [winston](https://www.npmjs.com/package/winston) теркәлү китапханәсен куллана.

 Бүрәнәләр ** файл юлларын һәм хата хәбәрләрен үз эченә ала, ләкин ** беркайчан да ачкычлар, серләр булмаячак,
 яки бүтән тоташу конфигурациясе турында мәгълүмат.

 ### Бүрәнә дәрәҗәсе
 " `MOBILETTO_LOG_LEVEL` " мохит үзгәрүчесен кулланыгыз, бүрәнә дәрәҗәсен билгеләү өчен
 [https://www.npmjs.com/package/winston#logging-levels)(https://www.npmjs.com/package/winston#logging-levels) белән билгеләнгән " `npm` " дәрәҗәләре.

 Килешенгән дәрәҗә - " `error` . Иң фигыль дәрәҗәсе - " `silly` , хәзерге вакытта мобильто
 " `debug` " астыннан дәрәҗәләргә керми

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Керү файл
 Килешү буенча, теркәлүче консолга яза. Файлга бүрәнәләр җибәрү өчен, " `MOBILETTO_LOG_FILE` " куегыз
 әйләнә-тирә үзгәрүчән. Файлга кергәндә бүрәнәләр консолга язылмаячак.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Керүне сүндерергә:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
