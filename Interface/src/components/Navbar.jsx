import React, { useState } from 'react';

import logo from '../assets/product.svg';
import menu from '../assets/menu.svg';

import './Navbar.style.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const links = document.querySelector("#links");
        console.log(links);
        links.classList.toggle("d-none");
        links.classList.toggle("d-flex");
    };

    return ( 
        <>
            <header className='d-flex justify-content-between p-1 flex-wrap'>
                <img src={logo} className='align-self-center logo ms-3' alt="Logo da empresa" />
                <img src={menu} className='align-self-center me-5 menu' alt="Icone de um menu" onClick={toggleMenu}/>
                <nav id='links' className='d-none align-items-center direction'>
                    <ul className='d-flex align-items-center m-0 p-0 gap-2 flex-column'>
                        <li className='nav-item'><a className='nav-link text-primary fs-5 mb-2' href="/home">Home</a></li>
                        <li className='nav-item'><a className='nav-link text-primary fs-5 mb-2' href="/produtos">Produtos</a></li>
                        <li className='nav-item'><a className='nav-link text-primary fs-5 mb-2' href="/categorias">Categorias</a></li>
                        <li className='nav-item'><a className='nav-link text-primary fs-5 mb-2' href="/movimentacoes">Movimentações</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
 
export default Navbar;