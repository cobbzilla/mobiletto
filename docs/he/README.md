Mobiletto
 =========

 Mobiletto היא שכבת הפשטה לאחסון JavaScript, עם הצפנה שקופה אופציונלית בצד הלקוח.

 # תוכן
 * [למה Mobiletto?](#Why-Mobiletto?)
 * [התחלה מהירה](#Quick-start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [מקור](#מקור)
 * [התקנה](#התקנה)
 * [תמיכה ומימון](#Support-and-Funding)
 * [שימוש בסיסי](#שימוש בסיסי)
 * [Metadata](#Metadata)
 * [סגנון ייבוא חלופי](#סגנון ייבוא חלופי)
 * [מטמון](#Caching)
 * [שיקוף](#שיקוף)
 * [הצפנה שקופה](#שקופה-הצפנה)
 * [סיבוב מפתח](#Key-rotation)
 * [ממשק מנהל התקן](#ממשק מנהל התקן)
 * [רישום](#לוגינג)

 # קרא את זה בשפה אחרת
 מסמך README.md זה תורגם, באמצעות [hokeylization](https://github.com/cobbzilla/hokeylization), ל-
 **[בכל שפה נתמכת על ידי Google Translate](https://cloud.google.com/translate/docs/languages)!**

 אני בטוח שזה לא מושלם, אבל אני מקווה שזה יותר טוב מכלום!

 [🇸🇦 ערבית](../ar/README.md)
 [🇧🇩 בנגלית](../bn/README.md)
 [🇩🇪 גרמנית](../de/README.md)
 [🇺🇸 אנגלית](../en/README.md)
 [🇪🇸 ספרדית](../es/README.md)
 [🇫🇷 צרפתית](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 הינדי](../hi/README.md)
 [🇮🇩 אינדונזית](../id/README.md)
 [🇮🇹 איטלקית](../it/README.md)
 [🇯🇵 יפנית](../ja/README.md)
 [🇰🇷 קוריאנית](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 פולנית](../pl/README.md)
 [🇧🇷 פורטוגזית](../pt/README.md)
 [🇷🇺 רוסית](../ru/README.md)
 [🇰🇪 סוואהילי](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 טורקית](../tr/README.md)
 [🇵🇰 אורדו](../ur/README.md)
 [🇻🇳 וייטנאמית](../vi/README.md)
 [🇨🇳 סינית](../zh/README.md)


 **[📚 ... כל השפות ...](../README.md)**
 ----

 ### האם יש בעיה עם התרגום הזה של README?
 התרגום הספציפי הזה של [README] המקורי (https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 עשוי להיות פגום -- *תיקונים יתקבלו בברכה!* אנא שלח [בקשת משיכה ב-GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 או אם אתה לא מרגיש בנוח לעשות את זה, [פתח בעיה](https://github.com/cobbzilla/mobiletto/issues)

 כאשר אתה יוצר בעיה חדשה של GitHub על תרגום, אנא עשה:
 * כלול את כתובת האתר של הדף (העתק/הדבק משורת הכתובת של הדפדפן)
 * כלול את הטקסט המדויק השגוי (העתק/הדבק מדפדפן)
 * נא לתאר מה לא בסדר -- האם התרגום שגוי? הפורמט שבור איכשהו?
 * אנא הציעו הצעה לתרגום טוב יותר, או כיצד יש לעצב את הטקסט כראוי
 * **תודה!**

 ## למה Mobiletto?

 ### להתראות נעילת ספק!
 לספקי אחסון הענן השונים יש ממשקי API לא תואמים. גם אלה השואפים ל"תאימות S3"
 בעלי התנהגויות ייחודיות.

 כאשר אתה בוחר ספק אחסון מסוים עבור האפליקציה שלך, אם אתה מקודד ישירות ל-API שלו, האפליקציה שלך
 כעת תלוי בשירות זה. ככל שהזמן עובר והקוד מצטבר, ספקים משתנים הופכים
 יותר ויותר בלתי נסבל. ברוכים הבאים לעולם המהנה של נעילת ספקים!

 Mobiletto תוכנן לפתור בעיה זו. על ידי קידוד האפליקציה שלך ל-API של mobiletto, אתה יכול בקלות
 להחליף ספקי אחסון ולדעת ששכבת האחסון של האפליקציה שלך תתנהג בצורה זהה.

 ### בדיקות מקיפות
 כל הנהגים נבדקים להתנהגות זהה עם 60+ בדיקות לכל נהג.
 אנו בודקים את כל הנהגים עם כל שילוב של:
 * הצפנה: מופעלת וגם מושבתת
 * מטמון Redis: מופעל וגם מושבת

 גישה זו נותנת לנו שקט נפשי ש-mobiltto יתנהג אותו דבר ללא קשר לנהג שאתה משתמש בו,
 ובלי קשר אם אתה מפעיל מטמון ו/או הצפנה.

 ### תמיכה בנהגים
 מנהלי האחסון הנוכחיים של Mobiletto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : מערכת קבצים מקומית

 *תרומות לתמיכה בספקי אחסון ענן נוספים יתקבלו בברכה!*

 ## mobiletto-cli
 Mobiletto מיועד לשמש כספרייה על ידי קוד JavaScript אחר.

 כדי לעבוד עם mobiletto בשורת הפקודה, השתמש ב-[mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## מקור
 * [mobiletto ב-GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto ב-npm](https://www.npmjs.com/package/mobiletto)

 ## תמיכה ומימון
 אני מנסה להיות מפתח תוכנה מקצועי בקוד פתוח. עבדתי ב
 בתעשיית התוכנה במשך שנים רבות, הקמתי חברות מצליחות ומכרתי אותן לחברות ציבוריות.
 לאחרונה איבדתי את עבודתי, ואין לי באמת עבודה אחרת

 אז אני הולך לנסות לכתוב תוכנה מועילה ולראות אם זה עובד

 אם אתה נהנה להשתמש בתוכנה זו, אני אודה מאוד אפילו על
 הקטן ביותר [תרומה חודשית דרך Patreon](https://www.patreon.com/cobbzilla)

 *תודה!*

 ## התקנה
 התקן באמצעות `npm` או `yarn` . אתה בטח רוצה את גרסת `lite` שאינה כוללת את כל ה
 קובצי README מתורגמים:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 אם אתה באמת רוצה את קבצי README בכל שפה, התקן את הגרסה המלאה:

    npm install mobiletto
    yarn add mobiletto

 ## התחלה מהירה
 דוגמה קצרה באמצעות מנהל ההתקן של `s3` .

 קוד זה ירוץ אותו הדבר אם מנהל ההתקן היה `b2` ' או `local` .

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
 ## שימוש בסיסי
 דוגמה הרבה יותר נרחבת, המציגה את רוב התכונות המוצעות:

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

 ## מטא נתונים
 הפקודה `metadata` מחזירה מטא נתונים לגבי ערך מערכת קבצים בודדת.
 באופן דומה, ערך ההחזרה מהפקודה `list` רשימה' הוא מערך של אובייקטי מטא נתונים.

 אובייקט מטא נתונים נראה כך:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 המאפיין `type` יכול להיות `file` ' , `dir` ' , `link` ' או `special` .

 בהתאם לסוג מנהל ההתקן, ייתכן שפקודה `list` רשימה' לא תחזיר את כל השדות. המאפיינים `name` שם `type`
 צריך להיות נוכח תמיד. פקודת `metadata` הבאה תחזיר את כל המאפיינים הזמינים.

 ## סגנון ייבוא חלופי
 ייבא את המודול בהיקף מלא והשתמש בפונקציית `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## שמירה במטמון
 Mobiletto עובד הכי טוב עם מטמון <a href="https://redis.io">redis</a> .

 Mobiletto ינסה להתחבר למופע redis ב-127.0.0.1:6379

 אתה יכול לעקוף אחד מאלה:
 * הגדר את `MOBILETTO_REDIS_HOST` env var, mobiletכדי להתחבר לכאן במקום המארח המקומי
 * הגדר את ה-env var `MOBILETTO_REDIS_PORT` , היציאה הזו תשמש

 Mobiletto יאחסן את כל מפתחות ה-Redis שלה עם הקידומת `_mobiletto__` . אתה יכול לשנות את זה
 על ידי הגדרת `MOBILETTO_REDIS_PREFIX` env var.

 אתה יכול גם להגדיר מטמון לכל חיבור עם האובייקט `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### לא רוצה אחסון מחדש במטמון?
 כדי להשבית: העבר את `enabled: false` ' באובייקט `opts.redisConfig` שלך כשאתה יוצר את החיבור שלך.

 כפי שנדון להלן, השבתת שמירה במטמון תשפיע לרעה על הביצועים ותגרום לבקשות נוספות
 לאחסון שאתה באמת צריך.

 ### הדרכה לשמירה במטמון
 **אחסון מוצפן**: קריאה/כתיבה של אחסון מוצפן הוא רק קצת יותר איטי מהרגיל,
 אבל ניווט בין ספריות (מה שעושים דברים מסוימים) הוא די יקר. שימוש במטמון redis
 ייתן לך שיפור משמעותי בביצועים.

 מטמון ברירת המחדל בטוח, אך אינו פועל היטב אם יש לך הרבה פעולות כתיבה/הסרה.
 כל פעולת כתיבה או הסרה מבטלת את תוקף המטמון כולו, ומבטיחה שהקריאה הבאה תראה את
 השינויים האחרונים.

 ### כלי CLI
 אם אתה משתמש בכלי CLI כמו [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 אתה בהחלט רוצה את המטמון של redis מופעל, מכיוון שהוא נמשך לאורך כל פניות של פקודת `mo` .

 ## שיקוף

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 הפקודה `mirror` מבצעת העתקה חד פעמית של כל הקבצים מ-mobiltto אחד לאחר.
 זה לא מפעיל שום תהליך כדי לשמור על המראה לאורך זמן. הפעל שוב את הפקודה `mirror`
 כדי לסנכרן את כל הקבצים החסרים.

 ערך ההחזרה `mirror` הוא אובייקט פשוט עם מונים למספר הקבצים שהצליחו
 שיקוף ובכמה קבצים היו שגיאות:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 אזהרה: שיקוף של ערכות נתונים גדולות עשוי להיות גוזל זמן רב ורוחב פס

 עם סמנטיקה של הקריאה `mirror` זה לפעמים יכול להיות מבלבל להבין מיהו
 הקורא ומיהו הכותב. דמיינו את זה כמו הצהרת משימה: "הנייד השמאלי"
 הוא הדבר שאליו מוקצה (נכתבים נתוני שיקוף), וה-"mobiltto הימני" (ה
 ארגומנט לשיטת `mirror` ) הוא הערך המוקצה (נתוני שיקוף נקראים).

 ## הצפנה שקופה
 אפשר הצפנה שקופה בצד הלקוח:

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

 מה קורה? ספריה נפרדת של "כניסת ספרייה" (דורה) (מוצפנת) עוקבת אחר הקבצים שנמצאים בה
 ספרייה (המכונה גם ספריית ה-Dirent).
 * הפקודה `list` רשימה' קוראת את קבצי הזנת הספריות, מפענחת כל נתיב ברשימה; לאחר מכן מחזיר מטא נתונים עבור כל קובץ
 * פקודות `list` אינן יעילות יותר, במיוחד עבור ספריות עם מספר רב של קבצים
 * הפקודה `write` כותבת קבצי dirent בספריית dirent של כל הורה, באופן רקורסיבי; ואז כותב את הקובץ
 * פקודות `write` O(N), כאשר N = עומק בהיררכיית הספריות
 * הפקודה `remove` מסירה את קובץ ה-dirent המתאים, ואת האב שלו אם ריק, באופן רקורסיבי; לאחר מכן מסיר את הקובץ
 * פקודות `remove` לא רקורסיביות יגרמו לקריאה של O(N) וייתכן כי כמה שיותר מחיקות, כאשר N = עומק בהיררכיית הספריות
 * פקודות `remove` רקורסיביות במערכות קבצים גדולות ועמוקות יכולות להיות יקרות

 שים לב שגם כשההצפנה בצד הלקוח מופעלת, יריב עם נראות מלאה לצד השרת המוצפן שלך
 אחסון, גם ללא המפתח, עדיין יכול לראות את המספר הכולל של ספריות וכמה קבצים יש בכל אחת, ועם
 קצת מאמץ, גלה חלק מהמבנה הכללי של היררכיית הספריות או את כולו.
 *הערה: השתמשו במבנה שטוח יחסית לאבטחה טובה יותר.*
 היריב לא יידע את שמות הספריות/הקבצים אלא אם כן ידע גם את ההצפנה שלך
 מפתח או פיצח בהצלחה את ההצפנה. אז כל ההימורים מושבתים!

 ### ביצועים ושמירה במטמון
 הפעולות באחסון מוצפן יכולות להיות איטיות. רשימות והסרות רקורסיביות יכולות להיות איטיות מאוד.
 שמירה במטמון באמצעות redis עוזרת מאוד, אך שימו לב שהמטמון נשטף בכל כתיבה או הסרה.

 ## סיבוב מפתח
 צור Mobiletto עם המפתח החדש שלך, ולאחר מכן שיקוף את הנתונים הישנים לתוכו:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ממשק מנהל ההתקן
 מנהל התקן הוא כל קובץ JS שמייצא פונקציית 'storageClient' עם החתימה הזו:

    function storageClient (key, secret, opts)

 * `key` : מחרוזת, מפתח ה-API שלך (עבור מנהל ההתקן `local` זוהי ספריית הבסיס)
 * `secret` : מחרוזת, סוד ה-API שלך (ניתן להשמיט עבור מנהל ההתקן `local` )
 * `opts` : אובייקט, המאפיינים הם לכל מנהל התקן:
 * עבור `local` , `fileMode` `dirMode` קובעים כיצד נוצרים קבצי יצירה וספריות חדשות
 * עבור `s3` , המאפיין `bucket` נדרש. מאפיינים אופציונליים הם:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 האובייקט שהפונקציה storageClient מחזירה חייב להגדיר את הפונקציות הבאות:

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

 ## רישום
 Mobiletto משתמש בספריית הרישום של [winston](https://www.npmjs.com/package/winston).

 יומנים **יכילו** נתיבי קבצים והודעות שגיאה, אך **לעולם לא** יכילו מפתחות, סודות,
 או כל מידע אחר על תצורת החיבור.

 ### רמת יומן
 השתמש במשתנה הסביבה `MOBILETTO_LOG_LEVEL` כדי להגדיר את רמת היומן, באמצעות אחד
 `npm` המוגדרות ב-[https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 רמת ברירת המחדל היא `error` . הרמה המילולית ביותר היא `silly` , אם כי כרגע mobiletto
 לא מתחבר ברמות מתחת `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### קובץ לוג
 כברירת מחדל, לוגר כותב למסוף. כדי לשלוח יומנים לקובץ, הגדר את `MOBILETTO_LOG_FILE`
 משתנה הסביבה. בעת כניסה לקובץ, יומנים לא ייכתבו יותר למסוף.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 כדי לכבות את הרישום:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
