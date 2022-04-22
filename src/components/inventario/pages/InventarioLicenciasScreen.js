import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getBusquedaLicencias, getEstatusLicencias, getLicenciasAdmin, openCloseModalLicencias } from '../../../actions/licencia';
import { TableLicencia } from '../widgets/tables/TableLicencia';

export const InventarioLicenciasScreen = () => {
  const cabeceras = [
    "Licencia",       
    "Tipo",
    "Estatus",
    "Versión"
];
  const [busqueda, setbusqueda] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLicenciasAdmin());
    dispatch(getEstatusLicencias());
}, [dispatch]);
  const {licenciaListado, registros} = useSelector(state => state.licencia);
  const handleOpenModal = () => {
    dispatch(openCloseModalLicencias(true));
}
  const handleBuscar = (e) => {
    e.preventDefault();
    setbusqueda(e.target.value)
    if(e.target.value !== ''){
        if(e.target.value.length > 2){
            const obj = {
                busqueda: e.target.value
            }
            dispatch(getBusquedaLicencias(obj));
        }
    }else{
        dispatch(getLicenciasAdmin());
    }
}
  return (
    <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/menu-inventario">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Licencias</li>
                </ol>
            </div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <form>
                            <div className="form-row d-flex justify-content-between">
                                <div className="col-10">
                                    <input type="text" 
                                            className="form-control mt-1" 
                                            placeholder="Buscar..." 
                                            value={busqueda}
                                            name="busqueda"
                                            onChange={handleBuscar}
                                            />
                                </div>
                                <div className="col-2">
                                    <button type='button' className='btn btn-success'>Buscar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card">
                <div className="card-header d-flex justify-content-between">
                        <div className=''>
                        <h4 className="card-title d-inline">Listado de licencias</h4> <br />
                            <h5 className="card-title d-inline">Registros: {registros}</h5>
                        </div>
                        <button onClick={handleOpenModal} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo usuario'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            {
                                (!!licenciaListado) ?
                                  <TableLicencia cabeceras={cabeceras} data={licenciaListado}/>
                                : <h5>Espere...</h5>
                            }                          
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
