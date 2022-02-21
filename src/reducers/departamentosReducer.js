import { types } from "../types/types";

const initialState = {
    checking: true,
    depaIndex:  0
}
export const departamentosReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.depaGetDepartamentos:
            console.log('entro a buscqueda');
            return {
                ...state,
                depaDepartamentos: action.payload.data,
                totales: action.payload.totales,
                checking: false
            }
        case types.depaModalDepartamentos:
            return {
                ...state,
                depaActive: action.payload.depaActive,
                depaModal: action.payload.depaModal,
                checking: false
            }  
        case types.depaMovPaginadorDepartamentos:
            let valor = state.depaIndex + action.payload;
            console.log(valor);
            return {
                ...state,
                depaIndex: valor,
                checking: false
            }      
            
        default:
            return state;
    }
}