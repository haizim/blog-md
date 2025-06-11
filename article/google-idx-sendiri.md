Beberapa bulan terkhir ini, banyak konten tentang Google IDX yang berseliweran di lini masa media sosial saya. Sebuah produk dari Google yang memungkinkan kita untuk dapat melakukan coding hanya dengan berbekal web browser.

Namun, satu hal yang membuat saya masih ragu untuk menggunakan layanan ini ialah di sisi kemanan & privasi data dari codingan kita ini. Juga dari banyaknya konten yang berseliweran di timeline saya, saya belum menemukan yang benar-benar menggunakannya untuk kebutuhan sehari-hari. Sehingga belum bisa menggerakkan saya untuk mencobanya.

Hingga akhirnya beberapa saat kemudian ada seseorang di grup Facebook “Linux Indonesia” yang memposting repository Github sebuah code editor berbasiskan web. Yang mana dengan ini kita dapat menggunaknnya secara self-host dan tidak perlu takut akan privasi datanya. Karena sepenuhnya ada di dalam kontrol kita.

Dari sinilah saya berpikir untuk membangun environment web development berbasiskan web. Untuk servernya, saya menggunakan mini pc dengan OS Linux Debian 12 yang sebelumnya saya beli memang untuk saya gunakan mencoba membuat home server.

### Clouflare Tunnel

Ini adalah kunci agar seluruh aplikasi saya dapat diakses melalui web dimana saja. Fungsi dari Cloudflare Tunnel ialah agar dapat menghubungkan domain/sub-domain dengan server kita tanpa harus memiliki IP publik. Jika kamu tahu NGROK, ini adalah layanan semacam itu.

Tunnel ini juga saya gunakan untuk menghubungkan live demo yang berjalan di home server saya dengan cara men-tunnel portnya. Misal untuk Laravel di 8000, nodejs di 3000, dsb. Sehingga saya dapat melihat & mencoba langsung hasil codingan saya.

### Cloudflare SSH Tunnel Web Render

Masih dengan Cloudflare, kali ini saya menggunakan ssh web render yang memungkinkan kita untuk merender terminal ssh di web browser. Sehingga kita tidak memerlukan ssh client semacam putty dan sejenisnya. Cukup dengan web browser, kita dapat mengakses SSH server kita.

SSH ini saya gunakan untuk berbagai hal, seperti manajemen file, instal/update package, hingga melakukan operasi git.

### Code-Server

Inilah bintangnya, inilah code editor yang berbasiskan web yang saya gunakan. Dia memiliki tampilan yang sangat mirip dengan VSCode, code editor yang sehari-hari saya gunakan. Dengan begitu saya dapat langsung terbiasa untuk menggunakannya.

Aplikasi ini secara default berjalan di port 8080. Namun, untuk saya, saya pindahkan ker port lain karena port ini biasanya juga digunakan oleh aplikasi lain. Sehingga saya pindahkan agar tidak bertabrakan. Kemudian saya tunnel menggunakan Cloudflare agar dapat diakses dari internet.

Jika kamu tertarik, dapat langsung mengakses repository-nya di [https://github.com/coder/code-server](https://github.com/coder/code-server)

### PgWeb

Dalam aplikasi, tentu memiliki database. Dan kebetulan database yang saya gunakan ialah PostgreSQL. Sehingga saya membutuhkan DB-management tool yang dapat mengakomodirnya. Dan jatuhlah pilihan saya di PgWeb ini. Sebelumnya saya sempat mencoba phpPgAdmin namun merasa kurang cocok dengan tampilannya.

Aplikasi ini tidak perlu di-install dan dapat langsung dijalankan setelah kita download. Setelah berjalan, saya tunnel menggunakan Cloudflare agar dapat diakses melalui internet.

### Penutup

Salah satu yang saya yakini ialah, bahwa untuk setiap aplikasi komersil, pasti memiliki versi open-source-nya. Dan dengan keyakinan tersebut, saya akhirnya mencoba untuk membuat Google IDX saya sendiri dengan aplikasi opensource.

Juga untuk tambahan, seluruh aplikasi yang saya sebutkan diatas juga saya buatkan service masing-masing. Sehingga ketika home server saya dinyalakan, semuanya dapat langsung berjalan otomatis