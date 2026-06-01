import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">BoGyeong Lim</NavLink>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? "active" : ""}>Timeline</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
