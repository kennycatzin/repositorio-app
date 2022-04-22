import { types } from "../types/types"


const initialState = {
    checking: true,
    data: {},
    equipoAgregado: [],
    activeSolicitud: {}
}
export const solicitudReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.solicitudGetEquipos:
            return {
                ...state,
                equipos: action.payload,
                equipoAgregado: [],
                activeSolicitud: {},
                checking: false,
            }
        case types.solicitudModalOpen:
            return {
                ...state,
                equipoActive: action.payload.equipo,
                modalAgregarEquipo: action.payload.modal,
                checking: false
            }
        case types.solicitudGetEstatusAgregar:
            return {
                ...state,
                estatusAgregar: action.payload
            }
        case types.solicitudAgregarEquipo:
            let obj = action.payload;
            let newArray = state.equipos.filter((item) => item.id_asignacion !== obj.id);
            const miObjeto = {   
                id: (new Date()).getTime().toString(36),             
                tipo: 'n',
                id_asignacion: obj.id,
                id_estatus: obj.id_estatus,
                estatus: obj.estatus,
                observacion: obj.observacion,
                marca: obj.marca,
                tipo_equipo: obj.tipo_equipo,
                numero_serie: obj.numero_serie   
            }
            state.equipoAgregado.unshift(miObjeto);
            return {
                ...state,
                equipos: newArray
            }

        case types.solicitudEliminarEquipoAgregado:
            let objEli = action.payload;
            let newArrayEli = state.equipoAgregado.filter((item) => item.id_asignacion !== objEli.id_asignacion);
            const miObjetoEli = {   
                id: (new Date()).getTime().toString(36),             
                tipo: 'n',
                id_asignacion: objEli.id_asignacion,
                id_estatus: objEli.id_estatus,
                estatus: 'Activo',
                observacion: objEli.observacion,
                marca: objEli.marca,
                tipo_equipo: objEli.tipo_equipo,
                numero_serie: objEli.numero_serie   
            }
            state.equipos.unshift(miObjetoEli);
            return {
                ...state,
                equipoAgregado: newArrayEli
            }
        case types.solicitudSetActiveSolicitud:
            console.log(action.payload.solicitud);
            return {
                ...state,
                activeSolicitud: action.payload.solicitud,
                tipo: action.payload.tipo
            }
        case types.solicitudGetSolicitudes:
            return {
                ...state,
                listSolicitudes: action.payload,
                activeSolicitud: {},
            }
        case types.solicitudSustElementoDetalle:
            
            let objSus = action.payload;
            console.log(objSus)
            let newArraySus = state.activeSolicitud.equipo.filter((item) => item.id !== objSus.id_detalle);
            state.activeSolicitud.equipo = newArraySus;
            state.activeSolicitud.equipo.push(objSus);
            let objSustNew = state.activeSolicitud;
            return {
                ...state,
                activeSolicitud: objSustNew
            }
            
            
            
        default:
            return state;
    }
}
