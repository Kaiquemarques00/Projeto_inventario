import React from 'react';

import logo from '../assets/product.svg';
import logout from '../assets/logout.svg';

const Appbar = () => {
    return ( 
        <>
            <header>
                <img src={logo} alt="Logo da empresa" />
                <img src={logout} alt="Icone de logout" />
            </header>
        </>
    );
}
 
export default Appbar;