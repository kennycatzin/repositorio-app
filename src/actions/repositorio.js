
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import { finishLoading, modalEstatus, startLoading } from './ui';
import Swal from 'sweetalert2'


export const getFolders = (tipo) => {
    return async(dispatch, getStatus) => {
        const {uid} = getStatus().auth
        console.log(uid);
        if(uid != null){        
            const resp = await fetchSinToken( 'user/get-listado-cabeceras', {tipo, id_usuario: uid}, 'POST' );
            const body = await resp.json();
            if( body.ok ) {
              console.log(body)
              dispatch(getCarpetas(body.data))
            } else {
            }
        }else{
        }
    }
}
export const getFiles = () => {
    return async(dispatch, getStatus) => {
        const {uid} = getStatus().auth
        const {id} = getStatus().repo.active
        if(uid != null){        
            const resp = await fetchSinToken( 'user/get-listado-archivos', {id_subcategoria: id, id_usuario: uid}, 'POST' );
            const body = await resp.json();
            if( body.ok ) {
                console.log(body.data)
              dispatch(getArchivos(body.data))
            } else {
            }
        }else{
        }
    }
}
export const setEstatusFiles = (id_archivo) => {
    return async() => {              
        const resp = await fetchSinToken( 'user/set-archivo-estatus', {id_archivo}, 'POST' );
        const body = await resp.json();
        if( body.ok ) {
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

const getCarpetas = ( carpetas ) => ({
    type: types.repoGetFolders,
    payload: carpetas
});

const getArchivos = ( archivos ) => ({
    type: types.repoGetFiles,
    payload: archivos
});

export const guardarCategoria = (objeto) => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        let url = '';
        let accion = '';
        console.log(objeto);
        if(objeto.id != null){
            url = 'update-categoria' + '/' + objeto.id;
            accion = 'PUT';
        }else{
            url = 'store-categoria';
            accion = 'POST';
        }
        console.log(objeto)
        const resp = await fetchSinToken( 'categoria/' + url, objeto, accion );
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
            dispatch(getAdminConf());
            dispatch(openModalCategoria(false));
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
export const bajaCategoria = (id_categoria, id_usuario) => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( 'categoria/baja-categoria/' + id_categoria, {usuario: id_usuario}, 'PUT' );
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
                dispatch(getAdminConf());
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
export const getAdminConf = () => {
    return async(dispatch) => {
        dispatch( startLoading() );
        const resp = await fetchSinToken( 'categoria/get-listado-documentos');
        const body = await resp.json();
        if( body.ok ) {
            console.log(body.data)
            dispatch(adminConf(body.data));
            dispatch( finishLoading() );
        } else {
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Error!',
                text: 'No existen datos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
    }
}
export const openModalSubcategoria = (estado, data = null) => {
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
export const openModalCategoria = (estado, data = null) => {
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
const adminConf = (data) => ({
    type: types.repoGetConfRepositorio,
    payload: data
})
export const categoriaActiva = (objCategoria) => ({
    type: types.repoActivarCategoria,
    payload: objCategoria
})