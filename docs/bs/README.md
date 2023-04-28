Mobiletto
 =========

 Mobiletto je sloj apstrakcije za JavaScript skladištenje, sa opcionim transparentnim šifrovanjem na strani klijenta.

 # Sadržaj
 * [Zašto Mobiletto?](#Zašto-Mobiletto?)
 * [Brzi početak](#Brzi početak)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Izvor](#Izvor)
 * [Instalacija](#Instalacija)
 * [Podrška i finansiranje](#Support-and-Funding)
 * [Osnovna upotreba](#Basic-usage)
 * [Metapodaci](#Metapodaci)
 * [Alternativni stil uvoza](#Alternate-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Transparentno šifriranje](#Transparent-encryption)
 * [Rotacija tipke](#Rotacija tipke)
 * [Driver interface](#Driver-interface)
 * [Logging](#Logging)

 # Pročitajte ovo na drugom jeziku
 Ovaj README.md dokument je preveden, putem [hokeylization](https://github.com/cobbzilla/hokeylization), na
 **[svaki jezik podržan od strane Google prevodioca](https://cloud.google.com/translate/docs/languages)!**

 Siguran sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španski](../es/README.md)
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

 ### Postoji li problem sa ovim prijevodom README-a?
 Ovaj konkretni prijevod originalnog [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 može biti manjkav -- *ispravke su dobrodošle!* Molimo pošaljite [zahtjev za povlačenje na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/mobiletto/issues)

 Kada kreirate novi GitHub problem o prijevodu, učinite:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake pretraživača)
 * uključite tačan tekst koji je pogrešan (kopirajte/zalijepite iz pretraživača)
 * opišite šta nije u redu -- da li je prevod netačan? da li je formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda, odnosno kako bi tekst trebao biti pravilno formatiran
 * **Hvala ti!**

 ## Zašto Mobiletto?

 ### Zbogom zaključavanje dobavljača!
 Različiti dobavljači pohrane u oblaku imaju nekompatibilne API-je. Čak i oni koji teže "S3 kompatibilnosti"
 imaju idiosinkratična ponašanja.

 Kada odaberete određenog dobavljača pohrane za svoju aplikaciju, ako kodirate direktno na njihov API, svoju aplikaciju
 sada zavisi od te usluge. Kako vrijeme prolazi i kod se akumulira, mijenjaju se dobavljači
 sve neodrživiji. Dobrodošli u zabavni svijet zaključavanja dobavljača!

 Mobiletto je dizajniran da riješi ovaj problem. Kodiranjem vaše aplikacije na mobiletto API, možete jednostavno
 promijenite dobavljače pohrane i znajte da će se sloj pohrane vaše aplikacije ponašati identično.

 ### Opsežno testiranje
 Svi vozači su testirani na identično ponašanje sa 60+ testova za svakog vozača.
 Testiramo sve vozače sa svakom kombinacijom:
 * Šifriranje: omogućeno i onemogućeno
 * Redis keš memorija: omogućeno i onemogućeno

 Ovaj pristup nam daje bezbrižnost da će se mobiletto ponašati isto bez obzira koji drajver koristite,
 i bez obzira da li ste omogućili keširanje i/ili enkripciju.

 ### Podrška za vozače
 Trenutni Mobiletto drajveri za pohranu:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalni sistem datoteka

 *Doprinosi za podršku većem broju provajdera za pohranu u oblaku su dobrodošli!*

 ## mobiletto-cli
 Mobiletto je namijenjen da se koristi kao biblioteka drugim JavaScript kodom.

 Za rad sa mobiletto na komandnoj liniji, koristite [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Izvor
 * [mobiletto na GitHubu](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Podrška i finansiranje
 Pokušavam biti profesionalni programer otvorenog koda. Ja sam radio u
 softverskoj industriji dugi niz godina, pokrenuo sam uspješne kompanije i prodao ih javnim preduzećima.
 Nedavno sam izgubio posao i nemam nikakav drugi posao u redu

 Zato ću pokušati da napišem koristan softver i da vidim da li radi

 Ako uživate u korištenju ovog softvera, bio bih vam vrlo zahvalan čak i za
 najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 *Hvala ti!*

 ## Instalacija
 Instalirajte koristeći `npm` ili `yarn` . Vjerovatno želite `lite` verziju koja ne uključuje sve
 prevedeni README fajlovi:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ako zaista želite README datoteke na svim jezicima, instalirajte punu verziju:

    npm install mobiletto
    yarn add mobiletto

 ## Brzi početak
 Kratak primjer korištenja drajvera mobiletto `s3` .

 Ovaj kod bi radio isto da je drajver `b2` ili `local` .

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
 ## Osnovna upotreba
 Mnogo opsežniji primjer, koji pokazuje većinu ponuđenih funkcija:

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
 Komanda `metadata` vraća metapodatke o jednom unosu sistema datoteka.
 Isto tako, povratna vrijednost iz naredbe `list` je niz metapodataka objekata.

 Objekt metapodataka izgleda ovako:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Svojstvo `type` može biti `file` , `dir` , `link` ili `special` .

 U zavisnosti od tipa drajvera, komanda `list` možda neće vratiti sva polja. `name` i `type`
 treba uvek biti prisutan. Naredna naredba `metadata` će vratiti sva dostupna svojstva.

 ## Alternativni stil uvoza
 Uvezite modul potpunog opsega i koristite funkciju `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Keširanje
 Mobiletto najbolje radi sa <a href="https://redis.io">redis</a> keš memorijom.

 Mobiletto će pokušati da se poveže na redis instancu na 127.0.0.1:6379

 Možete nadjačati bilo koje od ovih:
 * Postavite `MOBILETTO_REDIS_HOST` env var, mobiletto da se povežete ovdje umjesto lokalnog hosta
 * Postavite env var `MOBILETTO_REDIS_PORT` , ovaj port će se koristiti

 Mobiletto će pohraniti sve svoje redis ključeve s prefiksom `_mobiletto__` . Možete promijeniti ovo
 postavljanjem `MOBILETTO_REDIS_PREFIX` env var.

 Također možete postaviti keširanje po konekciji s objektom `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ne želite redis keširanje?
 Da biste onemogućili: proslijedite `enabled: false` u svoj objekt `opts.redisConfig` kada uspostavite svoju vezu.

 Kao što je objašnjeno u nastavku, onemogućavanje keširanja će imati negativan učinak na performanse i izazvati više zahtjeva
 do skladišta koje vam je zaista potrebno.

 ### Smjernice za keširanje
 **Šifrovana pohrana**: čitanje/pisanje šifrovane memorije je samo malo sporije od uobičajenog,
 ali navigacija po direktorijima (što neke stvari rade) je prilično skupa. Korištenje redis keša
 će vam dati značajno povećanje performansi.

 Zadana keš memorija je sigurna, ali ne radi dobro ako imate puno operacija pisanja/uklanjanja.
 Svaka operacija pisanja ili uklanjanja poništava čitavu keš memoriju, osiguravajući da će naredna čitanja vidjeti
 najnovije promjene.

 ### CLI alati
 Ako koristite CLI alat kao što je [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 definitivno ćete htjeti da se redis keš memorija omogući, jer ona traje tijekom pozivanja naredbe `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Komanda `mirror` izvodi jednokratnu kopiju svih datoteka s jednog mobitela na drugi.
 Ne pokreće nikakav proces za održavanje ogledala tokom vremena. Ponovo pokrenite naredbu `mirror`
 da sinhronizujete sve datoteke koje nedostaju.

 Povratna vrijednost iz `mirror` je jednostavan objekt sa brojačima koliko je datoteka uspješno
 preslikano i koliko fajlova ima grešaka:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 UPOZORENJE: Zrcaljenje velikih skupova podataka može oduzeti mnogo vremena i propusnog opsega

 Sa semantikom poziva `mirror` ponekad može biti zbunjujuće shvatiti ko je
 čitalac i ko je pisac. Zamislite to kao izjavu o zadatku: "lijevi mobilni telefon"
 je stvar kojoj se dodjeljuje (preslikani podaci upisani) i "desni mobilni telefon" (
 argument metodi `mirror` ) je vrijednost koja se dodjeljuje (preslikani podaci se čitaju).

 ## Transparentna enkripcija
 Omogućite transparentno šifriranje na strani klijenta:

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

 Šta se dešava? Odvojeni direktorij (dirent) (šifrirani) prati koje se datoteke nalaze u njemu
 direktorij (aka dirent direktorij).
 * Komanda `list` čita datoteke unosa direktorija, dešifruje svaku navedenu putanju; zatim vraća metapodatke za svaki fajl
 * Naredbe `list` su neefikasnije, posebno za direktorije s velikim brojem datoteka
 * Komanda `write` upisuje dirent datoteke u dirent direktorij svakog roditelja; zatim upisuje datoteku
 * Naredbe `write` će uzrokovati O(N) upisivanja, s N = dubinom u hijerarhiji direktorija
 * Komanda `remove` uklanja odgovarajući dirent fajl i njegov roditelj ako je prazan; zatim uklanja fajl
 * Nerekurzivne naredbe `remove` će izazvati O(N) čitanja i potencijalno isto toliko brisanja, sa N = dubinom u hijerarhiji direktorija
 * Rekurzivne naredbe `remove` na velikim i dubokim sistemima datoteka mogu biti skupe

 Imajte na umu da čak i sa omogućenom enkripcijom na strani klijenta, protivnik sa potpunom vidljivošću na vašoj šifriranoj strani servera
 skladište, čak i bez ključa, i dalje može vidjeti ukupan broj direktorija i koliko datoteka se nalazi u svakom i sa
 malo truda, otkrijte dio ili cijelu cjelokupnu strukturu hijerarhije direktorija.
 *Napomena: Koristite relativno ravnu strukturu za bolju sigurnost.*
 Protivnik ne bi znao imena direktorija/fajlova osim ako ne zna i vašu enkripciju
 ključ ili na neki drugi način uspješno provalio enkripciju. Tada su sve opklade isključene!

 ### Performanse i keširanje
 Operacije na šifriranoj memoriji mogu biti spore. Rekurzivni popisi i uklanjanja mogu biti vrlo spori.
 Keširanje putem redis-a izuzetno pomaže, ali imajte na umu da se predmemorija ispire nakon svakog upisivanja ili uklanjanja.

 ## Rotacija tastera
 Kreirajte mobiletto sa svojim novim ključem, a zatim preslikajte stare podatke u njega:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfejs drajvera
 Drajver je bilo koja JS datoteka koja izvozi funkciju 'storageClient' sa ovim potpisom:

    function storageClient (key, secret, opts)

 * `key` : string, vaš API ključ (za `local` drajver ovo je osnovni direktorij)
 * `secret` : string, vaša tajna API-ja (može se izostaviti za `local` drajver)
 * `opts` : objekt, svojstva su po vozaču:
 * Za `local` , svojstva `fileMode` i `dirMode` određuju kako se kreiraju novi kreirani fajlovi i direktoriji
 * Za `s3` , svojstvo `bucket` je potrebno. Opciona svojstva su:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt koji funkcija storageClient vraća mora definirati ove funkcije:

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
 Mobiletto koristi biblioteku za evidentiranje [winston](https://www.npmjs.com/package/winston).

 Dnevnici **će** sadržavati putanje datoteka i poruke o greškama, ali **nikada** neće sadržavati ključeve, tajne,
 ili bilo koje druge informacije o konfiguraciji veze.

 ### Nivo dnevnika
 Koristite varijablu okruženja `MOBILETTO_LOG_LEVEL` da postavite nivo dnevnika, koristeći jedan
 nivoa `npm` definiranih u [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Podrazumevani nivo je `error` . Najopširniji nivo je `silly` , iako trenutno mobiletto
 ne logova na nivoima ispod `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Dnevnik
 Podrazumevano, loger piše u konzolu. Za slanje dnevnika u datoteku, postavite `MOBILETTO_LOG_FILE`
 varijabla okruženja. Kada se evidentirate u datoteku, dnevnici više neće biti upisani u konzolu.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Da isključite bilježenje:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
