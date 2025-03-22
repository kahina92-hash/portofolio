import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header>
      <nav>
        <div className="icon-menu"><div className="nav-icon">K</div>
        
        {/* Icône du menu burger */}
        <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
</div>
        
        {/* Liens de navigation */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/projets">Projets</NavLink>
          </li>
          <li>
            <NavLink to="/apropos">
              <FontAwesomeIcon icon={faUser} className="fauser" /> À Propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
