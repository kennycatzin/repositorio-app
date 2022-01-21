import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { bajaArchivos, openCloseChecklistArchivoModal, openModalDetalleArchivo, openModalFormularioArchivos } from '../../../../actions/repositorio';
import { ChecklistArchivoModal } from '../../../modal/checklistArchivoModal';

export const TableConfArchivos = ({cabeceras, data}) => {
    const dispatch = useDispatch();

    const handleOpenModalArchivo = (item) => {
        console.log(item);
        dispatch(openModalDetalleArchivo(true, item));
    }
    const handleEditar = (item) => {
        console.log(item)
        dispatch(openModalFormularioArchivos(true, item));

    }
    const handleConfigurar = (item) => {
        dispatch(openCloseChecklistArchivoModal(true, item));
    }
    const handleEliminar = (item) => {
        console.log(item)
        const {id} = item;
        Swal.fire({
            title: 'Realmente desea elimninar este registro?',
            text: "No podra revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, emilinar'
          }).then((result) => {
            if (result.isConfirmed) {
                // dispatch(eliminarObjeto(id, 0 , 1, 'estatus', 'update-baja', 'get-estatus'))
                dispatch(bajaArchivos(id, item.id_subcategoria));
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
                            <td>
                                <i onClick={() => handleOpenModalArchivo(item)} className="tim-icons icon-image-02 pointer"></i>
                            </td>
                            <td >{item.nombre}</td>
                            <td >{item.descripcion}</td>
                            <td className="d-flex justify-content-around">
                                
                                <button   onClick={() => handleConfigurar(item)}  type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                    <i className="tim-icons icon-check-2"></i>
                                </button>
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-primary btn-sm " data-original-title="Refresh" title="">
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
        <ChecklistArchivoModal/>
        </>
    )
}
