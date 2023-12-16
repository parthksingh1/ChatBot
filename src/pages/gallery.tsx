// Gallery.tsx

import React from 'react';
import '../gallery.css';
import Navbar from '../components/Navbar';

const images = [
  '/src/assests/devpragay.jpg',
  '/src/assests/Haridwar.jpg',
  '/src/assests/360_F_142765801_UDsnj0J6WevOxCGdhqkyQM10tAAEVFGq.jpg',
  '/src/assests/herosection.jpg',
  '/src/assests/donate.avif',
  '/src/assests/rishikesh.jpg',
  '/src/assests/newnew.jpg',
  '/src/assests/donate.avif',
  '/src/assests/rishikesh.jpg',
  '/src/assests/Haridwar.jpg',
  '/src/assests/donate.avif',
  '/src/assests/rishikesh.jpg',
];

const captions = [
  'Beautiful Sunset',
  'Spiritual Haridwar',
  'River Ganges',
  'Serene Landscape',
  'Support the Cause',
  'Sacred Rishikesh',
  'Natures Bounty',
  'Ghats of Haridwar',
  'Tranquil Rishikesh',
  'Holy Haridwar',
  'Make a Difference',
  'Majestic Rishikesh',
];

const Gallery: React.FC = () => {
  return (
      <div>
          <Navbar />
      <h1 className="gallery-heading">Namami Gange</h1>
      <p className="gallery-description">Explore the beauty of the Ganges through these stunning images.</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Image ${index + 1}`} />
            <div className="caption">{captions[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
