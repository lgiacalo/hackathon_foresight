import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  name,
  description,
  picture,
  slug_product,
  slug_category,
  price,
}) => {
  return (
    <article>
      <h3>
        <Link to={`/${slug_category}/${slug_product}/`}>{name}</Link>
      </h3>
      <img src={picture} alt="name"/>
      <p>{price}</p>
    </article>
  );
};

export default ProductCard;
