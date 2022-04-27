import { types } from "../types/types";

const initialState = {
    checking: true,
    equipoActualPage: 1,
    equipoActualConteo: 0,
    equipoModal: false,
    equipoActive: {},
    tipoObj: "OTRO"
}
export const equipoReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.equipoGetEquipos:            
            return {
                ...state,
                equipoListado: action.payload.data,
                paginas: action.payload.paginas,
                registros: action.payload.registros              
            } 
        case types.equipoModalObjetos:
            return {
                ...state,
                equipoActive: action.payload.equipoActive,
                equipoModal: action.payload.equipoModal,
                tipoObj: action.payload.tipoObj,
                lOffice: action.payload.lOffice,
                lWindows: action.payload.lWindows,
                checking: false
            }  
        case types.equipoGetHelpers:
            return {
                ...state,
                tipo_equipos: action.payload.tipo_equipos,
                equipos_computadora: action.payload.equipos_computadora,
                marcas: action.payload.marcas,
                lOffice: action.payload.lOffice,
                lWindows: action.payload.lWindows,
            }   
            
            
        default:
            return state;
    }
}