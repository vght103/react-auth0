import React from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <Link to="/">
          <h1>PIN POINT</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
