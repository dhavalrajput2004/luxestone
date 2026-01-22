
import React, { useState } from 'react';
import { geminiService } from '../services/gemini';

export const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const advice = await geminiService.getDesignAdvice(query);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <section className="bg-stone-900 text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-amber-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Personal Concierge</span>
          <h2 className="text-5xl font-serif mb-8 leading-tight">Consult with our AI Stone Specialist</h2>
          <p className="text-stone-400 text-lg mb-10 leading-relaxed">
            Not sure which marble suits your light exposure or interior style? Describe your room, and our AI design consultant will provide tailored recommendations.
          </p>
          
          <form onSubmit={handleSubmit} className="relative mb-8">
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., I'm designing a north-facing kitchen with dark walnut cabinetry. Which marble would provide the best contrast?"
              className="w-full bg-stone-800 border border-stone-700 p-6 pt-4 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors h-32 resize-none"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute bottom-4 right-4 px-6 py-2 bg-white text-stone-900 font-bold hover:bg-stone-100 disabled:opacity-50"
            >
              {loading ? 'Consulting...' : 'Ask Consultant'}
            </button>
          </form>

          {response && (
            <div className="bg-stone-800 border-l-4 border-amber-500 p-8 animate-fade-in">
              <p className="text-stone-300 italic leading-relaxed whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80" 
               alt="Modern marble application" 
               className="w-full h-full object-cover opacity-60"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-stone-100 p-8 hidden md:block">
            <p className="text-stone-900 text-sm font-serif italic mb-4">"Stone is the language of nature, and we help you translate it into your home."</p>
            <div className="h-0.5 w-12 bg-amber-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
