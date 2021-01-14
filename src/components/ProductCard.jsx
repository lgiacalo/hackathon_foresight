import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  name,
  description,
  image,
  slug_product,
  slug_category,
}) => {
  return (
    <article>
      <h2>
        <Link to={`/${slug_category}/${slug_product}/`}>{name}</Link>
      </h2>
      {/* <p>{description}</p> */}
      <p>{image}</p>
    </article>
  );
};

export default ProductCard;
