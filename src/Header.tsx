import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ShoppingBag, Search, Globe, User, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const NavItem = ({ label, to, hasBadge = false }: { label: string, to: string, hasBadge?: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={`px-4 py-2 text-[10px] font-heading font-medium tracking-wider transition-colors relative group flex flex-col items-center whitespace-nowrap ${isActive ? 'text-brand-gold' : 'text-obsidian/70 hover:text-brand-gold'}`}>
      <span className="relative">
        {label}
        {hasBadge && (
          <span className="absolute -top-3 -right-4 px-1 py-0.5 bg-brand-gold text-[6px] text-white font-bold rounded-[1px] leading-none">NEW</span>
        )}
      </span>
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="header-nav-underline"
            className="absolute bottom-0 h-[1px] bg-brand-gold"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            exit={{ width: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const threshold = 100;

    if (latest < threshold) {
      setHeaderVisible(true);
      setIsPastThreshold(false);
    } else {
      setIsPastThreshold(true);
      if (latest > previous && latest > threshold + 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    }
  });

  return (
    <>
      <motion.header 
        animate={{ y: headerVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isPastThreshold ? 'glass-nav py-0' : 'bg-white py-2 border-b border-black/5'}`}
      >
        <div className="h-10 bg-white border-b border-black/5 overflow-hidden flex items-center relative z-50">
          <div className="animate-ticker whitespace-nowrap flex gap-12 items-center text-[10px] uppercase tracking-[0.25em] font-medium text-brand-gold">
            <span>CUSTOMER SUPPORT ( MON-FRI 10AM - 6PM )</span>
            <span>FREE SHIPPING ON ORDERS ABOVE Rs 20,000/-</span>
            <span>SUMMER COLLECTION NOW UPTO 30% OFF</span>
            <span>1,000+ ORDERS FULFILLED NATIONWIDE PK</span>
            <span>CUSTOMER SUPPORT ( MON-FRI 10AM - 6PM )</span>
            <span>FREE SHIPPING ON ORDERS ABOVE Rs 20,000/-</span>
            <span>SUMMER COLLECTION NOW UPTO 30% OFF</span>
            <span>1,000+ ORDERS FULFILLED NATIONWIDE PK</span>
          </div>
        </div>

        <div className="w-full transition-all duration-500 h-20">
          <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex-1 hidden lg:flex items-center">
              <NavItem label="HOME" to="/" />
              <NavItem label="NEW ARRIVALS" to="/new-arrivals" hasBadge />
              <NavItem label="BEST SELLERS" to="/best-sellers" />
              <NavItem label="SHOP" to="/shop" />
              <NavItem label="CONTACT US" to="/contact" />
            </div>

            <div className="flex-1 flex justify-center">
              <Link to="/" className="flex flex-col items-center">
                <img 
                  src="/logo.png" 
                  alt="MJ Exclusive Logo" 
                  className="h-12 w-auto transition-all"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden flex flex-col items-center">
                  <h1 className="font-display text-2xl lg:text-3xl tracking-[0.3em] font-bold text-brand-gold leading-none">MJ</h1>
                  <span className="text-[8px] tracking-[0.5em] text-brand-gold-muted font-bold -mt-1 uppercase">EXCLUSIVE</span>
                </div>
              </Link>
            </div>

            <div className="flex-1 flex items-center justify-end gap-6 text-obsidian/80">
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      type="text"
                      placeholder="Search MJ Exclusive..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      className="bg-transparent border-b border-brand-gold/30 text-xs py-1 px-2 focus:outline-none focus:border-brand-gold tracking-widest uppercase transition-all"
                      autoFocus
                    />
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hover:text-brand-gold transition-colors hidden sm:block ml-2"
                >
                  {isSearchOpen ? <X size={18} /> : <Search size={20} />}
                </button>
              </div>
              
              <Link to="/checkout" className="hover:text-brand-gold transition-colors relative">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold text-white text-[8px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
              <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-[100] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span className="font-display text-2xl text-brand-gold tracking-widest">MJ</span>
                <span className="text-[8px] text-brand-gold-muted tracking-[0.5em]">EXCLUSIVE</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="text-white" />
              </button>
            </div>
            <div className="space-y-6">
              {[
                { label: 'HOME', to: '/' },
                { label: 'NEW ARRIVALS', to: '/new-arrivals' },
                { label: 'BEST SELLERS', to: '/best-sellers' },
                { label: 'SHOP', to: '/shop' },
                { label: 'CHECKOUT', to: '/checkout' },
                { label: 'CONTACT US', to: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display tracking-wide block w-full text-left border-b border-white/5 pb-4 text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
