import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2'

export const getRolesAdmin = () => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('rol/get-roles-admin');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getRoles(body.data))
            dispatch( rolStartLoading() );

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            dispatch( rolFinishLoading() );
        }
    }
}
export const getArchivosAdminConf = (id_subcategoria, id_rol) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const obj = {
            id_subcategoria,
            id_rol
        }
        const resp = await fetchSinToken('archivo/get-admin-configurar', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getAdminConfigurar(body.data))
            dispatch( rolStartLoading() );

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            dispatch( rolFinishLoading() );
        }

    }
}
export const openCloseConfModalRolArchivo = (estado) => ({
    type: types.rolArchivoConfModalTablero,
    payload: {
        modal: estado
    }
})

export const openCloseModalRol = (estado, obj = {}) => ({
    type: types.rolModalTablero,
    payload: {
        rol: obj,
        modal: estado
    }
})
const getAdminConfigurar = (data) => ({
    type: types.rolGetAdminConfigurar,
    payload: {
        crudos: data.archivos_crudos,
        configurados: data.archivos_configurados
    }
});
const getRoles = (data) => ({
    type: types.rolGetDataConfig,
    payload: data
});
export const rolStartLoading = () => ({
    type: types.rolStartLoading
})
export const rolFinishLoading = () => ({
    type: types.rolFinishLoading
})
export const guardarRol = (objeto) => {
    return async (dispatch) => {
        let url = '';
        let accion = '';
        console.log(objeto);
        if (objeto.id !== 0) {
            url = 'update-rol' + '/' + objeto.id;
            accion = 'PUT';
        } else {
            url = 'store-rol';
            accion = 'POST';
        }
        console.log(objeto)
        const resp = await fetchSinToken('rol/' + url, objeto, accion);
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Registro exitoso',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getRolesAdmin());
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
export const bajaRol = (id_rol, id_usuario) => {
    return async (dispatch) => {
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken('rol/baja-rol/' + id_rol, { usuario: id_usuario }, 'PUT');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getRolesAdmin());
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
