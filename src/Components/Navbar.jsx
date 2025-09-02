import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"}
          alt="TEACH Volunteers"
          style={styles.logoImage}
        />
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        style={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <ul
        style={{
          ...styles.navLinks,
          ...(isOpen ? styles.showMenu : styles.hideMenu),
        }}
      >
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/volunteer" style={styles.link}>Volunteer Sign-Up</Link></li>
        <li><Link to="/contact" style={styles.link}>contact us</Link></li>
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
    background: "linear-gradient(90deg, #ffa366, #eb7630)",
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
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
  },
  hamburger: {
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "none", // hidden by default (desktop)
  },
  hideMenu: {
    display: "flex",
  },
  showMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    background: "#eb7630",
    padding: "10px",
    borderRadius: "8px",
  },
};

// Responsive styling with media queries
const mediaQuery = `
  @media (max-width: 768px) {
    ul {
      display: none;
    }
    button {
      display: block !important;
    }
  }
`;

// Inject media query into the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = mediaQuery;
  document.head.appendChild(styleSheet);
}

export default Navbar;
