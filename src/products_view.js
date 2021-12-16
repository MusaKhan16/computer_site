import React, { useState } from 'react'
import axios from 'axios'
import ComponentCard from './component_card'

function ProductsView(props) {
    const [data, upDate] = useState([])
    const [render, upRender] = useState(false)

    const getComponents = () => {
        axios.post(`/.netlify/functions/${props.endpoint}`, {})
            .then((request) => {
                upDate(request.data)
                upRender(true)
            })

    }

    useState(getComponents, [props.endpoint])

    return (
        <div className='m-2'>
            <div className="component-view-grid">
                {render && data.map((value, idx) => <ComponentCard key={idx} data={value} />)}
            </div>
        </div>
    )
}

export default ProductsView