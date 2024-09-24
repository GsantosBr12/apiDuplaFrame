import React from 'react';
import CardStikers from './cardstikers';

function ListaStikers({ stikers }) {
  return (
    <div>
      {stikers.map((stikers) => (
        <CardStikers
          key={stikers.id}
          stikers={stikers}
        />
      ))}
    </div>
  );
}

export default ListaStikers;
