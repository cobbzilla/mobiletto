Mobiletto
 =========

 Mobiletto è un livello di astrazione dello storage JavaScript, con crittografia lato client trasparente opzionale.

 # Contenuti
 * [Perché Mobiletto?](#Perché-Mobiletto?)
 * [Avvio rapido](#Avvio rapido)
 * [CLI Mobiletto](#mobiletto-cli)
 * [Fonte](#Fonte)
 * [Installazione](#Installazione)
 * [Supporto e finanziamento](#Supporto e finanziamento)
 * [Utilizzo di base](#Utilizzo di base)
 * [Metadati](#Metadati)
 * [Stile di importazione alternativo](#Stile di importazione alternativo)
 * [Memorizzazione nella cache](#Memorizzazione nella cache)
 * [Mirroring](#Mirroring)
 * [Crittografia trasparente](#Crittografia trasparente)
 * [Rotazione chiave](#Rotazione chiave)
 * [Interfaccia del driver](#Interfaccia del driver)
 * [Registrazione](#Registrazione)

 # Leggi questo in un'altra lingua
 Questo documento README.md è stato tradotto, tramite [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[ogni lingua supportata da Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sono certa che non sia perfetto, ma spero sia meglio di niente!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 Inglese](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiano](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte le lingue ...](../README.md)**
 ----

 ### C'è un problema con questa traduzione del README?
 Questa particolare traduzione dell'originale [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 potrebbe essere difettoso -- *le correzioni sono molto gradite!* Si prega di inviare una [richiesta pull su GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o se non ti senti a tuo agio nel farlo, [apri un problema](https://github.com/cobbzilla/mobiletto/issues)

 Quando crei un nuovo problema GitHub su una traduzione, esegui:
 * includi l'URL della pagina (copia/incolla dalla barra degli indirizzi del browser)
 * includi il testo esatto che è sbagliato (copia/incolla dal browser)
 * per favore descrivi cosa c'è che non va -- la traduzione è errata? la formattazione è rotta in qualche modo?
 * offrire gentilmente un suggerimento per una traduzione migliore o come formattare correttamente il testo
 * **Grazie!**

 ## Perché Mobiletto?

 ### Addio blocco del venditore!
 I vari provider di archiviazione cloud hanno API incompatibili. Anche quelli che lottano per la "compatibilità S3"
 avere comportamenti idiosincratici.

 Quando scegli un particolare fornitore di storage per la tua app, se codifichi direttamente la sua API, la tua app
 ora dipende da quel servizio. Col passare del tempo e il codice si accumula, cambiano i fornitori
 sempre più insostenibile. Benvenuto nel divertente mondo del blocco dei fornitori!

 Mobiletto è stato progettato per risolvere questo problema. Codificando la tua app sull'API di mobiletto, puoi facilmente
 cambia provider di archiviazione e sappi che il livello di archiviazione della tua app si comporterà in modo identico.

 ### Test approfonditi
 Tutti i driver vengono testati per il comportamento identico con oltre 60 test per ciascun pilota.
 Testiamo tutti i driver con ogni combinazione di:
 * Crittografia: sia abilitata che disabilitata
 * Cache Redis: sia abilitato che disabilitato

 Questo approccio ci dà la tranquillità che mobiletto si comporterà allo stesso modo indipendentemente dal driver utilizzato,
 e indipendentemente dal fatto che tu abiliti la memorizzazione nella cache e/o la crittografia.

 ### Supporto per i driver
 Driver di archiviazione Mobiletto attuali:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : filesystem locale

 *I contributi per supportare più fornitori di servizi di archiviazione cloud sono molto graditi!*

 ## mobiletto-cli
 Mobiletto è concepito per essere utilizzato come libreria da altro codice JavaScript.

 Per lavorare con mobiletto dalla riga di comando, usa [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fonte
 * [mobiletto su GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto su npm](https://www.npmjs.com/package/mobiletto)

 ## Supporto e finanziamento
 Sto cercando di essere uno sviluppatore di software open source professionista. Ci ho lavorato
 nell'industria del software per molti anni, ho avviato società di successo e le ho vendute a società pubbliche.
 Recentemente ho perso il lavoro, e non ho altro in programma

 Quindi proverò a scrivere un software utile e vedere se funziona

 Se ti piace usare questo software, ti sarei molto grato anche per il
 il più piccolo [contributo mensile tramite Patreon](https://www.patreon.com/cobbzilla)

 *Grazie!*

 ## Installazione
 Installa usando `npm` o `yarn` . Probabilmente vuoi la versione `lite` che non include tutti i file
 file README tradotti:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Se vuoi davvero i file README in ogni lingua, installa la versione completa:

    npm install mobiletto
    yarn add mobiletto

 ## Avvio veloce
 Un breve esempio usando il driver mobiletto `s3` .

 Questo codice funzionerebbe allo stesso modo se il driver fosse `b2` o `local` .

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
 ## Utilizzo di base
 Un esempio molto più ampio, che mostra la maggior parte delle funzionalità offerte:

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
 Il comando `metadata` restituisce i metadati su una singola voce del filesystem.
 Allo stesso modo, il valore restituito dal comando `list` è un array di oggetti di metadati.

 Un oggetto di metadati ha il seguente aspetto:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 La proprietà `type` type` può essere `file` , `dir` , `link` o `special` .

 A seconda del tipo di driver, un comando `list` potrebbe non restituire tutti i campi. Le proprietà `name` e `type`
 dovrebbe essere sempre presente. Un successivo comando `metadata` restituirà tutte le proprietà disponibili.

 ## Stile di importazione alternativo
 Importa il modulo con ambito completo e usa la funzione `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Memorizzazione nella cache
 Mobiletto funziona meglio con una cache <a href="https://redis.io">redis</a> .

 Mobiletto tenterà di connettersi a un'istanza redis su 127.0.0.1:6379

 Puoi sovrascrivere uno di questi:
 * Impostare `MOBILETTO_REDIS_HOST` env var, mobiletto connect qui invece di localhost
 * Imposta la `MOBILETTO_REDIS_PORT` env var, questa porta verrà utilizzata

 Mobiletto memorizzerà tutte le sue chiavi redis con il prefisso `_mobiletto__` . Puoi cambiarlo
 impostando il `MOBILETTO_REDIS_PREFIX` env var.

 Puoi anche impostare la memorizzazione nella cache per connessione con l'oggetto `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Non vuoi redis memorizzare nella cache?
 Per disabilitare: passa `enabled: false` nel tuo oggetto `opts.redisConfig` quando stabilisci la connessione.

 Come discusso di seguito, la disabilitazione della memorizzazione nella cache avrà un effetto negativo sulle prestazioni e comporterà più richieste
 allo spazio di archiviazione di cui hai davvero bisogno.

 ### Guida alla memorizzazione nella cache
 **Archiviazione crittografata**: la lettura/scrittura dello spazio di archiviazione crittografato è solo leggermente più lenta del normale,
 ma navigare nelle directory (cosa che fanno alcune cose) è piuttosto costoso. Utilizzo di una cache redis
 ti darà un notevole aumento delle prestazioni.

 La cache predefinita è sicura, ma non funziona bene se hai molte operazioni di scrittura/rimozione.
 Qualsiasi operazione di scrittura o rimozione invalida l'intera cache, assicurando che le letture successive vedranno il file
 ultime modifiche.

 ### Strumenti dell'interfaccia a riga di comando
 Se stai utilizzando uno strumento CLI come [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 vorrai sicuramente abilitare la cache redis, poiché dura durante le invocazioni del comando `mo` .

 ## Specchio

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Il comando `mirror` esegue una copia unica di tutti i file da un mobiletto all'altro.
 Non esegue alcun processo per mantenere lo specchio nel tempo. Esegui di nuovo il comando `mirror`
 per sincronizzare eventuali file mancanti.

 Il valore restituito da `mirror` è un semplice oggetto con contatori di quanti file sono stati eseguiti correttamente
 con mirroring e quanti file hanno avuto errori:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVVISO: il mirroring di set di dati di grandi dimensioni può richiedere molto tempo e la larghezza di banda

 Con la semantica della chiamata `mirror` a volte può essere fonte di confusione capire chi è il
 lettore e chi è lo scrittore. Immaginalo come una dichiarazione di assegnazione: il "mobiletto di sinistra"
 è la cosa a cui si assegna (scrittura dei dati speculari), e il "mobiletto di destra" (il
 argomento del metodo `mirror` ) è il valore assegnato (i dati speculari vengono letti).

 ## Crittografia trasparente
 Abilita la crittografia lato client trasparente:

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

 Cosa sta succedendo? Una directory separata "voce di directory" (direct) (crittografata) tiene traccia dei file in essa contenuti
 directory (ovvero la directory diretta).
 * Il comando `list` legge i file di ingresso della directory, decrittografa ogni percorso elencato; quindi restituisce i metadati per ogni file
 * I comandi `list` sono più inefficienti, specialmente per le directory con un gran numero di file
 * Il comando `write` scrive i file diretti nella directory diretta di ciascun genitore, in modo ricorsivo; quindi scrive il file
 * I comandi `write` comporteranno O(N) scritture, con N = profondità nella gerarchia delle directory
 * Il comando `remove` rimuove il file diretto corrispondente e il suo genitore, se vuoto, in modo ricorsivo; quindi rimuove il file
 * I comandi `remove` non ricorsivi comporteranno O(N) letture e potenzialmente altrettante eliminazioni, con N = profondità nella gerarchia delle directory
 * I comandi ricorsivi `remove` su filesystem grandi e profondi possono essere costosi

 Tieni presente che anche con la crittografia lato client abilitata, un avversario con piena visibilità sul lato server crittografato
 l'archiviazione, anche senza la chiave, può ancora vedere il numero totale di directory e quanti file ci sono in ciascuna e con
 qualche sforzo, scoprire parte o tutta la struttura generale della gerarchia di directory.
 *Nota: utilizzare una struttura relativamente piatta per una maggiore sicurezza.*
 L'avversario non conoscerebbe i nomi delle directory/file a meno che non conoscesse anche la tua crittografia
 chiave o altrimenti ha violato con successo la crittografia. Allora tutte le scommesse sono finite!

 ### Prestazioni e memorizzazione nella cache
 Le operazioni sull'archiviazione crittografata possono essere lente. Le inserzioni e le rimozioni ricorsive possono essere molto lente.
 La memorizzazione nella cache tramite redis aiuta enormemente, ma tieni presente che la cache viene svuotata in caso di scrittura o rimozione.

 ## Rotazione chiave
 Crea un mobiletto con la tua nuova chiave, quindi rispecchia i vecchi dati al suo interno:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfaccia del driver
 Un driver è qualsiasi file JS che esporta una funzione 'storageClient' con questa firma:

    function storageClient (key, secret, opts)

 * `key` : una stringa, la tua chiave API (per il driver `local` questa è la directory di base)
 * `secret` : una stringa, il tuo segreto API (può essere omesso per il driver `local` )
 * `opts` : un oggetto, le proprietà sono per driver:
 * Per `local` , le `fileMode` e `dirMode` determinano come vengono creati i nuovi file e directory di creazione
 * Per `s3` è richiesta la proprietà `bucket` . Le proprietà opzionali sono:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 L'oggetto restituito dalla funzione storageClient deve definire queste funzioni:

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

 ## Registrazione
 Mobiletto utilizza la libreria di registrazione [winston](https://www.npmjs.com/package/winston).

 I registri **conterranno** percorsi di file e messaggi di errore, ma **non conterranno mai** chiavi, segreti,
 o qualsiasi altra informazione sulla configurazione della connessione.

 ### Livello di registro
 Usa la variabile d'ambiente `MOBILETTO_LOG_LEVEL` per impostare il livello di log, usandone uno
 dei livelli `npm` definiti in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Il livello predefinito è `error` . Il livello più dettagliato è `silly` , sebbene attualmente mobiletto
 non registra a livelli inferiori a `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### File di registro
 Per impostazione predefinita, il logger scrive sulla console. Per inviare i log a un file, impostare il `MOBILETTO_LOG_FILE`
 variabile d'ambiente. Quando si accede a un file, i registri non verranno più scritti nella console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Per disattivare la registrazione:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
