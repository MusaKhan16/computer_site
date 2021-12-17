import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
    return (
        <div className="flex flex-wrap justify-around align-center t-c">
            <section className="main flex flex-col justify-around">
                <div className='flex flex-col justify-around f-title '>
                    <h1 className="underline">Welcome to Zodiac</h1>
                    <p>
                        Zodiac is a new startup selling the newest<br />
                        computing products from your favourite<br />
                        stores.
                    </p>
                </div>
                <Link style={{ borderBottom: 'none' }} to='products'>
                    <button className='neuro-morphic-in shop-b fl bold'>Shop Now</button>
                </Link>
            </section>
            <section className='flex items-centered'>
                <img width='70%' alt='PC' src='https://www.seekpng.com/png/full/291-2914051_artist-render-of-nzxt-aer-rgb-fans-within.png' />
            </section>
        </div>
    )
}

export default Body