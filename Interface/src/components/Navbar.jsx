import React from 'react';
import logo from '../assets/product.svg'

const Navbar = () => {
    return ( 
        <>
            <header className='d-flex justify-content-between px-3'>
                <img src={logo} className='w-25 h-25 align-self-center' alt="Logo da empresa" />
                <ul className='d-flex align-items-center m-0 p-0 gap-3'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/movimentacoes">Movimentações</a></li>
                </ul>
            </header>
        </>
    );
}
 
export default Navbar;