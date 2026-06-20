import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/navigation/routes';

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
        
        <button
          type="button"
          className="menu-icon"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
