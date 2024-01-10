import React, { useState } from 'react';
import './wordcard.css';

const WordCard = ({ word, meaning, onDrop, onDragOver, matched }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const cardStyle = {
    backgroundColor: matched ? '#51de51' : 'white',
    
    transform: isDraggingOver ? 'scale(1.3)' : 'scale(1)', 
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
    onDragOver(e);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = () => {
    setIsDraggingOver(false);
    onDrop(word);
  };

  return (
    <div
      className="card-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={cardStyle}
    >
      
      <h1 className="titleWord">{word}</h1>
      <p className="titleMeaning">{meaning}</p>
    </div>
  );
};

export default WordCard;
