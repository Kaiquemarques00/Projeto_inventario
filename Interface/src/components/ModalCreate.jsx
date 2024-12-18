import React, { useState, useEffect } from "react";

import Dropdown from "./Dropdown";

import "./Modal.style.css";

const ModalCreate = ({ closeModal, title, labels, inputs, change, submit, page  }) => {

  const changesKeys = Object.keys(change);
  
  return (
    <>
      <section className="modal-overlay">
        <article className="modal-content">
          <h1>{title}</h1>
          <form action="">
            {labels.map((labelTitle, index) => (
              <article key={index}>
                <label htmlFor={inputs[index]}>{labelTitle}</label>
                <input type="text" onChange={change[changesKeys[index]]}/>
              </article>
            ))}
            <Dropdown change={change.changeCategory} page={page}/>
          </form>
          <article className="buttons-container">
            <button className="add-button" onClick={submit}>
              Adicionar
            </button>
            <button className="close-button" onClick={closeModal}>
              Fechar
            </button>
          </article>
        </article>
      </section>
    </>
  );
};

export default ModalCreate;
