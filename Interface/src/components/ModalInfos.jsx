import React, { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import ModalConfirm from "./ModalConfirm";

import MetodsApi from "../services/API";

import "./Modal.style.css";

const ModalInfos = ({ title, product, closeModal }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const api = new MetodsApi();

  const currentDatas = {
    name: product.nome,
    description: product.descricao,
    amount: product.quantidade,
    price: product.preco,
    category_id: product.categoria_id,
  };

  const editedDatas = {
    name: name,
    description: description,
    amount: amount,
    price: price,
    category_id: category_id,
  };

  let differences = {};

  for (let key in currentDatas) {
    if (currentDatas[key] !== editedDatas[key]) {
      differences[key] = editedDatas[key];
    }
  }

  for (let key in editedDatas) {
    if (!(key in currentDatas)) {
      differences[key] = editedDatas[key];
    }
  }

  const handleSendEdit = async (e) => {
    e.preventDefault();

    await api.changeProduct(differences, product.id);
  };

  const handleEditClick = () => {
    setIsReadOnly(!isReadOnly);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
};

const handleConfirm = async (e) => {
    e.preventDefault();

    await api.deleteProduct(product.id);

    setIsModalOpen(false);
};

  return (
    <>
      <section className="modal-overlay">
        <article className="modal-content">
          <h1>{`${title}${product.id}`}</h1>
          <form action="">
            <article>
              <label htmlFor="">Produto ID: </label>
              <input type="number" defaultValue={product.id} readOnly />
            </article>
            <article>
              <label htmlFor="">Nome: </label>
              <input
                type="text"
                defaultValue={product.nome}
                readOnly={isReadOnly}
                onChange={(e) => setName(e.target.value)}
              />
            </article>
            <article>
              <label htmlFor="">Descrição: </label>
              <textarea
                defaultValue={product.descricao}
                readOnly={isReadOnly}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </article>
            <article>
              <label htmlFor="">Quantidade: </label>
              <input
                type="number"
                defaultValue={product.quantidade}
                readOnly={isReadOnly}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </article>
            <article>
              <label htmlFor="">Preço: </label>
              <input
                type="text"
                defaultValue={product.preco}
                readOnly={isReadOnly}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </article>

            {isReadOnly ? (
              <article>
                <label htmlFor="">Categoria: </label>
                <input
                  type="text"
                  defaultValue={product.categoria}
                  readOnly={isReadOnly}
                />
              </article>
            ) : (
              <Dropdown
                page="produtos"
                change={(e) => setCategory(parseInt(e.target.value))}
              />
            )}
          </form>
          {isReadOnly ? (
            <article className="buttons-container">
              <button className="edit-button" onClick={handleEditClick}>
                Editar
              </button>
              <button className="close-button" onClick={closeModal}>
                Fechar
              </button>
            </article>
          ) : (
            <article className="buttons-container">
              <button className="add-button" onClick={handleSendEdit}>
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
        <ModalConfirm show={isModalOpen} title="Teste" onConfirm={handleConfirm} onCancel={handleCloseModal} />
      </section>
    </>
  );
};

export default ModalInfos;
