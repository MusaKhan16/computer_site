import React from 'react'
import Header from './header'
import Footer from './footer'
import ProductsView from './products_view'

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
