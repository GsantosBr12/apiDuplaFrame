import React from 'react';
import './card.css'

function CardStikers({ stikers}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={stikers.image} alt={` ${stikers.type}, Adesivo ${stikers.name}`} width="100" />
      <h3>{stikers.name}</h3>
    </div>
  );
}

export default CardStikers;