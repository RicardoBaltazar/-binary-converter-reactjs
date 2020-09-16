import React from 'react'
import './home.css'

const IMG1 = require('../../assets/img-home-1.png')
const IMG2 = require('../../assets/img-home-2.png')
const IMG3 = require('../../assets/img-home-3.png')
const IMG5 = require('../../assets/img-home-5.png')

export default function Home() {
    return (
        <>
            <main>
                <section className='title'>
                    <h1>DONA MIA</h1>
                    <p>Um lugar como a sua casa</p>
                    <button>Ver o Menu</button>

                    <div className='images-title'>
                        <img src={IMG1} alt="receita" />
                        <img src={IMG2} alt="receita" />
                        <img src={IMG3} alt="receita" />
                    </div>
                </section>

                <section className='about'>
                    <img src={IMG5} alt=""/>

                    <div>
                        <h2>Um sonho que vem cozinhando por anos</h2>
                        <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. 
                            É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim 
                            para adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade 
                            para arrastar e soltar em qualquer lugar da página. Sou um ótimo lugar para 
                            você contar a sua história aos seus clientes.</p>
                        <a href="">Leia Mais</a>
                    </div>
                </section>
            </main>

        </>
    )
}