import React from 'react';
import '../Footer.css';
import logoQualiopi from '../assets/img/LogoQualiopi-300dpi-Avec-Marianne.png';
import iconFb from '../assets/img/widgets/facebook-svgrepo-com.svg';
import iconGplus from '../assets/img/widgets/google-plus-g-svgrepo-com.svg';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-columns">
                    {/* Column 1: Eden France Consulting Info */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Eden France Consulting</h3>
                        <p className="footer-text">
                            Prestations Administratives & Comptables<br />
                            Conseil . Assistance . Diagnostic . Accompagnement TPE / PME
                        </p>

                        <h3 className="footer-heading footer-subheading">Suivez nous !</h3>
                        <div className="social-links">
                            <a href="#" className="social-icon">
                                <img src={iconFb} alt="Facebook" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src={iconGplus} alt="Google Plus" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
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
                            <img src={logoQualiopi} alt="Qualiopi Processus certifié - République Française" className="qualiopi-logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <span className="copyright">Copyright © 2016-2025 Eden France Consulting</span>
                    <div className="footer-links">
                        <a href="#">Mentions légales</a>
                        <span className="separator">|</span>
                        <a href="#">Plan du site</a>
                        <span className="separator">|</span>
                        <a href="#">RGPD</a>
                        <span className="separator">|</span>
                        <a href="#">CGU</a>
                        <span className="separator">|</span>
                        <a href="#">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
