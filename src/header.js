import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import { HiLightningBolt, HiMenu } from 'react-icons/hi'


function Header() {

    useEffect(() => {
        if (!localStorage.cart) localStorage.setItem('cart', '[]');
    }, [])

    return (
        <div className='m-y-2'>
            <header className='flex justify-around align-center w-max'>
                <div className='neuro-morphic-out p-175 flex items-centered'><HiLightningBolt style={{ padding: '0' }} size={68} /></div>
                <h1 className='f-l title'>Zodiac</h1>
                <div><HiMenu size={32} className='nav-icon' /></div>
                <nav className='Nav'>
                    <ul className='Head flex justify-around align-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/video-cards'>Video Cards</Link></li>
                        <li><Link to='/processors'>Processors</Link></li>
                        <li><Link to='/ram'>RAM</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li className='prim-icon-color'><BsCartFill size={24} /></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header