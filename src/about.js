import React from 'react';
import Header from './header'

function About() {
    return (
        <div className="h-full">
            <Header />
            <div className="flex items-centered">
                <p>Hi, this websit is still in development if any bugs are evident please contact me <a href='/'>here</a></p>
            </div>
        </div>
    )
}

export default About