import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTableObjeto } from '../../../actions/catalogos';
import { modalEstatus } from '../../../actions/ui';
import { EstatusModal } from '../../modal/estatusModal';
import { TableEstatus } from '../widgets/tables/TableEstatus';

export const EstatusScreen = () => {
    const dispatch = useDispatch();

    const cabeceras = [
        "Estatus",
        "Descripcion"
    ];
    useEffect(() => {        
        dispatch( getTableObjeto('estatus', 'get-estatus') );
    }, [ dispatch ]);


    const {tabla} = useSelector(state => state.ui);

    const handleNuevo = () => {
        console.log('abriendo modal')
        dispatch(modalEstatus(true));
    }
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Estatus</li>
                </ol>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title d-inline">Listado de estatus</h4>

                        <button onClick={handleNuevo} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo estatus'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            {
                                (tabla != null) && 
                                    <TableEstatus cabeceras={cabeceras} data={tabla}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <EstatusModal/>
        </>
    )
}
