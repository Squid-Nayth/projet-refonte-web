import React, { useState, useEffect } from 'react';
import './App.css';
import './Services.css';
import logo from './assets/img/logo-default-white.svg';
import logoDark from './assets/img/logo-default.svg';
import logoQualiopi from './assets/img/LogoQualiopi-300dpi-Avec-Marianne.svg';
import iconFb from './assets/img/widgets/facebook-svgrepo-com.svg';
import iconGplus from './assets/img/widgets/google-plus-g-svgrepo-com.svg';
import './Partners.css';
import './Footer.css';

// Lazy load all components for better main-thread performance
const Home = React.lazy(() => import('./components/Home'));
const MentionsLegales = React.lazy(() => import('./components/MentionsLegales'));
const PlanDuSite = React.lazy(() => import('./components/PlanDuSite'));
const Rgpd = React.lazy(() => import('./components/Rgpd'));
const Cgu = React.lazy(() => import('./components/Cgu'));
const Cgv = React.lazy(() => import('./components/Cgv'));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync menu state with body class
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  // Throttled scroll handling to avoid long tasks
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          setIsScrolled(offset > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, section = null) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleNavClick = (e, target) => {
    setIsMenuOpen(false);
    if (currentPage !== 'home') {
      e.preventDefault();
      navigateTo('home', target.substring(1));
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'mentions':
        return <MentionsLegales onBackToHome={() => navigateTo('home')} />;
      case 'sitemap':
        return <PlanDuSite onNavigate={navigateTo} />;
      case 'rgpd':
        return <Rgpd onBackToHome={() => navigateTo('home')} />;
      case 'cgu':
        return <Cgu onBackToHome={() => navigateTo('home')} />;
      case 'cgv':
        return <Cgv onBackToHome={() => navigateTo('home')} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className={`landing-header animated fadeInDown ${isScrolled || currentPage !== 'home' ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <img src={isScrolled || currentPage !== 'home' || isMenuOpen ? logoDark : logo} alt="Eden France Consulting" width="220" height="60" />
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#presentation" onClick={(e) => handleNavClick(e, '#presentation')}>Présentation</a></li>
            <li className="nav-item"><a href="#missions" onClick={(e) => handleNavClick(e, '#missions')}>Nos Missions</a></li>
            <li className="nav-item"><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Nos Services</a></li>
            <li className="nav-item"><a href="#formations" onClick={(e) => handleNavClick(e, '#formations')}>Formations</a></li>
            <li className="nav-item"><a href="#vae" onClick={(e) => handleNavClick(e, '#vae')}>VAE</a></li>
            <li className="nav-item"><a href="#bilan" onClick={(e) => handleNavClick(e, '#bilan')}>Bilan de compétences</a></li>
            <li className="nav-item"><a href="#particuliers" onClick={(e) => handleNavClick(e, '#particuliers')}>Particuliers</a></li>
            <li className="nav-item"><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <React.Suspense fallback={<div className="loading-fallback">Chargement...</div>}>
        {renderContent()}
      </React.Suspense>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-col">
              <h3 className="footer-heading">Eden France Consulting</h3>
              <p className="footer-text">
                Prestations Administratives & Comptables<br />
                Conseil . Assistance . Diagnostic . Accompagnement TPE / PME
              </p>

              <h3 className="footer-heading footer-subheading">Suivez nous !</h3>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <img src={iconFb} alt="Facebook" width="24" height="24" loading="lazy" />
                </a>
                <a href="#" className="social-icon">
                  <img src={iconGplus} alt="Google Plus" width="24" height="24" loading="lazy" />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Contact Info</h3>
              <p className="footer-text">
                09 86 65 71 02<br />
                contact@edenfranceconsulting.com
              </p>
              <p className="footer-text">
                Du lundi au vendredi : 9:00 - 19:00<br />
                Samedi : Sur rdv 9:00 - 17:00 / Dimanche : Fermé
              </p>
              <div className="qualiopi-container">
                <img src={logoQualiopi} alt="Qualiopi Processus certifié - République Française" className="qualiopi-logo" width="150" height="75" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="copyright">Copyright © 2016-2025 Eden France Consulting</span>
            <div className="footer-links">
              <span onClick={() => navigateTo('mentions')} style={{ cursor: 'pointer' }}>Mentions légales</span>
              <span className="separator">|</span>
              <span onClick={() => navigateTo('sitemap')} style={{ cursor: 'pointer' }}>Plan du site</span>
              <span className="separator">|</span>
              <span onClick={() => navigateTo('rgpd')} style={{ cursor: 'pointer' }}>RGPD</span>
              <span className="separator">|</span>
              <span onClick={() => navigateTo('cgu')} style={{ cursor: 'pointer' }}>CGU</span>
              <span className="separator">|</span>
              <span onClick={() => navigateTo('cgv')} style={{ cursor: 'pointer' }}>CGV</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
