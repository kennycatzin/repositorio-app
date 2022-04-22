import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEliminarNuevo } from '../../../../actions/asignaciones';

export const TableAsignacionNuevo = () => {

  const dispatch = useDispatch();
  const handleEliminar = (obj) => {
     dispatch(setEliminarNuevo(obj));
  }
  const cabeceras = [
    "Tipo equipo",
    "Número serie"
];
const {equipoNuevo} = useSelector(state => state.asignacion);

  return (
      <>
      <table className="table">
          <thead className="text-primary">
              <tr>
                  <th className="text-center">#</th>
                  {
                      cabeceras.map(cabeceras => (
                          <th key={cabeceras} className='text-center'>{cabeceras}</th>
                      ))
                  }                    
                  <th className='text-center'>Eliminar</th>
              </tr>
          </thead>
          <tbody>
              {
                  equipoNuevo?.map((item, index) => {
                     return <tr key={item.id}>
                            <td  className='text-center'>{index + 1}</td>
                            <td  className='text-center'>{item.tipo_equipo}</td>
                            <td className='text-center'>{item.numero_serie}</td>
                            <td className="d-flex justify-content-around">
                              <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="Editar estatus">
                                  <i className="tim-icons icon-trash-simple"></i>
                              </button>                              
                            </td>
                      </tr>
                  })
              }
          </tbody>
      </table>
  </>
  )
}
