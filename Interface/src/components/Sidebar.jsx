import React from 'react';

import "./Sidebar.style.css"

import homeIcon from '../assets/home.svg';
import produtoIcon from '../assets/product.svg';
import categoryIcon from '../assets/category.svg';
import movementIcon from '../assets/movement.svg';


const Sidebar = () => {

    return ( 
        <>
            <nav className='sidebar'>
                <button>
                    <a href="/">
                        <img src={homeIcon} alt="" />
                        <p>Home</p>
                    </a>
                </button>
                <button>
                    <a href="/produtos">
                        <img src={produtoIcon} alt="" />
                        <p>Produto</p>
                    </a>
                </button>
                <button>
                    <a href="/categorias">
                        <img src={categoryIcon} alt="" />
                        <p>Categoria</p>
                    </a>
                </button>
                <button>
                    <a href="/movimentacoes">
                        <img src={movementIcon} alt="" />
                        <p>Movimentações</p>
                    </a>
                </button>
            </nav>
        </>
    );
}
 
export default Sidebar;