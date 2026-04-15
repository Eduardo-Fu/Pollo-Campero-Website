import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/types';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2.50;
  const total = subtotal + (items.length > 0 ? deliveryFee : 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 text-2xl font-bold">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Tu Carrito
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-grow px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
              <Button variant="link" onClick={onClose} className="text-primary font-bold">
                Explorar el menú
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-0">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between py-4 border-b border-dashed border-gray-300">
                  <div className="flex-grow pr-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-900 leading-tight">{item.quantity}x {item.name}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-gray-400 hover:text-destructive"
                        onClick={() => onRemove(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Object.values(item.selectedOptions).join(', ')}
                    </p>
                  </div>
                  <span className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              
              <div className="mt-8 bg-[#FFF9E6] border-2 border-dashed border-secondary rounded-[15px] p-4 text-center">
                <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-1">Saldo Campero Puntos</p>
                <div className="text-2xl font-black text-primary">1,250 pts</div>
                <p className="text-[10px] text-gray-600 mt-1">¡Te faltan 250 para un Flan!</p>
              </div>
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <div className="p-6 bg-white border-t">
            <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="w-full h-14 rounded-[15px] text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-none">
              CONTINUAR PAGO
            </Button>
            <p className="text-center text-xs font-bold text-accent mt-4">
              ¿Quieres agregar un Pay de Manzana por $1.50?
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
