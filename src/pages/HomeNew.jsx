import React from 'react';
import Hero from '../components/home-branch/Hero';
import AboutSection from '../components/home-branch/AboutSection';
import ChefSignatures from '../components/home-branch/ChefSignatures';
import GuestExperiences from '../components/home-branch/GuestExperiences';
import '../styles/home-branch.css';

function HomeNew() {
  return (
    <div className="home-branch-root">
      <Hero />
      <AboutSection />
      <ChefSignatures />
      <GuestExperiences />
    </div>
  );
}

export default HomeNew;
