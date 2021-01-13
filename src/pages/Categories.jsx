import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CategorieCard from "../components/CategorieCard";
import data from "../assets/toilets.json";

const Categories = () => {
  return (
    <div className="pageContainer">
      <Helmet>
        <title>Cabinett - Categories</title>
        {/* <link rel="canonical" href="" /> */}
        <meta
          name="description"
          content="Description De toutes les categories "
        />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>

      <h2>Liste des Categories</h2>
      {data.categories.map((c) => (
        <CategorieCard key={c.slug_category} {...c} />
      ))}
    </div>
  );
};

export default Categories;
