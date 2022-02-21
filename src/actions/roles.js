import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2'

export const getRolesAdmin = (index = 0) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('rol/get-data-paginado/' + index);
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getRoles(body.data, body.mensaje, body.paginas))
            dispatch(rolStartLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
        }
    }
}
export const getAdminConfiguracion = (id_rol) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('rol/get-data-admin/' + id_rol);
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getDataAdminConfig(body.data));
            dispatch(rolFinishLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
        }
    }
}

export const getBusquedaRoles = (obj) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('rol/get-busqueda', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getRoles(body.data, body.mensaje));
            dispatch(rolFinishLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
        }
    }
}
export const getCategoriasRoles = () => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('categoria/get-categorias');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getCategoriasRolesAdmin(body.data))
            dispatch(rolStartLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
        }
    }
}
export const getSubcategoriasRoles = (id_categoria = 0) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const resp = await fetchSinToken('subcategoria/get-subcategoria-by-categoria/' + id_categoria);
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getSubcategoriasRolesAdmin(body.data))
            dispatch(rolFinishLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
        }
    }
}

const getSubcategoriasRolesAdmin = (data) => ({
    type: types.rolGetSubcategoriaByCategoria,
    payload: {
        subcategorias: data
    }
});
const getDataAdminConfig = (data) => ({
    type: types.rolGetConfiguracionAdmin,
    payload: data
});

const getCategoriasRolesAdmin = (data) => ({
    type: types.rolGetCategoria,
    payload: {
        categorias: data
    }
});
export const getArchivosAdminConf = (id_subcategoria, id_rol) => {
    return async (dispatch) => {
        dispatch(rolStartLoading());
        const obj = {
            id_subcategoria,
            id_rol
        }
        console.log(obj);
        const resp = await fetchSinToken('archivo/get-admin-configurar', obj, 'POST');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getAdminConfigurar(body.data))
            dispatch(rolStartLoading());

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
            dispatch(rolFinishLoading());
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
export const setRolActivo = (obj = {}) => ({
    type: types.rolActivo,
    payload: {
        rol: obj,
    }
})
const getAdminConfigurar = (data) => ({
    type: types.rolGetArchivosCrudosConfigurados,
    payload: {
        archivos_crudos: data.archivos_crudos,
        archivos_configurados: data.archivos_configurados
    }
});

const getRoles = (data, totales, paginas) => ({
    type: types.rolGetDataConfig,
    payload: {
        roles: data,
        totales,
        paginas
    }
});
export const rolStartLoading = () => ({
    type: types.rolStartLoading
})
const quitArchivos = () => ({
    type: types.rolQuitArchivos
})
export const rolFinishLoading = () => ({
    type: types.rolFinishLoading
})
export const addArchivoAconfigurar = (data) => ({
    type: types.rolDeleteCrudo,
    payload: data
})
export const deleteArchivoAddCrudo = (obj) => ({
    type: types.rolDeleteConfigurado,
    payload: obj
})
export const manejadoPaginador = (conteo, paginador) => ({
    type: types.rolPaginar,
    payload: {
        conteo, 
        paginador
    }
})



export const guardarRol = (objeto, conteo) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Espere por favor',
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
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
            dispatch(getRolesAdmin(conteo));
            dispatch(openCloseModalRol(false, {}));

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
export const configurarArchivoRol = (obj, id_subcategoria, id_rol) => {
    return async (dispatch) => {
        //status/update-baja/' + idObjeto,
        Swal.fire({
            title: 'Espere por favor',
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        const resp = await fetchSinToken('rol/store-conf-archivo', obj, 'POST');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            dispatch(quitArchivos());

            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getAdminConfiguracion(id_rol))
            dispatch(getArchivosAdminConf(id_subcategoria, id_rol));
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
export const bajaRol = (id_rol, id_usuario, conteo) => {
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
            dispatch(getRolesAdmin(conteo));
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
export const bajaConfArchivoRol = (obj, usuario, id_rol) => {
    return async (dispatch) => {
        //status/update-baja/' + idObjeto,
        console.log(obj, usuario);
        const resp = await fetchSinToken('rol/eliminar-archivo-rol', { id_archivo_rol: obj.id, usuario, id_archivo: obj.id_archivo }, 'PUT');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(deleteArchivoAddCrudo(obj))
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            console.log(id_rol);
            dispatch(getAdminConfiguracion(id_rol))

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

