import React from 'react';
import PropTypes from 'prop-types';
import { Word } from '../../models/Word';
import './Card.css';

const Card: React.FC<Word> = ({ deleteCard, id, image, name, description, audio }) => {
  const playSound = (): void => {
    if (audio) {
      const sound = new Audio(audio);
      sound.play();
    }
  };
  const deleteCardFunc = () => (deleteCard ? deleteCard(id) : null);
  return (
    <div className="card">
      <img src={image} alt={name} onClick={playSound} />
      <div className="title">
        <h2>{name}</h2>
        <img onClick={deleteCardFunc} src="http://cdn.onlinewebfonts.com/svg/img_275374.png" alt="remove" />
      </div>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  audio: PropTypes.string,
};

export default Card;
