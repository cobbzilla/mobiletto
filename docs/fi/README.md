Mobiletto
 =========

 Mobiletto on JavaScript-tallennuskerros, jossa on valinnainen läpinäkyvä asiakaspuolen salaus.

 # Sisältö
 * [Miksi Mobiletto?](#Miksi-Mobiletto?)
 * [Pika-aloitus](#Pika-aloitus)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Lähde](#Source)
 * [Asennus](#Asennus)
 * [Tuki ja rahoitus](#Support-and-Funding)
 * [Peruskäyttö](#Peruskäyttö)
 * [Metatiedot](#Metadata)
 * [Vaihtoehtoinen tuontityyli](#Alternate-import-style)
 * [Välimuisti](#Caching)
 * [peilaus](#peilaus)
 * [Läpinäkyvä salaus](#Transparent-encryption)
 * [Key-rotation](#Key-rotation)
 * [Driver interface](#Driver-interface)
 * [Kirjaus](#Logging)

 # Lue tämä toisella kielellä
 Tämä README.md-dokumentti on käännetty [hokeylization]:n (https://github.com/cobbzilla/hokeylization) kautta kielelle
 **[kaikki Google-kääntäjän tukemat kielet](https://cloud.google.com/translate/docs/languages)!**

 Olen varma, että se ei ole täydellinen, mutta toivon, että se on parempi kuin ei mitään!

 [🇸🇦 arabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 saksaksi](../de/README.md)
 [🇺🇸 englanti](../en/README.md)
 [🇪🇸 espanja](../es/README.md)
 [🇫🇷 ranska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesia](../id/README.md)
 [🇮🇹 italia](../it/README.md)
 [🇯🇵 japani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 puola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 venäjä](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnam](../vi/README.md)
 [🇨🇳 kiina](../zh/README.md)


 **[📚 ... Kaikki kielet ...](../README.md)**
 ----

 ### Onko tässä README-käännöksessä ongelma?
 Tämä käännös alkuperäisestä [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 voi olla virheellinen -- *korjaukset ovat erittäin tervetulleita!* Lähetä [pull-pyyntö GitHubissa](https://github.com/cobbzilla/mobiletto/pulls),
 tai jos et halua tehdä niin, [avaa ongelma](https://github.com/cobbzilla/mobiletto/issues)

 Kun luot uuden GitHub-ongelman käännöksestä, toimi seuraavasti:
 * sisällytä sivun URL-osoite (kopioi/liitä selaimen osoiteriviltä)
 * sisällytä täsmällinen virheellinen teksti (kopioi/liitä selaimesta)
 * kuvaile mikä on vialla -- onko käännös virheellinen? onko muotoilu rikki jotenkin?
 * Ehdota ystävällisesti parempaa käännöstä tai tekstin oikeaa muotoilua
 * **Kiitos!**

 ## Miksi Mobiletto?

 ### Hyvästi myyjän lukitus!
 Eri pilvitallennuspalvelujen tarjoajilla on yhteensopimattomia sovellusliittymiä. Jopa ne, jotka tavoittelevat "S3-yhteensopivuutta"
 on omalaatuista käyttäytymistä.

 Kun valitset sovelluksellesi tietyn tallennustilan toimittajan, jos koodaat suoraan heidän sovellusliittymään, sovelluksesi
 on nyt riippuvainen kyseisestä palvelusta. Ajan myötä ja koodia kertyy, vaihtuvia myyjiä tulee
 yhä kestämättömämpi. Tervetuloa myyjän lukituksen hauskaan maailmaan!

 Mobiletto on suunniteltu ratkaisemaan tämä ongelma. Koodaamalla sovelluksesi mobiletton sovellusliittymään, voit helposti
 vaihda tallennuspalveluntarjoajaa ja tiedä, että sovelluksesi tallennuskerros toimii samalla tavalla.

 ### Laaja testaus
 Kaikki kuljettajat testataan identtisen käyttäytymisen suhteen yli 60 testillä jokaiselle kuljettajalle.
 Testaamme kaikki ajurit kaikilla seuraavien yhdistelmillä:
 * Salaus: sekä käytössä että poissa käytöstä
 * Redis-välimuisti: sekä käytössä että poissa käytöstä

 Tämä lähestymistapa antaa meille mielenrauhan, että mobiletto toimii samalla tavalla riippumatta siitä, mitä ajuria käytät,
 ja riippumatta siitä, otatko välimuistin ja/tai salauksen käyttöön.

 ### Ohjaintuki
 Nykyiset Mobiletto-tallennusohjaimet:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : paikallinen tiedostojärjestelmä

 *Otamme mielellämme vastaan lisää pilvitallennuspalvelujen tarjoajia!*

 ## mobiletto-cli
 Mobiletto on tarkoitettu käytettäväksi muun JavaScript-koodin kirjastona.

 Jos haluat työskennellä mobiletton kanssa komentorivillä, käytä [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Lähde
 * [mobiletto GitHubissa](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Tuki ja rahoitus
 Yritän olla ammattimainen avoimen lähdekoodin ohjelmistokehittäjä. Olen ollut töissä
 Ohjelmistoteollisuudessa useiden vuosien ajan, olen perustanut menestyviä yrityksiä ja myynyt niitä julkisille yrityksille.
 Menetin hiljattain työpaikkani, eikä minulla oikeastaan ole muita töitä

 Joten yritän kirjoittaa hyödyllisiä ohjelmistoja ja katsoa, toimiiko se

 Jos pidät tämän ohjelmiston käyttämisestä, olisin erittäin kiitollinen jopa
 pienin [kuukausimaksu Patreonin kautta](https://www.patreon.com/cobbzilla)

 *Kiitos!*

 ## Asennus
 Asenna käyttämällä `npm` tai `yarn` . Haluat luultavasti `lite` version, joka ei sisällä kaikkia
 käännetyt README-tiedostot:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jos todella haluat README-tiedostot kaikilla kielillä, asenna täysi versio:

    npm install mobiletto
    yarn add mobiletto

 ## Pika-aloitus
 Lyhyt esimerkki mobiletto `s3` -ohjaimesta.

 Tämä koodi toimisi samoin, jos ohjain olisi `b2` tai `local` .

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
 ## Peruskäyttö
 Paljon laajempi esimerkki, jossa näkyy suurin osa tarjotuista ominaisuuksista:

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

 ## Metatiedot
 `metadata` -komento palauttaa yhden tiedostojärjestelmän merkinnän metatiedot.
 Samoin `list` -komennon palautusarvo on joukko metatieto-objekteja.

 Metatietoobjekti näyttää tältä:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Tyyppi-ominaisuus voi olla `type` `file` " , `dir` " , "link `link` tai `special` .

 Ohjaimen tyypistä riippuen `list` -komento ei välttämättä palauta kaikkia kenttiä. `name` ja "tyyppi `type` .
 tulee aina olla läsnä. Seuraava `metadata` -komento palauttaa kaikki käytettävissä olevat ominaisuudet.

 ## Vaihtoehtoinen tuontityyli
 Tuo täysin kattava moduuli ja käytä `connect` -toimintoa:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Välimuisti
 Mobiletto toimii parhaiten <a href="https://redis.io">redis-</a> välimuistin kanssa.

 Mobiletto yrittää muodostaa yhteyden redis-instanssiin osoitteessa 127.0.0.1:6379

 Voit ohittaa jommankumman seuraavista:
 * Aseta `MOBILETTO_REDIS_HOST` env var, mobile yhdistämään tähän paikallispalvelimen sijaan
 * Aseta `MOBILETTO_REDIS_PORT` env var, tätä porttia käytetään

 Mobiletto tallentaa kaikki redis-avaimensa etuliitteellä `_mobiletto__` . Voit muuttaa tätä
 asettamalla `MOBILETTO_REDIS_PREFIX` env var.

 Voit myös määrittää yhteyskohtaisen välimuistin `opts.redisConfig` -objektilla:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Etkö halua tallentaa uudelleen välimuistiin?
 Poistaminen käytöstä `enabled: false` `opts.redisConfig` -objektiin, kun muodostat yhteyden.

 Kuten alla kerrotaan, välimuistin poistaminen käytöstä vaikuttaa haitallisesti suorituskykyyn ja lisää pyyntöjä
 varastointiin, jota todella tarvitset.

 ### Välimuistin tallennuksen opas
 **Salattu tallennus**: salatun tallennustilan lukeminen/kirjoittaminen on vain hieman normaalia hitaampaa,
 mutta hakemistoissa liikkuminen (jota jotkut asiat tekevät) on melko kallista. Redis-välimuistin käyttäminen
 antaa sinulle merkittävän suorituskyvyn lisäyksen.

 Oletusvälimuisti on turvallinen, mutta se ei toimi hyvin, jos sinulla on paljon kirjoitus-/poistotoimintoja.
 Mikä tahansa kirjoitus- tai poistotoiminto mitätöi koko välimuistin, mikä varmistaa, että myöhemmissä lukemissa
 viimeisimmät muutokset.

 ### CLI-työkalut
 Jos käytät CLI-työkalua, kuten [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Redis-välimuistin tulee ehdottomasti olla käytössä, koska se kestää mo-komennon `mo` .

 ## Peilaus

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` suorittaa kertakopion kaikista tiedostoista mobiililaitteesta toiseen.
 Se ei suorita mitään prosessia peilin ylläpitämiseksi ajan mittaan. Suorita `mirror` uudelleen
 synkronoidaksesi puuttuvat tiedostot.

 `mirror` on yksinkertainen objekti, jossa on laskurit siitä, kuinka monta tiedostoa onnistui
 peilattu ja kuinka monessa tiedostossa oli virheitä:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 VAROITUS: Suurten tietojoukkojen peilaus voi olla hyvin aikaa vievää ja kaistanleveyttä vaativaa

 `mirror` semantiikan avulla voi joskus olla hämmentävää ymmärtää, kuka on
 lukija ja kuka on kirjoittaja. Kuvittele se tehtävälausekkeena: "vasen kännykkä"
 on kohde, jolle osoitetaan (kirjoitettu peilattu data) ja "oikea kännykkä" (
 argumentti `mirror` -menetelmälle) on arvo, jota annetaan (peilattua dataa luetaan).

 ## Läpinäkyvä salaus
 Ota läpinäkyvä asiakaspuolen salaus käyttöön:

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

 Mitä tapahtuu? Erillinen "hakemistomerkintä" (dirent) hakemisto (salattu) seuraa, mitä tiedostoja siinä on
 hakemisto (alias dirent hakemisto).
 * `list` -komento lukee hakemiston syöttötiedostot, purkaa jokaisen luettelossa olevan polun; palauttaa sitten kunkin tiedoston metatiedot
 * `list` -komennot ovat tehottomia, varsinkin hakemistoissa, joissa on paljon tiedostoja
 * `write` komento kirjoittaa eri tiedostot kunkin vanhemman dirent-hakemistoon rekursiivisesti; sitten kirjoittaa tiedoston
 * `write` komennot aiheuttavat O(N) kirjoitusta, jolloin N = syvyys hakemistohierarkiassa
 * `remove` -komento poistaa vastaavan dirent-tiedoston ja sen ylätason, jos se on tyhjä, rekursiivisesti; poistaa sitten tiedoston
 * Ei-rekursiiviset `remove` -komennot vaativat O(N) lukua ja mahdollisesti yhtä monta poistoa, jolloin N = syvyys hakemistohierarkiassa
 * Rekursiiviset `remove` " suurissa ja syvällisissä tiedostojärjestelmissä voivat olla kalliita

 Huomaa, että vaikka asiakaspuolen salaus olisi käytössä, vastustaja, jolla on täysi näkyvyys salatulle palvelinpuolelle
 tallennustila, jopa ilman avainta, voi silti nähdä hakemistojen kokonaismäärän ja kuinka monta tiedostoa kussakin on
 jonkin verran vaivaa, löytää hakemistohierarkian yleinen rakenne tai osa siitä.
 *Huomaa: Käytä suhteellisen tasaista rakennetta parantaaksesi turvallisuutta.*
 Vastustaja ei tietäisi hakemistojen/tiedostojen nimiä ellei he tietäisi myös salaustasi
 avaimella tai oli muuten onnistuneesti murtanut salauksen. Silloin kaikki vedot ovat poissa!

 ### Suorituskyky ja välimuisti
 Salatun tallennustilan toiminta voi olla hidasta. Rekursiiviset listaukset ja poistot voivat olla hyvin hidasta.
 Välimuistin tallentaminen rediksen kautta auttaa valtavasti, mutta huomaa, että välimuisti tyhjennetään kirjoittamisen tai poistamisen yhteydessä.

 ## Avaimen kierto
 Luo matkapuhelin uudella avaimellasi ja peilaa sitten vanhat tiedot siihen:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Ohjaimen käyttöliittymä
 Ohjain on mikä tahansa JS-tiedosto, joka vie "storageClient"-funktion tällä allekirjoituksella:

    function storageClient (key, secret, opts)

 * `key` : merkkijono, API-avain (paikalliselle ohjaimelle tämä on `local` )
 * `secret` : merkkijono, API-salaisuus (voidaan jättää pois `local` ohjaimesta)
 * `opts` : objekti, jonka ominaisuudet ovat kuljettajakohtaisia:
 * `local` `fileMode` ja `dirMode` määrittävät kuinka uudet luontitiedostot ja hakemistot luodaan
 * `s3` `bucket` vaaditaan "bucket"-ominaisuus. Valinnaiset ominaisuudet ovat:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Objektin, jonka storageClient-funktio palauttaa, on määritettävä seuraavat funktiot:

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

 ## Kirjaaminen
 Mobiletto käyttää [winston](https://www.npmjs.com/package/winston) lokikirjastoa.

 Lokit **sisältävät** tiedostopolut ja virheilmoitukset, mutta **eivät koskaan** sisällä avaimia, salaisuuksia,
 tai muita yhteyden määritystietoja.

 ### Lokin taso
 Käytä `MOBILETTO_LOG_LEVEL` ympäristömuuttujaa lokitason asettamiseen käyttämällä yhtä
 `npm` tasoista, jotka on määritelty osoitteessa [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Oletustaso on `error` . Monisanaisin taso on `silly` , vaikkakin tällä hetkellä mobiletto
 ei kirjaudu `debug` alapuolelle

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Loki tiedosto
 Oletusarvoisesti loggeri kirjoittaa konsoliin. Jos haluat lähettää lokit tiedostoon, aseta `MOBILETTO_LOG_FILE`
 ympäristömuuttuja. Kun kirjaudut tiedostoon, lokeja ei enää kirjoiteta konsoliin.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Lokikirjauksen poistaminen käytöstä:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
