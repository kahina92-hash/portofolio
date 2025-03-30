import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import imagescceuil from './imagescceuil/Logo.png';
import imagepresentation from './imagepresentation/image_presentation.png';
import projetPortofolio from './projetPortofolio/projet-portofolio.png';
import projetArgentBank from './projetArgentBank/projet-argent-bank.png';
import qwenta from './qwanta/projet-qwenta.png';

function Home({ isMenuOpen }) {
  const text = 'Développeuse web Frontend';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf'; // Tu peux personnaliser le nom du fichier téléchargé ici
    link.click();
  };
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

  return (
    <div className={`container-aceeuil ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="page-wrapper">
        <div className="content">
          <h1>
            <span className="hello">
              Salut ! <span className="hand">👋🏻</span>
              <br />
              <span className="me">Je suis</span>{' '}
              <span className="name">Kahina SAIDI</span>
              <br />
              <div className="text-container">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1.5 }}
                  className="animated-text"
                >
                  {displayedText}
                </motion.div>
              </div>
            </span>
          </h1>
          <img src={imagepresentation} alt="imagepresentation" />
        </div>

        <div className="btn-contact">
          <button className="btn1" onClick={() => navigate('/contact')}>
            Contacter-moi
          </button>
          <button className="btn2" onClick={downloadCV}>
            Mon CV
          </button>
        </div>

        <div className="button-container">
          <button className="btn1"></button>
          <button className="btn2"></button>
          <button className="btn3"></button>
        </div>

        <div className="presentation">
          <div>
            <img className="logo" src={imagescceuil} alt="image_presentation" />
          </div>
          <div className="presentation-texte">
            <h2>
              À Propos <span></span>
            </h2>
            <p>
              Je me suis plongé dans le monde fascinant de la programmation, et
              je peux dire que j'ai déjà acquis une solide base, du moins je
              l'espère… 🤷‍♂️
            </p>
          </div>
        </div>

        <div className="mes-projet">
          <h2>
            Mes derniers <span>Projets</span>
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
            <button
              className="btn-trouver-projet"
              onClick={() => navigate('/projets')}
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
