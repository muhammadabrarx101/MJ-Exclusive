const arcticBlue = 'https://i.pinimg.com/736x/10/91/b1/1091b175daac8109638887d359bd4c8e.jpg';
const pearlWhite = 'https://i.pinimg.com/736x/18/6c/0d/186c0d952d5e265accac00b6dec46b5a.jpg';
const oliveGreen = 'https://i.pinimg.com/736x/bd/f9/b3/bdf9b372c5360887540e811df2eb2760.jpg';
const maroon = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800';
const skyBlue = 'https://i.pinimg.com/736x/79/1b/9a/791b9a432a2f829b65a7be2c4f7231f3.jpg';
const navyBlue = 'https://i.pinimg.com/736x/10/91/b1/1091b175daac8109638887d359bd4c8e.jpg';
const new1 = 'https://i.pinimg.com/736x/98/79/65/98796520d01aa36ef0b5b24958b29451.jpg';
const new2 = 'https://i.pinimg.com/736x/39/da/48/39da48e382282d676e80980eb3b63bf1.jpg';
const velvetSilk = 'https://www.ismailfarid.com/cdn/shop/products/srw157-_1__1.jpg?v=1669801235';
const waistcoat3 = 'https://i.pinimg.com/736x/87/22/8d/87228d7e55dcdc645d8f9e346122804d.jpg';
const waistcoat22 = 'https://i.pinimg.com/736x/1e/bb/c7/1ebbc75e8fee8f70f0c6ca598924f491.jpg';
const kufi1 = 'https://i.pinimg.com/736x/05/83/e4/0583e46e2020666e253abc1e73697173.jpg';

const arcticBlueUpdated = 'https://i.pinimg.com/736x/10/91/b1/1091b175daac8109638887d359bd4c8e.jpg';

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  category: string;
  collection: 'Shalwar Kameez' | 'Kurta Pajama' | 'Thobe' | 'Sherwani' | 'Waist Coat' | 'Kufi';
  image: string;
  description: string;
  details: string[];
  colors: { name: string, hex: string, image?: string }[];
  sizes: string[];
  outOfStockSizes?: string[];
  outOfStockColors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sk-1',
    title: 'Blended Classic Shalwar Kameez',
    price: 'Rs. 26,000',
    category: 'Classic Eastern',
    collection: 'Shalwar Kameez',
    image: arcticBlueUpdated,
    description: 'A masterpiece of understated elegance, crafted from premium blended cotton with a subtle sheen perfect for evening wear.',
    details: ['Premium Blended Cotton', 'Classic Fit', 'Embroidered Collar', 'Breathable Fabric'],
    colors: [
      { name: 'Arctic Blue', hex: '#b0c4de', image: arcticBlueUpdated },
      { name: 'Charcoal', hex: '#262626', image: 'https://i.pinimg.com/736x/d4/7c/e4/d47ce493bbfba32e51bed16a5aecc436.jpg' },
      { name: 'Midnight Blue', hex: '#191970', image: 'https://i.pinimg.com/736x/23/4d/ce/234dcebbeccede4e31a94ca593ac3e14.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true
  },
  {
    id: 'sk-2',
    title: 'Pure Egyptian Cotton Shalwar Kameez',
    price: 'Rs. 18,500',
    category: 'Daily Essentials',
    collection: 'Shalwar Kameez',
    image: pearlWhite,
    description: 'The quintessential set for Friday prayers or formal daytime events. Minimalist design for the modern gentleman.',
    details: ['100% Pure Egyptian Cotton', 'Standard Fit', 'Soft Texture', 'Durable Stitching'],
    colors: [
      { name: 'Pearl White', hex: '#ffffff', image: pearlWhite },
      { name: 'Cream', hex: '#fffdd0', image: 'https://i.pinimg.com/736x/a4/0d/65/a40d6522b00eae300732fb7e705f3c43.jpg' },
      { name: 'Off White', hex: '#faf9f6', image: 'https://i.pinimg.com/736x/ab/0a/93/ab0a93800e596ac9602571ed0a4e103c.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestSeller: true
  },
  {
    id: 'pk-1',
    title: 'Comfort Blend Kurta Pajama',
    price: 'Rs. 14,000',
    category: 'Everyday Comfort',
    collection: 'Kurta Pajama',
    image: oliveGreen,
    description: 'Functional and comfortable, designed for the man on the move. Features a relaxed pajama bottom for ease of wear.',
    details: ['Poly-Viscose Blend', 'Relaxed Fit', 'Side Pockets', 'Easy Iron'],
    colors: [
      { name: 'Olive Green', hex: '#556b2f', image: oliveGreen },
      { name: 'Slate Grey', hex: '#708090', image: 'https://i.pinimg.com/736x/2d/67/c7/2d67c7a26ca75af7339d1e1c885f9c54.jpg' },
      { name: 'Steel Blue', hex: '#4682b4', image: 'https://i.pinimg.com/736x/77/8e/74/778e74902d712236829155d0fa5949d9.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'th-1',
    title: 'Modern Linen Thobe',
    price: 'Rs. 12,500',
    category: 'Prayer Wear',
    collection: 'Thobe',
    image: skyBlue,
    description: 'Inspired by the Arabian dunes, this Thobe offers a modern silhouette with traditional comfort.',
    details: ['Lightweight Linen', 'Slim Tailoring', 'Hidden Placket', 'Ideal for Summer'],
    colors: [
      { name: 'Sky Blue', hex: '#87ceeb', image: skyBlue },
      { name: 'Pure White', hex: '#ffffff', image: 'https://i.pinimg.com/736x/e7/54/de/e754de6cd8a0f338dd1b540df2a18de4.jpg' },
      { name: 'Sandstone', hex: '#c2b280', image: 'https://i.pinimg.com/736x/3e/5a/2a/3e5a2adfa8b06966232619ea7dbed705.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'sw-1',
    title: 'Imperial Jamawar Sherwani',
    price: 'Rs. 112,000',
    category: 'The Wedding Edit',
    collection: 'Sherwani',
    image: new1,
    description: 'Exquisite hand-embroidery on premium Jamawar silk. A majestic choice for your most significant day.',
    details: ['Hand-worked Dabka', 'Jamawar Silk', 'Structured Shoulders', 'Bespoke Buttons'],
    colors: [
      { name: 'Jet Black', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestSeller: true
  },
  {
    id: 'sw-2',
    title: 'Royal Raw Silk Sherwani',
    price: 'Rs. 98,000',
    category: 'The Wedding Edit',
    collection: 'Sherwani',
    image: new2,
    description: 'A deep, rich tone paired with intricate embroidery. Classic, timeless, and authoritative.',
    details: ['Zardozi Work', 'Raw Silk Base', 'Tailored to Perfection'],
    colors: [
      { name: 'Royal Gold', hex: '#ffd700' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'wc-1',
    title: 'Textured Wool Waistcoat',
    price: 'Rs. 22,000',
    category: 'Formal Accents',
    collection: 'Waist Coat',
    image: waistcoat3,
    description: 'Versatile waistcoat that pairs perfectly with any light-coloured Shalwar Kameez.',
    details: ['Textured Wool Blend', 'Hand-finished Edges', 'Modern Silhouette'],
    colors: [
      { name: 'Navy Blue', hex: '#000080' }
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
    image: kufi1,
    description: 'Traditional crochet namaz cap, designed for maximum breathability and a comfortable secure fit.',
    details: ['Soft Cotton Thread', 'Stretchable Design', 'Classic Pattern'],
    colors: [
      { name: 'Pure White', hex: '#ffffff', image: kufi1 },
      { name: 'Jet Black', hex: '#000000', image: 'https://i.pinimg.com/736x/40/84/dc/4084dcd076aad37c6ac1ddf98df11667.jpg' },
      { name: 'Off White', hex: '#faf9f6', image: 'https://i.pinimg.com/736x/4b/36/e7/4b36e7a220cc7aa556d3e27e7b417468.jpg' }
    ],
    sizes: ['55', '56', '57', '58'],
    isBestSeller: true
  },
  {
    id: 'pk-2',
    title: 'Festive Silk Kurta Pajama',
    price: 'Rs. 15,300',
    originalPrice: 'Rs. 18,000',
    category: 'Occasion Wear',
    collection: 'Kurta Pajama',
    image: maroon,
    description: 'A luxurious silk-blend Kurta Pajama, perfect for festive gatherings.',
    details: ['Silk-Viscose Blend', 'Mandarin Collar', 'Piping Details', 'Luxury Fit'],
    colors: [
      { name: 'Maroon', hex: '#800000' },
      { name: 'Gold', hex: '#d4af37' },
      { name: 'Copper', hex: '#b87333' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    outOfStockSizes: ['S', 'XL'],
    outOfStockColors: ['Gold']
  },
  {
    id: 'th-2',
    title: 'Heritage Premium Thobe',
    price: 'Rs. 10,000',
    originalPrice: 'Rs. 12,500',
    category: 'Heritage Special',
    collection: 'Thobe',
    image: navyBlue,
    description: 'Traditional Moroccan silhouette with modern detailing. Breathable and authoritative.',
    details: ['Premium Cotton', 'Hooded Design', 'Side Slits', 'Hand-stitched Hems'],
    colors: [
      { name: 'Navy Blue', hex: '#000080', image: navyBlue },
      { name: 'Ruby', hex: '#9b111e', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800' },
      { name: 'Forest', hex: '#228b22', image: 'https://images.unsplash.com/photo-1617130639498-56734bddbb7a?auto=format&fit=crop&q=80&w=800' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    outOfStockSizes: ['XXL'],
    outOfStockColors: ['Ruby', 'Forest']
  },
  {
    id: 'sw-3',
    title: 'Imperial Velvet Sherwani',
    price: 'Rs. 145,000',
    category: 'The Wedding Edit',
    collection: 'Sherwani',
    image: velvetSilk,
    description: 'Hand-dyed velvet with intricate silver zardozi work. The ultimate statement for the modern groom.',
    details: ['Italian Velvet', 'Zardozi Handwork', 'Bespoke Buttons'],
    colors: [
      { name: 'Midnight', hex: '#191970' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true
  },
  {
    id: 'wc-2',
    title: 'Tailored Suede Waistcoat',
    price: 'Rs. 18,500',
    category: 'Formal Accents',
    collection: 'Waist Coat',
    image: waistcoat22,
    description: 'Supple suede waistcoat that adds a layer of sophistication to any traditional attire.',
    details: ['Genuine Faux Suede', 'Satin Lining', 'Tailored Cut'],
    colors: [
      { name: 'Tan', hex: '#d2b48c' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true
  }
];
