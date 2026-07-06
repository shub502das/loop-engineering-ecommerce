/* ==========================================================================
   SonicWave — Shared data + interactions (vanilla JS, no frameworks)
   ========================================================================== */

/* ---- Product catalog ---------------------------------------------------- */
const SW_PRODUCTS = [
  {
    id: "aura-anc",
    name: "GVM Wireless Headphone",
    category: "Over-Ear",
    tier: "Premium",
    price: 349,
    oldPrice: 399,
    rating: 4.8,
    reviews: 312,
    tone: 1,
    gallery: [
      "images/over1-main.png",
      "images/over-1-1.png",
      "images/over-1-2.png"
    ],
    tagline: "Flagship noise-cancelling over-ear headphones",
    shortFeature: "Adaptive ANC · 40h battery",
    description: "The Aura ANC is our flagship over-ear headphone, engineered for total immersion. Adaptive hybrid noise cancellation reads your environment in real time, while 40mm bio-cellulose drivers deliver studio-grade sound with deep, controlled bass.",
    badges: ["Best Seller", "New"],
    features: [
      { icon: "bi-shield-check", label: "ANC", value: "Adaptive Hybrid" },
      { icon: "bi-battery-full", label: "Battery", value: "40 Hours" },
      { icon: "bi-broadcast", label: "Latency", value: "Low-Latency 40ms" },
      { icon: "bi-cloud-rain", label: "Build", value: "Foldable, Premium" }
    ],
    specs: [
      ["Driver Size", "40mm Bio-Cellulose"],
      ["Noise Cancellation", "Adaptive Hybrid ANC, up to 38dB"],
      ["Battery Life", "40 hrs (ANC on), 60 hrs (ANC off)"],
      ["Charging", "USB-C, 10 min = 5 hrs playback"],
      ["Connectivity", "Bluetooth 5.3, Multipoint, 3.5mm wired"],
      ["Weight", "268g"],
      ["Microphone", "4-mic beamforming array"],
      ["Warranty", "2 Years International"]
    ],
    variants: {
      color: [
        { key: "black", label: "Midnight Black", swatch: "#0a0a0f" },
        { key: "silver", label: "Aurora Silver", swatch: "#c7ccd6" },
        { key: "navy", label: "Deep Navy", swatch: "#1c2b4a" }
      ]
    }
  },
  {
    id: "pulse-wireless",
    name: "Aroma Wireless Neckband",
    category: "Wireless",
    tier: "Mid-Range",
    price: 179,
    oldPrice: null,
    rating: 4.6,
    reviews: 508,
    tone: 2,
    gallery: [
      "images/wireless-main.png",
      "images/wireless-1.png",
      "images/wireless-2.png"
    ],
    tagline: "Everyday wireless headphones for work and play",
    shortFeature: "30h battery · Quick Charge",
    description: "Pulse is built for everyday life — from commutes to calls to weekend playlists. Lightweight, foldable, and tuned for a balanced sound signature that never fatigues, with quick-charge tech that keeps up with your day.",
    badges: ["Popular"],
    features: [
      { icon: "bi-shield-check", label: "ANC", value: "Passive Isolation" },
      { icon: "bi-battery-full", label: "Battery", value: "30 Hours" },
      { icon: "bi-broadcast", label: "Latency", value: "Standard 120ms" },
      { icon: "bi-cloud-rain", label: "Build", value: "Foldable, Lightweight" }
    ],
    specs: [
      ["Driver Size", "36mm Dynamic"],
      ["Noise Cancellation", "Passive Isolation"],
      ["Battery Life", "30 hrs playback"],
      ["Charging", "USB-C, 10 min = 4 hrs playback"],
      ["Connectivity", "Bluetooth 5.2, Multipoint"],
      ["Weight", "220g"],
      ["Microphone", "Dual-mic with ENC"],
      ["Warranty", "1 Year International"]
    ],
    variants: {
      color: [
        { key: "black", label: "Jet Black", swatch: "#111" },
        { key: "white", label: "Cloud White", swatch: "#f2f3f6" },
        { key: "coral", label: "Coral Pop", swatch: "#ff6f61" }
      ]
    }
  },
  {
    id: "basic-wired",
    name: "Sony Wired Headset",
    category: "Wired",
    tier: "Budget",
    price: 39,
    oldPrice: 49,
    rating: 4.3,
    reviews: 940,
    tone: 3,
    gallery: [
      "images/wired-main.png",
      "images/wired-1.png",
      "images/wired-2.png"
    ],
    tagline: "No-fuss wired headphones, big on value",
    shortFeature: "3.5mm · In-line mic",
    description: "Simple, reliable, and affordable. The Basic delivers clean, punchy sound over a durable braided cable with an in-line mic and remote — perfect as a backup pair, for the classroom, or for anyone who just wants great sound without the fuss.",
    badges: ["Best Value"],
    features: [
      { icon: "bi-plug", label: "Connector", value: "3.5mm Wired" },
      { icon: "bi-battery-full", label: "Battery", value: "No Battery Needed" },
      { icon: "bi-mic", label: "Mic", value: "In-line + Remote" },
      { icon: "bi-cloud-rain", label: "Build", value: "Braided Cable" }
    ],
    specs: [
      ["Driver Size", "32mm Dynamic"],
      ["Noise Cancellation", "None (Passive)"],
      ["Battery Life", "N/A — Wired"],
      ["Cable", "1.2m Braided, Tangle-Free"],
      ["Connectivity", "3.5mm TRRS"],
      ["Weight", "160g"],
      ["Microphone", "In-line mic + 1-button remote"],
      ["Warranty", "1 Year International"]
    ],
    variants: {
      color: [
        { key: "black", label: "Classic Black", swatch: "#111" },
        { key: "blue", label: "Ocean Blue", swatch: "#2e6dff" }
      ]
    }
  },
  {
    id: "dash-sport",
    name: "Realme Earbud Pro",
    category: "Earbuds",
    tier: "Sport",
    price: 99,
    oldPrice: 119,
    rating: 4.5,
    reviews: 621,
    tone: 4,
    gallery: [
      "images/earbud-main.png",
      "images/earbud-1.png",
      "images/earbud-2.png"
    ],
    tagline: "Sweatproof earbuds built for training",
    shortFeature: "IPX7 · Secure-Fit Hooks",
    description: "Dash is engineered to move with you. IPX7 waterproofing shrugs off sweat and rain, ear hooks keep them locked in through burpees and sprints, and punchy bass keeps your pace up from warm-up to cooldown.",
    badges: ["Sweatproof"],
    features: [
      { icon: "bi-droplet-half", label: "Rating", value: "IPX7 Waterproof" },
      { icon: "bi-battery-full", label: "Battery", value: "8h + 24h Case" },
      { icon: "bi-broadcast", label: "Latency", value: "Low-Latency 60ms" },
      { icon: "bi-cloud-rain", label: "Fit", value: "Secure Ear Hooks" }
    ],
    specs: [
      ["Driver Size", "10mm Dynamic"],
      ["Water Resistance", "IPX7"],
      ["Battery Life", "8 hrs (buds) + 24 hrs (case)"],
      ["Charging", "USB-C case, wireless charging compatible"],
      ["Connectivity", "Bluetooth 5.3"],
      ["Weight", "5.4g per bud"],
      ["Microphone", "Dual-mic with ENC"],
      ["Warranty", "1 Year International"]
    ],
    variants: {
      color: [
        { key: "black", label: "Carbon Black", swatch: "#111" },
        { key: "red", label: "Signal Red", swatch: "#ff3b30" },
        { key: "green", label: "Volt Green", swatch: "#39d98a" }
      ]
    }
  },
  {
    id: "vortex-gaming",
    name: "Punnk Funnk Gaming Headset",
    category: "Gaming",
    tier: "Gaming",
    price: 129,
    oldPrice: null,
    rating: 4.7,
    reviews: 388,
    tone: 5,
    gallery: [
      "images/gaming-main.png",
      "images/gaming-1.png",
      "images/gaming-2.png"
    ],
    tagline: "RGB gaming headset with 7.1 surround",
    shortFeature: "7.1 Surround · RGB · Boom Mic",
    description: "Dominate the map with Vortex RGB. Virtual 7.1 surround sound pinpoints footsteps and gunfire, a detachable noise-cancelling boom mic keeps comms crisp, and customizable RGB zones match your setup.",
    badges: ["RGB", "Gaming"],
    features: [
      { icon: "bi-soundwave", label: "Audio", value: "7.1 Virtual Surround" },
      { icon: "bi-mic", label: "Mic", value: "Detachable Boom, NC" },
      { icon: "bi-broadcast", label: "Latency", value: "Ultra-Low 20ms (2.4GHz)" },
      { icon: "bi-lightning-charge", label: "Lighting", value: "16.8M RGB Zones" }
    ],
    specs: [
      ["Driver Size", "50mm Neodymium"],
      ["Surround", "Virtual 7.1"],
      ["Connectivity", "2.4GHz Wireless USB Dongle + 3.5mm"],
      ["Battery Life", "20 hrs (RGB on), 30 hrs (RGB off)"],
      ["Microphone", "Detachable noise-cancelling boom mic"],
      ["Weight", "340g"],
      ["Compatibility", "PC, PS5, Xbox, Switch"],
      ["Warranty", "2 Years International"]
    ],
    variants: {
      color: [
        { key: "black", label: "Stealth Black / RGB", swatch: "#0a0a0f" }
      ]
    }
  },
  {
    id: "studio-one",
    name: "Wireless Sport Headphone",
    category: "Studio",
    tier: "Audiophile",
    price: 299,
    oldPrice: null,
    rating: 4.9,
    reviews: 214,
    tone: 6,
    gallery: [
      "images/sport-main.png",
      "images/sport-1.png",
      "images/sport-2.png"
    ],
    tagline: "Open-back studio headphones for critical listening",
    shortFeature: "Open-Back · Flat Response",
    description: "Studio One is tuned for the people who mix, master, and listen critically. Open-back planar-inspired drivers deliver a wide, natural soundstage with a flat, reference-grade frequency response — and genuine walnut ear cups for all-day comfort.",
    badges: ["Audiophile"],
    features: [
      { icon: "bi-soundwave", label: "Design", value: "Open-Back" },
      { icon: "bi-sliders", label: "Tuning", value: "Flat Reference Response" },
      { icon: "bi-plug", label: "Connector", value: "3.5mm + 6.3mm Adapter" },
      { icon: "bi-cloud-rain", label: "Build", value: "Walnut Wood + Metal" }
    ],
    specs: [
      ["Driver Size", "50mm Bio-Dynamic"],
      ["Frequency Response", "5Hz – 40kHz"],
      ["Impedance", "38 ohms"],
      ["Cable", "Detachable OFC cable, 3m"],
      ["Connectivity", "Wired: 3.5mm w/ 6.3mm adapter"],
      ["Weight", "310g"],
      ["Ear Cups", "Genuine Walnut Wood"],
      ["Warranty", "2 Years International"]
    ],
    variants: {
      color: [
        { key: "walnut", label: "Walnut / Black", swatch: "#6b4226" },
        { key: "black", label: "Matte Black", swatch: "#111" }
      ]
    }
  }
];

function swGetProduct(id) { return SW_PRODUCTS.find(p => p.id === id); }

/* Main listing/card image for a product (first gallery shot) */
function swMainImage(product) { return product.gallery[0]; }

function swFormatPrice(n) { return "$" + n.toFixed(2).replace(/\.00$/, ""); }

function swStars(rating) {
  const full = Math.round(rating);
  return "★★★★★☆☆☆☆☆".slice(5 - full, 10 - full);
}

/* ---- Cart (localStorage) ------------------------------------------------- */
const SW_CART_KEY = "sonicwave_cart";

function swGetCart() {
  try { return JSON.parse(localStorage.getItem(SW_CART_KEY)) || []; }
  catch (e) { return []; }
}

function swSaveCart(cart) {
  localStorage.setItem(SW_CART_KEY, JSON.stringify(cart));
  swUpdateCartBadge();
}

function swAddToCart(productId, color, qty) {
  qty = qty || 1;
  const cart = swGetCart();
  const existing = cart.find(item => item.id === productId && item.color === color);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: productId, color: color, qty: qty }); }
  swSaveCart(cart);
  swShowToast("Added to cart", swGetProduct(productId) ? swGetProduct(productId).name : "Item");
}

function swRemoveFromCart(productId, color) {
  let cart = swGetCart();
  cart = cart.filter(item => !(item.id === productId && item.color === color));
  swSaveCart(cart);
}

function swUpdateQty(productId, color, qty) {
  const cart = swGetCart();
  const item = cart.find(i => i.id === productId && i.color === color);
  if (item) { item.qty = Math.max(1, qty); swSaveCart(cart); }
}

function swCartCount() { return swGetCart().reduce((sum, i) => sum + i.qty, 0); }

function swCartSubtotal() {
  return swGetCart().reduce((sum, i) => {
    const p = swGetProduct(i.id);
    return p ? sum + p.price * i.qty : sum;
  }, 0);
}

function swUpdateCartBadge() {
  document.querySelectorAll(".js-cart-count").forEach(el => {
    const count = swCartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

/* ---- Toast ---------------------------------------------------------------- */
function swShowToast(title, subtitle) {
  let toast = document.querySelector(".sonic-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "sonic-toast";
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i><div><div class="fw-semibold" data-role="title"></div><div class="small text-white-50" data-role="subtitle"></div></div>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('[data-role="title"]').textContent = title;
  toast.querySelector('[data-role="subtitle"]').textContent = subtitle || "";
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---- Shared UI behaviors --------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  swUpdateCartBadge();

  // Sticky navbar shadow on scroll
  const nav = document.querySelector(".navbar-sonic");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Highlight active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-sonic .nav-link, .offcanvas-sonic .nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });

  // Newsletter form (no backend — just UX feedback)
  document.querySelectorAll(".js-newsletter-form").forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value) {
        swShowToast("You're subscribed!", "Watch your inbox for drops & deals.");
        form.reset();
      }
    });
  });

  // Search functionality (navigate to shop with query)
  document.querySelectorAll(".icon-link[aria-label='Search']").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const q = prompt("Search for headphones...");
      if (q) { window.location.href = "shop.html?search=" + encodeURIComponent(q); }
    });
  });
});
