
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { ImageEditor } from './components/ImageEditor';
import { ContactForm } from './components/ContactForm';
import { GoogleMap } from './components/GoogleMap';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-[60] bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Active Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 group focus:outline-none transition-transform active:scale-95"
            aria-label="Powrót na górę strony"
          >
            <div className="w-10 h-10 bg-beretta rounded flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">B</div>
            <div className="text-left">
              <h2 className="text-lg font-bold leading-none text-charcoal tracking-tight group-hover:text-beretta transition-colors">HYDROMONT</h2>
              <p className="text-[10px] text-beretta font-bold uppercase tracking-widest mt-0.5">Serwis Beretta Elbląg</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold">
            <a href="#services" className="hover:text-beretta transition-colors">Usługi</a>
            <a href="#reviews" className="hover:text-beretta transition-colors">Opinie</a>
            <a href="#ai-assistant" className="hover:text-beretta transition-colors text-beretta">Asystent AI</a>
            <a href="#contact" className="hover:text-beretta transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+48663838116" 
              className="hidden sm:inline-flex items-center px-4 py-2 bg-beretta text-white rounded-md font-bold text-sm hover:bg-red-700 transition-colors shadow-sm"
            >
              +48 663 838 116
            </a>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-charcoal hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
        <nav 
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <button onClick={closeMenu} className="p-2 text-gray-400 hover:text-charcoal transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={closeMenu} className="text-xl font-bold py-2 border-b border-gray-50 hover:text-beretta">Usługi</a>
              <a href="#reviews" onClick={closeMenu} className="text-xl font-bold py-2 border-b border-gray-50 hover:text-beretta">Opinie</a>
              <a href="#ai-assistant" onClick={closeMenu} className="text-xl font-bold py-2 border-b border-gray-50 text-beretta">Asystent AI</a>
              <a href="#contact" onClick={closeMenu} className="text-xl font-bold py-2 border-b border-gray-50 hover:text-beretta">Kontakt</a>
            </div>
            <div className="mt-auto">
              <a 
                href="tel:+48663838116" 
                className="block w-full text-center py-4 bg-beretta text-white rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Zadzwoń Teraz
              </a>
            </div>
          </div>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Grid */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-beretta font-bold uppercase tracking-widest text-sm">Nasza Oferta</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Profesjonalne Usługi Grzewcze</h2>
              <div className="w-20 h-1 bg-beretta mx-auto mt-4"></div>
            </div>
            <Services />
          </div>
        </section>

        {/* AI Assistant Section - Nano Banana Powered */}
        <section id="ai-assistant" className="py-16 md:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="text-beretta font-bold uppercase tracking-widest text-sm">Nowoczesne Narzędzia</span>
              <h2 className="text-3xl font-extrabold mt-2">Wizualizacja i Diagnostyka AI</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Skorzystaj z naszego inteligentnego asystenta. Wgraj zdjęcie swojego kotła i poproś o analizę wizualną lub sprawdź, jak będzie wyglądać nowa instalacja.
              </p>
            </div>
            <ImageEditor />
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-beretta font-bold uppercase tracking-widest text-sm">Opinie Klientów</span>
              <h2 className="text-3xl font-extrabold mt-2">Zaufali nam mieszkańcy Elbląga</h2>
            </div>
            <Reviews />
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className="py-16 md:py-24 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Skontaktuj się z nami</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Masz awarię? Potrzebujesz przeglądu okresowego? Jesteśmy do Twojej dyspozycji. 
                  Działamy na terenie Elbląga i okolic.
                </p>
                <ContactForm />
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-800 p-6 rounded-2xl mb-8 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-beretta">Dane Kontaktowe</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-3 text-beretta">📍</span>
                      Browarna 27, 82-300 Elbląg
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-beretta">📞</span>
                      <a href="tel:+48663838116" className="hover:text-white transition-colors font-semibold">+48 663 838 116</a>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-beretta">⏰</span>
                      Pon - Pt: 08:00 - 18:00 | Sob: 09:00 - 14:00
                    </li>
                  </ul>
                </div>
                <div className="h-full min-h-[350px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Active Footer Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center space-x-2 mb-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all focus:outline-none"
          >
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white font-bold text-lg">B</div>
            <span className="font-bold text-gray-300 uppercase tracking-widest text-sm">HYDROMONT</span>
          </button>
          <p className="text-sm">&copy; {new Date().getFullYear()} HYDROMONT Krzysztof Szutkowski. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 text-xs">Serwis Beretta Elbląg – Autoryzowany serwis kotłów gazowych.</p>
        </div>
      </footer>

      {/* Fixed Call Button for Mobile */}
      {isMobile && !isMenuOpen && (
        <a 
          href="tel:+48663838116"
          className="fixed bottom-6 right-6 z-[40] bg-beretta text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce active:scale-90 transition-transform"
          aria-label="Zadzwoń Teraz"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default App;
