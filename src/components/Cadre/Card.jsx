import React from 'react';
import './cadre.scss';

function Cadre({ projet }) {
  if (!projet) {
    return <p>Aucun projet trouvé.</p>;
  }

  return (
    <div className="cadre-projet">
      {/* Affichage de l'image */}
      {projet.picture && (
  <img src={process.env.PUBLIC_URL + projet.picture} alt={projet.title} className='projet-image' />
)}


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
<div className='git-demo'>
<div className='github'>
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
</div>
<div className='demo'>
{projet.lien && (
          <a 
            href={projet.lien} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-github"
          >
            <span>Demo</span>
          </a>
        )}
</div>
</div>
     

      </div>
    </div>
  );
}

export default Cadre;
