import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../data';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <Link to={`/product/${product.id}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-dark mb-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button className="w-full py-3 bg-brand-gold text-obsidian font-heading font-bold text-xs tracking-tighter uppercase">View Details</button>
        </div>
      </div>
      <p className="text-[10px] text-brand-gold-muted font-heading tracking-[0.2em] mb-1 uppercase">{product.category}</p>
      <h3 className="font-display text-xl mb-1 group-hover:text-brand-gold transition-colors text-white">{product.title}</h3>
      <p className="font-heading text-white/50 text-sm font-light">{product.price}</p>
    </Link>
  </motion.div>
);
