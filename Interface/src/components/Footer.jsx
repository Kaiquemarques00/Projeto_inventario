import React from 'react';

import "./Footer.style.css"

const Footer = () => {
    return ( 
        <>
            <footer className='d-flex justify-content-center mb-3 align-items-end'>
                <p className='fs-7 w-100 mt-3 text-center'><small className='fs-7 w-100 text-center'>&copy; {new Date().getFullYear()} Direitos Reservados - TGL Systems</small></p>
            </footer>
        </>

        
    );
}
 
export default Footer;