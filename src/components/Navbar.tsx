// src/components/Navbar.tsx
import React from 'react';
import '../components/Navbar.css';
import Logo from '../assests/nmcgGif 2.png';
import Gallery from '../pages/gallery';
import About from '../pages/About';
import Home from '../pages/Home';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between">
        
        <div>
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="/Home" className="nav-link">
            Home
          </a>
          <a href="/About" className="nav-link">
            About
          </a>
          <a href="/Donation" className="nav-link">
            Donation
          </a>
          <a href="/Gallery" className="nav-link">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
