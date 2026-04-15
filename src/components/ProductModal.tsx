import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (product: Product, options: Record<string, string>) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (product?.options) {
      const defaults: Record<string, string> = {};
      product.options.forEach(opt => {
        if (opt.required) defaults[opt.id] = opt.choices[0];
      });
      setSelectedOptions(defaults);
    } else {
      setSelectedOptions({});
    }
  }, [product]);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-3xl border-none">
        <div className="relative h-64 sm:h-80">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-white/80">{product.description}</p>
          </div>
        </div>

        <ScrollArea className="max-h-[40vh] p-6">
          <div className="space-y-8">
            {product.options?.map((option) => (
              <div key={option.id} className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-bold">{option.name}</Label>
                  {option.required && (
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Obligatorio
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {option.choices.map((choice) => (
                    <div
                      key={choice}
                      className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedOptions[option.id] === choice
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                      onClick={() => setSelectedOptions(prev => ({ ...prev, [option.id]: choice }))}
                    >
                      <span className="font-medium">{choice}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedOptions[option.id] === choice ? 'border-primary bg-primary' : 'border-gray-300'
                      }`}>
                        {selectedOptions[option.id] === choice && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 bg-gray-50 border-t flex-col sm:flex-row gap-4">
          <div className="flex-grow flex items-center justify-between sm:justify-start gap-4">
            <span className="text-sm text-gray-500 font-medium">Precio final:</span>
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>
          <Button 
            className="h-14 px-8 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20"
            onClick={() => onConfirm(product, selectedOptions)}
          >
            Agregar al Pedido
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
