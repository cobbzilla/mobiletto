മൊബൈൽറ്റോ
 =========

 Mobiletto ഒരു JavaScript സ്റ്റോറേജ് അബ്‌സ്‌ട്രാക്ഷൻ ലെയറാണ്, ഓപ്ഷണൽ സുതാര്യമായ ക്ലയന്റ്-സൈഡ് എൻക്രിപ്ഷനും.

 # ഉള്ളടക്കം
 * [എന്തുകൊണ്ട് മൊബൈൽറ്റോ?](#എന്തുകൊണ്ട്-മൊബൈലെറ്റോ?)
 * [ദ്രുത ആരംഭം](#ക്വിക്ക്-സ്റ്റാർട്ട്)
 * [മൊബിലെറ്റോ CLI](#mobiletto-cli)
 * [ഉറവിടം](#ഉറവിടം)
 * [അടിസ്ഥാന ഉപയോഗം](#അടിസ്ഥാന ഉപയോഗം)
 * [മെറ്റാഡാറ്റ](#മെറ്റാഡാറ്റ)
 * [ഇതര ഇറക്കുമതി ശൈലി](#ആൾട്ടർനേറ്റ്-ഇറക്കുമതി-ശൈലി)
 * [കാഷിംഗ്](#കാഷിംഗ്)
 * [മിററിംഗ്](#മിററിംഗ്)
 * [സുതാര്യമായ എൻക്രിപ്ഷൻ](#സുതാര്യ-എൻക്രിപ്ഷൻ)
 * [കീ റൊട്ടേഷൻ](#കീ-റൊട്ടേഷൻ)
 * [ഡ്രൈവർ ഇന്റർഫേസ്](#ഡ്രൈവർ-ഇന്റർഫേസ്)
 * [ലോഗിംഗ്](#ലോഗിംഗ്)

 # ഇത് മറ്റൊരു ഭാഷയിൽ വായിക്കുക
 ഈ README.md പ്രമാണം [hokeylization](https://github.com/cobbzilla/hokeylization) വഴി വിവർത്തനം ചെയ്‌തു
 **[Google Translate പിന്തുണയ്ക്കുന്ന എല്ലാ ഭാഷകളും](https://cloud.google.com/translate/docs/languages)!**

 ഇത് തികഞ്ഞതല്ലെന്ന് എനിക്ക് ഉറപ്പുണ്ട്, പക്ഷേ ഇത് ഒന്നിനും കൊള്ളാത്തതായിരിക്കുമെന്ന് ഞാൻ പ്രതീക്ഷിക്കുന്നു!

 [🇸🇦 അറബിക്](../ar/README.md)
 [🇧🇩 ബംഗാളി](../bn/README.md)
 [🇩🇪 ജർമ്മൻ](../de/README.md)
 [🇺🇸 ഇംഗ്ലീഷ്](../en/README.md)
 [🇪🇸 സ്പാനിഷ്](../es/README.md)
 [🇫🇷 ഫ്രഞ്ച്](../fr/README.md)
 [🇹🇩 ഹൗസ](ഡോക്‌സ്/ഹ/README.md)
 [🇮🇳 ഹിന്ദി](../hi/README.md)
 [🇮🇩 ഇന്തോനേഷ്യൻ](../id/README.md)
 [🇮🇹 ഇറ്റാലിയൻ](../it/README.md)
 [🇯🇵 ജാപ്പനീസ്](../ja/README.md)
 [🇰🇷 കൊറിയൻ](../ko/README.md)
 [🇮🇳 മറന്തി](../mr/README.md)
 [🇵🇱 പോളിഷ്](../pl/README.md)
 [🇧🇷 പോർച്ചുഗീസ്](../pt/README.md)
 [🇷🇺 റഷ്യൻ](../ru/README.md)
 [🇰🇪 സ്വാഹിലി](../sw/README.md)
 [🇵🇭 ടാഗലോഗ്](../tl/README.md)
 [🇹🇷 ടർക്കിഷ്](../tr/README.md)
 [🇵🇰 ഉറുദു](../ur/README.md)
 [🇻🇳 വിയറ്റ്നാമീസ്](../vi/README.md)
 [🇨🇳 ചൈനീസ്](../zh/README.md)


 **[📚 ... എല്ലാ ഭാഷകളും ...](../README.md)**
 ----

 ### README-ന്റെ ഈ വിവർത്തനത്തിൽ എന്തെങ്കിലും പ്രശ്നമുണ്ടോ?
 യഥാർത്ഥ [README]ന്റെ ഈ പ്രത്യേക വിവർത്തനം (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 പിഴവുകളുണ്ടാകാം -- *തിരുത്തലുകൾ വളരെ സ്വാഗതം ചെയ്യുന്നു!* ദയവായി ഒരു [GitHub-ൽ പുൾ അഭ്യർത്ഥന](https://github.com/cobbzilla/mobiletto/pulls),
 അല്ലെങ്കിൽ അത് ചെയ്യാൻ നിങ്ങൾക്ക് സുഖമില്ലെങ്കിൽ, [ഒരു പ്രശ്നം തുറക്കുക](https://github.com/cobbzilla/mobiletto/issues)

 ഒരു വിവർത്തനത്തെക്കുറിച്ച് നിങ്ങൾ ഒരു പുതിയ GitHub പ്രശ്നം സൃഷ്ടിക്കുമ്പോൾ, ദയവായി ചെയ്യുക:
 * പേജ് URL ഉൾപ്പെടുത്തുക (ബ്രൗസർ വിലാസ ബാറിൽ നിന്ന് പകർത്തുക/ഒട്ടിക്കുക)
 * തെറ്റായ വാചകം ഉൾപ്പെടുത്തുക (ബ്രൗസറിൽ നിന്ന് പകർത്തുക/ഒട്ടിക്കുക)
 * എന്താണ് തെറ്റെന്ന് ദയവായി വിവരിക്കുക -- വിവർത്തനം തെറ്റാണോ? ഫോർമാറ്റിംഗ് എങ്ങനെയെങ്കിലും തകർന്നോ?
 * ഒരു മികച്ച വിവർത്തനത്തിനുള്ള നിർദ്ദേശം അല്ലെങ്കിൽ വാചകം എങ്ങനെ ശരിയായി ഫോർമാറ്റ് ചെയ്യണം എന്ന നിർദ്ദേശം ദയവായി വാഗ്ദാനം ചെയ്യുക
 * **നന്ദി!**

 ## എന്തുകൊണ്ട് Mobiletto?

 ### ഗുഡ്ബൈ വെണ്ടർ ലോക്ക്-ഇൻ!
 വിവിധ ക്ലൗഡ് സംഭരണ ദാതാക്കൾക്ക് പൊരുത്തമില്ലാത്ത API-കൾ ഉണ്ട്. "S3 അനുയോജ്യത"ക്കായി പരിശ്രമിക്കുന്നവർ പോലും
 വിചിത്രമായ പെരുമാറ്റങ്ങൾ ഉണ്ട്.

 നിങ്ങളുടെ ആപ്പിനായി ഒരു പ്രത്യേക സ്റ്റോറേജ് വെണ്ടർ തിരഞ്ഞെടുക്കുമ്പോൾ, നിങ്ങൾ അവരുടെ API-ലേക്ക് നേരിട്ട് കോഡ് ചെയ്യുകയാണെങ്കിൽ, നിങ്ങളുടെ ആപ്പ്
 ഇപ്പോൾ ആ സേവനത്തെ ആശ്രയിച്ചിരിക്കുന്നു. സമയം കടന്നുപോകുകയും കോഡ് ശേഖരിക്കപ്പെടുകയും ചെയ്യുമ്പോൾ, വെണ്ടർമാർ മാറും
 വർദ്ധിച്ചുവരുന്ന താങ്ങാനാവുന്നില്ല. വെണ്ടർ ലോക്ക്-ഇന്നിന്റെ രസകരമായ ലോകത്തിലേക്ക് സ്വാഗതം!

 ഈ പ്രശ്നം പരിഹരിക്കുന്നതിനാണ് Mobiletto രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. Mobiletto-യുടെ API-യിലേക്ക് നിങ്ങളുടെ ആപ്പ് കോഡ് ചെയ്യുന്നതിലൂടെ, നിങ്ങൾക്ക് എളുപ്പത്തിൽ കഴിയും
 സംഭരണ ദാതാക്കളെ മാറ്റുക, നിങ്ങളുടെ ആപ്പിന്റെ സ്റ്റോറേജ് ലെയർ ഒരേപോലെ പ്രവർത്തിക്കുമെന്ന് അറിയുക.

 ### വിപുലമായ പരിശോധന
 ഓരോ ഡ്രൈവർക്കും 60+ ടെസ്റ്റുകൾ ഉപയോഗിച്ച് എല്ലാ ഡ്രൈവർമാരും ഒരേ സ്വഭാവത്തിനായി പരീക്ഷിക്കുന്നു.
 ഇനിപ്പറയുന്നവയുടെ എല്ലാ സംയോജനത്തിലും ഞങ്ങൾ എല്ലാ ഡ്രൈവറുകളും പരീക്ഷിക്കുന്നു:
 * എൻക്രിപ്ഷൻ: പ്രവർത്തനക്ഷമമാക്കിയതും പ്രവർത്തനരഹിതമാക്കിയതും
 * റെഡിസ് കാഷെ: പ്രവർത്തനക്ഷമമാക്കിയതും പ്രവർത്തനരഹിതമാക്കിയതും

 നിങ്ങൾ ഏത് ഡ്രൈവർ ഉപയോഗിച്ചാലും mobiletto അതേ രീതിയിൽ തന്നെ പെരുമാറുമെന്ന് ഈ സമീപനം ഞങ്ങൾക്ക് സമാധാനം നൽകുന്നു,
 നിങ്ങൾ കാഷിംഗ് കൂടാതെ/അല്ലെങ്കിൽ എൻക്രിപ്ഷൻ പ്രവർത്തനക്ഷമമാക്കുന്നുണ്ടോ എന്നത് പരിഗണിക്കാതെ തന്നെ.

 ### ഡ്രൈവർ പിന്തുണ
 നിലവിലെ Mobiletto സ്റ്റോറേജ് ഡ്രൈവറുകൾ:
 * `s3` : Amazon S3
 * `b2` : ബാക്ക്ബ്ലേസ് B2
 * `local` : ലോക്കൽ ഫയൽസിസ്റ്റം

 *കൂടുതൽ ക്ലൗഡ് സംഭരണ ദാതാക്കളെ പിന്തുണയ്ക്കുന്നതിനുള്ള സംഭാവനകൾ വളരെ സ്വാഗതം ചെയ്യുന്നു!*

 ## mobiletto-cli
 Mobiletto മറ്റ് JavaScript കോഡ് ഉപയോഗിച്ച് ഒരു ലൈബ്രറിയായി ഉപയോഗിക്കാൻ ഉദ്ദേശിച്ചുള്ളതാണ്.

 കമാൻഡ് ലൈനിൽ mobiletto ഉപയോഗിച്ച് പ്രവർത്തിക്കാൻ, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ഉപയോഗിക്കുക

 ## ഉറവിടം
 * [GitHub-ലെ മൊബൈൽ](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## പെട്ടെന്നുള്ള തുടക്കം
 mobiletto `s3` ഡ്രൈവർ ഉപയോഗിക്കുന്ന ഒരു ചെറിയ ഉദാഹരണം.

 ഡ്രൈവർ `b2` അല്ലെങ്കിൽ `local` ആണെങ്കിൽ ഈ കോഡ് ഒരേപോലെ പ്രവർത്തിക്കും.

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
 ## അടിസ്ഥാന ഉപയോഗം
 ഓഫർ ചെയ്യുന്ന മിക്ക സവിശേഷതകളും കാണിക്കുന്ന കൂടുതൽ വിപുലമായ ഉദാഹരണം:

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

 ## മെറ്റാഡാറ്റ
 `metadata` കമാൻഡ് ഒരൊറ്റ ഫയൽസിസ്റ്റം എൻട്രിയെക്കുറിച്ചുള്ള മെറ്റാഡാറ്റ നൽകുന്നു.
 അതുപോലെ, `list` കമാൻഡിൽ നിന്നുള്ള റിട്ടേൺ മൂല്യം മെറ്റാഡാറ്റ ഒബ്ജക്റ്റുകളുടെ ഒരു നിരയാണ്.

 ഒരു മെറ്റാഡാറ്റ ഒബ്‌ജക്റ്റ് ഇതുപോലെ കാണപ്പെടുന്നു:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` പ്രോപ്പർട്ടി `file` , `dir` , `link` അല്ലെങ്കിൽ `special` സ്പെഷ്യൽ` ആകാം.

 ഡ്രൈവറിന്റെ തരം അനുസരിച്ച്, ഒരു `list` കമാൻഡ് എല്ലാ ഫീൽഡുകളും നൽകില്ല. `name` , `type` പ്രോപ്പർട്ടികൾ
 എപ്പോഴും ഉണ്ടായിരിക്കണം. തുടർന്നുള്ള ഒരു `metadata` കമാൻഡ് ലഭ്യമായ എല്ലാ പ്രോപ്പർട്ടികളും നൽകും.

 ## ഇതര ഇറക്കുമതി ശൈലി
 പൂർണ്ണ സ്കോപ്പുള്ള മൊഡ്യൂൾ ഇമ്പോർട്ടുചെയ്‌ത് `connect` ഫംഗ്‌ഷൻ ഉപയോഗിക്കുക:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## കാഷിംഗ്
 <a href="https://redis.io">റെഡിസ്</a> കാഷെ ഉപയോഗിച്ച് Mobiletto മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്നു.

 Mobiletto 127.0.0.1:6379-ൽ ഒരു redis ഉദാഹരണത്തിലേക്ക് കണക്റ്റുചെയ്യാൻ ശ്രമിക്കും

 നിങ്ങൾക്ക് ഇവയിലേതെങ്കിലും അസാധുവാക്കാൻ കഴിയും:
 * ലോക്കൽ ഹോസ്റ്റിന് പകരം ഇവിടെ കണക്റ്റുചെയ്യാൻ `MOBILETTO_REDIS_HOST` env var, mobiletto സജ്ജമാക്കുക
 * `MOBILETTO_REDIS_PORT` env var സജ്ജമാക്കുക, ഈ പോർട്ട് ഉപയോഗിക്കും

 Mobiletto അതിന്റെ എല്ലാ റെഡിസ് കീകളും `_mobiletto__` എന്ന പ്രിഫിക്സിൽ സംഭരിക്കും. നിങ്ങൾക്ക് ഇത് മാറ്റാം
 `MOBILETTO_REDIS_PREFIX` env var സജ്ജീകരിക്കുന്നതിലൂടെ.

 നിങ്ങൾക്ക് `opts.redisConfig` ഒബ്‌ജക്‌റ്റ് ഉപയോഗിച്ച് ഓരോ കണക്ഷൻ കാഷിംഗ് സജ്ജീകരിക്കാനും കഴിയും:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis caching വേണ്ടേ?
 പ്രവർത്തനരഹിതമാക്കാൻ: നിങ്ങൾ കണക്ഷൻ സ്ഥാപിക്കുമ്പോൾ, നിങ്ങളുടെ `opts.redisConfig` ഒബ്‌ജക്‌റ്റിൽ `enabled: false` തെറ്റ്` കടന്നുപോകുക.

 ചുവടെ ചർച്ച ചെയ്തതുപോലെ, കാഷെ ചെയ്യൽ പ്രവർത്തനരഹിതമാക്കുന്നത് പ്രകടനത്തെ പ്രതികൂലമായി ബാധിക്കുകയും കൂടുതൽ അഭ്യർത്ഥനകൾക്ക് കാരണമാകുകയും ചെയ്യും
 നിങ്ങൾക്ക് ശരിക്കും ആവശ്യമുള്ള സംഭരണത്തിലേക്ക്.

 ### കാഷിംഗ് മാർഗ്ഗനിർദ്ദേശം
 **എൻക്രിപ്റ്റ് ചെയ്ത സംഭരണം**: എൻക്രിപ്റ്റ് ചെയ്ത സ്റ്റോറേജ് റീഡിംഗ്/റൈറ്റിംഗ് സാധാരണയേക്കാൾ അൽപ്പം മന്ദഗതിയിലാണ്,
 എന്നാൽ ഡയറക്‌ടറികൾക്ക് ചുറ്റും നാവിഗേറ്റ് ചെയ്യുന്നത് (ചില കാര്യങ്ങൾ ചെയ്യുന്നു) വളരെ ചെലവേറിയതാണ്. ഒരു റെഡിസ് കാഷെ ഉപയോഗിക്കുന്നു
 നിങ്ങൾക്ക് കാര്യമായ പ്രകടന ബൂസ്റ്റ് നൽകും.

 ഡിഫോൾട്ട് കാഷെ സുരക്ഷിതമാണ്, എന്നാൽ നിങ്ങൾക്ക് ധാരാളം റൈറ്റ്/നീക്കം പ്രവർത്തനങ്ങൾ ഉണ്ടെങ്കിൽ അത് നന്നായി പ്രവർത്തിക്കില്ല.
 ഏതെങ്കിലും റൈറ്റ് അല്ലെങ്കിൽ നീക്കം ഓപ്പറേഷൻ മുഴുവൻ കാഷെയും അസാധുവാക്കുന്നു, തുടർന്നുള്ള വായനകൾ ഇത് കാണുമെന്ന് ഉറപ്പാക്കുന്നു
 ഏറ്റവും പുതിയ മാറ്റങ്ങൾ.

 ### CLI ടൂളുകൾ
 നിങ്ങൾ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) പോലുള്ള CLI ടൂൾ ഉപയോഗിക്കുകയാണെങ്കിൽ,
 നിങ്ങൾ തീർച്ചയായും redis കാഷെ പ്രവർത്തനക്ഷമമാക്കണമെന്ന് ആഗ്രഹിക്കും, കാരണം ഇത് `mo` കമാൻഡിന്റെ അഭ്യർത്ഥനകളിലുടനീളം നിലനിൽക്കുന്നു.

 ## മിററിംഗ്

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` കമാൻഡ് ഒരു മൊബൈലിൽ നിന്ന് മറ്റൊന്നിലേക്ക് എല്ലാ ഫയലുകളുടെയും ഒറ്റത്തവണ പകർപ്പ് നിർവഹിക്കുന്നു.
 കാലക്രമേണ കണ്ണാടി പരിപാലിക്കുന്നതിനുള്ള ഒരു പ്രക്രിയയും ഇത് പ്രവർത്തിപ്പിക്കുന്നില്ല. `mirror` കമാൻഡ് വീണ്ടും പ്രവർത്തിപ്പിക്കുക
 നഷ്‌ടമായ ഏതെങ്കിലും ഫയലുകൾ സമന്വയിപ്പിക്കുന്നതിന്.

 എത്ര ഫയലുകൾ വിജയകരമായി എന്നതിന്റെ കൗണ്ടറുകളുള്ള ഒരു ലളിതമായ ഒബ്‌ജക്റ്റാണ് `mirror` നിന്നുള്ള റിട്ടേൺ മൂല്യം
 മിറർ ചെയ്‌തു, എത്ര ഫയലുകളിൽ പിശകുകൾ ഉണ്ടായിരുന്നു:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 മുന്നറിയിപ്പ്: വലിയ ഡാറ്റാ സെറ്റുകൾ മിറർ ചെയ്യുന്നത് വളരെ സമയമെടുക്കുന്നതും ബാൻഡ്‌വിഡ്ത്ത് തീവ്രവുമാണ്

 `mirror` കോൾ സെമാന്റിക്സ് ഉപയോഗിച്ച് അത് ആരാണെന്ന് മനസ്സിലാക്കാൻ ചിലപ്പോൾ ആശയക്കുഴപ്പമുണ്ടാക്കാം
 വായനക്കാരൻ, ആരാണ് എഴുത്തുകാരൻ. ഇത് ഒരു അസൈൻമെന്റ് പ്രസ്താവന പോലെ സങ്കൽപ്പിക്കുക: "ഇടത് കൈ മൊബൈൽട്ടോ"
 (മിറർ ചെയ്ത ഡാറ്റ എഴുതിയത്), കൂടാതെ "വലതുവശത്തുള്ള mobiletto" (the
 `mirror` രീതിയിലേക്കുള്ള ആർഗ്യുമെന്റ്) അസൈൻ ചെയ്യുന്ന മൂല്യമാണ് (മിറർ ചെയ്ത ഡാറ്റ റീഡ് ചെയ്യുന്നു).

 ## സുതാര്യമായ എൻക്രിപ്ഷൻ
 സുതാര്യമായ ക്ലയന്റ് സൈഡ് എൻക്രിപ്ഷൻ പ്രവർത്തനക്ഷമമാക്കുക:

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

 എന്താണ് സംഭവിക്കുന്നത്? ഒരു പ്രത്യേക "ഡയറക്‌ടറി എൻട്രി" (ഡയറന്റ്) ഡയറക്‌ടറി (എൻക്രിപ്റ്റ് ചെയ്‌തത്) അതിൽ ഏതൊക്കെ ഫയലുകളാണ് ഉള്ളതെന്ന് ട്രാക്ക് ചെയ്യുന്നു
 ഡയറക്ടറി (അതായത് ഡയറന്റ് ഡയറക്ടറി).
 * `list` കമാൻഡ് ഡയറക്‌ടറി എൻട്രി ഫയലുകൾ വായിക്കുന്നു, ലിസ്‌റ്റ് ചെയ്‌തിരിക്കുന്ന ഓരോ പാതയും ഡീക്രിപ്റ്റ് ചെയ്യുന്നു; തുടർന്ന് ഓരോ ഫയലിനും മെറ്റാഡാറ്റ നൽകുന്നു
 * `list` കമാൻഡുകൾ കൂടുതൽ കാര്യക്ഷമമല്ല, പ്രത്യേകിച്ച് ധാരാളം ഫയലുകളുള്ള ഡയറക്ടറികൾക്ക്
 * `write` കമാൻഡ് ഓരോ രക്ഷിതാവിന്റെയും ഡയറന്റ് ഡയറക്‌ടറിയിൽ ഡയറന്റ് ഫയലുകൾ ആവർത്തിക്കുന്നു; എന്നിട്ട് ഫയൽ എഴുതുന്നു
 * `write` കമാൻഡുകൾ O(N) റൈറ്റുകൾക്ക് കാരണമാകും, N = ഡെപ്ത് ഡയറക്‌ടറി ശ്രേണിയിൽ
 * `remove` കമാൻഡ് അനുബന്ധ ഡയറന്റ് ഫയലിനെയും അതിന്റെ പാരന്റ് ശൂന്യമാണെങ്കിൽ, ആവർത്തിച്ച് നീക്കം ചെയ്യുന്നു; തുടർന്ന് ഫയൽ നീക്കം ചെയ്യുന്നു
 * നോൺ- `remove` കമാൻഡുകൾക്ക് O(N) റീഡുകൾക്കും സാധ്യതയുള്ള അത്രയും ഡിലീറ്റുകൾക്കും, ഡയറക്‌ടറി ശ്രേണിയിൽ N = ഡെപ്‌ത് ഉണ്ടായിരിക്കും.
 * വലുതും ആഴത്തിലുള്ളതുമായ ഫയൽ സിസ്റ്റങ്ങളിലെ `remove` കമാൻഡുകൾ ചെലവേറിയതായിരിക്കും

 ക്ലയന്റ് സൈഡ് എൻക്രിപ്ഷൻ പ്രവർത്തനക്ഷമമാക്കിയിട്ടുണ്ടെങ്കിലും, നിങ്ങളുടെ എൻക്രിപ്റ്റ് ചെയ്ത സെർവർ സൈഡിലേക്ക് പൂർണ്ണ ദൃശ്യപരതയുള്ള ഒരു എതിരാളി
 സ്‌റ്റോറേജ്, കീ ഇല്ലെങ്കിലും, ഡയറക്‌ടറികളുടെ ആകെ എണ്ണവും ഓരോന്നിലും എത്ര ഫയലുകളുണ്ടെന്നും അവയ്‌ക്കൊപ്പം കാണാനാകും
 കുറച്ച് പരിശ്രമം, ഡയറക്ടറി ശ്രേണിയുടെ മൊത്തത്തിലുള്ള ഘടനയിൽ ചിലത് അല്ലെങ്കിൽ എല്ലാം കണ്ടെത്തുക.
 *ശ്രദ്ധിക്കുക: മെച്ചപ്പെട്ട സുരക്ഷയ്ക്കായി താരതമ്യേന പരന്ന ഘടന ഉപയോഗിക്കുക.*
 നിങ്ങളുടെ എൻക്രിപ്ഷൻ അറിയുന്നില്ലെങ്കിൽ, എതിരാളിക്ക് ഡയറക്‌ടറികളുടെ/ഫയലുകളുടെ പേരുകൾ അറിയില്ല.
 കീ അല്ലെങ്കിൽ എൻക്രിപ്ഷൻ വിജയകരമായി തകർത്തു. അപ്പോൾ എല്ലാ പന്തയങ്ങളും ഓഫാണ്!

 ### പ്രകടനവും കാഷിംഗും
 എൻക്രിപ്റ്റ് ചെയ്ത സ്റ്റോറേജിലെ പ്രവർത്തനങ്ങൾ മന്ദഗതിയിലാകും. ആവർത്തിച്ചുള്ള ലിസ്റ്റിംഗുകളും നീക്കം ചെയ്യലുകളും വളരെ സാവധാനത്തിലായിരിക്കും.
 റെഡിസ് വഴിയുള്ള കാഷെ ചെയ്യുന്നത് വളരെയധികം സഹായിക്കുന്നു, എന്നാൽ ഏതെങ്കിലും റൈറ്റുകളിലും നീക്കം ചെയ്യുമ്പോഴും കാഷെ ഫ്ലഷ് ചെയ്യപ്പെടുന്നു എന്നത് ശ്രദ്ധിക്കുക.

 ## കീ റൊട്ടേഷൻ
 നിങ്ങളുടെ പുതിയ കീ ഉപയോഗിച്ച് ഒരു mobiletto സൃഷ്‌ടിക്കുക, തുടർന്ന് പഴയ ഡാറ്റ അതിലേക്ക് മിറർ ചെയ്യുക:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ഡ്രൈവർ ഇന്റർഫേസ്
 ഈ സിഗ്നേച്ചർ ഉപയോഗിച്ച് ഒരു 'storageClient' ഫംഗ്‌ഷൻ എക്‌സ്‌പോർട്ട് ചെയ്യുന്ന ഏതൊരു JS ഫയലുമാണ് ഡ്രൈവർ:

    function storageClient (key, secret, opts)

 * `key` : ഒരു സ്ട്രിംഗ്, നിങ്ങളുടെ API കീ ( `local` ഡ്രൈവറിന് ഇതാണ് അടിസ്ഥാന ഡയറക്ടറി)
 * `secret` : ഒരു സ്ട്രിംഗ്, നിങ്ങളുടെ API രഹസ്യം ( `local` ഡ്രൈവർക്കായി ഒഴിവാക്കാവുന്നതാണ്)
 * `opts` : ഒരു ഒബ്ജക്റ്റ്, പ്രോപ്പർട്ടികൾ ഓരോ ഡ്രൈവർക്കും:
 * `local` , `fileMode` , `dirMode` പ്രോപ്പർട്ടികൾ എങ്ങനെയാണ് പുതിയ ഫയലുകളും ഡയറക്ടറികളും സൃഷ്ടിക്കുന്നതെന്ന് നിർണ്ണയിക്കുന്നു
 * `s3` ന്, `bucket` പ്രോപ്പർട്ടി ആവശ്യമാണ്. ഓപ്ഷണൽ പ്രോപ്പർട്ടികൾ ഇവയാണ്:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 സ്റ്റോറേജ് ക്ലയന്റ് ഫംഗ്‌ഷൻ നൽകുന്ന ഒബ്‌ജക്റ്റ് ഈ ഫംഗ്‌ഷനുകൾ നിർവചിക്കേണ്ടതാണ്:

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

 ## ലോഗിംഗ്
 Mobiletto [winston](https://www.npmjs.com/package/winston) ലോഗിംഗ് ലൈബ്രറി ഉപയോഗിക്കുന്നു.

 ലോഗുകളിൽ ** ഫയൽ പാതകളും പിശക് സന്ദേശങ്ങളും അടങ്ങിയിരിക്കും, എന്നാൽ **ഒരിക്കലും** കീകളും രഹസ്യങ്ങളും,
 അല്ലെങ്കിൽ മറ്റേതെങ്കിലും കണക്ഷൻ കോൺഫിഗറേഷൻ വിവരങ്ങൾ.

 ### ലോഗ് ലെവൽ
 ലോഗ് ലെവൽ സജ്ജീകരിക്കാൻ `MOBILETTO_LOG_LEVEL` എൻവയോൺമെന്റ് വേരിയബിൾ ഉപയോഗിക്കുക, ഒന്ന് ഉപയോഗിച്ച്
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) എന്നതിൽ നിർവചിച്ചിരിക്കുന്ന `npm` ലെവലുകൾ

 സ്ഥിരസ്ഥിതി ലെവൽ `error` ആണ്. നിലവിൽ mobiletto ആണെങ്കിലും ഏറ്റവും വാചാലമായ ലെവൽ `silly` ആണ്
 `debug` താഴെയുള്ള ലെവലിൽ ലോഗ് ചെയ്യുന്നില്ല

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ലോഗ് ഫയൽ
 സ്ഥിരസ്ഥിതിയായി, ലോഗർ കൺസോളിലേക്ക് എഴുതുന്നു. ഒരു ഫയലിലേക്ക് ലോഗുകൾ അയയ്‌ക്കാൻ, `MOBILETTO_LOG_FILE` സജ്ജീകരിക്കുക
 പരിസ്ഥിതി വേരിയബിൾ. ഒരു ഫയലിലേക്ക് ലോഗിൻ ചെയ്യുമ്പോൾ, ലോഗുകൾ ഇനി കൺസോളിൽ എഴുതപ്പെടില്ല.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ലോഗിംഗ് ഓഫാക്കാൻ:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
