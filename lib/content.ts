/**
 * Semua konten halaman ada di sini.
 * Item bertanda PLACEHOLDER adalah contoh. Ganti dengan data asli Cak Mimin
 * sebelum situs dipublikasikan (nomor WA, kota, harga, testimoni, syarat kemitraan).
 */

// PLACEHOLDER: nomor WhatsApp format internasional tanpa "+" atau spasi.
export const WHATSAPP_NUMBER = "6281234567890";
// Dari label toples Bumbu Rujak Bangkok: "Oleh-oleh khas Surabaya".
export const CITY = "Surabaya";

// Tampilkan penanda "Data contoh" di halaman selama konten masih placeholder.
// Set ke false setelah harga, testimoni, syarat mitra, dan nomor WA diganti data asli.
export const SHOW_SAMPLE_BADGE = true;

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "#cerita", label: "Cerita" },
  { href: "#varian", label: "Varian" },
  { href: "#cara", label: "Cara Ngerujak" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kemitraan", label: "Kemitraan" },
];

export const hero = {
  headline: ["Manisnya", "dari nira,", "bukan dari pabrik."],
  sub: ["Bumbu rujak manis racikan Cak Mimin.", "Gula aren asli · Tanpa pengawet."],
  cta: "Pesan via WhatsApp",
  waText: "Halo Cak Mimin, saya mau pesan bumbu rujak manis.",
};

// PLACEHOLDER: cerita asal-usul. Ganti dengan kisah asli keluarga Cak Mimin.
export const stages = [
  {
    no: "01",
    name: "Nira",
    title: "Berawal dari pohon aren",
    body: "Manisnya bumbu kami tidak datang dari karung gula pasir. Ia dimulai dari nira, getah bening pohon aren yang disadap di pagi hari.",
    img: "/img/story-nira.png",
    focus: "50% 40%",
    alt: "Bambu penampung nira menempel di batang pohon aren",
  },
  {
    no: "02",
    name: "Wajan",
    title: "Dimasak pelan sampai pekat",
    body: "Nira dimasak berjam-jam di wajan besi di atas tungku kayu, sampai berubah jadi gula aren yang legit dan harum karamel.",
    img: "/img/story-wajan.png",
    focus: "50% 88%",
    alt: "Gula aren mendidih pelan di wajan besi di atas api kayu",
  },
  {
    no: "03",
    name: "Cobek",
    title: "Diracik dengan takaran keluarga",
    body: "Gula aren bertemu kacang sangrai, cabai, dan asam jawa. Takarannya resep Cak Mimin sejak warung pertamanya di " + CITY + ".",
    img: "/img/story-cobek.png",
    focus: "50% 50%",
    alt: "Cobek batu berisi gula aren, kacang, cabai, dan asam",
  },
  {
    no: "04",
    name: "Piring",
    title: "Sampai di piring Anda",
    body: "Tanpa pengawet, tanpa pemanis buatan. Tinggal tuang di atas buah segar, rujak siap dinikmati bareng keluarga.",
    img: "/img/story-piring.png",
    focus: "45% 72%",
    alt: "Sepiring rujak buah segar di atas daun pisang dengan bumbu rujak",
  },
];

// Dari kemasan asli (foto brand): botol 250 ml / 400 gr, varian dibedakan warna tutup.
// Tingkat pedas mengikuti urutan nama varian. PLACEHOLDER: deskripsi rasa, harga.
export const SIZE = "250 ml / 400 gr";
export const variants = [
  { id: "manis", name: "Manis", cap: "Tutup hijau", heat: 1, note: "Manis legit gula aren, hampir tanpa pedas. Aman untuk anak-anak.", price: "Rp 25.000", img: "/img/produk/botol-manis.png" },
  { id: "sedang", name: "Sedang", cap: "Tutup putih", heat: 2, note: "Manisnya tetap juara, pedasnya mulai terasa di ujung lidah.", price: "Rp 25.000", img: "/img/produk/botol-sedang.png" },
  { id: "pedas", name: "Pedas", cap: "Tutup kuning", heat: 3, note: "Seimbang antara manis aren dan cabai rawit. Pilihan paling aman untuk rujak warung.", price: "Rp 25.000", img: "/img/produk/botol-pedas.png" },
  { id: "super-pedas", name: "Super Pedas", cap: "Tutup merah", heat: 4, note: "Untuk yang suka berkeringat. Cabai paling banyak, manisnya tetap ada.", price: "Rp 27.000", img: "/img/produk/botol-super-pedas.png" },
] as const;

// Produk pendamping. "Oleh-oleh khas Surabaya" dari label asli. PLACEHOLDER: deskripsi, harga.
export const bangkok = {
  name: "Bumbu Rujak Bangkok",
  tag: "Oleh-oleh khas Surabaya",
  body: "Bumbu rujak kering dalam toples, tinggal taburkan di atas buah potong. Praktis dibawa pulang sebagai buah tangan.",
  price: "Rp 20.000",
  img: "/img/produk/toples-bangkok.png",
};

// Sertifikasi dikonfirmasi pemilik (Halal Indonesia & BPOM). PLACEHOLDER: nomor registrasi.
export const certifications = [
  { name: "Halal Indonesia", no: "ID00000000000000" },
  { name: "BPOM RI", no: "MD 000000000000" },
];

export const steps = [
  { no: "1", title: "Kupas dan potong buah", body: "Mangga muda, bengkuang, jambu air, nanas, timun. Pakai yang segar dan dingin." },
  { no: "2", title: "Kocok botolnya", body: "Gula aren bisa sedikit mengendap. Kocok botol sebentar sampai bumbu rata." },
  { no: "3", title: "Tuang atau cocol", body: "Siram di atas buah atau sajikan di cobek kecil untuk dicocol bersama." },
  { no: "4", title: "Simpan di kulkas", body: "Tutup rapat setelah dibuka dan habiskan dalam waktu simpan di label." },
];

// PLACEHOLDER: testimoni contoh. Ganti dengan ulasan asli pelanggan (dengan izin mereka).
export const testimonials = [
  {
    quote: "Rasanya persis rujak langganan waktu kecil. Manisnya gula aren beneran, nggak nyangkut di tenggorokan.",
    name: "Bu Ratna",
    role: "Ibu rumah tangga, Sidoarjo",
  },
  {
    quote: "Saya jual rujak buah tiap hari. Pakai bumbu ini, rasanya stabil dan pelanggan nggak protes.",
    name: "Mas Hendra",
    role: "Penjual rujak, Surabaya",
  },
  {
    quote: "Dibawa pulang ke Jakarta sebagai oleh-oleh. Satu botol langsung habis buat arisan.",
    name: "Dina",
    role: "Pembeli oleh-oleh",
  },
];

// PLACEHOLDER: skema dan syarat kemitraan.
export const partnership = {
  title: "Jual bumbu Cak Mimin di tempat Anda",
  body: "Untuk penjual rujak, toko oleh-oleh, warung, dan reseller. Kami kirim langsung, harga khusus untuk pembelian rutin.",
  tiers: [
    { name: "Penjual Rujak", detail: "Kemasan curah 1 kg untuk pemakaian harian di gerobak atau kedai." },
    { name: "Reseller", detail: "Harga grosir mulai 24 botol, bebas jual online maupun offline." },
    { name: "Toko Oleh-oleh", detail: "Stok rutin dan materi display untuk rak toko Anda." },
  ],
  cta: "Ajukan Kemitraan",
  waText: "Halo Cak Mimin, saya tertarik bermitra. Saya dari (nama usaha/kota).",
  img: "/img/kemitraan.png",
};
