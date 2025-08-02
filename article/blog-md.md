Saya pertama kali mengenal blog sejak zaman SMP, saat itu masih menggunakan blogspot. Namun, saat itu saya lebih tertarik untuk mendekorasi tampilan blog saya. Sedangkan untuk konten artikelnya malah lebih banyak comot sana-sini. 

Kesukaan saya ini sempat tidak saya lanjutkan saat SMA dan Kuliah awal hingga menjelang akhir. Sebenarnya di pertengahan masa kuliah sempat ada ketertarikan menulis kembali disebabkan lingkungan yang mendukung. Namun, itu hanya sekitar setahun, setelah itu kembali terputus. Barulah di akhir masa kuliah, lebih tepatnya sekitar awal-awal masa pandemi saya diajak beberapa teman saya untuk mencoba mengelola blog bersama.  Di situlah saya kembali mulai mencoba menulis.

Di saat itu saya membuat blog sendiri yang sekaligus saya jadikan sarana untuk menunjukkan kemampuan & kreativitas saya dalam membuat tampilan web yang tak biasa. Hasilnya adalah tampilan blog yang secara sekilas menarik untuk dilihat. Namun, untuk pengalaman membacanya sendiri malah tidak menyenangkan. Saya sendiri merasa tidak nyaman saat membacanya. Jika tertarik, bisa coba mengunjungi [**di sini**](https://haizim.one/blog). 

![Tampilan Blog](https://haizim.one/media/blod-old.png)

![Tampilan Artikel](https://haizim.one/media/blog-old-article.png)

Waktu berlalu, saya semakin disibukkan dengan pekerjaan dan semakin jarang menyentuh blog saya. Membuatnya menjadi terbengkalai. Hingga beberapa waktu lalu saya merasa ingin kembali mencoba aktif menulis. Akhirnya saya putuskan untuk mencoba membuat ulang blog saya tanpa menghilangkan blog saya yang lama. Dan lahirlah blog yang saat ini kamu lihat ini.

## Tampilan

Untuk tampilan blog saya ini. Saya memutuskan untuk lebih fokus ke pengalaman membaca yang lebih nyaman. Sehingga tidak ada dekorasi-dekorasi berlebihan seperti di blog saya sebelumnya.

Untuk tampilan ini, saya dasarkan pada tampilan web [Medium](https://medium.com/). Yang menurut saya _simple_ dan nyaman untuk berlama-lama membaca artikel di sana. Dengan beberapa penyesuaian, jadilah tampilan blog yang kamu lihat ini.

## Stack

Blog ini saya buat menggunakan _stack_ yang bisa dibilang tidak biasa. Di blog ini saya tidak menggunakan pemrosesan _backend_ apapun. Sehingga semua datanya dapat kamu akses langsung tanpa perantara pemrosesan di _server_. _Stack_ yang saya gunakan ialah:

### Alpine JS

Sehari-hari saya menggunakan Laravel sebagai stack utama saya dalam membuat aplikasi web. Di sana terdapat Livewire yang sering digunakan untuk menangani interaksi dinamis di sisi _user_. Namun, pada beberapa project saya merasa Livewire ini kurang stabil. Sehingga saya mencoba mencari alternatif yang mudah dan ketemulah dengan Alpine JS yang juga adalah pembentuk Livewire itu sendiri tapi ia tidak perlu ada pemrosesan di _server_. Jadi, blog ini bisa dibilang adalah salah satu sarana saya untuk belajar menggunakan Alpine JS.

> _"Kenapa Alpine JS? kenapa bukan framework lainnya seperti Vue, React, Svelte atau framework lainnya?"_

Jawabannya adalah karena dari sisi kemudahan & fleksibilitas. Kemudahan karena ini sudah ada sejak Livewire di-install, sehingga saya tidak perlu menambahkan apapun. Juga tidak perlu ada proses _build_ untuk menggunakannya. Fleksibilitasnya ialah karena saya masih dapat menggunakan komponen-komponen Livewire saya yang sudah ada sebelumnya. 

### Markdown

Sebelumnya saya menyampaikan bahwa blog ini tidak memiliki pemrosesan _backend_. Lantas, bagaimana saya menyimpan data artikel saya ini?. Jawabannya adalah, saya menyimpannya di file markdown(`.md`). Dan file-file inilah yang nantinya diambil ketika ingin menampilkan salah satu artikel yang dibuka oleh _user_.

> _"Kenapa Markdown? Kenapa tidak HTML langsung saja?"_

Jawabannya lagi-lagi karena kemudahan. Syntax markdown jauh lebih _simple_ dibanding dengan HTML. Tak seperti HTML yang memang ditujukan untuk membangun tampilan yang lebih kompleks. Markdown lebih sering digunakan untuk menampilkan konten yang lebih banyak berisi artikel dengan sedikit elemen-elemen tambahan seperti gambar, tabel, dsb.

### Showdown JS

Seperti yang kita tahu, konten markdown tidak dapat langsung ditampilkan di halaman HTML. Ia perlu diproses menjadi HTML terlebih dahulu agar dapat tampil dengan baik. Di sini saya menggunakan _library_ bernama **Showdown JS**. _Library_ cukup mudah digunakan. Dapat digunakan dengan meng-_embed_ file .js-nya kemudian dapat dipanggil dengan sedikit effort. Sehingga saya merasa ini cocok untuk saya gunakan. 

Jika tertarik dapat mengunjungi [Web Officialnya](https://showdownjs.com/)

### JSON

> _"Jika data artikel disimpan pada file markdown, lantas apakah index daftar artikel juga disimpan pada file markdown juga?"_

Jawabannya adalah, Tidak. Untuk index saya menyimpannya di sebuah file `.json` agar mudah untuk mengolahnya di Javascript. Di file `json` inilah saya menyimpan data-data seperti id, waktu, judul, ringkasan & kategori. Dari data itulah yang kemudian diolah dengan Javascript dan ditampilkan. 

### Tailwind

Sebenarnya saya tidak perlu menjelaskan apapun terkait Tailwind ini. Ini adalah library css yang sudah sangat populer di kalangan _web developer_. Dengan kepopulerannya itu, membuat komunitasnya juga aktif dan masih terus di-_maintain_. Sehingga saya merasa aman untuk terus menggunakannya.

## Kekurangan

### Ketelanjangan kode

Jika dilihat, dari semua stack yang saya gunakan, semuanya tidak ada yang perlu melalui proses build. Sehingga keseluruhan kodenya dapat dilihat langsung tanpa bantuan _tools_ khusus. Bagi beberapa orang, hal ini dirasa tidak baik karena dapat mengekspose bagaimana alur kerja kode & dapat langsung terlihat jika terdapat hal-hal yang tidak sesuai dengan _best-practice_ yang ada.

Selain itu, ada juga _concern_ dari sisi keamanan. Karena dengan membaca kodenya, dapat terlihat jika di kodenya terdapat suatu kerentanan.

Namun, bagi saya, karena di blog ini tidak ada interaksi dengan _backend_ apapun. Sehingga saya tidak khawatir dengan keamanannya. Dan jika ada hal-hal yang perlu diperbaiki atau ada hal-hal aneh di kode saya, saya tidak keberatan dengan kritik dan sarannya.

### Tidak Ramah SEO

Ini adalah salah satu _concern_ utama bagi aplikasi-aplikasi yang menggunakan _client side rendering_. Dimana saat pertama kali membuka halaman webnya. Kontennya sebenarnya masih kosong dan perlu javascript untuk mengisi kontennya. 

Ini tidak ramah untuk _web crawler/spider_ milik _search engine_. Karena terkadang ada _web crawler_ yang tidak menjalankan javascript yang ada di halaman. Akhirnya data yang didapat oleh _web crawler_ itu hanyalah sebuah halaman kosong. Dan tentunya _search engine_ tidak akan merekomendasikan sebuah halaman kosong di hasil pencariannya.

---

Itulah sedikit penjelasan terkait apa saja dan bagaimana blog ini dibentuk. Jika tertarik dengan kodenya, kamu bisa mengunjungi [repository github ini](https://github.com/haizim/blog-md). Tak lupa jika ada kritik & saran dapat kamu sampaikan melalui email wahihasyim@gmail.com atau di Instagram saya [@haizim](https://www.instagram.com/haizim_)