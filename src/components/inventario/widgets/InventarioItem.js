import React from 'react'
import { Link } from 'react-router-dom'

export const InventarioItem = ({ data }) => {
    return (

        <div className="font-icon-list col-lg-3 col-md-3 col-sm-4 col-xs-6 col-xs-6">
            <Link to={`/${data.url}`}>
                <div className="font-icon-detail">
                    
                    <i className={`tim-icons ${data.icono} mb-3`}></i>
                    <h3 className=''>{data.nombre}</h3>
                </div>
            </Link>

        </div >
    )
}
