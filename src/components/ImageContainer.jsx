// ImageContainer.jsx
import React from 'react';
import './imagescontainer.css';

const ImageContainer = ({ onDragStart, onDragEnd }) => {
  const imageData = [
    { src: '/Images/apple.png', alt: 'Image 1', name: 'Apple' },
    { src: '/Images/banana.png', alt: 'Image 2', name: 'Banana' },
    { src: '/Images/orange.png', alt: 'Image 3', name: 'Orange' },
    { src: '/Images/grapes.png', alt: 'Image 4', name: 'Grapes' },
    { src: '/Images/pineapple.png', alt: 'Image 5', name: 'Pineapple' },
    { src: '/Images/guava.png', alt: 'Image 6', name: 'Guava' },
  ];

  return (
    <div>
      <div className="images-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            name={image.name}
            draggable="true"
            onDragStart={(e) => onDragStart(e,image.name)}
            onDragEnd={onDragEnd}
            style={{ width: '162px', height: '166px', margin: '15px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
