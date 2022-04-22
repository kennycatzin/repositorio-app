import { types } from "../types/types";

const initialState = {
    checking: true,
    licActualPage: 1,
    licActualConteo: 0,
    licModal: false,
    licActive: {}
}
export const licenciaReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.licGetLicencias:            
            return {
                ...state,
                licenciaListado: action.payload.data,
                paginas: action.payload.paginas,
                registros: action.payload.registros              
            } 
        case types.licPaginar:    
            return {
                ...state,
                licActualPage: state.licActualPage + action.payload.paginador,
                licActualConteo: state.licActualConteo + action.payload.conteo
            } 
        case types.licModalLicencias:
                return {
                    ...state,
                    licActive: action.payload.licActive,
                    licModal: action.payload.licModal,
                    checking: false
                }                 
        case types.licGetEstatusLicencias:
                return {
                    ...state,
                    licEstatus: action.payload,
                    checking: false
                }         
                
        default:
            return state;
    }
}