// combosData.js - Simulación de API con datos de combos
export const combosData = [
  {
    id: 1,
    name: 'Combo Basic',
    type: 'basic',
    description: 'Disfruta de los cócteles clásicos que nunca pasan de moda. Perfecto para comenzar tu experiencia Killay.',
    price: '$25.99',
    originalPrice: '$32.00',
    image: '🍹',
    cocktails: [
      'Mojito Clásico',
      'Daiquiri',
      'Cuba Libre',
      'Piña Colada',
      'Margarita Traditional'
    ],
    features: [
      'Cócteles clásicos de calidad',
      'Ingredientes premium',
      'Servicio estándar',
      'Ambiente relajado'
    ],
    popular: false,
    discount: '20%'
  },
  {
    id: 2,
    name: 'Combo Killay',
    type: 'premium',
    description: 'Experimenta nuestros cócteles de autor exclusivos junto con los clásicos. Una selección curada que despertará tus sentidos.',
    price: '$42.99',
    originalPrice: '$58.00',
    image: '🥂',
    cocktails: [
      'Mojito Clásico',
      'Daiquiri',
      'Cuba Libre',
      'Piña Colada',
      'Margarita Traditional',
      'Lunar Eclipse (Autor)',
      'Killay Sunset (Autor)',
      'Midnight Garden (Autor)',
      'Cochabamba Mist (Autor)'
    ],
    features: [
      'Incluye todo del Combo Basic',
      'Cócteles de autor exclusivos',
      'Ingredientes artesanales',
      'Presentación premium',
      'Maridaje personalizado'
    ],
    popular: true,
    discount: '25%'
  },
  {
    id: 3,
    name: 'Combo Killay XIX Gold',
    type: 'gold',
    description: 'La experiencia definitiva. Todos nuestros cócteles servidos con espectacular técnica de flair bartending que convertirá cada trago en un show.',
    price: '$68.99',
    originalPrice: '$95.00',
    image: '🏆',
    cocktails: [
      'Mojito Clásico (Flair)',
      'Daiquiri (Flair)',
      'Cuba Libre (Flair)',
      'Piña Colada (Flair)',
      'Margarita Traditional (Flair)',
      'Lunar Eclipse (Flair)',
      'Killay Sunset (Flair)',
      'Midnight Garden (Flair)',
      'Cochabamba Mist (Flair)',
      'Golden Phoenix (Exclusivo Flair)',
      'Fire & Ice (Exclusivo Flair)'
    ],
    features: [
      'Todo del Combo Killay',
      'Técnica Flair Bartending',
      'Show personalizado',
      'Cócteles exclusivos Gold',
      'Experiencia VIP completa',
      'Fotografía del momento',
      'Certificado de experiencia'
    ],
    popular: false,
    discount: '27%',
    exclusive: true
  },
  {
    id: 4,
    name: 'Combo Romántico Luna',
    type: 'romantic',
    description: 'Perfecto para parejas. Cócteles afrodisíacos y ambiente íntimo bajo la luz de la luna.',
    price: '$35.99',
    originalPrice: '$45.00',
    image: '💕',
    cocktails: [
      'Passionate Kiss',
      'Lovers Paradise',
      'Moonlight Serenade',
      'Aphrodite\'s Secret'
    ],
    features: [
      'Mesa reservada para dos',
      'Velas aromáticas',
      'Pétalos de rosa',
      'Música ambiente',
      'Postre de cortesía'
    ],
    popular: false,
    discount: '20%'
  },
  {
    id: 5,
    name: 'Combo Fiesta Grupal',
    type: 'group',
    description: 'Ideal para celebraciones grupales. Variedad de cócteles para compartir y crear momentos inolvidables.',
    price: '$89.99',
    originalPrice: '$120.00',
    image: '🎉',
    cocktails: [
      'Mojito Tower (4 personas)',
      'Margarita Pitcher',
      'Sangría de la Casa',
      'Punch Tropical',
      'Shooter Variety Pack',
      'Birthday Special'
    ],
    features: [
      'Para 4-6 personas',
      'Mesa premium reservada',
      'Bocadillos incluidos',
      'Decoración de celebración',
      'Playlist personalizada',
      'Fotografía grupal'
    ],
    popular: true,
    discount: '25%'
  },
  {
    id: 6,
    name: 'Combo Degustación Bartender',
    type: 'tasting',
    description: 'Una experiencia educativa donde nuestro bartender master te guía a través de técnicas y sabores únicos.',
    price: '$55.99',
    originalPrice: '$75.00',
    image: '🎓',
    cocktails: [
      'Técnica Muddling',
      'Técnica Shaking',
      'Técnica Stirring',
      'Técnica Layering',
      'Creación personalizada'
    ],
    features: [
      'Clase magistral incluida',
      'Aprende técnicas profesionales',
      'Crea tu cóctel único',
      'Kit de herramientas básicas',
      'Certificado de participación',
      'Recetario digital'
    ],
    popular: false,
    discount: '25%',
    educational: true
  }
];