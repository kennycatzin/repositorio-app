import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { eliminarEquipoAsignado } from '../../../../actions/asignaciones';
export const TableAsignacionAsignado = () => {
  const cabeceras = [
    "Tipo equipo",
    "Marca",
    "Equipo",
    "Número serie"
];
  const {equipoAsignado} = useSelector(state => state.asignacion);

    const usuario = 1;
    const dispatch = useDispatch();
  const handleEliminar = (item) => {
      Swal.fire({
          title: 'Realmente desea eliminar este registro?',
          text: "No podrá revertir esta acción",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
              console.log(item);
              
              dispatch(eliminarEquipoAsignado(item.id_asignacion, item.id_equipo, usuario, item))
          }
        })
  }
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
                  (!!equipoAsignado) ?
                  equipoAsignado?.map((item, index) => {
                     return <tr key={item.id_asignacion}>
                          <td  className='text-center'>{index + 1}</td>
                            <td  className='text-center'>{item.tipo_equipo}</td>
                            <td  className='text-center'>{item.marca}</td>
                            <td  className='text-center'>{ item.descripcion }</td>
                            <td className='text-center'>{item.numero_serie}</td>
                          <td className="d-flex justify-content-around">
                              <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="Eliminar">
                                  <i className="tim-icons icon-trash-simple"></i>
                              </button>                              
                          </td>
                      </tr>
                  })
                  : 
                  <tr><td>Sin datos...</td></tr>
              } 
          </tbody>
      </table>
  </>
  )
}
