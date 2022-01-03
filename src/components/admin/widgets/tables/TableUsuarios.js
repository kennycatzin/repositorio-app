import React from 'react'

export const TableUsuarios = ({ cabeceras, data }) => {
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
                                {index + 1}
                            </td>
                            <td className='text-center'>{item.name}</td>
                            <td className='text-center'>{item.usuario}</td>
                            <td className='text-center'>{item.tipo}</td>
                            <td className='text-center'>{item.rol}</td>
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
