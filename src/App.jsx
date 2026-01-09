import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import logo from './assets/img/logo-default-white.svg';
import logoDark from './assets/img/logo-default.svg';

// Import Home directly as it is the main entry point
import Home from './components/Home';

// Lazy load other components and layout pieces
const Footer = lazy(() => import('./components/Footer'));
const MentionsLegales = lazy(() => import('./components/MentionsLegales'));
const PlanDuSite = lazy(() => import('./components/PlanDuSite'));
const Rgpd = lazy(() => import('./components/Rgpd'));
const Cgu = lazy(() => import('./components/Cgu'));
const Cgv = lazy(() => import('./components/Cgv'));
const Presentation = lazy(() => import('./components/Presentation'));
const PartnersIcons = lazy(() => import('./components/PartnersIcons'));
const ValuesSection = lazy(() => import('./components/ValuesSection'));
import CookieBanner from './components/CookieBanner';
import SchemaOrg from './components/SchemaOrg';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eden France Consulting",
  "url": "https://edenfranceconsulting.com",
  "logo": "https://edenfranceconsulting.com/logo.png",
  "description": "Eden France Consulting propose des services de formation professionnelle, prestations administratives et comptables, conseil et accompagnement pour les TPE, PME et particuliers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 bis rue des Carrières",
    "addressLocality": "Fontenay sous Bois",
    "postalCode": "94120",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-9-86-65-71-02",
    "contactType": "customer service",
    "email": "contact@edenfranceconsulting.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/eden-france-consulting"
  ]
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync menu state with body class
  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  // Throttled scroll handling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
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
        element?.scrollIntoView({ behavior: 'smooth' });
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

  const renderContent = () => {
    switch (currentPage) {
      case 'mentions': return <MentionsLegales onBackToHome={() => navigateTo('home')} />;
      case 'sitemap': return <PlanDuSite onNavigate={navigateTo} />;
      case 'rgpd': return <Rgpd onBackToHome={() => navigateTo('home')} />;
      case 'cgu': return <Cgu onBackToHome={() => navigateTo('home')} />;
      case 'cgv': return <Cgv onBackToHome={() => navigateTo('home')} />;
      case 'presentation': return <Presentation onNavigate={navigateTo} />;
      default: return <Home />;
    }
  };

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <SchemaOrg data={schemaData} />
      <header className={`landing-header animated fadeInDown ${isScrolled || currentPage !== 'home' ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <img src={isScrolled || currentPage !== 'home' || isMenuOpen ? logoDark : logo} alt="Eden France Consulting" width="220" height="60" />
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#presentation" className={currentPage === 'presentation' ? 'active-btn' : ''} onClick={(e) => { e.preventDefault(); navigateTo('presentation'); }}>Présentation</a></li>
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

      <Suspense fallback={<div className="loading-fallback">Chargement...</div>}>
        {renderContent()}
        <Footer onNavigate={navigateTo} />
      </Suspense>
      <CookieBanner />
    </div>
  );
}

export default App;
