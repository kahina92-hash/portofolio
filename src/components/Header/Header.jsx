import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

function Header({ isMenuOpen, setIsMenuOpen }) {
  const closeMenu = () => {
    setIsMenuOpen(false); // Ferme le menu
  };
  return (
    <header>
      <nav>
        <div className="icon-menu">
          <div className="nav-icon">K</div>

          {/* Icône du menu burger */}
          <button
            className="burger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Liens de navigation */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Accueil
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/apropos" end onClick={closeMenu}>
              <FontAwesomeIcon icon={faUser} className="fauser" /> À Propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" end onClick={closeMenu}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" end onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
