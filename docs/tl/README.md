Mobiletto
 =========

 Ang Mobiletto ay isang JavaScript storage abstraction layer, na may opsyonal na transparent na client-side encryption.

 # Nilalaman
 * [Bakit Mobiletto?](#Why-Mobiletto?)
 * [Quick start](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Pag-install](#Pag-install)
 * [Suporta at Pagpopondo](#Support-and-Funding)
 * [Basic na paggamit](#Basic-usage)
 * [Metadata](#Metadata)
 * [Alternate import style](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparent na pag-encrypt](#Transparent-encryption)
 * [Pag-ikot ng key](#Pag-ikot ng key)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Basahin ito sa ibang wika
 Itong README.md na dokumento ay isinalin, sa pamamagitan ng [hokeylization](https://github.com/cobbzilla/hokeylization), sa
 **[bawat wikang sinusuportahan ng Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Natitiyak kong hindi ito perpekto, ngunit umaasa ako na ito ay mas mahusay kaysa sa wala!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italyano](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Lahat ng Wika ...](../README.md)**
 ----

 ### May problema ba sa pagsasaling ito ng README?
 Ang partikular na pagsasaling ito ng orihinal na [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 maaaring may depekto -- *ang mga pagwawasto ay malugod na tinatanggap!* Mangyaring magpadala ng [pull request sa GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o kung hindi ka komportableng gawin iyon, [magbukas ng isyu](https://github.com/cobbzilla/mobiletto/issues)

 Kapag gumawa ka ng bagong isyu sa GitHub tungkol sa isang pagsasalin, mangyaring gawin ang:
 * isama ang URL ng pahina (kopyahin/i-paste mula sa address bar ng browser)
 * isama ang eksaktong text na mali (kopyahin/i-paste mula sa browser)
 * mangyaring ilarawan kung ano ang mali -- mali ba ang pagsasalin? sira ba ang formatting kahit papaano?
 * mabait na mag-alok ng isang mungkahi ng isang mas mahusay na pagsasalin, o kung paano ang teksto ay dapat na maayos na na-format
 * **Salamat!**

 ## Bakit Mobiletto?

 ### Paalam vendor lock-in!
 Ang iba't ibang mga provider ng cloud storage ay may mga hindi tugmang API. Kahit na ang mga nagsusumikap para sa "S3 compatibility"
 may idiosyncratic na pag-uugali.

 Kapag pumili ka ng partikular na vendor ng storage para sa iyong app, kung direkta kang magko-code sa kanilang API, ang iyong app
 ay nakadepende na ngayon sa serbisyong iyon. Habang lumilipas ang panahon at naiipon ang code, nagiging nagbabago ang mga vendor
 lalong hindi matitiis. Maligayang pagdating sa masayang mundo ng vendor lock-in!

 Ang Mobiletto ay idinisenyo upang malutas ang problemang ito. Sa pamamagitan ng pag-coding sa iyong app sa mobiletto's API, madali mong magagawa
 baguhin ang mga provider ng storage at alamin na ang layer ng storage ng iyong app ay magiging magkapareho.

 ### Malawak na pagsubok
 Ang lahat ng mga driver ay sinubok para sa magkatulad na pag-uugali na may 60+ na pagsubok para sa bawat driver.
 Sinusubukan namin ang lahat ng mga driver sa bawat kumbinasyon ng:
 * Encryption: parehong pinagana at hindi pinagana
 * Redis cache: parehong pinagana at hindi pinagana

 Ang diskarte na ito ay nagbibigay sa amin ng kapayapaan ng isip na ang mobiletto ay magiging pareho ang kilos anuman ang ginagamit mong driver,
 at hindi alintana kung pinagana mo ang pag-cache at/o pag-encrypt.

 ### Suporta sa driver
 Kasalukuyang mga driver ng imbakan ng Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokal na filesystem

 *Ang mga kontribusyon upang suportahan ang higit pang mga provider ng cloud storage ay malugod na tinatanggap!*

 ## mobiletto-cli
 Ang Mobiletto ay inilaan na gamitin bilang isang library ng ibang JavaScript code.

 Upang gumana sa mobiletto sa command-line, gamitin ang [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Pinagmulan
 * [mobiletto sa GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto sa npm](https://www.npmjs.com/package/mobiletto)

 ## Suporta at Pagpopondo
 Sinusubukan kong maging isang propesyonal na open source software developer. Ako ay nagtatrabaho sa
 sa industriya ng software sa loob ng maraming taon, sinimulan ko ang mga matagumpay na kumpanya at ibinenta ang mga ito sa mga pampublikong kumpanya.
 Kamakailan ay nawalan ako ng trabaho, at wala talaga akong ibang trabahong naka-line up

 Kaya't susubukan kong magsulat ng kapaki-pakinabang na software at tingnan kung gumagana iyon

 Kung masiyahan ka sa paggamit ng software na ito, ako ay lubos na nagpapasalamat para sa kahit na ang
 pinakamaliit [buwanang kontribusyon sa pamamagitan ng Patreon](https://www.patreon.com/cobbzilla)

 *Salamat!*

 ## Pag-install
 I-install gamit `npm` o `yarn` . Malamang na gusto mo ang `lite` na bersyon na hindi kasama ang lahat ng
 isinalin na README file:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Kung talagang gusto mo ang README file sa bawat wika, i-install ang buong bersyon:

    npm install mobiletto
    yarn add mobiletto

 ## Mabilis na Pagsisimula
 Isang maikling halimbawa gamit ang mobiletto `s3` driver.

 Ang code na ito ay tatakbo nang pareho kung ang driver ay `b2` o `local` .

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
 ## Pangunahing paggamit
 Isang mas malawak na halimbawa, na nagpapakita ng karamihan sa mga tampok na inaalok:

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
 Ang utos `metadata` ay nagbabalik ng metadata tungkol sa isang entry ng filesystem.
 Gayundin, ang return value mula sa command na `list` ay isang hanay ng mga metadata object.

 Ang isang metadata object ay ganito ang hitsura:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ang property na ` `type` ay maaaring `file` , `dir` , `link` , o `special` .

 Depende sa uri ng driver, maaaring hindi ibalik ng `list` command ang lahat ng field. Ang mga katangian ng `name` at `type`
 dapat laging naroroon. Ibabalik ng kasunod na command `metadata` ang lahat ng available na property.

 ## Kahaliling istilo ng pag-import
 I-import ang fully-scoped module at gamitin ang `connect` function:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Pag-cache
 Pinakamahusay na gumagana ang Mobiletto sa isang <a href="https://redis.io">redis</a> cache.

 Susubukan ng Mobiletto na kumonekta sa isang redis instance sa 127.0.0.1:6379

 Maaari mong i-override ang alinman sa mga ito:
 * Itakda ang `MOBILETTO_REDIS_HOST` env var, mobiletto kumonekta dito sa halip na localhost
 * Itakda ang `MOBILETTO_REDIS_PORT` env var, ang port na ito ang gagamitin

 Iimbak ng Mobiletto ang lahat ng redis key nito na may prefix `_mobiletto__` . Maaari mong baguhin ito
 sa pamamagitan ng pagtatakda ng `MOBILETTO_REDIS_PREFIX` env var.

 Maaari ka ring magtakda ng per-connection caching gamit ang object na `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ayaw ng redis caching?
 Upang i-disable: ipasa `enabled: false` sa iyong object `opts.redisConfig` kapag itinatag mo ang iyong koneksyon.

 Tulad ng tinalakay sa ibaba, ang hindi pagpapagana ng caching ay magkakaroon ng masamang epekto sa pagganap at magkakaroon ng higit pang mga kahilingan
 sa imbakan na talagang kailangan mo.

 ### Gabay sa pag-cache
 **Naka-encrypt na storage**: ang pagbabasa/pagsusulat ng naka-encrypt na storage ay mas mabagal lang ng kaunti kaysa sa karaniwan,
 ngunit ang pag-navigate sa mga direktoryo (na ginagawa ng ilang bagay) ay medyo mahal. Paggamit ng redis cache
 ay magbibigay sa iyo ng makabuluhang pagpapalakas ng pagganap.

 Ang default na cache ay ligtas, ngunit hindi gumaganap nang maayos kung mayroon kang maraming mga operasyon sa pagsulat/pag-alis.
 Ang anumang operasyon sa pagsulat o pag-alis ay nagpapawalang-bisa sa buong cache, na tinitiyak na makikita ng mga kasunod na pagbabasa ang
 pinakabagong pagbabago.

 ### CLI tool
 Kung gumagamit ka ng CLI tool tulad ng [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 tiyak na gugustuhin mong paganahin ang redis cache, dahil tumatagal ito sa mga invocation ng utos na `mo` .

 ## Pagsasalamin

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Ang utos `mirror` ay nagsasagawa ng isang beses na kopya ng lahat ng mga file mula sa isang mobiletto patungo sa isa pa.
 Hindi ito nagpapatakbo ng anumang proseso upang mapanatili ang salamin sa paglipas ng panahon. Patakbuhin muli ang utos na `mirror`
 upang i-synchronize ang anumang nawawalang mga file.

 Ang return value mula sa `mirror` ay isang simpleng bagay na may mga counter para sa kung gaano karaming mga file ang matagumpay
 na-mirror at kung gaano karaming mga file ang may mga error:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 BABALA: Ang pag-mirror ng malalaking set ng data ay maaaring masyadong nakakaubos ng oras at bandwidth-intensive

 Sa `mirror` call semantics, minsan ay nakakalito kung sino ang
 mambabasa at sino ang manunulat. Isipin ito tulad ng isang pahayag ng pagtatalaga: ang "kaliwang kamay na mobiletto"
 ay ang bagay na itinatalaga sa (naka-mirror na data na nakasulat), at ang "right-hand mobiletto" (ang
 argumento sa `mirror` method) ay ang value na itinalaga (nabasa ang naka-mirror na data).

 ## Transparent na pag-encrypt
 Paganahin ang transparent na client-side encryption:

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

 Anong nangyayari? Sinusubaybayan ng isang hiwalay na "pagpasok ng direktoryo" (dirent) na direktoryo (naka-encrypt) kung anong mga file ang naroroon
 direktoryo (aka ang direktang direktoryo).
 * Ang utos `list` nagbabasa ng mga file ng entry sa direktoryo, nagde-decrypt sa bawat landas na nakalista; pagkatapos ay nagbabalik ng metadata para sa bawat file
 * Ang mga utos `list` ay mas hindi epektibo, lalo na para sa mga direktoryo na may malaking bilang ng mga file
 * Ang utos `write` nagsusulat ng mga dirent na file sa direktoryo ng bawat magulang, nang paulit-ulit; pagkatapos ay isinusulat ang file
 * Ang mga command `write` ay magkakaroon ng O(N) writes, na may N = depth sa hierarchy ng direktoryo
 * Tinatanggal ng utos `remove` ang kaukulang dirent file, at ang magulang nito kung walang laman, recursively; pagkatapos ay tanggalin ang file
 * Ang mga non-recursive na `remove` command ay magkakaroon ng O(N) reads at posibleng kasing dami ng delete, na may N = depth sa directory hierarchy
 * `remove` command sa malaki at malalalim na filesystem ay maaaring magastos

 Tandaan na kahit na naka-enable ang client-side encryption, isang kalaban na may ganap na visibility sa iyong naka-encrypt na server-side
 imbakan, kahit na wala ang susi, ay makikita pa rin ang kabuuang bilang ng mga direktoryo at kung gaano karaming mga file ang nasa bawat isa, at kasama
 ilang pagsisikap, tuklasin ang ilan o lahat ng pangkalahatang istraktura ng hierarchy ng direktoryo.
 *Tandaan: Gumamit ng medyo patag na istraktura para sa mas mahusay na seguridad.*
 Hindi malalaman ng kalaban ang mga pangalan ng mga direktoryo/file maliban kung alam din nila ang iyong encryption
 key o kung hindi man ay matagumpay na na-crack ang encryption. Tapos na lahat ng taya!

 ### Pagganap at pag-cache
 Maaaring mabagal ang mga operasyon sa naka-encrypt na storage. Ang mga recursive na listahan at pag-alis ay maaaring maging napakabagal.
 Ang pag-cache sa pamamagitan ng redis ay nakakatulong nang malaki, ngunit tandaan na ang cache ay namumula sa anumang pagsusulat o pag-alis.

 ## Pag-ikot ng key
 Gumawa ng mobiletto gamit ang iyong bagong key, pagkatapos ay i-mirror ang lumang data dito:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface ng driver
 Ang driver ay anumang JS file na nag-e-export ng function na 'storageClient' na may ganitong lagda:

    function storageClient (key, secret, opts)

 * `key` : isang string, ang iyong API key (para sa `local` driver ito ang base directory)
 * `secret` : isang string, ang iyong API secret (maaaring tanggalin para sa `local` driver)
 * `opts` : isang object, ang mga katangian ay per-driver:
 * Para sa `local` , tinutukoy ng `fileMode` at `dirMode` properties kung paano nilikha ang mga bagong file at direktoryo
 * Para sa `s3` , ang `bucket` property ay kinakailangan. Ang mga opsyonal na katangian ay:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ang bagay na ibinalik ng storageClient function ay dapat tukuyin ang mga function na ito:

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

 ## Pagtotroso
 Ginagamit ng Mobiletto ang [winston](https://www.npmjs.com/package/winston) logging library.

 Ang mga log **ay** maglalaman ng mga landas ng file at mga mensahe ng error, ngunit **hindi** maglalaman ng mga susi, lihim,
 o anumang iba pang impormasyon sa pagsasaayos ng koneksyon.

 ### Antas ng log
 Gamitin ang `MOBILETTO_LOG_LEVEL` environment variable upang itakda ang antas ng log, gamit ang isa
 ng mga antas ng `npm` tinukoy sa [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ang default na antas ay `error` . Ang pinaka-verbose na antas ay `silly` , bagama't kasalukuyang mobiletto
 ay hindi nagla-log sa mga antas sa ibaba `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log file
 Bilang default, nagsusulat ang logger sa console. Upang magpadala ng mga log sa isang file, itakda ang `MOBILETTO_LOG_FILE`
 variable ng kapaligiran. Kapag nagla-log sa isang file, hindi na isusulat ang mga log sa console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Upang i-off ang pag-log:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
