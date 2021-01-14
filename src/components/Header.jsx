import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBrand from "../assets/cabinet-logo.svg";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header>
      <h1>
        <Link to="/" title="Cabi.net">
          <img className="logo" src={logoBrand} alt="cabi.net" />
        </Link> Cabi.net
      </h1>
      <div className="navbar">
        <input
          className="search"
          type="text"
          placeholder="🔎 Je recherche..."
        />
        <nav className="menu">
          {/* <input id="menu-toggle" className="menu-toggle" type="checkbox" onClick={handleClick} /> */}
          <button className="menu-toggle" onClick={handleClick}>
            <span className={open ? "hidden" : ""}>☰</span>
            <span className={open ? "" : "hidden"}>❌</span>
          </button>
          <ul className={open ? "menu-list" : "hidden"}>
            <li>
              <Link to="/toilettes-occidentales/" title="Toilettes occidentales">
              Toilettes occidentales
              </Link>
            </li>
            <li>
              <Link to="/toilettes-classiques/" title="Toilettes classiques">
              Toilettes classiques
              </Link>
            </li>
            <li>
              <Link to="/toilettes-japonaises/" title="Toilettes japonaises">
              Toilettes japonaises
              </Link>
            </li>
            <li>
              <Link to="/toilettes-seches/" title="Toilettes seches">
              Toilettes seches
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
