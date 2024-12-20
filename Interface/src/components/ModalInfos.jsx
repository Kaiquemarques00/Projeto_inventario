import React, { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import ModalConfirm from "./ModalConfirm";

import MetodsApi from "../services/API";

import "./Modal.style.css";

const ModalInfos = ({ title, handleEdit, handleDelete, item, inputs, page, closeModal, isDisable }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsReadOnly(!isReadOnly);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
};

  return (
    <>
      <section className="modal-overlay">
        <article className="modal-content">
          <h1>{`${title}${item.id}`}</h1>
          {page === "products" ? (
            <form action="">
              <article>
                <label htmlFor="">Produto ID: </label>
                <input type="number" defaultValue={item.id} readOnly />
              </article>
              <article>
                <label htmlFor="">Nome: </label>
                <input
                  type="text"
                  defaultValue={item.nome}
                  readOnly={isReadOnly}
                  onChange={(e) => inputs[0](e.target.value)}
                />
              </article>
              <article>
                <label htmlFor="">Descrição: </label>
                <textarea
                  defaultValue={item.descricao}
                  readOnly={isReadOnly}
                  onChange={(e) => inputs[1](e.target.value)}
                ></textarea>
              </article>
              <article>
                <label htmlFor="">Quantidade: </label>
                <input
                  type="number"
                  defaultValue={item.quantidade}
                  readOnly={isReadOnly}
                  onChange={(e) => inputs[2](parseInt(e.target.value))}
                />
              </article>
              <article>
                <label htmlFor="">Preço: </label>
                <input
                  type="text"
                  defaultValue={item.preco}
                  readOnly={isReadOnly}
                  onChange={(e) => inputs[3](parseFloat(e.target.value))}
                />
              </article>

              {isReadOnly ? (
                <article>
                  <label htmlFor="">Categoria: </label>
                  <input
                    type="text"
                    defaultValue={item.categoria}
                    readOnly={isReadOnly}
                  />
                </article>
              ) : (
                <Dropdown
                  page={page}
                  change={(e) => inputs[4](parseInt(e.target.value))}
                />
              )}
            </form>
          ) : (
            <p hidden>Carregando Modal</p>
          )}
          {page === "categories" ? (
            <form action="">
              <article>
                <label htmlFor="">ID: </label>
                <input
                  type="number"
                  defaultValue={item.id}
                  readOnly
                />
                <label htmlFor="">Nome: </label>
                <input
                  type="text"
                  defaultValue={item.nome_categoria}
                  readOnly={isReadOnly}
                  onChange={(e) => inputs[0](e.target.value)}
                />
              </article>
            </form>
          ) : (
            <p hidden>Carregando Modal</p>
          )}
          {page === "movements" ? (
            <form action="">
              <article>
                <label htmlFor="">ID: </label>
                <input
                  type="number"
                  defaultValue={item.id}
                  readOnly
                />
                <label htmlFor="">Produto ID: </label>
                <input
                  type="number"
                  defaultValue={item.produto_id}
                  readOnly
                />
                <label htmlFor="">Nome do Produto: </label>
                <input
                  type="text"
                  defaultValue={item.nome}
                  readOnly
                />
                <label htmlFor="">Tipo: </label>
                <input
                  type="text"
                  defaultValue={item.tipo}
                  readOnly
                />
                <label htmlFor="">Quantidade: </label>
                <input
                  type="number"
                  defaultValue={item.quantidade}
                  readOnly
                />
                <label htmlFor="">Data de movimentação: </label>
                <input
                  type="text"
                  defaultValue={item.data}
                  readOnly
                />
              </article>
            </form>
          ) : (
            <p hidden>Carregando Modal</p>
          )}
          {isReadOnly ? (
            <article className="buttons-container">
              {isDisable ? (
                <button className="edit-button button-block" disabled onClick={handleEditClick}>
                  Editar
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  Editar
                </button>
              )}
              <button className="close-button" onClick={closeModal}>
                Fechar
              </button>
            </article>
          ) : (
            <article className="buttons-container">
              <button className="add-button" onClick={handleEdit}>
                Salvar
              </button>
              <button className="delete-button" onClick={handleOpenModal}>
                Deletar
              </button>
              <button className="close-button" onClick={closeModal}>
                Fechar
              </button>
            </article>
          )}
        </article>
        <ModalConfirm show={isModalOpen} title={`Deseja excluir este ${title}`} onConfirm={handleDelete} onCancel={handleCloseModal} />
      </section>
    </>
  );
};

export default ModalInfos;
