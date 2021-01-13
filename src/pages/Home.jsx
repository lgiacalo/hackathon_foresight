import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/categories">Liste Catégories</Link> |
      <Link to="/toilettes-occidentaux">Catégorie Toilette sèche</Link> |
      <Link to="/toilettes-occidentaux/produit1">Toilette sèche produit 1</Link>{" "}
      |
    </>
  );
};

export default Home;
