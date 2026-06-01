import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="top-navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>BoGyeong Lim</NavLink>
        
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/timeline" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Timeline</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
