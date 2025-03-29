import React from 'react';
import './cadre.scss';

import { useNavigate } from 'react-router-dom';
function Cadre({
  projet,
  hideImage,
  style,
  className,
  height,
  width,
  showButton,
}) {
  const finalStyle = {
    ...style,
    width: width,
    height: height,
    className,
  };
  const navigate = useNavigate();

  const handleClick = () => {
    const formattedTitle = projet.title.toLowerCase().replace(/\s+/g, '-');

    navigate(`/infos/${formattedTitle}`);
  };

  if (!projet) {
    return <p>Aucun projet trouvé.</p>;
  }

  return (
    <div className="cadre-projet" style={finalStyle}>
      {/* Affichage de l'image */}
      {!hideImage && projet.picture && (
        <img
          src={process.env.PUBLIC_URL + projet.picture}
          alt={projet.title}
          className="projet-image"
        />
      )}

      {/* Conteneur principal pour gérer la disposition */}
      <div className="card-content">
        {/* Affichage des informations */}
        <div className="infots-projet">
          <h2>{projet.title}</h2>
          <p>{projet.date}</p>
          <p>{projet.description}</p>

          <ul>
            {projet.langages.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Conteneur pour les boutons */}
        <div className="git-demo">
          {projet.lien && (
            <a
              href={projet.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <span>GitHub</span>
            </a>
          )}
          {projet.demo && (
            <a
              href={projet.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <span>Demo</span>
            </a>
          )}
        </div>
        {/* Affichage du carrousel d'images */}

        <div className="infos">
          {!showButton && (
            <button className="btn-infos" onClick={handleClick}>
              <span>Plus d'infos...</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cadre;
