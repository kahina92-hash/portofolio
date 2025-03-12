// ProjetsList.js
import  "./projetliste.scss";
import React from "react";
import Cadre from "../../components/Cadre/Card";
import projets from "../../data/projets.json"; // Assurez-vous que le chemin est correct

function ProjetsList({ projet }) { // Utilisation de la destructuration pour récupérer l'objet projet
  return (
    <div className="container-projets">
      <h1>Liste des Projets</h1>
      <div className="list-projets">
        
        {projets.map((projet) => (
          <Cadre projet={projet}></Cadre>
        ))}
      </div>
      
    </div>
  );
}

export default ProjetsList;
