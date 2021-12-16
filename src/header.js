import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import { HiLightningBolt } from 'react-icons/hi'


function Header() {

    useEffect(() => {
        if (!localStorage.cart) localStorage.setItem('cart', '[]');
    }, [])

    return (
        <div className='m-y-2'>
            <header className='flex justify-around align-center w-max'>
                <section className='main flex gap-200 align-center justify-around w-1-5'>
                    <div className='neuro-morphic-out p-100'><HiLightningBolt style={{ padding: '0' }} size={64} /></div>
                    <h1 className='f-l title'>Zodiac</h1>
                </section>
                <nav className='flex items-centered w-1-4'>
                    <ul className='Head flex justify-around align-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/video-cards'>Video Cards</Link></li>
                        <li><Link to='/processors'>Processors</Link></li>
                        <li><Link to='/ram'>RAM</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/cart' className='prim-icon-color'><BsCartFill size={24} /></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header