import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/categories">Liste Catégories</Link> |
      <Link to="/toilettes-occidentaux">Catégorie Toilette sèche</Link> |
      <Link to="/toilettes-occidentaux/produit1">Toilette sèche produit 1</Link>{" "}
      |
      <section>
        <img
          className="animation1"
          src="http://via.placeholder.com/100x150.png?text=Visuel+d+animation"
          alt=""
        />
      </section>
    </>
  );
};

export default Home;
