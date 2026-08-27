/**
 * Lumina E-Commerce - User Interface Rendering & Modal Handlers
 * Author: Supradip Bhattacharjee
 */

import { cart } from './cart.js';
import { wishlist } from './wishlist.js';
import { PRODUCTS, getProductById, filterProducts } from './products.js';

// --- Toast Notifications ---
export function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === 'success' ? '✓' : 'ℹ'}
    </div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Render Product Card ---
export function createProductCardHTML(product) {
  const isFav = wishlist.isWishlisted(product.id);

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-container">
        <span class="tag-badge ${product.badgeType} product-badge-overlay">${product.badge}</span>
        <button class="wishlist-toggle-btn ${isFav ? 'active' : ''}" data-action="toggle-wishlist" data-id="${product.id}" title="${isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}">
          <svg width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="quick-view-overlay">
          <button class="btn btn-secondary btn-sm" data-action="quick-view" data-id="${product.id}">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="#/product/${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          ★ ${product.rating} <span>(${product.reviewCount})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" data-action="add-to-cart" data-id="${product.id}">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- Render Views ---

// 1. Home View
export function renderHomeView(appContainer) {
  const featured = PRODUCTS.filter(p => p.featured);

  appContainer.innerHTML = `
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
          ${featured.map(createProductCardHTML).join('')}
        </div>
      </div>
    </section>
  `;
}

// 2. Products View (Catalog with live search & filters)
export function renderProductsView(appContainer, initialParams = {}) {
  appContainer.innerHTML = `
    <section style="padding: 2.5rem 0;">
      <div class="container">
        <div class="section-header">
          <div>
            <h1 class="section-title">Product Catalog</h1>
            <p class="section-subtitle">Explore our full line of next-gen gadgets and audio components</p>
          </div>
          <span id="product-count-badge" class="tag-badge badge-indigo">Showing ${PRODUCTS.length} items</span>
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
  `;

  // Attach Catalog Event Listeners
  let currentCategory = 'all';
  let searchQuery = '';
  let sortBy = 'featured';

  const gridContainer = document.getElementById('catalog-product-grid');
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('sort-select');
  const countBadge = document.getElementById('product-count-badge');
  const pillBtns = document.querySelectorAll('.pill-btn');

  function updateCatalog() {
    const results = filterProducts({ category: currentCategory, searchQuery, sortBy });
    countBadge.textContent = `Showing ${results.length} items`;
    if (results.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.4rem; color: var(--text-heading);">No matching products found</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search terms or filters.</p>
        </div>
      `;
    } else {
      gridContainer.innerHTML = results.map(createProductCardHTML).join('');
    }
  }

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    updateCatalog();
  });

  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    updateCatalog();
  });

  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      updateCatalog();
    });
  });

  updateCatalog();
}

// 3. Product Detail View
export function renderProductDetailView(appContainer, productId) {
  const product = getProductById(productId);
  if (!product) {
    appContainer.innerHTML = `
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <h2>Product Not Found</h2>
        <p style="margin: 1rem 0 2rem; color: var(--text-muted);">The product you are looking for does not exist.</p>
        <a href="#/products" class="btn btn-primary">Return to Shop</a>
      </div>
    `;
    return;
  }

  const isFav = wishlist.isWishlisted(product.id);

  appContainer.innerHTML = `
    <div class="container" style="padding: 3rem 0;">
      <a href="#/products" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-weight: 500; margin-bottom: 2rem;">
        ← Back to Catalog
      </a>
      <div class="product-detail-layout">
        <div class="detail-gallery">
          <div class="main-image-frame">
            <img id="detail-main-img" src="${product.image}" alt="${product.name}" />
          </div>
        </div>

        <div class="detail-content">
          <span class="tag-badge ${product.badgeType}">${product.badge}</span>
          <h1 style="margin-top: 0.75rem;">${product.name}</h1>
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 1.25rem;">${product.tagline}</p>
          
          <div class="product-rating" style="font-size: 1rem; margin-bottom: 1.5rem;">
            ★ ${product.rating} <span style="font-size: 0.9rem;">(${product.reviewCount} customer reviews)</span>
          </div>

          <div style="font-size: 2.25rem; font-weight: 800; font-family: var(--font-heading); color: var(--text-heading); margin-bottom: 1.5rem;">
            $${product.price.toFixed(2)}
            ${product.oldPrice ? `<span style="font-size: 1.2rem; color: var(--text-muted); text-decoration: line-through; margin-left: 0.75rem;">$${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>

          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem;">
            ${product.description}
          </p>

          <div class="detail-specs-list">
            ${Object.entries(product.specs).map(([key, val]) => `
              <div class="spec-item">
                <span class="label">${key}</span>
                <span class="value">${val}</span>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; margin-top: 2rem;">
            <button class="btn btn-primary btn-lg" data-action="add-to-cart" data-id="${product.id}" style="flex: 1;">
              🛒 Add to Cart
            </button>
            <button class="btn btn-secondary btn-lg ${isFav ? 'active' : ''}" data-action="toggle-wishlist" data-id="${product.id}">
              ${isFav ? '❤️ Saved' : '🤍 Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. Cart Page View
export function renderCartView(appContainer) {
  const summary = cart.getSummary();

  if (summary.items.length === 0) {
    appContainer.innerHTML = `
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1.5rem;">🛒</div>
        <h2 style="font-family: var(--font-heading); font-size: 2rem;">Your Cart is Empty</h2>
        <p style="color: var(--text-muted); margin: 0.75rem 0 2rem;">Looks like you haven't added any products to your cart yet.</p>
        <a href="#/products" class="btn btn-primary btn-lg">Browse Products</a>
      </div>
    `;
    return;
  }

  appContainer.innerHTML = `
    <div class="container" style="padding: 3rem 0;">
      <h1 class="section-title" style="margin-bottom: 2rem;">Shopping Cart (${summary.totalCount} items)</h1>
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2.5rem;">
        <!-- Cart Items List -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${summary.items.map(item => `
            <div class="cart-item" style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" />
              <div class="cart-item-info">
                <div>
                  <h4>${item.product.name}</h4>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">${item.product.category}</div>
                </div>
                <div style="font-weight: 700; color: var(--text-heading); font-size: 1.1rem;">
                  $${item.product.price.toFixed(2)}
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between;">
                <button data-action="cart-remove" data-id="${item.product.id}" style="color: var(--accent-rose); font-size: 0.85rem; font-weight: 600;">Remove</button>
                <div class="qty-controls">
                  <button class="qty-btn" data-action="cart-decrease" data-id="${item.product.id}">-</button>
                  <span style="font-weight: 700; width: 24px; text-align: center;">${item.quantity}</span>
                  <button class="qty-btn" data-action="cart-increase" data-id="${item.product.id}">+</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Order Summary Side Panel -->
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); height: fit-content;">
          <h3 style="font-family: var(--font-heading); margin-bottom: 1.25rem; font-size: 1.2rem;">Order Summary</h3>
          <div class="cart-summary-line">
            <span>Subtotal</span>
            <span>$${summary.subtotal.toFixed(2)}</span>
          </div>
          ${summary.discount > 0 ? `
            <div class="cart-summary-line" style="color: var(--accent-emerald);">
              <span>Discount (${summary.appliedCoupon.code})</span>
              <span>-$${summary.discount.toFixed(2)}</span>
            </div>
          ` : ''}
          <div class="cart-summary-line">
            <span>Estimated Tax (8%)</span>
            <span>$${summary.estimatedTax.toFixed(2)}</span>
          </div>
          <div class="cart-summary-line">
            <span>Shipping</span>
            <span>${summary.shippingFee === 0 ? 'FREE' : `$${summary.shippingFee.toFixed(2)}`}</span>
          </div>
          <div class="cart-summary-line total">
            <span>Total</span>
            <span style="color: var(--accent-primary);">$${summary.grandTotal.toFixed(2)}</span>
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
  `;

  // Attach page event listener for promo coupon
  const applyBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('cart-coupon-input');
  const checkoutBtn = document.getElementById('proceed-checkout-btn');

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const res = cart.applyCoupon(couponInput.value);
      showToast(res.message, res.success ? 'success' : 'info');
      renderCartView(appContainer);
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      openCheckoutModal();
    });
  }
}

// 5. Wishlist View
export function renderWishlistView(appContainer) {
  const wishlistedProducts = wishlist.getWishlistedProducts();

  if (wishlistedProducts.length === 0) {
    appContainer.innerHTML = `
      <div class="container" style="padding: 5rem 0; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1.5rem;">🤍</div>
        <h2 style="font-family: var(--font-heading); font-size: 2rem;">Your Wishlist is Empty</h2>
        <p style="color: var(--text-muted); margin: 0.75rem 0 2rem;">Save your favorite tech gear here for quick access.</p>
        <a href="#/products" class="btn btn-primary btn-lg">Explore Catalog</a>
      </div>
    `;
    return;
  }

  appContainer.innerHTML = `
    <div class="container" style="padding: 3rem 0;">
      <div class="section-header">
        <div>
          <h1 class="section-title">Your Wishlist</h1>
          <p class="section-subtitle">${wishlistedProducts.length} saved products</p>
        </div>
      </div>
      <div class="product-grid">
        ${wishlistedProducts.map(createProductCardHTML).join('')}
      </div>
    </div>
  `;
}

// 6. About & Architecture View
export function renderAboutView(appContainer) {
  appContainer.innerHTML = `
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
  `;
}

// --- Quick View Modal ---
export function openQuickViewModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop active';
  modal.id = 'quick-view-modal';
  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-header">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem;">Quick View</h3>
        <button id="close-modal-btn" style="font-size: 1.5rem; color: var(--text-muted); cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--radius-md); object-fit: cover;" />
        <div>
          <span class="tag-badge ${product.badgeType}">${product.badge}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin: 0.5rem 0;">${product.name}</h2>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 1rem;">
            $${product.price.toFixed(2)}
          </div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${product.description}</p>
          <button class="btn btn-primary btn-full" data-action="add-to-cart" data-id="${product.id}">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('#close-modal-btn');
  closeBtn.addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// --- Checkout Modal ---
export function openCheckoutModal() {
  const summary = cart.getSummary();
  if (summary.items.length === 0) {
    showToast('Your cart is empty!', 'info');
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop active';
  modal.id = 'checkout-modal';
  modal.innerHTML = `
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
              <span style="color: var(--accent-primary); font-size: 1.2rem;">$${summary.grandTotal.toFixed(2)}</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Includes tax and shipping.</div>
          </div>

          <button type="submit" class="btn btn-primary btn-full btn-lg">
            Complete Order ($${summary.grandTotal.toFixed(2)})
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('#close-checkout-btn');
  closeBtn.addEventListener('click', () => modal.remove());

  const form = modal.querySelector('#checkout-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderId = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    cart.clearCart();

    modal.querySelector('.modal-body').innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎉</div>
        <h2 style="font-family: var(--font-heading); color: var(--text-heading); font-size: 1.8rem;">Order Placed Successfully!</h2>
        <p style="color: var(--accent-emerald); font-weight: 700; margin: 0.5rem 0 1.5rem;">Order Reference: #${orderId}</p>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">
          Thank you for your purchase! A confirmation receipt has been sent to your email address.
        </p>
        <button id="finish-order-btn" class="btn btn-primary btn-lg">Return to Shop</button>
      </div>
    `;

    modal.querySelector('#finish-order-btn').addEventListener('click', () => {
      modal.remove();
      window.location.hash = '#/products';
    });
  });
}
