import React from 'react';

const Footer = () => {
    return ( 
        <>
            <footer className='d-flex justify-content-center mb-3'>
                <p className='fs-7 w-100 text-center'><small className='fs-7 w-100 text-center'>&copy; {new Date().getFullYear()} Direitos Reservados - TGL Systems</small></p>
            </footer>
        </>
    );
}
 
export default Footer;