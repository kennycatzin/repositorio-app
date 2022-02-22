import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarDepartamento, getDepartamentos, openCloseModalDepartamentos } from '../../../../actions/departamentos';
import { DepartamentosModal } from '../../../modal/departamentosModal'
import Swal from 'sweetalert2'

export const TableDepartamentos = ({ cabeceras, data }) => {
    const dispatch = useDispatch();
    const [contador, setContador] = useState(0);
    const handleEditar = (item) => {
        dispatch(openCloseModalDepartamentos(true, item));
    }
    const {totales} = useSelector(state => state.departamentos);
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
                const obj = {
                    id_departamento: item.id,
                    usuario: 1
                }
                dispatch(eliminarDepartamento(obj));
            }
          })    
    }
    const handlePaginar = (index) => {
        let valor = contador + (index);
        if(valor >= 0 && valor <= totales){
            dispatch(getDepartamentos(valor));
            setContador(valor);
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
                        data.map((item, index) => {
                            return <tr key={item.id}>
                                <td >{(index + 1)  + contador}</td>
                                <td className='text-center'>{item.departamento}</td>
                                <td className='text-center'>{item.nombre_corto}</td>
                                <td className='text-center'>{item.correo}</td>
                                <td className="d-flex justify-content-around">
                                    <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title='Editar departamento'>
                                        <i className="tim-icons icon-pencil"></i>
                                    </button>
                                    <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title='Eliminar departamento'>
                                        <i className="tim-icons icon-trash-simple"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='row d-flex justify-content-around'>
                <button onClick={() => handlePaginar(-5)} className='btn btn-primary btn-sm' >
                    <i className="tim-icons icon-double-left"></i>                    
                </button>
                <button onClick={() => handlePaginar(+5)} className='btn btn-primary btn-sm' >
                    <i  className="tim-icons icon-double-right"></i>                    
                </button>
            </div>
            <DepartamentosModal />
        </>
    )
}
