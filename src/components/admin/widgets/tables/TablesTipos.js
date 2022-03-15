import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { eliminarTipoDocumento, openCloseModalTipoDocumento } from '../../../../actions/tipoDocumentos'
import { TipoModal } from '../../modal/tipoDocumentos';

export const TablesTipos = ({cabeceras, data}) => {
    const dispatch = useDispatch();
    const handleEditar = (objeto) => {
        dispatch(openCloseModalTipoDocumento(true, objeto));        
    }
    const handleEliminar = (objeto) => {
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
                    id_tipo: objeto.id,
                    usuario: 1
                }
                dispatch(eliminarTipoDocumento(obj));
            }
          })        
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
                                <td className='text-center'>{item.tipo}</td>
                                <td className='text-center'>{item.nombre_corto}</td>
                                <td className="d-flex justify-content-around">
                                    <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar tipo de documento">
                                        <i className="tim-icons icon-pencil"></i>
                                    </button>
                                    <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar tipo de documento">
                                        <i className="tim-icons icon-trash-simple"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <TipoModal/>
        </>
    )
}
