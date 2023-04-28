Mobiletto
 =========

 Mobiletto ndi gawo la JavaScript losungirako, lomwe lili ndi kubisa kwapambali kwa kasitomala.

 # Zamkatimu
 * [Chifukwa Chiyani Mobiletto?](#Why-Mobiletto?)
 * [Kuyambira mwachangu](#Kuyambira mwachangu)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Gwero](#Source)
 * [Kuyika](#Kuyika)
 * [Thandizo ndi Ndalama](#Thandizo-ndi-ndandalama)
 * [Kagwiritsidwe ntchito kake](#Kagwiritsidwe koyambira)
 * [Metadata](#Metadata)
 * [Mtundu wina wolowetsa](#Mtundu wina wolowetsa)
 * [Kusunga](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparent encryption](# Transparent-encryption)
 * [Kutembenuza kiyi](#Kutembenuza-makiyi)
 * [Mawonekedwe a Dalaivala](#Mawonekedwe Oyendetsa)
 * [Kudula mitengo](#Logging)

 # Werengani izi muchilankhulo china
 Chikalata cha README.md chamasuliridwa, kudzera pa [hokeylization](https://github.com/cobbzilla/hokeylization), ku
 **[chinenero chilichonse chimathandizidwa ndi Zomasulira za Google](https://cloud.google.com/translate/docs/languages)!**

 Ndikutsimikiza kuti sizabwino, koma ndikukhulupirira kuti nzabwino kuposa chilichonse!

 [🇸🇦 Chiarabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Chijeremani](../de/README.md)
 [🇺🇸 Chingerezi](../en/README.md)
 [🇪🇸 Chisipanishi](../es/README.md)
 [🇫🇷 Chifulenchi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Chihindi](../hi/README.md)
 [🇮🇩 Chiindoneziya](../id/README.md)
 [🇮🇹 Chiitaliya](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Chikorea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Chipolishi](../pl/README.md)
 [🇧🇷 Chipwitikizi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Zinenero Zonse ...](../README.md)**
 ----

 ### Kodi pali vuto ndi kumasulira kumeneku kwa README?
 Kumasulira kwenikweniku [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 zitha kukhala zolakwika -- *zokonza ndizolandilidwa kwambiri!* Chonde tumizani [kukoka pempho pa GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 kapena ngati simumasuka kuchita zimenezo, [tsegulani nkhani](https://github.com/cobbzilla/mobiletto/issues)

 Mukapanga nkhani yatsopano ya GitHub yokhudza kumasulira, chonde chitani:
 * Phatikizani ulalo watsamba (koperani / kumata kuchokera pa adilesi ya msakatuli)
 * Phatikizani zomwe zili zolakwika (koperani/mata kuchokera pa msakatuli)
 * chonde fotokozani chomwe chalakwika -- kodi kumasulira kwake ndikolakwika? Kodi masanjidwewo awonongeka mwanjira ina?
 * perekani mokoma mtima lingaliro la kumasulira kwabwinoko, kapena mmene malembawo ayenera kusanjidwira bwino
 * **Zikomo!**

 ## Chifukwa Mobiletto?

 ### Tatsala pang'ono kutseka mavenda!
 Othandizira osiyanasiyana osungira mitambo ali ndi ma API osagwirizana. Ngakhale omwe amayesetsa "kufanana kwa S3"
 kukhala ndi makhalidwe osadziwika bwino.

 Mukasankha wogulitsa wina wosungira pulogalamu yanu, ngati mumalembera mwachindunji ku API yawo, pulogalamu yanu
 tsopano amadalira utumiki umenewo. Pamene nthawi ikupita ndipo code ikuwonjezeka, kusintha ogulitsa kumakhala
 osavomerezeka. Takulandilani kudziko losangalatsa la mavenda lock-in!

 Mobiletto idapangidwa kuti ithetse vutoli. Mwa kukopera pulogalamu yanu ku mobiletto's API, mungathe mosavuta
 sinthani osungira ndikudziwa kuti malo osungira a pulogalamu yanu azichita chimodzimodzi.

 ### Kuyesa kwakukulu
 Madalaivala onse amayesedwa kuti akhale ndi machitidwe ofanana ndi mayeso 60+ pa driver aliyense.
 Timayesa madalaivala onse ndi kuphatikiza kulikonse:
 * Kubisa: zonse zimathandizidwa komanso zolephereka
 * Redis cache: zonse zimayatsidwa komanso zolephereka

 Njirayi imatipatsa mtendere wamumtima kuti mobiletto izichita chimodzimodzi mosasamala kanthu kuti mumagwiritsa ntchito dalaivala wotani,
 ndipo mosasamala kanthu kuti mutsegula caching ndi/kapena kubisa.

 ### Chithandizo cha oyendetsa
 Madalaivala apano a Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : file system yakomweko

 *Zopereka zothandizira othandizira ambiri osungira mitambo ndizolandiridwa kwambiri!*

 ## mobiletto-cli
 Mobiletto idapangidwa kuti igwiritsidwe ntchito ngati laibulale ndi ma code ena a JavaScript.

 Kuti mugwire ntchito ndi mobiletto pamzere wolamula, gwiritsani ntchito [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Gwero
 * [mobiletto pa GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto pa npm](https://www.npmjs.com/package/mobiletto)

 # Thandizo ndi Ndalama
 Ndikuyesera kukhala katswiri wopanga mapulogalamu otseguka. Ndakhala ndikugwira ntchito ku
 makampani opanga mapulogalamu kwa zaka zambiri, ndayambitsa makampani opambana ndikugulitsa kumakampani aboma.
 Posachedwapa ndinachotsedwa ntchito, ndipo ndilibe ntchito ina iliyonse yotsatizana

 Chifukwa chake ndiyesera kulemba mapulogalamu othandiza ndikuwona ngati izi zikugwira ntchito

 Ngati mumakonda kugwiritsa ntchito pulogalamuyo, ndingayamikire kwambiri ngakhale
 zing'onozing'ono [zopereka pamwezi kudzera pa Patreon](https://www.patreon.com/cobbzilla)

 *Zikomo!*

 ## Kukhazikitsa
 Ikani pogwiritsa ntchito `npm` kapena `yarn` . Mwina mukufuna mtundu wa `lite` womwe suphatikiza zonse
 mafayilo omasulira a README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ngati mukufunadi mafayilo a README m'zilankhulo zonse, yikani mtundu wonse:

    npm install mobiletto
    yarn add mobiletto

 ## Yambani Mwachangu
 Chitsanzo chachidule chogwiritsa ntchito mobiletto `s3` driver.

 Khodi iyi ingayende chimodzimodzi ngati dalaivala anali `b2` kapena `local` .

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
 ## Kugwiritsa ntchito Basic
 Chitsanzo chowonjezereka, chosonyeza zambiri zomwe zimaperekedwa:

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
 Lamulo la `metadata` limabweretsanso metadata yokhudza kulowa kwa fayilo imodzi.
 Momwemonso, mtengo wobwerera kuchokera ku lamulo la `list` ndi mndandanda wazinthu za metadata.

 Chinthu cha metadata chikuwoneka motere:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Katundu wa `type` ukhoza kukhala `file` , `dir` , `link` , kapena `special` .

 Kutengera mtundu wa dalaivala, lamulo la `list` onse. The `name` ndi `type` katundu
 ayenera kukhalapo nthawi zonse. Lamulo lotsatira la `metadata` lidzabwezera zonse zomwe zilipo.

 ## Njira ina yolowera
 Lowetsani gawo lokhala ndi mawonekedwe onse ndikugwiritsa ntchito `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ##Kusunga
 Mobiletto imagwira ntchito bwino ndi <a href="https://redis.io">redis</a> cache.

 Mobiletto ayesa kulumikizana ndi chitsanzo cha redis pa 127.0.0.1:6379

 Mutha kuchotsera chimodzi mwa izi:
 * Khazikitsani env var ya `MOBILETTO_REDIS_HOST` , lumikizani pano m'malo mwa localhost
 * Khazikitsani env var ya `MOBILETTO_REDIS_PORT` , dokoli lidzagwiritsidwa ntchito

 Mobiletto idzasunga makiyi ake onse a redis ndi mawu oyamba `_mobiletto__` . Mutha kusintha izi
 pokhazikitsa `MOBILETTO_REDIS_PREFIX` env var.

 Mukhozanso kukhazikitsa posungira polumikizana ndi chinthu cha `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Simukufuna redis caching?
 Kuti muyimitse: dutsani `othandizira `enabled: false` mu chinthu chanu cha `opts.redisConfig` kulumikizana kwanu.

 Monga tafotokozera m'munsimu, kuletsa caching kumakhala ndi zotsatira zoyipa pakuchita bwino komanso kumabweretsa zopempha zambiri
 posungira zomwe mukufunikiradi.

 ### Chitsogozo cha caching
 **Kusungirako mwachinsinsi**: kuwerenga/kulemba kusungitsa kosungika kumachedwa pang'ono kusiyana ndi nthawi zonse,
 koma kuyendayenda mozungulira (zomwe zinthu zina zimachita) ndizokwera mtengo. Kugwiritsa ntchito redis cache
 zidzakupatsani chiwongola dzanja chachikulu.

 Chosungira chosasinthika ndi chotetezeka, koma sichikuyenda bwino ngati muli ndi zambiri zolembera / kuchotsa.
 Kulemba kapena kuchotsa ntchito kulikonse kumalepheretsa cache yonse, kuwonetsetsa kuti zowerenga zotsatila ziziwona
 zosintha zaposachedwa.

 ### CLI zida
 Ngati mukugwiritsa ntchito chida cha CLI ngati [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 mudzafuna kuti cache ya redis iyambike, chifukwa imapitilira kuyitanitsa kwa lamulo la `mo` .

 ##Kuwonetsa

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Lamulo la `mirror` limapanga kukopera kamodzi kwamafayilo onse kuchokera pa mobiletto kupita kwina.
 Sichiyendetsa njira iliyonse yosungira galasi pakapita nthawi. Thamangani lamulo la `mirror` kachiwiri
 kulunzanitsa mafayilo aliwonse omwe akusowa.

 Mtengo wobwerera kuchokera ku `mirror` ndi chinthu chosavuta chokhala ndi zowerengera za kuchuluka kwa mafayilo omwe adachita bwino
 mirrored ndi kuchuluka kwa mafayilo omwe anali ndi zolakwika:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 CHENJEZO: Kuyang'anira ma data akuluakulu kumatha kutenga nthawi komanso bandwidth

 Ndi ma semantics oyimba a `mirror` nthawi zina zimakhala zosokoneza kumvetsetsa kuti ndani
 wowerenga ndi amene analemba. Ingoganizirani ngati mawu a ntchito: "mobiletto yamanzere"
 ndi chinthu chomwe chikuperekedwa (zojambula zojambulidwa), ndi "mobiletto yamanja" (the
 Mtsutso wa njira ya `mirror` ) ndi mtengo womwe ukuperekedwa (zowerengera zawerengedwa).

 ## Transparent encryption
 Yambitsani kubisa kwapambali kwa kasitomala:

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

 Chikuchitikandi chiyani? Chikwatu chosiyana cha "directory entry" (dirent) (chobisika) chimatsata mafayilo omwe ali mmenemo
 directory (aka dirent directory).
 * Lamulo la `list` limawerenga mafayilo olowera, kutsitsa njira iliyonse yomwe yatchulidwa; kenako amabwezeretsa metadata pa fayilo iliyonse
 * Malamulo a `list` , makamaka pamakanema okhala ndi mafayilo ambiri
 * Lamulo la `write` limalemba mafayilo achinsinsi mu bukhu la kholo lililonse, mobwerezabwereza; kenako amalemba fayilo
 * Malamulo `write` kuti O (N) alembe, ndi N = kuya muzowongolera
 * Lamulo la `remove` limachotsa fayilo yofananira, ndipo kholo lake ngati ilibe kanthu, mobwerezabwereza; kenako amachotsa fayilo
 * Malamulo osabwereza a `remove` kuti O(N) awerengedwe ndikuchotsa zambiri, ndi N = kuya muzowongolera
 * Malamulo `remove` akulu ndi akuya amatha kukhala okwera mtengo

 Zindikirani kuti ngakhale kubisa kwamakasitomala kumayatsidwa, mdani yemwe amawoneka bwino pa seva yanu yosungidwa
 yosungirako, ngakhale popanda kiyi, amatha kuwona kuchuluka kwa maupangiri ndi kuchuluka kwa mafayilo omwe ali mumtundu uliwonse, komanso ndi
 kuyesetsa pang'ono, pezani zina kapena zonse zadongosolo lachikwatu.
 *Zindikirani: Gwiritsani ntchito mawonekedwe athyathyathya kuti mutetezeke bwino.
 Mdaniyo sangadziwe mayina a zolemba / mafayilo pokhapokha atadziwanso kubisa kwanu
 key kapena adasokoneza bwino kubisa. Mabetcha onse atha ndiye!

 ### Magwiridwe ndi caching
 Ntchito zosungirako encrypted zitha kuchedwa. Zolemba zobwerezabwereza ndi zochotsa zimatha kuchedwa kwambiri.
 Kusungirako kudzera pa redis kumathandiza kwambiri, koma dziwani kuti posungirayo imasinthidwa pazolemba zilizonse kapena kuchotsa.

 ## Kusintha kofunikira
 Pangani mobiletto ndi kiyi yanu yatsopano, kenako ndikuwonetsa zomwe zilimo kale:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Mawonekedwe oyendetsa
 Dalaivala ndi fayilo iliyonse ya JS yomwe imatumiza ntchito ya 'storageClient' ndi siginecha iyi:

    function storageClient (key, secret, opts)

 * `key` : chingwe, kiyi yanu ya API (kwa oyendetsa `local` iyi ndiye chikwatu choyambira)
 * `secret` : chingwe, chinsinsi cha API (chikhoza kusiyidwa kwa woyendetsa `local` )
 * `opts` : chinthu, katundu ndi woyendetsa:
 * Kwa `local` , katundu wa `fileMode` ndi `dirMode` zimatsimikizira momwe mafayilo atsopano ndi zolemba zimapangidwira
 * Kwa `s3` , katundu wa `bucket` amafunikira. Zosankha zomwe mungasankhe ndi:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Chinthu chomwe ntchito yosungiraClient imabwerera iyenera kutanthauzira izi:

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

 ##Kudula mitengo
 Mobiletto amagwiritsa ntchito laibulale yodula mitengo ya [winston](https://www.npmjs.com/package/winston).

 Logs ** idzakhala ** idzakhala ndi njira zamafayilo ndi mauthenga olakwika, koma ** sichidzakhala ** ndi makiyi, zinsinsi,
 kapena chidziwitso china chilichonse cholumikizira.

 ### Log level
 Gwiritsani ntchito `MOBILETTO_LOG_LEVEL` kusintha kwa chilengedwe kuti muyike mulingo wa chipika, pogwiritsa ntchito imodzi
 za milingo ya `npm` yofotokozedwa mu [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Mulingo wokhazikika ndi `error` . Mulingo wa verbose kwambiri ndi `silly` , ngakhale pakali pano mobiletto
 sichilowa m'munsimu `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Fayilo yaulere
 Mwachikhazikitso, wodula mitengoyo amalembera ku console. Kuti mutumize malogo ku fayilo, ikani `MOBILETTO_LOG_FILE`
 kusintha kwa chilengedwe. Mukalowa mufayilo, zipika sizidzalembedwanso ku console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Kuti muzimitsa kudula mitengo:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
