Mobiletto
 =========

 Mobiletto huwa saff ta 'estrazzjoni tal-ħażna JavaScript, b'kriptaġġ trasparenti mhux obbligatorju min-naħa tal-klijent.

 # Kontenut
 * [Għaliex Mobiletto?](#Għaliex-Mobiletto?)
 * [Bidu ta' malajr](#Bidu ta' malajr)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sors](#Sors)
 * [Installazzjoni](#Installazzjoni)
 * [Appoġġ u Finanzjament](#Appoġġ-u-Finanzjament)
 * [Użu Bażiku](#Użu Bażiku)
 * [Metadata](#Metadata)
 * [Stil ta' importazzjoni alternattiv](#Stil ta' importazzjoni alternattiv)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Encryption trasparenti](#Transparent-encryption)
 * [Rotazzjoni taċ-ċavetta](#Rotazzjoni taċ-ċavetta)
 * [Interfaċċja tas-sewwieq](#Interface tas-sewwieq)
 * [Logging](#Logging)

 # Aqra dan b'lingwa oħra
 Dan id-dokument README.md ġie tradott, permezz ta’ [hokeylization](https://github.com/cobbzilla/hokeylization), fi
 **[kull lingwa appoġġjata minn Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jien ċert li mhuwiex perfett, imma nispera li huwa aħjar minn xejn!

 [🇸🇦 Għarbi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Ġermaniż](../de/README.md)
 [🇺🇸 Ingliż](../en/README.md)
 [🇪🇸 Spanjol](../es/README.md)
 [🇫🇷 Franċiż](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Ħindi](../hi/README.md)
 [🇮🇩 Indoneżjan](../id/README.md)
 [🇮🇹 Taljan](../it/README.md)
 [🇯🇵 Ġappuniż](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pollakk](../pl/README.md)
 [🇧🇷 Portugiż](../pt/README.md)
 [🇷🇺 Russu](../ru/README.md)
 [🇰🇪 Swaħili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tork](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vjetnamiż](../vi/README.md)
 [🇨🇳 Ċiniż](../zh/README.md)


 **[📚 ... Il-Lingwi kollha ...](../README.md)**
 ----

 ### Hemm problema b'din it-traduzzjoni tar-README?
 Din it-traduzzjoni partikolari tal-oriġinal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 jista 'jkun difettuż -- *korrezzjonijiet huma milqugħa ħafna!* Jekk jogħġbok ibgħat [pull request fuq GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 jew jekk m'intix komdu tagħmel dan, [iftaħ kwistjoni](https://github.com/cobbzilla/mobiletto/issues)

 Meta toħloq kwistjoni ġdida ta' GitHub dwar traduzzjoni, jekk jogħġbok agħmel:
 * inkludi l-URL tal-paġna (kopja/pejst mill-bar tal-indirizz tal-browser)
 * inkludi t-test eżatt li huwa ħażin (ikkopja/pejst mill-browser)
 * jekk jogħġbok iddeskrivi x'inhu ħażin -- it-traduzzjoni hija żbaljata? l-ifformattjar huwa miksur b'xi?
 * ġentilment toffri suġġeriment għal traduzzjoni aħjar, jew kif it-test għandu jkun ifformattjat kif suppost
 * **Grazzi!**

 ## Għaliex Mobiletto?

 ### Goodbye lock-in tal-bejjiegħ!
 Id-diversi fornituri tal-ħażna tas-sħab għandhom APIs inkompatibbli. Anke dawk li jistinkaw għal "kompatibilità S3"
 għandhom imġieba idjosinkratika.

 Meta tagħżel bejjiegħ tal-ħażna partikolari għall-app tiegħek, jekk tikkodifika direttament għall-API tagħhom, l-app tiegħek
 issa hija dipendenti fuq dak is-servizz. Hekk kif jgħaddi ż-żmien u jakkumula l-kodiċi, il-bejjiegħa jinbidlu jsiru
 dejjem aktar insostenibbli. Merħba fid-dinja divertenti tal-lokk tal-bejjiegħ!

 Mobiletto kien iddisinjat biex isolvi din il-problema. Billi tikkodifika l-app tiegħek għall-API ta' mobiletto, tista' faċilment
 ibdel il-fornituri tal-ħażna u kun af li s-saff tal-ħażna tal-app tiegħek se jġib ruħu b'mod identiku.

 ### Ittestjar estensiv
 Is-sewwieqa kollha huma ttestjati għal imġieba identika b'60+ test għal kull sewwieq.
 Aħna nittestjaw is-sewwieqa kollha b'kull kombinazzjoni ta':
 * Encryption: kemm attivat kif ukoll diżattivat
 * Redis cache: kemm attivat kif ukoll diżattivat

 Dan l-approċċ jagħtina s-serħan tal-moħħ li mobiletto se jġib ruħu l-istess irrispettivament minn liema sewwieq tuża,
 u irrispettivament minn jekk tippermettix il-caching u/jew l-encryption.

 ### Appoġġ għas-sewwieq
 Is-sewwieqa attwali tal-ħażna tal-Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema ta' fajls lokali

 *Kontribuzzjonijiet biex jappoġġjaw aktar fornituri tal-ħażna tas-sħab huma milqugħa ħafna!*

 ## mobiletto-cli
 Mobiletto huwa maħsub biex jintuża bħala librerija minn kodiċi JavaScript ieħor.

 Biex taħdem ma 'mobiletto fil-linja tal-kmand, uża [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sors
 * [mobiletto fuq GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto fuq npm](https://www.npmjs.com/package/mobiletto)

 ## Appoġġ u Finanzjament
 Qed nipprova nkun żviluppatur professjonali ta' software open source. Ilni naħdem fiha
 l-industrija tas-softwer għal ħafna snin, bdejt kumpaniji ta 'suċċess u biegħhom lil kumpaniji pubbliċi.
 Dan l-aħħar tlift ix-xogħol tiegħi, u ma tantx għandi xogħol ieħor imħejji

 Allura jien ser nipprova nikteb softwer utli u nara jekk dan jaħdem

 Jekk inti tgawdi tuża dan is-software, inkun ferm thankful anke għall-
 l-iżgħar [kontribuzzjoni ta' kull xahar permezz ta' Patreon](https://www.patreon.com/cobbzilla)

 *Grazzi!*

 ## Installazzjoni
 Installa bl-użu ta `npm` " jew `yarn` . Probabilment trid il-verżjoni `lite` li ma tinkludix il-
 fajls README tradotti:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jekk verament trid il-fajls README f'kull lingwa, installa l-verżjoni sħiħa:

    npm install mobiletto
    yarn add mobiletto

 ## Quick Start
 Eżempju qasir bl-użu tas-sewwieq tal-mobiletto `s3` .

 Dan il-kodiċi jaħdem bl-istess mod jekk is-sewwieq ikun `b2` " jew `local` .

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
 ## Użu bażiku
 Eżempju ħafna aktar estensiv, li juri ħafna mill-karatteristiċi offruti:

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
 Il-kmand tal- `metadata` ' jirritorna metadata dwar dħul wieħed tas-sistema tal-fajls.
 Bl-istess mod, il-valur tar-ritorn mill-kmand tal- `list` huwa firxa ta' oġġetti ta' metadejta.

 Oġġett tal-metadejta jidher bħal dan:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Il-proprjetà `type` tista' tkun `file` file", `dir` ", `link` , jew `special` .

 Skont it-tip ta' sewwieq, kmand `list` jista' ma jirritornax l-oqsma kollha. Il-proprjetajiet `name` u `type` .
 għandhom dejjem ikunu preżenti. Kmand ta `metadata` sussegwenti se jirritorna l-proprjetajiet kollha disponibbli.

 ## Stil ta' importazzjoni alternattiv
 Importa l-modulu b'ambitu sħiħ u uża l-funzjoni `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto jaħdem l-aħjar <a href="https://redis.io">b'redis</a> cache.

 Mobiletto se jipprova jikkonnettja ma 'istanza redis fuq 127.0.0.1:6379

 Tista' tegħleb xi waħda minn dawn:
 * Issettja l-env var `MOBILETTO_REDIS_HOST` , mobiletto tikkonnettja hawn minflok localhost
 * Issettja l-env var `MOBILETTO_REDIS_PORT` , dan il-port se jintuża

 Mobiletto se jaħżen iċ-ċwievet redis kollha tiegħu bil-prefiss `_mobiletto__` . Tista' tibdel dan
 billi tissettja l-env var `MOBILETTO_REDIS_PREFIX` .

 Tista' wkoll tissettja caching għal kull konnessjoni bl-oġġett `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ma tridx redis caching?
 Biex tiddiżattiva: għaddi `enabled: false` fl-oġġett `opts.redisConfig` tiegħek meta tistabbilixxi l-konnessjoni tiegħek.

 Kif diskuss hawn taħt, id-diżattivazzjoni tal-caching se jkollha effett negattiv fuq il-prestazzjoni u se twassal għal aktar talbiet
 għall-ħażna li int verament bżonn.

 ### Gwida dwar il-caching
 **Ħażna encrypted**: il-qari/kitba tal-ħażna encrypted hija biss ftit aktar bil-mod min-normal,
 iżda n-navigazzjoni madwar id-direttorji (li jagħmlu xi affarijiet) hija pjuttost għalja. Uża redis cache
 jagħtik spinta sinifikanti fil-prestazzjoni.

 Il-cache default huwa sigur, iżda ma jwettaqx tajjeb jekk għandek ħafna operazzjonijiet ta 'kitba/tneħħija.
 Kwalunkwe operazzjoni ta 'kitba jew tneħħija tinvalida l-cache kollu, u tiżgura li qari sussegwenti se tara l-
 l-aħħar bidliet.

 ### Għodod CLI
 Jekk qed tuża għodda CLI bħal [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 definittivament trid li l-cache redis tkun attivata, peress li ddum matul invokazzjonijiet tal-kmand `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Il-kmand `mirror` jagħmel kopja ta' darba tal-fajls kollha minn mobiletto għal ieħor.
 Ma tmexxi l-ebda proċess biex iżżomm il-mera maż-żmien. Mexxi l-kmand `mirror` mill-ġdid
 biex tissinkronizza kwalunkwe fajl nieqes.

 Il-valur tar-ritorn minn `mirror` huwa oġġett sempliċi b'counters għal kemm fajls kienu b'suċċess
 riflessi u kemm fajls kellhom żbalji:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 TWISSIJA: Il-mirroring ta' settijiet ta' dejta kbar jista' jieħu ħafna ħin u juża ħafna bandwidth

 Bis-semantika tas-sejħiet `mirror` drabi tista' tkun konfuża biex tifhem min hu
 qarrej u min hu l-kittieb. Immaġinaha bħal dikjarazzjoni ta' assenjazzjoni: il-"mobiletto tax-xellug"
 hija l-ħaġa li qed tiġi assenjata lil (data riflessa bil-miktub), u l-"mobiletto tal-lemin" (il-
 argument għall-metodu `mirror` ) huwa l-valur li qed jiġi assenjat (id-data riflessa tinqara).

 ## Encryption trasparenti
 Ippermetti kodifikazzjoni trasparenti min-naħa tal-klijent:

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

 X'qiegħed jiġri? Direttorju separat ta' "dħul fid-direttorju" (direttorju) (kodifikat) isegwi liema fajls hemm f'dak
 direttorju (magħruf ukoll bħala d-direttorju dirent).
 * Il-kmand `list` jaqra l-fajls tad-dħul tad-direttorju, jiddeċifra kull mogħdija elenkata; imbagħad jirritorna metadata għal kull fajl
 * Kmandi tal- `list` huma aktar ineffiċjenti, speċjalment għal direttorji b'numru kbir ta' fajls
 * Il-kmand `write` jikteb fajls dirent fid-direttorju dirent ta' kull ġenitur, b'mod rikorsiv; imbagħad jikteb il-fajl
 * `write` se jġibu O(N) writes, b'N = depth fil-ġerarkija tad-direttorju
 * Il-kmand `remove` ineħħi l-fajl dirent korrispondenti, u l-ġenitur tiegħu jekk vojt, b'mod rikorsiv; imbagħad tneħħi l-fajl
 * Kmandi ta `remove` mhux rikursivi se jġarrbu qari O(N) u potenzjalment daqstant tħassir, b'N = fond fil-ġerarkija tad-direttorju
 * `remove` rikursivi fuq sistemi ta' fajls kbar u profondi jistgħu jkunu għaljin

 Innota li anke bil-kriptaġġ min-naħa tal-klijent attivat, avversarju b'viżibilità sħiħa fin-naħa tas-server kriptat tiegħek
 ħażna, anki mingħajr iċ-ċavetta, xorta jistgħu jaraw in-numru totali ta 'direttorji u kemm fajls huma f'kull wieħed, u ma
 xi sforz, skopri ftit jew l-istruttura ġenerali tal-ġerarkija tad-direttorju.
 *Nota: Uża struttura relattivament ċatta għal sigurtà aħjar.*
 L-avversarju ma jkunx jaf l-ismijiet tad-direttorji/fajls sakemm ma jkunux jafu wkoll l-encryption tiegħek
 ċavetta jew inkella kien ikkrekkjat b'suċċess l-encryption. L-imħatri kollha huma mitfija allura!

 ### Prestazzjoni u caching
 L-operazzjonijiet fuq il-ħażna kriptata jistgħu jkunu bil-mod. Listi u tneħħija rikorsivi jistgħu jkunu bil-mod ħafna.
 Il-caching permezz ta' redis jgħin bil-kbir, iżda innota li l-cache titlaħlaħ fuq kwalunkwe kitba jew tneħħija.

 ## Rotazzjoni taċ-ċavetta
 Oħloq mobiletto biċ-ċavetta l-ġdida tiegħek, imbagħad immarka d-dejta l-antika fiha:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfaċċja tas-sewwieq
 Driver huwa kwalunkwe fajl JS li jesporta funzjoni 'storageClient' b'din il-firma:

    function storageClient (key, secret, opts)

 * `key` : string, iċ-ċavetta API tiegħek (għax-sewwieq `local` dan huwa d-direttorju bażi)
 * `secret` : string, is-sigriet tal-API tiegħek (jista' jitħalla barra għas-sewwieq `local` )
 * `opts` : oġġett, il-proprjetajiet huma għal kull sewwieq:
 * Għal `local` , il- `fileMode` " u `dirMode` jiddeterminaw kif jinħolqu fajls u direttorji ġodda li joħolqu
 * Għal `s3` , il-proprjetà `bucket` hija meħtieġa. Proprjetajiet fakultattivi huma:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 L-oġġett li l-funzjoni storageClient jirritorna għandu jiddefinixxi dawn il-funzjonijiet:

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
 Mobiletto juża l-librerija tal-illoggjar [winston](https://www.npmjs.com/package/winston).

 Iz-zkuk **se** ikun fihom mogħdijiet tal-fajls u messaġġi ta' żball, iżda **qatt** se jkun fihom ċwievet, sigrieti,
 jew kwalunkwe informazzjoni oħra dwar il-konfigurazzjoni tal-konnessjoni.

 ### Livell ta’ log
 Uża l-varjabbli tal-ambjent `MOBILETTO_LOG_LEVEL` biex tissettja l-livell tal-log, billi tuża waħda
 tal-livelli `npm` definiti fi [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Il-livell default huwa `error` . L-aktar livell verbose huwa `silly` , għalkemm bħalissa mobiletto
 ma jilloggjax f'livelli taħt `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log file
 B'mod awtomatiku, il-logger jikteb fuq il-console. Biex tibgħat zkuk għal fajl, issettja l- `MOBILETTO_LOG_FILE`
 varjabbli ambjentali. Meta tilloggja għal fajl, zkuk ma jibqgħux jinkitbu fuq il-console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Biex itfi l-illoggjar:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
