import React from 'react';
import './Modal.css'

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={imageUrl} alt="ModalImage" />
      </div>
    </div>
  );
};

export default Modal;
