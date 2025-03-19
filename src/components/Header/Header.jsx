import "./header.scss";
import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
    

      <nav>
      <div className="nav-icon">K</div>
        <ul className="nav-link">
          <li className="active-link-acceuil">
            <NavLink to="/" end className={({isActive})=>isActive ? "active-link   " : "inactive-link" } >Hello !</NavLink>
          </li>
          
          <NavLink to="projets" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Projets</NavLink>
          <li className="active-link-appropos">
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>
              <FontAwesomeIcon icon={faUser} className="fauser" />    À Propos
            </NavLink>
           
          </li> 
          <NavLink to="contact" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Contact</NavLink>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
