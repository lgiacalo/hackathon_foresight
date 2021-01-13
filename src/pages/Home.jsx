import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/categories">Liste Categories</Link> |
      <Link to="/toilette-seche">Categorie Toilette seche</Link> |
      <Link to="/toilette-seche/produit1">Toilette seche produit 1</Link> |
    </>
  );
};

export default Home;
