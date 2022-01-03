import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
export const registroEstatus = (objeto = {}, tipo= '', endpoint = '', segEndpoint = '') => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        let url = '';
        let accion = '';
        if(objeto.id != null){
            url = endpoint + '/' + objeto.id;
            accion = 'PUT';
        }else{
            url = endpoint;
            accion = 'POST';
        }
        console.log(objeto)
        const resp = await fetchSinToken( tipo + '/' + url, objeto, accion );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Registro exitoso',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getTableObjeto(tipo, segEndpoint));
        } else {
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}
export const getTableObjeto = (tipo, endPoint = '') => {
    return async(dispatch) => {
            dispatch( startLoading() );
            const resp = await fetchSinToken( `${tipo}/${endPoint}`);
            const body = await resp.json();
            if( body.ok ) {
                dispatch( finishLoading() );
                console.log(body);
                dispatch( getObjeto(body.data));
            } else {
                dispatch( finishLoading() );
            }
        
    }
}
const getObjeto = ( objeto ) => ({
    type: types.uiGetTableCatalogoObjeto,
    payload: objeto
});
export const getAuxRoles = () => {
    return async(dispatch) => {
            dispatch( startLoading() );
            const resp = await fetchSinToken('rol/get-roles');
            const body = await resp.json();
            if( body.ok ) {
                dispatch( finishLoading() );
                console.log(body);
                dispatch( getRolesAuxiliar(body.data));
            } else {
                dispatch( finishLoading() );
            }
        
    }
}
const getRolesAuxiliar = ( objeto ) => ({
    type: types.uiGetRoles,
    payload: objeto
});

  export const eliminarObjeto = (idObjeto, activo, usuario, objeto = '', endPoint = '', secundaryPoint = '') => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( `${objeto}/${endPoint}/` + idObjeto, {activo, usuario}, 'PUT' );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(getTableObjeto(objeto, secundaryPoint));
        } else {
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}
