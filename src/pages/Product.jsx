import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import data from "../assets/toilets.json";
import "../css/Product.css";

const Product = () => {
  const { slug_category, slug_product } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const catego = data.categories.find(
      (e) => e.slug_category === slug_category
    );
    if (catego) {
      setCategory(catego);
      const prod = catego.products.find((e) => e.slug_product === slug_product);
      if (prod) setProduct(prod);
    }
  }, [slug_category, slug_product]);

  if (!product) return <NotFound />;

  return (
    <article className="pageContainer Product">
      <Helmet>
        <title>{product.name}</title>
        {/* <link rel="canonical" href="" /> */}
        <meta name="description" content={product.description} />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
        <Link to={`/${slug_category}`}>Toilettes {category.name}</Link> | Modèle{" "}
        {product.name}

      </nav>

      <article>
        <div>
          <h2>Modèle {product.name}</h2>
          <p className="productDescription">{product.description}</p>
          <p className="priceBasket">
            <span className="productPrice">
              {product.price}{" "}
              <span>
                € <span className="light">TTC</span>
              </span>
            </span>
            <Link
              to="/"
              className="btnBasket"
              title="Mettre l'article au panier"
            >
              J'achète
            </Link>
          </p>
        </div>

        <img src={product.picture} alt={product.name} />
      </article>
    </article>
  );
};

export default Product;
