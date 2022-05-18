import React, { useEffect, useState } from 'react'
import { ExcelCumplimiento } from '../../inventario/widgets/reports/ExcelCumplimiento'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getSucursalesPrecio } from '../../../actions/precio';
import { BallTriangle } from 'react-loading-icons'
import { getInfoReporteAdmin } from '../../../actions/reporte';
import { ExcelVentas } from '../../inventario/widgets/reports/ExcelVentas';
import { ExcelEmpenos } from '../../inventario/widgets/reports/ExcelEmpenos';

const initEvent = {
    sucursal: '',
    fecha_inicio: '',
    fecha_final: '',
    tipo: ''

}
export const OficalCumplimientoReportPage = () => {
    const [formValues, setFormValues] = useState(initEvent);
    const fecha = Date.now();
    const { sucursal = '', fecha_inicio = moment(fecha).format('YYYY-MM-DD'), fecha_final = moment(fecha).format('YYYY-MM-DD'), tipo } = formValues;
    const { sucursalPrecio } = useSelector(state => state.precio);
    const { loading, data } = useSelector(state => state.reporte);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSucursalesPrecio());
    }, [dispatch]);
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleGetInfo = () => {
        const obj = {
            tipo,
            sucursal,
            fecha_inicio,
            fecha_final,
        }
        if (tipo === '' || sucursal === '' || fecha_final === '' || fecha_inicio === '') {
            Swal.fire({
                title: 'Proceso incorrecto!',
                text: 'Hay un problema con un dato en los filtros',
                confirmButtonColor: "#1d8cf8",
                icon: 'info',
            })
        } else {
            dispatch(getInfoReporteAdmin(obj));
        }
    }
    return (
        <>

            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className=''>
                            <h4 className="card-title d-inline">Reportes Oficial de cumplimiento</h4> <br />
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="table-responsive ps">
                            <div className='row'>
                                <div className="form-group col-6">
                                    <label >Tipo de reporte</label>
                                    <select className="form-control"
                                        id="exampleFormControlSelect1"
                                        value={tipo}
                                        name="tipo"
                                        onChange={handleInputChange}
                                    >
                                        <option>Seleccione un reporte</option>
                                        <option key={1} value="oficial">Reporte de ventas</option>
                                        {/* <option key={2} value="ventas">Reporte de ventas</option> */}
                                        <option key={3} value="empenos">Reporte de clientes que empeñaron</option>

                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label >Sucursales</label>
                                    <select className="form-control"
                                        id="exampleFormControlSelect1"
                                        value={sucursal}
                                        name="sucursal"
                                        onChange={handleInputChange}>
                                        <option>Seleccione una sucursal</option>
                                        {
                                            (sucursalPrecio != null) &&
                                            sucursalPrecio.map((aux) => (
                                                <option key={aux.conexion} value={aux.conexion}>{aux.nombre}</option>
                                            ))

                                        }
                                    </select>


                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-6">
                                    <label >Fecha inicial</label>
                                    <input type="date"
                                        className="form-control"
                                        name="fecha_inicio"
                                        value={moment(fecha_inicio).format('YYYY-MM-DD')}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label >Fecha final</label>
                                    <input type="date"
                                        className="form-control"
                                        name="fecha_final"
                                        value={moment(fecha_final).format('YYYY-MM-DD')}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='text-center mt-3'>
                                <button
                                    onClick={handleGetInfo}
                                    type="button" className="btn btn-success btn-lg" title='Generar reporte'>
                                    <i className="tim-icons icon-notes mr-3"></i>
                                    Generar reporte
                                </button>

                            </div>

                            {
                                (data.length > 0 & !loading) && (
                                    <div className="alert alert-success" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 className="alert-heading">Se ha generado el reporte!</h4>
                                        <p>
                                            Dando click al botón se descargará el reporte en formato excel.</p>
                                        <hr />
                                        <div className="mb-0 text-center">

                                            {
                                                (tipo === 'oficial') ? (
                                                    <ExcelCumplimiento data={data} />
                                                ) :
                                                    (tipo === 'ventas') ? (
                                                        <ExcelVentas data={data} />
                                                    ) :
                                                        (tipo === 'empenos') && (
                                                            <ExcelEmpenos data={data} />
                                                        )

                                            }
                                        </div>

                                    </div>
                                )
                            }

                            {
                                (loading) && (
                                    <div className="alert alert-warning alert-dismissible fade show text-dark" role="alert">
                                        <strong>Espere por favor!</strong> Obteniendo información desde la base de datos.
                                        <p className='text-center text-dark'>
                                            <BallTriangle stroke="black" />
                                            <br />
                                            cargando...
                                        </p>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
