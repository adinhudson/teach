import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <nav style={{
      ...styles.navbar,
      background: scrolled ? "rgba(235, 118, 48, 0.98)" : "rgba(235, 118, 48, 0.95)",
      padding: scrolled ? "8px 5%" : "12px 5%",
      boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.15)" : "0 2px 20px rgba(0, 0, 0, 0.1)",
    }}>
      {/* Logo */}
      <Link to="/" style={styles.logoContainer}>
        <img
          src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"}
          alt="TEAch Volunteers"
          style={{
            ...styles.logoImage,
            transform: scrolled ? "scale(0.9)" : "scale(1)",
          }}
        />
      </Link>

      {/* Hamburger button (mobile only) */}
      {isMobile && (
        <button 
          style={styles.hamburger} 
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
        style={{
          ...styles.navLinks,
          ...(isMobile ? (isOpen ? styles.showMenu : styles.hideMenu) : {}),
        }}
      >
        <li>
          <Link to="/" style={styles.link} onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link} onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link} onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link 
            to="/volunteer" 
            style={{
              ...styles.link,
              background: "rgba(255, 255, 255, 0.15)",
              padding: "10px 20px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.25)",
                transform: "translateY(-2px)",
              }
            }} 
            onClick={handleLinkClick}
          >
            Volunteer Sign-Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 5%",
    background: "rgba(235, 118, 48, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    transition: "all 0.3s ease",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    transform: "translateX(0)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateX(5px)",
    },
  },
  logoImage: {
    height: "45px",
    objectFit: "contain",
    backgroundColor: "#fff",
    padding: "6px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    position: "relative",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.15)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "4px",
      left: "50%",
      width: "0",
      height: "2px",
      background: "#fff",
      transition: "all 0.3s ease",
      transform: "translateX(-50%)",
    },
    "&:hover::after": {
      width: "calc(100% - 32px)",
    },
  },
  hamburger: {
    fontSize: "24px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.1)",
    },
  },
  hideMenu: {
    display: "none",
  },
  showMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "80px",
    right: "5%",
    background: "rgba(235, 118, 48, 0.98)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "16px",
    gap: "15px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    zIndex: 2000,
    animation: "slideIn 0.3s ease",
    transform: "translateY(0)",
    minWidth: "200px",
  },
  "@keyframes slideIn": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
};

export default Navbar;
