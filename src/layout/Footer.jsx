import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Colonne 1 : Marque et Description */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">
              Le Jardin Gourmand
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Où l'art culinaire français rencontre l'élégance du jardin. 
              Vivez l'expérience de la haute gastronomie dans un cadre inoubliable.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="text-gray-400 hover:text-[#9bc340] transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-[#9bc340] transition-colors">À propos</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-[#9bc340] transition-colors">Menu</a></li>
              <li><a href="#galerie" className="text-gray-400 hover:text-[#9bc340] transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#9bc340] transition-colors">Contact</a></li>
              <li><a href="#reservation" className="text-gray-400 hover:text-[#9bc340] transition-colors">Réservations</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux et Adresse */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Suivez-nous</h4>
            {/* Icônes Réseaux Sociaux */}
            <div className="flex space-x-4 mb-6">
              <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Adresse */}
            <div className="text-sm text-gray-400 space-y-1">
              <p>42 Rue de la Gastronomie</p>
              <p>75008 Paris, France</p>
              <p className="pt-2 hover:text-white transition-colors cursor-pointer">+33 1 42 68 53 00</p>
            </div>
          </div>
        </div>

        {/* Barre du bas : Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <p>© 2026 Le Jardin Gourmand. Tous droits réservés.</p>
          <span className="hidden sm:inline">|</span>
          <div className="flex space-x-2">
            <a href="#confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <span>|</span>
            <a href="#conditions" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;