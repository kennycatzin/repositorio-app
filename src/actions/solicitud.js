import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getEquiposAdmin = (uid) => {
    return async (dispatch) => {
        if (uid != null) {
            const resp = await fetchSinToken('solicitud/get-equipos/' + uid);
            const body = await resp.json();
            if (body.ok) {
                dispatch(getEquipos(body.data))
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos incorrectos',
                    confirmButtonColor: "#1d8cf8",
                    icon: 'error',
                })
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const getSolicitudesAdmin = (tipo) => {
    return async (dispatch) => {
        if (tipo != null) {
            const resp = await fetchSinToken('solicitud/get-solicitudes/' + tipo);
            const body = await resp.json();
            if (body.ok) {
                console.log(body.data);
                dispatch(getSolicitudes(body.data))
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos incorrectos',
                    confirmButtonColor: "#1d8cf8",
                    icon: 'error',
                })
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const getReporte = (id_solicitud) => {
    return async (dispatch) => {            
            
            const resp = await fetchSinToken('solicitud/imprimir/' + id_solicitud);
            
        
    }
}
export const guardarSolicitud = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 10000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'solicitud/store-solicitud', objeto, 'POST' );
        if( resp.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getEquiposAdmin(objeto.usuario));
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
export const atenderDetalleSolicitud = (objeto, id_solicitud) => {
    console.log(objeto);
    Swal.fire({
        title: 'Espere por favor',
        timer: 10000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'asignacion/atender-detalle-solicitud', objeto, 'POST' );
        const body = await resp.json();
        console.log(body);
        if( body.ok ) {   
            console.log(body);     
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(sustEquipo(objeto));

              if(body.data == 1){
                console.log('entro')
                dispatch(getSolicitudesAdmin(1));
               // dispatch(getReporte(74));
               window.open(process.env.REACT_APP_API_URL+'solicitud/imprimir/' + id_solicitud);
              }
            // dispatch(getEquiposAdmin(objeto.usuario));
        } else {
            Swal.fire({
                title: 'Proceso incorrecto',
                text: 'Ya ha elegido el tipo de movimiento antes.',
                confirmButtonColor: "#1d8cf8", 
                icon: 'warning',
            })
        }
    }     
}


export const getEstatusAgregarAdmin = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('solicitud/get-estatus-agregar');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getEstatusAgregar(body.data))
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


const getEstatusAgregar = (data) => ({
    type: types.solicitudGetEstatusAgregar,
    payload: data
});
const sustEquipo = (data) => ({
    type: types.solicitudSustElementoDetalle,
    payload: data
});

const getSolicitudes = (data) => ({
    type: types.solicitudGetSolicitudes,
    payload: data
});

const getEquipos = (data) => ({
    type: types.solicitudGetEquipos,
    payload: data
});
export const openCloseModal = (data, modal = {}) => ({
    type: types.solicitudModalOpen,
    payload: {
        equipo: data,
        modal: modal
    }
});
export const setActiveSolicitud = (data) => ({
    type: types.solicitudSetActiveSolicitud,
    payload: {
        solicitud: data,
        tipo: 'ADMIN'
    }
});
export const eliminarEquipoAdmin = (data) => ({
    type: types.solicitudEliminarEquipoAgregado,
    payload: data
});


export const agregarEquipoAdmin = (data) => ({
    type: types.solicitudAgregarEquipo,
    payload: data
});

