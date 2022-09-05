모빌레토
 ==========

 Mobiletto는 선택적 투명 클라이언트 측 암호화가 있는 JavaScript 스토리지 추상화 계층입니다.

 # 내용물
 * [왜 모빌레또인가?](#왜 모빌레또인가?)
 * [빠른 시작](#빠른 시작)
 * [모빌레토 CLI](#mobiletto-cli)
 * [출처](#출처)
 * [설치](#설치)
 * [지원 및 펀딩](#지원 및 펀딩)
 * [기본사용법](#기본사용법)
 * [메타데이터](#메타데이터)
 * [대체 가져오기 스타일](#대체 가져오기 스타일)
 * [캐싱](#캐싱)
 * [미러링](#미러링)
 * [투명암호화](#투명암호화)
 * [키 회전](#키 회전)
 * [드라이버 인터페이스](#드라이버 인터페이스)
 * [로깅](#로깅)

 # 다른 언어로 읽어보세요
 이 README.md 문서는 [hokeylization](https://github.com/cobbzilla/hokeylization)을 통해 다음으로 번역되었습니다.
 **[Google 번역에서 지원하는 모든 언어](https://cloud.google.com/translate/docs/languages)!**

 나는 그것이 완벽하지 않다고 확신하지만, 없는 것보다 나을 수 있기를 바랍니다!

 [🇸🇦 아랍어](../ar/README.md)
 [🇧🇩 벵골어](../bn/README.md)
 [🇩🇪 독일어](../de/README.md)
 [🇺🇸 영어](../en/README.md)
 [🇪🇸 스페인어](../es/README.md)
 [🇫🇷 프랑스어](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 힌디어](../hi/README.md)
 [🇮🇩 인도네시아어](../id/README.md)
 [🇮🇹 이탈리아어](../it/README.md)
 [🇯🇵 일본어](../ja/README.md)
 [🇰🇷 한국어](../ko/README.md)
 [🇮🇳 마란티](../mr/README.md)
 [🇵🇱 폴란드어](../pl/README.md)
 [🇧🇷 포르투갈어](../pt/README.md)
 [🇷🇺 러시아어](../ru/README.md)
 [🇰🇪 스와힐리어](../sw/README.md)
 [🇵🇭 타갈로그어](../tl/README.md)
 [🇹🇷 터키어](../tr/README.md)
 [🇵🇰 우르두어](../ur/README.md)
 [🇻🇳 베트남어](../vi/README.md)
 [🇨🇳 중국어](../zh/README.md)


 **[📚 ... 모든 언어 ...](../README.md)**
 ----

 ### 이 README 번역에 문제가 있습니까?
 원본 [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)의 이 특정 번역
 결함이 있을 수 있음 -- *수정은 매우 환영합니다!* [GitHub에서 pull 요청](https://github.com/cobbzilla/mobiletto/pulls)을 보내주세요.
 또는 그렇게 하는 것이 편하지 않다면 [문제 열기](https://github.com/cobbzilla/mobiletto/issues)

 번역에 대한 새 GitHub 문제를 만들 때 다음을 수행하십시오.
 * 페이지 URL 포함(브라우저 주소 표시줄에서 복사/붙여넣기)
 * 잘못된 정확한 텍스트 포함(브라우저에서 복사/붙여넣기)
 * 무엇이 잘못되었는지 설명해주세요 -- 번역이 잘못되었습니까? 형식이 어떻게 든 깨졌습니까?
 * 더 나은 번역을 제안하거나 텍스트 형식을 올바르게 지정하는 방법을 알려주세요.
 * **고맙습니다!**

 ## 왜 모빌레토인가?

 ### 공급업체 종속은 이제 안녕!
 다양한 클라우드 스토리지 제공업체에는 호환되지 않는 API가 있습니다. "S3 호환성"을 추구하는 분들도
 특이한 행동을 한다.

 앱에 대한 특정 저장소 공급업체를 선택할 때 해당 API에 직접 코딩하면 앱이
 이제 해당 서비스에 종속됩니다. 시간이 흐르고 코드가 누적됨에 따라 벤더 변경은
 점점 버틸 수 없는. 벤더 종속의 재미있는 세계에 오신 것을 환영합니다!

 Mobiletto는 이 문제를 해결하기 위해 설계되었습니다. 모바일토토의 API에 앱을 코딩하면 쉽게
 저장소 공급자를 변경하고 앱의 저장소 계층이 동일하게 작동한다는 것을 알고 있습니다.

 ### 광범위한 테스트
 모든 드라이버는 각 드라이버에 대해 60개 이상의 테스트를 통해 동일한 동작을 테스트합니다.
 다음의 모든 조합으로 모든 드라이버를 테스트합니다.
 * 암호화: 활성화 및 비활성화
 * Redis 캐시: 활성화 및 비활성화

 이 접근 방식은 사용하는 드라이버에 관계없이 mobiletto가 동일하게 작동한다는 마음의 평화를 제공합니다.
 캐싱 및/또는 암호화를 활성화하는지 여부에 관계없이.

 ### 드라이버 지원
 현재 Mobiletto 스토리지 드라이버:
 * `s3` : 아마존 S3
 * `b2` : 백블레이즈 B2
 * `local` : 로컬 파일 시스템

 *더 많은 클라우드 스토리지 제공업체를 지원하기 위한 기여를 환영합니다!*

 ## 모바일토클리
 Mobiletto는 다른 JavaScript 코드에서 라이브러리로 사용하기 위한 것입니다.

 명령줄에서 mobiletto를 사용하려면 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)를 사용하세요.

 ## 원천
 * [GitHub의 모빌레토](https://github.com/cobbzilla/mobiletto)
 * [npm의 모빌레토](https://www.npmjs.com/package/mobiletto)

 ## 지원 및 자금 지원
 저는 전문 오픈 소스 소프트웨어 개발자가 되기 위해 노력하고 있습니다. 나는에서 일하고있다
 소프트웨어 업계에서 수년간 성공적인 회사를 시작하여 공기업에 매각했습니다.
 최근에 실직을 했고 다른 할 일이 없습니다.

 그래서 도움이 되는 소프트웨어를 작성하고 작동하는지 확인하려고 합니다.

 이 소프트웨어를 사용하는 것을 즐긴다면
 최소 [Patreon을 통한 월간 기부](https://www.patreon.com/cobbzilla)

 *고맙습니다!*

 ## 설치
 `npm` 또는 `yarn` 을 사용하여 설치합니다. 모든 것을 포함하지 않는 `lite` 버전을 원할 것입니다.
 번역된 README 파일:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 모든 언어로 된 README 파일을 정말로 원하면 정식 버전을 설치하십시오:

    npm install mobiletto
    yarn add mobiletto

 ## 빠른 시작
 mobiletto `s3` 드라이버를 사용한 간단한 예입니다.

 이 코드는 드라이버가 `b2` 또는 `local` 이면 동일하게 실행됩니다.

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
 ## 기본 사용법
 제공되는 대부분의 기능을 보여주는 훨씬 더 광범위한 예:

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

 ## 메타데이터
 `metadata` 명령은 단일 파일 시스템 항목에 대한 메타데이터를 반환합니다.
 마찬가지로 `list` 명령의 반환 값은 메타데이터 개체의 배열입니다.

 메타데이터 개체는 다음과 같습니다.

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` type` 속성은 `file` , `dir` , `link` 또는 `special` 일 수 있습니다.

 드라이버 유형에 따라 `list` 명령이 모든 필드를 반환하지 않을 수 있습니다. `name` 및 `type` 유형' 속성
 항상 존재해야 합니다. 후속 `metadata` 명령은 사용 가능한 모든 속성을 반환합니다.

 ## 대체 가져오기 스타일
 전체 범위 모듈을 가져 `connect` 기능을 사용합니다.

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## 캐싱
 Mobiletto는 <a href="https://redis.io">redis</a> 캐시에서 가장 잘 작동합니다.

 Mobiletto는 127.0.0.1:6379에서 redis 인스턴스에 연결을 시도합니다.

 다음 중 하나를 재정의할 수 있습니다.
 * `MOBILETTO_REDIS_HOST` env var, mobilet 설정하여 localhost 대신 여기에 연결
 * `MOBILETTO_REDIS_PORT` 환경 변수를 설정합니다. 이 포트가 사용됩니다.

 Mobiletto는 모든 redis 키를 접두사 `_mobiletto__` 로 저장합니다. 당신은 이것을 변경할 수 있습니다
 `MOBILETTO_REDIS_PREFIX` 환경 변수를 설정하여

 `opts.redisConfig` 객체를 사용하여 연결별 캐싱을 설정할 수도 있습니다.

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### redis 캐싱을 원하지 않습니까?
 비활성화하려면: 연결을 설정할 때 `opts.redisConfig` 개체에 `enabled: false` false`를 전달합니다.

 아래에서 설명하는 것처럼 캐싱을 비활성화하면 성능에 부정적인 영향을 미치고 더 많은 요청이 발생합니다.
 정말 필요한 스토리지에.

 ### 캐싱 안내
 **암호화된 저장소**: 암호화된 저장소 읽기/쓰기가 평소보다 약간 느립니다.
 그러나 디렉토리를 탐색하는 것(일부 작업이 수행함)은 상당히 비쌉니다. 레디스 캐시 사용
 상당한 성능 향상을 제공합니다.

 기본 캐시는 안전하지만 쓰기/제거 작업이 많은 경우에는 제대로 작동하지 않습니다.
 모든 쓰기 또는 제거 작업은 전체 캐시를 무효화하여 후속 읽기에서
 최신 변경 사항.

 ### CLI 도구
 [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)와 같은 CLI 도구를 사용하는 경우,
 `mo` 명령을 호출하는 동안 지속되므로 redis 캐시를 활성화해야 합니다.

 ## 미러링

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` 명령은 한 mobiletto에서 다른 mobiletto로 모든 파일의 일회성 복사를 수행합니다.
 시간이 지남에 따라 미러를 유지 관리하는 프로세스를 실행하지 않습니다. `mirror` 명령을 다시 실행하십시오.
 누락된 파일을 동기화합니다.

 `mirror` 의 반환 값은 성공적으로 성공한 파일 수에 대한 카운터가 있는 간단한 개체입니다.
 미러링된 파일 수 및 오류가 발생한 파일 수:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 경고: 대규모 데이터 세트 미러링은 시간과 대역폭을 많이 소모할 수 있습니다.

 `mirror` 호출 의미 체계를 사용하면 누가 누구인지 이해하는 것이 때때로 혼란스러울 수 있습니다.
 독자와 작가는 누구인가. "left-hand mobiletto"라는 할당문처럼 상상해보십시오.
 (미러링된 데이터 쓰기)에 할당된 것, 그리고 "오른쪽 모빌레토"(
 `mirror` 메서드에 대한 인수)는 할당되는 값입니다(미러링된 데이터를 읽음).

 ## 투명한 암호화
 투명한 클라이언트 측 암호화 활성화:

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

 무슨 일이야? 별도의 "디렉토리 항목"(디렉트) 디렉토리(암호화됨)는 해당 디렉토리에 있는 파일을 추적합니다.
 디렉토리(일명 디렉토리 디렉토리).
 * `list` 명령은 디렉토리 항목 파일을 읽고 나열된 각 경로를 해독합니다. 그런 다음 각 파일에 대한 메타데이터를 반환합니다.
 * `list` 명령은 특히 파일 수가 많은 디렉토리의 경우 더 비효율적입니다.
 * `write` 명령은 각 부모의 dirent 디렉토리에 dirent 파일을 재귀적으로 씁니다. 그런 다음 파일을 씁니다.
 * `write` 명령은 O(N) 쓰기를 발생시키며 N = 디렉토리 계층 구조의 깊이
 * `remove` 명령은 상응하는 dirent 파일을 제거하고, 비어 있으면 그 상위 파일을 재귀적으로 제거합니다. 그런 다음 파일을 제거합니다.
 * 비재귀적 `remove` 명령은 O(N) 읽기 및 잠재적으로 많은 삭제를 발생시킵니다. N = 디렉토리 계층 구조의 깊이
 * 크고 깊은 파일 시스템에서 재귀 `remove` 명령은 비용이 많이 들 수 있습니다.

 클라이언트 측 암호화가 활성화된 경우에도 공격자는 암호화된 서버 측을 완전히 볼 수 있습니다.
 스토리지는 키가 없어도 여전히 총 디렉토리 수와 각 디렉토리에 있는 파일 수를 볼 수 있습니다.
 약간의 노력을 기울이면 디렉토리 계층 구조의 전체 또는 일부를 발견할 수 있습니다.
 *참고: 더 나은 보안을 위해 비교적 평평한 구조를 사용하십시오.*
 공격자는 귀하의 암호화를 알고 있지 않는 한 디렉토리/파일의 이름을 모릅니다.
 키 또는 그렇지 않으면 암호화를 성공적으로 해독했습니다. 그러면 모든 베팅이 종료됩니다!

 ### 성능 및 캐싱
 암호화된 저장소에 대한 작업은 느릴 수 있습니다. 재귀 목록 및 제거는 매우 느릴 수 있습니다.
 redis를 통한 캐싱은 매우 도움이 되지만 캐시는 쓰기 또는 제거 시 플러시됩니다.

 ## 키 회전
 새 키로 mobiletto를 만든 다음 이전 데이터를 여기에 미러링합니다.

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## 드라이버 인터페이스
 드라이버는 다음 서명이 있는 'storageClient' 함수를 내보내는 모든 JS 파일입니다.

    function storageClient (key, secret, opts)

 * `key` : 문자열, API 키( `local` 드라이버의 경우 기본 디렉토리임)
 * `secret` : 문자열, API 비밀( `local` 드라이버의 경우 생략 가능)
 * `opts` : 객체, 속성은 드라이버별:
 * `local` 의 경우 `fileMode` 및 `dirMode` 속성에 따라 새로 생성되는 파일과 디렉토리가 생성되는 방식이 결정됩니다.
 * `s3` 의 경우 `bucket` 속성이 필요합니다. 선택적 속성은 다음과 같습니다.
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 storageClient 함수가 반환하는 객체는 다음 함수를 정의해야 합니다.

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

 ## 로깅
 Mobiletto는 [winston](https://www.npmjs.com/package/winston) 로깅 라이브러리를 사용합니다.

 로그에는 파일 경로와 오류 메시지가 **포함되지만**에는 키, 비밀,
 또는 기타 연결 구성 정보.

 ### 로그 수준
 `MOBILETTO_LOG_LEVEL` 환경 변수를 사용하여 로그 수준을 설정합니다.
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)에 정의된 `npm` 레벨

 기본 수준은 `error` 입니다. 가장 장황한 수준은 `silly` 이지만 현재는 모바일로
 `debug` 보다 낮은 수준에서는 기록하지 않습니다.

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### 로그 파일
 기본적으로 로거는 콘솔에 기록합니다. 로그를 파일로 보내려면 `MOBILETTO_LOG_FILE` 을 설정하세요.
 환경 변수. 파일에 로깅할 때 로그는 더 이상 콘솔에 기록되지 않습니다.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 로깅을 끄려면:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
