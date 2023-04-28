Mobiletto
 =========

 Mobiletto ir JavaScript krātuves abstrakcijas slānis ar papildu caurspīdīgu klienta puses šifrēšanu.

 # Saturs
 * [Kāpēc Mobiletto?](#Kāpēc-Mobiletto?)
 * [Ātrais sākums](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Avots](#Avots)
 * [Instalācija](#Instalācija)
 * [Atbalsts un finansējums](#Support-and-Funding)
 * [Pamata lietojums](#Basic-usage)
 * [Metadati](#Metadata)
 * [Alternatīvais importēšanas stils](#Alternate-import-style)
 * [Kešatmiņa](#Caching)
 * [Spoguļošana](#Spoguļošana)
 * [Caurspīdīga šifrēšana](#Transparent-encryption)
 * [Taustiņu pagriešana](#Key-rotation)
 * [Draivera saskarne](#Driver-interface)
 * [Logging](#Logging)

 # Lasiet to citā valodā
 Šis README.md dokuments ir tulkots, izmantojot [hokeylization](https://github.com/cobbzilla/hokeylization)
 **[Visas valodas, ko atbalsta Google tulkotājs](https://cloud.google.com/translate/docs/languages)!**

 Esmu pārliecināts, ka tas nav ideāls, bet es ceru, ka tas ir labāk nekā nekas!

 [🇸🇦 arābu](../ar/README.md)
 [🇧🇩 bengāļu](../bn/README.md)
 [🇩🇪 vācu valodā](../de/README.md)
 [🇺🇸 angļu valodā](../en/README.md)
 [🇪🇸 spāņu](../es/README.md)
 [🇫🇷 franču valoda](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonēziešu](../id/README.md)
 [🇮🇹 itāļu valoda](../it/README.md)
 [🇯🇵 japāņu](../ja/README.md)
 [🇰🇷 korejiešu](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poļu](../pl/README.md)
 [🇧🇷 portugāļu](../pt/README.md)
 [🇷🇺 krievu valodā](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalogs](../tl/README.md)
 [🇹🇷 turku](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vjetnamiešu](../vi/README.md)
 [🇨🇳 ķīniešu](../zh/README.md)


 **[📚 ... Visas valodas ...](../README.md)**
 ----

 ### Vai ir problēma ar šo README tulkojumu?
 Šis konkrētais oriģināla [README] tulkojums (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 var būt kļūdains — *labojumi ir ļoti apsveicami!* Lūdzu, nosūtiet [izvilkšanas pieprasījumu vietnē GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 vai, ja nevēlaties to darīt, [atveriet problēmu](https://github.com/cobbzilla/mobiletto/issues)

 Kad veidojat jaunu GitHub problēmu par tulkojumu, lūdzu, rīkojieties šādi:
 * iekļaujiet lapas URL (kopējiet/ielīmējiet no pārlūkprogrammas adreses joslas)
 * iekļaujiet precīzu nepareizo tekstu (kopējiet/ielīmējiet no pārlūkprogrammas)
 * Lūdzu, aprakstiet, kas ir nepareizi — vai tulkojums ir nepareizs? vai formatējums ir kaut kā bojāts?
 * laipni piedāvājiet ieteikumu par labāku tulkojumu vai kā pareizi formatēt tekstu
 * **Paldies!**

 ## Kāpēc Mobiletto?

 ### Ardievu pārdevēja bloķēšana!
 Dažādiem mākoņu krātuves nodrošinātājiem ir nesaderīgas API. Pat tie, kas cenšas panākt "S3 saderību"
 piemīt savdabīga uzvedība.

 Kad izvēlaties konkrētu krātuves pakalpojumu sniedzēju savai lietotnei, ja kodējat tieši uz viņa API, jūsu lietotni
 tagad ir atkarīgs no šī pakalpojuma. Laikam ejot un kodam uzkrājoties, pārdevēji mainās
 arvien neizturamāks. Laipni lūdzam pārdevēju bloķēšanas jautrajā pasaulē!

 Mobiletto tika izstrādāts, lai atrisinātu šo problēmu. Kodējot savu lietotni Mobiletto API, varat to viegli izdarīt
 mainiet krātuves nodrošinātājus un ziniet, ka jūsu lietotnes krātuves slānis darbosies identiski.

 ### Plaša pārbaude
 Visiem vadītājiem tiek pārbaudīta identiska uzvedība, katram vadītājam veicot 60+ testus.
 Mēs pārbaudām visus draiverus ar katru kombināciju:
 * Šifrēšana: gan iespējota, gan atspējota
 * Redis kešatmiņu: gan iespējots, gan atspējots

 Šī pieeja sniedz mums sirdsmieru, ka Mobiletto darbosies vienādi neatkarīgi no tā, kuru draiveri izmantojat,
 un neatkarīgi no tā, vai iespējojat kešatmiņu un/vai šifrēšanu.

 ### Vadītāja atbalsts
 Pašreizējie Mobiletto krātuves draiveri:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokālā failu sistēma

 *Ieguldījums vairāku mākoņkrātuvju nodrošinātāju atbalstam ir ļoti apsveicams!*

 ## mobiletto-cli
 Mobiletto ir paredzēts izmantot kā bibliotēku ar citu JavaScript kodu.

 Lai strādātu ar mobiletto komandrindā, izmantojiet [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Avots
 * [mobiletto vietnē GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Atbalsts un finansējums
 Es cenšos būt profesionāls atvērtā pirmkoda programmatūras izstrādātājs. Esmu strādājis
 programmatūras industrijā jau daudzus gadus esmu dibinājis veiksmīgus uzņēmumus un pārdevis tos valsts uzņēmumiem.
 Nesen es zaudēju darbu, un man īsti nav citu darbu

 Tāpēc es mēģināšu uzrakstīt noderīgu programmatūru un pārbaudīt, vai tā darbojas

 Ja jums patīk izmantot šo programmatūru, es būšu ļoti pateicīgs pat par
 mazākais [ikmēneša ieguldījums, izmantojot Patreon](https://www.patreon.com/cobbzilla)

 *Paldies!*

 ## Uzstādīšana
 Instalējiet, izmantojot `npm` vai `yarn` . Jūs droši vien vēlaties `lite` versiju, kas neietver visas
 tulkoti README faili:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ja patiešām vēlaties README failus visās valodās, instalējiet pilno versiju:

    npm install mobiletto
    yarn add mobiletto

 ## Ātrs sākums
 Īss piemērs, izmantojot mobiletto `s3` draiveri.

 Šis kods darbotos tāpat, ja draiveris būtu `b2` vai `local` .

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
 ## Pamata lietošana
 Daudz plašāks piemērs, kurā parādīta lielākā daļa piedāvāto funkciju:

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

 ## Metadati
 Komanda `metadata` atgriež metadatus par vienu failu sistēmas ierakstu.
 Tāpat atgriešanas vērtība no komandas `list` ir metadatu objektu masīvs.

 Metadatu objekts izskatās šādi:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Rekvizīts `type` type" var būt `file` " , `dir` " , `link` vai `special` .

 Atkarībā no draivera veida komanda `list` var neatgriezt visus laukus. `name` ” un “type `type` .
 vienmēr jābūt klāt. Nākamā `metadata` komanda atgriezīs visus pieejamos rekvizītus.

 ## Alternatīvs importēšanas stils
 Importējiet pilnībā aptverto moduli un izmantojiet `connect` funkciju:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Kešatmiņa
 Mobiletto vislabāk darbojas ar <a href="https://redis.io">redis</a> kešatmiņu.

 Mobiletto mēģinās izveidot savienojumu ar redis instanci vietnē 127.0.0.1:6379

 Varat ignorēt kādu no šiem:
 * Iestatiet `MOBILETTO_REDIS_HOST` env var, mobile lai izveidotu savienojumu šeit, nevis localhost
 * Iestatiet `MOBILETTO_REDIS_PORT` env var, šis ports tiks izmantots

 Mobiletto saglabās visas savas redis atslēgas ar prefiksu `_mobiletto__` . Jūs varat to mainīt
 iestatot `MOBILETTO_REDIS_PREFIX` env var.

 Varat arī iestatīt kešatmiņu katram savienojumam, izmantojot objektu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Vai nevēlaties atkārtotu kešatmiņu?
 Lai atspējotu: izveidojot savienojumu, objektā `opts.redisConfig` `enabled: false` false'.

 Kā minēts tālāk, kešatmiņas atspējošana negatīvi ietekmēs veiktspēju un radīs vairāk pieprasījumu
 uz krātuvi, kas jums patiešām ir nepieciešama.

 ### Kešatmiņas norādījumi
 **Šifrēta krātuve**: šifrētās atmiņas lasīšana/rakstīšana ir tikai nedaudz lēnāka nekā parasti,
 bet navigācija pa direktorijiem (ko dažas lietas dara) ir diezgan dārga. Redis kešatmiņas izmantošana
 sniegs jums ievērojamu veiktspējas pieaugumu.

 Noklusējuma kešatmiņa ir droša, taču tā nedarbojas labi, ja jums ir daudz rakstīšanas/noņemšanas darbību.
 Jebkura rakstīšanas vai noņemšanas darbība padara nederīgu visu kešatmiņu, nodrošinot, ka turpmākajos lasījumos tiks parādīta
 jaunākās izmaiņas.

 ### CLI rīki
 Ja izmantojat CLI rīku, piemēram, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 noteikti vēlēsities, lai `mo` kešatmiņa būtu iespējota, jo tā ilgst, kad tiek izsaukta komanda “mo”.

 ## Spoguļošana

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Komanda `mirror` veic visu failu vienreizēju kopiju no viena mobilā tālruņa uz citu.
 Tas neveic nekādus procesus, lai laika gaitā uzturētu spoguli. Vēlreiz palaidiet komandu `mirror` .
 lai sinhronizētu visus trūkstošos failus.

 Atgriešanas vērtība no `mirror` ir vienkāršs objekts ar skaitītājiem, kas norāda, cik daudz failu bija veiksmīgi
 atspoguļots un cik failos bija kļūdas:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 BRĪDINĀJUMS: lielu datu kopu spoguļošana var būt ļoti laikietilpīga un joslas platums.

 Izmantojot `mirror` izsaukuma semantiku, dažreiz var būt mulsinoši saprast, kas ir
 lasītājs un kas ir rakstnieks. Iedomājieties to kā uzdevuma paziņojumu: "kreisās puses mobilais telefons"
 ir lieta, kurai tiek piešķirta (rakstīti atspoguļotie dati), un "labās puses mobilais tālrunis" (
 arguments metodei `mirror` spogulis") ir piešķirtā vērtība (tiek nolasīti spoguļattēlu dati).

 ## Caurspīdīga šifrēšana
 Iespējot caurspīdīgu klienta puses šifrēšanu:

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

 Kas notiek? Atsevišķs "direktorija ieraksts" (tiešais) direktorijs (šifrēts) izseko tajā esošos failus
 direktorijs (aka dirent direktorijs).
 * Komanda `list` nolasa direktoriju ievades failus, atšifrē katru norādīto ceļu; pēc tam atgriež metadatus katram failam
 * `list` komandas ir neefektīvākas, īpaši direktorijiem ar lielu failu skaitu
 * Komanda `write` ieraksta dirent failus katra vecāka dirent direktorijā; pēc tam raksta failu
 * komandas `write` radīs O(N) ierakstus, kur N = dziļums direktoriju hierarhijā
 * Komanda `remove` noņem atbilstošo dirent failu un tā vecāku, ja tas ir tukšs; pēc tam noņem failu
 * `remove` komandas izraisīs O(N) nolasījumu un, iespējams, tikpat daudz dzēšanas, un N = dziļums direktoriju hierarhijā
 * Rekursīvas `remove` komandas lielās un dziļās failu sistēmās var būt dārgas

 Ņemiet vērā, ka pat tad, ja ir iespējota klienta puses šifrēšana, pretinieks ar pilnu redzamību jūsu šifrētajā servera pusē
 krātuve, pat bez atslēgas, joprojām var redzēt kopējo direktoriju skaitu un to, cik failu ir katrā, un ar
 dažas pūles, atklājiet daļu vai visu direktoriju hierarhijas vispārējo struktūru.
 *Piezīme. Labākai drošībai izmantojiet salīdzinoši plakanu struktūru.*
 Pretinieks nezinātu direktoriju/failu nosaukumus, ja vien viņi nezinātu arī jūsu šifrēšanu
 atslēgu vai citādi veiksmīgi uzlauzis šifrēšanu. Tad visas likmes ir izslēgtas!

 ### Veiktspēja un kešatmiņa
 Darbības ar šifrētu krātuvi var būt lēnas. Rekursīvi saraksti un noņemšana var būt ļoti lēna.
 Kešatmiņa, izmantojot redis, palīdz ārkārtīgi, taču ņemiet vērā, ka kešatmiņa tiek izskalota pēc rakstīšanas vai noņemšanas.

 ## Taustiņu pagriešana
 Izveidojiet mobilo tālruni ar savu jauno atslēgu un pēc tam atspoguļojiet tajā vecos datus:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Draivera interfeiss
 Draiveris ir jebkurš JS fails, kas eksportē funkciju "storageClient" ar šādu parakstu:

    function storageClient (key, secret, opts)

 * `key` : virkne, jūsu API atslēga ( `local` draiverim tas ir bāzes direktorijs)
 * `secret` : virkne, jūsu API noslēpums (var izlaist `local` draiverim)
 * `opts` : objekts, rekvizīti ir katram draiverim:
 * `local` rekvizītam `fileMode` un `dirMode` nosaka, kā tiek izveidoti jauni izveides faili un direktoriji.
 * `s3` `bucket` ir nepieciešams. Izvēles rekvizīti ir:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektam, ko atgriež funkcija storageClient, ir jādefinē šādas funkcijas:

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

 ## Mežizstrāde
 Mobiletto izmanto [winston](https://www.npmjs.com/package/winston) reģistrēšanas bibliotēku.

 Žurnāli **būs** saturēs failu ceļus un kļūdu ziņojumus, bet **nekad** nesaturēs atslēgas, noslēpumus,
 vai jebkura cita savienojuma konfigurācijas informācija.

 ### Žurnāla līmenis
 Izmantojiet vides mainīgo `MOBILETTO_LOG_LEVEL` , lai iestatītu žurnāla līmeni, izmantojot vienu
 no `npm` līmeņiem, kas definēti vietnē [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Noklusējuma līmenis ir `error` . Plašākais līmenis ir `silly` , lai gan pašlaik mobilais
 nereģistrējas zemākā līmenī par `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Žurnāla fails
 Pēc noklusējuma reģistrētājs raksta uz konsoli. Lai nosūtītu žurnālus uz failu, iestatiet `MOBILETTO_LOG_FILE`
 vides mainīgais. Piesakoties failā, žurnāli vairs netiks rakstīti konsolē.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Lai izslēgtu reģistrēšanu:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
