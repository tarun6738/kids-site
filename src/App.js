import React, { useState, useEffect } from 'react';
import './App.css';
import WordContainer from './components/WordContainer';
import ImageContainer from './components/ImageContainer';
import matchedAnimation from './animationgif.gif';
import correctAudio from './correctansedit.mp3'; // Path to your correct audio file
import incorrectAudio from './errorsound.mp3'; // Path to your incorrect audio file

const App = () => {
  const [draggedImage, setDraggedImage] = useState(null);
  const [matchedWords, setMatchedWords] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  const handleDragStart = (e, imageName) => {
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
        setShowAnimation(true);
        setAudioSrc(correctAudio);
      }
    } else {
      console.log('No match 😢');
      setAudioSrc(incorrectAudio);
    }
    setDraggedImage(null);
  };

  const handleAnimationEnd = () => {
    // Add a delay before hiding the animation
    setTimeout(() => {
      setShowAnimation(false);
      setAudioSrc(null);
    }, 500); // Adjust the delay as needed
  };

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  }, [audioSrc]);

  return (
    <div className="main-container">
      <div className="word-container">
        <WordContainer onDrop={handleDrop} matchedWords={matchedWords} />
      </div>
      <div className="image-container">
        <ImageContainer
          draggedImage={draggedImage}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </div>
      {showAnimation && (
        <div className={`animation-container ${showAnimation ? '' : 'hidden'}`}>
          <img
            className="animation-gif"
            src={matchedAnimation}
            alt="Matched Animation"
            onAnimationEnd={handleAnimationEnd}
          />
        </div>
      )}
    </div>
  );
};

export default App;
