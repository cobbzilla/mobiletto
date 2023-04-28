Mobiletto
 =========

 Mobiletto és una capa d'abstracció d'emmagatzematge de JavaScript, amb xifratge transparent opcional del costat del client.

 # Continguts
 * [Per què Mobiletto?](#Per què-Mobiletto?)
 * [Inici ràpid](#Inici ràpid)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Font](#Font)
 * [Instal·lació](#Instal·lació)
 * [Suport i finançament](#Support-and-Funding)
 * [Ús bàsic](#Ús bàsic)
 * [Metadades](#Metadades)
 * [Estil d'importació alternatiu](#Estil d'importació alternatiu)
 * [Memòria en memòria cau](#Caching)
 * [Mirroring](#Mirroring)
 * [Xifrat transparent](#Transparent-encryption)
 * [Rotació de tecles](#Rotació de tecles)
 * [Interfície del controlador](#Interfície del controlador)
 * [Registre](#Registre)

 # Llegeix això en un altre idioma
 Aquest document README.md s'ha traduït, mitjançant [hokeylization](https://github.com/cobbzilla/hokeylization), a
 **[cada idioma compatible amb Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estic segur que no és perfecte, però espero que sigui millor que res!

 [🇸🇦 Àrab](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemany](../de/README.md)
 [🇺🇸 Anglès](../en/README.md)
 [🇪🇸 Espanyol](../es/README.md)
 [🇫🇷 Francès](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesi](../id/README.md)
 [🇮🇹 italià](../it/README.md)
 [🇯🇵 Japonès](../ja/README.md)
 [🇰🇷 coreà](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonès](../pl/README.md)
 [🇧🇷 portuguès](../pt/README.md)
 [🇷🇺 Rus](../ru/README.md)
 [🇰🇪 suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Xinès](../zh/README.md)


 **[📚 ... Tots els idiomes ...](../README.md)**
 ----

 ### Hi ha algun problema amb aquesta traducció del README?
 Aquesta traducció particular de l'original [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 pot ser defectuós -- *les correccions són molt benvingudes!* Envieu una [sol·licitud d'extracció a GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o si no et sents còmode fent-ho, [obre un problema](https://github.com/cobbzilla/mobiletto/issues)

 Quan creeu un nou problema de GitHub sobre una traducció, feu el següent:
 * incloure l'URL de la pàgina (copiar/enganxar des de la barra d'adreces del navegador)
 * inclou el text exacte que és incorrecte (copiar/enganxar des del navegador)
 * si us plau, descriu què està malament: la traducció és incorrecta? el format està trencat d'alguna manera?
 * Oferiu amablement un suggeriment d'una millor traducció o com s'hauria de formatar correctament el text
 * **Gràcies!**

 ## Per què Mobiletto?

 ### Adéu bloqueig de venedors!
 Els diferents proveïdors d'emmagatzematge al núvol tenen API incompatibles. Fins i tot aquells que s'esforcen per la "compatibilitat S3"
 tenen comportaments idiosincràtics.

 Quan trieu un proveïdor d'emmagatzematge concret per a la vostra aplicació, si codifiqueu directament a la seva API, la vostra aplicació
 ara depèn d'aquest servei. A mesura que passa el temps i el codi s'acumula, els venedors esdevenen canviants
 cada cop més insostenible. Benvingut al divertit món del bloqueig de venedors!

 Mobiletto va ser dissenyat per resoldre aquest problema. Si codifiqueu la vostra aplicació a l'API de mobiletto, podeu fer-ho fàcilment
 canvieu de proveïdor d'emmagatzematge i sàpiga que la capa d'emmagatzematge de la vostra aplicació es comportarà de la mateixa manera.

 ### Extenses proves
 Tots els conductors són provats per a un comportament idèntic amb més de 60 proves per a cada conductor.
 Provem tots els controladors amb totes les combinacions de:
 * Xifratge: tant activat com desactivat
 * Memòria cau Redis: tant activada com desactivada

 Aquest enfocament ens proporciona tranquil·litat que mobiletto es comportarà de la mateixa manera independentment del controlador que utilitzeu,
 i independentment de si activeu la memòria cau i/o el xifratge.

 ### Suport al conductor
 Controladors d'emmagatzematge de Mobiletto actuals:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema de fitxers local

 *Les contribucions per donar suport a més proveïdors d'emmagatzematge al núvol són molt benvingudes!*

 ## mobiletto-cli
 Mobiletto està pensat per ser utilitzat com a biblioteca per altres codis JavaScript.

 Per treballar amb mobiletto a la línia d'ordres, utilitzeu [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Font
 * [mobiletto a GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto a npm](https://www.npmjs.com/package/mobiletto)

 ## Suport i finançament
 Estic intentant ser un desenvolupador professional de programari de codi obert. Hi he estat treballant
 la indústria del programari durant molts anys, he creat empreses d'èxit i les he venut a empreses públiques.
 Recentment he perdut la meva feina, i realment no tinc cap altra feina preparada

 Així que intentaré escriure programari útil i veure si funciona

 Si us agrada utilitzar aquest programari, us agrairia fins i tot el
 més petita [contribució mensual a través de Patreon](https://www.patreon.com/cobbzilla)

 *Gràcies!*

 ## Instal·lació
 Instal·leu amb `npm` o `yarn` . Probablement vulgueu la versió `lite` que no inclogui tots els fitxers
 fitxers README traduïts:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Si realment voleu els fitxers README en tots els idiomes, instal·leu la versió completa:

    npm install mobiletto
    yarn add mobiletto

 ## Començament ràpid
 Un breu exemple amb el controlador mobiletto `s3` .

 Aquest codi s'executaria igual si el controlador fos `b2` o `local` .

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
 ## Ús bàsic
 Un exemple molt més ampli, que mostra la majoria de les funcions que s'ofereixen:

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

 ## Metadades
 L'ordre `metadata` retorna metadades sobre una única entrada del sistema de fitxers.
 De la mateixa manera, el valor de retorn de l'ordre `list` és una matriu d'objectes de metadades.

 Un objecte de metadades té aquest aspecte:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 La propietat " `type` pot ser `file` ", `dir` ", `link` o `special` .

 Depenent del tipus de controlador, una ordre `list` pot no retornar tots els camps. Les propietats `name` " i `type` .
 hauria d'estar sempre present. Una ordre `metadata` posterior retornarà totes les propietats disponibles.

 ## Estil d'importació alternatiu
 Importeu el mòdul d'abast complet i utilitzeu la funció `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Emmagatzematge a la memòria cau
 Mobiletto funciona millor amb una memòria cau <a href="https://redis.io">redis</a> .

 Mobiletto intentarà connectar-se a una instància redis a 127.0.0.1:6379

 Podeu anul·lar qualsevol d'aquests:
 * Establiu la var env `MOBILETTO_REDIS_HOST` , mobileper connectar-vos aquí en lloc de localhost
 * Establiu la var env `MOBILETTO_REDIS_PORT` , s'utilitzarà aquest port

 Mobiletto emmagatzemarà totes les seves claus redis amb el prefix `_mobiletto__` . Podeu canviar això
 mitjançant la configuració de la var env `MOBILETTO_REDIS_PREFIX`

 També podeu establir la memòria cau per connexió amb l'objecte `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### No voleu la memòria cau de redis?
 Per desactivar: passeu `enabled: false` al vostre objecte `opts.redisConfig` quan establiu la vostra connexió.

 Com es comenta a continuació, la desactivació de la memòria cau tindrà un efecte advers en el rendiment i generarà més sol·licituds
 a l'emmagatzematge que realment necessiteu.

 ### Guia per a la memòria cau
 **Emmagatzematge encriptat**: la lectura/escriptura d'emmagatzematge encriptat és només una mica més lent del normal,
 però navegar pels directoris (cosa que fan algunes coses) és bastant car. Utilitzant una memòria cau redis
 us donarà un augment significatiu del rendiment.

 La memòria cau per defecte és segura, però no funciona bé si teniu moltes operacions d'escriptura/eliminació.
 Qualsevol operació d'escriptura o eliminació invalida tota la memòria cau, assegurant que les lectures posteriors veuran el fitxer
 els últims canvis.

 ### Eines CLI
 Si utilitzeu una eina CLI com [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Definitivament, voldreu que la memòria cau redis estigui habilitada, ja que dura durant les invocacions de l'ordre `mo` .

 ## Mirall

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 L'ordre `mirror` realitza una còpia única de tots els fitxers d'un mòbil a un altre.
 No executa cap procés per mantenir el mirall al llarg del temps. Executeu l'ordre `mirror` nou
 per sincronitzar els fitxers que falten.

 El valor de retorn de `mirror` és un objecte senzill amb comptadors per quants fitxers s'han realitzat correctament
 duplicats i quants fitxers tenien errors:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ADVERTÈNCIA: La duplicació de grans conjunts de dades pot consumir molt de temps i ample de banda

 Amb la semàntica de la crida `mirror` vegades pot resultar confús entendre qui és
 lector i qui és l'escriptor. Imagineu-ho com una declaració d'assignació: el "mobiletto de la mà esquerra"
 és la cosa a què s'assigna (dades escrites reflectides) i el "mobiletto de la dreta" (el
 argument al mètode `mirror` ) és el valor que s'assigna (es llegeixen les dades reflectides).

 ## Xifratge transparent
 Activa el xifratge transparent del costat del client:

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

 Que està passant? Un directori separat (xifrat) "entrada de directori" (directori) fa un seguiment dels fitxers que hi ha
 directori (també conegut com el directori dirent).
 * L'ordre `list` llegeix els fitxers d'entrada del directori, desxifra cada camí de la llista; després retorna les metadades per a cada fitxer
 * Les ordres `list` són més ineficients, especialment per a directoris amb un gran nombre de fitxers
 * L'ordre `write` escriu fitxers dirent al directori dirent de cada pare, de manera recursiva; després escriu el fitxer
 * `write` ordres d'escriptura provocaran escriptures O(N), amb N = profunditat a la jerarquia de directoris
 * L'ordre `remove` elimina el fitxer dirent corresponent, i el seu pare si està buit, de forma recursiva; llavors elimina el fitxer
 * Les ordres `remove` no recursives provocaran lectures O (N) i potencialment tantes supressions, amb N = profunditat a la jerarquia de directoris
 * Les ordres recursives `remove` en sistemes de fitxers grans i profunds poden ser cares

 Tingueu en compte que fins i tot amb el xifratge del costat del client habilitat, un adversari amb visibilitat total del vostre servidor xifrat
 L'emmagatzematge, fins i tot sense la clau, encara pot veure el nombre total de directoris i quants fitxers hi ha a cadascun, i amb
 algun esforç, descobrir part o tota l'estructura global de la jerarquia de directoris.
 *Nota: utilitzeu una estructura relativament plana per a una millor seguretat.*
 L'adversari no sabria els noms dels directoris/fitxers tret que també conegués el vostre xifratge
 clau o hagués trencat el xifratge amb èxit. Aleshores, totes les apostes estan desactivades!

 ### Rendiment i memòria cau
 Les operacions d'emmagatzematge xifrat poden ser lentes. Les fitxes recursives i les eliminacions poden ser molt lentes.
 L'emmagatzematge a la memòria cau mitjançant redis ajuda enormement, però tingueu en compte que la memòria cau s'esborra quan s'escriu o s'elimini.

 ## Rotació de tecles
 Creeu un mòbiltto amb la vostra clau nova i, a continuació, reflectiu-hi les dades antigues:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfície del controlador
 Un controlador és qualsevol fitxer JS que exporti una funció "storageClient" amb aquesta signatura:

    function storageClient (key, secret, opts)

 * `key` : una cadena, la vostra clau API (per al controlador `local` aquest és el directori base)
 * `secret` : una cadena, el vostre secret de l'API (es pot ometre per al controlador `local` )
 * `opts` : un objecte, les propietats són per controlador:
 * Per a `local` , les `fileMode` i `dirMode` determinen com es creen fitxers i directoris de creació nous
 * Per a `s3` , la propietat `bucket` és necessària. Les propietats opcionals són:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 L'objecte que retorna la funció storageClient ha de definir aquestes funcions:

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

 ## Registre
 Mobiletto utilitza la biblioteca de registre [winston](https://www.npmjs.com/package/winston).

 Els registres **contindran** els camins dels fitxers i els missatges d'error, però **mai** contindran claus, secrets,
 o qualsevol altra informació de configuració de connexió.

 ### Nivell de registre
 Utilitzeu la variable d'entorn `MOBILETTO_LOG_LEVEL` per establir el nivell de registre, utilitzant-ne un
 dels nivells `npm` definits a [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 El nivell predeterminat és `error` . El nivell més detallat és `silly` , encara que actualment mobiletto
 no registra en nivells inferiors a `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Fitxer de registre
 Per defecte, el registrador escriu a la consola. Per enviar registres a un fitxer, configureu el `MOBILETTO_LOG_FILE`
 variable d'entorn. Quan inicieu sessió en un fitxer, els registres ja no s'escriuran a la consola.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Per desactivar el registre:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
