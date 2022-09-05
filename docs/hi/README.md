मोबाइलट्टो
 =========

 Mobiletto वैकल्पिक पारदर्शी क्लाइंट-साइड एन्क्रिप्शन के साथ एक जावास्क्रिप्ट स्टोरेज एब्स्ट्रैक्शन लेयर है।

 # सामग्री
 * [क्यों Mobiletto?](# Why-Mobiletto?)
 * [त्वरित प्रारंभ](# त्वरित प्रारंभ)
 * [मोबाइलटो सीएलआई](#mobiletto-cli)
 * [स्रोत](# स्रोत)
 * [स्थापना](# स्थापना)
 * [सहायता और वित्त पोषण](# समर्थन और वित्त पोषण)
 * [मूल उपयोग](# मूल-उपयोग)
 * [मेटाडेटा](#मेटाडेटा)
 * [वैकल्पिक आयात शैली](# वैकल्पिक-आयात-शैली)
 * [कैशिंग](# कैशिंग)
 * [प्रतिबिंब](#प्रतिबिंब)
 * [पारदर्शी एन्क्रिप्शन](#पारदर्शी-एन्क्रिप्शन)
 * [कुंजी रोटेशन](# कुंजी-रोटेशन)
 * [ड्राइवर इंटरफ़ेस](# ड्राइवर-इंटरफ़ेस)
 * [लॉगिंग](# लॉगिंग)

 #इसे दूसरी भाषा में पढ़ें
 इस README.md दस्तावेज़ का अनुवाद [hokeylization](https://github.com/cobbzilla/hokeylization) के माध्यम से किया गया है।
 **[Google अनुवाद द्वारा समर्थित प्रत्येक भाषा](https://cloud.google.com/translate/docs/languages)!**

 मुझे यकीन है कि यह सही नहीं है, लेकिन मुझे आशा है कि यह कुछ भी नहीं से बेहतर है!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 अंग्रेजी](../hi/README.md)
 [🇪🇸 स्पेनिश](../es/README.md)
 [🇫🇷 फ्रेंच](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिन्दी](../hi/README.md)
 [🇮🇩 इन्डोनेशियाई](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जापानी](../ja/README.md)
 [🇰🇷 कोरियाई](../ko/README.md)
 [🇮🇳 मरांथी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पुर्तगाली](../pt/README.md)
 [🇷🇺 रूसी](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 तागालोग](../tl/README.md)
 [🇹🇷 तुर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 वियतनामी](../vi/README.md)
 [🇨🇳 चीनी](../zh/README.md)


 **[📚 ... सभी भाषाएं ...](../README.md)**
 ----

 ### क्या README के इस अनुवाद में कोई समस्या है?
 मूल [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) का यह विशेष अनुवाद
 त्रुटिपूर्ण हो सकता है -- *सुधारों का बहुत स्वागत है!* कृपया [GitHub पर पुल अनुरोध](https://github.com/cobbzilla/mobiletto/pulls) भेजें,
 या यदि आप ऐसा करने में सहज नहीं हैं, तो [एक मुद्दा खोलें](https://github.com/cobbzilla/mobiletto/issues)

 जब आप अनुवाद के बारे में एक नया GitHub मुद्दा बनाते हैं, तो कृपया यह करें:
 * पेज यूआरएल शामिल करें (ब्राउज़र एड्रेस बार से कॉपी/पेस्ट करें)
 * सटीक टेक्स्ट शामिल करें जो गलत है (ब्राउज़र से कॉपी/पेस्ट करें)
 * कृपया बताएं कि क्या गलत है -- क्या अनुवाद गलत है? स्वरूपण किसी भी तरह टूटा हुआ है?
 * कृपया एक बेहतर अनुवाद का सुझाव दें, या पाठ को ठीक से कैसे स्वरूपित किया जाना चाहिए
 * **आपको धन्यवाद!**

 ## Mobiletto क्यों?

 ### अलविदा विक्रेता लॉक-इन!
 विभिन्न क्लाउड स्टोरेज प्रदाताओं के पास असंगत एपीआई हैं। यहां तक कि वे जो "S3 संगतता" के लिए प्रयास करते हैं
 स्वभावगत व्यवहार रखते हैं।

 जब आप अपने ऐप के लिए एक विशेष स्टोरेज वेंडर चुनते हैं, अगर आप सीधे उनके एपीआई को कोड करते हैं, तो आपका ऐप
 अब उस सेवा पर निर्भर है। जैसे-जैसे समय बीतता है और कोड जमा होता है, बदलते विक्रेता बन जाते हैं
 अधिक से अधिक असमर्थनीय। वेंडर लॉक-इन की मजेदार दुनिया में आपका स्वागत है!

 Mobiletto को इस समस्या को हल करने के लिए डिज़ाइन किया गया था। अपने ऐप को mobiletto के एपीआई में कोड करके, आप आसानी से कर सकते हैं
 स्टोरेज प्रदाता बदलें और जानें कि आपके ऐप की स्टोरेज लेयर समान रूप से व्यवहार करेगी।

 ### व्यापक परीक्षण
 प्रत्येक ड्राइवर के लिए 60+ परीक्षणों के साथ समान व्यवहार के लिए सभी ड्राइवरों का परीक्षण किया जाता है।
 हम हर संयोजन के साथ सभी ड्राइवरों का परीक्षण करते हैं:
 * एन्क्रिप्शन: सक्षम और अक्षम दोनों
 * रेडिस कैश: सक्षम और अक्षम दोनों

 यह दृष्टिकोण हमें मन की शांति देता है कि mobiletto वही व्यवहार करेगा चाहे आप किसी भी ड्राइवर का उपयोग करें,
 और इस पर ध्यान दिए बिना कि आप कैशिंग और/या एन्क्रिप्शन को सक्षम करते हैं या नहीं।

 ### ड्राइवर सपोर्ट
 वर्तमान Mobiletto संग्रहण ड्राइवर:
 * `s3` : अमेज़न S3
 * `b2` : बैकब्लेज बी2
 * `local` : स्थानीय फाइल सिस्टम

 *अधिक क्लाउड स्टोरेज प्रदाताओं का समर्थन करने के लिए योगदान का स्वागत है!*

 ## मोबाइलटो-क्ली
 Mobiletto को अन्य JavaScript कोड द्वारा लाइब्रेरी के रूप में उपयोग करने का इरादा है।

 कमांड लाइन पर mobiletto के साथ काम करने के लिए, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) का उपयोग करें

 ## स्रोत
 * [GitHub पर mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm पर mobiletto](https://www.npmjs.com/package/mobiletto)

 ## समर्थन और अनुदान
 मैं एक पेशेवर ओपन सोर्स सॉफ्टवेयर डेवलपर बनने का प्रयास कर रहा हूं। मैं में काम कर रहा हूँ
 कई वर्षों से सॉफ्टवेयर उद्योग, मैंने सफल कंपनियों को शुरू किया है और उन्हें सार्वजनिक कंपनियों को बेच दिया है।
 हाल ही में मैंने अपनी नौकरी खो दी है, और मेरे पास वास्तव में कोई अन्य काम नहीं है

 इसलिए मैं उपयोगी सॉफ़्टवेयर लिखने की कोशिश करने जा रहा हूँ और देखूँगा कि क्या यह काम करता है

 यदि आप इस सॉफ़्टवेयर का उपयोग करने का आनंद लेते हैं, तो मैं इसके लिए भी बहुत आभारी रहूंगा
 सबसे छोटा [पैट्रियन के माध्यम से मासिक योगदान](https://www.patreon.com/cobbzilla)

 *आपको धन्यवाद!*

 ## स्थापना
 `npm` या `yarn` का उपयोग करके इंस्टॉल करें। आप शायद `lite` संस्करण चाहते हैं जिसमें सभी शामिल नहीं हैं
 अनुवादित README फ़ाइलें:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 यदि आप वास्तव में प्रत्येक भाषा में README फ़ाइलें चाहते हैं, तो पूर्ण संस्करण स्थापित करें:

    npm install mobiletto
    yarn add mobiletto

 ## जल्दी शुरू
 mobiletto `s3` ड्राइवर का उपयोग करते हुए एक संक्षिप्त उदाहरण।

 यदि ड्राइवर `b2` या `local` होता तो यह कोड समान चलता।

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
 ## मूल उपयोग
 एक बहुत अधिक व्यापक उदाहरण, पेश की जाने वाली अधिकांश सुविधाओं को दिखा रहा है:

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
 `metadata` कमांड एकल फाइल सिस्टम प्रविष्टि के बारे में मेटाडेटा लौटाता है।
 इसी तरह, `list` कमांड से वापसी मूल्य मेटाडेटा वस्तुओं की एक सरणी है।

 मेटाडेटा ऑब्जेक्ट इस तरह दिखता है:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` संपत्ति `file` , `dir` , `link` या `special` है।

 ड्राइवर के प्रकार के आधार पर, एक `list` कमांड सभी क्षेत्रों को वापस नहीं कर सकता है। `name` और `type` गुण
 हमेशा मौजूद रहना चाहिए। एक बाद का `metadata` आदेश सभी उपलब्ध गुणों को वापस कर देगा।

 ## वैकल्पिक आयात शैली
 पूरी तरह से दायरे वाले मॉड्यूल को आयात करें और `connect` फ़ंक्शन का उपयोग करें:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## कैशिंग
 Mobiletto <a href="https://redis.io">रेडिस</a> कैश के साथ सबसे अच्छा काम करता है।

 Mobiletto 127.0.0.1:6379 . को रेडिस इंस्टेंस से कनेक्ट करने का प्रयास करेगा

 आप इनमें से किसी एक को ओवरराइड कर सकते हैं:
 * स्थानीयहोस्ट के बजाय यहां कनेक्ट करने के लिए `MOBILETTO_REDIS_HOST` env var, mobiletto सेट करें
 * `MOBILETTO_REDIS_PORT` env var सेट करें, इस पोर्ट का उपयोग किया जाएगा

 Mobiletto अपनी सभी redis कुंजियों को उपसर्ग `_mobiletto__` के साथ संग्रहीत करेगा। आप इसे बदल सकते हैं
 `MOBILETTO_REDIS_PREFIX` env var सेट करके।

 आप `opts.redisConfig` ऑब्जेक्ट के साथ प्रति-कनेक्शन कैशिंग भी सेट कर सकते हैं:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### रेडिस कैशिंग नहीं चाहते हैं?
 अक्षम करने के लिए: जब आप अपना कनेक्शन स्थापित करते हैं तो अपने `opts.redisConfig` ऑब्जेक्ट में `enabled: false` पास करें।

 जैसा कि नीचे चर्चा की गई है, कैशिंग को अक्षम करने से प्रदर्शन पर प्रतिकूल प्रभाव पड़ेगा और अधिक अनुरोध होंगे
 भंडारण के लिए जो आपको वास्तव में चाहिए।

 ### कैशिंग मार्गदर्शन
 **एन्क्रिप्टेड स्टोरेज**: एन्क्रिप्टेड स्टोरेज को पढ़ना/लिखना सामान्य से थोड़ा ही धीमा है,
 लेकिन निर्देशिकाओं के आसपास नेविगेट करना (जो कुछ चीजें करते हैं) काफी महंगा है। रेडिस कैश का उपयोग करना
 आपको एक महत्वपूर्ण प्रदर्शन बढ़ावा देगा।

 डिफ़ॉल्ट कैश सुरक्षित है, लेकिन यदि आपके पास बहुत से लिखने/निकालने के संचालन हैं तो यह अच्छा प्रदर्शन नहीं करता है।
 कोई भी लिखने या हटाने का ऑपरेशन पूरे कैश को अमान्य कर देता है, यह सुनिश्चित करता है कि बाद में पढ़ने वाले को देखेंगे
 नवीनतम परिवर्तन।

 ### सीएलआई उपकरण
 अगर आप [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) जैसे CLI टूल का इस्तेमाल कर रहे हैं,
 आप निश्चित रूप से रेडिस कैश को सक्षम करना चाहेंगे, क्योंकि यह `mo` कमांड के इनवोकेशन में रहता है।

 ## मिररिंग

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` कमांड एक मोबाइल से दूसरे में सभी फाइलों की एकमुश्त कॉपी करता है।
 यह समय के साथ दर्पण को बनाए रखने के लिए कोई प्रक्रिया नहीं चलाता है। फिर से `mirror` कमांड चलाएँ
 किसी भी लापता फाइल को सिंक्रनाइज़ करने के लिए।

 `mirror` से वापसी मूल्य काउंटरों के साथ एक साधारण वस्तु है कि कितनी फाइलें सफलतापूर्वक थीं
 प्रतिबिंबित और कितनी फाइलों में त्रुटियां थीं:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 चेतावनी: बड़े डेटा सेट को मिरर करना बहुत समय लेने वाला और बैंडविड्थ-गहन हो सकता है

 `mirror` कॉल सेमेन्टिक्स के साथ कभी-कभी यह समझने में भ्रमित हो सकता है कि कौन है
 पाठक और लेखक कौन है। इसे एक असाइनमेंट स्टेटमेंट की तरह कल्पना करें: "बाएं हाथ का मोबाइलटो"
 वह चीज है जिसे सौंपा जा रहा है (प्रतिबिंबित डेटा लिखा गया है), और "राइट-हैंड मोबिलटो" (the .)
 `mirror` विधि के लिए तर्क) असाइन किया जा रहा मान है (प्रतिबिंबित डेटा पढ़ा जाता है)।

 ## पारदर्शी एन्क्रिप्शन
 पारदर्शी क्लाइंट-साइड एन्क्रिप्शन सक्षम करें:

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

 क्या हो रहा है? एक अलग "निर्देशिका प्रविष्टि" (डायरेक्ट) निर्देशिका (एन्क्रिप्टेड) ट्रैक करती है कि उसमें कौन सी फाइलें हैं
 निर्देशिका (उर्फ डायरेक्ट डायरेक्टरी)।
 * `list` कमांड निर्देशिका प्रविष्टि फ़ाइलों को पढ़ता है, सूचीबद्ध प्रत्येक पथ को डिक्रिप्ट करता है; फिर प्रत्येक फ़ाइल के लिए मेटाडेटा लौटाता है
 * `list` कमांड अधिक अक्षम हैं, विशेष रूप से बड़ी संख्या में फाइलों वाली निर्देशिकाओं के लिए
 * `write` कमांड प्रत्येक माता-पिता की डाइरेंट निर्देशिका में अलग-अलग फाइलें लिखता है; फिर फाइल लिखता है
 * `write` कमांड ओ (एन) लिखता है, एन = निर्देशिका पदानुक्रम में गहराई के साथ
 * `remove` कमांड संबंधित डिरेंट फ़ाइल को हटा देता है, और इसके माता-पिता को खाली होने पर, पुनरावर्ती रूप से हटा देता है; फिर फ़ाइल को हटा देता है
 * गैर-पुनरावर्ती `remove` आदेश ओ (एन) पढ़ता है और संभावित रूप से कई हटा देता है, निर्देशिका पदानुक्रम में एन = गहराई के साथ
 * बड़े और गहरे फाइल सिस्टम पर रिकर्सिव `remove` कमांड महंगे हो सकते हैं

 ध्यान दें कि क्लाइंट-साइड एन्क्रिप्शन सक्षम होने पर भी, आपके एन्क्रिप्टेड सर्वर-साइड में पूर्ण दृश्यता वाला एक विरोधी
 भंडारण, कुंजी के बिना भी, अभी भी निर्देशिकाओं की कुल संख्या और प्रत्येक में कितनी फ़ाइलें हैं, और के साथ देख सकते हैं
 कुछ प्रयास, निर्देशिका पदानुक्रम की समग्र संरचना के कुछ या सभी की खोज करें।
 *नोट: बेहतर सुरक्षा के लिए अपेक्षाकृत सपाट संरचना का उपयोग करें।*
 विरोधी को निर्देशिकाओं/फाइलों के नाम तब तक नहीं पता होंगे जब तक कि वे आपके एन्क्रिप्शन को भी नहीं जानते
 कुंजी या अन्यथा एन्क्रिप्शन को सफलतापूर्वक क्रैक किया था। तब सभी दांव बंद हैं!

 ### प्रदर्शन और कैशिंग
 एन्क्रिप्टेड स्टोरेज पर संचालन धीमा हो सकता है। पुनरावर्ती लिस्टिंग और निष्कासन बहुत धीमा हो सकता है।
 रेडिस के माध्यम से कैशिंग काफी मदद करता है, लेकिन ध्यान दें कि किसी भी लिखने या हटाने पर कैश फ्लश हो जाता है।

 ## कुंजी रोटेशन
 अपनी नई कुंजी के साथ एक मोबाइलटो बनाएं, फिर उसमें पुराने डेटा को मिरर करें:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ड्राइवर इंटरफ़ेस
 ड्राइवर कोई भी JS फ़ाइल है जो इस हस्ताक्षर के साथ 'storageClient' फ़ंक्शन को निर्यात करता है:

    function storageClient (key, secret, opts)

 * `key` : एक स्ट्रिंग, आपकी एपीआई कुंजी ( `local` ड्राइवर के लिए यह मूल निर्देशिका है)
 * `secret` : एक स्ट्रिंग, आपका एपीआई रहस्य ( `local` ड्राइवर के लिए छोड़ा जा सकता है)
 * `opts` : एक वस्तु, गुण प्रति-चालक हैं:
 * `local` के लिए, `fileMode` और `dirMode` गुण निर्धारित करते हैं कि नई बनाने वाली फ़ाइलें और निर्देशिकाएं कैसे बनाई जाती हैं
 * `s3` के लिए, `bucket` संपत्ति आवश्यक है। वैकल्पिक गुण हैं:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 स्टोरेज क्लाइंट फ़ंक्शन द्वारा लौटाई गई वस्तु को इन कार्यों को परिभाषित करना चाहिए:

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

 ## लॉगिंग
 Mobiletto [winston](https://www.npmjs.com/package/winston) लॉगिंग लाइब्रेरी का उपयोग करता है।

 लॉग्स **में** फ़ाइल पथ और त्रुटि संदेश होंगे, लेकिन **कभी नहीं** में कुंजी, रहस्य,
 या कोई अन्य कनेक्शन कॉन्फ़िगरेशन जानकारी।

 ### छांटने का स्तर
 लॉग स्तर सेट करने के लिए `MOBILETTO_LOG_LEVEL` पर्यावरण चर का उपयोग करें, एक का उपयोग करके
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) में परिभाषित `npm` स्तरों में से

 डिफ़ॉल्ट स्तर `error` है। सबसे क्रियात्मक स्तर `silly` है, हालांकि वर्तमान में mobiletto
 `debug` से नीचे के स्तर पर लॉग इन नहीं करता है

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### लॉग फ़ाइल
 डिफ़ॉल्ट रूप से, लकड़हारा कंसोल को लिखता है। किसी फ़ाइल में लॉग भेजने के लिए, `MOBILETTO_LOG_FILE` सेट करें
 पर्यावरणपरिवर्ती तारक। किसी फ़ाइल में लॉग इन करते समय, लॉग अब कंसोल पर नहीं लिखे जाएंगे।

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 लॉगिंग बंद करने के लिए:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
