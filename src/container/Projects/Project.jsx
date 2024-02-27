// Project.js
import React from 'react';
import ImageWithModal from '../../components/ImageWithModal';
import './Projects.css'

const Project = ({ imageUrl, projectTitle, projectLink }) => {
  return (
    <div className="project">
      <ImageWithModal imageUrl={imageUrl} projectTitle={projectTitle} projectLink={projectLink}/>
    </div>
  );
};

export default Project;