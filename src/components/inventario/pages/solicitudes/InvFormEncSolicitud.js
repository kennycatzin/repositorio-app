import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarSolicitud, setActiveSolicitud } from '../../../../actions/solicitud';
import Swal from 'sweetalert2'

const initialState = {
    id: 0,
    trasladista: '',
    usuario: '',
    departamento: '',
    observaciones: ''
}
export const InvFormEncSolicitud = ({ tipo }) => {
    const { name, uid } = useSelector(state => state.auth);
    const { equipoAgregado, activeSolicitud } = useSelector(state => state.solicitud);
    const dispatch = useDispatch();
    const [formValues, setformValues] = useState(initialState);
    const {  usuario = name, trasladista = '', departamento = '', observaciones = '' } = formValues;
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleGuardarAgregado = () => {
        const objGuarda = {
            usuario: uid,
            tipo_solicitud: 'SOLICITUD',
            nombre_usuario: name,
            trasladista,
            departamento,
            observaciones,
            equipos: equipoAgregado
        }
        console.log(objGuarda);
        if (equipoAgregado.length > 0) {
            Swal.fire({
                title: 'Realmente desea enviar este equipo?',
                text: "No podrá revertir esta acción",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, enviar'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(guardarSolicitud(objGuarda));
                    setformValues(initialState);
                }
            })

        } else {
            Swal.fire({
                title: 'Proceso incorrecto',
                text: 'No existen datos para enviar',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }

    return (
        <>
            {
                (tipo === 1) ?
                    <button onClick={handleGuardarAgregado} className='btn-block btn btn-success'>
                        <i className="fa fa-save mr-3"></i>
                        Guardar</button>
                    : null
            }
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Usuario</label>
                            <input type="text"
                                className="form-control text-white"
                                value={(tipo === 1) ? name : activeSolicitud?.nombre_usuario}
                                name={usuario}
                               disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 pr-md-1">
                        <div className="form-group">
                            <label>Trasladista</label>
                            <input type="text"
                                className="form-control text-white"
                                placeholder="ingrese el nombre..."
                                value={(tipo === 1) ? trasladista: activeSolicitud?.nombre_traslado}
                                name="trasladista"
                                onChange={handleInputChange}
                                autoComplete="off"
                                disabled = {(tipo === 2)? true: false}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                        <div className="form-group">
                            <label>Departamento trasladista</label>
                            <input type="text"
                                className="form-control text-white"
                                placeholder="ingrese el departamento..."
                                value={(tipo === 1) ? departamento: activeSolicitud?.departamento_traslado}
                                name="departamento"
                                onChange={handleInputChange}
                                autoComplete="off"
                                disabled = {(tipo === 2)? true: false}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Observaciones</label>
                            <textarea rows="4" cols="80"
                                className="form-control text-white"
                                placeholder="Ingrese las observaciones generales..."
                                value={(tipo === 1) ? observaciones : activeSolicitud?.observaciones}
                                onChange={handleInputChange}
                                name="observaciones"
                                disabled = {(tipo === 2)? true: false}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
