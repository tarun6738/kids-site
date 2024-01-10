// WordContainer.jsx
import React from 'react';
import Wordcard from './Wordcard';
import './wordcontainer.css';

const WordContainer = ({ onDrop,matchedWords }) => {
  const wordsData = [
    { word: 'Apple', meaning: 'A red fruit' },
    { word: 'Banana', meaning: 'A yellow fruit' },
    { word: 'Orange', meaning: 'A citrus fruit' },
    { word: 'Pineapple', meaning: 'A Big fruit' },
    { word: 'Grapes', meaning: 'A green fruit' },
    { word: 'Guava', meaning: 'A good fruit' },
  ];

  return (
    <div className="words-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {wordsData.map((wordData, index) => (
        <Wordcard
          key={index}
          word={wordData.word}
          meaning={wordData.meaning}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          matched={matchedWords.includes(wordData.word)}
        />
      ))}
    </div>
  );
};

export default WordContainer;
