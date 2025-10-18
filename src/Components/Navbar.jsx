import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    // Handle scroll for navbar transparency
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <nav className="navbar" >
      {/* Logo */}
      <Link to="/" className="logo-container">
        <img
          src="/without_background.png"
          alt="TEAch Logo"
          className="logo-image"
        />
      </Link>

      {/* Hamburger button (mobile only) */}
      {isMobile && (
        <button 
          className="hamburger" 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      )}

      {/* Links */}
      <ul
        className={`nav-links${isMobile ? (isOpen ? ' show-menu' : ' hide-menu') : ''}`}
      >
        <li>
          <Link to="/" className="link" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link 
            to="/volunteer" 
            className="link volunteer-link"
            onClick={handleLinkClick}
          >
            Volunteer Sign-Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
