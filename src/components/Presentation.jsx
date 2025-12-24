import React from 'react';
import './Presentation.css';
import ValuesSection from './ValuesSection';
import PartnersIcons from './PartnersIcons';
import heroBg from '../assets/img/970x647/32.webp';
import contentImg from '../assets/img/970x970/01.webp';

const Presentation = ({ onNavigate }) => {
  return (
    <div className="presentation-page animated fadeIn">
      {/* Hero Section */}
      <section className="presentation-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="presentation-hero-overlay"></div>
        <div className="container">
            <h1>Eden France Consulting</h1>
            <p>Conseil & Expertise</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="breadcrumbs-section">
        <div className="breadcrumbs-content">
            <h2>Présentation</h2>
            <div className="breadcrumbs-links">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Accueil</a> / <span className="current">Présentation</span>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="presentation-content">
        <div className="container">
            <div className="row">
                <div className="col-text">
                    <h2>Présentation de notre société</h2>
                    <h3 className="subtitle">
                        Formation professionnelle<br/>
                        Conseil Administratif / RH & Comptable pour<br/>
                        les TPE / PME & Particuliers
                    </h3>
                    <div className="text-content">
                        <p>
                            Dans un environnement de plus en plus complexe, le chef d'entreprise doit pouvoir s'entourer d'un conseil disponible et réactif. Ainsi, nous mettons à votre disposition toute notre expérience et nos compétences pour vous aider et vous conseiller dans les différentes étapes du développement de votre entreprise.
                        </p>
                        <p>
                            Dans cet objectif, nous intervenons dans les domaines de la Gestion Administrative/ RH / Comptable de votre entité ainsi que, l'évaluation financière et le conseil de toute nature (social, fiscal, juridique).
                        </p>
                        <p>
                            Nos interlocuteurs privilégiés sont les TPE, PME, Particuliers qui entreprennent et se réalisent dans divers secteurs d'activité : Commercial, Industriel, Professions Libérales, Artisanal, Associatif.
                        </p>
                    </div>
                </div>
                <div className="col-img">
                    <img src={contentImg} alt="Consulting hands working on documents" width="970" height="647" loading="lazy" />
                </div>
            </div>
        </div>
      </section>

      <ValuesSection />
      <PartnersIcons />
    </div>
  );
};

export default Presentation;
