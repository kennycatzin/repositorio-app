import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getTiposEquiposAdmin = (pagina = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('tipo_equipo/get-item-paginado/' + pagina);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getTiposEquipos(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }
}
export const guardarTipoEquipo = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 10000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        let resp = '';
        if(objeto.id == 0){
             resp = await fetchSinToken( 'tipo_equipo/store-item', objeto, 'POST' );
        }else{
             resp = await fetchSinToken( 'tipo_equipo/update-item/' + objeto.id, objeto, 'PUT' );
        }
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getTiposEquiposAdmin());
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
export const eliminarTipoEquipo = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {        
        const resp = await fetchSinToken( 'tipo_equipo/eliminar-item/'+ objeto.id, objeto, 'PUT' );        
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getTiposEquiposAdmin());
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
const getTiposEquipos = (data) => ({
    type: types.tipoEGetObjetos,
    payload: {
        data: data.data,
        registros: data.mensaje,
        paginas: data.paginas
    }
});

export const openCloseModalTipoEquipos = (estado, obj = {}) => ({
    type: types.tipoEModalObjetos,
    payload: {
        tipoEActive: obj,
        tipoEModal: estado
    }
})


