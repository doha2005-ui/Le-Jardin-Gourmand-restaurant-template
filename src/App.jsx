import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Menu from './pages/Menu';
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import HomeNew from "./pages/HomeNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/A propos" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
