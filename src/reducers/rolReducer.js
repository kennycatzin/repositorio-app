import { types } from "../types/types";

const initialState = {
    checking: true
}
export const rolReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tableStartLoading:
            return {
                ...state,
                checking: true
            }    
        case types.tableFinishLoading:
            return {
                ...state,
                checking: false
            }
        case types.rolGetDataConfig:
            return {
                roles: action.payload,
                checking: false
            }   
        case types.rolModalTablero:
            return {
                ...state,
                modalRolOpen: action.payload.modal,
                activeRol: action.payload.rol
            }
        case types.rolArchivoConfModalTablero:
            return {
                ...state,
                activeRolEditConfig: action.payload.rol,
                modalConfRolArchivoOpen: action.payload.modal,
            }   
        case types.rolActivarRolAdmin:
            return {
                ...state,
            }   

            
            
            
        default:
            return state;
    }
}