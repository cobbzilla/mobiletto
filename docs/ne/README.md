Mobiletto
 =========

 Mobiletto वैकल्पिक पारदर्शी क्लाइन्ट-साइड एन्क्रिप्शनको साथ, JavaScript भण्डारण एब्स्ट्रेक्शन तह हो।

 # सामग्री
 * [किन Mobiletto?](#Why-Mobiletto?)
 * [छिटो सुरु](# द्रुत-सुरु)
 * [Mobiletto CLI](#mobiletto-cli)
 * [स्रोत](#स्रोत)
 * [स्थापना](# स्थापना)
 * [समर्थन र कोष](#समर्थन र कोष)
 * [आधारभूत उपयोग](#आधारभूत उपयोग)
 * [मेटाडेटा](#मेटाडेटा)
 * [वैकल्पिक आयात शैली](#वैकल्पिक-आयात-शैली)
 * [क्यासिङ](#क्यासिङ)
 * [मिररिङ](#मिररिङ)
 * [पारदर्शी एन्क्रिप्शन](#पारदर्शी-इन्क्रिप्शन)
 * [कुञ्जी घुमाउने](#कुञ्जी-रोटेशन)
 * [ड्राइभर इन्टरफेस](#ड्राइभर-इन्टरफेस)
 * [लगिङ](#लगिङ)

 # यो अर्को भाषामा पढ्नुहोस्
 यो README.md कागजात [hokeylization](https://github.com/cobbzilla/hokeylization) मार्फत अनुवाद गरिएको छ, मा
 **[Google अनुवादद्वारा समर्थित हरेक भाषा](https://cloud.google.com/translate/docs/languages)!**

 म निश्चित छु कि यो उत्तम छैन, तर मलाई आशा छ कि यो केहि भन्दा राम्रो छ!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 अंग्रेजी](../en/README.md)
 [🇪🇸 स्पेनिश](../es/README.md)
 [🇫🇷 फ्रान्सेली](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिन्दी](../hi/README.md)
 [🇮🇩 इन्डोनेसियाली](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जापानी](../ja/README.md)
 [🇰🇷 कोरियाली](../ko/README.md)
 [🇮🇳 मरांथी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पोर्तुगाली](../pt/README.md)
 [🇷🇺 रूसी](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 टर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 भियतनामी](../vi/README.md)
 [🇨🇳 चिनियाँ](../zh/README.md)


 **[📚 ... सबै भाषाहरू ...](../README.md)**
 ----

 ### README को यो अनुवादमा कुनै समस्या छ?
 मूल [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) को यो विशेष अनुवाद
 त्रुटि हुन सक्छ -- *सुधार धेरै स्वागत छ!* कृपया [GitHub मा पुल अनुरोध](https://github.com/cobbzilla/mobiletto/pulls) पठाउनुहोस्,
 वा यदि तपाईं त्यसो गर्न सहज हुनुहुन्न भने, [एउटा मुद्दा खोल्नुहोस्](https://github.com/cobbzilla/mobiletto/issues)

 जब तपाइँ अनुवादको बारेमा नयाँ GitHub मुद्दा सिर्जना गर्नुहुन्छ, कृपया गर्नुहोस्:
 * पृष्ठ URL समावेश गर्नुहोस् (ब्राउजर ठेगाना पट्टीबाट प्रतिलिपि / टाँस्नुहोस्)
 * सही पाठ समावेश गर्नुहोस् जुन गलत छ (ब्राउजरबाट प्रतिलिपि / टाँस्नुहोस्)
 * कृपया के गलत छ वर्णन गर्नुहोस् -- के अनुवाद गलत छ? ढाँचा कतै बिग्रिएको छ?
 * कृपया राम्रो अनुवादको सुझाव, वा पाठ कसरी ठीकसँग ढाँचा हुनुपर्छ भन्ने प्रस्ताव गर्नुहोस्
 * **धन्यवाद!**

 ## किन Mobiletto?

 ### अलविदा विक्रेता लक-इन!
 विभिन्न क्लाउड भण्डारण प्रदायकहरूसँग असंगत API हरू छन्। "S3 अनुकूलता" को लागी प्रयास गर्नेहरू पनि
 इडियोसिंक्रेटिक व्यवहार छ।

 जब तपाइँ तपाइँको एप को लागी एक विशेष भण्डारण विक्रेता छनोट गर्नुहुन्छ, यदि तपाइँ सीधै तिनीहरूको API मा कोड गर्नुहुन्छ भने, तपाइँको एप
 अहिले त्यही सेवामा निर्भर छ । समय बित्दै जाँदा र कोड जम्मा हुँदा, विक्रेताहरू परिवर्तन हुँदै जान्छ
 बढ्दो असक्षम। विक्रेता लक-इन को रमाइलो संसारमा स्वागत छ!

 Mobiletto यो समस्या समाधान गर्न डिजाइन गरिएको थियो। Mobiletto को API मा आफ्नो एप कोडिङ गरेर, तपाईं सजिलै गर्न सक्नुहुन्छ
 भण्डारण प्रदायकहरू परिवर्तन गर्नुहोस् र जान्नुहोस् कि तपाईंको एपको भण्डारण तहले समान रूपमा व्यवहार गर्नेछ।

 ### व्यापक परीक्षण
 सबै ड्राइभरहरू प्रत्येक ड्राइभरको लागि 60+ परीक्षणहरूसँग समान व्यवहारको लागि परीक्षण गरिन्छ।
 हामी सबै ड्राइभरहरूको प्रत्येक संयोजनको साथ परीक्षण गर्छौं:
 * इन्क्रिप्सन: सक्षम र असक्षम दुवै
 * Redis क्यास: सक्षम र असक्षम दुवै

 यो दृष्टिकोणले हामीलाई मनको शान्ति दिन्छ कि तपाईले जुनसुकै चालक प्रयोग गर्नुभए पनि Mobiletto ले समान व्यवहार गर्नेछ,
 र तपाईंले क्यासिङ र/वा इन्क्रिप्सन सक्षम गर्नुभएको भए पनि।

 ### चालक समर्थन
 हालको Mobiletto भण्डारण ड्राइभरहरू:
 * `s3` : Amazon S3
 * `b2` : ब्याकब्लेज B2
 * `local` : स्थानीय फाइल प्रणाली

 *अधिक क्लाउड भण्डारण प्रदायकहरूलाई समर्थन गर्न योगदानहरू धेरै स्वागत छ!*

 ## mobiletto-cli
 Mobiletto अन्य JavaScript कोड द्वारा एक पुस्तकालय को रूप मा प्रयोग गर्न को लागी लक्षित छ।

 कमाण्ड-लाइनमा mobiletto सँग काम गर्न, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) प्रयोग गर्नुहोस्।

 ## मुहान
 * [GitHub मा mobiletto](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## सहयोग र कोष
 म एक पेशेवर खुला स्रोत सफ्टवेयर विकासकर्ता बन्ने प्रयास गर्दैछु। मा काम गर्दै आएको छु
 धेरै वर्षदेखि सफ्टवेयर उद्योगमा, मैले सफल कम्पनीहरू सुरु गरेको छु र तिनीहरूलाई सार्वजनिक कम्पनीहरूमा बेचेको छु।
 भर्खरै मैले मेरो जागिर गुमाएँ, र मसँग साँच्चै अरू कुनै काम छैन

 त्यसोभए म उपयोगी सफ्टवेयर लेख्ने प्रयास गर्न जाँदैछु र हेर्नुहोस् कि यसले काम गर्दछ

 यदि तपाइँ यो सफ्टवेयर प्रयोग गरेर रमाइलो गर्नुहुन्छ भने, म यसको लागि पनि धेरै आभारी हुनेछु
 सबैभन्दा सानो [Patreon मार्फत मासिक योगदान](https://www.patreon.com/cobbzilla)

 *धन्यवाद!*

 ## स्थापना
 `npm` वा `yarn` प्रयोग गरेर स्थापना गर्नुहोस्। तपाइँ सम्भवतः `lite` संस्करण चाहानुहुन्छ जुन सबै समावेश गर्दैन
 अनुवादित README फाइलहरू:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 यदि तपाइँ साँच्चै हरेक भाषामा README फाइलहरू चाहनुहुन्छ भने, पूर्ण संस्करण स्थापना गर्नुहोस्:

    npm install mobiletto
    yarn add mobiletto

 ## द्रुत सुरुवात
 Mobiletto `s3` ड्राइभर प्रयोग गर्ने एउटा छोटो उदाहरण।

 यदि ड्राइभर `b2` वा `local` भएमा यो कोड उस्तै चल्नेछ।

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
 ## आधारभूत उपयोग
 एक धेरै विस्तृत उदाहरण, प्रस्तावित धेरै सुविधाहरू देखाउँदै:

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

 ## मेटाडेटा
 `metadata` आदेशले एकल फाइल प्रणाली प्रविष्टिको बारेमा मेटाडेटा फर्काउँछ।
 त्यस्तै गरी, `list` आदेशबाट फिर्ता मान मेटाडेटा वस्तुहरूको एर्रे हो।

 मेटाडेटा वस्तु यस्तो देखिन्छ:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` गुण `file` , `dir` , `link` , वा `special` हुन सक्छ।

 ड्राइभरको प्रकारमा निर्भर गर्दै, `list` आदेशले सबै क्षेत्रहरू फर्काउन सक्दैन। `name` र `type` गुणहरू
 सधैं उपस्थित हुनुपर्छ। पछिको `metadata` आदेशले सबै उपलब्ध गुणहरू फर्काउनेछ।

 ## वैकल्पिक आयात शैली
 पूर्ण दायरा भएको मोड्युल आयात गर्नुहोस् र `connect` प्रकार्य प्रयोग गर्नुहोस्:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## क्यासिङ
 Mobiletto एक <a href="https://redis.io">redis</a> क्यास संग राम्रो काम गर्दछ।

 Mobiletto 127.0.0.1:6379 मा एक redis उदाहरण जडान गर्न प्रयास गर्नेछ।

 तपाईं यी मध्ये कुनै एक ओभरराइड गर्न सक्नुहुन्छ:
 * `MOBILETTO_REDIS_HOST` env var सेट गर्नुहोस्, mobiletto यहाँ लोकलहोस्टको सट्टा जडान गर्नुहोस्
 * `MOBILETTO_REDIS_PORT` env var सेट गर्नुहोस्, यो पोर्ट प्रयोग हुनेछ

 Mobiletto ले आफ्ना सबै redis कुञ्जीहरूलाई `_mobiletto__` उपसर्गसँग भण्डार गर्नेछ। तपाईं यसलाई परिवर्तन गर्न सक्नुहुन्छ
 `MOBILETTO_REDIS_PREFIX` env var सेट गरेर।

 तपाईं `opts.redisConfig` वस्तुसँग प्रति-जडान क्यासिङ पनि सेट गर्न सक्नुहुन्छ:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### रेडिस क्यासिङ चाहनुहुन्न?
 असक्षम गर्न: तपाईंले आफ्नो जडान स्थापना गर्दा तपाईंको `opts.redisConfig` वस्तुमा `enabled: false` पास गर्नुहोस्।

 तल छलफल गरिए अनुसार, क्यासिङ असक्षम पार्नाले कार्यसम्पादनमा प्रतिकूल प्रभाव पार्नेछ र थप अनुरोधहरू लाग्नेछ
 भण्डारण गर्न जुन तपाईलाई वास्तवमै चाहिन्छ।

 ### क्यासिङ निर्देशन
 **इन्क्रिप्टेड भण्डारण**: इन्क्रिप्टेड भण्डारण पढ्ने/लेख्ने काम सामान्य भन्दा अलि ढिलो मात्र हुन्छ,
 तर डाइरेक्टरीहरू वरिपरि नेभिगेट गर्ने (जुन केहि चीजहरू) एकदम महँगो छ। रेडिस क्यास प्रयोग गर्दै
 तपाईंलाई महत्त्वपूर्ण प्रदर्शन बढावा दिनेछ।

 पूर्वनिर्धारित क्यास सुरक्षित छ, तर यदि तपाईंसँग धेरै लेख्ने/हटाउने कार्यहरू छन् भने राम्रो प्रदर्शन गर्दैन।
 कुनै पनि लेख्ने वा हटाउने कार्यले सम्पूर्ण क्यासलाई अमान्य बनाउँछ, पछिका पढाइहरूले देख्नेछन्
 नवीनतम परिवर्तनहरू।

 ### CLI उपकरणहरू
 यदि तपाईं [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) जस्ता CLI उपकरण प्रयोग गर्दै हुनुहुन्छ भने,
 तपाइँ निश्चित रूपमा redis क्यास सक्षम गर्न चाहानुहुन्छ, किनकि यो `mo` आदेशको आह्वानहरूमा रहन्छ।

 ## मिररिङ

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` आदेशले एक मोबाइलबाट अर्कोमा सबै फाइलहरूको एक पटकको प्रतिलिपि कार्य गर्दछ।
 यसले समयसँगै ऐना कायम राख्न कुनै प्रक्रिया चलाउँदैन। फेरि `mirror` आदेश चलाउनुहोस्
 कुनै पनि छुटेका फाइलहरू सिङ्क्रोनाइज गर्न।

 `mirror` बाट फिर्ताको मान कति फाइलहरू सफलतापूर्वक भएका थिए भनेर काउन्टरहरू भएको एउटा साधारण वस्तु हो
 मिरर गरिएको र कति फाइलहरूमा त्रुटिहरू थिए:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 चेतावनी: ठूला डाटा सेटहरू मिररिङ धेरै समय खपत र ब्यान्डविथ-गहन हुन सक्छ।

 `mirror` साथ यो कहिलेकाहीं को हो भनेर बुझ्न भ्रमित हुन सक्छ
 पाठक र लेखक को हो। यसलाई असाइनमेन्ट कथन जस्तै कल्पना गर्नुहोस्: "बायाँ-हात mobiletto"
 (मिरर गरिएको डाटा लेखिएको), र "दायाँ हात मोबाइलटो" (द
 `mirror` विधिको तर्क) तोकिएको मान हो (मिरर गरिएको डेटा पढिन्छ)।

 ## पारदर्शी गुप्तिकरण
 पारदर्शी क्लाइन्ट-साइड इन्क्रिप्सन सक्षम गर्नुहोस्:

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

 के भइरहेको छ? एउटा छुट्टै "डाइरेक्टरी प्रविष्टि" (डायरेन्ट) डाइरेक्टरी (इन्क्रिप्टेड) त्यसमा कुन फाइलहरू छन् भनेर ट्र्याक गर्दछ।
 डाइरेक्टरी (उर्फ डाइरेन्ट डाइरेक्टरी)।
 * `list` आदेशले डाइरेक्टरी प्रविष्टि फाइलहरू पढ्छ, सूचीबद्ध प्रत्येक पथ डिक्रिप्ट गर्दछ; त्यसपछि प्रत्येक फाइलको लागि मेटाडेटा फर्काउँछ
 * `list` आदेशहरू अधिक अक्षम छन्, विशेष गरी फाइलहरूको ठूलो संख्या भएका डाइरेक्टरीहरूको लागि
 * `write` आदेशले प्रत्येक अभिभावकको डाइरेन्ट डाइरेक्टरीमा पुनरावर्ती रूपमा डाइरेन्ट फाइलहरू लेख्छ; त्यसपछि फाइल लेख्छ
 * `write` आदेशहरूले डाइरेक्टरी पदानुक्रममा N = गहिराइको साथ O(N) राइटहरू लगाउनेछ।
 * `remove` आदेशले सम्बन्धित डाइरेन्ट फाइल, र यदि खाली छ भने, पुनरावर्ती रूपमा यसको अभिभावक हटाउँछ; त्यसपछि फाइल हटाउँछ
 * गैर-पुनरावर्ती `remove` आदेशहरूले O(N) पढ्ने र सम्भावित रूपमा धेरै डिलिटहरू, डाइरेक्टरी पदानुक्रममा N = गहिराइको साथ लगाइनेछ।
 * ठूला र गहिरो फाइल प्रणालीहरूमा पुनरावर्ती `remove` आदेशहरू महँगो हुन सक्छ

 ध्यान दिनुहोस् कि क्लाइन्ट-साइड इन्क्रिप्सन सक्षम भए पनि, तपाईंको एन्क्रिप्टेड सर्भर-साइडमा पूर्ण दृश्यताको साथ एक विरोधी
 भण्डारण, कुञ्जी बिना पनि, अझै पनि डाइरेक्टरीहरूको कुल संख्या र प्रत्येकमा कति फाइलहरू छन्, र संग हेर्न सक्छ
 केहि प्रयास, निर्देशिका पदानुक्रम को समग्र संरचना को केहि वा सबै पत्ता लगाउनुहोस्।
 *नोट: राम्रो सुरक्षाको लागि अपेक्षाकृत समतल संरचना प्रयोग गर्नुहोस्।*
 विपक्षीलाई डाइरेक्टरी/फाइलहरूको नाम थाहा हुँदैन जबसम्म उनीहरूलाई तपाइँको एन्क्रिप्शन पनि थाहा हुँदैन।
 कुञ्जी वा अन्यथा सफलतापूर्वक इन्क्रिप्शन क्र्याक गरेको थियो। त्यसपछि सबै शर्त बन्द छन्!

 ### प्रदर्शन र क्यासिङ
 इन्क्रिप्टेड भण्डारणमा सञ्चालनहरू ढिलो हुन सक्छ। पुनरावर्ती सूचीहरू र हटाउने काम धेरै ढिलो हुन सक्छ।
 रेडिस मार्फत क्यासिङले धेरै मद्दत गर्छ, तर नोट गर्नुहोस् कि क्यास कुनै पनि लेखमा वा हटाउँदा फ्लश गरिएको छ।

 ## कुञ्जी घुमाउने
 आफ्नो नयाँ कुञ्जीसँग मोबाइलटोटो सिर्जना गर्नुहोस्, त्यसपछि पुरानो डाटा यसमा मिरर गर्नुहोस्:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## चालक इन्टरफेस
 ड्राइभर कुनै पनि JS फाइल हो जसले यो हस्ताक्षरको साथ 'storageClient' प्रकार्य निर्यात गर्दछ:

    function storageClient (key, secret, opts)

 * `key` : एउटा स्ट्रिङ, तपाईको API कुञ्जी ( `local` ड्राइभरका लागि यो आधार निर्देशिका हो)
 * `secret` : एउटा स्ट्रिङ, तपाईको एपीआई गोप्य ( `local` ड्राइभरका लागि मेटाउन सकिन्छ)
 * `opts` : एउटा वस्तु, गुणहरू प्रति-ड्राइभर हुन्:
 * `local` को लागि, `fileMode` र `dirMode` गुणहरूले कसरी नयाँ सिर्जना गर्ने फाइलहरू र डाइरेक्टरीहरू सिर्जना गरिन्छन् भनेर निर्धारण गर्दछ।
 * `s3` को लागि, `bucket` गुण आवश्यक छ। वैकल्पिक गुणहरू हुन्:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 वस्तु जुन भण्डारण क्लाइन्ट प्रकार्यले फर्काउँछ यी प्रकार्यहरू परिभाषित गर्नुपर्छ:

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

 ## लगिङ
 Mobiletto [winston](https://www.npmjs.com/package/winston) लगिङ पुस्तकालय प्रयोग गर्दछ।

 लगहरू **फाइल पथ र त्रुटि सन्देशहरू समावेश गर्दछ, तर **कहिल्यै** कुञ्जीहरू, गोप्यहरू समावेश गर्दैनन्,
 वा कुनै अन्य जडान कन्फिगरेसन जानकारी।

 ### लग स्तर
 लग स्तर सेट गर्नको लागि `MOBILETTO_LOG_LEVEL` वातावरण चर प्रयोग गर्नुहोस्, एउटा प्रयोग गरी
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) मा परिभाषित `npm` स्तरहरूको

 पूर्वनिर्धारित स्तर `error` हो। सबैभन्दा verbose स्तर `silly` हो, यद्यपि हाल mobiletto
 `debug` तलको स्तरहरूमा लग गर्दैन

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### लग फाइल
 पूर्वनिर्धारित रूपमा, लगरले कन्सोलमा लेख्छ। फाइलमा लगहरू पठाउन, `MOBILETTO_LOG_FILE` सेट गर्नुहोस्
 परिवेश चर। फाइलमा लगिङ गर्दा, लगहरू अब कन्सोलमा लेखिने छैनन्।

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 लगिङ बन्द गर्न:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
