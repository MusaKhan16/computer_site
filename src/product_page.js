import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Specifications from './specs'
import Header from './header'
import Footer from './footer'

function ProductPage(props) {
    const { title } = useParams()
    const [componentData, upComponentData] = useState({})
    const [render, upRender] = useState(false)

    const getComponentData = () => {
        axios.post(`/.netlify/functions/get-${props.type}`, { title: title })
            .then(({ data }) => {
                console.log(data)
                // Check if data exists. Render an error
                upComponentData(data[0])
                upRender(true)
            })
    }

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart'))

        for (let product of cart) {
            if (product.name === title) {
                product.quantity++
                localStorage.setItem('cart', JSON.stringify(cart))
                alert(`Item added successfully. The cart now has ${product.quantity} of this item`)
                return
            }
        }
        cart.push({ name: title, quantity: 1 })
        localStorage.setItem('cart', JSON.stringify(cart))
        alert('Item Added successfully')
    }

    useEffect(getComponentData, [props.type, title])
    // fIx frontend design absolute bs.
    return (
        <div className='h-full grid-body'>
            <Header />
            {
                render && (
                    <div className='flex items-centered h-full'>
                        <div className="product-grid-layout">
                            <img className='sixteen-nine rounded-200 m-y-2' src={componentData.img_url} alt={componentData.title} />

                            <section className='details flex flex-col justify-center'>

                                <h1>
                                    <a
                                        href={componentData.reference_url}
                                        className='f-title underline'
                                        style={{ borderBottom: 'none' }}>
                                        {componentData.title}
                                    </a>
                                </h1>
                                <Specifications specs={componentData.specifications} number={6} />
                                <h2>{componentData.price}</h2>

                                <button className='neuro-morphic-out bold m-y-2' onClick={addToCart}>
                                    Add to Cart
                                </button>
                            </section>

                            <section className='description'>
                                <h3>Description:</h3>
                                <p>{componentData.description}</p>
                            </section>
                        </div>
                    </div>
                )
            }
            <Footer />
        </div >
    )
}

export default ProductPage