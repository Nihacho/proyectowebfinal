import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/redesSociales.css'; // Asegúrate de tener este archivo CSS para estilos

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
  );
};

export default RedesSociales;
