import { types } from "../types/types";

const initialState = {
    checking: true
}
export const tipoDocumentosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tableStartLoading:
            return {
                ...state,
                checking: true
            }
        case types.tipoGetTipoDocumentos:
            console.log('entro a buscqueda');
            return {
                ...state,
                tipoDocumentos: action.payload,
                checking: false
            }
        case types.tipoModalTipoDocumento:
            return {
                ...state,
                tdActive: action.payload.tdActive,
                tdModal: action.payload.tdModal,
                checking: false
            }   
        default:
            return state;
    }
}