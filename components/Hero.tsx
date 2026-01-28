import React from 'react';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
          alt="Venkatesh Marmo Heritage Exclusive Slabs" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block animate-fade-in text-amber-500">The 1984 Legacy — Venkatesh Marmo Heritage</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">Venkatesh Marmo: Timeless Artistry</h1>
          <p className="text-lg md:text-xl font-light text-stone-200 mb-10 leading-relaxed">
            Curated by master masons and directly imported from Italy's legendary quarries. Experience the "Heritage Grade" difference with Venkatesh Marmo.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onShopClick}
              className="px-10 py-4 bg-white text-stone-900 font-bold hover:bg-stone-100 transition-all transform hover:scale-105"
            >
              Explore Heritage Collection
            </button>
            <a 
              href="mailto:rajputdhavaljs@gmail.com?subject=Venkatesh Heritage Inquiry"
              className="px-10 py-4 border border-white/50 text-white backdrop-blur-sm hover:bg-white/10 transition-all text-center"
            >
              Direct Project Quote
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
      </div>
    </section>
  );
};