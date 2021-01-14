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
          content="https://cabinett.netlify.app/categories/"
        />
        <meta
          property="twitter:url"
          content="https://cabinett.netlify.app/categories/"
        />
        <title>Cabinett - Categories</title>
        <link rel="canonical" href="https://cabinett.netlify.app/categories/" />
        <meta
          name="description"
          content="Description De toutes les categories "
        />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>

      <h2>Liste des Categories</h2>
      <p>
        Que ce soit pour leurs origines géographiques ou leur modernité, ils
        existent plusieurs catégories de toilettes. Envie d'un retour à la
        nature ou au contraire du nec plus ultra de la technologie ? Envie de
        rester sur des formats habituels ou de tenter l'aventure accroupi ? Vous
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
