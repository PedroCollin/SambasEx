import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>My Cafe</h1>
        <p>A simulation of a cafe's ordering system</p>
      </div>
      <div className="Header-logo">
        <img src="/favicon.ico" alt="Cafe Logo" />
      </div>
    </header>
  );
}

export default Header;
