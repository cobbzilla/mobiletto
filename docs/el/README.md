Mobiletto
 =========

 Το Mobiletto είναι ένα στρώμα αφαίρεσης αποθήκευσης JavaScript, με προαιρετική διαφανή κρυπτογράφηση από την πλευρά του πελάτη.

 # Περιεχόμενα
 * [Γιατί Mobiletto;](#Why-Mobiletto;)
 * [Γρήγορη εκκίνηση](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Πηγή](#Πηγή)
 * [Εγκατάσταση](#Εγκατάσταση)
 * [Υποστήριξη και Χρηματοδότηση](#Support-and-Funding)
 * [Βασική χρήση](#Βασική χρήση)
 * [Μεταδεδομένα](#Μεταδεδομένα)
 * [Εναλλακτικό στυλ εισαγωγής](#Alternate-import-style)
 * [Αποθήκευση στην κρυφή μνήμη](#Caching)
 * [Mirroring](#Mirroring)
 * [Διαφανής κρυπτογράφηση](#Transparent-encryption)
 * [Περιστροφή κλειδιού](#Κλειδιά περιστροφή)
 * [Διεπαφή προγράμματος οδήγησης](#Διασύνδεση προγράμματος οδήγησης)
 * [Καταγραφή](#Καταγραφή)

 # Διαβάστε αυτό σε άλλη γλώσσα
 Αυτό το έγγραφο README.md έχει μεταφραστεί, μέσω [hokeylization](https://github.com/cobbzilla/hokeylization), σε
 **[κάθε γλώσσα που υποστηρίζεται από τη Μετάφραση Google](https://cloud.google.com/translate/docs/languages)!**

 Είμαι σίγουρος ότι δεν είναι τέλειο, αλλά ελπίζω να είναι καλύτερο από το τίποτα!

 [🇸🇦 Αραβικά](../ar/README.md)
 [🇧🇩 Μπενγκάλι](../bn/README.md)
 [🇩🇪 Γερμανικά](../de/README.md)
 [🇺🇸 Αγγλικά](../en/README.md)
 [🇪🇸 Ισπανικά](../es/README.md)
 [🇫🇷 Γαλλικά](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Χίντι](../hi/README.md)
 [🇮🇩 Ινδονησιακά](../id/README.md)
 [🇮🇹 Ιταλικά](../it/README.md)
 [🇯🇵 Ιαπωνικά](../ja/README.md)
 [🇰🇷 Κορεάτικα](../ko/README.md)
 [🇮🇳 Μαράνθη](../mr/README.md)
 [🇵🇱 Πολωνικά](../pl/README.md)
 [🇧🇷 Πορτογαλικά](../pt/README.md)
 [🇷🇺 Ρωσικά](../ru/README.md)
 [🇰🇪 Σουαχίλι](../sw/README.md)
 [🇵🇭 Ταγκαλόγκ](../tl/README.md)
 [🇹🇷 Τουρκικά](../tr/README.md)
 [🇵🇰 Ουρντού](../ur/README.md)
 [🇻🇳 Βιετναμέζικα](../vi/README.md)
 [🇨🇳 Κινέζικα](../zh/README.md)


 **[📚 ... Όλες οι γλώσσες ...](../README.md)**
 ----

 ### Υπάρχει πρόβλημα με αυτή τη μετάφραση του README;
 Αυτή η συγκεκριμένη μετάφραση του πρωτότυπου [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 μπορεί να είναι ελαττωματικά -- *οι διορθώσεις είναι πολύ ευπρόσδεκτες!* Στείλτε ένα [αίτημα έλξης στο GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ή αν δεν αισθάνεστε άνετα να το κάνετε, [ανοίξτε ένα θέμα](https://github.com/cobbzilla/mobiletto/issues)

 Όταν δημιουργείτε ένα νέο ζήτημα GitHub σχετικά με μια μετάφραση, κάντε τα εξής:
 * συμπεριλάβετε τη διεύθυνση URL της σελίδας (αντιγραφή/επικόλληση από τη γραμμή διευθύνσεων του προγράμματος περιήγησης)
 * συμπεριλάβετε το ακριβές κείμενο που είναι λάθος (αντιγραφή/επικόλληση από το πρόγραμμα περιήγησης)
 * παρακαλώ περιγράψτε τι είναι λάθος -- είναι λάθος η μετάφραση; είναι κάπως χαλασμένη η μορφοποίηση;
 * Προσφέρετε ευγενικά μια πρόταση για καλύτερη μετάφραση ή πώς το κείμενο πρέπει να μορφοποιηθεί σωστά
 * **Ευχαριστώ!**

 ## Γιατί Mobiletto;

 ### Αντίο κλείδωμα πωλητή!
 Οι διάφοροι πάροχοι αποθήκευσης cloud έχουν μη συμβατά API. Ακόμη και εκείνοι που προσπαθούν για "συμβατότητα S3"
 έχουν ιδιοσυγκρασιακές συμπεριφορές.

 Όταν επιλέγετε έναν συγκεκριμένο προμηθευτή αποθήκευσης για την εφαρμογή σας, εάν κωδικοποιήσετε απευθείας στο API του, την εφαρμογή σας
 εξαρτάται πλέον από αυτήν την υπηρεσία. Καθώς περνά ο καιρός και συσσωρεύεται κώδικας, αλλάζουν προμηθευτές
 όλο και πιο αβάσιμος. Καλώς ήλθατε στον διασκεδαστικό κόσμο του προμηθευτή lock-in!

 Το Mobiletto σχεδιάστηκε για να λύσει αυτό το πρόβλημα. Κωδικοποιώντας την εφαρμογή σας στο API του mobiletto, μπορείτε εύκολα
 αλλάξτε παρόχους αποθήκευσης και γνωρίζετε ότι το επίπεδο αποθήκευσης της εφαρμογής σας θα συμπεριφέρεται πανομοιότυπα.

 ### Εκτεταμένες δοκιμές
 Όλοι οι οδηγοί ελέγχονται για την ίδια συμπεριφορά με 60+ δοκιμές για κάθε οδηγό.
 Δοκιμάζουμε όλους τους οδηγούς με κάθε συνδυασμό:
 * Κρυπτογράφηση: τόσο ενεργοποιημένη όσο και απενεργοποιημένη
 * Redis cache: τόσο ενεργοποιημένη όσο και απενεργοποιημένη

 Αυτή η προσέγγιση μας δίνει ήσυχο ότι το mobiletto θα συμπεριφέρεται το ίδιο ανεξάρτητα από το πρόγραμμα οδήγησης που χρησιμοποιείτε,
 και ανεξάρτητα από το αν ενεργοποιείτε την προσωρινή αποθήκευση ή/και την κρυπτογράφηση.

 ### Υποστήριξη προγραμμάτων οδήγησης
 Τρέχοντα προγράμματα οδήγησης αποθήκευσης Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` τοπικό» : τοπικό σύστημα αρχείων

 *Οι συνεισφορές για την υποστήριξη περισσότερων παρόχων αποθήκευσης cloud είναι πολύ ευπρόσδεκτες!*

 ## mobiletto-cli
 Το Mobiletto προορίζεται να χρησιμοποιηθεί ως βιβλιοθήκη από άλλο κώδικα JavaScript.

 Για να εργαστείτε με το mobiletto στη γραμμή εντολών, χρησιμοποιήστε το [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Πηγή
 * [mobiletto στο GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto σε npm](https://www.npmjs.com/package/mobiletto)

 ## Υποστήριξη και Χρηματοδότηση
 Προσπαθώ να γίνω επαγγελματίας προγραμματιστής λογισμικού ανοιχτού κώδικα. Έχω εργαστεί σε
 στη βιομηχανία λογισμικού εδώ και πολλά χρόνια, έχω ξεκινήσει επιτυχημένες εταιρείες και τις πούλησα σε δημόσιες εταιρείες.
 Πρόσφατα έχασα τη δουλειά μου και δεν έχω καμία άλλη δουλειά στη σειρά

 Θα προσπαθήσω λοιπόν να γράψω χρήσιμο λογισμικό και να δω αν λειτουργεί

 Εάν σας αρέσει να χρησιμοποιείτε αυτό το λογισμικό, θα σας ήμουν πολύ ευγνώμων ακόμη και για το
 μικρότερη [μηνιαία συνεισφορά μέσω Patreon](https://www.patreon.com/cobbzilla)

 *Ευχαριστώ!*

 ## Εγκατάσταση
 Εγκαταστήστε χρησιμοποιώντας `npm` » ή `yarn` . Πιθανότατα θέλετε την `lite` έκδοση που δεν περιλαμβάνει όλα τα
 μεταφρασμένα αρχεία README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Εάν θέλετε πραγματικά τα αρχεία README σε κάθε γλώσσα, εγκαταστήστε την πλήρη έκδοση:

    npm install mobiletto
    yarn add mobiletto

 ## Γρήγορη εκίνηση
 Ένα σύντομο παράδειγμα χρήσης του προγράμματος οδήγησης mobiletto `s3` .

 Αυτός ο κωδικός θα εκτελούσε το ίδιο εάν το πρόγραμμα οδήγησης ήταν `b2` ή "τοπικό `local` .

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
 ## Βασική χρήση
 Ένα πολύ πιο εκτενές παράδειγμα, που δείχνει τις περισσότερες από τις δυνατότητες που προσφέρονται:

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

 ## Μεταδεδομένα
 Η εντολή `metadata` επιστρέφει μεταδεδομένα για μια μεμονωμένη καταχώρηση συστήματος αρχείων.
 Ομοίως, η επιστρεφόμενη τιμή από την εντολή `list` είναι ένας πίνακας αντικειμένων μεταδεδομένων.

 Ένα αντικείμενο μεταδεδομένων μοιάζει με αυτό:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Η ιδιότητα " `type` " μπορεί να είναι `file` " , `dir` " , `link` " ή `special` .

 Ανάλογα με τον τύπο του προγράμματος οδήγησης, μια εντολή `list` ενδέχεται να μην επιστρέψει όλα τα πεδία. Οι `name` και `type`
 πρέπει να είναι πάντα παρόν. Μια επόμενη εντολή `metadata` θα επιστρέψει όλες τις διαθέσιμες ιδιότητες.

 ## Εναλλακτικό στυλ εισαγωγής
 Εισαγάγετε τη μονάδα πλήρους εμβέλειας και χρησιμοποιήστε τη λειτουργία `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Προσωρινή αποθήκευση
 Το Mobiletto λειτουργεί καλύτερα με μια προσωρινή μνήμη <a href="https://redis.io">redis</a> .

 Το Mobiletto θα επιχειρήσει να συνδεθεί σε μια παρουσία redis στο 127.0.0.1:6379

 Μπορείτε να παρακάμψετε οποιοδήποτε από αυτά:
 * Ρυθμίστε το `MOBILETTO_REDIS_HOST` env var, mobile για να συνδεθείτε εδώ αντί για localhost
 * Ορίστε το `MOBILETTO_REDIS_PORT` env var, αυτή η θύρα θα χρησιμοποιηθεί

 Το Mobiletto θα αποθηκεύσει όλα τα κλειδιά του redis με το πρόθεμα `_mobiletto__` . Μπορείτε να το αλλάξετε αυτό
 ορίζοντας την `MOBILETTO_REDIS_PREFIX`

 Μπορείτε επίσης να ορίσετε την προσωρινή αποθήκευση ανά σύνδεση με το αντικείμενο `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Δεν θέλετε προσωρινή αποθήκευση redis;
 Για να απενεργοποιήσετε: περάστε `enabled: false` » στο αντικείμενο `opts.redisConfig` όταν δημιουργείτε τη σύνδεσή σας.

 Όπως συζητείται παρακάτω, η απενεργοποίηση της προσωρινής αποθήκευσης θα έχει αρνητικές επιπτώσεις στην απόδοση και θα προκαλέσει περισσότερα αιτήματα
 στον χώρο αποθήκευσης που πραγματικά χρειάζεστε.

 ### Καθοδήγηση προσωρινής αποθήκευσης
 **Κρυπτογραφημένη αποθήκευση**: η ανάγνωση/εγγραφή κρυπτογραφημένης αποθήκευσης είναι μόνο λίγο πιο αργή από το κανονικό,
 αλλά η πλοήγηση στους καταλόγους (κάτι που κάνουν ορισμένα πράγματα) είναι αρκετά ακριβή. Χρήση προσωρινής μνήμης redis
 θα σας δώσει σημαντική ώθηση στην απόδοση.

 Η προεπιλεγμένη προσωρινή μνήμη είναι ασφαλής, αλλά δεν έχει καλή απόδοση εάν έχετε πολλές λειτουργίες εγγραφής/αφαίρεσης.
 Οποιαδήποτε λειτουργία εγγραφής ή αφαίρεσης ακυρώνει ολόκληρη την κρυφή μνήμη, διασφαλίζοντας ότι οι επόμενες αναγνώσεις θα εμφανιστούν
 τελευταίες αλλαγές.

 ### Εργαλεία CLI
 Εάν χρησιμοποιείτε ένα εργαλείο CLI όπως το [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 σίγουρα θα θέλετε να είναι ενεργοποιημένη η προσωρινή μνήμη `mo` .

 ## Καθρέφτης

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Η εντολή `mirror` εκτελεί μια εφάπαξ αντιγραφή όλων των αρχείων από το ένα κινητό στο άλλο.
 Δεν εκτελεί καμία διαδικασία για τη διατήρηση του καθρέφτη με την πάροδο του χρόνου. Εκτελέστε ξανά την εντολή `mirror`
 για να συγχρονίσετε τυχόν αρχεία που λείπουν.

 Η επιστρεφόμενη τιμή από το `mirror` είναι ένα απλό αντικείμενο με μετρητές για το πόσα αρχεία ήταν επιτυχώς
 mirrored και πόσα αρχεία είχαν σφάλματα:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Η αντιστοίχιση μεγάλων συνόλων δεδομένων μπορεί να είναι πολύ χρονοβόρα και εντατική σε εύρος ζώνης

 Με τη σημασιολογία της ονομασίας `mirror` , μπορεί μερικές φορές να προκαλεί σύγχυση η κατανόηση του ποιος είναι
 αναγνώστης και ποιος είναι ο συγγραφέας. Φανταστείτε το σαν μια δήλωση ανάθεσης: το "αριστερό κινητό"
 είναι το πράγμα στο οποίο εκχωρείται (τα δεδομένα αντικατοπτρίζονται γραμμένα) και το "δεξιό κινητό" (το
 όρισμα στη μέθοδο `mirror` mirror») είναι η τιμή που εκχωρείται (διαβάζονται τα κατοπτρισμένα δεδομένα).

 ## Διαφανής κρυπτογράφηση
 Ενεργοποίηση διαφανούς κρυπτογράφησης από την πλευρά του πελάτη:

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

 Τι συμβαίνει? Ένας ξεχωριστός κατάλογος "καταχώρησης καταλόγου" (dirent) (κρυπτογραφημένος) παρακολουθεί ποια αρχεία υπάρχουν σε αυτόν
 κατάλογος (γνωστός και ως ο dirent directory).
 * Η εντολή `list` διαβάζει τα αρχεία καταχώρισης καταλόγου, αποκρυπτογραφεί κάθε διαδρομή που παρατίθεται. στη συνέχεια επιστρέφει μεταδεδομένα για κάθε αρχείο
 * Οι εντολές `list` είναι πιο αναποτελεσματικές, ειδικά για καταλόγους με μεγάλο αριθμό αρχείων
 * Η εντολή `write` εγγράφει αρχεία dirent στον κατάλογο dirent κάθε γονέα, αναδρομικά. στη συνέχεια γράφει το αρχείο
 * Οι εντολές `write` θα επιφέρουν εγγραφές O(N), με N = βάθος στην ιεραρχία του καταλόγου
 * Η εντολή "remove" αφαιρεί το αντίστοιχο αρχείο `remove` και το γονικό του αρχείο εάν είναι κενό, αναδρομικά. στη συνέχεια αφαιρεί το αρχείο
 * Οι μη αναδρομικές εντολές `remove` θα επιφέρουν αναγνώσεις O(N) και πιθανώς τόσες διαγραφές, με N = βάθος στην ιεραρχία καταλόγου
 * Οι αναδρομικές εντολές `remove` σε μεγάλα και βαθιά συστήματα αρχείων μπορεί να είναι ακριβές

 Σημειώστε ότι ακόμη και με ενεργοποιημένη την κρυπτογράφηση από την πλευρά του πελάτη, ένας αντίπαλος με πλήρη ορατότητα στον κρυπτογραφημένο διακομιστή σας
 Η αποθήκευση, ακόμη και χωρίς το κλειδί, μπορεί να δει τον συνολικό αριθμό καταλόγων και πόσα αρχεία υπάρχουν σε καθένα και με
 κάποια προσπάθεια, ανακαλύψτε μέρος ή όλη τη συνολική δομή της ιεραρχίας καταλόγου.
 *Σημείωση: Χρησιμοποιήστε μια σχετικά επίπεδη δομή για καλύτερη ασφάλεια.*
 Ο αντίπαλος δεν θα γνώριζε τα ονόματα των καταλόγων/αρχείων εκτός και αν γνώριζε και την κρυπτογράφηση σας
 κλειδί ή είχε με άλλο τρόπο σπάσει με επιτυχία την κρυπτογράφηση. Όλα τα στοιχήματα είναι μακριά τότε!

 ### Απόδοση και προσωρινή αποθήκευση
 Οι λειτουργίες σε κρυπτογραφημένη αποθήκευση μπορεί να είναι αργές. Οι επαναλαμβανόμενες καταχωρίσεις και αφαιρέσεις μπορεί να είναι πολύ αργές.
 Η προσωρινή αποθήκευση μέσω του redis βοηθάει πάρα πολύ, αλλά σημειώστε ότι η προσωρινή μνήμη ξεπλένεται μετά από κάθε εγγραφή ή αφαίρεση.

 ## Περιστροφή κλειδιού
 Δημιουργήστε ένα mobiletto με το νέο σας κλειδί και, στη συνέχεια, αντικατοπτρίστε τα παλιά δεδομένα σε αυτό:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Διεπαφή προγράμματος οδήγησης
 Πρόγραμμα οδήγησης είναι οποιοδήποτε αρχείο JS που εξάγει μια συνάρτηση "storageClient" με αυτήν την υπογραφή:

    function storageClient (key, secret, opts)

 * `key` : μια συμβολοσειρά, το κλειδί API σας (για το πρόγραμμα οδήγησης `local` αυτός είναι ο βασικός κατάλογος)
 * `secret` : μια συμβολοσειρά, το μυστικό API σας (μπορεί να παραλειφθεί για το πρόγραμμα οδήγησης `local` )
 * `opts` : ένα αντικείμενο, οι ιδιότητες είναι ανά πρόγραμμα οδήγησης:
 * Για το `fileMode` `local` και `dirMode` καθορίζουν τον τρόπο δημιουργίας νέων αρχείων και καταλόγων
 * Για το `s3` , απαιτείται η ιδιότητα `bucket` . Προαιρετικές ιδιότητες είναι:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Το αντικείμενο που επιστρέφει η συνάρτηση storageClient πρέπει να ορίζει αυτές τις συναρτήσεις:

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

 ## Καταγραφή
 Το Mobiletto χρησιμοποιεί τη βιβλιοθήκη καταγραφής [winston](https://www.npmjs.com/package/winston).

 Τα αρχεία καταγραφής **θα** περιέχουν διαδρομές αρχείων και μηνύματα σφάλματος, αλλά **ποτέ** δεν θα περιέχουν κλειδιά, μυστικά,
 ή οποιαδήποτε άλλη πληροφορία διαμόρφωσης σύνδεσης.

 ### Επίπεδο καταγραφής
 Χρησιμοποιήστε τη μεταβλητή περιβάλλοντος `MOBILETTO_LOG_LEVEL` για να ορίσετε το επίπεδο καταγραφής, χρησιμοποιώντας ένα
 των επιπέδων `npm` που ορίζονται στο [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Το προεπιλεγμένο επίπεδο είναι `error` . Το πιο περίπλοκο επίπεδο είναι `silly` , αν και αυτή τη στιγμή είναι κινητό
 δεν καταγράφεται σε επίπεδα κάτω από `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Αρχείο καταγραφής
 Από προεπιλογή, ο καταγραφέας γράφει στην κονσόλα. Για να στείλετε αρχεία καταγραφής σε ένα αρχείο, ορίστε το `MOBILETTO_LOG_FILE`
 μεταβλητή περιβάλλοντος. Κατά τη σύνδεση σε ένα αρχείο, τα αρχεία καταγραφής δεν θα εγγράφονται πλέον στην κονσόλα.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Για να απενεργοποιήσετε την καταγραφή:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
