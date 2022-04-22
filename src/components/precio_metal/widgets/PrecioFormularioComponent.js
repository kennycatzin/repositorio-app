import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useChecklist } from 'react-checklist';
import { getSucursalesPrecio, setSucursalesConPrecio } from '../../../actions/precio';
import Swal from 'sweetalert2'

const initialState = {
    id: 0,
    k6: 0, k10: 0, k14: 0, k18: 0, k21: 0, k24: 0
}
export const PrecioFormularioComponent = () => {
    const [formValues, setFormValues] = useState(initialState);
    const { tipoMovimiento, sucPrecioListo, nuevaLista } = useSelector(state => state.precio)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSucursalesPrecio());
    }, [dispatch]);
    const { id = 0, k6 = 0, k10 = 0, ak10 = 0, k14 = 0, k18 = 0, k21 = 0, k24 = 0 } = formValues;
    const { sucursalPrecio, kilatajesPrecio } = useSelector(state => state.precio)

    const { handleCheck, isCheckedAll, checkedItems, setCheckedItems } = useChecklist(sucursalPrecio, {
        key: 'id',
        keyType: 'number',
    });
    const handleReset = () => setCheckedItems(new Set());
    const handleSubmit = (e) => {
        console.log(sucPrecioListo);
        e.preventDefault();
       armarObjeto();

        let arrSucursales = [];
        for (let item of checkedItems) arrSucursales.push({ "id": item });
        const objSend = {
            id_archivo: 1,
            usuario: 2,
            roles: arrSucursales
        }
        handleReset();
    }
    const armarObjeto = () => {
        let arrSucursales = [];
        let arrReal = [];
        let arrKila = [];
        console.log(nuevaLista);
        console.log(sucPrecioListo);
        for (let kilas of kilatajesPrecio) {
            switch (kilas.id) {
                case 33:
                    kilas.precio = k6;
                    break;
                case 1:
                    kilas.precio = k10;
                    break;
                case 2:
                    kilas.precio = ak10;
                    break;
                case 3:
                    kilas.precio = k14;
                    break;
                case 22:
                    kilas.precio = k18;
                    break;
                case 21:
                    kilas.precio = k21;
                    break;
                case 32:
                    kilas.precio = k24;
                    break;
                default:
                    break;
            }
        }
        for (let item of checkedItems) {
            arrSucursales.push({ "id": item });
            for (let obj of sucursalPrecio) {
                if (item === obj.id) {
                    obj.precio = kilatajesPrecio;
                    arrReal.push(obj);
                }
                obj.tipoMov = tipoMovimiento;
            }
        }
        if (!!tipoMovimiento) {
            if (tipoMovimiento !== '0') {
                // TODO: HAcerlo uno por uno
                // console.log(arrReal)
                console.log(sucPrecioListo);
                dispatch(setSucursalesConPrecio(arrReal, tipoMovimiento));                

            } else {
                Swal.fire({
                    title: 'Debe seleccionar un tipo de movimiento',
                    text: 'Ha ocurrido un problema',
                    confirmButtonColor: "#1d8cf8",
                    icon: 'warning',
                })
            }

        } else {
            Swal.fire({
                title: 'Debe seleccionar un tipo de movimiento',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8",
                icon: 'warning',
            })
        }
    }
    const handleInputChange = ({ target }) => {
        console.log(sucPrecioListo)
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button className='btn btn-success btn-block mx-auto'>                    
                    Preparar
                    <i className="tim-icons icon-double-right ml-3"></i>
                </button>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    Oro bajo *
                                </label>
                                <input className="form-control"
                                    value={k6}
                                    type="number"
                                    name="k6"                                    
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    10K Rojo *
                                </label>
                                <input className="form-control"
                                    value={k10}
                                    type="number"
                                    name="k10"
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    10K Amarillo *
                                </label>
                                <input className="form-control"
                                    value={ak10}
                                    type="number"
                                    name="ak10"
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    14 Kilates *
                                </label>
                                <input className="form-control"
                                    value={k14}
                                    type="number"
                                    name="k14"
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    18 Kilates *
                                </label>
                                <input className="form-control"
                                    value={k18}
                                    type="number"
                                    name="k18"
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    21 Kilates *
                                </label>
                                <input className="form-control"
                                    value={k21}
                                    type="number"
                                    name="k21"
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group has-label">
                                <label>
                                    24 Kilates *
                                </label>
                                <input className="form-control"
                                    value={k24}
                                    type="number"
                                    name="k24"
                                    onChange={handleInputChange} />
                            </div>
                        </div>

                    </div>

                </div>
            </form>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={isCheckedAll}
                    />
                    <span className="form-check-sign">
                        <span className="check"></span>
                    </span>
                    Seleccionar todas las sucursales
                </label>
            </div>
            <br /><br />
            <div className='scroll-component'>
                <div className="cont-roles">
                    <div className="table-full-width table-responsive">
                        <table className="table">
                            <tbody>
                                {
                                    (sucursalPrecio !== undefined) &&
                                    sucursalPrecio.map((v, i) => (
                                        <tr key={i}>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input"
                                                            type="checkbox"
                                                            data-key={v.id}                  // 3
                                                            onChange={handleCheck}            // 4
                                                            checked={checkedItems.has(v.id)} // 5
                                                        />
                                                        <span className="form-check-sign">
                                                            <span className="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="title">{v.nombre}</p>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
