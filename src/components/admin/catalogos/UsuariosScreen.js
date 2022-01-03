import React from 'react'
import { Link } from 'react-router-dom';
import { TableUsuarios } from '../widgets/tables/TableUsuarios';

export const UsuariosScreen = () => {
    const cabeceras = [
        "Nombre",       
        "Usuario",
        "Tipo",
        "Rol"
    ];
    const data = [
        {
            "id": 1,
            "name": "Kenny Catzin Ruiz",
            "tipo": "ADMINISTRADOR",
            "usuario": "kenny.catzin",
            "rol": "Programador"
        },
        {
            "id": 2,
            "name": "Kenny Catzin Ruiz",
            "tipo": "ADMINISTRADOR",
            "usuario": "kenny.catzin",
            "rol": "Gerente general"

        },
    ];
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Usuarios</li>
                </ol>
            </div>
            <div className="col-md-12">
                <div className="card">
                <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de usuarios</h4>

                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            <TableUsuarios cabeceras={cabeceras} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
