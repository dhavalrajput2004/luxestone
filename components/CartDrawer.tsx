
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  total: number;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, onClose, cart, onRemove, onUpdateQty, total, onCheckout 
}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-serif">Your Collection</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-8 pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-400">Your collection is empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-24 h-24 bg-stone-100 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-serif text-lg">{item.name}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-stone-400 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                    <p className="text-sm text-stone-500 mb-3">${item.price.toFixed(2)} /sqft</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-stone-200">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="px-2 py-1 hover:bg-stone-50 text-stone-400">-</button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="px-2 py-1 hover:bg-stone-50 text-stone-400">+</button>
                      </div>
                      <span className="text-sm font-medium">sqft</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pt-8 border-t border-stone-200">
            <div className="flex justify-between mb-4">
              <span className="text-stone-500">Subtotal</span>
              <span className="text-xl font-serif">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <p className="text-xs text-stone-400 mb-6 uppercase tracking-widest">Taxes and shipping calculated at checkout</p>
            <button 
              disabled={cart.length === 0}
              onClick={onCheckout}
              className="w-full py-4 bg-stone-900 text-white font-semibold disabled:bg-stone-200 disabled:cursor-not-allowed hover:bg-stone-800 transition-colors"
            >
              Begin Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
