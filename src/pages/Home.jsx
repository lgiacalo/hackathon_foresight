import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/home.css";

const Home = () => {
  return (
    <main className="pageContainer Home">
      <Helmet>
        <meta property="og:url" content="https://cabinett.netlify.app/" />
        <meta property="twitter:url" content="https://cabinett.netlify.app/" />
        <title>Cabinett</title>
        <link rel="canonical" href="https://cabinett.netlify.app/" />
        <meta
          name="description"
          content="Le spécialiste des toilettes, en tout genre, de tous les pays et pour tous les prix !"
        />
      </Helmet>
      <h1>Home Page</h1>
      <Link to="/categories/">Liste Catégories</Link>
      <section>
        <article className="animation-phare">
          <Link
            to="/guides/quelles-toilettes-choisir/"
            title="Quelles toilettes choisir ?"
          >
            <img
              src="https://via.placeholder.com/800x305.png?text=Quelles+toilettes+choisir+?"
              alt="Quelles toilettes choisir ?"
            />
          </Link>
        </article>
        <div className="animation-dual-group">
          <article className="animation-dual">
            <Link to="/guides/" title="Guides">
              <img
                src="https://via.placeholder.com/800x342.png?text=Guides"
                alt="Guides"
              />
            </Link>
          </article>
          <article className="animation-dual">
            <Link
              to="/guides/comment-installer-ses-toilettes/"
              title="Comment installer ses toilettes ?"
            >
              <img
                className="animation-triplet"
                src="https://via.placeholder.com/800x342.png?text=Comment+installer+ses+toilettes+?"
                alt="Comment installer ses toilettes ?"
              />
            </Link>
          </article>
        </div>
      </section>
      <article className="bests">
        <div className="best-product-list">
          <h2>Notre sélection de toilettes high-tech</h2>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Luxe Platinium 2 Plus</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Dual Flush Elongated Toilet</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link to="/" title="Tous les toilettes japonais">
            Voir tous les toilettes japonais
          </Link>
        </div>
        <div className="best-product-list">
          <h2>Notre sélection de toilettes classiques</h2>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Presqu'île</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Escale</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link to="/" title="Tous les toilettes japonais">
            Voir tous les toilettes occidentaux
          </Link>
        </div>
      </article>
      <article className="chapo">
        Saviez vous combien de temps nous passons aux WC, en moyenne ? Cela
        représente en moyenne 3 ans de notre vie&nbsp;! Chez{" "}
        <strong>Cabi.net</strong>, nous avons décidé de vous faciliter la tâche
        pour trouver le WC qui vous convienne. Envie de goûter au confort des{" "}
        <Link to="/toilettes-occidentales/">
          toilettes de luxe à la japonaise
        </Link>{" "}
      </article>
    </main>
  );
};

export default Home;
