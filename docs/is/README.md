Mobiletto
 ==========

 Mobiletto er JavaScript geymsluádráttarlag, með valfrjálsum gagnsæjum dulkóðun viðskiptavinarhliðar.

 # Innihald
 * [Af hverju Mobiletto?](#Why-Mobiletto?)
 * [Fljót byrjun](#Fljótbyrjun)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Heimild](#Heimild)
 * [Uppsetning](#Uppsetning)
 * [Support and Funding](#Support-and-Funding)
 * [Grunnnotkun](#Grunnnotkun)
 * [Lýsigögn](#Lýsigögn)
 * [Vari innflutningsstíll](#Alternate-import-style)
 * [Caching](#Caching)
 * [speglun](#speglun)
 * [Gegnsæ dulkóðun](#Gegnsæ dulkóðun)
 * [Snúningur lykla](#snúningur lykla)
 * [ökumannsviðmót](#ökumannsviðmót)
 * [Logging](#Logging)

 # Lestu þetta á öðru tungumáli
 Þetta README.md skjal hefur verið þýtt, með [hokeylization](https://github.com/cobbzilla/hokeylization), yfir á
 **[öll tungumál studd af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ég er viss um að það er ekki fullkomið, en ég vona að það sé betra en ekkert!

 [🇸🇦 arabíska](../ar/README.md)
 [🇧🇩 bengalska](../bn/README.md)
 [🇩🇪 þýska](../de/README.md)
 [🇺🇸 enska](../en/README.md)
 [🇪🇸 spænska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindí](../hi/README.md)
 [🇮🇩 indónesíska](../id/README.md)
 [🇮🇹 ítalska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 kóreska](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 pólska](../pl/README.md)
 [🇧🇷 portúgalska](../pt/README.md)
 [🇷🇺 rússneska](../ru/README.md)
 [🇰🇪 svahílí](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkneska](../tr/README.md)
 [🇵🇰 Úrdú](../ur/README.md)
 [🇻🇳 víetnamska](../vi/README.md)
 [🇨🇳 kínverska](../zh/README.md)


 **[📚 ... Öll tungumál ...](../README.md)**
 ----

 ### Er vandamál með þessa þýðingu á README?
 Þessi tiltekna þýðing á upprunalegu [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 gæti verið gölluð -- *leiðréttingar eru mjög vel þegnar!* Vinsamlegast sendu [dragbeiðni á GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 eða ef þú ert ekki sátt við að gera það, [opnaðu mál](https://github.com/cobbzilla/mobiletto/issues)

 Þegar þú býrð til nýtt GitHub tölublað um þýðingu, vinsamlegast gerðu:
 * láttu vefslóð síðunnar fylgja (afritaðu/límdu af veffangastiku vafrans)
 * láttu nákvæmlega texta sem er rangur fylgja með (afrita/líma úr vafra)
 * vinsamlegast lýstu hvað er rangt -- er þýðingin röng? er sniðið eitthvað bilað?
 * komdu með tillögu um betri þýðingu eða hvernig textinn ætti að vera rétt sniðinn
 * **Þakka þér fyrir!**

 ## Hvers vegna Mobiletto?

 ### Bless söluaðili lokun!
 Hinar ýmsu skýjageymsluveitur eru með ósamrýmanleg API. Jafnvel þeir sem leitast við „S3 samhæfni“
 hafa sérkennilega hegðun.

 Þegar þú velur tiltekinn geymslusöluaðila fyrir appið þitt, ef þú kóðar beint í API þeirra, appið þitt
 er nú háð þeirri þjónustu. Eftir því sem tíminn líður og kóði safnast upp, breytast framleiðendur
 sífellt óviðunandi. Velkomin í skemmtilegan heim innláns söluaðila!

 Mobiletto var hannað til að leysa þetta vandamál. Með því að kóða forritið þitt í API fyrir mobiletto geturðu auðveldlega
 skiptu um geymsluþjónustu og veistu að geymslulag appsins þíns mun hegða sér eins.

 ### Umfangsmiklar prófanir
 Allir ökumenn eru prófaðir fyrir eins hegðun með 60+ prófum fyrir hvern ökumann.
 Við prófum alla ökumenn með hverri samsetningu af:
 * Dulkóðun: bæði virkt og óvirkt
 * Redis skyndiminni: bæði virkt og óvirkt

 Þessi nálgun veitir okkur hugarró að mobiletto hegðar sér eins óháð því hvaða bílstjóri þú notar,
 og óháð því hvort þú virkjar skyndiminni og/eða dulkóðun.

 ### Stuðningur við ökumenn
 Núverandi Mobiletto geymslureklar:
 * `s3` : Amazon S3
 * `b2` : Bakslag B2
 * `local` : staðbundið skráarkerfi

 *Framlög til að styðja við fleiri skýjageymsluveitur eru mjög vel þegnar!*

 ## mobiletto-cli
 Mobiletto er ætlað að vera notað sem bókasafn með öðrum JavaScript kóða.

 Til að vinna með mobiletto á skipanalínunni, notaðu [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Heimild
 * [mobiletto á GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto á npm](https://www.npmjs.com/package/mobiletto)

 ## Stuðningur og fjármögnun
 Ég er að reyna að vera faglegur opinn hugbúnaðarframleiðandi. Ég hef verið að vinna í
 hugbúnaðariðnaðinum í mörg ár, ég hef stofnað farsæl fyrirtæki og selt þau til opinberra fyrirtækja.
 Nýlega missti ég vinnuna mína og ég er í rauninni ekki með neina aðra vinnu í röðinni

 Svo ég ætla að prófa að skrifa gagnlegan hugbúnað og sjá hvort það virkar

 Ef þú hefur gaman af því að nota þennan hugbúnað, væri ég mjög þakklátur fyrir jafnvel
 minnsta [mánaðarlegt framlag í gegnum Patreon](https://www.patreon.com/cobbzilla)

 *Þakka þér fyrir!*

 ## Uppsetning
 Settu upp með því að nota `npm` eða `yarn` . Þú vilt líklega `lite` útgáfuna sem inniheldur ekki alla
 þýddar README skrár:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ef þú vilt virkilega hafa README skrárnar á hverju tungumáli skaltu setja upp heildarútgáfuna:

    npm install mobiletto
    yarn add mobiletto

 ## Fljót byrjun
 Stutt dæmi um að nota mobiletto `s3` bílstjórann.

 Þessi kóði myndi keyra eins ef ökumaðurinn væri `b2` eða `local` .

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
 ## Grunnnotkun
 Miklu víðtækara dæmi sem sýnir flesta eiginleika sem í boði eru:

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

 ## Lýsigögn
 Skipunin `metadata` skilar lýsigögnum um eina skráakerfisfærslu.
 Sömuleiðis er skilgildið frá skipuninni `list` fylki lýsigagnahluta.

 Lýsigagnahlutur lítur svona út:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Eiginleikinn `type` type` getur verið `file` , `dir` , `link` eða `special` .

 Það fer eftir tegund ökumanns, `list` skipun getur ekki skilað öllum reitum. Eiginleikar `name` og `type` gerð“
 ætti alltaf að vera til staðar. Síðari `metadata` skipun mun skila öllum tiltækum eiginleikum.

 ## Annar innflutningsstíll
 Flyttu inn fullkomna eininguna og notaðu `connect` aðgerðina:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Skyndiminni
 Mobiletto virkar best með <a href="https://redis.io">redis</a> skyndiminni.

 Mobiletto mun reyna að tengjast redis dæmi á 127.0.0.1:6379

 Þú getur hnekið öðru hvoru af þessu:
 * Stilltu `MOBILETTO_REDIS_HOST` env var, mobiletto tengja hér í stað staðbundinnar gestgjafa
 * Stilltu `MOBILETTO_REDIS_PORT` env var, þetta port verður notað

 Mobiletto mun geyma alla endurupptökulykla sína með forskeytinu `_mobiletto__` . Þú getur breytt þessu
 með því að stilla `MOBILETTO_REDIS_PREFIX` env var.

 Þú getur líka stillt skyndiminni fyrir hverja tengingu með `opts.redisConfig` hlutnum:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Viltu ekki endurupptöku skyndiminni?
 Til að slökkva á: `enabled: false` í `opts.redisConfig` hlutnum þínum þegar þú kemur á tengingu þinni.

 Eins og fjallað er um hér að neðan mun slökkva á skyndiminni hafa slæm áhrif á frammistöðu og fá fleiri beiðnir
 til geymslu sem þú þarft virkilega á að halda.

 ### Leiðbeiningar um skyndiminni
 **Dulkóðuð geymsla**: að lesa/skrifa dulkóðuð geymsla er aðeins hægari en venjulega,
 en að fletta um möppur (sem sumir hlutir gera) er frekar dýrt. Að nota redis skyndiminni
 mun gefa þér verulegan árangur.

 Sjálfgefið skyndiminni er öruggt, en virkar ekki vel ef þú ert með mikið af skrif-/fjarlægingaraðgerðum.
 Sérhver skrif- eða fjarlægðaraðgerð ógildir allt skyndiminni og tryggir að síðari lestur sjái
 nýjustu breytingar.

 ### CLI verkfæri
 Ef þú ert að nota CLI tól eins og [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 þú munt örugglega vilja að redis skyndiminni sé virkt, þar sem það endist yfir ákall um `mo` skipunina.

 ## Speglun

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` framkvæmir einu sinni afrit af öllum skrám frá einum farsíma til annars.
 Það keyrir ekkert ferli til að viðhalda speglinum með tímanum. Keyrðu aftur `mirror` skipunina
 til að samstilla allar skrár sem vantar.

 Skilagildið frá `mirror` er einfaldur hlutur með teljara fyrir hversu margar skrár tókst
 speglaðar og hversu margar skrár voru með villur:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 VIÐVÖRUN: Það getur verið mjög tímafrekt og bandbreidd að spegla stór gagnasöfn

 Með merkingarfræði `mirror` kalla getur það stundum verið ruglingslegt að skilja hver er
 lesanda og hver er rithöfundurinn. Ímyndaðu þér það eins og verkefnayfirlýsingu: „vinstri farsímann“
 er hluturinn sem verið er að úthluta til (speglað gögn skrifuð), og "hægri hönd farsíma" (the
 rök fyrir `mirror` aðferðina) er gildið sem verið er að úthluta (speglað gögn eru lesin).

 ## Gegnsætt dulkóðun
 Virkja gagnsæja dulkóðun viðskiptavinarhliðar:

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

 Hvað er að gerast? Sérstök „skráafærsla“ (dirent) möppu (dulkóðuð) rekur hvaða skrár eru í henni
 möppu (aka beina skráin).
 * `list` skipunin les möppuskrárnar, afkóðar hverja slóð sem skráð er; skilar síðan lýsigögnum fyrir hverja skrá
 * `list` skipanir eru óhagkvæmari, sérstaklega fyrir möppur með miklum fjölda skráa
 * `write` skipunin skrifar óhreinar skrár í leiðbeiningaskrá hvers foreldris, endurkvæmt; skrifar síðan skrána
 * `write`
 * `remove` skipunin fjarlægir samsvarandi dirent skrá, og foreldri hennar ef tóm, endurkvæmt; fjarlægir síðan skrána
 * `remove` skipanir munu hafa O(N) lestur og hugsanlega eins margar eyðingar, með N = dýpt í möppustigveldinu
 * Endurkvæmar `remove` skipanir á stórum og djúpum skráarkerfum geta verið dýrar

 Athugaðu að jafnvel með dulkóðun viðskiptavinarhliðar virkt, andstæðingur með fullan sýnileika á dulkóðuðu miðlarahliðinni þinni
 geymsla, jafnvel án lykils, getur samt séð heildarfjölda möppum og hversu margar skrár eru í hverri, og með
 smá viðleitni, uppgötva að hluta eða öllu heildarskipulagi möppustigveldisins.
 *Athugið: Notaðu tiltölulega flata uppbyggingu fyrir betra öryggi.*
 Andstæðingurinn myndi ekki vita nöfnin á möppunum/skránum nema þeir vissu líka um dulkóðunina þína
 lykil eða hafði á annan hátt brotið dulkóðunina. Þá eru öll veðmál slökkt!

 ### Afköst og skyndiminni
 Aðgerðir á dulkóðuðu geymslurými geta verið hægar. Endurkvæmar skráningar og fjarlægingar geta verið mjög hægar.
 Skyndiminni í gegnum Redis hjálpar gríðarlega, en athugaðu að skyndiminni er tæmt við skrif eða fjarlægingu.

 ## Snúningur lykla
 Búðu til mobiletto með nýja lyklinum þínum og speglaðu síðan gömlu gögnin inn í hann:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Bílstjóri tengi
 Bílstjóri er hvaða JS skrá sem er sem flytur út 'storageClient' aðgerð með þessari undirskrift:

    function storageClient (key, secret, opts)

 * `key` : strengur, API lykillinn þinn (fyrir `local` er þetta grunnskráin)
 * `secret` leyndarmál`: strengur, API leyndarmálið þitt (hægt að sleppa fyrir `local` rekla)
 * `opts` : hlutur, eiginleikarnir eru fyrir hvern ökumann:
 * Fyrir `local` `fileMode` og `dirMode` eiginleikar hvernig nýjar skrár og möppur eru búnar til
 * Fyrir `s3` “ er `bucket` eignin nauðsynleg. Valfrjálsir eiginleikar eru:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Hluturinn sem storageClient aðgerðin skilar verður að skilgreina þessar aðgerðir:

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

 ## Skráning
 Mobiletto notar [winston](https://www.npmjs.com/package/winston) skráningarsafnið.

 Dagskrár **mun** innihalda skráarslóðir og villuskilaboð, en munu **aldrei** innihalda lykla, leyndarmál,
 eða aðrar upplýsingar um tengingarstillingar.

 ### Log stig
 Notaðu `MOBILETTO_LOG_LEVEL` umhverfisbreytuna til að stilla logstigið með því að nota eina
 af `npm` sem eru skilgreind í [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Sjálfgefið stig er `error` . `silly` , þó að það sé nú mobiletto
 skráir sig ekki á stigum fyrir neðan `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Notkunarskrá
 Sjálfgefið er að skógarhöggsmaðurinn skrifar á stjórnborðið. Til að senda annála í skrá skaltu stilla `MOBILETTO_LOG_FILE`
 umhverfisbreytu. Þegar þú skráir þig inn í skrá verða annálar ekki lengur skrifaðar á stjórnborðið.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Til að slökkva á skráningu:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
