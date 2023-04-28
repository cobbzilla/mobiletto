Mobiletto
 ========

 Mobiletto jẹ Layer abstraction ibi ipamọ JavaScript, pẹlu iyan fifi ẹnọ kọ nkan-ẹgbẹ alabara.

 # Awọn akoonu
 * [Kí nìdí Mobiletto?](#Kí nìdí-Mobiletto?)
 * [Ibẹrẹ kiakia](#Ibẹrẹ-kia)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Orisun](#Orisun)
 * [Fifi sori ẹrọ](#Fifi sori ẹrọ)
 * [Atilẹyin ati Ifowopamọ](#Atilẹyin-ati-Ifunwo)
 * [Lilo ipilẹ](#Ipilẹ-lilo)
 * [Metadata](#Metadata)
 * [Ara agbewọle agbewọle miiran](#Aṣa miiran-import-ara)
 * [Caching](#Caching)
 * [Mirror](#Mirror)
 * [Ìsekóòdù ti o han gbangba](#Transparent-ìsekóòdù)
 * [Kọtini yiyi](#Kọtini-yiyi)
 * [Oluwakọ ni wiwo](#Oluwakọ-ni wiwo)
 * [Wọle](#Igi wọle)

 # Ka eyi ni ede miiran
 Iwe README.md yii ti ni itumọ, nipasẹ [hokeylization](https://github.com/cobbzilla/hokeylization), sinu
 **[gbogbo ede ni atilẹyin nipasẹ Google Tumọ](https://cloud.google.com/translate/docs/languages)!**

 Mo ni idaniloju pe ko pe, ṣugbọn Mo nireti pe o dara ju ohunkohun lọ!

 [🇸🇦 Larubawa](../ar/README.md)
 [🇧🇩 Ede Bengali](../bn/README.md)
 [🇩🇪 Jẹmánì](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spani](../es/README.md)
 [🇫🇷 Faranse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tọki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Kannada](../zh/README.md)


 **[📚 ... Gbogbo Ede ...](../README.md)**
 ----

 ### Njẹ iṣoro kan wa pẹlu itumọ README yii?
 Itumọ ni pato ti atilẹba [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 le jẹ abawọn - * awọn atunṣe ṣe itẹwọgba pupọ!* Jọwọ fi ibeere kan ranṣẹ si GitHub (https://github.com/cobbzilla/mobiletto/pulls),
 tabi ti o ko ba ni itunu lati ṣe iyẹn, [ṣii ọrọ kan](https://github.com/cobbzilla/mobiletto/issues)

 Nigbati o ba ṣẹda ọrọ GitHub tuntun nipa itumọ kan, jọwọ ṣe:
 * pẹlu URL oju-iwe naa (daakọ/lẹẹmọ lati ọpa adirẹsi aṣawakiri)
 * pẹlu ọrọ gangan ti o jẹ aṣiṣe (daakọ/lẹẹmọ lati ẹrọ aṣawakiri)
 * Jọwọ ṣapejuwe ohun ti ko tọ -- ṣe itumọ naa ko tọ? ti wa ni awọn kika baje bakan?
 * Fi inurere funni ni imọran itumọ ti o dara julọ, tabi bi o ṣe yẹ ki ọrọ naa ṣe tito daradara
 * **E dupe!**

 ## Kí nìdí Mobiletto?

 ### Titiipa olutaja o dabọ!
 Awọn oriṣiriṣi awọn olupese ibi ipamọ awọsanma ni awọn API ti ko ni ibamu. Paapaa awọn ti o tiraka fun “ibamu S3”
 ni awọn iwa idiosyncratic.

 Nigbati o ba yan olutaja ibi ipamọ kan pato fun app rẹ, ti o ba koodu taara si API wọn, app rẹ
 ni bayi ti o gbẹkẹle iṣẹ yẹn. Bi akoko ti n lọ ati pe koodu kojọpọ, awọn olutaja iyipada di
 increasingly untenable. Kaabọ si agbaye igbadun ti titiipa ataja!

 Mobiletto jẹ apẹrẹ lati yanju iṣoro yii. Nipa ifaminsi app rẹ si API mobiletto, o le ni irọrun
 yi awọn olupese ibi ipamọ pada ki o mọ pe Layer ibi ipamọ ohun elo rẹ yoo huwa bakanna.

 ### Ayẹwo nla
 Gbogbo awọn awakọ ni idanwo fun ihuwasi kanna pẹlu awọn idanwo 60+ fun awakọ kọọkan.
 A ṣe idanwo gbogbo awakọ pẹlu gbogbo akojọpọ:
 * Ìsekóòdù: mejeeji ṣiṣẹ ati alaabo
 * Kaṣe Redis: mejeeji ṣiṣẹ ati alaabo

 Ọna yii fun wa ni alaafia-ọkan pe mobiletto yoo huwa kanna laibikita iru awakọ ti o lo,
 ati laibikita boya o jeki caching ati/tabi ìsekóòdù.

 ### Awakọ support
 Awọn awakọ ibi ipamọ Mobiletto lọwọlọwọ:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : eto faili agbegbe

 * Awọn ifunni lati ṣe atilẹyin awọn olupese ibi ipamọ awọsanma diẹ sii jẹ itẹwọgba!

 ## mobiletto-cli
 Mobiletto ti pinnu lati ṣee lo bi ile-ikawe nipasẹ koodu JavaScript miiran.

 Lati ṣiṣẹ pẹlu mobiletto ni laini aṣẹ, lo [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Orisun
 * [mobiletto lori GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto lori npm](https://www.npmjs.com/package/mobiletto)

 ## Atilẹyin ati igbeowosile
 Mo ngbiyanju lati jẹ oludasilẹ sọfitiwia orisun ṣiṣi ọjọgbọn. Mo ti ṣiṣẹ ninu
 ile-iṣẹ sọfitiwia fun ọpọlọpọ ọdun, Mo ti bẹrẹ awọn ile-iṣẹ aṣeyọri ati ta wọn si awọn ile-iṣẹ gbangba.
 Laipẹ Mo padanu iṣẹ mi, ati pe Emi ko ni iṣẹ miiran ti o laini gaan

 Nitorinaa Emi yoo gbiyanju kikọ sọfitiwia iranlọwọ ati rii boya iyẹn ṣiṣẹ

 Ti o ba gbadun lilo sọfitiwia yii, Emi yoo dupe pupọ fun paapaa awọn
 ti o kere julọ [ilowosi oṣooṣu nipasẹ Patreon](https://www.patreon.com/cobbzilla)

 *E dupe!*

 ## Fifi sori ẹrọ
 Fi sori ẹrọ ni lilo `npm` tabi `yarn` . O ṣee ṣe ki o fẹ ẹya `lite` ti ko pẹlu gbogbo wọn
 Awọn faili README ti a tumọ:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ti o ba fẹ gaan awọn faili README ni gbogbo ede, fi ẹya kikun sii:

    npm install mobiletto
    yarn add mobiletto

 ## Ibẹrẹ kiakia
 Apeere kukuru nipa lilo awakọ mobiletto `s3` .

 Koodu yii yoo ṣiṣẹ kanna ti awakọ ba jẹ `b2` tabi `local` .

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
 ## Ipilẹ lilo
 Apeere lọpọlọpọ diẹ sii, ti n ṣafihan pupọ julọ awọn ẹya ti a funni:

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
 Aṣẹ `metadata` da metadata pada nipa titẹ sii eto faili kan ṣoṣo.
 Bakanna, iye ipadabọ lati pipaṣẹ `list` jẹ akojọpọ awọn nkan metadata.

 Ohun metadata dabi eleyi:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ohun-ini `type` le jẹ `file` , `dir` , `link` , tabi `special` .

 Da lori iru awakọ, pipaṣẹ `list` le ma da gbogbo awọn aaye pada. Awọn ohun-ini `name` orukọ' ati `type`
 yẹ ki o wa nigbagbogbo. Aṣẹ `metadata` ti o tẹle yoo da gbogbo awọn ohun-ini to wa pada.

 ## Aṣa agbewọle miiran
 Ṣe agbewọle module ti o ni iwọn ni kikun ki o lo iṣẹ `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto ṣiṣẹ dara julọ pẹlu kaṣe <a href="https://redis.io">redis</a> .

 Mobiletto yoo gbiyanju lati sopọ si a redis apeere on 127.0.0.1:6379

 O le fagilee ọkan ninu awọn wọnyi:
 * Ṣeto `MOBILETTO_REDIS_HOST` env var, mobiletto so nibi dipo localhost
 * Ṣeto `MOBILETTO_REDIS_PORT` env var, ibudo yii yoo ṣee lo

 Mobiletto yoo fi gbogbo awọn bọtini redis pamọ pẹlu ìpele `_mobiletto__` . O le yi eyi pada
 nipa `MOBILETTO_REDIS_PREFIX` env var.

 O tun le ṣeto caching fun-asopọ pẹlu ohun `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ṣe o ko fẹ caching redis?
 Lati mu: kọja `enabled: false` ninu ohun `opts.redisConfig` rẹ nigbati o ba fi idi asopọ rẹ mulẹ.

 Gẹgẹbi a ti jiroro ni isalẹ, piparẹ caching yoo ni ipa ti ko dara lori iṣẹ ṣiṣe ati fa awọn ibeere diẹ sii
 si ibi ipamọ ti o nilo gaan.

 ### Caching itoni
 ** Ibi ipamọ ti paroko ***: kika / kikọ ibi ipamọ fifi ẹnọ kọ nkan jẹ o lọra diẹ ju deede,
 ṣugbọn lilọ kiri ni ayika awọn ilana (eyiti diẹ ninu awọn nkan ṣe) jẹ gbowolori gaan. Lilo kaṣe redis
 yoo fun ọ ni ilọsiwaju iṣẹ ṣiṣe pataki.

 Kaṣe aiyipada jẹ ailewu, ṣugbọn ko ṣiṣẹ daradara ti o ba ni ọpọlọpọ kikọ / yọ awọn iṣẹ kuro.
 Eyikeyi iṣẹ kikọ tabi yọkuro sọ gbogbo kaṣe di asan, ni idaniloju awọn kika ti o tẹle yoo rii
 titun ayipada.

 ### CLI irinṣẹ
 Ti o ba n lo ohun elo CLI bii [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 dajudaju iwọ yoo fẹ ki kaṣe redis ṣiṣẹ, bi o ti wa kọja awọn ẹbẹ ti pipaṣẹ `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Aṣẹ `mirror` n ṣe ẹda ẹyọkan ti gbogbo awọn faili lati alagbeka si miiran.
 Ko ṣe ilana eyikeyi lati ṣetọju digi ni akoko pupọ. Ṣiṣe aṣẹ `mirror` lẹẹkansi
 lati muuṣiṣẹpọ eyikeyi awọn faili ti o padanu.

 Iye ipadabọ lati `mirror` jẹ ohun ti o rọrun pẹlu awọn iṣiro fun iye awọn faili ti o ṣaṣeyọri
 digi ati melo ni awọn faili ti ni awọn aṣiṣe:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 IKILO: Digiri awọn eto data nla le jẹ akoko-n gba ati bandiwidi-lekoko

 Pẹlu awọn `mirror` o le jẹ airoju nigbakan lati ni oye tani
 oluka ati tani onkqwe. Fojuinu rẹ bi alaye iyansilẹ: “mobiletto ọwọ osi”
 jẹ ohun ti a yàn si (awọn data digi ti a kọ), ati "mobiletto ọwọ ọtun" (awọn
 ariyanjiyan si ọna `mirror` ) ni iye ti a yàn (awọn data digi ti wa ni kika).

 ## Sihin ìsekóòdù
 Mu fifi ẹnọ kọ nkan si ẹgbẹ onibara ṣiṣẹ:

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

 Kilo n ṣẹlẹ? Itọkasi "titẹsi iwe-ilana" (itọkasi) itọsọna (ti paroko) tọpinpin kini awọn faili wa ninu iyẹn
 liana (aka awọn dirent liana).
 * Aṣẹ `list` ka awọn faili titẹ sii liana, decrypts kọọkan ọna ti a ṣe akojọ; lẹhinna da metadata pada fun faili kọọkan
 * Awọn pipaṣẹ `list` diẹ sii, pataki fun awọn ilana pẹlu nọmba nla ti awọn faili
 * Aṣẹ `write` kọ awọn faili ti o taara sinu itọsọna taara ti obi kọọkan, leralera; lẹhinna kọ faili naa
 Awọn aṣẹ `write` yoo fa O(N) kọ, pẹlu N = ijinle ninu awọn ilana ilana
 * Aṣẹ `remove` yọ faili dirant ti o baamu kuro, ati obi rẹ ti o ba ṣofo, leralera; lẹhinna yọ faili naa kuro
 * Awọn aṣẹ `remove` ṣe loorekoore yoo fa kika O(N) ati agbara bi ọpọlọpọ paarẹ, pẹlu N = ijinle ninu awọn ilana ilana
 * Awọn pipaṣẹ `remove` lori awọn ọna ṣiṣe faili nla ati jin le jẹ gbowolori

 Ṣe akiyesi pe paapaa pẹlu fifi ẹnọ kọ nkan-ẹgbẹ alabara ṣiṣẹ, ọta kan pẹlu hihan ni kikun si ẹgbẹ olupin ti paroko rẹ
 ibi ipamọ, paapaa laisi bọtini, tun le rii nọmba lapapọ ti awọn ilana ati iye awọn faili ti o wa ninu ọkọọkan, ati pẹlu
 diẹ ninu awọn akitiyan , iwari diẹ ninu awọn tabi gbogbo awọn ti awọn ìwò be ti awọn logalomomoise liana.
 * Akiyesi: Lo eto alapin kan fun aabo to dara julọ.
 Ọta naa ko ni mọ awọn orukọ ti awọn ilana/faili ayafi ti wọn tun mọ fifi ẹnọ kọ nkan rẹ
 bọtini tabi bibẹẹkọ ti ṣaṣeyọri sisan fifi ẹnọ kọ nkan naa. Gbogbo awọn tẹtẹ wa ni pipa lẹhinna!

 ### Performance ati caching
 Awọn iṣẹ lori ibi ipamọ ti paroko le lọra. Awọn atokọ atunṣe ati awọn yiyọ kuro le lọra pupọ.
 Caching nipasẹ redis ṣe iranlọwọ lọpọlọpọ, ṣugbọn ṣe akiyesi pe kaṣe naa ti fọ lori eyikeyi kikọ tabi yọkuro.

 ## Yiyi bọtini
 Ṣẹda mobiletto pẹlu bọtini titun rẹ, lẹhinna digi data atijọ sinu rẹ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Iwakọ ni wiwo
 Awakọ jẹ eyikeyi faili JS ti o ṣe okeere iṣẹ 'ipamọClient' pẹlu ibuwọlu yii:

    function storageClient (key, secret, opts)

 * `key` : okun kan, bọtini API rẹ (fun awakọ `local` eyi ni itọsọna ipilẹ)
 * `secret` : okun kan, aṣiri API rẹ (le jẹ yọkuro fun awakọ `local` )
 * `opts` : ohun kan, awọn ohun-ini jẹ fun awakọ kan:
 * Fun `local` , awọn `fileMode` ati `dirMode` ini pinnu bi ṣiṣẹda titun awọn faili ati awọn ilana ti wa ni da
 * Fun `s3` , ohun-ini `bucket` ni a nilo. Awọn ohun-ini iyan jẹ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Nkan ti ibi ipamọ iṣẹ Onibara pada gbọdọ ṣalaye awọn iṣẹ wọnyi:

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

 ## Wọle
 Mobiletto nlo [winston](https://www.npmjs.com/package/winston) ile-ikawe gedu.

 Awọn akọọlẹ ** yoo ni awọn ọna faili ati awọn ifiranṣẹ aṣiṣe, ṣugbọn kii yoo ni awọn bọtini, awọn aṣiri,
 tabi eyikeyi alaye iṣeto ni asopọ miiran.

 ### Ipele Wọle
 Lo iyipada ayika `MOBILETTO_LOG_LEVEL` lati ṣeto ipele akọọlẹ, ni lilo ọkan
 ti awọn ipele `npm` ti ṣalaye ni [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ipele aiyipada jẹ `error` . Awọn julọ verbose ipele ni `silly` , biotilejepe Lọwọlọwọ mobiletto
 ko wọle ni awọn ipele ni isalẹ `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Faili wọle
 Nipa aiyipada, logger kọwe si console. Lati fi awọn akọọlẹ ranṣẹ si faili kan, ṣeto `MOBILETTO_LOG_FILE`
 oniyipada ayika. Nigbati o ba wọle si faili kan, awọn akọọlẹ kii yoo kọ si console mọ.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Lati pa gedu:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
