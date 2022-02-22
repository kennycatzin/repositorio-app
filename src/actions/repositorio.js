
import { fetchFormImagen, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'
import { getDataDashboard } from './dashboard';


export const getRepositorioUsuario = () => {
    return async (dispatch, getStatus) => {
        const { uid } = getStatus().auth
        if (uid != null) {
            const resp = await fetchSinToken( 'user/get-repositorio-usuario/'+uid );
            const body = await resp.json();
            if (body.ok) {
                dispatch(getRepoUser(body.data))
            } else {
            }
        } else {
        }
    }
}
const getRepoUser = (carpetas) => ({
    type: types.repoGetDataUser,
    payload: carpetas
});
export const getFiles = () => {
    return async (dispatch, getStatus) => {
        const { uid } = getStatus().auth
        const sub = getStatus().repo.active
        if (uid != null && !!sub) {
            const resp = await fetchSinToken('user/get-listado-archivos', { id_subcategoria: sub.id, id_usuario: uid }, 'POST');
            const body = await resp.json();
            if (body.ok) {
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
            dispatch(getTiposAuxiliar(body.data))
        } 

    }
}
const getTiposAuxiliar = (tipos) => ({
    type: types.repoGetAuxFormularioArchivo,
    payload: tipos
});
export const setEstatusFiles = (id_archivo, uid) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('user/set-archivo-estatus', { id_archivo }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getDataDashboard(uid));   
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
export const repoAgregarArchivo = (obj = {}) => ({
    type: types.repoAddDataArchivo,
    payload: obj
})

export const repoSetSubCategoriaActive = (subcategoria = null, accion) => ({
    type: types.repoActivarSubcategoriaAdmin,
    payload: {
        subcategoria,
        modalSubategoria: accion
    }
})



const getArchivos = (archivos) => ({
    type: types.repoGetFiles,
    payload: archivos
});
const setEliminarArchivos = (id_archivo) => ({
    type: types.repoDeleteDataArchivo,
    payload: id_archivo
});

export const guardarCategoria = (objeto) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Espere por favor',
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        dispatch(startLoading());
        let url = '';
        let accion = '';
        if (objeto.id != null) {
            url = `update-categoria/${objeto.id}`;
            accion = 'PUT';
        } else {
            url = 'store-categoria';
            accion = 'POST';
        }
        const resp = await fetchSinToken('categoria/' + url, objeto, accion);
        const body = await resp.json();
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
        if (objeto.id !== 0) {
            url = `update-subcategoria/${objeto.id}`;
            accion = 'PUT';
        } else {
            url = 'store-subcategoria';
            accion = 'POST';
        }
        const resp = await fetchSinToken('subcategoria/' + url, objeto, accion);
        const body = await resp.json();
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
            dispatch(openModalSubcategoria(false));
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
        Swal.fire({
            title: 'Espere por favor',
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        let url = 'store-conf-rol';
        let accion = 'POST';
        const resp = await fetchSinToken('rol/' + url, objeto, accion);
        const body = await resp.json();
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
            // dispatch(openCloseChecklistArchivoModal(true, {}));

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
            dispatch(setEliminarArchivos(id_archivo));
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
        const resp = await fetchSinToken('subcategoria/baja-subcategoria/' + id_subcategoria, { usuario: id_usuario }, 'PUT');
        const body = await resp.json();
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
export const getAdminRolesByDepartamento = (id_departamento = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('rol/get-roles-departamento/' + id_departamento);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getRolesByDepartamento(body.data));

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
const getRolesByDepartamento = (data) => ({
    type: types.repoGetRolesByDepartamento,
    payload: {
        rolDepa: data
    }
});
export const guardarArchivoConfiguracion = (objeto, id= 0) => {
    return async( dispatch ) => {
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
        let forma = new FormData();
        forma = objeto;
        dispatch( startLoading() );
        //status/update-baja/' + idObjeto,
        if (id !== 0) {
            url = `archivo/update-archivo/${id}`;
            accion = 'POST';
        } else {

            url = 'archivo/store-archivo';
            accion = 'POST';
        }
        const resp = await fetchFormImagen( url, forma, accion );
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
              //TODO: borrar items del state
              dispatch(setEliminarArchivos(resp.data.data.id));
              dispatch(repoAgregarArchivo(resp.data.data));
              dispatch(openModalFormularioArchivos(false));
              dispatch(getAdminConf());

              

        } else {
            //ispatch( getAdminConf() );

            Swal.fire({
                title: 'Datos incorrectos',
                text: resp.data.mensaje,
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }     
}