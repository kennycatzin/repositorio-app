import React from 'react'

export const PrecioSucursalComponent = ({ data, tipo }) => {
    return (
        
        <div className='card col-3'>
            <ul className="list-group">
                <li className="bg-dark list-group-item d-flex justify-content-between align-items-center">
                    {data.nombre}
                </li>
                {
                    data.precio.map((item) => (
                        <li key={item.id} className="text-dark list-group-item d-flex justify-content-between align-items-center">
                            {item.kilataje}
                            <span className="badge badge-info badge-pill">{item.precio}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
