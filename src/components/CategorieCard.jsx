import React from "react";
import { Link } from "react-router-dom";

const CategorieCard = ({ name, description, image, slug_category }) => {
  return (
    <article>
      <h3>
        <Link to={`/${slug_category}`}>{name}</Link>
      </h3>
      <img src={image} alt={name} />
      <p>{description}</p>
    </article>
  );
};

export default CategorieCard;
