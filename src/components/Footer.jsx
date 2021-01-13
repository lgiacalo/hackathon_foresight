import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">A propos</Link>
        </li>
        <li>
          <Link to="/">Mentions légales</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">logos CB, VISA, etc.</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
