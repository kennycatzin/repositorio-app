import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { bajaCategoria, categoriaActiva, openModalCategoria, openModalSubcategoria } from '../../../../actions/repositorio';
import { RepositorioModal } from '../../../modal/repositorioModal';
import { ArchivoModal } from '../../../modal/archivoModal';
import {TableSubcategorias} from './../tables/TableSubcategorias'

export const RepositorioCategoria = ({ data }) => {
    const dispatch = useDispatch();
    const handleEditar = (obj) => {
        dispatch(categoriaActiva(obj));
        dispatch(openModalCategoria(true, data));
    }

    const handleEliminar = (obj) => {
        const { id } = obj;
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
                dispatch(bajaCategoria(id, 1))
            }
        })
    }
    const activarCategoria = (obj) => {
         dispatch(categoriaActiva(obj));
    };
    const handleAgregarSubcategoria = () => {
        console.log('abrir modal bro');
        dispatch(openModalSubcategoria(true, {}));
    }
    return (
        <div className="card container">
            <div className="card-header row col-12" id="headingOne">
                    <div onClick={() => activarCategoria(data)} className="alert alert-info pointer text-center col-9" data-toggle="collapse" data-target={`#${data.randomUUID.replace(/\s+/g, '')}`} aria-expanded="false" aria-controls={`${data.randomUUID.replace(/\s+/g, '')}`}>
                        <span>{data.titulo}</span><br />                        
                    </div>                    
                    <div className='d-flex justify-content-around col-3'>
                        <button onClick={() => handleEditar(data)} type="button" rel="tooltip" className="btn btn-primary btn-sm " data-original-title="Refresh" title="Editar información de la categoria">
                            <i className="tim-icons icon-pencil"></i>
                        </button>
                        <button onClick={() => handleEliminar(data)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar categoría, se eliminarán los archivos de los roles">
                            <i className="tim-icons icon-trash-simple"></i>
                        </button>
                    </div>
                
            </div>
            <div id={`${data.randomUUID.replace(/\s+/g, '')}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    <div className="places-buttons">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto text-center">
                                <h4 className="card-title">
                                    <button id="twitter" onClick={handleAgregarSubcategoria} className="btn btn-round btn-success" title='Agregar nueva subcategoría'>
                                        <i className="fa fa-plus"></i> · Agregar</button>
                                    <p className="h5">Agregar nueva subcategoria</p>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 ml-auto mr-auto">
                                <div className="row">
                                    {                                        
                                        <TableSubcategorias data={ data.subcategoria} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RepositorioModal/>
            <ArchivoModal/>
        </div>
    )
}
