/**
 * Lumina E-Commerce - Main Application Entry Point
 * Author: Supradip Bhattacharjee
 */

import { Router } from './router.js';
import { cart } from './cart.js';
import { wishlist } from './wishlist.js';
import { showToast, openQuickViewModal, openCheckoutModal } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('lumina_theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lumina_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  setTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. Cart Side Drawer Toggling
  const cartToggleBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');

  function openCartDrawer() {
    if (cartDrawer && drawerOverlay) {
      cartDrawer.classList.add('active');
      drawerOverlay.classList.add('active');
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && drawerOverlay) {
      cartDrawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
    }
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeCartDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeCartDrawer);

  // 3. Update Cart Badges & Side Drawer Body
  function updateCartUI(summary) {
    // Update badge numbers
    const cartBadge = document.getElementById('cart-badge-count');
    if (cartBadge) {
      cartBadge.textContent = summary.totalCount;
      cartBadge.style.display = summary.totalCount > 0 ? 'flex' : 'none';
    }

    // Render cart items in side drawer
    const drawerBody = document.getElementById('drawer-body-content');
    const drawerSubtotal = document.getElementById('drawer-subtotal');

    if (drawerSubtotal) {
      drawerSubtotal.textContent = `$${summary.subtotal.toFixed(2)}`;
    }

    if (drawerBody) {
      if (summary.items.length === 0) {
        drawerBody.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</div>
            <p>Your cart is empty.</p>
          </div>
        `;
      } else {
        drawerBody.innerHTML = summary.items.map(item => `
          <div class="cart-item">
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" />
            <div class="cart-item-info">
              <h4>${item.product.name}</h4>
              <div style="font-weight: 700; color: var(--text-heading);">$${item.product.price.toFixed(2)}</div>
              <div class="qty-controls">
                <button class="qty-btn" data-action="cart-decrease" data-id="${item.product.id}">-</button>
                <span style="font-size: 0.85rem; font-weight: 600;">${item.quantity}</span>
                <button class="qty-btn" data-action="cart-increase" data-id="${item.product.id}">+</button>
              </div>
            </div>
            <button data-action="cart-remove" data-id="${item.product.id}" style="color: var(--accent-rose); font-size: 1.1rem; cursor: pointer;">&times;</button>
          </div>
        `).join('');
      }
    }
  }

  // 4. Update Wishlist Badge UI
  function updateWishlistUI(wishlistIds) {
    const wishlistBadge = document.getElementById('wishlist-badge-count');
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlistIds.length;
      wishlistBadge.style.display = wishlistIds.length > 0 ? 'flex' : 'none';
    }
  }

  cart.subscribe(updateCartUI);
  wishlist.subscribe(updateWishlistUI);

  // Initial Sync
  updateCartUI(cart.getSummary());
  updateWishlistUI(wishlist.productIds);

  // 5. Global Action Delegation
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('[data-action]');
    if (!targetBtn) return;

    const action = targetBtn.dataset.action;
    const productId = targetBtn.dataset.id;

    switch (action) {
      case 'add-to-cart':
        cart.addItem(productId, 1);
        showToast('Item added to cart!', 'success');
        break;

      case 'toggle-wishlist':
        const res = wishlist.toggleItem(productId);
        showToast(res.added ? 'Added to Wishlist!' : 'Removed from Wishlist', res.added ? 'success' : 'info');
        // Refresh product card heart button state if visible
        targetBtn.classList.toggle('active', res.added);
        break;

      case 'quick-view':
        openQuickViewModal(productId);
        break;

      case 'cart-increase':
        const currentItemInc = cart.items.find(i => i.productId === productId);
        if (currentItemInc) cart.updateQuantity(productId, currentItemInc.quantity + 1);
        break;

      case 'cart-decrease':
        const currentItemDec = cart.items.find(i => i.productId === productId);
        if (currentItemDec) cart.updateQuantity(productId, currentItemDec.quantity - 1);
        break;

      case 'cart-remove':
        cart.removeItem(productId);
        showToast('Item removed from cart', 'info');
        break;

      case 'open-checkout':
        closeCartDrawer();
        openCheckoutModal();
        break;
    }
  });

  // 6. Initialize Hash Router
  const router = new Router('app');
  router.init();
});
