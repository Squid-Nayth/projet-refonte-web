import React from 'react';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            {/* Background with Overlay */}
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

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
    );
};

export default Hero;
