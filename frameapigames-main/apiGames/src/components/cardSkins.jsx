import React from 'react';
import './card.css'


function CardSkins({ skins }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={skins.image} alt={`Skin ${skins.name}`} width="100" />
      <h3>{skins.name}</h3>
    </div>
  );
}

export default CardSkins;
