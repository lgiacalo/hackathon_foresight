import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import data from "../assets/toilets.json";

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
    <article>
      <Helmet>
        <title>{product.name}</title>
        {/* <link rel="canonical" href="" /> */}
        <meta name="description" content={product.description} />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
        <Link to={`/${slug_category}`}>Toilettes {category.name}</Link>
      </nav>

      <h2>Toilette: {product.name}</h2>
      <p>{product.description}</p>
    </article>
  );
};

export default Product;
