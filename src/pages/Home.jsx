import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <div className="pageContainer Home">
      <h2>Home Page</h2>
      <Link to="/categories">Liste Catégories</Link> |
      <Link to="/toilettes-occidentaux">Catégorie Toilette sèche</Link> |
      <Link to="/toilettes-occidentaux/produit1">Toilette sèche produit 1</Link>{" "}
      |
      <section>
        <article className="animation-phare">
          <Link to="/" title="">
            <img
              src="http://via.placeholder.com/800x305.png?text=Focus+sur+les+economies+d+eau"
              alt=""
            />
          </Link>
        </article>
        <div className="animation-dual-group">
          <article className="animation-dual">
            <Link to="/" title="">
              <img
                className=""
                src="http://via.placeholder.com/800x342.png?text=Voir+tous+nos+guides"
                alt=""
              />
            </Link>
          </article>
          <article className="animation-dual">
            <Link to="/" title="">
              <img
                className="animation-triplet"
                src="http://via.placeholder.com/800x342.png?text=Toilettes+sans+eau"
                alt=""
              />
            </Link>
          </article>
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
