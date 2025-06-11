Performa aplikasi merupakan hal yang cukup penting pada sebuah aplikasi. Dengan perfroma aplikasi yang baik, selain dapat meningkatkan efisiensi waktu, juga dapat meningkatkan kenyamanan pengguna. Jika aplikasi yang kita buat memiliki performa yang baik, maka pengguna akan merasa nyaman menggunakan aplikasi kita dan betah untuk terus menggunakan aplikasi kita. Sebaliknya, jika aplikasi kita memiliki performa yang kurang baik, maka akan mengurangi kenyamanan pengguna, bahkan bisa saja pengguna akan meninggalkan aplikasi kita.

Selama ini, pengujian dan pencatatan performa aplikasi secara detail dan teliti biasanya mentok dilakukan pada tataran QA dengan tools-tools pengujian yang ada, jarang sekali ketika aplikasi sudah digunakan oleh pengguna pada tahap production. Saat aplikasi sudah pada tahap production biasanya tools untuk melakukan pencatatan performa sudah tidak lagi disematkan. Padahal penting juga untuk terus mengamati dan mencatat performa aplikasi pada tahap production. Agar dapat mengetahui kondisi "nyata" performa aplikasi kita

### Sentry Performance Monitor

Banyak dari kita yang sudah terbiasa menggunakan Sentry sebagai tool pencatatan bug/error. Ternyata sekarang Sentry tak hanya dapat digunakan untuk memonitor bug/error pada aplikasi. Sentry sudah memiliki fitur untuk memonitor performa aplikasi. Fitur ini mulai diperkenalkan pada Sentry versi 20.6.0. Sehingga pada Sentry dengan versi dibawahnya belum dapat menikmati fitur ini.

### Persiapan

Kebutuhan minimum :

*   php >= 7.2
*   composer
*   sentry/sdk >=3.0.0 beserta dependensinya
*   dsn sentry (bisa didapatkan dengan membuat akun di sentry.io dan membuat project disana)

Sebelum memulai, kita siapkan kebutuhannya.

1.  buat sebuah forlder untuk project ini.
2.  masuk ke dalam folder project dan install package sentry/sentry menggunakan composer `composer require sentry/sdk`
3.  buat file index.php
    
    ![sentry-php-file](https://haizim.one/media/sentry-php-file.png)
    

Untuk pembuatan akun sentry.io dan projectnya dapat dicari tutorialnya di internet. Saya tidak akan membahasnya di sini.

### Penerapan

Sekarang saya anggap semua kebutuhannya sudah dipenuhi. Oke, kalau begitu langsung saja kita coba kodenya.

*   Masukkan kode berikut pada file index.php :
    
    ```php
    <?php
    include 'vendor/autoload.php';

    echo "<h5>Test Sentry Performance</h5>";

    // Initiation for sentry
    \Sentry\init([
        'dsn' => 'https://7ad2e2c3990047f3b23dca80f5eda2ff@o1243391.ingest.sentry.io/6398684', // use your sentry dsn
        'traces_sample_rate' => 1.0,
    ]);

    // Setup context for the full transaction
    $transactionContext = new \Sentry\Tracing\TransactionContext();
    $transactionContext->setName('Example Transaction');
    $transactionContext->setOp('http.request');

    // Start the transaction
    $transaction = \Sentry\startTransaction($transactionContext);

    // Set the current transaction as the current span so we can retrieve it later
    \Sentry\SentrySdk::getCurrentHub()->setSpan($transaction);

    // Setup the context for the test operation span
    $spanContext = new \Sentry\Tracing\SpanContext();
    $spanContext->setOp('test_operation');

    // Start the span
    $span1 = $transaction->startChild($spanContext);

    // Set the current span to the span we just started
    \Sentry\SentrySdk::getCurrentHub()->setSpan($span1);

    // Calling test_operation()
    test_operation();

    // Finish the span
    $span1->finish();

    // Set the current span back to the transaction since we just finished the previous span
    \Sentry\SentrySdk::getCurrentHub()->setSpan($transaction);

    // Finish the transaction, this submits the transaction and it's span to Sentry
    $transaction->finish();

    function test_operation(){
        sleep(2); //Delay execution for 2 seconds
        echo "test_operation called";
    }
    ```
    
*   buka console/terminal di folder project dan jalankan php web server `php -S localhost:8000` pada beberapa distro linux ada yang perlu dijalankan menggunakan `sudo`
*   buka web browser dan buka alamat `localhost:8000`
    
    ![sentry-php-index](https://haizim.one/media/sentry-php-index.png)
    
    tampilannya memang hanya seperti itu sih hehe
    
*   Sekarang kita coba buka akun sentry.io kita dan buka menu performance
*   Pada menu performance, pilih project yang kamu gunakan
    
    ![sentry-php-project](https://haizim.one/media/sentry-php-project.png)
    
*   Scroll hingga bagian bawah yang berisi daftar transaksi, disana akan ada transaksi yang bernama `Example Transaction`. Klik untuk membukanya
    
    ![sentry-php-transactions](https://haizim.one/media/sentry-php-transactions.png)
    
*   Disana kamu akan menemukan daftar daftar event yang melakukan transaksi `Example Transaction`.
    
    ![sentry-php-events](https://haizim.one/media/sentry-php-events.png)
    
*   Buka salah satunya dan akan tampil detail transaksi yang dilakukan berupa list operasi yang dijalankan.
    
    ![sentry-php-operations](https://haizim.one/media/sentry-php-operations.png)
    

### Penjelasan Kode

Dari kode diatas ada beberapa baris kode yang perlu diperhatikan

*   Inisiasi Sentry
    
         \Sentry\init([ 'dsn' => 'https://7ad2e2c3990047f3b23dca80f5eda2ff@o1243391.ingest.sentry.io/6398684', // use your sentry dsn 'traces_sample_rate' => 1.0, ]); 
    
    di sini untuk `trace_sample_rate` dapat diisi dengan float antara 0-1, misal 0.5. Semakin besar nilainya, maka akan semakin sering sentry meng-capture transaksi yang dilakukan.
    
*   Set nama transaksi
    
         $transactionContext->setName('Example Transaction'); 
    
    Baris ini berguna untuk menentukan nama transaksi yang tampil pada daftar transaksi. Untuk pengaplikasiannya, saya biasa mengisinya dengan url yang sedang dipanggil.
    
*   Set nama operasi untuk transaksi
    
         $transactionContext->setOp('http.request'); 
    
    Baris ini untuk menentukan jenis operasi yang dilakukan oleh transaksi yang berjalan. Karena pada kasus ini ialah operasi pemanggilan melalui http, maka saya isikan `http.request`. Namun, pada kasus lain, misal pemanggilannya melalui CRON Job, maka dapat saja diisikan `CRON.job` atau semacamnya. Sesuaikan saja dengan kebutuhan.
    
    ![sentry-php-name](https://haizim.one/media/sentry-php-name.png)
    
*   Memulai capture transaksi
    
         $transaction = \Sentry\startTransaction($transactionContext); 
    
    Mulai dari baris ini kebawah akan dianggap sebagai transaksi `Example Transaction`
    
*   Set nama operasi yang berjalan/dipanggil
    
         $spanContext->setOp('test_operation'); 
    
    Baris ini untuk mendefinisikan operasi yang dijalankan.
    
*   Memulai capture operasi
    
         $span1 = $transaction->startChild($spanContext); 
         \Sentry\SentrySdk::getCurrentHub()->setSpan($span1); 
    
    Mulai dari baris ini ke bawah akan dianggap sebagai operasi `test_operation` dan dihitung lama eksekusinya.
    
*   Mengakhiri capture operasi
    
         $span1->finish(); 
    
    Setelah baris ini sudah tidak lagi dianggap sebagai operasi `test_operation` dan sentry berhenti mengcapture untuk .
    
*   Mengakhiri capture transaksi
    
        \Sentry\SentrySdk::getCurrentHub()->setSpan($transaction);
        $transaction->finish(); 
    
    
    Setelah baris ini sudah tidak lagi dianggap sebagai transaksi `Example Operation`
    

### Menambah operasi

Dalam sekali pemanggilan suatu transaksi tentu saja tak hanya ada satu operasi yang berjalan. Maka dari itu kita perlu untuk menambahkan operasi-operasi lainnya untuk di-capture.

*   Ubah fungsi `test_operation` menjadi :
    
         function test_operation() 
         { 
            sleep(2); //Delay execution for 2 seconds 
            echo "test_operation called"; 
            other_operation(); 
        } 
    
*   Tambahkan fungsi `other_operation`
    
    ```
    function other_operation() { 
    $parent = \Sentry\SentrySdk::getCurrentHub()->getSpan(); 
    $span = null; 
    
    // Check if we have a parent span (this is the case if we started a transaction earlier) 
    if ($parent !== null) { 
        $context = new \Sentry\Tracing\SpanContext(); 
        $context->setOp('other_operation'); 
        $context->setDescription('This is a description'); 
        $span = $parent->startChild($context); 
        // Set the current span to the span we just started 
        \Sentry\SentrySdk::getCurrentHub()->setSpan($span); 
    } 
    sleep(1); //Delay execution for 1 second 
    echo "<hr/>other_operation called"; 
    
    // We only have a span if we started a span earlier 
    if ($span !== null) { 
        $span->finish(); // Restore the current span back to the parent span 
        \Sentry\SentrySdk::getCurrentHub()->setSpan($parent); 
        } 
    } 
    ```
    
    Dan inilah hasil dari tangkapannya
    
    ![sentry-php-other-transaction](https://haizim.one/media/sentry-php-other-transaction.png)
    
    Dari sini dapat terlihat bahwa durasi dari `test_operation` menjadi 3 detik karena ia dipanggil saat masih di dalam kode yang masih di-capture oleh operasi `test_operation`. Jika ingin mengeluarkannya dari operasi `test_operation` tinggal panggil saja setelah baris `$span1->finish();`
    
*   kembalikan `test_operation` seperti semula
    
         function test_operation() { 
            sleep(2); //Delay execution for 2 seconds echo "test_operation called"; 
        } 
    
*   panggil `other_operation()` setelah `$span1->finish();`
    
         // Finish the span 
         $span1->finish(); 
         // Calling other_operation() 
         other_operation(); 
    
    dan inilah hasil yang ditangkap
    
    ![sentry-php-other-transaction-2](https://haizim.one/media/sentry-php-other-transaction-2.png)
    
    Selain itu ada tambahan baris `$context->setDescription('This is a description');`. Baris ini untuk memberikan deskripsi dari operasi yangsedang berjalan. Misal, saat kita ingin meng-capture operasi menjalankan query sql, pada `setOp` dapat diisikan `db.sql.query` kemudian pada `setDescription` dapat diisikan query sql yang dijalankan. Berikut untuk contoh hasil capture query sql.
    
    ![sentry-sql-query](https://haizim.one/media/sentry-sql-query.png?n=1)
    

### Penutup

Yang saya sampaikan tadi adalah salah satu penerapan pada sebuah kode sederhana menggunakan PHP native. Namun, prinsipnya tentu bisa diterapkan pada PHP framework semacam codeigniter, phalcon dsb. Menurut pengalaman saya menerapkan pada framework Phalcon, saya meletakkan tracing ini pada bagian middleware-nya. Sehingga setiap transaksi yang terjadi dapat tertangkap.

Khusus untuk framework Laravel dan Symfony, Sentry sudah menyediakan package khusus yang sudah mendukung tracing performance monitoring ini. Sehingga tidak perlu menerapkannya secara manual. Cukup install/update package `sentry/sentry-laravel` minimal versi 2.0.0 untuk Laravel dan package `sentry/sentry-symfony` minimal versi 4.0.0 untuk Symfony. Sekian, semoga bermanfaat yaa..