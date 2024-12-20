import React, { useState, useEffect } from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ModalCreate from '../../components/ModalCreate';
import ModalInfos from '../../components/ModalInfos';

import MetodsApi from '../../services/API'

import "../produtos/Produtos.style.css"

const Produtos = () => {
    const sidebar = document.querySelector(".sidebar");
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalInfosOpen, setIsModalInfosOpen] = useState(false);
    const [product_id, setProductId] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [movementSelected, setMovementSelected] = useState("");
    const [movements, setMovement] = useState("");
  
    const openModalInfos = (movement) => {
        setMovementSelected(movement);
        setIsModalInfosOpen(true);
    };

    const closeModalInfos = () => {
        setMovementSelected(null);
        setIsModalInfosOpen(false);
    };

    const api = new MetodsApi();

    const openModalCreate = () => setIsModalCreateOpen(true);
    const closeModalCreate = () => setIsModalCreateOpen(false);

    const changes = {
        changeProduct: (e) => setProductId(e.target.value),
        changeType: (e) => setType(e.target.value),
        changeAmount: (e) => setAmount(e.target.value),
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        api.createMovement([product_id, type, amount]);
    }

    const fetchData = async () => {
        const movementsAPI = await api.getAllMovements();
        setMovement(movementsAPI);
    };
    
    window.addEventListener('scroll', function() {
        const sidebar = document.querySelector(".sidebar");
        if (window.scrollY > 50) {
            sidebar.classList.add("scroll");
        } else if (window.scrollY <= 50){
            sidebar.classList.remove("scroll");
        }
      });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Appbar />
            <Sidebar />
            <main>
                <h1 className='title'>Movimentações</h1>
                <section id='features'>
                    <button onClick={openModalCreate}>Adicionar</button>
                </section>
                {isModalCreateOpen && <ModalCreate closeModal={closeModalCreate} 
                    title="Formulário Movimentações"
                    labels={["Quantidade: "]}
                    inputs={["amount"]}
                    change={changes}
                    submit={handleSubmit}
                    page="movements"
                />}
                <section id='table'>
                    {movements ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movements.map((movement) => (
                                    <tr key={movement.id} onClick={() => openModalInfos(movement)}>
                                        <td>{movement.id}</td>
                                        <td>{movement.nome}</td>
                                        <td>{movement.quantidade}</td>
                                        <td>{movement.data}</td>
                                    </tr>
                                ))}
                                {isModalInfosOpen && <ModalInfos title="Movimentação " 
                                item={movementSelected}
                                inputs={[setProductId, setType, setAmount]}
                                page="movements"
                                isDisable={true}
                                closeModal={closeModalInfos}
                                />}
                            </tbody>
                        </table>
                    ) : (
                        <p>Carregando Dados...</p>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
 
export default Produtos;