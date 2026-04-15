export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  options?: ProductOption[];
}

export interface ProductOption {
  id: string;
  name: string;
  choices: string[];
  required?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedOptions: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type OrderStatus = 'received' | 'preparing' | 'on-way' | 'delivered';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  timestamp: number;
  method: 'delivery' | 'pickup';
}
