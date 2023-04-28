Mobiletto
 =========

 Mobiletto este un strat de abstractizare a stocării JavaScript, cu criptare opțională transparentă pe partea clientului.

 # Cuprins
 * [De ce Mobiletto?](#De ce-Mobiletto?)
 * [Pornire rapidă](#Pornire rapidă)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Sursa](#Sursa)
 * [Instalare](#Instalare)
 * [Suport și finanțare](#Support-and-Funding)
 * [Utilizare de bază](#Utilizare de bază)
 * [Metadate](#Metadate)
 * [Stil de import alternativ](#Stil de import alternativ)
 * [Memorizare în cache](#Memorizare în cache)
 * [Oglindire](#Oglindire)
 * [Criptare transparentă](#Transparent-encryption)
 * [Rotire taste](#Rotire taste)
 * [Interfață driver](#Driver-interfață)
 * [Înregistrare](#Înregistrare)

 # Citiți asta într-o altă limbă
 Acest document README.md a fost tradus, prin [hokeylization](https://github.com/cobbzilla/hokeylization), în
 **[fiecare limbă acceptată de Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sunt sigur că nu este perfect, dar sper că este mai bine decât nimic!

 [🇸🇦 Arabă](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Germană](../de/README.md)
 [🇺🇸 engleză](../en/README.md)
 [🇪🇸 Spaniolă](../es/README.md)
 [🇫🇷 Franceză](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indoneziană](../id/README.md)
 [🇮🇹 italiană](../it/README.md)
 [🇯🇵 japoneză](../ja/README.md)
 [🇰🇷 coreeană](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poloneză](../pl/README.md)
 [🇧🇷 portugheză](../pt/README.md)
 [🇷🇺 rusă](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcă](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnameză](../vi/README.md)
 [🇨🇳 Chineză](../zh/README.md)


 **[📚 ... Toate limbile ...](../README.md)**
 ----

 ### Există o problemă cu această traducere a fișierului README?
 Această traducere specială a originalului [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 poate fi defecte -- *corecțiile sunt foarte binevenite!* Vă rugăm să trimiteți o [pull request pe GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 sau dacă nu ești confortabil să faci asta, [deschide o problemă](https://github.com/cobbzilla/mobiletto/issues)

 Când creați o nouă problemă GitHub despre o traducere, faceți:
 * includeți adresa URL a paginii (copiați/lipiți din bara de adrese a browserului)
 * includeți textul exact care este greșit (copiați/lipiți din browser)
 * vă rugăm să descrieți ce este greșit -- traducerea este incorectă? formatarea este stricata cumva?
 * Vă rugăm să oferiți o sugestie pentru o traducere mai bună sau cum ar trebui să fie formatat corect textul
 * **Mulțumesc!**

 ## De ce Mobiletto?

 ### Adio blocare a furnizorului!
 Diferiții furnizori de stocare în cloud au API-uri incompatibile. Chiar și cei care se străduiesc pentru „compatibilitatea S3”
 au comportamente idiosincratice.

 Când alegeți un anumit furnizor de stocare pentru aplicația dvs., dacă codificați direct în API-ul acestuia, aplicația dvs
 depinde acum de acel serviciu. Pe măsură ce timpul trece și codul se acumulează, se schimbă furnizorii
 din ce în ce mai insuportabil. Bine ați venit în lumea distractivă a blocării vânzătorilor!

 Mobiletto a fost conceput pentru a rezolva această problemă. Codând aplicația dvs. în API-ul mobiletto, puteți cu ușurință
 schimbați furnizorii de stocare și știți că stratul de stocare al aplicației dvs. se va comporta identic.

 ### Testări ample
 Toți șoferii sunt testați pentru un comportament identic, cu peste 60 de teste pentru fiecare șofer.
 Testăm toți șoferii cu fiecare combinație de:
 * Criptare: atât activată, cât și dezactivată
 * Cache Redis: atât activat, cât și dezactivat

 Această abordare ne oferă liniște că mobiletto se va comporta la fel, indiferent de driverul pe care îl utilizați,
 și indiferent dacă activați memorarea în cache și/sau criptarea.

 ### Suport pentru șoferi
 Drivere actuale de stocare Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistem de fișiere local

 *Contribuțiile pentru a sprijini mai mulți furnizori de stocare în cloud sunt foarte binevenite!*

 ## mobiletto-cli
 Mobiletto este destinat să fie utilizat ca bibliotecă de către alt cod JavaScript.

 Pentru a lucra cu mobiletto la linia de comandă, utilizați [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Sursă
 * [mobiletto pe GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto pe npm](https://www.npmjs.com/package/mobiletto)

 ## Sprijin și finanțare
 Încerc să fiu un dezvoltator profesionist de software open source. Am lucrat în
 industria software de mulți ani, am început companii de succes și le-am vândut companiilor publice.
 Recent mi-am pierdut locul de muncă și nu prea am nicio altă lucrare la rând

 Așa că voi încerca să scriu un software util și să văd dacă funcționează

 Dacă vă place să utilizați acest software, v-aș fi foarte recunoscător chiar și pentru
 cea mai mică [contribuție lunară prin Patreon](https://www.patreon.com/cobbzilla)

 *Mulțumesc!*

 ## Instalare
 Instalați folosind `npm` sau `yarn` . Probabil că doriți versiunea `lite` care nu include toate
 fișiere README traduse:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Dacă doriți cu adevărat fișierele README în fiecare limbă, instalați versiunea completă:

    npm install mobiletto
    yarn add mobiletto

 ## Pornire rapidă
 Un scurt exemplu folosind driverul mobiletto `s3` .

 Acest cod ar rula la fel dacă driverul ar fi `b2` sau `local` .

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
 ## Utilizare de bază
 Un exemplu mult mai amplu, care arată majoritatea caracteristicilor oferite:

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

 ## Metadate
 Comanda `metadata` returnează metadate despre o singură intrare în sistemul de fișiere.
 De asemenea, valoarea returnată de la comanda `list` este o matrice de obiecte de metadate.

 Un obiect de metadate arată astfel:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Proprietatea `type` poate fi `file` `dir` , `link` sau `special` .

 În funcție de tipul de driver, o comandă `list` poate să nu returneze toate câmpurile. Proprietățile `name` și `type` .
 ar trebui să fie mereu prezent. O comandă `metadata` ulterioară va returna toate proprietățile disponibile.

 ## Stil de import alternativ
 Importați modulul complet și utilizați funcția `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Memorarea în cache
 Mobiletto funcționează cel mai bine cu un cache <a href="https://redis.io">redis</a> .

 Mobiletto va încerca să se conecteze la o instanță redis pe 127.0.0.1:6379

 Puteți trece peste oricare dintre acestea:
 * Setați `MOBILETTO_REDIS_HOST` env var, mobile pentru a vă conecta aici în loc de localhost
 * Setați înv. var `MOBILETTO_REDIS_PORT` , acest port va fi folosit

 Mobiletto va stoca toate cheile redis cu prefixul `_mobiletto__` . Puteți schimba acest lucru
 prin setarea `MOBILETTO_REDIS_PREFIX` env var.

 De asemenea, puteți seta memorarea în cache pe conexiune cu obiectul `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nu vrei redis cache?
 Pentru a dezactiva: trece `enabled: false` în obiectul tău `opts.redisConfig` când stabilești conexiunea.

 După cum se discută mai jos, dezactivarea memoriei cache va avea un efect negativ asupra performanței și va genera mai multe solicitări
 la stocarea de care aveți cu adevărat nevoie.

 ### Ghid pentru memorarea în cache
 **Stocare criptată**: citirea/scrierea stocării criptate este doar puțin mai lentă decât în mod normal,
 dar navigarea prin directoare (ceea ce fac unele lucruri) este destul de costisitoare. Folosind un cache redis
 vă va oferi un spor semnificativ de performanță.

 Cache-ul implicit este sigur, dar nu funcționează bine dacă aveți multe operațiuni de scriere/eliminare.
 Orice operație de scriere sau eliminare invalidează întregul cache, asigurându-se că citirile ulterioare vor vedea
 ultimele modificari.

 ### Instrumente CLI
 Dacă utilizați un instrument CLI precum [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 cu siguranță veți dori cache-ul redis activat, deoarece durează peste invocările comenzii `mo` .

 ## Oglindire

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Comanda `mirror` efectuează o copie unică a tuturor fișierelor de la un mobil la altul.
 Nu rulează niciun proces pentru a menține oglinda în timp. Rulați din nou comanda `mirror`
 pentru a sincroniza orice fișiere lipsă.

 Valoarea returnată de la `mirror` este un obiect simplu cu contoare pentru câte fișiere au fost cu succes
 oglindit și câte fișiere au avut erori:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVERTISMENT: Oglindirea seturilor mari de date poate consuma foarte mult timp și poate consuma o lățime de bandă

 Cu semantica apelului `mirror` , uneori poate fi confuz să înțelegeți cine este
 cititor și cine este scriitorul. Imaginați-vă ca pe o declarație de atribuire: „mobiletto de la mâna stângă”
 este lucrul căruia i se atribuie (date în oglindă scrise) și „mobiletto-ul din dreapta” (the
 argument pentru metoda `mirror` ) este valoarea atribuită (datele în oglindă sunt citite).

 ## Criptare transparentă
 Activați criptarea transparentă pe partea clientului:

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

 Ce se întâmplă? Un director separat de „intrare în director” (direct) (criptat) urmărește ce fișiere se află în acesta
 directorul (aka directorul dirent).
 * Comanda `list` citește fișierele de intrare în director, decriptează fiecare cale listată; apoi returnează metadate pentru fiecare fișier
 * Comenzile `list` sunt mai ineficiente, mai ales pentru directoarele cu un număr mare de fișiere
 * Comanda `write` scrie fișierele dirent în directorul dirent al fiecărui părinte, recursiv; apoi scrie fisierul
 * Comenzile `write` vor genera O(N) scrieri, cu N = adâncimea în ierarhia directoarelor
 * Comanda `remove` elimină fișierul dirent corespunzător, iar părintele său dacă este gol, recursiv; apoi elimină fișierul
 * Comenzile nerecursive `remove` vor genera citiri O(N) și, potențial, tot atâtea ștergeri, cu N = adâncimea în ierarhia directoarelor
 * Comenzile recursive `remove` pe sistemele de fișiere mari și adânci pot fi costisitoare

 Rețineți că, chiar și cu criptarea la nivelul clientului activată, un adversar cu vizibilitate deplină asupra serverului dvs. criptat
 stocarea, chiar și fără cheie, poate vedea în continuare numărul total de directoare și câte fișiere sunt în fiecare, și cu
 oarecare efort, descoperiți o parte sau toată structura generală a ierarhiei directoarelor.
 *Notă: utilizați o structură relativ plată pentru o mai bună securitate.*
 Adversarul nu ar ști numele directoarelor/fișierelor decât dacă ar cunoaște și criptarea ta
 cheie sau a spart altfel criptarea cu succes. Toate pariurile sunt oprite atunci!

 ### Performanță și stocare în cache
 Operațiunile de stocare criptată pot fi lente. Listările recursive și eliminările pot fi foarte lente.
 Memorarea în cache prin redis ajută enorm, dar rețineți că memoria cache este golită la orice scriere sau ștergere.

 ## Rotirea tastelor
 Creați un mobiletto cu noua cheie, apoi oglindiți datele vechi în el:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfață pentru driver
 Un driver este orice fișier JS care exportă o funcție „storageClient” cu această semnătură:

    function storageClient (key, secret, opts)

 * `key` : un șir, cheia dvs. API (pentru driverul `local` acesta este directorul de bază)
 * `secret` : un șir, secretul dvs. API (poate fi omis pentru driverul `local` )
 * `opts` : un obiect, proprietățile sunt per-driver:
 * Pentru `local` , proprietățile `fileMode` și `dirMode` determină modul în care sunt create fișiere și directoare noi de creare
 * Pentru `s3` , este necesară proprietatea `bucket` . Proprietățile opționale sunt:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Obiectul pe care îl returnează funcția storageClient trebuie să definească aceste funcții:

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

 ## Logare
 Mobiletto utilizează biblioteca de înregistrare [winston](https://www.npmjs.com/package/winston).

 Jurnalele **vor** conține căi de fișiere și mesaje de eroare, dar **nu** vor conține niciodată chei, secrete,
 sau orice alte informații de configurare a conexiunii.

 ### Nivel de jurnal
 Utilizați variabila de mediu `MOBILETTO_LOG_LEVEL` pentru a seta nivelul de jurnal, folosind unul
 dintre nivelurile `npm` definite în [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Nivelul implicit este `error` . Nivelul cel mai pronunțat este `silly` , deși în prezent mobiletto
 nu se înregistrează la niveluri sub `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Fișier jurnal
 În mod implicit, loggerul scrie pe consolă. Pentru a trimite jurnalele la un fișier, setați `MOBILETTO_LOG_FILE`
 variabilă de mediu. Când vă conectați la un fișier, jurnalele nu vor mai fi scrise pe consolă.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Pentru a dezactiva înregistrarea:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
