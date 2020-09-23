import React, { Component } from 'react'
import './newsLetter.css'
import axios from 'axios'

const URL = 'http://localhost:8080/newsLetter'

export default class NewsLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this) 
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event) {
        const email = this.state.email

        axios.post(URL, {
            Email: email,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();
        alert('Obrigado pelo envio')


    }

    render() {
        return (
            <>
                <footer>
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="email" name="" id="" placeholder='&#9993; Endereço de email'
                        value={this.state.email} onChange={this.handleEmail}
                        />
                        <button>Assine Já!</button>

                    </form>

                    <p>Obrigado pela preferência! &#10084;</p>
                </footer>
            </>
        )
    }
}