Mobiletto
 =========

 Mobiletto yog ib txheej JavaScript cia abstraction txheej, nrog kev xaiv pob tshab tus neeg siv sab encryption.

 # Cov ntsiab lus
 * [Vim li cas Mobiletto?](#Why-Mobiletto?)
 * [Quick start](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Installation](#Installation)
 * [Support thiab Funding](#Support-and-Funding)
 * [Basic siv](#Basic-siv)
 * [Metadata](#Metadata)
 * [Lwm hom ntshuam](#Alternate-import-style)
 * [Caching](#Caching)
 * [Daim iav](# Mirroring)
 * [Transparent encryption](#Transparent-encryption)
 * [Key rotation](#Key-rotation)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Nyeem qhov no ua lwm hom lus
 Cov ntaub ntawv README.md no tau raug muab txhais, ntawm [hokeylization](https://github.com/cobbzilla/hokeylization), rau hauv
 **[txhua hom lus txhawb nqa los ntawm Google Txhais](https://cloud.google.com/translate/docs/languages)!**

 Kuv paub tseeb tias nws tsis zoo tag nrho, tab sis kuv vam tias nws zoo dua tsis muaj dab tsi!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Fab Kis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Nyiv](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Nyab Laj](../vi/README.md)
 [🇨🇳 Suav](../zh/README.md)


 **[📚...Txhua Yam Lus...](../README.md)**
 ----

 ### Puas muaj teeb meem nrog qhov kev txhais lus ntawm README?
 Qhov kev txhais lus tshwj xeeb ntawm tus thawj [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 tej zaum yuav muaj qhov tsis txaus ntseeg -- * kho tau zoo siab txais tos!* Thov xa [rub thov ntawm GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 lossis yog tias koj tsis xis nyob ua qhov ntawd, [qhib qhov teeb meem](https://github.com/cobbzilla/mobiletto/issues)

 Thaum koj tsim qhov teeb meem tshiab GitHub txog kev txhais lus, thov ua:
 * suav nrog nplooj URL (copy / paste los ntawm browser chaw nyob bar)
 * suav nrog cov ntawv tseeb uas tsis yog (copy / paste los ntawm browser)
 * thov piav qhia qhov tsis raug - puas yog kev txhais lus tsis raug? yog formatting puas lawm?
 * Ua siab zoo muab cov lus pom zoo ntawm kev txhais lus zoo dua, lossis yuav ua li cas cov ntawv yuav tsum raug formatted kom raug
 ** Ua tsaug!**

 ## Vim li cas Mobiletto?

 ### Nyob zoo tus neeg muag khoom xauv-hauv!
 Cov chaw muab huab cia ntau yam muaj qhov tsis sib xws APIs. Txawm tias cov uas siv zog rau "S3 compatibility"
 muaj tus cwj pwm idiosyncratic.

 Thaum koj xaiv ib lub chaw muag khoom tshwj xeeb rau koj lub app, yog tias koj code ncaj qha rau lawv API, koj lub app
 tam sim no nyob ntawm qhov kev pabcuam ntawd. Raws li lub sij hawm dhau mus thiab code accumulates, hloov cov neeg muag khoom ua
 nce untenable. Txais tos rau lub ntiaj teb kev lom zem ntawm tus neeg muag khoom xauv-hauv!

 Mobiletto tau tsim los daws qhov teeb meem no. Los ntawm coding koj app rau mobiletto's API, koj tuaj yeem yooj yim
 hloov chaw khaws cia thiab paub tias koj lub app cov txheej txheem cia yuav coj zoo ib yam.

 ### Kev sim dav dav
 Txhua tus tsav tsheb raug sim rau tus cwj pwm zoo ib yam nrog 60+ kev xeem rau txhua tus tsav tsheb.
 Peb sim txhua tus tsav tsheb nrog txhua qhov sib xyaw ua ke ntawm:
 * Encryption: ob qho tib si qhib thiab ua tsis taus
 * Redis cache: ob qho tib si qhib thiab ua tsis taus

 Txoj hauv kev no ua rau peb muaj kev thaj yeeb nyab xeeb uas mobiletto yuav coj zoo ib yam tsis hais tus tsav tsheb twg koj siv,
 thiab tsis hais seb koj puas qhib caching thiab / lossis encryption.

 ### Kev them nyiaj yug tsav tsheb
 Tam sim no Mobiletto cia tsav tsheb:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : local filesystem

 * Kev koom tes los txhawb ntau cov chaw muab huab cia tau txais tos heev!*

 ## mobiletto-cli
 Mobiletto yog npaj los siv los ua ib lub tsev qiv ntawv los ntawm lwm yam JavaScript code.

 Txhawm rau ua haujlwm nrog mobiletto ntawm kab hais kom ua, siv [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Source
 * [mobiletto ntawm GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Kev them nyiaj yug thiab nyiaj txiag
 Kuv tab tom sim ua tus kws tshaj lij qhib qhov software tsim tawm. Kuv tau ua haujlwm hauv
 kev lag luam software tau ntau xyoo, kuv tau pib cov tuam txhab ua tiav thiab muag rau cov tuam txhab pej xeem.
 Tsis ntev los no kuv poob kuv txoj haujlwm, thiab kuv tsis muaj lwm txoj haujlwm ua haujlwm

 Yog li kuv yuav sim sau cov software pab tau thiab saib seb qhov ntawd ua haujlwm

 Yog tias koj txaus siab siv cov software no, kuv yuav ua tsaug ntau rau txawm tias cov
 tsawg tshaj plaws [kev pab nyiaj hli ntawm Patreon](https://www.patreon.com/cobbzilla)

 * Ua tsaug!*

 ## Kev teeb tsa
 Nruab siv `npm` lossis `yarn` . Tej zaum koj yuav xav tau `lite` version uas tsis suav nrog tag nrho cov
 txhais README cov ntaub ntawv:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Yog tias koj xav tau README cov ntaub ntawv hauv txhua hom lus, nruab tag nrho version:

    npm install mobiletto
    yarn add mobiletto

 ## Quick Start
 Piv txwv luv luv siv mobiletto `s3` tsav tsheb.

 Cov cai no yuav khiav zoo ib yam yog tias tus tsav tsheb yog `b2` lossis `local` .

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
 ## Kev siv yooj yim
 Ib qho piv txwv ntau dua, qhia txog feem ntau ntawm cov yam ntxwv muaj:

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
 Cov lus txib `metadata` rov qab metadata txog ib qho kev nkag mus rau hauv ib qho chaw.
 Ib yam li ntawd, tus nqi xa rov qab los ntawm `list` daim ntawv' hais kom ua yog ib qho ntawm cov khoom metadata.

 Cov khoom metadata zoo li no:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Cov `type` cuab yeej tuaj yeem yog `file` , `dir` , `link` , lossis `special` .

 Nyob ntawm seb hom tsav tsheb, `list` hais kom ua yuav tsis rov qab txhua qhov chaw. Cov `name` thiab `type` cov khoom
 yuav tsum muaj nyob. Cov lus txib `metadata` tom ntej yuav rov qab tag nrho cov khoom muaj.

 ## Hloov ntshuam style
 Ntshuam lub module tag nrho-scoped thiab siv `connect` muaj nuj nqi:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto ua haujlwm zoo tshaj plaws nrog <a href="https://redis.io">redis</a> cache.

 Mobiletto yuav sim txuas mus rau qhov piv txwv redis ntawm 127.0.0.1:6379

 Koj tuaj yeem override ib qho ntawm cov no:
 * Teem lub `MOBILETTO_REDIS_HOST` env var, mobiletto txuas ntawm no es tsis txhob localhost
 * Teem lub `MOBILETTO_REDIS_PORT` env var, qhov chaw nres nkoj no yuav raug siv

 Mobiletto yuav khaws tag nrho nws cov yuam sij redis nrog lub `_mobiletto__` . Koj tuaj yeem hloov qhov no
 los ntawm kev teeb tsa `MOBILETTO_REDIS_PREFIX` env var.

 Koj tuaj yeem teeb tsa ib qho kev sib txuas caching nrog `opts.redisConfig` khoom:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Tsis xav redis caching?
 Txhawm rau lov tes taw: hla `enabled: false` hauv koj qhov khoom `opts.redisConfig` thaum koj tsim koj qhov kev sib txuas.

 Raws li tau tham hauv qab no, kev tsis ua haujlwm caching yuav muaj kev cuam tshuam tsis zoo rau kev ua haujlwm thiab ua rau muaj kev thov ntau dua
 khaws cia uas koj xav tau tiag tiag.

 ### Caching kev taw qhia
 **Encrypted cia **: nyeem / sau ntawv encrypted cia tsuas yog me ntsis qeeb dua li qub,
 tab sis navigating ncig cov npe (uas qee yam ua) yog qhov kim heev. Siv lub redis cache
 yuav ua rau koj muaj kev txhawb nqa tseem ceeb.

 Lub neej ntawd cache muaj kev nyab xeeb, tab sis tsis ua haujlwm zoo yog tias koj muaj ntau qhov kev sau / tshem tawm haujlwm.
 Ib qho kev sau lossis tshem tawm kev ua haujlwm tsis raug cai tag nrho cov cache, kom ntseeg tau tias cov ntawv nyeem tom ntej yuav pom qhov
 kev hloov tshiab kawg.

 ### CLI cov cuab yeej
 Yog tias koj siv CLI cov cuab yeej xws li [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 koj yuav xav tau lub redis cache enabled, raws li nws kav hla invocations ntawm `mo` hais kom ua.

 ## Daim iav

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Cov lus txib `mirror` ua ib daim ntawv luam ib zaug ntawm tag nrho cov ntaub ntawv los ntawm ib qho mobiletto mus rau lwm qhov.
 Nws tsis khiav ib qho txheej txheem los tswj daim iav hla lub sijhawm. Khiav qhov `mirror` hais kom ua dua
 synchronize tej ntaub ntawv uas ploj lawm.

 Tus nqi rov qab los ntawm `mirror` yog ib yam khoom yooj yim nrog cov txee rau pes tsawg cov ntaub ntawv tau ua tiav
 mirrored thiab pes tsawg cov ntaub ntawv muaj qhov yuam kev:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 CEEB TOOM: Mirroring loj cov ntaub ntawv teev yuav siv sij hawm heev thiab bandwidth-intensive

 Nrog rau `mirror` hu semantics nws tuaj yeem qee zaum tsis meej pem kom nkag siab tias leej twg yog tus
 nyeem ntawv thiab leej twg yog tus sau. Xav txog nws zoo li cov lus qhia: "sab laug-tes mobiletto"
 yog qhov uas tau muab rau (mirrored cov ntaub ntawv sau), thiab "sab tes mobiletto" (the
 kev sib cav rau `mirror` txoj kev) yog tus nqi raug muab (cov ntaub ntawv iav tau nyeem).

 ## Transparent encryption
 Pab kom pob tshab neeg-sab encryption:

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

 Yuav ua li cas? Ib qho "directory entry" (dirent) directory (encrypted) track what files are in that
 directory (aka lub dirent directory).
 * Cov lus txib `list` nyeem cov ntaub ntawv sau npe nkag, decrypts txhua txoj hauv kev teev tseg; ces rov metadata rau txhua cov ntaub ntawv
 * `list` cov lus txib tsis muaj txiaj ntsig, tshwj xeeb tshaj yog rau cov npe nrog cov ntaub ntawv ntau
 * Cov lus txib `write` sau' sau cov ntaub ntawv sib txawv hauv txhua tus niam txiv phau ntawv qhia, recursively; ces sau cov ntaub ntawv
 * `write` cov lus txib yuav ua rau O(N) sau, nrog N = qhov tob hauv cov npe hierarchy
 * Cov lus txib `remove` tshem tawm" tshem tawm cov ntaub ntawv sib thooj, thiab nws niam nws txiv yog khoob, rov ua dua; ces tshem tawm cov ntaub ntawv
 * Tsis-recursive `remove` cov lus txib yuav ua rau O (N) nyeem thiab muaj peev xwm ntau li tshem tawm, nrog N = qhov tob hauv cov npe hierarchy
 * Recursive `remove` cov lus txib ntawm cov ntaub ntawv loj thiab sib sib zog nqus tuaj yeem kim

 Nco ntsoov tias txawm tias tus neeg siv-sab encryption tau qhib, tus yeeb ncuab nrog kev pom tag nrho rau hauv koj lub server-sab encrypted
 cia, txawm tias tsis muaj tus yuam sij, tseem tuaj yeem pom tag nrho cov npe ntawm cov npe thiab pes tsawg cov ntaub ntawv nyob hauv txhua, thiab nrog
 qee qhov kev siv zog, nrhiav qee qhov lossis tag nrho cov qauv ntawm cov npe hierarchy.
 * Ceeb toom: Siv cov qauv tiaj tus kom muaj kev ruaj ntseg zoo dua.*
 Tus yeeb ncuab yuav tsis paub cov npe ntawm cov npe / cov ntaub ntawv tshwj tsis yog lawv kuj paub koj qhov encryption
 tus yuam sij los yog muaj lwm yam ua tau zoo tawg qhov encryption. Tag nrho cov bets yog tawm thaum ntawd!

 ### Kev ua tau zoo thiab caching
 Kev ua haujlwm ntawm encrypted cia yuav qeeb. Recursive cov npe thiab tshem tawm tuaj yeem qeeb heev.
 Caching ntawm redis pab tau zoo heev, tab sis nco ntsoov tias lub cache yog flushed thaum sau lossis tshem tawm.

 ## Kev hloov pauv hloov pauv
 Tsim ib lub mobiletto nrog koj tus yuam sij tshiab, tom qab ntawd tsom iav cov ntaub ntawv qub rau hauv nws:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Tus tsav tsheb interface
 Tus neeg tsav tsheb yog cov ntaub ntawv JS uas xa tawm 'storageClient' muaj nuj nqi nrog qhov kos npe no:

    function storageClient (key, secret, opts)

 * `key` : ib txoj hlua, koj tus yuam sij API (rau `local` tsav tsheb no yog lub hauv paus phau ntawv qhia)
 * `secret` : txoj hlua, koj qhov API zais cia (tuaj yeem raug tshem tawm rau `local` tsav tsheb)
 * `opts` : ib qho khoom, cov khoom yog ib tus tsav tsheb:
 * Rau `local` hauv zos', `fileMode` thiab `dirMode` cov khoom txiav txim siab li cas cov ntaub ntawv tsim tshiab thiab cov npe raug tsim
 * Rau `s3` , yuav tsum muaj `bucket` khoom. Cov khoom xaiv tau yog:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Cov khoom uas lub storageClient muaj nuj nqi xa rov qab yuav tsum txhais cov haujlwm no:

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

 ## Kev sau npe
 Mobiletto siv lub [winston](https://www.npmjs.com/package/winston) kaw lub tsev qiv ntawv.

 Logs **yuav ** muaj cov ntaub ntawv txoj hauv kev thiab cov lus yuam kev, tab sis yuav ** yeej tsis ** muaj cov yuam sij, zais cia,
 los yog lwm yam kev sib txuas lus configuration.

 ### Log theem
 Siv `MOBILETTO_LOG_LEVEL` ib puag ncig hloov pauv los teeb tsa theem cav, siv ib qho
 ntawm cov qib `npm` txhais hauv [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Cov theem pib yog `error` . Qhov feem ntau verbose theem yog `silly` , txawm hais tias tam sim no mobiletto
 tsis teev nyob rau theem hauv qab `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log file
 Los ntawm lub neej ntawd, tus logger sau rau lub console. Txhawm rau xa cov cav mus rau cov ntaub ntawv, teeb tsa `MOBILETTO_LOG_FILE`
 ib puag ncig hloov pauv. Thaum nkag mus rau cov ntaub ntawv, cov cav yuav tsis raug sau rau lub console lawm.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Txhawm rau kaw qhov kev kaw tseg:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
