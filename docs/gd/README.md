gluasadach
 ========

 Tha Mobiletto na shreath tarraing stòraidh JavaScript, le crioptachadh roghainneil taobh teachdaiche follaiseach.

 # Susbaint
 * [Carson Mobiletto?](#Carson-Mobiletto?)
 * [Tòiseachadh luath](#Tòiseachadh luath)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Stòr](#Stòr)
 * [Stàladh](#Stàladh)
 * [Taic is Maoineachadh](#Taic-is-Maoineachadh)
 * [Cleachdadh bunaiteach](#Basic-use)
 * [Metadata](#Metadata)
 * [Stoidhle in-mhalairt eile](#Alternate-import-style)
 * [Tasgadh](#Caching)
 * [sgàthan](#sgàthan)
 * [Crioptachadh follaiseach](#Transparent-encryption)
 * [Cuartachadh iuchrach](# Key-rotation)
 * [eadar-aghaidh draibhear](#Driver-interface)
 * [Logadh](# Logadh)

 # Leugh seo ann an cànan eile
 Chaidh an sgrìobhainn README.md seo eadar-theangachadh, tro [hokeylization](https://github.com/cobbzilla/hokeylization), gu
 **[a h-uile cànan le taic bho Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Tha mi cinnteach nach eil e foirfe, ach tha mi an dòchas gu bheil e nas fheàrr na dad!

 [🇸🇦 Arabais](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Gearmailtis](../de/README.md)
 [🇺🇸 Beurla](../ga/README.md)
 [🇪🇸 Spàinntis](../es/README.md)
 [🇫🇷 Fraingis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Eadailtis](../it/README.md)
 [🇯🇵 Seapanais](../ja/README.md)
 [🇰🇷 Coirèanais](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pòlainnis](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Ruisis](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcais](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Bhietnam](../vi/README.md)
 [🇨🇳 Sìnis](../zh/README.md)


 **[📚 ... a h-uile cànan ...](../README.md)**
 ----

 ### A bheil duilgheadas ann leis an eadar-theangachadh seo den README?
 An eadar-theangachadh sònraichte seo den fhear thùsail [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 faodaidh gu bheil e lochtach -- * tha fàilte mhòr air ceartachaidhean!* Feuch an cuir thu [iarrtas tarraing air GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 no mura h-eil thu comhfhurtail a’ dèanamh sin, [fosgail cùis](https://github.com/cobbzilla/mobiletto/issues)

 Nuair a chruthaicheas tu cùis GitHub ùr mu eadar-theangachadh, feuch an dèan thu:
 * cuir a-steach URL na duilleige (lethbhreac / pasg bho bhàr seòlaidh a’ bhrobhsair)
 * cuir a-steach an dearbh theacsa a tha ceàrr (lethbhreac / pasgain bhon bhrobhsair)
 * thoir cunntas air dè tha ceàrr -- a bheil an t-eadar-theangachadh ceàrr? A bheil an cruth briste ann an dòigh air choreigin?
 * thoir gu coibhneil moladh air eadar-theangachadh nas fheàrr, no mar a bu chòir an teacsa a bhith air a chruth ceart
 * **Tapadh leat!**

 ## Carson Mobiletto?

 ### Soraidh slàn le glasadh an neach-reic!
 Tha APIan neo-fhreagarrach aig na diofar sholaraichean stòraidh sgòthan. Fiù 's an fheadhainn a tha a' strì airson "S3-chòrdalachd"
 bi giùlan mì-chinnteach agad.

 Nuair a thaghas tu reiceadair stòraidh sònraichte airson an aplacaid agad, ma nì thu còd gu dìreach chun API aca, an aplacaid agad
 a nis an eisimeil na seirbhis sin. Mar a thèid ùine seachad agus còd a’ cruinneachadh, bidh luchd-reic ag atharrachadh
 sìor fhàs do-sheachanta. Fàilte gu saoghal spòrsail glasadh reiceadair!

 Chaidh Mobiletto a dhealbhadh gus an duilgheadas seo fhuasgladh. Le bhith a’ còdadh an aplacaid agad gu API mobiletto, faodaidh tu gu furasta
 atharraich solaraichean stòraidh agus fios agad gum bi còmhdach stòraidh an aplacaid agad gad ghiùlan fhèin san aon dòigh.

 ### Deuchainn farsaing
 Bithear a’ dèanamh deuchainn air a h-uile draibhear airson giùlan co-ionann le 60+ deuchainn airson gach draibhear.
 Bidh sinn a’ dèanamh deuchainn air a h-uile draibhear leis a h-uile measgachadh de:
 * Crioptachadh: an dà chuid comasach agus ciorramach
 * Redis cache: an dà chuid comasach agus ciorramach

 Tha an dòigh-obrach seo a’ toirt dhuinn fois inntinn gum bi mobiletto gad ghiùlan fhèin mar an ceudna ge bith dè an draibhear a chleachdas tu,
 agus ge bith a bheil thu a’ comasachadh caching agus/no crioptachadh.

 ### Taic dràibhear
 Dràibhearan stòraidh Mobiletto gnàthach:
 * `s3` : Amazon S3
 * `b2` : Cùl-cinn B2
 * `local` ionadail`: siostam faidhle ionadail

 * Tha fàilte mhòr air tabhartasan gus taic a thoirt do bharrachd sholaraichean stòraidh neòil!*

 ## mobiletto-cli
 Tha Mobiletto an dùil a bhith air a chleachdadh mar leabharlann le còd JavaScript eile.

 Gus obrachadh le mobiletto aig an loidhne-àithne, cleachd [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Stòr
 * [mobiletto air GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto air npm](https://www.npmjs.com/package/mobiletto)

 ## Taic agus Maoineachadh
 Tha mi a’ feuchainn ri bhith nam leasaiche bathar-bog còd fosgailte proifeasanta. Tha mi air a bhith ag obair ann
 ann an gnìomhachas bathar-bog airson grunn bhliadhnaichean, tha mi air companaidhean soirbheachail a thòiseachadh agus air an reic ri companaidhean poblach.
 O chionn ghoirid chaill mi an obair agam, agus gu dearbh chan eil obair sam bith eile agam

 Mar sin tha mi a’ dol a dh’fheuchainn ri bathar-bog feumail a sgrìobhadh agus faicinn a bheil sin ag obair

 Ma tha e a’ còrdadh riut a bhith a’ cleachdadh a’ bhathar-bog seo, bhithinn fada taingeil airson eadhon an
 as lugha [tabhartas mìosail tro Patreon](https://www.patreon.com/cobbzilla)

 *Tapadh leat!*

 ## Stàladh
 Stàlaich a’ cleachdadh `npm` no `yarn` . Is dòcha gu bheil thu ag iarraidh an dreach `lite` nach eil a’ toirt a-steach na h-uile
 faidhlichean README eadar-theangaichte:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ma tha thu dha-rìribh ag iarraidh na faidhlichean README anns a h-uile cànan, stàlaich an dreach slàn:

    npm install mobiletto
    yarn add mobiletto

 ## Tòiseachadh luath
 Eisimpleir ghoirid a’ cleachdadh an draibhear mobiletto `s3` .

 Bhiodh an còd seo a’ ruith mar an ceudna nam b’ e `b2` no `local` an dràibhear.

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
 ## Cleachdadh bunaiteach
 Eisimpleir fada nas fharsainge, a’ sealltainn a’ mhòr-chuid de na feartan a thathar a’ tabhann:

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
 Bidh an àithne `metadata` a’ tilleadh meata-dàta mu aon inntrigeadh siostam faidhle.
 Mar an ceudna, is e an luach tilleadh bhon àithne `list` sreath de nithean meata-dàta.

 Tha cuspair meata-dàta a’ coimhead mar seo:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Faodaidh an togalach `type` a bhith mar `file` , `dir` , `link` , `special` .

 A rèir an t-seòrsa draibhear, chan fhaod àithne `list` a h-uile raon a thilleadh. Na `name` agus `type`
 bu chòir a bhith an làthair an-còmhnaidh. Tillidh àithne `metadata` às dèidh sin a h-uile seilbh a tha ri fhaighinn.

 ## Stoidhle in-mhalairt eile
 Cuir a-steach am modal làn-sgòp agus cleachd an gnìomh `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Tasgadh
 Bidh Mobiletto ag obair as fheàrr le tasgadan <a href="https://redis.io">redis</a> .

 Feuchaidh Mobiletto ri ceangal a dhèanamh ri eisimpleir redis air 127.0.0.1:6379

 Faodaidh tu a dhol thairis air aon de na leanas:
 * Suidhich an `MOBILETTO_REDIS_HOST` env var, mobiletto ceangal an seo an àite localhost
 * Suidhich an `MOBILETTO_REDIS_PORT` env var, thèid am port seo a chleachdadh

 Stòraidh Mobiletto na h-iuchraichean redis aige gu lèir leis an ro-leasachan `_mobiletto__` . Faodaidh tu seo atharrachadh
 le bhith a' suidheachadh an `MOBILETTO_REDIS_PREFIX` env var.

 Faodaidh tu cuideachd tasgadh per-connection a shuidheachadh leis an nì `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nach eil thu ag iarraidh tasgadan redis?
 Gus a chur à comas: cuir seachad `enabled: false` san nì `opts.redisConfig` agad nuair a stèidhicheas tu do cheangal.

 Mar a chaidh a dheasbad gu h-ìosal, bheir casg air tasgadh droch bhuaidh air coileanadh agus thig barrachd iarrtasan
 gu stòradh a dh’ fheumas tu.

 ### Stiùireadh caching
 ** Stòradh crioptaichte **: chan eil leughadh / sgrìobhadh stòradh crioptaichte ach beagan nas slaodaiche na an àbhaist,
 ach tha e gu math daor a bhith a’ seòladh timcheall chlàran (a bhios cuid de rudan a’ dèanamh). A’ cleachdadh tasgadan redis
 bheir e àrdachadh coileanaidh cudromach dhut.

 Tha an tasgadan bunaiteach sàbhailte, ach chan eil e a’ coileanadh gu math ma tha tòrr obair sgrìobhaidh / toirt air falbh agad.
 Bidh gnìomhachd sgrìobhaidh no toirt air falbh sam bith a’ dèanamh an tasgadan gu lèir neo-dhligheach, a’ dèanamh cinnteach gum faic leughaidhean às deidh sin an
 atharrachaidhean as ùire.

 ### innealan CLI
 Ma tha thu a’ cleachdadh inneal CLI mar [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 bidh thu gu cinnteach ag iarraidh gun tèid an tasgadan redis a chomasachadh, oir mairidh e thairis air gairmean an àithne `mo` .

 ## Sgàthan

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Bidh an àithne `mirror` a 'dèanamh lethbhreac aon-ùine de na faidhlichean gu lèir bho aon mobiletto gu fear eile.
 Chan eil e a 'ruith pròiseas sam bith gus an sgàthan a chumail suas thar ùine. Ruith an àithne `mirror` a-rithist
 gus faidhlichean sam bith a tha a dhìth a shioncronachadh.

 Tha an luach tilleadh bho `mirror` na nì sìmplidh le cunntairean airson cia mheud faidhle a bha soirbheachail
 mar sgàthan agus cia mheud faidhle anns an robh mearachdan:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 RABHADH: Faodaidh a bhith a’ toirt ùine mhòr agus leud-bann a bhith mar sgàthan air seataichean dàta mòra

 Leis a’ ghairm `mirror` ’ semantics faodaidh e a bhith troimh-a-chèile uaireannan a bhith a’ tuigsinn cò a th’ ann
 leughadair agus cò e an sgrìobhadair. Smaoinich air mar aithris sònrachaidh: an “làimhe clì mobiletto”
 is e an rud a thathas a’ sònrachadh dha (dàta sgàthan air a sgrìobhadh), agus an “làimh dheis mobiletto” (am
 argamaid ris an dòigh `mirror` ’) an luach a thathar a’ sònrachadh (tha dàta sgàthan air a leughadh).

 ## Crioptachadh follaiseach
 Dèan comas air crioptachadh follaiseach taobh teachdaiche:

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

 Dè tha dol? Tha eòlaire “inntrigeadh clàr-iùil” (dìreach) (crioptaichte) air leth a’ cumail sùil air dè na faidhlichean a tha ann
 eòlaire (aka an eòlaire dìreach).
 * Bidh an àithne `list` a’ leughadh na faidhlichean inntrigidh eòlaire, a’ dì-chrioptachadh gach slighe a tha air a liostadh; an uairsin tillidh e meata-dàta airson gach faidhle
 * Tha òrdughan `list` nas neo-èifeachdach, gu sònraichte airson clàran le àireamh mhòr de fhaidhlichean
 * Bidh an àithne `write` sgrìobhaidh` a’ sgrìobhadh faidhlichean dìreach ann an eòlaire dhìomhair gach pàrant, gu ath-chùrsach; an uairsin a’ sgrìobhadh am faidhle
 * Bidh òrdughan `write` a’ tighinn gu O(N) a’ sgrìobhadh, le N = doimhneachd ann an rangachd an eòlaire
 * Bidh an àithne `remove` a’ toirt air falbh am faidhle stiùiridh co-fhreagarrach, agus a phàrant ma tha e falamh, a-rithist; an uairsin thoir air falbh am faidhle
 * Bidh òrdughan ‘toirt air falbh’ neo-ath-chuairteach a’ toirt a-steach `remove` O(N) agus is dòcha uimhir de sguabadh às, le N = doimhneachd ann an rangachd an eòlaire
 * `remove` òrdughan ‘toirt air falbh’ ath-chuairteach air siostaman faidhle mòr is domhainn a bhith daor

 Thoir an aire, eadhon le crioptachadh taobh teachdaiche air a chomasachadh, nàmhaid le làn fhaicsinneachd a-steach don taobh frithealaiche crioptaichte agad
 faodaidh stòradh, eadhon às aonais an iuchair, fhathast an àireamh iomlan de chlàran fhaicinn agus cia mheud faidhle a tha anns gach fear, agus le
 beagan oidhirp, faigh a-mach cuid de structar iomlan rangachd an eòlaire no a h-uile càil.
 * Nòta: Cleachd structar meadhanach rèidh airson tèarainteachd nas fheàrr.*
 Cha bhiodh fios aig an nàmhaid air ainmean nan clàran/faidhlichean mura biodh fios aca air do chrioptachadh cuideachd
 iuchair no bha e air an crioptachadh a sgàineadh gu soirbheachail. Tha a h-uile geall dheth an uairsin!

 ### Coileanadh agus tasgadan
 Faodaidh gnìomhachd air stòradh crioptaichte a bhith slaodach. Faodaidh liostaichean ath-chuairteachaidh agus toirt air falbh a bhith gu math slaodach.
 Tha tasgadh tro redis na chuideachadh mòr, ach thoir an aire gu bheil an tasgadan air a sruthadh air sgrìobhadh no toirt air falbh.

 ## Cuairteachadh iuchrach
 Cruthaich mobiletto leis an iuchair ùr agad, agus an uairsin sgàthan an t-seann dàta a-steach ann:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Eadar-aghaidh draibhear
 Is e draibhear faidhle JS sam bith a dh’ às-mhalairt gnìomh ‘storageClient’ leis an ainm-sgrìobhte seo:

    function storageClient (key, secret, opts)

 * `key` : sreang, an iuchair API agad (airson an draibhear `local` is e seo am prìomh eòlaire)
 * `secret` : sreang, an dìomhair API agad (faodar a bhith air fhàgail a-mach airson an draibhear `local` )
 * `opts` ' : nì, tha na feartan per-driver:
 * Airson `local` , bidh na `fileMode` agus `dirMode` a’ dearbhadh mar a thèid faidhlichean cruthachaidh agus clàran ùra a chruthachadh
 * Airson `s3` , tha feum air an togalach `bucket` . Is e feartan roghainneil:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Feumaidh an nì a thilleas an gnìomh storageClient na gnìomhan seo a mhìneachadh:

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

 ## Logadh
 Bidh Mobiletto a’ cleachdadh an leabharlann logaidh [winston](https://www.npmjs.com/package/winston).

 Ann an logaichean ** bidh slighean faidhle agus teachdaireachdan mearachd, ach cha bhith ** gu bràth ** iuchraichean, dìomhaireachdan,
 no fiosrachadh rèiteachaidh ceangail sam bith eile.

 ### Ìre an loga
 Cleachd caochladair àrainneachd `MOBILETTO_LOG_LEVEL` gus an ìre loga a shuidheachadh, a' cleachdadh aon
 de na h-ìrean `npm` a tha air am mìneachadh ann an [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Is e an ìre bunaiteach `error` . Tha an ìre as gnìomhaiche ‘gòrach’, ged a tha e `silly` an-dràsta
 na logadh aig ìrean fo `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Faidhle loga
 Gu gnàthach, bidh an logger a’ sgrìobhadh chun consol. Gus logaichean a chuir gu faidhle, suidhich am faidhle `MOBILETTO_LOG_FILE`
 caochladair àrainneachd. Nuair a logas tu gu faidhle, cha tèid logaichean a sgrìobhadh chun chonsail tuilleadh.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Gus logadh a chuir dheth:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
