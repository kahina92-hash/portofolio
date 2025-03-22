import React from 'react';
import TechGrid from '../../components/TechGrid/TechGrid';
import './apropos.scss';
import photoappropos from './photoappropos/qui-suis-je-removebg-preview.png'
const Apropos = () => {
  return (
    <div className="container-apropos">
         <h1>QUI <strong>SUIS-JE?</strong></h1>
      <div className="text-apropos">
       

        <p>
          Bonjour à tous, je suis <strong> Kahina SAIDI </strong> et je réside à <strong>Metz</strong> , en France.
          Récemment diplômée de la formation d'intégratrice web chez
          OpenClassrooms, j'ai acquis des compétences solides dans le domaine du
          développement web. Je suis désormais à la recherche d'une opportunité
          professionnelle en tant que développeuse web frontend. Je suis
          passionnée par l'idée de continuer à développer mes compétences et de
          contribuer à des projets innovants qui repoussent les limites de la
          technologie web.<br/> À part coder, j'aime aussi :<br/> ✨ Apprendre de
          nouvelles compétences encore et encore... 🤷‍♀️,<br/> ✈️ Voyager <br/> 📚 Lire
        </p>
        <img src={photoappropos} alt="image-apropos"/>
      

      </div>
      
      <TechGrid></TechGrid>
    </div>
  );
};

export default Apropos;
