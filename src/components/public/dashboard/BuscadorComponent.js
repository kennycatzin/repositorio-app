import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBusquedaArchivos } from '../../../actions/dashboard';
import { TableFiles } from './TableFiles'

export const BuscadorComponent = () => {
    const dispatch = useDispatch();
    const [busqueda, setbusqueda] = useState('');
    const { uid } = useSelector(state => state.auth)

    const handleBuscar = (e) => {
        e.preventDefault();
        setbusqueda(e.target.value)
        if(e.target.value !== ''){
            if(e.target.value.length > 2){
                const obj = {
                    busqueda: e.target.value,
                    id_usuario: uid
                }
               dispatch(getBusquedaArchivos(obj));
            }
        }else{
           // dispatch(getUsuariosAdmin());
        }
    }
    return (
        <>
                       
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
        </>
    )
}
