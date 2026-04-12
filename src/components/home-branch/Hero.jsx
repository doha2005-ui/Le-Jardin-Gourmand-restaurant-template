import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Le Jardin Gourmand</h1>
        <p>L'excellence de la cuisine française alliée à l'élégance du terroir</p>
        <div className="hero-buttons">
          <a href="/menu" className="btn btn-primary">Voir le Menu</a>
          <a href="/reservation" className="btn btn-secondary">Réserver une Table</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
