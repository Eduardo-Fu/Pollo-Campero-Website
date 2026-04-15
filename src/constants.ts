import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'combos', name: 'Combos', icon: 'User' },
  { id: 'familiares', name: 'Menús Familiares', icon: 'Users' },
  { id: 'desayunos', name: 'Desayunos', icon: 'Coffee' },
  { id: 'postres', name: 'Postres', icon: 'IceCream' },
  { id: 'bebidas', name: 'Bebidas', icon: 'CupSoda' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Combo Campero 2 Piezas',
    description: '2 piezas de pollo (Tradicional o Extra Crujiente), 1 acompañamiento, pan o tortilla y bebida mediana.',
    price: 8.50,
    image: 'https://picsum.photos/seed/chicken2/600/400',
    category: 'combos',
    options: [
      { id: 'tipo', name: 'Tipo de Pollo', choices: ['Tradicional', 'Extra Crujiente'], required: true },
      { id: 'acompanamiento', name: 'Acompañamiento', choices: ['Papas Fritas', 'Ensalada de Repollo', 'Puré de Papa', 'Frijoles Charros'], required: true },
      { id: 'complemento', name: 'Pan o Tortilla', choices: ['Pan', 'Tortilla'], required: true }
    ]
  },
  {
    id: '2',
    name: 'Combo Sándwich Extra Crujiente',
    description: 'Sándwich de pechuga Extra Crujiente con mayonesa y pepinillos, papas fritas y bebida mediana.',
    price: 7.99,
    image: 'https://picsum.photos/seed/sandwich/600/400',
    category: 'combos',
    options: [
      { id: 'acompanamiento', name: 'Acompañamiento', choices: ['Papas Fritas', 'Ensalada de Repollo', 'Puré de Papa'], required: true }
    ]
  },
  {
    id: '3',
    name: 'Combo Camperitos (6 piezas)',
    description: '6 Camperitos (nuggets de pechuga), 1 acompañamiento, pan o tortilla, salsa y bebida mediana.',
    price: 7.50,
    image: 'https://picsum.photos/seed/camperitos/600/400',
    category: 'combos',
    options: [
      { id: 'salsa', name: 'Salsa', choices: ['Ranch', 'Barbacoa', 'Mostaza Miel', 'Búfalo'], required: true }
    ]
  },
  {
    id: '4',
    name: 'Banquete 12 Piezas',
    description: '12 piezas de pollo, 3 acompañamientos familiares y 6 panes o tortillas.',
    price: 28.99,
    image: 'https://picsum.photos/seed/chicken1/600/400',
    category: 'familiares',
    options: [
      { id: 'tipo', name: 'Tipo de Pollo', choices: ['Tradicional', 'Extra Crujiente', 'Mitad y Mitad'], required: true },
      { id: 'acompanamiento1', name: 'Acompañamiento 1', choices: ['Papas Fritas Familiares', 'Ensalada de Repollo Familiar', 'Puré de Papa Familiar'], required: true },
      { id: 'acompanamiento2', name: 'Acompañamiento 2', choices: ['Papas Fritas Familiares', 'Ensalada de Repollo Familiar', 'Puré de Papa Familiar'], required: true },
      { id: 'acompanamiento3', name: 'Acompañamiento 3', choices: ['Papas Fritas Familiares', 'Ensalada de Repollo Familiar', 'Puré de Papa Familiar'], required: true }
    ]
  },
  {
    id: '5',
    name: 'Banquete 8 Piezas',
    description: '8 piezas de pollo, 2 acompañamientos familiares y 4 panes o tortillas.',
    price: 21.99,
    image: 'https://picsum.photos/seed/chicken8/600/400',
    category: 'familiares',
    options: [
      { id: 'tipo', name: 'Tipo de Pollo', choices: ['Tradicional', 'Extra Crujiente', 'Mitad y Mitad'], required: true }
    ]
  },
  {
    id: '6',
    name: 'Desayuno Típico Campero',
    description: 'Huevos revueltos, frijoles volteados, plátanos fritos, queso fresco, crema, pan o tortilla y café.',
    price: 6.50,
    image: 'https://picsum.photos/seed/breakfast1/600/400',
    category: 'desayunos',
    options: [
      { id: 'huevos', name: 'Preparación de Huevos', choices: ['Revueltos', 'Estrellados', 'Picados con Tomate y Cebolla'], required: true },
      { id: 'complemento', name: 'Pan o Tortilla', choices: ['Pan', 'Tortilla'], required: true }
    ]
  },
  {
    id: '7',
    name: 'Desayuno Chapín',
    description: 'Huevos estrellados sobre tortilla frita con salsa ranchera, frijoles, plátanos, queso y café.',
    price: 6.99,
    image: 'https://picsum.photos/seed/breakfast2/600/400',
    category: 'desayunos'
  },
  {
    id: '8',
    name: 'Flan de Caramelo',
    description: 'El clásico y delicioso flan de leche con caramelo de Pollo Campero.',
    price: 2.50,
    image: 'https://picsum.photos/seed/flan/600/400',
    category: 'postres'
  },
  {
    id: '9',
    name: 'Pay de Queso',
    description: 'Suave y cremoso pay de queso con base de galleta.',
    price: 2.99,
    image: 'https://picsum.photos/seed/cheesecake/600/400',
    category: 'postres'
  },
  {
    id: '10',
    name: 'Helado Sundae',
    description: 'Helado de vainilla con topping de chocolate, caramelo o fresa.',
    price: 1.99,
    image: 'https://picsum.photos/seed/sundae/600/400',
    category: 'postres',
    options: [
      { id: 'topping', name: 'Sabor de Topping', choices: ['Chocolate', 'Caramelo', 'Fresa'], required: true }
    ]
  },
  {
    id: '11',
    name: 'Horchata Campero',
    description: 'Refrescante y tradicional bebida de horchata.',
    price: 1.99,
    image: 'https://picsum.photos/seed/horchata/600/400',
    category: 'bebidas'
  },
  {
    id: '12',
    name: 'Té Frío',
    description: 'Té helado con limón, preparado fresco todos los días.',
    price: 1.75,
    image: 'https://picsum.photos/seed/icetea/600/400',
    category: 'bebidas'
  },
  {
    id: '13',
    name: 'Gaseosa Mediana',
    description: 'Bebida carbonatada a elección.',
    price: 1.50,
    image: 'https://picsum.photos/seed/soda/600/400',
    category: 'bebidas',
    options: [
      { id: 'sabor', name: 'Sabor', choices: ['Pepsi', '7Up', 'Mirinda', 'Mountain Dew'], required: true }
    ]
  }
];
