import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTipoDocumentos, openCloseModalTipoDocumento } from '../../../actions/tipoDocumentos';
import { TablesTipos } from '../widgets/tables/TablesTipos';

export const TiposScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {        
        dispatch( getTipoDocumentos() );
    }, [ dispatch ]);
    const {tipoDocumentos} = useSelector(state => state.tipoDocumentos);
    const handleOpenModalTD = () => {
        dispatch(openCloseModalTipoDocumento(true));        
    }

    const cabeceras = [
        "Nombre",
        "Nombre corto"
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

                        <button onClick={handleOpenModalTD} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo tipo de documento'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                <div className="card-body">
                    <div className="table-responsive ps"> 
                        {
                            (!!tipoDocumentos)?
                                <TablesTipos cabeceras={cabeceras} data={tipoDocumentos}/>
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
