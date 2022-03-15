import React from 'react'


import { ConfiguracionArchivoSub } from '../../modal/configuracionArchivosSub';

export const TableDetalleArchivo = ({cabeceras, data}) => {

    const handleEditar = (item) => {
        // dispatch(modalEstatus(true, estatus));
        window.open(item.url);
    }
    return (
        <>
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
                            <td >{item.consecutivo}</td>
                            <td >{item.nombre}</td>
                            <td >{item.fecha_modificacion}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                    <i className="fa fa-file-pdf"></i>
                                </button>                                
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <ConfiguracionArchivoSub/>
        </>

    )
}
