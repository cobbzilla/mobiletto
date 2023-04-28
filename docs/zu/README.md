I-Mobiletto
 ==========

 I-Mobiletto isendlalelo esinqamulelayo sesitoreji se-JavaScript, esinombhalo wemfihlo ongaseceleni weklayenti ongakukhetha.

 # Okuqukethwe
 * [Kungani i-Mobiletto?](#Why-Mobiletto?)
 * [Isiqalo esisheshayo](#Qala ngokushesha)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Umthombo](#Umthombo)
 * [Ukufakwa](#Ukufakwa)
 * [Ukwesekwa Noxhaso](#Ukusekela-Noxhaso)
 * [Ukusetshenziswa okuyisisekelo](#Ukusetshenziswa okuyisisekelo)
 * [Imethadatha](#Imethadatha)
 * [Esinye isitayela sokungenisa](#Esinye-isitayela sokungenisa)
 * [Ukulondoloza isikhashana](#Ukulondoloza isikhashana)
 * [Ukubukisa](#Ukubukisa)
 * [Ukubethela okusobala](#Ukubethela-Ngaphandle)
 * [Ukuzungezisa kokhiye](#Ukuzungezisa kokhiye)
 * [Isixhumi esibonakalayo somshayeli](#I-Driver-interface)
 * [Ukungena](#Ukungena)

 # Funda lokhu ngolunye ulimi
 Lo mbhalo we-README.md uhunyushwe ngokuthi [hokeylization](https://github.com/cobbzilla/hokeylization), ku-
 **[zonke izilimi zisekelwa i-Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ngiqinisekile ukuthi ayiphelele, kodwa ngethemba ukuthi ingcono kunalutho!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJalimane](../de/README.md)
 [🇺🇸 IsiNgisi](../zu/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 isiNtaliyane](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 isi-Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 isi-Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Isi-Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiShayina](../zh/README.md)


 **[📚 ... Zonke Izilimi ...](../README.md)**
 ----

 ### Ingabe kunenkinga ngalokhu kuhunyushwa kwe- README?
 Lokhu kuhunyushwa koqobo [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ingase ibe namaphutha -- *izilungiso zamukelekile kakhulu!* Sicela uthumele [isicelo sokudonsa ku-GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 noma uma ungakhululekile ukwenza lokho, [vula inkinga](https://github.com/cobbzilla/mobiletto/issues)

 Uma udala udaba olusha lwe-GitHub mayelana nokuhumusha, sicela wenze:
 * faka i-URL yekhasi (kopisha/unamathisele kubha yekheli lesiphequluli)
 * faka phakathi nombhalo ongalungile (kopisha/unamathisele esipheqululini)
 * ngicela uchaze ukuthi yini engalungile -- ingabe ukuhumusha akulungile? ingabe ukufometha kwephukile ngandlela thile?
 * ngomusa nikeza isiphakamiso senguqulo engcono kakhulu, noma indlela umbhalo okufanele ufomethwe kahle ngayo
 * **Ngiyabonga!**

 ## Kungani i-Mobiletto?

 ### Sala kahle ukukhiya komthengisi!
 Abahlinzeki abahlukahlukene besitoreji samafu banama-API angahambelani. Ngisho nalabo abalwela "ukuhambisana kwe-S3"
 babe nokuziphatha okungaqondakali.

 Uma ukhetha umdayisi othile wesitoreji wohlelo lwakho lokusebenza, uma ukhodi ngokuqondile ku-API yakhe, uhlelo lwakho lokusebenza
 manje incike kuleyo sevisi. Njengoba isikhathi sihamba futhi ikhodi inqwabelana, ukushintsha abathengisi kuba
 ngokungathembeki ngokwandayo. Uyemukelwa emhlabeni ojabulisayo wokukhiya ngaphakathi komthengisi!

 I-Mobiletto yakhelwe ukuxazulula le nkinga. Ngokubhala ngekhodi uhlelo lwakho lokusebenza ku-mobiletto's API, ungakwazi kalula
 shintsha abahlinzeki besitoreji futhi wazi ukuthi isendlalelo sesitoreji sohlelo lwakho lokusebenza sizoziphatha ngendlela efanayo.

 ### Ukuhlola okubanzi
 Bonke abashayeli bahlolelwa ukuziphatha okufanayo ngokuhlolwa okungu-60+ kumshayeli ngamunye.
 Sihlola bonke abashayeli ngazo zonke inhlanganisela:
 * Ukubethela: kokubili kunikwe amandla futhi kukhutshaziwe
 * I-Cache ye-Redis: kokubili kunikwe amandla futhi kukhutshaziwe

 Le ndlela isinika ukuthula kwengqondo ukuthi i-mobiletto izoziphatha ngendlela efanayo noma ngabe usebenzisa muphi umshayeli,
 futhi kungakhathalekile ukuthi unika amandla ukulondoloza isikhashana kanye/noma ukubethela.

 ### Ukwesekwa kwabashayeli
 Abashayeli besitoreji bamanje be-Mobiletto:
 * `s3` : Amazon S3
 * `b2` : I-Backblaze B2
 * `local` : uhlelo lwefayela lwasendaweni

 *Iminikelo yokusekela abahlinzeki abengeziwe besitoreji samafu yamukelekile kakhulu!*

 ## mobiletto-cli
 I-Mobiletto ihloselwe ukusetshenziswa njengomtapo wolwazi ngenye ikhodi ye-JavaScript.

 Ukuze usebenze ne-mobiletto kulayini womyalo, sebenzisa i-[mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Umthombo
 * [i-mobiletto ku-GitHub](https://github.com/cobbzilla/mobiletto)
 * [i-mobiletto ku-npm](https://www.npmjs.com/package/mobiletto)

 ## Ukusekela Nokuxhaswa Ngezimali
 Ngizama ukuba umthuthukisi wesofthiwe yomthombo ovulekile ochwepheshe. Bengisebenza e
 imboni yesofthiwe iminyaka eminingi, ngiqale izinkampani eziphumelelayo futhi ngazithengisa ezinkampanini zomphakathi.
 Muva nje ngilahlekelwe umsebenzi, futhi anginawo omunye umsebenzi engiwulandelayo

 Ngakho-ke ngizozama ukubhala isoftware ewusizo futhi ngibone ukuthi lokho kuyasebenza

 Uma uthanda ukusebenzisa le software, ngingabonga kakhulu ngisho nange
 okuncane kakhulu [umnikelo wanyanga zonke nge-Patreon](https://www.patreon.com/cobbzilla)

 *Ngiyabonga!*

 ## Ukufakwa
 Faka usebenzisa `npm` noma `yarn` . Cishe ufuna inguqulo `lite` zonke lezi
 amafayela ahunyushwe e-README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Uma uwafuna ngempela amafayela e-README ngazo zonke izilimi, faka inguqulo egcwele:

    npm install mobiletto
    yarn add mobiletto

 ## Ukuqala Ngokushesha
 Isibonelo esifushane sisebenzisa umshayeli we-mobiletto `s3` .

 Le khodi izosebenza ngendlela efanayo uma umshayeli `b2` noma `local` .

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
 ## Ukusetshenziswa okuyisisekelo
 Isibonelo esibanzi kakhulu, esibonisa izici eziningi ezinikezwayo:

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

 ## Imethadatha
 Umyalo `metadata` ubuyisela imethadatha mayelana nokufakiwe kwesistimu eyodwa yefayela.
 Ngokufanayo, inani elibuyayo elisuka kumyalo `list` lwezinto zemethadatha.

 Into yemethadatha ibukeka kanje:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Isici `type` singaba `file` , `dir` , `link` , noma `special` .

 Kuye ngohlobo lomshayeli, umyalo `list` ungase ungabuyiseli zonke izinkambu. Izakhiwo `name` kanye `type`
 kufanele ahlale ekhona. Umyalo `metadata` olandelayo uzobuyisela zonke izici ezitholakalayo.

 ## Esinye isitayela sokungenisa
 Ngenisa imojuli enescoped ngokugcwele futhi usebenzise umsebenzi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Ukulondoloza isikhashana
 I-Mobiletto isebenza kahle kakhulu nge- <a href="https://redis.io">redis</a> cache.

 I-Mobiletto izozama ukuxhuma kusibonelo se-redis kokuthi 127.0.0.1:6379

 Ungakwazi ukukhipha okunye kwalokhu:
 * Setha i- `MOBILETTO_REDIS_HOST` env var, i-mobiletto xhuma lapha esikhundleni se-localhost
 * Setha i-env var ethi `MOBILETTO_REDIS_PORT` , le mbobo izosetshenziswa

 I-Mobiletto izogcina bonke okhiye bayo be- `_mobiletto__` . Ungakushintsha lokhu
 ngokusetha `MOBILETTO_REDIS_PREFIX` env var.

 Ungakwazi futhi ukusetha i-caching yokuxhumana ngakunye ngento `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Awufuni i-redis caching?
 Ukukhubaza: dlula `enabled: false` amanga` entweni yakho `opts.redisConfig` uma usungula uxhumano lwakho.

 Njengoba kuxoxiwe ngezansi, ukukhubaza ukugcinwa kwesikhashana kuzoba nomthelela omubi ekusebenzeni futhi kungenise izicelo eziningi
 endaweni yokugcina oyidingayo ngempela.

 ### Isiqondiso senqolobane
 **Isitoreji esibethelwe**: isitoreji esibethelwe sokufunda/sokubhala sihamba kancane kunokujwayelekile,
 kodwa ukuzulazula ezinhlwini zemibhalo (okwenziwa ezinye izinto) kubiza kakhulu. Ukusebenzisa inqolobane ye-redis
 izokunikeza ukuthuthukiswa okubalulekile kokusebenza.

 Inqolobane ezenzakalelayo iphephile, kodwa ayisebenzi kahle uma unemisebenzi eminingi yokubhala/ukususa.
 Noma yikuphi ukubhala noma ukususa umsebenzi kwenza yonke inqolobane ingavumelekile, kuqinisekisa ukuthi ukufundwa okulandelayo kuzobona
 izinguquko zakamuva.

 ### CLI amathuluzi
 Uma usebenzisa ithuluzi le-CLI elifana ne-[mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 nakanjani uzofuna ukuthi inqolobane ye-redis inikwe amandla, njengoba ihlala kuzo zonke izinxushunxushu zomyalo othi `mo` .

 ## Ukwenza isibuko

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Umyalo `mirror` wenza ikhophi yesikhathi esisodwa yawo wonke amafayela ukusuka ku-mobiletto eyodwa ukuya kwenye.
 Ayigijimi noma iyiphi inqubo yokugcina isibuko ngokuhamba kwesikhathi. Qalisa umyalo `mirror` futhi
 ukuvumelanisa noma yimaphi amafayela angekho.

 Inani lokubuyisela elisuka `mirror` liyinto elula enezinto zokubala zokuthi mangaki amafayela aphumelele
 kufakwe isibuko nokuthi mangaki amafayela abe namaphutha:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ISEXWAYISO: Ukulingisa amasethi amakhulu edatha kungase kudle isikhathi futhi kudle umkhawulokudonsa

 Nge- `mirror` call semantics kungase kudide ukuqonda ukuthi ubani
 umfundi nokuthi ubani umbhali. Kucabange njengesitatimende somsebenzi: "i-mobiletto engakwesokunxele"
 into eyabelwa yona (idatha efakwe esibukweni ebhaliwe), kanye "nesandla sokudla mobiletto" (the
 i-agumenti `mirror` ) inani elinikezwayo (idatha efakwe esibukweni iyafundwa).

 ## Ukubethela okusobala
 Nika amandla ukubethela kohlangothi lweklayenti okusobala:

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

 Kwenzakalani? Uhla lwemibhalo oluhlukile "lwe-directory entry" (dirent) (olubethelwe) lulandelela ukuthi yimaphi amafayela akulokho
 uhla lwemibhalo (oluyi-direct directory).
 * Umyalo `list` ufunda amafayela okufaka uhla lwemibhalo, uhlukanise indlela ngayinye esohlwini; bese ibuyisela imethadatha yefayela ngalinye
 * Imiyalo `list` kahle, ikakhulukazi kuzinkomba ezinenani elikhulu lamafayela
 * Umyalo othi `write` ubhala amafayela aqondile kuhla lwemibhalo lomzali ngamunye, ngokuphindaphindiwe; bese ebhala ifayela
 * `write` imiyalo izofaka u-O(N) ekubhaleni, ngo-N = ukujula ohlwini lwemibhalo
 * Umyalo othi `remove` ususa ifayela elihambisanayo, futhi umzali walo uma engenalutho, ngokuphindaphindiwe; bese ikhipha ifayela
 * Imiyalo `remove` -O(N) futhi okungenzeka kususwe okuningi, ngokujula kuka-N = ohlwini lwemibhalo
 * Imiyalo `remove` ephindaphindayo ezinhlelweni zamafayela ezinkulu nezijulile ingabiza

 Qaphela ukuthi noma ngabe ukubethela ohlangothini lweklayenti kunikwe amandla, isitha esibonakala ngokugcwele ohlangothini lwakho lweseva olubethelwe
 isitoreji, ngisho nangaphandle kokhiye, singakwazi ukubona ingqikithi yenani lezinkomba nokuthi mangaki amafayela ekuyinye, kanye ne
 umzamo othile, thola okunye noma sonke isakhiwo sohlu lwemibhalo.
 *Qaphela: Sebenzisa isakhiwo esiyisicaba ukuze uthole ukuphepha okungcono.*
 Isitha ngeke sazi amagama ezinkomba/amafayela ngaphandle uma sikwazi nokubethela kwakho
 ukhiye noma uqhekeze ngempumelelo ukubethela. Konke ukubhejwa kuyacishwa ngaleso sikhathi!

 ### Ukusebenza kanye nokugcinwa kwesikhashana
 Ukusebenza kusitoreji esibethelwe kungase kuhambe kancane. Ukufakwa kuhlu okuphindaphindayo nokususwa kungahamba kancane kakhulu.
 Ukulondoloza isikhashana nge-redis kusiza kakhulu, kodwa qaphela ukuthi inqolobane ithululwa kunoma yikuphi okulotshiweyo noma okukhishiwe.

 ## Ukuzungezisa ukhiye
 Dala i-mobiletto ngokhiye wakho omusha, bese ubonisa idatha endala kuyo:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Isixhumi esibonakalayo somshayeli
 Umshayeli yinoma yiliphi ifayela le-JS elithumela ngaphandle umsebenzi we-'storageClient' ngalesi siginesha:

    function storageClient (key, secret, opts)

 * `key` : iyunithi yezinhlamvu, ukhiye wakho we-API (komshayeli `local` lolu wuhlu lwemibhalo oluyisisekelo)
 * `secret` : iyunithi yezinhlamvu, imfihlo ye-API yakho (ingashiywa kumshayeli `local` )
 * `opts` ngamunye:
 * `local` , izici `fileMode` kanye `dirMode` zinquma ukuthi kwakhiwe kanjani amafayela amasha nezinkomba.
 * Ku `s3` , indawo `bucket` iyadingeka. Izakhiwo ozikhethela yilezi:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Into ebuyiselwa umsebenzi we-StoreClient kumele ichaze le misebenzi:

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

 ## Ukugawula
 I-Mobiletto isebenzisa [winston](https://www.npmjs.com/package/winston) ilabhulali yokugawula imithi.

 Amalogi **azoqukatha izindlela zamafayela nemilayezo yephutha, kodwa **angeke** aqukathe okhiye, izimfihlo,
 noma yiluphi olunye ulwazi lokucushwa kokuxhumana.

 ### Ileveli yelogi
 Sebenzisa `MOBILETTO_LOG_LEVEL` okuguquguqukayo kwemvelo ukuze usethe ileveli yelogi, usebenzisa eyodwa
 `npm` achazwe kokuthi [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Izinga elizenzakalelayo lithi `error` . Izinga le-verbose kakhulu lithi `silly` , nakuba okwamanje mobiletto
 ayingeni emazingeni angaphansi `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Ifayela lokungena
 Ngokuzenzakalelayo, logger ubhalela ikhonsoli. Ukuze uthumele amalogi efayeleni, setha `MOBILETTO_LOG_FILE`
 imvelo variable. Uma ungena kufayela, amalogi ngeke esabhalwa kukhonsoli.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ukuze uvale ukugawula:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
