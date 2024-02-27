// Projects.jsx
import React from 'react';
import mapsImage from '../../assets/maps.png';
import meditatiiImage from '../../assets/meditatii.jpg';
import pizzaImage from '../../assets/pizza.jpg';
import apiImage from '../../assets/api.png';
import './Projects.css'
import Project from './Project';

const Projects = () => {
  const images = [
    { id: 1, imageUrl: mapsImage },
    { id: 2, imageUrl: meditatiiImage },
    { id: 3, imageUrl: pizzaImage },
    { id: 4, imageUrl: apiImage }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        {images.map((image, index) => (
          <Project key={index} imageUrl={image.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Projects;