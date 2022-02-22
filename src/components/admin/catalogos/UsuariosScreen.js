import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuxRoles } from '../../../actions/catalogos';
import { getBusquedaUsuarios, getUsuariosAdmin, openCloseModalUsuarios } from '../../../actions/user';
import { TableUsuarios } from '../widgets/tables/TableUsuarios';

export const UsuariosScreen = () => {
    const cabeceras = [
        "Nombre",       
        "Usuario",
        "Tipo",
        "Rol"
    ];
    const dispatch = useDispatch();
    const [busqueda, setbusqueda] = useState('');
    useEffect(() => {
        dispatch(getAuxRoles())
        dispatch(getUsuariosAdmin());
    }, [dispatch]);
    const handleOpenModal = () => {
        dispatch(openCloseModalUsuarios(true));
    }
    const handleBuscar = (e) => {
        e.preventDefault();
        setbusqueda(e.target.value)
        if(e.target.value !== ''){
            if(e.target.value.length > 2){
                const obj = {
                    busqueda: e.target.value
                }
                dispatch(getBusquedaUsuarios(obj));
            }
        }else{
            dispatch(getUsuariosAdmin());
        }
    }
    const {userUsuarios, userTotales} = useSelector(state => state.usuarios);
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Usuarios</li>
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
                <div className="card">
                <div className="card-header d-flex justify-content-between">
                        <div className=''>
                        <h4 className="card-title d-inline">Listado de usuarios</h4> <br />
                            <h5 className="card-title d-inline">Registros: {userTotales}</h5>
                        </div>
                        <button onClick={handleOpenModal} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo usuario'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            {
                                (!!userUsuarios) ?
                                    <TableUsuarios cabeceras={cabeceras} data={userUsuarios} />
                                : <h5>Espere...</h5>
                            }                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
