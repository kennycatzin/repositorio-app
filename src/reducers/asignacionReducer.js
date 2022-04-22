import { types } from "../types/types";

const initialState = {
    checking: true,
    equipoNuevo: []
}

export const asignacionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.asignacionStartLoading:
            return {
                ...state,
                checking: true
            }
    
        case types.asignacionFinishLoading:
            return {
                ...state,
                checking: false
            }
        case types.asignacionpaginar:
            return {
                asignaciones: action.payload.asignaciones,
                paginas: action.payload.paginas,
                asignacionesTotales: action.payload.totales,
                checking: false
            } 
        case types.asignacionSucursales:
            return {
                ...state,
                equipoNuevo: [],
                equipoAsignado: [],
                equipoDisponible: [],
                itemIdActivo: 0,
                itemTipoActivo: '',
                sucursales: action.payload,
            }   
        case types.asignacionEquipoAsignado:
            return {
                ...state,

                equipoNuevo: [],
                equipoAsignado: action.payload,
            }
        case types.asignacionTipoEquiposAdmin:
            return {
                ...state,
                tipoEquipos: action.payload,
            } 
        case types.asignacionEquipoDisponible:
            return {
                ...state,
                equipoDisponible: action.payload,
            }   
        case types.asignacionAgregarNuevo:
            let obj = action.payload;
            let newArray = state.equipoDisponible.filter((item) => item.id_equipo !== obj.id_equipo);
            let miArreglo = state.equipoNuevo?.filter((item) => item.id_equipo !== obj.id_equipo);
            const miObjeto = {   
                id: (new Date()).getTime().toString(36),             
                id_equipo: obj.id_equipo,
                tipo_equipo: obj.tipo_equipo,
                numero_serie: obj.numero_serie,
                tipo: 'n'
            }
            miArreglo.unshift(miObjeto);
            return {
                ...state,
                equipoNuevo: miArreglo,
                equipoDisponible: newArray,
            }
        case types.asignacionEliminarNuevo:
            let objEliminar = action.payload;
            let miArregloE = state.equipoNuevo?.filter((item) => item.id_equipo !== objEliminar.id_equipo);
            return {
                ...state,
                equipoNuevo: miArregloE,
            }
        case types.asignacionEliminarAsignado:
            let objEliminarA = action.payload;
            let miArregloA = state.equipoAsignado?.filter((item) => item.id_asignacion !== objEliminarA.id_asignacion);
            return {
                ...state,
                equipoAsignado: miArregloA,
            }
        case types.asignacionSetIdActivo:
            return {
                ...state,
                itemIdActivo: action.payload.id_usuario,
                itemTipoActivo: action.payload.tipo
            }
        case types.asignacionSetArrLimpios:
            return {
                ...state,
                equipoAsignado: [],
                equipoNuevo: [],
                equipoDisponible: [],
                itemIdActivo: 0,
                itemTipoActivo: ''
            }
        case types.solicitudSetActiveSolicitud:
            return {
                ...state,
                tipo: action.payload.tipo,
                activeSolicitud: action.payload.data
            }
            

            
            
            
        default:
            return state;
    }
}