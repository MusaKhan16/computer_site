import React from 'react'
import Header from './header'
import Footer from './footer'
import ProductsView from './products_view'

function CpuPage() {
    return (
        <div className="h-full grid-body">
            <Header />
            <ProductsView endpoint='get-cpu' />
            <Footer />
        </div>
    )
}

export default CpuPage