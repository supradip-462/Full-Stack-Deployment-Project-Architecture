/**
 * Lumina E-Commerce - Modular Client-Side Router
 * Author: Supradip Bhattacharjee
 */

import {
  renderHomeView,
  renderProductsView,
  renderProductDetailView,
  renderCartView,
  renderWishlistView,
  renderAboutView
} from './ui.js';

export class Router {
  constructor(appContainerId) {
    this.container = document.getElementById(appContainerId);
    this.routes = [];
    
    // Default routes definition
    this.addRoute('#/', renderHomeView);
    this.addRoute('#/products', renderProductsView);
    this.addRoute('#/product/:id', renderProductDetailView);
    this.addRoute('#/cart', renderCartView);
    this.addRoute('#/wishlist', renderWishlistView);
    this.addRoute('#/about', renderAboutView);

    window.addEventListener('hashchange', () => this.handleRoute());
  }

  addRoute(path, handler) {
    // Convert path parameter pattern (e.g. #/product/:id) to regex
    const paramNames = [];
    const regexPath = path.replace(/:([a-zA-Z0-9]+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return '([^/]+)';
    });
    
    const regex = new RegExp(`^${regexPath}$`);
    this.routes.push({ path, regex, paramNames, handler });
  }

  handleRoute() {
    const hash = window.location.hash || '#/';
    
    // Highlight active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === hash || (hash.startsWith('#/product') && href === '#/products')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Scroll to top on navigate
    window.scrollTo({ top: 0, behavior: 'smooth' });

    for (const route of this.routes) {
      const match = hash.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, index) => {
          params[name] = match[index + 1];
        });

        if (route.paramNames.length > 0) {
          route.handler(this.container, params[route.paramNames[0]]);
        } else {
          route.handler(this.container);
        }
        return;
      }
    }

    // Fallback route to Home
    renderHomeView(this.container);
  }

  init() {
    this.handleRoute();
  }
}
