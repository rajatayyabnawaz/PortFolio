import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <nav className='footer-nav'>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/project" activeClassName="active">Project</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        <div className='social-links'>
          <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" className='social-link'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer" className='social-link'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='https://www.google.com' target="_blank" rel="noopener noreferrer" className='social-link'>
            <i className='fab fa-google'></i>
          </a>
        </div>
        <div className='footer-info'>
          <p>
            <i className='fas fa-phone'></i>
            Phone: <a href="tel:+923329080112">+92 332 1577920</a>
          </p>
          <p>
            <i className='fas fa-envelope'></i>
            Email: <a href="mailto:maryamzulfiqar@gmail.com">tayyabnawaz177@gmail.com</a>
          </p>
        </div>
      </div>
      <div className='footer-copy'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
