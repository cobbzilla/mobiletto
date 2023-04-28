Mobiletto
 ========

 Mobiletto shine Layer Abstraction na ajiya na JavaScript, tare da ɓoye ɓoyayyen gefen abokin ciniki na zaɓi na zaɓi.

 # Abubuwan ciki
 * [Me yasa Mobiletto?](#Me yasa Mobiletto?)
 * [Farawa cikin sauri](#Farawa da sauri)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Madogararsa](#Source)
 * [Shigarwa](#Shigarwa)
 * [Tallafawa da Kuɗi](#Taimako-da-Kudade)
 * [Amfani na asali](#Basic-amfani)
 * [Metadata](#Metadata)
 * [Salon shigo da na dabam](#Salo-Salo-Salo-Salo)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparent encryption](#Transparent-encryption)
 * [Maɓalli na juyawa](#Maɓalli-juyawa)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Karanta wannan a wani yare
 An fassara wannan takaddar README.md, ta [hokeylization](https://github.com/cobbzilla/hokeylization), zuwa
 **[kowane harshe yana da tallafin Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Na tabbata ba cikakke ba ne, amma ina fata ya fi komai kyau!

 [🇸🇦 Larabci](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jamusanci](../de/README.md)
 [🇺🇸 Turanci](../ha/README.md)
 [🇪🇸 Mutanen Espanya](../es/README.md)
 [🇫🇷 Faransanci](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italiyanci](../it/README.md)
 [🇯🇵 Jafananci](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Yaren mutanen Poland](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Rashanci](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Baturke](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Sinanci](../zh/README.md)


 **[📚 ... Duk Harsuna ...](../README.md)**
 ----

 ### Akwai matsala da wannan fassarar README?
 Wannan fassarar ta asali ta asali [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 na iya zama aibi - * ana maraba da gyare-gyare!* Da fatan za a aika [buƙatun ja akan GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ko kuma idan ba ku ji daɗin yin hakan ba, [buɗe batun](https://github.com/cobbzilla/mobiletto/issues)

 Lokacin da kuka ƙirƙiri sabon batun GitHub game da fassarar, da fatan za a yi:
 * hada da URL na shafi (kwafi / manna daga mashaya adireshin mashigin)
 * hada da ainihin rubutun da ba daidai ba (kwafi / manna daga mai bincike)
 * don Allah bayyana abin da ba daidai ba -- shin fassarar ba daidai ba ce? an karye tsarin ko ta yaya?
 * a hankali ba da shawarar mafi kyawun fassarar, ko yadda ya kamata a tsara rubutun yadda ya kamata
 * **Na gode!**

 ## Me yasa Mobiletto?

 ### Barka da kulle-kulle mai siyarwa!
 Daban-daban masu samar da ajiyar girgije suna da APIs marasa jituwa. Ko da waɗanda ke ƙoƙari don "S3 dacewa"
 suna da halaye na ban mamaki.

 Lokacin da kuka zaɓi takamaiman mai siyar da ajiya don app ɗinku, idan kun yi code kai tsaye zuwa API ɗin su, app ɗin ku
 yanzu ya dogara da wannan sabis ɗin. Yayin da lokaci ya wuce kuma code yana tarawa, canza dillalai ya zama
 ƙara rashin ƙarfi. Barka da zuwa duniyar nishaɗin kulle-kulle mai siyarwa!

 An ƙera Mobiletto don magance wannan matsalar. Ta hanyar yin codeing app ɗin ku zuwa API ɗin mobiletto, kuna iya sauƙi
 canza masu samar da ma'ajiya kuma ku sani cewa Layer ɗin ajiyar app ɗin ku zai yi aiki iri ɗaya.

 ### Gwaji mai yawa
 Ana gwada duk direbobi don halaye iri ɗaya tare da gwaje-gwaje 60+ ga kowane direba.
 Muna gwada duk direbobi tare da kowane haɗuwa na:
 * Rufewa: duka an kunna kuma an kashe
 * Redis cache: duka an kunna kuma an kashe su

 Wannan hanyar tana ba mu kwanciyar hankali cewa wayar hannu za ta kasance iri ɗaya ba tare da la'akari da direban da kuke amfani da shi ba,
 kuma ko da kun kunna caching da/ko ɓoyewa.

 ### Tallafin direba
 Direbobin ajiya na Mobiletto na yanzu:
 * `s3` : Amazon S3
 * `b2` : Bakin baya B2
 * `local` : tsarin fayil na gida

 *Taimako don tallafawa ƙarin masu samar da ajiyar girgije ana maraba da su!*

 ## mobiletto-cli
 Mobiletto ana nufin amfani da shi azaman ɗakin karatu ta wasu lambar JavaScript.

 Don aiki tare da mobiletto a layin umarni, yi amfani da [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Source
 * [mobiletto akan GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto akan npm](https://www.npmjs.com/package/mobiletto)

 ## Tallafi da Kudi
 Ina ƙoƙari in zama ƙwararren mai haɓaka tushen software. Na kasance ina aiki a ciki
 masana'antar software tsawon shekaru da yawa, na fara kamfanoni masu nasara kuma na sayar da su ga kamfanonin jama'a.
 Kwanan nan na rasa aiki, kuma ba ni da wani aiki a layi daya

 Don haka zan gwada rubuta software mai taimako don ganin ko hakan yana aiki

 Idan kuna jin daɗin amfani da wannan software, zan yi godiya sosai don har ma da
 mafi ƙanƙanta [gudunmawar wata-wata ta hanyar Patreon](https://www.patreon.com/cobbzilla)

 *Na gode!*

 ## Shigarwa
 Shigar ta amfani da `npm` ko `yarn` . Wataƙila kuna son sigar `lite` ba ta haɗa da duka ba
 Fassarar README fayiloli:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Idan da gaske kuna son fayilolin README a kowane harshe, shigar da cikakken sigar:

    npm install mobiletto
    yarn add mobiletto

 ## Gaggauta Farawa
 Wani ɗan gajeren misali ta amfani da direban mobiletto `s3` .

 Wannan lambar zata yi aiki iri ɗaya idan direban `b2` ko `local` .

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
 ## Asalin amfani
 Misali mafi fa'ida, yana nuna yawancin abubuwan da aka bayar:

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
 Umurnin `metadata` yana dawo da metadata game da shigarwar tsarin fayil guda ɗaya.
 Hakazalika, ƙimar dawowa daga umurnin `list` jeri' jerin abubuwa ne na metadata.

 Abun metadata yayi kama da haka:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Kayan `type` ' na iya zama `file` ' , `dir` , `link` , ko `special` .

 Dangane da nau'in direba, umarni `list` bazai dawo da duk filayen ba. Abubuwan `name` suna' da `type`
 ya kamata a kasance a koyaushe. Umurnin `metadata` na gaba zai dawo da duk kaddarorin da ke akwai.

 ## Madadin salon shigo da kaya
 Shigo da cikakken tsari kuma yi amfani da aikin `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto yana aiki mafi kyau tare da <a href="https://redis.io">redis</a> cache.

 Mobiletto zai yi ƙoƙarin haɗawa zuwa misalin redis akan 127.0.0.1:6379

 Kuna iya soke ɗaya daga cikin waɗannan:
 * Saita `MOBILETTO_REDIS_HOST` env var, mobiletto haɗi anan maimakon localhost
 * Saita `MOBILETTO_REDIS_PORT` env var, za a yi amfani da wannan tashar jiragen ruwa

 Mobiletto zai adana duk maɓallan redis tare da prefix `_mobiletto__` . Kuna iya canza wannan
 ta hanyar saita `MOBILETTO_REDIS_PREFIX` env var.

 Hakanan zaka iya saita caching ta hanyar haɗin kai tare da abun `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ba kwa son redis caching?
 Don kashe: wuce `enabled: false` a cikin abun `opts.redisConfig` lokacin da kuka kafa haɗin ku.

 Kamar yadda aka tattauna a ƙasa, kashe caching zai yi mummunan tasiri akan aiki kuma ya haifar da ƙarin buƙatun
 zuwa ajiyar da kuke buƙatar gaske.

 ### Jagorar caching
 ** Rufaffen ma'auni ***: karantawa/rubutun rufaffen ma'ajin yana ɗan ɗan hankali fiye da na al'ada,
 amma kewaya cikin kundin adireshi (wanda wasu abubuwa suke yi) yana da tsada sosai. Amfani da redis cache
 zai ba ku gagarumin haɓaka aiki.

 Tsohuwar cache mai lafiya ne, amma baya aiki da kyau idan kuna da yawa na rubutu/cire ayyuka.
 Duk wani aiki na rubutu ko cirewa yana lalata duk cache ɗin, yana tabbatar da karantawa na gaba zai ga
 sabbin canje-canje.

 ### kayan aikin CLI
 Idan kana amfani da kayan aikin CLI kamar [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 tabbas za ku so a kunna ma'ajin redis, saboda yana wucewa cikin `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` yana aiwatar da kwafin duk fayiloli na lokaci ɗaya daga wayar hannu zuwa wancan.
 Ba ya gudanar da kowane tsari don kula da madubi akan lokaci. sake gudanar da umurnin `mirror`
 don daidaita duk fayilolin da suka ɓace.

 Ƙimar dawowa daga `mirror` ne mai sauƙi tare da ƙididdiga don fayilolin nawa aka yi nasara
 madubi da fayiloli nawa ne suka sami kurakurai:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 GARGAƊI: Nuna manyan saitin bayanai na iya zama mai cin lokaci sosai kuma mai saurin bandwidth

 Tare da ma'anar kiran `mirror` wani lokaci yana iya zama da rudani don fahimtar wanene
 mai karatu kuma wanene marubuci. Ka yi tunanin shi kamar bayanin aiki: "mobiletto hannun hagu"
 shine abin da ake sanyawa (babban bayanan da aka rubuta), da kuma "mobiletto hannun dama" (da
 hujja ga hanyar `mirror` ) shine ƙimar da ake sanyawa (ana karanta bayanan madubi).

 ## boye boye boye
 Kunna ɓoyayyen ɓoyayyen abokin ciniki:

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

 Me ke faruwa? Wani keɓantaccen littafin "shigarwar kundin adireshi" (mai rufaffiyar) yana bin abin da fayiloli ke cikin wancan
 directory (wanda aka fi sani da directory).
 * `list` yana karanta fayilolin shigarwar kundin adireshi, yana lalata kowane hanyar da aka jera; sannan ya dawo da metadata ga kowane fayil
 * `list` sun fi rashin inganci, musamman ga kundin adireshi masu yawan fayiloli
 * `write` rubuta fayilolin da ba su dace ba a cikin kundin adireshi na kowane iyaye, akai-akai; sannan ya rubuta fayil din
 * `write` za su haifar da O(N) ya rubuta, tare da N = zurfin a cikin matsayi na shugabanci
 * Umurnin `remove` cire' yana cire babban fayil ɗin daidai, kuma iyayensa idan babu komai, akai-akai; sannan ya cire fayil din
 * `remove` za su haifar da karatun O(N) da yuwuwar sharewa da yawa, tare da N = zurfi a cikin tsarin shugabanci.
 * `remove` akan manyan fayilolin fayiloli masu zurfi na iya zama tsada

 Lura cewa ko da tare da ɓoyayyen ɓoyayyen abokin ciniki, abokin gaba mai cikakken gani a cikin ɓoyayyen uwar garken ku.
 ajiya, ko da ba tare da maɓalli ba, har yanzu yana iya ganin jimlar adadin kundayen adireshi da fayiloli nawa a cikin kowannensu, tare da
 wani yunƙuri, gano wasu ko duk tsarin gaba ɗaya na matsayi na shugabanci.
 *Lura: Yi amfani da siffa mai faɗi don ingantaccen tsaro.*
 Abokan gaba ba zai san sunayen kundayen adireshi/fayil ɗin ba sai dai idan sun san ɓoyewar ku
 maɓalli ko kuma an sami nasarar fashe ɓoyayyen ɓoyayyen. An kashe duk fare to!

 ### Aiki da caching
 Ayyuka akan ma'ajiyar rufaffiyar na iya zama a hankali. Lissafin maimaitawa da cirewa na iya zama a hankali.
 Caching ta hanyar redis yana taimakawa sosai, amma lura cewa cache ɗin yana goge akan kowane rubutu ko cirewa.

 ## Juyawa Maɓalli
 Ƙirƙiri wayar hannu tare da sabon maɓalli, sannan madubi tsohon bayanai a ciki:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Driver interface
 Direba shine kowane fayil na JS wanda ke fitar da aikin 'abokin ajiya' tare da wannan sa hannu:

    function storageClient (key, secret, opts)

 * `key` : kirtani, maɓallin API ɗinku (na direban `local` na gida' wannan shine tushen jagorar)
 * `secret` : kirtani, sirrin API ɗinku (ana iya barin direban `local` na gida')
 * `opts` : abu, kaddarorin kowane direba ne:
 * Don `local` na gida', kayan `fileMode` da `dirMode` ƙayyade yadda ake ƙirƙirar sabbin fayiloli da kundayen adireshi
 * Don `s3` , ana buƙatar kadarorin `bucket` . Kaddarorin na zaɓi sune:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Abinda aikin Abokin ciniki ya dawo dashi dole ne ya ayyana waɗannan ayyuka:

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

 ## Shiga
 Mobiletto yana amfani da ɗakin karatu na [winston](https://www.npmjs.com/package/winston).

 Logs **zai ƙunshi hanyoyin fayil da saƙonnin kuskure, amma ** ba zai taɓa ƙunshi maɓalli, sirri ba,
 ko duk wani bayanin haɗin kai.

 ### Matsayin shiga
 Yi amfani da madaidaicin mahallin `MOBILETTO_LOG_LEVEL` don saita matakin log, ta amfani da ɗaya
 na matakan `npm` da aka ayyana a [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Matsayin tsoho shine `error` . Mafi girman matakin magana shine `silly` , kodayake a halin yanzu wayar hannu
 baya shiga a matakan da ke ƙasa `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Shiga fayil
 Ta hanyar tsoho, mai shiga yana rubutawa ga na'ura mai kwakwalwa. Don aika rajistan ayyukan zuwa fayil, saita `MOBILETTO_LOG_FILE`
 m yanayi. Lokacin shiga fayil, ba za a ƙara rubuta rajistan ayyukan zuwa na'ura wasan bidiyo ba.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Don kashe shiga:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
