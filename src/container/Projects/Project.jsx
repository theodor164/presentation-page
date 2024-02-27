// Project.js
import React from 'react';
import ImageWithModal from '../../components/ImageWithModal';
import './Projects.css'

const Project = ({ imageUrl }) => {
  return (
    <div className="project">
      <ImageWithModal imageUrl={imageUrl}/>
    </div>
  );
};

export default Project;