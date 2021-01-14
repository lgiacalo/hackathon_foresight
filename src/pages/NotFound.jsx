import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import shit404 from "../assets/shit404.svg";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Cabinett - 404 Not Found</title>
        <link
          rel="canonical"
          href="https://cabinett.netlify.app/not-found-404"
        />
        <meta name="description" content="Cabinett - page not found " />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>
      <h1>Not Found</h1>
      <img src={shit404} alt="not found page" width="600" heigh="400" />
    </>
  );
};

export default NotFound;
