import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { BallTriangle } from 'react-loading-icons'
import {  getInfoReporteRepositorioAdmin } from '../../../actions/reporte';
import { ExcelDocumentoPorRol } from './reports/ExcelDocumentoPorRol';
import { ExcelUsuarios } from './reports/ExcelUsuarios';

const initEvent = {
    sucursal: '',
    fecha_inicio: '',
    fecha_final: '',
    tipo: ''

}
export const RepositorioReportPage = () => {
    const [formValues, setFormValues] = useState(initEvent);
    const {  tipo } = formValues;
    const { loading, data } = useSelector(state => state.reporte);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getSucursalesPrecio());
    // }, [dispatch]);
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleGetInfo = () => {
        const obj = {
            tipo
        }
        console.log(tipo)
        if (tipo === '') {
            Swal.fire({
                title: 'Proceso incorrecto!',
                text: 'Hay un problema con un dato en los filtros',
                confirmButtonColor: "#1d8cf8",
                icon: 'info',
            })
        } else {
            dispatch(getInfoReporteRepositorioAdmin(obj));
        }
    }
    return (
        <>

            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className=''>
                            <h4 className="card-title d-inline">Reportes repositorio</h4> <br />
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
                                        <option value={''}>Seleccione un reporte</option>
                                        <option key={1} value="documentos">Reporte de documentos por rol</option>
                                        <option key={2} value="usuario">Reporte de información de usuarios</option>

                                    </select>
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
                                                (tipo === 'documentos') ? (
                                                    <ExcelDocumentoPorRol data={data} />
                                                ) :
                                                    (tipo === 'usuario') ? (
                                                        <ExcelUsuarios data={data} />
                                                    ) :
                                                        null

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
