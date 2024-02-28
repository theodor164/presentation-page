// Modal.jsx
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ images, currentIndex, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className='modal-content-content'>
          <div className="arrow left" onClick={goToPreviousImage}>&#10094;</div>
          <div>
            <h3>{images[currentImageIndex].projectTitle}</h3>
            <img src={images[currentImageIndex].imageUrl} alt="ModalImage" />
            <p>Project link: <a href={images[currentImageIndex].projectLink} target="_blank" rel="noopener noreferrer">{images[currentImageIndex].projectLink}</a></p>
          </div>
          <div className="arrow right" onClick={goToNextImage}>&#10095;</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
