import React from 'react'
import './home.css'

const IMG1 = require('../../assets/img-home-1.png')
const IMG2 = require('../../assets/img-home-2.png')
const IMG3 = require('../../assets/img-home-3.png')

export default function Home() {
    return (
        <>
            <main>
                <section className='title'>
                    <h1>DONA MIA</h1>
                    <p>Um lugar como a sua casa</p>
                    <button>Ver o Menu</button>

                    <div className='images-title'>
                        <img src={IMG1} alt="" />
                        <img src={IMG2} alt="" />
                        <img src={IMG3} alt="" />
                    </div>
                </section>

            </main>

        </>
    )
}