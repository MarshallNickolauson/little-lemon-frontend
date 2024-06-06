import React from 'react';
import logo from '../images/Logo.svg';

function Header() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
    minHeight: '2vh',
    fontSize: '2vmin',
    color: 'white',
    padding: '20px'
  };

  const imgStyle = {
    height: '10vmin',
    pointerEvents: 'none',
    marginRight: '20px'
  };

  return (
    <header style={headerStyle}>
      <img src={logo} style={imgStyle} alt="logo" />
      <h1>Welcome to My App</h1>
    </header>
  );
}

export default Header;