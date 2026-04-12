function ChefSignatures() {
  return (
    <section id="signatures" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Chef's Signatures</h2>
          <p className="section-subtitle">A taste of our most beloved creations.</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop" alt="Coq au Vin" />
            </div>
            <div className="card-body">
              <h3>Coq au Vin</h3>
              <p>Braised chicken in red wine with mushrooms and pearl onions.</p>
              <span className="price">€32</span>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop" alt="Boeuf Bourguignon" />
            </div>
            <div className="card-body">
              <h3>Boeuf Bourguignon</h3>
              <p>Slow-cooked beef in Burgundy wine with root vegetables.</p>
              <span className="price">€38</span>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1488477181946-6428a029177b?w=600&h=400&fit=crop" alt="Crème Brûlée" />
            </div>
            <div className="card-body">
              <h3>Crème Brûlée</h3>
              <p>Classic vanilla custard with caramelized sugar crust.</p>
              <span className="price">€12</span>
            </div>
          </div>
        </div>

        <div className="center-btn-container">
          <a href="#" className="btn btn-outline">Discover Full Menu</a>
        </div>
      </div>
    </section>
  );
}

export default ChefSignatures;
