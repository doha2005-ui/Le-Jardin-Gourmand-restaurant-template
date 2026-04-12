function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>Nestled in the heart of the city, Le Jardin Gourmand has been a beacon of French culinary excellence since 2010. Our name, meaning "The Gourmet Garden," reflects our commitment to using the finest seasonal ingredients, sourced from local farms and our own herb garden.</p>
            <p>Every dish tells a story of tradition, innovation, and passion. We believe that dining is not just about food—it's about creating memories, celebrating moments, and savoring the artistry of French cuisine.</p>

            <div className="chef-quote">
              <h3>Chef's Philosophy</h3>
              <p>"Cooking is an act of love. Each ingredient is chosen with care, each technique refined through years of practice. At Le Jardin Gourmand, we honor the classics while embracing creativity, ensuring every plate is a masterpiece."</p>
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

export default About;
