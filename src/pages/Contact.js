import React from 'react';
import PizzaLeft from '../img/pizzaLeft.jpeg'
import '../styles/Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className='rightSide'>
                <h1>Contact</h1>
                <form id='contact-form' method="POST">
                    <label htmlFor='name'>Full name</label>
                    <input name='name' placeholder='Enter full name...' type="text"/>
                    <label htmlFor='email'>Email</label>
                    <input name='email' placeholder='Enter email...' type="email"/>
                    <label htmlFor='message'>message</label>
                    <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;