Mobiletto
 =========

 Ang Mobiletto usa ka JavaScript storage abstraction layer, nga adunay opsyonal nga transparent nga client-side encryption.

 # Mga sulud
 * [Nganong Mobiletto?](#Why-Mobiletto?)
 * [Dali nga pagsugod](#Dali nga pagsugod)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Pag-instalar](#Pag-instalar)
 * [Pagsuporta ug Pagpondo](#Suporta-ug-Pagpondo)
 * [Basic nga paggamit](#Basic-usage)
 * [Metadata](#Metadata)
 * [Alternate import style](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparent nga encryption](#Transparent-encryption)
 * [Pagtuyok sa yawe](#Rotation sa yawe)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Basaha kini sa laing pinulongan
 Kining README.md nga dokumento gihubad, pinaagi sa [hokeylization](https://github.com/cobbzilla/hokeylization), ngadto sa
 **[matag pinulongan gisuportahan sa Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sigurado ko nga dili kini perpekto, apan nanghinaut ko nga kini mas maayo kaysa wala!

 [🇸🇦 Arabiko](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Kinatsila](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italyano](../it/README.md)
 [🇯🇵 Hapon](../ja/README.md)
 [🇰🇷 Koreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuges](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Tanang Pinulongan ...](../README.md)**
 ----

 ### Aduna bay problema sa kini nga paghubad sa README?
 Kining partikular nga hubad sa orihinal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mahimong depekto -- *ang mga pagkorihir kay abi-abi kaayo!* Palihog ipadala ug [pull request sa GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o kung dili ka komportable nga buhaton kana, [ablihi ang usa ka isyu](https://github.com/cobbzilla/mobiletto/issues)

 Kung maghimo ka usa ka bag-ong isyu sa GitHub bahin sa usa ka paghubad, palihug buhata:
 * Ilakip ang URL sa panid (kopya / idikit gikan sa address bar sa browser)
 * Ilakip ang eksakto nga teksto nga sayup (kopya / idikit gikan sa browser)
 * palihug ihulagway kung unsa ang sayup -- sayop ba ang paghubad? naguba ba ang pag-format sa usa ka paagi?
 * malulotong maghatag ug sugyot sa mas maayong hubad, o kon sa unsang paagi ang teksto kinahanglang hustong maporma
 * **Salamat!**

 ## Nganong Mobiletto?

 ### Goodbye vendor lock-in!
 Ang lain-laing mga cloud storage providers adunay mga dili compatible nga mga API. Bisan kadtong naningkamot alang sa "S3 compatibility"
 adunay idiosyncratic nga mga kinaiya.

 Kung nagpili ka usa ka partikular nga tigbaligya sa pagtipig alang sa imong app, kung direkta ka nga mag-code sa ilang API, ang imong app
 nagdepende na karon sa maong serbisyo. Sa paglabay sa panahon ug ang code natipon, ang pagbag-o sa mga tigbaligya mahimong
 nagkadaghan nga dili mapadayon. Welcome sa makalingaw nga kalibutan sa vendor lock-in!

 Gidisenyo ang Mobiletto aron masulbad kini nga problema. Pinaagi sa pag-coding sa imong app sa mobiletto's API, dali ka
 usba ang mga taghatag sa pagtipig ug hibal-i nga ang layer sa pagtipig sa imong app parehas nga molihok.

 ### Daghang pagsulay
 Ang tanan nga mga drayber gisulayan alang sa parehas nga pamatasan nga adunay 60+ nga mga pagsulay alang sa matag drayber.
 Gisulayan namon ang tanan nga mga drayber sa matag kombinasyon sa:
 * Pag-encrypt: pareho nga gi-enable ug gi-disable
 * Redis cache: pareho nga gi-enable ug gi-disable

 Kini nga pamaagi naghatag kanato og kalinaw sa hunahuna nga ang mobiletto molihok nga parehas bisan unsa nga drayber ang imong gigamit,
 ug dili igsapayan kung mahimo nimo ang pag-cache ug/o pag-encrypt.

 ### Suporta sa drayber
 Kasamtangang mga drayber sa pagtipig sa Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokal nga filesystem

 *Ang mga kontribusyon sa pagsuporta sa mas daghang cloud storage providers giabiabi kaayo!*

 ## mobiletto-cli
 Ang Mobiletto gituyo nga gamiton isip librarya sa ubang JavaScript code.

 Aron magtrabaho sa mobiletto sa command-line, gamita ang [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Tinubdan
 * [mobiletto sa GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto sa npm](https://www.npmjs.com/package/mobiletto)

 ## Suporta ug Pagpundo
 Ako naningkamot nga mahimong usa ka propesyonal nga open source software developer. Nagtrabaho ko sa
 ang industriya sa software sulod sa daghang katuigan, nagsugod ko og malampusong mga kompanya ug gibaligya kini sa mga publikong kompanya.
 Bag-o lang nawad-an kog trabaho, ug wala na gyud koy laing trabaho nga nakalinya

 Mao nga sulayan nako ang pagsulat sa makatabang nga software ug tan-awon kung kini molihok

 Kung malingaw ka sa paggamit niini nga software, mapasalamaton kaayo ko bisan sa
 pinakagamay [binulan nga kontribusyon pinaagi sa Patreon](https://www.patreon.com/cobbzilla)

 *Salamat!*

 ## Pag-instalar
 I-install gamit ang `npm` o `yarn` . Tingali gusto nimo ang `lite` nga bersyon nga wala maglakip sa tanan nga
 gihubad nga README nga mga file:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Kung gusto gyud nimo ang README nga mga file sa matag lengguwahe, i-install ang tibuuk nga bersyon:

    npm install mobiletto
    yarn add mobiletto

 ## Dali nga Pagsugod
 Usa ka mubo nga pananglitan gamit ang mobiletto `s3` driver.

 Kini nga code modagan nga parehas kung ang drayber `b2` o `local` .

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
 ## Basic nga paggamit
 Usa ka labi ka halapad nga pananglitan, nga nagpakita sa kadaghanan sa mga bahin nga gitanyag:

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
 Ang `metadata` sugo nagbalik sa metadata mahitungod sa usa ka filesystem entry.
 Ingon usab, ang pagbalik nga kantidad gikan sa `list` sugo usa ka han-ay sa metadata nga mga butang.

 Ang usa ka butang nga metadata ingon niini:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ang `type` property mahimong `file` , `dir` , `link` , o `special` .

 Depende sa matang sa drayber, ang usa ka `list` nga sugo mahimong dili ibalik ang tanang field. Ang `name` ug `type` nga mga kabtangan
 kinahanglan nga anaa kanunay. Ang sunod nga `metadata` sugo ibalik ang tanan nga magamit nga kabtangan.

 ## Kapuli nga istilo sa import
 I-import ang fully-scoped module ug gamita ang `connect` function:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Pag-cache
 Ang Mobiletto labing maayo sa usa ka <a href="https://redis.io">redis</a> cache.

 Ang Mobiletto mosulay sa pagkonektar sa usa ka redis nga pananglitan sa 127.0.0.1:6379

 Mahimo nimong i-override ang bisan hain niini:
 * Ibutang ang `MOBILETTO_REDIS_HOST` env var, mobiletto magkonektar dinhi imbes nga localhost
 * Ibutang ang `MOBILETTO_REDIS_PORT` env var, kini nga pantalan gamiton

 Itago sa Mobiletto ang tanan nga mga yawe sa redis nga adunay prefix nga `_mobiletto__` . Mahimo nimong usbon kini
 pinaagi sa pagbutang sa `MOBILETTO_REDIS_PREFIX` env var.

 Mahimo usab nimong itakda ang caching matag koneksyon gamit ang butang nga `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Dili gusto redis caching?
 Aron ma-disable: ipasa `enabled: false` sa imong `opts.redisConfig` nga butang kung imong maestablisar ang imong koneksyon.

 Sama sa gihisgutan sa ubos, ang pag-disable sa caching adunay dili maayo nga epekto sa pasundayag ug adunay daghang mga hangyo
 sa pagtipig nga kinahanglan gyud nimo.

 ### Giya sa pag-cache
 **Naka-encrypt nga storage**: ang pagbasa/pagsulat sa na-encrypt nga storage mas hinay lang kay sa normal,
 apan ang pag-navigate sa mga direktoryo (nga gibuhat sa pipila ka mga butang) medyo mahal. Paggamit sa redis cache
 maghatag kanimo usa ka hinungdanon nga pagpauswag sa pasundayag.

 Ang default nga cache luwas, apan dili maayo kung ikaw adunay daghang mga operasyon sa pagsulat / pagtangtang.
 Ang bisan unsang pagsulat o pagtangtang nga operasyon dili balido sa tibuuk nga cache, pagsiguro nga ang mga sunod nga pagbasa makakita sa
 pinakabag-o nga mga pagbag-o.

 ### CLI nga mga himan
 Kung naggamit ka ug CLI tool sama sa [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 siguradong gusto nimo nga ma-enable ang redis cache, tungod kay molungtad kini sa mga pag-ampo sa `mo` mando.

 ## Pagsalamin

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Ang `mirror` sugo naghimo sa usa ka higayon nga kopya sa tanang mga file gikan sa usa ka mobiletto ngadto sa lain.
 Wala kini nagpadagan sa bisan unsang proseso aron mapadayon ang salamin sa paglabay sa panahon. Dagan pag-usab ang `mirror` sugo
 aron ma-synchronize ang bisan unsang nawala nga mga file.

 Ang gibalik nga bili gikan sa `mirror` kay usa ka yano nga butang nga adunay mga counter kung pila ka file ang malampuson
 gisalamin ug pila ka mga file ang adunay mga sayup:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WARNING: Ang pagsalamin sa dagkong mga set sa datos mahimong makahurot ug panahon ug kusog sa bandwidth

 Uban sa `mirror` tawag semantics kini usahay makalibog sa pagsabut kon kinsa ang
 magbabasa ug kinsa ang magsusulat. Hunahunaa kini sama sa usa ka pahayag sa assignment: ang "left-hand mobiletto"
 mao ang butang nga gi-assign sa (mirrored data nga gisulat), ug ang "right-hand mobiletto" (ang
 argumento sa `mirror` nga pamaagi) mao ang bili nga gi-assign (gibasa ang salamin nga datos).

 ## Transparent nga encryption
 I-enable ang transparent nga client-side encryption:

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

 Unsay nahitabo? Ang usa ka bulag nga "direktoryo nga pagsulod" (direkta) nga direktoryo (na-encrypt) nagsubay kung unsang mga file ang naa niana
 direktoryo (aka ang direksiyon nga direktoryo).
 * Ang `list` sugo nagbasa sa mga file sa pagsulod sa direktoryo, nag-decrypt sa matag dalan nga gilista; unya ibalik ang metadata alang sa matag file
 * `list` nga mga sugo mas dili epektibo, ilabi na sa mga direktoryo nga adunay daghang mga file
 * Ang `write` sugo mosulat sa mga dirent files sa matag ginikanan nga direktoryo, balikbalik; unya isulat ang file
 * Ang mga sugo sa `write` adunay O(N) nga pagsulat, nga adunay N = giladmon sa hierarchy sa direktoryo
 * Ang `remove` command nagtangtang sa katugbang nga dirent file, ug ang ginikanan niini kung walay sulod, balikbalik; unya tangtangon ang file
 * Ang non-recursive nga `remove` mga sugo makaangkon og O(N) nga mga pagbasa ug posibleng sama kadaghan sa mga pagtangtang, nga adunay N = giladmon sa directory hierarchy
 * Ang mga recursive nga `remove` mga sugo sa dagko ug lawom nga mga filesystem mahimong mahal

 Hinumdumi nga bisan kung gipaandar ang pag-encrypt sa kilid sa kliyente, usa ka kontra nga adunay hingpit nga panan-aw sa imong naka-encrypt nga bahin sa server.
 storage, bisan wala ang yawe, makita gihapon ang kinatibuk-ang gidaghanon sa mga direktoryo ug pila ka mga file ang anaa sa matag usa, ug uban pa
 pipila ka paningkamot, pagdiskobre sa pipila o sa tanan nga kinatibuk-ang istruktura sa hierarchy sa direktoryo.
 *Pahinumdom: Paggamit ug medyo patag nga estraktura para sa mas maayong seguridad.*
 Dili mahibal-an sa kaaway ang mga ngalan sa mga direktoryo / file gawas kung nahibal-an usab nila ang imong pag-encrypt
 yawe o malampuson nga na-crack ang encryption. Ang tanan nga pusta wala na unya!

 ### Pagganap ug pag-cache
 Ang mga operasyon sa naka-encrypt nga pagtipig mahimong hinay. Ang mga recursive nga listahan ug pagtangtang mahimong hinay kaayo.
 Ang pag-cache pinaagi sa redis makatabang kaayo, apan timan-i nga ang cache na-flush sa bisan unsang pagsulat o pagtangtang.

 ## Key rotation
 Paghimo og mobiletto gamit ang imong bag-ong yawe, dayon i-salamin ang daan nga datos niini:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface sa drayber
 Ang usa ka drayber mao ang bisan unsang JS file nga nag-eksport sa usa ka 'storageClient' function uban niini nga pirma:

    function storageClient (key, secret, opts)

 * `key` : usa ka string, ang imong API key (para sa `local` nga drayber kini ang base nga direktoryo)
 * `secret` : usa ka string, ang imong API secret (mahimong tangtangon para sa `local` driver)
 * `opts` : usa ka butang, ang mga kabtangan kay per-driver:
 * Para sa `local` , ang `fileMode` ug `dirMode` nga mga propyedad nagtino kung giunsa paghimo ang bag-ong mga file ug direktoryo
 * Para sa `s3` , gikinahanglan ang `bucket` nga kabtangan. Opsyonal nga mga kabtangan mao ang:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ang butang nga gibalik sa storageClient function kinahanglan maghubit niini nga mga gimbuhaton:

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

 ## Pag-log
 Gigamit ni Mobiletto ang [winston](https://www.npmjs.com/package/winston) logging library.

 Ang mga log **adunay** mga agianan sa file ug mga mensahe sa sayup, apan **dili gayud** adunay mga yawe, sekreto,
 o bisan unsang ubang impormasyon sa pagsumpo sa koneksyon.

 ### Log nga lebel
 Gamita ang `MOBILETTO_LOG_LEVEL` environment variable aron itakda ang log level, gamit ang usa
 sa mga lebel sa `npm` nga gihubit sa [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ang default nga lebel kay `error` . Ang labing verbose nga lebel kay `silly` , bisan sa pagkakaron mobiletto
 wala mag log sa lebel ubos sa `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log file
 Sa kasagaran, ang logger nagsulat sa console. Aron ipadala ang mga log sa usa ka file, itakda ang `MOBILETTO_LOG_FILE`
 variable sa palibot. Kung mag-log sa usa ka file, ang mga troso dili na isulat sa console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Aron i-off ang pag-log:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
