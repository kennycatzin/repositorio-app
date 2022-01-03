import React from 'react'

export const TiposNavItem = ({data}) => {
    return (
        <label className="btn btn-sm btn-info btn-simple" id={`${data.id}`}>
            <input type="radio" className="d-none" name="options" />
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">{data.nombre_corto}</span>
            <span className="d-block d-sm-none">
                <i className={`im-icons ${data.icono}`}></i>
            </span>
        </label>
    )
}
