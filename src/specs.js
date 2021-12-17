import React from 'react';

function Specifications({ specs, number }) {
    return (
        <div>
            <h3>Specifications: </h3>
            <ul>
                {
                    Object.keys(specs)
                        .splice(0, number)
                        .map((value, idx) => <li key={idx}>{value}: <span style={{ color: 'gray' }}>{specs[value]}</span></li>)
                }
            </ul>
        </div>
    )
}

export default Specifications