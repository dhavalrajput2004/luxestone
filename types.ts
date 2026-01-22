
export interface Product {
  id: string;
  name: string;
  category: 'Carrara' | 'Calacatta' | 'Nero' | 'Travertine';
  price: number;
  description: string;
  image: string;
  finish: 'Polished' | 'Honed' | 'Brushed';
  size: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type AppView = 'home' | 'shop' | 'checkout' | 'success' | 'about';
