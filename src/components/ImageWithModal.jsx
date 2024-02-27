// ImageWithModal.jsx
import React, { useState } from 'react';
import Modal from './Modal/Modal'; // Assuming you have a Modal component

const ImageWithModal = ({ imageUrl, projectTitle, projectLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img src={imageUrl} alt='projectImage' onClick={handleImageClick} />
      {isOpen && <Modal imageUrl={imageUrl} projectTitle={projectTitle} projectLink={projectLink} closeModal={closeModal} />}
    </>
  );
};

export default ImageWithModal;
