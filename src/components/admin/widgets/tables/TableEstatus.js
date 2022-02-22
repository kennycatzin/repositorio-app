import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { eliminarObjeto } from '../../../../actions/catalogos';
import { modalEstatus } from '../../../../actions/ui';
 
export const TableEstatus = ({cabeceras, data}) => {
    const dispatch = useDispatch();
    const handleEditar = (estatus) => {
        dispatch(modalEstatus(true, estatus));
    }
    const handleEliminar = (estatus) => {
        const {id} = estatus;
        Swal.fire({
            title: 'Realmente desea eliminar este registro?',
            text: "No podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminarObjeto(id, 0 , 1, 'estatus', 'update-baja', 'get-estatus'))
            }
          })
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
                            <td >{item.estatus}</td>
                            <td >{item.descripcion}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar estatus">
                                    <i className="tim-icons icon-pencil"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar estatus">
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
