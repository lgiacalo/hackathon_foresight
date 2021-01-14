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
    <article className="productCard">
      <Link to={`/${slug_category}/${slug_product}/`}>
        <div>
          <h3>WC {name}</h3>
          <p>{price}&nbsp;€</p>
        </div>
        <img src={picture} alt="name" />
        <span className="best-product-link">Plus d'info</span>
      </Link>
    </article>
  );
};

export default ProductCard;
