
import Swal from 'sweetalert2'
import { fetchFormImagen, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
export const getTableroAdmin = () => {
    return async (dispatch, getStatus) => {
        dispatch(tableStartLoading());

        const resp = await fetchSinToken('tablero/get-tableros');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getTablero(body.data))
            dispatch( tableFinishLoading() );

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            dispatch( tableFinishLoading() );
        }

    }
}
const getTablero = (data) => ({
    type: types.tableGetDataConfig,
    payload: data
});
export const tableStartLoading = () => ({
    type: types.tableStartLoading
})
export const tableFinishLoading = () => ({
    type: types.tableFinishLoading
})
export const openCloseModalTablero = (estado, obj = {}) => ({
    type: types.tableModalTablero,
    payload: {
        tablero: obj,
        modal: estado
    }
})
export const guardarTablero = (objeto) => {
    return async( dispatch ) => {
        let url = '';
        let accion = '';
        let forma = new FormData();
        forma = objeto;
        dispatch( tableStartLoading() );
        //status/update-baja/' + idObjeto,
        console.log(forma.get('id'));
        if (forma.get('id') !== "undefined") {
            console.log('entro')
            url = 'update-tablero' + '/' + forma.get('id');
            accion = 'POST';
        } else {
            console.log('salgo')

            url = 'store-tablero';
            accion = 'POST';
        }
        const resp = await fetchFormImagen( 'tablero/' + url, objeto, accion );
        console.log(resp)
        if( resp.data.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( tableFinishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getTableroAdmin());

        } else {
            dispatch( tableFinishLoading() );
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}
export const eliminarTablero = (objeto) => {
    return async( dispatch ) => {
        dispatch( tableStartLoading() );
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( 'tablero/baja-tablero', objeto, 'POST' );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( tableFinishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(getTableroAdmin());
        } else {
            dispatch( tableFinishLoading() );
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}