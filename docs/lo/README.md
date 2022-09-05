ໂທລະສັບມືຖື
 =========

 Mobiletto ເປັນຊັ້ນ abstraction ການເກັບຮັກສາ JavaScript, ມີທາງເລືອກໃນການເຂົ້າລະຫັດດ້ານລູກຄ້າໂປ່ງໃສ.

 # ເນື້ອໃນ
 * [ເປັນຫຍັງ Mobiletto?](#Why-Mobiletto?)
 * [ເລີ່ມ​ຕົ້ນ​ດ່ວນ](#ເລີ່ມ​ຕົ້ນ​ດ່ວນ​)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ແຫຼ່ງຂໍ້ມູນ](#ແຫຼ່ງຂໍ້ມູນ)
 * [ການ​ຕິດ​ຕັ້ງ​](# ການ​ຕິດ​ຕັ້ງ​)
 * [ການ​ສະ​ຫນັບ​ສະ​ຫນູນ​ແລະ​ການ​ສະ​ຫນອງ​ທຶນ​](#Support-and-Funding​)
 * [ການ​ນໍາ​ໃຊ້​ພື້ນ​ຖານ​](# ການ​ນໍາ​ໃຊ້​ພື້ນ​ຖານ​)
 * [Metadata](#Metadata)
 * [ຮູບແບບການນຳເຂົ້າສຳຮອງ](#ຮູບແບບການນຳເຂົ້າສຳຮອງ)
 * [Caching](#Caching)
 * [ການສະທ້ອນ](#ການສະທ້ອນ)
 * [ການເຂົ້າລະຫັດໂປ່ງໃສ](#Transparent-encryption)
 * [ການ​ຫມຸນ​ກະ​ແຈ](#ການ​ຫມຸນ​ກະ​ແຈ​)
 * [ການໂຕ້ຕອບຄົນຂັບ](#Driver-interface)
 * [ບັນທຶກ](#Logging)

 # ອ່ານນີ້ເປັນພາສາອື່ນ
 ເອກະສານ README.md ນີ້ໄດ້ຖືກແປ, ຜ່ານ [hokeylization](https://github.com/cobbzilla/hokeylization), ເຂົ້າໄປໃນ
 **[ທຸກພາສາທີ່ຮອງຮັບໂດຍ Google Translate](https://cloud.google.com/translate/docs/languages)!**

 ຂ້ອຍແນ່ໃຈວ່າມັນບໍ່ສົມບູນແບບ, ແຕ່ຂ້ອຍຫວັງວ່າມັນຈະດີກ່ວາບໍ່ມີຫຍັງ!

 [🇸🇦 ອາຣັບ](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 ເຢຍລະມັນ](../de/README.md)
 [🇺🇸ພາສາອັງກິດ](../en/README.md)
 [🇪🇸 ແອສປາໂຍນ](../es/README.md)
 [🇫🇷 ຝຣັ່ງ](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 ຮິນດູ](../hi/README.md)
 [🇮🇩 ອິນໂດເນເຊຍ](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 ພາສາຍີ່ປຸ່ນ](../ja/README.md)
 [🇰🇷ເກົາຫຼີ](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 ໂປໂລຍ](../pl/README.md)
 [🇧🇷 ປອກຕຸຍການ](../pt/README.md)
 [🇷🇺ລັດເຊຍ](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ຕວກກີ](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 ຫວຽດນາມ](../vi/README.md)
 [🇨🇳 ຈີນ](../zh/README.md)


 **[📚...ທຸກພາສາ...](../README.md)**
 ----

 ### ມີບັນຫາກັບການແປຂອງ README ນີ້ບໍ?
 ການແປສະເພາະນີ້ຂອງຕົ້ນສະບັບ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ອາດ​ຈະ​ມີ​ຂໍ້​ບົກ​ພ່ອງ -- *ການ​ແກ້​ໄຂ​ແມ່ນ​ຍິນ​ດີ​ຕ້ອນ​ຮັບ​ຫຼາຍ!* ກະ​ລຸ​ນາ​ສົ່ງ [ການ​ຮ້ອງ​ຂໍ​ດຶງ​ກ່ຽວ​ກັບ GitHub](https://github.com/cobbzilla/mobiletto/pulls​)​,
 ຫຼືຖ້າທ່ານບໍ່ສະດວກໃນການເຮັດແນວນັ້ນ, [ເປີດບັນຫາ](https://github.com/cobbzilla/mobiletto/issues)

 ເມື່ອທ່ານສ້າງບັນຫາ GitHub ໃໝ່ກ່ຽວກັບການແປ, ກະລຸນາເຮັດ:
 * ລວມເອົາ URL ຂອງໜ້າ (ສຳເນົາ/ວາງຈາກແຖບທີ່ຢູ່ຂອງບຣາວເຊີ)
 * ລວມ​ເອົາ​ຂໍ້​ຄວາມ​ທີ່​ແນ່​ນອນ​ວ່າ​ຜິດ​ພາດ (ຄັດ​ລອກ / ວາງ​ຈາກ​ຕົວ​ທ່ອງ​ເວັບ​)
 * ກະລຸນາອະທິບາຍສິ່ງທີ່ຜິດພາດ -- ການແປບໍ່ຖືກຕ້ອງບໍ? ການຈັດຮູບແບບຖືກທໍາລາຍຢ່າງໃດ?
 * ຂໍສະເໜີຄຳແນະນຳການແປທີ່ດີກວ່າ, ຫຼືວ່າຂໍ້ຄວາມຄວນຖືກຈັດຮູບແບບແນວໃດໃຫ້ຖືກຕ້ອງ
 * **ຂອບ​ໃຈ!**

 ## ເປັນຫຍັງ Mobiletto?

 ###ສະບາຍດີ ຜູ້ຂາຍ ລັອກອິນ!
 ຜູ້ໃຫ້ບໍລິການເກັບຮັກສາຟັງຄລາວຕ່າງໆມີ APIs ທີ່ບໍ່ເຂົ້າກັນໄດ້. ເຖິງແມ່ນວ່າຜູ້ທີ່ພະຍາຍາມ "ເຂົ້າກັນໄດ້ S3"
 ມີພຶດຕິກໍາ idiosyncratic.

 ເມື່ອທ່ານເລືອກຜູ້ຂາຍບ່ອນເກັບຂໍ້ມູນສະເພາະສໍາລັບແອັບຯຂອງທ່ານ, ຖ້າທ່ານລະຫັດໂດຍກົງໃສ່ API ຂອງພວກເຂົາ, ແອັບຯຂອງທ່ານ
 ໃນປັດຈຸບັນແມ່ນຂຶ້ນກັບການບໍລິການນັ້ນ. ເມື່ອເວລາຜ່ານໄປແລະລະຫັດສະສົມ, ຜູ້ຂາຍປ່ຽນກາຍເປັນ
 untenable ຫຼາຍ​ຂຶ້ນ​. ຍິນດີຕ້ອນຮັບສູ່ໂລກທີ່ມ່ວນຊື່ນຂອງຜູ້ຂາຍລັອກອິນ!

 Mobiletto ໄດ້​ຖືກ​ອອກ​ແບບ​ເພື່ອ​ແກ້​ໄຂ​ບັນ​ຫາ​ນີ້​. ໂດຍການໃສ່ລະຫັດແອັບຯຂອງທ່ານໃສ່ API ຂອງ mobiletto, ທ່ານສາມາດໄດ້ຢ່າງງ່າຍດາຍ
 ປ່ຽນຜູ້ໃຫ້ບໍລິການບ່ອນເກັບຂໍ້ມູນ ແລະຮູ້ວ່າຊັ້ນເກັບຂໍ້ມູນຂອງແອັບຯຂອງເຈົ້າຈະມີລັກສະນະຄືກັນ.

 ### ການທົດສອບຢ່າງກວ້າງຂວາງ
 ຄົນຂັບທັງໝົດຖືກທົດສອບສຳລັບພຶດຕິກຳທີ່ຄືກັນດ້ວຍການທົດສອບ 60+ ສຳລັບຄົນຂັບແຕ່ລະຄົນ.
 ພວກ​ເຮົາ​ທົດ​ສອບ​ຄົນ​ຂັບ​ທັງ​ຫມົດ​ທີ່​ມີ​ການ​ປະ​ສົມ​ປະ​ສານ​ຂອງ​:
 * ການເຂົ້າລະຫັດ: ທັງເປີດ ແລະປິດໃຊ້ງານ
 * ແຄດ Redis: ທັງເປີດ ແລະປິດໃຊ້ງານ

 ວິທີການນີ້ເຮັດໃຫ້ພວກເຮົາສະຫງົບໃຈວ່າ mobiletto ຈະປະຕິບັດຕົວດຽວກັນບໍ່ວ່າທ່ານຈະໃຊ້ຄົນຂັບໃດກໍ່ຕາມ,
 ແລະບໍ່ຄໍານຶງເຖິງວ່າທ່ານຈະເປີດໃຊ້ caching ແລະ/ຫຼື encryption.

 ### ສະຫນັບສະຫນູນຄົນຂັບ
 ໄດເວີການເກັບຮັກສາ Mobiletto ໃນປັດຈຸບັນ:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` ທ້ອງຖິ່ນ`: ລະບົບໄຟລ໌ທ້ອງຖິ່ນ

 *ການປະກອບສ່ວນເພື່ອສະໜັບສະໜູນຜູ້ໃຫ້ບໍລິການຈັດເກັບຂໍ້ມູນຄລາວຫຼາຍຂຶ້ນແມ່ນຍິນດີຕ້ອນຮັບຫຼາຍ!*

 ## mobiletto-cli
 Mobiletto ມີຈຸດປະສົງເພື່ອໃຊ້ເປັນຫ້ອງສະຫມຸດໂດຍລະຫັດ JavaScript ອື່ນໆ.

 ເພື່ອເຮັດວຽກກັບ mobiletto ຢູ່ແຖວຄໍາສັ່ງ, ໃຫ້ໃຊ້ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## ທີ່ມາ
 * [mobiletto ໃນ GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto ສຸດ npm](https://www.npmjs.com/package/mobiletto)

 ## ສະໜັບສະໜູນ ແລະ ສະໜອງທຶນ
 ຂ້ອຍພະຍາຍາມເປັນຜູ້ພັດທະນາຊອບແວ open source ມືອາຊີບ. ຂ້ອຍໄດ້ເຮັດວຽກຢູ່ໃນ
 ອຸດສາຫະກໍາຊອບແວສໍາລັບເວລາຫຼາຍປີ, ຂ້າພະເຈົ້າໄດ້ເລີ່ມຕົ້ນບໍລິສັດສົບຜົນສໍາເລັດແລະຂາຍໃຫ້ເຂົາເຈົ້າກັບບໍລິສັດສາທາລະນະ.
 ຫວ່າງ​ມໍ່ໆ​ມາ​ນີ້, ຂ້າ​ພະ​ເຈົ້າ​ໄດ້​ສູນ​ເສຍ​ວຽກ​ເຮັດ​ງານ​ທຳ, ແລະ​ຂ້າ​ພະ​ເຈົ້າ​ກໍ​ບໍ່​ມີ​ວຽກ​ງານ​ອື່ນ​ຕິດ​ຕາມ

 ດັ່ງນັ້ນຂ້ອຍຈະພະຍາຍາມຂຽນຊອບແວທີ່ເປັນປະໂຫຍດແລະເບິ່ງວ່າມັນເຮັດວຽກຫຼືບໍ່

 ຖ້າ​ຫາກ​ວ່າ​ທ່ານ​ມີ​ຄວາມ​ສຸກ​ການ​ນໍາ​ໃຊ້​ຊອບ​ແວ​ນີ້​, ຂ້າ​ພະ​ເຈົ້າ​ຈະ​ຂໍ​ຂອບ​ໃຈ​ຫຼາຍ​ສໍາ​ລັບ​ການ​ເຖິງ​ແມ່ນ​ວ່າ​
 ນ້ອຍສຸດ [ການປະກອບສ່ວນລາຍເດືອນຜ່ານ Patreon](https://www.patreon.com/cobbzilla)

 *ຂອບ​ໃຈ!*

 ## ການຕິດຕັ້ງ
 ຕິດຕັ້ງໂດຍໃຊ້ `npm` ຫຼື `yarn` . ທ່ານອາດຈະຕ້ອງການສະບັບ `lite` ທີ່ບໍ່ປະກອບມີທັງຫມົດ
 ແປໄຟລ໌ README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ຖ້າທ່ານຕ້ອງການໄຟລ໌ README ໃນທຸກໆພາສາ, ຕິດຕັ້ງສະບັບເຕັມ:

    npm install mobiletto
    yarn add mobiletto

 ## ເລີ່ມໄວ
 ຕົວຢ່າງສັ້ນໆທີ່ໃຊ້ໄດເວີ mobiletto `s3` .

 ລະຫັດນີ້ຈະເຮັດວຽກຄືກັນຖ້າໄດເວີແມ່ນ `b2` ຫຼື `local` .

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
 ## ການນໍາໃຊ້ພື້ນຖານ
 ຕົວຢ່າງທີ່ກວ້າງຂວາງກວ່າ, ສະແດງໃຫ້ເຫັນລັກສະນະສ່ວນໃຫຍ່ທີ່ສະເຫນີ:

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

 ## ເມຕາເດຕາ
 ຄໍາສັ່ງ `metadata` ຕອບ metadata ກ່ຽວກັບການປ້ອນລະບົບໄຟລ໌ດຽວ.
 ເຊັ່ນດຽວກັນ, ມູນຄ່າກັບຄືນຈາກຄໍາສັ່ງ `list` ແມ່ນ array ຂອງວັດຖຸ metadata.

 ວັດຖຸ metadata ເບິ່ງຄືວ່ານີ້:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 ຄຸນສົມບັດ `ປະເພດ `type` ສາມາດເປັນ `file` , `dir` , `link` , ຫຼື `special` .

 ອີງຕາມປະເພດຂອງໄດເວີ, ຄໍາສັ່ງ `list` ອາດຈະບໍ່ສົ່ງຄືນທຸກຊ່ອງຂໍ້ມູນ. ຄຸນສົມບັດ `name` ' ແລະ `type`
 ຄວນມີຢູ່ສະເໝີ. ຄໍາສັ່ງ `metadata` ຕໍ່ມາຈະສົ່ງຄືນຄຸນສົມບັດທີ່ມີຢູ່ທັງຫມົດ.

 ## ຮູບແບບການນໍາເຂົ້າທາງເລືອກ
 ນໍາເຂົ້າໂມດູນທີ່ມີຂອບເຂດຢ່າງເຕັມສ່ວນແລະນໍາໃຊ້ຫນ້າທີ່ `connect` ຕໍ່':

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ການເກັບຂໍ້ມູນ
 Mobiletto ເຮັດວຽກທີ່ດີທີ່ສຸດກັບ <a href="https://redis.io">redis</a> cache.

 Mobiletto ຈະພະຍາຍາມເຊື່ອມຕໍ່ກັບຕົວຢ່າງ redis ໃນ 127.0.0.1:6379

 ທ່ານສາມາດ override ທັງສອງອັນນີ້:
 * ຕັ້ງ `MOBILETTO_REDIS_HOST` env var, mobiletto ເຊື່ອມຕໍ່ທີ່ນີ້ແທນ localhost
 * ຕັ້ງ `MOBILETTO_REDIS_PORT` env var, ພອດນີ້ຈະຖືກໃຊ້

 Mobiletto ຈະເກັບຮັກສາກະແຈ redis ທັງໝົດຂອງມັນດ້ວຍຄຳນຳໜ້າ `_mobiletto__` . ທ່ານສາມາດປ່ຽນສິ່ງນີ້ໄດ້
 ໂດຍການຕັ້ງຄ່າ `MOBILETTO_REDIS_PREFIX` env var.

 ນອກນັ້ນທ່ານຍັງສາມາດຕັ້ງແຄດຕໍ່ການເຊື່ອມຕໍ່ດ້ວຍວັດຖຸ `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ບໍ່ຕ້ອງການ redis caching?
 ເພື່ອປິດການໃຊ້ງານ: pass `enabled: false` ໃນວັດຖຸ `opts.redisConfig` ຂອງທ່ານເມື່ອທ່ານສ້າງການເຊື່ອມຕໍ່ຂອງທ່ານ.

 ດັ່ງທີ່ໄດ້ກ່າວໄວ້ຂ້າງລຸ່ມນີ້, ການປິດການໃຊ້ງານຖານຄວາມຈໍາຈະມີຜົນກະທົບທາງລົບຕໍ່ການປະຕິບັດແລະເຮັດໃຫ້ເກີດການຮ້ອງຂໍເພີ່ມເຕີມ
 ເພື່ອເກັບຮັກສາທີ່ເຈົ້າຕ້ອງການແທ້ໆ.

 ### ການແນະນຳການເກັບຂໍ້ມູນ
 ** ການ​ເກັບ​ຮັກ​ສາ​ເຂົ້າ​ລະ​ຫັດ **​: ການ​ອ່ານ / ການ​ຂຽນ​ການ​ເກັບ​ຮັກ​ສາ​ເຂົ້າ​ລະ​ຫັດ​ແມ່ນ​ພຽງ​ແຕ່​ຊ້າ​ກ​່​ວາ​ປົກ​ກະ​ຕິ​ເລັກ​ນ້ອຍ​,
 ແຕ່ການທ່ອງໄປຫາໄດເລກະທໍລີ (ທີ່ບາງສິ່ງທີ່ເຮັດ) ແມ່ນລາຄາແພງພໍສົມຄວນ. ການ​ນໍາ​ໃຊ້​ຖານ​ຄວາມ​ຈໍາ redis​
 ຈະໃຫ້ທ່ານມີການເພີ່ມປະສິດທິພາບທີ່ສໍາຄັນ.

 cache ເລີ່ມຕົ້ນແມ່ນປອດໄພ, ແຕ່ບໍ່ດີຖ້າທ່ານມີການດໍາເນີນງານການຂຽນ / ລົບຫຼາຍ.
 ການ​ດໍາ​ເນີນ​ງານ​ການ​ຂຽນ​ຫຼື​ລົບ​ໃດໆ invalidates cache ທັງ​ຫມົດ​, ການ​ຮັບ​ປະ​ກັນ​ການ​ອ່ານ​ຕໍ່​ໄປ​ຈະ​ເຫັນ​ໄດ້​
 ການປ່ຽນແປງຫຼ້າສຸດ.

 ### ເຄື່ອງມື CLI
 ຖ້າທ່ານກໍາລັງໃຊ້ເຄື່ອງມື CLI ເຊັ່ນ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 ທ່ານແນ່ນອນຕ້ອງການ redis cache ເປີດໃຊ້, ຍ້ອນວ່າມັນຈະແກ່ຍາວເຖິງການຮຽກຮ້ອງຂອງຄໍາສັ່ງ `mo` .

 ## ການສະທ້ອນ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 ຄໍາສັ່ງ `mirror` ປະຕິບັດການສໍາເນົາຫນຶ່ງຄັ້ງຂອງໄຟລ໌ທັງຫມົດຈາກ mobiletto ຫນຶ່ງໄປຫາອື່ນ.
 ມັນບໍ່ໄດ້ດໍາເນີນຂະບວນການໃດໆເພື່ອຮັກສາກະຈົກໃນໄລຍະເວລາ. ດໍາເນີນການຄໍາສັ່ງ `mirror` ອີກເທື່ອຫນຶ່ງ
 ເພື່ອ synchronize ໄຟລ໌ໃດທີ່ຂາດຫາຍໄປ.

 ຄ່າກັບຄືນຈາກ `mirror` ແມ່ນວັດຖຸທີ່ງ່າຍດາຍທີ່ມີຕົວນັບສໍາລັບຈໍານວນໄຟລ໌ທີ່ປະສົບຜົນສໍາເລັດ
 mirrored ແລະຈໍານວນໄຟລ໌ທີ່ມີຂໍ້ຜິດພາດ:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ຄໍາເຕືອນ: ການສະທ້ອນຊຸດຂໍ້ມູນຂະຫນາດໃຫຍ່ສາມາດໃຊ້ເວລາຫຼາຍແລະໃຊ້ແບນວິດຫຼາຍ.

 ດ້ວຍຄຳວ່າ `mirror` call semantics ມັນບາງຄັ້ງອາດສັບສົນທີ່ຈະເຂົ້າໃຈວ່າໃຜແມ່ນໃຜ
 ຜູ້ອ່ານແລະໃຜເປັນນັກຂຽນ. ຈິນຕະນາການມັນຄືກັບຄໍາຖະແຫຼງການມອບຫມາຍ: "ມືຖືຊ້າຍມື"
 ແມ່ນ​ສິ່ງ​ທີ່​ໄດ້​ຮັບ​ການ​ມອບ​ຫມາຍ​ໃຫ້ (ຂໍ້​ມູນ mirrored ລາຍ​ລັກ​ອັກ​ສອນ​)​, ແລະ "ຂວາ​ມື mobiletto​" (ໄດ້​
 argument ກັບວິທີການ `mirror` ) ແມ່ນຄ່າທີ່ຖືກມອບຫມາຍ (ຂໍ້ມູນບ່ອນແລກປ່ຽນຄວາມແມ່ນອ່ານ).

 ## ການເຂົ້າລະຫັດໂປ່ງໃສ
 ເປີດໃຊ້ການເຂົ້າລະຫັດດ້ານລູກຂ່າຍໂປ່ງໃສ:

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

 ເກີດ​ຫຍັງ​ຂຶ້ນ? ໄດເຣັກທໍຣີ "ການເຂົ້າລະບົບ" ແຍກຕ່າງຫາກ (dirent) ໄດເລກະທໍລີ (ເຂົ້າລະຫັດ) ຕິດຕາມວ່າໄຟລ໌ໃດຢູ່ໃນນັ້ນ
 directory (aka the dirent directory).
 * ຄໍາສັ່ງ `list` ອ່ານໄຟລ໌ລາຍຊື່ໄດເລກະທໍລີ, ຖອດລະຫັດແຕ່ລະເສັ້ນທາງທີ່ລະບຸໄວ້; ຈາກນັ້ນສົ່ງຄືນ metadata ສໍາລັບແຕ່ລະໄຟລ໌
 * ຄໍາສັ່ງ `list` ແມ່ນບໍ່ມີປະສິດທິພາບຫຼາຍ, ໂດຍສະເພາະສໍາລັບໄດເລກະທໍລີທີ່ມີໄຟລ໌ຈໍານວນຫລາຍ
 * ຄໍາສັ່ງ `write` ຂຽນໄຟລ໌ dirent ໃນໄດເລກະທໍລີ dirent ຂອງພໍ່ແມ່ແຕ່ລະຄົນ, recursively; ຫຼັງຈາກນັ້ນຂຽນໄຟລ໌
 * ຄໍາ​ສັ່ງ `write` ຈະ​ເກີດ O(N​) writes​, ມີ N = ຄວາມ​ເລິກ​ໃນ​ລໍາ​ດັບ​ລະ​ບົບ
 * ຄໍາສັ່ງ `remove` ເອົາໄຟລ໌ dirent ທີ່ສອດຄ້ອງກັນ, ແລະພໍ່ແມ່ຂອງມັນຖ້າຫວ່າງເປົ່າ, recursively; ຈາກນັ້ນລຶບໄຟລ໌ອອກ
 * ຄໍາສັ່ງ `remove` ທີ່ບໍ່ແມ່ນ recursive ຈະເຮັດໃຫ້ເກີດ O(N) ອ່ານແລະອາດຈະເປັນການລຶບຈໍານວນຫຼາຍ, ດ້ວຍ N = ຄວາມເລິກໃນລໍາດັບຊັ້ນຂອງໄດເລກະທໍລີ.
 * ຄໍາສັ່ງ `remove` ຢູ່ໃນລະບົບໄຟລ໌ຂະຫນາດໃຫຍ່ແລະເລິກສາມາດມີລາຄາແພງ

 ໃຫ້ສັງເກດວ່າເຖິງແມ່ນວ່າການເຂົ້າລະຫັດຂ້າງລູກຄ້າໄດ້ຖືກເປີດໃຊ້, ສັດຕູທີ່ມີການເບິ່ງເຫັນຢ່າງເຕັມທີ່ເຂົ້າໄປໃນຝ່າຍເຊີຟເວີທີ່ຖືກເຂົ້າລະຫັດຂອງທ່ານ.
 ການເກັບຮັກສາ, ເຖິງແມ່ນວ່າບໍ່ມີກະແຈ, ຍັງສາມາດເຫັນຈໍານວນທັງຫມົດຂອງໄດເລກະທໍລີແລະຈໍານວນໄຟລ໌ຢູ່ໃນແຕ່ລະ, ແລະດ້ວຍ
 ຄວາມ​ພະ​ຍາ​ຍາມ​ບາງ​ຢ່າງ​, ຄົ້ນ​ພົບ​ບາງ​ຫຼື​ທັງ​ຫມົດ​ຂອງ​ໂຄງ​ປະ​ກອບ​ການ​ໂດຍ​ລວມ​ຂອງ​ລໍາ​ດັບ​ລະ​ບົບ​.
 *ໝາຍເຫດ: ໃຊ້ໂຄງສ້າງທີ່ຂ້ອນຂ້າງຮາບພຽງເພື່ອຄວາມປອດໄພທີ່ດີກວ່າ.*
 ສັດຕູຈະບໍ່ຮູ້ຈັກຊື່ຂອງໄດເລກະທໍລີ / ໄຟລ໌ເວັ້ນເສຍແຕ່ວ່າພວກເຂົາຮູ້ຈັກການເຂົ້າລະຫັດຂອງທ່ານ
 ຄີ ຫຼືມີການແຕກແຍກການເຂົ້າລະຫັດຢ່າງສຳເລັດຜົນ. ການເດີມພັນທັງໝົດແມ່ນປິດແລ້ວ!

 ### ປະສິດທິພາບແລະຖານຄວາມຈໍາ
 ການດໍາເນີນງານກ່ຽວກັບການເກັບຮັກສາທີ່ເຂົ້າລະຫັດອາດຈະຊ້າ. ລາຍຊື່ແລະການຖອນຄືນຄືນສາມາດຊ້າຫຼາຍ.
 Caching ຜ່ານ redis ຊ່ວຍຢ່າງຫຼວງຫຼາຍ, ແຕ່ສັງເກດວ່າ cache ຈະຖືກ flushed ເມື່ອຂຽນຫຼືເອົາອອກ.

 ## ການຫມຸນຂອງກະແຈ
 ສ້າງ mobiletto ດ້ວຍກະແຈໃໝ່ຂອງເຈົ້າ, ຈາກນັ້ນສະທ້ອນຂໍ້ມູນເກົ່າເຂົ້າໄປໃນມັນ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ການໂຕ້ຕອບຄົນຂັບ
 ໄດເວີແມ່ນໄຟລ໌ JS ທີ່ສົ່ງອອກຟັງຊັນ 'storageClient' ທີ່ມີລາຍເຊັນນີ້:

    function storageClient (key, secret, opts)

 * `key` : a string, API key (ສຳ​ລັບ `local` driver ນີ້​ແມ່ນ base directory)
 * `secret` ຄວາມລັບ`: ສະຕິງ, ຄວາມລັບ API ຂອງທ່ານ (ສາມາດຖືກລະເວັ້ນສຳລັບຄົນຂັບ `local` )
 * `opts` : ວັດຖຸ, ຄຸນສົມບັດແມ່ນຕໍ່ຄົນຂັບ:
 * ສໍາລັບ `local` , ຄຸນສົມບັດ `fileMode` ແລະ `dirMode` ກໍານົດວິທີການສ້າງໄຟລ໌ແລະໄດເລກະທໍລີໃຫມ່
 * ສໍາລັບ `s3` , ຄຸນສົມບັດ `bucket` ແມ່ນຕ້ອງການ. ຄຸນສົມບັດທາງເລືອກແມ່ນ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ວັດຖຸທີ່ຟັງຊັນ storageClient ກັບຄືນມາຕ້ອງກໍານົດຟັງຊັນເຫຼົ່ານີ້:

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

 ## ການບັນທຶກ
 Mobiletto ໃຊ້ຫ້ອງສະໝຸດບັນທຶກ [winston](https://www.npmjs.com/package/winston).

 ບັນທຶກ **ຈະ** ມີເສັ້ນທາງໄຟລ໌ ແລະຂໍ້ຄວາມສະແດງຂໍ້ຜິດພາດ, ແຕ່ຈະ **ບໍ່ເຄີຍ** ມີກະແຈ, ຄວາມລັບ,
 ຫຼືຂໍ້ມູນການຕັ້ງຄ່າການເຊື່ອມຕໍ່ອື່ນໆ.

 ### ລະດັບບັນທຶກ
 ໃຊ້ຕົວແປສະພາບແວດລ້ອມ `MOBILETTO_LOG_LEVEL` ເພື່ອກໍານົດລະດັບບັນທຶກ, ໂດຍໃຊ້ອັນດຽວ
 ຂອງລະດັບ `npm` ທີ່ກຳນົດໄວ້ໃນ [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 ລະດັບເລີ່ມຕົ້ນແມ່ນ `error` . ລະດັບ verbose ທີ່ສຸດແມ່ນ `silly` , ເຖິງແມ່ນວ່າໃນປັດຈຸບັນ mobiletto
 ບໍ່ໄດ້ບັນທຶກໃນລະດັບຂ້າງລຸ່ມນີ້ `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ບັນທຶກໄຟລ໌
 ໂດຍຄ່າເລີ່ມຕົ້ນ, ຜູ້ຕັດໄມ້ຂຽນໃສ່ console. ເພື່ອສົ່ງບັນທຶກໄປຫາໄຟລ໌, ຕັ້ງຄ່າ `MOBILETTO_LOG_FILE`
 ສະພາບແວດລ້ອມປ່ຽນແປງ. ເມື່ອບັນທຶກໄຟລ໌, ບັນທຶກຈະບໍ່ຖືກຂຽນໃສ່ console ອີກຕໍ່ໄປ.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ເພື່ອປິດການບັນທຶກ:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
