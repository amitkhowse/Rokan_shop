import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa'; // Use FaBars for the hamburger menu
import '../../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <button onClick={toggleMenu} className="hamburger">
          {/* Toggle between FaBars (hamburger) and FaTimes (close) based on the menu state */}
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="logo">
          <Link to="/">ROKAN</Link>
        </div>
        <ul className={`desktop-menu ${isMenuOpen ? 'mobile-menu' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
          <li><Link to="/categories" onClick={toggleMenu}>Categories</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <div className="icons">
          <button><FaSearch /></button>
          <button><FaHeart /></button>
          <button> <FaShoppingCart /></button>
          <button><FaUser /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
