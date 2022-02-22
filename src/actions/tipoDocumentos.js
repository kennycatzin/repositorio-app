import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
export const getTipoDocumentos = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('tipo/get-tipos');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getTipos(body.data))
            // dispatch( tableFinishLoading() );

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            // dispatch( tableFinishLoading() );
        }

    }
}
const getTipos = (data) => ({
    type: types.tipoGetTipoDocumentos,
    payload: data
});
export const openCloseModalTipoDocumento = (estado, obj = {}) => ({
    type: types.tipoModalTipoDocumento,
    payload: {
        tdActive: obj,
        tdModal: estado
    }
})
export const guardarTipoDocumento = (objeto) => {
    return async( dispatch ) => {
        let url = '';
        let accion = '';
        if (objeto.id !== 0) {
            url = `update-tipo/${objeto.id}`;
            accion = 'PUT';
        } else {
            url = 'store-tipo';
            accion = 'POST';
        }
        const resp = await fetchSinToken( 'tipo/' + url, objeto, accion );
        if( resp.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getTipoDocumentos());
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
export const eliminarTipoDocumento = (objeto) => {
    return async( dispatch ) => {
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( 'tipo/baja-tipo', objeto, 'PUT' );
        const body = await resp.json();
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(getTipoDocumentos());
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