
import React from 'react';

export const GoogleMap: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.5134567222374!2d19.3908!3d54.1752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4d3a016631b1%3A0x7d65b75b9f7a555c!2sBrowarna%2027%2C%2082-300%20Elbl%C4%85g!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa - Serwis Beretta Elbląg Browarna 27"
      className="grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
    ></iframe>
  );
};
