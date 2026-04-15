import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '@/constants';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Users, User, Coffee, IceCream, CupSoda } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (product: Product) => void;
}

const IconMap: Record<string, any> = {
  Users,
  User,
  Coffee,
  IceCream,
  CupSoda,
};

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = React.useState(CATEGORIES[0].id);

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Nuestro Menú</h2>
            <p className="text-gray-600">Explora nuestras deliciosas opciones preparadas al momento.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = IconMap[cat.icon];
              return (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? 'default' : 'outline'}
                  className={`rounded-2xl h-12 px-6 flex items-center gap-2 whitespace-nowrap transition-all ${
                    activeCategory === cat.id ? 'shadow-lg shadow-primary/20 scale-105' : ''
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group h-full flex flex-row overflow-hidden rounded-[15px] border border-gray-200 shadow-none hover:shadow-md transition-all duration-300 p-4 gap-4">
                <div className="w-[100px] h-[100px] bg-gray-100 rounded-[10px] overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {index < 2 && (
                          <span className="bg-[#FFEBE0] text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                            {index === 0 ? 'Famoso' : 'Nuevo'}
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-xs line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-between items-center pt-2">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button 
                      size="sm"
                      className="rounded-full font-bold h-8 px-4 text-xs"
                      onClick={() => onAddToCart(product)}
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
