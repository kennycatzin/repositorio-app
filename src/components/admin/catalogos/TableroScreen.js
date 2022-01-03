import React from 'react'
import { Link } from 'react-router-dom'
import { TableTablero } from '../widgets/tables/TableTablero';

export const TableroScreen = () => {
    const cabeceras = [
        "Titulo",
        "Fecha inicio",
        "Fecha final",
        "Dias restantes"
    ];
    const data = [
        {
            "id": 1,
            "titulo": "Torneo de Futbolito",
            "fecha_inicio": "12/12/2020",
            "fecha_final": "12/12/2022",
            "descripcion": "PElit qui nostrud laboris eu quis dolore do nisi. Do aute pariatur occaecat ea. Nostrud excepteur nulla Lorem nostrud ex enim et tempor. Lorem deserunt ea nostrud ipsum ad laboris. Labore deserunt exercitation fugiat sit occaecat quis sit. Enim pariatur et aute voluptate fugiat exercitation occaecat do consequat. Dolore sit dolore deserunt reprehenderit voluptate duis nostrud pariatur veniam qui in velit esse laborum.",
            "dias_restantes": 10
        },
        {
            "id": 2,
            "titulo": "Torneo de Futbolito",
            "fecha_inicio": "12/12/2020",
            "fecha_final": "12/12/2022",
            "descripcion": "PElit qui nostrud laboris eu quis dolore do nisi. Do aute pariatur occaecat ea. Nostrud excepteur nulla Lorem nostrud ex enim et tempor. Lorem deserunt ea nostrud ipsum ad laboris. Labore deserunt exercitation fugiat sit occaecat quis sit. Enim pariatur et aute voluptate fugiat exercitation occaecat do consequat. Dolore sit dolore deserunt reprehenderit voluptate duis nostrud pariatur veniam qui in velit esse laborum.",
            "dias_restantes": 10
        },
    ];
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Tablero</li>
                </ol>
            </div>
            <div className="col-md-12">
                <div className="card ">
                <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de anuncios</h4>

                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <TableTablero cabeceras={cabeceras} data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}