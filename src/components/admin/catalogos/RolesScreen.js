import React from 'react'
import { Link } from 'react-router-dom'
import { TableRoles } from '../widgets/tables/TableRoles';

export const RolesScreen = () => {
    const cabeceras = [
        "Departamento",
        "Rol",
    ];
    const data = [
        {
            "id": 1,
            "departamento": "GIA",
            "rol": "Hola esta es mi descripcion",
        },
        {
            "id": 2,
            "departamento": "GIA",
            "rol": "Hola esta es mi descripcion",
        },
    ];
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

                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <TableRoles cabeceras={cabeceras} data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
