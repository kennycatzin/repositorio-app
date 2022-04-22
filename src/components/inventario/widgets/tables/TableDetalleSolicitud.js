import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openCloseModal } from '../../../../actions/solicitud';
import { EquipoAgregarModal } from '../../../public/equipo/EquipoAgregarModal';

export const TableDetalleSolicitud = () => {
    const { equipo } = useSelector(state => state.solicitud.activeSolicitud)
    const { activeSolicitud } = useSelector(state => state.solicitud)

    const dispatch = useDispatch();
    const handleSetEstatus = (item) => {
        console.log(item)
        dispatch(openCloseModal(item, true));
    }
    const cabeceras = [
        "Estatus",
        "Marca",
        "Tipo Equipo",
        "Número serie",
        "Observaciones"
    ];
    return (
        <>
            <div className="col-lg-12 col-md-12">
                <div className="card-tasks">
                    <div className="">
                        <table className="table">
                            <thead className="text-primary">
                                <tr>
                                    <th className="text-center">#</th>
                                    {
                                        cabeceras.map(cabeceras => (
                                            <th key={cabeceras} className='text-center'>{cabeceras}</th>
                                        ))
                                    }
                                    {
                                        (activeSolicitud.estatus === "ATENDIDO") ?
                                            (<th className='text-center'>Obs_técnico</th>)

                                            :
                                            (<th className='text-center'>Acción</th>)

                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    equipo?.map((item, index) => {
                                        console.log(item)
                                        return <tr key={item.id}>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className='text-center'>{item.esta_detalle}</td>
                                            <td className='text-center'>{item.marca}</td>
                                            <td className='text-center'>{item.tipo_equipo}</td>
                                            <td className='text-center'>{item.numero_serie}</td>
                                            <td className='text-center'>{item.observaciones}</td>
                                            {
                                                (activeSolicitud.estatus === "ATENDIDO") ?
                                                        <td className='text-center'>{item.obs_tecnico}</td>
                                                    :
                                                    (
                                                        <td onClick={() => handleSetEstatus(item)} className="d-flex justify-content-around">
                                                            <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Editar estatus">
                                                                <i className="tim-icons icon-tap-02"></i>
                                                            </button>
                                                        </td>
                                                    )
                                            }

                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <EquipoAgregarModal tipo={1} />

        </>
    )
}
