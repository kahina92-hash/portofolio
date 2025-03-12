import React from "react";
import './starsBackground.scss'

const StarsBackground = () => {
  const stars = Array.from({ length: 200 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    const top = Math.random() * 100 + "vh";
    const left = Math.random() * 100 + "vw";

    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          top,
          left,
        }}
      ></div>
    );
  });

  return <div className="background-stars">{stars}</div>;
};

export default StarsBackground;
