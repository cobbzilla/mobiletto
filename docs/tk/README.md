Mobiletto
 =========

 Mobiletto, goşmaça aç-açan müşderi şifrlemesi bilen JavaScript ammar abstraksiýa gatlagy.

 # Mazmuny
 * [Näme üçin Mobiletto?](# Näme üçin Mobiletto?)
 * [Çalt başlangyç](# Çalt başlamak)
 * [Mobiletto CLI](# mobiletto-müşderi)
 * [Çeşme](# Çeşme)
 * [Gurnama](# Gurnama)
 * [Goldaw we maliýeleşdirmek](# Goldaw we maliýeleşdirmek)
 * [Esasy ulanyş](# Esasy ulanyş)
 * [Metadata](# Metadata)
 * [Alternatiw import stili](# Alternate-import-style)
 * [Keşleme](# Keşleme)
 * [Aýna aýlamak](# Aýna)
 * [Aç-açan şifrlemek](# Aç-şifrlemek)
 * [Düwmeleriň aýlanmagy](# Düwmeleriň aýlanmagy)
 * [Sürüji interfeýsi](# Sürüji interfeýsi)
 * [Gingazgy](# Giriş)

 # Muny başga dilde okaň
 Bu README.md resminamasy [hokeylization](https://github.com/cobbzilla/hokeylization) arkaly terjime edildi
 ** [Google Translate tarapyndan goldanýan her dil](https://cloud.google.com/translate/docs/languages)! **

 Kämil däldigine ynanýaryn, ýöne hiç zatdan gowudyr diýip umyt edýärin!

 [🇸🇦 Arapça](docs / ar / README.md)
 [Ali Bengali](docs / bn / README.md)
 [🇩🇪 Nemesçe](docs / de / README.md)
 [🇺🇸 Iňlis](docs / en / README.md)
 [🇪🇸 Ispança](docs / es / README.md)
 [🇫🇷 Fransuzça](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 Indoneziýa](docs / id / README.md)
 [🇮🇹 Italýança](docs / it / README.md)
 [🇯🇵 Japaneseaponça](docs / ja / README.md)
 [🇰🇷 Koreýçe](docs / ko / README.md)
 [🇮🇳 Marathi](docs / mr / README.md)
 [🇵🇱 Polýakça](docs / pl / README.md)
 [🇧🇷 Portugaliýa](docs / pt / README.md)
 [🇷🇺 Rusça](docs / ru / README.md)
 [Wa Suwaýili](docs / sw / README.md)
 [Ag Tagalog](docs / tl / README.md)
 [🇹🇷 Türkçe](docs / tr / README.md)
 [🇵🇰 urdu](docs / ur / README.md)
 [🇻🇳 Wýetnamly](docs / vi / README.md)
 [🇨🇳 Hytaý](docs / zh / README.md)


 ** [📚 ... Languageshli diller ...](resminamalar / README.md) **
 ----

 ### README-iň bu terjimesinde näsazlyk barmy?
 Asyl [README] -iň bu aýratyn terjimesi (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kemçilikli bolup biler - * düzedişler gaty hoş geldiňiz! * GitHub-a çekmek haýyşyny iberiň (https://github.com/cobbzilla/mobiletto/pulls),
 ýa-da muny etmek üçin amatly däl bolsaňyz, [bir meseläni açyň](https://github.com/cobbzilla/mobiletto/issues)

 Terjime hakda täze GitHub meselesini döredeniňizde, haýyş edýärin:
 * sahypa URL-ni goşuň (brauzeriň salgy setirinden göçüriň / göçüriň)
 * nädogry teksti goşuň (brauzerden göçüriň / göçüriň)
 * nämäniň nädogrydygyny düşündirmegiňizi haýyş edýäris - terjime nädogrymy? formatlamak nädip bozuldy?
 * has gowy terjime ýa-da tekstiň nädip formatlanmalydygy barada teklip hödürläň
 * **Sagbol!**

 ## Näme üçin Mobiletto?

 ### Hoş gal satyjy gulp!
 Dürli bulut saklaýjy üpjün edijilere gabat gelmeýän API-ler bar. Hatda "S3 utgaşyklygy" üçin çalyşýanlaram
 samsyk häsiýetli hereketleri bar.

 Programmaňyz üçin belli bir saklaýjyny saýlanyňyzda, gönüden-göni olaryň API-sine, programmaňyza kod berseňiz
 indi şol hyzmata baglydyr. Wagtyň geçmegi we kod ýygnanmagy bilen satyjylar üýtgeýär
 gitdigiçe durnuksyz. Satyjy gulplama gyzykly dünýäsine hoş geldiňiz!

 Mobiletto bu meseläni çözmek üçin döredildi. Programmaňyzy mobiletto API-e kodlamak bilen, aňsatlyk bilen edip bilersiňiz
 saklaýjy üpjün edijileri üýtgediň we programmaňyzyň ammar gatlagynyň birmeňzeş hereket etjekdigini biliň.

 ### Giňişleýin synag
 Drivershli sürüjiler her bir sürüji üçin 60+ synag bilen birmeňzeş hereket üçin synag edilýär.
 Drivershli sürüjileri her kombinasiýa bilen barlaýarys:
 * Şifrlemek: açyk we ýapyk
 * Redis keş: açyk we ýapyk

 Bu çemeleşme, mobtto haýsy sürüjini ulanýandygyňyza garamazdan özüni alyp barjakdygyna rahatlyk berýär,
 keş we / ýa-da şifrlemäge mümkinçilik berýändigiňize garamazdan.

 ### Sürüji goldawy
 Häzirki Mobiletto saklaýjy draýwerleri:
 * `s3` : Amazon S3
 * `b2` : Yzygiderli B2
 * "ýerli": ýerli faýl `local`

 * Has köp bulut saklaýjy üpjünçini goldamak üçin goşantlar hoş geldiňiz! *

 ## mobiletto-müşderi
 Mobiletto beýleki JavaScript kody bilen kitaphana hökmünde ulanmak üçin niýetlenendir.

 Buýruk setirinde mobiletto bilen işlemek üçin [mobiletto-cli] ulanyň (https://www.npmjs.com/package/mobiletto-cli)

 ## Çeşme
 * [GitHub-da mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm-de mobiletto](https://www.npmjs.com/package/mobiletto)

 ## Goldaw we maliýeleşdirmek
 Professional açyk çeşme programma üpjünçisi bolmaga synanyşýaryn. Men işleýärin
 programma üpjünçiligi pudagy köp ýyl bäri üstünlikli kompaniýalara başladym we olary jemgyýetçilik kompaniýalaryna satdym.
 Recentlyakynda işimi ýitirdim, hatara düzülen başga işim ýok

 Şonuň üçin peýdaly programma üpjünçiligini ýazmaga synanyşaryn we munuň işleýändigini ýa-da ýokdugyny görerin

 Bu programma üpjünçiligini ulanmakdan lezzet alýan bolsaňyz, hatda hatda gaty minnetdar bolardym
 iň kiçi [Patreonyň üsti bilen aýlyk goşant](https://www.patreon.com/cobbzilla)

 *Sagbol!*

 ## Gurmak
 " `npm` ýa-da " `yarn` " ulanyp guruň. Allhli zady öz içine almaýan " `lite` " wersiýasyny isleýän bolsaňyz gerek
 terjime edilen README faýllary:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Her dilde README faýllaryny hakykatdanam isleýän bolsaňyz, doly wersiýasyny guruň:

    npm install mobiletto
    yarn add mobiletto

 ## Çalt başlangyç
 Mobiletto `s3` draýwerini ulanmagyň gysga mysaly.

 Sürüji " `b2` ýa-da "ýerli" bolsa, bu kod şol bir `local` .

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
 ## Esasy ulanyş
 Hödürlenýän aýratynlyklaryň köpüsini görkezýän has giňişleýin mysal:

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
 " `metadata` " buýrugy ýekeje faýl ulgamy ýazgysy barada meta-maglumaty gaýtaryp berýär.
 Edil şonuň ýaly, "list" buýrugyndan gaýdyp geliş bahasy metadata obýektleriniň `list` .

 Metadata obýekti şuňa meňzeýär:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 " `type` " `link` `dir` `file` "baglanyşyk" ýa-da " `special` " bolup biler.

 Sürüjiniň görnüşine baglylykda " `list` buýrugy ähli meýdanlary yzyna gaýtaryp bilmez. " `name` " we " `type` " häsiýetleri
 elmydama bolmalydyr. Ondan soňky " `metadata` " buýrugy ähli bar bolan häsiýetleri yzyna gaýtaryp berer.

 ## Alternatiw import stili
 Doly göwrümli moduly import ediň we " `connect` " funksiýasyny ulanyň:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Keşleme
 Mobiletto <a href="https://redis.io">redis</a> keş bilen iň oňat işleýär.

 Mobiletto 127.0.0.1:6379-da redis meselesine birikmäge synanyşar

 Bularyň ikisini hem ýok edip bilersiňiz:
 * “ `MOBILETTO_REDIS_HOST` ” env var, ýerlihostyň ýerine şu ýere mobtto birikdiriň
 * " `MOBILETTO_REDIS_PORT` " env görnüşini düzüň, bu port ulanylar

 Mobiletto ähli redis açarlaryny " `_mobiletto__` " prefiksi bilen saklar. Muny üýtgedip bilersiňiz
 " `MOBILETTO_REDIS_PREFIX` " env var.

 Şeýle hem, “ `opts.redisConfig` ” obýekti bilen bir baglanyşyk keş keşini düzüp bilersiňiz:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Redis keş keşini islemeýärsiňizmi?
 Öçürmek üçin: birikmäňizi guranyňyzda " `opts.redisConfig` " obýektiňizde " `enabled: false` " geçiň.

 Aşakda görkezilişi ýaly, keş keşini öçürmek öndürijilige ýaramaz täsir eder we has köp isleg döreder
 hakykatdanam zerur zatlary saklamak üçin.

 ### Keş görkezmesi
 ** Şifrlenen ammar **: şifrlenen ammary okamak / ýazmak adaty ýagdaýdan birneme haýal,
 emma kataloglarda gezmek (käbir zatlar edýär) gaty gymmat. Redis keş keşini ulanmak
 ep-esli öndürijilik güýçlendirer.

 Bellenen keş keşde howpsuz, ýöne köp ýazmak / aýyrmak amallaryňyz bar bolsa gowy işlemeýär.
 Islendik ýazmak ýa-da aýyrmak amaly, ähli keş keşbini ýatyrýar, soňraky okalanlary görer
 soňky üýtgeşmeler.

 ### CLI gurallary
 [Mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ýaly CLI guralyny ulanýan bolsaňyz,
 “ `mo` ” buýrugynyň çakylyklaryna çenli dowam edýändigi üçin hökman redis keş keşiniň açyk bolmagyny islärsiňiz.

 ## Aýna

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 " `mirror` " buýrugy, bir mobil telefondan beýlekisine ähli faýllaryň bir gezeklik göçürmesini ýerine ýetirýär.
 Wagtyň geçmegi bilen aýnany saklamak üçin hiç hili işlemeýär. " `mirror` " buýrugyny gaýtadan işlediň
 ýiten faýllary sinhronlamak üçin.

 " `mirror` " yzyna gaýtarmak bahasy, näçe faýlyň üstünlikli bolandygy üçin hasaplaýjylar bilen ýönekeý bir zat
 aýnaly we näçe faýlda ýalňyşlyk bardy:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 DUNDURYŞ: Uly maglumatlar toplumyny aýna etmek gaty köp wagt talap edip biler we geçirijilik giňligini talap edip biler

 " `mirror` " jaň semantikasy bilen kimiň kimdigine düşünmek käwagt bulaşyk bolup biler
 okyjy we ýazyjy kim. Muny tabşyryk beýany ýaly göz öňüne getiriň: "çep elli mobtto"
 berlen zat (aýna ýazylan maglumatlar) we "sag el mobtto" (
 "aýna" usulyna argument - bellenen `mirror` (aýna maglumatlar okalýar).

 ## Aç-açan şifrlemek
 Müşderiniň aç-açan şifrlemesini açyň:

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

 Näme bolýar? Aýry "katalog ýazgysy" (dirent) katalog (şifrlenen) haýsy faýllaryň bardygyny yzarlaýar
 katalog (direkt direktory).
 * " `list` " buýrugy katalog giriş faýllaryny okaýar, sanalan her bir ýoly açýar; soň her faýl üçin meta-maglumaty gaýtarýar
 * `list` buýruklary has netijesiz, esasanam köp sanly faýlly kataloglar üçin
 * " `write` " buýrugy her bir ene-atanyň direktory katalogyna yzygiderli faýl ýazýar; soň faýly ýazýar
 * " `write` buýruklary, katalog iýerarhiýasynda N = çuňlugy bilen O (N) ýazýar
 * "Aýyrmak" buýrugy degişli `remove` faýlyny we boş bolsa, ene-atasyny aýyrýar; soň faýly aýyrýar
 * `remove` "aýyrmak" buýruklary O (N) okalmagyna sebäp bolar we katalog iýerarhiýasynda N = çuňlugy bilen pozulmagy mümkin.
 * Uly we çuň faýl ulgamlarynda `remove` "aýyrmak" buýruklary gymmat bolup biler

 Müşderi tarapyndan şifrlemek mümkinçiligi bolan ýagdaýynda-da, şifrlenen serwer tarapyňyza doly görünýän garşydaş.
 saklamak, hatda açarsyz hem, umumy kataloglaryň sanyny we hersinde näçe faýlyň bardygyny we ýanynda görüp bilýär
 käbir tagallalar, katalog iýerarhiýasynyň käbir gurluşyny ýa-da hemmesini açyň.
 * Bellik: Has gowy howpsuzlyk üçin birneme tekiz gurluşy ulanyň. *
 Garşydaş, şifrlemegiňizi bilmese, kataloglaryň / faýllaryň atlaryny bilmez
 açary ýa-da şifrlemäni üstünlikli döwüpdir. Thenhli jedeller ýapyk!

 ### Çykyş we keş
 Şifrlenen ammarda amallar haýal bolup biler. Gaýtalanýan sanawlar we aýyrmalar gaty haýal bolup biler.
 Redis arkaly keş keşdemek gaty uly kömek edýär, ýöne keşiň islendik ýazgylara ýa-da aýyrylmagyna üns beriň.

 ## Düwmeleriň aýlanmagy
 Täze açaryňyz bilen mobilto dörediň, soňra köne maglumatlary aýna ediň:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Sürüji interfeýsi
 Sürüji, bu gol bilen 'storageClient' funksiýasyny eksport edýän islendik JS faýlydyr:

    function storageClient (key, secret, opts)

 * " `key` : setir, API açaryňyz (" `local` " sürüjisi üçin bu esasy katalogdyr)
 * "gizlin": setir, API `secret` (" `local` " sürüjisi üçin aýrylyp bilner)
 * " `opts` ": bir obýekt, häsiýetler her sürüjä degişlidir:
 * "Localerli" üçin " `local` " we " `fileMode` " häsiýetleri täze döredilen faýllaryň we kataloglaryň nädip `dirMode` kesgitleýär
 * " `s3` " üçin " `bucket` " emläk talap edilýär. Meýletin aýratynlyklar:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 “StorageClient” funksiýasynyň gaýdyp gelýän obýekti bu funksiýalary kesgitlemeli:

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

 ## Giriş
 Mobiletto [winston](https://www.npmjs.com/package/winston) hasaba alyş kitaphanasyny ulanýar.

 Surnallar ** faýl ýollaryny we ýalňyş habarlaryny öz içine alar, ýöne ** hiç haçan ** açarlary, syrlary öz içine almaz,
 ýa-da başga baglanyşyk konfigurasiýa maglumatlary.

 ### Giriş derejesi
 Birini ulanyp, gündelik derejesini kesgitlemek üçin " `MOBILETTO_LOG_LEVEL` " gurşaw üýtgeýjisini ulanyň
 [https://www.npmjs.com/package/winston#logging-levels)(https://www.npmjs.com/package/winston#logging-levels) kesgitlenen " `npm` " derejelerinden

 Bellenen dereje " `error` ". Iň köp söz derejesi "samsyk", häzirki wagtda `silly`
 "düzediş" -den aşakdaky derejelere `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Faýl ýazyň
 Düzgüne görä, ýazyjy konsola ýazýar. Surnallary bir faýla ibermek üçin " `MOBILETTO_LOG_FILE` " belläň
 daşky gurşaw üýtgeýjisi. Faýla gireniňizde, ýazgylar indi konsola ýazylmaz.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Gingazgyny öçürmek üçin:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
