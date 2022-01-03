import React from 'react'

export const CarouselComponent = ({ data }) => {
    return (
        <div className={`carousel-item  ${ (data.orden === 1) ? 'active': ''}`}>
            <div className="view">
                <img className="d-block w-100" src={data.url} alt={data.titulo} />
                <div className="mask rgba-black-light"></div>
            </div>
            <div className="carousel-caption">
                <h3 className="h3-responsive">{data.titulo}</h3>
                <p>{data.descripcion}</p>
            </div>
        </div>
    )
}
