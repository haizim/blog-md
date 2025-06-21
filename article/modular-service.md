Terhitung sudah satu tahun lebih sejak aplikasi _omnichannel marketplace_ yang saya buat telah di-_deploy_ di _production_. Seiring berjalannya waktu, bisnis dari klien saya juga semakin bertumbuh. Jika dibandingkan dengan saat pertama kali, jumlah pesanan/hari saat ini sudah naik berkali-kali lipat. Tentu saya juga bersyukur. Alhamdulillah.

Namun, ini artinya jumlah data yang berseliweran juga semakin besar & makin sering. Hal ini tentu berbanding lurus dengan beban yang ditanggung oleh server. Semakin hari beban yang ditanggungnya juga semakin besar. Dan hal ini mulai berdampak pada performa aplikasi yang terasa bagi user. 

Awalnya klien meminta untuk menaikkan spesifikasi server yang digunakan. Saya turuti keinginan klien ini. Namun, ternyata masih tidak membantu banyak. Performa yang didapatkan masih belum terasa nyaman di user.

Saat saya mendapat laporan ini, saya mulai dengan melihat log penggunaan _resource_-nya di cPanel. Saya temukan ternyata sering terjadi _fault_ untuk _CPU usage_-nya. Oke, saya sudah tau beban terberatnya terletak dimana. 

Kemudian saya lanjutkan dengan analisa proses apa saja yang berpotensi memiliki beban terbesar & paling sering digunakan. Dari hasil analisa saya, akhirnya saya temukan 2 proses yang menjadi pelaku utama yang ternyata adalah saat proses penggabungan file resi berbentuk PDF untuk kemudian di-_download_ dan proses _export_ data pesanan yang mencapai ribuan pesanan dalam satu file excel.

Untuk proses penggabungan PDF, saya menggunakan _ghostscript_ yang ternyata saya baru tahu kalau ini termasuk proses yang cukup memakan _resource_. Apalagi user dalam sekali cetak resi biasanya langsung 100 resi dan ada beberapa user yang mencetak resi di waktu yang berdekatan. Kenapa menggunakan _ghostscript_? Karena file PDF-nya berasal dari 3 marketpalce yang berbeda, maka ketiganya memiliki encoding yang berbeda pula. Saya sudah coba cari _package_ PHP untuk penggabungan file PDF, tetapi tidak menemukan yang dapat memenuhi kebutuhan ini. Maka, akhirnya saya menggunakan _ghostscript_ ini untuk menggabungkan file PDF.

Kemudian, untuk proses data pesanan ke excel ini, tak perlu ditanya. Karena jumlah pesanannya mencapai ribuan, maka ia otomatis akan menyedot _resource_ yang cukup besar juga. Padahal masih ada proses lain yang juga memerlukan jatah _resource_. Meskipun intensitasnya tidak sering, sekitar 5 _export_ perhari, namun sekalinya dilakukan _export_ maka sistem akan terpengaruh seluruhnya.

Jika dilihat, kedua penyebab ini memiliki benang merah, yaitu keduanya sama-sama merupakan proses export. Dari temuan ini, saya melaporkan kepada klien dan menyarankan untuk memisahkan kedua proses tersebut ke server tersendiri. Sehingga ketika kedua proses ini sedang mengambil banyak _resource_, maka aplikasi utamanya tidak akan terpengaruh dengan penurunan performanya.

Setelah saya ajukan dan mendapat persetujuan dari klien, saya mulai eksekusi dari memisahkan proses penggabungan file PDF. Ini karena proses inilah yang paling sering dijalankan. Setelah saya pisahkan proses ini, peningkatan performanya langsung saangat terasa. CPU langsung berasa baru saja melepaskan beban berat yang dipikul dan dapat meregangkan pundak.

Baru kemudian saya lanjutkan dengan memisahkan proses export data pesanan. Meskipun bukan proses yang sering dijalankan, namun sekalinya dijalankan langsung berasa. Maka dari itu tetap perlu dipisahkan agar ketika dijalankan tidak membebani server dari aplikasi utama.

Setelah kedua proses tersebut dipisahkan, saya masih tetap pantau penggunaan _resource_ CPU. Satu hari aman... Dua hari masih aman... Satu pekan tidak ada tanda-tanda penggunaan CPU yang berlebih. Oke, akhirnya klien sudah approve & user sudah mendapatkan performa aplikasi yang nyaman. User nyaman, developer tenang :)).