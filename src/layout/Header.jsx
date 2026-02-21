 import React, { useEffect, useState } from 'react'
import img from "./5845342.png";
import "./nav.css"

const Header = () => {
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
  function handleScroll(){
    if (window.scrollY>100){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
  }
  document.addEventListener("scroll",handleScroll)
  return()=>{
    window.removeEventListener("scroll",handleScroll)
  }},[])
  return (
    <header className={`header ${scroll? "try":""}`}>
      <div className='logo-container'>
        <img src={img} alt="logo" className='img' />
        <a href="/" className='logo'>Le jardin gourmand</a>

      </div>


      <nav className='navbar'>
        <a href="/">Accueil</a>
        <a href="/">A propos</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  )
}

export default Header
