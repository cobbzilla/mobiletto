మొబైల్టో
 =========

 Mobiletto అనేది ఐచ్ఛిక పారదర్శక క్లయింట్ వైపు ఎన్‌క్రిప్షన్‌తో కూడిన JavaScript నిల్వ సంగ్రహణ లేయర్.

 # కంటెంట్‌లు
 * [మొబైల్టో ఎందుకు?](#ఎందుకు-మొబిలెట్టో?)
 * [త్వరిత ప్రారంభం](#త్వరిత ప్రారంభం)
 * [మొబిలెట్టో CLI](#mobiletto-cli)
 * [మూలం](#మూలం)
 * [ఇన్‌స్టాలేషన్](#ఇన్‌స్టాలేషన్)
 * [మద్దతు మరియు నిధులు](#మద్దతు మరియు నిధులు)
 * [ప్రాథమిక వినియోగం](#ప్రాథమిక వినియోగం)
 * [మెటాడేటా](#మెటాడేటా)
 * [ప్రత్యామ్నాయ దిగుమతి శైలి](#Alternate-import-style)
 * [కాషింగ్](#కాషింగ్)
 * [మిర్రరింగ్](#మిర్రరింగ్)
 * [పారదర్శక ఎన్క్రిప్షన్](#పారదర్శక-ఎన్క్రిప్షన్)
 * [కీ భ్రమణం](#కీ-భ్రమణం)
 * [డ్రైవర్ ఇంటర్‌ఫేస్](#డ్రైవర్-ఇంటర్‌ఫేస్)
 * [లాగింగ్](#లాగింగ్)

 # దీన్ని వేరే భాషలో చదవండి
 ఈ README.md పత్రం [hokeylization](https://github.com/cobbzilla/hokeylization) ద్వారా అనువాదం చేయబడింది
 **[Google Translate ద్వారా మద్దతిచ్చే ప్రతి భాష](https://cloud.google.com/translate/docs/languages)!**

 ఇది ఖచ్చితమైనది కాదని నేను ఖచ్చితంగా అనుకుంటున్నాను, కానీ ఇది ఏమీ కంటే మెరుగైనదని నేను ఆశిస్తున్నాను!

 [🇸🇦 అరబిక్](../ar/README.md)
 [🇧🇩 బెంగాలీ](../bn/README.md)
 [🇩🇪 జర్మన్](../de/README.md)
 [🇺🇸 ఇంగ్లీష్](../en/README.md)
 [🇪🇸 స్పానిష్](../es/README.md)
 [🇫🇷 ఫ్రెంచ్](../fr/README.md)
 [🇹🇩 హౌసా](../ha/README.md)
 [🇮🇳 హిందీ](../hi/README.md)
 [🇮🇩 ఇండోనేషియన్](../id/README.md)
 [🇮🇹 ఇటాలియన్](../it/README.md)
 [🇯🇵 జపనీస్](../ja/README.md)
 [🇰🇷 కొరియన్](../ko/README.md)
 [🇮🇳 మరాంతి](../mr/README.md)
 [🇵🇱 పోలిష్](../pl/README.md)
 [🇧🇷 పోర్చుగీస్](../pt/README.md)
 [🇷🇺 రష్యన్](../ru/README.md)
 [🇰🇪 స్వాహిలి](../sw/README.md)
 [🇵🇭 తగలాగ్](../tl/README.md)
 [🇹🇷 టర్కిష్](../tr/README.md)
 [🇵🇰 ఉర్దూ](../ur/README.md)
 [🇻🇳 వియత్నామీస్](../vi/README.md)
 [🇨🇳 చైనీస్](../zh/README.md)


 **[📚 ... అన్ని భాషలు ...](../README.md)**
 ----

 ### README యొక్క ఈ అనువాదంలో సమస్య ఉందా?
 అసలు [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md) యొక్క ఈ ప్రత్యేక అనువాదం
 లోపభూయిష్టంగా ఉండవచ్చు -- *దిద్దుబాట్లు చాలా స్వాగతం!* దయచేసి [GitHubలో పుల్ అభ్యర్థన](https://github.com/cobbzilla/mobiletto/pulls),
 లేదా మీరు అలా చేయడం సౌకర్యంగా లేకుంటే, [సమస్యను తెరవండి](https://github.com/cobbzilla/mobiletto/issues)

 మీరు అనువాదం గురించి కొత్త GitHub సమస్యను సృష్టించినప్పుడు, దయచేసి ఇలా చేయండి:
 * పేజీ URLని చేర్చండి (బ్రౌజర్ అడ్రస్ బార్ నుండి కాపీ/పేస్ట్ చేయండి)
 * తప్పుగా ఉన్న ఖచ్చితమైన వచనాన్ని చేర్చండి (బ్రౌజర్ నుండి కాపీ/పేస్ట్ చేయండి)
 * దయచేసి తప్పు ఏమిటో వివరించండి -- అనువాదం తప్పుగా ఉందా? ఫార్మాటింగ్ ఏదో విధంగా విచ్ఛిన్నమైందా?
 * దయచేసి మెరుగైన అనువాదం లేదా వచనాన్ని ఎలా సరిగ్గా ఫార్మాట్ చేయాలి అనే సూచనను అందించండి
 * **ధన్యవాదాలు!**

 ## మొబైల్టో ఎందుకు?

 ### వీడ్కోలు విక్రేత లాక్-ఇన్!
 వివిధ క్లౌడ్ నిల్వ ప్రొవైడర్లు అననుకూల APIలను కలిగి ఉన్నారు. "S3 అనుకూలత" కోసం ప్రయత్నించే వారు కూడా
 విలక్షణమైన ప్రవర్తన కలిగి ఉంటారు.

 మీరు మీ యాప్ కోసం నిర్దిష్ట నిల్వ విక్రేతను ఎంచుకున్నప్పుడు, మీరు నేరుగా వారి APIకి, మీ యాప్‌కి కోడ్ చేస్తే
 ఇప్పుడు ఆ సేవపై ఆధారపడి ఉంది. సమయం గడిచేకొద్దీ మరియు కోడ్ పేరుకుపోవడంతో, మారుతున్న విక్రేతలు అవుతారు
 పెరుగుతున్న అసాధ్యమైనది. విక్రేత లాక్-ఇన్ యొక్క సరదా ప్రపంచానికి స్వాగతం!

 ఈ సమస్యను పరిష్కరించడానికి Mobiletto రూపొందించబడింది. మొబైల్టో APIకి మీ యాప్‌ని కోడింగ్ చేయడం ద్వారా, మీరు సులభంగా చేయవచ్చు
 స్టోరేజ్ ప్రొవైడర్‌లను మార్చండి మరియు మీ యాప్ స్టోరేజ్ లేయర్ ఒకేలా ప్రవర్తిస్తుందని తెలుసుకోండి.

 ### విస్తృతమైన పరీక్ష
 ప్రతి డ్రైవర్‌కు 60+ పరీక్షలతో ఒకే విధమైన ప్రవర్తన కోసం అన్ని డ్రైవర్‌లు పరీక్షించబడతారు.
 మేము అన్ని డ్రైవర్లను ప్రతి కలయికతో పరీక్షిస్తాము:
 * ఎన్‌క్రిప్షన్: ఎనేబుల్ మరియు డిసేబుల్ రెండూ
 * Redis కాష్: ప్రారంభించబడింది మరియు నిలిపివేయబడింది

 మీరు ఏ డ్రైవర్‌ని ఉపయోగించినా మొబైల్టో అదే విధంగా ప్రవర్తిస్తుందని ఈ విధానం మాకు మనశ్శాంతిని ఇస్తుంది,
 మరియు మీరు కాషింగ్ మరియు/లేదా ఎన్‌క్రిప్షన్‌ని ప్రారంభించాలా అనే దానితో సంబంధం లేకుండా.

 ### డ్రైవర్ మద్దతు
 ప్రస్తుత Mobiletto నిల్వ డ్రైవర్లు:
 * `s3` : Amazon S3
 * `b2` : బ్యాక్‌బ్లేజ్ B2
 * `local` : స్థానిక ఫైల్ సిస్టమ్

 *మరిన్ని క్లౌడ్ స్టోరేజ్ ప్రొవైడర్‌లకు మద్దతు ఇచ్చే సహకారాలు చాలా స్వాగతం!*

 ## mobiletto-cli
 Mobiletto ఇతర JavaScript కోడ్ ద్వారా లైబ్రరీగా ఉపయోగించడానికి ఉద్దేశించబడింది.

 కమాండ్-లైన్‌లో mobilettoతో పని చేయడానికి, [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)ని ఉపయోగించండి

 ## మూలం
 * [GitHubలో మొబైల్](https://github.com/cobbzilla/mobiletto)
 * [npmలో మొబైల్](https://www.npmjs.com/package/mobiletto)

 ## మద్దతు మరియు నిధులు
 నేను ప్రొఫెషనల్ ఓపెన్ సోర్స్ సాఫ్ట్‌వేర్ డెవలపర్‌గా ఉండటానికి ప్రయత్నిస్తున్నాను. నేను పని చేస్తున్నాను
 చాలా సంవత్సరాలుగా సాఫ్ట్‌వేర్ పరిశ్రమలో, నేను విజయవంతమైన కంపెనీలను ప్రారంభించాను మరియు వాటిని పబ్లిక్ కంపెనీలకు విక్రయించాను.
 ఇటీవల నేను నా ఉద్యోగాన్ని కోల్పోయాను మరియు నాకు వేరే పని లేదు

 కాబట్టి నేను సహాయకరమైన సాఫ్ట్‌వేర్‌ను వ్రాయడానికి ప్రయత్నిస్తాను మరియు అది పనిచేస్తుందో లేదో చూస్తాను

 మీరు ఈ సాఫ్ట్‌వేర్‌ను ఉపయోగించడం ఆనందించినట్లయితే, నేను కూడా చాలా కృతజ్ఞుడను
 అతిచిన్న [పాట్రియన్ ద్వారా నెలవారీ సహకారం](https://www.patreon.com/cobbzilla)

 *ధన్యవాదాలు!*

 ## సంస్థాపన
 `npm` లేదా `yarn` ఉపయోగించి ఇన్‌స్టాల్ చేయండి. మీరు బహుశా `lite` వెర్షన్ కావాలి
 అనువదించబడిన README ఫైల్‌లు:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 మీకు నిజంగా ప్రతి భాషలో README ఫైల్‌లు కావాలంటే, పూర్తి వెర్షన్‌ను ఇన్‌స్టాల్ చేయండి:

    npm install mobiletto
    yarn add mobiletto

 ## త్వరగా ప్రారంభించు
 mobiletto `s3` డ్రైవర్‌ని ఉపయోగించే చిన్న ఉదాహరణ.

 డ్రైవర్ `b2` లేదా `local` అయితే ఈ కోడ్ అదే విధంగా రన్ అవుతుంది.

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
 ## ప్రాథమిక వినియోగం
 మరింత విస్తృతమైన ఉదాహరణ, అందించిన చాలా లక్షణాలను చూపుతుంది:

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

 ## మెటాడేటా
 `metadata` ఆదేశం ఒకే ఫైల్‌సిస్టమ్ ఎంట్రీ గురించి మెటాడేటాను అందిస్తుంది.
 అలాగే, `list` ఆదేశం నుండి తిరిగి వచ్చే విలువ మెటాడేటా ఆబ్జెక్ట్‌ల శ్రేణి.

 మెటాడేటా ఆబ్జెక్ట్ ఇలా కనిపిస్తుంది:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 `type` రకం` ఆస్తి `file` `dir` , `link` లేదా `special` .

 డ్రైవర్ రకాన్ని బట్టి, `list` ఆదేశం అన్ని ఫీల్డ్‌లను అందించకపోవచ్చు. `name` మరియు `type` రకం` లక్షణాలు
 ఎల్లప్పుడూ ఉండాలి. తదుపరి `metadata` ఆదేశం అందుబాటులో ఉన్న అన్ని ప్రాపర్టీలను అందిస్తుంది.

 ## ప్రత్యామ్నాయ దిగుమతి శైలి
 పూర్తి-స్కోప్డ్ మాడ్యూల్‌ను దిగుమతి చేయండి మరియు `connect` ఫంక్షన్‌ను ఉపయోగించండి:

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## కాషింగ్
 Mobiletto ఒక <a href="https://redis.io">redis</a> కాష్‌తో ఉత్తమంగా పని చేస్తుంది.

 Mobiletto 127.0.0.1:6379లో redis ఉదాహరణకి కనెక్ట్ చేయడానికి ప్రయత్నిస్తుంది

 మీరు వీటిలో దేనినైనా భర్తీ చేయవచ్చు:
 * స్థానిక హోస్ట్‌కి బదులుగా ఇక్కడ కనెక్ట్ చేయడానికి `MOBILETTO_REDIS_HOST` env var, mobilettoని సెట్ చేయండి
 * `MOBILETTO_REDIS_PORT` env varని సెట్ చేయండి, ఈ పోర్ట్ ఉపయోగించబడుతుంది

 Mobiletto దాని అన్ని redis కీలను `_mobiletto__` ఉపసర్గతో నిల్వ చేస్తుంది. మీరు దీన్ని మార్చవచ్చు
 `MOBILETTO_REDIS_PREFIX` env varని సెట్ చేయడం ద్వారా.

 మీరు `opts.redisConfig` ఆబ్జెక్ట్‌తో ప్రతి-కనెక్షన్ కాషింగ్‌ను కూడా సెట్ చేయవచ్చు:

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### రీడిస్ కాషింగ్ అక్కర్లేదా?
 నిలిపివేయడానికి: మీరు మీ కనెక్షన్‌ని స్థాపించినప్పుడు మీ `opts.redisConfig` ఆబ్జెక్ట్‌లో `enabled: false` తప్పు`ని పాస్ చేయండి.

 క్రింద చర్చించినట్లుగా, కాషింగ్‌ని నిలిపివేయడం వలన పనితీరుపై ప్రతికూల ప్రభావం ఉంటుంది మరియు మరిన్ని అభ్యర్థనలు వస్తాయి
 మీరు నిజంగా అవసరమైన నిల్వకు.

 ### కాషింగ్ మార్గదర్శకం
 **ఎన్‌క్రిప్టెడ్ స్టోరేజ్**: ఎన్‌క్రిప్టెడ్ స్టోరేజ్ చదవడం/వ్రాయడం సాధారణం కంటే కొంచెం నెమ్మదిగా ఉంటుంది,
 కానీ డైరెక్టరీల చుట్టూ నావిగేట్ చేయడం (కొన్ని విషయాలు చేసేవి) చాలా ఖరీదైనది. redis కాష్‌ని ఉపయోగించడం
 మీకు గణనీయమైన పనితీరును పెంచుతుంది.

 డిఫాల్ట్ కాష్ సురక్షితమైనది, కానీ మీరు చాలా వ్రాత/తొలగింపు కార్యకలాపాలను కలిగి ఉంటే బాగా పని చేయదు.
 ఏదైనా వ్రాయడం లేదా తీసివేయడం అనేది మొత్తం కాష్‌ని చెల్లుబాటు కాకుండా చేస్తుంది, తదుపరి రీడ్‌లు చూస్తాయని నిర్ధారిస్తుంది
 తాజా మార్పులు.

 ### CLI సాధనాలు
 మీరు [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli) వంటి CLI సాధనాన్ని ఉపయోగిస్తుంటే,
 మీరు ఖచ్చితంగా redis కాష్ ప్రారంభించబడాలని కోరుకుంటారు, ఎందుకంటే ఇది `mo` కమాండ్ యొక్క ఆహ్వానాలలో ఉంటుంది.

 ## ప్రతిబింబించడం

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 `mirror` కమాండ్ అన్ని ఫైల్‌ల యొక్క ఒక-పర్యాయ కాపీని ఒక మొబైల్ నుండి మరొక మొబైల్‌కి నిర్వహిస్తుంది.
 కాలక్రమేణా అద్దాన్ని నిర్వహించడానికి ఇది ఏ ప్రక్రియను అమలు చేయదు. `mirror` ఆదేశాన్ని మళ్లీ అమలు చేయండి
 ఏదైనా తప్పిపోయిన ఫైల్‌లను సమకాలీకరించడానికి.

 `mirror` నుండి రిటర్న్ విలువ అనేది ఎన్ని ఫైల్‌లు విజయవంతంగా జరిగిందనే దాని కోసం కౌంటర్‌లతో కూడిన సాధారణ వస్తువు
 ప్రతిబింబించబడింది మరియు ఎన్ని ఫైళ్లలో లోపాలు ఉన్నాయి:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 హెచ్చరిక: పెద్ద డేటా సెట్‌లను ప్రతిబింబించడం చాలా సమయం తీసుకుంటుంది మరియు బ్యాండ్‌విడ్త్-ఇంటెన్సివ్ అవుతుంది

 `mirror` కాల్ సెమాంటిక్స్‌తో అది ఎవరో అర్థం చేసుకోవడానికి కొన్నిసార్లు గందరగోళంగా ఉంటుంది
 పాఠకుడు మరియు రచయిత ఎవరు. ఇది ఒక అసైన్‌మెంట్ స్టేట్‌మెంట్ లాగా ఊహించుకోండి: "ఎడమ చేతి మొబైల్టో"
 (మిర్రర్డ్ డేటా వ్రాయబడినది) మరియు "కుడి చేతి మొబైల్టో" (ది
 `mirror` పద్ధతికి వాదన) కేటాయించబడిన విలువ (మిర్రర్ డేటా చదవబడుతుంది).

 ## పారదర్శక ఎన్క్రిప్షన్
 పారదర్శక క్లయింట్ వైపు గుప్తీకరణను ప్రారంభించండి:

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

 ఏం జరుగుతోంది? ప్రత్యేక "డైరెక్టరీ ఎంట్రీ" (డైరెంట్) డైరెక్టరీ (ఎన్‌క్రిప్టెడ్) అందులో ఏ ఫైల్‌లు ఉన్నాయో ట్రాక్ చేస్తుంది
 డైరెక్టరీ (అకా డైరెంట్ డైరెక్టరీ).
 * `list` ఆదేశం డైరెక్టరీ ఎంట్రీ ఫైల్‌లను రీడ్ చేస్తుంది, జాబితా చేయబడిన ప్రతి మార్గాన్ని డీక్రిప్ట్ చేస్తుంది; ఆపై ప్రతి ఫైల్ కోసం మెటాడేటాను అందిస్తుంది
 * `list` కమాండ్‌లు మరింత అసమర్థంగా ఉంటాయి, ప్రత్యేకించి పెద్ద సంఖ్యలో ఫైల్‌లు ఉన్న డైరెక్టరీల కోసం
 * `write` కమాండ్ ప్రతి పేరెంట్ డైరెంట్ డైరెక్టరీలో డైరెంట్ ఫైల్‌లను రికర్సివ్‌గా వ్రాస్తుంది; అప్పుడు ఫైల్ వ్రాస్తుంది
 * `write` ఆదేశాలు డైరెక్టరీ సోపానక్రమంలో N = డెప్త్‌తో O(N) వ్రాతలను కలిగి ఉంటాయి
 * `remove` ఆదేశం సంబంధిత డైరెంట్ ఫైల్‌ను మరియు దాని పేరెంట్ ఖాళీగా ఉంటే, పునరావృతంగా తొలగిస్తుంది; అప్పుడు ఫైల్‌ను తొలగిస్తుంది
 * నాన్-రికర్సివ్ `remove` అనేక తొలగింపులను కలిగి ఉంటాయి
 * పెద్ద మరియు లోతైన ఫైల్‌సిస్టమ్‌లలో పునరావృత `remove` ఆదేశాలు ఖరీదైనవి కావచ్చు

 క్లయింట్-సైడ్ ఎన్‌క్రిప్షన్ ప్రారంభించబడినప్పటికీ, మీ ఎన్‌క్రిప్టెడ్ సర్వర్-సైడ్‌లో పూర్తి దృశ్యమానతతో విరోధి అని గమనించండి
 నిల్వ, కీ లేకుండా కూడా, ఇప్పటికీ డైరెక్టరీల మొత్తం సంఖ్యను మరియు ప్రతి దానిలో ఎన్ని ఫైల్‌లు ఉన్నాయో మరియు వాటితో చూడవచ్చు
 కొంత ప్రయత్నం, డైరెక్టరీ సోపానక్రమం యొక్క మొత్తం నిర్మాణాన్ని కొంత లేదా అన్నింటినీ కనుగొనండి.
 *గమనిక: మెరుగైన భద్రత కోసం సాపేక్షంగా ఫ్లాట్ నిర్మాణాన్ని ఉపయోగించండి.*
 ప్రత్యర్థికి మీ ఎన్‌క్రిప్షన్ తెలియకపోతే డైరెక్టరీలు/ఫైళ్ల పేర్లు తెలియవు
 కీ లేదా లేకపోతే ఎన్‌క్రిప్షన్‌ను విజయవంతంగా క్రాక్ చేసింది. అప్పుడు అన్ని పందాలు నిలిపివేయబడ్డాయి!

 ### పనితీరు మరియు కాషింగ్
 గుప్తీకరించిన నిల్వపై కార్యకలాపాలు నెమ్మదిగా ఉండవచ్చు. పునరావృత జాబితాలు మరియు తొలగింపులు చాలా నెమ్మదిగా ఉంటాయి.
 redis ద్వారా కాషింగ్ అద్భుతంగా సహాయపడుతుంది, అయితే ఏదైనా వ్రాసిన లేదా తీసివేసినప్పుడు కాష్ ఫ్లష్ చేయబడుతుందని గమనించండి.

 ## కీ రొటేషన్
 మీ కొత్త కీతో మొబైల్‌టోని సృష్టించండి, ఆపై పాత డేటాను ప్రతిబింబించండి:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## డ్రైవర్ ఇంటర్‌ఫేస్
 డ్రైవర్ ఈ సంతకంతో 'స్టోరేజ్ క్లయింట్' ఫంక్షన్‌ను ఎగుమతి చేసే ఏదైనా JS ఫైల్:

    function storageClient (key, secret, opts)

 * `key` : స్ట్రింగ్, మీ API కీ ( `local` డ్రైవర్ కోసం ఇది బేస్ డైరెక్టరీ)
 * `secret` : స్ట్రింగ్, మీ API రహస్యం ( `local` డ్రైవర్ కోసం విస్మరించవచ్చు)
 * `opts` : ఒక వస్తువు, లక్షణాలు ఒక్కో డ్రైవర్‌కు ఉంటాయి:
 * `local` కోసం, `fileMode` మరియు `dirMode` లక్షణాలు కొత్త క్రియేట్ ఫైల్‌లు మరియు డైరెక్టరీలను ఎలా సృష్టించాలో నిర్ణయిస్తాయి
 * `s3` కోసం, `bucket` ప్రాపర్టీ అవసరం. ఐచ్ఛిక లక్షణాలు:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 స్టోరేజీ క్లయింట్ ఫంక్షన్ తిరిగి ఇచ్చే ఆబ్జెక్ట్ తప్పనిసరిగా ఈ ఫంక్షన్‌లను నిర్వచించాలి:

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

 ## లాగింగ్
 Mobiletto [winston](https://www.npmjs.com/package/winston) లాగింగ్ లైబ్రరీని ఉపయోగిస్తుంది.

 లాగ్‌లు **ఫైల్ పాత్‌లు మరియు ఎర్రర్ మెసేజ్‌లను కలిగి ఉంటాయి, కానీ **ఎప్పటికీ** కీలు, రహస్యాలు,
 లేదా ఏదైనా ఇతర కనెక్షన్ కాన్ఫిగరేషన్ సమాచారం.

 ### లాగ్ స్థాయి
 ఒకదాన్ని ఉపయోగించి లాగ్ స్థాయిని సెట్ చేయడానికి `MOBILETTO_LOG_LEVEL` ఎన్విరాన్మెంట్ వేరియబుల్ ఉపయోగించండి
 [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)లో నిర్వచించబడిన `npm` స్థాయిలు

 డిఫాల్ట్ స్థాయి `error` . ప్రస్తుతం మొబైల్‌టోగా ఉన్నప్పటికీ, అత్యంత పదజాలం స్థాయి `silly` సిల్లీ`
 `debug` కంటే తక్కువ స్థాయిలలో లాగిన్ అవ్వదు

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### లాగ్ ఫైల్
 డిఫాల్ట్‌గా, లాగర్ కన్సోల్‌కు వ్రాస్తుంది. ఫైల్‌కి లాగ్‌లను పంపడానికి, `MOBILETTO_LOG_FILE` సెట్ చేయండి
 పర్యావరణం వేరియబుల్. ఫైల్‌కి లాగిన్ చేసినప్పుడు, లాగ్‌లు ఇకపై కన్సోల్‌కు వ్రాయబడవు.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 లాగింగ్‌ను ఆఫ్ చేయడానికి:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
