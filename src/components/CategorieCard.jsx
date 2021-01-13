import React from "react";
import { Link } from "react-router-dom";

const CategorieCard = ({ name, description, image, slug_category }) => {
  return (
    <article>
      <h2>
        <Link to={`/${slug_category}`}>{name}</Link>
      </h2>
      <p>{description}</p>
      <p>{image}</p>
    </article>
  );
};

export default CategorieCard;
