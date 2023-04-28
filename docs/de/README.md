Mobiletto
 =========

 Mobileto ist eine JavaScript-Speicherabstraktionsschicht mit optionaler transparenter clientseitiger Verschlüsselung.

 # Inhalt
 * [Warum Mobiletto?](#Warum-Mobiletto?)
 * [Schnellstart](#Schnellstart)
 * [Mobiletto-CLI](#mobiletto-cli)
 * [Quelle](#Quelle)
 * [Installation](#Installation)
 * [Unterstützung und Finanzierung](#Unterstützung-und-Finanzierung)
 * [Basisnutzung](#Basic-use)
 * [Metadaten](#Metadaten)
 * [Alternativer Importstil](#Alternativer-Importstil)
 * [Zwischenspeichern](#Zwischenspeichern)
 * [Spiegelung](#Spiegelung)
 * [Transparente Verschlüsselung](#Transparent-Verschlüsselung)
 * [Schlüsselrotation](#Schlüsselrotation)
 * [Treiberschnittstelle](#Driver-interface)
 * [Protokollierung](#Protokollierung)

 # Lesen Sie dies in einer anderen Sprache
 Dieses README.md-Dokument wurde über [hokeylization](https://github.com/cobbzilla/hokeylization) übersetzt in
 **[jede von Google Übersetzer unterstützte Sprache](https://cloud.google.com/translate/docs/languages)!**

 Ich bin sicher, es ist nicht perfekt, aber ich hoffe, es ist besser als nichts!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Deutsch](../de/README.md)
 [🇺🇸 Englisch](../en/README.md)
 [🇪🇸 Spanisch](../es/README.md)
 [🇫🇷 Französisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italienisch](../it/README.md)
 [🇯🇵 Japanisch](../ja/README.md)
 [🇰🇷 Koreanisch](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polnisch](../pl/README.md)
 [🇧🇷 Portugiesisch](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Suaheli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Türkisch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesisch](../vi/README.md)
 [🇨🇳 Chinesisch](../zh/README.md)


 **[📚 ... Alle Sprachen ...](../README.md)**
 ----

 ### Gibt es ein Problem mit dieser Übersetzung der README?
 Diese spezielle Übersetzung der ursprünglichen [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 kann fehlerhaft sein -- *Korrekturen sind sehr willkommen!* Bitte senden Sie eine [Pull-Anfrage auf GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 oder wenn Sie sich dabei nicht wohlfühlen, [öffnen Sie ein Problem](https://github.com/cobbzilla/mobiletto/issues)

 Wenn Sie ein neues GitHub-Problem zu einer Übersetzung erstellen, gehen Sie bitte wie folgt vor:
 * Fügen Sie die Seiten-URL hinzu (Kopieren/Einfügen aus der Adressleiste des Browsers)
 * Geben Sie genau den falschen Text ein (Kopieren/Einfügen aus dem Browser)
 * Bitte beschreiben Sie, was falsch ist -- ist die Übersetzung falsch? ist die Formatierung irgendwie kaputt?
 * Machen Sie bitte einen Vorschlag für eine bessere Übersetzung oder wie der Text richtig formatiert werden sollte
 * **Vielen Dank!**

 ## Warum Mobiletto?

 ### Auf Wiedersehen Vendor Lock-in!
 Die verschiedenen Cloud-Speicheranbieter haben inkompatible APIs. Auch die, die nach „S3-Kompatibilität“ streben
 idiosynkratische Verhaltensweisen haben.

 Wenn Sie einen bestimmten Speicheranbieter für Ihre App auswählen, wenn Sie direkt in dessen API codieren, wird Ihre App
 ist nun auf diesen Dienst angewiesen. Wenn die Zeit vergeht und sich Code ansammelt, werden wechselnde Anbieter zu einer Herausforderung
 zunehmend unhaltbar. Willkommen in der unterhaltsamen Welt des Vendor Lock-in!

 Mobiletto wurde entwickelt, um dieses Problem zu lösen. Indem Sie Ihre App in die API von Mobiletto codieren, können Sie ganz einfach
 Wechseln Sie den Speicheranbieter und wissen Sie, dass sich die Speicherebene Ihrer App identisch verhält.

 ### Umfangreiche Tests
 Alle Treiber werden mit über 60 Tests für jeden Treiber auf identisches Verhalten getestet.
 Wir testen alle Treiber mit jeder Kombination aus:
 * Verschlüsselung: sowohl aktiviert als auch deaktiviert
 * Redis-Cache: sowohl aktiviert als auch deaktiviert

 Dieser Ansatz gibt uns die Gewissheit, dass sich mobiletto unabhängig vom verwendeten Treiber gleich verhält.
 und unabhängig davon, ob Sie Caching und/oder Verschlüsselung aktivieren.

 ### Treiberunterstützung
 Aktuelle Mobiletto-Speichertreiber:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokales Dateisystem

 *Beiträge zur Unterstützung weiterer Cloud-Speicheranbieter sind sehr willkommen!*

 ##mobiletto-cli
 Mobiletto soll von anderem JavaScript-Code als Bibliothek verwendet werden.

 Um mit Mobiletto in der Befehlszeile zu arbeiten, verwenden Sie [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Quelle
 * [mobiletto auf GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto auf npm](https://www.npmjs.com/package/mobiletto)

 ## Unterstützung und Finanzierung
 Ich versuche, ein professioneller Open-Source-Softwareentwickler zu werden. Ich habe in gearbeitet
 Ich arbeite seit vielen Jahren in der Softwarebranche, habe erfolgreiche Unternehmen gegründet und an Aktiengesellschaften verkauft.
 Kürzlich habe ich meinen Job verloren, und ich habe eigentlich keine andere Arbeit vor mir

 Also werde ich versuchen, hilfreiche Software zu schreiben und sehen, ob das funktioniert

 Wenn Sie diese Software gerne verwenden, wäre ich Ihnen sehr dankbar dafür
 kleinster [monatlicher Beitrag über Patreon](https://www.patreon.com/cobbzilla)

 *Vielen Dank!*

 ## Installation
 Installieren Sie mit `npm` oder `yarn` . Sie möchten wahrscheinlich die `lite` Version, die nicht alle enthält
 übersetzte README-Dateien:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Wenn Sie die README-Dateien wirklich in jeder Sprache haben möchten, installieren Sie die Vollversion:

    npm install mobiletto
    yarn add mobiletto

 ## Schnellstart
 Ein kurzes Beispiel mit dem Mobiletto `s3` Treiber.

 Dieser Code würde genauso laufen, wenn der Treiber `b2` oder `local` .

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
 ## Grundlegende Verwendung
 Ein viel umfangreicheres Beispiel, das die meisten der angebotenen Funktionen zeigt:

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

 ## Metadaten
 Der Befehl `metadata` gibt Metadaten über einen einzelnen Dateisystemeintrag zurück.
 Ebenso ist der Rückgabewert des `list` ein Array von Metadatenobjekten.

 Ein Metadatenobjekt sieht folgendermaßen aus:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Die Eigenschaft `type` kann `file` , `dir` , `link` oder `special` .

 Je nach Treibertyp gibt ein `list` -Befehl möglicherweise nicht alle Felder zurück. Die Eigenschaften `name` und `type`
 sollte immer dabei sein. Ein nachfolgender `metadata` -Befehl gibt alle verfügbaren Eigenschaften zurück.

 ## Alternativer Importstil
 Importieren Sie das Modul mit vollem Umfang und verwenden Sie die Funktion `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Zwischenspeichern
 Mobiletto funktioniert am besten mit einem <a href="https://redis.io">Redis-</a> Cache.

 Mobiletto versucht, eine Verbindung zu einer Redis-Instanz unter 127.0.0.1:6379 herzustellen

 Sie können beides überschreiben:
 * Setzen Sie die `MOBILETTO_REDIS_HOST` -Umgebungsvariable, mobiletto, um sich hier anstelle von localhost zu verbinden
 * Legen Sie die `MOBILETTO_REDIS_PORT` , dieser Port wird verwendet

 Mobiletto speichert alle seine Redis-Schlüssel mit dem Präfix `_mobiletto__` . Sie können dies ändern
 durch Setzen der `MOBILETTO_REDIS_PREFIX` env var.

 Sie können das Caching pro Verbindung auch mit dem Objekt `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Sie möchten kein Redis-Caching?
 Deaktivieren: Übergeben Sie „ `enabled: false` “ in Ihrem `opts.redisConfig` , wenn Sie Ihre Verbindung herstellen.

 Wie unten besprochen, wirkt sich das Deaktivieren des Cachings negativ auf die Leistung aus und zieht mehr Anforderungen nach sich
 zu speichern, die Sie wirklich brauchen.

 ### Caching-Anleitung
 **Verschlüsselter Speicher**: Das Lesen/Schreiben von verschlüsseltem Speicher ist nur etwas langsamer als normal,
 aber das Navigieren in Verzeichnissen (was einige Dinge tun) ist ziemlich teuer. Verwendung eines Redis-Cache
 wird Ihnen einen deutlichen Leistungsschub geben.

 Der Standardcache ist sicher, funktioniert aber nicht gut, wenn Sie viele Schreib-/Entfernungsvorgänge haben.
 Jeder Schreib- oder Löschvorgang macht den gesamten Cache ungültig und stellt sicher, dass nachfolgende Lesevorgänge die sehen
 neuste Änderungen.

 ### CLI-Tools
 Wenn Sie ein CLI-Tool wie [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) verwenden,
 Sie möchten auf jeden Fall, dass der Redis-Cache aktiviert ist, da er über Aufrufe des `mo` Befehls hinweg bestehen bleibt.

 ## Spiegelung

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Der `mirror` -Befehl führt eine einmalige Kopie aller Dateien von einem mobiletto zu einem anderen durch.
 Es führt keinen Prozess aus, um den Spiegel im Laufe der Zeit zu warten. Führen Sie den `mirror` Befehl erneut aus
 fehlende Dateien zu synchronisieren.

 Der Rückgabewert von `mirror` ist ein einfaches Objekt mit Zählern dafür, wie viele Dateien erfolgreich waren
 gespiegelt und wie viele Dateien hatten Fehler:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 WARNUNG: Das Spiegeln großer Datensätze kann sehr zeitaufwändig und bandbreitenintensiv sein

 Bei der `mirror` kann es manchmal verwirrend sein, zu verstehen, wer das ist
 Leser und wer der Autor ist. Stellen Sie es sich wie eine Auftragsbestätigung vor: das „linke Mobiletto“
 ist das zugewiesene Ding (gespiegelte Daten geschrieben) und das "rechte Mobiletto" (das
 Argument für die `mirror` Methode) ist der zugewiesene Wert (gespiegelte Daten werden gelesen).

 ## Transparente Verschlüsselung
 Transparente clientseitige Verschlüsselung aktivieren:

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

 Was ist los? Ein separater "Verzeichniseintrag" (dirent) Verzeichnis (verschlüsselt) verfolgt, welche Dateien sich darin befinden
 Verzeichnis (auch bekannt als dirent-Verzeichnis).
 * Der `list` Befehl liest die Verzeichniseintragsdateien, entschlüsselt jeden aufgelisteten Pfad; gibt dann Metadaten für jede Datei zurück
 * `list` Befehle sind ineffizienter, besonders für Verzeichnisse mit einer großen Anzahl von Dateien
 * Der `write` Befehl schreibt dirent-Dateien rekursiv in das dirent-Verzeichnis jedes Elternteils; schreibt dann die Datei
 * `write` -Befehle verursachen O(N) Schreibvorgänge, wobei N = Tiefe in der Verzeichnishierarchie ist
 * Der `remove` Befehl entfernt rekursiv die entsprechende Dirent-Datei und ihre Elterndatei, falls diese leer ist; entfernt dann die Datei
 * Nicht-rekursive `remove` -Befehle verursachen O(N) Lesevorgänge und möglicherweise ebenso viele Löschvorgänge, wobei N = Tiefe in der Verzeichnishierarchie ist
 * Rekursive `remove` Befehle auf großen und tiefen Dateisystemen können teuer werden

 Beachten Sie, dass selbst bei aktivierter clientseitiger Verschlüsselung ein Gegner mit vollständiger Einsicht in Ihre verschlüsselte Serverseite vorhanden ist
 Speicher, auch ohne den Schlüssel, kann immer noch die Gesamtzahl der Verzeichnisse sehen und wie viele Dateien sich in jedem befinden, und mit
 einige Mühe, entdecken Sie einige oder alle der Gesamtstruktur der Verzeichnishierarchie.
 *Hinweis: Verwenden Sie für mehr Sicherheit eine relativ flache Struktur.*
 Der Angreifer würde die Namen der Verzeichnisse/Dateien nicht kennen, es sei denn, er wüsste auch Ihre Verschlüsselung
 oder die Verschlüsselung auf andere Weise erfolgreich geknackt hatte. Dann sind alle Wetten abgeschlossen!

 ### Leistung und Caching
 Vorgänge auf verschlüsseltem Speicher können langsam sein. Rekursive Auflistungen und Entfernungen können sehr langsam sein.
 Das Caching über Redis hilft enorm, aber beachten Sie, dass der Cache bei jedem Schreiben oder Entfernen geleert wird.

 ## Schlüsselrotation
 Erstellen Sie ein Mobiletto mit Ihrem neuen Schlüssel und spiegeln Sie dann die alten Daten hinein:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Treiberschnittstelle
 Ein Treiber ist eine beliebige JS-Datei, die eine „storageClient“-Funktion mit dieser Signatur exportiert:

    function storageClient (key, secret, opts)

 * `key` : eine Zeichenfolge, Ihr API-Schlüssel (für den `local` Treiber ist dies das Basisverzeichnis)
 * `secret` : ein String, Ihr API-Secret (kann für den `local` Treiber weggelassen werden)
 * `opts` : ein Objekt, die Eigenschaften sind pro Treiber:
 * Für „local“ bestimmen die Eigenschaften `fileMode` `local` `dirMode` , wie neu erstellte Dateien und Verzeichnisse erstellt werden
 * Für `s3` ist die Eigenschaft `bucket` erforderlich. Optionale Eigenschaften sind:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Das Objekt, das die Funktion storageClient zurückgibt, muss diese Funktionen definieren:

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

 ## Protokollierung
 Mobiletto verwendet die Protokollierungsbibliothek [winston](https://www.npmjs.com/package/winston).

 Protokolle **enthalten** Dateipfade und Fehlermeldungen, enthalten aber **niemals** Schlüssel, Geheimnisse,
 oder andere Informationen zur Verbindungskonfiguration.

 ### Protokollebene
 Verwenden Sie die Umgebungsvariable `MOBILETTO_LOG_LEVEL` , um die Protokollebene festzulegen, indem Sie eins verwenden
 der `npm` Ebenen, die in [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) definiert sind

 Die Standardstufe ist `error` . Die ausführlichste Stufe ist `silly` , obwohl derzeit mobiletto
 protokolliert nicht auf Ebenen unterhalb `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logdatei
 Standardmäßig schreibt der Logger in die Konsole. Um Protokolle an eine Datei zu senden, setzen Sie die `MOBILETTO_LOG_FILE`
 Umgebungsvariable. Beim Protokollieren in eine Datei werden keine Protokolle mehr in die Konsole geschrieben.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 So deaktivieren Sie die Protokollierung:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
