import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modalEstatus } from '../../../../actions/ui';
import Swal from 'sweetalert2'
import { eliminarObjeto } from '../../../../actions/catalogos';

export const TableAsignaciones = ({ cabeceras, data }) => {
    const dispatch = useDispatch();
    const {tabla} = useSelector(state => state.ui);
    const handleEditar = (item) => {
        dispatch((modalEstatus(true, item)));
    }
    const handleEliminar = (item) => {
        const {id} = item;
        Swal.fire({
            title: 'Realmente desea eliminar este usuario?',
            text: "No podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminarObjeto(id, 0 , 1, 'user', 'set-usuario-baja', 'get-usuarios-noasignados'))
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
                    (tabla != null)&&
                    tabla.map((item, index) => {
                        return <tr key={item.id}>
                            <td>
                                {index + 1}
                            </td>
                            <td className='text-center'>{item.name}</td>
                            <td className='text-center'>{item.usuario}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Asignar rol y tipo de usuario">
                                    <i className="tim-icons icon-tap-02"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Deshechar usuario">
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
