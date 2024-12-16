import React, { useState } from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import "./Produtos.style.css"

const Produtos = () => {
    const sidebar = document.querySelector(".sidebar");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    window.addEventListener('scroll', function() {
        const sidebar = document.querySelector(".sidebar");
        if (window.scrollY > 50) {
            sidebar.classList.add("scroll");
        } else if (window.scrollY <= 50){
            sidebar.classList.remove("scroll");
        }
      });

    return (
        <>
            <Appbar />
            <Sidebar />
            <main>
                <h1 className='title'>Produtos</h1>
                <section id='features'>
                    <button onClick={openModal}>Adicionar</button>
                    <input type="search" name="" id="" />
                    {isModalOpen && <Modal closeModal={closeModal} />}
                </section>
                <section id='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Coluna tabela</th>
                                <th>Coluna tabela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sapato numero 1</td>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sapato numero 2</td>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sapato numero 3</td>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
}
 
export default Produtos;