import React, { useState, useEffect } from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ModalCreate from '../../components/ModalCreate';
import ModalInfos from '../../components/ModalInfos';

import MetodsApi from '../../services/API'

import searcIcon from '../../assets/search.svg'

import "./Produtos.style.css"

const Produtos = () => {
    const sidebar = document.querySelector(".sidebar");
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalInfosOpen, setIsModalInfosOpen] = useState(false);
    const [name, setNome] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [productSelected, setProductSelected] = useState("");
    const [products, setProducts] = useState("");
    const [search, setSearch] = useState("");
  
    const openModalInfos = (product) => {
        setProductSelected(product);
        setIsModalInfosOpen(true);
    };

    const closeModalInfos = () => {
        setProductSelected(null);
        setIsModalInfosOpen(false);
    };

    const api = new MetodsApi();

    const openModalCreate = () => setIsModalCreateOpen(true);
    const closeModalCreate = () => setIsModalCreateOpen(false);
    const changes = {
        changeName: (e) => setNome(e.target.value),
        changeDescription: (e) => setDescription(e.target.value),
        changeAmount: (e) => setAmount(e.target.value),
        changePrice: (e) => setPrice(e.target.value),
        changeCategory: (e) => setCategory(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        api.createProduct([name, description, amount, price, category]);
    }

    const fetchData = async (query='') => {
        const productsAPI = await api.getAllProducts("categoria", query);
        setProducts(productsAPI);

        console.log(products);
    };

    const handleFilter = async () => {
        fetchData(search)
    }
    
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
                <h1 className='title'>Produtos</h1>
                <section id='features'>
                    <button onClick={openModalCreate}>Adicionar</button>
                    <article className='search'>
                        <input type="search" placeholder='Digite um categoria' onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
                        <button className='search-button' onClick={handleFilter}><img src={searcIcon} alt="icone de busca" /></button>
                    </article>
                </section>
                {isModalCreateOpen && <ModalCreate closeModal={closeModalCreate} 
                    title="Formulário Produtos"
                    labels={["Nome: ", "Descrição: ", "Quantidade: ", "Preço: "]}
                    inputs={["name", "description", "amount", "price"]}
                    change={changes}
                    submit={handleSubmit}
                    page="produtos"
                />}
                <section id='table'>
                    {products ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} onClick={() => openModalInfos(product)}>
                                        <td>{product.id}</td>
                                        <td>{product.nome}</td>
                                        <td>{product.quantidade}</td>
                                        <td>{product.preco}</td>
                                    </tr>
                                ))}
                                {isModalInfosOpen && <ModalInfos title="Produto " 
                                product={productSelected}
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