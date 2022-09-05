ಮೊಬೈಲ್ಟೊ
 =========

 Mobiletto ಐಚ್ಛಿಕ ಪಾರದರ್ಶಕ ಕ್ಲೈಂಟ್-ಸೈಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್‌ನೊಂದಿಗೆ JavaScript ಶೇಖರಣಾ ಅಮೂರ್ತ ಪದರವಾಗಿದೆ.

 # ವಿಷಯಗಳು
 * [ಯಾಕೆ ಮೊಬೈಲ್ಟೊ?](#ಏಕೆ-ಮೊಬಿಲೆಟ್ಟೊ?)
 * [ತ್ವರಿತ ಆರಂಭ](#ತ್ವರಿತ-ಪ್ರಾರಂಭ)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ಮೂಲ](#ಮೂಲ)
 * [ಸ್ಥಾಪನೆ](#ಸ್ಥಾಪನೆ)
 * [ಬೆಂಬಲ ಮತ್ತು ನಿಧಿ](#ಬೆಂಬಲ-ಮತ್ತು-ನಿಧಿ)
 * [ಮೂಲ ಬಳಕೆ](#ಮೂಲ-ಬಳಕೆ)
 * [ಮೆಟಾಡೇಟಾ](#ಮೆಟಾಡೇಟಾ)
 * [ಪರ್ಯಾಯ ಆಮದು ಶೈಲಿ](#ಪರ್ಯಾಯ-ಆಮದು ಶೈಲಿ)
 * [ಕ್ಯಾಶಿಂಗ್](#ಕ್ಯಾಶಿಂಗ್)
 * [ಮಿರರಿಂಗ್](#ಮಿರರಿಂಗ್)
 * [ಪಾರದರ್ಶಕ ಎನ್‌ಕ್ರಿಪ್ಶನ್](#ಪಾರದರ್ಶಕ-ಎನ್‌ಕ್ರಿಪ್ಶನ್)
 * [ಕೀ ತಿರುಗುವಿಕೆ](#ಕೀ-ತಿರುಗುವಿಕೆ)
 * [ಚಾಲಕ ಇಂಟರ್ಫೇಸ್](#ಡ್ರೈವರ್-ಇಂಟರ್ಫೇಸ್)
 * [ಲಾಗಿಂಗ್](#ಲಾಗಿಂಗ್)

 # ಇದನ್ನು ಬೇರೆ ಭಾಷೆಯಲ್ಲಿ ಓದಿ
 ಈ README.md ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು [hokeylization](https://github.com/cobbzilla/hokeylization) ಮೂಲಕ ಅನುವಾದಿಸಲಾಗಿದೆ
 **[Google ಅನುವಾದದಿಂದ ಬೆಂಬಲಿತವಾದ ಪ್ರತಿಯೊಂದು ಭಾಷೆ](https://cloud.google.com/translate/docs/languages)!**

 ಇದು ಪರಿಪೂರ್ಣವಲ್ಲ ಎಂದು ನನಗೆ ಖಾತ್ರಿಯಿದೆ, ಆದರೆ ಇದು ಯಾವುದಕ್ಕಿಂತ ಉತ್ತಮವಾಗಿದೆ ಎಂದು ನಾನು ಭಾವಿಸುತ್ತೇನೆ!

 [🇸🇦 ಅರೇಬಿಕ್](../ar/README.md)
 [🇧🇩 ಬೆಂಗಾಲಿ](../bn/README.md)
 [🇩🇪 ಜರ್ಮನ್](../de/README.md)
 [🇺🇸 ಇಂಗ್ಲೀಷ್](../en/README.md)
 [🇪🇸 ಸ್ಪ್ಯಾನಿಷ್](../es/README.md)
 [🇫🇷 ಫ್ರೆಂಚ್](../fr/README.md)
 [🇹🇩 ಹೌಸಾ](../ha/README.md)
 [🇮🇳 ಹಿಂದಿ](../hi/README.md)
 [🇮🇩 ಇಂಡೋನೇಷಿಯನ್](../id/README.md)
 [🇮🇹 ಇಟಾಲಿಯನ್](../it/README.md)
 [🇯🇵 ಜಪಾನೀಸ್](../ja/README.md)
 [🇰🇷 ಕೊರಿಯನ್](../ko/README.md)
 [🇮🇳 ಮರಾಂತಿ](../mr/README.md)
 [🇵🇱 ಪೋಲಿಷ್](../pl/README.md)
 [🇧🇷 ಪೋರ್ಚುಗೀಸ್](../pt/README.md)
 [🇷🇺 ರಷ್ಯನ್](../ru/README.md)
 [🇰🇪 ಸ್ವಹಿಲಿ](../sw/README.md)
 [🇵🇭 ಟ್ಯಾಗಲೋಗ್](../tl/README.md)
 [🇹🇷 ಟರ್ಕಿಶ್](../tr/README.md)
 [🇵🇰 ಉರ್ದು](../ur/README.md)
 [🇻🇳 ವಿಯೆಟ್ನಾಮೀಸ್](../vi/README.md)
 [🇨🇳 ಚೈನೀಸ್](../zh/README.md)


 **[📚 ... ಎಲ್ಲಾ ಭಾಷೆಗಳು ...](../README.md)**
 ----

 ### README ನ ಈ ಅನುವಾದದಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆಯೇ?
 ಮೂಲ [README]ನ ಈ ನಿರ್ದಿಷ್ಟ ಅನುವಾದ (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 ದೋಷಪೂರಿತವಾಗಿರಬಹುದು -- *ತಿದ್ದುಪಡಿಗಳು ಬಹಳ ಸ್ವಾಗತಾರ್ಹ!* ದಯವಿಟ್ಟು [GitHub ನಲ್ಲಿ ಪುಲ್ ವಿನಂತಿಯನ್ನು](https://github.com/cobbzilla/mobiletto/pulls) ಕಳುಹಿಸಿ,
 ಅಥವಾ ನೀವು ಅದನ್ನು ಮಾಡಲು ಅನುಕೂಲಕರವಾಗಿಲ್ಲದಿದ್ದರೆ, [ಸಮಸ್ಯೆ ತೆರೆಯಿರಿ](https://github.com/cobbzilla/mobiletto/issues)

 ಅನುವಾದದ ಕುರಿತು ನೀವು ಹೊಸ GitHub ಸಮಸ್ಯೆಯನ್ನು ರಚಿಸಿದಾಗ, ದಯವಿಟ್ಟು ಹೀಗೆ ಮಾಡಿ:
 * ಪುಟದ URL ಅನ್ನು ಸೇರಿಸಿ (ಬ್ರೌಸರ್ ವಿಳಾಸ ಪಟ್ಟಿಯಿಂದ ನಕಲಿಸಿ/ಅಂಟಿಸಿ)
 * ತಪ್ಪಾಗಿರುವ ನಿಖರವಾದ ಪಠ್ಯವನ್ನು ಸೇರಿಸಿ (ಬ್ರೌಸರ್‌ನಿಂದ ನಕಲಿಸಿ/ಅಂಟಿಸಿ)
 * ದಯವಿಟ್ಟು ಏನು ತಪ್ಪಾಗಿದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ -- ಅನುವಾದವು ತಪ್ಪಾಗಿದೆಯೇ? ಫಾರ್ಮ್ಯಾಟಿಂಗ್ ಹೇಗಾದರೂ ಮುರಿದುಹೋಗಿದೆಯೇ?
 * ದಯೆಯಿಂದ ಉತ್ತಮ ಅನುವಾದದ ಸಲಹೆಯನ್ನು ನೀಡಿ, ಅಥವಾ ಪಠ್ಯವನ್ನು ಹೇಗೆ ಸರಿಯಾಗಿ ಫಾರ್ಮ್ಯಾಟ್ ಮಾಡಬೇಕು
 * **ಧನ್ಯವಾದಗಳು!**

 ## ಮೊಬೈಲ್ಟೋ ಏಕೆ?

 ### ವಿದಾಯ ಮಾರಾಟಗಾರರ ಲಾಕ್-ಇನ್!
 ವಿವಿಧ ಕ್ಲೌಡ್ ಸ್ಟೋರೇಜ್ ಪೂರೈಕೆದಾರರು ಹೊಂದಾಣಿಕೆಯಾಗದ API ಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ. "S3 ಹೊಂದಾಣಿಕೆ" ಗಾಗಿ ಶ್ರಮಿಸುವವರು ಸಹ
 ವಿಲಕ್ಷಣ ವರ್ತನೆಗಳನ್ನು ಹೊಂದಿರುತ್ತಾರೆ.

 ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗಾಗಿ ನೀವು ನಿರ್ದಿಷ್ಟ ಶೇಖರಣಾ ಮಾರಾಟಗಾರರನ್ನು ಆರಿಸಿದಾಗ, ನೀವು ನೇರವಾಗಿ ಅವರ API, ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಕೋಡ್ ಮಾಡಿದರೆ
 ಈಗ ಆ ಸೇವೆಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ಸಮಯ ಕಳೆದಂತೆ ಮತ್ತು ಕೋಡ್ ಸಂಗ್ರಹಗೊಳ್ಳುತ್ತಿದ್ದಂತೆ, ಮಾರಾಟಗಾರರು ಬದಲಾಗುತ್ತಾರೆ
 ಹೆಚ್ಚೆಚ್ಚು ಅಸಮರ್ಥನೀಯ. ಮಾರಾಟಗಾರರ ಲಾಕ್-ಇನ್ನ ಮೋಜಿನ ಜಗತ್ತಿಗೆ ಸುಸ್ವಾಗತ!

 ಈ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು Mobiletto ಅನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು mobiletto ನ API ಗೆ ಕೋಡಿಂಗ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ಸುಲಭವಾಗಿ ಮಾಡಬಹುದು
 ಶೇಖರಣಾ ಪೂರೈಕೆದಾರರನ್ನು ಬದಲಾಯಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ನ ಶೇಖರಣಾ ಪದರವು ಒಂದೇ ರೀತಿಯಲ್ಲಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ.

 ### ವ್ಯಾಪಕ ಪರೀಕ್ಷೆ
 ಪ್ರತಿ ಚಾಲಕನಿಗೆ 60+ ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಒಂದೇ ರೀತಿಯ ನಡವಳಿಕೆಗಾಗಿ ಎಲ್ಲಾ ಚಾಲಕರನ್ನು ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ.
 ನಾವು ಎಲ್ಲಾ ಡ್ರೈವರ್‌ಗಳನ್ನು ಪ್ರತಿಯೊಂದು ಸಂಯೋಜನೆಯೊಂದಿಗೆ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ:
 * ಎನ್‌ಕ್ರಿಪ್ಶನ್: ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ
 * ರೆಡಿಸ್ ಸಂಗ್ರಹ: ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ

 ಈ ವಿಧಾನವು ನಮಗೆ ಮನಸ್ಸಿನ ಶಾಂತಿಯನ್ನು ನೀಡುತ್ತದೆ, ನೀವು ಯಾವ ಚಾಲಕವನ್ನು ಬಳಸಿದರೂ ಮೊಬೈಲ್ಟೋ ಅದೇ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ,
 ಮತ್ತು ನೀವು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವಿಕೆ ಮತ್ತು/ಅಥವಾ ಗೂಢಲಿಪೀಕರಣವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತೀರಾ ಎಂಬುದರ ಹೊರತಾಗಿಯೂ.

 ### ಚಾಲಕ ಬೆಂಬಲ
 ಪ್ರಸ್ತುತ Mobiletto ಶೇಖರಣಾ ಚಾಲಕರು:
 * `s3` : Amazon S3
 * `b2` : ಬ್ಯಾಕ್‌ಬ್ಲೇಜ್ B2
 * `local` : ಸ್ಥಳೀಯ ಕಡತ ವ್ಯವಸ್ಥೆ

 *ಹೆಚ್ಚಿನ ಕ್ಲೌಡ್ ಸ್ಟೋರೇಜ್ ಪೂರೈಕೆದಾರರನ್ನು ಬೆಂಬಲಿಸಲು ಕೊಡುಗೆಗಳು ತುಂಬಾ ಸ್ವಾಗತಾರ್ಹ!*

 ## mobiletto-cli
 Mobiletto ಅನ್ನು ಇತರ JavaScript ಕೋಡ್‌ನಿಂದ ಲೈಬ್ರರಿಯಾಗಿ ಬಳಸಲು ಉದ್ದೇಶಿಸಲಾಗಿದೆ.

 ಕಮಾಂಡ್-ಲೈನ್‌ನಲ್ಲಿ mobiletto ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ಬಳಸಿ

 ## ಮೂಲ
 * [GitHub ನಲ್ಲಿ ಮೊಬಿಲೆಟ್ಟೊ](https://github.com/cobbzilla/mobiletto)
 * [npm ನಲ್ಲಿ ಮೊಬೈಲ್](https://www.npmjs.com/package/mobiletto)

 ## ಬೆಂಬಲ ಮತ್ತು ಧನಸಹಾಯ
 ನಾನು ವೃತ್ತಿಪರ ಓಪನ್ ಸೋರ್ಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಡೆವಲಪರ್ ಆಗಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ. ನಾನು ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ
 ಹಲವು ವರ್ಷಗಳಿಂದ ಸಾಫ್ಟ್‌ವೇರ್ ಉದ್ಯಮದಲ್ಲಿ, ನಾನು ಯಶಸ್ವಿ ಕಂಪನಿಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದೇನೆ ಮತ್ತು ಅವುಗಳನ್ನು ಸಾರ್ವಜನಿಕ ಕಂಪನಿಗಳಿಗೆ ಮಾರಾಟ ಮಾಡಿದ್ದೇನೆ.
 ಇತ್ತೀಚಿಗೆ ನಾನು ನನ್ನ ಕೆಲಸವನ್ನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ನನಗೆ ಬೇರೆ ಯಾವುದೇ ಕೆಲಸವಿಲ್ಲ

 ಹಾಗಾಗಿ ನಾನು ಸಹಾಯಕವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಬರೆಯಲು ಪ್ರಯತ್ನಿಸುತ್ತೇನೆ ಮತ್ತು ಅದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆಯೇ ಎಂದು ನೋಡುತ್ತೇನೆ

 ನೀವು ಈ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಬಳಸುವುದನ್ನು ಆನಂದಿಸಿದರೆ, ನಾನು ಅದಕ್ಕೆ ತುಂಬಾ ಕೃತಜ್ಞನಾಗಿದ್ದೇನೆ
 ಚಿಕ್ಕದಾದ [Patreon ಮೂಲಕ ಮಾಸಿಕ ಕೊಡುಗೆ](https://www.patreon.com/cobbzilla)

 *ಧನ್ಯವಾದಗಳು!*

 ## ಅನುಸ್ಥಾಪನ
 `npm` ಅಥವಾ `yarn` ಬಳಸಿ ಸ್ಥಾಪಿಸಿ. ನೀವು ಬಹುಶಃ ಎಲ್ಲವನ್ನು ಒಳಗೊಂಡಿರದ `lite` ಆವೃತ್ತಿಯನ್ನು ಬಯಸುತ್ತೀರಿ
 ಅನುವಾದಿಸಿದ README ಫೈಲ್‌ಗಳು:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 ನೀವು ನಿಜವಾಗಿಯೂ ಪ್ರತಿ ಭಾಷೆಯಲ್ಲಿ README ಫೈಲ್‌ಗಳನ್ನು ಬಯಸಿದರೆ, ಪೂರ್ಣ ಆವೃತ್ತಿಯನ್ನು ಸ್ಥಾಪಿಸಿ:

    npm install mobiletto
    yarn add mobiletto

 ## ತ್ವರಿತ ಪ್ರಾರಂಭ
 Mobiletto `s3` ಡ್ರೈವರ್ ಅನ್ನು ಬಳಸುವ ಒಂದು ಚಿಕ್ಕ ಉದಾಹರಣೆ.

 ಚಾಲಕವು `b2` ಅಥವಾ `local` ಆಗಿದ್ದರೆ ಈ ಕೋಡ್ ಒಂದೇ ರೀತಿ ರನ್ ಆಗುತ್ತದೆ.

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
 ## ಮೂಲ ಬಳಕೆ
 ಹೆಚ್ಚು ವಿಸ್ತಾರವಾದ ಉದಾಹರಣೆ, ನೀಡಲಾದ ಹೆಚ್ಚಿನ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ತೋರಿಸುತ್ತದೆ:

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

 ## ಮೆಟಾಡೇಟಾ
 `metadata` ಆಜ್ಞೆಯು ಒಂದೇ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಪ್ರವೇಶದ ಬಗ್ಗೆ ಮೆಟಾಡೇಟಾವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.
 ಅಂತೆಯೇ, `list` ಆಜ್ಞೆಯಿಂದ ಹಿಂತಿರುಗಿಸುವ ಮೌಲ್ಯವು ಮೆಟಾಡೇಟಾ ವಸ್ತುಗಳ ಒಂದು ಶ್ರೇಣಿಯಾಗಿದೆ.

 ಮೆಟಾಡೇಟಾ ವಸ್ತುವು ಈ ರೀತಿ ಕಾಣುತ್ತದೆ:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` ಟೈಪ್` ಪ್ರಾಪರ್ಟಿ `file` , `dir` , `link` ಅಥವಾ `special` .

 ಚಾಲಕದ ಪ್ರಕಾರವನ್ನು ಅವಲಂಬಿಸಿ, `list` ಆಜ್ಞೆಯು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ. `name` ಮತ್ತು `type` ಪ್ರಕಾರ` ಗುಣಲಕ್ಷಣಗಳು
 ಯಾವಾಗಲೂ ಹಾಜರಿರಬೇಕು. ನಂತರದ `metadata` ಆದೇಶವು ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

 ## ಪರ್ಯಾಯ ಆಮದು ಶೈಲಿ
 ಸಂಪೂರ್ಣ-ವ್ಯಾಪ್ತಿಯ ಮಾಡ್ಯೂಲ್ ಅನ್ನು ಆಮದು ಮಾಡಿ ಮತ್ತು `connect` ಕಾರ್ಯವನ್ನು ಬಳಸಿ:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವಿಕೆ
 <a href="https://redis.io">Mobiletto</a> ರೆಡಿಸ್ ಸಂಗ್ರಹದೊಂದಿಗೆ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

 Mobiletto 127.0.0.1:6379 ನಲ್ಲಿ ರೆಡಿಸ್ ನಿದರ್ಶನಕ್ಕೆ ಸಂಪರ್ಕಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ

 ನೀವು ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ಅತಿಕ್ರಮಿಸಬಹುದು:
 * ಲೋಕಲ್ ಹೋಸ್ಟ್ ಬದಲಿಗೆ ಇಲ್ಲಿ `MOBILETTO_REDIS_HOST` env var, mobiletto ಸಂಪರ್ಕಿಸಲು ಹೊಂದಿಸಿ
 * `MOBILETTO_REDIS_PORT` env var ಅನ್ನು ಹೊಂದಿಸಿ, ಈ ಪೋರ್ಟ್ ಅನ್ನು ಬಳಸಲಾಗುತ್ತದೆ

 Mobiletto ಅದರ ಎಲ್ಲಾ ರೆಡಿಸ್ ಕೀಗಳನ್ನು `_mobiletto__` ಪೂರ್ವಪ್ರತ್ಯಯದೊಂದಿಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ. ನೀವು ಇದನ್ನು ಬದಲಾಯಿಸಬಹುದು
 `MOBILETTO_REDIS_PREFIX` env var ಅನ್ನು ಹೊಂದಿಸುವ ಮೂಲಕ.

 ನೀವು `opts.redisConfig` ವಸ್ತುವಿನೊಂದಿಗೆ ಪ್ರತಿ-ಸಂಪರ್ಕ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಸಹ ಹೊಂದಿಸಬಹುದು:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### ರೆಡಿಸ್ ಕ್ಯಾಶಿಂಗ್ ಬೇಡವೇ?
 ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು: ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಸ್ಥಾಪಿಸಿದಾಗ ನಿಮ್ಮ `opts.redisConfig` ವಸ್ತುವಿನಲ್ಲಿ `enabled: false` ಅನ್ನು ಪಾಸ್ ಮಾಡಿ.

 ಕೆಳಗೆ ಚರ್ಚಿಸಿದಂತೆ, ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವಿಕೆಯನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವುದರಿಂದ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲೆ ಪ್ರತಿಕೂಲ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚಿನ ವಿನಂತಿಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ
 ನೀವು ನಿಜವಾಗಿಯೂ ಅಗತ್ಯವಿರುವ ಸಂಗ್ರಹಣೆಗೆ.

 ### ಕ್ಯಾಶಿಂಗ್ ಮಾರ್ಗದರ್ಶನ
 **ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಸಂಗ್ರಹಣೆ**: ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಸಂಗ್ರಹಣೆಯನ್ನು ಓದುವುದು/ಬರೆಯುವುದು ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿರುತ್ತದೆ,
 ಆದರೆ ಡೈರೆಕ್ಟರಿಗಳ ಸುತ್ತಲೂ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು (ಕೆಲವು ವಿಷಯಗಳು) ಸಾಕಷ್ಟು ದುಬಾರಿಯಾಗಿದೆ. ರೆಡಿಸ್ ಸಂಗ್ರಹವನ್ನು ಬಳಸುವುದು
 ನಿಮಗೆ ಗಮನಾರ್ಹ ಕಾರ್ಯಕ್ಷಮತೆಯ ಉತ್ತೇಜನವನ್ನು ನೀಡುತ್ತದೆ.

 ಡೀಫಾಲ್ಟ್ ಸಂಗ್ರಹ ಸುರಕ್ಷಿತವಾಗಿದೆ, ಆದರೆ ನೀವು ಸಾಕಷ್ಟು ಬರೆಯುವ/ತೆಗೆದುಹಾಕುವ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಹೊಂದಿದ್ದರೆ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ.
 ಯಾವುದೇ ಬರೆಯುವ ಅಥವಾ ತೆಗೆದುಹಾಕುವ ಕಾರ್ಯಾಚರಣೆಯು ಸಂಪೂರ್ಣ ಸಂಗ್ರಹವನ್ನು ಅಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ನಂತರದ ಓದುವಿಕೆಗಳನ್ನು ನೋಡುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ
 ಇತ್ತೀಚಿನ ಬದಲಾವಣೆಗಳು.

 ### CLI ಪರಿಕರಗಳು
 ನೀವು [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) ನಂತಹ CLI ಉಪಕರಣವನ್ನು ಬಳಸುತ್ತಿದ್ದರೆ,
 ನೀವು ಖಂಡಿತವಾಗಿಯೂ ರೆಡಿಸ್ ಕ್ಯಾಶ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ಬಯಸುತ್ತೀರಿ, ಏಕೆಂದರೆ ಇದು `mo` ಆಜ್ಞೆಯ ಆಹ್ವಾನಗಳಾದ್ಯಂತ ಇರುತ್ತದೆ.

 ## ಪ್ರತಿಬಿಂಬಿಸುವುದು

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` ಆಜ್ಞೆಯು ಎಲ್ಲಾ ಫೈಲ್‌ಗಳ ಒಂದು-ಬಾರಿ ನಕಲನ್ನು ಒಂದು ಮೊಬೈಲ್‌ನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ನಿರ್ವಹಿಸುತ್ತದೆ.
 ಕಾಲಾನಂತರದಲ್ಲಿ ಕನ್ನಡಿಯನ್ನು ನಿರ್ವಹಿಸಲು ಇದು ಯಾವುದೇ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಡೆಸುವುದಿಲ್ಲ. `mirror` ಆಜ್ಞೆಯನ್ನು ಮತ್ತೊಮ್ಮೆ ರನ್ ಮಾಡಿ
 ಯಾವುದೇ ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡಲು.

 `mirror` ನಿಂದ ಹಿಂತಿರುಗಿಸುವ ಮೌಲ್ಯವು ಎಷ್ಟು ಫೈಲ್‌ಗಳು ಯಶಸ್ವಿಯಾಗಿವೆ ಎಂಬುದಕ್ಕೆ ಕೌಂಟರ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಸರಳ ವಸ್ತುವಾಗಿದೆ
 ಪ್ರತಿಬಿಂಬಿಸಲಾಗಿದೆ ಮತ್ತು ಎಷ್ಟು ಫೈಲ್‌ಗಳು ದೋಷಗಳನ್ನು ಹೊಂದಿವೆ:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 ಎಚ್ಚರಿಕೆ: ದೊಡ್ಡ ಡೇಟಾ ಸೆಟ್‌ಗಳನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವುದು ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಬ್ಯಾಂಡ್‌ವಿಡ್ತ್-ತೀವ್ರವಾಗಿರುತ್ತದೆ

 `mirror` ಕರೆ ಶಬ್ದಾರ್ಥದೊಂದಿಗೆ ಅದು ಯಾರೆಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಕೆಲವೊಮ್ಮೆ ಗೊಂದಲಕ್ಕೊಳಗಾಗಬಹುದು
 ಓದುಗ ಮತ್ತು ಬರಹಗಾರ ಯಾರು. ಇದನ್ನು ಅಸೈನ್‌ಮೆಂಟ್ ಹೇಳಿಕೆಯಂತೆ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ: "ಎಡಗೈ ಮೊಬೈಲ್ಟೋ"
 (ಬರೆಯಲಾದ ಪ್ರತಿಬಿಂಬಿತ ಡೇಟಾ), ಮತ್ತು "ಬಲಗೈ ಮೊಬೈಲ್ಟೋ" (ದ
 `mirror` ವಿಧಾನಕ್ಕೆ ವಾದ) ಮೌಲ್ಯವನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ (ಪ್ರತಿಬಿಂಬಿಸಿದ ಡೇಟಾವನ್ನು ಓದಲಾಗುತ್ತದೆ).

 ## ಪಾರದರ್ಶಕ ಎನ್‌ಕ್ರಿಪ್ಶನ್
 ಪಾರದರ್ಶಕ ಕ್ಲೈಂಟ್-ಸೈಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ:

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

 ಏನಾಗುತ್ತಿದೆ? ಪ್ರತ್ಯೇಕ "ಡೈರೆಕ್ಟರಿ ನಮೂದು" (ಡೈರೆಂಟ್) ಡೈರೆಕ್ಟರಿ (ಎನ್‌ಕ್ರಿಪ್ಟೆಡ್) ಅದರಲ್ಲಿ ಯಾವ ಫೈಲ್‌ಗಳಿವೆ ಎಂಬುದನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ
 ಡೈರೆಕ್ಟರಿ (ಅಕಾ ಡೈರೆಂಟ್ ಡೈರೆಕ್ಟರಿ).
 * `list` ಆಜ್ಞೆಯು ಡೈರೆಕ್ಟರಿ ಪ್ರವೇಶ ಫೈಲ್‌ಗಳನ್ನು ಓದುತ್ತದೆ, ಪಟ್ಟಿ ಮಾಡಲಾದ ಪ್ರತಿಯೊಂದು ಮಾರ್ಗವನ್ನು ಡೀಕ್ರಿಪ್ಟ್ ಮಾಡುತ್ತದೆ; ನಂತರ ಪ್ರತಿ ಫೈಲ್‌ಗೆ ಮೆಟಾಡೇಟಾವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ
 * `list` ಆಜ್ಞೆಗಳು ಹೆಚ್ಚು ಅಸಮರ್ಥವಾಗಿವೆ, ವಿಶೇಷವಾಗಿ ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆಯ ಫೈಲ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಡೈರೆಕ್ಟರಿಗಳಿಗೆ
 * `write` ಆಜ್ಞೆಯು ಪ್ರತಿ ಪೋಷಕರ ಡೈರೆಂಟ್ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಡೈರೆಂಟ್ ಫೈಲ್‌ಗಳನ್ನು ಪುನರಾವರ್ತಿತವಾಗಿ ಬರೆಯುತ್ತದೆ; ನಂತರ ಫೈಲ್ ಬರೆಯುತ್ತದೆ
 * ಡೈರೆಕ್ಟರಿ ಕ್ರಮಾನುಗತದಲ್ಲಿ N = ಆಳದೊಂದಿಗೆ, `write` ಆಜ್ಞೆಗಳು O(N) ಬರಹಗಳಿಗೆ ಒಳಪಡುತ್ತವೆ
 * `remove` ತೆಗೆದುಹಾಕು` ಆಜ್ಞೆಯು ಅನುಗುಣವಾದ ಡೈರೆಂಟ್ ಫೈಲ್ ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ ಮತ್ತು ಅದರ ಮೂಲವು ಖಾಲಿಯಾಗಿದ್ದರೆ, ಪುನರಾವರ್ತಿತವಾಗಿ; ನಂತರ ಫೈಲ್ ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ
 * ಪುನರಾವರ್ತಿತವಲ್ಲದ `remove` ಆಜ್ಞೆಗಳು ಡೈರೆಕ್ಟರಿ ಶ್ರೇಣಿಯಲ್ಲಿ N = ಆಳದೊಂದಿಗೆ O(N) ರೀಡ್‌ಗಳು ಮತ್ತು ಸಂಭಾವ್ಯವಾಗಿ ಅನೇಕ ಅಳಿಸುವಿಕೆಗಳಿಗೆ ಒಳಗಾಗುತ್ತವೆ
 * ದೊಡ್ಡ ಮತ್ತು ಆಳವಾದ ಫೈಲ್‌ಸಿಸ್ಟಮ್‌ಗಳಲ್ಲಿ ಪುನರಾವರ್ತಿತ `remove` ಆಜ್ಞೆಗಳು ದುಬಾರಿಯಾಗಬಹುದು

 ಕ್ಲೈಂಟ್-ಸೈಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿದ್ದರೂ ಸಹ, ನಿಮ್ಮ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಸರ್ವರ್-ಸೈಡ್‌ಗೆ ಸಂಪೂರ್ಣ ಗೋಚರತೆಯನ್ನು ಹೊಂದಿರುವ ವಿರೋಧಿ
 ಸಂಗ್ರಹಣೆ, ಕೀ ಇಲ್ಲದಿದ್ದರೂ ಸಹ, ಡೈರೆಕ್ಟರಿಗಳ ಒಟ್ಟು ಸಂಖ್ಯೆ ಮತ್ತು ಪ್ರತಿಯೊಂದರಲ್ಲಿ ಎಷ್ಟು ಫೈಲ್‌ಗಳಿವೆ ಮತ್ತು ಅದರೊಂದಿಗೆ ಇನ್ನೂ ನೋಡಬಹುದು
 ಕೆಲವು ಪ್ರಯತ್ನಗಳು, ಡೈರೆಕ್ಟರಿ ಶ್ರೇಣಿಯ ಒಟ್ಟಾರೆ ರಚನೆಯ ಕೆಲವು ಅಥವಾ ಎಲ್ಲವನ್ನೂ ಅನ್ವೇಷಿಸಿ.
 *ಗಮನಿಸಿ: ಉತ್ತಮ ಭದ್ರತೆಗಾಗಿ ತುಲನಾತ್ಮಕವಾಗಿ ಸಮತಟ್ಟಾದ ರಚನೆಯನ್ನು ಬಳಸಿ.*
 ಎದುರಾಳಿಯು ನಿಮ್ಮ ಗೂಢಲಿಪೀಕರಣವನ್ನು ತಿಳಿಯದ ಹೊರತು ಡೈರೆಕ್ಟರಿಗಳು/ಫೈಲ್‌ಗಳ ಹೆಸರುಗಳನ್ನು ತಿಳಿದಿರುವುದಿಲ್ಲ
 ಕೀ ಅಥವಾ ಇಲ್ಲದಿದ್ದರೆ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಭೇದಿಸಿದ್ದರೆ. ನಂತರ ಎಲ್ಲಾ ಪಂತಗಳು ಆಫ್ ಆಗಿವೆ!

 ### ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವಿಕೆ
 ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಸಂಗ್ರಹಣೆಯಲ್ಲಿನ ಕಾರ್ಯಾಚರಣೆಗಳು ನಿಧಾನವಾಗಬಹುದು. ಪುನರಾವರ್ತಿತ ಪಟ್ಟಿಗಳು ಮತ್ತು ತೆಗೆದುಹಾಕುವಿಕೆಗಳು ತುಂಬಾ ನಿಧಾನವಾಗಿರಬಹುದು.
 ರೆಡಿಸ್ ಮೂಲಕ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವುದು ಮಹತ್ತರವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಆದರೆ ಯಾವುದೇ ಬರಹಗಳು ಅಥವಾ ತೆಗೆದುಹಾಕುವಿಕೆಯ ಮೇಲೆ ಸಂಗ್ರಹವನ್ನು ಫ್ಲಶ್ ಮಾಡಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ.

 ## ಕೀ ತಿರುಗುವಿಕೆ
 ನಿಮ್ಮ ಹೊಸ ಕೀಲಿಯೊಂದಿಗೆ mobiletto ಅನ್ನು ರಚಿಸಿ, ನಂತರ ಹಳೆಯ ಡೇಟಾವನ್ನು ಪ್ರತಿಬಿಂಬಿಸಿ:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ಚಾಲಕ ಇಂಟರ್ಫೇಸ್
 ಚಾಲಕವು ಈ ಸಹಿಯೊಂದಿಗೆ 'storageClient' ಕಾರ್ಯವನ್ನು ರಫ್ತು ಮಾಡುವ ಯಾವುದೇ JS ಫೈಲ್ ಆಗಿದೆ:

    function storageClient (key, secret, opts)

 * `key` : ಒಂದು ಸ್ಟ್ರಿಂಗ್, ನಿಮ್ಮ API ಕೀ ( `local` ಡ್ರೈವರ್‌ಗಾಗಿ ಇದು ಮೂಲ ಡೈರೆಕ್ಟರಿಯಾಗಿದೆ)
 * `secret` : ಸ್ಟ್ರಿಂಗ್, ನಿಮ್ಮ API ರಹಸ್ಯ ( `local` ಡ್ರೈವರ್‌ಗಾಗಿ ಬಿಟ್ಟುಬಿಡಬಹುದು)
 * `opts` : ಒಂದು ವಸ್ತು, ಗುಣಲಕ್ಷಣಗಳು ಪ್ರತಿ ಚಾಲಕ:
 * `local` ಗಾಗಿ, `fileMode` ಮತ್ತು `dirMode` ಗುಣಲಕ್ಷಣಗಳು ಹೊಸ ರಚಿಸುವ ಫೈಲ್‌ಗಳು ಮತ್ತು ಡೈರೆಕ್ಟರಿಗಳನ್ನು ಹೇಗೆ ರಚಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ
 * `s3` ಗಾಗಿ, `bucket` ಆಸ್ತಿಯ ಅಗತ್ಯವಿದೆ. ಐಚ್ಛಿಕ ಗುಣಲಕ್ಷಣಗಳೆಂದರೆ:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ಶೇಖರಣಾ ಕ್ಲೈಂಟ್ ಫಂಕ್ಷನ್ ಹಿಂತಿರುಗಿಸುವ ವಸ್ತುವು ಈ ಕಾರ್ಯಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು:

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

 ## ಲಾಗಿಂಗ್
 Mobiletto [winston](https://www.npmjs.com/package/winston) ಲಾಗಿಂಗ್ ಲೈಬ್ರರಿಯನ್ನು ಬಳಸುತ್ತದೆ.

 ದಾಖಲೆಗಳು ** ಫೈಲ್ ಪಥಗಳು ಮತ್ತು ದೋಷ ಸಂದೇಶಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ, ಆದರೆ ** ಎಂದಿಗೂ ** ಕೀಗಳು, ರಹಸ್ಯಗಳನ್ನು ಒಳಗೊಂಡಿರುವುದಿಲ್ಲ,
 ಅಥವಾ ಯಾವುದೇ ಇತರ ಸಂಪರ್ಕ ಕಾನ್ಫಿಗರೇಶನ್ ಮಾಹಿತಿ.

 ### ಲಾಗ್ ಮಟ್ಟ
 ಲಾಗ್ ಮಟ್ಟವನ್ನು ಹೊಂದಿಸಲು `MOBILETTO_LOG_LEVEL` ಪರಿಸರ ವೇರಿಯೇಬಲ್ ಅನ್ನು ಬಳಸಿ, ಒಂದನ್ನು ಬಳಸಿ
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾದ `npm` ಮಟ್ಟಗಳು

 ಡೀಫಾಲ್ಟ್ ಮಟ್ಟವು `error` ಆಗಿದೆ. ಪ್ರಸ್ತುತ mobiletto ಆದರೂ ಅತ್ಯಂತ ಮಾತಿನ ಮಟ್ಟ `silly` ಆಗಿದೆ
 `debug` ಕೆಳಗಿನ ಹಂತಗಳಲ್ಲಿ ಲಾಗ್ ಆಗುವುದಿಲ್ಲ

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ಲಾಗ್ ಫೈಲ್
 ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ, ಲಾಗರ್ ಕನ್ಸೋಲ್‌ಗೆ ಬರೆಯುತ್ತದೆ. ಫೈಲ್‌ಗೆ ಲಾಗ್‌ಗಳನ್ನು ಕಳುಹಿಸಲು, `MOBILETTO_LOG_FILE` ಅನ್ನು ಹೊಂದಿಸಿ
 ಪರಿಸರ ವೇರಿಯಬಲ್. ಫೈಲ್‌ಗೆ ಲಾಗ್ ಮಾಡುವಾಗ, ಲಾಗ್‌ಗಳನ್ನು ಇನ್ನು ಮುಂದೆ ಕನ್ಸೋಲ್‌ಗೆ ಬರೆಯಲಾಗುವುದಿಲ್ಲ.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ಲಾಗಿಂಗ್ ಆಫ್ ಮಾಡಲು:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
