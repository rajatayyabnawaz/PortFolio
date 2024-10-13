import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "./mmm.PNG";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
    if (window.innerWidth > 700) {
      setIsOpen(false); // Close menu if window is resized back to desktop
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false); // Close menu when a link is clicked on mobile
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className={`links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/Project" className="nav-link" onClick={handleLinkClick}>Project</NavLink></li>
          <li><NavLink to="/About" className="nav-link" onClick={handleLinkClick}>About</NavLink></li>
          <li><NavLink to="/Contact" className="nav-link" onClick={handleLinkClick}>Contact</NavLink></li>
        </ul>
      </div>
      {isMobile && (
        <div className={`toggle-button ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Three-dot icon (hamburger menu) */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
