import React from 'react'
import { Link } from 'react-router-dom'

export const ConfItem = ({ data }) => {
    return (

        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
            <Link to={`/${data.url}`}>
                <div className="font-icon-detail">
                    
                    <i className={`tim-icons ${data.icono}`}></i>
                    <p className='h1'>{data.nombre}</p>
                </div>
            </Link>

        </div >
    )
}
