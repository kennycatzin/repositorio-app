import Swal from 'sweetalert2'
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
export const getDepartamentos = (index = 0) => {
    console.log(index);
    return async (dispatch) => {
        const resp = await fetchSinToken('departamento/get-departamentos-paginado/' + index);
        const body = await resp.json();
        if (body.ok) {
            console.log(body)
            dispatch(getDepas(body.data, body.mensaje))
            // dispatch( tableFinishLoading() );

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
const getDepas = (data, totales) => ({
    type: types.depaGetDepartamentos,
    payload: {
        data,
        totales
    }
});
export const getPaginacionDepas = (total) => ({
    type: types.depaMovPaginadorDepartamentos,
    payload: total
});
export const openCloseModalDepartamentos = (estado, obj = {}) => ({
    type: types.depaModalDepartamentos,
    payload: {
        depaActive: obj,
        depaModal: estado
    }
})
export const guardarDepartamento = (objeto) => {
    return async( dispatch ) => {
        let url = '';
        let accion = '';
        if (objeto.id !== 0) {
            console.log('entro')
            url = 'update-departamento' + '/' + objeto.id;
            accion = 'PUT';
        } else {
            url = 'store-departamento';
            accion = 'POST';
        }
        const resp = await fetchSinToken( 'departamento/' + url, objeto, accion );
        if( resp.ok ) {           
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha creado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(getDepartamentos());
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
export const eliminarDepartamento = (objeto) => {
    return async( dispatch ) => {
        //status/update-baja/' + idObjeto,
        const resp = await fetchSinToken( 'departamento/baja-departamento/' + objeto.id_departamento, objeto, 'PUT' );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha eliminado correctamente',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
              dispatch(getDepartamentos());
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