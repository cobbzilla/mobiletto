মোবাইলটো
 =========

 Mobiletto হল একটি জাভাস্ক্রিপ্ট স্টোরেজ বিমূর্ত স্তর, ঐচ্ছিক স্বচ্ছ ক্লায়েন্ট-সাইড এনক্রিপশন সহ।

 # বিষয়বস্তু
 * [কেন মোবাইলেটো?](#কেন-মোবাইলেটো?)
 * [দ্রুত শুরু](#দ্রুত-শুরু)
 * [Mobiletto CLI](#mobiletto-cli)
 * [সূত্র](#উৎস)
 * [মৌলিক ব্যবহার](#বেসিক-ব্যবহার)
 * [মেটাডেটা](#মেটাডেটা)
 * [বিকল্প আমদানি শৈলী](#অল্টারনেট-ইম্পোর্ট-স্টাইল)
 * [ক্যাশিং](#ক্যাশিং)
 * [মিররিং](#মিররিং)
 * [স্বচ্ছ এনক্রিপশন](#স্বচ্ছ-এনক্রিপশন)
 * [কী ঘূর্ণন](#কী-ঘূর্ণন)
 * [ড্রাইভার ইন্টারফেস](#ড্রাইভার-ইন্টারফেস)
 * [লগিং](#লগিং)

 # এটি অন্য ভাষায় পড়ুন
 এই README.md নথিটি অনুবাদ করা হয়েছে, [hokeyization](https://github.com/cobbzilla/hokeylization) এর মাধ্যমে, এতে
 **[Google অনুবাদ দ্বারা সমর্থিত প্রতিটি ভাষা](https://cloud.google.com/translate/docs/languages)!**

 আমি নিশ্চিত যে এটি নিখুঁত নয়, তবে আমি আশা করি এটি কিছুই না হওয়ার চেয়ে ভাল!

 [🇸🇦 আরবি](../ar/README.md)
 [🇧🇩 বাংলা](../bn/README.md)
 [🇩🇪 জার্মান](../de/README.md)
 [🇺🇸 ইংরেজি](../en/README.md)
 [🇪🇸 স্প্যানিশ](../es/README.md)
 [🇫🇷 ফরাসি](../fr/README.md)
 [🇹🇩 হাউসা](../ha/README.md)
 [🇮🇳 হিন্দি](../hi/README.md)
 [🇮🇩 ইন্দোনেশিয়ান](../id/README.md)
 [🇮🇹 ইতালীয়](../it/README.md)
 [🇯🇵 জাপানি](../ja/README.md)
 [🇰🇷 কোরিয়ান](../ko/README.md)
 [🇮🇳 মারান্থি](../mr/README.md)
 [🇵🇱 পোলিশ](../pl/README.md)
 [🇧🇷 পর্তুগিজ](../pt/README.md)
 [🇷🇺 রাশিয়ান](../ru/README.md)
 [🇰🇪 সোয়াহিলি](../sw/README.md)
 [🇵🇭 তাগালগ](../tl/README.md)
 [🇹🇷 তুর্কি](../tr/README.md)
 [🇵🇰 উর্দু](../ur/README.md)
 [🇻🇳 ভিয়েতনামী](../vi/README.md)
 [🇨🇳 চীনা](../zh/README.md)


 **[📚 ... সমস্ত ভাষা ...](../README.md)**
 ----

 ### এই README এর অনুবাদে কি কোন সমস্যা আছে?
 মূল [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) এর এই বিশেষ অনুবাদ
 ত্রুটি থাকতে পারে -- *সংশোধনগুলিকে স্বাগত জানাই!* অনুগ্রহ করে একটি [GitHub-এ টেনে নেওয়ার অনুরোধ] পাঠান (https://github.com/cobbzilla/mobiletto/pulls),
 অথবা আপনি যদি এটি করতে স্বাচ্ছন্দ্যবোধ না করেন, [একটি সমস্যা খুলুন](https://github.com/cobbzilla/mobiletto/issues)

 যখন আপনি একটি অনুবাদ সম্পর্কে একটি নতুন GitHub সমস্যা তৈরি করেন, অনুগ্রহ করে করুন:
 * পৃষ্ঠার URL অন্তর্ভুক্ত করুন (ব্রাউজার ঠিকানা বার থেকে অনুলিপি/পেস্ট করুন)
 * সঠিক পাঠ্য অন্তর্ভুক্ত করুন যা ভুল (ব্রাউজার থেকে অনুলিপি/পেস্ট)
 * অনুগ্রহ করে বর্ণনা করুন কি ভুল -- অনুবাদ কি ভুল? বিন্যাস কি একরকম ভাঙ্গা?
 * অনুগ্রহ করে একটি ভাল অনুবাদের পরামর্শ দিন, বা কীভাবে পাঠ্যটি সঠিকভাবে বিন্যাস করা উচিত
 * **ধন্যবাদ!**

 ## মোবাইলটো কেন?

 ### বিদায় বিক্রেতা লক-ইন!
 বিভিন্ন ক্লাউড স্টোরেজ প্রদানকারীদের বেমানান API আছে। এমনকি যারা "S3 সামঞ্জস্য" এর জন্য চেষ্টা করে
 আইডিওসিংক্র্যাটিক আচরণ আছে।

 আপনি যখন আপনার অ্যাপের জন্য একটি নির্দিষ্ট স্টোরেজ বিক্রেতা চয়ন করেন, যদি আপনি সরাসরি তাদের API, আপনার অ্যাপে কোড করেন
 এখন সেই সেবার উপর নির্ভরশীল। যত সময় যায় এবং কোড জমা হয়, বিক্রেতা পরিবর্তন হয়
 ক্রমবর্ধমান অসহায়। বিক্রেতা লক-ইন এর মজার জগতে স্বাগতম!

 Mobiletto এই সমস্যা সমাধানের জন্য ডিজাইন করা হয়েছে. Mobiletto এর API এ আপনার অ্যাপ কোডিং করে, আপনি সহজেই করতে পারেন
 স্টোরেজ প্রদানকারী পরিবর্তন করুন এবং জেনে রাখুন যে আপনার অ্যাপের স্টোরেজ লেয়ারটি একইভাবে আচরণ করবে।

 ### ব্যাপক পরীক্ষা
 প্রতিটি ড্রাইভারের জন্য 60+ পরীক্ষার মাধ্যমে সমস্ত ড্রাইভার অভিন্ন আচরণের জন্য পরীক্ষা করা হয়।
 আমরা প্রতিটি সংমিশ্রণ সহ সমস্ত ড্রাইভার পরীক্ষা করি:
 * এনক্রিপশন: উভয়ই সক্রিয় এবং অক্ষম
 * রেডিস ক্যাশে: উভয়ই সক্রিয় এবং নিষ্ক্রিয়

 এই পদ্ধতিটি আমাদের মনে শান্তি দেয় যে আপনি যে ড্রাইভার ব্যবহার করেন না কেন মোবাইলটো একই আচরণ করবে,
 এবং আপনি ক্যাশিং এবং/অথবা এনক্রিপশন সক্ষম করুন কিনা তা নির্বিশেষে।

 ### ড্রাইভার সমর্থন
 বর্তমান Mobiletto স্টোরেজ ড্রাইভার:
 * `s3` : Amazon S3
 * `b2` : ব্যাকব্লেজ B2
 * `local` স্থানীয়` : স্থানীয় ফাইল সিস্টেম

 *আরো ক্লাউড স্টোরেজ প্রদানকারীদের সমর্থন করার জন্য অবদানগুলিকে স্বাগত জানাই!*

 ## mobiletto-cli
 Mobiletto অন্য জাভাস্ক্রিপ্ট কোড দ্বারা একটি লাইব্রেরি হিসাবে ব্যবহার করার উদ্দেশ্যে করা হয়েছে।

 কমান্ড-লাইনে mobiletto এর সাথে কাজ করতে, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ব্যবহার করুন

 ## সূত্র
 * [গিটহাবে মোবাইলেটো](https://github.com/cobbzilla/mobiletto)
 * [এনপিএমে মোবাইলেটো](https://www.npmjs.com/package/mobiletto)

 ## দ্রুত শুরু
 Mobiletto `s3` ড্রাইভার ব্যবহার করে একটি সংক্ষিপ্ত উদাহরণ।

 ড্রাইভার যদি `b2` বা `local` হয় তাহলে এই কোডটি একইভাবে চলবে।

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
 ## মৌলিক ব্যবহার
 একটি আরও বিস্তৃত উদাহরণ, প্রস্তাবিত বৈশিষ্ট্যগুলির বেশিরভাগই দেখাচ্ছে:

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

 ## মেটাডেটা
 `metadata` কমান্ড একটি একক ফাইল সিস্টেম এন্ট্রি সম্পর্কে মেটাডেটা প্রদান করে।
 একইভাবে, `list` কমান্ড থেকে রিটার্ন মান হল মেটাডেটা অবজেক্টের একটি অ্যারে।

 একটি মেটাডেটা বস্তু এই মত দেখায়:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` প্রপার্টি `file` , `dir` , `link` , অথবা `special` হতে পারে।

 ড্রাইভারের প্রকারের উপর নির্ভর করে, একটি `list` কমান্ড সব ক্ষেত্র ফেরত নাও দিতে পারে। `name` এবং `type` বৈশিষ্ট্য
 সবসময় উপস্থিত থাকা উচিত। একটি পরবর্তী `metadata` কমান্ড সমস্ত উপলব্ধ বৈশিষ্ট্য ফিরিয়ে দেবে।

 ## বিকল্প আমদানি শৈলী
 সম্পূর্ণ-স্কোপড মডিউল আমদানি করুন এবং `connect` ফাংশন ব্যবহার করুন:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ক্যাশিং
 Mobiletto একটি <a href="https://redis.io">রেডিস</a> ক্যাশে দিয়ে সবচেয়ে ভালো কাজ করে।

 Mobiletto 127.0.0.1:6379 এ একটি redis ইন্সট্যান্সের সাথে সংযোগ করার চেষ্টা করবে

 আপনি এইগুলির যেকোনো একটিকে ওভাররাইড করতে পারেন:
 * `MOBILETTO_REDIS_HOST` env var সেট করুন, স্থানীয় হোস্টের পরিবর্তে এখানে মোবাইল সংযোগ করতে
 * `MOBILETTO_REDIS_PORT` env var সেট করুন, এই পোর্টটি ব্যবহার করা হবে

 Mobiletto এর সমস্ত redis কী সংরক্ষণ করবে `_mobiletto__` উপসর্গ দিয়ে। আপনি এটি পরিবর্তন করতে পারেন
 `MOBILETTO_REDIS_PREFIX` env var সেট করে।

 আপনি `opts.redisConfig` অবজেক্টের সাথে প্রতি-সংযোগ ক্যাশিং সেট করতে পারেন:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### রেডিস ক্যাশিং চান না?
 নিষ্ক্রিয় করতে: আপনার সংযোগ স্থাপন করার সময় আপনার `opts.redisConfig` অবজেক্টে `enabled: false` false` পাস করুন।

 নীচে আলোচনা করা হয়েছে, ক্যাশিং নিষ্ক্রিয় করা কর্মক্ষমতার উপর বিরূপ প্রভাব ফেলবে এবং আরও অনুরোধ করবে
 স্টোরেজ যা আপনার সত্যিই প্রয়োজন।

 ### ক্যাশিং নির্দেশিকা
 **এনক্রিপ্ট করা স্টোরেজ**: এনক্রিপ্ট করা স্টোরেজ পড়া/লেখা স্বাভাবিকের চেয়ে একটু ধীর,
 কিন্তু ডিরেক্টরির চারপাশে নেভিগেট করা (যা কিছু জিনিস করে) মোটামুটি ব্যয়বহুল। একটি redis ক্যাশে ব্যবহার করে
 আপনাকে একটি উল্লেখযোগ্য কর্মক্ষমতা বুস্ট দেবে।

 ডিফল্ট ক্যাশে নিরাপদ, কিন্তু আপনার যদি প্রচুর লেখা/মুছে ফেলার ক্রিয়াকলাপ থাকে তবে এটি ভাল কাজ করে না।
 যেকোনো লেখা বা অপসারণ অপারেশন সম্পূর্ণ ক্যাশে অবৈধ করে দেয়, নিশ্চিত করে যে পরবর্তী পঠিতগুলি দেখতে পাবে
 সর্বশেষ পরিবর্তন।

 ### CLI টুল
 আপনি যদি একটি CLI টুল ব্যবহার করেন যেমন [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 আপনি অবশ্যই redis ক্যাশে সক্রিয় করতে চাইবেন, কারণ এটি `mo` কমান্ডের আহ্বান জুড়ে স্থায়ী হয়।

 ## মিররিং

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` কমান্ডটি একটি মোবাইল থেকে অন্য মোবাইলে সমস্ত ফাইলের এককালীন অনুলিপি সম্পাদন করে।
 এটি সময়ের সাথে আয়না বজায় রাখার জন্য কোন প্রক্রিয়া চালায় না। আবার `mirror` কমান্ড চালান
 কোনো অনুপস্থিত ফাইল সিঙ্ক্রোনাইজ করতে।

 `mirror` থেকে রিটার্ন মান হল একটি সাধারণ বস্তু যার কাউন্টার রয়েছে কতগুলি ফাইল সফলভাবে ছিল
 মিরর করা এবং কতগুলি ফাইলে ত্রুটি ছিল:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 সতর্কতা: বড় ডেটা সেট মিরর করা খুব সময়সাপেক্ষ এবং ব্যান্ডউইথ-নিবিড় হতে পারে

 `mirror` কলের শব্দার্থবিদ্যার সাহায্যে কে তা বুঝতে কখনও কখনও বিভ্রান্তিকর হতে পারে৷
 পাঠক এবং লেখক কে। এটিকে একটি অ্যাসাইনমেন্ট স্টেটমেন্টের মতো কল্পনা করুন: "বাম হাতের মোবাইলটো"
 জিনিসটি বরাদ্দ করা হচ্ছে (মিরর করা ডেটা লেখা), এবং "ডান-হাত মোবাইলটো" (দি
 `mirror` পদ্ধতির যুক্তি) হ'ল নির্ধারিত মান (মিরর করা ডেটা পড়া হয়)।

 ## স্বচ্ছ এনক্রিপশন
 স্বচ্ছ ক্লায়েন্ট-সাইড এনক্রিপশন সক্ষম করুন:

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

 কি হচ্ছে? একটি পৃথক "ডিরেক্টরি এন্ট্রি" (ডাইরেন্ট) ডিরেক্টরি (এনক্রিপ্ট করা) এতে কী ফাইল রয়েছে তা ট্র্যাক করে
 ডিরেক্টরি (ওরফে ডিরেন্ট ডিরেক্টরি)।
 * `list` কমান্ডটি ডিরেক্টরি এন্ট্রি ফাইলগুলি পড়ে, তালিকাভুক্ত প্রতিটি পাথ ডিক্রিপ্ট করে; তারপর প্রতিটি ফাইলের জন্য মেটাডেটা প্রদান করে
 * `list` কমান্ডগুলি আরও অকার্যকর, বিশেষ করে অনেকগুলি ফাইল সহ ডিরেক্টরিগুলির জন্য
 * `write` কমান্ড প্রতিটি পিতামাতার ডাইরেন্ট ডিরেক্টরিতে ডাইরেন্ট ফাইলগুলিকে পুনরাবৃত্তভাবে লেখে; তারপর ফাইলটি লেখে
 * `write` কমান্ডগুলি O(N) লিখতে হবে, N = ডিরেক্টরি অনুক্রমের গভীরতা সহ
 * `remove` কমান্ড সংশ্লিষ্ট ডাইরেন্ট ফাইলকে সরিয়ে দেয় এবং এর প্যারেন্ট যদি খালি থাকে, পুনরাবৃত্তিমূলকভাবে; তারপর ফাইল সরিয়ে দেয়
 * নন-রিকারসিভ `remove` কমান্ডের জন্য O(N) রিড এবং সম্ভাব্য যতগুলি ডিলিট হবে, ডাইরেক্টরি হায়ারার্কিতে N = গভীরতা সহ
 * বড় এবং গভীর ফাইল সিস্টেমে পুনরাবৃত্তিমূলক `remove` কমান্ড ব্যয়বহুল হতে পারে

 মনে রাখবেন যে এমনকি ক্লায়েন্ট-সাইড এনক্রিপশন সক্ষম থাকা সত্ত্বেও, আপনার এনক্রিপ্ট করা সার্ভার-সাইডে সম্পূর্ণ দৃশ্যমানতা সহ একটি প্রতিপক্ষ
 স্টোরেজ, এমনকি কী ছাড়াই, এখনও মোট ডিরেক্টরির সংখ্যা এবং প্রতিটিতে কতগুলি ফাইল রয়েছে এবং এর সাথে দেখতে পারে
 কিছু প্রচেষ্টা, ডিরেক্টরি অনুক্রমের সামগ্রিক কাঠামোর কিছু বা সমস্ত আবিষ্কার করুন।
 *দ্রষ্টব্য: ভালো নিরাপত্তার জন্য তুলনামূলকভাবে সমতল কাঠামো ব্যবহার করুন।*
 প্রতিপক্ষ ডিরেক্টরি/ফাইলের নাম জানবে না যদি না তারা আপনার এনক্রিপশনও জানত
 কী বা অন্যথায় সফলভাবে এনক্রিপশন ক্র্যাক করেছে। সব বাজি তাহলে বন্ধ!

 ### কর্মক্ষমতা এবং ক্যাশিং
 এনক্রিপ্ট করা স্টোরেজ অপারেশন ধীর হতে পারে. পুনরাবৃত্ত তালিকা এবং অপসারণ খুব ধীর হতে পারে.
 redis এর মাধ্যমে ক্যাশিং ব্যাপকভাবে সাহায্য করে, কিন্তু নোট করুন যে কোনো লেখা বা অপসারণের উপর ক্যাশে ফ্লাশ করা হয়।

 ## কী ঘূর্ণন
 আপনার নতুন কী দিয়ে একটি মোবাইলটো তৈরি করুন, তারপরে এটিতে পুরানো ডেটা মিরর করুন:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ড্রাইভার ইন্টারফেস
 ড্রাইভার হল যেকোনো JS ফাইল যা এই স্বাক্ষর সহ একটি 'storageClient' ফাংশন রপ্তানি করে:

    function storageClient (key, secret, opts)

 * `key` : একটি স্ট্রিং, আপনার API কী ( `local` ড্রাইভারের জন্য এটি বেস ডিরেক্টরি)
 * `secret` : একটি স্ট্রিং, আপনার API গোপন ( `local` ড্রাইভারের জন্য বাদ দেওয়া যেতে পারে)
 * `opts` : একটি বস্তু, বৈশিষ্ট্যগুলি প্রতি-ড্রাইভার:
 * `local` -এর জন্য, `fileMode` এবং `dirMode` বৈশিষ্ট্যগুলি নির্ধারণ করে যে কীভাবে নতুন তৈরি ফাইল এবং ডিরেক্টরি তৈরি করা হয়
 * `s3` এর জন্য, `bucket` প্রপার্টি প্রয়োজন। ঐচ্ছিক বৈশিষ্ট্য হল:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 স্টোরেজ ক্লায়েন্ট ফাংশনটি যে বস্তুটি প্রদান করে তা অবশ্যই এই ফাংশনগুলিকে সংজ্ঞায়িত করবে:

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

 ## লগিং
 Mobiletto [winston](https://www.npmjs.com/package/winston) লগিং লাইব্রেরি ব্যবহার করে।

 লগগুলিতে **ফাইল পাথ এবং ত্রুটির বার্তা ** থাকবে, কিন্তু **কখনই** কী, গোপনীয়তা থাকবে না,
 বা অন্য কোনো সংযোগ কনফিগারেশন তথ্য।

 ### লগ লেভেল
 একটি ব্যবহার করে লগ লেভেল সেট করতে `MOBILETTO_LOG_LEVEL` এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করুন
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) এ সংজ্ঞায়িত `npm` স্তরগুলির

 ডিফল্ট স্তর হল `error` । সবচেয়ে ভার্বস লেভেল হল `silly` , যদিও বর্তমানে মোবাইলটো
 `debug` নিচের স্তরে লগ করে না

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### লগ ফাইল
 ডিফল্টরূপে, লগার কনসোলে লেখে। একটি ফাইলে লগ পাঠাতে, `MOBILETTO_LOG_FILE` সেট করুন
 পরিবেশ সূচক. একটি ফাইলে লগিং করার সময়, লগগুলি আর কনসোলে লেখা হবে না।

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 লগিং বন্ধ করতে:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
