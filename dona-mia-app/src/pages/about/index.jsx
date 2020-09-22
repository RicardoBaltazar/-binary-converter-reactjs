import React from 'react'
import './about.css'

import NewsLetter from '../../components/NewsLetter/index'

const IMG_ABOUT1 = require('../../assets/img-page-about1.png')

export default function PageAbout() {
    return (
        <>
            <main>
                <section className='about'>
                    <img src={IMG_ABOUT1} alt="imagem"/>
                    <h2>Nossa História</h2>
                    <p>Nossa família entende de massa</p>
                    <hr />

                    <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu texto.
                    É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes
                    sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes.
                    Sinta-se à vontade para arrastar e soltar em qualquer lugar em sua página.
                    Sou um ótimo lugar para você contar a sua história aos seus clientes.
                    </p>

                    <p>
                        Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços.
                        Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e
                        sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a
                        ideia de iniciar o seu negócio e o que o torna diferente de seus competidores.
                        Faça com que sua empresa se destaque e mostre quem você é.
                    </p>
                </section>
                <NewsLetter />
            </main>

        </>
    )
}