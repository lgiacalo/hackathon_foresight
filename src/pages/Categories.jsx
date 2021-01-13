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
      <section className="multipleCategoriesContainer">
      {data.categories.map((c) => (
        <CategorieCard key={c.slug_category} {...c} />
      ))}
      </section>
    </div>
  );
};

export default Categories;
