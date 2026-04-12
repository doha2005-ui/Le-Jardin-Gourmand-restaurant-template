import React from 'react';

function ChefSignatures() {
  return (
    <section id="signatures" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Les Signatures du Chef</h2>
          <p className="section-subtitle">Un aperçu de nos créations les plus appréciées.</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-image">
              <img src="/image/coq_au_vin.png" alt="Coq au Vin" />
            </div>
            <div className="card-body">
              <h3>Coq au Vin</h3>
              <p>Poulet braisé au vin rouge avec champignons et oignons grelots.</p>
              <span className="price">32 €</span>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/image/boeuf_bourguignon.png" alt="Boeuf Bourguignon" />
            </div>
            <div className="card-body">
              <h3>Boeuf Bourguignon</h3>
              <p>Bœuf mijoté au vin de Bourgogne avec légumes racines.</p>
              <span className="price">38 €</span>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/image/creme_brulee.png" alt="Crème Brûlée" />
            </div>
            <div className="card-body">
              <h3>Crème Brûlée</h3>
              <p>Crème pâtissière à la vanille avec sa croûte de sucre caramélisé.</p>
              <span className="price">12 €</span>
            </div>
          </div>
        </div>

        <div className="center-btn-container">
          <a href="/menu" className="btn btn-outline">Découvrir tout le Menu</a>
        </div>
      </div>
    </section>
  );
}

export default ChefSignatures;
