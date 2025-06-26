import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import killaybarImg from '../assets/killaybar.png'

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const navigate = useNavigate()

  const navigationCards = [
    {
      id: 'combos',
      title: 'Combos Especiales',
      description: 'Ofertas exclusivas que combinan nuestros mejores cócteles con deliciosos aperitivos.',
      icon: '🍹',
      buttonText: 'Ver Combos',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      link: '/combos'
    },
    {
      id: 'carta',
      title: 'Carta de Cócteles',
      description: 'Explora nuestra amplia selección de cócteles clásicos y creaciones originales.',
      icon: '🍸',
      buttonText: 'Ver Carta',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      link: '/carta-cocteles'
    },
    {
      id: 'reservas',
      title: 'Reservas',
      description: 'Asegura tu mesa para una experiencia inolvidable en nuestro bar.',
      icon: '📅',
      buttonText: 'Reservar Mesa',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      link: '/reservas'
    },
    {
      id: 'social',
      title: 'Redes Sociales y Contacto',
      description: 'Mantente al día con nuestras últimas creaciones y eventos especiales.',
      icon: '📱',
      buttonText: 'Nuestras Redes',
      secondaryButton: 'Contacto',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
      link: '/redes-sociales'
    }
  ]

  const handleNavigation = (link) => {
    navigate(link)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(20, 184, 166, 0.3), 0 4px 20px rgba(0,0,0,0.8); }
            50% { text-shadow: 0 0 30px rgba(59, 130, 246, 0.7), 0 0 60px rgba(20, 184, 166, 0.5), 0 4px 25px rgba(0,0,0,0.8); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes subtleWave {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-6px); }
            40% { transform: translateY(3px); }
            60% { transform: translateY(-4px); }
            80% { transform: translateY(2px); }
          }
          @keyframes subtleFade {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }
        `
      }} />

      {/* Hero Section - Full Viewport Cover Image */}
      <div style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Full Cover Image */}
        <img
          src={killaybarImg}
          alt="Killay Bar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#f1f5f9',
          fontSize: '0.9rem',
          fontWeight: '500',
          animation: 'bounce 2s infinite',
          zIndex: 2,
          textShadow: '0 2px 8px rgba(0,0,0,0.7)'
        }}>
          <span style={{ marginBottom: '8px', letterSpacing: '1px' }}>DESCUBRE MÁS</span>
          <div style={{
            width: '2px',
            height: '30px',
            background: 'linear-gradient(to bottom, #f1f5f9, transparent)',
            borderRadius: '1px'
          }}></div>
        </div>
      </div>

      {/* Content Section - Visible on Scroll */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        minHeight: '100vh'
      }}>
        {/* Welcome Section */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 24px 60px',
          textAlign: 'center'
        }}>
          {/* Elegant Icon */}
          <div style={{
            fontSize: '4rem',
            marginBottom: '40px',
            animation: 'gentleFloat 4s ease-in-out infinite',
            filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
            position: 'relative'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #f8fafc, #cbd5e1, #60a5fa, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'glow 3s ease-in-out infinite'
            }}>🥃</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(3.2rem, 7vw, 6rem)',
            fontWeight: '200',
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#f8fafc',
            marginBottom: '32px',
            letterSpacing: '0.04em',
            lineHeight: '1',
            textShadow: '0 4px 10px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 1s ease-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <span style={{
              display: 'block',
              transform: 'scale(1.1)',
              marginBottom: '8px',
              animation: 'subtleWave 3.5s infinite ease-in-out',
              willChange: 'transform'
            }}>KILLAY</span>
            <span style={{
              fontSize: '0.7em',
              fontWeight: '300',
              opacity: '0.9',
              animation: 'subtleFade 3s infinite ease-in-out',
              willChange: 'opacity'
            }}>BAR</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: '300',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            marginBottom: '48px',
            letterSpacing: '0.06em',
            color: '#e2e8f0',
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 1s ease-out 0.3s both, subtleWave 4s infinite ease-in-out',
            position: 'relative',
            willChange: 'transform'
          }}>
            "Donde cada cóctel cuenta una historia"
            <span style={{
              display: 'block',
              marginTop: '12px',
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #60a5fa, transparent)',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}></span>
          </p>

          {/* Description */}
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            fontFamily: "'Inter', sans-serif",
            maxWidth: '680px',
            margin: '0 auto 40px',
            lineHeight: '1.7',
            color: '#f1f5f9',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 1s ease-out 0.6s both, subtleFade 4s infinite ease-in-out',
            letterSpacing: '0.02em',
            textAlign: 'justify',
            textAlignLast: 'center',
            paddingLeft: '20px',
            paddingRight: '20px',
            willChange: 'opacity'
          }}>
            Sumérgete en una experiencia sensorial única, donde la mixología artesanal se encuentra con la hospitalidad auténtica en cada sorbo.
          </p>
        </div>

        {/* Navigation Cards Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '60px 24px 80px',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3.2rem',
              fontWeight: '700',
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#f8fafc',
              marginBottom: '28px',
              letterSpacing: '0.05em',
              background: 'none',
              WebkitBackgroundClip: 'initial',
              WebkitTextFillColor: 'initial',
              backgroundClip: 'initial',
              textShadow: '0 4px 20px rgba(59, 130, 246, 0.18), 0 2px 8px rgba(0,0,0,0.28)',
              lineHeight: '1.1',
              animation: 'subtleWave 4s infinite ease-in-out',
              willChange: 'transform'
            }}>
              <span style={{
                display: 'inline-block',
                transform: 'perspective(300px) rotateX(5deg)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Explora Nuestro Mundo
              </span>
            </h2>

            <p style={{
              fontSize: '1.4rem',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: '300',
              letterSpacing: '0.03em',
              lineHeight: '1.4',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #cbd5e1 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 1s ease-out 0.3s both, subtleFade 4s infinite ease-in-out',
              marginBottom: '32px',
              position: 'relative',
              willChange: 'opacity'
            }}>
              ~ Cada experiencia está diseñada para despertar tus sentidos ~
            </p>

            <div style={{
              width: '120px',
              height: '3px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 25%, #14b8a6 75%, #34d399 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {navigationCards.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === card.id
                    ? card.gradient
                    : 'rgba(30, 41, 59, 0.8)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: hoveredCard === card.id
                    ? '2px solid rgba(255,255,255,0.3)'
                    : '2px solid rgba(71, 85, 105, 0.3)',
                  boxShadow: hoveredCard === card.id
                    ? '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(59, 130, 246, 0.3)'
                    : '0 8px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === card.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => handleNavigation(card.link)}
              >
                {/* Card glow effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  opacity: hoveredCard === card.id ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none'
                }}></div>

                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '24px',
                  textAlign: 'center',
                  transform: hoveredCard === card.id ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.4s ease',
                  filter: hoveredCard === card.id ? 'brightness(1.3)' : 'brightness(1)'
                }}>
                  {card.icon}
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#f8fafc',
                  marginBottom: '16px',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: hoveredCard === card.id ? 'rgba(255,255,255,0.95)' : '#cbd5e1',
                  lineHeight: '1.6',
                  marginBottom: '28px',
                  textAlign: 'center',
                  minHeight: '48px',
                  transition: 'color 0.3s ease'
                }}>
                  {card.description}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <button style={{
                    backgroundColor: hoveredCard === card.id
                      ? 'rgba(255,255,255,0.25)'
                      : 'rgba(59, 130, 246, 0.8)',
                    color: 'white',
                    border: hoveredCard === card.id
                      ? '2px solid rgba(255,255,255,0.4)'
                      : '2px solid transparent',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    transform: hoveredCard === card.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                    onClick={e => {
                      e.stopPropagation()
                      handleNavigation(card.link)
                    }}
                  >
                    {card.buttonText}
                  </button>

                  {card.secondaryButton && (
                    <button style={{
                      backgroundColor: 'rgba(20, 184, 166, 0.8)',
                      color: 'white',
                      border: '2px solid transparent',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(5px)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      transform: hoveredCard === card.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                      onClick={e => {
                        e.stopPropagation()
                        if (card.id === 'social') {
                          window.open('https://wa.me/59163916139', '_blank', 'noopener,noreferrer')
                        } else {
                          handleNavigation('/contacto')
                        }
                      }}
                    >
                      {card.secondaryButton}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
