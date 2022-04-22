import { types } from "../types/types";

const initialState = {
    checking: true,
    sucPrecioListo: [],
    nuevaLista: []
}
export const precioReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.precioGetSucursales:            
            return {
                ...state,
                sucursalPrecio: action.payload.sucursales,
                kilatajesPrecio: action.payload.kilatajes,               
            } 
        case types.setListadoSucReales:    
            return {
                ...state,
                sucPrecioListo: action.payload.data,
                sucTipoMostrar: action.payload.tipo
            } 
        case types.precioSetTipoMovimiento:                   
            return {
                ...state,
                tipoMovimiento: action.payload,
                // sucPrecioListo: []           
            } 
        case types.precioSetCamposLimpios:                   
            return {
                ...state,
                sucPrecioListo: [],
                sucTipoMostrar: '0'          
            }
            
        default:
            return state;
    }
}