
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductListingProps {
  onAddToCart: (p: Product) => void;
  limit?: number;
}

export const ProductListing: React.FC<ProductListingProps> = ({ onAddToCart, limit }) => {
  const displayProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {displayProducts.map((product) => (
        <div key={product.id} className="group flex flex-col">
          <div className="relative overflow-hidden mb-6 aspect-square bg-stone-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
            <button 
              onClick={() => onAddToCart(product)}
              className="absolute bottom-6 left-6 right-6 py-3 bg-white text-stone-900 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-semibold shadow-xl"
            >
              Add to Projects
            </button>
          </div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">{product.category}</p>
              <h3 className="text-xl font-serif text-stone-800">{product.name}</h3>
            </div>
            <p className="text-lg font-medium text-stone-900">${product.price.toFixed(2)} /sqft</p>
          </div>
          <p className="text-sm text-stone-500 line-clamp-2 mb-4">{product.description}</p>
          <div className="flex space-x-4 text-xs font-semibold text-stone-400">
            <span>{product.finish}</span>
            <span>•</span>
            <span>{product.size}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
