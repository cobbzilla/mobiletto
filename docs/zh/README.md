手机
=========

 Mobiletto 是一个 JavaScript 存储抽象层，具有可选的透明客户端加密。

 ＃ 内容
* [为什么选择Mobiletto？]（#Why-Mobiletto？）
 * [快速启动](#快速启动)
 * [Mobiletto CLI](#mobiletto-cli)
 * [来源](#来源)
 * [安装](#安装)
 * [支持和资助](#Support-and-Funding)
 * [基本用法](#Basic-usage)
 * [元数据](#元数据)
 * [替代导入样式](#Alternate-import-style)
 * [缓存](#缓存)
 * [镜像](#镜像)
 * [透明加密](#Transparent-encryption)
 * [键旋转](#Key-rotation)
 * [驱动接口](#Driver-interface)
 * [记录](#记录)

 # 用另一种语言阅读
此 README.md 文档已通过 [hokeylization](https://github.com/cobbzilla/hokeylization) 翻译成
**[谷歌翻译支持的所有语言](https://cloud.google.com/translate/docs/languages)！**

我敢肯定它并不完美，但我希望它总比没有好！

 [🇸🇦 阿拉伯语](../ar/README.md)
 [🇧🇩 孟加拉语](../bn/README.md)
 [🇩🇪 德语](../de/README.md)
 [🇺🇸 英文](../en/README.md)
 [🇪🇸 西班牙语](../es/README.md)
 [🇫🇷 法语](../fr/README.md)
 [🇹🇩豪萨语](../ha/README.md)
 [🇮🇳印地语](../hi/README.md)
 [🇮🇩 印尼语](../id/README.md)
 [🇮🇹 意大利语](../it/README.md)
 [🇯🇵 日语](../ja/README.md)
 [🇰🇷韩语](../ko/README.md)
 [🇮🇳 马兰地语](../mr/README.md)
 [🇵🇱波兰语](../pl/README.md)
 [🇧🇷 葡萄牙语](../pt/README.md)
 [🇷🇺 俄语](../ru/README.md)
 [🇰🇪 斯瓦希里语](../sw/README.md)
 [🇵🇭 他加禄语](../tl/README.md)
 [🇹🇷 土耳其语](../tr/README.md)
 [🇵🇰乌尔都语](../ur/README.md)
 [🇻🇳 越南语](../vi/README.md)
 [🇨🇳 中文](../zh/README.md)


 **[📚 ...所有语言 ...](../README.md)**
 ----

 ### README 的这个翻译有问题吗？
原文 [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) 的特殊翻译
可能有缺陷——*非常欢迎更正！*请发送 [GitHub 上的拉取请求](https://github.com/cobbzilla/mobiletto/pulls)，
或者如果你不习惯这样做，[打开一个问题](https://github.com/cobbzilla/mobiletto/issues)

当您创建有关翻译的新 GitHub 问题时，请执行以下操作：
 * 包括页面 URL（从浏览器地址栏复制/粘贴）
 *包括错误的确切文本（从浏览器复制/粘贴）
 * 请描述问题所在——翻译不正确吗？格式是否以某种方式损坏？
 * 请提供更好的翻译建议，或文本应如何正确格式化
* **谢谢！**

 ## 为什么选择 Mobiletto？

 ### 再见供应商锁定！
各种云存储提供商都有不兼容的 API。即使是那些追求“S3兼容性”的人
有特殊的行为。

当您为您的应用选择特定的存储供应商时，如果您直接向他们的 API 编码，您的应用
现在依赖于该服务。随着时间的推移和代码的积累，不断变化的供应商成为
越来越站不住脚。欢迎来到供应商锁定的有趣世界！

 Mobiletto 旨在解决这个问题。通过将您的应用程序编码为 mobiletto 的 API，您可以轻松地
更改存储提供程序并知道您的应用程序的存储层将表现相同。

 ### 广泛的测试
所有驱动程序都针对相同的行为进行了测试，每个驱动程序都进行了 60 多次测试。
我们使用以下各项组合测试所有驱动程序：
 *加密：启用和禁用
* Redis 缓存：启用和禁用

这种方法让我们高枕无忧，无论您使用哪个驱动程序，mobiletto 的行为都相同，
并且无论您是否启用缓存和/或加密。

 ### 驱动支持
当前 Mobiletto 存储驱动程序：
 * `s3` : 亚马逊 S3
 * `b2` : 逆光 B2
 * `local` : 本地文件系统

*非常欢迎为支持更多云存储提供商做出贡献！*

 ## mobiletto-cli
 Mobiletto 旨在被其他 JavaScript 代码用作库。

要在命令行中使用 mobiletto，请使用 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ＃＃ 资源
* [github上的mobiletto](https://github.com/cobbzilla/mobiletto)
 * [npm 上的 mobiletto](https://www.npmjs.com/package/mobiletto)

 ## 支持和资金
我正在努力成为一名专业的开源软件开发人员。我一直在工作
从事软件行业多年，我创办了成功的公司，并把它们卖给了上市公司。
最近我失业了，我真的没有其他工作要做

所以我将尝试编写有用的软件，看看是否可行

如果您喜欢使用此软件，我将非常感谢
最小的 [通过 Patreon 的每月贡献](https://www.patreon.com/cobbzilla)

 *谢谢！*

 ＃＃ 安装
使用`npm`或`yarn`安装。您可能`lite`不包含所有
翻译自述文件：

    npm install mobiletto-lite
    yarn add mobiletto-lite

如果您真的想要每种语言的 README 文件，请安装完整版：

    npm install mobiletto
    yarn add mobiletto

 ＃＃ 快速开始
使用 mobiletto `s3`驱动程序的简短示例。

如果驱动程序是`b2`或`local` ，此代码将运行相同。

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
 ##基本用法
一个更广泛的示例，显示了提供的大部分功能：

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

 ## 元数据
`metadata`命令返回有关单个文件系统条目的元数据。
同样， `list`命令的返回值是一个元数据对象数组。

元数据对象如下所示：

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type`属性可以是`file` 、 `dir` 、 `link`或`special` 。

根据驱动程序的类型， `list`命令可能不会返回所有字段。 `name`和`type`属性
应始终存在。随后的`metadata`命令将返回所有可用属性。

 ## 替代导入样式
导入全域模块并使用`connect`函数：

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## 缓存
Mobiletto 最适合使用<a href="https://redis.io">redis</a>缓存。

 Mobiletto 将尝试连接到 127.0.0.1:6379 上的 redis 实例

您可以覆盖其中任何一个：
 * 设置`MOBILETTO_REDIS_HOST` env var，mobiletto 连接这里而不是 localhost
 * 设置`MOBILETTO_REDIS_PORT` ，这个端口将被使用

Mobiletto 将使用前缀`_mobiletto__`存储其所有 redis 键。你可以改变这个
通过设置`MOBILETTO_REDIS_PREFIX` 。

您还可以使用`opts.redisConfig`对象设置每个连接的缓存：

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### 不想redis缓存？
要禁用：在建立连接时在`opts.redisConfig`对象中传递`enabled: false` 。

如下所述，禁用缓存将对性能产生不利影响并引发更多请求
到您真正需要的存储空间。

 ### 缓存指导
**加密存储**：读/写加密存储只比正常慢一点，
但是在目录中导航（有些事情会这样做）相当昂贵。使用 redis 缓存
会给你显着的性能提升。

默认缓存是安全的，但如果您有很多写入/删除操作，则性能不佳。
任何写入或删除操作都会使整个缓存失效，确保后续读取将看到
最新的变化。

 ### CLI 工具
如果您使用 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) 之类的 CLI 工具，
你肯定会希望启用 redis 缓存，因为它会持续调用`mo`命令。

 ## 镜像

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror`命令将所有文件从一个手机复制到另一个手机。
随着时间的推移，它不会运行任何进程来维护镜像。再次运行`mirror`命令
同步任何丢失的文件。

 `mirror`的返回值是一个简单的对象，带有多少个文件成功的计数器
镜像和有多少文件有错误：

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

警告：镜像大型数据集可能非常耗时且占用大量带宽

使用`mirror`调用语义有时会让人难以理解谁是
读者和作者是谁。把它想象成一个赋值语句：“左手手机”
是分配给的东西（写入的镜像数据），以及“右手的移动设备”（
 `mirror`方法的参数）是分配的值（读取镜像数据）。

 ## 透明加密
启用透明客户端加密：

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

发生了什么？一个单独的“目录条目”（dirent）目录（加密）跟踪其中的文件
目录（又名dirent目录）。
 * `list`命令读取目录入口文件，解密列出的每个路径；然后返回每个文件的元数据
* `list`命令效率较低，尤其是对于文件数量较多的目录
* `write`命令递归地在每个父目录的dirent 目录中写入dirent 文件；然后写入文件
* `write`命令将导致 O(N) 次写入，其中 N = 目录层次结构中的深度
* `remove`命令递归地删除相应的dirent文件及其父文件；然后删除文件
* 非递归的`remove`命令将导致 O(N) 次读取和可能的多次删除，其中 N = 目录层次结构中的深度
* 大型和深度文件系统上的递归`remove`命令可能很昂贵

请注意，即使启用了客户端加密，对手也可以完全了解您的加密服务器端
存储，即使没有密钥，仍然可以看到目录的总数以及每个目录中有多少文件，并且与
一些努力，发现部分或全部目录层次结构的整体结构。
 *注意：使用相对扁平的结构以获得更好的安全性。*
对手不会知道目录/文件的名称，除非他们也知道您的加密
密钥或以其他方式成功破解了加密。那么所有的赌注都取消了！

 ### 性能和缓存
加密存储上的操作可能很慢。递归列表和删除可能非常缓慢。
通过 redis 进行缓存有很大帮助，但请注意缓存会在任何写入或删除时刷新。

 ## 密钥轮换
使用您的新密钥创建一个 mobiletto，然后将旧数据镜像到其中：

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ##驱动接口
驱动程序是任何使用此签名导出“storageClient”函数的 JS 文件：

    function storageClient (key, secret, opts)

 * `key` : 一个字符串，您的 API 密钥（对于`local`驱动程序，这是基本目录）
 * `secret` : 一个字符串，您的 API 密码（对于`local`驱动程序可以省略）
 * `opts` : 一个对象，属性是每个驱动程序：
 * 对于`local` ， `fileMode`和`dirMode`属性决定了如何创建新的创建文件和目录
* 对于`s3` ，需要`bucket`属性。可选属性是：
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient 函数返回的对象必须定义这些函数：

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

 ## 日志记录
Mobiletto 使用 [winston](https://www.npmjs.com/package/winston) 日志库。

日志**将**包含文件路径和错误消息，但**绝不**包含密钥、秘密、
或任何其他连接配置信息。

 ### 日志级别
使用`MOBILETTO_LOG_LEVEL`环境变量来设置日志级别，使用一个
在 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) 中定义的`npm`级别

默认级别是`error` 。最详细的级别是`silly` ，虽然目前是 mobiletto
不在`debug`以下级别登录

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### 日志文件
默认情况下，记录器写入控制台。要将日志发送到文件，请设置`MOBILETTO_LOG_FILE`
环境变量。记录到文件时，日志将不再写入控制台。

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

要关闭日志记录：

    MOBILETTO_LOG_FILE=/dev/null

</pre>
