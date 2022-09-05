मोबाईलटो
 ==========

 Mobiletto पर्यायी पारदर्शक क्लायंट-साइड एन्क्रिप्शनसह JavaScript स्टोरेज अॅब्स्ट्रॅक्शन लेयर आहे.

 # सामग्री
 * [Why Mobiletto?](#Why-Mobiletto?)
 * [क्विक स्टार्ट](#क्विक-स्टार्ट)
 * [Mobiletto CLI](#mobiletto-cli)
 * [स्रोत](#स्रोत)
 * [स्थापना](#स्थापना)
 * [समर्थन आणि निधी](#समर्थन-आणि-निधी)
 * [मूलभूत वापर](#मूलभूत-वापर)
 * [मेटाडेटा](#मेटाडेटा)
 * [पर्यायी आयात शैली](#वैकल्पिक-आयात-शैली)
 * [कॅशिंग](#कॅशिंग)
 * [मिररिंग](#मिररिंग)
 * [पारदर्शक एन्क्रिप्शन](#पारदर्शक-एनक्रिप्शन)
 * [की रोटेशन](#की-रोटेशन)
 * [ड्रायव्हर इंटरफेस](#ड्रायव्हर-इंटरफेस)
 * [लॉगिंग](#लॉगिंग)

 # हे दुसऱ्या भाषेत वाचा
 या README.md दस्तऐवजाचे भाषांतर [hokeylisation](https://github.com/cobbzilla/hokeylization) द्वारे केले गेले आहे.
 **[Google Translate द्वारे समर्थित प्रत्येक भाषा](https://cloud.google.com/translate/docs/languages)!**

 मला खात्री आहे की ते परिपूर्ण नाही, परंतु मला आशा आहे की ते काहीही नसण्यापेक्षा चांगले आहे!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 इंग्रजी](../en/README.md)
 [🇪🇸 स्पॅनिश](../es/README.md)
 [🇫🇷 फ्रेंच](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिंदी](../hi/README.md)
 [🇮🇩 इंडोनेशियन](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जपानी](../ja/README.md)
 [🇰🇷 कोरियन](../ko/README.md)
 [🇮🇳 मराठी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पोर्तुगीज](../pt/README.md)
 [🇷🇺 रशियन](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 तुर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 व्हिएतनामी](../vi/README.md)
 [🇨🇳 चीनी](../zh/README.md)


 **[📚 ... सर्व भाषा ...](../README.md)**
 ----

 ### README च्या या भाषांतरात काही अडचण आहे का?
 मूळ [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) चे हे विशिष्ट भाषांतर
 सदोष असू शकतात -- *दुरुस्तीचे स्वागत आहे!* कृपया [GitHub वर पुल विनंती](https://github.com/cobbzilla/mobiletto/pulls) पाठवा,
 किंवा तुम्हाला ते करण्यात सोयीस्कर नसल्यास, [समस्या उघडा](https://github.com/cobbzilla/mobiletto/issues)

 जेव्हा तुम्ही भाषांतराबद्दल नवीन GitHub समस्या तयार करता, तेव्हा कृपया हे करा:
 * पृष्ठ URL समाविष्ट करा (ब्राउझर अॅड्रेस बारवरून कॉपी/पेस्ट करा)
 * चुकीचा मजकूर समाविष्ट करा (ब्राउझरवरून कॉपी/पेस्ट करा)
 * कृपया काय चुकीचे आहे याचे वर्णन करा -- भाषांतर चुकीचे आहे का? स्वरूपन काहीसे तुटले आहे का?
 * कृपया अधिक चांगल्या भाषांतराची किंवा मजकूर योग्यरित्या कसा फॉरमॅट केला जावा यासाठी सुचवा
 * **धन्यवाद!**

 ## मोबाईलटो का?

 ### गुडबाय विक्रेता लॉक-इन!
 विविध क्लाउड स्टोरेज प्रदात्यांकडे विसंगत API आहेत. "S3 सुसंगतता" साठी प्रयत्न करणारे देखील
 वैशिष्ठ्यपूर्ण वर्तन आहे.

 तुम्ही तुमच्या अॅपसाठी एखादा विशिष्ट स्टोरेज विक्रेता निवडता तेव्हा, तुम्ही थेट त्यांच्या API वर कोड केल्यास, तुमचे अॅप
 आता त्या सेवेवर अवलंबून आहे. जसजसा वेळ जातो आणि कोड जमा होतो, बदलणारे विक्रेते बनतात
 वाढत्या प्रमाणात अक्षम. विक्रेता लॉक-इनच्या मजेदार जगात आपले स्वागत आहे!

 या समस्येचे निराकरण करण्यासाठी Mobiletto डिझाइन केले होते. तुमच्या अॅपला mobiletto च्या API मध्ये कोडिंग करून, तुम्ही सहज करू शकता
 स्टोरेज प्रदाते बदला आणि जाणून घ्या की तुमच्या अॅपचा स्टोरेज लेयर सारखाच वागेल.

 ### विस्तृत चाचणी
 प्रत्येक ड्रायव्हरसाठी 60+ चाचण्यांसह सर्व ड्रायव्हर्सची समान वर्तनासाठी चाचणी केली जाते.
 आम्ही सर्व ड्रायव्हर्सची प्रत्येक संयोजनासह चाचणी करतो:
 * एनक्रिप्शन: सक्षम आणि अक्षम दोन्ही
 * रेडिस कॅशे: सक्षम आणि अक्षम दोन्ही

 हा दृष्टीकोन आम्हाला मनःशांती देतो की तुम्ही कोणता ड्रायव्हर वापरत असलात तरीही mobiletto सारखेच वागेल,
 आणि तुम्ही कॅशिंग आणि/किंवा एन्क्रिप्शन सक्षम केले आहे की नाही याची पर्वा न करता.

 ### ड्रायव्हर सपोर्ट
 वर्तमान Mobiletto स्टोरेज ड्रायव्हर्स:
 * `s3` : Amazon S3
 * `b2` : बॅकब्लेज B2
 * `local` : स्थानिक फाइल सिस्टम

 *अधिक क्लाउड स्टोरेज प्रदात्यांना समर्थन देण्यासाठी योगदानांचे स्वागत आहे!*

 ## mobiletto-cli
 Mobiletto इतर JavaScript कोडद्वारे लायब्ररी म्हणून वापरण्याचा हेतू आहे.

 कमांड-लाइनवर mobiletto सह कार्य करण्यासाठी, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) वापरा

 ## स्त्रोत
 * [गिटहब वर मोबाईलेटो](https://github.com/cobbzilla/mobiletto)
 * [एनपीएम वर मोबाईलेटो](https://www.npmjs.com/package/mobiletto)

 ## समर्थन आणि निधी
 मी एक प्रोफेशनल ओपन सोर्स सॉफ्टवेअर डेव्हलपर बनण्याचा प्रयत्न करत आहे. मध्ये काम करत आहे
 अनेक वर्षांपासून सॉफ्टवेअर उद्योगात, मी यशस्वी कंपन्या सुरू केल्या आहेत आणि त्या सार्वजनिक कंपन्यांना विकल्या आहेत.
 अलीकडे मी माझी नोकरी गमावली, आणि माझ्याकडे खरोखर दुसरे कोणतेही काम नाही

 म्हणून मी उपयुक्त सॉफ्टवेअर लिहिण्याचा प्रयत्न करणार आहे आणि ते कार्य करते का ते पाहणार आहे

 जर तुम्हाला हे सॉफ्टवेअर वापरून आनंद वाटत असेल तर मी अगदी आभारी आहे
 सर्वात लहान [पॅट्रिऑनद्वारे मासिक योगदान](https://www.patreon.com/cobbzilla)

 *धन्यवाद!*

 ## स्थापना
 `npm` किंवा `yarn` वापरून इंस्टॉल करा. तुम्हाला कदाचित `lite` आवृत्ती हवी आहे ज्यामध्ये सर्व समाविष्ट नाही
 अनुवादित README फाइल्स:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 तुम्हाला खरोखरच README फाइल्स प्रत्येक भाषेत हव्या असल्यास, पूर्ण आवृत्ती स्थापित करा:

    npm install mobiletto
    yarn add mobiletto

 ## द्रुत सुरुवात
 mobiletto `s3` ड्रायव्हर वापरून एक लहान उदाहरण.

 ड्रायव्हर `b2` किंवा `local` असल्यास हा कोड सारखाच चालेल.

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
 ## मूलभूत वापर
 एक अधिक विस्तृत उदाहरण, ऑफर केलेली बहुतेक वैशिष्ट्ये दर्शविते:

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
 `metadata` कमांड एका फाइलसिस्टम एंट्रीबद्दल मेटाडेटा परत करते.
 त्याचप्रमाणे, `list` कमांडमधील रिटर्न व्हॅल्यू हे मेटाडेटा ऑब्जेक्ट्सचे अॅरे आहे.

 मेटाडेटा ऑब्जेक्ट असे दिसते:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` गुणधर्म `file` , `dir` , `link` किंवा `special` असू शकतात.

 ड्रायव्हरच्या प्रकारावर अवलंबून, `list` कमांड सर्व फील्ड परत करू शकत नाही. `name` आणि `type` गुणधर्म
 नेहमी उपस्थित रहावे. त्यानंतरची `metadata` कमांड सर्व उपलब्ध गुणधर्म परत करेल.

 ## पर्यायी आयात शैली
 पूर्ण-स्कोप केलेले मॉड्यूल आयात करा आणि `connect` फंक्शन वापरा:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## कॅशिंग
 Mobiletto <a href="https://redis.io">रेडिस</a> कॅशेसह उत्कृष्ट कार्य करते.

 Mobiletto 127.0.0.1:6379 वर रेडिस इन्स्टन्सशी कनेक्ट करण्याचा प्रयत्न करेल

 आपण यापैकी एक ओव्हरराइड करू शकता:
 * `MOBILETTO_REDIS_HOST` env var सेट करा, mobiletto येथे लोकलहोस्ट ऐवजी कनेक्ट करा
 * `MOBILETTO_REDIS_PORT` env var सेट करा, हा पोर्ट वापरला जाईल

 Mobiletto त्याच्या सर्व redis कळा `_mobiletto__` . तुम्ही हे बदलू शकता
 `MOBILETTO_REDIS_PREFIX` env var सेट करून.

 तुम्ही `opts.redisConfig` ऑब्जेक्टसह प्रति-कनेक्शन कॅशिंग देखील सेट करू शकता:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### रेडिस कॅशिंग नको आहे?
 अक्षम करण्यासाठी: तुम्ही तुमचे कनेक्शन स्थापित करता तेव्हा तुमच्या `opts.redisConfig` ऑब्जेक्टमध्ये `enabled: false` false` पास करा.

 खाली चर्चा केल्याप्रमाणे, कॅशिंग अक्षम केल्याने कार्यक्षमतेवर प्रतिकूल परिणाम होईल आणि अधिक विनंत्या येतील
 स्टोरेजसाठी जे तुम्हाला खरोखर आवश्यक आहे.

 ### कॅशिंग मार्गदर्शन
 **एनक्रिप्टेड स्टोरेज**: एनक्रिप्टेड स्टोरेज वाचणे/लिहणे सामान्यपेक्षा थोडे कमी आहे,
 परंतु डिरेक्टरीभोवती नेव्हिगेट करणे (ज्या काही गोष्टी करतात) बर्‍यापैकी महाग आहे. रेडिस कॅशे वापरणे
 तुम्हाला लक्षणीय कामगिरी वाढेल.

 डीफॉल्ट कॅशे सुरक्षित आहे, परंतु तुमच्याकडे भरपूर लेखन/काढण्याची क्रिया असल्यास ती चांगली कामगिरी करत नाही.
 कोणतेही लेखन किंवा काढणे ऑपरेशन संपूर्ण कॅशे अवैध करते, त्यानंतरचे वाचन पाहतील याची खात्री करून
 नवीनतम बदल.

 ### CLI टूल्स
 तुम्ही [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) सारखे CLI टूल वापरत असल्यास,
 तुम्‍हाला निश्चितपणे redis कॅशे सक्षम करण्‍याची इच्छा असेल, कारण ती `mo` कमांडच्‍या आवाहनांमध्‍ये टिकते.

 ## मिररिंग

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` कमांड सर्व फायलींची एका मोबाइलवरून दुसऱ्या मोबाइलवर एक-वेळची प्रत करते.
 कालांतराने आरसा राखण्यासाठी कोणतीही प्रक्रिया चालवत नाही. पुन्हा `mirror` कमांड चालवा
 कोणत्याही गहाळ फायली समक्रमित करण्यासाठी.

 `mirror` मधील रिटर्न व्हॅल्यू हे एक साधे ऑब्जेक्ट आहे ज्यामध्ये किती फायली यशस्वीरीत्या आल्या याचे काउंटर आहेत
 मिरर केलेले आणि किती फाइल्समध्ये त्रुटी होत्या:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 चेतावणी: मोठ्या डेटा सेटचे मिररिंग खूप वेळ घेणारे आणि बँडविड्थ-केंद्रित असू शकते

 `mirror` कॉल सिमेंटिक्ससह कोण आहे हे समजणे कधीकधी गोंधळात टाकणारे असू शकते
 वाचक आणि लेखक कोण आहे. एखाद्या असाइनमेंट स्टेटमेंटप्रमाणे त्याची कल्पना करा: "डाव्या हाताने मोबाईलटो"
 (मिरर केलेला डेटा लिहिलेला) आणि "उजव्या हाताने मोबाईलटो" (द
 `mirror` पद्धतीचा युक्तिवाद) हे नियुक्त केलेले मूल्य आहे (मिरर केलेला डेटा वाचला जातो).

 ## पारदर्शक एनक्रिप्शन
 पारदर्शक क्लायंट-साइड एन्क्रिप्शन सक्षम करा:

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

 काय चालु आहे? एक वेगळी "डिरेक्टरी एंट्री" (डायरेंट) डिरेक्टरी (एनक्रिप्टेड) त्यात कोणत्या फाइल्स आहेत याचा मागोवा घेते.
 निर्देशिका (उर्फ डायरेंट निर्देशिका).
 * `list` कमांड डिरेक्टरी एंट्री फाइल्स वाचते, सूचीबद्ध केलेला प्रत्येक मार्ग डिक्रिप्ट करते; नंतर प्रत्येक फाइलसाठी मेटाडेटा परत करतो
 * `list` कमांड अधिक अकार्यक्षम आहेत, विशेषत: मोठ्या संख्येने फाइल्स असलेल्या डिरेक्टरीसाठी
 * `write` कमांड प्रत्येक पालकाच्या डायरेंट डिरेक्टरीमध्ये डायरेंट फाइल्स लिहिते, वारंवार; नंतर फाईल लिहितो
 * `write` कमांड्स O(N) राइट्स घेतील, N = डिरेक्टरी पदानुक्रमात खोली
 * `remove` कमांड संबंधित डायरेंट फाईल काढून टाकते आणि रिकामी असल्यास त्याचे पालक, आवर्तीपणे; नंतर फाइल काढून टाकते
 * नॉन-रिकर्सिव्ह `remove` O(N) रीड्स आणि संभाव्यत: अनेक डिलीट होतील, निर्देशिकेच्या पदानुक्रमातील N = खोलीसह
 * मोठ्या आणि खोल फाइलसिस्टमवर `remove` आदेश महाग असू शकतात

 लक्षात घ्या की क्लायंट-साइड एन्क्रिप्शन सक्षम असतानाही, तुमच्या एनक्रिप्टेड सर्व्हर-साइडमध्ये पूर्ण दृश्यमानता असलेला एक विरोधक
 स्टोरेज, की शिवाय, तरीही डिरेक्टरींची एकूण संख्या आणि प्रत्येकामध्ये किती फाईल्स आहेत आणि त्यासह पाहू शकतात
 काही प्रयत्न, निर्देशिका पदानुक्रमाची काही किंवा सर्व एकूण रचना शोधा.
 *टीप: चांगल्या सुरक्षिततेसाठी तुलनेने सपाट रचना वापरा.*
 प्रतिस्पर्ध्याला तुमची एन्क्रिप्शन माहीत असल्याशिवाय डिरेक्टरी/फाईल्सची नावे माहीत नसतील.
 की किंवा अन्यथा एनक्रिप्शन यशस्वीरित्या क्रॅक केले. मग सर्व बेट बंद आहेत!

 ### कार्यप्रदर्शन आणि कॅशिंग
 एनक्रिप्टेड स्टोरेजवरील ऑपरेशन्स मंद असू शकतात. आवर्ती सूची आणि काढणे खूप मंद असू शकते.
 redis द्वारे कॅश करणे खूप मदत करते, परंतु लक्षात ठेवा की कोणत्याही लेखन किंवा काढून टाकल्यावर कॅशे फ्लश केला जातो.

 ## की रोटेशन
 तुमच्‍या नवीन कीसह मोबाईलटो तयार करा, नंतर त्यात जुना डेटा मिरर करा:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ड्रायव्हर इंटरफेस
 ड्राइव्हर ही कोणतीही JS फाइल आहे जी या स्वाक्षरीसह 'storageClient' फंक्शन निर्यात करते:

    function storageClient (key, secret, opts)

 * `key` : एक स्ट्रिंग, तुमची API की ( `local` ड्रायव्हरसाठी ही बेस निर्देशिका आहे)
 * `secret` : एक स्ट्रिंग, तुमचे API गुप्त ( `local` ड्रायव्हरसाठी वगळले जाऊ शकते)
 * `opts` : एक ऑब्जेक्ट, गुणधर्म प्रति-ड्राइव्हर आहेत:
 * `local` साठी, `fileMode` आणि `dirMode` गुणधर्म नवीन फायली आणि निर्देशिका कशा तयार केल्या जातात हे निर्धारित करतात
 * `s3` साठी, `bucket` गुणधर्म आवश्यक आहे. पर्यायी गुणधर्म आहेत:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 स्टोरेजक्लायंट फंक्शन रिटर्न देत असलेल्या ऑब्जेक्टने ही फंक्शन्स परिभाषित केली पाहिजेत:

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
 Mobiletto [winston](https://www.npmjs.com/package/winston) लॉगिंग लायब्ररी वापरते.

 लॉगमध्ये **फाइल पथ आणि एरर मेसेज असतील**, परंतु **कधीच** की, गुपिते,
 किंवा इतर कोणतीही कनेक्शन कॉन्फिगरेशन माहिती.

 ### लॉग पातळी
 लॉग स्तर सेट करण्यासाठी `MOBILETTO_LOG_LEVEL` पर्यावरण व्हेरिएबल वापरा, एक वापरून
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) मध्ये परिभाषित `npm` स्तरांपैकी

 डीफॉल्ट स्तर `error` आहे. सर्वात शब्दशः पातळी `silly` आहे, जरी सध्या मोबाईलटो
 `debug` खालील स्तरांवर लॉग करत नाही

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### लॉग फाइल
 डीफॉल्टनुसार, लॉगर कन्सोलवर लिहितो. फाइलवर लॉग पाठवण्यासाठी, `MOBILETTO_LOG_FILE` सेट करा
 पर्यावरण परिवर्तनीय. फाइलवर लॉगिंग करताना, कन्सोलवर लॉग लिहीले जाणार नाहीत.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 लॉगिंग बंद करण्यासाठी:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
