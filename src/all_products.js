import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductsView from './products_view'
import Footer from './footer'
import Header from './header'

const components = ['get-cpu', 'get-ram', 'get-gpu']

function AllProducts() {
    return (
        <div className="h-full grid-body">
            <Header />
            {
                components.map((data, idx) => {
                    return (
                        <div className='m-y-2' key={idx}>
                            <h1 className="t-c underline title">{
                                data
                                    .slice(4)
                                    .replace(/^\w/, (c) => c.toUpperCase())}
                            </h1>
                            <ProductsView endpoint={data} />
                        </div>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default AllProducts