import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getDepartamentos, openCloseModalDepartamentos } from '../../../actions/departamentos';
import { TableDepartamentos } from '../widgets/tables/TableDepartamentos';

export const DepartamentosScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {        
        dispatch( getDepartamentos() );
    }, [ dispatch ]);

    const {depaDepartamentos, totales} = useSelector(state => state.departamentos);
    const handleOpenModalDepa = () => {
        dispatch(openCloseModalDepartamentos(true));        
    }
    const cabeceras = [
        "Departamento",
        "Nombre corto",
        "Correo"
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
                        <div className=''>
                            <h4 className="card-title d-inline">Listado de departamentos</h4> <br/>
                            <h5 className="card-title d-inline">Registros: {totales}</h5>
                        </div>
                        <button onClick={handleOpenModalDepa} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo departamento'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            {
                                (!!depaDepartamentos)?
                                    <TableDepartamentos cabeceras={cabeceras} data={depaDepartamentos}/>
                                :
                                    <h5>Espere...</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
