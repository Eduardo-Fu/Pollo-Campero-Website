import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { LoyaltyCard } from './components/LoyaltyCard';
import { Footer } from './components/Footer';
import { Product, CartItem } from './types';
import { Button } from '@/components/ui/button';

export default function App() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);

  const handleAddToCart = (product: Product) => {
    if (product.options && product.options.length > 0) {
      setSelectedProduct(product);
      setIsProductModalOpen(true);
    } else {
      addToCart(product, {});
    }
  };

  const addToCart = (product: Product, options: Record<string, string>) => {
    setCart(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.id === product.id && JSON.stringify(item.selectedOptions) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }

      return [...prev, { ...product, quantity: 1, selectedOptions: options }];
    });
    setIsProductModalOpen(false);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenMenu={() => {}} 
      />
      
      <div className="max-w-7xl mx-auto px-10 flex gap-10 py-10">
        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block w-[200px] shrink-0 space-y-2">
          <div className="p-4 bg-primary text-white rounded-[12px] font-bold flex items-center gap-3 cursor-pointer">
            🍗 Menú
          </div>
          <div className="p-4 hover:bg-[#FFF5F0] rounded-[12px] font-bold flex items-center gap-3 cursor-pointer text-gray-700 transition-colors">
            📦 Combos
          </div>
          <div className="p-4 hover:bg-[#FFF5F0] rounded-[12px] font-bold flex items-center gap-3 cursor-pointer text-gray-700 transition-colors">
            ☕ Desayunos
          </div>
          <div className="p-4 hover:bg-[#FFF5F0] rounded-[12px] font-bold flex items-center gap-3 cursor-pointer text-gray-700 transition-colors">
            🍦 Postres
          </div>
          <div className="p-4 hover:bg-[#FFF5F0] rounded-[12px] font-bold flex items-center gap-3 cursor-pointer text-gray-700 transition-colors">
            🥤 Bebidas
          </div>
          <div className="p-4 hover:bg-[#FFF5F0] rounded-[12px] font-bold flex items-center gap-3 cursor-pointer text-gray-700 transition-colors">
            📍 Sucursales
          </div>
        </aside>

        <div className="flex-grow space-y-10">
          <Hero />
          
          <div id="menu">
            <MenuSection onAddToCart={handleAddToCart} />
          </div>
          
          <LoyaltyCard />
          
          {/* Locations Section Placeholder */}
          <section className="py-16 bg-white rounded-[20px] overflow-hidden shadow-sm border border-gray-200">
            <div className="px-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-12 lg:mb-0">
                  <h2 className="text-3xl font-black text-gray-900 mb-6">Estamos más cerca de lo que crees</h2>
                  <p className="text-gray-600 mb-10">
                    Con más de 300 ubicaciones en toda la región, siempre hay un Pollo Campero listo para recibirte.
                  </p>
                  <Button className="bg-primary text-white rounded-full px-8 h-12 font-bold uppercase tracking-wider">
                    Buscar Sucursal
                  </Button>
                </div>
                <div className="relative h-[300px] rounded-[15px] overflow-hidden shadow-inner bg-gray-200">
                  <img 
                    src="https://picsum.photos/seed/map/1200/800" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover grayscale opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-xs">
                      <p className="font-bold text-gray-900 mb-4 text-sm">Activa tu ubicación para ver el mapa</p>
                      <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-xs">
                        Permitir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <ProductModal 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onConfirm={addToCart}
      />
    </div>
  );
}
