import React, { useState } from "react";

import "./Modal.style.css";

const Modal = ({ closeModal  }) => {

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Modal</h2>
          <p>Conteúdo do modal aqui!</p>
          <button className="close-button" onClick={closeModal}>
            Fechar
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
