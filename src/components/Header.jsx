import React from 'react';
import './Header.css';

const Header = () => (
  <header className="portfolio-header">
    <div className="header-content">
      <div className="header-title">
        <h1>Tharun Putta</h1>
        <p className="header-role">Full Stack Developer</p>
      </div>
      <div className="header-contact">
        <a href="tel:+15138867747">+1 513-886-7747</a> |
        <a href="mailto:tharunputta157@gmail.com">tharunputta157@gmail.com</a> |
        <a href="#contact">Portfolio</a>
      </div>
    </div>
    <nav>
      <a href="#summary">Summary</a>
      <a href="#skills">Skills</a>
      <a href="#experiences">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
