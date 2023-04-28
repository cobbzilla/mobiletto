Mobiletto
 =========

 Ko Mobiletto he paparanga tangohanga rokiroki JavaScript, me te whakamunatanga taha-kiritaki marama.

 # Ihirangi
 * [He aha a Mobiletto?](#He aha-Mobiletto?)
 * [Tīmatatanga tere](#Tīmata-tere)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Putake](#Source)
 * [Tāuta](#Tāuta)
 * [Tautoko me te Putea](#Tautoko-me-Pūtea)
 * [Whakamahinga Taketake](#Whakamahinga Taketake)
 * [Metadata](#Metadata)
 * [Kāhua kawemai kē](#Alternate-import-style)
 * [Keteroki](#Keteroki)
 * [Whakaata](#Whakaata)
 * [Whakamunatanga Puata](#Whakamunatanga Puata)
 * [Te hurihanga matua](#Key-huringa)
 * [Atanga atekōkiri](#Atanga Atekōkiri)
 * [Takitaki](#Takitaki)

 # Panuitia tenei ki tetahi atu reo
 Kua whakamaoritia tenei tuhinga README.md, ma te [hokeylization](https://github.com/cobbzilla/hokeylization), ki roto
 **[nga reo katoa e tautokohia ana e Google Translate](https://cloud.google.com/translate/docs/languages)!**

 E mohio ana ahau ehara i te mea tino tika, engari ko taku tumanako he pai ake i te kore!

 [🇸🇦 Arapi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tiamana](../de/README.md)
 [🇺🇸 Ingarihi](../en/README.md)
 [🇪🇸 Paniora](../es/README.md)
 [🇫🇷 Wīwī](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Itari](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Potiti](../pt/README.md)
 [🇷🇺 Ruhia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Hainamana](../zh/README.md)


 **[📚 ... Nga Reo Katoa ...](../README.md)**
 ----

 ### He raru kei tenei whakamaoritanga o te README?
 Ko tenei whakamaoritanga o te [README] taketake(https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kei te he -- *e tino manakohia nga whakatikatika!* Tukuna mai he [tono toia ki a GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ki te kore koe e pai ki te mahi i tera, [whakatuwhera i tetahi take](https://github.com/cobbzilla/mobiletto/issues)

 Ina hanga e koe he take GitHub hou mo te whakamaoritanga, mahia:
 * whakauruhia te URL wharangi (kape/whakapiri mai i te pae wahitau tirotiro)
 * whakaurua te tuhinga tika e he ana (tārua/whakapiri mai i te kaitirotiro)
 * whakaahuatia mai he aha te he -- kei te he te whakamaoritanga? kua pakaru te whakatakotoranga?
 * tuku mai he whakaaro mo te whakamaoritanga pai ake, me pehea ranei te whakatakotoranga tika o te tuhinga
 * **Mauruuru!**

 ## He aha a Mobiletto?

 ### Kia ora te kaihoko maukati!
 Ko nga momo kaiwhakarato rokiroki kapua he API hotokore. Ahakoa te hunga e ngana ana ki te "hototahi S3"
 he whanonga motuhake.

 Ina whiriwhiria e koe tetahi kaihoko rokiroki mo to taupānga, mena ka tohu tika koe ki to API, to taupānga
 kei te whakawhirinaki inaianei ki tera ratonga. Ka haere te wa, ka whakaemihia te waehere, ka huri nga kaihoko
 e kore e taea. Nau mai ki te ao ngahau o te raka kaihoko!

 I hangaia a Mobiletto ki te whakaoti i tenei raru. Ma te whakawaehere i to taupānga ki te API a mobiletto, ka taea e koe
 Hurihia nga kaiwhakarato rokiroki me te mohio ka rite te ahua o te paparanga rokiroki o to taupānga.

 ### He whakamatautau nui
 Ka whakamatautauhia nga taraiwa katoa mo te whanonga rite me te 60+ whakamatautau mo ia taraiwa.
 Ka whakamatauhia e matou nga taraiwa katoa me nga huinga katoa o:
 * Whakamunatanga: kua whakahohea me te mono
 * Redis cache: kua whakahohea me te mono

 Ma tenei huarahi ka mau te rongo ki a maatau ka rite tonu te mahi a mobiletto ahakoa ko wai te taraiwa e whakamahia ana e koe,
 ahakoa ka taea e koe te keteroki me te whakamunatanga/ranei.

 ### Tautoko taraiwa
 Nga taraiwa rokiroki Mobiletto o naianei:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : pūnaha kōnae rohe

 *Ko nga takoha hei tautoko i te maha atu o nga kaiwhakarato rokiroki kapua e tino manakohia ana!*

 ## mobiletto-cli
 Ko te Mobiletto ka whakamahia hei whare pukapuka e etahi atu waehere JavaScript.

 Hei mahi me te mobiletto i te raina whakahau, whakamahia [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Puna
 * [mobiletto i runga i GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Tautoko me te Putea
 Kei te ngana ahau ki te noho hei kaiwhakawhanake rorohiko puna tuwhera ngaio. I mahi ahau i roto
 te ahumahi rorohiko mo nga tau maha, kua timata ahau i nga kamupene angitu me te hoko atu ki nga kamupene a te iwi.
 No tata nei ka ngaro taku mahi, a karekau he mahi ke atu i te rarangi

 Na ka ngana ahau ki te tuhi i nga raupaparorohiko awhina me te kite mena ka mahi tera

 Mena he pai ki a koe te whakamahi i tenei rorohiko, ka tino mihi ahau mo te
 iti rawa [koha-marama ma Patreon](https://www.patreon.com/cobbzilla)

 *Mauruuru!*

 ## Tāutanga
 Tāuta mā te whakamahi i te `npm` , i te `yarn` miro` ranei. Kei te pirangi pea koe ki te putanga `lite` e uru katoa nga
 i whakamaoritia nga konae README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Mena kei te pirangi koe ki nga konae README i roto i nga reo katoa, whakauruhia te putanga katoa:

    npm install mobiletto
    yarn add mobiletto

 ## Tīmata Tere
 He tauira poto ma te whakamahi i te taraiwa mobiletto `s3` .

 He rite tonu te mahi o tenei waehere mena he `b2`, he `b2` ranei te `local` .

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
 ## Whakamahinga taketake
 He tauira tino whanui ake, e whakaatu ana i te nuinga o nga ahuatanga e tukuna ana:

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

 ## Raraunga meta
 Ko te tono `metadata` he whakahoki metadata mo te whakaurunga punaha konae kotahi.
 Waihoki, ko te uara whakahoki mai i te tono `list` he huinga ahanoa metadata.

 He penei te ahua o te ahanoa metadata:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ko te āhuatanga `type` ka taea te `file` , `dir` , `link` , te `special` ranei.

 I runga i te momo atekōkiri, karekau pea te tono `list` e whakahoki āpure katoa. Ko te `name` ' me `type` āhuatanga
 me noho tonu. Ma te tono `metadata` ka whakahoki mai i nga taonga katoa e waatea ana.

 ## Kāhua kawemai kē
 Kawemai i te kōwae hōkai-katoa ka whakamahi i te mahi `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Keteroki
 He pai ake te mahi a Mobiletto me te keteroki <a href="https://redis.io">redis</a> .

 Ka ngana a Mobiletto ki te hono atu ki tetahi tauira redis i te 127.0.0.1:6379

 Ka taea e koe te whakakore i tetahi o enei:
 * Tautuhia te `MOBILETTO_REDIS_HOST` env var, mobiletto hono ki konei hei utu mo te localhost
 * Tautuhia te `MOBILETTO_REDIS_PORT` env var, ka whakamahia tenei tauranga

 Ka rokirokia e Mobiletto ana taviri redis katoa me te prefix `_mobiletto__` . Ka taea e koe te huri i tenei
 mā te tautuhi i te `MOBILETTO_REDIS_PREFIX` env var.

 Ka taea hoki te whakarite keteroki hononga-hononga me te ahanoa `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Kaore koe e hiahia ki te keteroki redis?
 Hei mono: tukuna `enabled: false` ki to ahanoa `opts.redisConfig` ina whakau koe i to hononga.

 Ka rite ki te korero i raro nei, ko te whakakore i te keteroki ka pa he kino ki te mahi me te nui ake o nga tono
 ki te rokiroki e tino hiahia ana koe.

 ### Arataki keteroki
 **Pupuri whakamuna**: te panui/tuhi he puhoi ake te putunga whakamuna i te tikanga,
 engari ko te whakatere huri noa i nga raarangi (he mahi etahi) he tino utu. Te whakamahi i te keteroki redis
 ka hoatu e koe he whakanui mahi nui.

 He haumaru te keteroki taunoa, engari kare e pai ana mena he maha nga mahi tuhi/tango.
 Ko nga mahi tuhi, tango ranei ka whakakore i te keteroki katoa, me te whakarite ka kite nga panui ka whai ake
 huringa hou.

 ### taputapu CLI
 Mena kei te whakamahi koe i tetahi taputapu CLI penei i a [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Ka tino hiahia koe kia whakahohea te keteroki redis, na te mea ka mau tonu i nga tono o te whakahau `mo` .

 ## Whakaata

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Ko te whakahau `mirror` he mahi kape kotahi-wa o nga konae katoa mai i tetahi waea pūkoro ki tetahi atu.
 Karekau he tukanga hei pupuri i te whakaata i roto i te waa. Whakahaerehia ano te tono `mirror`
 ki te tukutahi i nga konae ngaro.

 Ko te uara whakahoki mai i `mirror` ' he ahanoa ngawari me nga porotiti mo te maha o nga konae i angitu
 i whakaatahia me te maha o nga konae i hapa:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WHAKATŪPATO: Ko te whakaata i nga huinga raraunga nui ka pau te waa me te whakapau kaha

 Ki te `mirror` karanga semantics i etahi wa ka raruraru te mohio ko wai te
 te kaipānui me wai te kaituhi. Whakaarohia he korero taumahi: te "maui-maui mobiletto"
 Ko te mea e tukuna ana ki te (whakaata i nga raraunga kua tuhia), me te "matau-matau mobiletto" (te
 tohenga ki te tikanga `mirror` ) ko te uara e tautapa ana (ka panuitia nga raraunga whakaata).

 ## Whakamunatanga marama
 Whakahohea te whakamunatanga taha-kiritaki marama:

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

 Kei te aha? He whaiaronga "whakaurunga whaiaronga" (rere) motuhake (whakamuna) e whai ana he aha nga konae kei roto
 whaiaronga (aka te whaiaronga whaiaro).
 * Ko te tono `list` ka panui i nga konae whakaurunga whaiaronga, ka wetemuna ia ara kua whakarārangitia; ka whakahoki metadata mo ia kōnae
 * Ko nga tono `list` he koretake ake, ina koa mo nga whaiaronga he maha nga konae
 * Ko te tono `write` he tuhi i nga konae rereke ki roto i te raarangi whaiaronga o ia matua, he recursively; ka tuhia te kōnae
 * Ko nga tono `write` ka puta he O(N) tuhi, me te N = te hohonu i roto i te rarangi whaiaronga.
 * Ko te tono `remove` ka tango i te konae dirent e rite ana, me tona matua ki te putua, ka hoki whakamuri; ka tango i te konae
 * Ko nga tono `remove` -kore ka puta te O(N) panui me te maha o nga mukunga, me te N = te hohonu i roto i te raarangi whaiaronga.
 * He utu nui nga whakahau `remove` i runga i nga punaha konae nui me te hohonu

 Kia mahara ahakoa kua whakahohea te whakamunatanga taha-kiritaki, he hoa riri e tino kitea ana ki to taha-tumau whakamuna.
 te rokiroki, ahakoa kaore he ki, ka taea tonu te kite i te tapeke o nga raarangi whaiaronga me te maha o nga konae kei roto i ia waahanga, me era atu
 kia kaha, kimihia etahi, te katoa ranei o te hanganga katoa o te rarangi whaiaronga.
 *Tuhipoka: Whakamahia he hanganga ahua papatahi kia pai ake te haumarutanga.*
 Kare te hoa riri e mohio ki nga ingoa o nga raarangi me nga konae mena ka mohio ano ratou ki to whakamunatanga
 kī, i momoho rānei te whakamunatanga. Ka mutu nga peti katoa!

 ### Mahinga me te keteroki
 Ko nga mahi i runga i te rokiroki whakamunatia ka puhoi. Ko nga rarangi recursive me nga tangohanga ka tino puhoi.
 He nui te awhina o te keteroki ma te redis, engari kia mohio kei te peehia te keteroki ki runga i nga tuhi ka tangohia ranei.

 ## Te hurihanga matua
 Waihangatia he waea pūkoro me to taviri hou, ka whakaatahia nga raraunga tawhito ki roto:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Atanga taraiwa
 Ko te taraiwa he konae JS ka kaweake i te mahi 'storageClient' me tenei waitohu:

    function storageClient (key, secret, opts)

 * `key` : he aho, ko to API matua (mo te atekōkiri `local` koinei te whaiaronga turanga)
 * `secret` : he aho, to API ngaro (ka taea te waiho mo te taraiwa `local` )
 * `opts` : he ahanoa, ko ngā āhuatanga mō ia atekōkiri:
 * Mo te `local` , ma nga `fileMode` me te `dirMode` e whakatau me pehea te hanga i nga konae hanga hou me nga whaiaronga.
 * Mo `s3` , me hiahia te taonga `bucket` . Ko nga ahuatanga whiriwhiri ko:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ko te ahanoa ka whakahokia mai e te mahi storageClient me tautuhi enei mahi:

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

 ## Takitaki
 Ka whakamahi a Mobiletto i te whare pukapuka takiuru [winston](https://www.npmjs.com/package/winston).

 Kei roto i nga rangitaki ** nga ara konae me nga karere hapa, engari ka **kaore e mau nga taviri, nga mea ngaro,
 etahi atu korero whirihoranga hononga ranei.

 ### Taumata rangitaki
 Whakamahia te taurangi taiao `MOBILETTO_LOG_LEVEL` ki te tautuhi i te taumata rangitaki, ma te whakamahi i tetahi
 o nga taumata `npm` kua tautuhia ki [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ko te taumata taunoa ko `error` . Ko te taumata tino kupu ko te `silly` , ahakoa he motini i tenei wa
 karekau e takiuru ki nga taumata i raro iho i `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Kōnae rangitaki
 Ma te taunoa, ka tuhi te kairakau ki te papatohu. Hei tuku rangitaki ki tetahi konae, tautuhia te `MOBILETTO_LOG_FILE`
 taurangi taiao. I te wa e takiuru ana ki tetahi konae, ka kore e tuhia nga raarangi ki te papatohu.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Hei whakaweto i te takiuru:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
