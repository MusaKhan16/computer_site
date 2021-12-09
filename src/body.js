import React from 'react'

function Body() {
    return (
        <div className="body flex justify-around align-center h-full t-c">
            <section className="flex flex-col justify-around">
                <div className='f-title'>
                    <h1 className="underline">Welcome to Zodiac</h1>
                    <p>
                        Zodiac is a new startup selling the newest<br />
                        computing products from <span className="bold">Your</span> favourite<br />
                        stores.
                    </p>
                </div>
                <button className='neuro-morphic-in shop-b fl bold'>Shop Now</button>
            </section>
            <section className='flex items-centered'>
                <img width='60%' alt='PC' src='https://www.seekpng.com/png/full/291-2914051_artist-render-of-nzxt-aer-rgb-fans-within.png' />
            </section>
        </div>
    )
}

export default Body