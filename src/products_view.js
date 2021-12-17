import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ComponentCard from './component_card'


function ProductsView(props) {
    const [data, upDate] = useState([])
    const [render, upRender] = useState(false)

    useEffect(() => {
        axios.post(`/.netlify/functions/${props.endpoint}`, {})
            .then(({ data }) => {
                upDate(data)
                upRender(true)
            })
    }, [props.endpoint])

    return (
        <div className='m-2'>
            <div className="component-view-grid">
                {render && data.map((val, idx) => <ComponentCard key={idx} data={val} />)}
            </div>
        </div>
    )
}
export default ProductsView