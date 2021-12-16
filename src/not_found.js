import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex flex-col items-centered h-max">
            <h1>404 Page not Found!</h1>
            <Link to='/'>Lets go home!</Link>
        </div>
    )
}

export default NotFound