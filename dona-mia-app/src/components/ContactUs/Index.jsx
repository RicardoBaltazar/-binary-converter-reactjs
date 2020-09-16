import React, { Component } from 'react'
import './contactUs.css'

export default class FormContactUs extends Component {
    render() {
        return (
            <>
                <form action="" className='form-contact-us'>
                    <div>
                        <input type="text" name="" id="" placeholder='Nome Completo'/>
                        <input type="email" name="" id="" placeholder='Email'/>
                    </div>
                    <input type="text" name="" id="" placeholder='Telefone'/>
                    <button type="submit">Enviar</button>
                </form>
            </>
        )
    }
}