Mobilettu
 =========

 Mobiletto hè una strata di astrazione di almacenamiento JavaScript, cù una criptografia trasparente opzionale da u cliente.

 # Cuntinutu
 * [Perchè Mobiletto?](#Perchè-Mobiletto?)
 * [Inizio rapidu](#Inizio rapidu)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Installazione](#Installazione)
 * [Supportu è Finanziamentu](#Supportu-è-Fundamentu)
 * [Usu di basa](#Usu di basa)
 * [Metadata](#Metadata)
 * [Stile d'importazione alternativu](#Stile d'importazione alternativu)
 * [Caching](#Caching)
 * [Mirroring](#Mirroring)
 * [Cittografia trasparente](#Crittografia-trasparente)
 * [Rotazione di chjave](#Rotazione di chjave)
 * [Interfaccia Driver](#Driver-interface)
 * [Logging](#Logging)

 # Leghjite questu in un'altra lingua
 Stu documentu README.md hè statu traduttu, via [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[tutte lingue supportate da Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sò sicuru chì ùn hè micca perfettu, ma spergu chì hè megliu cà nunda !

 [🇸🇦 Arabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 Inglese](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russu](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcu](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte e lingue ...](../README.md)**
 ----

 ### Ci hè un prublema cù sta traduzzione di u README ?
 Questa traduzzione particulare di u [README] originale (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 pò esse difettu -- * e currezzione sò assai benvenute ! * Mandate una [pull request on GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o se ùn site micca còmode di fà quessa, [apre un prublema](https://github.com/cobbzilla/mobiletto/issues)

 Quandu create un novu prublema GitHub nantu à una traduzzione, fate:
 * include l'URL di a pagina (copia / incollà da a barra di indirizzu di u navigatore)
 * include u testu esatta chì hè sbagliatu (copia / incollà da u navigatore)
 * per piacè descrivi ciò chì hè sbagliatu -- a traduzzione hè sbagliata? a formattazione hè rotta in qualchì modu?
 * Per piacè offre un suggerimentu di una traduzzione megliu, o cumu u testu deve esse furmatu bè
 * **Grazie!**

 ## Perchè Mobiletto ?

 ### Adiu lock-in di u venditore!
 I vari fornitori di almacenamiento in nuvola anu API incompatibili. Ancu quelli chì lottanu per a "compatibilità S3"
 avè cumpurtamenti idiosincratici.

 Quandu sceglite un venditore di almacenamiento particulari per a vostra app, se codificate direttamente à a so API, a vostra app
 avà dipende di stu serviziu. Quandu u tempu passa è u codice s'accumula, i venditori cambianti diventanu
 sempre più insostenibile. Benvenuti à u mondu divertente di u lock-in di u venditore!

 Mobiletto hè statu cuncepitu per risolve stu prublema. Codificà a vostra app à l'API di mobiletto, pudete facilmente
 cambia i fornitori di almacenamentu è sapete chì a strata di almacenamentu di a vostra app si comporta in modu identicu.

 ### Teste estensive
 Tutti i cunduttori sò testati per un cumpurtamentu identicu cù più di 60 teste per ogni cunduttore.
 Testemu tutti i cunduttori cù ogni cumminazione di:
 * Cifratura: sia attivata sia disattivata
 * Cache Redis: sia attivata sia disattivata

 Stu approcciu ci dà a pace di mente chì u mobiletto si cumportarà u listessu, indipendentemente da quale driver utilizate,
 è indipendentemente da esse attivate a cache è / o a criptografia.

 ### Supportu di i cunduttori
 Drivers di almacenamento Mobiletto attuali:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema di fugliale locale

 * I cuntributi per sustene più fornitori di almacenamentu in nuvola sò assai benvenuti ! *

 ## mobiletto-cli
 Mobiletto hè destinatu à esse usatu cum'è una biblioteca da un altru codice JavaScript.

 Per travaglià cù mobiletto à a linea di cummanda, utilizate [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fonte
 * [mobiletto in GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Supportu è Finanziamentu
 Aghju pruvatu à esse un sviluppatore prufessiunale di software open source. Aghju travagliatu in
 l'industria di u software per parechji anni, aghju principiatu cumpagnie di successu è li vende à cumpagnie publica.
 Recentemente aghju persu u mo travagliu, è ùn aghju micca veramente un altru travagliu in linea

 Dunque, aghju da pruvà à scrive un software utile è vede s'ellu funziona

 Se ti piace à utilizà stu software, saraghju assai ringraziatu ancu per u
 più chjucu [cuntribuzione mensuale via Patreon](https://www.patreon.com/cobbzilla)

 *Grazie!*

 ## Installazione
 Installa cù `npm` o `yarn` . Probabilmente vulete a versione `lite` " chì ùn include micca tutti i
 i file README tradotti:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Se vulete veramente i schedari README in ogni lingua, installate a versione completa:

    npm install mobiletto
    yarn add mobiletto

 ## Inizio rapidu
 Un brevi esempiu utilizendu u driver mobiletto `s3` .

 Stu codice correrà u listessu se u driver era `b2` o `local` .

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
 ## Usu di basa
 Un esempiu assai più estensivu, chì mostra a maiò parte di e caratteristiche offerte:

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
 U cumandamentu `metadata` torna metadata nantu à una sola entrata di sistema di filesystem.
 In listessu modu, u valore di ritornu da u cumandamentu `list` hè un array di oggetti di metadata.

 Un oggettu di metadata s'assumiglia cusì:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 A pruprietà `type` pò esse `file` , `dir` , `link` , o `special` .

 Sicondu u tipu di driver, un cumandamentu `list` pò micca restituverà tutti i campi. E `name` è `type`
 deve esse sempre presente. Un cumandamentu `metadata` sussegwente restituverà tutte e pruprietà dispunibili.

 ## Stile d'importazione alternativu
 Impurtà u modulu cumpletu cumpletu è utilizate a funzione `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto funziona megliu cù una cache <a href="https://redis.io">redis</a> .

 Mobiletto pruverà à cunnette à una istanza redis in 127.0.0.1:6379

 Pudete annullà unu di questi:
 * Impostate l'env var `MOBILETTO_REDIS_HOST` , mobiletto cunnetta quì invece di localhost
 * Stabilite u `MOBILETTO_REDIS_PORT` env var, stu portu serà utilizatu

 Mobiletto salvarà tutte e so chjave redis cù u prefissu `_mobiletto__` . Pudete cambià questu
 insettendu u `MOBILETTO_REDIS_PREFIX` env var.

 Pudete ancu stabilisce a cache per cunnessione cù l'ughjettu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ùn vogliu micca caching redis ?
 Per disattivà: passate `enabled: false` in u vostru ughjettu `opts.redisConfig` quandu stabilisce a vostra cunnessione.

 Comu discutitu quì sottu, disattivà a cache averà un effettu avversu nantu à u rendiment è incurrà più richieste
 à u almacenamentu chì avete veramente bisognu.

 ### Guida di caching
 **Almacenamiento criptatu**: a lettura/scrittura di u almacenamentu criptatu hè solu un pocu più lento di u normale,
 ma a navigazione intornu à i cartulari (chì alcune cose facenu) hè abbastanza caru. Utilizendu una cache redis
 vi darà un impulsu significativu di rendiment.

 A cache predeterminata hè sicura, ma ùn funziona micca bè si avete assai operazioni di scrittura / rimuzione.
 Ogni operazione di scrittura o rimozione invalida tutta a cache, assicurendu chì e letture successive vedenu u
 l'ultimi cambiamenti.

 ### Strumenti CLI
 Sè vo aduprate un strumentu CLI cum'è [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Definitivamente vulete chì a cache di redis sia attivata, postu chì dura in l'invucazioni di u cumandamentu `mo` .

 ## Mirroring

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 U cumandamentu `mirror` una copia unica di tutti i schedari da un mobiletto à l'altru.
 Ùn eseguisce nisun prucessu per mantene u specchiu cù u tempu. `mirror` di novu
 per sincronizà qualsiasi fugliali mancanti.

 U valore di ritornu da `mirror` hè un ughjettu simplice cù cuntatori per quanti schedari sò stati successu
 mirrored è quanti schedari avianu errore:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVVERTENZA: Mirroring setti grandi di dati pò esse assai tempu è intensivi in larghezza di banda

 Cù a `mirror` " pò esse cunfusu per capisce quale hè u
 lettore è quale hè u scrittore. Immaginate cum'è una dichjarazione di assignazione: u "mobiletto di manca"
 hè a cosa chì hè attribuita à (dati specchiati scritti), è u "mobiletto à destra" (u
 argumentu à u metudu `mirror` ) hè u valore chì hè assignatu (i dati specchi sò letti).

 ## Criptazione trasparente
 Abilita a criptografia trasparente di u cliente:

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

 Chì succede ? Un repertoriu separatu di "entrata di u repertoriu" (direttivu) (cifratu) traccia ciò chì i schedari sò in questu
 annuariu (aka u cartulare dirent).
 * U cumandamentu `list` leghje i fugliali di entrata di u cartulare, decripta ogni percorsu listatu; poi torna metadata per ogni schedariu
 * I cumandamenti `list` sò più inefficienti, in particulare per i cartulari cù un gran numaru di schedari
 * U cumandimu `write` scrive i fugliali dirent in u cartulare dirent di ogni genitore, recursivamente; poi scrive u schedariu
 * I cumandamenti `write` O (N) scrive, cù N = prufundità in a ghjerarchia di u cartulare
 * U cumandamentu `remove` elimina u schedariu dirent currispundente, è u so parente s'ellu hè viotu, recursivamente; poi sguassate u schedariu
 * I cumandamenti "rimuove" non-recursivi `remove` O (N) letture è potenzalmentu quant'è eliminazioni, cù N = prufundità in a ghjerarchia di u cartulare
 * I cumandamenti recursivi `remove` nantu à i sistemi di fugliali grandi è profondi ponu esse caru

 Nota chì ancu cù a criptografia di u cliente attivata, un avversariu cù visibilità cumpleta in u vostru latu di u servitore criptatu.
 almacenamiento, ancu senza a chjave, pò sempre vede u numeru tutali di cartulari è quanti schedari sò in ognunu, è cù
 qualchì sforzu, scopre una parte o tutta a struttura generale di a ghjerarchia di u repertoriu.
 * Nota: Aduprate una struttura relativamente piatta per una sicurità megliu.*
 L'avversu ùn sapia micca i nomi di i cartulari / fugliali, salvu ch'elli anu cunnisciutu ancu a vostra criptografia
 chjave o avia altrimenti crackatu cù successu a criptografia. Allora tutte e scumesse sò spente!

 ### Prestazione è cache
 L'operazioni nantu à l'almacenamiento criptatu ponu esse lente. Elenchi recursivi è rimozioni ponu esse assai lenti.
 Caching via redis aiuta tremendamente, ma nutate chì a cache hè sguassata annantu à qualsiasi scrittura o eliminazione.

 ## Rotazione di chjave
 Crea un mobiletto cù a vostra nova chjave, poi riflette i vechji dati in questu:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfaccia di driver
 Un driver hè qualsiasi fugliale JS chì esporta una funzione "storageClient" cù questa firma:

    function storageClient (key, secret, opts)

 * `key` : una stringa, a vostra chjave API (per u driver `local` questu hè u cartulare di basa)
 * `secret` : una stringa, u vostru secretu API (pò esse omessi per u driver `local` )
 * `opts` : un oggettu, e proprietà sò per driver:
 * Per `local` , e `fileMode` è `dirMode` determinanu cumu si creanu novi fugliali è cartulari di creazione
 * Per `s3` , a pruprietà `bucket` hè necessaria. Proprietà opzionali sò:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 L'ughjettu chì torna a funzione storageClient deve definisce queste funzioni:

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
 Mobiletto usa a libreria di log [winston](https://www.npmjs.com/package/winston).

 I logs **conteneranu ** percorsi di fugliali è missaghji d'errore, ma **mai** cuntenenu chjave, secreti,
 o qualsiasi altra infurmazione di cunfigurazione di cunnessione.

 ### Livellu di log
 Aduprate a variabile d'ambiente `MOBILETTO_LOG_LEVEL` per stabilisce u livellu di log, usendu unu
 di i livelli `npm` definiti in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 U livellu predeterminatu hè `error` . U livellu più verbose hè `silly` , ancu s'ellu hè attualmente mobiletto
 ùn registra micca à i livelli sottu à `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### File di log
 Per automaticamente, u logger scrive à a cunsola. Per mandà logs à un schedariu, stabilisce u `MOBILETTO_LOG_FILE`
 variabile ambientale. Quandu si accede à un schedariu, i logs ùn saranu più scritti à a cunsola.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Per disattivà u logu:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
