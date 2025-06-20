Saat melakukan pitching maupun diskusi dengan klien sebelum memulai proses development, saya biasanya tak hanya membawa list deskripsi fitur aplikasi yang dibutuhkan oleh klien. Namun, saya juga membawa design wireframe dari aplikasinya. Ini berguna agar klien dapat memiliki gambran yang lebih utuh terkait bagaimana aplikasi tersebut saat nanti jadi. Juga ini berguna untuk memperjelas alur penggunaan aplikasi kelak.

Selama ini untuk pembuatan wireframe saya menggunakan sebuah aplikasi di linux bernama "Pencil". Aplikasi ini memang dikhususkan untuk membuat wireframe. Namun, terkadang saya merasa kurang efektif dalam penggunaannya karena saya harus copas manual tiap halaman kemudian mengganti kontennya. Belum jika menambahkan halaman baru, ia hanya dapat menambahkan halaman terkahir. Sehingga saya harus menata secara manual halamannya satu-persatu. Padahal halamannya pasti berjumlah puluhan, sehingga beberapa kali membuat saya kesal.

Maka, pada saat long weekend kemarin saya tercetus sebuah ide untuk membuat sebuah framework untuk saya gunakan agar memudahkan pembuatan wireframe. Sehingga saya tidak harus menghadapi kekesalan saya sebelumnya. Karena ini saya gunakan untuk membuat wireframe, maka untuk style desain tampilannya saya buat mirip dengan style desain wireframe yang biasa saya gunakan.

Di framework saya ini terdapat 2 perbedaan jika dibandingkan framework MVC PHP pada umumnya, yaitu:

- View : Pada saat pemanggilan view, akan langsung secara default menggabungkan dengan template. Sehingga pada file view tidak perlu untuk memanggilnya secara manunal.
- Model : Di sini tidak menerapkan koneksi dengan database. Sebagai gantinya digunakanlah Collection dari Illuminate/Collection. Ini saya terpakan atas alasn kepraktisan. Yaitu dikarenakan saya tidak mau dipusingkan dengan manajemen database pada saat masih dalam tahap prototyping dan belum benar-benar memasuki tahap development.

Selain itu, juga mendukung pemanggilan directive pada file view seperti pada laravel blade, seperti {{ }}, @if():, @switch(), @for(), @foreach(), @while()

Jika tertarik dapat mengunjungi [https://github.com/haizim/werfrem](https://github.com/haizim/werfrem)