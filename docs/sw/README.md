Mobiletto
 ==========

 Mobiletto ni safu ya uondoaji ya hifadhi ya JavaScript, iliyo na usimbaji fiche wa hiari wa uwazi wa upande wa mteja.

 # Yaliyomo
 * [Kwa nini Mobiletto?](#Kwa nini-Mobiletto?)
 * [Kuanza kwa haraka](#Kuanza kwa haraka)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Chanzo](#Chanzo)
 * [Usakinishaji](#Usakinishaji)
 * [Msaada na Ufadhili](#Msaada-na-Ufadhili)
 * [Matumizi ya kimsingi](#Matumizi-msingi)
 * [Metadata](#Metadata)
 * [Mtindo mbadala wa uingizaji](#Mtindo-Mbadala-kuagiza)
 * [Ukihifadhi](#Uhifadhi)
 * [Kuakisi](#Kuakisi)
 * [Usimbaji fiche wa Uwazi](#Usimbaji fiche kwa Uwazi)
 * [Mzunguko muhimu](#Mzunguko wa ufunguo)
 * [Kiolesura cha dereva](#Kiolesura cha kiendeshi)
 * [Kuweka kumbukumbu](#Kuweka kumbukumbu)

 # Soma hii kwa lugha nyingine
 Hati hii ya README.md imetafsiriwa, kupitia [hokeylization](https://github.com/cobbzilla/hokeylization), hadi
 **[kila lugha inayotumika na Google Tafsiri](https://cloud.google.com/translate/docs/languages)!**

 Nina hakika sio kamili, lakini natumai ni bora kuliko chochote!

 [🇸🇦 Kiarabu](hati/ar/README.md)
 [🇧🇩 Kibengali](hati/bn/README.md)
 [🇩🇪 Kijerumani](../de/README.md)
 [🇺🇸 Kiingereza]( hati/sw/README.md)
 [🇪🇸 Kihispania](hati/es/README.md)
 [🇫🇷 Kifaransa](../fr/README.md)
 [🇹🇩 Kihausa](hati/ha/README.md)
 [🇮🇳 Kihindi](hati/hi/README.md)
 [🇮🇩 Kiindonesia](hati/id/README.md)
 [🇮🇹 Kiitaliano](hati/it/README.md)
 [🇯🇵 Kijapani](hati/ja/README.md)
 [🇰🇷 Kikorea](hati/ko/README.md)
 [🇮🇳 Marathi](hati/mr/README.md)
 [🇵🇱 Kipolandi](hati/pl/README.md)
 [🇧🇷 Kireno](hati/pt/README.md)
 [🇷🇺 Kirusi](hati/ru/README.md)
 [🇰🇪 Kiswahili](hati/sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Kituruki](hati/tr/README.md)
 [🇵🇰 Kiurdu](hati/ur/README.md)
 [🇻🇳 Kivietinamu](hati/vi/README.md)
 [🇨🇳 Kichina](hati/zh/README.md)


 **[📚 ... Lugha Zote ...](hati/README.md)**
 ----

 ### Je, kuna tatizo katika tafsiri hii ya README?
 Tafsiri hii mahususi ya [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 inaweza kuwa na dosari -- *marekebisho yanakaribishwa sana!* Tafadhali tuma [ombi la kuvuta kwenye GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 au ikiwa huna raha kufanya hivyo, [fungua toleo](https://github.com/cobbzilla/mobiletto/issues)

 Unapounda toleo jipya la GitHub kuhusu tafsiri, tafadhali fanya:
 * jumuisha URL ya ukurasa (nakili/bandika kutoka kwa upau wa anwani ya kivinjari)
 * jumuisha maandishi kamili ambayo sio sahihi (nakili/bandika kutoka kwa kivinjari)
 * tafadhali eleza kilicho kibaya -- je tafsiri si sahihi? umbizo limevunjika kwa namna fulani?
 * tafadhali toa pendekezo la tafsiri bora zaidi, au jinsi maandishi yanapaswa kupangwa vizuri
 * **Asante!**

 ## Kwa nini Mobiletto?

 ### Kwaheri kufuli kwa muuzaji!
 Watoa huduma mbalimbali wa hifadhi ya wingu wana API zisizooana. Hata wale wanaojitahidi "utangamano wa S3"
 kuwa na tabia za kijinga.

 Unapochagua mchuuzi mahususi wa hifadhi ya programu yako, ukiweka nambari moja kwa moja kwenye API yake, programu yako
 sasa inategemea huduma hiyo. Kadiri muda unavyosonga na msimbo hujilimbikiza, kubadilisha wachuuzi huwa
 inazidi kutokubalika. Karibu katika ulimwengu wa kufurahisha wa kufuli kwa muuzaji!

 Mobiletto iliundwa kutatua tatizo hili. Kwa kusimba programu yako kwa API ya mobiletto, unaweza kwa urahisi
 badilisha watoa huduma za hifadhi na ujue kuwa safu ya hifadhi ya programu yako itafanya kazi sawa.

 ### Jaribio la kina
 Viendeshaji vyote hujaribiwa kwa tabia inayofanana na vipimo 60+ kwa kila dereva.
 Tunajaribu madereva wote na kila mchanganyiko wa:
 * Usimbaji fiche: umewezeshwa na umezimwa
 * Redis cache: zote mbili zimewashwa na zimezimwa

 Mbinu hii inatupa amani ya akili kwamba mobiletto itafanya vivyo hivyo bila kujali unatumia dereva gani,
 na bila kujali kama unawezesha uakibishaji na/au usimbaji fiche.

 ### Usaidizi wa madereva
 Viendeshi vya sasa vya uhifadhi wa Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : mfumo wa faili wa ndani

 *Michango ya kusaidia watoa huduma zaidi wa hifadhi ya wingu inakaribishwa sana!*

 ## mobiletto-cli
 Mobiletto imekusudiwa kutumiwa kama maktaba na msimbo mwingine wa JavaScript.

 Ili kufanya kazi na mobiletto kwenye safu ya amri, tumia [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Chanzo
 * [mobiletto kwenye GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto kwenye npm](https://www.npmjs.com/package/mobiletto)

 ## Msaada na Ufadhili
 Ninajaribu kuwa mtaalamu wa kuunda programu huria. Nimekuwa nikifanya kazi ndani
 tasnia ya programu kwa miaka mingi, nimeanzisha kampuni zilizofanikiwa na kuziuza kwa kampuni za umma.
 Hivi majuzi nilipoteza kazi yangu, na kwa kweli sina kazi nyingine yoyote iliyopangwa

 Kwa hivyo nitajaribu kuandika programu muhimu na kuona ikiwa hiyo inafanya kazi

 Ikiwa unafurahiya kutumia programu hii, ningeshukuru sana hata kwa
 ndogo zaidi [mchango wa kila mwezi kupitia Patreon](https://www.patreon.com/cobbzilla)

 *Asante!*

 ## Ufungaji
 Sakinisha kwa kutumia `npm` au `yarn` . Labda unataka toleo la `lite` ambalo halijumuishi faili zote
 faili za README zilizotafsiriwa:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ikiwa unataka faili za README katika kila lugha, sakinisha toleo kamili:

    npm install mobiletto
    yarn add mobiletto

 ## Anza Haraka
 Mfano mfupi unaotumia kiendeshi cha mobiletto `s3` .

 Msimbo huu ungefanya kazi sawa ikiwa dereva angekuwa `b2` au `local` .

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
 ## Matumizi ya kimsingi
 Mfano mpana zaidi, unaoonyesha vipengele vingi vinavyotolewa:

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
 Amri ya `metadata` hurejesha metadata kuhusu ingizo moja la mfumo wa faili.
 Vile vile, thamani ya kurudi kutoka kwa amri `list` ni safu ya vipengee vya metadata.

 Kitu cha metadata kinaonekana kama hii:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Sifa ya `type` inaweza kuwa `file` , `dir` , `link` , au `special` .

 Kulingana na aina ya kiendeshi, amri `list` inaweza isirejeshe sehemu zote. Sifa `name` na `type` aina`
 inapaswa kuwapo kila wakati. Amri ya `metadata` ifuatayo itarudisha sifa zote zinazopatikana.

 ## Mtindo mbadala wa kuingiza
 Ingiza moduli iliyo na upeo kamili na utumie kitendakazi cha `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ##Kuhifadhi
 Mobiletto hufanya kazi vyema ikiwa na akiba ya <a href="https://redis.io">redis</a> .

 Mobiletto itajaribu kuunganisha kwa mfano wa redis mnamo 127.0.0.1:6379

 Unaweza kubatilisha mojawapo ya haya:
 * Weka `MOBILETTO_REDIS_HOST` env var, mobiletto unganisha hapa badala ya localhost
 * Weka `MOBILETTO_REDIS_PORT` env var, mlango huu utatumika

 Mobiletto itahifadhi funguo zake zote za redis kwa kiambishi awali `_mobiletto__` . Unaweza kubadilisha hii
 kwa kuweka `MOBILETTO_REDIS_PREFIX` env var.

 Unaweza pia kuweka akiba kwa kila muunganisho kwa kitu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Je, hutaki kuweka akiba upya?
 Ili kuzima: kupitisha `enabled: false` katika kitu chako cha `opts.redisConfig` muunganisho wako.

 Kama ilivyojadiliwa hapa chini, kuzima akiba kutakuwa na athari mbaya kwa utendakazi na kuleta maombi zaidi
 kwa uhifadhi ambao unahitaji kweli.

 ### Mwongozo wa kuweka akiba
 **Hifadhi iliyosimbwa kwa njia fiche**: kusoma/kuandika hifadhi iliyosimbwa ni polepole kidogo kuliko kawaida,
 lakini kuzunguka saraka (ambazo vitu vingine hufanya) ni ghali sana. Kutumia akiba ya redis
 itakupa uboreshaji mkubwa wa utendaji.

 Akiba chaguo-msingi ni salama, lakini haifanyi kazi vizuri ikiwa una shughuli nyingi za kuandika/kuondoa.
 Uendeshaji wowote wa kuandika au kuondoa hubatilisha akiba nzima, kuhakikisha usomaji unaofuata utaona
 mabadiliko ya hivi karibuni.

 ### Zana za CLI
 Ikiwa unatumia zana ya CLI kama [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 hakika utataka akiba ya redis iwezeshwe, kwani inadumu katika maombi ya amri ya `mo` .

 ##Kuakisi

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Amri ya `mirror` hufanya nakala ya mara moja ya faili zote kutoka simu moja hadi nyingine.
 Haiendeshi mchakato wowote wa kudumisha kioo kwa wakati. Endesha amri ya `mirror` tena
 kusawazisha faili zozote zinazokosekana.

 Thamani ya kurejesha kutoka `mirror` ni kitu rahisi chenye vihesabio vya ni faili ngapi zilifanikiwa
 iliyoangaziwa na ni faili ngapi zilikuwa na makosa:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ONYO: Kuakisi seti kubwa za data kunaweza kuchukua muda mwingi na kutumia kipimo data

 Kwa semantiki ya simu ya `mirror` inaweza wakati mwingine kuwa na utata kuelewa ni nani
 msomaji na mwandishi ni nani. Hebu fikiria kama taarifa ya mgawo: "mobiletto ya mkono wa kushoto"
 ni kitu kinachopewa (data iliyoakisiwa iliyoandikwa), na "mobiletto ya mkono wa kulia" (the
 hoja ya mbinu ya `mirror` ) ni thamani inayotolewa (data iliyoakisiwa inasomwa).

 ## Usimbaji fiche kwa uwazi
 Washa usimbaji fiche wa upande wa mteja wenye uwazi:

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

 Nini kinaendelea? Saraka tofauti ya "saraka" (dirent) (iliyosimbwa) hufuatilia ni faili gani zilizomo
 saraka (aka saraka ya mwelekeo).
 * Amri ya `list` inasoma faili za ingizo la saraka, inaondoa kila njia iliyoorodheshwa; kisha inarudisha metadata kwa kila faili
 * `list` zaidi, haswa kwa saraka zilizo na idadi kubwa ya faili
 * Amri ya `write` huandika faili dirent katika saraka ya kila mzazi, kwa kujirudia; kisha anaandika faili
 * amri za `write` ya O(N), na N = kina katika safu ya saraka.
 * Amri ya `remove` huondoa faili inayolingana ya dirent, na mzazi wake ikiwa tupu, kwa kujirudia; kisha huondoa faili
 * Amri zisizorudiwa za `remove` wa O(N) na uwezekano wa kufuta nyingi, na N = kina katika safu ya saraka.
 * Amri za `remove` kwenye mifumo mikubwa na ya kina ya faili zinaweza kuwa ghali

 Kumbuka kuwa hata usimbaji fiche wa upande wa mteja umewezeshwa, adui anayeonekana kikamilifu kwenye upande wako wa seva uliosimbwa.
 hifadhi, hata bila ufunguo, bado inaweza kuona jumla ya idadi ya saraka na faili ngapi ziko katika kila moja, na pamoja
 juhudi fulani, gundua baadhi au muundo wote wa jumla wa safu ya saraka.
 *Kumbuka: Tumia muundo tambarare kwa usalama bora.*
 Adui hangejua majina ya saraka/faili isipokuwa pia angejua usimbaji fiche wako
 ufunguo au amefaulu kuvunja usimbaji fiche. Dau zote zimezimwa basi!

 ### Utendaji na uakibishaji
 Uendeshaji kwenye hifadhi iliyosimbwa unaweza kuwa polepole. Uorodheshaji unaojirudia na uondoaji unaweza kuwa wa polepole sana.
 Uakibishaji kupitia redis husaidia sana, lakini kumbuka kuwa akiba huwekwa kwenye maandishi yoyote au kuondolewa.

 ## Mzunguko muhimu
 Unda mobiletto na ufunguo wako mpya, kisha uakisi data ya zamani ndani yake:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Kiolesura cha dereva
 Dereva ni faili yoyote ya JS inayosafirisha kazi ya 'storageClient' na saini hii:

    function storageClient (key, secret, opts)

 * `key` : kamba, ufunguo wako wa API (kwa kiendeshi cha `local` hii ndio saraka ya msingi)
 * `secret` : kamba, siri yako ya API (inaweza kuachwa kwa kiendeshi cha `local` )
 * `opts` : kitu, mali ni kwa kila dereva:
 * Kwa `local` , sifa za `fileMode` na `dirMode` huamua jinsi faili na saraka mpya zinavyoundwa.
 * Kwa `s3` , mali ya `bucket` inahitajika. Sifa za hiari ni:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Kitu ambacho kitendakazi cha kuhifadhiMteja kinarejesha lazima kifafanue vitendaji hivi:

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

 ## Uwekaji miti
 Mobiletto hutumia maktaba ya ukataji miti ya [winston](https://www.npmjs.com/package/winston).

 Kumbukumbu **itakuwa** na njia za faili na ujumbe wa makosa, lakini **haitawahi** kuwa na funguo, siri,
 au habari nyingine yoyote ya usanidi wa muunganisho.

 ### Kiwango cha kumbukumbu
 Tumia mabadiliko ya mazingira ya `MOBILETTO_LOG_LEVEL` ili kuweka kiwango cha kumbukumbu, ukitumia moja
 ya viwango vya `npm` vilivyofafanuliwa katika [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Kiwango chaguo-msingi ni `error` . Kiwango cha kitenzi zaidi ni `silly` , ingawa kwa sasa mobiletto
 haiingii katika viwango chini `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Faili ya kumbukumbu
 Kwa chaguo-msingi, logger anaandika kwa console. Ili kutuma kumbukumbu kwa faili, weka `MOBILETTO_LOG_FILE`
 kutofautiana kwa mazingira. Wakati wa kuingia kwenye faili, kumbukumbu hazitaandikwa tena kwa koni.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ili kuzima ukataji miti:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
