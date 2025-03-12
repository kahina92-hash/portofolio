import "./header.scss";
import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
    

      <nav>
      <div class="nav-icon">K</div>
        <ul className="nav-link">
          <li className="active-link-acceuil">
            <NavLink to="/home" className={({isActive})=>isActive ? "active-link hello  " : "" } >Hello !</NavLink>
          </li>
          
          <NavLink to="projets" className={({ isActive }) => isActive ? "active-link" : ""}>Projets</NavLink>
          <li className="active-link-appropos">
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "active-link" : ""}>
              <FontAwesomeIcon icon={faUser} className="fauser" />    À Propos
            </NavLink>
           
          </li> 
          <NavLink to="contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
