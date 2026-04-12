import React from 'react';

function GuestExperiences() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Expériences Client</h2>
          <p className="section-subtitle">Quelques mots de nos fidèles clients.</p>
        </div>

        <div className="card-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"Une perle absolue à Paris. Le Coq au Vin était cuit à la perfection et la sélection de vins est exquise. L'atmosphère nous a transportés directement à la campagne."</p>
            <div className="reviewer">
              <strong>Sophie Martinez</strong>
              <span>Client vérifié</span>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"Nous avons célébré notre anniversaire ici et c'était magique. Le personnel était incroyablement attentif sans être intrusif. Une véritable expérience de gastronomie mémorable."</p>
            <div className="reviewer">
              <strong>James &amp; Clara</strong>
              <span>Guides locaux</span>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"Je rêve encore de la Crème Brûlée. Le Chef Dubois est un maître. Hautement recommandé pour tous ceux qui apprécient la cuisine française authentique."</p>
            <div className="reviewer">
              <strong>Elise Dubois</strong>
              <span>Critique gastronomique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuestExperiences;
