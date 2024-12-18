import React, { useState, useEffect } from 'react';

const ModalConfirm = ({ show, title, onConfirm, onCancel }) => {
    if (!show) {
        return null;
    }
    
    return ( 
        <>
            <section className="modal-overlay">
                <article className="modal-content error-control">
                <h1>{title}</h1>
                <article className="buttons-container error-control-button">
                    <button className="add-button" onClick={onConfirm}>
                        Confirmar
                    </button>
                    <button className="close-button" onClick={onCancel}>
                        Fechar
                    </button>
                </article>
                </article>
            </section>
        </>
    );
}
 
export default ModalConfirm;