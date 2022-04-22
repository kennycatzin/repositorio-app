import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarConfiguracionNuevo } from '../../../../actions/asignaciones'
import { TableAsignacionAsignado } from '../../widgets/tables/TableAsignacionAsignado'
import { TableAsignacionInventario } from '../../widgets/tables/TableAsignacionInventario'
import { TableAsignacionNuevo } from '../../widgets/tables/TableAsignacionNuevo'



export const InventarioAsignacionEntries = () => {
    const dispatch = useDispatch();
    const {equipoNuevo, itemIdActivo, itemTipoActivo} =  useSelector(state => state.asignacion);
    const { uid } = useSelector(state => state.auth);

    const handleConfEquipo = () => {
        const obj = {
            id_funcion: itemIdActivo,
            usuario: uid,
            equipos: equipoNuevo,
            tipo: itemTipoActivo
        }
        console.log(itemIdActivo, itemTipoActivo)
        if(equipoNuevo.length > 0){
            dispatch(guardarConfiguracionNuevo(obj, itemIdActivo, itemTipoActivo));
        }
    }
    return (
        <div className="row d-flex justify-content-around">
            <div className="col-lg-8 col-md-12">
                <div className="card card-tasks ">
                    <div className="card-header ">
                        <h6 className="title d-inline">Inventario</h6>
                    </div>
                    <div className="card-body ">
                        <div className="table-full-width table-responsive">
                            <TableAsignacionInventario />
                        </div>
                    </div>
                </div>
                <div className="card card-tasks">
                    <div className="card-header ">
                        <h6 className="title d-inline">Equipo asignado</h6>
                      
                    </div>
                    <div className="card-body bomba">
                        <div className="table-full-width table-responsive">
                            
                            <TableAsignacionAsignado/>

                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
            <div className="card  card-nuevo largo">
                    <div className="card-header row justify-content-around">
                        <h6 className="title mt-3">Equipo nuevo</h6>
                        <button onClick={handleConfEquipo} type="button" rel="tooltip" className="btn btn-success  " data-original-title="Refresh" title="Editar estatus">
                            <i className="fa fa-save"></i> Guardar
                        </button> 
                    </div>
                    <div className="card-body ">
                        <div className="table-full-width table-responsive">
                            <TableAsignacionNuevo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
