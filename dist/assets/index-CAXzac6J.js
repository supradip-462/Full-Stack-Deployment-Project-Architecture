(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const w=[{id:"headphones-pro",name:"Lumina Spatial ANC Headphones",tagline:"Immersive Studio-Grade Audio with Active Noise Cancellation",category:"audio",price:349.99,oldPrice:399.99,rating:4.9,reviewCount:128,badge:"Bestseller",badgeType:"badge-indigo",image:"./assets/images/headphones-pro.png",inStock:!0,featured:!0,description:"Experience pure sonic clarity with state-of-the-art hybrid 45dB Active Noise Cancellation, custom titanium dynamic drivers, and 3D Spatial Audio tracking.",specs:{"Battery Life":"40 Hours (ANC On)",Connectivity:"Bluetooth 5.4 / 3.5mm Aux",Drivers:"40mm Titanium Dome",Weight:"250g",Warranty:"2 Years Official"}},{id:"mechanical-keyboard",name:"Apex Cyber 75 Mechanical Keyboard",tagline:"Custom Gasket Mount Wireless Mechanical Keyboard",category:"workstation",price:189.99,oldPrice:219.99,rating:4.8,reviewCount:94,badge:"Hot",badgeType:"badge-emerald",image:"./assets/images/mechanical-keyboard.png",inStock:!0,featured:!0,description:"Engineered for tactile perfection. Featuring CNC anodized aluminum frame, hot-swappable switches, PBT double-shot keycaps, and customizable per-key RGB backlighting.",specs:{"Mount Style":"Flex-Cut Gasket Mount",Switches:"Linear Lubricated Switches",Battery:"4000mAh Wireless",Keycaps:"Cherry Profile PBT",Weight:"1.2 kg"}},{id:"smartwatch-ultra",name:"Lumina Horizon Watch Ultra",tagline:"Titanium Smartwatch with Curved Sapphire AMOLED Display",category:"wearables",price:299.99,oldPrice:349.99,rating:4.9,reviewCount:210,badge:"New",badgeType:"badge-amber",image:"./assets/images/smartwatch-ultra.png",inStock:!0,featured:!0,description:"Built for endurance and elegance. Features dual-frequency GPS, health metrics monitoring, ECG sensor, 100m water resistance, and up to 7 days battery life.",specs:{Display:'2.1" Sapphire Crystal AMOLED',"Case Material":"Aerospace Grade Titanium",Sensors:"ECG, SpO2, Heart Rate, Altimeter","Water Resistance":"10 ATM (100 Meters)",Battery:"Up to 7 Days Normal Use"}},{id:"earbuds-neo",name:"Lumina Pulse ANC Earbuds",tagline:"Ultra-Compact Wireless Earbuds with Smart Transparency",category:"audio",price:149.99,oldPrice:179.99,rating:4.7,reviewCount:85,badge:"Sale",badgeType:"badge-indigo",image:"./assets/images/earbuds-neo.png",inStock:!0,featured:!1,description:"Crystal-clear voice calls, intelligent active noise isolation, IPX7 sweat-resistant coating, and ergonomic fit designed for all-day comfort.",specs:{Battery:"32 Hours with Case","Water Resistance":"IPX7 Certified",Charging:"USB-C & Qi Wireless","Noise Reduction":"Up to 35dB"}},{id:"monitor-4k",name:'Lumina Vision 34" Curved OLED',tagline:"Ultra-wide 240Hz Quantum Dot OLED Gaming & Workspace Monitor",category:"workstation",price:899.99,oldPrice:999.99,rating:4.95,reviewCount:76,badge:"Pro Gear",badgeType:"badge-emerald",image:"./assets/images/monitor-4k.png",inStock:!0,featured:!0,description:"Transform your workflow with blistering 240Hz refresh rates, true 0.03ms response time, 99.3% DCI-P3 color accuracy, and sleek ultra-thin aluminum stand.",specs:{Resolution:"3440 x 1440 WQHD Curved","Refresh Rate":"240Hz Refresh Rate","Response Time":"0.03ms (GtG)",HDR:"VESA DisplayHDR True Black 400",Ports:"HDMI 2.1, DisplayPort 1.4, USB-C 90W"}},{id:"ergonomic-mouse",name:"Lumina Precision Wireless Mouse",tagline:"Precision Ergonomic Mouse with MagSpeed Scroll Wheel",category:"accessories",price:89.99,oldPrice:109.99,rating:4.6,reviewCount:112,badge:"Popular",badgeType:"badge-amber",image:"./assets/images/ergonomic-mouse.png",inStock:!0,featured:!1,description:"Designed to fit the natural posture of your hand. Equipped with a 26K DPI optical sensor, quiet click buttons, and multi-device Bluetooth switching.",specs:{"DPI Range":"200 to 26,000 DPI",Connectivity:"2.4GHz Dongle / Bluetooth",Battery:"70 Days Single Charge",Buttons:"7 Programmable Action Keys"}},{id:"desk-lamp",name:"Lumina Halo Smart Desk Lamp",tagline:"Adaptive Color Temperature Desk Lamp with Wireless Charging",category:"workstation",price:119.99,oldPrice:139.99,rating:4.8,reviewCount:64,badge:"Eco",badgeType:"badge-emerald",image:"./assets/images/desk-lamp.png",inStock:!0,featured:!1,description:"Minimize eye fatigue with flicker-free natural light spectrum (CRI > 98). Features smart ambient light sensor and built-in 15W Qi fast charging pad.",specs:{"Color Temp":"2700K - 6500K Tunable","CRI Rating":"> 98 Natural Spectrum","Wireless Output":"15W Qi Fast Charger",Control:"Touch Slider & App Control"}},{id:"power-bank",name:"Lumina Turbo Power Station 140W",tagline:"Ultra-Fast GaN 27,000mAh Battery Pack for Laptops & Mobile",category:"accessories",price:79.99,oldPrice:99.99,rating:4.9,reviewCount:145,badge:"Essential",badgeType:"badge-indigo",image:"./assets/images/power-bank.png",inStock:!0,featured:!1,description:"Charge your laptop at full speed on the go. Equipped with smart OLED power telemetry screen, dual USB-C PD 3.1 ports, and airline approved capacity.",specs:{Capacity:"27,000 mAh (99.9Wh)","Max Output":"140W Total Power",Display:"Real-time OLED Telemetry",Safety:"10-Point Thermal Guard"}}];function C(r){return w.find(e=>e.id===r)}function B({category:r="all",searchQuery:e="",sortBy:t="featured"}){let o=[...w];if(r!=="all"&&(o=o.filter(a=>a.category===r)),e.trim()!==""){const a=e.toLowerCase();o=o.filter(i=>i.name.toLowerCase().includes(a)||i.tagline.toLowerCase().includes(a)||i.description.toLowerCase().includes(a))}switch(t){case"price-low":o.sort((a,i)=>a.price-i.price);break;case"price-high":o.sort((a,i)=>i.price-a.price);break;case"rating":o.sort((a,i)=>i.rating-a.rating);break;case"featured":default:o.sort((a,i)=>(i.featured?1:0)-(a.featured?1:0));break}return o}const E="lumina_cart_v1";class A{constructor(){this.items=this.loadCartFromStorage(),this.appliedCoupon=null,this.listeners=[]}loadCartFromStorage(){try{const e=localStorage.getItem(E);return e?JSON.parse(e):[]}catch(e){return console.warn("Could not read cart from localStorage:",e),[]}}saveCartToStorage(){try{localStorage.setItem(E,JSON.stringify(this.items))}catch(e){console.warn("Could not save cart to localStorage:",e)}}subscribe(e){this.listeners.push(e)}notify(){this.saveCartToStorage(),this.listeners.forEach(e=>e(this.getSummary()))}addItem(e,t=1){const o=this.items.find(a=>a.productId===e);o?o.quantity+=t:this.items.push({productId:e,quantity:t}),this.notify()}removeItem(e){this.items=this.items.filter(t=>t.productId!==e),this.notify()}updateQuantity(e,t){if(t<=0){this.removeItem(e);return}const o=this.items.find(a=>a.productId===e);o&&(o.quantity=t,this.notify())}clearCart(){this.items=[],this.appliedCoupon=null,this.notify()}applyCoupon(e){const t=e.trim().toUpperCase();return t==="LUMINA10"?(this.appliedCoupon={code:"LUMINA10",discountPercent:10},this.notify(),{success:!0,message:"10% discount applied!"}):t==="SUPER20"?(this.appliedCoupon={code:"SUPER20",discountPercent:20},this.notify(),{success:!0,message:"20% Special discount applied!"}):{success:!1,message:"Invalid coupon code. Try LUMINA10 or SUPER20"}}removeCoupon(){this.appliedCoupon=null,this.notify()}getSummary(){let e=0,t=0;const o=[];this.items.forEach(g=>{const m=C(g.productId);if(m){e+=g.quantity;const d=m.price*g.quantity;t+=d,o.push({product:m,quantity:g.quantity,itemTotal:d})}});let a=0;this.appliedCoupon&&(a=t*this.appliedCoupon.discountPercent/100);const i=(t-a)*.08,n=200,h=t>=n||t===0?0:15,v=t-a+i+h;return{items:o,totalCount:e,subtotal:t,discount:a,appliedCoupon:this.appliedCoupon,estimatedTax:i,shippingFee:h,freeShippingThreshold:n,amountNeededForFreeShipping:Math.max(0,n-t),grandTotal:v}}}const u=new A,L="lumina_wishlist_v1";class M{constructor(){this.productIds=this.loadWishlistFromStorage(),this.listeners=[]}loadWishlistFromStorage(){try{const e=localStorage.getItem(L);return e?JSON.parse(e):[]}catch(e){return console.warn("Could not read wishlist from localStorage:",e),[]}}saveWishlistToStorage(){try{localStorage.setItem(L,JSON.stringify(this.productIds))}catch(e){console.warn("Could not save wishlist to localStorage:",e)}}subscribe(e){this.listeners.push(e)}notify(){this.saveWishlistToStorage(),this.listeners.forEach(e=>e(this.productIds))}toggleItem(e){return this.productIds.includes(e)?(this.productIds=this.productIds.filter(t=>t!==e),this.notify(),{added:!1}):(this.productIds.push(e),this.notify(),{added:!0})}isWishlisted(e){return this.productIds.includes(e)}getWishlistedProducts(){return this.productIds.map(e=>C(e)).filter(Boolean)}getCount(){return this.productIds.length}}const f=new M;function b(r,e="info"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const o=document.createElement("div");o.className=`toast ${e}`,o.innerHTML=`
    <div class="toast-icon">
      ${e==="success"?"✓":"ℹ"}
    </div>
    <div class="toast-message">${r}</div>
  `,t.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300)},3e3)}function S(r){const e=f.isWishlisted(r.id);return`
    <div class="product-card" data-id="${r.id}">
      <div class="product-image-container">
        <span class="tag-badge ${r.badgeType} product-badge-overlay">${r.badge}</span>
        <button class="wishlist-toggle-btn ${e?"active":""}" data-action="toggle-wishlist" data-id="${r.id}" title="${e?"Remove from Wishlist":"Add to Wishlist"}">
          <svg width="18" height="18" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <div class="quick-view-overlay">
          <button class="btn btn-secondary btn-sm" data-action="quick-view" data-id="${r.id}">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${r.category}</span>
        <h3 class="product-title">
          <a href="#/product/${r.id}">${r.name}</a>
        </h3>
        <div class="product-rating">
          ★ ${r.rating} <span>(${r.reviewCount})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">$${r.price.toFixed(2)}</span>
            ${r.oldPrice?`<span class="price-old">$${r.oldPrice.toFixed(2)}</span>`:""}
          </div>
          <button class="btn btn-primary btn-sm" data-action="add-to-cart" data-id="${r.id}">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `}function T(r){const e=w.filter(t=>t.featured);r.innerHTML=`
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="tag-badge badge-indigo">✨ Next-Gen Workspace Audio & Gear</span>
          <h1 class="hero-title">Elevate Your Setup With <span class="text-gradient">LUMINA</span></h1>
          <p class="hero-description">
            Discover precision-engineered spatial audio, custom tactile mechanical keyboards, and ultra-high performance workspace tech crafted for creators.
          </p>
          <div class="hero-cta">
            <a href="#/products" class="btn btn-primary btn-lg">Explore Shop</a>
            <a href="#/about" class="btn btn-secondary btn-lg">Architecture & Tech</a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img src="./assets/images/hero-banner.png" alt="Lumina Modern Desk Setup" />
          <div class="hero-floating-badge">
            <div style="font-size: 1.5rem;">🎧</div>
            <div>
              <div style="font-weight: 700; color: var(--text-heading);">45dB Spatial ANC</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Studio Grade Precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <div class="feature-info">
              <h4>Express Delivery</h4>
              <p>Free express shipping over $200</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <div class="feature-info">
              <h4>2-Year Warranty</h4>
              <p>100% full coverage protection</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <div class="feature-info">
              <h4>30-Day Guarantee</h4>
              <p>Hassle-free 30 days return</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎧</div>
            <div class="feature-info">
              <h4>24/7 Expert Support</h4>
              <p>Dedicated engineer assist</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section style="padding: 4rem 0;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Flagship Products</h2>
            <p class="section-subtitle">Handcrafted electronics built with modern excellence</p>
          </div>
          <a href="#/products" class="btn btn-outline">View All Products →</a>
        </div>
        <div class="product-grid">
          ${e.map(S).join("")}
        </div>
      </div>
    </section>
  `}function z(r,e={}){r.innerHTML=`
    <section style="padding: 2.5rem 0;">
      <div class="container">
        <div class="section-header">
          <div>
            <h1 class="section-title">Product Catalog</h1>
            <p class="section-subtitle">Explore our full line of next-gen gadgets and audio components</p>
          </div>
          <span id="product-count-badge" class="tag-badge badge-indigo">Showing ${w.length} items</span>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="catalog-search" placeholder="Search headphones, keyboards, monitors..." />
          </div>
          <div class="category-pills">
            <button class="pill-btn active" data-category="all">All Gear</button>
            <button class="pill-btn" data-category="audio">Audio</button>
            <button class="pill-btn" data-category="workstation">Workstation</button>
            <button class="pill-btn" data-category="wearables">Wearables</button>
            <button class="pill-btn" data-category="accessories">Accessories</button>
          </div>
          <div class="filter-actions">
            <select id="sort-select" class="sort-select">
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div id="catalog-product-grid" class="product-grid">
          <!-- Dynamic product cards render here -->
        </div>
      </div>
    </section>
  `;let t="all",o="",a="featured";const i=document.getElementById("catalog-product-grid"),n=document.getElementById("catalog-search"),h=document.getElementById("sort-select"),v=document.getElementById("product-count-badge"),g=document.querySelectorAll(".pill-btn");function m(){const d=B({category:t,searchQuery:o,sortBy:a});v.textContent=`Showing ${d.length} items`,d.length===0?i.innerHTML=`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.4rem; color: var(--text-heading);">No matching products found</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search terms or filters.</p>
        </div>
      `:i.innerHTML=d.map(S).join("")}n.addEventListener("input",d=>{o=d.target.value,m()}),h.addEventListener("change",d=>{a=d.target.value,m()}),g.forEach(d=>{d.addEventListener("click",()=>{g.forEach(s=>s.classList.remove("active")),d.classList.add("active"),t=d.dataset.category,m()})}),m()}function D(r,e){const t=C(e);if(!t){r.innerHTML=`
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <h2>Product Not Found</h2>
        <p style="margin: 1rem 0 2rem; color: var(--text-muted);">The product you are looking for does not exist.</p>
        <a href="#/products" class="btn btn-primary">Return to Shop</a>
      </div>
    `;return}const o=f.isWishlisted(t.id);r.innerHTML=`
    <div class="container" style="padding: 3rem 0;">
      <a href="#/products" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-weight: 500; margin-bottom: 2rem;">
        ← Back to Catalog
      </a>
      <div class="product-detail-layout">
        <div class="detail-gallery">
          <div class="main-image-frame">
            <img id="detail-main-img" src="${t.image}" alt="${t.name}" />
          </div>
        </div>

        <div class="detail-content">
          <span class="tag-badge ${t.badgeType}">${t.badge}</span>
          <h1 style="margin-top: 0.75rem;">${t.name}</h1>
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 1.25rem;">${t.tagline}</p>
          
          <div class="product-rating" style="font-size: 1rem; margin-bottom: 1.5rem;">
            ★ ${t.rating} <span style="font-size: 0.9rem;">(${t.reviewCount} customer reviews)</span>
          </div>

          <div style="font-size: 2.25rem; font-weight: 800; font-family: var(--font-heading); color: var(--text-heading); margin-bottom: 1.5rem;">
            $${t.price.toFixed(2)}
            ${t.oldPrice?`<span style="font-size: 1.2rem; color: var(--text-muted); text-decoration: line-through; margin-left: 0.75rem;">$${t.oldPrice.toFixed(2)}</span>`:""}
          </div>

          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem;">
            ${t.description}
          </p>

          <div class="detail-specs-list">
            ${Object.entries(t.specs).map(([a,i])=>`
              <div class="spec-item">
                <span class="label">${a}</span>
                <span class="value">${i}</span>
              </div>
            `).join("")}
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; margin-top: 2rem;">
            <button class="btn btn-primary btn-lg" data-action="add-to-cart" data-id="${t.id}" style="flex: 1;">
              🛒 Add to Cart
            </button>
            <button class="btn btn-secondary btn-lg ${o?"active":""}" data-action="toggle-wishlist" data-id="${t.id}">
              ${o?"❤️ Saved":"🤍 Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function I(r){const e=u.getSummary();if(e.items.length===0){r.innerHTML=`
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1.5rem;">🛒</div>
        <h2 style="font-family: var(--font-heading); font-size: 2rem;">Your Cart is Empty</h2>
        <p style="color: var(--text-muted); margin: 0.75rem 0 2rem;">Looks like you haven't added any products to your cart yet.</p>
        <a href="#/products" class="btn btn-primary btn-lg">Browse Products</a>
      </div>
    `;return}r.innerHTML=`
    <div class="container" style="padding: 3rem 0;">
      <h1 class="section-title" style="margin-bottom: 2rem;">Shopping Cart (${e.totalCount} items)</h1>
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2.5rem;">
        <!-- Cart Items List -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${e.items.map(i=>`
            <div class="cart-item" style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <img src="${i.product.image}" alt="${i.product.name}" class="cart-item-img" />
              <div class="cart-item-info">
                <div>
                  <h4>${i.product.name}</h4>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">${i.product.category}</div>
                </div>
                <div style="font-weight: 700; color: var(--text-heading); font-size: 1.1rem;">
                  $${i.product.price.toFixed(2)}
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between;">
                <button data-action="cart-remove" data-id="${i.product.id}" style="color: var(--accent-rose); font-size: 0.85rem; font-weight: 600;">Remove</button>
                <div class="qty-controls">
                  <button class="qty-btn" data-action="cart-decrease" data-id="${i.product.id}">-</button>
                  <span style="font-weight: 700; width: 24px; text-align: center;">${i.quantity}</span>
                  <button class="qty-btn" data-action="cart-increase" data-id="${i.product.id}">+</button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Order Summary Side Panel -->
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); height: fit-content;">
          <h3 style="font-family: var(--font-heading); margin-bottom: 1.25rem; font-size: 1.2rem;">Order Summary</h3>
          <div class="cart-summary-line">
            <span>Subtotal</span>
            <span>$${e.subtotal.toFixed(2)}</span>
          </div>
          ${e.discount>0?`
            <div class="cart-summary-line" style="color: var(--accent-emerald);">
              <span>Discount (${e.appliedCoupon.code})</span>
              <span>-$${e.discount.toFixed(2)}</span>
            </div>
          `:""}
          <div class="cart-summary-line">
            <span>Estimated Tax (8%)</span>
            <span>$${e.estimatedTax.toFixed(2)}</span>
          </div>
          <div class="cart-summary-line">
            <span>Shipping</span>
            <span>${e.shippingFee===0?"FREE":`$${e.shippingFee.toFixed(2)}`}</span>
          </div>
          <div class="cart-summary-line total">
            <span>Total</span>
            <span style="color: var(--accent-primary);">$${e.grandTotal.toFixed(2)}</span>
          </div>

          <!-- Coupon Input -->
          <div style="margin: 1.5rem 0;">
            <div style="display: flex; gap: 0.5rem;">
              <input type="text" id="cart-coupon-input" placeholder="Promo code (e.g. LUMINA10)" class="form-control" style="font-size: 0.85rem;" />
              <button id="apply-coupon-btn" class="btn btn-secondary btn-sm">Apply</button>
            </div>
          </div>

          <button id="proceed-checkout-btn" class="btn btn-primary btn-full btn-lg">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  `;const t=document.getElementById("apply-coupon-btn"),o=document.getElementById("cart-coupon-input"),a=document.getElementById("proceed-checkout-btn");t&&t.addEventListener("click",()=>{const i=u.applyCoupon(o.value);b(i.message,i.success?"success":"info"),I(r)}),a&&a.addEventListener("click",()=>{P()})}function W(r){const e=f.getWishlistedProducts();if(e.length===0){r.innerHTML=`
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1.5rem;">🤍</div>
        <h2 style="font-family: var(--font-heading); font-size: 2rem;">Your Wishlist is Empty</h2>
        <p style="color: var(--text-muted); margin: 0.75rem 0 2rem;">Save your favorite tech gear here for quick access.</p>
        <a href="#/products" class="btn btn-primary btn-lg">Explore Catalog</a>
      </div>
    `;return}r.innerHTML=`
    <div class="container" style="padding: 3rem 0;">
      <div class="section-header">
        <div>
          <h1 class="section-title">Your Wishlist</h1>
          <p class="section-subtitle">${e.length} saved products</p>
        </div>
      </div>
      <div class="product-grid">
        ${e.map(S).join("")}
      </div>
    </div>
  `}function R(r){r.innerHTML=`
    <div class="container" style="padding: 3rem 0; max-width: 900px;">
      <span class="tag-badge badge-indigo">Capstone Project Documentation</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; margin: 1rem 0;">
        Full-Stack Project Architecture & Design
      </h1>
      <p style="color: var(--text-secondary); font-size: 1.15rem; line-height: 1.8; margin-bottom: 2.5rem;">
        LUMINA is a high-performance modern Web Application designed and engineered by <strong>Supradip Bhattacharjee</strong> as a Web Development Capstone Project.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h3 style="font-family: var(--font-heading); margin-bottom: 0.75rem; color: var(--accent-primary);">⚡ Modular Architecture</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Constructed using native ES Modules separation (Router, UI Renderers, Product DB, Cart & Wishlist State Stores) ensuring scalable, human-readable clean code.
          </p>
        </div>
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h3 style="font-family: var(--font-heading); margin-bottom: 0.75rem; color: var(--accent-emerald);">🎯 Client-Side Routing</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Seamless zero-reload hash router supporting dynamic route parameters ('#/product/:id'), deep linking, and responsive back navigation.
          </p>
        </div>
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h3 style="font-family: var(--font-heading); margin-bottom: 0.75rem; color: var(--accent-amber);">🎨 Design System</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Built with custom CSS variables, dark/light theme switching, glassmorphism UI tokens, micro-animations, and full mobile-first responsiveness.
          </p>
        </div>
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h3 style="font-family: var(--font-heading); margin-bottom: 0.75rem; color: var(--accent-rose);">🚀 Asset Optimization & Deployment</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Optimized via Vite bundling, JS/CSS minification, lazy-loaded visual assets, and deployment readiness for Vercel, Netlify, or Render.
          </p>
        </div>
      </div>
    </div>
  `}function F(r){const e=C(r);if(!e)return;const t=document.createElement("div");t.className="modal-backdrop active",t.id="quick-view-modal",t.innerHTML=`
    <div class="modal-container">
      <div class="modal-header">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem;">Quick View</h3>
        <button id="close-modal-btn" style="font-size: 1.5rem; color: var(--text-muted); cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem;">
        <img src="${e.image}" alt="${e.name}" style="width: 100%; border-radius: var(--radius-md); object-fit: cover;" />
        <div>
          <span class="tag-badge ${e.badgeType}">${e.badge}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin: 0.5rem 0;">${e.name}</h2>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 1rem;">
            $${e.price.toFixed(2)}
          </div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${e.description}</p>
          <button class="btn btn-primary btn-full" data-action="add-to-cart" data-id="${e.id}">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector("#close-modal-btn").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}function P(){const r=u.getSummary();if(r.items.length===0){b("Your cart is empty!","info");return}const e=document.createElement("div");e.className="modal-backdrop active",e.id="checkout-modal",e.innerHTML=`
    <div class="modal-container">
      <div class="modal-header">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem;">Checkout & Order Confirmation</h3>
        <button id="close-checkout-btn" style="font-size: 1.5rem; color: var(--text-muted); cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body">
        <form id="checkout-form">
          <h4 style="font-family: var(--font-heading); margin-bottom: 1rem; color: var(--text-heading);">1. Shipping Address</h4>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" required class="form-control" placeholder="e.g. Supradip Bhattacharjee" value="Supradip Bhattacharjee" />
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" required class="form-control" placeholder="supradip@example.com" value="supradip@example.com" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Street Address</label>
            <input type="text" required class="form-control" placeholder="123 Tech Avenue, Suite 400" value="742 Evergreen Terrace" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">City</label>
              <input type="text" required class="form-control" value="New York" />
            </div>
            <div class="form-group">
              <label class="form-label">Postal Code</label>
              <input type="text" required class="form-control" value="10001" />
            </div>
          </div>

          <h4 style="font-family: var(--font-heading); margin: 1.5rem 0 1rem; color: var(--text-heading);">2. Payment Method</h4>
          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <label style="flex: 1; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--accent-primary); border-radius: var(--radius-md); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
              <input type="radio" name="payment" checked /> Credit Card (Demo)
            </label>
            <label style="flex: 1; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
              <input type="radio" name="payment" /> Apple Pay / Google Pay
            </label>
          </div>

          <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 700; color: var(--text-heading);">
              <span>Order Total:</span>
              <span style="color: var(--accent-primary); font-size: 1.2rem;">$${r.grandTotal.toFixed(2)}</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Includes tax and shipping.</div>
          </div>

          <button type="submit" class="btn btn-primary btn-full btn-lg">
            Complete Order ($${r.grandTotal.toFixed(2)})
          </button>
        </form>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#close-checkout-btn").addEventListener("click",()=>e.remove()),e.querySelector("#checkout-form").addEventListener("submit",a=>{a.preventDefault();const i="LUM-"+Math.floor(1e5+Math.random()*9e5);u.clearCart(),e.querySelector(".modal-body").innerHTML=`
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎉</div>
        <h2 style="font-family: var(--font-heading); color: var(--text-heading); font-size: 1.8rem;">Order Placed Successfully!</h2>
        <p style="color: var(--accent-emerald); font-weight: 700; margin: 0.5rem 0 1.5rem;">Order Reference: #${i}</p>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">
          Thank you for your purchase! A confirmation receipt has been sent to your email address.
        </p>
        <button id="finish-order-btn" class="btn btn-primary btn-lg">Return to Shop</button>
      </div>
    `,e.querySelector("#finish-order-btn").addEventListener("click",()=>{e.remove(),window.location.hash="#/products"})})}class H{constructor(e){this.container=document.getElementById(e),this.routes=[],this.addRoute("#/",T),this.addRoute("#/products",z),this.addRoute("#/product/:id",D),this.addRoute("#/cart",I),this.addRoute("#/wishlist",W),this.addRoute("#/about",R),window.addEventListener("hashchange",()=>this.handleRoute())}addRoute(e,t){const o=[],a=e.replace(/:([a-zA-Z0-9]+)/g,(n,h)=>(o.push(h),"([^/]+)")),i=new RegExp(`^${a}$`);this.routes.push({path:e,regex:i,paramNames:o,handler:t})}handleRoute(){const e=window.location.hash||"#/";document.querySelectorAll(".nav-link").forEach(t=>{const o=t.getAttribute("href");o===e||e.startsWith("#/product")&&o==="#/products"?t.classList.add("active"):t.classList.remove("active")}),window.scrollTo({top:0,behavior:"smooth"});for(const t of this.routes){const o=e.match(t.regex);if(o){const a={};t.paramNames.forEach((i,n)=>{a[i]=o[n+1]}),t.paramNames.length>0?t.handler(this.container,a[t.paramNames[0]]):t.handler(this.container);return}}T(this.container)}init(){this.handleRoute()}}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("theme-toggle-btn"),e=localStorage.getItem("lumina_theme")||"dark";function t(s){document.documentElement.setAttribute("data-theme",s),localStorage.setItem("lumina_theme",s),r&&(r.textContent=s==="dark"?"☀️":"🌙")}t(e),r&&r.addEventListener("click",()=>{const s=document.documentElement.getAttribute("data-theme");t(s==="dark"?"light":"dark")});const o=document.getElementById("cart-btn"),a=document.getElementById("cart-drawer"),i=document.getElementById("drawer-overlay"),n=document.getElementById("close-drawer-btn");function h(){a&&i&&(a.classList.add("active"),i.classList.add("active"))}function v(){a&&i&&(a.classList.remove("active"),i.classList.remove("active"))}o&&o.addEventListener("click",h),n&&n.addEventListener("click",v),i&&i.addEventListener("click",v);function g(s){const c=document.getElementById("cart-badge-count");c&&(c.textContent=s.totalCount,c.style.display=s.totalCount>0?"flex":"none");const y=document.getElementById("drawer-body-content"),p=document.getElementById("drawer-subtotal");p&&(p.textContent=`$${s.subtotal.toFixed(2)}`),y&&(s.items.length===0?y.innerHTML=`
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</div>
            <p>Your cart is empty.</p>
          </div>
        `:y.innerHTML=s.items.map(l=>`
          <div class="cart-item">
            <img src="${l.product.image}" alt="${l.product.name}" class="cart-item-img" />
            <div class="cart-item-info">
              <h4>${l.product.name}</h4>
              <div style="font-weight: 700; color: var(--text-heading);">$${l.product.price.toFixed(2)}</div>
              <div class="qty-controls">
                <button class="qty-btn" data-action="cart-decrease" data-id="${l.product.id}">-</button>
                <span style="font-size: 0.85rem; font-weight: 600;">${l.quantity}</span>
                <button class="qty-btn" data-action="cart-increase" data-id="${l.product.id}">+</button>
              </div>
            </div>
            <button data-action="cart-remove" data-id="${l.product.id}" style="color: var(--accent-rose); font-size: 1.1rem; cursor: pointer;">&times;</button>
          </div>
        `).join(""))}function m(s){const c=document.getElementById("wishlist-badge-count");c&&(c.textContent=s.length,c.style.display=s.length>0?"flex":"none")}u.subscribe(g),f.subscribe(m),g(u.getSummary()),m(f.productIds),document.addEventListener("click",s=>{const c=s.target.closest("[data-action]");if(!c)return;const y=c.dataset.action,p=c.dataset.id;switch(y){case"add-to-cart":u.addItem(p,1),b("Item added to cart!","success");break;case"toggle-wishlist":const l=f.toggleItem(p);b(l.added?"Added to Wishlist!":"Removed from Wishlist",l.added?"success":"info"),c.classList.toggle("active",l.added);break;case"quick-view":F(p);break;case"cart-increase":const k=u.items.find(x=>x.productId===p);k&&u.updateQuantity(p,k.quantity+1);break;case"cart-decrease":const $=u.items.find(x=>x.productId===p);$&&u.updateQuantity(p,$.quantity-1);break;case"cart-remove":u.removeItem(p),b("Item removed from cart","info");break;case"open-checkout":v(),P();break}}),new H("app").init()});
