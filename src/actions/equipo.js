import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getEquiposAdmin = (pagina = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('equipo/get-item-paginado/' + pagina);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getEquipos(body))
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
export const getBusquedaEquipos = (obj) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('equipo/busqueda', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getEquipos(body));

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
export const openCloseModalEquipos = (estado, obj = {}, tipo = "OTRO") => {
    return async (dispatch) => {
        const resp = await fetchSinToken('equipo/get-licencias-disponibles/' + obj.id_licencia_office + '/' + obj.id_licencia_windows);
        const body = await resp.json();
        if (body.ok) {
            dispatch(equipoOpenCloseModal(estado, obj, tipo, body))
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
export const getHelpersEquipoAdmin = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('equipo/get-helpers');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getHelpers(body))
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
export const guardarEquipo = (objeto) => {
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
             resp = await fetchSinToken( 'equipo/store-item', objeto, 'POST' );
        }else{
             resp = await fetchSinToken( 'equipo/update-item/' + objeto.id, objeto, 'PUT' );
        }
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getEquiposAdmin());
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
export const eliminarEquipo = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 10000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {        
        const resp = await fetchSinToken( 'equipo/eliminar-item/'+objeto.id, objeto, 'PUT' );        
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getEquiposAdmin());
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

const getHelpers = (data) => ({
    type: types.equipoGetHelpers,
    payload: {
        tipo_equipos: data.tipo_equipos,
        equipos_computadora: data.equipos_computadora,
        marcas: data.marcas,
        lOffice: data.lOffice,
        lWindows: data.lWindows
    }
});
const getEquipos = (data) => ({
    type: types.equipoGetEquipos,
    payload: {
        data: data.data,
        registros: data.mensaje,
        paginas: data.paginas
    }
});
const equipoOpenCloseModal = (estado, obj = {}, tipo = "OTRO", data) => ({
    type: types.equipoModalObjetos,
    payload: {
        equipoActive: obj,
        equipoModal: estado,
        tipoObj: tipo,
        lOffice: data.lOffice,
        lWindows: data.lWindows
    }
})





