Mobiletto
 ==========

 I-Mobiletto ngumaleko wogcino weJavaScript, kunye noguqulelo oluyimfihlo lomthengi olusecaleni.

 # Imixholo
 * [Kutheni iMobiletto?](#Kutheni-iMobiletto?)
 * [Isiqalo esiKhawulezayo](#Ukuqala ngokukhawuleza)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Umthombo](#Umthombo)
 * [Ufakelo](#Fakelo)
 * [Inkxaso kunye neNkxaso](#Inkxaso-kunye-neNkxaso-mali)
 * [Usetyenziso olusisiseko](#Usetyenziso oluSiseko)
 * [Metadata](#Metadata)
 * [Esinye isimbo sokungenisa](#Esinye-isimbo sokungenisa)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Uguqulelo oluntsonkothileyo elubala](#Uguqulelo olungafihlwayo)
 * [Ukujikeleziswa kweSitshixo](#Ukujikeleziswa kweSitshixo)
 * [Ujongano lomqhubi](#Ujongano lomqhubi)
 * [Logging](#Logging)

 # Funda oku ngolunye ulwimi
 Olu xwebhu README.md luguqulelwe, kusetyenziswa [hokeylization](https://github.com/cobbzilla/hokeylization), kwi
 **[lonke ulwimi luxhaswa yiToliki kaGoogle](https://cloud.google.com/translate/docs/languages)!**

 Ndiqinisekile ukuba ayifezekanga, kodwa ndiyathemba ukuba ingcono kunanto!

 [🇸🇦 isiArabhu](amaxwebhu/ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJamani](../de/README.md)
 [🇺🇸 IsiNgesi](../en/README.md)
 [🇪🇸 ISpanish](amaxwebhu/es/README.md)
 [🇫🇷 isiFrentshi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 IsiTaliyane](amaxwebhu/it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 isiKorea](amaxwebhu/ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 IsiPhuthukezi](amaxwebhu/pt/README.md)
 [🇷🇺 IsiRashiya](../ru/README.md)
 [🇰🇪 IsiSwahili](amaxwebhu/sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 IsiTurkey](../tr/README.md)
 [🇵🇰 Urdu](amaxwebhu/ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiTshayina](../zh/README.md)


 **[📚 ... Zonke Iilwimi ...](amaxwebhu/README.md)**
 ----

 ### Ngaba kukho ingxaki ngoluguqulelo lwe-FUNDA?
 Le nguqulelo yoqobo [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 isenokuba neziphene -- *izilungiso zamkelekile kakhulu!* Nceda uthumele [isicelo sokutsalwa kwi-GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 okanye ukuba awukhululekanga ukwenza loo nto, [vula umcimbi](https://github.com/cobbzilla/mobiletto/issues)

 Xa usenza umba omtsha weGitHub malunga nenguqulelo, nceda wenze:
 * bandakanya i-URL yephepha (ikopi/uncamathisele kwibar yedilesi yomkhangeli zincwadi)
 * bandakanya isicatshulwa kanye esingalunganga (khuphela/uncamathisele kwisikhangeli)
 * Nceda uchaze ukuba yintoni engalunganga -- ingaba uguqulelo aluchanekanga? Ngaba ukufomatha kwaphukile ngandlela ithile?
 * ngobubele nikela icebiso lenguqulelo engcono, okanye indlela umbhalo ofanele ubhalwe ngokufanelekileyo
 * **Enkosi!**

 ## Kutheni iMobiletto?

 ### Sala kakuhle kumthengisi ukutshixa!
 Ababoneleli abahlukeneyo bokugcina ifu bane-APIs engahambelaniyo. Kwanabo balwela "ukuhambelana kwe-S3"
 babe neendlela zokuziphatha ezingaqhelekanga.

 Xa ukhetha umthengisi othile wokugcina usetyenziso lwakho, ukuba ukhowudi ngqo kwi-API yabo, usetyenziso lwakho
 ngoku ixhomekeke kuloo nkonzo. Njengoko ixesha lihamba kwaye ikhowudi iqokelela, ukutshintsha abathengisi kuba
 iya ingakwazi ukwenzeka. Wamkelekile kwihlabathi elimnandi lokutshixa kwabathengisi!

 I-Mobiletto yenzelwe ukusombulula le ngxaki. Ngokufaka ikhowudi iapp yakho kwimobiletto's API, ungalula
 tshintsha ababoneleli ngogcino kwaye wazi ukuba umaleko wogcino lweapp yakho uya kuziphatha ngokufanayo.

 ### Uvavanyo olubanzi
 Bonke abaqhubi bavavanyelwa ukuziphatha okufanayo kunye novavanyo lwe-60+ kumqhubi ngamnye.
 Sivavanya bonke abaqhubi ngayo yonke indibaniselwano:
 * Uguqulelo oluntsonkothileyo: zombini zivuliwe kwaye zikhubazekile
 * I-Redis cache: zombini ivuliwe kwaye ivaliwe

 Le ndlela isinika uxolo lwengqondo yokuba i-mobiletto iya kuziphatha ngendlela efanayo nokuba usebenzisa umqhubi weyiphi na.
 kwaye nokuba wenza i-caching kunye/okanye uguqulelo oluntsonkothileyo.

 ### Inkxaso yomqhubi
 Abaqhubi bangoku beMobiletto yokugcina:
 * `s3` : Amazon S3
 * `b2` : I-Backblaze B2
 * `local` : inkqubo yefayile yendawo

 *Amagalelo okuxhasa ababoneleli abaninzi bokugcina ilifu bamkelekile kakhulu!*

 ## mobiletto-cli
 IMobiletto yenzelwe ukuba isetyenziswe njengethala leencwadi ngenye ikhowudi yeJavaScript.

 Ukusebenza nge-mobiletto kumgca womyalelo, sebenzisa [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Umthombo
 * [mobiletto kwi-GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto kwi-npm](https://www.npmjs.com/package/mobiletto)

 ## Inkxaso kunye neNkxaso
 Ndizama ukuba ngumphuhlisi wesoftware ovulelekileyo. Bendisebenza ngaphakathi
 ishishini lesoftware iminyaka emininzi, ndiqale iinkampani eziphumeleleyo kwaye ndazithengisa kwiinkampani zoluntu.
 Kutshanje ndiye ndaphelelwa ngumsebenzi, yaye andinawo omnye umsebenzi endiwudwelisileyo

 Ke ndiza kuzama ukubhala isoftware eluncedo kwaye ndibone ukuba iyasebenza na

 Ukuba uyakonwabela ukusebenzisa le software, ndingabulela kakhulu nokuba
 incinci [igalelo lenyanga ngePatreon](https://www.patreon.com/cobbzilla)

 *Enkosi!*

 ## Ukufakela
 Faka usebenzisa `npm` okanye `yarn` . Mhlawumbi ufuna `lite` zonke
 Iifayile eziguqulelweyo ze-README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ukuba ufuna ngokwenene i README iifayile kulo lonke ulwimi, faka uguqulelo olupheleleyo:

    npm install mobiletto
    yarn add mobiletto

 ## Ukuqala ngokukhawuleza
 Umzekelo omfutshane usebenzisa imobiletto `s3` umqhubi.

 Le khowudi iyakuqhuba ngendlela efanayo ukuba umqhubi `b2` okanye `local` .

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
 ## Usetyenziso olusisiseko
 Umzekelo obanzi ngakumbi, obonisa uninzi lweempawu ezibonelelwayo:

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

 ## Metadata
 Umyalelo `metadata` ubuyisela imetadata malunga nongeno lwesixokelelwano esinye.
 Ngokunjalo, ixabiso `list` lomyalelo luludwe lwezinto zemetadata.

 Into yemetadata ibonakala ngolu hlobo:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 I `type` ipropathi inokuba `file` , `dir` , `link` , okanye `special` .

 Kuxhomekeka kudidi lomqhubi, `list` umyalelo awunakubuyisela zonke iindawo. I `name` kunye `type` iimpawu
 kufuneka ahlale ekho. Umyalelo olandelayo `metadata` zonke iipropati ezikhoyo.

 ## Esinye isimbo sokungenisa
 Thatha ngaphandle imodyuli enomda ngokupheleleyo kwaye usebenzise umsebenzi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Ugcino
 I-Mobiletto isebenza kakuhle nge-cache ye- <a href="https://redis.io">redis</a> .

 I-Mobiletto iya kuzama ukudibanisa kumzekelo we-redis kwi-127.0.0.1: 6379

 Ungabhala ngaphezulu kwezi:
 * Cwangcisa i `MOBILETTO_REDIS_HOST` env var, imobiletto qhagamshela apha endaweni yehostela yendawo
 * Cwangcisa i `MOBILETTO_REDIS_PORT` env var, elizibuko liza kusetyenziswa

 I-Mobiletto izakugcina zonke izitshixo zayo zeredis kunye nesiqalo `_mobiletto__` . Ungatshintsha oku
 ngokucwangcisa i `MOBILETTO_REDIS_PREFIX` env var.

 Ungakwazi nokuseta uqhagamshelo lwe-caching nganye kunye nento ethi `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Awufuni redis caching?
 Ukuyekisa: dlula `enabled: false` kwinto yakho `opts.redisConfig` xa useka umdibaniso wakho.

 Njengoko kuxoxwe ngezantsi, ukukhubaza i-caching kuya kuba nefuthe elibi ekusebenzeni kwaye kubangele izicelo ezininzi
 kugcino olufuna ngokwenene.

 ### Isikhokelo se-caching
 **Ugcino oluntsonkothileyo**: ukufunda/ukubhala ugcino olufihliweyo lucotha kancinci kunesiqhelo,
 kodwa ukuzulazula kuluhlu lwezalathisi (ezinye izinto ezizenzayo) kubiza kakhulu. Ukusebenzisa i-redis cache
 iya kukunika ukonyuswa okubalulekileyo kokusebenza.

 I-cache engagqibekanga ikhuselekile, kodwa ayisebenzi kakuhle ukuba unokuninzi kokubhala/ukususa imisebenzi.
 Nakuphi na ukubhala okanye ukususa umsebenzi kuyenza ingasebenzi i-cache yonke, ukuqinisekisa ukuba ufundo olulandelayo luya kubona
 utshintsho lwamva nje.

 ### izixhobo zeCLI
 Ukuba usebenzisa isixhobo se-CLI esinje [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ngokuqinisekileyo uya kufuna ukuba i-redis cache yenziwe, njengoko iqhubeka ngapha kwezicelo zomyalelo `mo` .

 ## Isipili

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Umyalelo `mirror` wenza ikopi yexesha elinye yazo zonke iifayile ukusuka kwimobiletto enye ukuya kwenye.
 Ayiqhubeki nayiphi na inkqubo yokugcina isibuko ngexesha. Sebenzisa `mirror` umyalelo kwakhona
 ukulungelelanisa naziphi na iifayile ezingekhoyo.

 Ixabiso lembuyekezo elisuka `mirror` yinto elula enezinto zokubala zokuba zingaphi iifayile eziphumeleleyo
 ezibonisiweyo kwaye zingaphi iifayile ezineempazamo:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ISILUMKISO: Ukujonga iiseti zedatha enkulu kunokutya ixesha elininzi kunye ne-bandwidth

 Nge `mirror` sokufowuna semantiki ngamanye amaxesha kunokubhida ukuqonda ukuba ngubani
 umfundi kwaye ngubani umbhali. Yiba nomfanekiso wengxelo yesabelo: "isandla sasekhohlo mobiletto"
 yinto eyabelwa kuyo (idatha ebonisiweyo ebhaliweyo), kunye ne "right-hand mobiletto" (i
 Ingxoxo `mirror` ) lixabiso elabelweyo (idatha ebonisiweyo iyafundwa).

 ## Uguqulelo oluntsonkothileyo
 Yenza uguqulelo oluntsonkothileyo kwicala lomxhasi:

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

 Kwenzekani? Indawo eyahlukileyo "yengeniso kavimba weefayili" (dirent) uvimba weefayili (ofihliweyo) ulandelela ukuba zeziphi iifayile ezikuloo nto
 uvimba weefayili (aka uvimba weefayili).
 * Umyalelo `list` lufunda uvimba weefayili zongeno, icoca indlela nganye edwelisiweyo; emva koko ibuyisela imetadata yefayile nganye
 `list` ayisebenzi ngakumbi, ingakumbi kubalawuli abanenani elikhulu leefayile
 * Umyalelo othi `write` ubhala iifayile ezizii-dirent kuluhlu lomzali ngamnye, ngokuphindaphindiweyo; emva koko ibhale ifayile
 * `write` imiyalelo iya kwenza u-O(N) ubhale, nge-N = ubunzulu kuluhlu lolawulo
 * Umyalelo `remove` ususa ifayile ehambelanayo ehambelanayo, kwaye umzali wayo ukuba akananto, ngokuphindaphindiweyo; emva koko isuse ifayile
 * Imiyalelo `remove` -O(N) ifundeke kwaye kunokwenzeka ucime oluninzi, nge N = ubunzulu kuluhlu lwenkqubo
 * Imiyalelo ephindaphindayo `remove`

 Qaphela ukuba nofihlo lwecala lomxhasi luvuliwe, umchasi onokubonakala okupheleleyo kwicala leseva elifihliweyo.
 ugcino, nangaphandle kwesitshixo, usengabona inani lilonke labalawuli kunye nokuba zingaphi iifayile kwindawo nganye, kwaye nge
 umzamo othile, fumana enye okanye sonke isakhelo esipheleleyo soluhlu lweqela leefayili.
 *Qaphela: Sebenzisa isakhiwo esithe tyaba ukwenzela ukhuseleko olungcono.
 Utshaba alunakwazi amagama abalawuli/iifayile ngaphandle kokuba nabo bayalwazi ufihlo lwakho
 isitshixo okanye ngenye indlela iqhekeze ngempumelelo uguqulelo oluntsonkothileyo. Zonke iibheji zicinyiwe ngoko!

 ### Ukusebenza kunye ne-caching
 Imisebenzi kugcino oluntsonkothileyo lungacotha. Uluhlu oluphindayo kunye nokususwa kunokucotha kakhulu.
 Ukugcinwa kwe-cache nge-redis kunceda kakhulu, kodwa qaphela ukuba i-cache igutyungelwe nakuphi na okubhaliweyo okanye okususayo.

 ## Ujikelezo olungundoqo
 Yenza i-mobiletto ngesitshixo sakho esitsha, emva koko ubonise idatha endala kuyo:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Ujongano lomqhubi
 Umqhubi yiyo nayiphi na ifayile ye-JS ethumela ngaphandle umsebenzi we-'storageClient' ngolu tyikityo:

    function storageClient (key, secret, opts)

 * `key` : umtya, isitshixo sakho se-API ( `local` olu luluhlu lwesiseko)
 * `secret` : umtya, imfihlo yakho ye-API (inokushiywa kumqhubi `local` )
 * `opts` : into, iipropati ngomqhubi ngamnye:
 * `local` , `fileMode` kunye ne `dirMode` iipropati zimisela indlela entsha yokudala iifayile kunye nabalawuli benziwa
 * Kwi `s3` , ipropathi `bucket` iyafuneka. Iipropati ozikhethelayo zezi:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Into ebuyiswa ngumsebenzi weClient kufuneka ichaze le misebenzi:

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

 ## Ukugawulwa kwemithi
 I-Mobiletto isebenzisa [winston](https://www.npmjs.com/package/winston) ilayibrari yokugawulwa kwemithi.

 Iilogi ** ziya kuqulatha iindlela zefayile kunye nemiyalezo yempazamo, kodwa ayinakuze ** iqulathe izitshixo, iimfihlo,
 okanye naluphi na olunye ulwazi loqwalaselo loqhagamshelwano.

 ### Inqanaba lokuloga
 Sebenzisa `MOBILETTO_LOG_LEVEL` ukuguquguquka kwemekobume ukuseta umgangatho welog, usebenzisa enye
 `npm` achazwe kwi [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Umphakamo omiselweyo uthi `error` . Elona nqanaba `silly` , nangona okwangoku mobiletto
 ayilogi kumanqanaba asezantsi `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Ifayile yelog
 Ngokungagqibekanga, umgawuli ubhalela ikhonsoli. Ukuthumela iilog kwifayile, seta i `MOBILETTO_LOG_FILE`
 ukuguquguquka kokusingqongileyo. Xa ungena kwifayile, iilog azisayi kuphinda zibhalelwe kwi-console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ukucima ukugawulwa kwemithi:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
