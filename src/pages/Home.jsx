import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/home.css";

const Home = () => {
  return (
    <main className="pageContainer Home">
      <Helmet>
        <meta property="og:url" content="https://cabinett-test1.netlify.app/" />
        <meta
          name="twitter:url"
          content="https://cabinett-test1.netlify.app/"
        />
        <title>Cabinett - Votre expert en toilettes</title>
        <link rel="canonical" href="https://cabinett-test1.netlify.app/" />
        <meta
          name="description"
          content="Le spécialiste des toilettes, en tout genre, de tous les pays et pour tous les prix !"
        />
      </Helmet>
      <h1>Cabi.net, votre expert en toilettes</h1>
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
            <Link to="/categories/" title="Toutes nos catégories de WC">
              <img
                className="animation-triplet"
                src="https://via.placeholder.com/800x342.png?text=Toutes-nos-categories-de-WC"
                alt="Voir toutes nos catégories de WC"
              />
            </Link>
          </article>
        </div>
      </section>
      <article className="bests">
        <div className="best-product-list">
          <h2>Notre sélection de toilettes high-tech</h2>
          <article className="best-product-card">
            <Link to="/toilettes-japonaises/k-3900-kohler/" title="Plus d'info">
              <img
                className="productImg"
                src="/products/toilettes-k-3900-kohler.png"
                alt="Modèle K-3900 Numi One Piece Elongated Toilet"
              />
              <h3>Modèle K-3900 Numi One Piece Elongated Toilet</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link
              to="/toilettes-japonaises/luxe-diamond-toptoilet/"
              title="Plus d'info"
            >
              <img
                className="productImg"
                src="/products/toilettes-luxe-diamond-toptoilet.png"
                alt="Modèle Luxe Diamond Plus"
              />
              <h3>Modèle Luxe Diamond Plus</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link
            to="/toilettes-japonaises/"
            title="Toutes les toilettes japonaises"
          >
            Voir toutes les toilettes japonaises
          </Link>
        </div>
        <div className="best-product-list">
          <h2>Notre sélection de toilettes classiques</h2>
          <article className="best-product-card">
            <Link
              to="/toilettes-occidentales/cavally-goodhome/"
              title="Plus d'info"
            >
              <img
                className="productImg"
                src="/products/toilettes-cavally-goodhome.jpg"
                alt="Modèle Cavally"
              />
              <h3>Modèle Cavally</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link
              to="/toilettes-occidentales/isis-swarovski/"
              title="Plus d'info"
            >
              <img
                className="productImg"
                src="/products/toilettes-isis-swarovski.jpg"
                alt="Modèle Isis"
              />
              <h3>Modèle Isis</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link
            to="/toilettes-occidentales/"
            title="Toutes les toilettes occidentales"
          >
            Voir toutes les toilettes occidentales
          </Link>
        </div>
      </article>
      <article className="chapo">
        Saviez vous combien de temps nous passons aux WC, en moyenne ? Cela
        représente en moyenne 3 ans de notre vie&nbsp;! Chez{" "}
        <strong>Cabi.net</strong>, nous avons décidé de vous faciliter la tâche
        pour trouver le WC qui vous convienne. Envie de goûter au confort des{" "}
        <Link to="/toilettes-japonaises/">
          toilettes de luxe à la japonaise
        </Link>{" "}
        sans avoir à prendre l'avion ? Visitez notre catégorie spéciale pour
        vous équiper ! Sur Cabi.net, vous trouverez des WC tous plus originaux
        les uns que les autres, correspondant à tous les besoins et à tous les
        budgets... Des{" "}
        <Link to="/toilettes-classiques/">toilettes économiques</Link> au
        <Link to="/toilettes-japonaises/"> toilettes Grand Luxe</Link>, sans
        oublier les <Link to="/toilettes-seches/">toilettes écologiques</Link>,
        avec Cabi.net, faites de votre petit coin le lieu incontournable de chez
        vous !
      </article>
    </main>
  );
};

export default Home;
