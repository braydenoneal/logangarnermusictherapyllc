import React from 'react'
import '../App.css'
import './Services.css'
import SignUpForm from '../components/SignUpForm';

function Services() {
    return (
        <div className='container services'>
            <div className='content'>
                <div className='section'>
                    <div className='title'>Consulting for group or individualized music therapy services:</div>
                    <div className='paragraph email'>Email: <a className='email_link' href='mailto: logarnermt@gmail.com'>logarnermt@gmail.com</a></div>
                    <div className='paragraph phone'>Phone: 573-220-3406</div>
                </div>
                <div className='section'>
                    <div className='title'>Spring 2024 Groups at Compass Inc.</div>
                    <div className='paragraph'>1107 University Ave</div>
                    <div className='paragraph'>Columbia, MO 65203</div>
                </div>
                <div className='section'>
                    <div className='title'>Melody Makers for neurodiverse and neurotypical toddlers</div>
                    <div className='paragraph'>This group will aim to improve social skills, encourage cooperative play, and promote inclusivity of neurodiversity. Evidence-based music interventions will be utilized to create positive music experiences for the toddlers and parents.</div>
                </div>
                <div className='section'>
                    <div className='title'>Rhythmic Resilience for individuals with Parkinson’s disease</div>
                    <div className='paragraph'>This group will aim to improve the motor/cognitive functions of people with Parkinson’s disease. Using evidenced-based therapeutic drumming and music interventions, participants will develop cognitive and motor skills to combat the impact and degenerative symptoms of Parkinson’s disease.</div>
                </div>
                <div className='section'>
                    <div className='title'>SoulBeat for teenage males</div>
                    <div className='paragraph'>This group will aim to increase the coping and emotional regulation skills as well as improve mood for teen males. Using evidence-based psychoeducational techniques within therapeutic drumming, participants will develop a sense of holistic wellness.</div>
                </div>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default Services
