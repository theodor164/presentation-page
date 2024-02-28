// ImageWithModal.jsx
import React, { useState } from 'react';
import Modal from './Modal/Modal'; // Assuming you have a Modal component

const ImageWithModal = ({ images, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img src={imageUrl} alt='projectImage' onClick={() => handleImageClick(images.findIndex(image => image.imageUrl === imageUrl))} />
      {isOpen && <Modal images={images} currentIndex={currentIndex} closeModal={closeModal} />}
    </>
  );
};

export default ImageWithModal;
