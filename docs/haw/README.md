Mobiletto
 =========

 ʻO Mobiletto kahi ʻāpana abstraction storage JavaScript, me ka hoʻopunipuni ʻaoʻao o ka mea kūʻai aku.

 # Maʻiʻo
 * [No ke aha ʻo Mobiletto?](#No ke aha-Mobiletto?)
 * [Hoʻomaka wikiwiki](#Hoʻomaka wikiwiki)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Source](#Source)
 * [Hoʻokomo](#Hoʻokomo)
 * [Kōkoʻo a me ke kālā](#Support-and-Funding)
 * [Hoʻohana kumu](#Hoʻohana kumu)
 * [Metadata](#Metadata)
 * [Kaila hoʻokomo ʻokoʻa](#Kaila-hoʻokomo ʻokoʻa)
 * [Ke hoʻopaʻa ʻia](#Caching)
 * [Mirroring](#Mirroring)
 * [Hoʻopili paʻapū](#Pūnaewele-alohi)
 * [Hoʻololi kī](#Hoʻololi kī)
 * [Ke kaʻa hoʻokele](#Keaukaha-kaʻa)
 * [Logging](#Logging)

 # E heluhelu i kēia ma ka ʻōlelo ʻē aʻe
 Ua unuhi ʻia kēia palapala README.md, ma o [hokeylization](https://github.com/cobbzilla/hokeylization), i loko
 **[kākoʻo ʻia kēlā me kēia ʻōlelo e ka Unuhi Google](https://cloud.google.com/translate/docs/languages)!**

 Ua maopopo iaʻu ʻaʻole ia i hemolele, akā manaʻo wau ʻoi aku ka maikaʻi ma mua o ka ʻole!

 [🇸🇦 ʻAlapia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Kelemānia](../de/README.md)
 [🇺🇸 Pelekania](../en/README.md)
 [🇪🇸 Paniolo](../es/README.md)
 [🇫🇷 Palani](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Kepani](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polani](../pl/README.md)
 [🇧🇷 Pukiki](../pt/README.md)
 [🇷🇺 Lūkia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Pākē](../zh/README.md)


 **[📚 ... Nā ʻŌlelo a pau ...](../README.md)**
 ----

 ### Aia kekahi pilikia me kēia unuhi o ka README?
 ʻO kēia unuhi kikoʻī o ka [README] kumu (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 hewa paha -- * mahalo nui ʻia nā hoʻoponopono!* E ʻoluʻolu e hoʻouna i [noi huki ma GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 a inā ʻaʻole ʻoluʻolu ʻoe e hana i kēlā, [wehe i kahi pilikia](https://github.com/cobbzilla/mobiletto/issues)

 Ke hana ʻoe i kahi pilikia GitHub hou e pili ana i kahi unuhi, e ʻoluʻolu e hana:
 * hoʻokomo i ka URL o ka ʻaoʻao (kope/paʻi mai ka ʻaoʻao ʻaoʻao pūnaewele)
 * hoʻokomo i ka kikokikona pololei i hewa (kope/paʻi mai ka polokalamu kele pūnaewele)
 * ʻoluʻolu e wehewehe i ka hewa -- hewa ka unuhi? Ua haki paha ke ʻano o ke ʻano?
 * ʻoluʻolu e hāʻawi i ka manaʻo o kahi unuhi ʻoi aku ka maikaʻi, a i ʻole pehea e hoʻopili pono ʻia ai ka kikokikona
 * **Mahalo!**

 ## No ke aha ʻo Mobiletto?

 ### Aloha ka mea kūʻai aku laka-i!
 Loaʻa nā API like ʻole i nā mea hoʻolako mālama kapua. ʻO ka poʻe e hoʻoikaika nei no ka "S3 compatibility"
 loaʻa nā ʻano idiosyncratic.

 Ke koho ʻoe i kahi mea kūʻai waihona no kāu polokalamu, inā ʻoe e helu pololei i kā lākou API, kāu app
 i kēia manawa ke hilinaʻi nei i kēlā lawelawe. Ke hele nei ka manawa a hōʻiliʻili nā code, lilo nā mea kūʻai aku
 mahuahua hiki ole. Welina mai i ka honua leʻaleʻa o ka mea kūʻai lock-in!

 Ua hoʻolālā ʻia ʻo Mobiletto e hoʻoponopono i kēia pilikia. Ma ka hoʻopili ʻana i kāu polokalamu i ka mobiletto's API, hiki iā ʻoe ke maʻalahi
 e hoʻololi i nā mea hoʻolako waihona a ʻike e ʻano like ke ʻano o ka papa waiho o kāu app.

 ### Hoʻāʻo nui
 Hoʻāʻo ʻia nā mea hoʻokele a pau no ka ʻano like me 60+ mau hoʻāʻo no kēlā me kēia kaʻa.
 Hoʻāʻo mākou i nā mea hoʻokele āpau me kēlā me kēia hui ʻana o:
 * Hoʻopili: hoʻohana ʻia a paʻa ʻole
 * Redis cache: hoʻohana ʻia a paʻa ʻole

 Hāʻawi kēia ala iā mākou i ka maluhia o ka noʻonoʻo e hana like ana ʻo mobiletto me ka nānā ʻole i ka mea hoʻokele āu e hoʻohana ai,
 a me ka nānā ʻole inā hiki iā ʻoe ke hoʻokomo i ka cache a/a i ʻole ka hoʻopili ʻana.

 ### Kākoʻo hoʻokele
 Nā mea hoʻokele mālama ʻo Mobiletto i kēia manawa:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : ʻōnaehana waihona kūloko

 *Hoʻokipa maikaʻi ʻia nā hāʻawi e kākoʻo i nā mea hoʻolako mālama kapua!*

 ## mobiletto-cli
 Hoʻohana ʻia ʻo Mobiletto ma ke ʻano he waihona e nā code JavaScript ʻē aʻe.

 No ka hana ʻana me mobiletto ma ka laina kauoha, e hoʻohana iā [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Puna
 * [mobiletto ma GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto ma npm](https://www.npmjs.com/package/mobiletto)

 ## Kākoʻo a me ke kālā
 Ke hoʻāʻo nei au e lilo i mea hoʻomohala polokalamu open source. Ua hana au i loko
 ka ʻoihana polokalamu no nā makahiki he nui, ua hoʻomaka wau i nā hui kūleʻa a kūʻai aku iā lākou i nā hui lehulehu.
 I kēia mau lā ua nalowale kaʻu hana, a ʻaʻohe aʻu hana ʻē aʻe i laina

 No laila e hoʻāʻo wau e kākau i nā polokalamu kōkua a ʻike inā pono ia

 Inā hauʻoli ʻoe i ka hoʻohana ʻana i kēia polokalamu, e mahalo nui wau no ka
 liʻiliʻi loa [koʻikoʻi o kēlā me kēia mahina ma o Patreon](https://www.patreon.com/cobbzilla)

 *Mahalo!*

 ## Hoʻokomo
 E hoʻouka me ka hoʻohana ʻana i ka `npm` a i ʻole `yarn` . Makemake paha ʻoe i ka mana `lite` ʻaʻole i hoʻokomo i nā mea āpau
 i unuhi ʻia nā faila README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Inā makemake ʻoe i nā faila README i kēlā me kēia ʻōlelo, e hoʻokomo i ka mana piha:

    npm install mobiletto
    yarn add mobiletto

 ## Hoʻomaka wikiwiki
 He laʻana pōkole e hoʻohana ana i ka mea hoʻokele mobiletto `s3` .

 E holo like ana kēia code inā ʻo ka mea hoʻokele `b2` a i ʻole `local` .

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
 ## Hoʻohana kumu
 ʻO kahi laʻana nui loa, e hōʻike ana i ka hapa nui o nā hiʻohiʻona i hāʻawi ʻia:

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

 ## ʻIkepili
 Hoʻihoʻi ke kauoha `metadata` i ka metadata e pili ana i hoʻokahi waihona waihona waihona.
 Pēlā nō, ʻo ka waiwai hoʻihoʻi mai ke kauoha `list` he ʻano o nā mea metadata.

 Penei ke ano o kekahi mea metadata:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Hiki ke ʻano ʻano ʻano `type` `file` , `dir` , `link` , a i ʻole `special` .

 Ma muli o ke ʻano o ka mea hoʻokele, ʻaʻole hiki i kahi kauoha `list` ke hoʻihoʻi i nā kahua āpau. ʻO ka `name` a me `type`
 pono e noho mau. E hoʻihoʻi mai kahi kauoha `metadata` i nā waiwai āpau i loaʻa.

 ## Kāhua hoʻokomo ʻē aʻe
 Hoʻokomo i ka module piha piha a hoʻohana i ka hana `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Ke kāʻei ʻana
 Hana maikaʻi ʻo Mobiletto me kahi cache <a href="https://redis.io">redis</a> .

 E hoʻāʻo ʻo Mobiletto e hoʻopili i kahi ʻano redis ma 127.0.0.1:6379

 Hiki iā ʻoe ke hoʻololi i kekahi o kēia:
 * E hoʻonohonoho i ka `MOBILETTO_REDIS_HOST` env var, mobiletto hoʻohui ma ʻaneʻi ma kahi o ka localhost
 * E hoʻonoho i ka `MOBILETTO_REDIS_PORT` env var, e hoʻohana ʻia kēia awa

 E mālama ʻo Mobiletto i kāna mau kī redis me ka prefix `_mobiletto__` . Hiki iā ʻoe ke hoʻololi i kēia
 ma ka hoʻonohonoho ʻana i ka var env `MOBILETTO_REDIS_PREFIX` .

 Hiki iā ʻoe ke hoʻonohonoho i ka hoʻopaʻa ʻana i kēlā me kēia pilina me ka mea `opts.redisConfig` ':

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ʻAʻole makemake e hoʻihoʻi hou i ka cache?
 No ka hoʻopau: e hoʻokomo i ka `enabled: false` i kāu mea `opts.redisConfig` ke hoʻokumu ʻoe i kāu pilina.

 E like me ka mea i kūkākūkā ʻia ma lalo nei, ʻo ka hoʻopau ʻana i ka cache e loaʻa i kahi hopena maikaʻi ʻole i ka hana a loaʻa i nā noi hou aku
 i ka waihona āu e pono ai.

 ### Ke alakaʻi cache
 ** Waihona i hoʻopaʻa ʻia**: ʻoi aku ka lohi o ka heluhelu/kākau ʻana i kahi waihona i hoʻopili ʻia ma mua o ka maʻamau,
 akā ʻo ka hoʻokele ʻana a puni nā papa kuhikuhi (kahi e hana ai kekahi mau mea) ʻoi aku ka pipiʻi. Ke hoʻohana nei i kahi cache redis
 e hāʻawi iā ʻoe i kahi hoʻoikaika nui.

 Paʻa ka cache paʻamau, akā ʻaʻole hana maikaʻi inā he nui kāu mau hana kākau/wehe.
 Hoʻopau ka hana kākau a wehe paha i ka cache holoʻokoʻa, e hōʻoia ana e ʻike ʻia nā heluhelu ma hope
 nā hoʻololi hou.

 ### mea hana CLI
 Inā ʻoe e hoʻohana nei i kahi mea hana CLI e like me [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Makemake ʻoe e hoʻohana ʻia ka cache redis, no ka mea e mau ana ia ma nā ʻōlelo ʻana o ke kauoha `mo` .

 ## Ke aniani ana

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Hoʻohana ke kauoha `mirror` i hoʻokahi kope o nā faila a pau mai kekahi mobiletto a i kekahi.
 ʻAʻole ia e holo i kekahi kaʻina hana e mālama i ke aniani i ka manawa. E holo hou i ke kauoha `mirror`
 e hoʻonohonoho i nā faila i nalowale.

 ʻO ka waiwai hoʻihoʻi mai `mirror` ' he mea maʻalahi me nā helu helu no ka nui o nā faila i kūleʻa
 aniani a me ka nui o nā faila i hewa:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 'Ōlelo Aʻo: ʻO ka hoʻohālikelike ʻana i nā pūʻulu ʻikepili nui hiki ke hoʻopau i ka manawa a me ka bandwidth-nui

 Me ka `mirror` call semantics hiki ke huikau i kekahi manawa ke maopopo ʻo wai ka
 mea heluhelu a ʻo wai ka mea kākau. E noʻonoʻo ʻoe e like me ka ʻōlelo kuhikuhi: ka "lima hema mobiletto"
 ʻo ia ka mea i hāʻawi ʻia i (ka ʻikepili aniani i kākau ʻia), a me ka "mobiletto lima ʻākau" (ka
 ʻO ka hoʻopaʻapaʻa i ke `mirror` ') ʻo ia ka waiwai i hāʻawi ʻia (heluhelu ʻia ka ʻike aniani).

 ## Hoʻopili paʻa
 E ho'ā i ka hoʻopunipuni ʻaoʻao o nā mea kūʻai aku:

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

 He aha ka hana? Hoʻokaʻawale ʻia kahi papa kuhikuhi "hoʻokomo" (dirent) (hoʻopili ʻia) i nā faila i loko
 directory (aka the dirent directory).
 * Heluhelu ke kauoha `list` i nā faila hoʻokomo papa kuhikuhi, wehe i kēlā me kēia ala i helu ʻia; a laila hoʻihoʻi i ka metadata no kēlā me kēia faila
 * ʻOi aku ka maikaʻi ʻole o nā kauoha `list` , ʻoi aku hoʻi no nā papa kuhikuhi me ka nui o nā faila
 * ʻO ke kauoha `write` e kākau i nā faila i loko o ka papa kuhikuhi kuhikuhi o kēlā me kēia makua, me ka recursively; a laila kākau i ka faila
 * E loaʻa i nā kauoha `write` O(N) kākau, me ka N = hohonu i ka hierarchy papa kuhikuhi.
 * Na ke kauoha `remove` e wehe i ka faila dirent e pili ana, a me kona makua ina nele, me ka recursively; a laila wehe i ka faila
 * ʻO nā kauoha `remove` e hoʻihoʻi hou e loaʻa iā O(N) heluhelu a hiki i ka nui o nā holoi ʻana, me ka N = hohonu i ka hierarchy papa kuhikuhi.
 * Hiki ke pipiʻi i nā kauoha `remove` ma nā ʻōnaehana waihona nui a hohonu

 E hoʻomanaʻo, ʻoiai me ka hoʻopili ʻana i ka ʻaoʻao o ka mea kūʻai aku, he ʻenemi me ka ʻike piha i kāu ʻaoʻao kikowaena i hoʻopili ʻia.
 waihona, ʻoiai me ka ʻole o ke kī, hiki ke ʻike i ka huina o nā papa kuhikuhi a me ka nui o nā faila i kēlā me kēia, a me
 i kekahi hana, e ʻike i kekahi a i ʻole ka ʻōnaehana holoʻokoʻa o ka hierarchy papa kuhikuhi.
 *E hoʻomaopopo: E hoʻohana i kahi hale palahalaha no ka palekana maikaʻi.*
 ʻAʻole ʻike ka ʻenemi i nā inoa o nā papa kuhikuhi/faila ke ʻole lākou i ʻike i kāu hoʻopunipuni
 kī a i ʻole ua haki ʻia ka hoʻopunipuni. Pau nā pili a pau ia manawa!

 ### Ka hana a me ka hoʻopaʻa ʻana
 Hiki ke lohi nā hana ma ka waihona i hoʻopili ʻia. Hiki ke lohi loa nā papa inoa recursive a me ka wehe ʻana.
 He kōkua nui ka hoʻokahe ʻana ma o redis, akā e hoʻomanaʻo e hoʻoheheʻe ʻia ka cache ma luna o nā mea kākau a wehe paha.

 ## Hoʻololi kī
 E hana i mobiletto me kāu kī hou, a laila e hoʻohālike i ka ʻikepili kahiko i loko:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Keʻena hoʻokele
 ʻO ka mea hoʻokele ka waihona JS e hoʻokuʻu aku i kahi hana 'storageClient' me kēia pūlima:

    function storageClient (key, secret, opts)

 * `key` : he kaula, kāu kī API (no ka mea hoʻokele `local` ʻo ia ka papa kuhikuhi kumu)
 * `secret` : he kaula, kāu mea huna API (hiki ke waiho ʻia no ka mea hoʻokele `local` )
 * `opts` : he mea, aia nā waiwai i kēlā me kēia mea hoʻokele:
 * No `local` , nā `fileMode` a me `dirMode` e ho'oholo i ka hana 'ana i nā faila a me nā papa kuhikuhi hou.
 * No `s3` , pono ka waiwai `bucket` . ʻO nā waiwai koho:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Pono ka mea i hoʻihoʻi ʻia e ka storageClient i kēia mau hana:

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

 ## Hoʻopaʻa inoa
 Hoʻohana ʻo Mobiletto i ka waihona logging [winston](https://www.npmjs.com/package/winston).

 Loaʻa i nā moʻolelo ** nā ala faila a me nā memo hewa, akā ʻaʻole ** loaʻa nā kī, nā mea huna,
 a i ʻole kekahi ʻike hoʻonohonoho pili.

 ### Papa helu
 E hoʻohana i ka `MOBILETTO_LOG_LEVEL` hoʻololi kaiapuni no ka hoʻonohonoho ʻana i ka pae log, me ka hoʻohana ʻana i kekahi
 o nā pae `npm` i wehewehe ʻia ma [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 ʻO ka pae paʻamau ʻo `error` . ʻO ka pae haʻihaʻi ʻoi loa ʻo `silly` , ʻoiai he mobiletto i kēia manawa
 ʻaʻole i hoʻopaʻa inoa ma nā pae ma lalo o `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Waihona moʻolelo
 Ma ka maʻamau, kākau ka mea logger i ka console. No ka hoʻouna ʻana i nā moʻolelo i kahi faila, hoʻonohonoho i ka `MOBILETTO_LOG_FILE`
 hoʻololi kaiapuni. Ke hoʻopaʻa inoa i kahi faila, ʻaʻole e kākau hou ʻia nā lāʻau i ka console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 E hoʻopau i ka hoʻopaʻa inoa ʻana:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
