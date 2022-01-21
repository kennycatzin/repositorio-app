import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTableroAdmin, openCloseModalTablero } from '../../../actions/tablero';
import { TableTablero } from '../widgets/tables/TableTablero';

export const TableroScreen = () => {
const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTableroAdmin());
    }, [dispatch])
        const cabeceras = [
            "Titulo",
            "Fecha inicio",
            "Fecha final",
            "Dias restantes"
        ];
    const {tablero, checking} = useSelector(state => state.tablero)
    const handleAgregar = () => {
        dispatch(openCloseModalTablero(true, {}));
    }
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
                        <button onClick={handleAgregar } type="button" className="btn btn-success btn-circle btn-lg">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            {
                                (!checking) ?  <TableTablero cabeceras={cabeceras} data={tablero}/>
                                : <h5>Espere...</h5>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}