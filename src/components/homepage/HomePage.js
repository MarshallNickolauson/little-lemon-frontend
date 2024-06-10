import React from 'react';
import "./Homepage.css"
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
    </main>
  );
}

export default HomePage;