import React from 'react';

import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Produtos = () => {
    return ( 
        <>
            <Appbar />
            <Sidebar />
            <main >
                <h1>Produtos</h1>
                <section id='features'>
                    <button>Adicionar</button>
                    <article>
                        <input type="search" name="" id="" />
                    </article>
                </section>
                <section id='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Coluna tabela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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