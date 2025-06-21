Beberapa waktu lalu saya mendapat request untuk integrasi aplikasi dengan API Third-Party. Namun, dari penyedia Third-Party ini mengharuskan saya untuk mendaftarkan IP address saya untuk dimasukkan ke dalam whitelist mereka, di sini saya mendaftarkan IP dari server development & IP wifi saya. Nah, di sinilah saya mendapat problem dikarenakan untuk wifi yang saya gunakan itu tidak punya static IP address, sehingga setiap beberapa hari sekali akan berganti. Karena IP public saya terus berganti, maka saya harus mendaftarkan kembali IP saya, yang lama kelamaan membuat saya sungkan ke pihak Third-Party ini.

Sebenernya idelanya ada alternatif, dibandingkan mendaftarkan IP yang terus berubah, daftarkan saja DDNS(Dynamic Domain Name System) saja. Namun, dari pihak third-party masih belum mendukung DDNS. Sehingga harus menggunakan IP address.

Dari sini saya terpikir, kan yang selalu berubah ada IP dari wifi saya, tapi untuk IP server development saya kan statis, kenapa gak coba untuk forward request dari wifi/laptop saya ke server development kemudian diteruskan ke host yanng dituju saja?

Saya coba-coba cari tahu, ternyata bisa dengan cara menjadikan server saya sebagai server proxy. Namun, di hosting server yang saya sewa ini tidak memungkinkan untuk melakukannya.
Akhirnya saya terpikir untuk membuat sendiri forwardernya. 

Silahkan dapat dilihat di repo github saya:
[https://github.com/haizim/api-forward](https://github.com/haizim/api-forward)