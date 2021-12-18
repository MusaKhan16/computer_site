import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsPage from './product_page.js'

function DynamicProductPage() {
    const { type } = useParams()
    return <ProductsPage type={type} />
}

export default DynamicProductPage