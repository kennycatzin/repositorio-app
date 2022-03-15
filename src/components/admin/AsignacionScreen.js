import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getTableObjeto } from './../../actions/catalogos';
import { AsignacionModal } from './modal/asignacionModal';
import { TableAsignaciones } from './widgets/tables/TableAsignaciones'

export const AsignacionScreen = () => {
    const dispatch = useDispatch();
    const cabeceras = [
        "Nombre",       
        "Usuario",
       
    ];
    useEffect(() => {
        dispatch(getTableObjeto('user', 'get-usuarios-noasignados'));
    }, [dispatch])
    const data = [
        {
            "id": 1,
            "name": "Kenny Catzin Ruiz",
            "usuario": "kenny.catzin",
        },
        {
            "id": 2,
            "name": "Kenny Catzin Ruiz",
            "usuario": "kenny.catzin",

        },
    ];
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item active">Asignaciones</li>
                </ol>

            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Listado de usuarios</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            <TableAsignaciones cabeceras={cabeceras} data={data}/>
                        </div>
                    </div>
                </div>
            </div>
            <AsignacionModal/>
        </>
    )
}
