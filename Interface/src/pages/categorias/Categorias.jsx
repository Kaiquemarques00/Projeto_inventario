import React, { useState, useEffect } from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ModalCreate from '../../components/ModalCreate';
import ModalInfos from '../../components/ModalInfos';

import MetodsApi from '../../services/API'

import "../produtos/Produtos.style.css"

const Categorias = () => {
    const sidebar = document.querySelector(".sidebar");
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalInfosOpen, setIsModalInfosOpen] = useState(false);
    const [name, setName] = useState("");
    const [categorySelected, setCategorySelected] = useState("");
    const [categories, setCategories] = useState("");
  
    const openModalInfos = (category) => {
        setCategorySelected(category);
        setIsModalInfosOpen(true);
    };

    const closeModalInfos = () => {
        setCategorySelected(null);
        setIsModalInfosOpen(false);
    };

    const api = new MetodsApi();

    const openModalCreate = () => setIsModalCreateOpen(true);
    const closeModalCreate = () => setIsModalCreateOpen(false);
    const changes = {
        changeName: (e) => setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        api.createCategory([name]);
    }

    const fetchData = async () => {
        const categoriesAPI = await api.getAllCategories();
        setCategories(categoriesAPI);
    };

    const handleSendEdit = async (e) => {
        e.preventDefault();
    
        const currentDatas = {
          name: categorySelected.nome
        };
      
        const editedDatas = {
          name: name
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
    
        await api.changeCategory(differences, categorySelected.id);
      };
      

      const handleConfirm = async (e) => {
        e.preventDefault();
    
        await api.deleteCategory(categorySelected.id);
    
        setIsModalOpen(false);
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
                <h1 className='title'>Categorias</h1>
                <section id='features'>
                    <button onClick={openModalCreate}>Adicionar</button>
                </section>
                {isModalCreateOpen && <ModalCreate closeModal={closeModalCreate} 
                    title="Formulário Categorias"
                    labels={["Nome: "]}
                    inputs={["name"]}
                    change={changes}
                    submit={handleSubmit}
                    page="categories"
                />}
                <section id='table'>
                    {categories ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category.id} onClick={() => openModalInfos(category)}>
                                        <td>{category.id}</td>
                                        <td>{category.nome_categoria}</td>
                                    </tr>
                                ))}
                                {isModalInfosOpen && <ModalInfos title="Categoria " 
                                handleEdit={handleSendEdit}
                                item={categorySelected}
                                inputs={[setName]}
                                page="categories"
                                handleDelete={handleConfirm}
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
 
export default Categorias;