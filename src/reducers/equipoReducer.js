import { types } from "../types/types";

const initialState = {
    checking: true
}
export const equipoReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.licGetLicencias:            
            return {
                ...state,
                licenciaListado: action.payload.data           
            } 
        
            
        default:
            return state;
    }
}