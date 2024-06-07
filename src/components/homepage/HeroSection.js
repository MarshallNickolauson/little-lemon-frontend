import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/hero-section.jpg';

function HeroSection() {
  return (
    <div className='Hero-Section-Container'>
      <div className='Hero-Section-Content'>
        <div className="Hero-Text">
          <h1>Little Lemon</h1>
          <h2>Chigaco</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to='/reservation'><button className='Yellow-Button'>Reserve a Table</button></Link>
        </div>
        <div className="Hero-Image-Container">
          <img src={heroImage} alt="Little Lemon Restaurant" className='Hero-Image' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
