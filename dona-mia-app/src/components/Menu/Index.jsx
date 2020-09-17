import React from 'react'
import './menu.css'
import { Link, animateScroll as scroll } from "react-scroll";


export default function Menu() {
    return (
        <header>
                <nav>
                    <a href="/">PÁGINA INICIAL</a>
                    <Link to="#reservation" className='link-reservation' smooth>RESERVAS</Link>
                    <a href="/about">NOSSA HISTÓRIA</a>
                    <a href="/menu">MENU</a>
                    <a href="/ordering">PEDIDOS ONLINE</a>
                    <Link to="#contact-us" className='link-contact-us' smooth>CONTATO</Link>
                </nav>
        </header>
    )
}