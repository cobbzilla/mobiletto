Mobiletto
 =========

 Mobiletto é uma camada de abstração de armazenamento JavaScript, com criptografia opcional transparente do lado do cliente.

 # Conteúdo
 * [Por que Mobiletto?](#Why-Mobiletto?)
 * [Início rápido](#Início rápido)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Fonte](#Fonte)
 * [Instalação](#Instalação)
 * [Suporte e Financiamento](#Suporte-e-Financiamento)
 * [Uso básico](#Uso básico)
 * [Metadados](#Metadados)
 * [Estilo de importação alternativo](#Estilo de importação alternativo)
 * [Caching](#Caching)
 * [Espelhamento](#Espelhamento)
 * [Criptografia transparente](#Transparent-encryption)
 * [Rotação de chave](#Rotação de chave)
 * [Interface de driver](#Driver-interface)
 * [Logging](#Logging)

 # Leia isso em outro idioma
 Este documento README.md foi traduzido, via [hokeylization](https://github.com/cobbzilla/hokeylization), para
 **[todos os idiomas suportados pelo Google Tradutor](https://cloud.google.com/translate/docs/languages)!**

 Tenho certeza que não é perfeito, mas espero que seja melhor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemão](../de/README.md)
 [🇺🇸 Inglês](../en/README.md)
 [🇪🇸 Espanhol](../es/README.md)
 [🇫🇷 francês](../fr/README.md)
 [🇹🇩 Hauçá](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonésio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonês](../ja/README.md)
 [🇰🇷 coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polonês](../pl/README.md)
 [🇧🇷 Português](../pt/README.md)
 [🇷🇺 russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 chinês](../zh/README.md)


 **[📚 ... Todos os Idiomas ...](../README.md)**
 ----

 ### Existe algum problema com esta tradução do README?
 Esta tradução específica do original [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 pode estar com defeito -- *correções são muito bem-vindas!* Envie uma [solicitação de pull no GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 ou se você não se sentir à vontade para fazer isso, [abra um problema](https://github.com/cobbzilla/mobiletto/issues)

 Ao criar um novo problema no GitHub sobre uma tradução, faça:
 * inclua o URL da página (copiar/colar da barra de endereços do navegador)
 * inclua o texto exato que está errado (copiar/colar do navegador)
 * por favor descreva o que está errado -- a tradução está incorreta? a formatação está quebrada de alguma forma?
 * gentilmente oferecer uma sugestão de uma tradução melhor, ou como o texto deve ser formatado corretamente
 * **Obrigada!**

 ## Por que Mobiletto?

 ### Adeus bloqueio de fornecedor!
 Os vários provedores de armazenamento em nuvem possuem APIs incompatíveis. Mesmo aqueles que buscam "compatibilidade com S3"
 têm comportamentos idiossincráticos.

 Ao escolher um fornecedor de armazenamento específico para seu aplicativo, se você codificar diretamente para a API dele, seu aplicativo
 agora depende desse serviço. À medida que o tempo passa e o código se acumula, a mudança de fornecedor torna-se
 cada vez mais insustentável. Bem-vindo ao mundo divertido do aprisionamento de fornecedores!

 Mobiletto foi projetado para resolver este problema. Ao codificar seu aplicativo para a API do mobiletto, você pode facilmente
 altere os provedores de armazenamento e saiba que a camada de armazenamento do seu aplicativo se comportará de forma idêntica.

 ### Testes extensivos
 Todos os drivers são testados para comportamento idêntico com mais de 60 testes para cada driver.
 Testamos todos os drivers com todas as combinações de:
 * Criptografia: habilitada e desabilitada
 * Cache Redis: ativado e desativado

 Essa abordagem nos dá a tranquilidade de que o mobiletto se comportará da mesma forma, independentemente de qual driver você usar,
 e independentemente de você habilitar o cache e/ou a criptografia.

 ### Suporte ao motorista
 Drivers de armazenamento Mobiletto atuais:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : sistema de arquivos local

 *Contribuições para dar suporte a mais provedores de armazenamento em nuvem são muito bem-vindas!*

 ## mobiletto-cli
 Mobiletto destina-se a ser usado como uma biblioteca por outro código JavaScript.

 Para trabalhar com mobiletto na linha de comando, use [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Fonte
 * [mobiletto no GitHub](https://github.com/cobbzilla/mobiletto)
 * [mobiletto no npm](https://www.npmjs.com/package/mobiletto)

 ## Apoio e Financiamento
 Estou tentando ser um desenvolvedor profissional de software de código aberto. eu tenho trabalhado em
 na indústria de software por muitos anos, criei empresas de sucesso e as vendi para empresas públicas.
 Recentemente eu perdi meu emprego, e eu realmente não tenho nenhum outro trabalho alinhado

 Então, vou tentar escrever um software útil e ver se isso funciona

 Se você gosta de usar este software, eu ficaria muito grato até mesmo pelo
 menor [contribuição mensal via Patreon](https://www.patreon.com/cobbzilla)

 *Obrigada!*

 ## Instalação
 Instale usando `npm` ou `yarn` . Você provavelmente quer a versão `lite` que não inclui todos os
 arquivos README traduzidos:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Se você realmente deseja os arquivos README em todos os idiomas, instale a versão completa:

    npm install mobiletto
    yarn add mobiletto

 ## Começo rápido
 Um pequeno exemplo usando o driver mobiletto `s3` .

 Este código seria executado da mesma forma se o driver fosse `b2` ou `local` .

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
 ## Uso básico
 Um exemplo muito mais extenso, mostrando a maioria dos recursos oferecidos:

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

 ## Metadados
 O comando `metadata` retorna metadados sobre uma única entrada do sistema de arquivos.
 Da mesma forma, o valor de retorno do comando `list` é uma matriz de objetos de metadados.

 Um objeto de metadados se parece com isso:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 A propriedade `type` type` pode ser `file` , `dir` `link` ou `special` .

 Dependendo do tipo de driver, um comando `list` pode não retornar todos os campos. As `name` e `type` type`
 deve estar sempre presente. Um comando `metadata` subsequente retornará todas as propriedades disponíveis.

 ## Estilo de importação alternativo
 Importe o módulo com escopo completo e use a função `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Cache
 O Mobiletto funciona melhor com um cache <a href="https://redis.io">redis</a> .

 O Mobiletto tentará se conectar a uma instância redis em 127.0.0.1:6379

 Você pode substituir qualquer um destes:
 * Defina o env var `MOBILETTO_REDIS_HOST` , mobileto conectar aqui em vez de localhost
 * Defina o env var `MOBILETTO_REDIS_PORT` , esta porta será usada

 O Mobiletto armazenará todas as suas chaves redis com o prefixo `_mobiletto__` . Você pode mudar isso
 definindo o ambiente `MOBILETTO_REDIS_PREFIX` var.

 Você também pode definir o cache por conexão com o objeto `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Não quer cache de redis?
 Para desabilitar: passe `enabled: false` em seu objeto `opts.redisConfig` quando você estabelecer sua conexão.

 Conforme discutido abaixo, desabilitar o cache terá um efeito adverso no desempenho e incorrerá em mais solicitações
 ao armazenamento que você realmente precisa.

 ### Orientação de cache
 **Armazenamento criptografado**: a leitura/gravação do armazenamento criptografado é apenas um pouco mais lenta que o normal,
 mas navegar pelos diretórios (o que algumas coisas fazem) é bastante caro. Usando um cache redis
 lhe dará um aumento significativo de desempenho.

 O cache padrão é seguro, mas não funciona bem se você tiver muitas operações de gravação/remoção.
 Qualquer operação de gravação ou remoção invalida todo o cache, garantindo que as leituras subsequentes vejam o
 últimas mudanças.

 ### Ferramentas CLI
 Se você estiver usando uma ferramenta CLI como [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 você definitivamente desejará que o cache redis esteja ativado, pois ele dura entre as invocações do comando `mo` .

 ## Espelhamento

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 O comando `mirror` executa uma cópia única de todos os arquivos de um mobiletto para outro.
 Ele não executa nenhum processo para manter o espelho ao longo do tempo. Execute o comando `mirror` novamente
 para sincronizar quaisquer arquivos ausentes.

 O valor de retorno de `mirror` é um objeto simples com contadores para quantos arquivos foram
 espelhado e quantos arquivos tiveram erros:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 AVISO: espelhar grandes conjuntos de dados pode consumir muito tempo e consumir muita largura de banda

 Com a semântica da chamada `mirror` às vezes pode ser confuso entender quem é o
 leitor e quem é o escritor. Imagine isso como uma declaração de atribuição: o "mobiletto da mão esquerda"
 é a coisa que está sendo atribuída (dados espelhados escritos), e o "mobiletto da mão direita" (o
 argumento para o método `mirror` ) é o valor que está sendo atribuído (os dados espelhados são lidos).

 ## Criptografia transparente
 Habilite a criptografia transparente do lado do cliente:

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

 O que está acontecendo? Um diretório separado de "entrada de diretório" (direto) (criptografado) rastreia quais arquivos estão nesse
 diretório (também conhecido como diretório dirent).
 * O comando `list` lê os arquivos de entrada do diretório, descriptografa cada caminho listado; em seguida, retorna metadados para cada arquivo
 * Comandos `list` são mais ineficientes, especialmente para diretórios com um grande número de arquivos
 * O comando `write` escreve arquivos dirent no diretório dirent de cada pai, recursivamente; então escreve o arquivo
 * Comandos `write` incorrerão em gravações O(N), com N = profundidade na hierarquia de diretórios
 * O comando `remove` remove o arquivo dirent correspondente, e seu pai se estiver vazio, recursivamente; em seguida, remove o arquivo
 * Comandos `remove` não recursivos incorrerão em O(N) leituras e potencialmente tantas exclusões, com N = profundidade na hierarquia de diretórios
 * Comandos recursivos `remove` em sistemas de arquivos grandes e profundos podem ser caros

 Observe que, mesmo com a criptografia do lado do cliente habilitada, um adversário com visibilidade total do seu lado do servidor criptografado
 armazenamento, mesmo sem a chave, ainda pode ver o número total de diretórios e quantos arquivos estão em cada um, e com
 algum esforço, descubra parte ou toda a estrutura geral da hierarquia de diretórios.
 *Observação: use uma estrutura relativamente plana para maior segurança.*
 O adversário não saberia os nomes dos diretórios/arquivos a menos que também conhecesse sua criptografia
 chave ou de outra forma quebrou a criptografia com sucesso. Todas as apostas estão fora então!

 ### Desempenho e cache
 As operações no armazenamento criptografado podem ser lentas. Listagens e remoções recursivas podem ser muito lentas.
 O armazenamento em cache via redis ajuda tremendamente, mas observe que o cache é liberado em qualquer gravação ou remoção.

 ## Rotação de chave
 Crie um mobiletto com sua nova chave e espelhe os dados antigos nele:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interface do driver
 Um driver é qualquer arquivo JS que exporta uma função 'storageClient' com esta assinatura:

    function storageClient (key, secret, opts)

 * `key` : uma string, sua chave de API (para o driver `local` este é o diretório base)
 * `secret` : uma string, seu segredo de API (pode ser omitido para o driver `local` )
 * `opts` : um objeto, as propriedades são por driver:
 * Para `local` , as `fileMode` e `dirMode` determinam como os novos arquivos e diretórios de criação são criados
 * Para `s3` , a propriedade `bucket` é necessária. As propriedades opcionais são:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 O objeto que a função storageClient retorna deve definir estas funções:

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

 ## Exploração madeireira
 Mobiletto usa a biblioteca de log [winston](https://www.npmjs.com/package/winston).

 Os registros **conterão** caminhos de arquivo e mensagens de erro, mas **nunca** conterão chaves, segredos,
 ou qualquer outra informação de configuração de conexão.

 ### Nível de registro
 Use a variável de ambiente `MOBILETTO_LOG_LEVEL` para definir o nível de log, usando um
 dos níveis `npm` definidos em [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 O nível padrão é `error` . O nível mais detalhado é `silly` , embora atualmente mobiletto
 não loga em níveis abaixo `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Arquivo de log
 Por padrão, o registrador grava no console. Para enviar logs para um arquivo, defina o `MOBILETTO_LOG_FILE`
 variável de ambiente. Ao fazer login em um arquivo, os logs não serão mais gravados no console.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Para desativar o registro:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
