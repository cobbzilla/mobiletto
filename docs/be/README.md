Мабілета
 =========

 Mobiletto - гэта ўзровень абстракцыі сховішча JavaScript з дадатковым празрыстым шыфраваннем на баку кліента.

 # Змест
 * [Чаму Mobiletto?](#Чаму Mobiletto?)
 * [Хуткі старт](#Хуткі старт)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Крыніца](#Крыніца)
 * [Устаноўка](#Устаноўка)
 * [Падтрымка і фінансаванне](#Support-and-Funding)
 * [Асноўнае выкарыстанне](#Basic-usage)
 * [Метададзеныя](#Метададзеныя)
 * [Альтэрнатыўны стыль імпарту](#Alternate-import-style)
 * [Кэшаванне](#Кэшаванне)
 * [Адлюстраванне](#Адлюстраванне)
 * [Празрыстае шыфраванне](#Transparent-encryption)
 * [Паварот клавіш](#Паварот клавіш)
 * [Інтэрфейс драйвера](#Інтэрфейс драйвера)
 * [Вядзенне журнала](#Вядзенне журнала)

 # Прачытайце гэта на іншай мове
 Гэты дакумент README.md быў перакладзены праз [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[усе мовы, якія падтрымліваюцца Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Я ўпэўнены, што гэта не ідэальна, але я спадзяюся, што гэта лепш, чым нічога!

 [🇸🇦 арабская](../ar/README.md)
 [🇧🇩 бенгальская](../bn/README.md)
 [🇩🇪 нямецкая](../de/README.md)
 [🇺🇸 англійская](../en/README.md)
 [🇪🇸 Іспанская](../es/README.md)
 [🇫🇷 французская](../fr/README.md)
 [🇹🇩 Хаўса](../ha/README.md)
 [🇮🇳 хіндзі](../hi/README.md)
 [🇮🇩 Інданезійская](../id/README.md)
 [🇮🇹 Італьянская](../it/README.md)
 [🇯🇵 японская](../ja/README.md)
 [🇰🇷 карэйская](../ko/README.md)
 [🇮🇳 маранты](../mr/README.md)
 [🇵🇱 польская](../pl/README.md)
 [🇧🇷 партугальская](../pt/README.md)
 [🇷🇺 руская](../ru/README.md)
 [🇰🇪 суахілі](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 турэцкая](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 в'етнамская](../vi/README.md)
 [🇨🇳 кітайская](../zh/README.md)


 **[📚 ... Усе мовы ...](../README.md)**
 ----

 ### Ці ёсць праблемы з гэтым перакладам README?
 Гэты канкрэтны пераклад арыгінала [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 можа мець недахопы -- *выпраўленні вельмі вітаюцца!* Адпраўце [запыт на выцягванне на GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 або, калі вам гэта не зручна, [адкрыйце пытанне](https://github.com/cobbzilla/mobiletto/issues)

 Калі вы ствараеце новую праблему GitHub аб перакладзе, зрабіце:
 * уключыце URL старонкі (скапіруйце/устаўце з адраснага радка браўзера)
 * уключыце дакладны няправільны тэкст (скапіруйце/устаўце з браўзера)
 * калі ласка, апішыце, што не так -- пераклад няправільны? фарматаванне неяк парушана?
 * калі ласка, прапануйце лепшы пераклад ці тое, як правільна афармляць тэкст
 * **Дзякуй!**

 ## Чаму Mobiletto?

 ### Бывай, блакаванне пастаўшчыка!
 Розныя пастаўшчыкі воблачных сховішчаў маюць несумяшчальныя API. Нават тыя, якія імкнуцца да "сумяшчальнасці S3"
 маюць ідыясінкратычныя паводзіны.

 Калі вы выбіраеце пэўнага пастаўшчыка сховішча для вашага прыкладання, калі вы кодуеце непасрэдна яго API, ваша прыкладанне
 зараз залежыць ад гэтай службы. Час ідзе і код назапашваецца, пастаўшчыкі мяняюцца
 усё больш невыносным. Сардэчна запрашаем у вясёлы свет блакіроўкі пастаўшчыкоў!

 Mobiletto быў распрацаваны, каб вырашыць гэтую праблему. Закадзіраваўшы сваю праграму ў API mobiletto, вы можаце лёгка
 зменіце пастаўшчыка сховішча і ведайце, што ўзровень сховішча вашага прыкладання будзе паводзіць сябе аднолькава.

 ### Шырокае тэставанне
 Усе драйверы правяраюцца на аднолькавыя паводзіны з больш чым 60 тэстамі для кожнага драйвера.
 Мы тэстуем усе драйверы з кожнай камбінацыяй:
 * Шыфраванне: як уключана, так і адключана
 * Кэш Redis: уключаны і адключаны

 Такі падыход дае нам спакой, што mobiletto будзе паводзіць сябе аднолькава незалежна ад таго, які драйвер вы выкарыстоўваеце,
 і незалежна ад таго, уключылі вы кэшаванне і/або шыфраванне.

 ### Падтрымка драйвераў
 Актуальныя драйверы захоўвання Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : лакальная файлавая сістэма

 *Уклад у падтрымку большай колькасці пастаўшчыкоў воблачных сховішчаў вельмі вітаецца!*

 ## mobiletto-cli
 Mobiletto прызначаны для выкарыстання іншым кодам JavaScript у якасці бібліятэкі.

 Каб працаваць з mobiletto ў камандным радку, выкарыстоўвайце [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Крыніца
 * [mobiletto на GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto на npm](https://www.npmjs.com/package/mobiletto)

 ## Падтрымка і фінансаванне
 Я спрабую быць прафесійным распрацоўшчыкам праграмнага забеспячэння з адкрытым зыходным кодам. Я працаваў у
 У індустрыі праграмнага забеспячэння на працягу многіх гадоў я ствараў паспяховыя кампаніі і прадаваў іх публічным кампаніям.
 Нядаўна я страціў працу, і ў мяне няма іншай працы

 Таму я паспрабую напісаць карыснае праграмнае забеспячэнне і пагляджу, ці спрацуе гэта

 Калі вам падабаецца карыстацца гэтай праграмай, я быў бы вельмі ўдзячны нават за
 найменшы [штомесячны ўзнос праз Patreon](https://www.patreon.com/cobbzilla)

 *Дзякуй!*

 ## Устаноўка
 Усталюйце з дапамогай `npm` або `yarn` . Верагодна, вам патрэбна `lite` версія, якая не ўключае ўсе
 перакладзеныя файлы README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Калі вы сапраўды хочаце файлы README на ўсіх мовах, усталюйце поўную версію:

    npm install mobiletto
    yarn add mobiletto

 ## Хуткі старт
 Кароткі прыклад выкарыстання драйвера mobiletto `s3` .

 Гэты код працаваў бы аднолькава, калі б драйвер быў `b2` або `local` .

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
 ## Асноўнае выкарыстанне
 Значна больш шырокі прыклад, які паказвае большасць прапанаваных функцый:

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

 ## Метададзеныя
 Каманда `metadata` вяртае метаданыя аб адным запісе файлавай сістэмы.
 Падобным чынам значэнне, якое вяртае каманда `list` , з'яўляецца масівам аб'ектаў метададзеных.

 Аб'ект метададзеных выглядае так:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` можа быць `file` , `dir` , `link` або `special` .

 У залежнасці ад тыпу драйвера, каманда `list` можа не вяртаць усе палі. `name` і `type`
 заўсёды павінна прысутнічаць. Наступная каманда `metadata` верне ўсе даступныя ўласцівасці.

 ## Альтэрнатыўны стыль імпарту
 Імпартуйце поўны модуль і выкарыстоўвайце функцыю `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэшаванне
 Mobiletto лепш за ўсё працуе з <a href="https://redis.io">кэшам</a> Redis.

 Mobiletto паспрабуе падключыцца да асобніка Redis на 127.0.0.1:6379

 Вы можаце перавызначыць любы з наступных варыянтаў:
 * Усталюйце `MOBILETTO_REDIS_HOST` , мабільнае падключэнне тут замест лакальнага
 * Усталюйце `MOBILETTO_REDIS_PORT` , гэты порт будзе выкарыстоўвацца

 Mobiletto будзе захоўваць усе свае ключы Redis з прэфіксам `_mobiletto__` . Вы можаце змяніць гэта
 шляхам усталявання `MOBILETTO_REDIS_PREFIX` var.

 Вы таксама можаце ўсталяваць кэшаванне кожнага злучэння з дапамогай аб'екта `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Не хочаце кэшаваць Redis?
 Каб адключыць: перадайце `enabled: false` у вашым аб'екце `opts.redisConfig` пры ўсталяванні злучэння.

 Як сказана ніжэй, адключэнне кэшавання негатыўна паўплывае на прадукцыйнасць і пацягне за сабой больш запытаў
 у сховішча, якое вам сапраўды трэба.

 ### Кіраўніцтва па кэшаванні
 **Зашыфраванае сховішча**: чытанне/запіс зашыфраванага сховішча толькі крыху павольней звычайнага,
 але навігацыя па каталогах (што некаторыя рэчы робяць) даволі дарагая. Выкарыстанне кэша Redis
 дасць вам значны прырост прадукцыйнасці.

 Кэш па змаўчанні бяспечны, але не працуе добра, калі ў вас шмат аперацый запісу/выдалення.
 Любая аперацыя запісу або выдалення робіць увесь кэш несапраўдным, гарантуючы, што наступныя чытанні будуць бачыць
 апошнія змены.

 ### Інструменты CLI
 Калі вы выкарыстоўваеце інструмент CLI, напрыклад [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 вы абавязкова захочаце ўключыць кэш Redis, бо ён захоўваецца пры выкананні каманды `mo` .

 ## Люстраное адлюстраванне

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Каманда `mirror` выконвае аднаразовае капіраванне ўсіх файлаў з аднаго mobiletto на іншы.
 Ён не запускае ніякага працэсу для падтрымання люстэрка з цягам часу. Запусціце каманду `mirror` яшчэ раз
 для сінхранізацыі адсутных файлаў.

 Значэнне, якое вяртае `mirror` , - гэта просты аб'ект са лічыльнікамі колькасці файлаў, якія былі паспяхова перададзены
 адлюстравана і колькі файлаў было з памылкамі:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ПАПЯРЭДЖАННЕ: адлюстраванне вялікіх набораў даных можа заняць вельмі шмат часу і паласы прапускання

 З `mirror` часам бывае складана зразумець, хто з'яўляецца
 чытач і хто пісьменнік. Уявіце сабе гэта як заяву аб прысваенні: "левае mobiletto"
 гэта рэч, якой прызначаецца (запісаныя люстраныя даныя), і "правы mobiletto" (the
 аргумент метаду `mirror` ) — гэта значэнне, якое прысвойваецца (люстраваныя даныя чытаюцца).

 ## Празрыстае шыфраванне
 Уключыць празрыстае шыфраванне на баку кліента:

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

 Што адбываецца? Асобны "запіс каталога" (дырэнт) каталог (зашыфраваны) адсочвае, якія файлы знаходзяцца ў ім
 каталог (ён жа каталог dirent).
 * Каманда `list` чытае файлы запісу каталога, расшыфроўвае кожны пералічаны шлях; затым вяртае метададзеныя для кожнага файла
 * Каманды `list` больш неэфектыўныя, асабліва для каталогаў з вялікай колькасцю файлаў
 * Каманда `write` запісвае dirent-файлы ў dirent-каталог кожнага з бацькоў рэкурсіўна; затым запісвае файл
 * Каманды `write` прывядуць да O(N) запісаў, прычым N = глыбіня ў іерархіі каталогаў
 * Каманда `remove` выдаляе адпаведны файл dirent і яго бацькоўскі файл, калі ён пусты; затым выдаляе файл
 * Нерэкурсіўныя каманды `remove` прывядуць да O(N) чытанняў і патэнцыйна столькі ж выдаленняў, з N = глыбінёй у іерархіі каталогаў
 * Рэкурсіўныя каманды `remove` на вялікіх і глыбокіх файлавых сістэмах могуць быць дарагімі

 Звярніце ўвагу, што нават пры ўключаным шыфраванні на баку кліента, праціўнік з поўнай бачнасцю вашага зашыфраванага боку сервера
 сховішча, нават без ключа, можа па-ранейшаму бачыць агульную колькасць каталогаў і колькасць файлаў у кожным, а таксама з
 некаторыя намаганні, выявіць частку або ўсю агульную структуру іерархіі каталогаў.
 *Заўвага: выкарыстоўвайце адносна плоскую структуру для лепшай бяспекі.*
 Праціўнік не будзе ведаць імёны каталогаў/файлаў, калі ён таксама не будзе ведаць ваша шыфраванне
 ключ або іншым чынам паспяхова ўзламаў шыфраванне. Тады ўсе стаўкі адключаны!

 ### Прадукцыйнасць і кэшаванне
 Аперацыі ў зашыфраваным сховішчы могуць быць павольнымі. Рэкурсіўныя спісы і выдаленні могуць быць вельмі павольнымі.
 Кэшаванне праз redis надзвычай дапамагае, але звярніце ўвагу, што кэш ачышчаецца пры любой запісе або выдаленні.

 ## Кручэнне ключоў
 Стварыце mobiletto з вашым новым ключом, затым адлюстравайце ў ім старыя дадзеныя:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Інтэрфейс драйвера
 Драйвер - гэта любы файл JS, які экспартуе функцыю "storageClient" з такой сігнатурай:

    function storageClient (key, secret, opts)

 * `key` : радок, ваш ключ API (для `local` драйвера гэта базавы каталог)
 * `secret` : радок, ваш сакрэт API (можна апусціць для `local` драйвера)
 * `opts` : аб'ект, уласцівасці кожнага драйвера:
 * Для `local` local` ўласцівасці `fileMode` і `dirMode` вызначаюць, як ствараюцца новыя файлы і каталогі
 * Для `s3` патрабуецца ўласцівасць `bucket` . Дадатковыя ўласцівасці:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Аб'ект, які вяртае функцыя storageClient, павінен вызначаць наступныя функцыі:

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

 ## Журнал
 Mobiletto выкарыстоўвае бібліятэку запісу [winston](https://www.npmjs.com/package/winston).

 Журналы **будуць** утрымліваць шляхі да файлаў і паведамленні пра памылкі, але **ніколі** не будуць утрымліваць ключы, сакрэты,
 або любую іншую інфармацыю аб канфігурацыі злучэння.

 ### Узровень часопіса
 Выкарыстоўвайце зменную асяроддзя `MOBILETTO_LOG_LEVEL` , каб усталяваць узровень часопіса, выкарыстоўваючы адзін
 узроўняў `npm` , вызначаных у [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Узровень па змаўчанні - `error` . Найбольш шматслоўным узроўнем з'яўляецца `silly` , хоць у цяперашні час mobiletto
 не рэгіструецца на ўзроўнях, ніжэйшых за `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Файл часопіса
 Па змаўчанні рэгістратар запісвае ў кансоль. Каб адправіць журналы ў файл, усталюйце `MOBILETTO_LOG_FILE`
 зменная асяроддзя. Пры ўваходзе ў файл журналы больш не будуць запісвацца ў кансоль.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Каб адключыць запіс:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
