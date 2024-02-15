import React from 'react'
import '../App.css'
import './About.css'

function About() {
    return (
        <div className='page'>
            <div className='main'>
                <div className='photo_section'>
                    <div className='image_container'><img src='images/pages/about/logan_garner.jpg' alt='Logan Garner'/></div>
                    <div className='section'>
                        <div className='title'>Logan Garner, MT-BC, NICU-MT</div>
                        <div className='paragraph'>Logan Garner is the founder & owner of Garner Music Therapy LLC. Logan is a board certified music therapist who received his bachelor's degree from Drury University in 2023. His work focuses on fostering a sense of empowerment through the improvement of therapeutic relationships. He values exploring and applying the numerous ways in which music’s holistic nature influences client’s progress. In clinical sessions, he employs an array of inventive strategies and techniques to meet clients where they are and attend to their individual needs. Logan has expertise in the fields of geriatrics, mental and behavioral health in adolescents, and developmental disabilities.</div>
                    </div>
                </div>
                <div className='section'>
                    <div className='title'>Credentials</div>
                    <div className='paragraph'>The Music Therapist Board-Certified (MT-BC) credential is a medal of merit and signifies board certification. This credential is awarded to music therapists who have fulfilled the necessary requirements, which include earning a bachelor's degree in music therapy, successfully completing a 1200-hour internship, and passing the CBMT board certification exam.</div>
                    <div className='paragraph'>The Neonatal Intensive Care Unit-Music Therapist (NICU-MT) credential is a specialized certification for Music Therapists. It is granted upon successful completion of academic coursework, practical training, and the NICU-MT certification examination. NICU-MT's are trained to provide evidenced-based interventions that provide physiological, developmental, and social benefits to hospitalized infants.</div>
                </div>
            </div>
        </div>
    )
}

export default About
