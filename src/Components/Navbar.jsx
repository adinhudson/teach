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
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-between items-center px-[5%] py-3 bg-[#f5f3f3] backdrop-blur-md shadow-md z-[1000] transition-all duration-300 h-[60px] min-h-[48px] font-poiret ${scrolled ? 'shadow-lg' : ''}`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center bg-none rounded-none p-0 shadow-none transition-transform duration-300 hover:translate-x-1">
        <img
          src="/teach_logo_transparent.png"
          alt="TEAch Logo"
          className="h-[25px] md:h-[30px] w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Hamburger button (mobile only) */}
      {isMobile && (
        <button
          className="text-2xl bg-[#f5f3f3] border-none text-[#222] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-poiret hover:bg-[#f7b88f] hover:scale-110"
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
        className={`list-none flex gap-[30px] items-center m-0 p-0 ${isMobile ? (isOpen ? 'flex flex-col absolute top-[80px] right-[5%] bg-[#f5f3f3] backdrop-blur-md p-5 rounded-xl gap-[15px] shadow-2xl z-[2000] animate-slideIn min-w-[200px]' : 'hidden') : ''}`}
      >
        <li>
          <Link to="/" className="no-underline text-[#222] font-semibold text-base px-4 py-2 rounded-full transition-all duration-300 relative font-poiret hover:bg-[#f7b88f]" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/about" className="no-underline text-[#222] font-semibold text-base px-4 py-2 rounded-full transition-all duration-300 relative font-poiret hover:bg-[#f7b88f]" onClick={handleLinkClick}>
            About Us
          </Link>
        </li> */}
        <li>
          <Link to="/contact" className="no-underline text-[#222] font-semibold text-base px-4 py-2 rounded-full transition-all duration-300 relative font-poiret hover:bg-[#f7b88f]" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/volunteer"
            className="no-underline bg-[#f7b88f] text-[#222] px-5 py-2 rounded-full transition-all duration-300 font-poiret font-semibold hover:bg-[#f67c33] hover:text-white hover:-translate-y-0.5"
            onClick={handleLinkClick}>
            Volunteer Sign-Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
