import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modalEstatus } from '../../../../actions/ui';
import Swal from 'sweetalert2'
import { eliminarObjeto } from '../../../../actions/catalogos';

export const TableAsignaciones = ({ cabeceras, data }) => {
    const dispatch = useDispatch();
    const {tabla} = useSelector(state => state.ui);
    console.log(tabla)
    const handleEditar = (item) => {
        dispatch((modalEstatus(true, item)));
        console.log(item)
    }
    const handleEliminar = (item) => {
        console.log(item)
        const {id} = item;
        Swal.fire({
            title: 'Realmente desea elimninar este usuario?',
            text: "No podra revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, emilinar'
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
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                    <i className="tim-icons icon-tap-02"></i>
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
