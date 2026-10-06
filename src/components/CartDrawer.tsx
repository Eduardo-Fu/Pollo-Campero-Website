import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CartItem } from '@/types';
import { Trash2, Plus, Minus, ShoppingBag, CheckCircle2 } from 'lucide-react';

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
  const [isOrdered, setIsOrdered] = React.useState(false);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2.50;
  const total = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      // after 3 seconds allow reset or close
    }, 2500);
  };

  const handleResetAndClose = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 text-2xl font-bold">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Tu Carrito
          </SheetTitle>
        </SheetHeader>

        {isOrdered ? (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">¡Pedido Confirmado!</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Tu comida favorita de Pollo Campero se está preparando. Estará lista en aproximadamente 25-35 minutos.
            </p>
            <div className="w-full bg-[#FFF9E6] border border-secondary rounded-2xl p-4 mb-8 text-left text-xs space-y-1">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Número de orden:</span>
                <span className="text-primary">#CP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tiempo estimado:</span>
                <span>30 mins</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total pagado:</span>
                <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
            <Button
              className="w-full h-12 rounded-xl font-bold bg-primary text-white hover:bg-primary/90"
              onClick={handleResetAndClose}
            >
              Listo, seguir navegando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-grow px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
                  <Button variant="link" onClick={onClose} className="text-primary font-bold cursor-pointer">
                    Explorar el menú
                  </Button>
                </div>
              ) : (
                <div className="py-6 space-y-0">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-4 border-b border-dashed border-gray-300">
                      <div className="flex-grow pr-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-destructive cursor-pointer"
                            onClick={() => onRemove(item.id)}
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            {Object.values(item.selectedOptions).join(', ')}
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-l-lg text-xs cursor-pointer"
                              aria-label="Disminuir cantidad"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-bold text-xs text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-r-lg text-xs cursor-pointer"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-bold text-sm text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 bg-[#FFF9E6] border-2 border-dashed border-secondary rounded-[15px] p-4 text-center">
                    <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-1">Saldo Campero Puntos</p>
                    <div className="text-2xl font-black text-primary">1,250 pts</div>
                    <p className="text-[10px] text-gray-600 mt-1">¡Te faltan 250 para un Flan de Caramelo!</p>
                  </div>
                </div>
              )}
            </ScrollArea>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t">
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full h-14 rounded-[15px] text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-none cursor-pointer"
                >
                  CONTINUAR PAGO
                </Button>
                <p className="text-center text-xs font-bold text-accent mt-4">
                  ¿Quieres agregar un Pay de Manzana por $1.50?
                </p>
              </div>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
