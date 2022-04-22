import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEquipoDisponibleAdmin } from '../../../../actions/asignaciones';
import Swal from 'sweetalert2'

export const SelTipoEquipo = () => {
    const { tipoEquipos } = useSelector(state => state.asignacion)
    const [id_tipo, setid_tipo] = useState(0);
    const {itemIdActivo, itemTipoActivo} = useSelector(state => state.asignacion); 

    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        setid_tipo(e.target.value);
        console.log(itemIdActivo, itemTipoActivo);
        if((!!itemIdActivo) && (!!itemIdActivo) ){
            if((itemIdActivo !== 0 && itemTipoActivo !== '')){
                dispatch( getEquipoDisponibleAdmin('TIPO', '', e.target.value) );
            }
            dispatch( getEquipoDisponibleAdmin('TIPO', '', e.target.value) );
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
            <select className="form-control"
                id="exampleFormControlSelect1"
            value={id_tipo === null ? '' : id_tipo}
            name="id_tipo"
            onChange={handleInputChange}
            >
                <option value="">Seleccione un tipo de equipo</option>
                {
                    (tipoEquipos !== undefined) &&
                    tipoEquipos.map((aux) => (
                        <option key={aux.id} value={aux.id}>{aux.tipo_equipo}</option>
                    ))
                }
            </select>
        </>
    )
}
