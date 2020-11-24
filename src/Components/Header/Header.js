import React from 'react';
import logo from '../../assets/tronalddump_850x850.png';
import './header.css';

function Header() {
  // lol
  return (
    <div className="header-container">
      <img src={logo} className="trump-img" alt="trump-logo" />
      <p>Tronald Dump</p>
    </div>
  );
}

export default Header;
