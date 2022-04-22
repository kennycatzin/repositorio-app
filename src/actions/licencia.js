import {  fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'
export const getLicenciasAdmin = (pagina = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('licencia/get-item-paginado/' + pagina);
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            dispatch(getLicencias(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }
}
export const getEstatusLicencias = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('licencia/get-estatus-licencias');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            dispatch(getEstatusLic(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }
}
export const guardarLicencia = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        let resp = '';
        if(objeto.id == 0){

             resp = await fetchSinToken( 'licencia/store-item', objeto, 'POST' );

        }else{
             resp = await fetchSinToken( 'licencia/update-item/' + objeto.id, objeto, 'PUT' );
        }
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getLicenciasAdmin());
        } else {
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}
export const eliminarLicencia = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {        
        const resp = await fetchSinToken( 'licencia/eliminar-item', objeto, 'PUT' );        
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getLicenciasAdmin());
        } else {
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}

export const getBusquedaLicencias = (obj) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('licencia/busqueda', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getLicencias(body));

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
const getLicencias = (data) => ({
    type: types.licGetLicencias,
    payload: {
        data: data.data,
        registros: data.mensaje,
        paginas: data.paginas
    }
});
const getEstatusLic = (data) => ({
    type: types.licGetEstatusLicencias,
    payload: data.data
});

export const openCloseModalLicencias = (estado, obj = {}) => ({
    type: types.licModalLicencias,
    payload: {
        licActive: obj,
        licModal: estado
    }
})
export const licenciaManejadoPaginador = (conteo, paginador) => ({
    type: types.licPaginar,
    payload: {
        conteo, 
        paginador
    }
})