 import React from 'react';
import './About.css';

const About = () => (
  <>
    <section className="about-hero">
      <div className="about-hero-overlay" />
      <div className="about-hero-content">
        <h1>À propos de nous</h1>
        <p>Une passion, une histoire, un jardin</p>
      </div>
    </section>

    <section className="about-story">
      <div className="story-text">
        <h2>Notre histoire</h2>
        <p>Fondé en 2010 par Aya , Doha et Ilyasse, Le Jardin Gourmand est né d'une envie simple : cuisiner avec ce que la nature offre de meilleur, au fil des saisons.</p>
        <p>Nichés dans un cadre verdoyant au cœur de Paris, nous cultivons nos propres herbes aromatiques et collaborons avec des producteurs locaux engagés pour vous garantir des assiettes généreuses, fraîches et sincères.</p>
        <p>Depuis plus de 10 ans, notre équipe accueille familles, amis et amoureux autour d'une table qui célèbre la simplicité du bon goût.</p>
      </div>
      <div className="story-img-wrap">
        <img src="/image/polet-roti.jpg" alt="Notre cuisine" />
      </div>
    </section>

    <section className="values">
      <h2>Nos valeurs</h2>
      <div className="values-grid">
        <div className="value-card">
          <span>🌱</span>
          <h3>Local & Bio</h3>
          <p>Nous favorisons les producteurs locaux et les produits issus de l'agriculture biologique.</p>
        </div>
        <div className="value-card">
          <span>♻️</span>
          <h3>Anti-gaspillage</h3>
          <p>Chaque ingrédient est utilisé dans son intégralité. Zéro déchet, zéro compromis sur la qualité.</p>
        </div>
        <div className="value-card">
          <span>❤️</span>
          <h3>Fait maison</h3>
          <p>Nos pains, sauces, desserts et condiments sont tous préparés à la main, chaque jour.</p>
        </div>
        <div className="value-card">
          <span>👨‍👩‍👧</span>
          <h3>Convivialité</h3>
          <p>Nous croyons que la table est un lieu de partage. Venez comme vous êtes, repartez rassasiés.</p>
        </div>
      </div>
    </section>

    <section className="team">
      <h2>Notre équipe</h2>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-avatar">👨‍🍳</div>
          <h3>Ilyasse basit </h3>
          <p>Chef & Co-fondateur</p>
        </div>
        <div className="team-card">
          <div className="team-avatar">👩‍🍳</div>
          <h3>Aya El abkari </h3>
          <p>Pâtissière & Co-fondatrice</p>
        </div>
        <div className="team-card">
          <div className="team-avatar">👩‍🍳</div>
          <h3>Doha derraz</h3>
          <p>Second de cuisine</p>
        </div>
      </div>
    </section>
  </>
);

export default About;
