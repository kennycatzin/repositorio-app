import React from 'react'
import { Link } from 'react-router-dom';
import { TablesTipos } from '../widgets/tables/TablesTipos';

export const TiposScreen = () => {
    const cabeceras = [
        "Nombre",
        "Nombre corto"
    ];
    const data = [
        {
            "id": 1,
            "tipo": "Formulario",
            "descripcion": "Hola esta es mi descripcion",
            "nombre_corto": "F"
        },
        {
            "id": 2,
            "tipo": "Manual",
            "descripcion": "Hola esta es mi manual",
            "nombre_corto": "M"
        },
    ];
    return (
        <>
       <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Tipo de documentos</li>
                </ol>
            </div>
        <div className="col-md-12">
            <div className="card">
            <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Tipo de documentos</h4>

                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                <div className="card-body">
                    <div className="table-responsive ps">                       
                        <TablesTipos cabeceras={cabeceras} data={data}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
