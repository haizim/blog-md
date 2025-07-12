Di lini masa berbagai media sosial saya akhir-akhir ini dipenuhi dengan topik terkait AI. Mulai dari pengguna umum yang bukan di bidang IT hingga developer yang sudah mencoba untuk memanfaatkan AI ini. 

Salah satu jenis AI yang banyak dibahas adalah varian LLM (Large Language Model). Yang paling menarik perhatian saya tentu saja adalah penggunaan LLM di ranah web development. Mulai dari bagaimana LLM ini dapat membantu web developer untuk merencanakan alur pengembangan, membantu membuatkan kode, hingga pemecahan suatu masalah. Tapi di antara semua itu, saya lebih tertarik bagaimana saya bisa "menanamkan" LLM ini ke produk/aplikasi yang digunakan oleh user. Sehingga tidak hanya membantu kita sebagai developer, tapi dapat membantu user juga.
 
Dari ketertarikan saya itu, saya mulai untuk mempelajari bagaimana LLM ini dapat diterapkan di dalam aplikasi. Dan inilah project-project yang pernah saya gunakan sebagai jalan pembelajaran saya

### Ollama Client

![Screenshot Lollama Client](https://github.com/haizim/lollama/raw/main/assets/img/screenshot.png?v=1)

Perjalanan pembelajaran saya awali tidak dengan LLM yang sudah sangat populer. Saya mengawali dengan menggunakan Ollama yang saya konfigurasi di laptop saya sendiri. Dari Ollama ini saya belajar bagaimana cara _mengonsumsi_ REST API dari suatu LLM. Salah satu alasan saya menggunakan Ollama ini tentu saja karena gratis hehee.

Di sini saya belajar bagaimana cara mengirimkan prompt ke LLM melalui REST API. Setelah itu saya mulai bereksperimen dengan konfigurasinya, seperti mengatur temperatur, batasan token, dsb. Salah satu yang paling menarik ialah dari sini saya juga belajar tentang _"System Prompt"_. Bagi saya ini adalah ruhnya LLM. Karena dengan kita mengatur _"System Prompt"_ ini, kita dapat mengatur "kepribadian" dari LLM yang kita gunakan. Mau diatur sebagai ahli bahasa? bisa. Mau minta ia bertindak sebagai asisten koding? bisa. Bahkan kalau mau yang agak nyeleneh seperti menjadi _zombi_ pun bisa XD

Selain itu saya juga belajar bagaimana memproses respons yang diberikan oleh LLM. Karena respons LLM ini biasanya dalam bentuk markdown, maka saya perlu menggunakan library tambahan untuk memprosesnya menjadi HTML.

Tak lupa saya juga belajar bahwa kita juga perlu untuk menyimpan riwayat percakapan kita agar percakapan kita dapat terus nyambung.

Dari project inilah saya belajar dasar-dasar interaksi dengan LLM melalui REST API. Jika tertarik dapat meluncur ke repo github saya [https://github.com/haizim/lollama](https://github.com/haizim/lollama)

### Asisten SQL Query Builder

![Asisten SQL Query Builder](https://haizim.one/media/query-builder-assistant.png?v=1)

Ini adalah project serius pertama saya. Jadi ceritanya saya mendapatkan sebuah project untuk membuat sebuah aplikasi dashboard builder.  Di project ini tugas saya adalah mengumpulkan data dari berbagai sumber yang dimiliki perusahaan yang berada di berbagai tempat yang terpisah dan menggabungkannya dalam satu database khusus agar dapat dianalisa secara komprehensif. Kemudian data analis mereka dapat menganalisa data tersebut dengan kueri SQL dan memvisualisasikannya menjadi sebuah dashboard yang utuh. Oiya, untuk database yang dianalisa ini tentunya saya pisahkan dengan database yang digunakan oleh aplikasinya.

Setelah fitur-fitur dasar yang dibutuhkan telah terpenuhi, saya mencoba untuk "menyelipkan" asisten AI untuk membantu membuat kueri SQL. Alhamdulillah ide saya ini disambut baik oleh klien.

Dari sini saya belajar bagaimana menambahkan konteks kepada LLM di luar prompt yang dikirimkan oleh user langsung. Cara yang saya gunakan adalah dengan menambahkan konteks tabel-tabel yang ada di database beserta kolom-kolom & tipe data tiap kolomnya. Dari sinilah LLM dapat mengetahui bagaimana kueri dapat dibuat.

Setelah berjalan beberapa waktu, saya menyadari bahwa token yang dipakai cukup banyak untuk sekali prompt, belasan ribu. Setelah saya telusuri ternyata disebabkan oleh data tabel & kolom yang sangat besar. Awalnya saya mengirimkan data tabelnya dalam bentuk JSON, ternyata ini memakan token yang cukup banyak. Akhirnya saya mencoba mencari cara untuk mengurangi penggunaan tokennya tanpa menghilangkan konteks yang dibutuhkan. Akhirnya saya mengubah formatnya menjadi sederhana, seperti berikut:

```markdown
- nama_tabel (nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, ...)
- nama_tabel (nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, ...)
...
- nama_tabel (nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, nama_kolom : tipe_kolom, ...)
```

Dari penyederhanaan ini, dapat mengurangi penggunaan token hingga kurang dari 5 ribu dalam sekali prompt. Hingga 50% lebih hemat token. Pengurangan yang cukup signifikan bagi saya.

### Asisten Analisa Dashboard

![](https://haizim.one/media/aisten-analisis-dashboard.png?v=1)

Masih di project yang sama, saya melihat peluang lain untuk menerapkan LLM ini agar dapat digunakan oleh user, yaitu di dashboardnya. Karena basic dari LLM adalah teks, maka selama ada peluang untuk mengubah data/informasi menjadi bentuk teks, maka saya berpikir ini dapat diselipkan LLM di dalamnya.

Seperti yang telah saya jelaskan sebelumnya, bahwa basis dari semua data yang ditampilkan di dashboard adalah hasil dari query SQL yang mana menghasilkan data dalam bentuk tabular. Dari sini saya melihat bahwa data ini dapat dikirimkan ke LLM untuk kemudian diproses.

Di awal saya membuat fitur ini, saya masih belum mengenal penyederhanaan konteks seperti yang saya sebutkan di asisten kueri SQL. Karena memang secara lini masa optimasi token baru saya lakukan belakangan. Justru saya tahu bahwa konteks dapat disederhanakan saat saya mengerjakan fitur ini. Sebelum saya optimasi asisten kueri SQL.

Di awal saya masih mengirim data dashboard dalam bentuk JSON. Yang mana memakan token yang cukup besar, hingga puluhan ribu sekali kirim. Akhirnya saya coba cari tahu bagaimana cara menghemat penggunaan tokennya. Akhirnya ketemulah format tabel Markdown.

Kenapa tabel Markdown? karena data yang dikirim ini lebih dinamis dibandingkan dengan data struktur tabel sebelumnya. Jika data struktur tabel itu cenderung statis, jarang sekali ada perubahan. Maka data dashboard ini cukup dinamis, dimana tiap hari datanya dapat berubah. Belum lagi ada filter yang membuat datanya menjadi semakin dinamis. Maka dari itu dibutuhkan format yang dapat mengakomodir kebutuhan itu.

Dan seperti di asisten kueri SQL, hasilnya menjadi lebih hemat token hingga lebih dari 50%.

### Analisa AI Ke Database Langsung 

![](https://haizim.one/media/analisa-ai.png?v=1)

Lagi-lagi masih di project yang sama. Saya mencoba menggabungkan kedua fitur yang telah saya sematkan sebelumnya. Di sini user dapat bertanya langsung ke AI dan AI akan mengambil datanya langsung ke database. Saya beruntung mendapatkan klien yang sudah sehari-harinya sudah terbiasa menggunakan layanan LLM, lebih spesifiknya ChatGPT.

Pakai MCP ya? enggak, di masa belajar ini saya masih belum ingin menggunakan tools tambahan lain. Saya masih ingin menguatkan pondasi saya. Jika saya merasa sudah cukup kuat di pondasi, barulah saya berani untuk menggunakan tools tambahan.

Lantas bagaimana cara saya membuat LLM dapat membaca data langsung ke database? Jawabannya, sebenarnya ia tidak benar-benar bisa langsung membaca database. Tapi saya meminta LLM untuk membuatkan query SQL yang dibutuhkan, kemudian sistem aplikasilah yang menjalankan query SQL tersebut. Hasil dari query itu kembali dikirim ke LLM untuk dijadikan acuan untuk jawabannya. 

Jadi, di proses ini ada dua kali prompt ke LLM. 1. untuk meminta kueri SQL 2. untuk membuat jawaban kepada user.

Agar datanya konsisten, saya juga selalu memasukkan data-data sebelumnya saat dalam prompt. Baik itu saat membuat kueri SQL maupun jawaban untuk user

### ...

Begitulah perjalanan saya dalam proses pembelajaran penerapan LLM untuk aplikasi. Tentu masih banyak hal yang perlu saya pelajari dan hadapi untuk dapat semakin meningkatkan kemampuan saya. Semoga dengan pembelajaran ini dapat mengantarkan saya untuk membuka peluang-peluang lainnya. Aamiin...
