import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarPrecioMetal, sendCorreo, setTipoMovimiento } from '../../../actions/precio'
import { PrecioFormularioComponent } from '../widgets/PrecioFormularioComponent'
import { PrecioSucursalComponent } from '../widgets/PrecioSucursalComponent'
import Swal from 'sweetalert2'

export const PrecioMetalScreen = () => {
    const { sucPrecioListo, sucTipoMostrar } = useSelector(state => state.precio)
    const [tipo, settipo] = useState(0);
    const dispatch = useDispatch();
    const handleInputChange = ({ target }) => {
        settipo(target.value);
        dispatch(setTipoMovimiento(target.value));
        console.log(target.value)
    }
    const handleGuardar = () => {
        Swal.fire({
            title: 'Seguro de enviar el precio?',
            text: "No podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, aplicar'
        }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    tipo: tipo,
                    data: sucPrecioListo
                }
                console.log(obj);
                dispatch(guardarPrecioMetal(obj));
            }
        })
    }
    const handleEnviarCorreoPrecio = () => {
        Swal.fire({
            title: 'Seguro de mandar correo?',
            text: "No podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, enviar'
        }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    tipo: tipo,
                    data: sucPrecioListo
                }
                console.log(obj);
                dispatch(sendCorreo());
            }
        })
    }
    return (
        <div className="row ">
            <div className="col-lg-4">
                <div className="card  card-detalle">
                    <div className="row mx-auto mt-2">
                        <label className="col-md-3 col-form-label">Captura precios</label>
                        <div className="col-md-9">
                            <select className="form-control"
                                id="exampleFormControlSelect1"
                                onChange={handleInputChange}
                                value={tipo}
                                name="tipo"
                            >
                                <option value="0">Seleccione un tipo</option>
                                <option value="1">PRECIO EMPEÑO</option>
                                <option value="2">PRECIO RETACERÍA</option>
                                <option value="3">PRECIO VENTA</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-full-width table-responsive">
                            {/* TODO: formulario */}
                            <PrecioFormularioComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card card-articulos">
                    <div className="card-header mx-auto justify-content-between">
                        <h6 className="title d-inline">Precios capturados</h6>
                        <span className="badge badge-primary badge-pill ml-5">
                            {
                                (!!sucTipoMostrar) &&
                                    (sucTipoMostrar == '1') ? 'PRECIO EMPEÑO'
                                    : (sucTipoMostrar == '2') ? 'PRECIO RETACERÍA'
                                        : (sucTipoMostrar == '3') ? 'PRECIO VENTA'
                                            : 'Seleccione un tipo de movimiento'
                            }
                        </span>
                    </div>
                    <div className='row container mt-2'>
                        <div className='col-8'>

                            <button onClick={handleGuardar} className='btn btn-success btn-block'>
                                <i className="tim-icons icon-check-2 mr-3"></i>
                                Aplicar precio</button>

                        </div>
                        <div className='col-4'>
                            <button onClick={handleEnviarCorreoPrecio} className='btn btn-success btn-block'>
                                <i className="tim-icons icon-email-85 mr-2"></i>
                                Enviar                              
                            </button>
                            
                        </div>
                    </div>
                    <div className="card-body card-tasks">
                        <div className="table-full-width table-responsive">
                            <div className='row'>
                                {
                                    (!!sucPrecioListo) &&

                                    sucPrecioListo.map((item) => (                                        
                                        <PrecioSucursalComponent key={item.id} data={item} />                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
