Mobiletto
 ========

 Mobiletto bụ oyi akwa abstraction nchekwa Javascript, nwere nhọrọ nzuzo nzuzo-n'akụkụ ndị ahịa.

 # ọdịnaya
 * [Gịnị kpatara Mobiletto?](#Gịnị kpatara-Mobiletto?)
 * [Bido ngwa ngwa](#Bido ngwa ngwa)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Isi Iyi](#Isi Iyi)
 * [Nwụnye](#Nwụnye)
 * [Nkwado na Ego](#Nkwado-na Ego)
 * [Ojiji isi](#Basic-usage)
 * [Metadata](#Metadata)
 * [Ụdị mbubata ọzọ](#Ọzọ-import-style)
 * [Caching](#Caching)
 * [Mirroring](#Ego)
 * [Transparent encryption](#Transparent-encryption)
 * [Igodo ntụgharị](#Igodo-ntụgharị)
 * [Ntụgharị ọkwọ ụgbọ ala](#Driver-interface)
 * [Ịbanye](#Ịbanye)

 # Gụọ nke a n'asụsụ ọzọ
 Atụgharịrị asụsụ README.md akwụkwọ a, site na [hokeylization](https://github.com/cobbzilla/hokeylization), ka ọ bụrụ
 **[Google Translate na-akwado asụsụ ọ bụla](https://cloud.google.com/translate/docs/languages)!**

 Eji m n'aka na ọ zughị oke, mana enwere m olileanya na ọ ka mma karịa ihe ọ bụla!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 Bekee](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Asụsụ niile ...](../README.md)**
 ----

 ### Enwere nsogbu na ntụgharị asụsụ README a?
 Ntụgharị asụsụ nke izizi [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 nwere ike inwe ntụpọ -- * A nabatara mgbazi!* Biko ziga arịrịọ [pull arịrịọ na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ma ọ bụ ọ bụrụ na ahụ adịghị gị mma ime nke ahụ, [mepee mbipụta](https://github.com/cobbzilla/mobiletto/issues)

 Mgbe ị mepụtara mbipụta GitHub ọhụrụ gbasara ntụgharị asụsụ, biko mee:
 * tinye URL ibe (detuo / mado site na ebe adreesị ihe nchọgharị)
 * tinye ederede ezighi ezi (detuo / mado site na ihe nchọgharị)
 * biko kọwaa ihe adịghị mma -- ntụgharị asụsụ ezighi ezi? Agbajiri usoro nhazi ahụ n'ụzọ ụfọdụ?
 * jiri obiọma nye ntụnye nke ntụgharị asụsụ ka mma, ma ọ bụ ka esi ahazi ederede nke ọma
 * **Daalụ!**

 ## Gịnị kpatara Mobiletto?

 ### Mkpọchi onye na-ere ihe ọma!
 Ndị na-eweta nchekwa igwe ojii dị iche iche nwere API na-adakọghị ọnụ. Ọbụna ndị na-agbalị maka "S3 ndakọrịta"
 nwere àgwà nzuzu.

 Mgbe ịhọrọ otu onye na-ere nchekwa maka ngwa gị, ọ bụrụ na ị tinye koodu ozugbo na API ha, ngwa gị
 ugbu a dabere na ọrụ ahụ. Ka oge na-aga na koodu na-agbakọta, ndị na-ere ahịa na-agbanwe agbanwe na-aghọ
 na-esiwanye ike. Nnọọ n'ime ụwa egwu egwu nke mkpọchi ndị na-ere ahịa!

 Emebere Mobiletto iji dozie nsogbu a. Site na itinye koodu gị ngwa na mobiletto's API, ị nwere ike mfe
 gbanwee ndị na-eweta nchekwa wee mara na oyi akwa nchekwa ngwa gị ga-eme otu ihe.

 ### Nnwale sara mbara
 A na-anwale ndị ọkwọ ụgbọ ala niile maka otu omume ahụ yana ule 60+ maka onye ọkwọ ụgbọ ala ọ bụla.
 Anyị na-anwale ndị ọkwọ ụgbọala niile na ngwakọta ọ bụla:
 * Izo ya ezo: ma enyere ma gbanyụọ
 * Redis cache: enyere ma nwee nkwarụ

 Usoro a na-enye anyị obi iru ala na mobiletto ga-eme otu ihe ahụ n'agbanyeghị onye ọkwọ ụgbọ ala ị na-eji,
 na n'agbanyeghị ma ị na-enyere caching na/ma ọ bụ izo ya ezo.

 ### Nkwado ọkwọ ụgbọ ala
 Ndị ọkwọ ụgbọala nchekwa Mobiletto dị ugbu a:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistemụ faịlụ mpaghara

 * A na-anabata onyinye iji kwado ndị na-eweta nchekwa igwe ojii!*

 ## mobiletto-cli
 Ezubere Mobiletto ka ọ bụrụ ọba akwụkwọ site na koodu Javascript ndị ọzọ.

 Iji rụọ ọrụ na mobiletto na ahịrị iwu, jiri [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Isi mmalite
 * [mobiletto na GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Nkwado na ego
 Ana m agbali ịbụ ọkachamara mmepe ngwanrọ mepere emepe. Anọ m na-arụ ọrụ
 ụlọ ọrụ ngwanrọ ruo ọtụtụ afọ, amalitela m ụlọ ọrụ na-aga nke ọma ma ree ha ụlọ ọrụ ọha.
 N’oge na-adịbeghị anya, a chụrụ m n’ọrụ, enweghịkwa m ọrụ ọ bụla e debere n’ahịrị

 Ya mere, m ga-agbalị ide software na-enyere aka hụ ma ọ na-arụ ọrụ

 Ọ bụrụ na ị na-enwe mmasị na iji nke a software, M ga-enwe nnọọ ekele maka ọbụna
 kacha nta [onyinye kwa ọnwa site na Patreon](https://www.patreon.com/cobbzilla)

 *Daalụ!*

 ## Nwụnye
 Wụnye site na iji `npm` ma ọ bụ `yarn` . Ị nwere ike ịchọrọ ụdị `lite` nke na-agụnyeghị ihe niile
 faịlụ README atụgharịrị:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Ọ bụrụ n'ezie na ịchọrọ faịlụ README n'asụsụ ọ bụla, wụnye ụdị zuru ezu:

    npm install mobiletto
    yarn add mobiletto

 ## Mmalite ngwa ngwa
 Ihe atụ dị mkpirikpi na-eji ọkwọ ụgbọala mobiletto `s3` .

 Koodu a ga-eme otu ihe ahụ ma ọ bụrụ na ọkwọ ụgbọ ala bụ `b2` ma ọ bụ `local` .

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
 ## Ihe eji eme ihe
 Ọmụmaatụ sara mbara karị, na-egosi ọtụtụ atụmatụ enyere:

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

 ##Metadata
 Iwu `metadata` na-eweghachi metadata gbasara otu ntinye sistemụ faịlụ.
 N'otu aka ahụ, uru nloghachi sitere na iwu `list` bụ ọtụtụ ihe metadata.

 Ihe metadata dị ka nke a:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Ụdị `type` nwere ike ịbụ `file` ' , `dir` , `link` , ma ọ bụ `special` .

 Dabere n'ụdị ọkwọ ụgbọ ala, iwu `list` nwere ike ọ gaghị eweghachi mpaghara niile. Njirimara `name` ' na `type`
 kwesịrị ịdị mgbe niile. Iwu `metadata` na-esote ga-eweghachite akụrụngwa niile dị.

 ## Ụdị mbubata ọzọ
 Bubata modul zuru oke wee jiri ọrụ `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Caching
 Mobiletto na-arụ ọrụ kacha mma na <a href="https://redis.io">redis</a> cache.

 Mobiletto ga-anwa ijikọ na ihe atụ redis na 127.0.0.1:6379

 Ị nwere ike ịkwụsị nke ọ bụla n'ime ndị a:
 * Tọọ `MOBILETTO_REDIS_HOST` env var, mobiletto jikọọ ebe a kama localhost
 * Tọọ `MOBILETTO_REDIS_PORT` env var, ọdụ ụgbọ mmiri a ga-eji

 Mobiletto ga-eji prefix `_mobiletto__` igodo redis ya niile. Ị nwere ike ịgbanwe nke a
 site na ịtọ `MOBILETTO_REDIS_PREFIX` env var.

 Ị nwekwara ike iji ihe `opts.redisConfig` caching njikọ ọ bụla:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Ịchọghị caching redis?
 Iji gbanyụọ: nyefee `enabled: false` ' n'ime ihe `opts.redisConfig` gị mgbe ị mebere njikọ gị.

 Dị ka a tụlere n'okpuru, ịkwụsị caching ga-enwe mmetụta ọjọọ na arụmọrụ ma weta arịrịọ ndị ọzọ
 na nchekwa nke ị chọrọ n'ezie.

 ### ntụzịaka caching
 ** Nchekwa ezoro ezo ***: ịgụ / ide nchekwa ezoro ezo bụ naanị ntakịrị nwayọ karịa ka ọ dị,
 mana ịgagharị gburugburu akwụkwọ ndekọ aha (nke ụfọdụ ihe na-eme) dị oke ọnụ. Iji redis cache
 ga-enye gị nkwalite arụmọrụ dị ịrịba ama.

 Cache ndabara adịghị mma, mana ọ naghị arụ ọrụ nke ọma ma ọ bụrụ na ị nwere ọtụtụ ọrụ ide/wepụ.
 Edemede ma ọ bụ wepu ọrụ ọ bụla na-emebi cache niile, na-ahụ na agụ ga-esochi ga-ahụ ya
 ọhụrụ mgbanwe.

 ### Ngwa CLI
 Ọ bụrụ na ị na-eji ngwa CLI dị ka [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ị ga-achọ ka agbanyere cache redis, ebe ọ na-aga n'ofe arịrịọ nke iwu `mo` .

 ## Ngosipụta

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Iwu `mirror` na-arụ otu oge faịlụ niile site na otu mobiletto gaa na nke ọzọ.
 Ọ naghị agba usoro ọ bụla iji nọgide na-enyo enyo ka oge na-aga. Gbaa iwu `mirror` ọzọ
 imekọrịta faịlụ ọ bụla na-efu.

 Uru nloghachi sitere na `mirror` bụ ihe dị mfe nwere ọnụọgụ maka faịlụ ole emere nke ọma
 enyo enyo na faịlụ ole nwere mperi:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ỊDỌ AKA NA NTỊ: Igosipụta nnukwu data tent nwere ike na-ewe oge na bandwit-akpa ike

 Site na semantics oku `mirror` ọ nwere ike bụrụ ihe mgbagwoju anya mgbe ụfọdụ ịghọta onye bụ
 onye na-agụ na onye bụ onye edemede. Were ya dị ka nkwupụta ọrụ: "mobiletto aka ekpe"
 bụ ihe a na-ekenye na (ederede enyo enyo), yana "mobiletto aka nri" (the
 arụmụka na usoro `mirror` ) bụ uru a na-ekenye (a na-agụ data enyo).

 ## nzuzo nzuzo
 Kwado ihe nzuzo n'akụkụ ndị ahịa nke ọma:

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

 Kedu nke na-eme? Akwụkwọ ndekọ aha "ntinye ndekọ" dị iche (ezoro ezo) na-esochi ihe faịlụ dị na nke ahụ
 akwụkwọ ndekọ aha (aka nke dient directory).
 * Iwu `list` na-agụ faịlụ ntinye akwụkwọ ndekọ aha, mebie ụzọ ọ bụla edepụtara; wee weghachi metadata maka faịlụ ọ bụla
 * `list` adịghị arụ ọrụ nke ọma, ọkachasị maka akwụkwọ ndekọ aha nwere nnukwu faịlụ
 * Iwu `write` dere' na-ede faịlụ dị iche iche na ndekọ ndekọ aha nne na nna ọ bụla, na-emegharị ugboro ugboro; wee dee faịlụ ahụ
 `write` ga-ebute O(N) dere, yana N = omimi n'ime usoro ndekọ aha.
 * Iwu `remove` na-ewepu faịlụ dient kwekọrọ, yana nne na nna ya ọ bụrụ na ọ tọgbọrọ chakoo, na-emegharị ugboro ugboro; wee wepụ faịlụ ahụ
 * Iwu `remove` na-anaghị emegharị emegharị ga-ebute O(N) agụ yana nwee ike ihichapụ, yana N = omimi n'ime usoro ndekọ aha.
 * `remove` na-emegharị na sistemụ faịlụ buru ibu ma dị omimi nwere ike ịdị ọnụ

 Rịba ama na ọbụlagodi na-enyere onye ahịa aka izo ya ezo, onye mmegide nwere ọhụhụ zuru oke n'ime akụkụ sava gị ezoro ezo.
 nchekwa, ọbụlagodi na-enweghị igodo, ka nwere ike ịhụ ọnụọgụ akwụkwọ ndekọ aha na faịlụ ole dị na nke ọ bụla, yana ya
 mgbalị ụfọdụ, chọpụta ụfọdụ ma ọ bụ ihe niile n'ozuzu nhazi nke usoro ndekọ aha.
 *Rịba ama: Jiri usoro dị larịị maka nchekwa ka mma.*
 Onye mmegide ahụ agaghị ama aha akwụkwọ ndekọ aha/faịlụ ma ọ bụrụ na ha makwara izo ya ezo
 igodo ma ọ bụ ma ọ bụghị nke ọma gbawara ezoro ezo. Nzọ niile apụọla mgbe ahụ!

 ### Arụmọrụ na caching
 Ọrụ na nchekwa ezoro ezo nwere ike ịdị nwayọ. Ndepụta ndetu na mwepụ nwere ike ịdị ngwa ngwa.
 Caching site na redis na-enyere aka nke ukwuu, mana rịba ama na ebe nchekwa ahụ na-agbanye na ihe ọ bụla edere ma ọ bụ wepụ ya.

 ## ntụgharị igodo
 Jiri igodo ọhụrụ gị mepụta mobiletto, wee gosipụta data ochie n'ime ya:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## interface ọkwọ ụgbọ ala
 Onye ọkwọ ụgbọ ala bụ faịlụ JS ọ bụla na-ebupụ ọrụ 'storageClient' na mbinye aka a:

    function storageClient (key, secret, opts)

 * `key` : eriri, igodo API gị (maka onye ọkwọ ụgbọ ala `local` nke a bụ ndekọ ntọala)
 * `secret` : eriri, nzuzo API gị (enwere ike ịhapụ maka ọkwọ ụgbọ ala `local` mpaghara')
 * `opts` : ihe, akụrụngwa bụ onye ọkwọ ụgbọ ala:
 * Maka `local` , njirimara `fileMode` na `dirMode` na-ekpebi ka esi emepụta faịlụ na akwụkwọ ndekọ aha ọhụrụ.
 * Maka `s3` , a chọrọ `bucket` . Njirimara nhọrọ bụ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Ihe nchekwa ọrụ onye ahịa ga-eweghachi ga-akọwapụta ọrụ ndị a:

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

 ## Ịbanye
 Mobiletto na-eji ọba akwụkwọ ndekọ [winston](https://www.npmjs.com/package/winston).

 Ndekọ ** ga-enwe ụzọ faịlụ na ozi njehie, mana agaghị enwe igodo, nzuzo,
 ma ọ bụ ozi nhazi njikọ ọ bụla ọzọ.

 ### ndekọ ọkwa
 Jiri mgbanwe gburugburu `MOBILETTO_LOG_LEVEL` ka ịtọọ ọkwa ndekọ, na-eji otu
 nke ọkwa `npm` akọwapụtara na [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Ọkwa ndabara bụ `error` . Ọkwa kacha ekwu okwu bụ `silly` , ọ bụ ezie na ugbu a mobiletto
 adịghị abanye n'ọkwa dị n'okpuru `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Tinye faịlụ
 Site na ndabara, onye na-edebanye aha na-edegara console. Iji zipu ndekọ na faịlụ, tọọ `MOBILETTO_LOG_FILE`
 mgbanwe gburugburu ebe obibi. Mgbe ị na-abanye na faịlụ, agaghịzi ede ndekọ na njikwa.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Iji gbanyụọ osisi:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
