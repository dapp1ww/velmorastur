// ============================================================
//  VELMORA STORE — MAIN JAVASCRIPT
//  Logika: partikel, produk, modal, filter, music player
// ============================================================

import { STORE_CONFIG, products, paymentMethods } from "./products.js";
import "./style.css";

// ── INISIALISASI ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  fillStoreInfo();
  fillPayments();
  renderProducts("Semua");
  setupFilter();
  setupModal();
  setupMusic();
  initParticles();
});

// ── ISI INFO TOKO ─────────────────────────────────────────────
function fillStoreInfo() {
  document.title = STORE_CONFIG.storeName;
  document.getElementById("store-name").textContent       = STORE_CONFIG.storeName;
  document.getElementById("store-tagline").textContent    = STORE_CONFIG.storeTagline;
  document.getElementById("store-desc").textContent       = STORE_CONFIG.storeDescription;
  document.getElementById("footer-name").textContent      = STORE_CONFIG.storeName;
  document.getElementById("footer-year").textContent      = new Date().getFullYear();
  document.getElementById("footer-name2").textContent     = STORE_CONFIG.storeName;
  document.getElementById("link-tele-ch").href            = STORE_CONFIG.telegramChannel;
  document.getElementById("link-wa").href                 = STORE_CONFIG.whatsapp;
}

// ── ISI METODE PEMBAYARAN ──────────────────────────────────────
function fillPayments() {
  const container = document.getElementById("payment-badges");
  container.innerHTML = paymentMethods
    .map(
      (p) => `<div class="payment-badge"><span>${p.icon}</span><strong>${p.name}</strong><span>· ${p.desc}</span></div>`
    )
    .join("");
}

// ── RENDER PRODUK ─────────────────────────────────────────────
function renderProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const filtered =
    category === "Semua"
      ? products
      : products.filter((p) => p.category === category);

  // group by category
  const groups = {};
  filtered.forEach((p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
  });

  Object.entries(groups).forEach(([cat, items]) => {
    const section = document.createElement("div");
    section.className = "cat-section";

    section.innerHTML = `
      <div class="cat-header">
        <span class="cat-title">${cat}</span>
        <div class="cat-line"></div>
        