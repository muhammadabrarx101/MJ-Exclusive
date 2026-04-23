import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { Shop } from './Shop';
import { NewArrivals } from './NewArrivals';
import { BestSellers } from './BestSellers';
import { ProductDetail } from './ProductDetail';
import { Checkout } from './Checkout';
import { Contact } from './Contact';
import { CartProvider } from './CartContext';

// Standard ScrollToTop to handle routing page positions
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Moving ScrollToTop logic into App or a wrapper
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-obsidian bg-obsidian text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
