import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="menu-list">
        <li>
          <Link to="/auth0">Auth0</Link>
        </li>

        {/* <li>
          <Link to="keycloak">KeyCloak</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
