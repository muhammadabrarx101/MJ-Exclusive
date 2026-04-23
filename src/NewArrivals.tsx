import React from 'react';
import { PRODUCTS } from './data';
import { ProductCard } from './components/ProductCard';
import { motion } from 'motion/react';

export const NewArrivals = () => {
  const newArrivals = PRODUCTS.filter(p => p.isNew);

  return (
    <div className="pt-48 pb-24 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold font-heading tracking-[0.4em] text-[10px] uppercase mb-4 block">LATEST RELEASE</span>
          <h1 className="font-display text-5xl lg:text-7xl text-white mb-6 uppercase tracking-tighter">
            New <span className="serif-italic text-brand-gold-muted px-2">Arrivals</span>
          </h1>
          <p className="text-white/60 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            The Darbar series - Explore our newest silhouettes, crafted for the season of tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
