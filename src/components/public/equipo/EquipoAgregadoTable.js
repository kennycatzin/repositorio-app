import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { eliminarEquipoAdmin } from '../../../actions/solicitud';

export const EquipoAgregadoTable = () => {
    const { equipoAgregado } = useSelector(state => state.solicitud);
    const dispatch = useDispatch();
    const handleClickEliminar = (item) => {
        dispatch(eliminarEquipoAdmin(item));
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
                    <div className=" table-responsive">
                        <table className="table">
                            <thead className="text-primary">
                                <tr>
                                    <th className="text-center">#</th>
                                    {
                                        cabeceras.map(cabeceras => (
                                            <th key={cabeceras} className='text-center'>{cabeceras}</th>
                                        ))
                                    }
                                    <th className='text-center'>Opción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    equipoAgregado?.map((item, index) => {
                                        return <tr key={item.id}>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className='text-center'>Revisión</td>
                                            <td className='text-center'>{item.marca}</td>
                                            <td className='text-center'>{item.tipo_equipo}</td>
                                            <td className='text-center'>{item.numero_serie}</td>
                                            <td className='text-center'>{item.observacion}</td>
                                            <td className="d-flex justify-content-around">
                                                <button onClick={() => handleClickEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="Eliminar del listado">
                                                    <i className="tim-icons icon-trash-simple"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
