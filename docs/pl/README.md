Mobiletto
 ==========

 Mobileetto to warstwa abstrakcji pamięci masowej JavaScript z opcjonalnym przezroczystym szyfrowaniem po stronie klienta.

 # Zawartość
 * [Dlaczego Mobiletto?](#Dlaczego Mobiletto?)
 * [Szybki start](#Szybki start)
 * [Mobiletto CLI](#mobiletto-cli)
 * [Źródło](#Źródło)
 * [Instalacja](#Instalacja)
 * [Wsparcie i finansowanie](#Wsparcie i finansowanie)
 * [Podstawowe zastosowanie](#Podstawowe użycie)
 * [Metadane](#Metadane)
 * [Alternatywny styl importu](#Alternatywny styl importu)
 * [Buforowanie](#Buforowanie)
 * [Odbicie lustrzane](#Odbicie lustrzane)
 * [Przezroczyste szyfrowanie](#Transparent-encryption)
 * [Rotacja klawiszy](# Rotacja klawiszy)
 * [Interfejs sterownika](#Interfejs sterownika)
 * [Logowanie](#Logowanie)

 # Przeczytaj to w innym języku
 Ten dokument README.md został przetłumaczony przez [hokeylization](https://github.com/cobbzilla/hokeylization) na
 **[każdy język obsługiwany przez Tłumacza Google](https://cloud.google.com/translate/docs/languages)!**

 Jestem pewien, że nie jest idealny, ale mam nadzieję, że to lepsze niż nic!

 [🇸🇦 Arabski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 Niemiecki](../de/README.md)
 [🇺🇸 Polski](../en/README.md)
 [🇪🇸 Hiszpański](../es/README.md)
 [🇫🇷 Francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonezyjski](../id/README.md)
 [🇮🇹 Włoski](../it/README.md)
 [🇯🇵 Japoński](../ja/README.md)
 [🇰🇷 Koreański](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polski](../pl/README.md)
 [🇧🇷 Portugalski](../pt/README.md)
 [🇷🇺 Rosyjski](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turecki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Wietnamski](../vi/README.md)
 [🇨🇳 chiński](../zh/README.md)


 **[📚 ... Wszystkie języki ...](../README.md)**
 ----

 ### Czy jest jakiś problem z tym tłumaczeniem README?
 To konkretne tłumaczenie oryginału [README](https://github.com/cobbzilla/mobiletto/blob/master/README.md)
 może być błędny -- *poprawki są mile widziane!* Wyślij [proszę o ściągnięcie na GitHub](https://github.com/cobbzilla/mobiletto/pulls),
 lub jeśli nie czujesz się z tym komfortowo, [otwórz zgłoszenie](https://github.com/cobbzilla/mobiletto/issues)

 Tworząc nowy problem na GitHubie dotyczący tłumaczenia, wykonaj następujące czynności:
 * dołącz adres URL strony (skopiuj/wklej z paska adresu przeglądarki)
 * dołącz dokładny tekst, który jest błędny (skopiuj/wklej z przeglądarki)
 * proszę opisać co jest nie tak - czy tłumaczenie jest niepoprawne? czy formatowanie jest jakoś zepsute?
 * uprzejmie zasugeruj lepsze tłumaczenie, czyli jak tekst powinien być odpowiednio sformatowany
 * **Dziękuję Ci!**

 ## Dlaczego Mobiletto?

 ### Pożegnaj się z uzależnieniem od dostawcy!
 Różni dostawcy przechowywania w chmurze mają niezgodne interfejsy API. Nawet ci, którzy dążą do „zgodności z S3”
 mieć idiosynkratyczne zachowania.

 Gdy wybierzesz konkretnego dostawcę pamięci masowej dla swojej aplikacji, jeśli kodujesz bezpośrednio do jego interfejsu API, Twoja aplikacja
 jest teraz zależny od tej usługi. W miarę upływu czasu i kumulacji kodu, zmienianie dostawców staje się
 coraz bardziej nie do utrzymania. Witamy w zabawnym świecie uzależnienia od dostawcy!

 Mobiletto został zaprojektowany, aby rozwiązać ten problem. Kodując swoją aplikację do API mobiletto, możesz łatwo
 zmień dostawców pamięci masowej i wiedz, że warstwa pamięci Twojej aplikacji będzie zachowywać się identycznie.

 ### Obszerne testy
 Wszyscy kierowcy są testowani pod kątem identycznego zachowania z 60+ testami dla każdego kierowcy.
 Testujemy wszystkich kierowców z każdą kombinacją:
 * Szyfrowanie: zarówno włączone, jak i wyłączone
 * Pamięć podręczna Redis: zarówno włączona, jak i wyłączona

 Takie podejście daje nam pewność, że mobiletto będzie zachowywać się tak samo niezależnie od tego, z którego sterownika korzystasz,
 i niezależnie od tego, czy włączysz buforowanie i/lub szyfrowanie.

 ### Wsparcie kierowcy
 Aktualne sterowniki pamięci masowej Mobileto:
 * `s3` : Amazon S3
 * `b2` : Backblaze B2
 * `local` : lokalny system plików

 *Wkłady wspierające większą liczbę dostawców pamięci masowej w chmurze są bardzo mile widziane!*

 ## mobiletto-cli
 Mobiletto ma być używany jako biblioteka przez inny kod JavaScript.

 Aby pracować z mobiletto w wierszu poleceń, użyj [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Źródło
 * [mobiletto na GitHubie](https://github.com/cobbzilla/mobiletto)
 * [mobiletto na npm](https://www.npmjs.com/package/mobiletto)

 ## Wsparcie i finansowanie
 Próbuję zostać profesjonalnym programistą open source. pracowałem w
 od wielu lat w branży oprogramowania, zakładałem odnoszące sukcesy firmy i sprzedawałem je spółkom publicznym.
 Ostatnio straciłam pracę i właściwie nie mam żadnej innej pracy w kolejce

 Więc spróbuję napisać pomocne oprogramowanie i zobaczę, czy to działa

 Jeśli lubisz korzystać z tego oprogramowania, byłbym bardzo wdzięczny nawet za
 najmniejsza [miesięczna składka przez Patreon](https://www.patreon.com/cobbzilla)

 *Dziękuję Ci!*

 ## Instalacja
 Zainstaluj za pomocą `npm` lub `yarn` . Prawdopodobnie chcesz wersję `lite` , która nie zawiera wszystkich
 przetłumaczone pliki README:

    npm install mobiletto-lite
    yarn add mobiletto-lite

 Jeśli naprawdę chcesz mieć pliki README w każdym języku, zainstaluj pełną wersję:

    npm install mobiletto
    yarn add mobiletto

 ## Szybki start
 Krótki przykład użycia sterownika `s3` .

 Ten kod działałby tak samo, gdyby sterownik był `b2` lub `local` .

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
 ## Podstawowe zastosowanie
 O wiele bardziej rozbudowany przykład, pokazujący większość oferowanych funkcji:

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

 ## Metadane
 Polecenie `metadata` zwraca metadane dotyczące pojedynczego wpisu w systemie plików.
 Podobnie wartość zwracana przez polecenie `list` jest tablicą obiektów metadanych.

 Obiekt metadanych wygląda tak:

    {
      "name": "fully/qualified/path/to/file",
      "type": "entry-type",
      "size": size-in-bytes,
      "ctime": creation-time-epoch-millis,
      "mtime": modification-time-epoch-millis
    }

 Właściwość `type` type` może mieć `file` , `dir` , `link` lub `special` .

 W zależności od typu sterownika, polecenie `list` może nie zwracać wszystkich pól. Właściwości `name` i `type`
 powinien być zawsze obecny. Kolejne polecenie `metadata` zwróci wszystkie dostępne właściwości.

 ## Alternatywny styl importu
 Zaimportuj moduł o pełnym zakresie i użyj funkcji `connect` :

    const storage = require('mobiletto')
    const opts = {bucket: 'bk', region: 'us-east-1'}
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)
    const objectData = await s3.readFile('some/path')

 ## Buforowanie
 Mobiletto działa najlepiej z pamięcią podręczną <a href="https://redis.io">redis</a> .

 Mobiletto spróbuje połączyć się z instancją redis na 127.0.0.1:6379

 Możesz zastąpić jedno z tych:
 * Ustaw `MOBILETTO_REDIS_HOST` env var, mobilet, aby połączyć się tutaj zamiast localhost
 * Ustaw zmienną env `MOBILETTO_REDIS_PORT` , ten port będzie używany

 Mobiletto będzie przechowywać wszystkie swoje klucze redis z prefiksem `_mobiletto__` . Możesz to zmienić
 ustawiając `MOBILETTO_REDIS_PREFIX` env var.

 Możesz także ustawić buforowanie dla poszczególnych połączeń za pomocą obiektu `opts.redisConfig` :

    const redisConfig = {
        enabled: true, // optional, default is true. if false other props are ignored
        host: '127.0.0.1',
        port: 6379,
        prefix: '_mobiletto__'
    }
    const opts = { redisConfig, bucket: 'bk', region: 'us-east-1' }
    const s3 = await storage.connect('s3', aws_key, aws_secret, opts)

 ### Nie chcesz buforować redis?
 Aby wyłączyć: `enabled: false` w swoim obiekcie `opts.redisConfig` podczas nawiązywania połączenia.

 Jak omówiono poniżej, wyłączenie buforowania będzie miało negatywny wpływ na wydajność i spowoduje zwiększenie liczby żądań
 do przechowywania, którego naprawdę potrzebujesz.

 ### Wskazówki dotyczące buforowania
 **Zaszyfrowana pamięć**: odczyt/zapis zaszyfrowanej pamięci jest tylko trochę wolniejszy niż normalnie,
 ale poruszanie się po katalogach (co robią niektóre rzeczy) jest dość drogie. Korzystanie z pamięci podręcznej redis
 zapewni Ci znaczny wzrost wydajności.

 Domyślna pamięć podręczna jest bezpieczna, ale nie działa dobrze, jeśli masz dużo operacji zapisu/usuwania.
 Każda operacja zapisu lub usunięcia unieważnia całą pamięć podręczną, zapewniając, że kolejne odczyty zobaczą
 najnowsze zmiany.

 ### Narzędzia CLI
 Jeśli używasz narzędzia CLI, takiego jak [mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli),
 na pewno będziesz chciał, aby pamięć podręczna redis była włączona, ponieważ działa ona podczas wywołań polecenia `mo` .

 ## Dublowanie

    // Copy a local filesystem mobiletto to S3
    s3.mirror(local)

    // Mirror a local subdirectory from one mobiletto to an S3 mobiletto, with it's own subdirectory
    local.mirror(s3, 'some/local-folder', 'some/s3-folder')

 Polecenie `mirror` wykonuje jednorazową kopię wszystkich plików z jednego telefonu komórkowego do drugiego.
 Nie uruchamia żadnego procesu utrzymywania lustra w czasie. Uruchom ponownie polecenie `mirror`
 aby zsynchronizować brakujące pliki.

 Wartość zwracana z `mirror` to prosty obiekt z licznikami liczby plików pomyślnie
 dublowane i ile plików zawierało błędy:

    {
      success: count-of-files-mirrored,
      errors: count-of-files-with-errors
    }

 OSTRZEŻENIE: Dublowanie dużych zestawów danych może być bardzo czasochłonne i wymagające dużej przepustowości

 W przypadku semantyki wywołania `mirror` czasami może być mylące, aby zrozumieć, kto jest
 czytelnik i kto jest pisarzem. Wyobraź to sobie jak instrukcję przypisania: „lewa ręka mobiletto”
 to rzecz, do której jest przypisywana (zapisywane dane lustrzane), a „prawostronne mobiletto” (
 argumentem metody `mirror` ) jest przypisywana wartość (odczytywane są lustrzane dane).

 ## Szyfrowanie przejrzyste
 Włącz przezroczyste szyfrowanie po stronie klienta:

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

 Co się dzieje? Oddzielny "wpis do katalogu" (bezpośredni) (zaszyfrowany) śledzi, jakie pliki się w nim znajdują
 katalog (aka katalog bezpośredni).
 * Polecenie `list` odczytuje pliki wpisów do katalogu, odszyfrowuje każdą z wymienionych ścieżek; następnie zwraca metadane dla każdego pliku
 * Polecenia `list` są bardziej nieefektywne, szczególnie w przypadku katalogów z dużą liczbą plików
 * Polecenie `write` zapisuje rekursywnie pliki dirent w katalogach dirent każdego rodzica; następnie zapisuje plik
 * Polecenia `write` spowodują O(N) zapisów, gdzie N = głębokość w hierarchii katalogów
 * Polecenie `remove` usuwa odpowiedni plik dirent i jego rodzica, jeśli jest pusty, rekursywnie; następnie usuwa plik
 * Nierekurencyjne polecenia `remove` spowodują O(N) odczyty i potencjalnie tyle samo usunięć, przy N = głębokość w hierarchii katalogów
 * Rekurencyjne polecenia `remove` na dużych i głębokich systemach plików mogą być kosztowne

 Pamiętaj, że nawet przy włączonym szyfrowaniu po stronie klienta przeciwnik ma pełny wgląd w zaszyfrowaną stronę serwera
 pamięć masowa, nawet bez klucza, nadal może zobaczyć łączną liczbę katalogów i liczbę plików w każdym, a także z
 trochę wysiłku, odkryć część lub całość ogólnej struktury hierarchii katalogów.
 *Uwaga: użyj stosunkowo płaskiej konstrukcji, aby zapewnić lepsze bezpieczeństwo.*
 Przeciwnik nie znałby nazw katalogów/plików, chyba że znałby również twoje szyfrowanie
 klucz lub w inny sposób pomyślnie złamał szyfrowanie. W takim razie wszystkie zakłady są przegrane!

 ### Wydajność i buforowanie
 Operacje na zaszyfrowanym magazynie mogą być powolne. Rekursywne aukcje i usuwanie mogą być bardzo powolne.
 Buforowanie przez redis ogromnie pomaga, ale pamiętaj, że pamięć podręczna jest opróżniana po każdym zapisie lub usunięciu.

 ## Rotacja klawiszy
 Utwórz mobiletto z nowym kluczem, a następnie odtwórz w nim stare dane:

    const storage = require('mobiletto')

    const oldEncryption = { key: .... }
    const oldStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'bk', region: 'us-east-1'}, oldEncryption)

    const newEncryption = { key: .... }
    const newStorage = await storage.connect('s3', aws_key, aws_secret, {bucket: 'zz', region: 'us-east-1'}, newEncryption)

    newStorage.mirror(oldStorage) // if oldStorage is very large, this may take a looooooong time...

 ## Interfejs sterownika
 Sterownik to dowolny plik JS, który eksportuje funkcję „storageClient” o tej sygnaturze:

    function storageClient (key, secret, opts)

 * `key` : ciąg, klucz API (dla sterownika `local` jest to katalog podstawowy)
 * `secret` : ciąg znaków, twój sekret API (może być pominięty dla sterownika `local` )
 * `opts` : obiekt, właściwości są przypisane do sterownika:
 * W przypadku `local` właściwości `fileMode` i `dirMode` określają sposób tworzenia nowych plików i katalogów
 * W przypadku `s3` wymagana jest właściwość `bucket` . Opcjonalne właściwości to:
    * `region`: the S3 region, default is us-east-1
    * `prefix`: a prefix to prepend to all S3 paths, default is the empty string
    * `delimiter`: the directory delimiter, default is '/'

 Obiekt, który zwraca funkcja storageClient, musi definiować te funkcje:

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

 ## Logowanie
 Mobiletto korzysta z biblioteki logowania [winston](https://www.npmjs.com/package/winston).

 Dzienniki **będą** zawierać ścieżki do plików i komunikaty o błędach, ale **nigdy** nie będą zawierać kluczy, sekretów,
 lub jakiekolwiek inne informacje o konfiguracji połączenia.

 ### Poziom dziennika
 Użyj zmiennej środowiskowej `MOBILETTO_LOG_LEVEL` , aby ustawić poziom rejestrowania, używając jednego
 poziomów `npm` zdefiniowanych w [https://www.npmjs.com/package/winston#logging-levels](https://www.npmjs.com/package/winston#logging-levels)

 Domyślny poziom to `error` . Najbardziej gadatliwym poziomem jest `silly` , chociaż obecnie mobiletto
 nie loguje się na poziomach poniżej `debug`

    MOBILETTO_LOG_LEVEL=silly # maximum logs!

 ### Plik dziennika
 Rejestrator domyślnie zapisuje w konsoli. Aby wysłać logi do pliku, ustaw `MOBILETTO_LOG_FILE`
 Zmienna środowiskowa. Podczas logowania do pliku dzienniki nie będą już zapisywane w konsoli.

    MOBILETTO_LOG_FILE=/var/my_mobiletto_log

 Aby wyłączyć rejestrowanie:

    MOBILETTO_LOG_FILE=/dev/null

</pre>
