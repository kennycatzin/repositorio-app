import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBusquedaEquipos, getEquiposAdmin, getHelpersEquipoAdmin, openCloseModalEquipos } from '../../../actions/equipo';
import { TableEquipos } from '../widgets/tables/TableEquipos';

export const InventarioEquiposScreen = () => {
  const dispatch = useDispatch();
  const { equipoListado, registros, tipo_equipos } = useSelector(state => state.equipo);
  const [busqueda, setbusqueda] = useState('');
  useEffect(() => {
    dispatch(getEquiposAdmin());
    dispatch(getHelpersEquipoAdmin());
  }, [dispatch]);
  const handleInputChange = (e) => {
    console.log(e);
  }
  const handleOpenModal = (tipo) => {
    console.log(tipo)
    dispatch(openCloseModalEquipos(true, {}, tipo));

  }
  const handleBuscar = (e) => {
    e.preventDefault();
    setbusqueda(e.target.value)
    if(e.target.value !== ''){
        if(e.target.value.length > 2){
            const obj = {
                busqueda: e.target.value
            }
            dispatch(getBusquedaEquipos(obj));
        }
    }else{
        dispatch(getEquiposAdmin());
    }
}
  return (

    <>
      <div className="row">
        <ol className="breadcrumb bg-transparent ml-3">
          <li className="breadcrumb-item text-warning">
            <Link to="/menu-inventario">Inventarios</Link>
          </li>
          <li className="breadcrumb-item active">Equipos</li>
        </ol>
      </div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-body'>
            <div className="form-row d-flex justify-content-between">
              <div className="col-10">
                <input type="text"
                  className="form-control mt-1"
                  placeholder="Búsqueda por coincidencia..."
                  value={busqueda}
                  name="busqueda"
                  onChange={handleBuscar}

                />
              </div>
              <div className="col-2">
                <button type='button' className='btn btn-success'>Buscar</button>
              </div>
            </div>
            {/* <div className='row'>
              <div className="form-group col-12">
                <select className="form-control"
                  id="exampleFormControlSelect1"
                // value={gama}
                // name="gama"
                // onChange={handleInputChange}
                >
                  <option>Búsqueda por tipo de equipo</option>
                  {
                    (tipo_equipos !== undefined) &&
                    tipo_equipos.map((aux) => (
                      <option key={aux.id_tipo_equipo} value={aux.id_tipo_equipo}>{aux.tipo_equipo}</option>
                    ))
                  }
                </select>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div>
              <h4 className="card-title d-inline">Listado de equipos</h4> <br />
              <h5 className="card-title d-inline">Registros: {registros}</h5>
            </div>
            <div className="dropdown">
              <button type="button" className="btn btn-success btn-circle btn-lg" data-toggle="dropdown" aria-expanded="true" title='Agregar nuevo usuario'>
                <i className="fa fa-plus"></i>
              </button>

              <div id='desp' className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink" x-placement="bottom-end">
                <a onClick={() => handleOpenModal("PC")} className="dropdown-item" href="#">Computadoras</a>
                <a onClick={() => handleOpenModal("OTRO")} className="dropdown-item" href="#">Otros</a>
              </div>
            </div>

          </div>
          <div className="card-body">
            <div className="table-responsive ps">
              {
                (!!equipoListado) ?
                  <TableEquipos data={equipoListado} />
                  : <h5>Espere...</h5>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
