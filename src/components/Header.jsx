import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img
            className="logo"
            src="https://via.placeholder.com/200x100.png?text=LOGO"
            alt="LOGO"
          />
        </Link>
      </h1>
      <div className="navbar">
        <nav>
          <input id="menu-toggle" className="menu-toggle" type="checkbox" />
          <label htmlFor="menu-toggle">
            <span className="icon-menu">☰</span>
            <span className="icon-cross">☰</span>
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

        <input
          className="search"
          type="text"
          placeholder="🔎 Je recherche..."
        />
      </div>
    </header>
  );
};

export default Header;
