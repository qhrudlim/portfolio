import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">임보경 Portfolio</Link>
        <ul className="nav-menu">
          <li><a href="/#about">About</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
