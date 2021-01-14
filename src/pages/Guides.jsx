import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import GuideCard from "../components/GuideCard";
import data from "../assets/guides.json";
import "../css/guides.css";

const Guides = () => {
  return (
    <div className="pageContainer guideContainer">
      <Helmet>
        <meta
          property="og:url"
          content="https://cabinett.netlify.app/guides/"
        />
        <meta
          name="twitter:url"
          content="https://cabinett.netlify.app/guides/"
        />
        <title>Cabinett - Votre expert en toilettes - Guides</title>
        <link rel="canonical" href="https://cabinett.netlify.app/guides/" />
        <meta name="description" content="Description de toutes les guides " />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>

      <h1>Liste des Guides</h1>
      <p>
        Il n'est pas toujours évident de choisir les bons toilettes. En effet,
        entre les questions de goût et de style, chacun a des envies différentes
        en termes de confort et d'hygiène. Après tout, les WC sont un endroit où
        il fait bon être en phase avec soi-même. C'est pour cette raison que
        Cabi.net vous propose toute une série de guides pour vous permettre de
        faire le bon choix avant de vous demander quelle cuvette, quel abattant
        ou quel lave-mains vous voulez pour aller avec vos toilettes.
      </p>
      <section className="multipleGuidesContainer">
        {data.guides.map((g) => (
          <GuideCard key={g.slug_guide} {...g} />
        ))}
      </section>
    </div>
  );
};

export default Guides;
