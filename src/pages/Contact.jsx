import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contactez-nous</h1>
          <p>Une question, une réservation ? Nous sommes là.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-info">
          <h2>Informations</h2>
          <div className="info-item"><span>📍</span><div><strong>Adresse</strong><p>123 Rue du Jardin, 75006 Paris</p></div></div>
          <div className="info-item"><span>📞</span><div><strong>Téléphone</strong><p>01 23 45 67 89</p></div></div>
          <div className="info-item"><span>✉️</span><div><strong>Email</strong><p>contact@jardin-gourmand.fr</p></div></div>
          <div className="info-item"><span>🕐</span><div><strong>Horaires</strong><p>Lun–Ven : 12h–14h30 | 19h–22h30<br/>Sam : 19h–23h | Dim : Fermé</p></div></div>
        </div>

        <div className="contact-form-wrap">
          <h2>Envoyez-nous un message</h2>
          {sent ? (
            <div className="success-msg">
              <span>✅</span>
              <p>Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom complet</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="entrer votre nom complet" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@exemple.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Votre message ou demande de réservation…" required />
              </div>
              <button type="submit" className="submit-btn">Envoyer le message</button>
            </form>
          )}
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Carte"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3462!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1680000000000"
          width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"
        />
      </section>
    </>
  );
};

export default Contact;
