Mobiletto
 =========

 Mobiletto là một lớp trừu tượng lưu trữ JavaScript, với mã hóa phía máy khách trong suốt tùy chọn.

 # Nội dung
 * [Tại sao lại là Mobiletto?](# Tại sao-Mobiletto?)
 * [Bắt đầu nhanh](# Bắt đầu nhanh)
 * [Mobiletto CLI](# mobiletto-cli)
 * [Nguồn](# Nguồn)
 * [Cài đặt](# Cài đặt)
 * [Hỗ trợ và Tài trợ](# Hỗ trợ và Tài trợ)
 * [Cách sử dụng cơ bản](# Cách sử dụng cơ bản)
 * [Siêu dữ liệu](# Siêu dữ liệu)
 * [Kiểu nhập thay thế](# Kiểu nhập thay thế)
 * [Bộ nhớ đệm](# bộ nhớ đệm)
 * [Phản chiếu](# Phản chiếu)
 * [Mã hóa minh bạch](# Mã hóa minh bạch)
 * [Xoay phím](# Xoay phím)
 * [Giao diện trình điều khiển](# Giao diện trình điều khiển)
 * [Ghi nhật ký](# Ghi nhật ký)

 # Đọc sách này bằng ngôn ngữ khác
 Tài liệu README.md này đã được dịch, qua [hokeyption](https://github.com/cobbzilla/hokeyption), sang
 ** [mọi ngôn ngữ được Google Dịch hỗ trợ](https://cloud.google.com/translate/docs/languages)! **

 Tôi chắc chắn rằng nó không hoàn hảo, nhưng tôi hy vọng nó còn hơn không!

 [🇸🇦 tiếng Ả Rập](docs / ar / README.md)
 [🇧🇩 Tiếng Bengali](docs / bn / README.md)
 [🇩🇪 tiếng Đức](docs / de / README.md)
 [🇺🇸 Tiếng Anh](docs / en / README.md)
 [🇪🇸 Tiếng Tây Ban Nha](docs / es / README.md)
 [🇫🇷 Tiếng Pháp](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 tiếng Indonesia](docs / id / README.md)
 [🇮🇹 Tiếng Ý](docs / it / README.md)
 [🇯🇵 Tiếng Nhật](docs / ja / README.md)
 [🇰🇷 Tiếng Hàn](docs / ko / README.md)
 [🇮🇳 Marathi](docs / mr / README.md)
 [🇵🇱 Tiếng Ba Lan](docs / pl / README.md)
 [🇧🇷 tiếng Bồ Đào Nha](docs / pt / README.md)
 [🇷🇺 tiếng Nga](docs / ru / README.md)
 [🇰🇪 Swahili](docs / sw / README.md)
 [🇵🇭 Tagalog](docs / tl / README.md)
 [🇹🇷 tiếng Thổ Nhĩ Kỳ](docs / tr / README.md)
 [🇵🇰 Urdu](docs / ur / README.md)
 [🇻🇳 Tiếng Việt](docs / vi / README.md)
 [🇨🇳 Tiếng Trung](docs / zh / README.md)


 ** [📚 ... Tất cả ngôn ngữ ...](docs / README.md) **
 ----

 ### Có sự cố với bản dịch README này không?
 Bản dịch cụ thể này của bản gốc [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 có thể có sai sót - * rất hoan nghênh việc sửa chữa! * Vui lòng gửi [yêu cầu kéo trên GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 hoặc nếu bạn không thoải mái khi làm điều đó, hãy [mở sự cố](https://github.com/cobbzilla/mobiletto/issues)

 Khi bạn tạo một vấn đề GitHub mới về bản dịch, vui lòng thực hiện:
 * bao gồm URL của trang (sao chép / dán từ thanh địa chỉ trình duyệt)
 * bao gồm văn bản chính xác bị sai (sao chép / dán từ trình duyệt)
 * vui lòng mô tả những gì là sai - bản dịch không chính xác? định dạng có bị hỏng bằng cách nào đó không?
 * vui lòng đưa ra gợi ý về bản dịch tốt hơn hoặc cách văn bản phải được định dạng đúng
 * **Cảm ơn bạn!**

 ## Tại sao Mobiletto?

 ### Tạm biệt khóa cửa nhà cung cấp!
 Các nhà cung cấp dịch vụ lưu trữ đám mây khác nhau có các API không tương thích. Ngay cả những người phấn đấu cho "khả năng tương thích S3"
 có những hành vi mang phong cách riêng.

 Khi bạn chọn một nhà cung cấp bộ nhớ cụ thể cho ứng dụng của mình, nếu bạn viết mã trực tiếp tới API của họ, ứng dụng của bạn
 bây giờ phụ thuộc vào dịch vụ đó. Khi thời gian trôi qua và mã tích lũy, việc thay đổi nhà cung cấp sẽ trở thành
 ngày càng không thể kiểm soát được. Chào mừng bạn đến với thế giới thú vị của khóa nhà cung cấp!

 Mobiletto được thiết kế để giải quyết vấn đề này. Bằng cách mã hóa ứng dụng của bạn thành API của mobiletto, bạn có thể dễ dàng
 thay đổi nhà cung cấp bộ nhớ và biết rằng lớp lưu trữ của ứng dụng của bạn sẽ hoạt động giống hệt nhau.

 ### Thử nghiệm rộng rãi
 Tất cả các trình điều khiển đều được kiểm tra hành vi giống hệt nhau với hơn 60 bài kiểm tra cho mỗi trình điều khiển.
 Chúng tôi kiểm tra tất cả các trình điều khiển với mọi sự kết hợp của:
 * Mã hóa: cả bật và tắt
 * Redis cache: cả được bật và tắt

 Cách tiếp cận này giúp chúng tôi yên tâm rằng mobiletto sẽ hoạt động giống nhau bất kể bạn sử dụng trình điều khiển nào,
 và bất kể bạn có bật bộ nhớ đệm và / hoặc mã hóa hay không.

 ### Hỗ trợ trình điều khiển
 Trình điều khiển lưu trữ Mobiletto hiện tại:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : hệ thống tệp cục bộ

 * Rất hoan nghênh các đóng góp để hỗ trợ thêm các nhà cung cấp dịch vụ lưu trữ đám mây! *

 ## mobiletto-cli
 Mobiletto dự định sẽ được sử dụng như một thư viện bằng mã JavaScript khác.

 Để làm việc với mobiletto tại dòng lệnh, hãy sử dụng [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Nguồn
 * [mobiletto trên GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto trên npm](https://www.npmjs.com/package/mobiletto)

 ## Hỗ trợ và Tài trợ
 Tôi đang cố gắng trở thành một nhà phát triển phần mềm nguồn mở chuyên nghiệp. Tôi đã làm việc ở
 ngành công nghiệp phần mềm trong nhiều năm, tôi đã thành lập các công ty thành công và bán chúng cho các công ty đại chúng.
 Gần đây, tôi bị mất việc và tôi không thực sự có bất kỳ công việc nào khác.

 Vì vậy, tôi sẽ thử viết phần mềm hữu ích và xem nó có hoạt động không

 Nếu bạn thích sử dụng phần mềm này, tôi sẽ rất biết ơn vì
 nhỏ nhất [đóng góp hàng tháng qua Patreon](https://www.patreon.com/cobbzilla)

 *Cảm ơn bạn!*

 ## Cài đặt
 Cài đặt bằng cách sử dụng `npm` `yarn` . Bạn có thể muốn phiên bản `lite` không bao gồm tất cả các
 các tệp README đã dịch:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Nếu bạn thực sự muốn các tệp README ở mọi ngôn ngữ, hãy cài đặt phiên bản đầy đủ:

    npm install mobiletto
    yarn add mobiletto

 ## Bắt đầu nhanh
 Một ví dụ ngắn sử dụng trình điều khiển `s3` .

 Mã này sẽ chạy tương tự nếu trình điều khiển là `b2` `local` .

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
 ## Cách sử dụng cơ bản
 Một ví dụ rộng hơn nhiều, hiển thị hầu hết các tính năng được cung cấp:

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

 ## Metadata
 Lệnh `metadata` trả về siêu dữ liệu về một mục nhập hệ thống tệp.
 Tương tự như vậy, giá trị trả về từ lệnh `list` là một mảng các đối tượng siêu dữ liệu.

 Một đối tượng siêu dữ liệu trông giống như sau:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Thuộc tính `type` có thể `file` , `dir` , `link` hoặc `special` .

 Tùy thuộc vào loại trình điều khiển, lệnh `list` có thể không trả về tất cả các trường. Thuộc tính `name` `type`
 nên luôn luôn có mặt. Lệnh `metadata` tiếp theo sẽ trả về tất cả các thuộc tính có sẵn.

 ## Kiểu nhập thay thế
 Nhập mô-đun có phạm vi đầy đủ và sử dụng chức năng `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Bộ nhớ đệm
 Mobiletto hoạt động tốt nhất với bộ nhớ đệm <a href="https://redis.io">redis</a> .

 Mobiletto sẽ cố gắng kết nối với phiên bản redis trên 127.0.0.1:6379

 Bạn có thể ghi đè một trong hai cách sau:
 * Đặt env var của `MOBILETTO_REDIS_HOST` , mobiletto để kết nối tại đây thay vì localhost
 * Đặt var env `MOBILETTO_REDIS_PORT` , cổng này sẽ được sử dụng

 Mobiletto sẽ lưu trữ tất cả các khóa redis của mình với tiền tố `_mobiletto__` . Bạn có thể thay đổi điều này
 bằng cách đặt var env `MOBILETTO_REDIS_PREFIX` .

 Bạn cũng có thể đặt bộ nhớ đệm cho mỗi kết nối bằng đối tượng `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Bạn không muốn redis vào bộ nhớ đệm?
 Để vô hiệu hóa: hãy truyền `enabled: false` vào đối `opts.redisConfig` của bạn khi bạn thiết lập kết nối của mình.

 Như đã thảo luận bên dưới, việc tắt bộ nhớ đệm sẽ có ảnh hưởng xấu đến hiệu suất và làm phát sinh nhiều yêu cầu hơn
 vào bộ nhớ mà bạn thực sự cần.

 ### Hướng dẫn lưu vào bộ nhớ đệm
 ** Bộ nhớ được mã hóa **: bộ nhớ được mã hóa đọc / ghi chỉ chậm hơn một chút so với bình thường,
 nhưng việc điều hướng xung quanh các thư mục (một số thứ làm được) khá tốn kém. Sử dụng bộ nhớ đệm redis
 sẽ giúp bạn tăng hiệu suất đáng kể.

 Bộ nhớ đệm mặc định là an toàn, nhưng không hoạt động tốt nếu bạn có nhiều thao tác ghi / xóa.
 Bất kỳ thao tác ghi hoặc xóa nào đều làm mất hiệu lực của toàn bộ bộ nhớ cache, đảm bảo các lần đọc tiếp theo sẽ thấy
 những thay đổi mới nhất.

 ### Công cụ CLI
 Nếu bạn đang sử dụng công cụ CLI như [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 chắc chắn bạn sẽ muốn kích hoạt bộ nhớ cache redis, vì nó tồn tại trên các lệnh gọi của lệnh `mo` .

 ## Phản chiếu

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Lệnh `mirror` thực hiện sao chép một lần tất cả các tệp từ mobiletto này sang mobiletto khác.
 Nó không chạy bất kỳ quy trình nào để duy trì gương theo thời gian. Chạy lại lệnh `mirror`
 để đồng bộ hóa bất kỳ tệp nào bị thiếu.

 Giá trị trả về từ `mirror` là một đối tượng đơn giản có bộ đếm cho số lượng tệp đã được thành công
 được phản chiếu và có bao nhiêu tệp có lỗi:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 CẢNH BÁO: Sao chép các tập dữ liệu lớn có thể rất tốn thời gian và băng thông

 Với ngữ nghĩa cuộc gọi `mirror` , đôi khi có thể khó hiểu để hiểu ai là
 người đọc và người viết. Hãy tưởng tượng nó giống như một câu lệnh gán: "mobiletto bên trái"
 là thứ được gán cho (dữ liệu được phản chiếu được ghi) và "mobiletto bên phải" (
 đối số cho phương thức `mirror` ) là giá trị đang được gán (dữ liệu được nhân bản được đọc).

 ## Mã hóa minh bạch
 Bật mã hóa phía máy khách minh bạch:

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

 Chuyện gì đang xảy ra vậy? Thư mục "mục nhập thư mục" (chỉ thị) riêng biệt (được mã hóa) theo dõi những tệp nào có trong đó
 thư mục (hay còn gọi là thư mục chỉ thị).
 * Lệnh `list` đọc các tệp mục nhập thư mục, giải mã từng đường dẫn được liệt kê; sau đó trả về siêu dữ liệu cho từng tệp
 Các lệnh * `list` không hiệu quả hơn, đặc biệt là đối với các thư mục có số lượng tệp lớn
 * Lệnh `write` ghi các tệp chỉ thị trong mỗi thư mục lệnh của cha, một cách đệ quy; sau đó ghi tệp
 * Các lệnh `write` sẽ phải ghi O (N), với N = độ sâu trong hệ thống phân cấp thư mục
 * Lệnh `remove` loại bỏ tệp chỉ thị tương ứng và tệp cha của nó nếu trống, một cách đệ quy; sau đó xóa tệp
 * Các lệnh `remove` không đệ quy sẽ phải chịu O (N) lần đọc và có khả năng là nhiều lần xóa, với N = độ sâu trong phân cấp thư mục
 * Các lệnh `remove` đệ quy trên các hệ thống tệp lớn và sâu có thể tốn kém

 Lưu ý rằng ngay cả khi kích hoạt mã hóa phía máy khách, kẻ thù vẫn có khả năng hiển thị đầy đủ phía máy chủ được mã hóa của bạn
 bộ nhớ, ngay cả khi không có khóa, vẫn có thể xem tổng số thư mục và bao nhiêu tệp trong mỗi thư mục và với
 một số nỗ lực, khám phá một số hoặc tất cả cấu trúc tổng thể của hệ thống phân cấp thư mục.
 * Lưu ý: Sử dụng cấu trúc tương đối phẳng để bảo mật tốt hơn. *
 Đối thủ sẽ không biết tên của các thư mục / tệp trừ khi họ cũng biết mã hóa của bạn
 hoặc đã bẻ khóa mã hóa thành công. Tất cả các cược đã tắt sau đó!

 ### Hiệu suất và bộ nhớ đệm
 Các hoạt động trên bộ nhớ được mã hóa có thể bị chậm. Danh sách đệ quy và xóa có thể rất chậm.
 Bộ nhớ đệm thông qua redis giúp ích rất nhiều, nhưng lưu ý rằng bộ nhớ đệm được xóa khi bất kỳ lần ghi hoặc xóa nào.

 ## Xoay phím
 Tạo một mobiletto bằng khóa mới của bạn, sau đó sao chép dữ liệu cũ vào đó:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Giao diện trình điều khiển
 Trình điều khiển là bất kỳ tệp JS nào xuất một hàm 'storageClient' với chữ ký này:

    function storageClient (key, secret, opts)

 * `key` : một chuỗi, khóa API của bạn (đối với trình điều `local` , đây là thư mục cơ sở)
 * `secret` : một chuỗi, bí mật API của bạn (có thể được bỏ qua cho trình điều `local` )
 * `opts` : một đối tượng, các thuộc tính là trên mỗi trình điều khiển:
 * Đối với `local` , thuộc `fileMode` và `dirMode` xác định cách tạo các tệp và thư mục mới được tạo
 * Đối với `s3` , thuộc `bucket` là bắt buộc. Các thuộc tính tùy chọn là:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Đối tượng mà hàm StorageClient trả về phải xác định các hàm này:

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

 ## Ghi nhật ký
 Mobiletto sử dụng thư viện ghi nhật ký [wonton](https://www.npmjs.com/package/winston).

 Nhật ký ** sẽ ** chứa đường dẫn tệp và thông báo lỗi, nhưng sẽ ** không bao giờ ** chứa khóa, bí mật,
 hoặc bất kỳ thông tin cấu hình kết nối nào khác.

 ### Mức đăng nhập
 Sử dụng biến môi trường `MOBILETTO_LOG_LEVEL` để đặt mức nhật ký, sử dụng một
 của các cấp độ `npm` được xác định trong [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Mức mặc định là `error` . Mức độ dài dòng nhất là `silly` , mặc dù hiện tại là mobiletto
 không đăng nhập ở các cấp dưới `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Tệp nhật ký
 Theo mặc định, trình ghi nhật ký ghi vào bảng điều khiển. Để gửi nhật ký vào một tệp, hãy đặt `MOBILETTO_LOG_FILE`
 biến môi trường. Khi đăng nhập vào một tệp, nhật ký sẽ không còn được ghi vào bảng điều khiển.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Để tắt ghi nhật ký:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
