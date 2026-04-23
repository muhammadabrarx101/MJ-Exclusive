import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';
import { PRODUCTS } from './data';
import heroBanner from './assets/mj-exclusive-main-banner.png';
// Fallback for missing assets
const arcticBlue = 'https://images.unsplash.com/photo-1617130639498-56734bddbb7a?auto=format&fit=crop&q=80&w=800';
const kufiColl = 'https://images.unsplash.com/photo-1590076296150-f823f6687093?auto=format&fit=crop&q=80&w=800';

const COLLECTIONS = [
  { name: 'SHALWAR KAMEEZ', id: 'Shalwar Kameez', image: 'https://i.pinimg.com/736x/9e/7f/84/9e7f84c58ebe20baddb0539b1b1a0cd5.jpg'  },
  { name: 'KURTA PAJAMA', id: 'Kurta Pajama', image: 'https://i.pinimg.com/736x/c2/91/52/c291523a89a387e8b548a4e91c74c00f.jpg' },
  { name: 'THOBE', id: 'Thobe', image: 'https://i.pinimg.com/736x/c9/e9/26/c9e9265e4286a9e6ec58e26829b46148.jpg' },
  { name: 'SHERWANI', id: 'Sherwani', image: 'https://i.pinimg.com/736x/ba/0a/f3/ba0af3772ccd497820e2ca0bc4157703.jpg' },
  { name: 'WAIST COAT', id: 'Waist Coat', image: 'https://i.pinimg.com/736x/d9/3e/48/d93e48dade02d0c9285d115e8f1c02df.jpg' },
  { name: 'KUFI', id: 'Kufi', image: 'https://lh3.googleusercontent.com/rd-gg/AEir0wK8wRFkF64u0vsTxz7ebPEXh02gcPNnZ8G_73uQQq5Mj1wRJdNYZEdgU-BPx-0iJ7JjgoYUizkqIxLmHwiaLb1r9N3y249G2WFLpxWt907se9aIoM4LqdRk0KEvI6Ge8mws74ngwPVHZTZJmwCDJdhipPsIEDyj7SiiAE_-I7pVcQAW86TvQkx4wPWKhTQ9x1QdVyaDIIqHMUDK6Scy_nzdae2HkGloIHbJZ4FIMArUpQ-f6r3h6LAuMogE2FU8ZBmW5fJLKdWyW1E-GLH9XpUveIUWUT4goNwqkIFDOJKRHD4Luei-IA6yS9lKqoR82rWRD4SRCGGFX9SEEb3aBF7mh1laWyjH5zXT2DnXc3If_kt0GG71dj6KwIYkmQbMdWpxOOnGXjDcuUgb-VGQt6iT-TWYGdeTi4sxfFgciSm7pZODrhaCmoriMo1YsBnFcMvadxvtxtSro0rsajeN0iyqg8kvNAawuo_6tW8njNrcHurlGx3n3bTs8KqQgQkKkNzHl8jzEdtJDEVKGfK82EJhUergJmiMQTnP6oAPnldRirmEr6YXlZRS_m0FcDJGh9vxjCI5eAZqTi3wPA2mHrt2NDaOdFcKkwE3VwBhuZnM8wHzMZ7VTXEVweQiM4fGrdshODPDypCWnQ0uXiiizB2CM4REvEsxE4hww_cCKXvrnErBg75dOr6QVZ7zrkIBC7cv1rOrZi1ivFGxth57GhE_rgtwQLM6HyrQYA7aS8QpXoSNFaudhP1Bi5XoX_FY4UD-HCYOOImNxWOWA-6Ow9ZNh1hKW1GU2ZbhbZlfzNJUx9kf13SkcNXXc7cmfiV59lGUiPE7iV_TXb2e2IrlwnL_JMimrn4Y4xs24cnanF4V_KbaKBMknNY8xyotD9vu2lq5CwgGauGEk7g1Vb4EBSDD702J4L7lTqnLDTT0DZe0Lc3DB13d2HIU8lXoca00Y9qkVuugY6zsvC2CoC0JvDtFdgojTmnFukms3F60L-S-7WGfQitPDzY9JR_5wJzOJIHWw8ec9NiytdZy5aI0ZYNpJ36NQQbU7N4KLlo7S6Y6pnzf4hsD3whbaS99BNVcnA3sFManhv2FdPnMR7gynk8WZDiL5U-capTEmRlGbmP-pyGmLbL9_NkwZRivO8gJw8SNxJY1xieNF-gaNQ3JhzDExzSz2UFq2cGN-9410FX7V9Z7Z9--bsNaS1VeNFw7zguZ8WTBNHa82jaLETJmf1I8bdamjtdKlTrdO2bnSKTvMe0Y6lWegscWdUh-YAvRnsSDAxVfY_KTxHC47mMXUlsI2_BvE-_Xvx_vYeaQ4RWNQkj5cXk01TmW13s6eO6EsL99Kb-jklyk8VzVZ59Rzhh10EKD2qZtx_e0muccVPIbGX2JLsaIDQ=s1600' },
];

const REVIEWS = [
  {
    id: 1,
    name: "Ahmed Khan",
    city: "Lahore",
    text: "The quality of the silk is exceptional. I ordered a Shalwar Kameez for my wedding events and it was exactly what I envisioned. Premium quality!",
    rating: 5
  },
  {
    id: 2,
    name: "Zainab Malik",
    city: "Karachi",
    text: "Fast delivery and the packaging was very elegant. The embroidery detail on the waistcoat is stunning. Truly an MJ Exclusive experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Omar Farooq",
    city: "Islamabad",
    text: "Best customer service! They helped me choose the right size for my Kufi. The fit is perfect. Highly recommend for luxury heritage wear.",
    rating: 5
  },
  {
    id: 4,
    name: "Hassan Raza",
    city: "Faisalabad",
    text: "The fabric breatheability is amazing. Perfect for the weather here. MJ Exclusive is now my go-to for traditional wear.",
    rating: 5
  }
];

export const Home = () => {
  const collectionsRef = useRef<HTMLElement>(null);
  const newArrivals = PRODUCTS.filter(p => p.isNew);
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-obsidian">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-48 lg:pt-40 bg-obsidian">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <span className="text-brand-gold font-heading tracking-[0.4em] text-[10px] uppercase mb-8 block mt-4 lg:mt-0">EID COLLECTION • 2026</span>
            <h2 className="font-display text-[2.5rem] md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-white uppercase tracking-tighter">
              <span className="block mb-2">Rooted in</span>
              <span className="serif-italic text-brand-gold-muted">Tradition.</span><br />
              <span className="block mt-2 font-display">Refined for Today.</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">
              Experience the pinnacle of South Asian craftsmanship. From the Darbar to the daily prayer, carry your heritage with unapologetic refinement.
            </p>
            <div className="hidden sm:flex flex-col sm:flex-row gap-6">
              <Link to="/shop" className="px-12 py-5 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                SHOP NOW <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full max-w-2xl mx-auto overflow-hidden group">
              <div className="absolute inset-0 border border-brand-gold/20 translate-x-4 translate-y-4 z-0" />
              <img 
                src={heroBanner} 
                alt="MJ Exclusive Heritage"
                className="w-full h-auto max-h-[80vh] object-contain relative z-10 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-20 opacity-40 pointer-events-none" />
            </div>
            
            {/* Mobile Only Button */}
            <div className="mt-12 flex sm:hidden">
              <Link to="/shop" className="w-full px-12 py-5 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 group">
                SHOP NOW <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal-dark py-12 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-brand-gold text-4xl font-display">1,000+</h4>
            <p className="text-[10px] tracking-[0.2em] font-heading font-medium text-white/40 uppercase">Orders Delivered</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-brand-gold text-4xl font-display">Pakistan</h4>
            <p className="text-[10px] tracking-[0.2em] font-heading font-medium text-white/40 uppercase">Nationwide Delivery</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-brand-gold text-4xl font-display">Handcrafted</h4>
            <p className="text-[10px] tracking-[0.2em] font-heading font-medium text-white/40 uppercase">Lahore Atelier</p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section ref={collectionsRef} className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold font-heading tracking-[0.3em] text-[10px] uppercase mb-4 block">DEPARTMENTS</span>
              <h2 className="font-display text-4xl lg:text-6xl text-white">Explore the <span className="serif-italic text-brand-gold-muted text-5xl lg:text-7xl">Collections</span></h2>
            </div>
            <Link to="/shop" className="flex items-center gap-2 group text-sm font-heading tracking-widest text-brand-gold">
              VIEW ALL <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {COLLECTIONS.map(collection => (
              <Link to={`/shop?cat=${encodeURIComponent(collection.id)}`} key={collection.name} className="group relative aspect-[3/4] overflow-hidden bg-charcoal-dark border border-white/5">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pt-20">
                  <h3 className="font-display text-2xl text-white group-hover:text-brand-gold transition-colors tracking-widest uppercase">{collection.name}</h3>
                  <div className="mt-4 w-12 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-charcoal-dark overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <span className="text-brand-gold font-heading tracking-[0.3em] text-[10px] uppercase mb-4 block">FRESH DROPS</span>
              <h2 className="font-display text-4xl lg:text-5xl text-white">New <span className="serif-italic text-brand-gold-muted text-5xl lg:text-6xl">Arrivals</span></h2>
            </div>
            <Link to="/new-arrivals" className="text-[10px] tracking-widest font-bold text-brand-gold border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase">
              View All New Arrivals
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
            <div className="mx-auto md:mx-0">
              <span className="text-brand-gold font-heading tracking-[0.3em] text-[10px] uppercase mb-4 block">MOST WANTED</span>
              <h2 className="font-display text-4xl lg:text-5xl text-white">Our <span className="serif-italic text-brand-gold-muted text-5xl lg:text-6xl">Best Sellers</span></h2>
            </div>
            <Link to="/best-sellers" className="mx-auto md:mx-0 text-[10px] tracking-widest font-bold text-brand-gold border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase">
              View All Best Sellers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Shipping */}
      <section className="py-24 bg-obsidian border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl mb-4 text-white">Nationwide Heritage Delivery</h2>
            <p className="text-white/40 font-light tracking-wide italic">Direct from our Lahore Atelier to your doorstep, anywhere in Pakistan.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-charcoal-dark p-12 lg:p-20 border border-white/5 text-center">
            <span className="text-5xl mb-8 block">🇵🇰</span>
            <h3 className="font-display text-3xl lg:text-4xl mb-6 text-white uppercase tracking-wider">PAKISTAN NATIONWIDE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12">
              <ul className="space-y-4 text-white/50 text-sm font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Cash On Delivery Available</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Free Shipping Above Rs. 20,000/-</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> TCS / Leopards Delivery (2-4 Days)</li>
              </ul>
              <ul className="space-y-4 text-white/50 text-sm font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Dedicated WhatsApp Support</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Easy Exchange Policy</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Verified Handcrafted Quality</li>
              </ul>
            </div>
            <Link to="/shop" className="mt-12 px-12 py-5 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform inline-block">
              Shop Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Feedbacks */}
      <section className="py-24 bg-charcoal-dark overflow-hidden min-h-[600px] flex flex-col justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-heading tracking-[0.3em] text-[10px] uppercase mb-4 block">CLIENT VOICES</span>
            <h2 className="font-display text-4xl lg:text-5xl text-white">Customer <span className="serif-italic text-brand-gold-muted text-5xl lg:text-6xl">Feedback</span></h2>
          </div>

          <div className="max-w-4xl mx-auto relative h-[300px]">
             <AnimatePresence mode="wait">
               <motion.div 
                 key={REVIEWS[activeReview].id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.8 }}
                 className="absolute inset-0 flex flex-col items-center text-center"
               >
                 <div className="flex gap-1 mb-8">
                   {[...Array(REVIEWS[activeReview].rating)].map((_, i) => (
                     <span key={i} className="text-brand-gold text-2xl">★</span>
                   ))}
                 </div>
                 <p className="text-white/80 italic font-light leading-relaxed mb-10 text-xl lg:text-2xl max-w-2xl">
                   "{REVIEWS[activeReview].text}"
                 </p>
                 <div className="pt-8 border-t border-brand-gold/20 flex flex-col items-center">
                   <h4 className="text-white font-heading font-bold text-sm tracking-[0.2em] uppercase">{REVIEWS[activeReview].name}</h4>
                   <p className="text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold mt-2">{REVIEWS[activeReview].city}, Pakistan</p>
                 </div>
               </motion.div>
             </AnimatePresence>
             
             {/* Progress Indicator */}
             <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4">
                {REVIEWS.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${activeReview === idx ? 'bg-brand-gold w-8' : 'bg-white/20'}`}
                  />
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
