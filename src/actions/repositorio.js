
import { fetchFormImagen, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'


export const getFolders = (tipo) => {
    return async (dispatch, getStatus) => {
        const { uid } = getStatus().auth
        console.log(uid);
        if (uid != null) {
            const resp = await fetchSinToken('user/get-listado-cabeceras', { tipo, id_usuario: uid }, 'POST');
            const body = await resp.json();
            if (body.ok) {
                console.log(body)
                dispatch(getCarpetas(body.data))
            } else {
            }
        } else {
        }
    }
}
export const getFiles = () => {
    return async (dispatch, getStatus) => {
        const { uid } = getStatus().auth
        const { id } = getStatus().repo.active
        if (uid != null) {
            const resp = await fetchSinToken('user/get-listado-archivos', { id_subcategoria: id, id_usuario: uid }, 'POST');
            const body = await resp.json();
            if (body.ok) {
                console.log(body.data)
                dispatch(getArchivos(body.data))
            } else {
            }
        } else {
        }
    }
}
export const getTiposConfigArchivos = () => {
    return async (dispatch) => {

        const resp = await fetchSinToken('tipo/get-tipos');
        const body = await resp.json();
        if (body.ok) {
            console.log(body.data)
            dispatch(getTiposAuxiliar(body.data))
        } 

    }
}
const getTiposAuxiliar = (tipos) => ({
    type: types.repoGetAuxFormularioArchivo,
    payload: tipos
});
export const setEstatusFiles = (id_archivo) => {
    return async () => {
        const resp = await fetchSinToken('user/set-archivo-estatus', { id_archivo }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
        } else {

        }
    }
}
export const setSubFolderActive = (subfolder) => ({
    type: types.repoSetSubfolderActive,
    payload: subfolder
})
export const repoSetFolderActive = (folder) => ({
    type: types.repoSetFolderActive,
    payload: folder
})
export const repoSetSubCategoriaActive = (subcategoria = null, accion) => ({
    type: types.repoActivarSubcategoriaAdmin,
    payload: {
        subcategoria,
        modalSubategoria: accion
    }
})

const getCarpetas = (carpetas) => ({
    type: types.repoGetFolders,
    payload: carpetas
});

const getArchivos = (archivos) => ({
    type: types.repoGetFiles,
    payload: archivos
});

export const guardarCategoria = (objeto) => {
    return async (dispatch) => {
        dispatch(startLoading());
        let url = '';
        let accion = '';
        console.log(objeto);
        if (objeto.id != null) {
            url = 'update-categoria' + '/' + objeto.id;
            accion = 'PUT';
        } else {
            url = 'store-categoria';
            accion = 'POST';
        }
        console.log(objeto)
        const resp = await fetchSinToken('categoria/' + url, objeto, accion);
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos correctos',
                text: 'Registro exitoso',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getAdminConf());
            dispatch(openModalCategoria(false));
        } else {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const guardarSubcategoria = (objeto) => {
    return async (dispatch) => {
        let url = '';
        let accion = '';
        console.log(objeto);
        if (objeto.id != null) {
            url = 'update-subcategoria' + '/' + objeto.id;
            accion = 'PUT';
        } else {
            url = 'store-subcategoria';
            accion = 'POST';
        }
        console.log(objeto)
        const resp = await fetchSinToken('subcategoria/' + url, objeto, accion);
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
            dispatch(getAdminConf());
            dispatch(openModalCategoria(false));
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
export const guardarConfiguracionRolArchivo = (objeto) => {
    return async (dispatch) => {
        let url = 'store-conf-rol';
        let accion = 'POST';
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
            dispatch(getAdminConf());
            dispatch(getAuxFormularioArchivo());
            dispatch(openCloseChecklistArchivoModal(false, {}));

            // dispatch(openModalCategoria(false));
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
export const bajaCategoria = (id_categoria, id_usuario) => {
    return async (dispatch) => {
        dispatch(startLoading());
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken('categoria/baja-categoria/' + id_categoria, { usuario: id_usuario }, 'PUT');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getAdminConf());
        } else {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const bajaArchivos = (id_archivo, usuario) => {
    return async (dispatch) => {
        dispatch(startLoading());
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken('archivo/delete-archivo', { id_archivo, usuario }, 'PUT');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getAdminConf());
        } else {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const bajaSubcategoria = (id_subcategoria, id_usuario) => {
    return async (dispatch) => {
        dispatch(startLoading());
        //status/update-baja/' + idObjeto,
        console.log(id_subcategoria, id_usuario);
        const resp = await fetchSinToken('subcategoria/baja-subcategoria/' + id_subcategoria, { usuario: id_usuario }, 'PUT');
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8",
                icon: 'success',
            })
            dispatch(getAdminConf());
        } else {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }
    }
}
export const getAdminConf = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('categoria/get-listado-documentos');
        const body = await resp.json();
        if (body.ok) {
            console.log(body.data)
            dispatch(adminConf(body.data));
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
export const getAuxFormularioArchivo = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('archivo/get-aux-formulario-archivo');
        const body = await resp.json();
        if (body.ok) {
            console.log(body.data)
            dispatch(auxFormArchivo(body.data));
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
const auxFormArchivo = (data) => ({
    type: types.repoGetAuxFormularioArchivo,
    payload: data
})
export const openModalDetalleArchivo = (estado, data = {}) => {
    return {
        type: types.repoModalDetalleArchivo,
        payload: {
            loading: false,
            msgError: null,
            objeto: data,
            modalDetalleArchivo: estado
        }
    }

}
export const openModalSubcategoria = (estado, data = {}) => {
    return {
        type: types.repoModalSubcategoria,
        payload: {
            loading: false,
            msgError: null,
            objeto: data,
            modalSubcategoria: estado
        }
    }

}
export const openModalCategoria = (estado, data = {}) => {
    return {
        type: types.repoModalCategoria,
        payload: {
            loading: false,
            msgError: null,
            objeto: data,
            modalCategoria: estado
        }
    }
}
export const openModalFormularioArchivos = (estado, data = {}) => {
    return {
        type: types.repoModalFormArchivos,
        payload: {           
            archivo: data,
            modalFormularioArchivo: estado
        }
    }

}
const adminConf = (data) => ({
    type: types.repoGetConfRepositorio,
    payload: data
})
export const categoriaActiva = (objCategoria) => ({
    type: types.repoActivarCategoria,
    payload: objCategoria
})
export const openCloseChecklistArchivoModal = (estado, obj = {}) => ({
    type: types.repoOpenModalChecklist,
    payload: {   
        dataArchivo: obj,
        modalChecklist: estado
    }
})
export const openModalArchivo = (estado, data = {}) => {
    return {
        type: types.repoModalArchivo,
        payload: {
            loading: false,
            msgError: null,
            objeto: data,
            modalArchivo: estado
        }
    }

}
export const guardarArchivoConfiguracion = (objeto, id= 0) => {
    return async( dispatch ) => {
        let url = '';
        let accion = '';
        let forma = new FormData();
        forma = objeto;
        dispatch( startLoading() );
        //status/update-baja/' + idObjeto,
        console.log(id);
        if (id !== 0) {
            console.log('entro')
            url = 'archivo/update-archivo' + '/' + id;
            accion = 'POST';
        } else {
            console.log('salgo')

            url = 'archivo/store-archivo';
            accion = 'POST';
        }
        const resp = await fetchFormImagen( url, forma, accion );
        console.log(resp)
        if( resp.data.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( finishLoading() );

            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(getAdminConf());

              
              console.log('obteniendo datos');

        } else {
            dispatch( getAdminConf() );

            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ha ocurrido un problema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}