Soghluaiste
 ========

 Is ciseal astarraingthe stórála JavaScript é Mobiletto, le criptiúchán trédhearcach roghnach ar thaobh an chliaint.

 # Ábhar
 * [Cén fáth Mobiletto?](#Why-Mobiletto?)
 * [Tús tapa](#Quick-tús)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Foinse](#Foinse)
 * [Suiteáil](#Suiteáil)
 * [Tacaíocht agus Maoiniú](#Tacaíocht-agus-Maoiniú)
 * [Úsáid bhunúsach](#Basic-use)
 * [Meiteashonraí](# Meiteashonraí)
 * [Stíl mhalartach iompórtála](# Malartach-stíl iompórtála)
 * [Taisce](#Taisce)
 * [Scáthán](#Scáthán)
 * [Criptiúchán trédhearcach](#Trédhearcach-criptiú)
 * [Eochair-uainíocht](#Eochair-uainíocht)
 * [Comhéadan tiománaí](# comhéadan tiománaí)
 * [Logáil](#Logáil)

 # Léigh é seo i dteanga eile
 Aistríodh an doiciméad README.md seo, trí [hokeylization](https://github.com/cobbzilla/hokeylization), go
 **[gach teanga a dtacaíonn Google Translate léi]( https://cloud.google.com/translate/docs/languages)!**

 Tá mé cinnte nach bhfuil sé foirfe, ach tá súil agam go bhfuil sé níos fearr ná rud ar bith!

 [🇸🇦 Araibis](../ar/README.md)
 [🇧🇩 Beangáilis](../bn/README.md)
 [🇩🇪 Gearmáinis](../de/README.md)
 [🇺🇸 Béarla](../ga/README.md)
 [🇪🇸 Spáinnis](../es/README.md)
 [🇫🇷 Fraincis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hiondúis](../hi/README.md)
 [🇮🇩 Indinéisis](../id/README.md)
 [🇮🇹 Iodáilis](../it/README.md)
 [🇯🇵 Seapáinis](../ja/README.md)
 [🇰🇷 Cóiréis](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polainnis](../pl/README.md)
 [🇧🇷 Portaingéilis](../pt/README.md)
 [🇷🇺 Rúisis](../ru/README.md)
 [🇰🇪 Svahaílis](../sw/README.md)
 [🇵🇭 Tagálaigis](../tl/README.md)
 [🇹🇷 Tuircis](../tr/README.md)
 [🇵🇰 Urdais](../ur/README.md)
 [🇻🇳 Vítneamais](../vi/README.md)
 [🇨🇳 Sínis](../zh/README.md)


 **[📚 ... Gach Teanga ...](../README.md)**
 ----

 ### An bhfuil fadhb leis an aistriúchán seo ar an README?
 An t-aistriúchán áirithe seo ar an mbunleagan [README]( https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 seans go bhfuil sé lochtach -- *tá fáilte mhór roimh cheartúcháin!* Seol [iarratas tarraingthe ar GitHub](https://github.com/cobbzilla/mobiletto/pulls), le do thoil.
 nó mura bhfuil tú compordach é sin a dhéanamh, [oscail ceist]( https://github.com/cobbzilla/mobiletto/issues)

 Nuair a chruthaíonn tú saincheist nua GitHub faoi aistriúchán, déan:
 * cuir isteach URL an leathanaigh (cóipeáil/greamaigh ó bharra seoltaí an bhrabhsálaí)
 * cuir isteach an téacs cruinn atá mícheart (cóipeáil/greamaigh ón mbrabhsálaí)
 * Déan cur síos le do thoil ar a bhfuil mícheart -- an bhfuil an t-aistriúchán mícheart? an bhfuil an fhormáidiú briste ar bhealach éigin?
 * go cineálta moladh a thabhairt faoi aistriúchán níos fearr, nó conas is ceart an téacs a fhormáidiú i gceart
 * **Go raibh maith agat!**

 ## Cén fáth Mobiletto?

 ### Slán glasáil isteach an díoltóra!
 Tá APIanna neamh-chomhoiriúnacha ag na soláthraithe stórála scamall éagsúla. Fiú amháin iad siúd atá ag iarraidh "comhoiriúnacht S3"
 iompraíochtaí uathúla a bheith agat.

 Nuair a roghnaíonn tú díoltóir stórála ar leith do d’aip, má chódaíonn tú go díreach chuig a n-API, d’aip
 ag brath ar an tseirbhís sin anois. De réir mar a théann an t-am thart agus an cód ag carnadh, éiríonn díoltóirí ag athrú
 ag éirí dochosanta. Fáilte chuig an saol spraoi a bhaineann le glasáil díoltóirí!

 Dearadh Mobiletto chun an fhadhb seo a réiteach. Trí d'aip a chódú chuig API mobiletto, is féidir leat go héasca
 athraigh soláthraithe stórála agus bíodh a fhios agat go n-iompróidh ciseal stórála d'aip mar an gcéanna.

 ### Tástáil fhairsing
 Déantar tástáil ar gach tiománaí le haghaidh iompraíochta comhionann le 60+ tástáil do gach tiománaí.
 Déanaimid tástáil ar gach tiománaí le gach meascán de:
 * Criptiú: cumasaithe agus díchumasaithe araon
 * Taisce Redis: cumasaithe agus díchumasaithe araon

 Tugann an cur chuige seo suaimhneas intinne dúinn go n-iompróidh mobiletto mar an gcéanna is cuma cén tiománaí a úsáideann tú,
 agus is cuma má chumasaíonn tú taisceadh agus/nó criptiú.

 ### Tacaíocht tiománaí
 Tiománaithe stórála Mobiletto reatha:
 * `s3` : Amazon S3
 * `b2` : Cúlbhrat B2
 * `local` : córas comhaid áitiúil

 *Tá fáilte mhór roimh ranníocaíochtaí chun tacú le níos mó soláthraithe stórála scamall!*

 ## mobiletto-cli
 Tá sé beartaithe Mobiletto a úsáid mar leabharlann le cód JavaScript eile.

 Chun oibriú le mobiletto ag an líne ordaithe, úsáid [mobiletto-cli]( https://www.npmjs.com/package/mobiletto-cli)

 ## Foinse
 * [mobiletto ar GitHub]( https://github.com/cobbzilla/mobiletto)
 * [mobiletto ar npm]( https://www.npmjs.com/package/mobiletto)

 ## Tacaíocht agus Maoiniú
 Tá mé ag iarraidh a bheith i mo fhorbróir bogearraí foinse oscailte gairmiúil. Tá mé ag obair i
 an tionscal bogearraí le blianta fada anuas, tá cuideachtaí rathúla tosaithe agam agus dhíol mé iad le cuideachtaí poiblí.
 Chaill mé mo phost le déanaí, agus níl aon obair eile ar bun agam i ndáiríre

 Mar sin táim chun iarracht a dhéanamh bogearraí cabhrach a scríobh agus féachaint an n-oibríonn sin

 Má bhaineann tú taitneamh as na bogearraí seo a úsáid, bheinn an-bhuíoch as fiú an
 [ranníocaíocht mhíosúil trí Patreon](https://www.patreon.com/cobbzilla)

 *Go raibh maith agat!*

 ## Suiteáil
 Suiteáil ag baint úsáide as `npm` nó `yarn` . Is dócha gur mhaith leat an leagan `lite` nach n-áirítear go léir an
 comhaid README aistrithe:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Más mian leat na comhaid README i ngach teanga, suiteáil an leagan iomlán:

    npm install mobiletto
    yarn add mobiletto

 ## Tús Tapa
 Sampla gairid ag baint úsáide as an tiománaí `s3` .

 Rithfeadh an cód seo mar an gcéanna dá mba `b2` nó `local` an tiománaí.

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
 ## Bunúsáid
 Sampla i bhfad níos fairsinge, ag taispeáint an chuid is mó de na gnéithe a thairgtear:

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

 ## Meiteashonraí
 Tugann an t-ordú `metadata` ar ais maidir le hiontráil chóras comhad amháin.
 Ar an gcaoi chéanna, is raon de réada meiteashonraí an luach tuairisceáin ón ordú `list` .

 Breathnaíonn réad meiteashonraí mar seo:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Is féidir an t-airí `type` a bheith mar `file` , `dir` , `link` , nó `special` .

 Ag brath ar an gcineál tiománaí, ní fhéadfaidh ordú `list` gach réimse a thabhairt ar ais. Na hairíonna `name` agus `type`
 chóir a bheith i láthair i gcónaí. Tabharfaidh ordú `metadata` ina dhiaidh sin na hairíonna go léir atá ar fáil ar ais.

 ## Stíl iompórtála mhalartach
 Iompórtáil an modúl lánscóip agus úsáid an fheidhm `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Taisce
 Is fearr a oibríonn Mobiletto le taisce <a href="https://redis.io">redis</a> .

 Déanfaidh Mobiletto iarracht ceangal a dhéanamh le heisiamh redis ar 127.0.0.1:6379

 Is féidir leat ceachtar díobh seo a shárú:
 * Socraigh an `MOBILETTO_REDIS_HOST` var, mobiletto connect anseo in ionad localhost
 * Socraigh an `MOBILETTO_REDIS_PORT` var, úsáidfear an port seo

 Stórálfaidh Mobiletto a chuid eochracha redis go léir leis an réimír `_mobiletto__` . Is féidir leat é seo a athrú
 tríd an `MOBILETTO_REDIS_PREFIX` var.

 Is féidir leat taisce in aghaidh an naisc a shocrú freisin leis an réad `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Níl tú ag iarraidh taisceadh redis?
 Chun é a dhíchumasú: pas `enabled: false` i do réad `opts.redisConfig` nuair a bhunaíonn tú do nasc.

 Mar a phléitear thíos, beidh drochthionchar ag baint le taisceadh a dhíchumasú ar fheidhmíocht agus tabhófar tuilleadh iarratas
 a stóráil gur gá duit i ndáiríre.

 ### Treoir caching
 **Stóráil criptithe**: níl an stóráil chriptithe léitheoireachta/scríofa ach beagán níos moille ná mar is gnách,
 ach tá sé costasach go leor dul timpeall ar eolairí (a dhéanann roinnt rudaí). Ag baint úsáide as redis cache
 tabharfaidh sé borradh feidhmíochta suntasach duit.

 Tá an taisce réamhshocraithe sábháilte, ach ní fheidhmíonn sé go maith má tá go leor oibríochtaí scríofa/bainte agat.
 Déanann aon oibríocht scríofa nó bain an taisce iomlán neamhbhailí, ag cinntiú go bhfeicfidh léamha ina dhiaidh sin an taisce
 athruithe is déanaí.

 ### uirlisí CLI
 Má tá uirlis CLI in úsáid agat mar [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 Is cinnte go mbeidh tú ag iarraidh go mbeidh an taisce redis cumasaithe, mar go maireann sé trasna agairt an ordú `mo` .

 ##Scáthánú

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Feidhmíonn an t-ordú `mirror` cóip aonuaire de na comhaid go léir ó mobileto amháin go ceann eile.
 Ní reáchtálann sé aon phróiseas chun an scáthán a chothabháil le himeacht ama. Rith an t-ordú `mirror` arís
 chun aon chomhaid atá in easnamh a shioncronú.

 Is réad simplí é an luach aischuir ó `mirror` le cuntair le haghaidh cé mhéad comhad a d'éirigh leo
 léirithe agus cé mhéad comhad a raibh earráidí ann:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 RABHADH: Féadann sé go leor ama agus bandaleithead a bheith ag baint le scáthánú tacair shonraí mhóra

 Leis an nglao shéimeantach `mirror` sé mearbhall a chur uaireanta a thuiscint cé hé an
 léitheoir agus cé hé an scríbhneoir. Samhlaigh go bhfuil sé cosúil le ráiteas sannacháin: an "soghluaistetto láimhe clé"
 an rud atá á shannadh do (sonraí scáthaithe scríofa), agus an “soghluaistetto láimhe deise” (an
 argóint leis an modh `mirror` ) an luach atá á sannadh (léamh sonraí scáthánaithe).

 ## Criptiú trédhearcach
 Cumasaigh criptiúchán trédhearcach ar thaobh an chliaint:

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

 Cad atá ag tarlú? Rianaíonn eolaire ar leith “iontráil eolaire” (díreach) (criptithe) cad iad na comhaid atá ann
 eolaire (aka an eolaire díreach).
 * Léann an t-ordú `list` na comhaid iontrála eolaire, díchriptigh gach cosán atá liostaithe; ansin cuireann sé meiteashonraí ar ais do gach comhad
 * Tá orduithe `list` níos mí-éifeachtach, go háirithe i gcás eolairí a bhfuil líon mór comhad acu
 * Scríobhann an t-ordú `write` scríobh` comhaid dhíreacha i gcomhadlann dhírigh gach tuismitheora, go hathchúrsach; ansin scríobhann an comhad
 *Tabhóidh O(N) orduithe `write` , le N = doimhneacht san ordlathas eolaire
 * Baineann an t-ordú `remove` an comhad díreach comhfhreagrach, agus má tá a thuismitheoir folamh, go hathchúrsach; ansin bain an comhad
 * `remove` neamh-athfhillteacha léite O(N) agus b'fhéidir an oiread scriosadh, le N = doimhneacht san ordlathas eolaire
 * D’fhéadfadh orduithe `remove` athchúrsacha ar chórais comhaid mhóra agus dhomhain a bheith costasach

 Tabhair faoi deara, fiú agus criptiúchán ar thaobh an chliaint cumasaithe, go bhfuil ionsaitheoir lán-infheictheachta ar thaobh do fhreastalaí criptithe
 stórála, fiú gan an eochair, is féidir a fheiceáil fós ar an líon iomlán na n-eolairí agus cé mhéad comhad atá i ngach, agus le
 iarracht éigin, faigh amach ar struchtúr iomlán an ordlathais eolaire, nó cuid de.
 *Tabhair faoi deara: Bain úsáid as struchtúr measartha réidh le haghaidh slándála níos fearr.*
 Ní bheadh ainmneacha na n-eolaire/comhad ar eolas ag an sáraí mura raibh do chriptiú ar eolas acu freisin
 eochair nó gur éirigh leis an criptiúchán a scoilteadh. Tá gach geallta as sin!

 ### Feidhmíocht agus taisceadh
 Is féidir le hoibríochtaí ar stóráil criptithe a bheith mall. Is féidir le liostaí athfhillteacha agus aistrithe a bheith an-mhall.
 Cabhraíonn taisceadh trí redis go mór, ach tabhair faoi deara go ndéantar an taisce a shruthlú ar aon scríobh nó a bhaintear.

 ## Rothlú eochair
 Cruthaigh mobiletto le d'eochair nua, ansin déan na seansonraí a scáthánú isteach ann:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## comhéadan tiománaí
 Is ionann tiománaí agus aon chomhad JS a easpórtálann feidhm ‘storageClient’ leis an síniú seo:

    function storageClient (key, secret, opts)

 * `key` : teaghrán, d'eochair API (don tiománaí `local` is é seo an bunchomhadlann)
 * `secret` : teaghrán, do rún API (is féidir é a fhágáil ar lár don tiománaí `local` )
 * `opts` : réad, is iad na hairíonna in aghaidh an tiománaí:
 * I gcás `local` , socraíonn na `fileMode` agus `dirMode` conas a chruthaítear comhaid agus eolairí nuachruthaithe
 * Le haghaidh `s3` , tá an mhaoin `bucket` ag teastáil. Is iad na hairíonna roghnacha:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Caithfidh an réad a thugann an fheidhm storageClient ar ais na feidhmeanna seo a shainiú:

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

 ## Logáil
 Úsáideann Mobiletto leabharlann logála [winston](https://www.npmjs.com/package/winston).

 Beidh conairí comhaid agus teachtaireachtaí earráide i logaí**, ach **ní bheidh eochracha, rúin,
 nó aon fhaisnéis chumraíochta ceangail eile.

 ### Leibhéal logála
 Úsáid an athróg timpeallachta `MOBILETTO_LOG_LEVEL` chun an leibhéal loga a shocrú, ag baint úsáide as ceann amháin
 de na leibhéil `npm` atá sainmhínithe i [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Is é an leibhéal réamhshocraithe ná `error` . Is é an leibhéal is briathartha ná `silly` , cé go mobiletto faoi láthair
 ní logálann sé ag leibhéil faoi bhun `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Logchomhad
 De réir réamhshocraithe, scríobhann an logálaí chuig an consól. Chun logs a sheoladh chuig comhad, socraigh `MOBILETTO_LOG_FILE`
 athróg timpeallachta. Nuair a bheidh tú ag logáil isteach i gcomhad, ní scríobhfar logaí chuig an consól a thuilleadh.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Chun logáil a mhúchadh:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
