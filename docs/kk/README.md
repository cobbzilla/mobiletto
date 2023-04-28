Mobiletto
 =========

 Mobiletto – қосымша мөлдір клиенттік шифрлауы бар JavaScript сақтау абстракциялық қабаты.

 # Мазмұны
 * [Неге Mobiletto?](#Why-Mobiletto?)
 * [Жылдам бастау](#Жылдам бастау)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Дереккөз](#Дереккөз)
 * [Орнату](#Орнату)
 * [Қолдау және қаржыландыру](#Қолдау және қаржыландыру)
 * [Негізгі қолдану](#Негізгі қолдану)
 * [Метадеректер](#Метадеректер)
 * [Баламалы импорт стилі](#Alternate-импорт стилі)
 * [Кэштеу](#Кэштеу)
 * [Айналау](#Айна)
 * [Мөлдір шифрлау](#Мөлдір-шифрлау)
 * [Кілттерді айналдыру](#Кілттерді айналдыру)
 * [Драйвер интерфейсі](#Драйвер интерфейсі)
 * [Журнау](#Журнау)

 # Мұны басқа тілде оқыңыз
 Бұл README.md құжаты [hokeylization](https://github.com/cobbzilla/hokeylization) арқылы аударылған.
 **[Google Translate қолдайтын барлық тіл](https://cloud.google.com/translate/docs/languages)!**

 Мен бұл мінсіз емес екеніне сенімдімін, бірақ бұл жоқтан жақсы деп үміттенемін!

 [🇸🇦 араб](../ar/README.md)
 [🇧🇩 Бенгал](../bn/README.md)
 [🇩🇪 неміс тілі](../de/README.md)
 [🇺🇸 Ағылшын тілі](../en/README.md)
 [🇪🇸 испан](../es/README.md)
 [🇫🇷 Француз](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Итальяндық](../it/README.md)
 [🇯🇵 жапон](../ja/README.md)
 [🇰🇷 Корей тілі](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Поляк](../pl/README.md)
 [🇧🇷 Португалша](../pt/README.md)
 [🇷🇺 Орысша](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Түрікше](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 вьетнамдық](../vi/README.md)
 [🇨🇳 Қытай](../zh/README.md)


 **[📚 ... Барлық тілдер ...](../README.md)**
 ----

 ### README аудармасында ақау бар ма?
 Түпнұсқаның бұл нақты аудармасы [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ақаулы болуы мүмкін -- *түзетулер өте құпталады!* [GitHub сайтындағы тарту сұрауы](https://github.com/cobbzilla/mobiletto/pulls) жіберіңіз.
 немесе мұны істеу ыңғайсыз болса, [мәселені ашыңыз](https://github.com/cobbzilla/mobiletto/issues)

 Аударма туралы жаңа GitHub мәселесін жасағанда, мынаны орындаңыз:
 * беттің URL мекенжайын қосу (браузердің мекенжай жолағынан көшіру/қою)
 * қате мәтінді қосыңыз (браузерден көшіру/қою)
 * ненің дұрыс емес екенін сипаттаңыз -- аударма дұрыс емес пе? пішімдеу қандай да бір түрде бұзылды ма?
 * жақсырақ аударманы немесе мәтінді қалай дұрыс пішімдеу керектігін ұсыныңыз
 * **Рақмет сізге!**

 ## Неліктен Mobiletto?

 ### Сау болыңыз сатушы құлпы!
 Әртүрлі бұлтты сақтау провайдерлерінің API интерфейстері үйлеспейді. Тіпті «S3 үйлесімділігіне» ұмтылатындар да
 тән мінез-құлықтары бар.

 Қолданбаңыз үшін белгілі бір сақтау жеткізушісін таңдаған кезде, олардың API интерфейсіне тікелей код берсеңіз, қолданбаңыз
 енді сол қызметке тәуелді. Уақыт өтіп, код жинақталған сайын, жеткізушілер өзгереді
 барған сайын қолайсыз. Жеткізушілерді құлыптау қызықты әлеміне қош келдіңіз!

 Mobiletto осы мәселені шешуге арналған. Қолданбаңызды mobiletto API интерфейсіне кодтау арқылы сіз оңай жасай аласыз
 сақтау провайдерлерін өзгертіңіз және қолданбаңыздың сақтау қабаты бірдей әрекет ететінін біліңіз.

 ### Кең ауқымды тестілеу
 Барлық драйверлер әр жүргізуші үшін 60-тан астам сынақпен бірдей мінез-құлыққа сыналады.
 Біз барлық драйверлерді келесі комбинациялармен тексереміз:
 * Шифрлау: қосылған және өшірілген
 * Redis кэші: қосылған және өшірілген

 Бұл тәсіл сізге қай драйверді пайдалансаңыз да, mobiletto бірдей әрекет ететініне тыныштық береді,
 және кэштеуді және/немесе шифрлауды қосқаныңызға қарамастан.

 ### Драйверге қолдау көрсету
 Ағымдағы Mobiletto сақтау драйверлері:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` жергілікті`: жергілікті файлдық жүйе

 *Көбірек бұлтты сақтау провайдерлеріне қолдау көрсету үшін үлестер құпталады!*

 ## mobiletto-cli
 Mobiletto басқа JavaScript коды арқылы кітапхана ретінде пайдалануға арналған.

 Пәрмен жолында mobiletto-мен жұмыс істеу үшін [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) пайдаланыңыз.

 ## Дереккөз
 * [GitHub сайтындағы мобильді](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Қолдау және қаржыландыру
 Мен кәсіби ашық бастапқы бағдарламалық жасақтаманы әзірлеуші болуға тырысамын. Мен жұмыс істеп келемін
 көптеген жылдар бойы бағдарламалық қамтамасыз ету индустриясында мен табысты компанияларды бастадым және оларды ашық компанияларға саттым.
 Жақында мен жұмыссыз қалдым, басқа жұмысым жоқ

 Сондықтан мен пайдалы бағдарламалық құрал жазуға тырысамын және оның жұмыс істейтінін көремін

 Егер сіз осы бағдарламалық жасақтаманы пайдалануды ұнатсаңыз, мен тіпті үшін өте ризамын
 ең аз [Patreon арқылы ай сайынғы жарна](https://www.patreon.com/cobbzilla)

 *Рақмет сізге!*

 ## Орнату
 `npm` немесе `yarn` арқылы орнатыңыз. Сізге барлығын қамтымайтын `lite` нұсқасы қажет болуы мүмкін
 аударылған README файлдары:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Әрбір тілде README файлдарын шынымен қаласаңыз, толық нұсқасын орнатыңыз:

    npm install mobiletto
    yarn add mobiletto

 ## Жылдам бастау
 mobiletto `s3` драйверін пайдаланудың қысқаша мысалы.

 Драйвер `b2` немесе `local` » болса, бұл код бірдей орындалады.

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
 ## Негізгі қолдану
 Ұсынылған мүмкіндіктердің көпшілігін көрсететін анағұрлым кеңірек мысал:

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

 ## Метадеректер
 " `metadata` " пәрмені бір файлдық жүйе жазбасы туралы метадеректерді қайтарады.
 Сол сияқты, `list` пәрменінен қайтарылатын мән метадеректер нысандарының жиымы болып табылады.

 Метадеректер нысаны келесідей көрінеді:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` сипаты `file` , `dir` , `link` немесе `special` болуы мүмкін.

 Драйвер түріне байланысты `list` пәрмені барлық өрістерді қайтармауы мүмкін. `name` және `type` сипаттары
 әрқашан болуы керек. Келесі `metadata` пәрмені барлық қолжетімді сипаттарды қайтарады.

 ## Баламалы импорт мәнері
 Толық ауқымды модульді импорттаңыз және `connect` функциясын пайдаланыңыз:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэштеу
 Mobiletto <a href="https://redis.io">redis кэшімен</a> жақсы жұмыс істейді.

 Mobiletto 127.0.0.1:6379 нұсқасында redis данасына қосылуға әрекет жасайды.

 Мыналардың кез келгенін қайта анықтауға болады:
 * Localhost орнына осында қосылу үшін `MOBILETTO_REDIS_HOST` env var, mobilet орнатыңыз
 * `MOBILETTO_REDIS_PORT` env var параметрін орнатыңыз, бұл порт пайдаланылады

 Mobiletto өзінің барлық redis кілттерін `_mobiletto__` префиксімен сақтайды. Сіз мұны өзгерте аласыз
 `MOBILETTO_REDIS_PREFIX` env var параметрін орнату арқылы.

 Сондай-ақ, `opts.redisConfig` нысанымен қосылым сайын кэштеуді орнатуға болады:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Қайта кэштеуді қаламайсыз ба?
 Өшіру үшін: қосылымды орнатқан кезде `opts.redisConfig` нысанында `enabled: false` ' мәнін өткізіңіз.

 Төменде талқыланғандай, кэштеуді өшіру өнімділікке кері әсер етеді және көбірек сұрауларды тудырады
 сізге шынымен қажет сақтау үшін.

 ### Кэштеу бойынша нұсқаулық
 **Шифрланған жад**: шифрланған жадты оқу/жазу қалыптыдан сәл ғана баяу,
 бірақ каталогтарды шарлау (кейбір нәрселер жасайды) өте қымбат. Redis кэшін пайдалану
 сізге айтарлықтай өнімділікті арттырады.

 Әдепкі кэш қауіпсіз, бірақ жазу/жою әрекеттері көп болса, жақсы жұмыс істемейді.
 Кез келген жазу немесе жою операциясы бүкіл кэшті жарамсыз етеді, бұл келесі оқулар көретінін қамтамасыз етеді
 соңғы өзгерістер.

 ### CLI құралдары
 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) сияқты CLI құралын пайдалансаңыз,
 Сіз міндетті түрде redis кэшінің қосылғанын қалайсыз, себебі ол `mo` пәрменінің шақыруларында созылады.

 ## Айналау

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` пәрмені бір мобильді құрылғыдан екіншісіне барлық файлдардың бір реттік көшірмесін орындайды.
 Ол уақыт өте келе айнаны сақтау үшін ешқандай процесті орындамайды. `mirror` пәрменін қайта іске қосыңыз
 кез келген жетіспейтін файлдарды синхрондау үшін.

 `mirror` » қайтарылатын мән – қанша файл сәтті болғанын есептегіштері бар қарапайым нысан
 шағылыстырылған және қанша файлда қателер бар:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ЕСКЕРТУ: Үлкен деректер жиынын көшіру өте көп уақытты және өткізу қабілеттілігін қажет етуі мүмкін

 `mirror` шақыру семантикасымен кейде кім екенін түсіну шатасуы мүмкін
 оқырман және жазушы кім. Мұны тапсырма туралы мәлімдеме сияқты елестетіп көріңіз: «сол жақ мобильді»
 тағайындалған нәрсе (жазылған айнадағы деректер) және «оң жақтағы mobiletto» (
 `mirror` әдісінің аргументі) тағайындалатын мән (айналанған деректер оқылады).

 ## Мөлдір шифрлау
 Мөлдір клиенттік шифрлауды қосыңыз:

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

 Не болып жатыр? Бөлек «каталог жазбасы» (тікелей) каталог (шифрланған) онда қандай файлдар бар екенін бақылайды
 каталог (aka dirent каталогы).
 * `list` пәрмені каталог енгізу файлдарын оқиды, тізімде көрсетілген әрбір жолдың шифрын шешеді; содан кейін әрбір файл үшін метадеректерді қайтарады
 * `list` пәрмендері тиімсіз, әсіресе файлдар саны көп каталогтар үшін
 * `write` пәрмені dirent файлдарды әрбір ата-ананың тікелей каталогына рекурсивті түрде жазады; содан кейін файлды жазады
 * `write` пәрмендері каталог иерархиясында N = тереңдікпен O(N) жазуды талап етеді
 * `remove` файлды, ал бос болса оның ата-анасын рекурсивті түрде жояды; содан кейін файлды жояды
 * Рекурсивті емес `remove` пәрмендері O(N) оқылады және ықтимал көп жойылады, N = каталог иерархиясының тереңдігі
 * Үлкен және терең файлдық жүйелердегі рекурсивті `remove` пәрмендері қымбат болуы мүмкін

 Клиенттік шифрлау қосулы болса да, шифрланған сервер жағына толық көрінетін қарсылас екенін ескеріңіз.
 жад, тіпті кілтсіз де, каталогтардың жалпы санын және әрқайсысында қанша файл бар екенін көре алады
 біраз күш жұмсап, каталог иерархиясының жалпы құрылымының кейбірін немесе барлығын ашыңыз.
 *Ескертпе: Қауіпсіздікті жақсарту үшін салыстырмалы түрде тегіс құрылымды пайдаланыңыз.*
 Қарсылас сіздің шифрлауыңызды білмейінше, каталогтардың/файлдардың атауларын білмейді
 кілті немесе шифрлауды басқа жолмен сәтті бұзған. Сонда барлық ставкалар өшіріледі!

 ### Өнімділік және кэштеу
 Шифрланған жадтағы әрекеттер баяу болуы мүмкін. Рекурсивті тізімдер мен жоюлар өте баяу болуы мүмкін.
 Redis арқылы кэштеу өте жақсы көмектеседі, бірақ кэш кез келген жазу немесе жою кезінде тазартылатынын ескеріңіз.

 ## Пернені айналдыру
 Жаңа кілтпен mobiletto жасаңыз, содан кейін оған ескі деректерді қайталаңыз:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Драйвер интерфейсі
 Драйвер - бұл қолтаңбасы бар "storageClient" функциясын экспорттайтын кез келген JS файлы:

    function storageClient (key, secret, opts)

 * `key` : жол, сіздің API кілтіңіз ( `local` драйвер үшін бұл негізгі каталог)
 * `secret` : жол, сіздің API құпияңыз ( `local` драйвер үшін өткізілмеуі мүмкін)
 * `opts` : нысан, сипаттар әр драйверге арналған:
 * "Жергілікті" үшін " `local` " және " `fileMode` " сипаттары жаңа файлдар мен каталогтардың `dirMode` анықтайды
 * `s3` үшін `bucket` сипаты қажет. Қосымша сипаттар:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient функциясы қайтаратын нысан мына функцияларды анықтауы керек:

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

 ## Ағаш жазу
 Mobiletto [winston](https://www.npmjs.com/package/winston) журнал жүргізу кітапханасын пайдаланады.

 Журналдар **файл жолдары мен қате туралы хабарларды қамтиды, бірақ **ешқашан** кілттерді, құпияларды,
 немесе кез келген басқа қосылым конфигурациясы.

 ### Журнал деңгейі
 Журнал деңгейін орнату үшін " `MOBILETTO_LOG_LEVEL` ортасының айнымалы мәнін пайдаланыңыз.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) ішінде анықталған `npm` деңгейлерінің

 Әдепкі деңгей – `error` . Ең егжей-тегжейлі деңгей - қазіргі уақытта `silly` болса да, «ақымақ».
 `debug` » төмен деңгейлерде тіркелмейді

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Журнал файлы
 Әдепкі бойынша тіркеуші консольге жазады. Журналдарды файлға жіберу үшін " `MOBILETTO_LOG_FILE` " файлын орнатыңыз
 ортаның айнымалысы. Файлға кіру кезінде журналдар енді консольге жазылмайды.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Тіркеуді өшіру үшін:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
