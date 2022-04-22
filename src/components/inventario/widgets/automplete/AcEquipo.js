import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEquipoDisponibleAdmin } from '../../../../actions/asignaciones';
import Swal from 'sweetalert2'

export const AcEquipo = () => {
    const {itemIdActivo, itemTipoActivo} = useSelector(state => state.asignacion); 
    const dispatch = useDispatch();
    const [buscador, setBuscador] = useState('');

    const handleInputChange = (e) => {
        setBuscador(e.target.value);
        console.log(itemIdActivo, itemTipoActivo);
        if((!!itemIdActivo) && (!!itemIdActivo) ){
            if((itemIdActivo !== 0 && itemTipoActivo !== '')){
                dispatch( getEquipoDisponibleAdmin('BUSCADOR', e.target.value, e.target.value) );
            }
            dispatch( getEquipoDisponibleAdmin('BUSCADOR', e.target.value, e.target.value) );
        }else{
            Swal.fire({
                title: 'Proceso incorrecto',
                text: 'Debe seleccionar una sucursal o un usuario',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    } 
    return (
        <>
            <div className="col-9">
                <input type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    value={buscador}
                    name="busqueda"
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-3">
                <button type='button' className='btn btn-default'>Buscar</button>
            </div>
        </>
    )
}
