import React, { useState, useEffect } from 'react'
import '../styles/cocteles.css';

const CartaCocteles = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const clasicos = [
    {
      name: 'Mojito',
      ingredients: 'Ron blanco, menta fresca, lima, azúcar, agua con gas',
      price: '$12.99',
      icon: '🌿',
      description: 'Refrescante clásico cubano con el toque perfecto de menta'
    },
    {
      name: 'Piña Colada',
      ingredients: 'Ron, crema de coco, jugo de piña, hielo',
      price: '$14.99',
      icon: '🥥',
      description: 'El sabor tropical que te transporta al paraíso'
    },
    {
      name: 'Margarita',
      ingredients: 'Tequila, triple sec, jugo de lima, sal de mar',
      price: '$13.99',
      icon: '🍋',
      description: 'Clásico mexicano con el equilibrio perfecto de sabores'
    },
    {
      name: 'Caipirinha',
      ingredients: 'Cachaça, lima fresca, azúcar morena',
      price: '$11.99',
      icon: '🇧🇷',
      description: 'El alma brasileña en cada sorbo'
    }
  ]

  const creaciones = [
    {
      name: 'Luna Mágica',
      ingredients: 'Ginebra premium, licor de violeta, jugo de limón, tónica',
      price: '$16.99',
      icon: '🌙',
      description: 'Nuestra creación más misteriosa con un toque floral único'
    },
    {
      name: 'Estrella Nocturna',
      ingredients: 'Vodka artesanal, licor de mora, agua tónica, limón',
      price: '$15.99',
      icon: '⭐',
      description: 'Un brillo especial para noches inolvidables'
    },
    {
      name: 'Amanecer Boliviano',
      ingredients: 'Singani, maracuyá, miel de abeja, hierbas andinas',
      price: '$18.99',
      icon: '🌅',
      description: 'Homenaje a los sabores autóctonos de nuestras tierras'
    },
    {
      name: 'Místico Andino',
      ingredients: 'Pisco, hoja de coca, lima, jarabe de goma, especias',
      price: '$17.99',
      icon: '🏔️',
      description: 'La fuerza ancestral de los Andes en tu copa'
    }
  ]

  return (
    <div className={`page-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="carta-header">
        <h1 className="coctel-title">Carta de Cócteles</h1>
        <p className="subtitle">Descubre nuestra selección de bebidas artesanales</p>
      </div>

      <section className="cocteles-section">
        <h2 className="coctel-title section-header">Clásicos Atemporales</h2>
        <div className="cocteles-grid">
          {clasicos.map((coctel, index) => (
            <div
              key={index}
              className="coctel-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="coctel-icon-container">
                <span className="coctel-icon">{coctel.icon}</span>
              </div>
              <div className="coctel-content">
                <h4 className="coctel-name">{coctel.name}</h4>
                <p className="coctel-description">{coctel.description}</p>
                <p className="coctel-ingredients">{coctel.ingredients}</p>
                <div className="coctel-footer">
                  <div className="coctel-price">{coctel.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cocteles-section">
        <h2 className="coctel-title section-header exclusive">Creaciones de la Casa</h2>
        <div className="cocteles-grid">
          {creaciones.map((coctel, index) => (
            <div
              key={index}
              className="coctel-card special"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="special-badge">Exclusivo</div>
              <div className="coctel-icon-container">
                <span className="coctel-icon">{coctel.icon}</span>
              </div>
              <div className="coctel-content">
                <h4 className="coctel-name">{coctel.name}</h4>
                <p className="coctel-description">{coctel.description}</p>
                <p className="coctel-ingredients">{coctel.ingredients}</p>
                <div className="coctel-footer">
                  <div className="coctel-price">{coctel.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CartaCocteles
