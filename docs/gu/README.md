મોબાઈલટ્ટો
 ==========

 Mobiletto એ JavaScript સ્ટોરેજ એબ્સ્ટ્રેક્શન લેયર છે, જેમાં વૈકલ્પિક પારદર્શક ક્લાયન્ટ-સાઇડ એન્ક્રિપ્શન છે.

 # સામગ્રી
 * [કેમ મોબાઈલટો?](#Why-Mobiletto?)
 * [ઝડપી શરૂઆત](#ઝડપી-શરૂઆત)
 * [Mobiletto CLI](#mobiletto-cli)
 * [સ્રોત](#સ્રોત)
 * [મૂળભૂત વપરાશ](#મૂળભૂત-ઉપયોગ)
 * [મેટાડેટા](#મેટાડેટા)
 * [વૈકલ્પિક આયાત શૈલી](#વૈકલ્પિક-આયાત-શૈલી)
 * [કેશિંગ](#કેશિંગ)
 * [મિરરિંગ](#મિરરિંગ)
 * [પારદર્શક એન્ક્રિપ્શન](#પારદર્શક-એનક્રિપ્શન)
 * [કી રોટેશન](#કી-રોટેશન)
 * [ડ્રાઈવર ઈન્ટરફેસ](#ડ્રાઈવર ઈન્ટરફેસ)
 * [લોગિંગ](#લોગિંગ)

 # આને બીજી ભાષામાં વાંચો
 આ README.md દસ્તાવેજનો અનુવાદ [hokeylization](https://github.com/cobbzilla/hokeylization) દ્વારા કરવામાં આવ્યો છે,
 **[Google અનુવાદ દ્વારા સમર્થિત દરેક ભાષા](https://cloud.google.com/translate/docs/languages)!**

 મને ખાતરી છે કે તે સંપૂર્ણ નથી, પરંતુ હું આશા રાખું છું કે તે કંઈ કરતાં વધુ સારું છે!

 [🇸🇦 અરબી](../ar/README.md)
 [🇧🇩 બંગાળી](../bn/README.md)
 [🇩🇪 જર્મન](../de/README.md)
 [🇺🇸 અંગ્રેજી](../en/README.md)
 [🇪🇸 સ્પેનિશ](../es/README.md)
 [🇫🇷 ફ્રેન્ચ](../fr/README.md)
 [🇹🇩 હૌસા](../ha/README.md)
 [🇮🇳 હિન્દી](../hi/README.md)
 [🇮🇩 ઇન્ડોનેશિયન](../id/README.md)
 [🇮🇹 ઇટાલિયન](../it/README.md)
 [🇯🇵 જાપાનીઝ](../ja/README.md)
 [🇰🇷 કોરિયન](../ko/README.md)
 [🇮🇳 મરાંઠી](../mr/README.md)
 [🇵🇱 પોલિશ](../pl/README.md)
 [🇧🇷 પોર્ટુગીઝ](../pt/README.md)
 [🇷🇺 રશિયન](../ru/README.md)
 [🇰🇪 સ્વાહિલી](../sw/README.md)
 [🇵🇭 ટાગાલોગ](../tl/README.md)
 [🇹🇷 ટર્કિશ](../tr/README.md)
 [🇵🇰 ઉર્દુ](../ur/README.md)
 [🇻🇳 વિયેતનામીસ](../vi/README.md)
 [🇨🇳 ચાઇનીઝ](../zh/README.md)


 **[📚 ... બધી ભાષાઓ ...](../README.md)**
 ----

 ### શું README ના આ અનુવાદમાં કોઈ સમસ્યા છે?
 મૂળ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) નો આ વિશિષ્ટ અનુવાદ
 ખામી હોઈ શકે છે -- *સુધારાઓ ખૂબ આવકાર્ય છે!* કૃપા કરીને [GitHub પર પુલ વિનંતી](https://github.com/cobbzilla/mobiletto/pulls) મોકલો,
 અથવા જો તમને તે કરવામાં આરામદાયક ન હોય, તો [સમસ્યા ખોલો](https://github.com/cobbzilla/mobiletto/issues)

 જ્યારે તમે અનુવાદ વિશે નવો GitHub મુદ્દો બનાવો છો, ત્યારે કૃપા કરીને આ કરો:
 * પૃષ્ઠ URL શામેલ કરો (બ્રાઉઝર સરનામાં બારમાંથી કૉપિ/પેસ્ટ કરો)
 * ખોટો લખાણ શામેલ કરો (બ્રાઉઝરમાંથી કૉપિ/પેસ્ટ કરો)
 * કૃપયા શું ખોટું છે તેનું વર્ણન કરો -- શું અનુવાદ ખોટો છે? શું ફોર્મેટિંગ કોઈક રીતે તૂટી ગયું છે?
 * કૃપા કરીને વધુ સારા અનુવાદનું સૂચન આપો, અથવા ટેક્સ્ટ કેવી રીતે યોગ્ય રીતે ફોર્મેટ થવો જોઈએ
 * **આભાર!**

 ## મોબાઈલટ્ટો શા માટે?

 ### ગુડબાય વેન્ડર લોક-ઇન!
 વિવિધ ક્લાઉડ સ્ટોરેજ પ્રદાતાઓ પાસે અસંગત API છે. તે પણ જેઓ "S3 સુસંગતતા" માટે પ્રયત્ન કરે છે
 રૂઢિચુસ્ત વર્તન ધરાવે છે.

 જ્યારે તમે તમારી એપ્લિકેશન માટે કોઈ ચોક્કસ સ્ટોરેજ વિક્રેતા પસંદ કરો છો, જો તમે સીધા તેમના API પર કોડ કરો છો, તો તમારી એપ્લિકેશન
 હવે તે સેવા પર નિર્ભર છે. જેમ જેમ સમય પસાર થાય છે અને કોડ એકઠા થાય છે તેમ, બદલાતા વિક્રેતાઓ બની જાય છે
 વધુને વધુ અસમર્થ. વેન્ડર લોક-ઇનની મનોરંજક દુનિયામાં આપનું સ્વાગત છે!

 Mobiletto આ સમસ્યાને ઉકેલવા માટે ડિઝાઇન કરવામાં આવી હતી. તમારી એપ્લિકેશનને mobiletto ના API પર કોડિંગ કરીને, તમે સરળતાથી કરી શકો છો
 સ્ટોરેજ પ્રદાતાઓ બદલો અને જાણો કે તમારી એપ્લિકેશનનું સ્ટોરેજ સ્તર સમાન રીતે વર્તે છે.

 ### વ્યાપક પરીક્ષણ
 દરેક ડ્રાઇવર માટે 60+ પરીક્ષણો સાથે સમાન વર્તન માટે બધા ડ્રાઇવરોનું પરીક્ષણ કરવામાં આવે છે.
 અમે દરેક સંયોજન સાથે તમામ ડ્રાઇવરોનું પરીક્ષણ કરીએ છીએ:
 * એન્ક્રિપ્શન: સક્ષમ અને અક્ષમ બંને
 * રીડીસ કેશ: બંને સક્ષમ અને અક્ષમ

 આ અભિગમ અમને મનની શાંતિ આપે છે કે તમે ગમે તે ડ્રાઇવરનો ઉપયોગ કરો છો, મોબાઇલટો એ જ વર્તન કરશે,
 અને તમે કેશીંગ અને/અથવા એન્ક્રિપ્શન સક્ષમ કરો છો કે કેમ તે ધ્યાનમાં લીધા વગર.

 ### ડ્રાઈવર સપોર્ટ
 વર્તમાન મોબાઇલટો સ્ટોરેજ ડ્રાઇવરો:
 * `s3` : Amazon S3
 * `b2` : બેકબ્લેઝ B2
 * `local` : સ્થાનિક ફાઇલસિસ્ટમ

 *વધુ ક્લાઉડ સ્ટોરેજ પ્રદાતાઓને સમર્થન આપવા માટે યોગદાન ખૂબ આવકાર્ય છે!*

 ## mobiletto-cli
 Mobiletto અન્ય JavaScript કોડ દ્વારા લાઇબ્રેરી તરીકે ઉપયોગમાં લેવાનો છે.

 કમાન્ડ-લાઇન પર mobiletto સાથે કામ કરવા માટે, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) નો ઉપયોગ કરો

 ## સ્ત્રોત
 * [ગીથહબ પર મોબાઈલ](https://github.com/cobbzilla/mobiletto)
 * [એનપીએમ પર મોબાઇલેટો](https://www.npmjs.com/package/mobiletto)

 ## ઝડપી શરૂઆત
 Mobiletto `s3` ડ્રાઇવરનો ઉપયોગ કરવાનું ટૂંકું ઉદાહરણ.

 જો ડ્રાઇવર `b2` અથવા `local` હોત તો આ કોડ સમાન ચાલશે.

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
 ## મૂળભૂત ઉપયોગ
 એક વધુ વ્યાપક ઉદાહરણ, ઓફર કરાયેલી મોટાભાગની સુવિધાઓ દર્શાવે છે:

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

 ## મેટાડેટા
 `metadata` આદેશ સિંગલ ફાઇલસિસ્ટમ એન્ટ્રી વિશે મેટાડેટા પરત કરે છે.
 તેવી જ રીતે, `list` આદેશમાંથી વળતર મૂલ્ય એ મેટાડેટા ઑબ્જેક્ટ્સની એરે છે.

 મેટાડેટા ઑબ્જેક્ટ આના જેવો દેખાય છે:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ટાઇપ` ગુણધર્મ `file` `dir` , `link` અથવા `special` છે.

 ડ્રાઇવરના પ્રકાર પર આધાર રાખીને, `list` આદેશ કદાચ તમામ ક્ષેત્રો પરત કરી શકશે નહીં. `name` અને `type` પ્રકાર` ગુણધર્મો
 હંમેશા હાજર રહેવું જોઈએ. અનુગામી `metadata` આદેશ તમામ ઉપલબ્ધ ગુણધર્મો પરત કરશે.

 ## વૈકલ્પિક આયાત શૈલી
 સંપૂર્ણ-સ્કોપવાળા મોડ્યુલને આયાત કરો અને `connect` ફંક્શનનો ઉપયોગ કરો:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## કેશીંગ
 <a href="https://redis.io">Mobiletto</a> રેડિસ કેશ સાથે શ્રેષ્ઠ કામ કરે છે.

 Mobiletto 127.0.0.1:6379 પર redis ઇન્સ્ટન્સ સાથે કનેક્ટ કરવાનો પ્રયાસ કરશે

 તમે આમાંથી કોઈપણ પર ફરીથી લખી શકો છો:
 * `MOBILETTO_REDIS_HOST` env var સેટ કરો, mobiletto અહીં લોકલહોસ્ટને બદલે કનેક્ટ કરો
 * `MOBILETTO_REDIS_PORT` env var સેટ કરો, આ પોર્ટનો ઉપયોગ કરવામાં આવશે

 Mobiletto તેની તમામ redis કીને `_mobiletto__` ઉપસર્ગ સાથે સંગ્રહિત કરશે. તમે આ બદલી શકો છો
 `MOBILETTO_REDIS_PREFIX` env var સેટ કરીને.

 તમે `opts.redisConfig` ઑબ્જેક્ટ સાથે પ્રતિ-કનેક્શન કેશીંગ પણ સેટ કરી શકો છો:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### રેડિસ કેશીંગ નથી જોઈતું?
 અક્ષમ કરવા માટે: જ્યારે તમે તમારું કનેક્શન સ્થાપિત કરો ત્યારે તમારા `opts.redisConfig` ઑબ્જેક્ટમાં `enabled: false` false` પાસ કરો.

 નીચે ચર્ચા કર્યા મુજબ, કેશીંગને અક્ષમ કરવાથી કામગીરી પર પ્રતિકૂળ અસર પડશે અને વધુ વિનંતીઓ થશે
 સ્ટોરેજ માટે જે તમારે ખરેખર જરૂરી છે.

 ### કેશીંગ માર્ગદર્શન
 **એનક્રિપ્ટેડ સ્ટોરેજ**: એન્ક્રિપ્ટેડ સ્ટોરેજ વાંચવું/લેખવું સામાન્ય કરતાં થોડું ધીમું છે,
 પરંતુ ડિરેક્ટરીઓની આસપાસ નેવિગેટ કરવું (જે કેટલીક વસ્તુઓ કરે છે) એકદમ ખર્ચાળ છે. રેડિસ કેશનો ઉપયોગ કરીને
 તમને નોંધપાત્ર કામગીરી બૂસ્ટ આપશે.

 ડિફૉલ્ટ કેશ સલામત છે, પરંતુ જો તમારી પાસે ઘણી બધી લખવા/દૂર કરવાની કામગીરી હોય તો તે સારું પ્રદર્શન કરતું નથી.
 કોઈપણ લખવા અથવા દૂર કરવાની ક્રિયા સમગ્ર કેશને અમાન્ય બનાવે છે, ખાતરી કરો કે પછીના વાંચન જોશે
 નવીનતમ ફેરફારો.

 ### CLI ટૂલ્સ
 જો તમે CLI ટૂલનો ઉપયોગ કરી રહ્યાં છો જેમ કે [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 તમે ચોક્કસપણે redis કેશને સક્ષમ કરવા માંગો છો, કારણ કે તે `mo` આદેશની વિનંતીઓ દરમિયાન ચાલે છે.

 ## મિરરિંગ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` આદેશ એક મોબાઈલથી બીજા મોબાઈલ પર બધી ફાઈલોની એક વખતની નકલ કરે છે.
 તે સમય સાથે અરીસાને જાળવવા માટે કોઈ પ્રક્રિયા ચલાવતું નથી. ફરીથી `mirror` આદેશ ચલાવો
 કોઈપણ ખૂટતી ફાઇલોને સિંક્રનાઇઝ કરવા માટે.

 `mirror` માંથી રીટર્ન વેલ્યુ એ એક સરળ ઑબ્જેક્ટ છે જેમાં કેટલી ફાઇલો સફળતાપૂર્વક હતી તેના કાઉન્ટર્સ છે
 પ્રતિબિંબિત અને કેટલી ફાઇલોમાં ભૂલો હતી:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ચેતવણી: મોટા ડેટા સેટ્સને પ્રતિબિંબિત કરવું ખૂબ જ સમય માંગી લેતું અને બેન્ડવિડ્થ-સઘન હોઈ શકે છે

 `mirror` કૉલ સિમેન્ટિક્સ સાથે તે કોણ છે તે સમજવામાં કેટલીકવાર મૂંઝવણમાં મૂકે છે
 વાચક અને લેખક કોણ છે. તેને અસાઇનમેન્ટ સ્ટેટમેન્ટની જેમ કલ્પના કરો: "ડાબા હાથનો મોબાઈલ"
 તે વસ્તુને સોંપવામાં આવી રહી છે (મિરર કરેલ ડેટા લખાયેલો), અને "જમણે હાથે મોબાઇલટો" (આ
 `mirror` પદ્ધતિની દલીલ) એ સોંપેલ મૂલ્ય છે (મિરર કરેલ ડેટા વાંચવામાં આવે છે).

 ## પારદર્શક એન્ક્રિપ્શન
 પારદર્શક ક્લાયંટ-સાઇડ એન્ક્રિપ્શન સક્ષમ કરો:

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

 શું થઈ રહ્યું છે? એક અલગ "ડિરેક્ટરી એન્ટ્રી" (ડાયરન્ટ) ડિરેક્ટરી (એનક્રિપ્ટેડ) તેમાં કઈ ફાઈલો છે તે ટ્રેક કરે છે
 ડિરેક્ટરી (ઉર્ફે ડાયરન્ટ ડિરેક્ટરી).
 * `list` આદેશ ડિરેક્ટરી એન્ટ્રી ફાઇલોને વાંચે છે, સૂચિબદ્ધ દરેક પાથને ડિક્રિપ્ટ કરે છે; પછી દરેક ફાઇલ માટે મેટાડેટા પરત કરે છે
 * `list` આદેશો વધુ બિનકાર્યક્ષમ છે, ખાસ કરીને મોટી સંખ્યામાં ફાઇલો ધરાવતી ડિરેક્ટરીઓ માટે
 * `write` આદેશ દરેક પેરેન્ટની ડાયરન્ટ ડાયરેક્ટરીમાં ડાયરન્ટ ફાઇલો લખે છે, પુનરાવર્તિત રીતે; પછી ફાઇલ લખે છે
 ડાયરેક્ટરી વંશવેલોમાં N = ઊંડાઈ સાથે * `write` આદેશો O(N) લખે છે.
 * `remove` કમાન્ડ અનુરૂપ ડાયરન્ટ ફાઇલને દૂર કરે છે, અને જો ખાલી હોય તો તેના પેરેન્ટને પુનરાવર્તિત રીતે દૂર કરે છે; પછી ફાઈલ દૂર કરે છે
 * બિન-પુનરાવર્તિત `remove` આદેશો O(N) રીડ અને સંભવિત રૂપે ઘણા બધા ડિલીટ કરશે, જેમાં ડિરેક્ટરી વંશવેલોમાં N = ઊંડાઈ હશે.
 * મોટી અને ડીપ ફાઇલસિસ્ટમ પર પુનરાવર્તિત `remove` કરો' આદેશો ખર્ચાળ હોઇ શકે છે

 નોંધ કરો કે ક્લાયંટ-સાઇડ એન્ક્રિપ્શન સક્ષમ હોવા છતાં, તમારા એન્ક્રિપ્ટેડ સર્વર-સાઇડમાં સંપૂર્ણ દૃશ્યતા સાથે વિરોધી
 સ્ટોરેજ, કી વગર પણ, હજુ પણ ડિરેક્ટરીઓની કુલ સંખ્યા અને દરેકમાં કેટલી ફાઈલો છે અને સાથે જોઈ શકે છે
 કેટલાક પ્રયત્નો, ડિરેક્ટરી પદાનુક્રમની કેટલીક અથવા બધી એકંદર રચના શોધો.
 *નોંધ: સારી સુરક્ષા માટે પ્રમાણમાં સપાટ માળખું વાપરો.*
 પ્રતિસ્પર્ધી ડિરેક્ટરીઓ/ફાઈલોના નામ જાણશે નહીં સિવાય કે તેઓ તમારા એન્ક્રિપ્શનને પણ જાણતા હોય
 કી અથવા અન્યથા સફળતાપૂર્વક એન્ક્રિપ્શન ક્રેક કર્યું હતું. બધા બેટ્સ પછી બંધ છે!

 ### પ્રદર્શન અને કેશીંગ
 એન્ક્રિપ્ટેડ સ્ટોરેજ પરની કામગીરી ધીમી હોઈ શકે છે. પુનરાવર્તિત સૂચિઓ અને દૂર કરવાનું ખૂબ ધીમું હોઈ શકે છે.
 redis દ્વારા કેશિંગ જબરદસ્ત રીતે મદદ કરે છે, પરંતુ નોંધ કરો કે કેશ કોઈપણ લખાણ અથવા દૂર કરવા પર ફ્લશ થાય છે.

 ## કી પરિભ્રમણ
 તમારી નવી કી વડે મોબાઈલટો બનાવો, પછી તેમાં જૂના ડેટાને મિરર કરો:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ડ્રાઈવર ઈન્ટરફેસ
 ડ્રાઇવર એ કોઈપણ JS ફાઇલ છે જે આ હસ્તાક્ષર સાથે 'storageClient' ફંક્શનની નિકાસ કરે છે:

    function storageClient (key, secret, opts)

 * `key` : એક સ્ટ્રિંગ, તમારી API કી ( `local` ડ્રાઇવર માટે આ બેઝ ડિરેક્ટરી છે)
 * `secret` : એક શબ્દમાળા, તમારું API રહસ્ય ( `local` ડ્રાઇવર માટે અવગણી શકાય છે)
 * `opts` : એક ઑબ્જેક્ટ, ગુણધર્મો પ્રતિ-ડ્રાઇવર છે:
 * `local` માટે, `fileMode` અને `dirMode` ગુણધર્મો નક્કી કરે છે કે નવી બનાવવાની ફાઇલો અને ડિરેક્ટરીઓ કેવી રીતે બનાવવામાં આવે છે
 * `s3` માટે, `bucket` ગુણધર્મ જરૂરી છે. વૈકલ્પિક ગુણધર્મો છે:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ઑબ્જેક્ટ કે જે સ્ટોરેજ ક્લાયંટ ફંક્શન આપે છે તે આ કાર્યોને વ્યાખ્યાયિત કરે છે:

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

 ## લોગીંગ
 Mobiletto [winston](https://www.npmjs.com/package/winston) લૉગિંગ લાઇબ્રેરીનો ઉપયોગ કરે છે.

 લૉગ્સમાં **ફાઇલ પાથ અને ભૂલ સંદેશાઓ હશે**, પરંતુ તેમાં **ક્યારેય** કી, રહસ્યો,
 અથવા કોઈપણ અન્ય કનેક્શન રૂપરેખાંકન માહિતી.

 ### લોગ લેવલ
 લોગ લેવલ સેટ કરવા માટે `MOBILETTO_LOG_LEVEL` પર્યાવરણ ચલનો ઉપયોગ કરો, એકનો ઉપયોગ કરીને
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) માં વ્યાખ્યાયિત `npm` સ્તરોમાંથી

 ડિફૉલ્ટ સ્તર `error` છે. સૌથી વર્બોઝ લેવલ `silly` છે, જો કે હાલમાં મોબાઇલટો
 `debug` નીચેના સ્તરો પર લોગ થતું નથી

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### લોગ ફાઈલ
 મૂળભૂત રીતે, લોગર કન્સોલ પર લખે છે. ફાઇલમાં લોગ મોકલવા માટે, `MOBILETTO_LOG_FILE` સેટ કરો
 પર્યાવરણ ચલ. ફાઇલમાં લોગીંગ કરતી વખતે, લોગ્સ હવે કન્સોલ પર લખવામાં આવશે નહીં.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 લોગીંગ બંધ કરવા માટે:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
