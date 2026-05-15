// ============================================================
//  VELMORA STORE — KONFIGURASI PRODUK & TOKO
//  Edit file ini untuk mengubah nama, deskripsi, harga produk
//  serta link Telegram, WhatsApp, dan musik background
// ============================================================

export const STORE_CONFIG = {
  storeName: "Velmora Store",
  storeTagline: "Your Trusted Digital Store",
  storeDescription:
    "Menyediakan berbagai layanan digital berkualitas tinggi dengan harga terjangkau dan proses cepat.",

  // ── Ganti dengan username / nomor kamu ──────────────────
  telegramChannel: "https://t.me/velmorastore",   // link channel telegram
  telegramAdmin:   "https://t.me/velmoraadmin",   // link admin telegram
  whatsapp:        "https://wa.me/6281234567890", // nomor WA (format: 62xxx)

  // ── URL file musik .mp3 / .ogg (kosongkan = tombol tetap muncul) ──
  musicUrl: "",
};

export const products = [
  // ── PANEL ────────────────────────────────────────────────
  {
    id: "panel-ptero",
    category: "Panel",
    name: "Panel Pterodactyl",
    description:
      "Panel game server management profesional berbasis Pterodactyl. Siap pakai, performa tinggi, dan mudah dikonfigurasi.",
    price: "Hubungi Admin", // ← ganti harga di sini
    icon: "🖥️",
  },
  {
    id: "reseller-ptero",
    category: "Panel",
    name: "Reseller Panel Pterodactyl",
    description:
      "Paket reseller panel Pterodactyl. Kelola dan jual server hosting game dengan mudah menggunakan panel canggih ini.",
    price: "Hubungi Admin", // ← ganti harga di sini
    icon: "🔄",
  },

  // ── APK (nama & deskripsi bebas kamu edit) ───────────────
  {
    id: "apk-1",
    category: "APK",
    name: "APK Custom 1",           // ← ganti nama APK
    description: "Deskripsi APK bisa kamu edit sesuai kebutuhan.", // ← ganti deskripsi
    price: "Hubungi Admin",         // ← ganti harga
    icon: "📱",
  },
  {
    id: "apk-2",
    category: "APK",
    name: "APK Custom 2",
    description: "Deskripsi APK bisa kamu edit sesuai kebutuhan.",
    price: "Hubungi Admin",
    icon: "📱",
  },
  {
    id: "apk-3",
    category: "APK",
    name: "APK Custom 3",
    description: "Deskripsi APK bisa kamu edit sesuai kebutuhan.",
    