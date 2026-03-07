import React from "react";
import { Phone, Mail } from "lucide-react";

function Reservation() {
  return (
    <section className="bg-[#425824] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* En-tête de la section */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-wide">
          Faire une Réservation
        </h2>
        <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Vivez l'expérience de la haute gastronomie dans un cadre élégant. Nous vous recommandons de réserver à l'avance pour garantir l'horaire de votre choix.
        </p>

        {/* Carte "Comment Réserver" (plus claire) */}
        <div className="bg-[#4d662a] p-8 md:p-10 max-w-2xl mx-auto shadow-lg border border-[#587530]">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-8">
            Comment Réserver
          </h3>

          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm md:text-base">Appelez-nous : +33 1 42 68 53 00</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm md:text-base">Email : reservations@lejardingourmand.fr</span>
            </div>
          </div>

          <p className="text-gray-300 text-xs md:text-sm mt-8 italic">
            Pour les groupes de 8 personnes ou plus, veuillez nous contacter directement afin de convenir d'un menu et d'un placement spécifiques.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-white px-8 py-3 text-sm font-medium transition-colors duration-200 uppercase tracking-wider">
              Appeler pour Réserver
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#425824] px-8 py-3 text-sm font-medium transition-colors duration-200 uppercase tracking-wider">
              Nous Envoyer un Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;