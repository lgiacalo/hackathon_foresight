import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CategorieCard from "../components/CategorieCard";
import data from "../assets/toilets.json";
import "../css/categories.css";

const Categories = () => {
  return (
    <div className="pageContainer categoryContainer">
      <Helmet>
        <meta
          property="og:url"
          content="https://cabinet-hackathon.netlify.app/categories/"
        />
        <meta
          name="twitter:url"
          content="https://cabinet-hackathon.netlify.app/categories/"
        />
        <title>Cabinet | Votre expert en toilettes - Catégories</title>
        <link
          rel="canonical"
          href="https://cabinet-hackathon.netlify.app/categories/"
        />
        <meta
          name="description"
          content="Cabinet - Votre expert en toilettes - Description De toutes les categories"
        />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> | Catégories
      </nav>

      <h1>Liste des Catégories</h1>
      <p>
        Que ce soit pour leurs origines géographiques ou leur modernité, il
        existe plusieurs catégories de toilettes. Envie d'un retour à la nature
        ou au contraire du nec plus ultra de la technologie ? Envie de rester
        sur des formats habituels ou de tenter l'aventure accroupi ? Vous
        trouverez les WC qu'il vous faut dans la large gamme Cabi.net.
      </p>
      <section className="multipleCategoriesContainer">
        {data.categories.map((c) => (
          <CategorieCard key={c.slug_category} {...c} />
        ))}
      </section>
    </div>
  );
};

export default Categories;
