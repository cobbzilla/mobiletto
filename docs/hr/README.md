Mobiletto
 =========

 Mobiletto je sloj apstrakcije za pohranu JavaScripta, s izbornom transparentnom enkripcijom na strani klijenta.

 # Sadržaj
 * [Zašto Mobiletto?](#Zašto-Mobiletto?)
 * [Brzi početak](#Brzi početak)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Izvor](#Izvor)
 * [Instalacija](#Instalacija)
 * [Podrška i financiranje](#Support-and-Funding)
 * [Osnovna upotreba](#Basic-usage)
 * [Metapodaci](#Metapodaci)
 * [Alternativni stil uvoza](#Alternate-import-style)
 * [Caching](#Caching)
 * [Zrcaljenje](#Zrcaljenje)
 * [Transparentna enkripcija](#Transparent-encryption)
 * [Key-rotation](#Key-rotation)
 * [Sučelje upravljačkog programa](#Sučelje upravljačkog programa)
 * [Zapisivanje](#Zapisivanje)

 # Pročitajte ovo na drugom jeziku
 Ovaj dokument README.md preveden je putem [hokeylization](https://github.com/cobbzilla/hokeylization) na
 **[svi jezici koje podržava Google prevoditelj](https://cloud.google.com/translate/docs/languages)!**

 Sigurna sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španjolski](../es/README.md)
 [🇫🇷 francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonezijski](../id/README.md)
 [🇮🇹 talijanski](../it/README.md)
 [🇯🇵 japanski](../ja/README.md)
 [🇰🇷 korejski](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poljski](../pl/README.md)
 [🇧🇷 portugalski](../pt/README.md)
 [🇷🇺 ruski](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turski](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vijetnamski](../vi/README.md)
 [🇨🇳 kineski](../zh/README.md)


 **[📚 ... Svi jezici ...](../README.md)**
 ----

 ### Postoji li problem s ovim prijevodom README?
 Ovaj konkretan prijevod izvornika [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 može imati manjkavosti -- *ispravci su dobrodošli!* Pošaljite [zahtjev za povlačenjem na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/mobiletto/issues)

 Kada stvorite novi GitHub problem o prijevodu, učinite sljedeće:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake preglednika)
 * uključite točan tekst koji je pogrešan (kopirajte/zalijepite iz preglednika)
 * molimo opišite što nije u redu -- je li prijevod netočan? je li formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda ili kako bi tekst trebao biti pravilno oblikovan
 * **Hvala vam!**

 ## Zašto Mobiletto?

 ### Zbogom zaključavanje dobavljača!
 Razni pružatelji usluga pohrane u oblaku imaju nekompatibilne API-je. Čak i oni koji teže "S3 kompatibilnosti"
 imaju idiosinkratična ponašanja.

 Kada odaberete određenog dobavljača pohrane za svoju aplikaciju, ako kodirate izravno na njihov API, vaša aplikacija
 sada ovisi o toj usluzi. Kako vrijeme prolazi i kod se nakuplja, mijenjaju se dobavljači
 sve neodrživiji. Dobrodošli u zabavni svijet zaključavanja dobavljača!

 Mobiletto je dizajniran da riješi ovaj problem. Kodiranjem svoje aplikacije u mobiletto API, lako možete
 promijenite pružatelje pohrane i znajte da će se sloj pohrane vaše aplikacije ponašati identično.

 ### Opsežno testiranje
 Svi se vozači testiraju na identično ponašanje s više od 60 testova za svakog vozača.
 Testiramo sve pokretače sa svakom kombinacijom:
 * Enkripcija: omogućena i onemogućena
 * Redis predmemorija: i omogućeno i onemogućeno

 Ovaj pristup daje nam sigurnost da će se mobiletto ponašati jednako bez obzira koji upravljački program koristite,
 i neovisno o tome jeste li omogućili predmemoriju i/ili enkripciju.

 ### Podrška za vozače
 Trenutačni upravljački programi za pohranu Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalni datotečni sustav

 *Doprinosi za podršku više pružatelja usluga pohrane u oblaku su vrlo dobrodošli!*

 ## mobiletto-cli
 Mobiletto je namijenjen da ga drugi JavaScript kod koristi kao knjižnicu.

 Za rad s mobiletto u naredbenom retku koristite [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Izvor
 * [mobiletto na GitHubu](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm-u](https://www.npmjs.com/package/mobiletto)

 ## Podrška i financiranje
 Pokušavam biti profesionalni programer softvera otvorenog koda. radio sam u
 U softverskoj industriji dugi niz godina, pokrenuo sam uspješne tvrtke i prodao ih javnim tvrtkama.
 Nedavno sam ostao bez posla i zapravo nemam drugog posla u planu

 Stoga ću pokušati napisati koristan softver i vidjeti hoće li to uspjeti

 Ako volite koristiti ovaj softver, bio bih vam vrlo zahvalan čak i za
 najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 *Hvala vam!*

 ## Instalacija
 Instalirajte pomoću `npm` ili `yarn` . Vjerojatno želite `lite` verziju koja ne uključuje sve
 prevedene datoteke README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ako stvarno želite README datoteke na svim jezicima, instalirajte punu verziju:

    npm install mobiletto
    yarn add mobiletto

 ## Brzi početak
 Kratki primjer korištenja pokretačkog programa mobiletto `s3` .

 Ovaj kod bi se isto izvodio da je upravljački program `b2` ili `local` .

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
 ## Osnovna uporaba
 Mnogo opsežniji primjer, koji prikazuje većinu ponuđenih značajki:

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

 ## Metapodaci
 Naredba `metadata` vraća metapodatke o jednom unosu datotečnog sustava.
 Isto tako, povratna vrijednost iz naredbe `list` je niz objekata metapodataka.

 Objekt metapodataka izgleda ovako:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Svojstvo `type` type` može biti `file` , `dir` , `link` ili `special` .

 Ovisno o vrsti upravljačkog programa, naredba `list` možda neće vratiti sva polja. `name` i `type` type`
 treba uvijek biti prisutan. Sljedeća naredba `metadata` vratit će sva dostupna svojstva.

 ## Alternativni stil uvoza
 Uvezite modul s punim opsegom i upotrijebite funkciju `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Predmemoriranje
 Mobiletto najbolje radi s <a href="https://redis.io">redis</a> cacheom.

 Mobiletto će se pokušati povezati s redis instancom na 127.0.0.1:6379

 Možete nadjačati bilo što od ovoga:
 * Postavite `MOBILETTO_REDIS_HOST` env var, mobile da se poveže ovdje umjesto lokalnog hosta
 * Postavite `MOBILETTO_REDIS_PORT` env var, ovaj port će se koristiti

 Mobiletto će pohraniti sve svoje redis ključeve s prefiksom `_mobiletto__` . Možete promijeniti ovo
 postavljanjem `MOBILETTO_REDIS_PREFIX` env var.

 Također možete postaviti predmemoriju po vezi s `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ne želite redis predmemoriranje?
 Za onemogućavanje: proslijedite `enabled: false` u svoj objekt `opts.redisConfig` kada uspostavite vezu.

 Kao što je objašnjeno u nastavku, onemogućavanje predmemoriranja imat će negativan učinak na performanse i izazvati više zahtjeva
 za pohranu koja vam je stvarno potrebna.

 ### Smjernice za predmemoriju
 **Šifrirana pohrana**: čitanje/pisanje kriptirane pohrane samo je malo sporije od uobičajenog,
 ali navigacija po imenicima (što neke stvari rade) prilično je skupa. Korištenje redis predmemorije
 dat će vam značajno poboljšanje performansi.

 Zadana predmemorija je sigurna, ali ne radi dobro ako imate puno operacija pisanja/uklanjanja.
 Bilo koja operacija pisanja ili uklanjanja poništava cijelu predmemoriju, osiguravajući da će naknadna čitanja vidjeti
 najnovije promjene.

 ### CLI alati
 Ako koristite CLI alat kao što je [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 svakako ćete htjeti da redis predmemorija bude omogućena, jer traje kroz pozivanje naredbe `mo` .

 ## Zrcaljenje

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Naredba `mirror` izvodi jednokratnu kopiju svih datoteka s jednog mobitela na drugi.
 Ne pokreće nikakav proces za održavanje ogledala tijekom vremena. Ponovno pokrenite naredbu `mirror`
 za sinkronizaciju datoteka koje nedostaju.

 Povratna vrijednost od `mirror` je jednostavan objekt s brojačima za koliko je datoteka uspješno
 zrcaljeno i koliko je datoteka imalo pogreške:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 UPOZORENJE: Zrcaljenje velikih skupova podataka može biti dugotrajno i zahtjevno za propusnost

 Sa semantikom poziva `mirror` ponekad može biti zbunjujuće razumjeti tko je
 čitatelj i tko je pisac. Zamislite to kao izjavu o dodjeli: "lijevi mobiletto"
 je stvar kojoj se dodjeljuje (upisani zrcalni podaci) i "desni mobiletto" (
 argument metode `mirror` ) je vrijednost koja se dodjeljuje (čitaju se zrcaljeni podaci).

 ## Transparentna enkripcija
 Omogući transparentnu enkripciju na strani klijenta:

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

 Što se događa? Odvojeni "unos direktorija" (dirent) direktorij (kriptiran) prati koje su datoteke u njemu
 imenik (poznat i kao dirent direktorij).
 * Naredba `list` čita datoteke unosa direktorija, dekriptira svaku navedenu stazu; zatim vraća metapodatke za svaku datoteku
 * `list` naredbe su neučinkovitije, posebno za direktorije s velikim brojem datoteka
 * Naredba `write` piše dirent datoteke u dirent direktorij svakog roditelja, rekurzivno; zatim zapisuje datoteku
 * Naredbe `write` će O(N) pisanja, s N = dubina u hijerarhiji direktorija
 * Naredba `remove` uklanja odgovarajuću dirent datoteku i njen roditelj ako je prazan; zatim uklanja datoteku
 * Nerekurzivne naredbe `remove` će O(N) čitanja i potencijalno isto toliko brisanja, s N = dubinom u hijerarhiji direktorija
 * Rekurzivne naredbe `remove` na velikim i dubokim datotečnim sustavima mogu biti skupe

 Imajte na umu da čak i uz omogućenu enkripciju na strani klijenta, protivnik s potpunom vidljivošću vaše šifrirane strane poslužitelja
 pohrana, čak i bez ključa, i dalje može vidjeti ukupan broj direktorija i koliko se datoteka nalazi u svakom, i sa
 malo truda, otkrijte dio ili cijelu ukupnu strukturu hijerarhije imenika.
 *Napomena: Koristite relativno ravnu strukturu za bolju sigurnost.*
 Protivnik ne bi znao nazive direktorija/datoteka osim ako ne bi znao i vašu enkripciju
 ključ ili je na drugi način uspješno probio enkripciju. Onda su sve oklade isključene!

 ### Izvedba i predmemoriranje
 Operacije na šifriranoj pohrani mogu biti spore. Rekurzivni popisi i uklanjanja mogu biti vrlo spori.
 Spremanje u predmemoriju putem redisa uvelike pomaže, ali imajte na umu da se predmemorija ispire nakon svakog pisanja ili uklanjanja.

 ## Rotacija ključa
 Stvorite mobiletto sa svojim novim ključem, a zatim preslikajte stare podatke u njega:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Sučelje upravljačkog programa
 Upravljački program je bilo koja JS datoteka koja izvozi funkciju 'storageClient' s ovim potpisom:

    function storageClient (key, secret, opts)

 * `key` : niz, vaš API ključ (za `local` upravljački program ovo je osnovni direktorij)
 * `secret` : niz, vaša API tajna (može se izostaviti za `local` upravljački program)
 * `opts` : objekt, svojstva su za svaki upravljački program:
 * Za `local` , svojstva `fileMode` i `dirMode` određuju kako se stvaraju nove datoteke i direktoriji
 * Za `s3` potrebno je svojstvo `bucket` . Izborna svojstva su:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt koji vraća funkcija storageClient mora definirati ove funkcije:

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

 ## Bilježenje
 Mobiletto koristi biblioteku za bilježenje [winston](https://www.npmjs.com/package/winston).

 Dnevnici **će** sadržavati putanje datoteka i poruke o pogrešci, ali **nikada** neće sadržavati ključeve, tajne,
 ili bilo koje druge informacije o konfiguraciji veze.

 ### Razina zapisnika
 Upotrijebite varijablu okruženja `MOBILETTO_LOG_LEVEL` za postavljanje razine zapisnika, koristeći jedan
 razina `npm` definiranih u [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Zadana razina je `error` . Najopširnija razina je `silly` , iako trenutno mobiletto
 ne zapisuje na razinama ispod `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Log datoteka
 Prema zadanim postavkama, zapisivač piše u konzolu. Za slanje zapisa u datoteku, postavite `MOBILETTO_LOG_FILE`
 varijabla okoline. Prilikom prijavljivanja u datoteku, zapisnici se više neće pisati na konzolu.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Za isključivanje zapisivanja:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
