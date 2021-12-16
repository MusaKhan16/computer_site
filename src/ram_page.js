import React from 'react'
import Header from './header'
import Footer from './footer'
import ProductsView from './products_view'

function RamPage() {
    return (
        <div className="wrap h-full grid-body">
            <Header />
            <ProductsView endpoint='get-ram' />
            <Footer />
        </div>
    )
}

export default RamPage