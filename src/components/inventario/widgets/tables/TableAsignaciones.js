import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import Swal from 'sweetalert2'

 
export const TableAsignaciones = ({cabeceras, data}) => {
    const [contador, setContador] = useState(0);
    const [miPagina, setmiPagina] = useState(1);
    const handleEditar = () => {
       // dispatch(modalEstatus(true, estatus));
    }
    const {asignacionesTotales, paginas} = useSelector(state => state.asignacion)

    const handleEliminar = () => {
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
                // dispatch(eliminarObjeto(id, 0 , 1, 'estatus', 'update-baja', 'get-estatus'))
            }
          })
    }
    const handlePaginar = (index, pagina) => {
        let valor = contador + (index);
        if (valor >= 0 && valor <= asignacionesTotales) {
            //dispatch(getUsuariosAdmin(valor));
            //dispatch(userManejadoPaginador(index, pagina))

            setContador(valor);
            setmiPagina(miPagina + pagina);
            
        }
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
                    <th className='text-center'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                       return <tr key={item.id}>
                            <td  className='text-center'>{index + 1}</td>
                            <td  className='text-center'>{item.name}</td>
                            <td  className='text-center'>{item.estatus}</td>
                            <td  className='text-center'>{(item.sucursal === null)? "Individual": "Sucursal / " + item.sucursal }</td>
                            <td className='text-center'>{item.equipos}</td>
                            <td className="d-flex justify-content-around">
                                <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar estatus">
                                    <i className="tim-icons icon-pencil"></i>
                                </button>
                                <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar estatus">
                                    <i className="tim-icons icon-trash-simple"></i>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <div className='row d-flex justify-content-around'>
        <button onClick={() => handlePaginar(-8, -1)} className='btn btn-primary btn-sm'>
            <i className="tim-icons icon-double-left"></i>
        </button>
        <div className='row'>
                    <h4> { miPagina> paginas ? paginas : miPagina} </h4>
                    <h4 className='pl-2 pr-2' > / </h4>
                    <h4> {paginas ? paginas : 1} </h4>
        </div>
        <button onClick={() => handlePaginar(+8, +1)} className='btn btn-primary btn-sm'>
            <i  className="tim-icons icon-double-right"></i>
        </button>

    </div>
    </>
    )
}
