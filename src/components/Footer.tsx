import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-bold text-2xl tracking-tight">CAMPERO</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Llevando el sabor único de nuestro pollo a tu mesa desde 1971. 
              Calidad, frescura y pasión en cada pieza.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Menú</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Menús Familiares</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Individuales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desayunos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Postres y Bebidas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ofertas Especiales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Compañía</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ubicaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabaja con Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facturación Electrónica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Ciudad de Guatemala, Guatemala</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+502 2374-1777</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>servicioalcliente@campero.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Pollo Campero. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
