import React from "react";
import { Link } from "react-router-dom";
import logoBrand from "../assets/cabinet-logo.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" title="Cabi.net">
          <img className="logo" src={logoBrand} alt="cabi.net" />
        </Link>
      </h1>
      <div className="navbar">
        <input
          className="search"
          type="text"
          placeholder="🔎 Je recherche..."
        />
        <nav>
          <input id="menu-toggle" className="menu-toggle" type="checkbox" />
          <label htmlFor="menu-toggle">
            <span className="icon-menu">☰</span>
            <span className="icon-cross">☰</span>
          </label>
          <ul>
            <li>
              <Link to="/" title="categorie">
                categorie1
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie2
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie3
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
