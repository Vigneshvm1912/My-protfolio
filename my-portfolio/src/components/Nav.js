// src/components/Nav.js
import React from 'react';
// import './Nav.css';  // Import the CSS file for navbar styles

const Nav = ({ showLogo }) => {
  return (
    <nav>
      {/* Conditionally render the logo */}
      {showLogo && (
        <div className="logo">
          <img src="/logo.png" alt="Logo" /> {/* Image in navbar */}
        </div>
      )}

      {/* Navigation links */}
      <ul className={showLogo ? 'nav-links hide' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
