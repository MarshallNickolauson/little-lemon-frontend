import React from 'react';

function Nav({ isVisible }) {
    return (
      <nav className={`Nav ${isVisible ? 'Nav-visible' : ''}`}>
        <ul className="Nav-list">
          <li className="Nav-item"><a href="#home">Home</a></li>
          <li className="Nav-item"><a href="#about">About</a></li>
          <li className="Nav-item"><a href="#menu">Menu</a></li>
          <li className="Nav-item"><a href="#reservations">Reservations</a></li>
          <li className="Nav-item"><a href="#order-online">Order Online</a></li>
          <li className="Nav-item"><a href="#login">Login</a></li>
        </ul>
      </nav>
    );
  }

export default Nav;
