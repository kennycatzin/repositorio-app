import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAuxFormularioArchivo } from '../../../actions/repositorio';
import { getBusquedaRoles, getRolesAdmin, openCloseModalRol } from '../../../actions/roles';
import { TableRoles } from '../widgets/tables/TableRoles';

export const RolesScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRolesAdmin());
        dispatch(getAuxFormularioArchivo())
    }, [dispatch]);
    const [busqueda, setbusqueda] = useState('');
    const cabeceras = [
        "Rol",
        "Departamento",
    ];
    const handleAgregar = () => {
        dispatch(openCloseModalRol(true, {}))
    }
    const { roles, rolTotal } = useSelector(state => state.roles) 
    const handleBuscar = (e) => {
        e.preventDefault();
        setbusqueda(e.target.value)
        if(e.target.value !== ''){
            if(e.target.value.length > 2){
                const obj = {
                    busqueda: e.target.value
                }
                dispatch(getBusquedaRoles(obj));
            }
        }else{
            dispatch(getRolesAdmin());
        }
    }
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/configuraciones">Configuraciones</Link>
                    </li>
                    <li className="breadcrumb-item active">Roles</li>
                </ol>
            </div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
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
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className=''>
                            <h4 className="card-title d-inline">Listado de roles</h4> <br />
                            <h5 className="card-title d-inline">Registros: {rolTotal}</h5>
                        </div>
                       
                        <button onClick={handleAgregar} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevo rol'>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            {
                                (roles !== undefined) ?
                                    <TableRoles cabeceras={cabeceras} data={roles} />
                                    : <h5>Espere....</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
