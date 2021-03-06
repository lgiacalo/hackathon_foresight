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
    <div className="pageContainer categoryContainer">
      <Helmet>
        <meta
          property="og:url"
          content={`https://cabinet-hackathon.netlify.app/${slug_category}/`}
        />
        <meta
          name="twitter:url"
          content={`https://cabinet-hackathon.netlify.app/${slug_category}/`}
        />
        <title>Cabinet - Votre expert en toilettes - {category.name}</title>
        <link
          rel="canonical"
          href={`https://cabinet-hackathon.netlify.app/${slug_category}/`}
        />
        <meta name="description" content={category.description} />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/categories/">Liste des catégories</Link> | {category.name}
      </nav>

      <h1>Catégorie : toilettes {category.name}</h1>
      <p>{category.content}</p>
      <section className="multipleProductsContainer">
        {category.products.map((p, i) => (
          <ProductCard
            key={p.slug_product + i}
            {...p}
            slug_category={slug_category}
          />
        ))}
      </section>
      <p className="categoryInformation">{category.information}</p>
    </div>
  );
};

export default CategoryDetails;
