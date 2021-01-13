import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/home.css";

const Home = () => {
  return (
    <div className="pageContainer Home">
      <Helmet>
        <title>Cabinett</title>
        <link rel="canonical" href="https://cabinett.netlify.app/" />
        <meta name="description" content="Description Cabinett " />
      </Helmet>
      <h2>Home Page</h2>
      <Link to="/categories">Liste Catégories</Link> |
      <Link to="/toilettes-occidentaux">Catégorie Toilette sèche</Link> |
      <Link to="/toilettes-occidentaux/produit1">Toilette sèche produit 1</Link>{" "}
      |
      <section>
        <Link to="/" className="animation-big">
          <img
            src="http://via.placeholder.com/800x250.png?text=Focus+sur+les+economies+d+eau"
            alt=""
          />
        </Link>
        <div>
          <Link to="/">
            <img
              className="animation-triplet"
              src="http://via.placeholder.com/800x350.png?text=Voir+tous+nos+guides"
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              className="animation-triplet"
              src="http://via.placeholder.com/800x350.png?text=Toilettes+sans+eau"
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              className="animation-triplet"
              src="http://via.placeholder.com/800x350.png?text=Toilettes-japonaises"
              alt=""
            />
          </Link>
        </div>
      </section>
      <article className="productCard">
        <img
          className="productImg"
          src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
          alt=""
        />
        <p>Titre produit</p>
      </article>
    </div>
  );
};

export default Home;
