import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../assets/toilets.json";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";

const CategoryDetails = () => {
  const [category, setCategory] = useState(null);
  const { slug_category } = useParams();

  useEffect(() => {
    setCategory(() => {
      return data.categories.find((e) => e.slug_category === slug_category);
    });
  }, [slug_category]);

  if (!category) return <NotFound />;

  return (
    <article>
      <Helmet>
        <title>{category.name}</title>
        <link
          rel="canonical"
          href={`https://cabinett.netlify.app/${slug_category}/`}
        />
        <meta name="description" content={category.description} />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |
      </nav>

      <h2>Categorie: {category.name}</h2>
      <p>Description de la categorie{category.description}</p>
      {category.products.map((p, i) => (
        <ProductCard
          key={p.slug_product + i}
          {...p}
          slug_category={slug_category}
        />
      ))}
    </article>
  );
};

export default CategoryDetails;
