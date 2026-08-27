/**
 * Lumina E-Commerce - Product Database & Data Services
 * Author: Supradip Bhattacharjee
 */

export const PRODUCTS = [
  {
    id: 'headphones-pro',
    name: 'Lumina Spatial ANC Headphones',
    tagline: 'Immersive Studio-Grade Audio with Active Noise Cancellation',
    category: 'audio',
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Bestseller',
    badgeType: 'badge-indigo',
    image: './assets/images/headphones-pro.png',
    inStock: true,
    featured: true,
    description: 'Experience pure sonic clarity with state-of-the-art hybrid 45dB Active Noise Cancellation, custom titanium dynamic drivers, and 3D Spatial Audio tracking.',
    specs: {
      'Battery Life': '40 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.4 / 3.5mm Aux',
      'Drivers': '40mm Titanium Dome',
      'Weight': '250g',
      'Warranty': '2 Years Official'
    }
  },
  {
    id: 'mechanical-keyboard',
    name: 'Apex Cyber 75 Mechanical Keyboard',
    tagline: 'Custom Gasket Mount Wireless Mechanical Keyboard',
    category: 'workstation',
    price: 189.99,
    oldPrice: 219.99,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Hot',
    badgeType: 'badge-emerald',
    image: './assets/images/mechanical-keyboard.png',
    inStock: true,
    featured: true,
    description: 'Engineered for tactile perfection. Featuring CNC anodized aluminum frame, hot-swappable switches, PBT double-shot keycaps, and customizable per-key RGB backlighting.',
    specs: {
      'Mount Style': 'Flex-Cut Gasket Mount',
      'Switches': 'Linear Lubricated Switches',
      'Battery': '4000mAh Wireless',
      'Keycaps': 'Cherry Profile PBT',
      'Weight': '1.2 kg'
    }
  },
  {
    id: 'smartwatch-ultra',
    name: 'Lumina Horizon Watch Ultra',
    tagline: 'Titanium Smartwatch with Curved Sapphire AMOLED Display',
    category: 'wearables',
    price: 299.99,
    oldPrice: 349.99,
    rating: 4.9,
    reviewCount: 210,
    badge: 'New',
    badgeType: 'badge-amber',
    image: './assets/images/smartwatch-ultra.png',
    inStock: true,
    featured: true,
    description: 'Built for endurance and elegance. Features dual-frequency GPS, health metrics monitoring, ECG sensor, 100m water resistance, and up to 7 days battery life.',
    specs: {
      'Display': '2.1" Sapphire Crystal AMOLED',
      'Case Material': 'Aerospace Grade Titanium',
      'Sensors': 'ECG, SpO2, Heart Rate, Altimeter',
      'Water Resistance': '10 ATM (100 Meters)',
      'Battery': 'Up to 7 Days Normal Use'
    }
  },
  {
    id: 'earbuds-neo',
    name: 'Lumina Pulse ANC Earbuds',
    tagline: 'Ultra-Compact Wireless Earbuds with Smart Transparency',
    category: 'audio',
    price: 149.99,
    oldPrice: 179.99,
    rating: 4.7,
    reviewCount: 85,
    badge: 'Sale',
    badgeType: 'badge-indigo',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    featured: false,
    description: 'Crystal-clear voice calls, intelligent active noise isolation, IPX7 sweat-resistant coating, and ergonomic fit designed for all-day comfort.',
    specs: {
      'Battery': '32 Hours with Case',
      'Water Resistance': 'IPX7 Certified',
      'Charging': 'USB-C & Qi Wireless',
      'Noise Reduction': 'Up to 35dB'
    }
  },
  {
    id: 'monitor-4k',
    name: 'Lumina Vision 34" Curved OLED',
    tagline: 'Ultra-wide 240Hz Quantum Dot OLED Gaming & Workspace Monitor',
    category: 'workstation',
    price: 899.99,
    oldPrice: 999.99,
    rating: 4.95,
    reviewCount: 76,
    badge: 'Pro Gear',
    badgeType: 'badge-emerald',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    featured: true,
    description: 'Transform your workflow with blistering 240Hz refresh rates, true 0.03ms response time, 99.3% DCI-P3 color accuracy, and sleek ultra-thin aluminum stand.',
    specs: {
      'Resolution': '3440 x 1440 WQHD Curved',
      'Refresh Rate': '240Hz Refresh Rate',
      'Response Time': '0.03ms (GtG)',
      'HDR': 'VESA DisplayHDR True Black 400',
      'Ports': 'HDMI 2.1, DisplayPort 1.4, USB-C 90W'
    }
  },
  {
    id: 'ergonomic-mouse',
    name: 'Lumina Precision Wireless Mouse',
    tagline: 'Precision Ergonomic Mouse with MagSpeed Scroll Wheel',
    category: 'accessories',
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.6,
    reviewCount: 112,
    badge: 'Popular',
    badgeType: 'badge-amber',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    featured: false,
    description: 'Designed to fit the natural posture of your hand. Equipped with a 26K DPI optical sensor, quiet click buttons, and multi-device Bluetooth switching.',
    specs: {
      'DPI Range': '200 to 26,000 DPI',
      'Connectivity': '2.4GHz Dongle / Bluetooth',
      'Battery': '70 Days Single Charge',
      'Buttons': '7 Programmable Action Keys'
    }
  },
  {
    id: 'desk-lamp',
    name: 'Lumina Halo Smart Desk Lamp',
    tagline: 'Adaptive Color Temperature Desk Lamp with Wireless Charging',
    category: 'workstation',
    price: 119.99,
    oldPrice: 139.99,
    rating: 4.8,
    reviewCount: 64,
    badge: 'Eco',
    badgeType: 'badge-emerald',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    featured: false,
    description: 'Minimize eye fatigue with flicker-free natural light spectrum (CRI > 98). Features smart ambient light sensor and built-in 15W Qi fast charging pad.',
    specs: {
      'Color Temp': '2700K - 6500K Tunable',
      'CRI Rating': '> 98 Natural Spectrum',
      'Wireless Output': '15W Qi Fast Charger',
      'Control': 'Touch Slider & App Control'
    }
  },
  {
    id: 'power-bank',
    name: 'Lumina Turbo Power Station 140W',
    tagline: 'Ultra-Fast GaN 27,000mAh Battery Pack for Laptops & Mobile',
    category: 'accessories',
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.9,
    reviewCount: 145,
    badge: 'Essential',
    badgeType: 'badge-indigo',
    image: 'https://images.unsplash.com/photo-1609592424008-8f8373801f40?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    featured: false,
    description: 'Charge your laptop at full speed on the go. Equipped with smart OLED power telemetry screen, dual USB-C PD 3.1 ports, and airline approved capacity.',
    specs: {
      'Capacity': '27,000 mAh (99.9Wh)',
      'Max Output': '140W Total Power',
      'Display': 'Real-time OLED Telemetry',
      'Safety': '10-Point Thermal Guard'
    }
  }
];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function filterProducts({ category = 'all', searchQuery = '', sortBy = 'featured' }) {
  let filtered = [...PRODUCTS];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
  }

  return filtered;
}
