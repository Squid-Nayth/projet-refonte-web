import React from 'react';
import './App.css';
import './Services.css';
import logo from './assets/img/logo-default-white.png';
import lightbulb from './assets/img/widgets/lightbulble 3.svg';
import documentIcon from './assets/img/widgets/vecteezy_document-icon-template-black-color-editable-document-icon_6692271.svg';
import globe from './assets/img/widgets/globe-2.svg';
import iconBag from './assets/img/widgets/bag-icone.svg';
import iconPen from './assets/img/widgets/pencil-logo.svg';
import iconClip from './assets/img/widgets/vecteezy_attachment-icon-for-website-symbol_6123098.svg';
import imgWoman from './assets/img/970x647/35.jpg';
import imgMission from './assets/img/970x647/32.jpg';
import imgServices from './assets/img/970x647/33.jpg';
import './Partners.css';

function App() {
  return (
    <div className="app-container">
      <div className="hero-wrapper">
        {/* Background with Overlay */}
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        {/* Header */}
        <header className="landing-header animated fadeInDown">
          <div className="logo-container">
            <img src={logo} alt="Eden France Consulting" />
          </div>
          <nav>
            <ul className="nav-menu">
              <li className="nav-item"><a href="#presentation">Présentation</a></li>
              <li className="nav-item"><a href="#missions">Nos Missions</a></li>
              <li className="nav-item"><a href="#services">Nos Services</a></li>
              <li className="nav-item"><a href="#formations">Formations</a></li>
              <li className="nav-item"><a href="#vae">VAE</a></li>
              <li className="nav-item"><a href="#bilan">Bilan de compétences</a></li>
              <li className="nav-item"><a href="#particuliers">Particuliers</a></li>
              <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="hero-content animated fadeInUp">
          <h1 className="main-title">Eden France Consulting</h1>
          <div className="services-list">
            <p className="service-item">Formation professionnelle</p>
            <p className="service-item">Prestations Administratives & Comptables</p>
            <p className="service-item">Conseil . Assistance . Diagnostic . Accompagnement</p>
            <p className="service-item">TPE / PME & Particuliers</p>
          </div>
        </main>
      </div>

      {/* Services Widgets Section */}
      <section id="services" className="services-section">
        <div className="services-header">
          <h2>Conseil Administratif & Comptable pour les TPE / PME & Particuliers</h2>
          <p className="services-subtitle">
            Eden France Consulting met à votre disposition toute son expérience et ses compétences pour vous aider<br />
            et vous conseiller dans les différentes étapes du développement de votre entreprise.
          </p>
        </div>

        <div className="widgets-container">
          {/* Connector Line */}
          <div className="widgets-connector"></div>

          {/* Widget 1: Assistance */}
          <div className="widget-item">
            <div className="widget-icon-circle">
              <img src={lightbulb} alt="Assistance" className="widget-icon" />
            </div>
            <h3>Assistance</h3>
            <p className="widget-desc">
              Nous sommes à votre disposition et à votre<br />
              écoute afin de vous proposer les meilleurs<br />
              services
            </p>
          </div>

          {/* Widget 2: Diagnostic */}
          <div className="widget-item">
            <div className="widget-icon-circle">
              <img src={documentIcon} alt="Diagnostic" className="widget-icon" />
            </div>
            <h3>Diagnostic</h3>
            <p className="widget-desc">
              Définir et trouver ensemble les solutions<br />
              adaptées à vos besoins
            </p>
          </div>

          {/* Widget 3: Accompagnement */}
          <div className="widget-item">
            <div className="widget-icon-circle">
              <img src={globe} alt="Accompagnement" className="widget-icon" />
            </div>
            <h3>Accompagnement</h3>
            <p className="widget-desc">
              Nous vous accompagnons tout au long de votre<br />
              parcours de façon régulière ou ponctuelle selon<br />
              nos engagements
            </p>
          </div>
        </div>

        <div className="footer-note">
          <p>
            Notre valeur ajoutée est la diversité des tâches exécutées dans le domaine Administratif / RH & Comptable Gestion et Paie, avec des professionnels du Droit Social et<br />
            du Droit du Travail, et ce dans divers environnements conventionnels. Ce qui nous permet d'être très réactifs et surtout extrêmement polyvalents
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners-section">
        <div className="partners-header">
          <h2>Eden France Consulting & ses Partenaires</h2>
          <p className="partners-subtitle">
            Nous intervenons dans les domaines Administratifs, RH, Comptables, la Gestion, l'Audit, et le Commissariat aux comptes.<br />
            Ainsi que le Conseil de toute nature (social, juridique, fiscal).
          </p>
        </div>

        <div className="partners-grid">
          {/* Row 1: Image Cards */}
          <div className="partner-card">
            <div className="image-card-img-container">
              <img src={imgWoman} alt="Notre société" className="image-card-img" />
            </div>
            <div className="image-card-content">
              <h3 className="image-card-title">Notre société</h3>
              <p className="image-card-subtitle">Qui sommes nous ?</p>
              <div className="card-divider"></div>
              <p className="image-card-footer">CONSEIL & EXPERTISE</p>
            </div>
          </div>

          <div className="partner-card">
            <div className="image-card-img-container">
              <img src={imgMission} alt="Nos missions" className="image-card-img" />
            </div>
            <div className="image-card-content">
              <h3 className="image-card-title">Nos missions</h3>
              <p className="image-card-subtitle">Consultez nous</p>
              <div className="card-divider"></div>
              <p className="image-card-footer">ACCOMPAGNEMENT & ASSISTANCE</p>
            </div>
          </div>

          <div className="partner-card">
            <div className="image-card-img-container">
              <img src={imgServices} alt="Nos services" className="image-card-img" />
            </div>
            <div className="image-card-content">
              <h3 className="image-card-title">Nos services</h3>
              <p className="image-card-subtitle">Définition de vos objectifs</p>
              <div className="card-divider"></div>
              <p className="image-card-footer">ADMINISTRATIF ET COMPTABLE</p>
            </div>
          </div>

          {/* Row 2: Icon Cards */}
          <div className="partner-card icon-card">
            <img src={iconBag} alt="Cabinets" className="icon-card-icon" />
            <h3 className="icon-card-title">CABINETS</h3>
            <p className="icon-card-desc">Expertises comptables & Commissaires aux comptes</p>
          </div>

          <div className="partner-card icon-card">
            <img src={iconPen} alt="Avocats" className="icon-card-icon" />
            <h3 className="icon-card-title">AVOCATS</h3>
            <p className="icon-card-desc">Spécialisés en droit Social, du Travail, Fiscal & Droit des Affaires</p>
          </div>

          <div className="partner-card icon-card">
            <img src={iconClip} alt="Assistance" className="icon-card-icon" />
            <h3 className="icon-card-title">ASSISTANCE<br />ADMINISTRATIVE &<br />JURIDIQUE</h3>
            <p className="icon-card-desc">Assistance Administrative & Secrétariat juridique</p>
          </div>
        </div>

        <div className="cta-banner">
          <h2 className="cta-title">Des collaborateurs expérimentés au service des entreprises</h2>
          <p className="cta-subtitle">Eden France Consulting vous propose des solutions rapides et efficaces afin de répondre à vos attentes</p>
          <a href="#contact" className="cta-button">Contactez nous</a>
        </div>
      </section>
    </div>
  );
}

export default App;
