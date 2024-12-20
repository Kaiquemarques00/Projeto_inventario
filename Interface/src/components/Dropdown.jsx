import React, { useState, useEffect } from "react";

import MetodsApi from '../services/API'

import "./Dropdown.style.css"


const Dropdown = ({ page, change }) => {

    const [categories, setCategories] = useState("");
    const [products, setProducts] = useState("");
    const api = new MetodsApi();

    console.log(products);
    

    useEffect(() => {
        const fetchData = async () => {
            const categoriesAPI = await api.getAllCategories();
            const productsAPI = await api.getAllProducts();

            setCategories(categoriesAPI);
            setProducts(productsAPI);
        };

        fetchData();
    }, []);

    if (page === "products") {
        if (categories) {
            return (
                <article className="dropdown-container">
                    <label htmlFor="">Categorias</label>
                    <select name="" id="" key={1} onChange={change.changeCategory}>
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>{`${category.id} - ${category.nome_categoria}`}</option>
                      ))}
                    </select>
                </article>
            )
        }
    }
    
    if (page === "movements") {
        if (products) {
            return (
                <article className="dropdown-container">
                    <label htmlFor="">Produto</label>
                    <select key={1} onChange={change.changeProduct}>
                        {products.map((product) => (
                            <option value={product.id} key={product.id}>{`${product.id} - ${product.nome}`}</option>
                        ))}
                    </select>
                    <label htmlFor="">Tipo de movimentação</label>
                    <select key={2} onChange={change.changeType}>
                        <option value={"Entrada"} key={1}>Entrada</option>
                        <option value={"Saida"} key={2}>Saida</option>
                    </select>
                </article>
            )
        }
    }
}
 
export default Dropdown;