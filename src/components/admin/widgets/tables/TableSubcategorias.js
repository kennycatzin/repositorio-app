import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { bajaSubcategoria, openModalArchivo, openModalSubcategoria } from '../../../../actions/repositorio';

export const TableSubcategorias = ({ data }) => {
    const dispatch = useDispatch();
    const cabeceras = [
        "Titulo",
    ];
    const handleEditar = (item) => {
        dispatch(openModalSubcategoria(true, item));

    }
    const handleAgregarArchivo = (obj) => {
        //dispatch(openModalSubcategoria(true, data));
        // TODO: Funcionalidad modal
        dispatch(openModalArchivo(true, obj));
    }
    const handleEliminar = (item) => {
        const { id } = item;
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
                dispatch(bajaSubcategoria(id, 1))
                // dispatch(eliminarObjeto(id, 0, 1, 'user', 'set-usuario-baja', 'get-usuarios-noasignados'))
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
                    (data != null) &&
                    data.map((item, index) => {
                        return <tr key={item.id}>
                            <td>
                                {index + 1}
                            </td>
                            <td className='text-center'>{item.titulo}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleAgregarArchivo(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Configurar subcategoría, agregar archivos">
                                    <i className="tim-icons icon-settings-gear-63"></i>
                                </button>
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-primary btn-sm " data-original-title="Refresh" title="Editar información de la subcategpria">
                                    <i className="tim-icons icon-pencil"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar subcategoría">
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