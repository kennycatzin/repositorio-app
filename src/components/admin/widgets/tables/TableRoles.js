import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bajaRol, getRolesAdmin, manejadoPaginador, openCloseModalRol, setRolActivo } from '../../../../actions/roles';
import { RolesModal } from '../../../modal/rolesModal';
import Swal from 'sweetalert2'

export const TableRoles = ({ cabeceras, data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [contador, setContador] = useState(0);
    const {rolTotal, paginas} = useSelector(state => state.roles)
    const [miPagina, setmiPagina] = useState(1);
    const {actualConteo} = useSelector(state => state.roles)

    const handleEditar = (item) => {
        dispatch(openCloseModalRol(true, item));

    }
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
                dispatch(bajaRol(item.id, 1, actualConteo));
            }
          })
    }
    const handlePaginar = (index, pagina) => {
        let valor = contador + (index);
        if(valor >= 0 && valor <= rolTotal){
            dispatch(getRolesAdmin(valor));
            
            dispatch(manejadoPaginador(index, pagina))
            setContador(valor);
            setmiPagina(miPagina + pagina);
        }
    }
    const handleConfigurar = (item) => {
        dispatch(setRolActivo(item));
        navigate('/configurar')
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
                        data.map((item, index = 1) => {
                            return <tr key={item.id}>
                                <td >{(index + 1) + contador}</td>
                                <td className='text-center'>{item.rol}</td>
                                <td className='text-center'>{item.departamento}</td>
                                <td className="d-flex justify-content-around">
                                    
                                    <button onClick={() => handleConfigurar(item)} type="button" rel="tooltip" className="btn btn-warning btn-sm " data-original-title="Edit" title="Configurar archivos al rol">
                                        <i className="tim-icons icon-settings"></i>
                                    </button>
                                    <button onClick={() => handleEditar(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar rol">
                                        <i className="tim-icons icon-pencil"></i>
                                    </button>
                                    <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="Eliminar rol">
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
                            <h4> {miPagina> paginas ? paginas : miPagina} </h4>
                            <h4 className='pl-2 pr-2' > / </h4>
                            <h4> {paginas ? paginas : 1} </h4>
                        </div>
                <button onClick={() => handlePaginar(+8, +1)} className='btn btn-primary btn-sm'>
                    <i  className="tim-icons icon-double-right"></i>                    
                </button>

            </div>
            <RolesModal />
        </>
    )
}
