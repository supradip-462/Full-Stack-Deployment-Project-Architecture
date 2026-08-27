# ⚡ LUMINA — Next-Gen Electronics & Workspace Gear Store

> **This Project is Created By Supradip Bhattacharjee**

A modern, high-performance, modular E-Commerce Web Application built as a **Web Development Capstone Project**.

![Created By](https://img.shields.io/badge/Created%20By-Supradip%20Bhattacharjee-6366f1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🌟 Key Features

- **⚡ Native ES Module Architecture**: Modular separation of concerns into distinct services (`products.js`, `cart.js`, `wishlist.js`, `router.js`, `ui.js`, `app.js`).
- **🎯 Zero-Reload Client-Side Router**: Custom hash-based router supporting dynamic parameter matching (`#/product/:id`), deep linking, active route styling, and smooth scroll navigation.
- **🎨 Glassmorphism & Modern UI Design**: Dark/Light mode theme switching with CSS Custom Properties, vibrant glowing gradients, crisp Google Fonts (`Inter` & `Plus Jakarta Sans`), custom scrollbars, and micro-interactions.
- **🔍 Instant Live Product Catalog Filter**: Live search bar, category pill filtering (Audio, Workstation, Wearables, Accessories), and multi-criteria sorting (Price, Rating, Featured).
- **🛒 Shopping Cart & Coupon Engine**: Full state management with subtotal, 8% tax calculation, free shipping progress tracker, promo coupon validation (`LUMINA10` for 10% off, `SUPER20` for 20% off), and slide-over side drawer.
- **❤️ Wishlist Manager**: Save favorite items with persistent bookmarking and quick toggle capabilities.
- **💳 Multi-Step Order Checkout Modal**: Streamlined shipping address entry, payment selection, real-time total updates, generated order reference numbers, and simulated confirmation screen.
- **🚀 Optimized Production Build**: Powered by Vite for JavaScript ES module bundling, CSS minification, and instant asset optimization.

---

## 📁 Directory Structure

```
Fifth_Project/
├── assets/
│   ├── images/
│   │   ├── hero-banner.png
│   │   ├── headphones-pro.png
│   │   ├── mechanical-keyboard.png
│   │   └── smartwatch-ultra.png
├── css/
│   ├── style.css         # Core CSS design tokens, reset & variables
│   └── components.css    # Hero, Product Cards, Modals, Drawer, Toast
├── js/
│   ├── app.js            # Main application entry point & event delegation
│   ├── router.js         # Client-side SPA hash router
│   ├── products.js       # Product database & catalog query service
│   ├── cart.js           # Shopping cart manager & localStorage store
│   ├── wishlist.js       # Wishlist state manager & localStorage store
│   └── ui.js             # Dynamic DOM view renderers & modal handlers
├── index.html            # Main HTML5 document with SEO meta tags
├── package.json          # Vite build scripts & dependencies
├── vite.config.js        # Vite bundler & asset optimizer configuration
├── vercel.json           # Vercel deployment route configuration
├── netlify.toml          # Netlify static build deployment configuration
└── README.md             # Detailed documentation & setup guide
```

---

## 🛠️ Installation & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- NPM or PNPM

### Commands

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Local Development Server**
   ```bash
   npm run dev
   ```
   The application will be live at `http://localhost:3000`.

3. **Build Optimized Production Bundle**
   ```bash
   npm run build
   ```
   Generates a minified, production-ready `dist` folder.

4. **Preview Production Build Locally**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy Live to Modern Hosting Platforms

### Deploying to Vercel (1-Click)
1. Install Vercel CLI or import repository on [Vercel Dashboard](https://vercel.com).
2. The included `vercel.json` will automatically configure static routing and build outputs:
   ```bash
   npx vercel --prod
   ```

### Deploying to Netlify
1. Connect repository on [Netlify Dashboard](https://app.netlify.com).
2. Netlify will auto-detect the `netlify.toml` file setting `npm run build` as build command and `dist` as publish directory.

---

## 👤 Author Credit & Attribution

> **This Project is Created By Supradip Bhattacharjee**

- **Developer**: Supradip Bhattacharjee
- **Project**: Web Development Capstone Project
- **Tech Stack**: HTML5, Vanilla CSS3 (Custom Variables), JavaScript (ES6 Modules), Vite, Vercel/Netlify Ready.
