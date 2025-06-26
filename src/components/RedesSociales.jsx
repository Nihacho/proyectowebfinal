import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/redesSociales.css';

const redes = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/tu_usuario',
    description: 'Síguenos en Instagram para fotos y novedades.'
  },
  {
    name: 'TikTok',
    icon: <FaTiktok />,
    url: 'https://www.tiktok.com/@tu_usuario',
    description: 'Descubre videos exclusivos en TikTok.'
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/c/tu_canal',
    description: 'Mira nuestros videos y tutoriales en YouTube.'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    url: 'https://wa.me/59163916139',
    description: 'Contáctanos rápidamente por WhatsApp.'
  }
];

const RedesSociales = () => {
  return (
    <div className="redes-container">
      <h2 className="embajador-title">Nuestro Embajador</h2>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/ve3AipSQZxg?si=FzPjyM3HA16KNq-3&controls=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <h2 className="redes-titulo">Nuestras Redes Sociales</h2>

      <div className="redes-cards-wrapper">
        {redes.map(({ name, icon, url, description }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="redes-card"
            aria-label={`Enlace a ${name}`}
          >
            <div className="redes-icon">{icon}</div>
            <h3 className="redes-title">{name}</h3>
            <p className="redes-description">{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RedesSociales;
