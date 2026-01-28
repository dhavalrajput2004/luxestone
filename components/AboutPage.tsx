import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" 
            alt="The Venkatesh Heritage Quarry" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.4em] text-amber-500 font-bold text-sm mb-6 block">The Legacy Since 1984</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Venkatesh Marmo Heritage</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Venkatesh Marmo Heritage stands as the definitive bridge between the legendary quarries of Carrara and the world's most ambitious architectural visions.
          </p>
        </div>
      </section>

      {/* Story Details */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-900">Crafting Luxury with Venkatesh</h2>
            <div className="h-1 w-20 bg-amber-800"></div>
            <p className="text-stone-600 leading-relaxed text-lg">
              Every slab in our inventory is hand-selected by master stonemasons under the direct supervision of Dhaval Rajput. We don't just sell stone; we curate natural art that has been millions of years in the making.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              Choosing Venkatesh Marmo Heritage means choosing a legacy of four decades. Our family-owned operation maintains direct ownership stakes in key quarries, ensuring our clients receive the "Heritage Grade"—a standard that exceeds industry expectations.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-stone-900 mb-2">40+</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Years of Heritage</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-stone-900 mb-2">1,500+</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Master Projects</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=1000&q=80" 
              alt="Dhaval Rajput Master Selection Process" 
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-stone-100 p-8 hidden lg:block border border-stone-200">
              <p className="font-serif italic text-stone-800 text-lg">"Excellence is a habit carved in Venkatesh stone."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Inquiries Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-6">Direct Heritage Inquiries</h2>
          <p className="text-stone-500 mb-12">Connect directly with the Venkatesh Heritage team for wholesale pricing or private viewings of our latest shipments from Italy.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a 
              href="mailto:rajputdhavaljs@gmail.com" 
              className="group p-10 bg-white border border-stone-200 hover:border-amber-800 transition-all flex flex-col items-center shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Heritage Support</h3>
              <p className="text-amber-800 font-bold">rajputdhavaljs@gmail.com</p>
              <p className="text-[10px] text-stone-400 mt-4 uppercase tracking-[0.2em] font-bold">Venkatesh Concierge Response: 24h</p>
            </a>

            <a 
              href="https://wa.me/9664772471" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-10 bg-white border border-stone-200 hover:border-green-600 transition-all flex flex-col items-center shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.846 1.599 5.311l-.979 3.573 3.869-.982zm10.957-7.493c-.3-.149-1.783-.879-2.053-.976-.271-.098-.468-.148-.665.148-.197.297-.764.965-.936 1.162-.172.198-.344.223-.644.074-.3-.149-1.265-.466-2.41-1.487-.893-.795-1.495-1.777-1.671-2.075-.177-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.665-1.608-.912-2.202-.239-.575-.483-.497-.665-.506-.171-.007-.368-.008-.565-.008-.197 0-.517.074-.786.371-.269.297-1.028 1.006-1.028 2.455 0 1.449 1.053 2.846 1.202 3.044.148.198 2.071 3.163 5.018 4.44.7.304 1.247.485 1.671.62.703.224 1.343.192 1.85.116.564-.085 1.783-.728 2.033-1.432.25-.703.25-1.306.175-1.432-.075-.126-.275-.201-.575-.351z"/></svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Artisan WhatsApp</h3>
              <p className="text-green-700 font-bold">+966 4772471</p>
              <p className="text-[10px] text-stone-400 mt-4 uppercase tracking-[0.2em] font-bold">Real-time Stone Photos</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};