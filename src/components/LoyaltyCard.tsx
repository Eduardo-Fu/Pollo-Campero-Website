import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const LoyaltyCard: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFF9E6] border-2 border-dashed border-secondary rounded-[15px] p-10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Saldo Campero Puntos</p>
            <div className="text-[48px] font-black text-primary mb-2">1,250 pts</div>
            <p className="text-gray-600 mb-8 font-medium">¡Te faltan 250 para un Flan de Caramelo!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-12 px-10 rounded-full font-black text-sm uppercase tracking-wider shadow-lg">
                Canjear Puntos
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 h-12 px-10 rounded-full font-black text-sm uppercase tracking-wider">
                Ver Recompensas
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
