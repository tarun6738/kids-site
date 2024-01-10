import React, { useState, useEffect } from 'react';
import './App.css';
import WordContainer from './components/WordContainer';
import ImageContainer from './components/ImageContainer';
import matchedAnimation from './animationgif.gif';
import correctAudio from './correctansedit.mp3';
import incorrectAudio from './errorsound.mp3';

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

    const audio = draggedImage === targetWord ? new Audio(correctAudio) : new Audio(incorrectAudio);

    audio.play()
      .then(() => console.log('Audio is played'))
      .catch((error) => console.error('Error playing audio:', error));

    if (draggedImage === targetWord) {
      if (!matchedWords.includes(targetWord)) {
        console.log('Matched!');
        setMatchedWords((prevMatchedWords) => [...prevMatchedWords, targetWord]);

        
        setShowAnimation(true);
      }
    } else {
      console.log('No match 😢');
      audio.currentTime = 0;
    }

    setDraggedImage(null);
  };

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setShowAnimation(false);
      setAudioSrc(null);
    }, 500);
  };

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);

      const playAudio = () => {
        audio.play()
          .then(() => console.log('Audio is played'))
          .catch((error) => console.error('Error playing audio:', error));
      };

      if (audio.readyState >= 2) {
        playAudio();
      } else {
        audio.addEventListener('canplaythrough', playAudio, { once: true });
      }

      return () => {
        audio.removeEventListener('canplaythrough', playAudio);
      };
    }
  }, [audioSrc]);

  return (
    <>
      <div>
        <div className='heading'>
          <h1 className='main-heading'>Word Explorer</h1>
          <p className='tag-line'>Learn and Explore words in a playful manner</p>
        </div>
      </div>
      <div>
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
            <div
              className={`animation-container ${window.scrollY > 0 ? 'top' : ''}`}
              style={{ top: window.scrollY }}
            >
              <img
                className="animation-gif"
                src={matchedAnimation}
                alt="Matched Animation"
                onAnimationEnd={handleAnimationEnd}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
