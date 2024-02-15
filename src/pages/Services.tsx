import React from 'react'
import '../App.css'
import './Services.css'
import SignUpForm from '../components/SignUpForm';

function Services() {
    return (
        <div className='page'>
            <div className='main'>
                <div className='section'>
                    <div className='title' style={{ fontSize: '14pt' }}>Consulting for group or individualized music
                        therapy services
                    </div>
                    <div className='paragraph email'>Email: <a className='email_link'
                                                               href='mailto: logarnermt@gmail.com'>logarnermt@gmail.com</a>
                    </div>
                    <div className='paragraph phone'>Phone: 573-220-3406</div>
                </div>
                <div className='section center'>
                    <div className='title'>March 2024 Music Therapy Groups</div>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>LOCATION: Compass Inc.</div>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>ADDRESS:</div>
                    <div className='image_section'>
                        <img id='compass_inc_logo' src='images/pages/services/compass_inc_logo.png'
                             alt='Compass Inc. Logo'/>
                        <div className='section'>
                            <div className='paragraph'>1107 University Ave</div>
                            <div className='paragraph'>Columbia, MO 65203</div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>REGISTRATION NOW OPEN for the following
                        groups:
                    </div>
                </div>
                <div className='section'>
                    <img id='melody_makers' src='images/pages/services/melody_makers.png' alt='Melody Makers'/>
                    <div className='title'>Melody Makers</div>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>For neurodiverse and neurotypical toddlers
                    </div>
                    <div className='paragraph'>This group will aim to improve social skills, encourage cooperative play,
                        and promote inclusivity of neurodiversity. Evidence-based music interventions will be utilized
                        to create positive music experiences for the toddlers and parents.
                    </div>
                    <div className='paragraph'>
                        <div>Mondays, 9am - 10am</div>
                        <div>OR</div>
                        <div>Mondays, 10:30am - 11:30am</div>
                        <div>DATES:</div>
                        <div className='indent'>
                            <div>3/11/2024</div>
                            <div>3/18/2024</div>
                            <div>3/25/2024</div>
                            <div>4/1/2024</div>
                        </div>
                        <div>FEE: $200</div>
                    </div>
                </div>
                <div className='section'>
                    <img id='soulbeat' src='images/pages/services/soulbeat.png' alt='SoulBeat'/>
                    <div className='title'>SoulBeat</div>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>For teenage males</div>
                    <div className='paragraph'>This group will aim to increase the coping and emotional regulation
                        skills as well as improve mood for teen males. Using evidence-based psychoeducational techniques
                        within therapeutic drumming, participants will develop a sense of holistic wellness.
                    </div>
                    <div className='paragraph'>
                        <div>Tuesday's, 7:30pm - 8:30pm</div>
                        <div>DATES:</div>
                        <div className='indent'>
                            <div>3/12/2024</div>
                            <div>3/19/2024</div>
                            <div>3/26/2024</div>
                            <div>4/2/2024</div>
                        </div>
                        <div>FEE: $200</div>
                    </div>
                </div>
                <div className='section'>
                    <img id='rhythmic_resilience' src='images/pages/services/rhythmic_resilience.png'
                         alt='Rhythmic Resilience'/>
                    <div className='title'>Rhythmic Resilience</div>
                    <div className='paragraph' style={{ fontSize: '14pt' }}>For individuals with Parkinson’s disease
                    </div>
                    <div className='paragraph'>This group will aim to improve the motor/cognitive functions of people
                        with Parkinson’s disease. Using evidenced-based therapeutic drumming and music interventions,
                        participants will develop cognitive and motor skills to combat the impact and degenerative
                        symptoms of Parkinson’s disease.
                    </div>
                    <div className='paragraph'>
                        <div>Tuesday's & Thursday's, 9am - 10am</div>
                        <div>DATES:</div>
                        <div className='indent'>
                            <div>3/12/2024, 3/14/2024</div>
                            <div>3/19/2024, 3/21/2024</div>
                            <div>3/26/2024, 3/28/2024</div>
                            <div>4/2/2024, 4/4/2024</div>
                        </div>
                        <div>FEE: $350</div>
                    </div>
                </div>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default Services
