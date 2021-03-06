import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header>
      <div className="logoTitle">
        <Link to="/" title="Cabi.net">
          <img
            className="logo"
            src="/img/cabinet-logo.svg"
            alt="logo cabi.net"
          />
        </Link>
      </div>
      <div className="navbar">
        <label>Search a product
        <input
          className="search"
          type="text"
          placeholder="🔎 Je recherche..."
        />
        </label>
        <nav className="menu">
          {/* <input id="menu-toggle" className="menu-toggle" type="checkbox" onClick={handleClick} /> */}
          <button className="menu-toggle" onClick={handleClick}>
            <span className={open ? "hidden" : ""}>☰</span>
            <span className={open ? "" : "hidden"}>❌</span>
          </button>
          <ul className={open ? "menu-list" : "hidden"}>
            <li>
              <Link
                to="/toilettes-occidentales/"
                title="Toilettes occidentales"
              >
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
              <Link to="/toilettes-seches/" title="Toilettes sèches">
                Toilettes sèches
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
