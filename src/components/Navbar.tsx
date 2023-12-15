// src/components/Navbar.tsx
import React from 'react';
import '../components/Navbar.css';
import Logo from '../assests/nmcgGif 2.png'; // Import your logo

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between">
        
        <div>
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="/Donation" className="nav-link">
            Donation
          </a>
          <a href="#" className="nav-link">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
