import React from 'react'
import '../App.css'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'

function ContactForm() {
    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID || ''
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || ''
    const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || ''

    let navigate = useNavigate()

    const redirect = () => {
        navigate('/thank_you')
    }

    const sendEmail = (e: any) => {
        e.preventDefault()
        redirect()

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className='section form_section'>
            <div className='title'>Contact Us</div>
            <form className='form' onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='email' placeholder='Email'/>
                <select name='group'>
                    <option value='Did not select'>Group</option>
                    <option value='Melody Makers'>Melody Makers</option>
                    <option value='Rhythmic Resilience'>Rhythmic Resilience</option>
                    <option value='SoulBeat'>SoulBeat</option>
                </select>
                <textarea className='message' name='message' placeholder='Message'></textarea>
                <input type='submit' className='submit'/>
            </form>
        </div>
    )
}

export default ContactForm
