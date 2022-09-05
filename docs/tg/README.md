Mobiletto
 =========

 Mobiletto як қабати абстраксияи нигаҳдории JavaScript мебошад, ки бо рамзгузории ихтиёрии шаффофи муштарӣ.

 # Мундариҷа
 * [Чаро Mobiletto?](#Why-Mobiletto?)
 * [Оғози зуд](#Оғози зуд)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Манбаъ](#Манбаъ)
 * [Насб](#Насб)
 * [Дастгирӣ ва маблағгузорӣ](#Дастгирӣ ва маблағгузорӣ)
 * [Истифодаи асосӣ](#Истифодаи асосӣ)
 * [Метамаълумот](#Метамаълумот)
 * [Услуби воридоти алтернативӣ](#Alternate-import-style)
 * [Кэшкунӣ](#Кэшкунӣ)
 * [Оинакунӣ](#Оинакунӣ)
 * [Рамзгузории шаффоф](#Шаффоф-рамзгузорӣ)
 * [Ратсияи калид](#Калиди гардиш)
 * [Интерфейси ронанда](#Драйвер-интерфейс)
 * [Рӯйхатгирӣ](#Ҷорҷӯӣ)

 # Инро ба забони дигар хонед
 Ин ҳуҷҷати README.md тавассути [hokeylization](https://github.com/cobbzilla/hokeylization) ба забони тарҷума шудааст
 **[ҳар забоне, ки аз ҷониби Google Translate дастгирӣ мешавад](https://cloud.google.com/translate/docs/languages)!**

 Ман итминон дорам, ки ин комил нест, аммо ман умедворам, ки он аз ҳеҷ чиз беҳтар аст!

 [🇸🇦 Арабӣ](../ar/README.md)
 [🇧🇩 Бенгалӣ](../bn/README.md)
 [🇩🇪 Олмон](../de/README.md)
 [🇺🇸 англисӣ](../en/README.md)
 [🇪🇸 испанӣ](../es/README.md)
 [🇫🇷 Фаронса](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Ҳиндӣ](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Италия](../it/README.md)
 [🇯🇵 Ҷопон](../ja/README.md)
 [🇰🇷 Кореяи](../ko/README.md)
 [🇮🇳 Марантӣ](../mr/README.md)
 [🇵🇱 Лаҳистон](../pl/README.md)
 [🇧🇷 португалӣ](../pt/README.md)
 [🇷🇺 русӣ](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагалогӣ](../tl/README.md)
 [🇹🇷 Туркӣ](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 Ветнамӣ](../vi/README.md)
 [🇨🇳 Чин](../zh/README.md)


 **[📚 ... Ҳама забонҳо ...](../README.md)**
 ----

 ### Оё бо ин тарҷумаи README мушкилот вуҷуд дорад?
 Ин тарҷумаи махсуси аслии [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 метавонад хато бошад -- *ислоҳот хеле хуш омадед!* Лутфан [дархости кашидан дар GitHub](https://github.com/cobbzilla/mobiletto/pulls) фиристед.
 ё агар шумо ин корро бароҳат надоред, [як масъаларо кушоед](https://github.com/cobbzilla/mobiletto/issues)

 Вақте ки шумо дар бораи тарҷума масъалаи нави GitHub эҷод мекунед, лутфан амал кунед:
 * URL-и саҳифаро дохил кунед (аз сатри суроғаҳои браузер нусхабардорӣ/часбонед)
 * матни дақиқи нодурустро дохил кунед (аз браузер нусхабардорӣ/часбонед)
 * лутфан шарҳ диҳед, ки чӣ хато аст -- тарҷума нодуруст аст? оё форматкунӣ ягон хел вайрон шудааст?
 * лутфан пешниҳод кунед, ки тарҷумаи беҳтар ё чӣ гуна матн бояд дуруст формат карда шавад
 * **Сипос!**

 ## Чаро Mobiletto?

 ### Хайр, фурӯшанда баста!
 Провайдерҳои гуногуни нигаҳдории абр API-ҳои номувофиқ доранд. Ҳатто онҳое, ки барои "мутобиқати S3" мекӯшанд
 рафтору кирдори хоса доранд.

 Вақте ки шумо як фурӯшандаи махсуси нигаҳдории барномаро интихоб мекунед, агар шумо бевосита ба API-и онҳо рамзгузорӣ кунед, барномаи шумо
 ҳоло ба он хидмат вобаста аст. Вақте ки вақт мегузарад ва код ҷамъ мешавад, фурӯшандагон иваз мешаванд
 беш аз пеш нотавон аст. Хуш омадед ба ҷаҳони фароғатии бастабандии фурӯшанда!

 Mobiletto барои ҳалли ин мушкилот тарҳрезӣ шудааст. Бо рамзгузории барномаи худ ба API-и mobiletto, шумо метавонед ба осонӣ
 провайдерҳои анборро иваз кунед ва бидонед, ки қабати нигаҳдории барномаи шумо якхела рафтор хоҳад кард.

 ### Санҷиши васеъ
 Ҳама ронандагон барои рафтори якхела бо 60+ санҷиш барои ҳар як ронанда санҷида мешаванд.
 Мо ҳамаи ронандагонро бо ҳар як комбинатсияи:
 * Рамзгузорӣ: ҳам фаъол ва ҳам ғайрифаъол
 * Кэши Redis: ҳам фаъол ва ҳам ғайрифаъол

 Ин равиш ба мо оромиро медиҳад, ки mobiletto новобаста аз он ки шумо кадом ронандаро истифода мебаред, ҳамон рафтор хоҳад кард.
 ва новобаста аз он ки шумо кэш ва/ё рамзгузориро фаъол мекунед.

 ### Дастгирии ронанда
 Драйверҳои ҷории нигаҳдории Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Барқарор B2
 * `local` : системаи файлии маҳаллӣ

 *Ҳиссагузориҳо барои дастгирии провайдерҳои нигаҳдории абрӣ хеле хуш омадед!*

 ## mobiletto-cli
 Mobiletto пешбинӣ шудааст, ки ҳамчун китобхона бо дигар кодҳои JavaScript истифода шавад.

 Барои кор бо mobiletto дар сатри фармон, истифода баред [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Сарчашма
 * [mobiletto дар GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto дар npm](https://www.npmjs.com/package/mobiletto)

 ## Дастгирӣ ва маблағгузорӣ
 Ман кӯшиш мекунам, ки як таҳиягари нармафзори кушодаасос бошам. Ман кор мекардам
 саноати нармафзор дар тӯли солҳои зиёд, ман ширкатҳои муваффақро оғоз кардам ва онҳоро ба ширкатҳои давлатӣ фурӯхтам.
 Ба наздикӣ ман корамро аз даст додам ва аслан кори дигаре надорам

 Аз ин рӯ, ман кӯшиш мекунам, ки нармафзори муфид нависам ва бубинам, ки оё ин кор мекунад

 Агар шумо аз истифодаи ин нармафзор лаззат мебаред, ман барои ҳатто хеле миннатдор хоҳам буд
 хурдтарин [саҳми ҳармоҳа тавассути Patreon](https://www.patreon.com/cobbzilla)

 *Сипос!*

 ## Насбкунӣ
 Бо истифода аз `npm` " ё `yarn` . Эҳтимол шумо мехоҳед версияи `lite` , ки ҳама чизро дар бар намегирад
 файлҳои README тарҷумашуда:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Агар шумо дар ҳақиқат хоҳед, ки файлҳои README бо ҳар забон, версияи пурраи онро насб кунед:

    npm install mobiletto
    yarn add mobiletto

 ## Оғози зуд
 Намунаи кӯтоҳ бо истифода аз драйвери mobiletto `s3` .

 Агар драйвер `b2` ё `local` бошад, ин рамз ҳамон кор хоҳад кард.

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
 ## Истифодаи асосӣ
 Мисоли хеле васеътар, ки аксари хусусиятҳои пешниҳодшударо нишон медиҳад:

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

 ## Метамаълумот
 Фармони `metadata` метамаълумотро дар бораи як вуруди системаи файлӣ бармегардонад.
 Ба ҳамин монанд, арзиши баргардонидани фармони `list` массиви объектҳои метамаълумот аст.

 Объекти метамаълумот чунин менамояд:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Амволи `type` метавонад `file` ", `dir` ", `link` ё `special` .

 Вобаста аз намуди драйвер, фармони `list` метавонад на ҳама майдонҳоро баргардонад. Хусусиятҳои `name` ва `type`
 бояд ҳамеша ҳузур дошта бошад. Фармони минбаъдаи `metadata` ҳамаи хосиятҳои дастрасро бармегардонад.

 ## Услуби алтернативии воридот
 Модули мукаммалро ворид кунед ва функсияи `connect` истифода баред:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Кэш
 Mobiletto бо кэши <a href="https://redis.io">redis</a> беҳтарин кор мекунад.

 Mobiletto кӯшиш мекунад, ки ба як нусхаи redis дар 127.0.0.1:6379 пайваст шавад

 Шумо метавонед яке аз инҳоро бекор кунед:
 * Env var `MOBILETTO_REDIS_HOST` -ро насб кунед, барои пайваст шудан ба ин ҷо ба ҷои localhost
 * Env var `MOBILETTO_REDIS_PORT` -ро танзим кунед, ин порт истифода мешавад

 Mobiletto ҳамаи калидҳои redis-и худро бо префикси `_mobiletto__` . Шумо метавонед инро тағир диҳед
 бо гузоштани `MOBILETTO_REDIS_PREFIX` env var.

 Шумо инчунин метавонед кэшкунии ҳар як пайвастшавиро бо объекти `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Оё кэшкунии дубораро намехоҳед?
 Барои хомӯш кардан: ҳангоми барқарор кардани пайвастшавӣ дар объекти `opts.redisConfig` -и худ 'enabled `enabled: false` ' -ро гузаронед.

 Тавре ки дар зер баррасӣ шуд, ғайрифаъол кардани кэш ба кор таъсири манфӣ мерасонад ва дархостҳои бештарро ба бор меорад
 ба нигоҳдорӣ, ки ба шумо воқеан лозим аст.

 ### Роҳнамои кэш
 **Захираи рамзгузоришуда**: хондан/навиштани нигаҳдории рамзгузоришуда аз муқаррарӣ каме сусттар аст,
 аммо паймоиш дар атрофи директорияҳо (ки баъзе чизҳо мекунанд) хеле гарон аст. Истифодаи кэши redis
 ба шумо афзоиши назарраси иҷроиш медиҳад.

 Кэши пешфарз бехатар аст, аммо агар шумо амалиёти зиёди навиштан/нест кардан дошта бошед, хуб кор намекунад.
 Ҳама гуна амалиёти навиштан ё хориҷ кардан тамоми кэшро беэътибор мегардонад ва мутмаин аст, ки хонданҳои минбаъда
 тағйироти охирин.

 ### Воситаҳои CLI
 Агар шумо асбоби CLI-ро истифода баред, ба монанди [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 шумо бешубҳа хоҳед, ки кэши redis фаъол карда шавад, зеро он дар тамоми даъватҳои фармони `mo` давом мекунад.

 ## Зеркашӣ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Фармони `mirror` нусхаи якдафъаинаи ҳамаи файлҳоро аз як mobiletto ба дигараш иҷро мекунад.
 Он ягон равандро барои нигоҳ доштани оина бо мурури замон иҷро намекунад. Фармони `mirror` дубора иҷро кунед
 барои ҳамоҳангсозии ҳама файлҳои гумшуда.

 Қимати баргардонидани `mirror` як объекти оддӣ бо ҳисобкунакҳо барои бомуваффақият будани чанд файл мебошад
 оинашуда ва чанд файл хатогӣ дошт:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ОГОҲ: Зеркашӣ кардани маҷмӯаҳои бузурги додаҳо метавонад хеле вақт ва фарохмаҷро талаб кунад

 Бо семантикаи занги `mirror` баъзан фаҳмидани кист, метавонад печида бошад
 хонанда ва нависанда кист. Онро ҳамчун як изҳороти супориш тасаввур кунед: "mobiletto дасти чап"
 он чизест, ки ба он таъин карда мешавад (маълумоти оинашуда навишта шудааст) ва "mobiletto-дасти рост" (
 аргумент ба усули `mirror` ) арзиши таъиншуда аст (маълумоти оина хонда мешавад).

 ## Рамзгузории шаффоф
 Рамзгузории шаффофи муштариро фаъол созед:

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

 Чӣ мегузарад? Феҳристи алоҳидаи "дохили феҳрист" (дирентӣ) (рамзгузорӣ) пайгирӣ мекунад, ки дар он кадом файлҳо мавҷуданд
 директория (ака директорияи dirent).
 * Фармони `list` файлҳои вуруди феҳристҳоро мехонад, ҳар як роҳи рӯйхатшударо рамзкушо мекунад; баъд метамаълумотро барои ҳар як файл бармегардонад
 * Фармонҳои `list` , махсусан барои директорияҳои дорои шумораи зиёди файлҳо
 * Фармони `write` ҳар як волидайн ба таври рекурсивӣ менависад; баъд файлро менависад
 * Фармонҳои `write` O(N) -ро дар бар мегиранд, бо N = амиқ дар иерархияи директория
 * Фармони `remove` файли мувофиқро нест мекунад ва волидайни онро агар холӣ бошад, ба таври рекурсивӣ нест мекунад; баъд файлро нест мекунад
 * Фармонҳои `remove` O(N) ва эҳтимолан ҳамон қадар ҳазф мешаванд, бо N = амиқ дар иерархияи директория
 * Фармонҳои `remove` дар системаҳои файлии калон ва амиқ метавонанд гарон бошанд

 Дар хотир доред, ки ҳатто ҳангоми фаъол кардани рамзгузории муштарӣ, рақиб бо дидани пурраи сервери рамзгузоришудаи шумо
 нигоҳдорӣ, ҳатто бе калид, то ҳол метавонад шумораи умумии директорияҳо ва чанд файл дар ҳар як ва бо дидани
 баъзе кӯшишҳо, кашф баъзе ё ҳамаи сохтори умумии иерархияи директория.
 *Эзоҳ: Барои бехатарии беҳтар сохтори нисбатан ҳамворро истифода баред.*
 Рақиб номи директорияҳо/файлҳоро намедонад, агар онҳо рамзгузории шуморо низ надонанд
 калид ё ба таври дигар рамзкунониро бомуваффақият шикаста буд. Пас ҳама шартгузориҳо хомӯш мешаванд!

 ### Иҷро ва кэш
 Амалиёт дар нигаҳдории рамзгузорӣ метавонад суст бошад. Рӯйхатҳои рекурсивӣ ва хориҷкунӣ метавонанд хеле суст бошанд.
 Кэшкунӣ тавассути redis хеле кӯмак мекунад, аммо қайд кунед, ки кэш ҳангоми навиштан ё нест кардан тоза карда мешавад.

 ## Гардиши калид
 Бо калиди нави худ як mobiletto эҷод кунед ва маълумоти кӯҳнаро дар он инъикос кунед:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Интерфейси ронанда
 Драйвер ҳама гуна файли JS мебошад, ки функсияи 'storageClient'-ро бо ин имзо содир мекунад:

    function storageClient (key, secret, opts)

 * `key` : сатр, калиди API-и шумо (барои драйвери `local` ин феҳристи асосӣ аст)
 * `secret` : сатр, сирри API-и шумо (метавонад барои драйвери `local` сарфи назар карда шавад)
 * `opts` : объект, хосиятҳо барои як драйвер мебошанд:
 * Барои `local` " хосиятҳои `fileMode` " ва `dirMode` муайян мекунанд, ки чӣ гуна файлҳо ва директорияҳои нав эҷод карда мешаванд
 * Барои `s3` , хосияти `bucket` лозим аст. Хусусиятҳои ихтиёрӣ инҳоянд:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Объекте, ки функсияи storageClient бармегардонад, бояд ин вазифаҳоро муайян кунад:

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

 ## Сабзавот
 Mobiletto китобхонаи сабти [winston](https://www.npmjs.com/package/winston) -ро истифода мебарад.

 Гузоришҳо ** дорои роҳҳои файл ва паёмҳои хатогӣ мебошанд, аммо ** ҳеҷ гоҳ ** калидҳо, асрорҳо,
 ё ягон маълумоти дигари конфигуратсияи пайвастшавӣ.

 ### Сатҳи сабт
 Барои танзим кардани сатҳи гузориш бо истифода аз як тағирёбандаи муҳити `MOBILETTO_LOG_LEVEL` -ро истифода баред
 сатҳҳои `npm` дар [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) муайян карда шудаанд.

 Сатҳи пешфарз `error` аст. Сатҳи аз ҳама муфассалтар `silly` аст, гарчанде ки дар айни замон mobiletto
 дар сатҳҳои поёнии `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Файли сабт
 Бо нобаёнӣ, сабткунанда ба консол менависад. Барои фиристодани гузоришҳо ба файл, `MOBILETTO_LOG_FILE` -ро танзим кунед
 тағйирёбандаи муҳити зист. Ҳангоми ворид шудан ба файл, гузоришҳо дигар ба консол навишта намешаванд.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Барои хомӯш кардани сабт:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
