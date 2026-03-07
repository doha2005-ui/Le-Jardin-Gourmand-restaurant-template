import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import "../styles/main.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#menu", label: "Menu" },
    { href: "#reservation", label: "Réservation" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="top-0 z-50 w-full fixed transition-all duration-300 bg-[#425824] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
        {/* Logo Style 2 : Le Minimaliste */}
          <div className="flex items-center group cursor-pointer">
            <h1 className="text-xl md:text-2xl uppercase tracking-[0.25em] text-white/95">
              <span className="font-light">Le Jardin</span>
              <span className="font-semibold text-[#9bc340] ml-3">Gourmand</span>
            </h1>
          </div>

          {/* Menu sur Ordinateur */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-[#9bc340] transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bouton Menu sur Mobile */}
          <button
            className="md:hidden text-white hover:text-[#9bc340] transition-colors duration-200 p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menu déroulant sur Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#3c4f21] border-t border-[#546e2e] shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-2 flex flex-col items-center sm:py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block w-full text-center text-white hover:text-[#9bc340] hover:bg-[#32421b] transition-all duration-200 text-base font-medium py-3 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;