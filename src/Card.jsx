import React from 'react';
import './style.css'
const Card = ({ imageUrl, altText, title, description,explore }) => {
  return (
    <div className="card">
      <img className="card__img" src={imageUrl} alt={altText} />
      <div className="card__content">
        <h1 className="card__header">{title}</h1>
        <div className="card__text-wrapper">
          <p className="card__text">{description}</p>
        </div>
        <button className="card__btn" onClick={() => window.open(explore)}>Explore <span>&rarr;</span></button>
      </div>
    </div>
  );
};

export default Card;
