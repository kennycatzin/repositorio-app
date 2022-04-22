import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getAsignacionesPaginar } from '../../../../actions/asignaciones';
import { TableAsignaciones } from '../../widgets/tables/TableAsignaciones';
export const InventarioAsignacionesScreen = () => {
  let navigate = useNavigate();
  const cabeceras = [
    "Nombre",
    "Estatus",
    "Tipo asignación",
    "Total equipos"
  ];
  const dispatch = useDispatch();
  useEffect(() => {        
    dispatch( getAsignacionesPaginar() );
  }, [ dispatch ]);
  const {asignaciones, checking} = useSelector(state => state.asignacion);
  const [busqueda, setbusqueda] = useState('');
  const handleBuscar = (e) => {
    e.preventDefault();
    setbusqueda(e.target.value)
    if(e.target.value !== ''){
        if(e.target.value.length > 2){
            // const obj = {
            //     busqueda: e.target.value
            // }
            //dispatch(getBusquedaUsuarios(obj));
        }
    }else{
        //dispatch(getUsuariosAdmin());
    }
}
const formAsignacion = () => {
  navigate("/inventario-formulario-asignacion", {replace: false});
}
  return (
    <>
     <div className="row">  
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/inventario-asignaciones">Inventario</Link>
                    </li>
                    <li className="breadcrumb-item active">Asignaciones</li>
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
                <div className="card ">
                <div className="card-header d-flex justify-content-between">
                        <div className=''>
                            <h4 className="card-title d-inline">Listado de asignaciones</h4> <br/>
                            <h5 className="card-title d-inline">Registros: 10</h5>
                        </div>
                        <button onClick={formAsignacion} type="button" className="btn btn-success btn-circle btn-lg" title='Crear nueva asignación'>
                            <i className="fa fa-plus">
                            </i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            {
                                (!checking) && 
                                    <TableAsignaciones cabeceras={cabeceras} data={asignaciones}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
