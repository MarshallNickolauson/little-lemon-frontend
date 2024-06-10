import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import Nav from './Nav';

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <header className="app-header container">
      <img src={logo} className="app-logo" alt="logo" />
      <button className="nav-toggle" onClick={toggleNav}>
        &#9776;
      </button>
      <Nav isVisible={isNavVisible} />
    </header>
  );
}