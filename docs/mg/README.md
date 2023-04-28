Mobiletto
 =========

 Mobiletto dia sosona abstraction fitahirizana JavaScript, miaraka amin'ny encryption amin'ny lafiny mpanjifa mangarahara.

 # Votoaty
 * [Nahoana Mobiletto?](#Nahoana-Mobiletto?)
 * [Fanombohana haingana](#Atomboka haingana)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Loharano](#Source)
 * [Fametrahana](#Fametrahana)
 * [Fanohanana sy Famatsiam-bola](#Fanohanana-sy-Famatsiam-bola)
 * [Fampiasana fototra](#Fampiasana fototra)
 * [Metadata](#Metadata)
 * [fomba fanafarana hafa](fomba #fanafarana hafa)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Fanafenoana mangarahara](#Fanafenana mangarahara)
 * [Fihodinana lakile](#Fihodinana lakile)
 * [Interface amin'ny mpamily](#interface amin'ny mpamily)
 * [Logging](#Logging)

 # Vakio amin'ny fiteny hafa ity
 Ity antontan-taratasy README.md ity dia nadika, tamin'ny alàlan'ny [hokeylization](https://github.com/cobbzilla/hokeylization), ho amin'ny
 **[ny fiteny rehetra tohanan'ny Google Translate](https://cloud.google.com/translate/docs/languages)!**

 azoko antoka fa tsy tonga lafatra izany fa manantena aho fa tsara noho ny tsy misy!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemana](../de/README.md)
 [🇺🇸 anglisy](../en/README.md)
 [🇪🇸 Espaniola](../es/README.md)
 [🇫🇷 frantsay](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziana](../id/README.md)
 [🇮🇹 Italiana](../it/README.md)
 [🇯🇵 Japoney](../ja/README.md)
 [🇰🇷 Koreana](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poloney](../pl/README.md)
 [🇧🇷 Portiogey](../pt/README.md)
 [🇷🇺 Rosiana](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tiorka](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamiana](../vi/README.md)
 [🇨🇳 Sinoa](../zh/README.md)


 **[📚 ... Teny Rehetra ...](../README.md)**
 ----

 ### Misy olana ve amin'ity fandikana ny README ity?
 Ity dikanteny manokana amin'ny [README] tany am-boalohany (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 mety misy lesoka -- *tena raisina an-tanana ny fanitsiana!* Alefaso azafady [fangatahana fisarihana ao amin'ny GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 na raha tsy mahazo aina amin'izany ianao dia [manokatra olana](https://github.com/cobbzilla/mobiletto/issues)

 Rehefa mamorona olana GitHub vaovao momba ny fandikan-teny ianao, azafady:
 * Ampidiro ny URL pejy (adikao / apetaho amin'ny bara adiresy navigateur)
 * Ampidiro ny lahatsoratra marina izay diso (kodikao / apetaho amin'ny navigateur)
 * farito azafady izay tsy mety - diso ve ny dikanteny? simba ve ny format?
 * Manomeza soso-kevitra amin-katsaram-panahy momba ny fandikan-teny tsara kokoa, na ny fomba tokony handrafetana ny lahatsoratra
 * **Misaotra anao!**

 ## Nahoana no Mobiletto?

 ### Veloma mpivarotra mihidy!
 Ireo mpamatsy fitahirizana rahona isan-karazany dia manana API tsy mifanaraka. Na dia ireo izay miezaka ny "S3 compatibility"
 manana fitondrantena idiosyncratic.

 Rehefa misafidy mpivarotra fitahirizana manokana ho an'ny app-nao ianao, raha kaody mivantana amin'ny API-ny ianao, dia ny app-nao
 dia miankina amin'io serivisy io izao. Rehefa mandeha ny fotoana ary mihabetsaka ny kaody, dia lasa ny fiovan'ny mpivarotra
 mihamitombo hatrany. Tongasoa eto amin'ny tontolon'ny mpivarotra hidy!

 Mobiletto dia natao hamahana ity olana ity. Amin'ny alàlan'ny fametahana ny fampiharana anao amin'ny API mobiletto dia afaka mora foana ianao
 ovay ny mpanome fitahirizana ary fantaro fa ny sosona fitahirizana ny fampiharanao dia hitovy fihetsika.

 ### Fitsapana mivelatra
 Ny mpamily rehetra dia voasedra amin'ny fihetsika mitovy amin'ny fitsapana 60+ ho an'ny mpamily tsirairay.
 Mitsapa ny mpamily rehetra izahay miaraka amin'ny fitambaran'ny:
 * Encryption: samy afaka na kilemaina
 * Redis cache: samy afaka na kilemaina

 Ity fomba fiasa ity dia manome antsika fiadanan-tsaina fa ny mobiletto dia hitondra tena mitovy na inona na inona mpamily ampiasainao,
 ary na manao ahoana na manao caching sy/na encryption.

 ### Fanohanana ny mpamily
 Mpamily fitahirizana Mobiletto amin'izao fotoana izao:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : rafi-drakitra eo an-toerana

 * Tena raisina an-tanan-droa ny fandraisana anjara hanohanana ireo mpamatsy fitahirizana rahona!*

 ## mobiletto-cli
 Mobiletto dia natao hampiasaina ho tranomboky amin'ny code JavaScript hafa.

 Raha hiasa amin'ny mobiletto amin'ny baikon'ny baiko, ampiasao [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Loharano
 * [mobiletto amin'ny GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto amin'ny npm](https://www.npmjs.com/package/mobiletto)

 ## Fanohanana sy famatsiam-bola
 Miezaka ny ho matihanina mpamorona rindrambaiko open source aho. Niasa tao aho
 ny indostrian'ny rindrambaiko nandritra ny taona maro, nanomboka orinasa nahomby aho ary nivarotra azy ireo tamin'ny orinasam-panjakana.
 Vao haingana aho no very asa, ary tsy manana asa hafa milahatra

 Noho izany dia hanandrana manoratra rindrambaiko mahasoa aho ary hijery raha mety izany

 Raha mahafinaritra anao ny mampiasa an'ity logiciel ity dia ho feno fankasitrahana aho na dia ny
 kely indrindra [fanomezana isam-bolana amin'ny alàlan'ny Patreon](https://www.patreon.com/cobbzilla)

 *Misaotra anao!*

 ## Fametrahana
 Apetaho amin'ny fampiasana `npm` na `yarn` . Angamba tianao ny dikan-teny `lite` izay tsy ahitana ny rehetra
 nadika ny rakitra README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Raha tena tianao ny rakitra README amin'ny fiteny rehetra, apetraho ny dikan-teny feno:

    npm install mobiletto
    yarn add mobiletto

 ## Manomboka haingana
 Ohatra fohy mampiasa ny mobiletto `s3` mpamily.

 Ity kaody ity dia mandeha mitovy raha toa ka `b2` na `local` ny mpamily.

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
 ## Fampiasana fototra
 Ohatra mivelatra kokoa, mampiseho ny ankamaroan'ny endri-javatra atolotra:

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
 Ny baiko `metadata` dia mamerina metadata momba ny fidirana amin'ny rafi-drakitra tokana.
 Toy izany koa, ny sanda miverina avy amin'ny baiko `list` dia fitambarana zavatra metadata.

 Ny zavatra metadata dia toa izao:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ny fananana `type` dia mety ho `file` , `dir` , `link` , na `special` .

 Miankina amin'ny karazana mpamily, ny baiko `list` dia mety tsy hamerina ny saha rehetra. Ny `name` sy `type` karazana`
 tokony ho eo foana. Ny baiko `metadata` manaraka dia hamerina ny fananana rehetra misy.

 ## Fomba fanafarana hafa
 Ampidiro ny maodely feno velarana ary ampiasao ny fiasa `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto dia miasa tsara indrindra amin'ny cache <a href="https://redis.io">redis</a> .

 Mobiletto dia hanandrana hifandray amin'ny ohatra redis amin'ny 127.0.0.1:6379

 Azonao atao ny manafoana ny iray amin'ireto:
 * Apetraho ny `MOBILETTO_REDIS_HOST` env var, mobiletto mifandray eto fa tsy localhost
 * Apetraho ny `MOBILETTO_REDIS_PORT` env var, ity seranana ity no hampiasaina

 Mobiletto dia hitahiry ny lakilen'ny redis rehetra miaraka amin'ny prefix `_mobiletto__` . Azonao ovaina izany
 amin'ny fametrahana ny `MOBILETTO_REDIS_PREFIX` env var.

 Azonao atao ihany koa ny mametraka caching isaky ny fifandraisana amin'ny zavatra `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Tsy te redis caching?
 Mba hanesorana: ampidiro ny `enabled: false` ao amin'ny zavatra `opts.redisConfig` rehefa mametraka ny fifandraisanao ianao.

 Araka ny voalaza etsy ambany, ny fanalana ny caching dia hisy fiantraikany ratsy eo amin'ny fampandehanana ary hiteraka fangatahana bebe kokoa
 amin'ny fitahirizana izay tena ilainao.

 ### Torolàlana cache
 **Fitehirizana miafina**: miadana kely noho ny mahazatra ny famakiana/manoratra ny fitehirizana miafina,
 fa ny fandehanana manodidina ny lahatahiry (izay ataon'ny sasany) dia lafo be. Mampiasa cache redis
 hanome anao fisondrotan-javatra lehibe.

 Ny cache default dia azo antoka, saingy tsy mandeha tsara raha manana asa fanoratana / fanesorana betsaka ianao.
 Ny asa fanoratana na fanesorana rehetra dia manafoana ny cache manontolo, ka miantoka fa ny famakiana manaraka dia hahita ny
 fanovana farany.

 ### CLI fitaovana
 Raha mampiasa fitaovana CLI ianao toa ny [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 tena tianao ho alefa ny cache redis, satria maharitra amin'ny fiantsoana ny baiko `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Ny baiko `mirror` dia manao kopia indray mandeha ny rakitra rehetra avy amin'ny mobiletto iray mankany amin'ny iray hafa.
 Tsy mandeha na inona na inona ny fitazonana ny fitaratra rehefa mandeha ny fotoana. Alefaso indray ny baiko `mirror`
 mba hampifanaraka izay rakitra tsy hita.

 Ny sandan'ny fiverenana avy amin'ny `mirror` dia zavatra tsotra misy kajy ny isan'ny rakitra nahomby
 nitaratra ary firy ny rakitra nanana lesoka:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 FAMPITANDREMANA: Mety handany fotoana be ny fanaovana fitaratra amin'ny angon-drakitra lehibe

 Miaraka amin'ny semantika fiantsoana `mirror` dia mety ho sahiran-tsaina indraindray ny mahatakatra hoe iza ilay
 mpamaky ary iza no mpanoratra. Alaivo sary an-tsaina izany ho toy ny fanambarana fanendrena: ny "mobiletto ankavia"
 dia ny zavatra atolotra (angona mirakitra voasoratra), ary ny "mobiletto havanana" (ny
 Ny tohan-kevitra amin'ny fomba `mirror` ) dia ny sanda omena (vakiana ny angon-drakitra fitaratra).

 ## Fanafenana mangarahara
 Alefaso ny encryption amin'ny lafiny mpanjifa mangarahara:

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

 Fa misy inona? Ny lahatahiry "fidirana amin'ny lahatahiry" (dirent) misaraka (voatahiry) dia manara-maso izay rakitra ao anatin'izany
 directory (aka ny dirent directory).
 * Ny baiko `list` dia mamaky ny rakitra fidirana amin'ny lahatahiry, mamadika ny lalana tsirairay voatanisa; dia mamerina ny metadata ho an'ny rakitra tsirairay
 * Ny baiko `list` dia tsy mahomby kokoa, indrindra ho an'ny lahatahiry misy rakitra marobe
 * Ny baiko `write` dia manoratra rakitra dirent ao amin'ny lahatahiry dirent an'ny ray aman-dreny tsirairay, miverimberina; dia manoratra ny rakitra
 * Ny baiko `write` dia hahazo O(N) manoratra, miaraka amin'ny N = halaliny ao amin'ny ambaratongan'ny lahatahiry
 * Ny baiko `remove` dia manala ny rakitra dirent mifanaraka amin'izany, ary ny ray aman-dreniny raha banga dia miverimberina; dia manala ny rakitra
 * Ny baiko `remove` tsy miverimberina dia hiteraka O(N) mamaky ary mety ho voafafa betsaka, miaraka amin'ny N = halaliny ao amin'ny ambaratongan'ny lahatahiry
 * Mety ho lafo ny baiko `remove` amin'ny rafi-drakitra lehibe sy lalina

 Mariho fa na dia alefa ny fanafenana amin'ny lafiny mpanjifa aza, dia misy fahavalo manana fahitana feno amin'ny lafiny mpizara misy anao.
 fitehirizana, na dia tsy misy ny fanalahidy, dia mbola afaka mahita ny fitambaran'ny lahatahiry sy ny isan'ny rakitra ao amin'ny tsirairay, ary miaraka
 ezaka kely, tadiavo ny sasany na ny firafitry ny lahatahiry ankapoben'ny lahatahiry.
 *Fanamarihana: Mampiasà rafitra somary fisaka ho fiarovana tsara kokoa.*
 Tsy ho fantatry ny fahavalo ny anaran'ny lahatahiry/rakitra raha tsy fantany koa ny fanafenanao
 key na raha tsy izany dia nahomby ny fanafenana. Miala daholo ny filokana!

 ### Fampisehoana sy cache
 Mety ho miadana ny fiasana amin'ny fitahirizana miafina. Ny lisitra miverimberina sy ny fanesorana dia mety ho miadana be.
 Ny cache amin'ny redis dia manampy be dia be, fa mariho fa ny cache dia mipoitra amin'ny fanoratana na fanesorana.

 ## Fihodinana fanalahidy
 Mamoròna mobiletto miaraka amin'ny fanalahidinao vaovao, ary ampifanaraho ao aminy ny angona taloha:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface amin'ny mpamily
 Ny mpamily dia rakitra JS rehetra manondrana fiasa 'storageClient' miaraka amin'ity sonia ity:

    function storageClient (key, secret, opts)

 * `key` : tady, ny lakilen'ny API-nao (ho an'ny mpamily `local` ity no lahatahiry fototra)
 * `secret` : tady, ny API secret-nao (azo avela ho an'ny mpamily `local` )
 * `opts` : zavatra iray, ny fananana dia isaky ny mpamily:
 * Ho an'ny `local` , ny `fileMode` sy `dirMode` no mamaritra ny fomba famoronana rakitra sy lahatahiry vaovao.
 * Ho an'ny `s3` , ilaina ny fananana `bucket` . Ny fananana azo atao dia:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ny zavatra averin'ny storageClient dia tsy maintsy mamaritra ireto asa ireto:

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

 ## Loka
 Mobiletto dia mampiasa ny [winston](https://www.npmjs.com/package/winston).

 Ny logs **dia** misy làlam-drakitra sy hafatra diso, fa tsy ** misy fanalahidy, tsiambaratelo,
 na fampahalalana hafa momba ny fanefena fifandraisana.

 ### Ambaratonga log
 Ampiasao ny fari-piainan'ny tontolo `MOBILETTO_LOG_LEVEL` ' hametrahana ny haavon'ny diary, mampiasa iray
 amin'ireo ambaratonga `npm` voafaritra ao amin'ny [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ny haavon'ny default dia `error` . Ny ambaratonga be verbose dia `silly` , na dia mobiletto amin'izao fotoana izao aza
 tsy miditra amin'ny ambaratonga ambany `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### rakitra log
 Amin'ny alàlan'ny default, manoratra amin'ny console ny mpitatitra. Raha handefa logs amina rakitra iray dia apetraho ny `MOBILETTO_LOG_FILE`
 fari-piainan'ny tontolo iainana. Rehefa miditra amin'ny rakitra iray dia tsy hosoratana amin'ny console intsony ny logs.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Mba hamonoana ny logging:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
