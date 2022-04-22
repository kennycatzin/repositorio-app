
import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

export const asignacionStartLoading = () => ({
    type: types.asignacionStartLoading
})
export const asignacionFinishLoading = () => ({
    type: types.asignacionFinishLoading
})
   
export const getAsignacionesPaginar = (index = 0) => {
    return async (dispatch) => {
        dispatch(asignacionStartLoading());

        const resp = await fetchSinToken('asignacion/get-asignaciones-paginado/' + index);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getAsignaciones(body))
            dispatch( asignacionFinishLoading() );

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            dispatch( asignacionFinishLoading() );
        }

    }
}
export const getSucursalesAdmin = () => {
    return async (dispatch) => {
        dispatch(asignacionStartLoading());

        const resp = await fetchSinToken('sucursal/get-items-admin');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getSucursales(body.data))

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
        dispatch( asignacionFinishLoading() );
    }
}
export const getEquipoAsignadoAdmin = (id_funcion, tipo) => {
    return async (dispatch) => {
        dispatch(asignacionStartLoading());
        const resp = await fetchSinToken('asignacion/get-asignacion-detalle', {id_funcion, tipo}, 'POST');
        const body = await resp.json();
        dispatch( setIdTipoActivo(id_funcion, tipo) );
        if (body.ok) {
            dispatch(getEquipoAsignado(body.data))

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
        dispatch( asignacionFinishLoading() );
        
    }
}
export const getTipoEquiposAdmin = () => {
    return async (dispatch) => {
        dispatch(asignacionStartLoading());
        const resp = await fetchSinToken('tipo_equipo/get-items-admin');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getTipoEquipos(body.data))

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
        dispatch( asignacionFinishLoading() );
    }
}
export const getEquipoDisponibleAdmin = (tipo, buscador, id_tipo_equipo) => {
    return async (dispatch) => {
        dispatch(asignacionStartLoading());
        const resp = await fetchSinToken('equipo/get-disponibles-admin', {tipo, buscador, id_tipo_equipo}, 'POST');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getEquipoDisponible(body.data))

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
        dispatch( asignacionFinishLoading() );
    }
}
export const eliminarEquipoAsignado = (id_asignacion, id_equipo, usuario, obj) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 20000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        dispatch(asignacionStartLoading());
        const resp = await fetchSinToken( 'asignacion/delete-configuracion', {id_asignacion, id_equipo, usuario}, 'POST' );
        const body = await resp.json();
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() )
            dispatch(setEliminarEA(obj))
            Swal.fire({
                title: 'Operación exitosa',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })

              // dispatch(getDepartamentos());
        } else {
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
        dispatch( asignacionFinishLoading() );
    }     
}
export const guardarConfiguracionNuevo = (obj, id_funcion, tipo) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Espere por favor',
            timer: 20000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        dispatch(asignacionStartLoading());
        const resp = await fetchSinToken( 'asignacion/store-configuracion', obj, 'POST' );
        const body = await resp.json();
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() )
            //dispatch(setEliminarEA(obj))
            Swal.fire({
                title: 'Operación exitosa',
                text: 'Se ha configurado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })

              dispatch(getEquipoAsignadoAdmin(id_funcion, tipo));
        } else {
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
        dispatch( asignacionFinishLoading() );
    }     
}
const getAsignaciones = (data) => ({
    type: types.asignacionpaginar,
    payload: {
        asignaciones: data.data,
        paginas: data.paginas,
        totales: data.totales,
    }
});
const setEliminarEA = (data) => ({
    type: types.asignacionEliminarAsignado,
    payload: data
});
export const setLimpiarArreglos = () => ({
    type: types.asignacionSetArrLimpios
});

export const setAgregarNuevo = (obj) => ({
    type: types.asignacionAgregarNuevo,
    payload: obj
});
const setIdTipoActivo = (id_usuario, tipo) => ({
    type: types.asignacionSetIdActivo,
    payload: {
        id_usuario, 
        tipo
    }
});
export const setEliminarNuevo = (obj) => ({
    type: types.asignacionEliminarNuevo,
    payload: obj
});
const getSucursales = (data) => ({
    type: types.asignacionSucursales,
    payload: data
});
const getEquipoAsignado = (data) => ({
    type: types.asignacionEquipoAsignado,
    payload: data
});
const getTipoEquipos= (data) => ({
    type: types.asignacionTipoEquiposAdmin,
    payload: data
});
const getEquipoDisponible= (data) => ({
    type: types.asignacionEquipoDisponible,
    payload: data
});
