import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ name, sumup, slug_guide }) => {
  return (
    <article>
      <h3>
        <Link to={`/guides/${slug_guide}/`}>{name}</Link>
      </h3>
      <p>{sumup}</p>
    </article>
  );
};

export default GuideCard;
