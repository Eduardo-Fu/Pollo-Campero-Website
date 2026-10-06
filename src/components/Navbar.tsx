import React from 'react';
import { ShoppingCart, User, Menu as MenuIcon, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenMenu }) => {
  const [orderMode, setOrderMode] = React.useState<'delivery' | 'pickup'>('delivery');

  return (
    <nav className="sticky top-0 z-50 w-full bg-white h-[80px] border-b-2 border-primary shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => {
                onOpenMenu();
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Abrir menú"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl shadow-sm">
                C
              </div>
              <span className="font-black text-[22px] sm:text-[28px] text-primary tracking-tighter">CAMPERO</span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setOrderMode('delivery')}
              className={`rounded-full px-4 sm:px-6 h-8 sm:h-9 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                orderMode === 'delivery'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setOrderMode('pickup')}
              className={`rounded-full px-4 sm:px-6 h-8 sm:h-9 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                orderMode === 'pickup'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pickup
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden md:flex items-center gap-2">
              <span className="font-semibold text-sm text-gray-700">Hola, Juan Carlos 👋</span>
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold text-sm">
                JC
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-gray-100 cursor-pointer"
              onClick={onOpenCart}
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 px-1.5 min-w-[20px] h-5 flex items-center justify-center bg-primary text-white border-2 border-white text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
