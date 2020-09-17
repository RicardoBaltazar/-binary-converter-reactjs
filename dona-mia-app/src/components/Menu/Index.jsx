import React from 'react'
import './menu.css'
import { Link, animateScroll as scroll } from "react-scroll";


export default function Menu() {
    return (
        <header>
                <nav>
                    <a href="">PÁGINA INICIAL</a>
                    <Link to="#reservation" className='link-reservation' smooth>RESERVAS</Link>
                    <a href="">NOSSA HISTÓRIA</a>
                    <a href="">MENU</a>
                    <a href="">PEDIDOS ONLINE</a>
                    <Link to="#contact-us" className='link-contact-us' smooth>CONTATO</Link>
                </nav>
        </header>
    )
}