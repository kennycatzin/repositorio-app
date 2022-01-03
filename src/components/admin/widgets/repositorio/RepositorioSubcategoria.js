import React from 'react'

export const RepositorioSubcategoria = ({data}) => {
    const handlesSubcategoria = (obj) => {
        console.log(obj)
    }
    return (
        <div className="col-md-4">
            <button onClick={() => handlesSubcategoria(data)} className="btn btn-warning btn-block">{data.titulo}</button>
        </div>
    )
}
