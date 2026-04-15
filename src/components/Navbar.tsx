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
  return (
    <nav className="sticky top-0 z-50 w-full bg-white h-[80px] border-b-2 border-primary shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-10 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onOpenMenu}>
              <MenuIcon className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">
                C
              </div>
              <span className="font-black text-[28px] hidden sm:block text-primary tracking-tighter">CAMPERO</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-gray-100 p-1 rounded-full">
            <Button variant="default" className="rounded-full px-6 h-9 text-sm font-bold">Delivery</Button>
            <Button variant="ghost" className="rounded-full px-6 h-9 text-sm font-bold text-gray-600">Pickup</Button>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden md:flex items-center gap-2">
              <span className="font-semibold text-sm text-gray-700">Hola, Juan Carlos 👋</span>
              <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300"></div>
            </div>
            <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 px-1.5 min-w-[20px] h-5 flex items-center justify-center bg-primary text-white border-2 border-white">
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
