import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAdminConf, getAuxFormularioArchivo, getTiposConfigArchivos, openModalCategoria } from '../../actions/repositorio'
import { RepoCategoriaModal } from '../modal/repoCategoriaModal'
import { RepositorioEntry } from './widgets/repositorio/RepositorioEntry'

export const AdminRepositorio = () => {
    const dispatch = useDispatch();
    const handleAgregar = () => {
        dispatch(openModalCategoria(true, {}));
    }

    useEffect(() => {
        dispatch(getAdminConf());
        dispatch(getTiposConfigArchivos());

        
    }, [dispatch])
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Repositorio</li>
                </ol>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de categorias</h4>
                            <button onClick={handleAgregar} id="twitter" className="btn btn-round btn-success">
                                <i className="fa fa-plus"></i> · Agregar
                            </button>
                    </div>

                     {/* TODO: importer entry */}
                     <RepositorioEntry/>
                </div>
            </div>
            <RepoCategoriaModal/>
        </>
    )
}
