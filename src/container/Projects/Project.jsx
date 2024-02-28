// Project.js
import React from 'react';
import ImageWithModal from '../../components/ImageWithModal';
import './Projects.css'

const Project = ({ images, imageUrl }) => {
  return (
    <div className="project">
      <ImageWithModal images={images} imageUrl={imageUrl} />
    </div>
  );
};

export default Project;