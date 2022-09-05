モビレット
=========

 Mobiletto は、オプションの透過的なクライアント側暗号化を備えた JavaScript ストレージ抽象化レイヤーです。

 ＃ コンテンツ
* [Why Mobiletto?](#Why-Mobiletto?)
 * [クイックスタート](#クイックスタート)
 * [Mobiletto CLI](#mobiletto-cli)
 * [ソース](#ソース)
 * [インストール](#インストール)
 * [支援と資金提供](#支援と資金提供)
 * [基本的な使い方](#基本的な使い方)
 * [メタデータ](#メタデータ)
 * [代替インポート スタイル](#代替インポート スタイル)
 * [キャッシング](#キャッシング)
 * [ミラーリング](#ミラーリング)
 * [透過的暗号化](#Transparent-encryption)
 * [キーローテーション](#Key-rotation)
 * [ドライバーインターフェース](#ドライバーインターフェース)
 * [ロギング](#ロギング)

 # これを別の言語で読む
この README.md ドキュメントは、[hokeylization](https://github.com/cobbzilla/hokeylization) によって翻訳されています。
 **[Google 翻訳でサポートされているすべての言語](https://cloud.google.com/translate/docs/languages)!**

完璧ではないことは確かですが、何もないよりはましだと思います!

 [🇸🇦 アラビア語](../ar/README.md)
 [🇧🇩ベンガル語](../bn/README.md)
 [🇩🇪 ドイツ語](../de/README.md)
 [🇺🇸 英語](../en/README.md)
 [🇪🇸 スペイン語](../es/README.md)
 [🇫🇷フランス語](../fr/README.md)
 [🇹🇩ハウサ](../ha/README.md)
 [🇮🇳 ヒンディー語](../hi/README.md)
 [🇮🇩 インドネシア語](../id/README.md)
 [🇮🇹 イタリア語](../it/README.md)
 [🇯🇵 日本語](../ja/README.md)
 [🇰🇷韓国語](../ko/README.md)
 [🇮🇳 マランティ](../mr/README.md)
 [🇵🇱 ポーランド語](../pl/README.md)
 [🇧🇷 ポルトガル語](../pt/README.md)
 [🇷🇺 ロシア語](../ru/README.md)
 [🇰🇪 スワヒリ語](../sw/README.md)
 [🇵🇭 タガログ語](../tl/README.md)
 [🇹🇷トルコ語](../tr/README.md)
 [🇵🇰 ウルドゥー語](../ur/README.md)
 [🇻🇳 ベトナム語](../vi/README.md)
 [🇨🇳 中国語](../zh/README.md)


 **[📚 ... すべての言語 ...](../README.md)**
 ----

 ### この README の翻訳に問題はありますか?
元の [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) の特定の翻訳
欠陥がある可能性があります -- *修正は大歓迎です!* [GitHub のプル リクエスト](https://github.com/cobbzilla/mobiletto/pulls) を送信してください。
または、それが苦手な場合は、[問題を開く](https://github.com/cobbzilla/mobiletto/issues)

翻訳に関する新しい GitHub の問題を作成する場合は、次のことを行ってください。
 * ページの URL を含めます (ブラウザのアドレス バーからコピー/貼り付け)
 * 間違っている正確なテキストを含めます (ブラウザからコピー/貼り付け)
 * 何が間違っているのか説明してください -- 翻訳は間違っていますか?どういうわけかフォーマットが壊れていますか？
 * より良い翻訳の提案、またはテキストを適切にフォーマットする方法を親切に提供してください
* **ありがとうございました！**

 ## モビレットを選ぶ理由

### さらばベンダー ロックイン!
さまざまなクラウド ストレージ プロバイダーには、互換性のない API があります。 「S3対応」を目指す方も
特異な行動をとります。

アプリに特定のストレージ ベンダーを選択するときに、そのベンダーの API に直接コーディングすると、アプリは
現在、そのサービスに依存しています。時間が経ち、コードが蓄積されるにつれて、ベンダーの変更は次のようになります。
ますます受け入れられない。ベンダーロックインの楽しい世界へようこそ！

 Mobiletto は、この問題を解決するために設計されました。アプリを mobiletto の API にコーディングすることで、簡単に
ストレージ プロバイダーを変更し、アプリのストレージ レイヤーが同じように動作することを確認してください。

 ### 広範なテスト
すべてのドライバーは、ドライバーごとに 60 以上のテストで同一の動作をテストされています。
次のすべての組み合わせですべてのドライバーをテストします。
 * 暗号化: 有効と無効の両方
* Redis キャッシュ: 有効と無効の両方

このアプローチにより、使用するドライバーに関係なく、mobiletto が同じように動作するという安心感が得られます。
キャッシュや暗号化を有効にするかどうかに関係なく。

 ### ドライバーのサポート
現在の Mobiletto ストレージ ドライバー:
 * `s3` : Amazon S3
 * `b2` : バックブレイズ B2
 * `local` : ローカル ファイルシステム

*より多くのクラウド ストレージ プロバイダーをサポートするための貢献は大歓迎です!*

 ## mobiletto-cli
 Mobiletto は、他の JavaScript コードによってライブラリとして使用されることを意図しています。

コマンドラインで mobiletto を操作するには、[mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) を使用します。

 ＃＃ ソース
* [GitHub 上のモビレット](https://github.com/cobbzilla/mobiletto)
 * [npm上のmobiletto](https://www.npmjs.com/package/mobiletto)

 ## サポートと資金提供
私はプロのオープン ソース ソフトウェア開発者になろうとしています。私はで働いています
長年ソフトウェア業界に携わってきた私は、成功した会社を立ち上げ、上場企業に売却してきました。
最近、仕事を失い、他に仕事が決まっているわけではありません

だから私は役立つソフトウェアを書いてみて、それがうまくいくかどうかを見ていきます

このソフトウェアをお楽しみいただければ、
最小 [Patreon による月間貢献](https://www.patreon.com/cobbzilla)

 *ありがとうございました！*

 ## インストール
`npm`または`yarn`を使用してインストールします。おそらく、すべてを含まない`lite`バージョンが必要です
翻訳された README ファイル:

    npm install mobiletto-lite
    yarn add mobiletto-lite

本当にすべての言語の README ファイルが必要な場合は、完全版をインストールしてください。

    npm install mobiletto
    yarn add mobiletto

 ＃＃ クイックスタート
mobiletto `s3`ドライバーを使用した短い例。

ドライバーが`b2`または`local`の場合、このコードは同じように実行されます。

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
 ## 基本的な使い方
提供される機能のほとんどを示す、より広範な例:

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

 ## メタデータ
`metadata`コマンドは、単一のファイル システム エントリに関するメタデータを返します。
同様に、 `list`コマンドからの戻り値は、メタデータ オブジェクトの配列です。

メタデータ オブジェクトは次のようになります。

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` type` プロパティは`file` 、 `dir` 、 `link`または`special`です。

ドライバの種類によっては、 `list`コマンドですべてのフィールドが返されない場合があります。 `name`および`type`プロパティ
常に存在する必要があります。後続の`metadata`コマンドは、利用可能なすべてのプロパティを返します。

 ## 別のインポート スタイル
完全にスコープ化されたモジュールをインポートし、 `connect`関数を使用します。

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## キャッシング
Mobiletto は<a href="https://redis.io">redis</a>キャッシュで最適に動作します。

 Mobiletto は 127.0.0.1:6379 で redis インスタンスへの接続を試みます

次のいずれかをオーバーライドできます。
 * `MOBILETTO_REDIS_HOST`を設定し、mobiletto は localhost の代わりにここに接続します
* `MOBILETTO_REDIS_PORT`を設定すると、このポートが使用されます

Mobiletto はすべての redis キーをプレフィックス`_mobiletto__`で保存します。これを変更できます
`MOBILETTO_REDIS_PREFIX`を設定することにより。

 `opts.redisConfig`オブジェクトを使用して、接続ごとのキャッシュを設定することもできます。

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis キャッシングが不要ですか?
無効にするには: 接続を確立するときに、 `opts.redisConfig`オブジェクトに`enabled: false` false」を渡します。

以下で説明するように、キャッシュを無効にすると、パフォーマンスに悪影響を及ぼし、より多くのリクエストが発生します。
本当に必要なストレージに。

 ### キャッシングのガイダンス
**暗号化されたストレージ**: 暗号化されたストレージの読み取り/書き込みは、通常よりわずかに遅くなります。
しかし、ディレクトリをナビゲートする (いくつかの場合) にはかなりのコストがかかります。 redis キャッシュの使用
パフォーマンスを大幅に向上させます。

デフォルトのキャッシュは安全ですが、書き込み/削除操作が多い場合はうまく機能しません。
書き込みまたは削除操作を行うと、キャッシュ全体が無効になり、後続の読み取りで確実に
最新の変更。

 ### CLI ツール
[mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) などの CLI ツールを使用している場合は、
 redis キャッシュは`mo`コマンドの呼び出し全体で持続するため、確実に有効にする必要があります。

 ## ミラーリング

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror`コマンドは、1 つの mobiletto から別の mobiletto へのすべてのファイルの 1 回限りのコピーを実行します。
時間の経過とともにミラーを維持するプロセスは実行されません。 `mirror`コマンドを再度実行します
不足しているファイルを同期します。

 `mirror`からの戻り値は、成功したファイル数のカウンターを持つ単純なオブジェクトです。
ミラーリングされ、エラーが発生したファイルの数:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

警告: 大規模なデータ セットのミラーリングは、非常に時間がかかり、帯域幅を大量に消費する可能性があります。

 `mirror`呼び出しのセマンティクスでは、誰が
読み手と書き手。割り当てステートメントのように想像してみてください: 「左手のモビレット」
は割り当てられているもの（ミラーリングされたデータが書き込まれる）であり、「右側のモビルト」（
 `mirror`メソッドの引数) は、割り当てられる値です (ミラーリングされたデータが読み取られます)。

 ## 透過的な暗号化
透過的なクライアント側暗号化を有効にします。

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

何が起こっていますか？別の「ディレクトリ エントリ」(dirent) ディレクトリ (暗号化された) は、その中にあるファイルを追跡します。
ディレクトリ (dirent ディレクトリとも呼ばれます)。
 * `list`コマンドは、ディレクトリ エントリ ファイルを読み取り、リストされた各パスを復号化します。次に、各ファイルのメタデータを返します
* `list`コマンドは、特に多数のファイルを含むディレクトリの場合、より非効率的です
* `write`コマンドは、各親の dirent ディレクトリに dirent ファイルを再帰的に書き込みます。次に、ファイルを書き込みます
* `write`コマンドは O(N) 回の書き込みを発生させます。N = ディレクトリ階層の深さ
* `remove`コマンドは、対応する dirent ファイルを削除し、空の場合はその親を再帰的に削除します。次に、ファイルを削除します
* 非再帰的な`remove`コマンドは、O(N) 回の読み取りと潜在的に同じ数の削除を発生させます (N = ディレクトリ階層の深さ)。
 * 大規模で深いファイルシステムでの再帰的な`remove`コマンドはコストがかかる可能性があります

クライアント側の暗号化が有効になっている場合でも、敵対者は暗号化されたサーバー側を完全に可視化できることに注意してください
ストレージは、キーがなくても、ディレクトリの総数とそれぞれにあるファイルの数を確認できます。
少し努力して、ディレクトリ階層の全体構造の一部またはすべてを発見してください。
 *注: セキュリティを強化するために、比較的平らな構造を使用してください。*
敵対者は、あなたの暗号化も知らない限り、ディレクトリ/ファイルの名前を知りません
キーまたは他の方法で暗号化のクラックに成功した可能性があります。その時、すべての賭けはオフです！

 ### パフォーマンスとキャッシング
暗号化されたストレージの操作は遅くなる可能性があります。再帰的なリストと削除は非常に遅くなる可能性があります。
 redis によるキャッシュは非常に役立ちますが、キャッシュは書き込みまたは削除時にフラッシュされることに注意してください。

 ## キーローテーション
新しいキーで mobiletto を作成し、古いデータをそこにミラーリングします。

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## ドライバーインターフェース
ドライバーは、次のシグネチャを使用して「storageClient」関数をエクスポートする任意の JS ファイルです。

    function storageClient (key, secret, opts)

 * `key` : 文字列、API キー ( `local`ドライバの場合、これはベース ディレクトリです)
 * `secret` : 文字列、API シークレット ( `local`ドライバでは省略可能)
 * `opts` : オブジェクト、プロパティはドライバーごとです:
 * `local`の場合、 `fileMode`および`dirMode`プロパティは、新しいファイルとディレクトリの作成方法を決定します
* `s3`の場合、 `bucket`プロパティは必須です。オプションのプロパティは次のとおりです。
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient 関数が返すオブジェクトは、次の関数を定義する必要があります。

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

 ## ロギング
Mobiletto は [winston](https://www.npmjs.com/package/winston) ロギング ライブラリを使用します。

ログにはファイル パスとエラー メッセージが含まれますが、キー、シークレット、
またはその他の接続構成情報。

 ### ログレベル
`MOBILETTO_LOG_LEVEL`環境変数を使用してログ レベルを設定します。
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels) で定義されている`npm`レベルの

デフォルトのレベルは`error`です。最も詳細なレベルは`silly`ですが、現在 mobiletto
 `debug`より下のレベルではログを記録しません

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### ログファイル
デフォルトでは、ロガーはコンソールに書き込みます。ログをファイルに送信するには、 `MOBILETTO_LOG_FILE`を設定します
環境変数。ファイルにログを記録する場合、ログはコンソールに書き込まれなくなります。

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

ロギングをオフにするには:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
