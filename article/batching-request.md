Setelah sebelumnya saya melakukan modularisasi service pada aplikasi _omnichannel_, ternyata permasalahannya tak sampai di situ saja. Kendala terkait penggunaan _resource_ sudah tertangani, tapi ternyata masih tersisa masalah lain, yaitu maksimal jumlah _request_ per-menit.

Dengan semakin banyaknya jumlah pesanan per-hari, maka jumlah webhook yang dikirim oleh _marketplace_ juga semakin meningkat. Untuk jumlah _request webhook_ yang dikirimkan mulai dari pesanan baru hingga selesai dapat mencapai kurang lebih 5 _request webhook_, dan semua itu oleh sistem _hosting_ terhitung sebagai _request_. Bisa dibayangkan betapa banyaknya _webhook_ yang dikirim oleh _marketplace_ dalam sehari. Hingga jumlah _request_ permenit yang diterima oleh _server_ melebihi kuota yang diberikan oleh _web hosting_.

Hal ini menyebabkan kuota _request_ yang diberikan oleh _web hosting_ menjadi sering habis. Dan ini berimbas kepada user yang menadi kesulitan mengakses aplikasi karena tidak kebagian jatah _request_.

Untuk menyelesaikan masalah ini, awalnya saya berncana untuk menyewa sebuah VPS dan membuat semacam aplikasi untuk melakukan _batching request webhook_ kemudian baru dikirimkan kepada aplikasi utama setiap menit. Baru setup awal aplikasi, saya tiba-tiba terpikirkan **Cloudflare**,  sebuah layanan yang selama ini saya kenal dengan layanan CDN-nya. Saya terpikirkan "kira-kira bisa gak ya cloudflare dipakai buat _batching_ request?".

Dari pertanyaan ini, saya meluncur ke ChatGPT untuk mencari jawabannya. Dan ternyataaa... ADA. Cloudflare menyediakan layanan yang dapat mengakomodasi kebutuhan saya ini. Oleh ChatGPT dijelaskan bahwa Cloudflare memiliki layanan **Wokers** yang memungkinkan kita untuk menghosting aplikasi javascript kita di sana. Juga dibantu dengan **Queues** yang memungkinkan kita untuk menyimpan data untuk keperluan batching saya ini.

Mengetahui hal ini, sekalian saja saya minta ChatGPT untuk membuatkan contoh kodenya. Kode buatan ChatGPT ini tentu tidak serta-merta saya gunakan, saya memodifikasinya agar sesuai dengan kebutuhan saya. Berikut adalah kode yang dibuatkan oleh ChatGPT sebelum saya modifikasi: 

```javascript
export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST' && new URL(request.url).pathname === "/enqueue") {
      const contentType = request.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        return new Response("Expected JSON", { status: 400 });
      }

      let data;
      try {
        data = await request.json();
      } catch {
        return new Response("Invalid JSON", { status: 400 });
      }

      await env.REQUEST_BATCH.send(data);
      return new Response("Queued!", { status: 202 });
    }

    return new Response("Not found", { status: 404 });
  },

  async queue(batch, env, ctx) {
    const payload = batch.messages.map(msg => msg.body);
    try {
      const res = await fetch(env.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload })
      });

      if (!res.ok) throw new Error(`Failed: ${res.statusText}`);

      for (const msg of batch.messages) msg.ack();
    } catch (err) {
      console.error("Batch send failed:", err);
      // jangan ack untuk retry otomatis
    }
  }
};
```

Sebelum membahas kode ini, saya ingin menjelaskan sedikit mengenai Cloudfalre Queues. Jadi, fitur ini memungkinkan kita untuk men-set 2 kondisi kapan data yang masuk _queues_ ini akan _"dilepaskan"_. Kondisi pertama berdasarkan jumlah _queues_, misal 100 _queues_, jika sudah mencapai batas ini,  maka datanya akan dilepaskan. Kondisi kedua adalah berdasarkan waktu, misal 60 detik, jika sudah 60 detik maka datanya akan dilepaskan, meskipun secara jumlah belum mencapai 100 _queues_.

Oke, kita bahas alur kodenya secara umum. Secara umum, kode ini terdiri dari 2 method, `fetch` & `queue`.
- **fetch** : _method_ ini terpnggil ketika _request webhook_ dari marketpalce diterima oleh worker. Kemudian _worker_ menyimpannya ke dalam _queue_
- **queue** : _method_ ini terpanggil ketika salah satu kondisi pelepasan data dari _queue_ terpenuhi. Di sini akan mengirimkan data yang dilepaskan tersebut ke aplikasi utama sekaligus dalam bentuk _batch_
  
Setelah setup selesai, saya kemudian mengalihkan tujuan _webhook_ di _marketplace_ dari _server_ aplikasi utama ke _server worker_ milik CLoudflare. Alhamdulillah, setelah saya terapkan ini, kasus kuota _request_ habis sudah tidak terjadi lagi. User dapat kembali menggunakan aplikasi dengan nyaman.