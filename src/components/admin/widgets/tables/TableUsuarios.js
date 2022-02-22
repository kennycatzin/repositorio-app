import React, { useState } from 'react'
import { eliminarUsuario, getUsuariosAdmin, openCloseModalUsuarios, userManejadoPaginador } from '../../../../actions/user'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { UsuariosModal } from '../../../modal/usuariosModal'

export const TableUsuarios = ({ cabeceras, data }) => {
    const dispatch = useDispatch();
    const handleEditar = (item) => {
        dispatch(openCloseModalUsuarios(true, item));

    }
    const [contador, setContador] = useState(0);
    const [miPagina, setmiPagina] = useState(1);
    const {userTotales, paginas} = useSelector(state => state.usuarios)

    const {userActualConteo} = useSelector(state => state.usuarios)

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
                    id: item.id,
                    usuario: 1
                }
                dispatch(eliminarUsuario(obj, userActualConteo));
            }
        })
    }
    const handlePaginar = (index, pagina) => {
        let valor = contador + (index);
        if (valor >= 0 && valor <= userTotales) {
            dispatch(getUsuariosAdmin(valor));
            dispatch(userManejadoPaginador(index, pagina))

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
                        data.map((item, index) => {
                            return <tr key={item.id}>
                                <td>
                                    {(index + 1) + contador}
                                </td>
                                <td className='text-center'>{item.nombre}</td>
                                <td className='text-center'>{item.usuario}</td>
                                <td className='text-center'>{item.tipo}</td>
                                <td className='text-center'>{item.rol}</td>
                                <td className="d-flex justify-content-around">
                                    <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar registro">
                                        <i className="tim-icons icon-pencil"></i>
                                    </button>
                                    <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar registro">
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
            <UsuariosModal />
        </>

    )
}
