Bagi banyak orang, adopsi AI coding assistant sudah dilakukan sejak lama. Namun, saya termasuk yang tertinggal, saya baru mencoba beberapa pekan belakangan ini. Itu pun masih sangat minim penggunaannya. 

Saya coba riset apa saja pilihan yang tersedia. Mulai dari menonton video Youtube, membaca artikel, hingga mencoba menggunakan fasilitas deep research dari berbagai penyedia. Dari begitu banyak pilihan yang tersedia, akhirnya saya mengerucutkannya menjadi 3, yaitu : Claude, ChatGPT & Gemini.

### Pengujian & Hasil

Selain penggunaan AI Coding Assistant, saya juga sedang tertarik untuk mempelajari AlpineJS. Akhirnya saya mencoba menggunakan usecasce ini untuk menguji masing-masing AI. Di sini saya memiliki 3 prompt:


**Satu**

```markdown
saat ini saya menggunakan laravel ebagai framework utama saya. dan sering menggunakan jquery untuk handle javascript. meski tak jarang juga menggunakan js vanilla. dan saya ada rencana untuk memperlajari alpinejs. bagaimana menurutmu?
```

- GPT-4-Turbo: Secara umum menyarankan untuk menggunakan AplineJS. Pembahasan seputar alasan mengapa menggunakan, kapan kondisi yang kurang cocok & tips belajar
- Gemini 2.5 flash : Secara umum menyarankan untuk menggunakan AplineJS. Pembahasan seputar alasan mengapa menggunakan & tips belajar
- Claude Sonet 4 : Secara umum menyarankan untuk menggunakan AplineJS. Pembahasan seputar alasan mengapa menggunakan, keuntungan sebagai pengguna laravel + jquery, Kurva belajar yang ringan, fitur utama, konsep yang sering digunakan, hal yang menarik & perbedaan dengan jquery


**Dua**

```markdown
buatkan saya contoh sederhana untuk dynamic table. dengan format tabel
| no. | nama | alamat | provinsi | kota | action |
| --- | --- | --- | --- | --- | --- |
| auto-increment | input text | textarea | dropdown | dropdown | delete row button |
```

- **GPT-4-Turbo** : Secara fungsi sesuai. Namun, untuk tampilan sangat basic dan minim styling
![perbandingan-ai-coding-table-gpt](https://haizim.one/media/perbandingan-ai-coding-table-gpt.png)

- **Gemini 2.5 flash** : Secara fungsi sudah sesuai. Tampilan menggunakan tailwind sehingga memiliki tampilan yang lebih baik. Ditambah terdapat textarea dibawah yang menampilkan data json, sehingga memudahkan saya untuk melihat perubahan data setiap terjadi perubahan
![perbandingan-ai-coding-table-gemini](https://haizim.one/media/perbandingan-ai-coding-table-gemini.png)

- **Claude Sonet 4** : Secara fungsi sudah sesuai. Styling murni menggunakan css dan dapat menghasilkan tampilan yang baik. Meskipun ada sedikit ovelap pada input text pada kolom nama. Juga menambahkan fitur untuk melihat data json, tapi perlu klik tombol untuk menampilkannya. Serta terdapat konfirmasi terlebih dahulu saat ingin menghapus baris.
![perbandingan-ai-coding-table-claude](https://haizim.one/media/perbandingan-ai-coding-table-claude.png)


**Tiga**

```markdown
bagaimana jika saya ingin membuat tampilan yang dapat melakukan pembahan item secara vertikal & horizontal. dimana setiap itemnya berisi:
- no. : auto increment
- nama : input text
- alamat : textarea
- provinsi : dropdown
- kota : dropdown
- action : tombol hapus, pindah kanan & kiri
dan setiap barisnya dapat dapat dihapus dan dipindah atas atau bawah. juga dapat menambahkan kolom pada masing2 baris, sehingga tiap baris dapat memiliki jumlah kolom yang berbeda.
jangan gunakan tabel, gunakan flexbox
```

- **GPT-4-Turbo** : Secara fungsi sesuai. Namun, untuk tampilan sangat basic dan minim styling
![perbandingan-ai-coding-dynamic-gpt](https://haizim.one/media/perbandingan-ai-coding-dynamic-gpt.png)

- **Gemini 2.5 flash** : Secara fungsi sudah sesuai. Tampilan menggunakan tailwind sehingga memiliki tampilan yang lebih baik. Ditambah terdapat textarea dibawah yang menampilkan data json, sehingga memudahkan saya untuk melihat perubahan data setiap terjadi perubahan. Serta secara otomatis menonaktifkan tombol untuk memindahkan posisi ke atas/bawah/kana/kiri jika memang tidak dapat dipindahkan ke arah tersebut, sehingga user tahu bahwa opersi tersebut tidak dapat dilakukan. Namun, masih ada inkonsistensi pada pemilihan button untuk operasi tiap itemnya, dimana untuk pindah kiri & kanan menggunakan simbol & label, sedangkan untuk tombol hapus hanya simbol tanpa label dan berukuran kecil. Sehingga agak menyulitkan untuk menekannya.
![perbandingan-ai-coding-dynamic-gemini](https://haizim.one/media/perbandingan-ai-coding-dynamic-gemini.png)

- **Claude Sonet 4** : Secara fungsi sudah sesuai. Styling murni menggunakan css dan dapat menghasilkan tampilan yang baik. Pemilihan waran tombol juga lebih bervariasi. Juga menambahkan fitur untuk melihat data json, tapi perlu klik tombol untuk menampilkannya. Serta secara otomatis menonaktifkan tombol untuk memindahkan posisi ke atas/bawah/kana/kiri jika memang tidak dapat dipindahkan ke arah tersebut, sehingga user tahu bahwa opersi tersebut tidak dapat dilakukan. Serta terdapat konfirmasi terlebih dahulu saat ingin menghapus baris.
![perbandingan-ai-coding-dynamic-claude](https://haizim.one/media/perbandingan-ai-coding-dynamic-claude.png)


### Kesimpulan

Dari ketiga hasil dari prompt tersebut, saya dapat mengambil kesimpulan bahwa secara umum Claude Sonet 4 adalah yang memberikan hasil terbaik, tak hanya memberikan tampilan yang menarik, tapi juga memberikan fungsionalitas tambahan untuk konfirmasi saat ingin menghapus. Kemudian disusul oleh Gemini 2.5 flash yang juga memberikan tampilan yang menarik serta sudah menerapkan tailwind. Dan di posisi akhir ada GPT-4-turbo yang hanya memberikan fungsionalitas utama tanpa memberikan sentuhan pada tampilan.

Mungkin kamu berpikir bahwa sebenarnya untuk skenario ini jika mau mengulik prompt lebih jauh, maka bisa saja ketiganya memberikan hasil yang bisa setara. Tentu. Namun, seperti benchmarking pada umumnya,  saya ingin agar adil sehingga semua model mendapat prompt yang sama tanpa ada tambahan prompt lanjutan.