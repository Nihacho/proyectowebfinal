import React, { useState, useEffect } from 'react';
import { combosData } from './CombosData';
import '../styles/combos.css';

const Combos = () => {
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredCombos = filterType === 'all' 
    ? combosData 
    : combosData.filter(combo => combo.type === filterType);

  const handleComboSelect = (combo) => {
    setSelectedCombo(selectedCombo?.id === combo.id ? null : combo);
  };

  const handleOrder = (combo) => {
    alert(`¡Excelente elección! Has seleccionado el ${combo.name}. Te contactaremos pronto para confirmar tu pedido.`);
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      paddingTop: '2rem',
      paddingBottom: '4rem'
    }}>
      <div className="page-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" style={{ animation: 'fadeInScale 0.8s ease-out' }}>
          <div className="text-6xl mb-4" style={{ animation: 'lunarGlow 6s ease-in-out infinite' }}>
            🌙✨
          </div>
          <h1 className="combo-title text-4xl md:text-5xl lg:text-6xl mb-6">
            Combos Especiales Killay
          </h1>
          <p className="combo-description max-w-3xl mx-auto">
            Disfruta de nuestras ofertas especiales diseñadas para crear momentos únicos bajo la luna. Desde experiencias clásicas hasta espectáculos de flair bartending que te dejarán sin aliento.
          </p>
        </div>

        {/* Elimino el filtro de opciones de combos */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12" style={{ animation: 'fadeInScale 0.8s ease-out 0.2s both' }}>
          {filterOptions.map((option, index) => (
            <button
              key={option.value}
              onClick={() => setFilterType(option.value)}
              className={`filter-button px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filterType === option.value
                  ? 'bg-slate-700 border-slate-500 text-slate-100'
                  : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/70'
              }`}
              style={{
                border: '1px solid',
                backdropFilter: 'blur(10px)',
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInScale 0.6s ease-out both'
              }}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCombos.map((combo, index) => (
            <div
              key={combo.id}
              className={`cocktail-card relative ${combo.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {combo.popular && (
                <div className="popular-badge">⭐ Más Popular</div>
              )}

              {combo.discount && (
                <div className="discount-badge">-{combo.discount} OFF</div>
              )}

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <span className="combo-emoji">{combo.image}</span>
                  <h3 className="combo-title text-2xl">{combo.name}</h3>
                  {combo.exclusive && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-4">
                      <span>👑</span> Experiencia Exclusiva
                    </div>
                  )}
                </div>

                <p className="combo-description">
                  {combo.description}
                </p>

                <div className="text-center mb-6">
                  <div className="price-badge inline-flex items-center gap-2">
                    <span className="combo-original-price">{combo.originalPrice}</span>
                    <span className="combo-price">{combo.price}</span>
                  </div>
                  {combo.discount && (
                    <p className="combo-discount">
                      ¡Ahorra {combo.discount}!
                    </p>
                  )}
                </div>

                <div className="text-center mb-20 mt-10">
                  <button
                    onClick={() => handleComboSelect(combo)}
                    className="interaction-button text-sm"
                  >
                    {selectedCombo?.id === combo.id ? 'Ocultar Detalles' : 'Ver Detalles'}
                  </button>
                </div>

                {selectedCombo?.id === combo.id && (
                  <div className="combo-details-card mt-12 p-6 rounded-2xl" style={{
                    animation: 'fadeInScale 0.4s ease-out',
                    backdropFilter: 'blur(16px)'
                  }}>
                    <h4 className="combo-details-title text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>🍸</span> Cócteles Incluidos:
                    </h4>
                    <ul className="combo-details-list cocktail-list">
                      {combo.cocktails.map((cocktail, idx) => (
                        <li key={idx}>{cocktail}</li>
                      ))}
                    </ul>

                    <h4 className="combo-details-title text-lg font-semibold mb-4 mt-6 flex items-center gap-2">
                      <span>✨</span> Características:
                    </h4>
                    <ul className="combo-details-list space-y-2">
                      {combo.features.map((feature, idx) => (
                        <li key={idx} className="combo-details-feature flex items-center gap-3">
                          <span className="combo-details-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Elimino el botón de 'Ordenar Ahora' de cada card */}
                {/* <div className="text-center mt-6">
                  <button
                    onClick={() => handleOrder(combo)}
                    className="interaction-button primary w-full"
                  >
                    <span className="mr-2">🛒</span>
                    Ordenar Ahora
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Elimino la sección de promoción de Flair Bartending */}
      </div>
    </div>
  );
};

export default Combos;
