// ===== Pengaturan =====
// Ganti dengan nomor WhatsApp penjual (format internasional, tanpa + atau 0 di depan)
const WA_NUMBER = "6283185723265";

// ===== Data menu (ditulis langsung, tanpa database) =====
// Untuk foto asli, isi "img" dengan URL gambar. Jika kosong/gagal, placeholder dipakai.
const F = (id, cat, name, emoji, color, price, desc, ing, n, ben) => ({
  id, cat, name, emoji, color, price, img: "", desc, ingredients: ing,
  nutrition: { Kalori: n[0] + " kkal", Protein: n[1] + " g", Karbohidrat: n[2] + " g", Serat: n[3] + " g" },
  benefits: ben
});
const foods = [
  F("sayur-box","Sayur","Sayur Box","🥦","#c8e6c9",25000,"Kotak sayur segar: brokoli, wortel, dan buncis siap olah.",["Brokoli","Wortel","Buncis","Tomat ceri"],[120,5,20,8],["Kaya serat untuk pencernaan","Sumber vitamin A dan C","Rendah kalori"]),
  F("salad-sayur","Sayur","Salad Sayur Segar","🥗","#dcedc8",22000,"Selada, timun, tomat, dan jagung dengan dressing lemon.",["Selada","Timun","Tomat","Jagung manis","Dressing lemon"],[110,3,16,5],["Ringan dan menyegarkan","Sumber vitamin K","Cocok untuk makan malam"]),
  F("sup-sayur","Sayur","Sup Sayur Bening","🍲","#b2dfdb",16000,"Sup hangat dengan wortel, kentang, dan sawi.",["Wortel","Kentang","Sawi","Bawang putih"],[95,3,18,4],["Hangat dan mengenyangkan","Rendah lemak","Baik saat cuaca dingin"]),
  F("capcay","Sayur","Capcay Kukus","🥬","#c5e1a5",20000,"Aneka sayur kukus dengan bumbu ringan tanpa banyak minyak.",["Kol","Wortel","Sawi","Jamur","Bawang putih"],[130,5,20,6],["Beragam sayur dalam satu porsi","Rendah minyak","Sumber serat"]),
  F("salad-buah","Buah","Salad Buah","🍓","#ffcdd2",18000,"Potongan buah segar dengan yoghurt tawar.",["Apel","Melon","Stroberi","Yoghurt tawar"],[150,4,30,4],["Sumber vitamin dan antioksidan","Camilan manis yang lebih sehat","Membantu rasa kenyang"]),
  F("buah-potong","Buah","Buah Potong Mix","🍉","#f8bbd0",15000,"Semangka, melon, dan pepaya dalam satu cup.",["Semangka","Melon","Pepaya"],[100,2,24,3],["Menghidrasi tubuh","Rendah kalori","Praktis dibawa kuliah"]),
  F("parfait","Buah","Yoghurt Parfait","🍇","#e1bee7",24000,"Yoghurt tawar berlapis granola dan buah beri.",["Yoghurt tawar","Granola","Blueberry","Madu"],[220,9,32,4],["Baik untuk pencernaan","Sumber protein","Cocok untuk sarapan"]),
  F("pisang-oat","Buah","Pisang Oat Bowl","🍌","#fff9c4",19000,"Oat lembut dengan irisan pisang dan kayu manis.",["Oat","Pisang","Susu rendah lemak","Kayu manis"],[240,7,45,5],["Energi tahan lama","Mengenyangkan","Sarapan praktis"]),
  F("jus-jeruk","Jus","Jus Jeruk","🍊","#ffe0b2",12000,"Jus jeruk segar tanpa tambahan gula.",["Jeruk peras","Es batu"],[90,1,21,0.5],["Sumber vitamin C","Membantu daya tahan tubuh","Menyegarkan"]),
  F("jus-mangga","Jus","Jus Mangga","🥭","#fff59d",15000,"Jus mangga manis alami, cocok untuk teman sarapan.",["Mangga matang","Air","Es batu"],[130,1,32,2],["Sumber vitamin A dan C","Baik untuk kesehatan mata","Memberi energi"]),
  F("jus-wortel","Jus","Jus Wortel Apel","🥕","#ffccbc",14000,"Perpaduan wortel dan apel, manis alami.",["Wortel","Apel","Air"],[100,1,24,3],["Sumber beta karoten","Baik untuk mata","Tanpa gula tambahan"]),
  F("jus-semangka","Jus","Jus Semangka","🍉","#ffcdd2",12000,"Jus semangka dingin yang menghidrasi.",["Semangka","Es batu"],[80,1,19,1],["Menghidrasi tubuh","Rendah kalori","Cocok saat cuaca panas"]),
  F("jus-alpukat","Jus","Jus Alpukat","🥑","#c8e6c9",18000,"Alpukat creamy dengan sedikit susu rendah lemak.",["Alpukat","Susu rendah lemak","Es batu"],[250,4,18,7],["Lemak sehat","Tinggi serat","Mengenyangkan"]),
  F("smoothie","Smoothie","Smoothie Pisang Bayam","🥤","#d1c4e9",20000,"Smoothie pisang, bayam, dan susu rendah lemak.",["Pisang","Bayam","Susu rendah lemak","Oat"],[200,8,35,5],["Praktis untuk sarapan","Kombinasi sayur dan buah","Membuat kenyang lebih lama"]),
  F("smoothie-berry","Smoothie","Smoothie Berry","🫐","#c5cae9",22000,"Smoothie stroberi dan blueberry dengan yoghurt.",["Stroberi","Blueberry","Yoghurt tawar"],[170,6,30,5],["Kaya antioksidan","Rasa segar asam manis","Rendah lemak"]),
  F("paket-sehat","Paket","Paket Makanan Sehat","🍱","#b2dfdb",35000,"Nasi merah, dada ayam panggang, sayur, dan buah potong.",["Nasi merah","Dada ayam panggang","Sayur kukus","Buah potong"],[450,30,55,7],["Gizi seimbang dalam satu porsi","Sumber protein dan serat","Cocok untuk makan siang"]),
  F("paket-vegan","Paket","Paket Vegetarian","🥙","#dcedc8",32000,"Nasi merah, tempe panggang, tumis sayur, dan buah.",["Nasi merah","Tempe","Tumis sayur","Buah potong"],[420,20,58,9],["Protein nabati","Tinggi serat","Tanpa daging"]),
  F("paket-mahasiswa","Paket","Paket Mahasiswa Hemat","🎒","#ffe0b2",25000,"Nasi, telur rebus, sayur, dan jus pilihan dengan harga hemat.",["Nasi","Telur rebus","Sayur","Jus jeruk"],[400,18,55,5],["Harga ramah kantong","Gizi seimbang","Praktis untuk hari kuliah"]),
  F("kacang","Camilan","Kacang Panggang","🥜","#d7ccc8",10000,"Kacang panggang tanpa garam berlebih, camilan belajar.",["Kacang almond","Kacang tanah"],[160,6,6,3],["Lemak sehat","Mengenyangkan","Pengganti camilan manis"]),
  F("oat-bar","Camilan","Oat Bar Madu","🍫","#ffe0b2",12000,"Batang oat dengan madu dan kismis, tanpa gula tambahan.",["Oat","Madu","Kismis"],[180,4,30,3],["Energi cepat","Mudah dibawa","Rendah gula tambahan"]),
  F("keripik-sayur","Camilan","Keripik Sayur Panggang","🥕","#c8e6c9",13000,"Keripik wortel dan bayam yang dipanggang, bukan digoreng.",["Wortel","Bayam","Minyak zaitun"],[110,2,15,3],["Renyah tanpa digoreng","Lebih rendah minyak","Camilan ringan"])
];
const categories = ["Semua","Sayur","Buah","Jus","Smoothie","Paket","Camilan"];

const tips = [
  { ico: "🥬", title: "Pentingnya makan sayur", text: "Sayur kaya serat, vitamin, dan mineral. Usahakan setengah piring makanmu berisi sayur setiap kali makan." },
  { ico: "🍎", title: "Manfaat buah", text: "Buah menyediakan vitamin dan antioksidan. Pilih buah utuh atau jus tanpa tambahan gula." },
  { ico: "💧", title: "Minum air yang cukup", text: "Minum sekitar 8 gelas air putih per hari agar tubuh tetap terhidrasi dan fokus." },
  { ico: "🍬", title: "Kurangi makanan terlalu manis", text: "Batasi minuman manis dan camilan bergula. Ganti dengan buah atau yoghurt tawar." },
  { ico: "🎓", title: "Tips makan sehat untuk mahasiswa", text: "Siapkan bekal sederhana, jangan lewatkan sarapan, dan sediakan buah sebagai camilan saat belajar." }
];

// ===== Helper =====
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const byId = id => foods.find(x => x.id === id);
function placeholder(f) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450"><rect width="100%" height="100%" fill="${f.color}"/><text x="50%" y="52%" font-size="170" text-anchor="middle" dominant-baseline="middle">${f.emoji}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function imgTag(f) {
  const fb = placeholder(f);
  return `<img src="${f.img || fb}" alt="${f.name}" onerror="this.onerror=null;this.src='${fb}'">`;
}

// ===== Keranjang (disimpan di browser) =====
function getCart() {
  try { return JSON.parse(localStorage.getItem("sehatku_cart")) || {}; } catch (e) { return window._cart || {}; }
}
function saveCart(c) {
  window._cart = c;
  try { localStorage.setItem("sehatku_cart", JSON.stringify(c)); } catch (e) {}
  updateBadge();
}
function cartCount() { return Object.values(getCart()).reduce((a, b) => a + b, 0); }
function updateBadge() { const el = document.getElementById("cartCount"); if (el) el.textContent = cartCount(); }
function addToCart(id, qty = 1) {
  const c = getCart(); c[id] = (c[id] || 0) + qty; saveCart(c);
  toast(byId(id).name + " ditambahkan ke keranjang");
}
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 1800);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-add]");
  if (b) addToCart(b.dataset.add);
});

// ===== Navigasi =====
const page = document.body.dataset.page;
document.querySelectorAll(".nav-links a").forEach(a => { if (a.dataset.page === page) a.classList.add("active"); });
const toggle = document.getElementById("navToggle");
if (toggle) toggle.addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
updateBadge();

// ===== Halaman Menu =====
const grid = document.getElementById("menuGrid");
if (grid) {
  let cat = "Semua", q = "";
  const chips = document.getElementById("chips");
  const draw = () => {
    chips.innerHTML = categories.map(c => `<button class="chip ${c === cat ? "on" : ""}" data-cat="${c}">${c}</button>`).join("");
    const list = foods.filter(f => (cat === "Semua" || f.cat === cat) &&
      (f.name + " " + f.desc).toLowerCase().includes(q.toLowerCase()));
    grid.innerHTML = list.length ? list.map(f => `
      <article class="card">${imgTag(f)}
        <div class="card-body">
          <h3>${f.name}</h3><span class="price">${rupiah(f.price)}</span><p>${f.desc}</p>
          <div class="card-actions">
            <a class="btn btn-outline" href="detail.html?id=${f.id}">Lihat Detail</a>
            <button class="btn" data-add="${f.id}">+ Keranjang</button>
          </div>
        </div></article>`).join("") : `<p class="empty">Menu tidak ditemukan. Coba kata kunci atau kategori lain.</p>`;
  };
  chips.addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (b) { cat = b.dataset.cat; draw(); } });
  document.getElementById("searchInput").addEventListener("input", e => { q = e.target.value; draw(); });
  draw();
}

// ===== Halaman Detail =====
const root = document.getElementById("detailRoot");
if (root) {
  const f = byId(new URLSearchParams(location.search).get("id"));
  if (!f) {
    root.innerHTML = `<div class="detail" style="grid-template-columns:1fr"><div><h1>Makanan tidak ditemukan</h1><p>Pilih makanan dari halaman menu.</p><a class="btn" href="menu.html">Kembali ke Menu</a></div></div>`;
  } else {
    document.title = f.name + " - SehatKu";
    root.innerHTML = `
      <div class="detail">
        <div>${imgTag(f)}<a class="back" href="menu.html">&larr; Kembali ke Menu</a></div>
        <div>
          <h1>${f.name}</h1><span class="price">${rupiah(f.price)}</span>
          <h2>Bahan utama</h2><ul>${f.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
          <h2>Informasi gizi (per porsi)</h2>
          <div class="nutri">${Object.entries(f.nutrition).map(([k, v]) => `<div>${k}<b>${v}</b></div>`).join("")}</div>
          <p class="note">Nilai gizi merupakan perkiraan sederhana.</p>
          <h2>Manfaat secara umum</h2><ul>${f.benefits.map(b => `<li>${b}</li>`).join("")}</ul>
          <div class="detail-actions">
            <button class="btn" data-add="${f.id}">+ Tambah ke Keranjang</button>
            <a class="btn btn-outline" href="keranjang.html">Lihat Keranjang</a>
          </div>
        </div>
      </div>`;
  }
}

// ===== Halaman Keranjang & Pemesanan =====
const cartRoot = document.getElementById("cartRoot");
if (cartRoot) {
  const renderCart = () => {
    const cart = getCart();
    const items = Object.keys(cart).filter(id => byId(id) && cart[id] > 0);
    if (!items.length) {
      cartRoot.innerHTML = `<div class="success"><h1>Keranjang masih kosong</h1><p>Pilih menu sehat favoritmu dulu.</p><a class="btn" href="menu.html">Lihat Menu</a></div>`;
      return;
    }
    const total = items.reduce((s, id) => s + byId(id).price * cart[id], 0);
    cartRoot.innerHTML = `
      <div class="cart-layout">
        <div><h1 style="color:var(--green-dark);margin-bottom:16px">Keranjang</h1>
          ${items.map(id => { const f = byId(id); return `
            <div class="cart-item">${imgTag(f)}
              <div><b>${f.name}</b><span class="price">${rupiah(f.price)}</span>
                <div class="qty"><button data-dec="${id}" aria-label="Kurangi">&minus;</button><span>${cart[id]}</span><button data-inc="${id}" aria-label="Tambah">+</button></div></div>
              <div class="item-total">${rupiah(f.price * cart[id])}<br><button class="remove" data-del="${id}">Hapus</button></div>
            </div>`; }).join("")}
        </div>
        <div class="summary">
          <h2>Data Pemesan</h2>
          <label for="nama">Nama</label><input id="nama" placeholder="Nama lengkap">
          <label for="hp">No. HP / WhatsApp</label><input id="hp" type="tel" placeholder="08xxxxxxxxxx">
          <label for="metode">Metode</label>
          <select id="metode"><option>Ambil di tempat</option><option>Diantar</option></select>
          <label for="alamat">Alamat / lokasi pengambilan</label><textarea id="alamat" rows="2" placeholder="Mis. Kantin Gedung A / alamat lengkap"></textarea>
          <label for="catatan">Catatan (opsional)</label><input id="catatan" placeholder="Mis. tanpa es, kurang manis">
          <div class="total-row"><span>Total</span><span>${rupiah(total)}</span></div>
          <div class="err" id="err"></div>
          <button class="btn" id="orderBtn">Pesan via WhatsApp</button>
        </div>
      </div>`;
  };
  cartRoot.addEventListener("click", e => {
    const t = e.target, cart = getCart();
    if (t.dataset.inc) cart[t.dataset.inc]++;
    else if (t.dataset.dec) cart[t.dataset.dec] = Math.max(0, cart[t.dataset.dec] - 1);
    else if (t.dataset.del) delete cart[t.dataset.del];
    else if (t.id === "orderBtn") return sendOrder();
    else return;
    // pertahankan isian form saat qty berubah
    const keep = ["nama", "hp", "metode", "alamat", "catatan"].map(i => document.getElementById(i)?.value);
    Object.keys(cart).forEach(k => { if (!cart[k]) delete cart[k]; });
    saveCart(cart); renderCart();
    ["nama", "hp", "metode", "alamat", "catatan"].forEach((i, n) => { const el = document.getElementById(i); if (el && keep[n]) el.value = keep[n]; });
  });
  function sendOrder() {
    const v = i => document.getElementById(i).value.trim();
    const err = document.getElementById("err");
    if (!v("nama") || !v("hp") || !v("alamat")) { err.textContent = "Lengkapi nama, nomor HP, dan alamat/lokasi dulu."; return; }
    if (!/^[0-9+\s-]{8,16}$/.test(v("hp"))) { err.textContent = "Nomor HP tidak valid."; return; }
    const cart = getCart(), ids = Object.keys(cart);
    const total = ids.reduce((s, id) => s + byId(id).price * cart[id], 0);
    const lines = ids.map((id, i) => `${i + 1}. ${byId(id).name} x${cart[id]} = ${rupiah(byId(id).price * cart[id])}`);
    const msg = `Halo SehatKu, saya ingin memesan:\n${lines.join("\n")}\n\nTotal: ${rupiah(total)}\n\nNama: ${v("nama")}\nNo. HP: ${v("hp")}\nMetode: ${v("metode")}\nAlamat/Lokasi: ${v("alamat")}\nCatatan: ${v("catatan") || "-"}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    saveCart({});
    cartRoot.innerHTML = `<div class="success"><h1>Pesanan siap dikirim 🎉</h1><p>Selesaikan pesanan di WhatsApp yang baru terbuka. Terima kasih sudah memilih SehatKu!</p><a class="btn" href="menu.html">Pesan Lagi</a></div>`;
  }
  renderCart();
}

// ===== Halaman Tips =====
const tipsGrid = document.getElementById("tipsGrid");
if (tipsGrid) {
  tipsGrid.innerHTML = tips.map(t => `<article class="tip"><div class="ico">${t.ico}</div><h3>${t.title}</h3><p>${t.text}</p></article>`).join("");
}