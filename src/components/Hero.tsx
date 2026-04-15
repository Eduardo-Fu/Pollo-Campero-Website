import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 pt-6 pb-10 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="bg-gradient-to-br from-primary to-[#FF8540] rounded-[20px] p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              20% OFF en Combos de 12
            </h1>
            <p className="text-base sm:text-lg opacity-90 mb-8">
              Solo por hoy a través de nuestra web. ¡Crujiente y Dorado!
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-dark hover:bg-secondary/90 h-12 px-8 sm:px-10 rounded-full font-black text-sm uppercase tracking-wider shadow-lg w-full sm:w-auto"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Canjear Cupón
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-3/4 md:w-[300px] aspect-[4/3] bg-white/20 rounded-[15px] overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/campero-promo/600/400"
              alt="Pollo Campero Promo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
