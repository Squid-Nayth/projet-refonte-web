import React from 'react';
import '../Services.css';
import lightbulb from '../assets/img/widgets/lightbulble 3.svg';
import documentIcon from '../assets/img/widgets/vecteezy_document-icon-template-black-color-editable-document-icon_6692271.svg';
import globe from '../assets/img/widgets/globe-2.svg';

const Services = () => {
    return (
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
    );
};

export default Services;
