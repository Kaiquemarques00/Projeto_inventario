import React from 'react';

import logo from '../assets/logo.png';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import whatsapp from '../assets/whatsapp.svg';

const Footer = () => {
    return ( 
        <>
            <footer>
                <p>
                    <img src={logo} alt="Logo da empresa"/>
                    &copy; {new Date().getFullYear()} Direitos Reservados - TGL Systems
                </p>
                <article className='infos'>
                    <p><small>R. Dionizia Itália Bino, 120 Centro, São José dos Pinhais/PR</small></p>
                    <p><small>Segunda a sexta - 08:00/20:00</small></p>
                    <p><small>Sábado - 09:00/13:00</small></p>
                </article>
                <article className='social-media'>
                    <p>
                        <a href="#"><img src={instagram} alt="Icone do instagram" /></a>
                    </p>
                    <p>
                        <a href="#"><img src={linkedin} alt="Icone do linkedin" /></a>
                    </p>
                    <p>
                        <a href="#"><img src={whatsapp} alt="Icone do whatsapp" /></a>
                    </p>
                </article>
            </footer>
        </>
    );
}
 
export default Footer;