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
            <section id='slogan' className='d-flex w-100 px-4'>
                <h1 className='mt-5 pt-5 mb-5 w-100 text-center'>Controle Total, Simplicidade Máxima: Seu Inventário na Palma da Mão.</h1>
            </section>
            <section id='features' className='d-flex flex-column m-0 row'>
                <h1 className='text-center my-5 py-5 px-0 mb-4 col-12'>Features</h1>
                <section id='cards' className='d-flex  align-items-lg-start  m-0 p-0 row'>
                    <article className='feature-stock d-flex flex-column align-items-center mb-4 col-12 col-md-4'>
                        <img src={product} className='w-25' alt="Icone para feature de produto" />
                        <h2 className='mt-4 mb-4 fs-2'>Controle de estoque</h2>
                        <h3 className='text-center fs-4 px-4 mb-4 fw-normal'>Tenha controle total sobre o seu estoque com funcionalidades essenciais para o dia a dia:</h3>
                        <ol className='p-0'>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Cadastro de Produtos: Registre seus produtos com descrições, preços e códigos únicos.</p>
                            </li>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Monitoramento em Tempo Real: Acompanhe as entradas e saídas do estoque e mantenha os níveis atualizados.</p>
                            </li>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Histórico de Movimentação: Consulte movimentações passadas para manter a organização e rastreabilidade.</p>
                            </li>
                        </ol>
                    </article>
                    <article className='feature-category d-flex flex-column align-items-center mb-4 col-12 col-md-4'>
                        <img src={category} className='w-25' alt="Icone para feature de categorias" />
                        <h2 className='mt-4 mb-4 fs-2'>Categorias de Produtos</h2>
                        <h3 className='text-center fs-4 px-4 mb-4 fw-normal'>Organize seus produtos de forma simples e eficiente:</h3>
                        <ol className='p-0'>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Classificação Personalizada: Crie categorias de acordo com o seu negócio.</p>
                            </li>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Busca e Filtragem Avançada: Encontre produtos rapidamente usando filtros por categorias ou palavras-chave.</p>
                            </li>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Análise por Categoria: Avalie o desempenho de grupos de produtos para otimizar sua estratégia.</p>
                            </li>
                        </ol>
                    </article>
                    <article className='feature-reports d-flex flex-column align-items-center mb-5 col-12 col-md-4'>
                        <img src={report} className='w-25' alt="Icone para feature de relatórios" />
                        <h2 className='mt-4 mb-4 fs-2'>Relatórios</h2>
                        <h3 className='text-center fs-4 px-4 mb-4 fw-normal'>Obtenha insights detalhados para tomar melhores decisões:</h3>
                        <ol className='p-0'>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6'>Desempenho do Estoque: Identifique produtos de maior quantidade e os que estão encalhados.</p>
                            </li>
                            <li>
                                <p className='text-sm-start text-lg-center px-4 fs-6 mb-5'>Geração Automática de Relatórios: Acesse as informações dos relatórios atualizadas com um click.</p>
                            </li>
                        </ol>
                    </article>
                </section>
            </section>
            <section id='plans' className='d-flex flex-column align-items-center'>
                <h1 className='mb-4'>Planos</h1>
                <article className='basic-plan align-self-center text-center'>
                    <h2 className='fs-2 pb-3'>Basic Plan</h2>
                    <p className='px-4 fs-4'>R$ 49,99</p>
                    <p className='px-4'>Controle de Estoque com cadastro de até 100 produtos.</p>
                    <p className='px-4'>Relatórios de estoque simples</p>
                    <p className='px-4'>Preço acessível.</p>
                </article>
                <article className='advanced-plan align-self-center text-center mb-5 pb-5'>
                <h2 className='fs-2 pb-3'>Advanced Plan</h2>
                    <p className='px-4 fs-4'>R$ 99,99</p>
                    <p className='px-4'>Controle de Estoque sem limite de produtos.</p>
                    <p className='px-4'>Alertas e monitoramento avançados do estoque.</p>
                    <p className='px-4'>Relatórios detalhados e personalizados.</p>
                    <p className='px-4'>Busca e filtragem avançada por categorias.</p>
                </article>
            </section>
            <Footer />
        </> 
    );
}
 
export default Home;