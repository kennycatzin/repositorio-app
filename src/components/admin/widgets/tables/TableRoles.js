import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TableRoles = ({cabeceras, data}) => {
    const navigate = useNavigate();

    const handleEditar = (item) => {
        console.log(item)
    }
    const handleEliminar = (item) => {
        console.log(item)
    }
    const handleConfigurar = (item) => {
        console.log(item)
        navigate('/configurar-rol')
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
                            <td >{index + 1}</td>
                            <td className='text-center'>{item.departamento}</td>
                            <td className='text-center'>{item.rol}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleConfigurar(item)} type="button" rel="tooltip" className="btn btn-warning btn-sm " data-original-title="Edit" title="">
                                    <i className="tim-icons icon-settings"></i>
                                </button>
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
