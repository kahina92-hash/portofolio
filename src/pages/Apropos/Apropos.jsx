
import React from "react";
import TechGrid from "../../components/TechGrid/TechGrid";
import './apropos.scss'
const Apropos = () => {
    return (
        <div className="container-apropos">
<h1>QUI SUIS-JE?</h1>
<p>Bonjour à tous, je suis Kahina SAIDI et je réside à Metz, en France. Récemment diplômée de la formation d'intégratrice web
 chez OpenClassrooms, j'ai acquis des compétences solides dans le domaine du développement web. Je suis désormais à la recherche d'une opportunité professionnelle en tant que développeuse web frontend. Je suis passionnée par l'idée de continuer à développer mes compétences et de contribuer à des projets innovants qui repoussent les limites de la technologie web.

À part coder, j'aime aussi :
✨ Apprendre de nouvelles compétences encore et encore... 🤷‍♀️
✈️ Voyager
📚 Lire</p>

 
 <TechGrid></TechGrid>
        </div>
    );
};

export default Apropos;
