import React from 'react';
import '../Footer.css';
import iconFb from '../assets/img/widgets/facebook-svgrepo-com.svg';
import iconGplus from '../assets/img/widgets/google-plus-g-svgrepo-com.svg';
import logoQualiopi from '../assets/img/LogoQualiopi-300dpi-Avec-Marianne.svg';

const Footer = ({ onNavigate }) => {
    return (
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
                    <span className="copyright">Copyright © 2016-2026 Eden France Consulting</span>
                    <div className="footer-links">
                        <span onClick={() => onNavigate('mentions')} style={{ cursor: 'pointer' }}>Mentions légales</span>
                        <span className="separator">|</span>
                        <span onClick={() => onNavigate('sitemap')} style={{ cursor: 'pointer' }}>Plan du site</span>
                        <span className="separator">|</span>
                        <span onClick={() => onNavigate('rgpd')} style={{ cursor: 'pointer' }}>RGPD</span>
                        <span className="separator">|</span>
                        <span onClick={() => onNavigate('cgu')} style={{ cursor: 'pointer' }}>CGU</span>
                        <span className="separator">|</span>
                        <span onClick={() => onNavigate('cgv')} style={{ cursor: 'pointer' }}>CGV</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
