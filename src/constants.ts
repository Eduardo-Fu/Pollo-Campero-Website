import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'familiares', name: 'Menús Familiares', icon: 'Users' },
  { id: 'individuales', name: 'Individuales', icon: 'User' },
  { id: 'desayunos', name: 'Desayunos', icon: 'Coffee' },
  { id: 'postres', name: 'Postres', icon: 'IceCream' },
  { id: 'bebidas', name: 'Bebidas', icon: 'CupSoda' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Banquete Familiar 10 Piezas',
    description: '10 piezas de pollo, 3 acompañamientos familiares y 4 panes o tortillas.',
    price: 24.99,
    image: 'https://picsum.photos/seed/chicken1/600/400',
    category: 'familiares',
    options: [
      { id: 'tipo', name: 'Tipo de Pollo', choices: ['Tradicional', 'Extra Crujiente'], required: true },
      { id: 'piezas', name: 'Piezas', choices: ['Surtido', 'Solo Pechuga (+ $2.00)'], required: true }
    ]
  },
  {
    id: '2',
    name: 'Menú Campero Individual',
    description: '2 piezas de pollo, acompañamiento, pan o tortilla y bebida.',
    price: 8.50,
    image: 'https://picsum.photos/seed/chicken2/600/400',
    category: 'individuales',
    options: [
      { id: 'tipo', name: 'Tipo de Pollo', choices: ['Tradicional', 'Extra Crujiente'], required: true }
    ]
  },
  {
    id: '3',
    name: 'Sándwich Campero',
    description: 'Pechuga de pollo empanizada, lechuga, tomate y mayonesa.',
    price: 6.99,
    image: 'https://picsum.photos/seed/sandwich/600/400',
    category: 'individuales'
  },
  {
    id: '4',
    name: 'Desayuno Típico',
    description: 'Huevos al gusto, frijoles, plátanos, queso, crema y pan.',
    price: 5.50,
    image: 'https://picsum.photos/seed/breakfast/600/400',
    category: 'desayunos'
  },
  {
    id: '5',
    name: 'Flan Campero',
    description: 'Delicioso flan de leche con caramelo.',
    price: 2.50,
    image: 'https://picsum.photos/seed/flan/600/400',
    category: 'postres'
  },
  {
    id: '6',
    name: 'Pepsi 600ml',
    description: 'Bebida refrescante.',
    price: 1.50,
    image: 'https://picsum.photos/seed/soda/600/400',
    category: 'bebidas'
  }
];
