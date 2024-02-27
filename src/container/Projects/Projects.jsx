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
    { id: 1, imageUrl: mapsImage, projectTitle: "Gazetteer", projectLink: "https://cristinasipos.co.uk/gazetteer/" },
    { id: 2, imageUrl: meditatiiImage, projectTitle: "Business Website", projectLink: "https://www.directbrand.ro/meditatii-piata-romana/" },
    { id: 3, imageUrl: pizzaImage, projectTitle: "Pizza Business Website", projectLink: "https://www.pizzabigfamily.ro/" },
    { id: 4, imageUrl: apiImage, projectTitle: "API's Data Request", projectLink: "https://cristinasipos.co.uk/" }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        {images.map((image, index) => (
          <Project key={index} imageUrl={image.imageUrl} projectTitle={image.projectTitle} projectLink={image.projectLink}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;