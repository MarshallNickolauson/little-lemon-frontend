import React from 'react';
import "./Homepage.css"
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}