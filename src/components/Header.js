import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import Nav from './Nav';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button className="Nav-toggle" onClick={toggleNav}>
        &#9776;
      </button>
      <Nav isVisible={isNavVisible} />
    </header>
  );
}

export default Header;
