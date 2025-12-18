import React from 'react';
import '../Partners.css';
import iconBag from '../assets/img/widgets/bag-icone.svg';
import iconPen from '../assets/img/widgets/pencil-logo.svg';
import iconClip from '../assets/img/widgets/vecteezy_attachment-icon-for-website-symbol_6123098.svg';
import imgWoman from '../assets/img/970x647/32.jpg';
import imgMission from '../assets/img/970x647/35.jpg';
import imgServices from '../assets/img/970x647/34.jpg';

const Partners = () => {
    return (
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
                    <img src={iconPen} alt="Avocats" className="icon-card-icon icon-pen-large" />
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
    );
};

export default Partners;
