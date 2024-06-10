import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/hero-section.jpg';

export default function HeroSection() {
  return (
    <div className='hero-section-container'>
      <div className='hero-section-content'>
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chigaco</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to='/reservations'><button className='yellow-button'>Reserve a Table</button></Link>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Little Lemon Restaurant" className='hero-image' />
        </div>
      </div>
    </div>
  );
}
