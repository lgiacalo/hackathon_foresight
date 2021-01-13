import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <img
          className="logo"
          src="https://via.placeholder.com/200x100.png?text=LOGO"
          alt="LOGO"
        />
      </h1>

      <nav class="navbar">
        <input id="menu-toggle" className="menu-toggle" type="checkbox" />
        <label forHTML="menu-toggle">
          <span className="icon-menu">☰</span>
          <span class="icon-cross">☰</span>
        </label>
        <ul>
          <li>
            <Link to="/">categorie1</Link>
          </li>
          <li>
            <Link to="/">ategorie2</Link>
          </li>
          <li>
            <Link to="/">ategorie3</Link>
          </li>
          <li>
            <Link to="/">categorie4</Link>
          </li>
        </ul>
      </nav>

      <input type="text" />
    </header>
  );
};

export default Header;
