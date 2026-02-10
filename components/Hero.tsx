
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image with LCP optimization */}
      <img 
        src="https://picsum.photos/seed/heating/1600/900" 
        fetchpriority="high" 
        loading="eager" 
        decoding="async" 
        width="1600" 
        height="900" 
        alt="Serwis Kotłów Beretta Elbląg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 hero-gradient z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Profesjonalny <span className="text-beretta">Serwis Beretta</span> Elbląg – Ciepło i Bezpieczeństwo Twojego Domu
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Jesteśmy Twoim lokalnym ekspertem w dziedzinie techniki grzewczej. Oferujemy szybki serwis, profesjonalny montaż i regularne przeglądy kotłów gazowych Beretta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="tel:+48663838116" 
              className="px-8 py-4 bg-beretta text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all text-center"
            >
              Zadzwoń: +48 663 838 116
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-charcoal rounded-lg font-bold text-lg hover:bg-gray-100 transition-all text-center"
            >
              Zamów Przegląd
            </a>
          </div>
          <div className="flex items-center space-x-6 pt-8 text-sm md:text-base opacity-90">
            <div className="flex items-center">
              <span className="text-beretta mr-2">✓</span> Ekspresowe Terminy
            </div>
            <div className="flex items-center">
              <span className="text-beretta mr-2">✓</span> Autoryzowany Serwis
            </div>
            <div className="flex items-center">
              <span className="text-beretta mr-2">✓</span> 100% Gwarancji
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
