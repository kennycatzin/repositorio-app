import { fetchSinexportRecordToExceloken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getMarcasAdmin = (pagina = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('marca/get-marca-paginado/' + pagina);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getMarcas(body))
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
export const guardarMarca = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        let resp = '';
        if(objeto.id == 0){
             resp = await fetchSinToken( 'marca/store-marca', objeto, 'POST' );
        }else{
             resp = await fetchSinToken( 'marca/update-marca/' + objeto.id, objeto, 'PUT' );
        }
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getMarcasAdmin());
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
export const descargaPruebaAdmin = () => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {        
        const resp = fetchSinexportRecordToExceloken( 'oficial/cumplimiento', {}, 'POST' );        
       
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })

    }     
}
export const eliminarMarca = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {        
        const resp = await fetchSinToken( 'marca/eliminar-marca', objeto, 'POST' );        
        const body = await resp.json();
        if( body.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getMarcasAdmin());
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
const getMarcas = (data) => ({
    type: types.marcaGetObjetos,
    payload: {
        data: data.data,
        registros: data.mensaje,
        paginas: data.paginas
    }
});
export const openCloseModalMarcas = (estado, obj = {}) => ({
    type: types.marcaModalObjetos,
    payload: {
        marcaActive: obj,
        marcaModal: estado
    }
})





