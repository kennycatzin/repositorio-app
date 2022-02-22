import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { openModalArchivo, openModalSubcategoria } from '../../../../actions/repositorio';

export const RepositorioSubcategoria = ({data}) => {
    const dispatch = useDispatch();
    const handleEditar = (obj) => {
       dispatch(openModalSubcategoria(true, obj));
    }
    const handleEliminar = (obj) => {
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
               // dispatch(bajaCategoria(id, 1))
            }
        })
    }
    const activarCategoria = (obj) => {
         //dispatch(categoriaActiva(obj));
    };
    const handleAgregarArchivo = (obj) => {
        //dispatch(openModalSubcategoria(true, data));
        // TODO: Funcionalidad modal
        dispatch(openModalArchivo(true, obj));
    }
    return (
        <div className="col-md-6">
            <div onClick={() => activarCategoria(data)} className="alert alert-warning pointer text-center col-9">
                <span>{data.titulo}</span><br />
                <div className='d-flex justify-content-around'>
                        <button onClick={() => handleAgregarArchivo(data)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                            <i className="tim-icons icon-settings-gear-63"></i>
                        </button>
                        <button onClick={() => handleEditar(data)} type="button" rel="tooltip" className="btn btn-primary btn-sm " data-original-title="Refresh" title="">
                            <i className="tim-icons icon-pencil"></i>
                        </button>
                        <button onClick={() => handleEliminar(data)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="">
                            <i className="tim-icons icon-trash-simple"></i>
                        </button>
                    </div>                        
            </div> 
        </div>
    )
}
