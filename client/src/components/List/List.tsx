import React from 'react';
import Card from '../Card';
import { Word } from '../../models/Word';
import './List.css';

import CreateCard from '../CreateCard';

const List: React.FC<{ createCard: Function; deleteCard: Function; words: Word[] }> = ({ createCard, deleteCard, words }) => {
  return (
    <div className="list">
      {words.map(word => (
        <Card
          deleteCard={deleteCard}
          key={word.id}
          id={word.id}
          image={word.image}
          name={word.name}
          description={word.description}
          audio={word.audio}
        />
      ))}
      <CreateCard createCard={createCard} />
    </div>
  );
};

export default List;
