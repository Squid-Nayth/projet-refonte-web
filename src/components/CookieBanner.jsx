import React, { useState, useEffect } from 'react';
import '../css/CookieBanner.css'; // Ensure you have this file created as per previous step

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('consent'); // 'consent' | 'about'
    const [consent, setConsent] = useState({
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false
    });

    // Check for existing consent on mount
    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie_consent');
        if (!savedConsent) {
            setIsVisible(true);
        } else {
            // If consent exists, apply it (tracking logic here)
            const parsed = JSON.parse(savedConsent);
            setConsent(parsed); // Restore state
            if (parsed.analytics) startAnalytics();
        }
    }, []);

    const startAnalytics = () => {
        console.log("Analytics/User Journey Tracking Started");
        // Simulate setting a user journey cookie
        if (!document.cookie.includes('user_journey_id')) {
            const journeyId = 'uj_' + Math.random().toString(36).substr(2, 9);
            document.cookie = `user_journey_id=${journeyId}; path=/; max-age=31536000`; // 1 year
        }
    };

    const clearCookies = () => {
        // Helper to clear non-essential cookies
        document.cookie.split(";").forEach((c) => {
            if (!c.trim().startsWith('user_journey_id')) return; // Example filter
            // In reality, clearing cookies from JS is tricky without domain/path, but we can try common ones
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        console.log("Cookies cleared/Refused");
    };

    const handleSave = (type) => {
        let newConsent = { ...consent, timestamp: new Date().toISOString() };

        if (type === 'all') {
            newConsent = { ...newConsent, preferences: true, analytics: true, marketing: true };
        } else if (type === 'essential') {
            newConsent = { ...newConsent, preferences: false, analytics: false, marketing: false };
        } else if (type === 'selection') {
            // Use current state of switches
        } else if (type === 'refuse') {
            newConsent = { necessary: true, preferences: false, analytics: false, marketing: false, refused: true };
            clearCookies();
        }

        localStorage.setItem('cookie_consent', JSON.stringify(newConsent));
        // Also save as cookie to satisfy specific user request
        document.cookie = `cookie_consent_status=${type}; path=/; max-age=31536000; SameSite=Lax`;

        setConsent(newConsent);

        if (newConsent.analytics) {
            startAnalytics();
        }

        // Close the banner logic
        // User requirement: "refuser ... par contre le bandeau se réaffichera sur toutes les pages du site"
        // Interpretation: The banner minimizes or is accessible. 
        // We will hide the main modal but always show the 'Reopen' button if the user wants to change settings.
        setIsVisible(false);
    };

    const toggleSwitch = (key) => {
        if (key === 'necessary') return;
        setConsent(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // If visible is false, show small icon? Or nothing?
    // We will always render the Reopen button if the banner is closed, to satisfy "accessible on all pages"

    return (
        <>
            {/* Reopen Button (Always valid to access settings) */}
            {!isVisible && (
                <div
                    className="cookie-reopen"
                    onClick={() => setIsVisible(true)}
                    title="Gérer les cookies"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                    </svg>
                </div>
            )}

            {isVisible && (
                <div className="cookie-overlay">
                    <div className="cookie-modal animated fadeInUp">
                        <div className="cookie-header">
                            <div className="cookie-logo-area">
                                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary-color)' }}>EDEN FRANCE CONSULTING</span>
                            </div>
                            <div className="cookie-powered">
                                Conforme RGPD
                            </div>
                        </div>

                        <div className="cookie-tabs">
                            <div
                                className={`cookie-tab ${activeTab === 'consent' ? 'active' : ''}`}
                                onClick={() => setActiveTab('consent')}
                            >
                                Consentement
                            </div>
                            <div
                                className={`cookie-tab ${activeTab === 'about' ? 'active' : ''}`}
                                onClick={() => setActiveTab('about')}
                            >
                                À propos des cookies
                            </div>
                        </div>

                        <div className="cookie-content">
                            {activeTab === 'consent' && (
                                <>
                                    <div className="cookie-title">Votre confidentialité est importante</div>
                                    <div className="cookie-text">
                                        Nous et nos partenaires stockons et accédons à des informations sur votre appareil (comme les cookies) pour traiter des données personnelles (comme les identifiants uniques) afin de personnaliser les annonces et le contenu, de mesurer les performances des annonces et du contenu, et de recueillir des informations sur l'audience.
                                        <br /><br />
                                        Cliquez sur "Accepter tous les cookies" pour consentir à toutes les technologies, ou sur "Accepter les cookies essentiels" pour refuser les cookies non nécessaires.
                                    </div>


                                </>
                            )}

                            {activeTab === 'about' && (
                                <>
                                    <div className="cookie-title">Déclaration relative aux cookies</div>
                                    <div className="cookie-text">
                                        Ce site web utilise des cookies. Les cookies sont des petits fichiers textes qui peuvent être utilisés par les sites web pour rendre l'expérience utilisateur plus efficace.
                                        <br /><br />
                                        La loi stipule que nous ne pouvons stocker des cookies sur votre appareil que s'ils sont strictement nécessaires au fonctionnement de ce site. Pour tous les autres types de cookies, nous avons besoin de votre permission.
                                        <br /><br />
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="cookie-actions">
                            <button className="cookie-btn refuse" onClick={() => handleSave('refuse')}>
                                Refuser
                            </button>
                            <button className="cookie-btn primary" style={{ backgroundColor: '#003066' }} onClick={() => handleSave('essential')}>
                                Accepter essentiels
                            </button>
                            <button className="cookie-btn primary" onClick={() => handleSave('all')}>
                                Accepter tous les cookies
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieBanner;
