import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"}
          alt="TEAch Volunteers"
          style={styles.logoImage}
        />
      </div>

      {/* Hamburger button (mobile only) */}
      {isMobile && (
        <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰
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
          <Link to="/volunteer" style={styles.link} onClick={handleLinkClick}>
            Volunteer Sign-Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "linear-gradient(90deg, #eb7630, #eb7630)",
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "50px",
    objectFit: "contain",
    backgroundColor: "#fff",
    padding: "4px",
    borderRadius: "6px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    transition: "all 0.3s ease",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "16px",
  },
  hamburger: {
    fontSize: "28px",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  hideMenu: {
    display: "none",
  },
  showMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    background: "linear-gradient(135deg, #ff8c42, #ff5e62)", // ✅ gradient background
    padding: "15px 20px",
    borderRadius: "10px",
    gap: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: 2000,
  },
};

export default Navbar;
