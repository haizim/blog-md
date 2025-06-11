Berawal dari kebutuhan klien yang memiliki transaksi sekitar 100.000-an dalam sebulan. Namun, di sini klien meminta untuk ID yang digunakan hanya boleh sebanyak 6 digit. Padahal kalau untuk bilangan desimal dengan 6 digit maksimal hanya dapat menampung sampai 999.999. Maka, tak sampai satu tahun sudah akan kehabisan ID. Maka dari situ saya berpikir mencari cara untuk dapat memenuhi request dari klien ini.

Awalnya saya mencoba dengan men-generate string acak gabungan dari huruf dan angka. Namun, salah satu kelemahan dari generate string acak ini adalah perlunya pengecekan string agar selalu unik. Dan dengan semakin banyaknya data di database, maka kemungkinan ID yang sama semakin besar.

Akhirnya saya teringat dengan bilangan hexadecimal. Bilangan dengan basis 16 digit ini juga gabugan dari angka dan huruf, hanya saja hurufnya hanya sampai “F” saja. Maka saya terpikir untuk menambahkan hurufnya hingga “Z”. Sehingga totalnya menjadi 36 digit, bisa juga dikatakan bilangan basis 36. Dengan adanya sistem bilangan ini, pengecekan hanya perlu dilakukan sekali saja sebanyak apapun data yang ada.

### Algoritma & Kode

Untuk konversinya saya menggunakan algoritma yang sama dengan algoritma konversi hexadecimal. Hanya saja di sini saya mengganti 16 dengan 36. Berikut untuk kodenya yang saya buat dengan PHP:

```php
<?php
function res()
{
    $strRes = '0123456789abcdefghijklmnopqrstuvwxyz';
    $arrRes = str\_split($strRes);

    return $arrRes;
}

function decTo36($n)
{
    $arrRes = res();
    $count = count($arrRes);

    $result = "";
    while ($n >= $count) {
        $mod = $n % $count;
        $result = $arrRes\[$mod\] . $result;
        $n = floor($n / $count);
    }

    $result = $arrRes\[$n\] . $result;

    return $result;
}

function decFrom36($n)
{
    $arrRes = res();
    $count = count($arrRes);

    $result = 0;
    $split = str\_split($n);
    $split = array\_reverse($split);

    foreach ($split as $ns => $s) {
        $val = array\_search($s, $arrRes);
        $result += $val \* pow($count, $ns);
    }

    return $result;
}

$dec = 12528;
$b = "9o0";

echo "decTo36 : " . decTo36($dec);
echo "\\n";
echo "decFrom36 : " . decFrom36($b);
echo "\\n";
```

Di sini dapat terlihat bahwa saya mendefinisikan karakter yang dipakai pada fungsi “res()”. Untuk karakternya dapat diubah/disesuaikan sesuai dengan kebutuhan. Jadi jika suatu saat jumlahnya ternyata sudah tidak mencukupi, dapat ditambah sesuai kebutuhan.

Misal, ditambahkan huruf besar. Sehingga karakternya berupa angka 0-9, huruf kecil a-z, dan huruf besar A-Z. Dengan ini totalnya menjadi 62 karakter.

### Dapat Digunakan Berapa Lama?

Dengan bilangan basis 36 sejumlah 6 digit, maka akan menghasilkan kombinasi sebanyak :

```css
kombinasi = 36^6 = 2.176.782.336
```

Jika dalam sebulan ada transaksi sebanyak 100.000-an. Saya bulatkan keatas menjadi 200.000. Maka dapat digunakan selama berapa bulan?

```css
n-bulan = 2.176.782.336 / 200.000 = 10.883,91168 (dibulatkan kebawah = 10.883)
```

Kira-kira berapa tahun tuh?

```css
n-tahun = 10.883 / 12 = 906.91666666667 (dibulatkan kebawah = 906)
```

Jadi dengan bilangan basis 36 sejumlah 6 digit dan dengan jumlah transaksi sampai dengan 200.000, dapat digunakan hingga **906 tahun**.