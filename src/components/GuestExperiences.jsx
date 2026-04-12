function GuestExperiences() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Guest Experiences</h2>
          <p className="section-subtitle">Kind words from our valued patrons.</p>
        </div>

        <div className="card-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"An absolute gem in Paris. The Coq au Vin was cooked to perfection, and the wine selection is exquisite. The atmosphere transported us straight to the countryside."</p>
            <div className="reviewer">
              <strong>Sophie Martinez</strong>
              <span>Verified Guest</span>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"We celebrated our anniversary here and it was magical. The staff was incredibly attentive without being intrusive. Truly a fine dining experience to remember."</p>
            <div className="reviewer">
              <strong>James &amp; Clara</strong>
              <span>Local Guides</span>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"I still dream about the Crème Brûlée. Chef Dubois is a master. Highly recommended for anyone who appreciates authentic French cuisine."</p>
            <div className="reviewer">
              <strong>Elise Dubois</strong>
              <span>Food Critic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuestExperiences;
