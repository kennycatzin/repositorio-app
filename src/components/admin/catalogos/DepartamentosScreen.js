import React from 'react'
import { Link } from 'react-router-dom'
import { TableDepartamentos } from '../widgets/tables/TableDepartamentos';

export const DepartamentosScreen = () => {
    const cabeceras = [
        "Departamento",
        "Nombre corto",
        "Correo"
    ];
    const data = [
        {
            "id": 1,
            "departamento": "Activo",
            "nombre_corto": "TICS",
            "correo": "kenn2506@gmail.com",
            "descripcion": "PElit qui nostrud laboris eu quis dolore do nisi. Do aute pariatur occaecat ea. Nostrud excepteur nulla Lorem nostrud ex enim et tempor. Lorem deserunt ea nostrud ipsum ad laboris. Labore deserunt exercitation fugiat sit occaecat quis sit. Enim pariatur et aute voluptate fugiat exercitation occaecat do consequat. Dolore sit dolore deserunt reprehenderit voluptate duis nostrud pariatur veniam qui in velit esse laborum.",
        },
        {
            "id": 2,
            "departamento": "Activo",
            "nombre_corto": "TICS",
            "correo": "kenn2506@gmail.com",
            "descripcion": "PElit qui nostrud laboris eu quis dolore do nisi. Do aute pariatur occaecat ea. Nostrud excepteur nulla Lorem nostrud ex enim et tempor. Lorem deserunt ea nostrud ipsum ad laboris. Labore deserunt exercitation fugiat sit occaecat quis sit. Enim pariatur et aute voluptate fugiat exercitation occaecat do consequat. Dolore sit dolore deserunt reprehenderit voluptate duis nostrud pariatur veniam qui in velit esse laborum.",
        },
    ];
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Departamentos</li>
                </ol>
            </div>
            <div className="col-md-12">
                <div className="card ">
                <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de departamentos</h4>

                        <button type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <TableDepartamentos cabeceras={cabeceras} data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
