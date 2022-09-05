මොබයිල්ටෝ
 =========

 Mobiletto යනු ජාවාස්ක්‍රිප්ට් ආචයන වියුක්ත ස්ථරයකි, විකල්ප විනිවිද පෙනෙන සේවාලාභී පාර්ශවීය සංකේතනයකි.

 # අන්තර්ගතය
 * [ඇයි Mobiletto?](#ඇයි-Mobiletto?)
 * [ඉක්මන් ආරම්භය](#ඉක්මන්-ආරම්භය)
 * [Mobiletto CLI](#mobiletto-cli)
 * [මූලාශ්රය](#මූලාශ්රය)
 * [මූලික භාවිතය](#මූලික-භාවිතය)
 * [පාරදත්ත](#පාරදත්ත)
 * [විකල්ප ආනයන විලාසය](#විකල්ප-ආනයන-විලාසය)
 * [Caching](#Caching)
 * [දර්පණය](#Mirroring)
 * [විනිවිද පෙනෙන සංකේතනය](#විනිවිද පෙනෙන සංකේතනය)
 * [යතුරු භ්‍රමණය](#යතුරු-භ්‍රමණය)
 * [රියදුරු අතුරුමුහුණත](#ධාවක අතුරුමුහුණත)
 * [ලොග් වීම](#ලොග් වීම)

 # මෙය වෙනත් භාෂාවකින් කියවන්න
 මෙම README.md ලේඛනය [hokeylization](https://github.com/cobbzilla/hokeylization) හරහා පරිවර්තනය කර ඇත.
 **[Google Translate මඟින් සහාය දක්වන සෑම භාෂාවක්ම](https://cloud.google.com/translate/docs/languages)!**

 එය පරිපූර්ණ නොවන බව මට විශ්වාසයි, නමුත් එය කිසිවකට වඩා හොඳ යැයි මම බලාපොරොත්තු වෙමි!

 [🇸🇦 අරාබි](../ar/README.md)
 [🇧🇩 බෙංගාලි](../bn/README.md)
 [🇩🇪 ජර්මානු](../de/README.md)
 [🇺🇸 ඉංග්‍රීසි](../en/README.md)
 [🇪🇸 ස්පාඤ්ඤ](../es/README.md)
 [🇫🇷 ප්‍රංශ](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 හින්දි](../hi/README.md)
 [🇮🇩 ඉන්දුනීසියානු](../id/README.md)
 [🇮🇹 ඉතාලි](../it/README.md)
 [🇯🇵 ජපන්](../ja/README.md)
 [🇰🇷 කොරියානු](../ko/README.md)
 [🇮🇳 මරන්ති](../mr/README.md)
 [🇵🇱 පෝලන්ත](../pl/README.md)
 [🇧🇷 පෘතුගීසි](../pt/README.md)
 [🇷🇺 රුසියානු](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 තුර්කි](../tr/README.md)
 [🇵🇰 උර්දු](../ur/README.md)
 [🇻🇳 වියට්නාම](../vi/README.md)
 [🇨🇳 චීන](../zh/README.md)


 **[📚 ... සියලුම භාෂා ...](../README.md)**
 ----

 ### README හි මෙම පරිවර්තනයේ ගැටලුවක් තිබේද?
 මුල් [README] හි මෙම විශේෂිත පරිවර්තනය (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 දෝෂ සහිත විය හැක -- *නිවැරදි කිරීම් ඉතා සාදරයෙන් පිළිගනිමු!* කරුණාකර [GitHub මත අදින්න ඉල්ලීමක්](https://github.com/cobbzilla/mobiletto/pulls),
 හෝ ඔබට එය කිරීමට අපහසු නම්, [ගැටළුවක් විවෘත කරන්න](https://github.com/cobbzilla/mobiletto/issues)

 ඔබ පරිවර්තනයක් පිළිබඳ නව GitHub ගැටලුවක් සාදන විට, කරුණාකර කරන්න:
 * පිටු URL ඇතුළත් කරන්න (බ්‍රවුසර ලිපින තීරුවෙන් පිටපත් කරන්න/අලවන්න)
 * වැරදි පෙළ ඇතුළත් කරන්න (බ්‍රවුසරයෙන් පිටපත් කරන්න/අලවන්න)
 * කරුණාකර වැරදි දේ විස්තර කරන්න -- පරිවර්තනය වැරදිද? හැඩතල ගැන්වීම කෙසේ හෝ කැඩී තිබේද?
 * වඩා හොඳ පරිවර්තනයක් පිළිබඳ යෝජනාවක් කාරුණිකව ඉදිරිපත් කරන්න, නැතහොත් පෙළ නිසි ලෙස හැඩසවිය යුතු ආකාරය
 * **ඔබට ස්තුතියි!**

 ## ඇයි Mobiletto?

 ### ආයුබෝවන් වෙළෙන්දා අගුලු දැමීම!
 විවිධ Cloud Storage සපයන්නන්ට නොගැලපෙන API ඇත. "S3 ගැළපුම" සඳහා උත්සාහ කරන අය පවා
 මුග්ධ හැසිරීම් ඇත.

 ඔබ ඔබේ යෙදුම සඳහා විශේෂිත ගබඩා වෙළෙන්දෙකු තෝරා ගන්නා විට, ඔබ ඔවුන්ගේ API, ඔබේ යෙදුම වෙත කෙලින්ම කේත කරන්නේ නම්
 දැන් එම සේවාව මත රඳා පවතී. කාලය ගෙවී යන විට සහ කේතය එකතු වන විට, වෙළෙන්දන් වෙනස් වේ
 වඩ වඩාත් දරාගත නොහැකි. විකුණුම්කරුවන්ගේ අගුලු දැමීමේ විනෝදජනක ලෝකයට සාදරයෙන් පිළිගනිමු!

 Mobiletto මෙම ගැටළුව විසඳීම සඳහා නිර්මාණය කර ඇත. ඔබගේ යෙදුම mobiletto හි API වෙත කේතනය කිරීමෙන්, ඔබට පහසුවෙන් කළ හැක
 ගබඩා සපයන්නන් වෙනස් කර ඔබගේ යෙදුමේ ගබඩා ස්තරය සමාන ලෙස හැසිරෙන බව දැන ගන්න.

 ### පුළුල් පරීක්ෂණ
 සියලුම රියදුරන් එක් එක් රියදුරු සඳහා 60+ පරීක්ෂණ සමඟ සමාන හැසිරීම් සඳහා පරීක්ෂා කරනු ලැබේ.
 අපි සෑම සංයෝජනයකින්ම සියලුම රියදුරන් පරීක්ෂා කරමු:
 * සංකේතනය: සක්‍රීය සහ අක්‍රිය යන දෙකම
 * Redis හැඹිලි: සක්‍රීය සහ අක්‍රීය යන දෙකම

 මෙම ප්‍රවේශය අපට මනසේ සාමය ලබා දෙයි, ඔබ කුමන ධාවකයක් භාවිතා කළත් mobiletto එකම ලෙස හැසිරෙනු ඇත,
 සහ ඔබ හැඹිලිගත කිරීම සහ/හෝ සංකේතනය සක්‍රීය කරන්නේද යන්න නොසලකා.

 ### රියදුරු සහාය
 වත්මන් Mobiletto ගබඩා ධාවක:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : දේශීය ගොනු පද්ධතිය

 *තවත් Cloud Storage සපයන්නන්ට සහය වීමට දායක වීම ඉතා සාදරයෙන් පිළිගනිමු!*

 ## mobiletto-cli
 Mobiletto වෙනත් JavaScript කේතයක් මගින් පුස්තකාලයක් ලෙස භාවිතා කිරීමට අදහස් කෙරේ.

 විධාන රේඛාවේදී mobiletto සමඟ වැඩ කිරීමට, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) භාවිතා කරන්න

 ## මූලාශ්රය
 * [GitHub හි ජංගම දුරකථන](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## ඉක්මන් ආරම්භය
 mobiletto `s3` ධාවකය භාවිතා කරන කෙටි උදාහරණයක්.

 ධාවකය `b2` හෝ `local` නම් මෙම කේතය එලෙසම ක්‍රියාත්මක වේ.

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
 ## මූලික භාවිතය
 ඉදිරිපත් කරන ලද බොහෝ විශේෂාංග පෙන්වන වඩාත් පුළුල් උදාහරණයක්:

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

 ## පාරදත්ත
 `metadata` විධානය තනි ගොනු පද්ධති ප්‍රවේශයක් පිළිබඳ පාර-දත්ත ලබා දෙයි.
 එලෙසම, `list` ලැබෙන ප්‍රතිලාභ අගය පාරදත්ත වස්තු අරාවකි.

 පාර-දත්ත වස්තුවක් මේ ආකාරයට පෙනේ:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ගුණාංගය `file` , `dir` , `link` , හෝ `special` විය හැක.

 ධාවක වර්ගය මත පදනම්ව, `list` විධානයක් මඟින් සියලුම ක්ෂේත්‍ර ආපසු ලබා නොදෙනු ඇත. `name` සහ `type` ගුණාංග
 සැමවිටම සිටිය යුතුය. පසුකාලීන `metadata` විධානයක් මඟින් පවතින සියලුම ගුණාංග ලබා දෙනු ඇත.

 ## විකල්ප ආනයන විලාසය
 සම්පූර්ණ විෂය පථය සහිත මොඩියුලය ආයාත කර 'සම්බන්ධ කරන්න `connect` ශ්‍රිතය භාවිතා කරන්න:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## හැඹිලිගත කිරීම
 Mobiletto රෙඩිස් <a href="https://redis.io">හැඹිලියක්</a> සමඟ වඩාත් හොඳින් ක්‍රියා කරයි.

 Mobiletto 127.0.0.1:6379 හි redis අවස්ථාවක් වෙත සම්බන්ධ වීමට උත්සාහ කරයි

 ඔබට මේවායින් එකක් අභිබවා යා හැක:
 * localhost වෙනුවට මෙහි සම්බන්ධ වීමට `MOBILETTO_REDIS_HOST` env var, mobiletto සකසන්න
 * `MOBILETTO_REDIS_PORT` env var සකසන්න, මෙම තොට භාවිතා වේ

 Mobiletto එහි සියලුම redis යතුරු `_mobiletto__` උපසර්ගය සමඟ ගබඩා කරනු ඇත. ඔබට මෙය වෙනස් කළ හැකිය
 `MOBILETTO_REDIS_PREFIX` env var සැකසීමෙන්.

 ඔබට `opts.redisConfig` වස්තුව සමඟින් එක් සම්බන්ධතා හැඹිලිය සැකසිය හැක:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis caching අවශ්‍ය නොවේද?
 අක්‍රිය කිරීමට: ඔබ ඔබේ සම්බන්ධතාවය ස්ථාපිත කරන විට ඔබේ `opts.redisConfig` වස්තුවේ `enabled: false` යන්න.

 පහත සාකච්ඡා කර ඇති පරිදි, හැඹිලිගත කිරීම අක්‍රිය කිරීම කාර්ය සාධනය කෙරෙහි අහිතකර බලපෑමක් ඇති කරන අතර තවත් ඉල්ලීම් දරයි
 ඔබට සැබවින්ම අවශ්‍ය ගබඩා කිරීමට.

 ### හැඹිලි මාර්ගෝපදේශය
 **එන්ක්‍රිප්ටඩ් ආචයනය**: සංකේතාත්මක ආචයනය කියවීම/ලිවීම සාමාන්‍යයට වඩා ටිකක් මන්දගාමී වේ,
 නමුත් නාමාවලි වටා සැරිසැරීම (සමහර දේවල් කරන) තරමක් මිල අධික වේ. redis cache එකක් භාවිතා කිරීම
 ඔබට සැලකිය යුතු කාර්ය සාධනයක් ලබා දෙනු ඇත.

 පෙරනිමි හැඹිලිය ආරක්ෂිතයි, නමුත් ඔබට ලිවීමේ/ඉවත් කිරීමේ මෙහෙයුම් බොහොමයක් තිබේ නම් හොඳින් ක්‍රියා නොකරයි.
 ඕනෑම ලිවීමේ හෝ ඉවත් කිරීමේ මෙහෙයුමක් සම්පූර්ණ හැඹිලිය අවලංගු කරයි, පසුව කියවීම් දකින බව සහතික කරයි
 නවතම වෙනස්කම්.

 ### CLI මෙවලම්
 ඔබ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) වැනි CLI මෙවලමක් භාවිතා කරන්නේ නම්,
 ඔබට අනිවාර්යයෙන්ම redis හැඹිලිය සක්‍රීය කිරීමට අවශ්‍ය වනු ඇත, එය `mo` විධානයේ ආයාචනා හරහා පවතිනු ඇත.

 ## දර්පණය

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` විධානය මඟින් සියලුම ගොනු එක් ජංගම දුරකථනයකින් තවත් එකකට පිටපත් කිරීම සිදු කරයි.
 කාලයත් සමඟ කැඩපත නඩත්තු කිරීම සඳහා එය කිසිදු ක්‍රියාවලියක් ක්‍රියාත්මක නොකරයි. නැවතත් `mirror` විධානය ක්‍රියාත්මක කරන්න
 නැතිවූ ගොනු සමමුහුර්ත කිරීමට.

 `mirror` වෙතින් ආපසු ලැබෙන අගය ගොනු කීයක් සාර්ථකව තිබේද යන්න සඳහා කවුන්ටර සහිත සරල වස්තුවකි
 දර්පණය කර ඇති අතර ගොනු කීයක් දෝෂ තිබේද:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 අවවාදයයි: විශාල දත්ත කට්ටල දර්පණය කිරීම ඉතා කාලය ගතවන සහ කලාප පළල-දැඩි විය හැක

 `mirror` ඇමතුම් අර්ථ ශාස්ත්‍රය සමඟ එය කවුරුන්ද යන්න තේරුම් ගැනීම සමහර විට ව්‍යාකූල විය හැකිය
 පාඨකයා සහ ලේඛකයා කවුද. එය පැවරුම් ප්‍රකාශයක් ලෙස සිතන්න: "වම් අත මොබයිටෝ"
 (ලියන ලද දර්පණ දත්ත) වෙත පැවරී ඇති දෙය සහ "දකුණු අත මොබයිල්ටෝ" (ද
 argument to the `mirror` method) යනු පවරනු ලබන අගයයි (දර්පණ දත්ත කියවනු ලැබේ).

 ## විනිවිද පෙනෙන සංකේතනය
 විනිවිද පෙනෙන සේවාලාභී පාර්ශවීය සංකේතනය සබල කරන්න:

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

 සිද්ධවන්නේ කුමක් ද? වෙනම "ඩිරෙක්ටරි ප්‍රවේශයක්" (ඩිරෙන්ට්) ඩිරෙක්ටරියක් (සංකේතනය කළ) එහි ඇති ගොනු මොනවාදැයි නිරීක්ෂණය කරයි.
 නාමාවලිය (එනම් dirent නාමාවලිය).
 * `list` විධානය මඟින් නාමාවලි ඇතුළත් ගොනු කියවයි, ලැයිස්තුගත කර ඇති සෑම මාර්ගයක්ම විකේතනය කරයි; එක් එක් ගොනුව සඳහා පාර-දත්ත ලබා දෙයි
 * `list` විධාන වඩාත් අකාර්යක්ෂම වේ, විශේෂයෙන් ගොනු විශාල සංඛ්‍යාවක් සහිත නාමාවලි සඳහා
 * `write` විධානය මඟින් එක් එක් මාපියන්ගේ dirent නාමාවලියෙහි, ප්‍රත්‍යාවර්තීව dirent ගොනු ලියයි; පසුව ගොනුව ලියයි
 * `write` විධාන O(N) ලිවීම් සිදු කරනු ඇත, N = ඩිරෙක්ටරි ධුරාවලියේ ගැඹුර සමඟ
 * `remove` ඉවත් කරන්න` විධානය අනුරූප dirent ගොනුව ඉවත් කරයි, සහ එහි මාපිය හිස් නම්, පුනරාවර්තන ලෙස; පසුව ගොනුව ඉවත් කරයි
 * ප්‍රත්‍යාවර්තී නොවන `remove` විධාන O(N) කියවීම් සහ බොහෝ මකාදැමීම් සිදුවේ, නාමාවලි ධුරාවලියේ N = ගැඹුර සමඟ
 * විශාල සහ ගැඹුරු ගොනු `remove` විධාන මිල අධික විය හැක

 සේවාලාභියා-පාර්ශවීය සංකේතනය සක්‍රීය කර තිබියදීත්, ඔබේ සංකේතනය කළ සේවාදායක පැත්තට පූර්ණ දෘශ්‍යතාවක් ඇති විරුද්ධවාදියෙකු බව සලකන්න
 ආචයනය, යතුර නොමැතිව වුවද, තවමත් මුළු නාමාවලි සංඛ්‍යාව සහ එක් එක් ගොනු කීයක් තිබේද, සහ සමඟ දැකිය හැක
 යම් උත්සාහයක්, ඩිරෙක්ටරි ධුරාවලියේ සමස්ත ව්‍යුහයෙන් සමහරක් හෝ සියල්ල සොයා ගන්න.
 *සටහන: වඩා හොඳ ආරක්ෂාවක් සඳහා සාපේක්ෂව පැතලි ව්‍යුහයක් භාවිතා කරන්න.*
 විරුද්ධවාදියා ඔබේ සංකේතනය ද දන්නේ නම් මිස නාමාවලි/ගොනු වල නම් නොදනී.
 යතුර හෝ වෙනත් ආකාරයකින් සංකේතනය සාර්ථකව බිඳ දමා ඇත. එවිට ඔට්ටු සියල්ල ක්‍රියාවිරහිතයි!

 ### කාර්ය සාධනය සහ හැඹිලිගත කිරීම
 සංකේතාත්මක ගබඩාව මත මෙහෙයුම් මන්දගාමී විය හැක. පුනරාවර්තන ලැයිස්තුගත කිරීම් සහ ඉවත් කිරීම් ඉතා මන්දගාමී විය හැක.
 redis හරහා හැඹිලිගත කිරීම බෙහෙවින් උපකාරී වේ, නමුත් ඕනෑම ලිවීමක් හෝ ඉවත් කිරීමක් මත හැඹිලිය සෝදා හරින බව සලකන්න.

 ## යතුරු භ්‍රමණය
 ඔබගේ නව යතුර සමඟ mobiletto සාදන්න, ඉන්පසු පැරණි දත්ත එයට පිළිබිඹු කරන්න:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## රියදුරු අතුරු මුහුණත
 ධාවකයක් යනු මෙම අත්සන සමඟ 'storageClient' ශ්‍රිතයක් අපනයනය කරන ඕනෑම JS ගොනුවකි:

    function storageClient (key, secret, opts)

 * `key` : තන්තුවක්, ඔබේ API යතුර ( `local` ධාවකය සඳහා මෙය මූලික නාමාවලියයි)
 * `secret` : තන්තුවක්, ඔබේ API රහස ( `local` ධාවකය සඳහා මඟ හැරිය හැක)
 * `opts` : වස්තුවක්, ගුණාංග එක් රියදුරෙකුට වේ:
 * `local` සඳහා, `fileMode` සහ `dirMode` ගුණාංග නව නිර්මාණය කරන ගොනු සහ නාමාවලි නිර්මාණය කරන ආකාරය තීරණය කරයි
 * `s3` සඳහා, `bucket` ගුණය අවශ්‍ය වේ. විකල්ප ගුණාංග වන්නේ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ගබඩා සේවාලාභී ශ්‍රිතය ආපසු ලබා දෙන වස්තුව මෙම කාර්යයන් නිර්වචනය කළ යුතුය:

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

 ## ලොග් වීම
 Mobiletto [winston](https://www.npmjs.com/package/winston) ලොග් කිරීමේ පුස්තකාලය භාවිතා කරයි.

 ලඝු-සටහන් වල ** ගොනු මාර්ග සහ දෝෂ පණිවිඩ අඩංගු වේ, නමුත් ** කිසිදා** යතුරු, රහස්, අඩංගු නොවේ
 හෝ වෙනත් සම්බන්ධතා වින්‍යාස තොරතුරු.

 ### ලොග් මට්ටම
 එකක් භාවිතා කරමින් ලොග් මට්ටම සැකසීමට `MOBILETTO_LOG_LEVEL` පරිසර විචල්‍යය භාවිතා කරන්න
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) හි අර්ථ දක්වා ඇති `npm` මට්ටම්

 පෙරනිමි මට්ටම `error` . දැනට mobiletto වුවත්, වඩාත්ම වාචික මට්ටම `silly` වේ
 `debug` වඩා අඩු මට්ටම් වල ලොග් නොවේ

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ලොග් ගොනුව
 පෙරනිමියෙන්, ලොගර් කොන්සෝලය වෙත ලියයි. ගොනුවකට ලඝු-සටහන් යැවීමට, `MOBILETTO_LOG_FILE`
 පරිසර විචල්යය. ගොනුවකට ලොග් වන විට, ලොග් තවදුරටත් කොන්සෝලය වෙත නොලියනු ඇත.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ලොග් වීම අක්‍රිය කිරීමට:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
