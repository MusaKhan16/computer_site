import React from 'react'
import { Link } from 'react-router-dom'
import Specifications from './specs'

function ComponentCard({ data }) {
    const { img_url, title, specifications, price } = data
    return (
        <Link style={{ borderBottom: 'none' }} to={title}>
            <div className='cursor-pointer component-card flex flex-col rounded-200 gap-none color-white'>
                <img src={img_url} alt={title} className='product-image' />
                <section className='flex flex-col p-150'>
                    <h1 className='underline'>{title}</h1>
                    <h2>{price} cad</h2>
                    <Specifications specs={specifications} />
                </section>
            </div>
        </Link >
    )
}

export default ComponentCard