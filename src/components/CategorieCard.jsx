import React from "react";
import { Link } from "react-router-dom";

const CategorieCard = ({ name, description, image, slug_category }) => {
  return (
    <article>
      <Link to={`/${slug_category}/`}>
        <div>
          <h3>Toilettes {name}</h3>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default CategorieCard;
