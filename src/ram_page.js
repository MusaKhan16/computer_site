import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import ProductsView from './products_view.js'

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