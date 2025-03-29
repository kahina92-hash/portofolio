import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carrossel/Carossel';
import projets from '../../data/projets.json';
import Cadre from '../../components/Cadre/Card';
import './infos.scss';
function Infos() {
  const { title } = useParams();
  const projet = projets.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === title
  ); // Corrige la comparaison

  if (!projet) {
    return <p>Projet non trouvé.</p>; // Gestion d'erreur si l'ID n'existe pas
  }

  return (
    <div className="section-infos">
      <div className="cadre-carousel">
        <div className="carrossel">
          <Carousel images={projet.images} />
        </div>
        <div className="cadre">
          <Cadre
            projet={projet}
            hideImage={true}
            style={{}}
            width="400px"
            height="auto"
            className="test"
            showButton={true}
          />
        </div>
      </div>

      <div className="contexte-projet">
        <h2>Contexte du Projet</h2>
        <p>{projet.context}</p>
        <ul>
          <h2>Compétences acquises</h2>
          {projet.Compétences_acquises.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Infos;
