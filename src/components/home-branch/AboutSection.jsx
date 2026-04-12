import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Notre Histoire</h2>
            <p>Niché au cœur de la ville, Le Jardin Gourmand est un phare de l'excellence culinaire française depuis 2010. Notre nom reflète notre engagement à utiliser les meilleurs ingrédients de saison, provenant de fermes locales et de notre propre jardin d'herbes aromatiques.</p>
            <p>Chaque plat raconte une histoire de tradition, d'innovation et de passion. Nous pensons que dîner n'est pas seulement une question de nourriture—il s'agit de créer des souvenirs, de célébrer des moments et de savourer l'art de la cuisine française.</p>

            <div className="chef-quote">
              <h3>La Philosophie du Chef</h3>
              <p>"La cuisine est un acte d'amour. Chaque ingrédient est choisi avec soin, chaque technique affinée par des années de pratique. Au Jardin Gourmand, nous honorons les classiques tout en embrassant la créativité, pour que chaque assiette soit un chef-d'œuvre."</p>
              <span className="chef-name">— Chef Antoine Dubois</span>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop" alt="Chef preparing gourmet dish" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
