Mobiletto
 =========

 Mobileto est une couche d'abstraction de stockage JavaScript, avec un chiffrement transparent côté client en option.

 # Contenu
 * [Pourquoi Mobiletto ?](#Pourquoi-Mobiletto ?)
 * [Démarrage rapide](#Démarrage rapide)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Installation](#Installation)
 * [Soutien et financement](#Soutien-et-Financement)
 * [Utilisation de base](#Basic-usage)
 * [Métadonnées](#Métadonnées)
 * [Style d'importation alternatif](#Alternate-import-style)
 * [Mise en cache](#Mise en cache)
 * [Mise en miroir](#Mise en miroir)
 * [Cryptage transparent](#Transparent-encryption)
 * [Rotation des clés](#Rotation des clés)
 * [Interface pilote](#Interface pilote)
 * [Journalisation](#Journalisation)

 # Lire ceci dans une autre langue
 Ce document README.md a été traduit, via [hokeylization](https://github.com/cobbzilla/hokeylization), en
 **[toutes les langues prises en charge par Google Translate](https://cloud.google.com/translate/docs/languages) !**

 Je suis certain que ce n'est pas parfait, mais j'espère que c'est mieux que rien !

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 bengali](../bn/README.md)
 [🇩🇪 allemand](../de/README.md)
 [🇺🇸 Anglais](../en/README.md)
 [🇪🇸 Espagnol](../es/README.md)
 [🇫🇷 Français](../fr/README.md)
 [🇹🇩 Haoussa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonésien](../id/README.md)
 [🇮🇹 Italien](../it/README.md)
 [🇯🇵 japonais](../ja/README.md)
 [🇰🇷 coréen](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polonais](../pl/README.md)
 [🇧🇷 portugais](../pt/README.md)
 [🇷🇺 russe](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Ourdou](../ur/README.md)
 [🇻🇳 Vietnamien](../vi/README.md)
 [🇨🇳 chinois](../zh/README.md)


 **[📚 ... Toutes les langues ...](../README.md)**
 ----

 ### Y a-t-il un problème avec cette traduction du README ?
 Cette traduction particulière de l'original [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 peut être défectueux -- *les corrections sont les bienvenues !* Veuillez envoyer une [pull request on GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ou si vous n'êtes pas à l'aise pour le faire, [ouvrez un problème](https://github.com/cobbzilla/mobiletto/issues)

 Lorsque vous créez un nouveau ticket GitHub à propos d'une traduction, veuillez faire :
 * inclure l'URL de la page (copier/coller depuis la barre d'adresse du navigateur)
 * inclure le texte exact qui est erroné (copier/coller depuis le navigateur)
 * veuillez décrire ce qui ne va pas -- la traduction est-elle incorrecte ? le formatage est-il cassé d'une manière ou d'une autre ?
 * veuillez suggérer une meilleure traduction, ou comment le texte doit être correctement formaté
 * **Merci!**

 ## Pourquoi Mobiletto ?

 ### Adieu la dépendance vis-à-vis des fournisseurs !
 Les différents fournisseurs de stockage cloud ont des API incompatibles. Même ceux qui aspirent à la "compatibilité S3"
 ont des comportements idiosyncratiques.

 Lorsque vous choisissez un fournisseur de stockage particulier pour votre application, si vous codez directement dans son API, votre application
 dépend maintenant de ce service. Au fur et à mesure que le temps passe et que le code s'accumule, changer de fournisseur devient
 de plus en plus intenable. Bienvenue dans le monde amusant du verrouillage des fournisseurs !

 Mobileto a été conçu pour résoudre ce problème. En codant votre application avec l'API de mobiletto, vous pouvez facilement
 changez de fournisseur de stockage et sachez que la couche de stockage de votre application se comportera de manière identique.

 ### Tests approfondis
 Tous les pilotes sont testés pour un comportement identique avec plus de 60 tests pour chaque pilote.
 Nous testons tous les pilotes avec chaque combinaison de :
 * Cryptage : activé et désactivé
 * Cache Redis : activé et désactivé

 Cette approche nous donne la tranquillité d'esprit que mobiletto se comportera de la même manière quel que soit le pilote que vous utilisez,
 et que vous activiez ou non la mise en cache et/ou le chiffrement.

 ### Prise en charge des pilotes
 Pilotes de stockage Mobileto actuels :
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : système de fichiers local

 *Les contributions pour soutenir plus de fournisseurs de stockage cloud sont les bienvenues !*

 ## mobiletto-cli
 Mobileto est destiné à être utilisé comme bibliothèque par d'autres codes JavaScript.

 Pour travailler avec mobiletto en ligne de commande, utilisez [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## La source
 * [mobiletto sur GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto sur npm](https://www.npmjs.com/package/mobiletto)

 ## Soutien et financement
 J'essaie d'être un développeur professionnel de logiciels open source. j'ai travaillé dans
 l'industrie du logiciel depuis de nombreuses années, j'ai lancé des entreprises prospères et les ai vendues à des sociétés ouvertes.
 Récemment, j'ai perdu mon emploi et je n'ai pas vraiment d'autre travail en vue

 Je vais donc essayer d'écrire un logiciel utile et voir si cela fonctionne

 Si vous aimez utiliser ce logiciel, je serais très reconnaissant même pour le
 la plus petite [contribution mensuelle via Patreon](https://www.patreon.com/cobbzilla)

 *Merci!*

 ## Installation
 Installez en utilisant `npm` ou `yarn` . Vous voulez probablement la version `lite` qui n'inclut pas tous les
 fichiers README traduits :

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Si vous voulez vraiment les fichiers README dans toutes les langues, installez la version complète :

    npm install mobiletto
    yarn add mobiletto

 ## Démarrage rapide
 Un court exemple utilisant le pilote mobiletto `s3` .

 Ce code fonctionnerait de la même manière si le pilote était `b2` ou `local` .

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
 ## Utilisation de base
 Un exemple beaucoup plus complet, montrant la plupart des fonctionnalités offertes :

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

 ## Métadonnées
 La commande `metadata` renvoie des métadonnées sur une seule entrée de système de fichiers.
 De même, la valeur de retour de la commande `list` est un tableau d'objets de métadonnées.

 Un objet de métadonnées ressemble à ceci :

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 La propriété `type` peut être `file` , `dir` , `link` ou `special` .

 Selon le type de pilote, une commande `list` peut ne pas renvoyer tous les champs. Les propriétés `name` name` et `type`
 doit toujours être présent. Une commande `metadata` ultérieure renverra toutes les propriétés disponibles.

 ## Style d'importation alternatif
 Importez le module complet et utilisez la fonction `connect` " :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Mise en cache
 Mobileto fonctionne mieux avec un cache <a href="https://redis.io">Redis</a> .

 Mobileto tentera de se connecter à une instance redis sur 127.0.0.1:6379

 Vous pouvez remplacer l'un ou l'autre :
 * Définissez la `MOBILETTO_REDIS_HOST` , mobiletto se connecte ici au lieu de localhost
 * Définissez la `MOBILETTO_REDIS_PORT` , ce port sera utilisé

 Mobileto stockera toutes ses clés redis avec le préfixe `_mobiletto__` . Vous pouvez changer cela
 en définissant la variable d'environnement `MOBILETTO_REDIS_PREFIX` .

 Vous pouvez également définir la mise en cache par connexion avec l'objet `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Vous ne voulez pas de mise en cache Redis ?
 Pour désactiver : passez `enabled: false` dans votre objet `opts.redisConfig` lorsque vous établissez votre connexion.

 Comme indiqué ci-dessous, la désactivation de la mise en cache aura un effet négatif sur les performances et entraînera davantage de requêtes
 au stockage dont vous avez vraiment besoin.

 ### Conseils de mise en cache
 **Stockage crypté** : la lecture/écriture du stockage crypté n'est qu'un peu plus lente que la normale,
 mais naviguer dans les répertoires (ce que font certaines choses) est assez coûteux. Utiliser un cache Redis
 vous donnera une amélioration significative des performances.

 Le cache par défaut est sûr, mais ne fonctionne pas bien si vous avez beaucoup d'opérations d'écriture/suppression.
 Toute opération d'écriture ou de suppression invalide l'intégralité du cache, garantissant que les lectures suivantes verront le
 dernières modifications.

 ### Outils CLI
 Si vous utilisez un outil CLI tel que [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 vous voudrez certainement que le cache redis soit activé, car il dure à travers les invocations de la commande `mo` .

 ## Mise en miroir

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 La commande `mirror` effectue une copie unique de tous les fichiers d'un mobiletto à un autre.
 Il n'exécute aucun processus pour maintenir le miroir dans le temps. Exécutez à nouveau la commande `mirror`
 pour synchroniser les fichiers manquants.

 La valeur de retour de `mirror` est un objet simple avec des compteurs pour le nombre de fichiers réussis
 mis en miroir et combien de fichiers avaient des erreurs :

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVERTISSEMENT : la mise en miroir de grands ensembles de données peut prendre beaucoup de temps et consommer beaucoup de bande passante

 Avec la sémantique d'appel `mirror` il peut parfois être déroutant de comprendre qui est le
 lecteur et qui est l'auteur. Imaginez-le comme une déclaration d'affectation : le "mobiletto de gauche"
 est la chose assignée (données en miroir écrites), et le "mobiletto de droite" (le
 argument de la méthode `mirror` ) est la valeur assignée (les données en miroir sont lues).

 ## Cryptage transparent
 Activez le chiffrement transparent côté client :

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

 Que ce passe-t-il? Un répertoire séparé "d'entrée de répertoire" (dirent) (crypté) suit les fichiers qui se trouvent dans ce
 répertoire (alias le répertoire dirent).
 * La commande `list` lit les fichiers d'entrée de répertoire, décrypte chaque chemin répertorié ; renvoie ensuite les métadonnées de chaque fichier
 * Les commandes `list` sont plus inefficaces, en particulier pour les répertoires contenant un grand nombre de fichiers
 * La commande `write` écrit des fichiers directs dans le répertoire direct de chaque parent, de manière récursive ; puis écrit le fichier
 * Les commandes `write` entraîneront O(N) écritures, avec N = profondeur dans la hiérarchie des répertoires
 * La commande `remove` supprime le fichier dirent correspondant, et son parent s'il est vide, de manière récursive ; puis supprime le fichier
 * Les commandes de `remove` non récursives entraîneront O (N) lectures et potentiellement autant de suppressions, avec N = profondeur dans la hiérarchie des répertoires
 * Les commandes récursives `remove` sur des systèmes de fichiers volumineux et profonds peuvent être coûteuses

 Notez que même avec le chiffrement côté client activé, un adversaire avec une visibilité totale sur votre côté serveur chiffré
 le stockage, même sans la clé, peut toujours voir le nombre total de répertoires et le nombre de fichiers dans chacun, et avec
 quelques efforts, découvrir tout ou partie de la structure globale de la hiérarchie des répertoires.
 *Remarque : Utilisez une structure relativement plate pour une meilleure sécurité.*
 L'adversaire ne connaîtrait pas les noms des répertoires/fichiers à moins qu'il ne connaisse également votre cryptage
 clé ou avait autrement réussi à casser le cryptage. Tous les paris sont ouverts alors !

 ### Performances et mise en cache
 Les opérations sur le stockage chiffré peuvent être lentes. Les listes et les suppressions récursives peuvent être très lentes.
 La mise en cache via redis aide énormément, mais notez que le cache est vidé lors de toute écriture ou suppression.

 ## Rotation des clés
 Créez un mobiletto avec votre nouvelle clé, puis copiez-y les anciennes données :

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface pilote
 Un pilote est un fichier JS qui exporte une fonction 'storageClient' avec cette signature :

    function storageClient (key, secret, opts)

 * `key` : une chaîne, votre clé API (pour le pilote `local` c'est le répertoire de base)
 * `secret` : une chaîne, votre secret d'API (peut être omis pour le pilote `local` )
 * `opts` : un objet, les propriétés sont par pilote :
 * Pour `local` , les propriétés `fileMode` et `dirMode` déterminent comment les nouveaux fichiers et répertoires sont créés
 * Pour `s3` , la propriété `bucket` est requise. Les propriétés facultatives sont :
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 L'objet renvoyé par la fonction storageClient doit définir ces fonctions :

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

 ## Journalisation
 Mobileto utilise la bibliothèque de journalisation [winston](https://www.npmjs.com/package/winston).

 Les journaux **contiendront** les chemins d'accès aux fichiers et les messages d'erreur, mais ne contiendront **jamais** de clés, de secrets,
 ou toute autre information de configuration de connexion.

 ### Niveau de journalisation
 Utilisez la variable d'environnement `MOBILETTO_LOG_LEVEL` pour définir le niveau de journalisation, en utilisant un
 des niveaux `npm` définis dans [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Le niveau par défaut est `error` . Le niveau le plus verbeux est `silly` , bien qu'actuellement mobiletto
 ne se connecte pas aux niveaux inférieurs à `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Fichier journal
 Par défaut, le logger écrit sur la console. Pour envoyer les journaux vers un fichier, définissez le `MOBILETTO_LOG_FILE`
 variables d'environnement. Lors de la connexion à un fichier, les journaux ne seront plus écrits sur la console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Pour désactiver la journalisation :

    MOBILETTO_LOG_FILE=/dev/null

</pre>
