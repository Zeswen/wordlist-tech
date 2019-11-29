import React from 'react';
import PropTypes from 'prop-types';
import Word from '../../models/Word';
import './Card.css';

const Card: React.FC<Word> = ({ image, name, description, audio }) => {
  const playSound = (): void => {
    const sound = new Audio(audio);
    sound.play();
  };
  return (
    <div className="card">
      <img src={image} alt={name} onClick={playSound} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: 'https://bit.ly/2L2eygL',
  name: 'Name',
  description: 'Description',
  audio: undefined,
};

export default Card;
