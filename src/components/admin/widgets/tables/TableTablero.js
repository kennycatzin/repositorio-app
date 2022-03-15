import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { eliminarTablero, openCloseModalTablero,  } from '../../../../actions/tablero';
import { TableroModal } from '../../modal/tableroModal';
import moment from 'moment';

export const TableTablero = ({cabeceras, data}) => {
    const dispatch = useDispatch();
    const handleEditar = (item) => {
        dispatch(openCloseModalTablero(true, item));
    }

    const handleEliminar = (item) => {
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
                const obj = {
                    id_tablero: item.id,
                    usuario: 1
                }
                dispatch(eliminarTablero(obj));
               // dispatch(eliminarObjeto(id, 0 , 1, 'estatus', 'update-baja', 'get-estatus'))
            }
          })
    }
    return (
        <>
        <table className="table">
            <thead className="text-primary">
                <tr>
                    <th className="text-center">Imagen</th>
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
                    (data !== undefined)&&
                    data.map((item, index) => {
                       return <tr key={item.id}>
                            <td>
                                <div className="photo">
                                    <img src={item.url} alt="Table" />
                                </div>
                            </td>
                            <td className='text-center'>{item.titulo}</td>
                            <td className='text-center'>{moment(item.fecha_inicio).format('YYYY-MM-DD') }</td>
                            <td className='text-center'>{moment(item.fecha_final).format('YYYY-MM-DD')}</td>
                            <td className='text-center'>{item.dias}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar anuncio">
                                    <i className="tim-icons icon-pencil"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar anuncio">
                                    <i className="tim-icons icon-trash-simple"></i>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <TableroModal/>
        </>
    )
}
