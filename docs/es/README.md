móvil
 =========

 Mobiletto es una capa de abstracción de almacenamiento de JavaScript, con cifrado transparente opcional del lado del cliente.

 # Contenidos
 * [¿Por qué Mobiletto?](#¿Por qué-Mobiletto?)
 * [Inicio rápido](#Inicio rápido)
 * [CLI de Mobiletto](#mobiletto-cli)
 * [Fuente](#Fuente)
 * [Instalación](#Instalación)
 * [Apoyo y Financiamiento](#Apoyo-y-Financiamiento)
 * [Uso básico](#Uso-básico)
 * [Metadatos](#Metadatos)
 * [Estilo de importación alternativo](#Estilo de importación alternativo)
 * [Almacenamiento en caché](#Almacenamiento en caché)
 * [Reflejo](#Reflejo)
 * [Cifrado transparente](#Cifrado-transparente)
 * [Rotación de clave](#Rotación de clave)
 * [Interfaz del controlador](#Interfaz del controlador)
 * [Registro](#Registro)

 # Leer esto en otro idioma
 Este documento README.md ha sido traducido, a través de [hokeylization](https://github.com/cobbzilla/hokeylization), a
 **[¡todos los idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estoy seguro de que no es perfecto, ¡pero espero que sea mejor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 Español](../es/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonesio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 Portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 Suajili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Chino](../zh/README.md)


 **[📚 ... Todos los idiomas ...](../README.md)**
 ----

 ### ¿Hay algún problema con esta traducción del LÉAME?
 Esta traducción particular del [README] original (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 puede tener fallas -- * ¡las correcciones son muy bienvenidas! * Envíe una [solicitud de extracción en GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 o si no se siente cómodo haciéndolo, [abra un problema](https://github.com/cobbzilla/mobiletto/issues)

 Cuando cree un nuevo problema de GitHub sobre una traducción, haga lo siguiente:
 * incluir la URL de la página (copiar/pegar desde la barra de direcciones del navegador)
 * incluir el texto exacto que está mal (copiar/pegar desde el navegador)
 * por favor describa lo que está mal -- ¿la traducción es incorrecta? ¿El formato está roto de alguna manera?
 * ofrezca amablemente una sugerencia de una mejor traducción, o cómo el texto debe formatearse correctamente
 * **¡Gracias!**

 ## ¿Por qué Mobiletto?

 ### ¡Adiós al bloqueo de proveedores!
 Los diversos proveedores de almacenamiento en la nube tienen API incompatibles. Incluso aquellos que luchan por la "compatibilidad con S3"
 tienen comportamientos idiosincrásicos.

 Cuando elige un proveedor de almacenamiento en particular para su aplicación, si codifica directamente a su API, su aplicación
 ahora depende de ese servicio. A medida que pasa el tiempo y se acumula el código, cambiar de proveedor se vuelve
 cada vez más insostenible. ¡Bienvenido al divertido mundo del bloqueo de proveedores!

 Mobiletto fue diseñado para resolver este problema. Al codificar su aplicación para la API de mobiletto, puede fácilmente
 cambie los proveedores de almacenamiento y sepa que la capa de almacenamiento de su aplicación se comportará de manera idéntica.

 ### Pruebas exhaustivas
 Todos los controladores se someten a pruebas de comportamiento idéntico con más de 60 pruebas para cada controlador.
 Probamos todos los controladores con cada combinación de:
 * Cifrado: tanto habilitado como deshabilitado
 * Caché Redis: tanto habilitado como deshabilitado

 Este enfoque nos da la tranquilidad de que mobiletto se comportará igual independientemente del controlador que utilice,
 e independientemente de si habilita el almacenamiento en caché y/o el cifrado.

 ### Compatibilidad con el controlador
 Controladores de almacenamiento Mobiletto actuales:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema de archivos local

 *¡Las contribuciones para apoyar a más proveedores de almacenamiento en la nube son muy bienvenidas!*

 ## mobiletto-cli
 Mobiletto está destinado a ser utilizado como biblioteca por otro código JavaScript.

 Para trabajar con mobiletto en la línea de comandos, use [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fuente
 * [mobiletto en GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto en npm](https://www.npmjs.com/package/mobiletto)

 ## Apoyo y Financiamiento
 Estoy tratando de ser un desarrollador profesional de software de código abierto. he estado trabajando en
 la industria del software durante muchos años, comencé empresas exitosas y las vendí a empresas públicas.
 Recientemente perdí mi trabajo, y realmente no tengo ningún otro trabajo en fila

 Así que voy a intentar escribir un software útil y ver si funciona.

 Si disfruta usando este software, estaría muy agradecido incluso por el
 la [contribución mensual más pequeña a través de Patreon](https://www.patreon.com/cobbzilla)

 *¡Gracias!*

 ## Instalación
 Instale usando `npm` o `yarn` . Probablemente desee la versión `lite` que no incluye todos los
 Archivos LÉAME traducidos:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Si realmente desea los archivos README en todos los idiomas, instale la versión completa:

    npm install mobiletto
    yarn add mobiletto

 ## Inicio rápido
 Un breve ejemplo usando el controlador mobiletto `s3` .

 Este código se ejecutaría igual si el controlador fuera `b2` o `local` .

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
 Un ejemplo mucho más extenso, que muestra la mayoría de las características ofrecidas:

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
 El comando `metadata` devuelve metadatos sobre una sola entrada del sistema de archivos.
 Del mismo modo, el valor de retorno del comando `list` es una matriz de objetos de metadatos.

 Un objeto de metadatos se ve así:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 La propiedad `type` puede ser `file` , `dir` , `link` o `special` .

 Según el tipo de controlador, es posible que un comando `list` no devuelva todos los campos. Las `name` y `type`
 siempre debe estar presente. Un comando posterior de `metadata` devolverá todas las propiedades disponibles.

 ## Estilo de importación alternativo
 Importe el módulo de alcance completo y use la función `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Almacenamiento en caché
 Mobiletto funciona mejor con un caché <a href="https://redis.io">redis</a> .

 Mobiletto intentará conectarse a una instancia de redis en 127.0.0.1:6379

 Puede anular cualquiera de estos:
 * Configure la variable de `MOBILETTO_REDIS_HOST` , mobilet para conectarse aquí en lugar de localhost
 * Establecer el env var `MOBILETTO_REDIS_PORT` , se utilizará este puerto

 Mobiletto almacenará todas sus claves redis con el prefijo `_mobiletto__` . Puedes cambiar esto
 configurando la variable de entorno `MOBILETTO_REDIS_PREFIX` .

 También puede configurar el almacenamiento en caché por conexión con el objeto `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ¿No quieres el almacenamiento en caché de redis?
 Para deshabilitar: pase `enabled: false` en su objeto `opts.redisConfig` cuando establezca su conexión.

 Como se explica a continuación, deshabilitar el almacenamiento en caché tendrá un efecto adverso en el rendimiento e incurrirá en más solicitudes.
 al almacenamiento que realmente necesita.

 ### Guía de almacenamiento en caché
 **Almacenamiento cifrado**: la lectura/escritura del almacenamiento cifrado es solo un poco más lenta de lo normal,
 pero navegar por los directorios (que es lo que hacen algunas cosas) es bastante costoso. Usando un caché redis
 le dará un impulso de rendimiento significativo.

 El caché predeterminado es seguro, pero no funciona bien si tiene muchas operaciones de escritura/eliminación.
 Cualquier operación de escritura o eliminación invalida toda la memoria caché, lo que garantiza que las lecturas posteriores verán el
 Últimos cambios.

 ### herramientas CLI
 Si está utilizando una herramienta CLI como [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 definitivamente querrá que el caché redis esté habilitado, ya que dura a través de las invocaciones del comando `mo` .

 ## Reflejo

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 El comando `mirror` realiza una copia única de todos los archivos de un móvil a otro.
 No ejecuta ningún proceso para mantener el espejo a lo largo del tiempo. Ejecute el comando `mirror` nuevamente
 para sincronizar los archivos que faltan.

 El valor de retorno de `mirror` es un objeto simple con contadores de cuántos archivos fueron exitosos
 reflejado y cuántos archivos tenían errores:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ADVERTENCIA: Duplicar grandes conjuntos de datos puede llevar mucho tiempo y un uso intensivo del ancho de banda

 Con la semántica de la llamada `mirror` , a veces puede ser confuso entender quién es el
 lector y quién es el escritor. Imagínelo como una declaración de asignación: el "mobiletto de la mano izquierda"
 es la cosa a la que se asigna (datos reflejados escritos), y el "mobiletto de la mano derecha" (el
 argumento del método `mirror` ) es el valor que se asigna (se leen los datos reflejados).

 ## Cifrado transparente
 Habilite el cifrado transparente del lado del cliente:

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

 ¿Qué esta pasando? Un directorio separado de "entrada de directorio" (dirent) (encriptado) rastrea qué archivos hay en ese
 directorio (también conocido como el directorio dirent).
 * El comando `list` lee los archivos de entrada del directorio, descifra cada ruta listada; luego devuelve metadatos para cada archivo
 * Los comandos `list` son más ineficientes, especialmente para directorios con una gran cantidad de archivos
 * El comando `write` escribe archivos diferentes en el directorio principal de cada padre, recursivamente; luego escribe el archivo
 * Los comandos `write` incurrirán en O(N) escrituras, con N = profundidad en la jerarquía de directorios
 * El comando `remove` elimina el archivo de directorio correspondiente, y su padre si está vacío, recursivamente; luego elimina el archivo
 * Los comandos `remove` no recursivos generarán O(N) lecturas y potencialmente tantas eliminaciones, con N = profundidad en la jerarquía de directorios
 * Los comandos `remove` en sistemas de archivos grandes y profundos pueden ser costosos

 Tenga en cuenta que incluso con el cifrado del lado del cliente habilitado, un adversario con visibilidad completa de su lado del servidor cifrado
 almacenamiento, incluso sin la clave, aún puede ver el número total de directorios y cuántos archivos hay en cada uno, y con
 algún esfuerzo, descubra parte o la totalidad de la estructura general de la jerarquía de directorios.
 *Nota: Use una estructura relativamente plana para mayor seguridad.*
 El adversario no sabría los nombres de los directorios/archivos a menos que también supiera su encriptación
 clave o de otro modo había descifrado con éxito el cifrado. ¡Todas las apuestas están canceladas entonces!

 ### Rendimiento y almacenamiento en caché
 Las operaciones en el almacenamiento cifrado pueden ser lentas. Las listas recursivas y las eliminaciones pueden ser muy lentas.
 El almacenamiento en caché a través de redis es de gran ayuda, pero tenga en cuenta que el caché se vacía con cualquier escritura o eliminación.

 ## Rotación de claves
 Cree un mobiletto con su nueva clave, luego refleje los datos antiguos en él:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfaz del controlador
 Un controlador es cualquier archivo JS que exporta una función 'storageClient' con esta firma:

    function storageClient (key, secret, opts)

 * `key` : una cadena, su clave API (para el controlador `local` este es el directorio base)
 * `secret` : una cadena, su secreto de API (se puede omitir para el controlador `local` )
 * `opts` : un objeto, las propiedades son por controlador:
 * Para `local` , las `fileMode` y `dirMode` determinan cómo se crean los nuevos archivos y directorios.
 * Para `s3` , se requiere la propiedad `bucket` . Las propiedades opcionales son:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 El objeto que devuelve la función storageClient debe definir estas funciones:

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

 ## Inicio sesión
 Mobiletto usa la biblioteca de registro [winston](https://www.npmjs.com/package/winston).

 Los registros **contendrán** rutas de archivos y mensajes de error, pero **nunca** contendrán claves, secretos,
 o cualquier otra información de configuración de conexión.

 ### Nivel de registro
 Use la variable de entorno `MOBILETTO_LOG_LEVEL` para establecer el nivel de registro, usando uno
 de los niveles `npm` definidos en [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 El nivel predeterminado es `error` . El nivel más detallado es `silly` , aunque actualmente mobiletto
 no inicia sesión en niveles por debajo `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Archivo de registro
 De forma predeterminada, el registrador escribe en la consola. Para enviar registros a un archivo, configure `MOBILETTO_LOG_FILE`
 Variable ambiental. Al iniciar sesión en un archivo, los registros ya no se escribirán en la consola.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Para desactivar el registro:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
