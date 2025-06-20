Selama beberapa bulan terakhir ini saya mengerjakan proyek yang mengharuskan saya untuk menggunakan API dari beberapa marketplace. Fitur utama yang saya gunakan ialah Pengaturan Pesanan, Produk, Retur & Pengiriman. Selain itu, saya juga menggunakan webhook untuk mendapatkan update data terbaru dari marketpalce.
Saya tak hanya consume API saja, tapi saya juga mengurusi mulai dari pendaftaran akun developer untuk masing-masing marketpalce tesebut. Tentunya dengan dibantu pihak klien untuk melengkapi syarat-syarat yang dibutuhkan.
Dari pengalaman saya menggunakan ketiga API marketplace tersebut, saya merasakan beberapa kelebihan & kekurangnan dari masing-masingnya

TikTok Shop
Pros :
- Fitur cukup lengkap & mudah untuk digunakan. Dari ketiga marketplace ini, TikTok Shop memiliki API yang paling mudah digunakan
- Data berjalan yang membutuhkan real-time update didukung oleh Webhook
- Memiliki Development toolkit yang cukup lengkap. Mulai dari API testing tool hingga dummy account

Cons :
- Proses perstujuan saat pendaftaran yang lama. Setelah 2 pekan menunggu, akhirnya saya mengajukan komplain melalui form CS, baru kemudian keesokan harinya mendapat persetujuan
- Memiliki 2 versi API yang berjalan, yaitu versi Legacy(202212) & New(202309)
- Belum memiliki SDK sendiri. Ada package composer unofficial "ecomphp/tiktokshop-php" yang cukup membantu

Shopee
Pros :
- Dokumentasi disertai contoh kode untuk beberapa bahasa pemrograman, termasuk PHP

Cons : 
- Harus memiliki aplikasi demo yang dapat dicoba oleh pihak Shopee. Sehingga saya baru menyelesaikan pendaftaran di tengah-tengah pengerjaan proyek
- Webhook tidak menyediakan update data retur. Sehingga saya mengakalinya dengan mengambil data retur setiap 30 menit sekali
- Umur token yang sebentar, hanya sekitar 3 jam. Saya mengakalinya dengan cara merefreshnya setiap kali webhook gagal karena umur token yang habis
- API testing tool yang hanya bisa digunakan untuk dummy account saja
- Belum memiliki SDK sendiri. Sehingga saya harus membuat fungsi-fungsi sendiri yang memudahkan saya consume API

Lazada
Pros :
- Proses persetujuan cepat. Tidak sampai 1x24 jam sudah mendapatkan balasan
- Memiliki Development toolkit yang cukup lengkap. Mulai dari API testing tool hingga dummy account
- Memiliki SDK sendiri

Cons :
- Dokumentasi kurang lengkap. Terkhusus untuk keterangan status juga keterangan jenis-jenis partner beserta privilage-nya
- Untuk jenis partner "Enterprise Self-Developed" hanya dapat digunakan maksimal untuk 40 toko
- Untuk jenis partner "Enterprises Commercial" memiliki persyaratan yang cukup banyak. Seperti rekening bank hingga sertifikat copyright yang diterbitkan oleh "Chinese Copyright Administration Bureau"
- Untuk menggunakan webhook, url harus memiliki ssl tipe OV atau EV. Sehingga saya tidak jadi menggunakan webhook dan memilih untuk menggunakan cronjob untuk mengambil data yang dibutuhkan setiap 30 menit sekali

Demikian untuk kesan saya setelah menggunakan beberapa API marketplace. Jika dilihat memang lebih banyak menjelaskan terkait kekurangannya. Saya menuliskan demikian agar pembaca dapat mengantisipasinya terlebih dahulu sebelumnya.
Jika memiliki pertanyaan silahkan untuk menuliskannya di kolom komentar.
Jika anda memiliki rencana untuk membuat aplikasi yang menggunakan API markteplace silahkan untuk ketuk DM saya