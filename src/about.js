import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Zodiac from './images/zodiac_headquarters.jpg'
import { testimonies } from './customers.json'
import Testimonial from './testimonial.js';

function About() {
    return (
        <div className="h-full">
            <Header />
            <div className="flex items-centered">
                <div className="about">
                    <div className='zodiac-main flex flex-col items-centered'>
                        <img src={Zodiac} alt='Zodiac HQ' className='zodiac-img' />
                        <h1 className='title underline'>Hello! we are Zodiac!</h1>
                    </div>
                    <div className='align-start'>
                        <h2>About us</h2>
                        <p>
                            We are a team of PC enthusiasts wanting to pursue our dreams of owning a
                            PC store for others to purchase their computing products. We have a branch open in
                            Mississauga Ontario and looking forward to expand later on.
                        </p>
                    </div>
                    <div className='align-start'>
                        <h2>Why choose us?</h2>
                        <p>
                            Zodiac is a new startup selling computer products from your most favoured companies.
                            We provide quality assurance and reliability towards are customers.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About