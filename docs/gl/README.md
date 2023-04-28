Mobiletto
 =========

 Mobiletto é unha capa de abstracción de almacenamento de JavaScript, con cifrado transparente do lado do cliente opcional.

 # Contidos
 * [Por que Mobiletto?](#Why-Mobiletto?)
 * [Inicio rápido](#Inicio rápido)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Fonte](#Fonte)
 * [Instalación](#Instalación)
 * [Apoio e financiamento](#Support-and-Funding)
 * [Uso básico](#Uso básico)
 * [Metadatos](#Metadatos)
 * [Estilo de importación alternativo](#Estilo de importación alternativo)
 * [Almacenamento na caché](#Almacenamento na caché)
 * [Replicación](#Replicación)
 * [Cifrado transparente](#Transparent-encryption)
 * [Rotación da tecla](#Rotación da tecla)
 * [Interface do controlador](#Interfaz do controlador)
 * [Rexistro](#Rexistro)

 # Le isto noutro idioma
 Este documento README.md foi traducido, a través de [hokeylization](https://github.com/cobbzilla/hokeylization), a
 **[todos os idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estou seguro de que non é perfecto, pero espero que sexa mellor que nada!

 [🇸🇦 árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 inglés](../en/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesio](../id/README.md)
 [🇮🇹 italiano](../it/README.md)
 [🇯🇵 xaponés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 Portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 suahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Chinés](../zh/README.md)


 **[📚 ... Todos os idiomas ...](../README.md)**
 ----

 ### Hai algún problema con esta tradución do README?
 Esta tradución particular do orixinal [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 pode ser defectuoso -- *¡As correccións son moi benvidas!* Envía unha [solicitude de extracción en GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ou se non estás cómodo facendo iso, [abre un problema](https://github.com/cobbzilla/mobiletto/issues)

 Cando crees un novo problema de GitHub sobre unha tradución, fai:
 * inclúa o URL da páxina (copiar/pegar da barra de enderezos do navegador)
 * inclúa o texto exacto incorrecto (copiar/pegar desde o navegador)
 * Describe o que está mal: a tradución é incorrecta? o formato está roto dalgún xeito?
 * Ofrecer amablemente unha suxestión dunha mellor tradución, ou como o texto debe estar formateado correctamente
 * **Grazas!**

 ## Por que Mobiletto?

 ### Adeus bloqueo de vendedores!
 Os distintos provedores de almacenamento na nube teñen API incompatibles. Incluso aqueles que se esforzan pola "compatibilidade S3"
 teñen comportamentos idiosincráticos.

 Cando escolles un provedor de almacenamento concreto para a túa aplicación, se codificas directamente na súa API, a túa aplicación
 agora depende dese servizo. A medida que pasa o tempo e o código se acumula, cambian de provedores
 cada vez máis insostible. Benvido ao divertido mundo do bloqueo de vendedores!

 Mobiletto foi deseñado para resolver este problema. Ao codificar a túa aplicación na API de mobiletto, podes facilmente
 cambia os provedores de almacenamento e sabe que a capa de almacenamento da túa aplicación se comportará de forma idéntica.

 ### Probas extensas
 Todos os condutores son probados para un comportamento idéntico con máis de 60 probas para cada condutor.
 Probamos todos os controladores con cada combinación de:
 * Cifrado: tanto activado como desactivado
 * Caché Redis: activada e desactivada

 Este enfoque dános a tranquilidade de que o mobiletto se comportará igual independentemente do controlador que utilices.
 e independentemente de se activa o caché e/ou o cifrado.

 ### Soporte ao controlador
 Controladores de almacenamento de Mobiletto actuais:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema de ficheiros local

 *As contribucións para apoiar máis provedores de almacenamento na nube son moi benvidas!*

 ## mobiletto-cli
 Mobiletto está pensado para ser usado como biblioteca por outro código JavaScript.

 Para traballar con mobiletto na liña de comandos, use [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fonte
 * [mobiletto en GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto en npm](https://www.npmjs.com/package/mobiletto)

 ## Apoio e financiamento
 Estou tentando ser un programador profesional de software de código aberto. Estiven traballando
 da industria do software durante moitos anos, comecei empresas exitosas e vendínllas a empresas públicas.
 Recentemente perdín o meu traballo, e realmente non teño ningún outro traballo preparado

 Entón, vou tentar escribir un software útil e ver se funciona

 Se che gusta usar este software, estaríalle moi agradecido
 máis pequena [contribución mensual a través de Patreon](https://www.patreon.com/cobbzilla)

 *Grazas!*

 ## Instalación
 Instale usando `npm` ou `yarn` . Probablemente queira a versión `lite` que non inclúa todos os
 ficheiros README traducidos:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Se realmente queres os ficheiros README en todos os idiomas, instala a versión completa:

    npm install mobiletto
    yarn add mobiletto

 ## Inicio rápido
 Un pequeno exemplo usando o controlador mobiletto `s3` .

 Este código funcionaría igual se o controlador fose `b2` ou `local` .

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
 ## Uso básico
 Un exemplo moito máis extenso, que mostra a maioría das funcións ofrecidas:

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

 ## Metadatos
 O comando `metadata` devolve metadatos sobre unha única entrada do sistema de ficheiros.
 Do mesmo xeito, o valor de retorno do comando `list` é unha matriz de obxectos de metadatos.

 Un obxecto de metadatos ten o seguinte aspecto:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 A propiedade `type` pode ser `file` , `dir` , `link` ou `special` .

 Dependendo do tipo de controlador, un comando `list` pode non devolver todos os campos. As propiedades `name` nome` e `type`
 debe estar sempre presente. Un comando `metadata` posterior devolverá todas as propiedades dispoñibles.

 ## Estilo de importación alternativo
 Importe o módulo de ámbito completo e use a función `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Almacenamento en caché
 Mobiletto funciona mellor cunha caché <a href="https://redis.io">redis</a> .

 Mobiletto tentará conectarse a unha instancia de redis en 127.0.0.1:6379

 Podes anular calquera destes:
 * Establece a var env `MOBILETTO_REDIS_HOST` , mobile para conectarse aquí en lugar de localhost
 * Establece a var env `MOBILETTO_REDIS_PORT` , usarase este porto

 Mobiletto almacenará todas as súas claves redis co prefixo `_mobiletto__` . Podes cambiar isto
 configurando o env var `MOBILETTO_REDIS_PREFIX`

 Tamén pode configurar a caché por conexión co obxecto `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Non queres almacenar en caché Redis?
 Para desactivar: pase `enabled: false` no seu obxecto `opts.redisConfig` cando estableza a súa conexión.

 Como se comenta a continuación, desactivar o caché terá un efecto adverso no rendemento e producirá máis solicitudes
 ao almacenamento que realmente necesitas.

 ### Guía de almacenamento en caché
 **Almacenamento cifrado**: a lectura/escritura do almacenamento cifrado é só un pouco máis lento do normal,
 pero navegar polos directorios (o que fan algunhas cousas) é bastante caro. Usando unha caché de redis
 darache un aumento significativo de rendemento.

 A caché predeterminada é segura, pero non funciona ben se tes moitas operacións de escritura/eliminación.
 Calquera operación de escritura ou eliminación invalida toda a caché, garantindo que as lecturas posteriores vexan o
 últimos cambios.

 ### Ferramentas da CLI
 Se está a usar unha ferramenta CLI como [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 definitivamente quererá habilitar a caché de redis, xa que dura durante as invocacións do comando `mo` .

 ## Espello

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 O comando `mirror` realiza unha copia única de todos os ficheiros dun móbil a outro.
 Non executa ningún proceso para manter o espello ao longo do tempo. Execute o comando `mirror` novo
 para sincronizar os ficheiros que faltan.

 O valor de retorno de `mirror` é un obxecto sinxelo con contadores de cantos ficheiros se realizaron correctamente
 espello e cantos ficheiros tiveron erros:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ADVERTENCIA: duplicar grandes conxuntos de datos pode levar moito tempo e consumir moito ancho de banda

 Coa semántica da chamada `mirror` ás veces pode resultar confuso entender quen é
 lector e quen é o escritor. Imaxínao como unha declaración de asignación: o "mobiletto da man esquerda"
 é a cousa que se está asignando (datos reflectidos escritos) e o "mobiletto da man dereita" (o
 argumento ao método `mirror` ) é o valor que se está asignando (léanse os datos reflectidos).

 ## Cifrado transparente
 Activa o cifrado transparente do lado do cliente:

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

 Que pasa? Un directorio separado de "entrada de directorio" (directorio) (cifrado) rastrexa os ficheiros que hai nel
 directorio (tamén coñecido como o directorio dirent).
 * O comando `list` le os ficheiros de entrada do directorio, descifra cada ruta listada; despois devolve os metadatos para cada ficheiro
 * Os comandos `list` son máis ineficientes, especialmente para directorios con gran número de ficheiros
 * O comando `write` escribe ficheiros dirent no directorio dirent de cada pai, de forma recursiva; despois escribe o ficheiro
 * Os comandos `write` incorrerán en escrituras O(N), con N = profundidade na xerarquía de directorios
 * O comando `remove` elimina o ficheiro dirent correspondente, e o seu pai se está baleiro, de forma recursiva; entón elimina o ficheiro
 * Os comandos `remove` non recursivos provocarán lecturas O(N) e potencialmente tantas eliminacións, con N = profundidade na xerarquía de directorios
 * Os comandos recursivos `remove` en sistemas de ficheiros grandes e profundos poden ser caros

 Teña en conta que aínda que teña activado o cifrado do lado do cliente, un adversario con visibilidade total no lado do servidor cifrado
 almacenamento, aínda sen a chave, aínda pode ver o número total de directorios e cantos ficheiros hai en cada un, e con
 algún esforzo, descubra parte ou toda a estrutura xeral da xerarquía de directorios.
 *Nota: use unha estrutura relativamente plana para mellorar a seguridade.*
 O adversario non coñecería os nomes dos directorios/ficheiros a non ser que coñeza tamén o seu cifrado
 clave ou rompera con éxito o cifrado. ¡Todas as apostas están desactivadas!

 ### Rendemento e caché
 As operacións de almacenamento cifrado poden ser lentas. As listaxes e eliminacións recursivas poden ser moi lentas.
 O almacenamento na caché a través de redis axuda enormemente, pero teña en conta que a caché bótase en calquera escritura ou eliminación.

 ## Rotación de teclas
 Crea un mobiletto coa túa nova clave e, a continuación, reflicte os datos antigos nel:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface do controlador
 Un controlador é calquera ficheiro JS que exporta unha función 'storageClient' con esta sinatura:

    function storageClient (key, secret, opts)

 * `key` : unha cadea, a túa clave API (para o controlador `local` este é o directorio base)
 * `secret` : unha cadea, o seu segredo da API (pódese omitir para o controlador `local` )
 * `opts` : un obxecto, as propiedades son por controlador:
 * Para `local` , as `fileMode` e `dirMode` determinan como se crean novos ficheiros e directorios de creación
 * Para `s3` , é necesaria a propiedade `bucket` . As propiedades opcionais son:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 O obxecto que devolve a función storageClient debe definir estas funcións:

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

 ## Rexistro
 Mobiletto usa a biblioteca de rexistro [winston](https://www.npmjs.com/package/winston).

 Os rexistros **conterán** camiños de ficheiros e mensaxes de erro, pero **nunca** conterán chaves, segredos,
 ou calquera outra información de configuración de conexión.

 ### Nivel de rexistro
 Use a variable de ambiente `MOBILETTO_LOG_LEVEL` para establecer o nivel de rexistro, usando un
 dos niveis `npm` definidos en [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 O nivel predeterminado é `error` . O nivel máis detallado é `silly` , aínda que actualmente mobiletto
 non rexistra en niveis inferiores a `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Ficheiro de rexistro
 Por defecto, o rexistrador escribe na consola. Para enviar rexistros a un ficheiro, configure o `MOBILETTO_LOG_FILE`
 variable de ambiente. Ao iniciar sesión nun ficheiro, os rexistros xa non se escribirán na consola.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Para desactivar o rexistro:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
