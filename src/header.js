import React from 'react'
import { HiLightningBolt } from 'react-icons/hi'

function Header() {
    return (
        <div className='m-200'>
            <header className='flex justify-around align-center w-max'>
                <section className='main flex gap-200 align-center justify-around w-1-5'>
                    <div className='neuro-morphic-out p-100'><HiLightningBolt style={{ padding: '0' }} size={64} /></div>
                    <h1 className='f-l title'>Zodiac</h1>
                </section>
                <nav className='flex items-centered w-1-4'>
                    <ul className='Head flex justify-around align-center'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Video Cards</a></li>
                        <li><a href='/'>Processors</a></li>
                        <li><a href='/'>RAM</a></li>
                        <li><a href='/'>About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header