import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTiposEquiposAdmin, openCloseModalTipoEquipos } from '../../../actions/tipoEquipos';
import { TableTiposEquipos } from '../widgets/tables/TableTiposEquipos';

export const InventarioTiposScreen = () => {
  const dispatch = useDispatch();
  const { tipoEListado, registros } = useSelector(state => state.tipo_equipo);
  useEffect(() => {
    dispatch(getTiposEquiposAdmin());
  }, [dispatch]);
  const handleOpenModal = () => {
    dispatch(openCloseModalTipoEquipos(true));
  }

  return (
    <>
      <div className="row">
        <ol className="breadcrumb bg-transparent ml-3">
          <li className="breadcrumb-item text-warning">
            <Link to="/menu-inventario">Inventario</Link>
          </li>
          <li className="breadcrumb-item active">Tipo de equipos</li>
        </ol>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div>
            <h4 className="card-title d-inline">Listado de tipos de equipos</h4> <br />
            <h5 className="card-title d-inline">Registros: {registros}</h5>
          </div>
          <button onClick={handleOpenModal} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo usuario'>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive ps">
            {
                        (!!tipoEListado) ?
                          <TableTiposEquipos data={tipoEListado}/>
                        : <h5>Espere...</h5>
                    }                          
          </div>
        </div>
      </div>
    </>
  )
}
