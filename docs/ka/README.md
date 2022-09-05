მობილურიტო
 =========

 Mobiletto არის JavaScript შენახვის აბსტრაქციის ფენა, სურვილისამებრ გამჭვირვალე კლიენტის მხარეს დაშიფვრით.

 # შიგთავსი
 * [რატომ Mobiletto?](#Why-Mobiletto?)
 * [სწრაფი დაწყება](#სწრაფი დაწყება)
 * [Mobiletto CLI](#mobiletto-cli)
 * [წყარო](#წყარო)
 * [ძირითადი გამოყენება](#ძირითადი გამოყენება)
 * [მეტამონაცემები](#მეტამონაცემები)
 * [ალტერნატიული იმპორტის სტილი](#Alternate-import-style)
 * [ქეშირება](#ქეშირება)
 * [Mirroring](#Mirroring)
 * [Transparent Encryption](#Transparent-encryption)
 * [გასაღების როტაცია](# გასაღების როტაცია)
 * [დრაივერის ინტერფეისი](#Driver-interface)
 * [Logging](#Logging)

 # წაიკითხეთ ეს სხვა ენაზე
 ეს README.md დოკუმენტი ითარგმნა [hokeylization](https://github.com/cobbzilla/hokeylization) მეშვეობით
 **[Google Translate-ის მიერ მხარდაჭერილი ყველა ენა](https://cloud.google.com/translate/docs/languages)!**

 დარწმუნებული ვარ, რომ ეს არ არის სრულყოფილი, მაგრამ იმედი მაქვს, რომ ეს უკეთესია, ვიდრე არაფერი!

 [🇸🇦 არაბული](../ar/README.md)
 [🇧🇩 ბენგალური](../bn/README.md)
 [🇩🇪 გერმანული](../de/README.md)
 [🇺🇸 ინგლისური](../en/README.md)
 [🇪🇸 ესპანური](../es/README.md)
 [🇫🇷 ფრანგული](../fr/README.md)
 [🇹🇩 ჰაუსა](../ha/README.md)
 [🇮🇳 ჰინდი](../hi/README.md)
 [🇮🇩 ინდონეზიური](../id/README.md)
 [🇮🇹 იტალიური](../it/README.md)
 [🇯🇵 იაპონური](../ja/README.md)
 [🇰🇷 კორეული](../ko/README.md)
 [🇮🇳 მარანტი](../mr/README.md)
 [🇵🇱 პოლონური](../pl/README.md)
 [🇧🇷 პორტუგალიური](../pt/README.md)
 [🇷🇺 რუსული](../ru/README.md)
 [🇰🇪 სუაჰილი](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 თურქული](../tr/README.md)
 [🇵🇰 ურდუ](../ur/README.md)
 [🇻🇳 ვიეტნამური](../vi/README.md)
 [🇨🇳 ჩინური](../zh/README.md)


 **[📚 ... ყველა ენა ...](../README.md)**
 ----

 ### პრობლემაა README-ის ამ თარგმანში?
 ორიგინალის ეს კონკრეტული თარგმანი [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 შეიძლება იყოს ხარვეზები -- *შესწორებები ძალიან მისასალმებელია!* გთხოვთ, გამოაგზავნოთ [გაყვანის მოთხოვნა GitHub-ზე](https://github.com/cobbzilla/mobiletto/pulls),
 ან თუ არ გსიამოვნებთ ამის გაკეთება, [გახსენით საკითხი](https://github.com/cobbzilla/mobiletto/issues)

 როდესაც შექმნით ახალ GitHub საკითხს თარგმანის შესახებ, გთხოვთ, გააკეთოთ:
 * ჩართეთ გვერდის URL (დააკოპირეთ/ჩასვით ბრაუზერის მისამართის ზოლიდან)
 * შეიტანეთ ზუსტი ტექსტი, რომელიც არასწორია (დააკოპირეთ/ჩასვით ბრაუზერიდან)
 * გთხოვთ აღწეროთ რა არის არასწორი -- არასწორია თარგმანი? ფორმატირება გატეხილია როგორმე?
 * გთხოვთ, შესთავაზოთ უკეთესი თარგმანის შეთავაზება, ან როგორ უნდა იყოს ტექსტის სწორად ფორმატირება
 * **Გმადლობთ!**

 ## რატომ Mobiletto?

 ### ნახვამდის გამყიდველს ჩაკეტვა!
 ღრუბლოვანი საცავის სხვადასხვა პროვაიდერებს აქვთ შეუთავსებელი API. მათაც კი, ვინც იბრძვის "S3 თავსებადობისკენ"
 აქვთ იდიოსინკრატული ქცევები.

 როდესაც ირჩევთ მეხსიერების კონკრეტულ გამყიდველს თქვენი აპისთვის, თუ კოდს პირდაპირ მათ API-ში, თქვენს აპში აწვდით
 ახლა ამ სერვისზეა დამოკიდებული. რაც დრო გადის და კოდი გროვდება, მოვაჭრეების შეცვლა ხდება
 სულ უფრო გაუსაძლისი. კეთილი იყოს თქვენი მობრძანება გამყიდველის ჩაკეტვის მხიარულ სამყაროში!

 Mobiletto შეიქმნა ამ პრობლემის გადასაჭრელად. თქვენი აპლიკაციის კოდირებით mobiletto-ს API-ზე, შეგიძლიათ მარტივად
 შეცვალეთ მეხსიერების პროვაიდერები და იცოდეთ, რომ თქვენი აპლიკაციის მეხსიერების ფენა იდენტურად იქცევა.

 ### ვრცელი ტესტირება
 ყველა მძღოლი ტესტირებულია იდენტური ქცევისთვის 60+ ტესტით თითოეული მძღოლისთვის.
 ჩვენ ვამოწმებთ ყველა დრაივერს ყველა კომბინაციით:
 * დაშიფვრა: ჩართული და გამორთული
 * Redis cache: ჩართული და გამორთული

 ეს მიდგომა გვაძლევს მშვიდად, რომ mobiletto იქცევა იგივე, მიუხედავად იმისა, თუ რომელ დრაივერს იყენებთ,
 და მიუხედავად იმისა, ჩართავთ თუ არა ქეშირებას და/ან დაშიფვრას.

 ### დრაივერის მხარდაჭერა
 მიმდინარე Mobiletto შენახვის დრაივერები:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : ადგილობრივი ფაილური სისტემა

 *თქვენი წვლილი ღრუბლოვანი საცავის მეტი პროვაიდერის მხარდასაჭერად ძალიან მისასალმებელია!*

 ## mobiletto-cli
 Mobiletto განკუთვნილია ბიბლიოთეკის სახით სხვა JavaScript კოდით გამოსაყენებლად.

 ბრძანების ხაზში mobiletto-სთან მუშაობისთვის გამოიყენეთ [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## წყარო
 * [mobiletto GitHub-ზე](https://github.com/cobbzilla/mobiletto)
 * [mobiletto on npm](https://www.npmjs.com/package/mobiletto)

 ## Სწრაფი დაწყება
 მოკლე მაგალითი mobiletto `s3` დრაივერის გამოყენებით.

 ეს კოდი ერთნაირად იმუშავებდა, თუ დრაივერი იქნებოდა `b2` ან `local` .

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
 ## ძირითადი გამოყენება
 ბევრად უფრო ვრცელი მაგალითი, რომელიც გვიჩვენებს შემოთავაზებული ფუნქციების უმეტესობას:

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

 ## მეტამონაცემები
 `metadata` ბრძანება აბრუნებს მეტამონაცემებს ფაილური სისტემის ერთი ჩანაწერის შესახებ.
 ანალოგიურად, დაბრუნებული მნიშვნელობა `list` ბრძანებიდან არის მეტამონაცემების ობიექტების მასივი.

 მეტამონაცემების ობიექტი ასე გამოიყურება:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` თვისება შეიძლება იყოს `file` , `dir` , `link` , ან `special` .

 დრაივერის ტიპის მიხედვით, `list` ბრძანება შეიძლება არ დააბრუნოს ყველა ველი. `name` name" და `type` თვისებები
 ყოველთვის უნდა იყოს წარმოდგენილი. შემდგომი `metadata` ბრძანება დააბრუნებს ყველა ხელმისაწვდომ თვისებას.

 ## იმპორტის ალტერნატიული სტილი
 მოახდინე სრული მოდულის იმპორტი და გამოიყენეთ ფუნქცია `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## ქეშირება
 Mobiletto საუკეთესოდ მუშაობს <a href="https://redis.io">redis</a> ქეშით.

 Mobiletto შეეცდება დაკავშირებას redis ეგზემპლართან 127.0.0.1:6379

 თქვენ შეგიძლიათ უგულებელყოთ რომელიმე მათგანი:
 * დააყენეთ `MOBILETTO_REDIS_HOST` env var, mobiletto დასაკავშირებლად აქ ლოკალური ჰოსტის ნაცვლად
 * დააყენეთ `MOBILETTO_REDIS_PORT` env var, ეს პორტი იქნება გამოყენებული

 Mobiletto შეინახავს ყველა თავის რედის გასაღებს პრეფიქსით `_mobiletto__` . თქვენ შეგიძლიათ შეცვალოთ ეს
 `MOBILETTO_REDIS_PREFIX` env var-ის დაყენებით.

 თქვენ ასევე შეგიძლიათ დააყენოთ თითო კავშირის ქეშირება `opts.redisConfig` ობიექტით:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### არ გსურთ ხელახალი ქეშირება?
 გამოსართავად: თქვენი კავშირის დამყარებისას `enabled: false` თქვენს `opts.redisConfig` ობიექტში.

 როგორც ქვემოთ განიხილება, ქეშირების გამორთვა უარყოფითად იმოქმედებს შესრულებაზე და გამოიწვევს მეტ მოთხოვნას
 შესანახად, რომელიც ნამდვილად გჭირდებათ.

 ### ქეშირების მითითებები
 **დაშიფრული საცავი**: დაშიფრული შენახვის კითხვა/წერა ჩვეულებრივზე მხოლოდ ოდნავ ნელია,
 მაგრამ დირექტორიების ირგვლივ ნავიგაცია (რასაც ზოგიერთი რამ აკეთებს) საკმაოდ ძვირია. რედის ქეშის გამოყენება
 მოგცემთ მუშაობის მნიშვნელოვან ზრდას.

 ნაგულისხმევი ქეში უსაფრთხოა, მაგრამ არ მუშაობს კარგად, თუ თქვენ გაქვთ ბევრი ჩაწერის/წაშლის ოპერაციები.
 ჩაწერის ან წაშლის ნებისმიერი ოპერაცია არღვევს მთელ ქეშს, რაც უზრუნველყოფს შემდგომი წაკითხვის ნახვას
 უახლესი ცვლილებები.

 ### CLI ინსტრუმენტები
 თუ იყენებთ CLI ხელსაწყოს, როგორიცაა [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 თქვენ აუცილებლად გსურთ ჩართოთ redis ქეში, რადგან ის გრძელდება `mo` ბრძანების გამოძახებით.

 ## სარკე

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` ბრძანება ასრულებს ყველა ფაილის ერთჯერად ასლს ერთი მობილურიდან მეორეზე.
 ის არ აწარმოებს რაიმე პროცესს სარკის შესანარჩუნებლად დროთა განმავლობაში. ხელახლა გაუშვით `mirror` ბრძანება
 ნებისმიერი დაკარგული ფაილის სინქრონიზაციისთვის.

 დაბრუნებული მნიშვნელობა `mirror` არის მარტივი ობიექტი მრიცხველებით, თუ რამდენი ფაილი იყო წარმატებით
 სარკისებული და რამდენ ფაილს ჰქონდა შეცდომები:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 გაფრთხილება: მონაცემთა დიდი ნაკრების ასახვა შეიძლება იყოს ძალიან შრომატევადი და გამტარუნარიანობის ინტენსიური

 სემანტიკის `mirror` , ზოგჯერ შეიძლება დამაბნეველი იყოს იმის გაგება, თუ ვინ არის ის
 მკითხველი და ვინ არის მწერალი. წარმოიდგინეთ, როგორც დავალება: "მარცხენა მობილურის"
 არის ნივთი, რომელსაც ენიჭება (არეკული მონაცემები იწერება) და „მარჯვენა მობილურის“ (
 არგუმენტი `mirror` მეთოდისთვის) არის მინიჭებული მნიშვნელობა (სარკისებური მონაცემები იკითხება).

 ## გამჭვირვალე დაშიფვრა
 კლიენტის მხრიდან გამჭვირვალე დაშიფვრის ჩართვა:

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

 Რა ხდება? ცალკე "დირექტორის შესვლის" (dirent) დირექტორია (დაშიფრული) აკონტროლებს რა ფაილებს შეიცავს მასში
 დირექტორია (aka dirent დირექტორია).
 * `list` ბრძანება კითხულობს დირექტორიაში შესვლის ფაილებს, შიფრავს ჩამოთვლილ თითოეულ გზას; შემდეგ აბრუნებს მეტამონაცემებს თითოეული ფაილისთვის
 * `list` ბრძანებები უფრო არაეფექტურია, განსაკუთრებით ფაილების დიდი რაოდენობით დირექტორიებისთვის
 * `write` ბრძანება წერს dirent ფაილებს თითოეული მშობლის dirent დირექტორიაში, რეკურსიულად; შემდეგ წერს ფაილს
 * `write` ბრძანებებს მოჰყვება O(N) ჩაწერა, N = სიღრმე დირექტორიაში იერარქიაში
 * ბრძანება `remove` აშორებს შესაბამის dirent ფაილს და მის მშობელს, თუ ცარიელია, რეკურსიულად; შემდეგ წაშლის ფაილს
 * არარეკურსიული `remove` ბრძანებები გამოიწვევს O(N) წაკითხვას და პოტენციურად ამდენივე წაშლას, N = სიღრმე დირექტორიაში იერარქიაში
 * დიდ და ღრმა ფაილურ სისტემებზე რეკურსიული `remove` ბრძანებები შეიძლება იყოს ძვირი

 გაითვალისწინეთ, რომ კლიენტის მხრიდან დაშიფვრის ჩართვის შემთხვევაშიც კი, მოწინააღმდეგე სრული ხილვადობით თქვენს დაშიფრულ სერვერის მხარეს
 შენახვა, თუნდაც გასაღების გარეშე, მაინც ხედავს დირექტორიების საერთო რაოდენობას და რამდენი ფაილია თითოეულში და თან
 გარკვეული ძალისხმევა, აღმოაჩინე დირექტორიის იერარქიის ზოგიერთი ან მთელი სტრუქტურა.
 *შენიშვნა: გამოიყენეთ შედარებით ბრტყელი სტრუქტურა უკეთესი უსაფრთხოებისთვის.*
 მოწინააღმდეგემ არ იცოდა დირექტორიების/ფაილების სახელები, თუ მათ ასევე არ იცოდნენ თქვენი დაშიფვრა
 გასაღები ან სხვაგვარად წარმატებით დაარღვია დაშიფვრა. ყველა ფსონი შეჩერებულია მაშინ!

 ### შესრულება და ქეშირება
 დაშიფრული შენახვის ოპერაციები შეიძლება იყოს ნელი. რეკურსიული ჩამონათვალი და წაშლა შეიძლება ძალიან ნელი იყოს.
 ქეშირება redis-ის საშუალებით ძალიან ეხმარება, მაგრამ გაითვალისწინეთ, რომ ქეში ჩაქრება ნებისმიერი ჩაწერის ან წაშლის შემდეგ.

 ## გასაღების როტაცია
 შექმენით მობილური ტოტო თქვენი ახალი გასაღებით, შემდეგ ასახეთ მასში ძველი მონაცემები:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## დრაივერის ინტერფეისი
 დრაივერი არის ნებისმიერი JS ფაილი, რომელიც ახორციელებს "storageClient" ფუნქციას ამ ხელმოწერით:

    function storageClient (key, secret, opts)

 * `key` : სტრიქონი, თქვენი API გასაღები ( `local` დრაივერისთვის ეს არის საბაზისო დირექტორია)
 * `secret` : სტრიქონი, თქვენი API საიდუმლო (შეიძლება `local` დრაივერი)
 * `opts` : ობიექტი, თვისებები არის თითო დრაივერი:
 * `local` "-ისთვის, `fileMode` და `dirMode` თვისებები განსაზღვრავს, თუ როგორ იქმნება ახალი ფაილების და დირექტორიების შექმნა.
 * `s3` საჭიროა `bucket` თვისება. არჩევითი თვისებებია:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 ობიექტი, რომელსაც აბრუნებს storageClient ფუნქცია, უნდა განსაზღვროს ეს ფუნქციები:

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

 ## შესვლა
 Mobiletto იყენებს [winston](https://www.npmjs.com/package/winston) ჟურნალის ბიბლიოთეკას.

 ჟურნალი **შეიცავს ფაილის ბილიკებს და შეცდომის შეტყობინებებს, მაგრამ **არასდროს** შეიცავს გასაღებებს, საიდუმლოებებს,
 ან სხვა კავშირის კონფიგურაციის ინფორმაცია.

 ### ჟურნალის დონე
 გამოიყენეთ `MOBILETTO_LOG_LEVEL` გარემოს ცვლადი ჟურნალის დონის დასაყენებლად, ერთის გამოყენებით
 [https://www.npmjs.com/package/winston#logging-levels]-ში განსაზღვრული `npm` (https://www.npmjs.com/package/winston#logging-levels)

 ნაგულისხმევი დონე არის `error` . ყველაზე ხმამაღალი დონე არის `silly` , თუმცა ამჟამად მობილურია
 არ შედის "გამართვის" ქვემოთ `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ჟურნალის ფაილი
 ნაგულისხმევად, ლოგერი წერს კონსოლს. ჟურნალის ფაილში გასაგზავნად დააყენეთ `MOBILETTO_LOG_FILE`
 გარემოს ცვლადი. ფაილში შესვლისას ჟურნალები აღარ ჩაიწერება კონსოლზე.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 ჟურნალის გამორთვისთვის:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
