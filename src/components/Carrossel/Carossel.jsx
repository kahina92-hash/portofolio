import React, { useState, useEffect } from 'react';
import './carousel.scss';
const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Nettoie l'intervalle quand le composant se démonte
  }, [images, interval]);
  if (!Array.isArray(images) || images.length === 0) {
    return <p>Aucune image disponible.</p>;
  }

  // Défilement automatique des images

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={goToPrevious}>
        ❮
      </button>
      <img
        src={process.env.PUBLIC_URL + images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
      <button className="next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
