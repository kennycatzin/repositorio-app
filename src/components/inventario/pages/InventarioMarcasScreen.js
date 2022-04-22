import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMarcasAdmin, openCloseModalMarcas } from '../../../actions/marcas';
import { TableMarcas } from '../widgets/tables/TableMarcas';

export const InventarioMarcasScreen = () => {
    const dispatch = useDispatch();
    const {marcaListado, registros} = useSelector(state => state.marcas);
    useEffect(() => {
        dispatch(getMarcasAdmin());
    }, [dispatch]);
  const handleOpenModal = () => {
    dispatch(openCloseModalMarcas(true));

    }
  return (
    <>
    <div className="row">
        <ol className="breadcrumb bg-transparent ml-3">
            <li className="breadcrumb-item text-warning">
                <Link to="/menu-inventario">Configuraciones</Link>
            </li>
            <li className="breadcrumb-item active">Marcas</li>
        </ol>
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
                        (!!marcaListado) ?
                          <TableMarcas data={marcaListado}/>
                        : <h5>Espere...</h5>
                    }                          
                </div>
            </div>
        </div>
    </div>
</>
  )
}
