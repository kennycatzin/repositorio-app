import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEquipoAsignadoAdmin } from '../../../../actions/asignaciones';

export const SelSucursal = () => {
    const { sucursales } = useSelector(state => state.asignacion)
    const [idSucursal, setidSucursal] = useState(0);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setidSucursal(e.target.value);
        dispatch( getEquipoAsignadoAdmin(e.target.value, 'SUCURSAL') );
        // TODO: agregar a usuario activo
        
        
        
        
    }
    return (
        <>
            <select className="form-control"
                id="exampleFormControlSelect1"
                value={idSucursal == null ? '' : idSucursal}
                name="idSucursal"
                onChange={handleInputChange}
            >
                <option value="">Seleccione una sucursal</option>
                {
                    (sucursales !== undefined) &&
                    sucursales.map((aux) => (
                        <option key={aux.id} value={aux.id}>{aux.sucursal}</option>
                    ))
                }
            </select>
        </>
    )
}
