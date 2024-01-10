import React, { useState } from 'react';
import './App.css'
import WordContainer from './components/WordContainer'
import ImageContainer from './components/ImageContainer'
const App = () => {
  const [draggedImage, setDraggedImage] = useState(null);
  const [matchedWords, setMatchedWords] = useState([]);
  const handleDragStart = (imageName) => {
    setDraggedImage(imageName);
    console.log(`Dragging image: ${imageName}`);
  };
  const handleDragEnd = () => {
    setDraggedImage(null);
  };

  const handleDrop = (targetWord) => {
    console.log(`Dropped ${draggedImage} on word: ${targetWord}`);
    if (draggedImage === targetWord) {
      // Check if the word is not already matched
      if (!matchedWords.includes(targetWord)) {
        console.log('Matched!');
        // Add the matched word to the state
        setMatchedWords((prevMatchedWords) => [...prevMatchedWords, targetWord]);
      }
    }
    else{
      console.log('No match 😢')
    }
    setDraggedImage(null);
    
  };
  return (
    <div className="main-container">
    <WordContainer onDrop={handleDrop} matchedWords={matchedWords}/>
    <ImageContainer
      draggedImage={draggedImage}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  </div>
  )
}

export default App
