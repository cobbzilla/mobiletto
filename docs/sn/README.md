Mobiletto
 =========

 Mobiletto iJavaScript yekuchengetera abstraction layer, ine sarudzo yakajeka mutengi-padivi encryption.

 # Zviri mukati
 * [Nei Mobiletto?](#Sei-Mobiletto?)
 * [Kurumidza kutanga](#Kurumidza-kutanga)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Kwakabva](#Mabviro)
 * [Kuiswa](#Kuiswa)
 * [Kutsigira uye Mari](#Kutsigira-uye-Mari)
 * [Basic kushandiswa](#Basic-kushandisa)
 * [Metadata](#Metadata)
 * [Mamwe maitiro ekunze](#Alternate-import-style)
 * [Kuchengeta](#Kuchengeta)
 * [Mirroring](#Mirroring)
 * [Transparent encryption](#Transparent-encryption)
 * [Kiyi kutenderera](#Kiyi-kutenderera)
 * [Mutyairi interface](#Driver-interface)
 * [Kutema](#Logging)

 # Verenga izvi mune mumwe mutauro
 Gwaro iri README.md rakashandurwa, kuburikidza ne[hokeylization](https://github.com/cobbzilla/hokeylization), kupinda
 **[mitauro yese inotsigirwa neGoogle Translate](https://cloud.google.com/translate/docs/languages)!**

 Ndine chokwadi kuti haina kukwana, asi ndinovimba iri nani pane hapana!

 [🇸🇦 ChiArabic](../ar/README.md)
 [🇧🇩 Chibengali](../bn/README.md)
 [🇩🇪 ChiGerman](../de/README.md)
 [🇺🇸 Chirungu](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Chiputukezi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Mitauro Yese ...](../README.md)**
 ----

 ### Pane dambudziko here neshanduro iyi yeREADME?
 Iyi chaiyo shanduro yepakutanga [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 inogona kunge isina kukanganisa -- *kugadzirisa kunogamuchirwa!* Ndokumbira utumire [kudhonza chikumbiro paGitHub](https://github.com/cobbzilla/mobiletto/pulls),
 kana kuti kana usina kusununguka kuita izvozvo, [vhura nyaya](https://github.com/cobbzilla/mobiletto/issues)

 Kana iwe ukagadzira itsva GitHub nyaya nezve dudziro, ndapota ita:
 * sanganisira iyo URL peji (kopi/namira kubva kubrowser kero bar)
 * sanganisira iwo chaiwo mameseji asiri iwo (kopi/namira kubva kubrowser)
 * ndapota tsanangura kuti chii chakaipa -- shanduro haina kururama here? iyo fomati yakatyoka neimwe nzira?
 * nemutsa ipa zano reshanduro iri nani, kana kuti mashoko acho anofanira kurongwa zvakanaka sei
 * **Ndatenda!**

 ## Sei Mobiletto?

 ### Kwaziwai mutengesi kukiya-mukati!
 Iwo akasiyana-siyana ekuchengetedza gore ane asingaenderane APIs. Kunyangwe avo vanovavarira "S3 kuenderana"
 vane maitiro asina musoro.

 Paunosarudza imwe yekuchengetera mutengesi yeapp yako, kana iwe ukakodha zvakananga kune yavo API, yako app
 yava kutsamira pasevhisi iyoyo. Sezvo nguva inofamba uye kodhi inounganidza, kuchinja vatengesi kunova
 kuwedzera kusatendeseka. Kugamuchirwa kune inonakidza nyika yevatengesi kukiya-mukati!

 Mobiletto yakagadzirirwa kugadzirisa dambudziko iri. Nekukodha app yako kune mobiletto's API, unogona nyore
 chinja vanopa kuchengetedza uye uzive kuti dura rekuchengetedza reapp yako rinoita zvakafanana.

 ### Kuedza kwakadzama
 Vese vatyairi vanoongororwa maitiro akafanana ne60+ bvunzo kumutyairi wega wega.
 Isu tinoedza vese vatyairi nemusanganiswa wese we:
 * Encryption: ese akagoneswa uye akaremara
 * Redis cache: ese akagoneswa uye akaremara

 Iyi nzira inotipa runyararo-rwepfungwa kuti mobiletto ichaita zvimwe chete zvisinei kuti unoshandisa mutyairi upi,
 uye zvisinei nekuti unogonesa caching uye/kana encryption.

 ### Tsigiro yemutyairi
 Iyezvino Mobiletto kuchengetedza madhiraivha:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : yenzvimbo faira system

 *Mipiro yekutsigira mamwe vatariri vekuchengetedza gore inogamuchirwa kwazvo!*

 ## mobiletto-cli
 Mobiletto inotarisirwa kushandiswa seraibhurari neimwe JavaScript kodhi.

 Kuti ushande nemobiletto pamutsetse wekuraira, shandisa [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Source
 * [mobiletto paGitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto pa npm](https://www.npmjs.com/package/mobiletto)

 ## Tsigiro uye Mari
 Ndiri kuyedza kuve nyanzvi yakavhurika sosi software yekuvandudza. Ndanga ndichishanda mu
 indasitiri yemasoftware kwemakore mazhinji, ndakatanga makambani akabudirira uye ndikaatengesa kumakambani eruzhinji.
 Munguva ichangopfuura ndakarasikirwa nebasa rangu, uye handina chaizvoizvo rimwe basa ripi neripi rakarongwa

 Saka ndichaedza kunyora software inobatsira uye kuona kana izvo zvinoshanda

 Kana iwe uchinakidzwa nekushandisa iyi software, ndingatenda zvikuru kunyangwe iyo
 diki [mupiro wepamwedzi nePatreon](https://www.patreon.com/cobbzilla)

 *Ndatenda!*

 ## Kuiswa
 Isa uchishandisa `npm` kana `yarn` . Iwe unogona kunge uchida iyo `lite` isingasanganisire ese
 mafaira akaturikirwa README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Kana iwe uchinyatsoda iwo README mafaera mumitauro yese, isa iyo yakazara vhezheni:

    npm install mobiletto
    yarn add mobiletto

 ## Kurumidza Kutanga
 Muenzaniso mupfupi uchishandisa mobiletto `s3` mutyairi.

 Kodhi iyi yaizomhanya zvakafanana kana mutyairi ari `b2` kana `local` .

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
 ## Basic kushandiswa
 Muenzaniso wakawedzera wakawedzera, unoratidza mazhinji ezvimiro zvinopihwa:

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
 Iwo `metadata` murairo unodzosa metadata nezve imwechete filesystem yekupinda.
 Saizvozvowo, kukosha kwekudzoka kubva ku `list` .

 Chinhu chemetadata chinotaridzika seizvi:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 The `type` pfuma inogona kuva `file` , `dir` , `link` , kana `special` .

 Zvichienderana nerudzi rwemutyairi, `list` command inogona kusadzosa nzvimbo dzese. The `name` uye `type` zvivakwa
 inofanira kuvapo nguva dzose. Murairo unotevera `metadata` uchadzosa zvese zviripo.

 ## Imwe nzira yekupinza
 Ngenisa iyo yakazara-yakakwenenzverwa module uye shandisa iyo `connect` basa:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Kuchengeta
 Mobiletto inoshanda zvakanyanya ne <a href="https://redis.io">redis</a> cache.

 Mobiletto ichaedza kubatanidza kune redis muenzaniso pa127.0.0.1:6379

 Iwe unogona kukanganisa chimwe cheizvi:
 * Seta iyo `MOBILETTO_REDIS_HOST` env var, mobiletto batanidza pano pane yemunohost
 * Seta iyo `MOBILETTO_REDIS_PORT` env var, chiteshi ichi chichashandiswa

 Mobiletto ichachengeta makiyi ayo ese eredis ane prefix `_mobiletto__` . Unogona kushandura izvi
 nekuisa iyo `MOBILETTO_REDIS_PREFIX` env var.

 Iwe unogona zvakare kuseta yega-yekubatanidza caching `opts.redisConfig` chinhu:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Hausi kuda redis caching?
 Kudzima: pfuura `enabled: false` chako `opts.redisConfig` chako.

 Sezvakakurukurwa pazasi, kudzima caching kuchava nemhedzisiro yakaipa pakuita uye kuunza zvimwe zvikumbiro
 kuti uchengete zvaunonyatsoda.

 ### Caching nhungamiro
 ** Chengetedzo yakavharidzirwa **: kuverenga / kunyora encrypted kuchengetedza kunongo nonoka pane zvakajairika,
 asi kufamba uchitenderedza madhairekitori (anoitwa nezvimwe zvinhu) anodhura. Kushandisa redis cache
 ichakupa kukosha kwekuita kwekusimudzira.

 Iyo default cache yakachengeteka, asi haina kuita zvakanaka kana uine yakawanda yekunyora/kubvisa maoperation.
 Chero kunyora kana kubvisa mashandiro anoita kuti cache yese isashande, kuve nechokwadi kuti inotevera kuverenga ichaona iyo
 shanduko dzichangoburwa.

 ### CLI zvishandiso
 Kana uri kushandisa CLI chishandiso senge [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 iwe zvechokwadi uchada kuti redis cache igoneswe, sezvo inogara mukati mekukumbira kweiyo `mo` murairo.

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Iwo `mirror` rairo rinoita kopi-yenguva yemafaira ese kubva kune imwe mobiletto kuenda kune imwe.
 Iyo haimhanyi chero nzira yekuchengetedza girazi nekufamba kwenguva. Mhanya iyo `mirror` kuraira zvakare
 kuwiriranisa chero mafaira asipo.

 Iko kukosha kwekudzoka kubva `mirror` chinhu chiri nyore chine zviverengero zvekuti mangani mafaera akabudirira
 mirrored uye mangani mafaera aive nezvikanganiso:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 YAMBIRO: Kuona maseti makuru edata anogona kutora nguva zvakanyanya uye bandwidth-yakanyanya

 `mirror` yekufona semantics dzimwe nguva zvinogona kuvhiringa kunzwisisa kuti ndiani
 muverengi uye munyori ndiani. Fungidzira kunge chirevo chekugoverwa: iyo "ruboshwe-ruboshwe mobiletto"
 ndicho chinhu chiri kupihwa (yakamisikidzwa data yakanyorwa), uye "kurudyi-kurudyi mobiletto" (the
 nharo kune `mirror` nzira) ndiko kukosha kuri kupihwa (mirrored data inoverengwa).

 ## Transparent encryption
 Gonesa transparent client-side encryption:

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

 Chii chiri kuitika? Iyo yakaparadzana "dhairekitori yekupinda" (dirent) dhairekitori (yakavharidzirwa) inoteedzera mafaera arimo
 dhairekitori (aka iyo dirent dhairekitori).
 * Iyo `list` yekupinda mafaera, decrypts yega nzira yakanyorwa; wozodzosera metadata yefaira rega rega
 * `list` mirairo haina kunyatso shanda, kunyanya kune madhairekitori ane nhamba huru yemafaira
 * Iwo `write` murairo unonyora dirent mafaera mune yega yega dhairekitori remubereki, achidzokorora; ipapo anonyora faira
 * `write` mirairo ichaunza O (N) inonyora, ine N = kudzika mune dhairekitori hierarchy
 * Murairo `remove` unobvisa faira rinoenderana, uye mubereki waro kana asina chinhu, achidzokorodza; wobva wabvisa faira
 * Isiri-inodzokorodza `remove` mirairo ichaunza O(N) kuverenga uye zvingangoita sekudzima kwakawanda, neN = kudzika mudhairekitori dhairekitori.
 * Recursive `remove` mirairo pane yakakura uye yakadzika mafaera system inogona kudhura

 Ziva kuti kunyangwe neclient-side encryption yakagoneswa, mhandu ine kuoneka kuzere mune yako encrypted server-side.
 chengetedzo, kunyangwe isina kiyi, ichiri kuona huwandu hwemadhairekitori uye kuti mangani mafaera mune imwe neimwe, uye ane
 kumwe kuedza, tsvaga zvimwe kana zvese zvechimiro chese chedhairekitori hierarchy.
 *Cherechedza: Shandisa chimiro chakati sandara kuti uchengetedze zvirinani.
 Muvengi haaizoziva mazita emadhairekitori / mafaera kunze kwekunge vaizivawo encryption yako
 kiyi kana kuti anga akwanisa kupaza encryption. Mabheti ese adzimwa ipapo!

 ### Kuita uye caching
 Mashandisirwo ekuchengetera encrypted anogona kunonoka. Recursive listings uye kubviswa kunogona kunonoka.
 Kuchengetedza kuburikidza ne redis kunobatsira zvikuru, asi cherechedza kuti cache inoputirwa pane chero inonyora kana kubvisa.

 ## Kutenderera kwakakosha
 Gadzira mobiletto nekiyi yako nyowani, wobva watarisa iyo yekare data mairi:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Mutyairi interface
 Mutyairi chero JS faira inotumira kunze kwe 'storageClient' basa neichi siginicha:

    function storageClient (key, secret, opts)

 * `key` : tambo, kiyi yako `local` iyi ndiyo base dhairekitori)
 * `secret` : tambo, yako API chakavanzika (inogona kusiiwa kune `local` mutyairi)
 * `opts` : chinhu, zvivakwa zvacho ndezvamutyairi wega wega:
 * Kune `local` , iyo `fileMode` uye `dirMode` zvivakwa zvinotarisa kuti matsva ekugadzira mafaera nemadhairekitori anogadzirwa sei.
 * Kune `s3` , iyo `bucket` pfuma inodiwa. Optional properties ndezvi:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Chinhu icho chekuchengetedzaClient basa rinodzoka chinofanira kutsanangura aya mabasa:

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

 ## Kutema
 Mobiletto inoshandisa [winston](https://www.npmjs.com/package/winston) raibhurari yekutema matanda.

 Marogi ** achave ** ane mafaera nzira uye mhosho meseji, asi ** haazombove ** ane makiyi, zvakavanzika,
 kana chero rumwe ruzivo rwekubatanidza gadziriso.

 ### Log level
 Shandisa `MOBILETTO_LOG_LEVEL` shanduko yenzvimbo kuseta irogi, uchishandisa imwe
 ye `npm` mazinga anotsanangurwa mu [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Default level ndeye `error` . Chirevo chezwi chakanyanya ndeche `silly` , kunyangwe parizvino mobiletto
 haipindi pamatanho ari pazasi `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log file
 Nokusingaperi, murogi anonyora kune console. Kuti utumire magwaro kufaira, isa iyo `MOBILETTO_LOG_FILE`
 environment variable. Paunenge uchidhinda kufaira, matanda haachanyorwe kune iyo console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Kudzima matanda:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
