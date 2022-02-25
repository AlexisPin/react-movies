import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/favorites"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Favoris</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Movies App</h1>
    </div>
  );
};

export default Header;
