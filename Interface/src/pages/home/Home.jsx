import React from 'react';


import product from '../../assets/product.svg'
import category from '../../assets/category.svg'
import report from '../../assets/report.svg'


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Home = () => {
    return ( 
        <>
            <Navbar />
            <section id='slogan'>
                <h1>Controle Total, Simplicidade Máxima: Seu Inventário na Palma da Mão.</h1>
            </section>
            <section id='features'>
                <h1>Features</h1>
                <article className='feature-stock'>
                    <img src={product} alt="Icone para feature de produto" />
                    <h2>Controle de estoque</h2>
                    <h3>Tenha controle total sobre o seu estoque com funcionalidades essenciais para o dia a dia:</h3>
                    <ol>
                        <li>
                            <p>Cadastro de Produtos: Registre seus produtos com descrições, preços e códigos únicos.</p>
                        </li>
                        <li>
                            <p>Monitoramento em Tempo Real: Acompanhe as entradas e saídas do estoque e mantenha os níveis atualizados.</p>
                        </li>
                        <li>
                            <p>Histórico de Movimentação: Consulte movimentações passadas para manter a organização e rastreabilidade.</p>
                        </li>
                    </ol>
                </article>
                <article className='feature-category'>
                    <img src={category} alt="Icone para feature de categorias" />
                    <h2>Categorias de Produtos</h2>
                    <h3>Organize seus produtos de forma simples e eficiente:</h3>
                    <ol>
                        <li>
                            <p>Classificação Personalizada: Crie categorias de acordo com o seu negócio.</p>
                        </li>
                        <li>
                            <p>Busca e Filtragem Avançada: Encontre produtos rapidamente usando filtros por categorias ou palavras-chave.</p>
                        </li>
                        <li>
                            <p>Análise por Categoria: Avalie o desempenho de grupos de produtos para otimizar sua estratégia.</p>
                        </li>
                    </ol>
                </article>
                <article className='feature-reports'>
                    <img src={report} alt="Icone para feature de relatórios" />
                    <h2>Relatórios</h2>
                    <h3>Obtenha insights detalhados para tomar melhores decisões:</h3>
                    <ol>
                        <li>
                            <p>Desempenho do Estoque: Identifique produtos de maior quantidade e os que estão encalhados.</p>
                        </li>
                        <li>
                            <p>Geração Automática de Relatórios: Acesse as informações dos relatórios atualizadas com um click.</p>
                        </li>
                    </ol>
                </article>
            </section>
            <section id='plans'>
                <h1>Planos</h1>
                <article className='basic-plan'>
                    <h2>Basic Plan</h2>
                    <p>R$ 49,99</p>
                    <p>Controle de Estoque com cadastro de até 100 produtos.</p>
                    <p>Relatórios de estoque simples</p>
                    <p>Preço acessível.</p>
                </article>
                <article className='advanced-plan'>
                <h2>Advanced Plan</h2>
                    <p>R$ 99,99</p>
                    <p>Controle de Estoque sem limite de produtos.</p>
                    <p>Alertas e monitoramento avançados do estoque.</p>
                    <p>Relatórios detalhados e personalizados.</p>
                    <p>Busca e filtragem avançada por categorias.</p>
                </article>
            </section>
            <Footer />
        </> 
    );
}
 
export default Home;