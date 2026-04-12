import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "./5845342.png";
import "./nav.css";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gestion du scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture automatique du menu mobile quand on clique sur un lien
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scroll ? "try" : ""}`}>
      <div className="logo-container">
        <img src={img} alt="logo" className="img" />
        <Link to="/" className="logo">Le jardin gourmand</Link>
      </div>

      {/* Bouton menu mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Accueil</Link>
        <Link to="/A propos" onClick={handleLinkClick}>A propos</Link>
        <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
        <Link to="/Contact" onClick={handleLinkClick}>Contact</Link>
        <Link to="/reservation" onClick={handleLinkClick}>Réservation</Link>
      </nav>
    </header>
  );
};

export default Header;