import React from 'react'
import '../App.css'
import './Home.css'
import ContactForm from '../components/ContactForm'

function Home() {
    return (
        <div>
            <div className='image wide' style={{
                backgroundImage: `url('images/pages/home/home_page_image.jpg')`,
            }}>
                <div className='centered'>
                    <div className='title'>Garner Music Therapy LLC</div>
                    <div className='paragraph'>Providing Community, Empowerment, and Healing through the power of
                        MUSIC
                    </div>
                </div>
            </div>
            <div className='page'>
                <div className='main'>
                    <div className='mission'>
                        <img className='logo' src='images/icon/logo500.png' alt='Logo'/>
                        <div className='section'>
                            <div className='title'>Our Mission</div>
                            <div className='paragraph'>Through evidenced-based music therapy services, we aim to empower
                                individuals to achieve their highest potential by enhancing their physical, emotional,
                                cognitive, and social well-being.
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='title'>Music Therapy</div>
                        <div className='paragraph'>Music therapy is the utilization of evidence-based and clinical music
                            interventions by a credentialed professional in order to achieve individualized objectives
                            and goals within a therapeutic relationship.
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Home
