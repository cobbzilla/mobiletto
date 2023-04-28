Mobiletto
 =========

 Mobiletto ke karolo ea polokelo ea JavaScript, e nang le mokhoa oa boikhethelo o pepeneneng oa lehlakoreng la moreki.

 # Litaba
 * [Hobaneng Mobiletto?](#Hobaneng-Mobiletto?)
 * [Qalo e potlakileng](#Qalo e potlakileng)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Mohloli](#Mohloli)
 * [Kenyo](#Kenyeletso)
 * [Tšehetso le Lichelete](#Tšehetso-le-Lichelete)
 * [Tsebeliso ea mantlha](#Tšebeliso ea mantlha)
 * [Metadata](#Metadata)
 * [Mokhoa o mong oa ho reka kantle ho naha](#Mokhoa-mokhoa o mong)
 * [Caching](#Caching)
 * [Ho etsa seipone](#Mirroring)
 * [Ponaletso e hlakileng](#Ponaletso-encryption)
 * [Ho potoloha ha senotlolo](#Ho potoloha)
 * [Sebopeho sa mokhanni](#Sehokelo sa mokhanni)
 * [Ho rengoa](#Ho rema)

 # Bala sena ka puo e 'ngoe
 Tokomane ena ea README.md e fetoletsoe, ka [hokeylization](https://github.com/cobbzilla/hokeylization), ho
 **[puo e nngwe le e nngwe e tshehetswa ke Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ke na le bonnete ba hore ha ea phethahala, empa ke ts'epa hore e betere ho feta letho!

 [🇸🇦 Searabia](../ar/README.md)
 [🇧🇩 Benghali](../bn/README.md)
 [🇩🇪 Sejeremane](../de/README.md)
 [🇺🇸 Senyesemane](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Sefora](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Sehindi](../hi/README.md)
 [🇮🇩 Seindonesia](../id/README.md)
 [🇮🇹 Setaliana](../it/README.md)
 [🇯🇵 Sejapane](../ja/README.md)
 [🇰🇷 Sekorea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Sepolishe](../pl/README.md)
 [🇧🇷 Sepotoketsi](../pt/README.md)
 [🇷🇺 Serussia](../ru/README.md)
 [🇰🇪 Seswahili](../sw/README.md)
 [🇵🇭 Setagalog](../tl/README.md)
 [🇹🇷 Seturkey](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Sevietnam](../vi/README.md)
 [🇨🇳 Sechaena](../zh/README.md)


 **[📚 ... Lipuo Tsohle ...](../README.md)**
 ----

 ### Na ho na le bothata ka phetolelo ee ea README?
 Phetolelo ena ea pele ea [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 e kanna ea ba le bofokoli -- *litokiso li amohelehile!* Ka kopo, romella [ho hula kopo ho GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 kapa ha o sa phutholoha ho etsa joalo, [bula bothata](https://github.com/cobbzilla/mobiletto/issues)

 Ha o theha taba e ncha ea GitHub mabapi le phetolelo, ka kopo etsa:
 * kenyelletsa URL ea leqephe (kopi / beha ho tsoa bareng ea aterese ea sebatli)
 * kenyelletsa mongolo o nepahetseng (kopi / beha ho tsoa ho sebatli)
 * Ka kopo hlalosa se fosahetseng -- na phetolelo e fosahetse? na sebopeho se robehile ka tsela e itseng?
 * ka mosa fana ka tlhahiso ea phetolelo e molemonyana, kapa hore na taba e ngotsoe joang ka tsela e nepahetseng
 * **Kea leboha!**

 ## Hobaneng Mobiletto?

 ### Sala hantle ha barekisi ba notlela!
 Bafani ba mefuta e fapaneng ea polokelo ea maru ba na le li-API tse sa lumellaneng. Esita le ba loanelang "S3 compatibility"
 ba le boitšoaro bo sa tloaelehang.

 Ha u khetha morekisi ea itseng oa polokelo bakeng sa sesebelisoa sa hau, haeba u khouta ka kotloloho ho API ea bona, sesebelisoa sa hau
 jwale e itshetlehile ka tshebeletso eo. Ha nako e ntse e tsamaea le khoutu e ntse e bokellana, ho fetoha ha barekisi ho fetoha
 e ntseng e sa kgonehe ho feta. Rea u amohela lefatšeng le monate la ho notlela ha barekisi!

 Mobiletto e etselitsoe ho rarolla bothata bona. Ka ho khouta sesebelisoa sa hau ho mobiletto's API, u ka khona habonolo
 fetola bafani ba polokelo 'me u tsebe hore sebaka sa polokelo ea sesebelisoa sa hau se tla sebetsa ka mokhoa o ts'oanang.

 ### Teko e batsi
 Bakhanni bohle ba lekoa bakeng sa boitšoaro bo tšoanang ka liteko tse 60+ bakeng sa mokhanni ka mong.
 Re leka bakhanni bohle ka motsoako o mong le o mong oa:
 * Encryption: ka bobeli e nolofalitsoe ebile e holofalitsoe
 * Redis cache: ka bobeli e nolofalitsoe ebile e holofetse

 Mokhoa ona o re fa khotso ea kelello ea hore mobiletto e tla itšoara ka mokhoa o ts'oanang ho sa tsotellehe hore na u sebelisa mokhanni ofe,
 le ho sa tsotelehe hore na o lumella caching le/kapa encryption.

 ### Tšehetso ea mokhanni
 Bakhanni ba hajoale ba Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : tsamaiso ea faele ea lehae

 *Menehelo ea ho ts'ehetsa bafani ba bangata ba polokelo ea maru e amoheloa haholo!*

 ## mobiletto-cli
 Mobiletto e reretsoe ho sebelisoa e le laebrari ka khoutu e 'ngoe ea JavaScript.

 Ho sebetsa le mobiletto molaong oa taelo, sebelisa [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ##Mohloli
 * [mobiletto ho GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto ho npm](https://www.npmjs.com/package/mobiletto)

 ## Tšehetso le Lichelete
 Ke leka ho ba setsebi sa software ea open source software. Ke ntse ke sebetsa
 indasteri ea software ka lilemo tse ngata, ke qalile lik'hamphani tse atlehileng mme ka li rekisetsa lik'hamphani tsa sechaba.
 Haufinyane tjena ke lahlehetsoe ke mosebetsi, 'me ha ho na mosebetsi o mong oo ke o lokiselitseng

 Kahoo ke tla leka ho ngola software e thusang mme ke bone hore na e ea sebetsa

 Haeba u natefeloa ke ho sebelisa software ena, ke tla leboha haholo bakeng sa eona
 e nyane [monehelo oa khoeli le khoeli ka Patreon](https://www.patreon.com/cobbzilla)

 *Kea leboha!*

 ## Kemiso
 Kenya o sebelisa `npm` kapa `yarn` . Mohlomong u batla mofuta oa `lite` o sa kenyelletseng kaofela
 lifaele tsa README tse fetoletsoeng:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Haeba u hlile u batla lifaele tsa README ka puo e 'ngoe le e' ngoe, kenya mofuta o felletseng:

    npm install mobiletto
    yarn add mobiletto

 ## Ho qala ka potlako
 Mohlala o mokhuts'oane o sebelisang mokhanni oa mobiletto `s3` .

 Khoutu ena e ne e tla sebetsa ka mokhoa o ts'oanang haeba mokhanni a le `b2` kapa `local` .

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
 ## Tšebeliso ea mantlha
 Mohlala o pharaletseng haholoanyane, o bonts'ang boholo ba likarolo tse fanoeng:

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
 Taelo ea `metadata` e khutlisetsa metadata mabapi le kenyo e le 'ngoe ea tsamaiso ea faele.
 Ka mokhoa o ts'oanang, chelete e khutlisang ho tsoa ho taelo ea `list` ke lintho tse ngata tsa metadata.

 Ntho ea metadata e shebahala tjena:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Thepa ea `type` e ka ba `file` , `dir` , `link` , kapa `special` .

 Ho latela mofuta oa mokhanni, taelo ea `list` e kanna ea se khutlise likarolo tsohle. Thepa ea `name` le `type`
 e lokela ho ba teng kamehla. Taelo e latelang ea `metadata` e tla khutlisa thepa eohle e teng.

 ## Mokhoa o mong oa ho kenya
 Kenya mochini o hlophisitsoeng ka botlalo 'me u sebelise mosebetsi oa `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ##Caching
 Mobiletto e sebetsa hantle haholo ka cache ea <a href="https://redis.io">redis</a> .

 Mobiletto e tla leka ho hokahana le mohlala oa redis ho 127.0.0.1:6379

 O ka hlakola e 'ngoe ea tsena:
 * Beha lebitso la `MOBILETTO_REDIS_HOST` env var, mobiletto hokela mona ho fapana le localhost
 * Beha `MOBILETTO_REDIS_PORT` env var, boema-kepe bona bo tla sebelisoa

 Mobiletto e tla boloka linotlolo tsohle tsa eona tsa redis ka `_mobiletto__` . O ka fetola sena
 ka ho `MOBILETTO_REDIS_PREFIX` env var.

 U ka boela ua seta caching ka khokahanyo ka ntho ea `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ha u batle redis caching?
 Ho tima: fetisa `enabled: false` ea hau ea `opts.redisConfig` ha u theha khokahano ea hau.

 Joalo ka ha ho boletsoe ka tlase, ho thibela caching ho tla ba le phello e mpe ts'ebetsong mme ho hlahise likopo tse ngata
 ho boloka seo u hlileng u se hlokang.

 ### Tataiso ea ho boloka
 **polokelo e patiloeng**: polokelo e patiloeng ea ho bala/ho ngola e lieha ho feta e tloaelehileng,
 empa ho pota-pota li-directory (tseo lintho tse ling li li etsang) ho bitsa chelete e ngata. Ho sebelisa cache ea redis
 e tla u fa ntlafatso e kholo ea ts'ebetso.

 Cache ea kamehla e bolokehile, empa ha e sebetse hantle haeba u na le mesebetsi e mengata ea ho ngola / ho tlosa.
 Ts'ebetso efe kapa efe ea ho ngola kapa ea ho tlosa e etsa hore cache kaofela e se ke ea sebetsa, ho etsa bonnete ba hore lintho tse baloang tse latelang li tla bona
 liphetoho tsa moraorao.

 ### CLI lisebelisoa
 Haeba u sebelisa sesebelisoa sa CLI joalo ka [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ka 'nete u tla batla hore cache ea redis e lumelloe, kaha e tšoarella ho pholletsa le likopo tsa taelo ea `mo` .

 ## Ho etsa seipone

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Taelo ea `mirror` e etsa kopi ea nako e le 'ngoe ea lifaele tsohle ho tloha ho mobiletto e 'ngoe ho ea ho e' ngoe.
 Ha e tsamaise mokhoa leha e le ofe oa ho boloka seipone ka nako. Etsa taelo ea `mirror` hape
 ho amahanya difaele dife kapa dife tse sieo.

 Theko ea ho khutlisa ho tsoa ho `mirror` ke ntho e bonolo e nang le li-counters tsa hore na ke lifaele tse kae tse atlehileng
 seipone le hore na ke lifaele tse kae tse nang le liphoso:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 TLHOKOMELISO: Ho bopa li-sete tse kholo tsa data ho ka nka nako haholo le ho nka sebaka sa marang-rang

 Ka semantics ea `mirror` ka linako tse ling e ka ferekanya ho utloisisa hore na ke mang
 mmadi le hore mongodi ke mang. Ak'u nahane joalo ka polelo ea kabelo: "mobileto ea letsoho le letšehali"
 ke ntho e abetsoeng (data e entsoeng ka seipone), le "mobileto e letsohong le letona" (the
 khang ea mokhoa oa `mirror` ) ke boleng bo abeloang (ho baloa data ea seipone).

 ## Encryption e hlakileng
 Lumella mokhoa oa ho hlakoloa ka mokhoa o hlakileng oa lehlakoreng la moreki:

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

 Ho etsahalang? Sebaka se arohaneng sa "directory entry" (dirent) directory (encrypted) se latela hore na lifaele li hokae
 directory (eo hape e leng "dirent directory).
 * Taelo ea `list` e bala lifaele tsa ho kenya li-directory, e hlakola tsela e 'ngoe le e 'ngoe e thathamisitsoeng; ebe o khutlisetsa metadata bakeng sa faele ka 'ngoe
 * Litaelo tsa `list` ha li sebetse hantle, haholo bakeng sa li-directory tse nang le palo e kholo ea lifaele
 * Taelo ea `write` e ngola lifaele tsa dirent bukeng e 'ngoe le e 'ngoe e fapaneng ea motsoali, ka ho pheta-pheta; ebe o ngola faele
 * Litaelo tsa `write` li tla kenya O(N) ho ngola, ka N = botebo ba lethathamong la lihlopha.
 * Taelo ea `remove` e tlosa faele e tsamaisanang le dirent, mme motsoali oa eona haeba e se na letho, ka ho pheta-pheta; ebe o tlosa faele
 * Litaelo tse sa iphetang tsa `remove` li tla etsa hore O(N) e baloe 'me mohlomong e hlakoloe hangata, ka N = botebo ba lethathamong la lihlopha.
 * `remove` tsa 'ho tlosa' tse pheta-phetoang ho li-file tse kholo le tse tebileng li ka bitsa chelete e ngata

 Hlokomela hore leha encryption ea lehlakore la bareki e nolofalitsoe, mohanyetsi ea nang le ponahalo e felletseng ka lehlakoreng la hau la seva e patiloeng.
 polokelo, leha e se na senotlolo, e ntse e khona ho bona palo eohle ea li-directory le hore na ho na le lifaele tse kae ho e 'ngoe le e 'ngoe, le ka
 ka boiteko bo itseng, fumana tse ling kapa tsohle tsa sebopeho sa kakaretso sa lenane la lenane.
 *Hlokomela: Sebelisa sebopeho se batlang se bataletse bakeng sa ts'ireletso e betere.
 Mohanyetsi o ne a ke ke a tseba mabitso a li-directory / lifaele ntle le haeba a ne a tseba le encryption ea hau
 key kapa o atlehile ho hlakola encryption. Libeche tsohle li felile ka nako eo!

 ### Tshebetso le caching
 Ts'ebetso ea polokelo e patiloeng e ka tsamaea butle. Mananeo a iphetang le ho tlosa a ka lieha haholo.
 Caching ka redis e thusa haholo, empa hlokomela hore cache e fetisoa ho eng kapa eng e ngotsoeng kapa e tlosoa.

 ## Phetoho ea bohlokoa
 Theha mobiletto ka senotlolo sa hau se secha, ebe u sheba lintlha tsa khale ho eona:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Sehokelo sa mokhanni
 Mokhanni ke faele efe kapa efe ea JS e romellang mosebetsi oa 'storageClient' ka signature ena:

    function storageClient (key, secret, opts)

 * `key` : khoele, senotlolo sa hau sa API (bakeng sa mokhanni oa `local` ena ke buka ea motheo)
 * `secret` : khoele, lekunutu la API ea hau (e ka siuoa bakeng sa mokhanni oa `local` )
 * `opts` : ntho, thepa ke mokhanni ka mong:
 * Bakeng sa `local` , thepa ea `fileMode` le `dirMode` e bontša hore na lifaele le litsamaiso tse ncha li etsoa joang.
 * Bakeng sa `s3` , thepa ea `bucket` ea hlokahala. Lintho tseo u ka li khethang ke:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ntho eo ts'ebetso ea storageClient e khutlisang e tlameha ho hlalosa mesebetsi ena:

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

 ## Ho rema lifate
 Mobiletto e sebelisa [winston](https://www.npmjs.com/package/winston) laeborari ea ho rema lifate.

 Li-log ** li tla ba le litsela tsa lifaele le melaetsa ea liphoso, empa ** ha ho mohla ** e nang le linotlolo, liphiri,
 kapa tlhahisoleseding efe kapa efe e 'ngoe ea tlhophiso ea khokahano.

 ### Boemo ba marang-rang
 Sebelisa sebopeho sa `MOBILETTO_LOG_LEVEL` ho seta boemo ba log, u sebelisa e le 'ngoe
 ya maemo a `npm` a hlalositsweng ho [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Boemo ba kamehla ke `error` . Boemo ba leetsi haholo ke `silly` , leha hajoale mobiletto
 ha e kene maemong a ka tlase ho `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Faele ea ho rekota
 Ka ho sa feleng, ralithara o ngolla console. Ho romela litlaleho faeleng, beha `MOBILETTO_LOG_FILE`
 tikoloho e fapaneng. Ha u kena faeleng, li-log ha li sa tla ngolloa ho console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Ho tima ho rema lifate:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
