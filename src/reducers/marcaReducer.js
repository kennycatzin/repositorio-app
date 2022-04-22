import { types } from "../types/types";

const initialState = {
    checking: true,
    marcaActualPage: 1,
    marcaActualConteo: 0,
    marcaModal: false,
    marcaActive: {}
}
export const marcaReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.marcaGetObjetos:            
            return {
                ...state,
                marcaListado: action.payload.data,
                paginas: action.payload.paginas,
                registros: action.payload.registros              
            } 
        case types.marcaPaginar:    
            return {
                ...state,
                marcaActualPage: state.marcaActualPage + action.payload.paginador,
                marcaActualConteo: state.marcaActualConteo + action.payload.conteo
            } 
        case types.marcaModalObjetos:
            console.log(action.payload);
                return {
                    ...state,
                    marcaActive: action.payload.marcaActive,
                    marcaModal: action.payload.marcaModal,
                    checking: false
                }                 
                
        default:
            return state;
    }
}