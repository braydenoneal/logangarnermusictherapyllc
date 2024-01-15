import React from 'react'
import '../App.css'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='text'>
                <div className='info'>Contact Info</div>
                <div className='email'>Email: <a className='email_link' href='mailto: logarnermt@gmail.com'>logarnermt@gmail.com</a></div>
                <div className='phone'>Phone: 573-220-3406</div>
            </div>
        </div>
    );
}

export default Footer
