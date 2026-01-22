
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutFlowProps {
  cart: CartItem[];
  total: number;
  onSuccess: () => void;
  onBack: () => void;
}

export const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ cart, total, onSuccess, onBack }) => {
  const [step, setStep] = useState(1);
  const shipping = 250;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <div className="flex items-center space-x-4 mb-10 overflow-x-auto pb-4">
          <div className={`flex items-center space-x-2 shrink-0 ${step >= 1 ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step >= 1 ? 'border-stone-900' : 'border-stone-200'}`}>1</span>
            <span>Shipping</span>
          </div>
          <div className="h-0.5 w-8 bg-stone-200"></div>
          <div className={`flex items-center space-x-2 shrink-0 ${step >= 2 ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step >= 2 ? 'border-stone-900' : 'border-stone-200'}`}>2</span>
            <span>Payment</span>
          </div>
          <div className="h-0.5 w-8 bg-stone-200"></div>
          <div className={`flex items-center space-x-2 shrink-0 ${step >= 3 ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step >= 3 ? 'border-stone-900' : 'border-stone-200'}`}>3</span>
            <span>Review</span>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-serif mb-6">Delivery Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">Full Address</label>
              <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">City</label>
                <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">State</label>
                <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">ZIP</label>
                <input type="text" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
            </div>
            <div className="pt-6">
              <button onClick={() => setStep(2)} className="px-12 py-4 bg-stone-900 text-white font-bold hover:bg-stone-800">Continue to Payment</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-serif mb-6">Secure Payment</h2>
            <div className="p-6 border border-stone-900 flex items-center justify-between mb-8">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-8 bg-stone-100 rounded"></div>
                 <span className="font-semibold">Credit Card</span>
               </div>
               <div className="w-4 h-4 rounded-full border-4 border-stone-900"></div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="border border-stone-200 p-4 focus:outline-stone-900" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2">CVV</label>
                <input type="text" placeholder="123" className="border border-stone-200 p-4 focus:outline-stone-900" />
              </div>
            </div>
            <div className="pt-6 flex space-x-4">
              <button onClick={() => setStep(1)} className="px-8 py-4 border border-stone-200 hover:bg-stone-50">Back</button>
              <button onClick={() => setStep(3)} className="px-12 py-4 bg-stone-900 text-white font-bold hover:bg-stone-800">Continue to Review</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-serif mb-6">Final Review</h2>
            <div className="bg-stone-50 p-8 mb-10 space-y-4">
                <div className="flex justify-between">
                    <span className="text-stone-500">Shipping to</span>
                    <span className="font-medium">John Doe, Beverly Hills, CA 90210</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-stone-500">Payment method</span>
                    <span className="font-medium">Visa ending in 4242</span>
                </div>
            </div>
            <div className="pt-6 flex space-x-4">
              <button onClick={() => setStep(2)} className="px-8 py-4 border border-stone-200 hover:bg-stone-50">Back</button>
              <button onClick={onSuccess} className="px-12 py-4 bg-stone-900 text-white font-bold hover:bg-stone-800">Complete Purchase</button>
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        <div className="bg-stone-50 p-8 sticky top-32">
          <h3 className="text-xl font-serif mb-6">Order Summary</h3>
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-stone-600">{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 border-t border-stone-200 pt-6 mb-6 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Palletized Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between text-xl font-serif border-t border-stone-900 pt-4">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
