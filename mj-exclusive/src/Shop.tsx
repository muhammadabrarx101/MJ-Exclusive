import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from './data';
import { ProductCard } from './components/ProductCard';

export const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const categories = ['All', 'Shalwar Kameez', 'Pajama Kameez', 'Thobe', 'Sherwani', 'Waist Coat', 'Kufi'];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    const cat = params.get('cat');
    
    if (q !== null) {
      setSearchQuery(q);
      setActiveCategory('All');
    } else if (cat !== null) {
      // Find matching category (case-insensitive)
      const foundCat = categories.find(c => c.toLowerCase() === cat.toLowerCase());
      if (foundCat) {
        setActiveCategory(foundCat);
        setSearchQuery('');
      }
    }
  }, [location.search]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.collection === activeCategory;
    const matchesSearch = searchQuery 
      ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-40 pb-24 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-heading tracking-[0.3em] text-[10px] uppercase mb-4 block">THE ATELIER</span>
          <h1 className="font-display text-5xl lg:text-7xl text-white mb-6">Complete <span className="serif-italic text-brand-gold-muted">Collections</span></h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery(''); // Clear search when clicking a category
                }}
                className={`px-6 py-2 text-[10px] tracking-[0.3em] font-heading font-bold uppercase transition-all border ${activeCategory === cat && !searchQuery ? 'bg-brand-gold text-obsidian border-brand-gold' : 'text-white/40 border-white/10 hover:border-brand-gold hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {searchQuery && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <p className="text-sm font-heading tracking-widest text-white/60 uppercase">
                Showing results for: <span className="text-brand-gold">"{searchQuery}"</span>
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-[10px] tracking-widest font-bold text-brand-gold border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/40 font-heading tracking-widest text-sm uppercase">No products found for your selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
