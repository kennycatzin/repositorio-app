import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAuxFormularioArchivo } from '../../../actions/repositorio';
import { getRolesAdmin, openCloseModalRol } from '../../../actions/roles';
import { TableRoles } from '../widgets/tables/TableRoles';

export const RolesScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRolesAdmin());
        dispatch(getAuxFormularioArchivo())
    }, [dispatch]);

    const cabeceras = [
        "Rol",
        "Departamento",
    ];
    const handleAgregar = () => {
        dispatch(openCloseModalRol(true, {}))
    }
    const {roles} = useSelector(state => state.roles)
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Roles</li>
                </ol>
            </div>

            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de roles</h4>

                        <button onClick={handleAgregar} type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            {
                                (roles !== undefined)?
                                    <TableRoles cabeceras={cabeceras} data={roles}/>
                                : <h5>Espere....</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
