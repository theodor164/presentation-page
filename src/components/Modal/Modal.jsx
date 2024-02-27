import React from 'react';
import './Modal.css'

const Modal = ({ imageUrl, projectTitle, projectLink, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>{projectTitle}</h3>
        <img src={imageUrl} alt="ModalImage" />
        <p>Project link: <a href={projectLink} target="_blank" rel="noopener noreferrer">{projectLink}</a></p>
      </div>
    </div>
  );
};

export default Modal;
