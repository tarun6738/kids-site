// WordCard.jsx
import React, { useState } from 'react';
import './wordcard.css';
import { MdOutlineFileDownload } from 'react-icons/md';

const WordCard = ({ word, meaning, onDrop, onDragOver, matched }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [hasDropped, setHasDropped] = useState(false);

  const cardStyle = {
    backgroundColor: matched ? '#51de51' : 'white',
    border: isDraggingOver ? '2px dashed #333' : 'none',
  };

  const handleDrop = () => {
    setIsDraggingOver(false);
    setHasDropped(true);
    onDrop(word);
  };

  return (
    <div
      className="card-container"
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
        onDragOver(e);
      }}
      onDragLeave={() => setIsDraggingOver(false)}
      style={cardStyle}
    >
      {isDraggingOver && !hasDropped ? (
        <div className="drag-over-content">
          <h4>Drop the Image here</h4>
          <div className="centered-icon">
            <MdOutlineFileDownload class="drop-icon" size={50} />
          </div>
        </div>
      ) : (
        <>
          <h1 className='titleWord'>{word}</h1>
          <p className='titleMeaning'>{meaning}</p>
        </>
      )}
    </div>
  );
};

export default WordCard;
