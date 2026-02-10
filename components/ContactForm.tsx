
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-8 rounded-lg text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2">Dziękujemy!</h3>
        <p>Twoja wiadomość została wysłana. Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Imię i Nazwisko</label>
          <input 
            required 
            type="text" 
            placeholder="Jan Kowalski"
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 focus:border-beretta outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Telefon</label>
          <input 
            required 
            type="tel" 
            placeholder="+48 000 000 000"
            className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 focus:border-beretta outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase font-bold text-gray-400 mb-1">E-mail</label>
        <input 
          required 
          type="email" 
          placeholder="kontakt@twojdom.pl"
          className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 focus:border-beretta outline-none transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Treść wiadomości / Model kotła</label>
        <textarea 
          required 
          rows={4}
          placeholder="Opisz usterkę lub zapytaj o wolny termin..."
          className="w-full bg-gray-800 border-gray-700 border rounded-md p-3 focus:border-beretta outline-none transition-colors"
        ></textarea>
      </div>
      <div className="flex items-start">
        <input 
          required 
          type="checkbox" 
          id="rodo" 
          className="mt-1 mr-3 h-4 w-4 rounded border-gray-700 bg-gray-800 text-beretta focus:ring-beretta"
        />
        <label htmlFor="rodo" className="text-xs text-gray-400 leading-tight">
          Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z polityką prywatności w celu obsługi zapytania przez Serwis Beretta Elbląg.
        </label>
      </div>
      <button 
        type="submit"
        className="w-full bg-beretta hover:bg-red-700 text-white font-bold py-4 rounded-md transition-all uppercase tracking-widest"
      >
        Wyślij zgłoszenie
      </button>
    </form>
  );
};
