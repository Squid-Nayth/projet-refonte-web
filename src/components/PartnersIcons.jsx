import React from 'react';
import './PartnersIcons.css';
import iconBag from '../assets/img/widgets/bag-icone.svg';
import iconPen from '../assets/img/widgets/pencil-logo.svg';
import iconClip from '../assets/img/widgets/vecteezy_attachment-icon-for-website-symbol_6123098.svg';

const PartnersIcons = () => {
  return (
    <section className="partners-icons-section">
      <div className="container">
        <div className="partners-icons-grid">
          <div className="partner-icon-card">
            <img src={iconBag} alt="Cabinets" className="partner-icon" width="60" height="60" loading="lazy" />
            <h3 className="partner-icon-title">CABINETS</h3>
            <p className="partner-icon-desc">Expertises comptables & Commissaires aux comptes</p>
          </div>

          <div className="partner-icon-card">
            <img src={iconPen} alt="Avocats" className="partner-icon" width="60" height="60" loading="lazy" />
            <h3 className="partner-icon-title">AVOCATS</h3>
            <p className="partner-icon-desc">Spécialisés en droit Social, du Travail, Fiscal & Droit des Affaires</p>
          </div>

          <div className="partner-icon-card">
            <img src={iconClip} alt="Assistance" className="partner-icon" width="60" height="60" loading="lazy" />
            <h3 className="partner-icon-title">ASSISTANCE ADMINISTRATIVE & JURIDIQUE</h3>
            <p className="partner-icon-desc">Assistance Administrative & Secrétariat juridique</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersIcons;
