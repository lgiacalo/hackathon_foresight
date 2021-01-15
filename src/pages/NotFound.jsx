import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import shit404 from "../assets/shit404.svg";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content="https://cabinet-hackathon.netlify.app/not-found-404"
        />
        <meta
          name="twitter:url"
          content="https://cabinet-hackathon.netlify.app/not-found-404"
        />
        <title>Cabinet - Votre expert en toilettes - 404 Not Found</title>
        <link
          rel="canonical"
          href="https://cabinet-hackathon.netlify.app/not-found-404"
        />
        <meta name="description" content="Cabinet - page not found " />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>
      <h1>Not Found</h1>
      <img src={shit404} alt="not found page" width="600" height="400" />
    </>
  );
};

export default NotFound;
