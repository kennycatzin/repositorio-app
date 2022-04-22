import { types } from "../types/types";

const initialState = {
    checking: true,
    tipoEActualPage: 1,
    tipoEActualConteo: 0,
    tipoEModal: false,
    tipoEActive: {}
}
export const tipoEquipoReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.tipoEGetObjetos:            
            return {
                ...state,
                tipoEListado: action.payload.data,
                paginas: action.payload.paginas,
                registros: action.payload.registros              
            } 
        case types.tipoEPaginar:    
            return {
                ...state,
                tipoEActualPage: state.tipoEActualPage + action.payload.paginador,
                tipoEActualConteo: state.tipoEActualConteo + action.payload.conteo
            } 
        case types.tipoEModalObjetos:
                return {
                    ...state,
                    tipoEActive: action.payload.tipoEActive,
                    tipoEModal: action.payload.tipoEModal,
                    checking: false
                }                 
                
        default:
            return state;
    }
}