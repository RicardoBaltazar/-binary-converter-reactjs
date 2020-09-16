import React, { Component } from 'react'
import './formReservation.css'


export default class FormReservation extends Component {
    render() {
        return (
            <>
                <section className='section-form'>
                    <form action="">
                        <p>Fazer uma reserva</p>

                        <input type="date" name="" id="" />
                        <input type="time" name="" id="" />
                        <input type="datetime" name="" id="" />
                        <button type="submit">Reservar uma mesa</button>
                    </form>
                </section>
            </>
        )
    }
}