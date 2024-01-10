import React, { useState } from 'react';
import './wordcard.css';

const WordCard = ({ word, meaning, onDrop, onDragOver,matched }) => {
    
    const cardStyle = {
        backgroundColor: matched ? '#51de51' : 'white',
         // Increase size when dragged over
      };
  return (
    <div
      className="card-container"
      onDrop={() => onDrop(word)}  
      onDragOver={onDragOver}
      
      style={cardStyle}
    >
      <h1 className='titleWord'>{word}</h1>
      <p className='titleMeaning'>{meaning}</p>
    </div>
  );
};

export default WordCard;