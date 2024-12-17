import React, { useState, useEffect } from "react";

import MetodsApi from '../services/API'

import "./Dropdown.style.css"


const Dropdown = ({ page, change }) => {

    const [categories, setCategories] = useState("");
    const api = new MetodsApi();

    useEffect(() => {
        const fetchData = async () => {
            const categoriesAPI = await api.getAllCategories();
            setCategories(categoriesAPI);
        };

        fetchData();
    }, []);

    if (page === "produtos") {
        if (categories) {
            return (
                <article className="dropdown-container">
                    <label htmlFor="">Categorias</label>
                    <select name="" id="" key={1} onChange={change}>
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>{`${category.id} - ${category.nome_categoria}`}</option>
                      ))}
                    </select>
                  </article>
            )
        }
    }
}
 
export default Dropdown;