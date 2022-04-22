import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEquiposAdmin, getEstatusAgregarAdmin } from '../../../actions/solicitud'
import { InvFormEncSolicitud } from '../../inventario/pages/solicitudes/InvFormEncSolicitud'
import { EquipoAgregadoTable } from './EquipoAgregadoTable'
import { EquipoCardComponent } from './EquipoCardComponent'


export const EquipoScreen = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth)
    const { equipos } = useSelector(state => state.solicitud)

    useEffect(() => {
        dispatch(getEquiposAdmin(uid));
        dispatch(getEstatusAgregarAdmin());
    }, [dispatch])

    return (
        <div className="row d-flex justify-content-around">
            <div className="col-lg-4 col-md-12">
                <div className="card card-detalle ">
                    <div className="card-header row">
                        <div className='col-12'>
                            <h6 className="title mt-3">Equipo actual</h6>
                        </div>
                    </div>
                    <EquipoCardComponent data={equipos} />

                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="card card-detalle">
                    <div className="card-header text-left">
                        <h6 className="title d-inline">Equipo agregado</h6>
                    </div>
                    <div className="card-body card-tasks">
                        <InvFormEncSolicitud tipo={1}/>
                        <div className="table-full-width table-responsive">
                            <EquipoAgregadoTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
