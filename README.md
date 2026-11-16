# Cak Mimin · Landing Page

Website bumbu rujak manis **Cak Mimin**, oleh-oleh khas Surabaya.
Live: https://rujakcakmimin.vercel.app

Dibangun dengan Next.js 16, Tailwind CSS 4, GSAP, dan Lenis.

---

## Mengubah isi website (tanpa perlu paham kode)

Hampir semua tulisan, harga, nomor, dan link ada di **satu file**:

**`lib/content.ts`**

| Yang ingin diubah | Cari di `lib/content.ts` |
|---|---|
| Nomor WhatsApp pemesanan | `WHATSAPP_NUMBER` (format `62…`, tanpa `+` atau spasi) |
| Kota | `CITY` |
| Judul & subjudul hero | `hero` |
| Cerita 4 tahap (Nira, Wajan, Cobek, Piring) | `stages` |
| Varian botol: nama, deskripsi, harga, tingkat pedas | `variants` |
| Ukuran botol | `SIZE` |
| Bumbu Rujak Bangkok | `bangkok` |
| Nomor sertifikat Halal & BPOM | `certifications` |
| Langkah "Cara Ngerujak" | `steps` |
| Testimoni pelanggan | `testimonials` |
| Paket kemitraan & link grup reseller | `partnership` |

Data yang masih **contoh** ditandai komentar `PLACEHOLDER`. Setelah semuanya diganti dengan data asli,
ubah `SHOW_SAMPLE_BADGE` menjadi `false` agar label "Data contoh" hilang dari halaman.

### Cara paling mudah: edit langsung di GitHub
1. Buka file `lib/content.ts` di GitHub, klik ikon pensil (Edit).
2. Ubah teks di antara tanda kutip `"…"`. Jangan hapus tanda kutip, koma, atau kurung.
3. Klik **Commit changes**.
4. Jika repo ini sudah terhubung ke Vercel, website akan ter-update otomatis dalam 1–2 menit.

### Mengganti foto
Foto ada di folder `public/img/`. Ganti file dengan **nama yang sama** (misalnya `public/img/produk/botol-manis.png`)
agar tidak perlu mengubah kode. Foto botol sebaiknya PNG berlatar transparan.

| Folder | Isi |
|---|---|
| `public/img/produk/` | Botol Manis, Sedang, Pedas, Super Pedas, toples Bangkok |
| `public/img/story-*.png` | Foto 4 tahap cerita |
| `public/img/steps-tuang.png` | Foto bagian Cara Ngerujak |
| `public/img/kemitraan.png` | Foto bagian Kemitraan |
| `public/plates/` | Gambar hero (aliran nira, cobek, tekstur latar) |

---

## Menjalankan di komputer sendiri

Butuh [Node.js](https://nodejs.org) versi 20 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Tambahkan `?static` di URL (http://localhost:3000/?static) untuk melihat halaman tanpa animasi.

## Publikasi (Vercel)

Cara termudah: di [vercel.com](https://vercel.com) pilih **Add New → Project**, impor repo ini, lalu klik Deploy.
Setiap perubahan yang di-commit ke branch `main` akan otomatis dipublikasikan.

Lewat terminal:

```bash
npx vercel deploy --prod
```

## Struktur

| Path | Isi |
|---|---|
| `lib/content.ts` | Semua konten (lihat di atas) |
| `components/` | Bagian-bagian halaman: `Hero`, `Story`, `Variants`, `Steps`, `Testimonials`, `Partnership`, `Closing`, `Logo` |
| `app/globals.css`, `app/sections.css`, `app/story.css` | Tampilan (warna, huruf, tata letak) |
| `DESIGN.md` | Panduan desain: warna, huruf, aturan tata letak |
| `assets/brand-original/` | Foto produk asli dari brand (sumber potongan botol) |
| `.impeccable/` | Arsip proses desain (mockup, prompt gambar, review). Tidak dipakai website. |

Desain juga tersedia sebagai file Figma yang bisa diedit (minta tautannya ke pengembang).
