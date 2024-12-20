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
          {page === "movements" ? (
            <form action="">
              <Dropdown change={change} page={page}/>
              <article key={labels.length + 1}>
                  <label htmlFor={inputs[0]}>{labels[0]}</label>
                  <input type="number" onChange={change.changeAmount}/>
                </article>
            </form>
          ) : (
            <form action="">
              {labels.map((labelTitle, index) => (
                <article key={index}>
                  <label htmlFor={inputs[index]}>{labelTitle}</label>
                  <input type="text" onChange={change[changesKeys[index]]}/>
                </article>
              ))}
              <Dropdown change={change} page={page}/>
            </form>
          )}
          
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
