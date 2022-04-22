import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getSucursalesAdmin, getTipoEquiposAdmin, setLimpiarArreglos } from '../../../../actions/asignaciones';
import { getBusquedaUsuarios } from '../../../../actions/user';
import { AcEquipo } from '../../widgets/automplete/AcEquipo';
import { AcUsuario } from '../../widgets/automplete/AcUsuario';
import { SelSucursal } from '../../widgets/select/SelSucursal';
import { SelTipoEquipo } from '../../widgets/select/SelTipoEquipo';
import { InventarioAsignacionEntries } from './InventarioAsignacionEntries';

export const InventarioFormAsignacionScreen = () => {
    const [miValor, setmiValor] = useState('');
    const handleOptionChange = (e) => {

        setmiValor(e.target.value);
        dispatch(setLimpiarArreglos());
    }
    const obj = {
        busqueda: ''
    }
    const dispatch = useDispatch();

    useEffect(() => {        
        dispatch( getSucursalesAdmin() );
        dispatch( getTipoEquiposAdmin() );

        dispatch(getBusquedaUsuarios(obj));

      }, [ dispatch ]);   


    return (

        <>
            <div className="row">
                {/* <ol className="breadcrumb bg-transparent">
                    <li><span onClick={handdleRegresar} className="nav-link text-success pointer">
                        <i className="tim-icons icon-minimal-left"></i> Regresar
                    </span>
                    </li>
                </ol> */}
            </div>
            <div className='card'>
                <div className='card-body'>
                    <form>
                        <div className="form-row d-flex justify-content-between">
                            <div className="col-sm-3 checkbox-radios">
                                <div className="form-check form-check-radio">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadios3" value="option1" checked={miValor === 'option1'} onChange={handleOptionChange} />
                                        <span className="form-check-sign"></span>
                                        Sucursal
                                    </label>
                                </div>
                                <div className="form-check form-check-radio">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadios4" value="option2" checked={miValor === 'option2'} onChange={handleOptionChange} />
                                        <span className="form-check-sign"></span>
                                        Individual
                                    </label>
                                </div>
                            </div>
                            <div className="col-9 form-group mt-3">
                                {
                                    miValor === "option1" ?
                                        <SelSucursal/>
                                    : miValor === "option2" ? <AcUsuario/>
                                    : "Seleccione un tipo"
                                }                                
                            </div>
                        </div>
                    </form>
                    <br/>
                    <div className="form-row d-flex justify-content-between">
                            <div className="col-sm-3">
                                <SelTipoEquipo/>
                            </div>
                            <div className="col-9 form-row d-flex justify-content-between">
                                <AcEquipo/>                            
                            </div>
                        </div>
                </div>
            </div>
            <InventarioAsignacionEntries/>
        </>
    )
}