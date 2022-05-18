import {fetchSinToken, fetchPrecioMetal } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getInfoReporteAdmin = (data) => {
    return async (dispatch) => {
        dispatch(startLoading())
        var cadena = '';
        if(data.tipo === 'oficial'){
            cadena = 'oficial/cumplimiento'
        }else if (data.tipo === 'ventas'){
            cadena = 'oficial/ventas-clientes'
        }else if(data.tipo === 'empenos'){
            cadena = 'oficial/empenos-clientes'
        }    
        const resp = await fetchPrecioMetal(cadena, data, 'POST');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getInfoReporte(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(finishLoading())
        }
    }
}
export const getInfoReporteRepositorioAdmin = (data) => {
    return async (dispatch) => {
        dispatch(startLoading())
        var cadena = '';
        if(data.tipo === 'usuario'){
            cadena = 'reporte/get-info-usuarios'
        }else if (data.tipo === 'documentos'){
            cadena = 'reporte/get-documentosporrol'
        } 
        const resp = await fetchSinToken(cadena);
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getInfoReporte(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(finishLoading())
        }
    }
}
const getInfoReporte = (data) => ({
    type: types.reporteGetInfo,
    payload: {
        data: data.data,
    }
});

export const startLoading = () => ({
    type: types.reporteStartLoading
})
export const finishLoading = () => ({
    type: types.reporteFinishLoading
})
