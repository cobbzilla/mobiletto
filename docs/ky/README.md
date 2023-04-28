Mobiletto
 =========

 Mobiletto бул JavaScript сактагычтын абстракция катмары, кошумча тунук кардар тарабынан шифрлөө.

 # Мазмуну
 * [Эмне үчүн Mobiletto?](#Why-Mobiletto?)
 * [Ыкчам баштоо](#Тез баштоо)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Булак](#Булак)
 * [Орнотуу](#Орнотуу)
 * [Колдоо жана каржылоо](#Колдоо жана каржылоо)
 * [Негизги колдонуу](#Негизги колдонуу)
 * [Метадайындар](#Метадайындар)
 * [Импорттун альтернативдүү стили](#Alternate-import-style)
 * [Кэштөө](#Кэштөө)
 * [Мирroring](#Mirroring)
 * [Тунук шифрлөө](#Transparent-шифрлөө)
 * [Ачкычты айландыруу](#Ачкычты айландыруу)
 * [Драйвер интерфейси](#Driver-интерфейс)
 * [Журнал жазуу](#Журнал жазуу)

 # Муну башка тилде окуңуз
 Бул README.md документи [hokeylization](https://github.com/cobbzilla/hokeylization) аркылуу которулган
 **[Google Translate тарабынан колдоого алынган ар бир тил](https://cloud.google.com/translate/docs/languages)!**

 Мен бул идеалдуу эмес экенине ишенем, бирок ал жоктон жакшы деп үмүттөнөм!

 [🇸🇦 араб](../ar/README.md)
 [🇧🇩 Бенгалча](../bn/README.md)
 [🇩🇪 Германиялык](../de/README.md)
 [🇺🇸 Кыргызча](../en/README.md)
 [🇪🇸 Испанча](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Италиялык](../it/README.md)
 [🇯🇵 Жапон](../ja/README.md)
 [🇰🇷 Корейче](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Поляк](../pl/README.md)
 [🇧🇷 Португалча](../pt/README.md)
 [🇷🇺 Орусча](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Түрк](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 вьетнамча](../vi/README.md)
 [🇨🇳 Кытай](../zh/README.md)


 **[📚 ... Бардык тилдер ...](../README.md)**
 ----

 ### Бул README котормосунда көйгөй барбы?
 Бул түпнуска котормосу [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 мүчүлүштүктөр болушу мүмкүн -- *түзөтүүлөр абдан жакты!* Сураныч, [GitHub'да тартуу өтүнүчүн] жөнөтүңүз (https://github.com/cobbzilla/mobiletto/pulls),
 же муну кылуу сизге жакпаса, [маселени ачыңыз](https://github.com/cobbzilla/mobiletto/issues)

 Котормо боюнча жаңы GitHub маселесин түзүп жатканда, төмөнкүнү аткарыңыз:
 * баракчанын URL дарегин камтуу (браузердин дарек тилкесинен көчүрүү/чаптоо)
 * туура эмес текстти кошуу (браузерден көчүрүү / чаптоо)
 * эмне туура эмес экенин айтып бериңиз -- котормо туура эмеспи? форматтоо кандайдыр бир жол менен бузулганбы?
 * Жакшыраак котормо сунушун сунуштаңыз, же текстти кантип туура форматтоо керек
 * **Рахмат сага!**

 ## Эмне үчүн Mobiletto?

 ### Кош болуңуз сатуучу кулпу!
 Ар кандай булут сактагыч провайдерлеринин бири-бирине дал келбеген API'лери бар. Ал тургай, "S3 шайкештигине" умтулгандар
 өзгөчөлүктөргө ээ.

 Колдонмоңуз үчүн белгилүү бир сактагыч сатуучуну тандаганыңызда, алардын API'сине түздөн-түз код берсеңиз, колдонмоңуз
 азыр ошол кызматка көз каранды. Убакыттын өтүшү менен код топтолгон сайын, сатуучулар өзгөрөт
 барган сайын жараксыз. Сатуучу кулпусунун кызыктуу дүйнөсүнө кош келиңиз!

 Mobiletto бул көйгөйдү чечүү үчүн иштелип чыккан. Колдонмоңузду mobiletto'нун API'сине коддоо менен, сиз оңой кыла аласыз
 сактагыч провайдерлерин өзгөртүңүз жана колдонмоңуздун сактагыч катмары бирдей иш кыларын билиңиз.

 ### Кеңири сыноо
 Бардык айдоочулар ар бир айдоочу үчүн 60+ тест менен бирдей жүрүм-туруму үчүн сыналган.
 Биз бардык айдоочуларды ар бир комбинация менен сынап жатабыз:
 * Шифрлөө: иштетилген жана өчүрүлгөн
 * Redis кэши: иштетилген жана өчүрүлгөн

 Бул ыкма, сиз кайсы драйверди колдонсоңуз да, mobiletto бирдей жүрүш-турушу үчүн бизге тынчтык берет,
 жана кэштөө жана/же шифрлөөнү иштеткениңизге карабастан.

 ### Айдоочуларды колдоо
 Учурдагы Mobiletto сактагыч драйверлери:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : жергиликтүү файл системасы

 *Көбүрөөк булут сактагыч провайдерлерин колдоо үчүн салым кошуңуз!*

 ## mobiletto-cli
 Mobiletto башка JavaScript коду менен китепкана катары колдонууга арналган.

 Буйрук сабында mobiletto менен иштөө үчүн [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) колдонуңуз.

 ## Булак
 * [GitHubдагы мобилетто](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Колдоо жана каржылоо
 Мен профессионалдуу ачык программалык камсыздоону иштеп чыгуучу болууга аракет кылып жатам. Мен иштеп келгем
 көп жылдар бою программалык камсыздоо тармагында мен ийгиликтүү компанияларды ачып, аларды ачык компанияларга саттым.
 Жакында жумушсуз калдым, башка жумушум жок

 Ошентип, мен пайдалуу программалык камсыздоону жазууга аракет кылам жана анын иштээрин көрөм

 Эгер сиз бул программаны колдонууну жактырсаңыз, мен ал тургай, абдан ыраазы болмокмун
 эң кичине [Patreon аркылуу айлык салым](https://www.patreon.com/cobbzilla)

 *Рахмат сага!*

 ## Орнотуу
 `npm` же `yarn` аркылуу орнотуу. Сиз, балким, бардыгын `lite` версиясын кааласаңыз керек
 которулган README файлдары:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Эгер сиз чындап эле ар бир тилде README файлдарын кааласаңыз, толук версиясын орнотуңуз:

    npm install mobiletto
    yarn add mobiletto

 ## Тез баштоо
 mobiletto `s3` драйверин колдонуунун кыскача мисалы.

 Бул код драйвер `b2` же `local` болсо, ошол эле иштейт.

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
 ## Негизги колдонуу
 Сунушталган өзгөчөлүктөрдүн көбүн көрсөткөн бир кыйла кеңири мисал:

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

 ## Метадайындар
 `metadata` буйругу бир файл тутумунун жазуусу жөнүндө метаберилиштерди кайтарат.
 Ошо сыяктуу эле, `list` буйругунан кайтарылган маани метаберилиш объекттеринин массивдери болуп саналат.

 Метадайындар объектиси төмөнкүдөй көрүнөт:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` " касиети `file` " , `dir` , `link` " же `special` .

 Драйвердин түрүнө жараша, `list` буйругу бардык талааларды кайтара бербейт. `name` жана `type` касиеттери
 дайыма болушу керек. Кийинки `metadata` буйругу бардык жеткиликтүү касиеттерди кайтарат.

 ## Альтернативдик импорт стили
 Толук масштабдуу модулду импорттоо жана `connect` функциясын колдонуңуз:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэштөө
 Mobiletto <a href="https://redis.io">redis</a> кэш менен жакшы иштейт.

 Mobiletto 127.0.0.1:6379 боюнча redis инстанциясына туташууга аракет кылат

 Сиз булардын бирин жокко чыгара аласыз:
 * Localhost ордуна бул жерге туташуу үчүн `MOBILETTO_REDIS_HOST` var, mobilet коюңуз
 * `MOBILETTO_REDIS_PORT` var орнотуңуз, бул порт колдонулат

 Mobiletto өзүнүн бардык redis ачкычтарын `_mobiletto__` префикси менен сактайт. Муну өзгөртө аласыз
 `MOBILETTO_REDIS_PREFIX` var орнотуу менен.

 Ошондой эле `opts.redisConfig` объекти менен ар бир туташуу кэштерин орното аласыз:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Редис кэштештирүүнү каалабайсызбы?
 Өчүрүү үчүн: туташууну орнотуп жатканда `opts.redisConfig` `enabled: false` ' дегенди өткөрүңүз.

 Төмөндө талкуулангандай, кэшти өчүрүү аткарууга терс таасирин тийгизип, көбүрөөк суроо-талаптарды жаратат
 сизге чындап керек болгон сактоого.

 ### Кэштөө боюнча көрсөтмө
 **Шифрленген сактагыч**: шифрленген сактагычты окуу/жазуу кадимкиден бир аз жайыраак,
 бирок каталогдордо чабыттоо (айрым нерселерде) кыйла кымбатка турат. Redis кэшин колдонуу
 сага олуттуу аткарууну берет.

 Демейки кэш коопсуз, бирок сизде жазуу/алып салуу операциялары көп болсо, жакшы иштебейт.
 Ар кандай жазуу же алып салуу операциясы толугу менен кэшти жараксыз кылып, кийинки окуулар көрүүнү камсыздайт
 акыркы өзгөрүүлөр.

 ### CLI куралдары
 Эгер сиз [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) сыяктуу CLI куралын колдонуп жатсаңыз,
 Сиз сөзсүз түрдө redis кэшинин иштетилишин каалайсыз, анткени ал `mo` буйругунун чакырууларында созулат.

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` буйругу бардык файлдардын бир мобилдик телефондон экинчисине бир жолку көчүрмөсүн аткарат.
 Ал күзгүнү убакыттын өтүшү менен сактоо үчүн эч кандай процессти иштетпейт. `mirror` буйругун кайра иштетиңиз
 жок файлдарды синхрондоштуруу үчүн.

 `mirror` " кайтарылган маани - бул канча файл ийгиликтүү болгонун эсептегичтери бар жөнөкөй объект
 чагылдырылган жана канча файлда каталар бар:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ЭСКЕРТҮҮ: Чоң маалымат топтомдорун чагылдыруу өтө көп убакытты жана өткөрүү жөндөмдүүлүгүн талап кылышы мүмкүн

 `mirror` чалуу семантикасы менен кээде ким экенин түшүнүү чаташып калышы мүмкүн
 окурман жана жазуучу ким. Аны тапшырма билдирүүсү сыяктуу элестетиңиз: "сол кол мобилдик"
 дайындалган нерсе (жазылган күзгү маалыматтар) жана "оң кол мобилдик" (
 `mirror` ыкмасына аргумент) ыйгарылган маани болуп саналат (күзгүртүлгөн маалыматтар окулат).

 ## Ачык шифрлөө
 Ачык кардар тарабынан шифрлөөнү иштетүү:

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

 Эмне болуп жатат? Өзүнчө "каталог жазуусу" (түз) каталогу (шифрленген) анда кандай файлдар бар экенин көзөмөлдөйт
 каталог (ака дирент каталогу).
 * `list` буйругу каталогдун файлдарын окуйт, тизмеленген ар бир жолдун шифрин чечет; андан кийин ар бир файл үчүн метадайындарды кайтарат
 * `list` буйруктары өзгөчө файлдардын саны көп каталогдор үчүн натыйжасызыраак
 * `write` командасы dirent файлдарды ар бир ата-эненин дирент каталогуна рекурсивдүү түрдө жазат; анан файлды жазат
 * `write` буйруктары каталогдун иерархиясында N = тереңдик менен O(N) жазууну талап кылат
 * `remove` буйругу тиешелүү dirent файлды, ал эми бош болсо анын ата-энесин рекурсивдүү түрдө жок кылат; андан кийин файлды жок кылат
 * Рекурсивдүү эмес `remove` буйруктары O(N) окулушун жана мүмкүн болушунча көп өчүрүүнү талап кылат, N = каталог иерархиясынын тереңдиги менен
 * Чоң жана терең файл тутумдарындагы рекурсивдүү `remove` буйруктары кымбат болушу мүмкүн

 Кардар тарабында шифрлөө иштетилген болсо да, душман сиздин шифрленген сервер тарабыңызда толук көрүнөрүн эске алыңыз
 сактагыч, ачкычы жок болсо дагы, каталогдордун жалпы санын жана ар биринде канча файл бар экенин көрө алат
 кээ бир аракет, каталог иерархиясынын жалпы структурасынын айрымдарын же бардыгын табыңыз.
 *Эскертүү: Жакшыраак коопсуздук үчүн салыштырмалуу жалпак түзүлүштү колдонуңуз.*
 Душман сиздин шифрлөөңүздү билбесе, каталогдордун/файлдардын атын билмек эмес
 ачкыч же башка жол менен шифрлөө ийгиликтүү бузулган. Бардык коюмдар өчүрүлгөн!

 ### Аткаруу жана кэш
 Шифрленген сактагычтагы операциялар жай болушу мүмкүн. Рекурсивдүү тизмелер жана алып салуулар өтө жай болушу мүмкүн.
 Redis аркылуу кэштөө абдан жардам берет, бирок кэш ар кандай жазууларда же өчүрүүлөрдө тазаланып турганын эске алыңыз.

 ## Ачкычтын айлануусу
 Жаңы ачкычыңыз менен mobiletto түзүңүз, андан кийин ага эски маалыматтарды чагылдырыңыз:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Айдоочу интерфейси
 Драйвер бул кол тамга менен 'storageClient' функциясын экспорттоочу каалаган JS файлы:

    function storageClient (key, secret, opts)

 * `key` : сап, сиздин API ачкычыңыз ( `local` драйвер үчүн бул базалык каталог)
 * `secret` : сап, сиздин API `local` драйвер үчүн калтырылышы мүмкүн)
 * `opts` : объект, касиеттери ар бир драйверге таандык:
 * `local` үчүн `fileMode` жана `dirMode` касиеттери жаңы файлдарды жана каталогдорду түзүүнү аныктайт
 * `s3` үчүн, `bucket` касиети талап кылынат. Кошумча касиеттери болуп төмөнкүлөр саналат:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient функциясы кайтарган объект бул функцияларды аныкташы керек:

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

 ## Каттоо
 Mobiletto [winston](https://www.npmjs.com/package/winston) журналдарды каттоо китепканасын колдонот.

 Журналдар **файл жолдорун жана ката билдирүүлөрүн камтыйт, бирок **эч качан** ачкычтарды, сырларды,
 же башка туташуу конфигурациясынын маалыматы.

 ### Журнал деңгээли
 Журнал деңгээлин коюу үчүн `MOBILETTO_LOG_LEVEL` чөйрө өзгөрмөсүн колдонуңуз.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) дарегинде аныкталган `npm` деңгээлдеринин

 Демейки деңгээл `error` болуп саналат. Эң айкын деңгээл - бул `silly` , бирок азыркы учурда mobiletto
 `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Журнал файлы
 Демейки боюнча, логгер консолго жазат. Журналдарды файлга жөнөтүү үчүн `MOBILETTO_LOG_FILE`
 курчап турган чөйрөнү өзгөрмө. Файлга киргенде журналдар мындан ары консолго жазылбайт.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Кирүүнү өчүрүү үчүн:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
