Sejak beberapa waktu terakhir ini entah kenapa jadi suka memerhatikan kelakuan warga Twitter. Awalnya tuh tertarik sama yang namanya "Trending Topic". Yang membuat tertarik sama makhluk satu ini tuh karena saat itu saya berada di lingkungan yang suka dengan yang namanya propaganda. Dan saya melihat diantara semua media sosial yang ada yang paling mendukung untuk per-propaganda-an tuh ya Twitter ini dengan fitur Trending Topic-nya ini. Jadilah saya tertarik pada makhluk ini.

Kemudian berlanjut dengan santernya DroneEmprit bikinannya mas Ismail Fahmi. Itu hloo.. analytics tools yang berguna buat melihat aktivitas warga twitter pada keyword tertentu itu hloo.. Saya juga jadi ikutan tertarik dengan itu. Sampai saya menonton video-video presentasi mas Ismail tentang bagaimana DroneEmprit ini bekerja dan apa-apa saja yang berada di belakangnya. Dari situ menajdi lebih tertarik lagi pada DroneEmprit ini.

Akhirnya dari kedua ketertarikan saya tersebut. Saya membuat projek berikut:

  

### Trend Topic History

Projek berawal pada Oktober 2019. Saat itu saya sedang tertarik dengan trending topic Twitter. Kemudian saya akhirnya berinisiatif untuk mencoba merekam trending topic yang terjadi sehingga kelak dapat dilihat kembali, syukur-syukur bisa berguna ehe.

Jadilah hari itu saya mencoba untuk membuat sebuah skrip di hostingan saya ini untuk mengambil trending topic yang sedang terjadi setiap 30 menit sekali. Dari data inilah saya mendapatkan riwayat trending topic yang pernah terjadi. 

Pada saat itu saya membuat satu untuk mengambil trending topic Indonesia dan trending topic Dunia. Namun, karena suatu kesalahan dalam mengolah database, akhirnya pada 17 September 2020 seluruh data rekaman trending topic Indonesia hilang dan akhirnya harus mulai dari nol kembali huee..

Lompat ke bulan berikutnya. Saat itu sedang ramai penolakan omnibus law. Saat itulah, setelah hari-h aksi dilakukan, tepatnya pada 9 Oktober 202 saya mencoba melakukan melakukan analisis trending topic terkait omnibus law menggunakan data yang saya kumpulkan dari projek ini. Inilah pertama kalinya saya merasakan kegunaan data yang saya kumpulkan ini XD. Dan saat itu saya me-emntion mas Ismail Fahmi untuk meminta pendapatnya. Daan.. begini jawaban beliau

![](https://haizim.one/media/diy-twitter-analytics-1.png?x=123) [https://twitter.com/ismailfahmi/status/1314577567056158723](https://twitter.com/ismailfahmi/status/1314577567056158723)

Namun, saat itu saya masih mengolahnya secara manual menggunakan aplikasi spreadsheet. Dari situlah saya merasa perlu adanya sebuah interface yang dapat memudahkan dalam melihat dan membaca data yang ada. Jadilah projek saya menjadi yang seperti sekarang ini.

Untuk cara penggunaannya sangat mudah, yaitu:

1.  Buka halaman ini [https://haizim.one/iseng/trend-history/analytics/trend.php](https://haizim.one/iseng/trend-history/analytics/trend.php)
2.  Tentukan rentang tanggal dan mau sampai urutan ke berapa yang ingin dilihat. Dan tekan tombol "Lihat Urutan".  
    ![](https://haizim.one/media/diy-twitter-analytics-2.png?x=123)
3.  Maka akan ditampilkan trending topic apa saja yang terekam selama rentang waktu tersebut yang sudah dikelompokkan berdasarkan kategorinya.  
    ![](https://haizim.one/media/diy-twitter-analytics-3.png?x=123)
4.  Kemudian, kita juga dapat melihat tren posisi dari trending topic pada kategori tertentu dengan meng-klik tombol "Lihat Riwayat".  
    ![](https://haizim.one/media/diy-twitter-analytics-4.png?x=123)
5.  Selain itu, dibawahnya juga disediakan tabel yang dapat disalin ke aplikasi semacam spreadsheet jika grafik yang ada kurang jelas sehingga dapat dibuat grafik sendiri.   
    ![](https://haizim.one/media/diy-twitter-analytics-9.png?x=123)

  

Kurang lebih seperti itulah yang dapat dilakukan oleh aplikasi ini.

  

### Twitter Activity

Secara gampangnya, ini saya mencoba meniru DroneEmprit tapi versi lite-nya. Dimana fitur-fitur seperti seperti analisa sentimen, pengecekan akun bot dan beberapa fitur lainnya masih belum ada. Ya namanya bikinan anak yang baru lulus sarjana yang bahkan belum wisuda mosok ya dibandingin sama yang lulusan S2 Jerman. Ya jauh to yaa.. saya sadar diri kok..

Tapi dari pengambilan data twit-nya sendiri juga ada perbedaan. Dimana DroneEmprit menggunakan metode stream tweet sedangkan saya menggunakan Standard search API. Dimana milik saya hanya dapat mengambil maksimal 100 tweet tiap request dan ini saya buat routine dengan cronjob untuk melakukan request tiap satu menit sekali. Sehingga dapat dikatakan bahwa sistem yang saya buat ini hanya dapat mengambil maksimal 100 twit terbaru saja untuk tiap keywordnya. Meskipun seringnya untuk tiap keyword tak sampai 100 twit baru per-menitnya.

  

Kemudian untuk cara penggunaannya pun mudah :

1.  Kunjungi halaman ini [https://haizim.one/iseng/trend-history/analytics/tweet.php](https://haizim.one/iseng/trend-history/analytics/tweet.php)
2.  Di situ akan diberi pilihan keyword apa saja yang sedang dalam proses pengambilan. Dan kita dapat memilih tak hanya satu keyword saja dan nantinya hasilnya akan digabungkan. Selain itu, renatang waktu pengambilannya juga dapaat diatur, jika tidak ingin dapat diabiarkan saja, maka akan ditampilkan seluruh record yang ada. Setelah memilih keyword, klik tombol "Lihat" untuk melihat hasilnya.  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)
3.  Setelah itu akan diperlihatkan hasilnya berupa wordcloud-wordcloud.  
    ![](https://haizim.one/media/diy-twitter-analytics-6.png?x=123)
4.  Kadang ada diantara kita yang merasa kurang nyaman melihat wordcloud. Maka dari itu disediakan opsi untuk menampilkannya dalam format tabel dengan meng-klik tombol "Selengkapnya".  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)
5.  Selain itu untuk bagian "Paling Banyak Diretweet" dan "Paling Banyak Dimention" memiliki fitur untuk melihat Network Diagram-nya dengan meng-klik tombol "Network Diagram". Maka akan diarahkan ke halaman untuk menampilkan network diagramnya.  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)

  
  

Sebagai tambahan berikut adalah bagaimana saya memaknai dari bagian-bagian yang ada di halaman ini : 

* **Hashtag Berhubungan & Kata Banyak Digunakan** : Untuk mengetahui apa yang paling banyak dibahas pada keyword tersebut.
* **Link Terbanyak** : ini udah jelas buat ngeliat link-link yang banyak tersebar siih.. bisa juga link tersebut merupakan link tweet yang banyak di-retweet.
* **Paling Banyak Diretweet** : Untuk menunjukkan akun mana yang opininya paling banyak dibahas/didengarkan.
* **Paling Banyak Dimention** : Untuk menunjukkan akun mana yang paling banyak dicari/dibicarakan.
* **Paling Banyak Melakukan Tweet & Retweet** : Untuk menunjukkan akun mana yang melakukan aktivitas paling banyak
* **Paling Banyak Melakukan Retweet** : Untuk menunjukkan akun mana yang memiliki kemungkinan sebagai buzzer.
* **Paling Banyak Melakukan Tweet(Tidak Termasuk Retweet)** : Untuk menunjukkan akun mana yang paling banyak membuat opini (pribadi).

  

Oiya, disana memang sengaja tidak saya tambahkan form untuk menambahkan keyword karena saya khawatir nanti akan kebanyakan dan akan memenuhi hostingan saya ehe. Kalau misal ingin mengusulkan keyword dapat disampaikan dari form kontak saja yaa.. dan jangan lupa tinggalkan email yang bisa dihubngi yaa..

Sejak beberapa waktu terakhir ini entah kenapa jadi suka memerhatikan kelakuan warga Twitter. Awalnya tuh tertarik sama yang namanya "Trending Topic". Yang membuat tertarik sama makhluk satu ini tuh karena saat itu saya berada di lingkungan yang suka dengan yang namanya propaganda. Dan saya melihat diantara semua media sosial yang ada yang paling mendukung untuk per-propaganda-an tuh ya Twitter ini dengan fitur Trending Topic-nya ini. Jadilah saya tertarik pada makhluk ini.

Kemudian berlanjut dengan santernya DroneEmprit bikinannya mas Ismail Fahmi. Itu hloo.. analytics tools yang berguna buat melihat aktivitas warga twitter pada keyword tertentu itu hloo.. Saya juga jadi ikutan tertarik dengan itu. Sampai saya menonton video-video presentasi mas Ismail tentang bagaimana DroneEmprit ini bekerja dan apa-apa saja yang berada di belakangnya. Dari situ menajdi lebih tertarik lagi pada DroneEmprit ini.

Akhirnya dari kedua ketertarikan saya tersebut. Saya membuat projek berikut:

  

### Trend Topic History

Projek berawal pada Oktober 2019. Saat itu saya sedang tertarik dengan trending topic Twitter. Kemudian saya akhirnya berinisiatif untuk mencoba merekam trending topic yang terjadi sehingga kelak dapat dilihat kembali, syukur-syukur bisa berguna ehe.

Jadilah hari itu saya mencoba untuk membuat sebuah skrip di hostingan saya ini untuk mengambil trending topic yang sedang terjadi setiap 30 menit sekali. Dari data inilah saya mendapatkan riwayat trending topic yang pernah terjadi. 

Pada saat itu saya membuat satu untuk mengambil trending topic Indonesia dan trending topic Dunia. Namun, karena suatu kesalahan dalam mengolah database, akhirnya pada 17 September 2020 seluruh data rekaman trending topic Indonesia hilang dan akhirnya harus mulai dari nol kembali huee..

Lompat ke bulan berikutnya. Saat itu sedang ramai penolakan omnibus law. Saat itulah, setelah hari-h aksi dilakukan, tepatnya pada 9 Oktober 202 saya mencoba melakukan melakukan analisis trending topic terkait omnibus law menggunakan data yang saya kumpulkan dari projek ini. Inilah pertama kalinya saya merasakan kegunaan data yang saya kumpulkan ini XD. Dan saat itu saya me-emntion mas Ismail Fahmi untuk meminta pendapatnya. Daan.. begini jawaban beliau

![](https://haizim.one/media/diy-twitter-analytics-1.png?x=123) [https://twitter.com/ismailfahmi/status/1314577567056158723](https://twitter.com/ismailfahmi/status/1314577567056158723)

Namun, saat itu saya masih mengolahnya secara manual menggunakan aplikasi spreadsheet. Dari situlah saya merasa perlu adanya sebuah interface yang dapat memudahkan dalam melihat dan membaca data yang ada. Jadilah projek saya menjadi yang seperti sekarang ini.

Kemudian untuk kategorinya saya melakukan pengambilan dengan menggunakan python dan selenium untuk melakukan crawling pada halaman https://twitter.com/i/trends dan menyimpannya ke database. Pengambilan kategori ini mulai dilakukan berdekatan dengan kejadian hilangnya data trending topic Indonesia itu.

Untuk cara penggunaannya sangat mudah, yaitu:

1.  Buka halaman ini [https://haizim.one/iseng/trend-history/analytics/trend.php](https://haizim.one/iseng/trend-history/analytics/trend.php)
2.  Tentukan rentang tanggal dan mau sampai urutan ke berapa yang ingin dilihat. Dan tekan tombol "Lihat Urutan".  
    ![](https://haizim.one/media/diy-twitter-analytics-2.png?x=123)
3.  Maka akan ditampilkan trending topic apa saja yang terekam selama rentang waktu tersebut yang sudah dikelompokkan berdasarkan kategorinya.  
    ![](https://haizim.one/media/diy-twitter-analytics-3.png?x=123)
4.  Kemudian, kita juga dapat melihat tren posisi dari trending topic pada kategori tertentu dengan meng-klik tombol "Lihat Riwayat".  
    ![](https://haizim.one/media/diy-twitter-analytics-4.png?x=123)
5.  Selain itu, dibawahnya juga disediakan tabel yang dapat disalin ke aplikasi semacam spreadsheet jika grafik yang ada kurang jelas sehingga dapat dibuat grafik sendiri.   
    ![](https://haizim.one/media/diy-twitter-analytics-9.png?x=123)

  

Kurang lebih seperti itulah yang dapat dilakukan oleh aplikasi ini.

  

### Twitter Activity

Secara gampangnya, ini saya mencoba meniru DroneEmprit tapi versi lite-nya. Dimana fitur-fitur seperti seperti analisa sentimen, pengecekan akun bot dan beberapa fitur lainnya masih belum ada. Ya namanya bikinan anak yang baru lulus sarjana yang bahkan belum wisuda mosok ya dibandingin sama yang lulusan S2 Jerman. Ya jauh to yaa.. saya sadar diri kok..

Tapi dari pengambilan data twit-nya sendiri juga ada perbedaan. Dimana DroneEmprit menggunakan metode stream tweet sedangkan saya menggunakan Standard search API. Dimana milik saya hanya dapat mengambil maksimal 100 tweet tiap request dan ini saya buat routine dengan cronjob untuk melakukan request tiap satu menit sekali. Sehingga dapat dikatakan bahwa sistem yang saya buat ini hanya dapat mengambil maksimal 100 twit terbaru saja untuk tiap keywordnya. Meskipun seringnya untuk tiap keyword tak sampai 100 twit baru per-menitnya.

  

Kemudian untuk cara penggunaannya pun mudah :

1.  Kunjungi halaman ini [https://haizim.one/iseng/trend-history/analytics/tweet.php](https://haizim.one/iseng/trend-history/analytics/tweet.php)
2.  Di situ akan diberi pilihan keyword apa saja yang sedang dalam proses pengambilan. Dan kita dapat memilih tak hanya satu keyword saja dan nantinya hasilnya akan digabungkan. Selain itu, renatang waktu pengambilannya juga dapaat diatur, jika tidak ingin dapat diabiarkan saja, maka akan ditampilkan seluruh record yang ada. Setelah memilih keyword, klik tombol "Lihat" untuk melihat hasilnya.  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)
3.  Setelah itu akan diperlihatkan hasilnya berupa wordcloud-wordcloud.  
    ![](https://haizim.one/media/diy-twitter-analytics-6.png?x=123)
4.  Kadang ada diantara kita yang merasa kurang nyaman melihat wordcloud. Maka dari itu disediakan opsi untuk menampilkannya dalam format tabel dengan meng-klik tombol "Selengkapnya".  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)
5.  Selain itu untuk bagian "Paling Banyak Diretweet" dan "Paling Banyak Dimention" memiliki fitur untuk melihat Network Diagram-nya dengan meng-klik tombol "Network Diagram". Maka akan diarahkan ke halaman untuk menampilkan network diagramnya.  
    ![](https://haizim.one/media/diy-twitter-analytics-5.png?x=123)

  
  

Sebagai tambahan berikut adalah bagaimana saya memaknai dari bagian-bagian yang ada di halaman ini : 

* **Hashtag Berhubungan & Kata Banyak Digunakan** : Untuk mengetahui apa yang paling banyak dibahas pada keyword tersebut.
* **Link Terbanyak** : ini udah jelas buat ngeliat link-link yang banyak tersebar siih.. bisa juga link tersebut merupakan link tweet yang banyak di-retweet.
* **Paling Banyak Diretweet** : Untuk menunjukkan akun mana yang opininya paling banyak dibahas/didengarkan.
* **Paling Banyak Dimention** : Untuk menunjukkan akun mana yang paling banyak dicari/dibicarakan.
* **Paling Banyak Melakukan Tweet & Retweet** : Untuk menunjukkan akun mana yang melakukan aktivitas paling banyak
* **Paling Banyak Melakukan Retweet** : Untuk menunjukkan akun mana yang memiliki kemungkinan sebagai buzzer.
* **Paling Banyak Melakukan Tweet(Tidak Termasuk Retweet)** : Untuk menunjukkan akun mana yang paling banyak membuat opini (pribadi).

  

Oiya, disana memang sengaja tidak saya tambahkan form untuk menambahkan keyword karena saya khawatir nanti akan kebanyakan dan akan memenuhi hostingan saya ehe. Kalau misal ingin mengusulkan keyword dapat disampaikan dari form kontak saja yaa.. dan jangan lupa tinggalkan email yang bisa dihubngi yaa..