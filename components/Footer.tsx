
import React from 'react';
import { AppView } from '../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="about" className="bg-white border-t border-stone-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif font-bold mb-6">LUXESTONE</h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-sm">
            Pioneering the extraction and distribution of premium Italian marble since 1984. Excellence in every vein.
          </p>
          <div className="space-y-3">
            <p className="flex items-center space-x-3 text-stone-800 font-medium">
              <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:rajputdhavaljs@gmail.com" className="hover:text-amber-600 transition-colors">rajputdhavaljs@gmail.com</a>
            </p>
            <p className="flex items-center space-x-3 text-stone-800 font-medium">
               <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.846 1.599 5.311l-.979 3.573 3.869-.982zm10.957-7.493c-.3-.149-1.783-.879-2.053-.976-.271-.098-.468-.148-.665.148-.197.297-.764.965-.936 1.162-.172.198-.344.223-.644.074-.3-.149-1.265-.466-2.41-1.487-.893-.795-1.495-1.777-1.671-2.075-.177-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.665-1.608-.912-2.202-.239-.575-.483-.497-.665-.506-.171-.007-.368-.008-.565-.008-.197 0-.517.074-.786.371-.269.297-1.028 1.006-1.028 2.455 0 1.449 1.053 2.846 1.202 3.044.148.198 2.071 3.163 5.018 4.44.7.304 1.247.485 1.671.62.703.224 1.343.192 1.85.116.564-.085 1.783-.728 2.033-1.432.25-.703.25-1.306.175-1.432-.075-.126-.275-.201-.575-.351z"/></svg>
               <a href="https://wa.me/9664772471" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">+966 4772471</a>
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-6">Collections</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><button onClick={() => onNavigate('shop')} className="hover:text-stone-900 transition-colors">Carrara Gallery</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-stone-900 transition-colors">Calacatta Series</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-stone-900 transition-colors">Nero Marquina</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-stone-900 transition-colors">Travertine Collection</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><button onClick={() => onNavigate('about')} className="hover:text-stone-900 transition-colors text-left">Direct Inquiries</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-stone-900 transition-colors text-left">About Our Heritage</button></li>
            <li><a href="https://wa.me/9664772471" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Chat with Specialist</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-6">Direct Connect</h4>
          <p className="text-sm text-stone-500 mb-6">Contact our lead stone consultant for bespoke orders and wholesale pricing.</p>
          <a 
            href="https://wa.me/9664772471" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors"
          >
            WhatsApp Specialist
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-400">
        <p>© 2024 LuxeStone Marble & Co. Managed by Dhaval Rajput.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button onClick={() => onNavigate('about')} className="hover:text-stone-900 transition-colors">About Us</button>
          <a href="mailto:rajputdhavaljs@gmail.com" className="hover:text-stone-900 transition-colors">Email Support</a>
        </div>
      </div>
    </footer>
  );
};
