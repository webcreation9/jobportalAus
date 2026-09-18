import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {   
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect  
  useEffect(() => {
    const handleScroll = () => {          
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  
 
  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);    
  };  
     

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left side - Logo  */}
        <div className="navbar-logo">
          <span className="logo-aus">Aus</span>
          <span className="logo-careers">Aus Careers</span>
        </div>

        {/* Tagline - Find.Apply.Grow */}
        <div className="navbar-tagline">Find.Apply.Grow</div>

        {/* Hamburger menu for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Middle - Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a href="/jobs" className="nav-link">Find Jobs</a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link">Job Categories</a>
          </li>
          <li className="nav-item">
            <a href="/advice" className="nav-link">Career Advice</a>
          </li>
           <li className="nav-item">
            {/* <a href="/advice" className="nav-link">About US</a> */}
          </li>
        </ul>

        {/* Right side - Buttons  */}
        <div className="nav-buttons">
          <button className="btn-upload">
            <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8"  />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload Resume
          </button> 
          <button className="btn-post">Post a Job</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

