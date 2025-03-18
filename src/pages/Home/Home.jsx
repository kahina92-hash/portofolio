import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './home.scss';
import '../../components/Cadre/cadre.scss';
import imagescceuil from './imagescceuil/Logo.png'; // Utilisation correcte de l'importation
import { useNavigate } from 'react-router-dom'; 
import imagepresentation from './imagepresentation/image_presentation.png';
import projetPortofolio from './projetPortofolio/projet-portofolio.png';
import projetArgentBank from './projetArgentBank/projet-argent-bank.png';
import qwenta from './qwanta/projet-qwenta.png';
function Home() {
  const text = 'Développeuse web Frontend';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setIndex(0);
        setDisplayedText('');
      }, 2000);
    }
  }, [index]);
  const navigate=useNavigate()
  const handlClick=()=>{
    navigate('/projets')
  }
  return (
    <div className="container-aceeuil">
      <div className="page-wrapper">
        <div className="content">
          <h1>
            <br />

            <span className="hello">
              Salut !<span className="hand">👋🏻</span>
              <br />
              <span className="me">je suis</span>{' '}
              <span className="name">Kahina SAIDI</span>
              <br />
              <motion.div
              initial={{ x: '0%' }} // Texte commence hors de l'écran à droite
              animate={{ x: 100 }} // Le texte se déplace jusqu'à sa position finale
              transition={{ duration: 3 }} // Durée de l'animation
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'orange',
              }}
              >
                {displayedText}
              </motion.div>
            </span>
            <br />
          </h1>
          <img src={imagepresentation} alt="imagepresentation"></img>
        </div>
        <div className="btn-contact">
          <button className="btn1">Contacter-moi</button>
          <button className="btn2">Mon-CV</button>
        </div>

        <div className="button-container">
          <button className="btn1"></button>
          <button className="btn2"></button>
          <button className="btn3"></button>
        </div>
        <div className="resentation">
          <div>
            <img
              className="logo"
              src={imagescceuil}
              alt="image_presentation"
            ></img>
          </div>
          <div className=" presentation-texte">
            <h2>
              À Propos <span></span>{' '}
            </h2>
            <p>
              Je me suis plongé dans le monde fascinant de la programmation,et je peux dire que j'ai déjà acquis une solide base, du moins je
              l'espère… 🤷‍♂️
            </p>
          </div>
        </div>
        <div className="mes-projet">
          <h2>
            Mes derniers<span> Projets</span>{' '}
          </h2>
          <div className="projet-img">
            <div className="image-container">
              <img src={projetPortofolio} alt="Portfolio" />
              <div className="overlay">
                <span className="image-title">Portfolio</span>
              </div>
            </div>
            <div className="image-container">
              <img src={projetArgentBank} alt="Argent Bank" />
              <div className="overlay">
                <span className="image-title">Argent Bank</span>
              </div>
            </div>
            <div className="image-container">
              <img src={qwenta} alt="Qwenta" />
              <div className="overlay">
                <span className="image-title">Qwenta</span>
              </div>
            </div>
          </div>

          <div className="trouver-projet">
            <button className="btn-trouver-projet"
            onClick= {handlClick}
            
            >
              Plus de projets <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
