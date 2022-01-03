import { types } from "../types/types";
const initialState = {
    loading: false,
    msgError: null,
    itemActive: null,
    tabla: null,
}
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload.msgError
            };
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            };
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
    
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        case types.uiModalEstatus:
            return {
                ...state,
                modalEstatusOpen: action.payload.modalEstatusOpen
            }
        case types.uiUpdateCatalogoEstatus:
            return {
                ...state,
                itemActive: action.payload.data,
                modalEstatusOpen: action.payload.modalEstatusOpen
        }
        case types.uiGetTableCatalogoObjeto:
            return {
                ...state,
                tabla: action.payload
            }
        case types.uiGetRoles:
            return {
                ...state,
                auxRoles: action.payload
            }

            
        default:
            return state;
    }
}