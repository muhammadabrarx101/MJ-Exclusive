import React from 'react';
import { ShieldCheck, Truck, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 h-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex flex-col mb-8">
              <span className="font-display text-3xl text-brand-gold tracking-widest">MJ</span>
              <span className="text-[10px] text-brand-gold-muted tracking-[0.5em] font-bold">EXCLUSIVE</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              Providing premium traditional menswear for the modern gentleman. Handcrafted in Lahore, delivered nationwide across Pakistan. Bridging cultural heritage with contemporary style.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'YT', 'WA'].map(s => (
                <button key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:border-brand-gold hover:text-brand-gold transition-colors text-white">{s}</button>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-heading font-bold text-xs tracking-widest mb-8 uppercase">Quick Links</h5>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop All</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/checkout" className="hover:text-brand-gold transition-colors">Checkout</Link></li>
              <li><button className="hover:text-brand-gold transition-colors text-left w-full">Shipping Policy</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-heading font-bold text-xs tracking-widest mb-8 uppercase">Collections</h5>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Sherwanis</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shalwar Kameez</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Thobes</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Waistcoats</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-heading font-bold text-xs tracking-widest mb-8 uppercase">Newsletter</h5>
            <p className="text-white/40 text-sm font-light mb-6 leading-relaxed">Join for early access to the Eid 2026 Collection.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-obsidian border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.2em] font-medium uppercase text-center md:text-left">
            &copy; 2026 MJ EXCLUSIVE CLOTHING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 opacity-50 text-white">
            <ShieldCheck size={20} />
            <Truck size={20} />
            <Globe size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
