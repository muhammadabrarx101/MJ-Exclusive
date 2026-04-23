import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from './data';
import { useCart } from './CartContext';
import { ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (product) {
      // Find first available color
      const availableColor = product.colors.find(c => !product.outOfStockColors?.includes(c.name)) || product.colors[0];
      setSelectedColor(availableColor.name);

      // Find first available size
      const availableSize = product.sizes.find(s => !product.outOfStockSizes?.includes(s)) || product.sizes[0];
      setSelectedSize(availableSize);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 bg-obsidian text-center">
        <h1 className="text-white text-3xl font-display">Product Not Found</h1>
        <Link to="/shop" className="text-brand-gold mt-4 block">Back to Shop</Link>
      </div>
    );
  }

  const [isAdded, setIsAdded] = useState(false);
  const currentImage = product.colors.find(c => c.name === selectedColor)?.image || product.image;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setError('Please select both color and size.');
      return;
    }
    addToCart(product, selectedColor, selectedSize);
    setError('');
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-40 pb-24 bg-obsidian min-h-screen text-white">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors mb-12 text-xs tracking-widest uppercase font-heading">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              key={selectedColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[3/4] bg-charcoal-dark overflow-hidden border border-white/5"
            >
              <img 
                src={currentImage} 
                alt={`${product.title} in ${selectedColor}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-8">
            <span className="text-brand-gold font-heading tracking-[0.4em] text-[10px] uppercase mb-4 block">{product.category}</span>
            <h1 className="font-display text-4xl lg:text-6xl mb-6 leading-tight">{product.title}</h1>
            
            <div className="flex items-baseline gap-6 mb-8">
              <span className="text-3xl font-heading font-light text-white">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl font-heading font-light text-white/30 line-through">{product.originalPrice}</span>
              )}
            </div>

            {/* Variants */}
            <div className="space-y-8 mb-8 border-t border-white/10 pt-8">
              {/* Color Selector */}
              <div>
                <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block mb-4">Color: {selectedColor}</label>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map(color => {
                    const isOutOfStock = product.outOfStockColors?.includes(color.name);
                    return (
                      <button
                        key={color.name}
                        onClick={() => !isOutOfStock && setSelectedColor(color.name)}
                        title={isOutOfStock ? `${color.name} (Out of Stock)` : color.name}
                        className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 relative ${selectedColor === color.name ? 'border-brand-gold' : 'border-transparent'} ${isOutOfStock ? 'opacity-30 cursor-not-allowed grayscale' : ''}`}
                      >
                        <div 
                          className="w-full h-full rounded-full border border-white/10" 
                          style={{ backgroundColor: color.hex }}
                        />
                        {isOutOfStock && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[1px] h-full bg-white/60 rotate-45" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block mb-4">Size: {selectedSize}</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => {
                    const isOutOfStock = product.outOfStockSizes?.includes(size);
                    return (
                      <button
                        key={size}
                        disabled={isOutOfStock}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-12 h-12 px-3 flex flex-col items-center justify-center text-xs border transition-all ${selectedSize === size ? 'border-brand-gold text-brand-gold bg-brand-gold/5' : 'border-white/10 text-white/60 hover:border-white/30'} ${isOutOfStock ? 'opacity-20 cursor-not-allowed bg-white/5' : ''}`}
                      >
                        <span className={isOutOfStock ? 'line-through' : ''}>{size}</span>
                        {isOutOfStock && <span className="text-[6px] tracking-widest uppercase mt-0.5 opacity-60">Out</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold mb-4">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 px-10 py-5 font-heading font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-4 ${isAdded ? 'bg-green-600 text-white' : 'gold-gradient text-obsidian hover:scale-105'}`}
              >
                {isAdded ? (
                  <>
                    <Check size={16} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>
            </div>

            <div className="border-t border-white/10 py-8">
              <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
                {product.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/40 text-sm">
                    <Check size={14} className="text-brand-gold" /> {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-charcoal-dark border border-white/5 rounded-sm">
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-brand-gold">Heritage Guarantee</h4>
              <p className="text-xs text-white/40 leading-relaxed">
                Every piece from MJ Exclusive is crafted by master artisans using traditional techniques found in the heart of Pakistan. We ensure ethically sourced fabrics and luxury-standard finishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
