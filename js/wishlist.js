/**
 * Lumina E-Commerce - Wishlist Manager
 * Author: Supradip Bhattacharjee
 */

import { getProductById } from './products.js';

const WISHLIST_STORAGE_KEY = 'lumina_wishlist_v1';

class WishlistManager {
  constructor() {
    this.productIds = this.loadWishlistFromStorage();
    this.listeners = [];
  }

  loadWishlistFromStorage() {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not read wishlist from localStorage:', e);
      return [];
    }
  }

  saveWishlistToStorage() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.productIds));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.saveWishlistToStorage();
    this.listeners.forEach(fn => fn(this.productIds));
  }

  toggleItem(productId) {
    if (this.productIds.includes(productId)) {
      this.productIds = this.productIds.filter(id => id !== productId);
      this.notify();
      return { added: false };
    } else {
      this.productIds.push(productId);
      this.notify();
      return { added: true };
    }
  }

  isWishlisted(productId) {
    return this.productIds.includes(productId);
  }

  getWishlistedProducts() {
    return this.productIds
      .map(id => getProductById(id))
      .filter(Boolean);
  }

  getCount() {
    return this.productIds.length;
  }
}

export const wishlist = new WishlistManager();
