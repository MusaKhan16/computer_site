import React from 'react'
import { Link } from 'react-router-dom'
import Specifications from './specs'

function ComponentCard({ data }) {
    const { img_url, title, specifications, price, type } = data
    return (
        <Link style={{ borderBottom: 'none' }} to={type ? `${type}/${title}` : title}>
            <div className='cursor-pointer component-card flex flex-col rounded-200 gap-none color-white'>
                <img src={img_url} alt={title} className='product-image' />
                <section className='flex flex-col p-150'>
                    <h1 className='underline'>{title}</h1>
                    <h2>{price} CAD</h2>
                    <Specifications specs={specifications} number={4} />
                </section>
            </div>
        </Link >
    )
}

export default ComponentCard