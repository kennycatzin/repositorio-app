import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
export const getUsuariosAdmin = (index = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('user/get-data-admin/' + index);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getUsuarios(body.data, body.mensaje, body.paginas))
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
const getUsuarios = (data, totales, paginas) => ({
    type: types.userGetUsuarios,
    payload: {
        data,
        totales,
        paginas
    }
});
export const openCloseModalUsuarios = (estado, obj = {}) => ({
    type: types.userModalUsuario,
    payload: {
        userActive: obj,
        userModal: estado
    }
})
export const userManejadoPaginador = (conteo, paginador) => ({
    type: types.userPaginar,
    payload: {
        conteo, 
        paginador
    }
})
export const guardarUsuario = (objeto, conteoActual) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Espere por favor',
            timer: 20000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        let url = '';
        let accion = '';
        if (objeto.id !== 0) {
            url = `auth/update-user/${objeto.id} `;
            accion = 'POST';
        } else {
            url = 'user/guardar-usuario';
            accion = 'POST';
        }
        const resp = await fetchSinToken( url, objeto, accion );
        if( resp.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(openCloseModalUsuarios(false));
            dispatch(getUsuariosAdmin(conteoActual));
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
export const getBusquedaUsuarios = (obj) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('user/get-busqueda', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getUsuarios(body.data, body.mensaje));

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
export const eliminarUsuario = (objeto, conteo) => {
    return async( dispatch ) => {
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( 'user/set-usuario-baja/' + objeto.id, objeto, 'PUT' );
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
              dispatch(getUsuariosAdmin(conteo));
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