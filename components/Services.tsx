
import React from 'react';

const serviceList = [
  {
    title: 'Serwis i Naprawa',
    description: 'Diagnostyka i naprawa awarii kotłów gazowych Beretta. Przywracamy ciepło w Twoim domu w najkrótszym możliwym czasie.',
    icon: '🛠️'
  },
  {
    title: 'Instalacje Gazowe',
    description: 'Projektowanie i wykonywanie bezpiecznych przyłączy oraz instalacji gazowych zgodnie z aktualnymi normami.',
    icon: '🔥'
  },
  {
    title: 'Montaż Kotłów',
    description: 'Dobór i profesjonalna instalacja nowoczesnych kotłów kondensacyjnych Beretta dla maksymalnej wydajności.',
    icon: '⚙️'
  },
  {
    title: 'Przeglądy Okresowe',
    description: 'Regularna konserwacja przedłużająca żywotność urządzenia i zapewniająca bezpieczeństwo domowników.',
    icon: '📋'
  },
  {
    title: 'Naprawa Hydrauliki',
    description: 'Kompleksowe usługi hydrauliczne, usuwanie wycieków i modernizacja domowych sieci wodno-kanalizacyjnych.',
    icon: '🚰'
  },
  {
    title: 'Analiza Spalin',
    description: 'Precyzyjne pomiary spalin gwarantujące ekologiczne i ekonomiczne spalanie gazu w Twoim piecu.',
    icon: '🧪'
  }
];

export const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceList.map((service, index) => (
        <div 
          key={index} 
          className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-beretta transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};
