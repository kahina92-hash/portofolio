import './projetliste.scss';
import React from 'react';
import Cadre from '../../components/Cadre/Card';
import projets from '../../data/projets.json'; // Assurez-vous que le chemin est correct

function ProjetsList() {
  return (
    <div className="container-projets">
      <h1>Mes Projets</h1>
      <p>Voici quelques projets sur lesquels j'ai récemment travaillé.</p>

      {/* Liste des langages utilisés */}
      <ul className="langages">
        {[...new Set(projets.flatMap((projet) => projet.langages))].map(
          (langage, index) => (
            <li key={index} className="badge">
              {langage}
            </li>
          )
        )}
      </ul>

      {/* Affichage des projets */}
      <div className="list-projets">
        {projets.map((projet) => (
          <Cadre key={projet.id} projet={projet} />
        ))}
      </div>
    </div>
  );
}

export default ProjetsList;
