import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer>
        <ul className='icon'>
            <li><ion-icon name="logo-facebook"></ion-icon></li>
            <li><ion-icon name="logo-instagram"></ion-icon></li>
            <li><ion-icon name="logo-twitter"></ion-icon></li>
            <li><ion-icon name="logo-linkedin"></ion-icon></li>
            <li><ion-icon name="logo-youtube"></ion-icon></li>
        </ul>
        <ul className='menu'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/"> A propos </a></li>
            <li><a href="/">  Blog </a></li>
            <li><a href="/">Contact </a></li>
            <li><a href="/"> Mentions légales </a></li>
        
        </ul>
        <hr />
        <p>&copy;{new Date().getFullYear()} Tous droits réservés.</p>
    </footer>
    )

  
}

export default Footer