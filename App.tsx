
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductListing } from './components/ProductListing';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutFlow } from './components/CheckoutFlow';
import { AIConsultant } from './components/AIConsultant';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { Product, CartItem, AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={setView}
        currentView={view}
      />

      <main className="flex-grow pt-20">
        {view === 'home' && (
          <>
            <Hero onShopClick={() => setView('shop')} />
            <div id="collections" className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif text-center mb-16">Curated Collections</h2>
                <ProductListing onAddToCart={addToCart} limit={3} />
                <div className="text-center mt-12">
                    <button 
                        onClick={() => setView('shop')}
                        className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                    >
                        View All Collections
                    </button>
                </div>
            </div>
            <AIConsultant />
          </>
        )}

        {view === 'shop' && (
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <h1 className="text-5xl font-serif mb-4">The Marble Gallery</h1>
            <p className="text-stone-500 mb-12 max-w-2xl">Browse our exquisite selection of Italian and international stones, hand-picked for architectural excellence.</p>
            <ProductListing onAddToCart={addToCart} />
          </div>
        )}

        {view === 'about' && <AboutPage />}

        {view === 'checkout' && (
          <CheckoutFlow 
            cart={cart} 
            total={cartTotal} 
            onSuccess={() => setView('success')} 
            onBack={() => setView('shop')}
          />
        )}

        {view === 'success' && (
            <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 className="text-4xl font-serif mb-4">Order Confirmed</h1>
                <p className="text-stone-600 mb-8 max-w-md">Thank you for choosing LuxeStone. Your premium selection is being prepared for transit from our Italian warehouse.</p>
                <button 
                    onClick={() => {
                        setCart([]);
                        setView('home');
                    }}
                    className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-800"
                >
                    Back to Gallery
                </button>
            </div>
        )}
      </main>

      <Footer onNavigate={setView} />

      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/9664772471" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        title="WhatsApp Us"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.846 1.599 5.311l-.979 3.573 3.869-.982zm10.957-7.493c-.3-.149-1.783-.879-2.053-.976-.271-.098-.468-.148-.665.148-.197.297-.764.965-.936 1.162-.172.198-.344.223-.644.074-.3-.149-1.265-.466-2.41-1.487-.893-.795-1.495-1.777-1.671-2.075-.177-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.665-1.608-.912-2.202-.239-.575-.483-.497-.665-.506-.171-.007-.368-.008-.565-.008-.197 0-.517.074-.786.371-.269.297-1.028 1.006-1.028 2.455 0 1.449 1.053 2.846 1.202 3.044.148.198 2.071 3.163 5.018 4.44.7.304 1.247.485 1.671.62.703.224 1.343.192 1.85.116.564-.085 1.783-.728 2.033-1.432.25-.703.25-1.306.175-1.432-.075-.126-.275-.201-.575-.351z"/></svg>
        <span className="absolute right-full mr-4 bg-stone-900 text-white text-xs py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded">Chat with Specialist</span>
      </a>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        total={cartTotal}
        onCheckout={() => {
            setIsCartOpen(false);
            setView('checkout');
        }}
      />
    </div>
  );
};

export default App;
