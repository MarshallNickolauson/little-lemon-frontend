import React from 'react';
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      
      <h2>Home Page</h2>
      <p>This is where the main content will go.</p>
    </main>
  );
}

export default HomePage;