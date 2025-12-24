import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  const values = [
    {
      number: '01',
      title: 'Qualité des services',
      description: 'Un travail de qualité effectué par des collaborateurs expérimentés à votre disposition pour traiter vos différentes opérations.'
    },
    {
      number: '02',
      title: 'Relation de confiance',
      description: 'Échanger et travailler ensemble dans un environnement de confiance privilégié.'
    },
    {
      number: '03',
      title: 'Assurance qualité',
      description: 'Garantir la conformité de notre programme assurance qualité pour répondre aux objectifs de nos clients.'
    },
    {
      number: '04',
      title: 'Confidentialité & Transparence',
      description: 'Respect de la confidentialité des dossiers, des données, des documents transmis, des services rendus et de tous travaux réalisés.'
    },
    {
      number: '05',
      title: 'Propriété des résultats',
      description: "Les résultats de l'étude seront en la pleine maîtrise du client, il pourra en disposer comme il l'entend."
    },
    {
      number: '06',
      title: 'Respect des délais',
      description: 'Respect du calendrier prévu et des délais sans défavoriser la qualité des services.'
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="values-header">
          <h2>Nos valeurs et nos engagements</h2>
          <p className="values-subtitle">
            Eden France Consulting met à votre disposition toute son expérience et ses compétences pour vous aider 
            et vous conseiller dans les différentes étapes du développement de votre entreprise.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-title-row">
                <span className="value-number">{value.number}</span>
                <span className="value-separator">/</span>
                <h3 className="value-title">{value.title}</h3>
              </div>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
