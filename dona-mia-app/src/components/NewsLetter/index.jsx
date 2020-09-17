import React, { Component } from 'react'
import './newsLetter.css'

export default class NewsLetter extends Component {
    render() {
        return (
            <>
                <footer>
                    <form action="">
                        <input type="email" name="" id="" placeholder='&#9993; Endereço de email'/>
                        <button>Assine Já!</button>

                    </form>

                    <p>Obrigado pela preferência! &#10084;</p>
                </footer>
            </>
        )
    }
}