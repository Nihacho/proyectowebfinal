import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Stars from './components/Stars';
import Moon from './components/Moon';
import Title from './components/Title';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Combos from './components/Combos';
import CartaCocteles from './components/CartaCocteles';
import Reservas from './components/Reservas';
import RedesSociales from './components/RedesSociales';
import Footer from './components/Footer';
import './styles/main.css';

const Landing = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isScrollComplete, setIsScrollComplete] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      setIsScrollComplete(progress > 0.95);
    };
    window.addEventListener('scroll', handleScroll);
    document.body.style.minHeight = '100vh';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.height = 'auto';
    };
  }, []);

  React.useEffect(() => {
    const moon = document.getElementById('moon');
    const title = document.getElementById('main-title');
    if (moon) {
      const rotation = scrollProgress * 720;
      const scale = 1 + (scrollProgress * 1.5);
      moon.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      moon.style.transition = 'transform 0.2s';
      moon.style.cursor = isScrollComplete ? 'pointer' : 'default';
      moon.style.filter = isScrollComplete
        ? 'drop-shadow(0 0 30px rgba(255,255,255,0.8))'
        : 'none';
    }
    if (title) {
      const scale = 1 + (scrollProgress * 0.5);
      const baseColor = 255;
      const intensity = Math.floor(180 + scrollProgress * 75);
      const color = `rgb(${baseColor},${baseColor},${intensity})`;
      title.style.transform = `translate(-50%, -50%) scale(${scale})`;
      title.style.opacity = 0.7 + scrollProgress * 0.3;
      title.style.color = color;
      title.style.textShadow = scrollProgress > 0.95
        ? '0 0 40px #fff, 0 0 80px #00ffff, 0 0 120px #00ffff'
        : `0 0 ${10 + scrollProgress * 40}px #fff`;
      title.style.filter = scrollProgress > 0.95
        ? 'brightness(1.5)'
        : 'none';
    }
  }, [scrollProgress, isScrollComplete]);

  const goToHome = () => {
    if (isScrollComplete) navigate('/home');
  };

  return (
    <div className="landing-app">
      <Stars />
      <div className="content-layer">
        <Moon isClickable={isScrollComplete} onMoonClick={goToHome} />
        <Title isClickable={false} />
        {!isScrollComplete && (
          <div className="landing-indicator">
            Desliza hacia abajo para descubrir la experiencia Killay Bar
          </div>
        )}
        {isScrollComplete && (
          <div className="landing-indicator" style={{ color: '#fff', fontWeight: 'bold' }}>
            ¡Haz clic en la luna para entrar!
          </div>
        )}
      </div>
    </div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';
  const showFooter = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/carta-cocteles" element={<CartaCocteles />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/redes-sociales" element={<RedesSociales />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
