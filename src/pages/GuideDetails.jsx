import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../assets/guides.json";
import NotFound from "./NotFound";

const GuideDetails = () => {
  const [guide, setGuide] = useState(null);
  const { slug_guide } = useParams();

  useEffect(() => {
    setGuide(() => {
      return data.guides.find((e) => e.slug_guide === slug_guide);
    });
  }, [slug_guide]);

  if (!guide) return <NotFound />;

  return (
    <div className="pageContainer guideContainer">
      <Helmet>
        <meta
          property="og:url"
          content={`https://cabinett.netlify.app/guides/${slug_guide}/`}
        />
        <meta
          property="twitter:url"
          content={`https://cabinett.netlify.app/guides/${slug_guide}/`}
        />
        <title>{guide.name}</title>
        <link
          rel="canonical"
          href={`https://cabinett.netlify.app/guides/${slug_guide}/`}
        />
        <meta name="description" content={guide.description} />
      </Helmet>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/guides/">Liste des guides</Link>
      </nav>

      <h2>Guide : {guide.name}</h2>
      <p>{guide.sumup}</p>
      <p>{guide.texte}</p>
    </div>
  );
};

export default GuideDetails;
