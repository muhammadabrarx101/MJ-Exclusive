export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  collection: 'Shalwar Kameez' | 'Pajama Kameez' | 'Thobe' | 'Sherwani' | 'Waist Coat' | 'Kufi';
  image: string;
  description: string;
  details: string[];
  colors: { name: string, hex: string }[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sk-1',
    title: 'Midnight Shadow Shalwar Kameez',
    price: 'Rs. 26,000',
    category: 'Classic Eastern',
    collection: 'Shalwar Kameez',
    image: 'https://picsum.photos/seed/mj-sk-1/800/1200',
    description: 'A masterpiece of understated elegance, crafted from premium blended cotton with a subtle sheen perfect for evening wear.',
    details: ['Premium Blended Cotton', 'Classic Fit', 'Embroidered Collar', 'Breathable Fabric'],
    colors: [
      { name: 'Obsidian Black', hex: '#0a0a0a' },
      { name: 'Charcoal', hex: '#262626' },
      { name: 'Midnight Blue', hex: '#191970' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true
  },
  {
    id: 'sk-2',
    title: 'Ivory Classic Shalwar Kameez',
    price: 'Rs. 18,500',
    category: 'Daily Essentials',
    collection: 'Shalwar Kameez',
    image: 'https://picsum.photos/seed/mj-sk-2/800/1200',
    description: 'The quintessential ivory set for Friday prayers or formal daytime events. Minimalist design for the modern gentleman.',
    details: ['100% Pure Egyptian Cotton', 'Standard Fit', 'Soft Texture', 'Durable Stitching'],
    colors: [
      { name: 'Ivory', hex: '#fffff0' },
      { name: 'Cream', hex: '#fffdd0' },
      { name: 'Off White', hex: '#faf9f6' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestSeller: true
  },
  {
    id: 'pk-1',
    title: 'Slate Grey Pajama Kameez',
    price: 'Rs. 14,000',
    category: 'Everyday Comfort',
    collection: 'Pajama Kameez',
    image: 'https://picsum.photos/seed/mj-pk-1/800/1200',
    description: 'Functional and comfortable, designed for the man on the move. Features a relaxed pajama bottom for ease of wear.',
    details: ['Poly-Viscose Blend', 'Relaxed Fit', 'Side Pockets', 'Easy Iron'],
    colors: [
      { name: 'Slate Grey', hex: '#708090' },
      { name: 'Olive Green', hex: '#556b2f' },
      { name: 'Steel Blue', hex: '#4682b4' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'th-1',
    title: 'Sandstone Desert Thobe',
    price: 'Rs. 12,500',
    category: 'Prayer Wear',
    collection: 'Thobe',
    image: 'https://picsum.photos/seed/mj-th-1/800/1200',
    description: 'Inspired by the Arabian dunes, this Thobe offers a modern silhouette with traditional comfort.',
    details: ['Lightweight Linen', 'Slim Tailoring', 'Hidden Placket', 'Ideal for Summer'],
    colors: [
      { name: 'Sandstone', hex: '#c2b280' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Sky Blue', hex: '#87ceeb' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'sw-1',
    title: 'Imperial Black Sherwani',
    price: 'Rs. 112,000',
    category: 'The Wedding Edit',
    collection: 'Sherwani',
    image: 'https://picsum.photos/seed/mj-sw-1/800/1200',
    description: 'Exquisite hand-embroidery on premium Jamawar silk. A majestic choice for your most significant day.',
    details: ['Hand-worked Dabka', 'Jamawar Silk', 'Structured Shoulders', 'Bespoke Buttons'],
    colors: [
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Deep Maroon', hex: '#800000' },
      { name: 'Emerald', hex: '#50c878' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestSeller: true
  },
  {
    id: 'sw-2',
    title: 'Royal Gold Sherwani',
    price: 'Rs. 98,000',
    category: 'The Wedding Edit',
    collection: 'Sherwani',
    image: 'https://picsum.photos/seed/mj-sw-2/800/1200',
    description: 'A deep, rich gold tone paired with intricate embroidery. Classic, timeless, and authoritative.',
    details: ['Zardozi Work', 'Raw Silk Base', 'Tailored to Perfection'],
    colors: [
      { name: 'Royal Gold', hex: '#ffd700' },
      { name: 'Ivory Silver', hex: '#e5e4e2' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'wc-1',
    title: 'Navy Textured Waistcoat',
    price: 'Rs. 22,000',
    category: 'Formal Accents',
    collection: 'Waist Coat',
    image: 'https://picsum.photos/seed/mj-wc-1/800/1200',
    description: 'Versatile navy waistcoat that pairs perfectly with any light-coloured Shalwar Kameez.',
    details: ['Textured Wool Blend', 'Hand-finished Edges', 'Modern Silhouette'],
    colors: [
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Maroon', hex: '#800000' },
      { name: 'Bottle Green', hex: '#006a4e' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestSeller: true
  },
  {
    id: 'kf-1',
    title: 'Handcrafted Crochet Kufi',
    price: 'Rs. 2,500',
    category: 'Accessories',
    collection: 'Kufi',
    image: 'https://picsum.photos/seed/mj-kf-1/800/1200',
    description: 'Traditional crochet namaz cap, designed for maximum breathability and a comfortable secure fit.',
    details: ['Soft Cotton Thread', 'Stretchable Design', 'Classic Pattern'],
    colors: [
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Off White', hex: '#faf9f6' }
    ],
    sizes: ['55', '56', '57', '58'],
    isBestSeller: true
  }
];
