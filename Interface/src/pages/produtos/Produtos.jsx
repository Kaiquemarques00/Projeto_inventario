import React from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import "./Produtos.style.css"

const Produtos = () => {
    const sidebar = document.querySelector(".sidebar");
    
    window.addEventListener('scroll', function() {
        const sidebar = document.querySelector(".sidebar");
        if (window.scrollY > 50) {
            sidebar.classList.add("scroll");
        } else if (window.scrollY <= 50){
            sidebar.classList.remove("scroll");
        }
      });
    
    console.log(sidebar)

    return ( 
        <>
            <Appbar />
            <Sidebar />
            <main>
                <h1 className='title'>Produtos</h1>
                <section id='features'>
                    <button>Adicionar</button>
                    <input type="search" name="" id="" />
                </section>
                <section id='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Coluna tabela</th>
                                <th>Coluna tabela</th>
                                <th>Coluna tabela</th>
                                <th>Coluna tabela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                                <td>Linha tabela</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
}
 
export default Produtos;