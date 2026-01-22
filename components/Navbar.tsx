
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (view: AppView) => void;
  currentView: AppView;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <button onClick={() => onNavigate('home')} className="text-2xl font-serif tracking-tight font-bold group">
            LUXE<span className="text-stone-400 group-hover:text-amber-600 transition-colors">STONE</span>
          </button>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-stone-600">
            <button onClick={() => onNavigate('home')} className={`${currentView === 'home' ? 'text-stone-900 border-b-2 border-stone-900' : 'hover:text-stone-900'} pb-1 transition-all`}>Home</button>
            <button onClick={() => onNavigate('shop')} className={`${currentView === 'shop' ? 'text-stone-900 border-b-2 border-stone-900' : 'hover:text-stone-900'} pb-1 transition-all`}>Collections</button>
            <button onClick={() => onNavigate('about')} className={`${currentView === 'about' ? 'text-stone-900 border-b-2 border-stone-900' : 'hover:text-stone-900'} pb-1 transition-all`}>Inquiries</button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href="https://wa.me/9664772471" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.846 1.599 5.311l-.979 3.573 3.869-.982zm10.957-7.493c-.3-.149-1.783-.879-2.053-.976-.271-.098-.468-.148-.665.148-.197.297-.764.965-.936 1.162-.172.198-.344.223-.644.074-.3-.149-1.265-.466-2.41-1.487-.893-.795-1.495-1.777-1.671-2.075-.177-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.665-1.608-.912-2.202-.239-.575-.483-.497-.665-.506-.171-.007-.368-.008-.565-.008-.197 0-.517.074-.786.371-.269.297-1.028 1.006-1.028 2.455 0 1.449 1.053 2.846 1.202 3.044.148.198 2.071 3.163 5.018 4.44.7.304 1.247.485 1.671.62.703.224 1.343.192 1.85.116.564-.085 1.783-.728 2.033-1.432.25-.703.25-1.306.175-1.432-.075-.126-.275-.201-.575-.351z"/></svg>
            <span>WhatsApp</span>
          </a>
          <button 
            onClick={onCartClick}
            className="relative p-2 text-stone-700 hover:text-stone-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
