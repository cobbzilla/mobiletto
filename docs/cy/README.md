Mobiletto
 =========

 Mae Mobiletto yn haen tynnu storio JavaScript, gydag amgryptio ochr y cleient tryloyw dewisol.

 # Cynnwys
 * [Pam Mobiletto?](#Pam-Mobiletto?)
 * [Cychwyn cyflym](#cychwyn cyflym)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Ffynhonnell](#Ffynhonnell)
 * [Gosod](# Gosod)
 * [Cymorth a Chyllido](#Cymorth-a-Cyllid)
 * [Defnydd sylfaenol](#-defnydd sylfaenol)
 * [Metadata](#Metadata)
 * [Arddull mewnforio amgen](# amgen-mewnforio-arddull)
 * [Casio](#Caching)
 * [Drych](#Drych)
 * [Amgryptio tryloyw](# Tryloyw-amgryptio)
 * [Cylchdro allweddol](# Key-cylchdro)
 * [Rhyngwyneb gyrrwr](# rhyngwyneb gyrrwr)
 * [Logio](#Logio)

 # Darllenwch hwn mewn iaith arall
 Mae'r ddogfen README.md hon wedi'i chyfieithu, trwy [hokeylization](https://github.com/cobbzilla/hokeylization), i mewn i
 **[pob iaith a gefnogir gan Google Translate]( https://cloud.google.com/translate/docs/languages)!**

 Rwy'n sicr nad yw'n berffaith, ond gobeithio ei fod yn well na dim!

 [🇸🇦 Arabeg](../ar/README.md)
 [🇧🇩 Bengaleg](../bn/README.md)
 [🇩🇪 Almaeneg](../de/README.md)
 [🇺🇸 Saesneg](../cy/README.md)
 [🇪🇸 Sbaeneg](../es/README.md)
 [🇫🇷 Ffrangeg](../fr/README.md)
 [🇹🇩 Hawsa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneseg](../id/README.md)
 [🇮🇹 Eidaleg](../it/README.md)
 [🇯🇵 Japaneaidd](../ja/README.md)
 [🇰🇷 Corea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pwyleg](../pl/README.md)
 [🇧🇷 Portiwgaleg](../pt/README.md)
 [🇷🇺 Rwsieg](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Twrceg](../tr/README.md)
 [🇵🇰 Wrdw](../ur/README.md)
 [🇻🇳 Fietnameg](../vi/README.md)
 [🇨🇳 Tsieinëeg](../zh/README.md)


 **[📚 ... Pob Iaith ...](../README.md)**
 ----

 ### A oes problem gyda'r cyfieithiad hwn o'r README?
 Mae'r cyfieithiad penodol hwn o'r [README] gwreiddiol ( https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 gall fod yn ddiffygiol -- *mae croeso mawr i gywiriadau!* Anfonwch [cais tynnu ar GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 neu os nad ydych chi'n gyfforddus yn gwneud hynny, [agorwch broblem]( https://github.com/cobbzilla/mobiletto/issues )

 Pan fyddwch chi'n creu rhifyn GitHub newydd am gyfieithiad, gwnewch y canlynol:
 * cynnwys URL y dudalen (copïo / pastio o far cyfeiriad y porwr)
 * cynnwys yr union destun sy'n anghywir (copïo / pastio o'r porwr)
 * disgrifiwch beth sy'n bod -- ydy'r cyfieithiad yn anghywir? a yw'r fformatio wedi torri rhywsut?
 * cynigiwch yn garedig awgrym o well cyfieithiad, neu sut y dylid fformatio'r testun yn gywir
 * **Diolch!**

 ## Pam Mobiletto?

 ### Hwyl fawr i'r gwerthwr cloi i mewn!
 Mae gan y gwahanol ddarparwyr storio cwmwl APIs anghydnaws. Hyd yn oed y rhai sy'n ymdrechu am "gydnawsedd S3"
 yn meddu ar ymddygiadau idiosyncratig.

 Pan fyddwch chi'n dewis gwerthwr storio penodol ar gyfer eich app, os ydych chi'n codio'n uniongyrchol i'w API, eich app
 bellach yn ddibynnol ar y gwasanaeth hwnnw. Wrth i amser fynd heibio ac i'r cod gronni, daw gwerthwyr sy'n newid
 yn gynyddol anghynaladwy. Croeso i fyd hwyliog cloi i mewn i werthwyr!

 Cynlluniwyd Mobiletto i ddatrys y broblem hon. Trwy godio'ch ap i API mobiletto, gallwch chi'n hawdd
 newid darparwyr storio a gwybod y bydd haen storio eich app yn ymddwyn yn union yr un fath.

 ### Profi helaeth
 Mae pob gyrrwr yn cael ei brofi am yr un ymddygiad gyda 60+ o brofion ar gyfer pob gyrrwr.
 Rydym yn profi pob gyrrwr gyda phob cyfuniad o:
 * Amgryptio: wedi'i alluogi a'i anabl
 * cache Redis: wedi'i alluogi a'i anabl

 Mae'r dull hwn yn rhoi tawelwch meddwl i ni y bydd mobiletto yn ymddwyn yr un fath ni waeth pa yrrwr rydych chi'n ei ddefnyddio,
 ac ni waeth a ydych yn galluogi caching a/neu amgryptio.

 ### Cefnogaeth gyrrwr
 Gyrwyr storio Mobiletto cyfredol:
 * `s3` : Amazon S3
 * `b2` : Blaze B2
 * `local` : system ffeiliau leol

 *Mae croeso mawr i gyfraniadau i gefnogi mwy o ddarparwyr storio cwmwl!*

 ## symudoltto-cli
 Bwriedir i Mobiletto gael ei ddefnyddio fel llyfrgell gan god JavaScript arall.

 I weithio gyda mobiletto yn y llinell orchymyn, defnyddiwch [mobiletto-cli]( https://www.npmjs.com/package/mobiletto-cli)

 ## Ffynhonnell
 * [mobiletto ar GitHub]( https://github.com/cobbzilla/mobiletto)
 * [mobiletto ar npm]( https://www.npmjs.com/package/mobiletto)

 ## Cefnogaeth a Chyllid
 Rwy'n ceisio bod yn ddatblygwr meddalwedd ffynhonnell agored proffesiynol. Rwyf wedi bod yn gweithio yn
 y diwydiant meddalwedd ers blynyddoedd lawer, rwyf wedi dechrau cwmnïau llwyddiannus ac wedi eu gwerthu i gwmnïau cyhoeddus.
 Yn ddiweddar collais fy swydd, ac nid oes gennyf unrhyw waith arall wedi'i drefnu

 Felly rydw i'n mynd i geisio ysgrifennu meddalwedd defnyddiol a gweld a yw hynny'n gweithio

 Os ydych chi'n mwynhau defnyddio'r feddalwedd hon, byddwn yn ddiolchgar iawn am hyd yn oed y
 lleiaf [cyfraniad misol trwy Patreon]( https://www.patreon.com/cobbzilla)

 *Diolch!*

 ## Gosod
 Gosod gan ddefnyddio `npm` neu `yarn` . Mae'n debyg eich bod chi eisiau'r fersiwn `lite` nad yw'n cynnwys yr holl
 ffeiliau README wedi'u cyfieithu:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Os ydych chi wir eisiau'r ffeiliau README ym mhob iaith, gosodwch y fersiwn lawn:

    npm install mobiletto
    yarn add mobiletto

 ## Cychwyn Cyflym
 Enghraifft fer yn defnyddio'r gyrrwr `s3` .

 Byddai'r cod hwn yn rhedeg yr un peth pe bai'r gyrrwr yn `b2` neu `local` .

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
 ## Defnydd sylfaenol
 Enghraifft llawer mwy helaeth, yn dangos y rhan fwyaf o'r nodweddion a gynigir:

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
 Mae'r gorchymyn `metadata` yn dychwelyd metadata am un cofnod system ffeiliau.
 Yn yr un modd, mae'r gwerth dychwelyd o'r gorchymyn `list` yn amrywiaeth o wrthrychau metadata.

 Mae gwrthrych metadata yn edrych fel hyn:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Gall yr eiddo `type` fod yn `file` , `dir` , `link` , neu `special` .

 Yn dibynnu ar y math o yrrwr, efallai na fydd gorchymyn `list` yn dychwelyd pob maes. `name` a `type`
 dylai fod yn bresennol bob amser. Bydd gorchymyn `metadata` dilynol yn dychwelyd yr holl briodweddau sydd ar gael.

 ## Arddull mewnforio amgen
 Mewnforiwch y modiwl â chwmpas llawn a defnyddiwch y swyddogaeth `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mae Mobiletto yn gweithio orau gyda storfa <a href="https://redis.io">redis</a> .

 Bydd Mobiletto yn ceisio cysylltu ag enghraifft redis ar 127.0.0.1:6379

 Gallwch ddiystyru unrhyw un o'r rhain:
 * Gosodwch yr amg var `MOBILETTO_REDIS_HOST` , mobileto cysylltu yma yn lle localhost
 * Gosodwch yr env var `MOBILETTO_REDIS_PORT` , bydd y porth hwn yn cael ei ddefnyddio

 Bydd Mobiletto yn storio ei holl allweddi redis gyda'r rhagddodiad `_mobiletto__` . Gallwch chi newid hyn
 trwy osod y `MOBILETTO_REDIS_PREFIX` var.

 Gallwch hefyd osod caching fesul-cysylltiad gyda'r gwrthrych `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ddim eisiau caching redis?
 I analluogi: pasiwch `enabled: false` yn eich gwrthrych `opts.redisConfig` pan fyddwch yn sefydlu'ch cysylltiad.

 Fel y trafodir isod, bydd analluogi caching yn cael effaith andwyol ar berfformiad ac yn arwain at fwy o geisiadau
 i storio y mae gwir angen ichi.

 ### Canllawiau caching
 **Storfa wedi'i hamgryptio**: dim ond ychydig yn arafach na'r arfer y mae storfa wedi'i hamgryptio darllen/ysgrifennu,
 ond mae llywio o gwmpas cyfeirlyfrau (y mae rhai pethau'n ei wneud) yn weddol ddrud. Gan ddefnyddio storfa redis
 yn rhoi hwb perfformiad sylweddol i chi.

 Mae'r storfa ddiofyn yn ddiogel, ond nid yw'n perfformio'n dda os oes gennych lawer o weithrediadau ysgrifennu / dileu.
 Mae unrhyw weithred ysgrifennu neu ddileu yn annilysu'r storfa gyfan, gan sicrhau y bydd darlleniadau dilynol yn gweld y
 newidiadau diweddaraf.

 ### offer CLI
 Os ydych chi'n defnyddio teclyn CLI fel [mobiletto-cli]( https://www.npmjs.com/package/mobiletto-cli),
 byddwch yn bendant am i'r storfa redis alluogi, gan ei fod yn para ar draws galwadau o'r gorchymyn `mo` .

 ## Drychio

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Mae'r gorchymyn `mirror` yn perfformio copi un-amser o'r holl ffeiliau o un ffôn symudol i un arall.
 Nid yw'n rhedeg unrhyw broses i gynnal y drych dros amser. Rhedeg y gorchymyn `mirror` eto
 i gysoni unrhyw ffeiliau coll.

 Mae'r gwerth dychwelyd o `mirror` yn wrthrych syml gyda rhifyddion ar gyfer faint o ffeiliau oedd yn llwyddiannus
 wedi'i adlewyrchu a faint o ffeiliau oedd â gwallau:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 RHYBUDD: Gall adlewyrchu setiau data mawr gymryd llawer iawn o amser a lled band-ddwys

 Gyda’r alwad `mirror` yn semanteg weithiau gall fod yn ddryslyd deall pwy yw’r
 darllenydd a phwy yw yr ysgrifenydd. Dychmygwch ef fel datganiad aseiniad: y "mobileto llaw chwith"
 yw'r peth sy'n cael ei neilltuo i (drych data ysgrifenedig), a'r "de-law mobiletto" (y
 dadl i'r dull `mirror` ) yw'r gwerth sy'n cael ei neilltuo (darllenir data drych).

 ## Amgryptio tryloyw
 Galluogi amgryptio ochr cleient tryloyw:

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

 Beth sy'n Digwydd? Mae cyfeiriadur "mynediad cyfeiriadur" (cyfeirlyfr) ar wahân (wedi'i amgryptio) yn olrhain pa ffeiliau sydd ynddo
 cyfeiriadur (aka y cyfeiriadur uniongyrchol).
 * Mae'r gorchymyn `list` yn darllen y ffeiliau mynediad cyfeiriadur, yn dadgryptio pob llwybr a restrir; yna'n dychwelyd metadata ar gyfer pob ffeil
 * Mae gorchmynion `list` yn fwy aneffeithlon, yn enwedig ar gyfer cyfeiriaduron gyda nifer fawr o ffeiliau
 * Mae'r gorchymyn `write` ysgrifennu` yn ysgrifennu ffeiliau uniongyrchol yng nghyfeirlyfr uniongyrchol pob rhiant, yn rheolaidd; wedyn yn ysgrifennu'r ffeil
 * Bydd gorchmynion `write` yn arwain at O(N) yn ysgrifennu, gydag N = dyfnder yn hierarchaeth y cyfeiriadur
 * Mae'r gorchymyn `remove` yn dileu'r ffeil uniongyrchol gyfatebol, a'i riant os yw'n wag, yn ailadroddus; yna yn tynnu'r ffeil
 * Bydd gorchmynion `remove` nad ydynt yn ailadroddus yn golygu darlleniadau O(N) ac o bosibl cymaint o ddileu, gyda N = dyfnder yn hierarchaeth y cyfeiriadur
 * Gall gorchmynion `remove` ar systemau ffeiliau mawr a dwfn fod yn ddrud

 Sylwch, hyd yn oed gydag amgryptio ochr cleient wedi'i alluogi, gwrthwynebydd gyda gwelededd llawn i ochr eich gweinydd wedi'i amgryptio
 storio, hyd yn oed heb yr allwedd, yn dal i allu gweld cyfanswm nifer y cyfeiriaduron a faint o ffeiliau sydd ym mhob un, a gyda
 rhywfaint o ymdrech, darganfod rhywfaint neu'r cyfan o strwythur cyffredinol yr hierarchaeth gyfeiriadur.
 *Sylwer: Defnyddiwch strwythur gweddol wastad ar gyfer gwell diogelwch.*
 Ni fyddai'r gwrthwynebydd yn gwybod enwau'r cyfeiriaduron/ffeiliau oni bai ei fod hefyd yn gwybod eich amgryptio
 allweddol neu wedi cracio'r amgryptio yn llwyddiannus fel arall. Mae pob bet i ffwrdd felly!

 ### Perfformiad a caching
 Gall gweithrediadau ar storfa wedi'i hamgryptio fod yn araf. Gall rhestrau ailadroddus a dileu fod yn araf iawn.
 Mae cadw trwy redis yn help aruthrol, ond sylwch fod y storfa'n cael ei fflysio ar unrhyw beth sy'n cael ei ysgrifennu neu ei ddileu.

 ## Cylchdro allweddol
 Creu mobiletto gyda'ch allwedd newydd, yna drychwch yr hen ddata ynddo:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## rhyngwyneb gyrrwr
 Gyrrwr yw unrhyw ffeil JS sy'n allforio swyddogaeth 'storageClient' gyda'r llofnod hwn:

    function storageClient (key, secret, opts)

 * `key` : llinyn, eich allwedd API (ar gyfer y gyrrwr `local` dyma'r cyfeiriadur sylfaenol)
 * `secret` : llinyn, eich cyfrinach API (gellir ei hepgor ar gyfer y gyrrwr `local` )
 * `opts` : gwrthrych, mae'r priodweddau fesul gyrrwr:
 * Ar gyfer `local` , mae'r `fileMode` a `dirMode` yn pennu sut mae ffeiliau a chyfeiriaduron creu newydd yn cael eu creu
 * Ar gyfer `s3` , mae angen yr eiddo `bucket` . Priodweddau dewisol yw:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Rhaid i'r gwrthrych y mae'r swyddogaeth storageClient yn ei ddychwelyd ddiffinio'r swyddogaethau hyn:

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

 ## Logio
 Mae Mobiletto yn defnyddio llyfrgell logio [winston](https://www.npmjs.com/package/winston).

 Bydd logiau ** yn cynnwys llwybrau ffeil a negeseuon gwall, ond ni fydd **byth** yn cynnwys allweddi, cyfrinachau,
 neu unrhyw wybodaeth cyfluniad cysylltiad arall.

 ### Lefel log
 Defnyddiwch y newidyn amgylchedd `MOBILETTO_LOG_LEVEL` i osod lefel y log, gan ddefnyddio un
 o'r lefelau `npm` a ddiffinnir yn [https://www.npmjs.com/package/winston#logging-levels]( https://www.npmjs.com/package/winston#logging-levels )

 Y lefel ddiofyn yw `error` . Y lefel fwyaf llafar yw `silly` , er yn mobiletto ar hyn o bryd
 ddim yn mewngofnodi ar lefelau islaw `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Ffeil log
 Yn ddiofyn, mae'r cofnodwr yn ysgrifennu at y consol. I anfon logiau i ffeil, gosodwch y `MOBILETTO_LOG_FILE`
 newidyn amgylchedd. Wrth fewngofnodi i ffeil, ni fydd logiau'n cael eu hysgrifennu i'r consol mwyach.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 I ddiffodd y logio:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
