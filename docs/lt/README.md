Mobiletto
 =========

 Mobiletto yra „JavaScript“ saugyklos abstrakcijos sluoksnis su pasirenkamu skaidriu kliento šifravimu.

 # Turinys
 * [Kodėl Mobiletto?](#Why-Mobiletto?)
 * [Greita pradžia](#Greita pradžia)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Šaltinis](#Šaltinis)
 * [Įdiegimas](#Įdiegimas)
 * [Parama ir finansavimas](#Support-and-Funding)
 * [Pagrindinis naudojimas](#Basic-usage)
 * [Metaduomenys](#Metadata)
 * [Alternatyvus importavimo stilius](#Alternate-import-style)
 * [Caching](#Caching)
 * [Dubliavimas](# Veidrodis)
 * [Skaidrus šifravimas](#Transparent-encryption)
 * [Key rotation](#Key-rotation)
 * [Vairuotojo sąsaja](#Driver-interface)
 * [Logging](#Logging)

 # Skaitykite tai kita kalba
 Šis README.md dokumentas per [hokeylization](https://github.com/cobbzilla/hokeylization) buvo išverstas į
 **[Visos kalbos palaikomos „Google“ vertėjo](https://cloud.google.com/translate/docs/languages)!**

 Esu tikras, kad tai nėra tobula, bet tikiuosi, kad tai geriau nei nieko!

 [🇸🇦 arabų kalba](../ar/README.md)
 [🇧🇩 Bengalų kalba](../bn/README.md)
 [🇩🇪 Vokiečių kalba](../de/README.md)
 [🇺🇸 Anglų kalba](../en/README.md)
 [🇪🇸 ispanų kalba](../es/README.md)
 [🇫🇷 prancūzų kalba](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziečių](../id/README.md)
 [🇮🇹 italų kalba](../it/README.md)
 [🇯🇵 japonų kalba](../ja/README.md)
 [🇰🇷 korėjiečių](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 lenkų kalba](../pl/README.md)
 [🇧🇷 portugalų](../pt/README.md)
 [🇷🇺 rusų kalba](../ru/README.md)
 [🇰🇪 Svahilių kalba](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkų](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnamiečių](../vi/README.md)
 [🇨🇳 kinų](../zh/README.md)


 **[📚 ... Visos kalbos ...](../README.md)**
 ----

 ### Ar yra problemų dėl šio README vertimo?
 Šis konkretus originalo [README] vertimas (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 gali būti su trūkumais – *labai laukiami pataisymai!* Nusiųskite [ištraukimo užklausą „GitHub“](https://github.com/cobbzilla/mobiletto/pulls),
 arba jei nenorite to daryti, [atidarykite problemą](https://github.com/cobbzilla/mobiletto/issues)

 Kai kuriate naują „GitHub“ problemą apie vertimą, atlikite toliau nurodytus veiksmus.
 * įtraukite puslapio URL (nukopijuokite / įklijuokite iš naršyklės adreso juostos)
 * įtraukite tikslų tekstą, kuris neteisingas (nukopijuokite / įklijuokite iš naršyklės)
 * aprašykite, kas negerai – ar vertimas neteisingas? ar formatavimas kažkaip sugedęs?
 * maloniai pasiūlykite geresnio vertimo pasiūlymą arba kaip tinkamai suformatuoti tekstą
 * **Ačiū!**

 ## Kodėl Mobiletto?

 ### Atsisveikink su pardavėju!
 Įvairūs debesų saugyklos teikėjai turi nesuderinamų API. Net tie, kurie siekia „S3 suderinamumo“
 turi savitą elgesį.

 Kai pasirenkate tam tikrą programos saugyklos tiekėją, koduojate tiesiai į jo API, savo programą
 dabar priklauso nuo šios paslaugos. Laikui bėgant ir kaupiantis kodui, keičiasi pardavėjai
 vis labiau nepakeliamas. Sveiki atvykę į linksmą pardavėjo užrakinimo pasaulį!

 Mobiletto buvo sukurtas šiai problemai išspręsti. Užkoduodami programą į mobiletto API, galite lengvai
 pakeiskite saugyklos teikėjus ir žinokite, kad jūsų programos saugyklos sluoksnis veiks identiškai.

 ### Išsamūs bandymai
 Visi vairuotojai yra tikrinami dėl identiško elgesio su 60 ir daugiau testų kiekvienam vairuotojui.
 Mes išbandome visas tvarkykles su visomis kombinacijomis:
 * Šifravimas: įjungtas ir išjungtas
 * Redis cache: įjungta ir išjungta

 Šis metodas suteikia mums ramybę, kad „mobiletto“ veiks taip pat, nepaisant to, kurią tvarkyklę naudojate,
 ir neatsižvelgiant į tai, ar įgalinate talpyklą ir (arba) šifravimą.

 ### Vairuotojo palaikymas
 Dabartinės Mobiletto saugyklos tvarkyklės:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : vietinė failų sistema

 *Labai laukiame indėlio į daugiau debesies saugyklos teikėjų!*

 ## mobiletto-cli
 Mobiletto skirtas naudoti kaip biblioteka su kitu JavaScript kodu.

 Norėdami dirbti su mobiletto komandų eilutėje, naudokite [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Šaltinis
 * [mobiletto on GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Parama ir finansavimas
 Stengiuosi būti profesionali atvirojo kodo programinės įrangos kūrėja. Esu dirbęs
 programinės įrangos pramonėje daugelį metų įkūriau sėkmingas įmones ir pardaviau jas valstybinėms įmonėms.
 Neseniai netekau darbo, o kitų darbų tikrai neturiu

 Taigi aš pabandysiu parašyti naudingą programinę įrangą ir pažiūrėti, ar ji veikia

 Jei jums patinka naudoti šią programinę įrangą, būčiau labai dėkingas net už
 mažiausias [mėnesinis įnašas per Patreon](https://www.patreon.com/cobbzilla)

 *Ačiū!*

 ## Diegimas
 Įdiekite naudodami `npm` arba `yarn` . Tikriausiai norite `lite` versijos, kuri neapima visų
 išversti README failai:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jei tikrai norite README failų visomis kalbomis, įdiekite pilną versiją:

    npm install mobiletto
    yarn add mobiletto

 ## Greita pradžia
 Trumpas pavyzdys naudojant mobiletto `s3` tvarkyklę.

 Šis kodas veiktų taip pat, jei tvarkyklė būtų `b2` arba `local` .

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
 ## Pagrindinis naudojimas
 Daug platesnis pavyzdys, rodantis daugumą siūlomų funkcijų:

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

 ## Metaduomenys
 Komanda `metadata` grąžina vieno failų sistemos įrašo metaduomenis.
 Panašiai iš komandos `list` grąžinama reikšmė yra metaduomenų objektų masyvas.

 Metaduomenų objektas atrodo taip:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` "type" gali būti `file` " , `dir` " , `link` arba `special` .

 Atsižvelgiant į tvarkyklės tipą, komanda `list` gali nepateikti visų laukų. Savybės `name` ir `type` .
 visada turi būti šalia. Vėlesnė `metadata` komanda grąžins visas galimas ypatybes.

 ## Alternatyvus importavimo stilius
 Importuokite visą modulį ir naudokite funkciją `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Talpykla
 Mobiletto geriausiai veikia su <a href="https://redis.io">redis</a> talpykla.

 Mobiletto bandys prisijungti prie redis egzemplioriaus 127.0.0.1:6379

 Galite nepaisyti bet kurio iš šių:
 * Nustatykite `MOBILETTO_REDIS_HOST` env var, mobilusis jungtis čia, o ne localhost
 * Nustatykite `MOBILETTO_REDIS_PORT` env var, šis prievadas bus naudojamas

 „Mobiletto“ saugos visus savo „redis“ raktus su priešdėliu `_mobiletto__` . Galite tai pakeisti
 nustatydami `MOBILETTO_REDIS_PREFIX` env var.

 Taip pat galite nustatyti kiekvieno ryšio talpyklą naudodami objektą `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nenorite perrašyti talpyklos?
 Norėdami išjungti: kai užmezgate ryšį, `enabled: false` `opts.redisConfig` .

 Kaip aptarta toliau, talpyklos išjungimas turės neigiamos įtakos našumui ir sukels daugiau užklausų
 į saugyklą, kurios jums tikrai reikia.

 ### Talpyklos talpyklos nurodymai
 **Šifruota saugykla**: šifruota saugykla nuskaitoma / rašoma tik šiek tiek lėčiau nei įprasta,
 bet naršymas po katalogus (ką kai kurie dalykai daro) yra gana brangu. Naudojant redis talpyklą
 žymiai padidins našumą.

 Numatytoji talpykla yra saugi, bet neveikia gerai, jei atliekate daug rašymo / šalinimo operacijų.
 Bet kokia įrašymo ar pašalinimo operacija padaro negaliojančią visą talpyklą, todėl vėlesni skaitymai bus rodomi
 naujausius pakeitimus.

 ### CLI įrankiai
 Jei naudojate CLI įrankį, pvz., [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 tikrai norėsite, kad būtų įjungta „redis“ talpykla, nes ji galioja `mo` komandą „mo“.

 ## Veidrodis

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Komanda `mirror` atlieka vienkartinę visų failų kopiją iš vieno mobiliojo į kitą.
 Jis nevykdo jokio proceso, kad ilgainiui prižiūrėtų veidrodį. Dar kartą paleiskite komandą `mirror` .
 sinchronizuoti trūkstamus failus.

 Grąžinama vertė iš `mirror` yra paprastas objektas su sėkmingų failų skaitikliais
 veidrodinis ir kiek failų buvo klaidų:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ĮSPĖJIMAS: didelių duomenų rinkinių atspindėjimas gali užtrukti daug laiko ir pralaidumo.

 Naudojant `mirror` skambučio semantiką, kartais gali būti painu suprasti, kas yra
 skaitytojas ir kas yra rašytojas. Įsivaizduokite tai kaip priskyrimo teiginį: „kairės rankos mobilusis“
 yra daiktas, kuriam priskiriamas (rašomi veidrodiniai duomenys), ir „dešinės pusės mobilusis telefonas“ (
 `mirror` metodo argumentas) yra priskiriama reikšmė (skaitomi veidrodiniai duomenys).

 ## Skaidrus šifravimas
 Įgalinti skaidrų kliento pusės šifravimą:

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

 Kas vyksta? Atskiras "katalogo įrašas" (tiesioginis) katalogas (šifruotas) seka, kokie failai yra tame
 katalogas (dar žinomas kaip dirent katalogas).
 * Komanda `list` nuskaito katalogo įvesties failus, iššifruoja kiekvieną nurodytą kelią; tada grąžina kiekvieno failo metaduomenis
 * `list` komandos yra neefektyvesnės, ypač katalogams, kuriuose yra daug failų
 * Komanda `write` įrašo skirtingus failus į kiekvieno iš tėvų dirent katalogą; tada rašo failą
 * `write` komandos sukels O(N) įrašų, o N = gylis katalogų hierarchijoje
 * Komanda `remove` pašalinti" pašalina atitinkamą dirent failą ir jo pirminį failą, jei jis tuščias, rekursyviai; tada pašalina failą
 * `remove` komandos bus nuskaitomos O (N) ir galbūt net tiek pat ištrynimų, o N = gylis katalogų hierarchijoje
 * `remove` komandos didelėse ir giliose failų sistemose gali būti brangios

 Atminkite, kad net ir įjungus kliento pusės šifravimą, priešas gali visiškai matyti jūsų užšifruotą serverio pusę
 saugykla, net ir be rakto, vis tiek gali matyti bendrą katalogų skaičių ir kiek failų yra kiekviename ir su
 šiek tiek pastangų, atrasti dalį arba visą bendrą katalogų hierarchijos struktūrą.
 *Pastaba: naudokite palyginti plokščią konstrukciją, kad užtikrintumėte didesnį saugumą.*
 Priešas nežinos katalogų/failų pavadinimų, nebent žinotų ir jūsų šifravimą
 raktą arba kitaip sėkmingai nulaužė šifravimą. Tada visi statymai atšaukiami!

 ### Našumas ir kaupimas talpykloje
 Užšifruotos saugyklos operacijos gali būti lėtos. Rekursyvūs sąrašai ir pašalinimas gali būti labai lėtas.
 Talpyklos kaupimas naudojant „redis“ labai padeda, tačiau atminkite, kad talpykla iškraunama po bet kokio įrašymo ar pašalinimo.

 ## Raktų pasukimas
 Sukurkite mobilųjį telefoną naudodami naują raktą, tada atspindėkite jame senus duomenis:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Vairuotojo sąsaja
 Tvarkyklė yra bet koks JS failas, kuris eksportuoja funkciją „storageClient“ su šiuo parašu:

    function storageClient (key, secret, opts)

 * `key` : eilutė, jūsų API raktas ( `local` tvarkyklei tai yra pagrindinis katalogas)
 * `secret` : eilutė, jūsų API paslaptis (galima praleisti `local` tvarkyklėje)
 * `opts` : objektas, ypatybės priklauso nuo tvarkyklės:
 * `local` `fileMode` ir `dirMode` nustato, kaip sukuriami nauji kūrimo failai ir katalogai
 * Jei naudojate `s3` “, būtina savybė `bucket` . Pasirenkamos savybės yra:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektas, kurį grąžina funkcija storageClient, turi apibrėžti šias funkcijas:

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

 ## Registravimas
 Mobiletto naudoja [winston](https://www.npmjs.com/package/winston) registravimo biblioteką.

 Žurnaluose **bus** bus failų keliai ir klaidų pranešimai, bet **niekada** nebus raktų, paslapčių,
 arba bet kokia kita ryšio konfigūracijos informacija.

 ### Žurnalo lygis
 Norėdami nustatyti žurnalo lygį, naudokite aplinkos kintamąjį `MOBILETTO_LOG_LEVEL`
 iš `npm` lygių, apibrėžtų [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Numatytasis lygis yra `error` . Daugiakalbis lygis yra `silly` , nors šiuo metu mobilusis
 neprisiregistruoja žemiau `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Žurnalo failas
 Pagal numatytuosius nustatymus registratorius rašo į konsolę. Norėdami siųsti žurnalus į failą, nustatykite `MOBILETTO_LOG_FILE`
 aplinkos kintamasis. Prisijungus prie failo, žurnalai nebebus įrašomi į konsolę.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Norėdami išjungti registravimą:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
