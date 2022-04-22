import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAgregarNuevo } from '../../../../actions/asignaciones';

export const TableAsignacionInventario = () => {
    //TODO: Declarar e iterar objeto, ya se encuentra en el store

  const dispatch = useDispatch();
  const habldeAgregar = (obj) => {
     dispatch(setAgregarNuevo(obj));
  }
  const cabeceras = [
    "Tipo equipo",
    "Marca",
    "Equipo",
    "Número serie"
];
    const {equipoDisponible} = useSelector(state => state.asignacion);


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
                  <th className='text-center'>Agregar</th>
              </tr>
          </thead>
          <tbody>
              {
                  equipoDisponible?.map((item, index) => {
                     return <tr key={item.id_equipo}>
                          <td  className='text-center'>{index + 1}</td>
                            <td  className='text-center'>{item.tipo_equipo}</td>
                            <td  className='text-center'>{item.marca}</td>
                            <td  className='text-center'>{ item.descripcion }</td>
                            <td className='text-center'>{item.numero_serie}</td>
                          <td className="d-flex justify-content-around">
                              <button onClick={() => habldeAgregar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar estatus">
                                  <i className="tim-icons icon-send"></i>
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
