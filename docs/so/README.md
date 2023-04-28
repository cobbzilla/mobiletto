Mobiletto
 ========

 Mobiletto waa lakabka kaydinta kaydinta JavaScript, oo leh sir dhinaca macmiilka ah oo ikhtiyaari ah.

 # Nuxurka
 * [Sababta Mobiletto?](#Sababta Mobiletto?)
 * [Bilow degdeg ah](#Si degdeg ah u bilow)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Isha](#Isha)
 * [Rakibka](#Rakiba)
 * [Taageerada iyo Maalgelinta](#Taageerada-iyo Maalgelinta)
 * [Isticmaalka aasaasiga ah](#Isticmaalka aasaasiga ah)
 * [Metadata](#Metadata)
 * [Qaabka soo dejinta beddelka](#Habka-soo dejinta-ka beddelka)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Si daah-furnaan]
 * [wareejinta furaha](#furaha-wareejin)
 * [Driver interface](#Driver-interface)
 * [Giritaanka](#Logging)

 # Ku akhri luqad kale
 Dukumeentigan README.md waxa lagu turjumay, iyada oo loo marayo [hokeylization](https://github.com/cobbzilla/hokeylization), galay
 **[Luqadda kasta oo ay taageerto Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Waan hubaa inaysan qummanayn, laakiin waxaan rajeynayaa inay ka fiican tahay waxba!

 [🇸🇦 Carabi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jarmal](../de/README.md)
 [🇺🇸 Ingiriis](../en/README.md)
 [🇪🇸 Isbaanish](../es/README.md)
 [🇫🇷 Faransiis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Talyaani](../it/README.md)
 [🇯🇵 Jabbaan](../ja/README.md)
 [🇰🇷 Kuuriyaan](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Boortaqiis](../pt/README.md)
 [🇷🇺 Ruush](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urduu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Shiine](../zh/README.md)


 **[📚 ... Dhammaan Luqadaha ...](../README.md)**
 ----

 ### Dhib ma ka jirtaa tarjumaada README?
 Turjumaaddan gaarka ah ee asalka ah [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 waxaa laga yaabaa in ay cilladaysan tahay -- *sixitaanku aad ayaa loo soo dhawaynayaa!* Fadlan u soo dir [codsi jiid GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ama haddii aadan ku qanacsanayn inaad taas samayso, [fur arrin](https://github.com/cobbzilla/mobiletto/issues)

 Markaad abuurto arrin cusub oo GitHub ah oo ku saabsan tarjumaada, fadlan samee:
 * ku dar URL bogga (koobi/ku dheji barta ciwaanka browserka)
 * ku dar qoraalka saxda ah ee khaldan (koobi ka soo gal browserka)
 * fadlan sharax waxa khaldan -- turjumaada ma khaldan tahay? qaabaynta si uun ma u jabtay?
 * si naxariis leh u soo jeedi soo jeedin tarjumaad ka wanaagsan, ama sida qoraalka si habboon loo qaabeeyey
 * **Mahadsanid!**

 Waa maxay sababta Mobiletto?

 ### Nabad gelyo quful-iibiyaha!
 Bixiyeyaasha kaydinta daruuraha ee kala duwan waxay leeyihiin API-yo aan ku haboonayn Xataa kuwa ku dadaalaya "S3 waafaqsanaanta"
 waxay leeyihiin dabeecado aan caadi ahayn.

 Marka aad doorato iibiyaha kaydinta gaarka ah abkaaga, haddii aad si toos ah code ugu geliso API-ga, abkaaga
 hadda waxay ku tiirsan tahay adeeggaas. Marka uu wakhtigu sii socdo oo koodhka is urursado, beddelka iibiyeyaasha ayaa noqda
 sii kordheysa oo aan la sii wadi karin. Ku soo dhawoow dunida xiisaha leh ee qufulka iibiyaha!

 Mobiletto waxaa loo qorsheeyay in lagu xalliyo dhibaatadan. Markaad ku xidhid abkaaga mobiltto's API, si fudud ayaad u samayn kartaa
 beddel bixiyeyaasha kaydinta oo ogow in lakabka kaydinta abkaagu u dhaqmi doono si isku mid ah.

 ### Imtixaan baaxad leh
 Dhammaan darawalada waxa lagu tijaabiyaa dabeecad isku mid ah iyada oo 60+ imtixaan laga qaaday darawal kasta.
 Waxaan ku tijaabineynaa dhammaan darawalada isku darka kasta oo:
 * Sireed: labadaba waa karti iyo naafo
 * Redis cache: labadaba waa karti iyo naafo

 Habkani waxa uu ina siinaya maskaxda maskaxda in mobiletto uu u dhaqmayo si la mid ah darawalka aad isticmaasho,
 iyadoo aan loo eegin haddii aad karti u leedahay kaydinta iyo/ama sirta.

 ### Taageerada darawalka
 Wadayaasha kaydinta Mobiletto hadda:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : nidaamka faylalka maxalliga ah

 *Tabarucaadka lagu taageerayo bixiyayaasha kaydinta daruuraha aad ayaa loo soo dhawaynayaa!*

 ## mobiletto-cli
 Mobiletto waxaa loogu talagalay in loo isticmaalo maktabad ahaan koodka JavaScript kale.

 Si aad mobiletto ugala shaqeyso khadka taliska, isticmaal [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Isha
 * [mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto onpm](https://www.npmjs.com/package/mobiletto)

 ## Taageerada iyo Maalgelinta
 Waxaan isku dayayaa inaan noqdo horumariye il furan oo xirfad leh. waan ka shaqaynayay
 warshadaha software-ka sanado badan, waxaan bilaabay shirkado guuleysta waxaanan ka iibiyay shirkado dadweyne.
 Dhowaan shaqadeydii waa iga luntay, runtiina shaqo kale oo safan ma jirto

 Markaa waxaan isku dayi doonaa inaan qoro software waxtar leh oo aan eego inay taasi shaqaynayso

 Haddii aad ku raaxaysato isticmaalka software-kan, aad baan ugu mahadcelin lahaa xataa
 ugu yar [wax ku darsiga billaha ah ee loo maro Patreon](https://www.patreon.com/cobbzilla)

 *Mahadsanid!*

 ## Rakibaadda
 Ku rakib adigoo isticmaalaya `npm` ama `yarn` . Waxaa laga yaabaa inaad rabto nooca `lite` ' oo aan ku jirin dhammaan
 faylasha README ee la turjumay:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Haddii aad runtii rabto faylasha README ee luqad kasta, ku rakib nooca buuxa:

    npm install mobiletto
    yarn add mobiletto

 ## Deg deg ah
 Tusaale gaaban oo isticmaalaya mobaylka `s3` darawalka.

 Koodhkani sidiisii ayuu u shaqayn lahaa haddii darawalku yahay `b2` ama `local` .

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
 ## Isticmaalka aasaasiga ah
 Tusaale aad u ballaaran, oo muujinaya inta badan sifooyinka la bixiyo:

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
 Amarka `metadata` wuxuu soo celiyaa xogta badan ee ku saabsan hal gelinta nidaamka faylalka.
 Sidoo kale, qiimaha ka soo `list` waa shay kala duwan oo xog badan ah.

 Shayga xogta badan ayaa sidan u eg:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Hantida `type` waxay noqon kartaa `file` , `dir` , `link` , ama `special` .

 Iyadoo ku xiran nooca darawalka, amarka `list` waxaa laga yaabaa inuusan soo celin dhammaan goobaha. `name` iyo `type`
 had iyo jeer waa inay joogaan. Amarka `metadata` xiga ayaa soo celin doona dhammaan guryaha la heli karo.

 ## Habka soo dejinta beddelka ah
 Soo deji cutubka si buuxda u koobay oo isticmaal shaqada `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Kaydinta
 Mobiletto waxa uu si fiican ugu shaqeeyaa kaydka <a href="https://redis.io">rediska</a> .

 Mobiletto waxay isku dayi doontaa inay ku xidho tusaale redis 127.0.0.1:6379

 Waxaad ka saari kartaa mid ka mid ah kuwan:
 * Deji `MOBILETTO_REDIS_HOST` env var, mobiletto ku xidh halkan halkii aad ka isticmaali lahayd localhost
 * Deji `MOBILETTO_REDIS_PORT` env var, dekeddan waa la isticmaali doonaa

 Mobiletto waxa ay ku kaydin doontaa dhamaan furayaashiisa rediska oo wata horgalaha `_mobiletto__` . Waad bedeli kartaa tan
 adoo dejinaya `MOBILETTO_REDIS_PREFIX` env var.

 Waxa kale oo aad dejin kartaa khasnad kasta oo ku xidhan shayga `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ma rabtaa inaad kaydiso redis?
 Si aad u damiso: gudbi `enabled: false` ' shayga `opts.redisConfig` markaad samaysato xidhiidhkaaga.

 Sida hoos looga hadlay, curyaaminta kaydinta waxay saameyn xun ku yeelan doontaa waxqabadka waxayna keeneysaa codsiyo badan
 kaydinta aad runtii u baahan tahay.

 ### hagida kaydinta
 ** Kaydinta dahsoon ***: akhrinta/qorista kaydinta sir ah ayaa kayar ka yar sidii caadiga ahayd,
 Laakin ku wareegitaanka hagayaasha (kuwaasi oo waxyaabaha qaarkood ay sameeyaan) waa qaali. Isticmaalka kaydka redis
 waxay ku siin doontaa kor u qaadida waxqabadka muhiimka ah.

 Cache-ga caadiga ah waa badbaado, laakiin si fiican uma shaqeeyo haddii aad leedahay wax badan oo qoraal ah / ka saar.
 Hawl kasta oo qoraal ah ama ka saar ahi waxay burinaysaa kaydka oo dhan, iyada oo hubinaysa in akhrinta xigta ay arki doonto
 isbedeladii ugu dambeeyay.

 ### Qalabka CLI
 Haddii aad isticmaalayso aaladda CLI sida [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Xaqiiqdi waxaad u baahan doontaa in redis cache la furo, maadaama ay ku dhamaanayso `mo` amarka 'mo'.

 ## Milicsiga

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Amarka `mirror` waxa uu sameeyaa koobi hal mar ah dhammaan faylalka min mobiletto ilaa mid kale.
 Ma socodsiiso hab kasta oo lagu ilaalinayo muraayadda waqti ka dib. `mirror` mar kale
 si loo waafajiyo wixii faylal maqan.

 Qiimaha soo celinta `mirror` waa shay fudud oo leh xisaabiye inta faylal si guul leh loo gaaray
 miraayad leh iyo imisa faylal ayaa khaldamay:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 DIGNIIN: Milicsiga xogaha waaweyn waxay noqon kartaa waqti-qaadasho iyo baaxad-weyn

 `mirror` waxa ay mararka qaarkood noqon kartaa jahawareer in la fahmo cidda
 akhriste iyo waa kuma qoraaga. Ka soo qaad sida qoraalka shaqada: "mobiletto-gacanta bidix"
 waa waxa loo qoondeeyay (xogta muraayada la qoray), iyo "mobiletto gacanta midig" (the
 doodda habka `mirror` ) waa qiimaha la qoondeeyey (xogta muraayadda waa la akhriyaa).

 ## Sirin hufan
 Daar si hufan oo dhinaca macmiilka ah:

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

 Maxaa dhacaya? Meel gaar ah oo "galitaan tusaha" (dirent) hagaha ( sir ah) ayaa la socda waxa faylalka ku jira
 tusaha (oo loo yaqaan tusaha tooska ah).
 * Amarka `list` wuxuu akhriyaa galka galka tusaha, wuxuu furfuraa waddo kasta oo taxan; ka dibna u soo celisa xogta badan ee fayl kasta
 * `list` waa kuwo aan waxtar lahayn, gaar ahaan hagayaasha leh tiro badan oo faylal ah
 * Amarka `write` wuxuu ku qoraa faylal kala duwan tusaha tooska ah ee waalid kasta, si isdaba joog ah; markaas buu qorayaa faylka
 * `write` waxay keenaysaa O(N) qorta, iyadoo N = qoto dheer ay ku jirto kala sareynta hagaha
 * Amarka `remove` wuxuu meesha ka saarayaa faylka tooska ah ee u dhigma, iyo waalidkii haddii uu madhan yahay, si isdaba joog ah; ka dibna ka saara faylka
 * `remove` ee aan soo noqnoqoneynin waxay keenaysaa O(N) akhrinta iyo suurtogalnimada in la tirtiro, iyadoo N = qoto dheer ay ku jirto kala sareynta hagaha
 * `remove` ee soo noqnoqda ee nidaamyada faylalka waaweyn iyo kuwa qoto dheer waxay noqon karaan qaali

 Ogsoonow in xitaa iyada oo sirta-dhinaca macmiilku karti u yeeshay, cadow si buuxda u muuqda dhanka server-kaaga sir ah
 kaydinta, xitaa furaha la'aanteed, waxay weli arki kartaa tirada guud ee hagayaasha iyo inta fayl ee mid kasta ku jira, iyo la
 xoogaa dadaal ah, hel qaar ama dhammaan qaab dhismeedka guud ee kala sareynta hagaha.
 *Fiiro gaar ah: Isticmaal qaab dhismeed siman si aad u hesho ammaan wanaagsan.*
 Cadawgu ma garan doono magacyada hagayaasha/faylalka ilaa ay sidoo kale ogaadaan sirtaada mooyaane
 furaha ama haddii kale si guul leh u dillaacay sirta. Dhammaan khamaaradaha waa damsan yihiin markaa!

 ### Waxqabadka iyo kaydinta
 Hawlgallada kaydinta sirta ah waxay noqon karaan kuwo gaabis ah. Liisaska soo noqnoqda iyo ka saarista waxay noqon kartaa mid aad u gaabis ah.
 Ku kaydinta redis aad bay u caawisaa, laakiin ogow in kaydku ku daatay wax kasta oo la qoro ama laga saaro.

 ## Wareegtada furaha ah
 Ku samee mobiltto furahaaga cusub, ka dibna u miiri xogtii hore:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## interface darawalka
 Darawalku waa fayl kasta oo JS ah oo dhoofiya shaqada 'kaydinta macmiilka' oo leh saxeexan:

    function storageClient (key, secret, opts)

 * `key` : xarig, furahaaga API (darawalka `local` ' kani waa tusaha saldhiga)
 * `secret` : xarig, sirtaada API (waxaa laga saari karaa darawalka `local` ')
 * `opts` : shay, alaabtu waa darawal kasta:
 * Wixii `local` ah, `fileMode` iyo `dirMode` guryaha ayaa go'aamiya sida abuurista cusub ee faylasha iyo hagayaasha loo abuuray
 * Wixii `s3` , hantida `bucket` ayaa loo baahan yahay. Guryaha ikhtiyaariga ah waa:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Shayga uu soo celiyo shaqada Macmiilku waa inuu qeexaa shaqooyinkan:

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

 ## Gelida
 Mobiletto waxay isticmaashaa [winston](https://www.npmjs.com/package/winston)

 Logs ** waxay ka koobnaan doonaan wadooyinka faylalka iyo fariimaha khaladka ah, laakiin ** waligiis kama koobnaan doono furayaal, siro,
 ama macluumaad kasta oo qaabeynta isku xirka.

 ### Heer gal
 Isticmaal `MOBILETTO_LOG_LEVEL` doorsoomiyaha deegaanka si aad u dejiso heerka log, addoo isticmaalaya mid
 ee heerarka `npm` lagu qeexay [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Heerka caadiga ah waa `error` . Heerka ugu afka badan waa `silly` , inkastoo hadda mobiletto
 ma gasho heerarka ka hooseeya `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Gal gal
 Sida caadiga ah, loggerku wuxuu wax u qoraa console-ka. Si aad diiwaannada ugu dirto faylka, deji `MOBILETTO_LOG_FILE`
 doorsooma deegaan. Markaad galeyso fayl, diiwaannada laguma qori doono console-ka.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Si aad u damiso goynta:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
