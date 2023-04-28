Mobiletto
 =========

 Mobiletto est JavaScript repositionis stratum abstractionis, cum ad libitum perlucidum encryption clientis.

 # Contents
 * [Quare Mobiletto?](#Quare-Mobiletto?)
 *
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Installation](#Installation)
 * [Support and Funding](Support-and-Funding)
 * [Basic usus](# Usus)
 * [Metadata](#Metadata)
 * [Alterne import style].
 * [Caching](#Caching)
 * [Speculum](#Mirroring)
 * [Perspicuus encryption](# Transparens-encryption)
 * [Key rotationis](#Key-rotatione)
 * [Coegi interface](# Coegi-interface)
 * [Logging](#Logging)

 # Lege hoc in alia lingua
 Hoc README.md documentum translatum est, per [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[Omnis lingua a Google Translate](https://cloud.google.com/translate/docs/languages)!

 Perfectum certe non sum, sed spero melius quam nihil!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengalica](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiaca](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Coreanica](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonica](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamica](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[ ... Omnes Linguae ...](../README.md)**
 ----

 ### Estne problema cum hac translatione README?
 Haec praecipua translatio originalis [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 fortasse vitiosum esse -- *correctiones gratae sunt!* Mitte quaeso [in GitHub rogationem viverra](https://github.com/cobbzilla/mobiletto/pulls);
 vel si non es commodus id faciens, [aperi fluxum](https://github.com/cobbzilla/mobiletto/issues)

 Cum novam GitHub quaestionem de translatione creas, quaeso fac;
 * Paginam URL includere (exemplum / crustulum ex vecte electronica)
 * Textum includere quod est nefas (exemplum / crustulum ex pasco)
 * Quaeso describere quid sit iniuria — est interpretatio falsa? fractum est forma aliqua?
 * benigne suggestionem praebeant translationis melioris vel quomodo textus debite formatus sit
 * **Gratias tibi!**

 ## Cur Mobiletto?

 ### Vale venditori crinem-in!
 Variae nubes provisores repono APIs repugnantes habent. Etiam ea quae contendunt ad "S3 convenientiam";
 ut idiosyncratic se gerendi rationibus.

 Cum aliquem venditorem repositionis eligis pro app tua, si directe ad eorum API codicem, tuum app
 is nunc ab illo servitio dependet. Procedente tempore ac codice accumulat, mutato concionatorum fit
 magisque inconveniens. Welcome to the fun mundi venditoris lock-in!

 Mobiletto designatus est hanc quaestionem solvere. Per coding tuum app ad mobiletto scriptor API, facile potes
 provisores repositorii mutant et sciunt quod tabulatum app tabularium tuum identice se geret.

 ### Extensiva probatio
 Omnes rectores probati sunt pro pari habitu cum 60+ probationibus pro singulis exactoris.
 Probamus omnes rectores cum omni complexione;
 * Encryption: et enabled et debilem
 * Redis cache: tum enabled et debilem

 Aditus nobis pacem dat animo illo mobilitto se gerendi ratione cuius rectoris uteris;
 et sive caching sive encryption.

 ### Coegi firmamentum
 Current rectoribus Mobiletto repono:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : localis filesystem

 *Conlationes magis provisores ad nubes suscipiendas valde gratae sunt!*

 ## mobiletto-cli
 Mobiletto destinatur ut bibliotheca ab aliis JavaScript codice adhibeatur.

 Laborare cum mobiletto ad lineam praecepti, utere [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Source
 * [Mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
 * [Mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Support et Donec
 Conor esse professionalem fontem programmatum elit. I have been working in
 industria programmatis multos annos feliciter societates incepi et eas societates publicas vendidi.
 Nuper officium meum perdidi, et aliud opus non instruxit

 Eo igitur experior utilium programmatum scribo et vide an opera sit

 Si hoc programmate utendo frueris, gratias ago etiam ipsis
 minima [menstrua contributio per Patreon](https://www.patreon.com/cobbzilla)

 *Gratias tibi!*

 ## Installation
 Instrue utens `npm` vel `yarn` . Probabiliter vis `lite` quae non includit omnia
 README translata files:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Si vere vis tabularia README in omni lingua, plenam versionem institue:

    npm install mobiletto
    yarn add mobiletto

 ## Velox Start
 Breve exemplum utens agitator mobiletto `s3` .

 Hoc signum idem curreret si auriga `b2` vel `local` .

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
 ## Basic usage
 Multo maiora exempla sunt, quibus maxime lineamenta proponuntur;

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
 Mandatum `metadata` redit circa unum ingressum filesystem.
 Item, reditus pretii a `list` imperio est ordinata metadata obiecti.

 Metadata res similis est:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` potest esse `file` , `dir` , `link `link` seu `special` .

 Secundum genus exactoris, mandatum `list` non potest omnes agros reddere. Quod `name` et `type` proprietatibus
 semper adesset. Subsequens mandatum `metadata` omnes possessiones promptas reddet.

 ## Alternate import style
 Modulus plene-scoped importare et functionem `connect` uti:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto optime operatur cum <a href="https://redis.io">redis</a> cache.

 Mobiletto coniungere cum redis instantia conabitur in 127.0.0.1:6379

 Vincat utrumque potes:
 * `MOBILETTO_REDIS_HOST` env var pone, mobiletto iungo hic pro locali exercitu
 * `MOBILETTO_REDIS_PORT` env var pone, hic portus adhibebitur

 Mobiletto omnes suas redis claves cum praepositione `_mobiletto__` . Hoc potes mutare
 ponendo `MOBILETTO_REDIS_PREFIX` env var.

 Potes etiam per-connexionem caching cum obiecti `opts.redisConfig` obiecti:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Non vis redis caching?
 To disable: pass `enabled: false` in your `opts.redisConfig` objectum cum constituis nexum tuum.

 De quibus infra, inactivare caching effectum adversam in effectu habebunt et plures petitiones incurrunt
 ad repono quod vere postulo.

 ### Caching direction
 ** Encrypted storage**: reading/ writing encrypted storage is only a little slow than normal ;
 at navigatio circa directoria (quod aliquae res faciunt) satis pretiosae sunt. Usus redis cache
 insigne perficientur dabit tibi boost.

 Defalta cache tuta est, sed bene non facit si multum opus est scribere/remoto.
 Quilibet scribat vel removeat operationem integram cella infirmat, prospiciat sequentem legitimum videbunt
 tardus mutans.

 ### CLI instrumenta
 Si instrumentum uteris quasi [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli);
 certum vis capacitatem redis cache, dum per invocationes `mo` mandati durat.

 ## Speculum

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` ' unum tempus exemplum omnium imaginum ab uno mobilitto ad alterum fungitur.
 Non currit aliqua processus ad retinendum speculum in tempore. Curre `mirror` imperium iterum
 ut synchronize quis files absentis.

 Valor reditus a `mirror` obiectum simplex est cum calculis quot fasciculi bene erant
 speculata et quot lima errores habuit;

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 MONITUM: Speculum magna notitia sets possunt esse valde vicis-consumens et sed intensiva

 Cum `mirror` vocamus semanticos interdum potest confundere ad intelligendum quis est the
 lector et quis est scriptor. Finge eam quasi constitutionis assignationis: "sinistra mobilitto".
 res assignata est (specula notitia scripta), et "manus mobilitto" (the .
 argumentum ad methodum `mirror` ) est valor assignatus (in speculo notitia legitur).

 ## Perspicuus encryption
 Admitte perlucidum latus encryption clientis;

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

 Quid fit? A separatum "ingressum directorium" (dirent) directorium (encrypted) vestigia quae in eo sunt
 directorium (aka directorium directum).
 * `list` mandare legit directorium ingressuum imaginum, decryptarum singulae semitae inscriptae; inde redit metadata ad invicem file
 * `list` magis inefficaces sunt, praesertim directoria cum magno numero fasciculorum
 * The `write` command scribens limas directas in directorio directo cuiusque parentis , recursively ; tunc scribit tabella
 * `write` praecipit incursurum O(N) scribens, cum N = profundum in directorio hierarchiae
 * The `remove` imperium removet debitam limam direntem, et parentem si inanis est, recursively; tunc aufert lima
 * Mandata non-recursiva `remove` incurrunt O (N) legit et potentialiter totidem deletiones, cum N = profundum in directorio hierarchiae.
 * Recursive `remove` imperia in magnis et profundis filesystematibus potest esse pretiosa

 Nota quod etiam cum encryption clientelam paravit, adversarium cum plena visibilitate in encrypted servo tuo
 Repositiones, etiam sine clave, adhuc videre possunt numerum directorium et quot fasciculi in unaquaque, et cum
 aliquem conatum, aliquos vel omnes altiore structurae directorii hierarchiae detegere.
 * Nota: utere relative plana structuram ad meliorem securitatem.
 Hostis nomina directoria/ imaginum non cognosceret nisi etiam encryptionem tuam sciant
 clavis vel aliter feliciter crepuit encryption. Omnes sponsiones sunt tunc off!

 ### euismod et caching
 Operationes in repositione encrypted tardae esse possunt. Indices recursivi et remotiones valde tardae esse possunt.
 Caching via redis vehementer adiuvat, sed nota quod cella in quavis scribendo vel removendo rubens est.

 ## Key rotationis
 Mobiletto crea cum nova clave tua, deinde in illam datam veterem imitari;

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Coegi interface
 A coegi est quaevis fasciculus JS, qui munus exportationis 'storageClient' cum hac subscriptione exportat:

    function storageClient (key, secret, opts)

 * `key` : chorda, clavis API tua (coegi `local` hoc est basis presul)
 * `secret` : chorda, tuum API secretum (omitti potest pro `local` )
 * `opts` : objectum, proprietatum per-auriga;
 * Nam `local` , proprietatibus `fileMode` et `dirMode` determinant quomodo novae tabulae creandi et directoria creantur
 * Nam `s3` , `bucket` proprietas requiritur. Proprietates libitum sunt:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objectum quod munus reponoClient redit, has functiones definire debet:

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

 ## Logging
 Mobiletto utitur [winston](https://www.npmjs.com/package/winston) bibliotheca logging.

 Tigna lima continent vias et nuntios erroris, sed nunquam claves, secreta continent,
 vel quodlibet aliud connexionis informationem.

 ### Log level
 Utere `MOBILETTO_LOG_LEVEL` ambitus variabilis ad utere gradum truncum, uno utendo
 de gradibus `npm` definitis [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Gradus default est `error` . Gradus verbosissimus est `silly` , quamvis nunc mobilitto .
 non log in levels infra `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Stipes lima
 Defalta, logger ad consolatorium scribit. Ut omnia in tabella mittas, `MOBILETTO_LOG_FILE` . pone
 ambitus varius. Cum ad fasciculum colligationem, acta iam ad consolatorium scribenda non erunt.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ad logging averte:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
