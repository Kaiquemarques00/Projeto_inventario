import React from 'react';

import logo from '../assets/product.svg';
import logout from '../assets/logout.svg';

import "./Appbar.style.css"

const Appbar = () => {
    return ( 
        <>
            <header className='appbar'>
                <img src={logo} className='logo' alt="Logo da empresa" />
                <img src={logout} className='logout' alt="Icone de logout" />
            </header>
        </>
    );
}
 
export default Appbar;