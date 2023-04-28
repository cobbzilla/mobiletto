Mobiletto
 =========

 Mobiletto on JavaScripti salvestamise abstraktsioonikiht, millel on valikuline läbipaistev kliendipoolne krüptimine.

 # Sisu
 * [Miks Mobiletto?](#Why-Mobiletto?)
 * [Kiire algus](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Allikas](#Allikas)
 * [Paigaldamine](#Installatsioon)
 * [Toetus ja rahastamine](#Support-and-Funding)
 * [Põhikasutus](#Põhikasutus)
 * [Metaandmed](#Metadata)
 * [Alternatiivne impordi stiil](#Alternate-import-style)
 * [vahemällu salvestamine](#vahemällu salvestamine)
 * [Peegeldamine](#Peegeldamine)
 * [Läbipaistev krüptimine](#Transparent-encryption)
 * [Key rotation](#Key-rotation)
 * [Draiveri liides](#Driver-interface)
 * [Logimine](#Logging)

 # Lugege seda teises keeles
 See README.md dokument on [hokeylization](https://github.com/cobbzilla/hokeylization) kaudu tõlgitud keelde
 **[Google'i tõlge toetab kõiki keeli](https://cloud.google.com/translate/docs/languages)!**

 Olen kindel, et see pole täiuslik, aga ma loodan, et see on parem kui mitte midagi!

 [🇸🇦 araabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 saksa keel](../de/README.md)
 [🇺🇸 inglise keel](../en/README.md)
 [🇪🇸 hispaania](../es/README.md)
 [🇫🇷 prantsuse keel](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneesia](../id/README.md)
 [🇮🇹 itaalia](../it/README.md)
 [🇯🇵 jaapani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Poola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 vene keel](../ru/README.md)
 [🇰🇪 suahiili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 türgi](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 hiina](../zh/README.md)


 **[📚 ... Kõik keeled ...](../README.md)**
 ----

 ### Kas selle README tõlkega on probleeme?
 See konkreetne originaali [README] tõlge (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 võib olla vigane -- *parandused on väga teretulnud!* Saatke [tõmbetaotlus GitHubis](https://github.com/cobbzilla/mobiletto/pulls),
 või kui te ei soovi seda teha, [avage probleem](https://github.com/cobbzilla/mobiletto/issues)

 Kui loote tõlke kohta uue GitHubi probleemi, tehke järgmist.
 * lisage lehe URL (kopeerige/kleepige brauseri aadressiribalt)
 * lisage täpne tekst, mis on vale (kopeeri/kleebi brauserist)
 * palun kirjeldage, mis on valesti – kas tõlge on vale? kas vormindus on kuidagi katki?
 * pakkuge lahkelt ettepanekut parema tõlke kohta või kuidas tekst tuleks õigesti vormistada
 * **Aitäh!**

 ## Miks just Mobiletto?

 ### Hüvasti müüja lukustus!
 Erinevatel pilvesalvestuse pakkujatel on ühildumatud API-d. Isegi need, mis püüdlevad "S3-ühilduvuse poole"
 on omapärane käitumine.

 Kui valite oma rakendusele konkreetse salvestusruumi tarnija, kui kodeerite otse nende API-sse, oma rakendusse
 sõltub nüüd sellest teenusest. Aja möödudes ja koodi kogunedes muutuvad tarnijad
 üha talumatumaks. Tere tulemast müüja lukustamise lõbusasse maailma!

 Mobiletto loodi selle probleemi lahendamiseks. Kodeerides oma rakenduse mobiletto API-sse, saate seda hõlpsalt teha
 muutke salvestusruumi pakkujat ja teadke, et teie rakenduse salvestuskiht käitub identselt.

 ### Ulatuslikud testid
 Kõiki juhte testitakse identse käitumise suhtes, iga juhi kohta tehakse 60+ testi.
 Testime kõiki draivereid kõigi järgmiste kombinatsioonidega:
 * Krüpteerimine: nii lubatud kui ka keelatud
 * Redis vahemälu: nii lubatud kui ka keelatud

 See lähenemine annab meile meelerahu, et mobiletto käitub samamoodi, olenemata sellest, millist draiverit kasutate,
 ja olenemata sellest, kas lubate vahemällu salvestamise ja/või krüptimise.

 ### Juhi tugi
 Praegused Mobiletto salvestusdraiverid:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : kohalik failisüsteem

 *Kaastööd rohkemate pilvesalvestuse pakkujate toetamiseks on väga teretulnud!*

 ## mobiletto-cli
 Mobiletto on mõeldud kasutamiseks muu JavaScripti koodi raamatukoguna.

 Käsureal mobilettoga töötamiseks kasutage [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Allikas
 * [mobiletto GitHubis](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Toetus ja rahastamine
 Üritan olla professionaalne avatud lähtekoodiga tarkvaraarendaja. Olen töötanud
 tarkvaratööstuses aastaid, olen loonud edukaid ettevõtteid ja müünud neid riigiettevõtetele.
 Hiljuti kaotasin töö ja muud tööd mul tegelikult ei ole

 Nii et proovin kirjutada kasulikku tarkvara ja vaadata, kas see töötab

 Kui teile meeldib seda tarkvara kasutada, oleksin isegi selle eest väga tänulik
 väikseim [igakuine sissemakse Patreoni kaudu](https://www.patreon.com/cobbzilla)

 *Aitäh!*

 ## Paigaldamine
 Installige, kasutades `npm` `yarn` " või "lõng". Tõenäoliselt soovite `lite` versiooni, mis ei sisalda kõiki
 tõlgitud README failid:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Kui soovite tõesti README-faile igas keeles, installige täisversioon:

    npm install mobiletto
    yarn add mobiletto

 ## Kiire algus
 Lühike näide mobiletto `s3` draiveri kasutamisest.

 See kood töötaks sama, kui draiver oleks `b2` või `local` .

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
 ## Põhikasutus
 Palju ulatuslikum näide, mis näitab enamikku pakutavatest funktsioonidest:

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

 ## Metaandmed
 Käsk `metadata` tagastab metaandmed ühe failisüsteemi kirje kohta.
 Samamoodi on käsu `list` metaandmeobjektide massiiv.

 Metaandmete objekt näeb välja selline:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Atribuut `type` type" võib olla `file` " , `link` `dir` " , "link" või `special` .

 Olenevalt draiveri tüübist ei pruugi käsk `list` kõiki välju tagastada. `name` ja `type`
 peaks alati kohal olema. Järgnev `metadata` käsk tagastab kõik saadaolevad atribuudid.

 ## Alternatiivne impordi stiil
 Importige täieliku ulatusega moodul ja kasutage funktsiooni `connect` .

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Vahemälu
 Mobiletto töötab kõige paremini <a href="https://redis.io">redis</a> -vahemäluga.

 Mobiletto proovib luua ühenduse redis-eksemplariga aadressil 127.0.0.1:6379

 Saate alistada ühe järgmistest:
 * Seadke `MOBILETTO_REDIS_HOST` env var, mobile loob siin ühenduse kohaliku hosti asemel
 * Määra `MOBILETTO_REDIS_PORT` env var, seda porti kasutatakse

 Mobiletto salvestab kõik oma redis-võtmed eesliitega `_mobiletto__` . Saate seda muuta
 määrates `MOBILETTO_REDIS_PREFIX` env var.

 Ühendusepõhise vahemällu saate määrata ka objektiga `opts.redisConfig` .

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Kas te ei soovi uuesti vahemällu salvestada?
 Keelamiseks edastage ühenduse loomisel objektile `opts.redisConfig` `enabled: false` false".

 Nagu allpool kirjeldatud, avaldab vahemällu salvestamise keelamine jõudlust negatiivselt ja toob kaasa rohkem taotlusi
 salvestusruumi, mida te tõesti vajate.

 ### Vahemällu salvestamise juhised
 **Krüpteeritud salvestusruum**: krüptitud salvestusruumi lugemine/kirjutamine on tavalisest veidi aeglasem,
 kuid kataloogides navigeerimine (mida mõned asjad teevad) on üsna kulukas. Redis vahemälu kasutamine
 annab teile märkimisväärse jõudluse tõuke.

 Vaikevahemälu on turvaline, kuid ei tööta hästi, kui teil on palju kirjutamis-/eemaldustoiminguid.
 Iga kirjutamis- või eemaldamisoperatsioon muudab kogu vahemälu kehtetuks, tagades, et järgnevad lugemised näevad
 viimased muudatused.

 ### CLI tööriistad
 Kui kasutate CLI-tööriista, nagu [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 kindlasti soovite redis-vahemälu lubada, kuna see kestab kogu käsu `mo` väljakutsumise ajal.

 ## Peegeldamine

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Käsk `mirror` teeb kõigist failidest ühekordse koopia ühest mobiilist teise.
 See ei käivita peegli aja jooksul hooldamiseks ühtegi protsessi. Käivitage käsk `mirror` uuesti
 puuduvate failide sünkroonimiseks.

 `mirror` on lihtne objekt, millel on loendurid selle kohta, kui palju faile õnnestus
 peegeldatud ja kui paljudes failides oli vigu:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 HOIATUS: suurte andmekogumite peegeldamine võib olla väga aeganõudev ja ribalaiusmahukas

 `mirror` semantika puhul võib mõnikord olla segane aru saada, kes on
 lugeja ja kes on kirjutaja. Kujutage ette seda nagu ülesandelause: "vasakpoolne mobiiltelefon"
 on asi, millele määratakse (kirjutatud peegelandmed) ja "parempoolne mobiiltelefon" (
 `mirror` argument) on omistatav väärtus (loetakse peegeldatud andmeid).

 ## Läbipaistev krüptimine
 Luba läbipaistev kliendipoolne krüptimine:

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

 Mis toimub? Eraldi "kataloogi kirje" (dirent) kataloog (krüpteeritud) jälgib, millised failid selles on
 kataloog (teise nimega dirent kataloog).
 * Käsk `list` loeb kataloogikirje failid, dekrüpteerib iga loetletud tee; seejärel tagastab iga faili metaandmed
 * Käsud `list` on ebaefektiivsemad, eriti suure hulga failidega kataloogide puhul
 * Käsk `write` kirjutab dirent failid iga vanema dirent kataloogi, rekursiivselt; siis kirjutab faili
 * `write` käsud nõuavad O(N) kirjutamist, kusjuures N = sügavus kataloogihierarhias
 * Käsk `remove` eemalda" eemaldab rekursiivselt vastava dirent-faili ja selle vanema, kui see on tühi; seejärel eemaldab faili
 * `remove` O(N) lugemist ja potentsiaalselt sama palju kustutamisi, kusjuures N = sügavus kataloogihierarhias
 * Rekursiivsed `remove` suurtes ja sügavates failisüsteemides võivad olla kulukad

 Pange tähele, et isegi kui kliendipoolne krüptimine on lubatud, on vastane, kellel on täielik nähtavus teie krüptitud serveri poolel
 salvestusruum, isegi ilma võtmeta, näeb siiski kataloogide koguarvu ja seda, kui palju faile igas ja koos on
 mõningaid jõupingutusi, avastage osa või kogu kataloogihierarhia üldine struktuur.
 *Märkus. Parema turvalisuse tagamiseks kasutage suhteliselt tasast konstruktsiooni.*
 Vastane ei tea kataloogide/failide nimesid, kui ta ei tea ka sinu krüptimist
 võti või oli krüpteering muul viisil edukalt lahti murdnud. Kõik ennustused on siis välja lülitatud!

 ### Jõudlus ja vahemälu
 Krüpteeritud salvestusruumi toimingud võivad olla aeglased. Rekursiivsed loendid ja eemaldamised võivad olla väga aeglased.
 Vahemällu salvestamine redise kaudu aitab tohutult, kuid pange tähele, et vahemälu tühjeneb iga kirjutamise või eemaldamise korral.

 ## Võtme pöörlemine
 Looge oma uue võtmega mobiiltelefon, seejärel peegeldage sellesse vanu andmeid:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Draiveri liides
 Draiver on mis tahes JS-fail, mis ekspordib funktsiooni „storageClient” järgmise allkirjaga:

    function storageClient (key, secret, opts)

 * `key` : string, teie API võti ( `local` draiveri jaoks on see baaskataloog)
 * `secret` : string, teie API saladus (saab `local` draiveri puhul ära jätta)
 * `opts` : objekt, atribuudid on juhipõhised:
 * `local` ” puhul määravad atribuudid `fileMode` ja `dirMode` , kuidas luuakse uusi loovaid faile ja katalooge
 * `s3` `bucket` on atribuut „bucket” nõutav. Valikulised omadused on:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objekt, mille funktsioon storageClient tagastab, peab määratlema järgmised funktsioonid:

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

 ## Logimine
 Mobiletto kasutab [winstoni](https://www.npmjs.com/package/winston) logimise teeki.

 Logid **sisaldavad** failiteid ja veateateid, kuid **mitte kunagi** ei sisalda võtmeid, saladusi,
 või muud ühenduse konfiguratsiooniteavet.

 ### Logi tase
 Logitaseme määramiseks kasutage keskkonnamuutujat `MOBILETTO_LOG_LEVEL` , kasutades ühte
 `npm` tasemetest, mis on määratletud saidil [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 `error` . Kõige sõnasõnalisem tase on `silly` , kuigi praegu on mobiletto
 ei logi sisse `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logifail
 Vaikimisi kirjutab logija konsooli. Logide faili saatmiseks määrake `MOBILETTO_LOG_FILE`
 keskkonna muutuja. Faili logides logisid enam konsooli ei kirjutata.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Logimise väljalülitamiseks toimige järgmiselt.

    MOBILETTO_LOG_FILE=/dev/null

</pre>
