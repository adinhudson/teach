import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>TEACH Volunteers</div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/how-it-works" style={styles.link}>How It Works</Link></li>
        <li><Link to="/volunteer" style={styles.link}>Volunteer Sign-Up</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: 'linear-gradient(90deg, #ffa366, #ff8c42)', 
    zIndex: 1000,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#fff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 500,
  },
};


export default Navbar;
