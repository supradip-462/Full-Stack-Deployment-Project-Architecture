/**
 * Lumina E-Commerce - Cart State Management
 * Author: Supradip Bhattacharjee
 */

import { getProductById } from './products.js';

const CART_STORAGE_KEY = 'lumina_cart_v1';

class CartManager {
  constructor() {
    this.items = this.loadCartFromStorage();
    this.appliedCoupon = null;
    this.listeners = [];
  }

  loadCartFromStorage() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage:', e);
      return [];
    }
  }

  saveCartToStorage() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.saveCartToStorage();
    this.listeners.forEach(fn => fn(this.getSummary()));
  }

  addItem(productId, quantity = 1) {
    const existing = this.items.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ productId, quantity });
    }
    this.notify();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.productId !== productId);
    this.notify();
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    const item = this.items.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.notify();
    }
  }

  clearCart() {
    this.items = [];
    this.appliedCoupon = null;
    this.notify();
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'LUMINA10') {
      this.appliedCoupon = { code: 'LUMINA10', discountPercent: 10 };
      this.notify();
      return { success: true, message: '10% discount applied!' };
    } else if (cleanCode === 'SUPER20') {
      this.appliedCoupon = { code: 'SUPER20', discountPercent: 20 };
      this.notify();
      return { success: true, message: '20% Special discount applied!' };
    } else {
      return { success: false, message: 'Invalid coupon code. Try LUMINA10 or SUPER20' };
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.notify();
  }

  getSummary() {
    let count = 0;
    let subtotal = 0;
    const detailedItems = [];

    this.items.forEach(item => {
      const product = getProductById(item.productId);
      if (product) {
        count += item.quantity;
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        detailedItems.push({
          product,
          quantity: item.quantity,
          itemTotal
        });
      }
    });

    let discount = 0;
    if (this.appliedCoupon) {
      discount = (subtotal * this.appliedCoupon.discountPercent) / 100;
    }

    const estimatedTax = (subtotal - discount) * 0.08; // 8% estimated tax
    const freeShippingThreshold = 200;
    const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 15;
    const grandTotal = subtotal - discount + estimatedTax + shippingFee;

    return {
      items: detailedItems,
      totalCount: count,
      subtotal,
      discount,
      appliedCoupon: this.appliedCoupon,
      estimatedTax,
      shippingFee,
      freeShippingThreshold,
      amountNeededForFreeShipping: Math.max(0, freeShippingThreshold - subtotal),
      grandTotal
    };
  }
}

export const cart = new CartManager();
