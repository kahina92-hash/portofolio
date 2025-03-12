// Projets.js
import React from "react";
import { useParams } from "react-router-dom";
import projets from "../../data/projets.json";
// import ProjetsList from "../ProjetsList/ProjetsList";

function Projets() {
  const { id } = useParams();
  console.log("ID récupéré depuis l'URL :", id); // Vérifiez l'ID récupéré

  // Recherche du projet avec l'ID correspondant
  const projet = projets.find((l) => l.id === id); // L'ID dans l'URL est une chaîne, l'ID dans le JSON est aussi une chaîne

  if (!projet) {
    return <p>Projet introuvable !</p>;
  }
  return (
    <div className="container-projets">
      <h1>Liste des Projets</h1>
      <ul>
        {projets.map((projet) => (
          <li key={projet.id}>
            <p>{projet.title}</p>
            <p>{projet.date}</p>
            <img src={projet.picture} alt="picture-projet" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projets;
