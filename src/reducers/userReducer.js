import { types } from "../types/types";

const initialState = {
    checking: true,
    depaIndex:  0,
    userActive: {},
    userActualPage: 1,
    userActualConteo: 0
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.userGetUsuarios:
            console.log(action.payload)
            return {
                ...state,
                userUsuarios: action.payload.data,
                userTotales: action.payload.totales,
                paginas: action.payload.paginas,
                checking: false
            }
        case types.userModalUsuario:
            return {
                ...state,
                userActive: action.payload.userActive,
                userModal: action.payload.userModal,
                checking: false
            }
        case types.userPaginar:    
        console.log(action.payload);
            return {
                ...state,
                userActualPage: state.userActualPage + action.payload.paginador,
                userActualConteo: state.userActualConteo + action.payload.conteo
            }
        default:
            return state;
    }
}