
import React from 'react';

const reviews = [
  {
    name: 'Jacek',
    stars: 5,
    text: 'Pełen profesjonalizm i rzetelność. Serwis wykonany błyskawicznie, kocioł działa jak nowy. Polecam każdemu posiadaczowi Beretty w Elblągu!',
    date: '2 tygodnie temu'
  },
  {
    name: 'Paulina',
    stars: 5,
    text: 'Szybki termin i bardzo miła obsługa. Pan Krzysztof wyjaśnił co było przyczyną usterki i dał cenne rady dotyczące eksploatacji. Super serwis.',
    date: 'miesiąc temu'
  },
  {
    name: 'Sniper',
    stars: 5,
    text: 'Najlepszy fachowiec w okolicy. Naprawa hydrauliki wykonana bezbłędnie i czysto. Bardzo uczciwe podejście do klienta.',
    date: '3 miesiące temu'
  }
];

export const Reviews: React.FC = () => {
  // URL to Google My Business reviews for the specific business location
  const googleReviewsUrl = "https://www.google.com/maps/place/Browarna+27,+82-300+Elbl%C4%85g/@54.1752,19.3908,17z/data=!4m8!1m2!2m1!1sSerwis+Beretta+Elbl%C4%85g+HYDROMONT!3m4!1s0x46fd4d3a016631b1:0x7d65b75b9f7a555c!8m2!3d54.1752!4d19.3908";

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border-t-4 border-beretta shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4 text-sm leading-relaxed flex-grow">
              "{review.text}"
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span className="font-bold text-charcoal">{review.name}</span>
              <span className="text-xs text-gray-400 uppercase">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <a 
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border-2 border-beretta text-beretta hover:bg-beretta hover:text-white font-bold rounded-full transition-all duration-300 group"
        >
          <span className="mr-2">Zobacz wszystkie opinie w Google</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
