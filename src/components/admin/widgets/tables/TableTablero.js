import React from 'react'

export const TableTablero = ({cabeceras, data}) => {
    const handleEditar = (item) => {
        console.log(item)
    }
    const handleEliminar = (item) => {
        console.log(item)
    }
    return (
        <table className="table">
            <thead className="text-primary">
                <tr>
                    <th className="text-center">#</th>
                    {
                        cabeceras.map(cabeceras => (
                            <th key={cabeceras} className='text-center'>{cabeceras}</th>
                        ))
                    }                    
                    <th className='text-center'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                       return <tr key={item.id}>
                            <td>
                                <div className="photo">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Logo_Grupo_Imagen_Multimedia.2016.png" alt="Table" />
                                </div>
                            </td>
                            <td className='text-center'>{item.titulo}</td>
                            <td className='text-center'>{item.fecha_inicio}</td>
                            <td className='text-center'>{item.fecha_final}</td>
                            <td className='text-center'>{item.dias_restantes}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                    <i className="tim-icons icon-pencil"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="">
                                    <i className="tim-icons icon-trash-simple"></i>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
