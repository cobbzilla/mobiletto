Mobiletto
 =========

 Mobiletto-ն JavaScript-ի պահեստավորման աբստրակցիոն շերտ է՝ հաճախորդի կողմից ընտրովի թափանցիկ գաղտնագրմամբ:

 # Բովանդակություն
 * [Ինչու Mobiletto?](#Ինչու-Mobiletto?)
 * [Արագ մեկնարկ](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Աղբյուր](#Աղբյուր)
 * [Տեղադրում](# Տեղադրում)
 * [Աջակցություն և ֆինանսավորում](#Support-and-Funding)
 * [Հիմնական օգտագործում](#Հիմնական-օգտագործում)
 * [Մետտվյալներ](#Մետտվյալներ)
 * [Այլընտրանքային ներմուծման ոճ](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Թափանցիկ կոդավորում](#Transparent-encryption)
 * [Բանալինների ռոտացիա](#Բանալին-պտտում)
 * [Driver ինտերֆեյս](#Driver-interface)
 * [Գրանցում](#Գրանցում)

 # Կարդացեք սա այլ լեզվով
 Այս README.md փաստաթուղթը թարգմանվել է [hokeylization](https://github.com/cobbzilla/hokeylization) միջոցով
 **[Google Translate-ի կողմից աջակցվող յուրաքանչյուր լեզու](https://cloud.google.com/translate/docs/languages)!**

 Ես վստահ եմ, որ դա կատարյալ չէ, բայց հուսով եմ, որ ավելի լավ է, քան ոչինչ:

 [🇸🇦 արաբերեն](../ar/README.md)
 [🇧🇩 բենգալերեն](../bn/README.md)
 [🇩🇪 գերմաներեն](../de/README.md)
 [🇺🇸 Անգլերեն](../en/README.md)
 [🇪🇸 իսպաներեն](../es/README.md)
 [🇫🇷 ֆրանսերեն](../fr/README.md)
 [🇹🇩 Հաուսա](../ha/README.md)
 [🇮🇳 հինդի](../hi/README.md)
 [🇮🇩 ինդոնեզերեն](../id/README.md)
 [🇮🇹 Իտալերեն](../it/README.md)
 [🇯🇵 ճապոներեն](../ja/README.md)
 [🇰🇷 կորեերեն](../ko/README.md)
 [🇮🇳 Մարանտի](../mr/README.md)
 [🇵🇱 լեհերեն](../pl/README.md)
 [🇧🇷 պորտուգալերեն](../pt/README.md)
 [🇷🇺 ռուսերեն](../ru/README.md)
 [🇰🇪 Սուահիլի](../sw/README.md)
 [🇵🇭 Տագալերեն](../tl/README.md)
 [🇹🇷 թուրքերեն](../tr/README.md)
 [🇵🇰 ուրդու](../ur/README.md)
 [🇻🇳 Վիետնամերեն](../vi/README.md)
 [🇨🇳 չինարեն](../zh/README.md)


 **[📚 ... Բոլոր լեզուները ...](../README.md)**
 ----

 ### Խնդիր կա՞ README-ի այս թարգմանության հետ:
 Բնօրինակի այս հատուկ թարգմանությունը [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 կարող է թերի լինել.
 կամ եթե դա ձեզ հարմար չէ, [բացեք խնդիրը](https://github.com/cobbzilla/mobiletto/issues)

 Երբ թարգմանության վերաբերյալ GitHub-ի նոր խնդիր եք ստեղծում, խնդրում ենք անել.
 * ներառել էջի URL-ը (պատճենել/տեղադրել դիտարկիչի հասցեի տողից)
 * ներառել ճշգրիտ տեքստը, որը սխալ է (պատճենել/տեղադրել զննարկիչից)
 * խնդրում եմ նկարագրեք, թե ինչն է սխալ. թարգմանությունը ճիշտ չէ՞: ֆորմատավորումը ինչ-որ կերպ կոտրված է?
 * Խնդրում ենք առաջարկել ավելի լավ թարգմանություն կամ ինչպես պետք է տեքստը ճիշտ ձևաչափվի
 * **Շնորհակալություն!**

 ## Ինչու Mobiletto?

 ### Ցտեսություն վաճառողի արգելափակում:
 Ամպային պահեստավորման տարբեր մատակարարներ ունեն անհամատեղելի API-ներ: Նույնիսկ նրանք, ովքեր ձգտում են «S3 համատեղելիության»
 ունեն յուրօրինակ վարքագիծ.

 Երբ դուք ընտրում եք որոշակի պահեստային վաճառող ձեր հավելվածի համար, եթե կոդավորում եք անմիջապես նրանց API-ին՝ ձեր հավելվածին
 այժմ կախված է այդ ծառայությունից։ Քանի որ ժամանակն անցնում է, և ծածկագիրը կուտակվում է, փոխվում են վաճառողները
 գնալով ավելի անհիմն. Բարի գալուստ վաճառողների կողպման զվարճալի աշխարհ:

 Mobiletto-ն ստեղծվել է այս խնդիրը լուծելու համար: Կոդավորելով ձեր հավելվածը mobiletto-ի API-ին, դուք հեշտությամբ կարող եք
 փոխեք պահեստավորման մատակարարներին և իմացեք, որ ձեր հավելվածի պահեստային շերտը կգործի նույն կերպ:

 ### Ընդարձակ թեստավորում
 Բոլոր վարորդները փորձարկվում են նույնական վարքագծի համար՝ յուրաքանչյուր վարորդի համար 60+ թեստով:
 Մենք փորձարկում ենք բոլոր վարորդներին՝ յուրաքանչյուր համակցությամբ.
 * Գաղտնագրում. և՛ միացված, և՛ անջատված
 * Redis cache. և՛ միացված, և՛ անջատված

 Այս մոտեցումը մեզ հանգիստ է տալիս, որ mobiletto-ն կվարվի նույն կերպ՝ անկախ նրանից, թե որ վարորդից եք դուք օգտագործում,
 և անկախ նրանից՝ միացնու՞մ եք քեշավորումը և/կամ կոդավորումը:

 ### Վարորդի աջակցություն
 Ընթացիկ Mobiletto պահեստավորման դրայվերներ.
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` տեղական»՝ տեղական ֆայլային համակարգ

 *Ավելի շատ ամպային պահեստավորման մատակարարներին աջակցելու ներդրումները շատ ողջունելի են:*

 ## mobiletto-cli
 Mobiletto-ն նախատեսված է որպես գրադարան օգտագործելու այլ JavaScript կոդով:

 Mobiletto-ի հետ հրամանի տողում աշխատելու համար օգտագործեք [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Աղբյուր
 * [mobiletto GitHub-ում](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Աջակցություն և ֆինանսավորում
 Ես փորձում եմ լինել պրոֆեսիոնալ բաց կոդով ծրագրակազմ մշակող: Ես աշխատել եմ
 ծրագրային ապահովման ոլորտում երկար տարիներ ես ստեղծել եմ հաջողակ ընկերություններ և վաճառել դրանք հանրային ընկերություններին:
 Վերջերս ես կորցրել էի աշխատանքս, և իրականում այլ աշխատանք չունեմ

 Այսպիսով, ես կփորձեմ գրել օգտակար ծրագրակազմ և տեսնել, թե արդյոք դա աշխատում է

 Եթե ձեզ դուր է գալիս այս ծրագրաշարն օգտագործելը, ես շատ շնորհակալ կլինեմ նույնիսկ դրա համար
 ամենափոքր [ամսական ներդրում Patreon-ի միջոցով](https://www.patreon.com/cobbzilla)

 *Շնորհակալություն!*

 ## Տեղադրում
 Տեղադրեք՝ օգտագործելով `npm` կամ `yarn` : Դուք հավանաբար ցանկանում եք `lite` » տարբերակը, որը չի ներառում բոլորը
 թարգմանված README ֆայլեր.

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Եթե դուք իսկապես ցանկանում եք README ֆայլերը յուրաքանչյուր լեզվով, տեղադրեք ամբողջական տարբերակը.

    npm install mobiletto
    yarn add mobiletto

 ## Արագ մեկնարկ
 Կարճ օրինակ՝ օգտագործելով mobiletto `s3` դրայվերը:

 Այս ծածկագիրը նույն կերպ կաշխատի, եթե վարորդը `b2` կամ `local` :

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
 ## Հիմնական օգտագործումը
 Շատ ավելի ընդարձակ օրինակ, որը ցույց է տալիս առաջարկվող հատկանիշների մեծ մասը.

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

 ## Մետատվյալներ
 `metadata` հրամանը վերադարձնում է մետատվյալներ մեկ ֆայլային համակարգի մուտքի վերաբերյալ:
 Նմանապես, `list` հրամանից վերադարձվող արժեքը մետատվյալների օբյեկտների զանգված է:

 Մետատվյալների օբյեկտն ունի հետևյալ տեսքը.

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` հատկությունը կարող է լինել `file` , `dir` , `link` » կամ `special` :

 Կախված վարորդի տեսակից, `list` հրամանը կարող է չվերադարձնել բոլոր դաշտերը: `name` name» և `type` հատկությունները
 միշտ պետք է ներկա լինի: `metadata` » հաջորդ հրամանը կվերադարձնի բոլոր հասանելի հատկությունները:

 ## Այլընտրանքային ներմուծման ոճ
 Ներմուծեք ամբողջ ծավալով մոդուլը և օգտագործեք `connect` գործառույթը.

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Քեշավորում
 Mobiletto-ն լավագույնս աշխատում է <a href="https://redis.io">redis</a> cache-ով:

 Mobiletto-ն կփորձի միանալ redis օրինակին 127.0.0.1:6379

 Դուք կարող եք վերացնել հետևյալներից որևէ մեկը.
 * Սահմանեք `MOBILETTO_REDIS_HOST` env var, mobile-ը, որպեսզի միանաք այստեղ՝ localhost-ի փոխարեն
 * Սահմանեք `MOBILETTO_REDIS_PORT` env var, այս պորտը կօգտագործվի

 Mobiletto-ն կպահի իր բոլոր redis ստեղները `_mobiletto__` » նախածանցով: Դուք կարող եք փոխել սա
 սահմանելով `MOBILETTO_REDIS_PREFIX` env var.

 Դուք կարող եք նաև սահմանել յուրաքանչյուր կապի քեշավորում `opts.redisConfig` օբյեկտի միջոցով.

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Չե՞ք ուզում redis caching:
 Անջատելու համար անցեք « `enabled: false` : false» ձեր `opts.redisConfig` օբյեկտում, երբ հաստատում եք ձեր կապը:

 Ինչպես քննարկվում է ստորև, քեշավորման անջատումն անբարենպաստ ազդեցություն կունենա կատարողականի վրա և կառաջացնի ավելի շատ հարցումներ
 պահեստ, որն իսկապես անհրաժեշտ է:

 ### Քեշավորման ուղեցույց
 **Կոդավորված պահեստավորում**. գաղտնագրված պահեստը կարդալը/գրելը սովորականից մի փոքր ավելի դանդաղ է,
 բայց գրացուցակներում նավարկելը (ինչը որոշ բաներ անում են) բավականին թանկ է: Օգտագործելով redis քեշ
 ձեզ կտա կատարողականության զգալի խթան:

 Լռելյայն քեշը անվտանգ է, բայց լավ չի աշխատում, եթե դուք ունեք բազմաթիվ գրելու/հեռացնելու գործողություններ:
 Գրելու կամ հեռացնելու ցանկացած գործողություն անվավեր է դարձնում ամբողջ քեշը, ապահովելով, որ հետագա ընթերցումները կտեսնեն այն
 վերջին փոփոխությունները.

 ### CLI գործիքներ
 Եթե դուք օգտագործում եք CLI գործիք, ինչպիսին է [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 դուք անպայման կցանկանաք, որ redis `mo` հրամանի կանչերի ընթացքում:

 ## Հայելի

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` հրամանը կատարում է բոլոր ֆայլերի մեկանգամյա պատճենումը մի բջջայինից մյուսը:
 Ժամանակի ընթացքում հայելին պահպանելու համար որևէ գործընթաց չի իրականացվում: Կրկին գործարկեք `mirror` հրամանը
 բոլոր բացակայող ֆայլերը համաժամեցնելու համար:

 `mirror` վերադարձվող արժեքը պարզ օբյեկտ է, որտեղ հաշվիչներ են, թե քանի ֆայլ է հաջողվել
 արտացոլված և քանի ֆայլ ունեին սխալներ.

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ԶԳՈՒՇԱՑՈՒՄ. Տվյալների մեծ հավաքածուների արտացոլումը կարող է շատ ժամանակատար և թողունակության ինտենսիվ լինել

 `mirror` իմաստաբանությամբ երբեմն կարող է շփոթեցնող լինել հասկանալը, թե ով է նա
 ընթերցողը և ով է գրողը: Պատկերացրեք դա հանձնարարականի պես՝ «ձախ ձեռքի բջջային սարքը»
 այն իրն է, որին հատկացվում է (գրված են հայելային տվյալները), և «աջ ձեռքի շարժականը» (
 `mirror` մեթոդի փաստարկը) վերագրվող արժեքն է (հայելային տվյալները կարդացվում են):

 ## Թափանցիկ կոդավորում
 Միացնել հաճախորդի կողմից թափանցիկ գաղտնագրումը.

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

 Ինչ է կատարվում? Առանձին «տեղեկատու մուտք» (dirent) գրացուցակ (գաղտնագրված) հետևում է, թե ինչ ֆայլեր կան դրանում
 գրացուցակ (aka dirent directory):
 * `list` հրամանը կարդում է գրացուցակի մուտքագրման ֆայլերը, վերծանում նշված յուրաքանչյուր ուղի; այնուհետև վերադարձնում է մետատվյալներ յուրաքանչյուր ֆայլի համար
 * `list` հրամաններն ավելի անարդյունավետ են, հատկապես մեծ թվով ֆայլեր ունեցող դիրեկտորիաների համար
 * `write` » հրամանը գրում է dirent ֆայլեր յուրաքանչյուր ծնողի dirent գրացուցակում, ռեկուրսիվ կերպով; ապա գրում է ֆայլը
 * `write` հրամանները կառաջացնեն O(N) գրություններ՝ N = խորությունը գրացուցակի հիերարխիայում
 * `remove` հրամանը հեռացնում է համապատասխան dirent ֆայլը, իսկ դրա մայրը, եթե դատարկ է, ռեկուրսիվ կերպով; ապա հեռացնում է ֆայլը
 * Ոչ ռեկուրսիվ `remove` հրամանները կունենան O(N) ընթերցումներ և հնարավոր է նույնքան ջնջումներ՝ N = խորությունը գրացուցակի հիերարխիայում:
 * Մեծ և խորը ֆայլային համակարգերի ռեկուրսիվ `remove` հրամանները կարող են թանկ լինել

 Նկատի ունեցեք, որ նույնիսկ հաճախորդի կողմից գաղտնագրումը միացված լինելու դեպքում հակառակորդը լիովին տեսանելի է ձեր գաղտնագրված սերվերի կողմից
 պահեստավորումը, նույնիսկ առանց բանալիի, դեռ կարող է տեսնել դիրեկտորիաների ընդհանուր թիվը և քանի ֆայլ կա յուրաքանչյուրում և դրանցով
 որոշ ջանքեր, հայտնաբերեք գրացուցակի հիերարխիայի ընդհանուր կառուցվածքի մի մասը կամ ամբողջը:
 *Նշում. Ավելի լավ անվտանգության համար օգտագործեք համեմատաբար հարթ կառուցվածք:*
 Հակառակորդը չի իմանա դիրեկտորիաների/ֆայլերի անունները, եթե նրանք նաև իմանան ձեր գաղտնագրումը
 բանալին կամ այլ կերպ հաջողությամբ կոտրել է կոդավորումը: Այդ դեպքում բոլոր խաղադրույքներն անջատված են:

 ### Կատարում և քեշավորում
 Գաղտնագրված պահեստում գործողությունները կարող են դանդաղ լինել: Ռեկուրսիվ ցուցակները և հեռացումները կարող են շատ դանդաղ լինել:
 Redis-ի միջոցով քեշավորումն անչափ օգնում է, բայց նկատի ունեցեք, որ քեշը մաքրվում է ցանկացած գրառման կամ հեռացման դեպքում:

 ## Ստեղների ռոտացիա
 Ստեղծեք բջջային հեռախոս ձեր նոր բանալիով, այնուհետև դրա մեջ արտացոլեք հին տվյալները.

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Վարորդի ինտերֆեյս
 Վարորդը ցանկացած JS ֆայլ է, որն արտահանում է «storageClient» ֆունկցիա այս ստորագրությամբ.

    function storageClient (key, secret, opts)

 * `key` »՝ տող, ձեր API ստեղնը ( `local` վարորդի համար սա բազային գրացուցակն է)
 * `secret` »՝ տող, ձեր API գաղտնիքը (կարելի է բաց թողնել `local` վարորդի համար)
 * `opts` . օբյեկտ, հատկությունները յուրաքանչյուր վարորդի համար են.
 * `local` » -ի համար `fileMode` և `dirMode` հատկությունները որոշում են, թե ինչպես են ստեղծվում նոր ֆայլեր և գրացուցակներ:
 * `s3` »-ի համար պահանջվում է `bucket` հատկությունը: Ընտրովի հատկություններն են.
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Օբյեկտը, որը վերադարձնում է storageClient ֆունկցիան, պետք է սահմանի այս գործառույթները.

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

 ## անտառահատումներ
 Mobiletto-ն օգտագործում է [winston](https://www.npmjs.com/package/winston) գրանցման գրադարանը:

 Գրանցամատյանները **** կպարունակեն ֆայլի ուղիներ և սխալի հաղորդագրություններ, բայց **երբեք** չեն պարունակի բանալիներ, գաղտնիքներ,
 կամ կապի կազմաձևման որևէ այլ տեղեկատվություն:

 ### Մատյան մակարդակ
 Օգտագործեք `MOBILETTO_LOG_LEVEL` միջավայրի փոփոխականը՝ գրանցամատյանի մակարդակը սահմանելու համար՝ օգտագործելով մեկը
 `npm` մակարդակներից, որոնք սահմանված են [https://www.npmjs.com/package/winston#logging-levels]-ում (https://www.npmjs.com/package/winston#logging-levels)

 Նախնական մակարդակը `error` է: Առավել խոսուն մակարդակը `silly` է, թեև ներկայումս շարժական է
 չի `debug` » ցածր մակարդակներում

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Մատյան ֆայլ
 Լռելյայնորեն, լոգերը գրում է վահանակին: Մատյանները ֆայլ ուղարկելու համար սահմանեք `MOBILETTO_LOG_FILE`
 շրջակա միջավայրի փոփոխական. Ֆայլ մուտք գործելիս տեղեկամատյաններն այլևս չեն գրվի վահանակի վրա:

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Գրանցումն անջատելու համար՝

    MOBILETTO_LOG_FILE=/dev/null

</pre>
