import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import ProductsView from './products_view.js'

function GpuPage() {
    return (
        <div className="h-full grid-body">
            <Header />
            <ProductsView endpoint='get-gpu' />
            <Footer />
        </div>
    )

}

export default GpuPage
