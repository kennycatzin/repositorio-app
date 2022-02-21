import { types } from "../types/types";

const initialState = {
    checking: true
}

export const tableroReducer = (state = initialState, action) => {
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
        case types.tableGetDataConfig:
            return {
                tablero: action.payload,
                checking: false
            }   
        case types.tableModalTablero:
            return {
                ...state,
                modalTableroOpen: action.payload.modal,
                activeTablero: action.payload.tablero
            }    
        case types.tableGetFilesTablero:
            return {
                ...state,
                archivos: action.payload.tableFiles,
                nombreEstatus: action.payload.nombreEstatus
            }    
        default:
            return state;
    }
}