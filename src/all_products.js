import React from 'react'
import ProductsView from './products_view.js'
import Footer from './footer.js'
import Header from './header.js'

const NameMappings = {
    'motherboard': "Motherboards",
    "case": "Cases",
    "nic": "NICs",
    "peripheral": "Peripherals",
}

const components = [
    'get-motherboard',
    'get-case',
    'get-nic',
    'get-peripheral'
]

function AllProducts() {
    return (
        <div className="h-full grid-body">
            <Header />
            {
                components.map((data, idx) => {
                    return (
                        <div className='m-y-2' key={idx}>
                            <h1 className="t-c underline title">
                                {NameMappings[data.slice(4)]}
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