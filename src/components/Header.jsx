import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo-default-white.png';
import logoDark from '../assets/img/logo-default.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`landing-header animated fadeInDown ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <img src={isScrolled ? logoDark : logo} alt="Eden France Consulting" />
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
    );
};

export default Header;
