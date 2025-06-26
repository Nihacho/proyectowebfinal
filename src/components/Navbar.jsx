import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efecto de scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/combos', label: 'Combos' },
    { path: '/carta-cocteles', label: 'Carta Cócteles' },
    { path: '/reservas', label: 'Reservas' },
    { path: '/redes-sociales', label: 'Redes Sociales' }
  ]

  return (
    <>
      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          @keyframes slideInFromTop {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideUnderline {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          
          @keyframes lunarGlow {
            0%, 100% {
              text-shadow: 0 0 8px rgba(148, 163, 184, 0.2);
            }
            50% {
              text-shadow: 0 0 12px rgba(148, 163, 184, 0.3);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.05;
            }
            50% {
              opacity: 0.08;
            }
          }

          .navbar-backdrop {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
          }

          .nav-button {
            position: relative;
            overflow: hidden;
          }

          .nav-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.1), transparent);
            transition: left 0.5s ease;
          }

          .nav-button:hover::before {
            left: 100%;
          }

          @media (max-width: 768px) {
            .nav-items {
              gap: 2px !important;
            }
            .nav-button {
              padding: 8px 12px !important;
              font-size: 0.8rem !important;
            }
          }

          @media (max-width: 480px) {
            .nav-items {
              gap: 1px !important;
            }
            .nav-button {
              padding: 6px 8px !important;
              font-size: 0.75rem !important;
            }
          }
        `
      }} />

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'rgba(15, 23, 42, 0.98)' 
          : 'rgba(15, 23, 42, 0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: scrolled 
          ? '1px solid rgba(148, 163, 184, 0.2)' 
          : '1px solid rgba(71, 85, 105, 0.15)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(148, 163, 184, 0.1)' 
          : '0 4px 16px rgba(0, 0, 0, 0.2)',
        animation: 'slideInFromTop 0.8s ease-out'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '72px' : '84px',
          transition: 'height 0.4s ease'
        }}>
          {/* Logo/Brand */}
          <div 
            onClick={() => navigate('/home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.filter = 'drop-shadow(0 2px 6px rgba(148, 163, 184, 0.15))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.filter = 'none'
            }}
          >
            <div style={{
              fontSize: scrolled ? '2rem' : '2.4rem',
              transition: 'font-size 0.4s ease',
              animation: 'lunarGlow 6s ease-in-out infinite'
            }}>
              🌙
            </div>
            <div style={{
              fontSize: scrolled ? '1.5rem' : '1.8rem',
              fontWeight: '600',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 50%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              transition: 'font-size 0.4s ease',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Killay Bar
            </div>
          </div>

          {/* Navigation Items - Always Visible */}
          <ul className="nav-items" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: 1,
            justifyContent: 'center'
          }}>
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path
              return (
                <li 
                  key={item.path}
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <button
                    className="nav-button"
                    onClick={() => navigate(item.path)}
                    style={{
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(148, 163, 184, 0.08) 0%, rgba(203, 213, 225, 0.05) 100%)' 
                        : 'transparent',
                      border: isActive 
                        ? '1px solid rgba(148, 163, 184, 0.15)' 
                        : '1px solid transparent',
                      color: isActive ? '#e2e8f0' : '#94a3b8',
                      textDecoration: 'none',
                      padding: '14px 24px',
                      borderRadius: '16px',
                      fontSize: '0.92rem',
                      fontWeight: isActive ? '600' : '500',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.02em',
                      textTransform: 'capitalize',
                      boxShadow: isActive 
                        ? '0 2px 8px rgba(148, 163, 184, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                        : 'none',
                      backdropFilter: isActive ? 'blur(10px)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.target.style.color = '#cbd5e1'
                        e.target.style.background = 'rgba(148, 163, 184, 0.06)'
                        e.target.style.borderColor = 'rgba(148, 163, 184, 0.12)'
                        e.target.style.transform = 'translateY(-1px)'
                        e.target.style.boxShadow = '0 3px 12px rgba(148, 163, 184, 0.08)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.target.style.color = '#94a3b8'
                        e.target.style.background = 'transparent'
                        e.target.style.borderColor = 'transparent'
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = 'none'
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    
                    {/* Enhanced Animated underline with glow effect */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent 0%, #94a3b8 20%, #cbd5e1 50%, #94a3b8 80%, transparent 100%)',
                        borderRadius: '2px',
                        width: '80%',
                        animation: 'slideUnderline 0.6s ease-out',
                        boxShadow: '0 0 12px rgba(148, 163, 184, 0.6), 0 2px 4px rgba(148, 163, 184, 0.3)'
                      }}></div>
                    )}

                    {/* Subtle background pulse effect for active item */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(148, 163, 184, 0.05) 0%, transparent 70%)',
                        borderRadius: '16px',
                        animation: 'lunarGlow 3s ease-in-out infinite',
                        pointerEvents: 'none'
                      }}></div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Spacer para evitar que el contenido se oculte bajo el navbar fijo */}
      <div style={{ height: scrolled ? '72px' : '84px' }}></div>
    </>
  )
}

export default Navbar