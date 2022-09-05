โมบิลเล็ตโต
 =========

 Mobiletto เป็นเลเยอร์นามธรรมของการจัดเก็บ JavaScript พร้อมการเข้ารหัสฝั่งไคลเอ็นต์แบบโปร่งใสที่เป็นตัวเลือก

 # เนื้อหา
 * [ทำไมต้องโมบิลเล็ต](#ทำไม-โมบิลเล็ตโต?)
 * [เริ่มด่วน](#เริ่มด่วน)
 * [โมบิลเล็ตโต CLI](#mobiletto-cli)
 * [ที่มา](#แหล่งที่มา)
 * [การใช้งานพื้นฐาน](#Basic-usage)
 * [ข้อมูลเมตา](#ข้อมูลเมตา)
 * [รูปแบบการนำเข้าสำรอง](#Alternate-import-style)
 * [แคช](#แคช)
 * [มิเรอร์](#มิเรอร์)
 * [การเข้ารหัสแบบโปร่งใส](#การเข้ารหัสแบบโปร่งใส)
 * [การหมุนแป้น](#การหมุนแป้น)
 * [ส่วนต่อประสานคนขับ](#ส่วนต่อประสานคนขับ)
 * [การบันทึก](#การบันทึก)

 #อ่านเป็นภาษาอื่น
 เอกสาร README.md นี้ได้รับการแปลผ่าน [hokeylization](https://github.com/cobbzilla/hokeylization) ลงใน
 **[ทุกภาษาที่ Google Translate รองรับ](https://cloud.google.com/translate/docs/languages)!**

 ฉันแน่ใจว่ามันไม่สมบูรณ์แบบ แต่ฉันหวังว่าจะดีกว่าไม่ทำอะไรเลย!

 [🇸🇦 ภาษาอาหรับ](../ar/README.md)
 [🇧🇩 เบงกาลี](../bn/README.md)
 [🇩🇪 ภาษาเยอรมัน](../de/README.md)
 [🇺🇸 ภาษาอังกฤษ](../th/README.md)
 [🇪🇸 ภาษาสเปน](../es/README.md)
 [🇫🇷 ภาษาฝรั่งเศส](../fr/README.md)
 [🇹🇩 เฮาซา](../ha/README.md)
 [🇮🇳 ภาษาฮินดี](../hi/README.md)
 [🇮🇩 ภาษาชาวอินโดนีเซีย](../id/README.md)
 [🇮🇹 ภาษาอิตาลี](../it/README.md)
 [🇯🇵 ภาษาญี่ปุ่น](../ja/README.md)
 [🇰🇷 ภาษาเกาหลี](../ko/README.md)
 [🇮🇳 มารันตี](../mr/README.md)
 [🇵🇱 โปแลนด์](../pl/README.md)
 [🇧🇷 ภาษาโปรตุเกส](../pt/README.md)
 [🇷🇺 ภาษารัสเซีย](../ru/README.md)
 [🇰🇪 สวาฮีลี](../sw/README.md)
 [🇵🇭 ภาษาตากาล็อก](../tl/README.md)
 [🇹🇷 ภาษาตุรกี](../tr/README.md)
 [🇵🇰 ภาษาอูรดู](../ur/README.md)
 [🇻🇳 ภาษาเวียดนาม](../vi/README.md)
 [🇨🇳 ภาษาจีน](../zh/README.md)


 **[📚 ...ทุกภาษา ...](../README.md)**
 ----

 ### มีปัญหากับการแปล README นี้หรือไม่?
 การแปลเฉพาะของต้นฉบับ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 อาจมีข้อบกพร่อง -- *ยินดีเป็นอย่างยิ่งที่จะแก้ไข!* โปรดส่ง [pull request บน GitHub](https://github.com/cobbzilla/mobiletto/pulls)
 หรือหากคุณไม่สะดวกใจที่จะทำเช่นนั้น [เปิดประเด็น](https://github.com/cobbzilla/mobiletto/issues)

 เมื่อคุณสร้างปัญหา GitHub ใหม่เกี่ยวกับการแปล โปรดทำดังนี้
 * รวม URL ของหน้า (คัดลอก/วางจากแถบที่อยู่ของเบราว์เซอร์)
 * รวมข้อความที่ไม่ถูกต้อง (คัดลอก/วางจากเบราว์เซอร์)
 * โปรดอธิบายสิ่งที่ผิด -- การแปลไม่ถูกต้องหรือไม่? การจัดรูปแบบเสียอย่างใด?
 *กรุณาเสนอคำแนะนำในการแปลที่ดีขึ้น หรือควรจัดรูปแบบข้อความอย่างไรให้เหมาะสม
 * **ขอขอบคุณ!**

 ## ทำไมต้องโมบิลเล็ตโต?

 ### ลาก่อนล็อคอินผู้ขาย!
 ผู้ให้บริการพื้นที่เก็บข้อมูลบนคลาวด์หลายรายมี API ที่เข้ากันไม่ได้ แม้แต่ผู้ที่มุ่งมั่นเพื่อ "ความเข้ากันได้ของ S3"
 มีพฤติกรรมแปลกแยก

 เมื่อคุณเลือกผู้จำหน่ายพื้นที่จัดเก็บข้อมูลเฉพาะสำหรับแอปของคุณ หากคุณเขียนโค้ดไปยัง API ของพวกเขาโดยตรง แอปของคุณก็จะ
 ตอนนี้ขึ้นอยู่กับบริการนั้น เมื่อเวลาผ่านไปและรหัสสะสม ผู้ขายที่เปลี่ยนแปลงจะกลายเป็น
 ไม่สามารถป้องกันได้มากขึ้น ยินดีต้อนรับสู่โลกแห่งความสนุกของการล็อคอินผู้ขาย!

 โมบิลเล็ตโตถูกออกแบบมาเพื่อแก้ปัญหานี้ โดยการเข้ารหัสแอปของคุณไปยัง API ของ mobiletto คุณสามารถได้อย่างง่ายดาย
 เปลี่ยนผู้ให้บริการพื้นที่เก็บข้อมูลและรู้ว่าชั้นพื้นที่เก็บข้อมูลของแอปจะทำงานเหมือนกัน

 ### การทดสอบอย่างละเอียด
 ไดรเวอร์ทั้งหมดได้รับการทดสอบสำหรับพฤติกรรมที่เหมือนกันด้วยการทดสอบมากกว่า 60 รายการสำหรับไดรเวอร์แต่ละตัว
 เราทดสอบไดรเวอร์ทั้งหมดด้วยการรวมกันของ:
 * การเข้ารหัส: ทั้งเปิดใช้งานและปิดใช้งาน
 * แคช Redis: ทั้งเปิดใช้งานและปิดใช้งาน

 วิธีนี้ช่วยให้เราสบายใจได้ว่า mobiletto จะทำงานเหมือนกันไม่ว่าคุณจะใช้ไดรเวอร์ใด
 และไม่ว่าคุณจะเปิดใช้งานการแคชและ/หรือการเข้ารหัสก็ตาม

 ### การสนับสนุนไดรเวอร์
 ไดรเวอร์การจัดเก็บข้อมูล Mobileetto ปัจจุบัน:
 * `s3` : อเมซอน S3
 * `b2` b2' : แบ็คเบลซ B2
 * `local` : ระบบไฟล์ในเครื่อง

 *ยินดีเป็นอย่างยิ่งที่ให้การสนับสนุนผู้ให้บริการพื้นที่เก็บข้อมูลบนคลาวด์มากขึ้น!*

 ## mobiletto-คลิ
 Mobiletto มีวัตถุประสงค์เพื่อใช้เป็นห้องสมุดโดยโค้ด JavaScript อื่น

 หากต้องการทำงานกับ mobiletto ที่บรรทัดคำสั่ง ให้ใช้ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## แหล่งที่มา
 * [mobiletto บน GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto บน npm](https://www.npmjs.com/package/mobiletto)

 ## เริ่มต้นอย่างรวดเร็ว
 ตัวอย่างสั้นๆ โดยใช้ไดรเวอร์ mobiletto `s3`

 รหัสนี้จะทำงานเหมือนกันหากไดรเวอร์เป็น `b2` b2' หรือ `local`

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
 ## การใช้งานพื้นฐาน
 ตัวอย่างที่กว้างกว่ามาก ซึ่งแสดงคุณสมบัติส่วนใหญ่ที่มีให้:

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

 ## ข้อมูลเมตา
 คำสั่ง `metadata` ส่งคืนข้อมูลเมตาเกี่ยวกับรายการระบบไฟล์เดียว
 ค่าที่ส่งคืนจากคำสั่ง `list` ก็คืออาร์เรย์ของออบเจ็กต์ข้อมูลเมตา

 ออบเจ็กต์ข้อมูลเมตามีลักษณะดังนี้:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 คุณสมบัติ `type` สามารถเป็น `file` , `dir` , `link` หรือ `special`

 ขึ้นอยู่กับประเภทของไดรเวอร์ คำสั่ง `list` อาจไม่ส่งคืนฟิลด์ทั้งหมด คุณสมบัติ `name` และ `type`
 ควรมีอยู่เสมอ คำสั่ง `metadata` ที่ตามมาจะส่งคืนคุณสมบัติที่มีอยู่ทั้งหมด

 ## รูปแบบการนำเข้าสำรอง
 นำเข้าโมดูลที่มีขอบเขตครบถ้วนและใช้ฟังก์ชัน `connect` ต่อ":

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## เก็บเอาไว้
 Mobiletto ทำงานได้ดีที่สุดกับแคช <a href="https://redis.io">redis</a>

 Mobiletto จะพยายามเชื่อมต่อกับอินสแตนซ์ redis บน 127.0.0.1:6379

 คุณสามารถลบล้างสิ่งเหล่านี้ได้:
 * ตั้งค่า `MOBILETTO_REDIS_HOST` env var, mobiletto เชื่อมต่อที่นี่แทน localhost
 * ตั้งค่า `MOBILETTO_REDIS_PORT` env var พอร์ตนี้จะถูกใช้

 Mobiletto จะเก็บคีย์ Redis ทั้งหมดที่มีคำนำหน้า `_mobiletto__` เปลี่ยนได้
 โดยการตั้งค่า `MOBILETTO_REDIS_PREFIX` env var

 คุณยังสามารถตั้งค่าการแคชต่อการเชื่อมต่อด้วย `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ไม่ต้องการแคช redis?
 วิธีปิดการใช้งาน: ผ่าน `enabled: false` ' ในออบเจกต์ `opts.redisConfig` เมื่อคุณสร้างการเชื่อมต่อของคุณ

 ตามที่กล่าวไว้ด้านล่าง การปิดใช้งานการแคชจะส่งผลเสียต่อประสิทธิภาพการทำงานและก่อให้เกิดคำขอมากขึ้น
 เพื่อการจัดเก็บที่คุณต้องการจริงๆ

 ### คำแนะนำในการแคช
 **ที่เก็บข้อมูลที่เข้ารหัส**: การอ่าน/เขียนที่เก็บข้อมูลที่เข้ารหัสนั้นช้ากว่าปกติเพียงเล็กน้อย
 แต่การนำทางไปรอบๆ ไดเร็กทอรี (ซึ่งบางอย่างทำ) นั้นค่อนข้างแพง การใช้แคช redis
 จะช่วยเพิ่มประสิทธิภาพให้กับคุณอย่างมาก

 แคชเริ่มต้นนั้นปลอดภัย แต่ทำงานได้ไม่ดีหากคุณมีการดำเนินการเขียน/ลบจำนวนมาก
 การดำเนินการเขียนหรือลบจะทำให้แคชทั้งหมดใช้งานไม่ได้ เพื่อให้แน่ใจว่าการอ่านครั้งต่อๆ ไปจะเห็น
 การเปลี่ยนแปลงล่าสุด

 ### เครื่องมือ CLI
 หากคุณกำลังใช้เครื่องมือ CLI เช่น [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)
 คุณจะต้องเปิดใช้งานแคช redis อย่างแน่นอน เนื่องจากจะคงอยู่ตลอดการเรียกใช้คำสั่ง `mo`

 ## มิเรอร์

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 คำสั่ง `mirror` ทำสำเนาไฟล์ทั้งหมดจาก mobiletto หนึ่งไปยังอีกไฟล์หนึ่งเพียงครั้งเดียว
 จะไม่เรียกใช้กระบวนการใดๆ เพื่อรักษามิเรอร์เมื่อเวลาผ่านไป เรียกใช้คำสั่ง `mirror` อีกครั้ง
 เพื่อซิงโครไนซ์ไฟล์ที่ขาดหายไป

 ค่าที่ส่งคืนจาก `mirror` เป็นอ็อบเจ็กต์ธรรมดาที่มีตัวนับจำนวนไฟล์ที่สำเร็จ
 มิเรอร์และจำนวนไฟล์ที่มีข้อผิดพลาด:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 คำเตือน: การทำมิเรอร์ชุดข้อมูลขนาดใหญ่อาจใช้เวลานานและใช้แบนด์วิดท์มาก

 ด้วยความหมายของการเรียก `mirror` บางครั้งอาจสับสนที่จะเข้าใจว่าใครคือ
 ผู้อ่านและใครเป็นนักเขียน ลองนึกภาพมันเหมือนคำสั่งมอบหมาย: "มือซ้าย mobiletto"
 เป็นสิ่งที่ถูกกำหนดให้ (เขียนข้อมูลสะท้อน) และ "มือขวา mobiletto" (the
 อาร์กิวเมนต์ของวิธี `mirror` ) คือค่าที่กำหนด (อ่านข้อมูลที่มิเรอร์)

 ## การเข้ารหัสที่โปร่งใส
 เปิดใช้งานการเข้ารหัสฝั่งไคลเอ็นต์แบบโปร่งใส:

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

 เกิดอะไรขึ้น? ไดเร็กทอรี "รายการไดเร็กทอรี" (ไดเร็กทอรี) แยกต่างหาก (เข้ารหัส) ติดตามว่าไฟล์ใดบ้างที่อยู่ในนั้น
 ไดเร็กทอรี (aka ไดเร็กทอรีไดเร็กทอรี)
 * คำสั่ง `list` อ่านไฟล์รายการไดเร็กทอรี ถอดรหัสแต่ละพาธที่แสดง จากนั้นส่งคืนข้อมูลเมตาสำหรับแต่ละไฟล์
 * คำสั่ง `list` นั้นไม่มีประสิทธิภาพมากกว่า โดยเฉพาะสำหรับไดเร็กทอรีที่มีไฟล์จำนวนมาก
 * คำสั่ง `write` เขียนไฟล์ dirent ในไดเร็กทอรี dirent ของผู้ปกครองแต่ละรายซ้ำ ๆ แล้วเขียนไฟล์
 * คำสั่ง `write` จะต้องเขียน O(N) โดยที่ N = ความลึกในลำดับชั้นของไดเร็กทอรี
 * คำสั่ง `remove` จะลบไฟล์ dirent ที่เกี่ยวข้อง และพาเรนต์ของไฟล์นั้น ถ้าว่าง ให้เรียกซ้ำ แล้วลบไฟล์
 * คำสั่ง `remove` แบบไม่เรียกซ้ำจะทำให้มีการอ่าน O(N) และอาจมีการลบได้มาก โดยที่ N = ความลึกในลำดับชั้นของไดเร็กทอรี
 * คำสั่ง `remove` แบบเรียกซ้ำบนระบบไฟล์ขนาดใหญ่และลึกอาจมีราคาแพง

 โปรดทราบว่าแม้จะเปิดใช้งานการเข้ารหัสฝั่งไคลเอ็นต์ ศัตรูที่มองเห็นได้อย่างสมบูรณ์ในฝั่งเซิร์ฟเวอร์ที่เข้ารหัสของคุณ
 ที่เก็บข้อมูลแม้จะไม่มีคีย์ก็ยังสามารถดูจำนวนไดเร็กทอรีทั้งหมดและจำนวนไฟล์ในแต่ละไฟล์และด้วย
 พยายามค้นหาโครงสร้างโดยรวมบางส่วนหรือทั้งหมดของลำดับชั้นของไดเร็กทอรี
 *หมายเหตุ: ใช้โครงสร้างที่ค่อนข้างเรียบเพื่อความปลอดภัยที่ดีขึ้น*
 ฝ่ายตรงข้ามจะไม่รู้จักชื่อไดเร็กทอรี/ไฟล์ เว้นแต่พวกเขาจะรู้การเข้ารหัสของคุณ
 คีย์หรือถอดรหัสได้สำเร็จ เดิมพันทั้งหมดจะปิดแล้ว!

 ### ประสิทธิภาพและการแคช
 การดำเนินการกับที่เก็บข้อมูลที่เข้ารหัสอาจช้า รายชื่อและการลบแบบเรียกซ้ำอาจช้ามาก
 การแคชผ่าน redis ช่วยได้มาก แต่โปรดทราบว่าแคชจะถูกล้างเมื่อเขียนหรือลบออก

 ## การหมุนกุญแจ
 สร้าง mobiletto ด้วยรหัสใหม่ของคุณ จากนั้นจำลองข้อมูลเก่าเข้าไป:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## อินเทอร์เฟซไดรเวอร์
 ไดรเวอร์คือไฟล์ JS ใดๆ ที่ส่งออกฟังก์ชัน 'storageClient' ด้วยลายเซ็นนี้:

    function storageClient (key, secret, opts)

 * `key` : สตริง คีย์ API ของคุณ (สำหรับไดรเวอร์ `local` ในเครื่อง' นี่คือไดเร็กทอรีฐาน)
 * `secret` : สตริง, ความลับ API ของคุณ (สามารถละเว้นสำหรับไดรเวอร์ `local` )
 * `opts` : วัตถุ คุณสมบัติเป็นต่อไดรเวอร์:
 * สำหรับ `local` คุณสมบัติ `fileMode` และ `dirMode` จะกำหนดวิธีการสร้างไฟล์และไดเร็กทอรีใหม่
 * สำหรับ `s3` ' จำเป็นต้องมีคุณสมบัติ `bucket` คุณสมบัติเสริมคือ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ออบเจ็กต์ที่ฟังก์ชัน storageClient ส่งคืนต้องกำหนดฟังก์ชันเหล่านี้:

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

 ## การบันทึก
 Mobiletto ใช้ไลบรารีการบันทึก [winston](https://www.npmjs.com/package/winston)

 บันทึก **จะ** มีเส้นทางของไฟล์และข้อความแสดงข้อผิดพลาด แต่จะ ** ไม่มี ** มีคีย์ ความลับ
 หรือข้อมูลการกำหนดค่าการเชื่อมต่ออื่นๆ

 ### ระดับบันทึก
 ใช้ตัวแปรสภาพแวดล้อม `MOBILETTO_LOG_LEVEL` เพื่อตั้งค่าระดับการบันทึก โดยใช้ one
 ของระดับ `npm` ที่กำหนดไว้ใน [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 ระดับเริ่มต้นคือ `error` ระดับที่ละเอียดที่สุดคือ `silly` ถึงแม้ว่าขณะนี้ mobiletto
 ไม่บันทึกที่ระดับต่ำกว่า `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ไฟล์บันทึก
 โดยค่าเริ่มต้น ตัวบันทึกจะเขียนไปยังคอนโซล ในการส่งบันทึกไปยังไฟล์ ให้ตั้งค่า `MOBILETTO_LOG_FILE`
 ตัวแปรสภาพแวดล้อม เมื่อเข้าสู่ไฟล์ บันทึกจะไม่ถูกเขียนลงในคอนโซลอีกต่อไป

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ในการปิดการบันทึก:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
