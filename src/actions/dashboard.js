import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getDataDashboard = (uid) => {
    return async(dispatch)=>{
        if(uid != null){        
            const resp = await fetchSinToken( 'user/get-dashboard/' + uid);
            const body = await resp.json();
            if( body.ok ) {
              dispatch(getTablero(body.data))
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos incorrectos',
                    confirmButtonColor: "#1d8cf8", 
                    icon: 'error',
                  })
            }
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
    }
}
export const getListaArchivos = (id_usuario, id_estatus, nombre) => {
    return async(dispatch)=>{
        if(id_usuario != null){     
            const obj = {
                id_usuario,
                id_estatus
            }
            const resp = await fetchSinToken( 'tablero/get-files-tablero', obj, 'POST');
            const body = await resp.json();
            if( body.ok ) {
              dispatch(getFilesTablero(body.data, nombre))
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos incorrectos',
                    confirmButtonColor: "#1d8cf8", 
                    icon: 'error',
                  })
            }
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Ha ocurrido un problema con el servidor',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
        }
    }
}
const getTablero = ( data ) => ({
    type: types.dashGetTablero,
    payload: data
});
const getFilesTablero = ( data, estatus ) => ({
    type: types.tableGetFilesTablero,
    payload: {
        tableFiles: data,
        nombreEstatus: estatus
    }
});