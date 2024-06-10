import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ isVisible }) {
  return (
    <nav className={`nav ${isVisible ? 'nav-visible' : ''}`}>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/menu">Menu</Link></li>
        <li className="nav-item"><Link to="/reservations">Reservations</Link></li>
        <li className="nav-item"><Link to="/order-online">Order Online</Link></li>
        <li className="nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
