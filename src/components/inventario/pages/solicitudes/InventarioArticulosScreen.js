import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEstatusAgregarAdmin, getSolicitudesAdmin } from '../../../../actions/solicitud'
import { TableDetalleSolicitud } from '../../widgets/tables/TableDetalleSolicitud'
import { InventarioEncSolicitud } from './InventarioEncSolicitud'
import { InvEstatusCardComponent } from './InvEstatusCardComponent'
import { InvFormEncSolicitud } from './InvFormEncSolicitud'

export const InventarioArticulosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolicitudesAdmin(1));
    dispatch(getEstatusAgregarAdmin());

  }, [dispatch])
  
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-lg-4 col-md-12">
        <div className="card  card-detalle">
          <div className="card-header row">
            <div className='col-4'>
              <h6 className="title mt-3">Solicitud</h6>
            </div>
            <InvEstatusCardComponent />
          </div>
          <InventarioEncSolicitud />
        </div>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="card card-articulos">
          <div className="card-header text-left">
            <h6 className="title d-inline">Detalle de la solicitud</h6>
          </div>
          <div className="card-body card-tasks">
            <InvFormEncSolicitud tipo={2}/>
            <div className="table-full-width table-responsive">
              <TableDetalleSolicitud />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
