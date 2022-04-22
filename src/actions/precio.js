import { fetchPrecioMetal, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getSucursalesPrecio = () => {
    return async (dispatch) => {
        const resp = await fetchPrecioMetal('precio/get-sucursales');
        const body = await resp.json();
        if (body.ok) {
            dispatch(getSucursalesPrecioFinanzas(body))
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
export const sendCorreo = () => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 20000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async () => {
        const resp = await fetchSinToken('departamento/enviar-precio-metal');
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                title: 'Correo enviado',
                text: 'Se ha enviado el correo de confirmación con éxito',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Correo no enviado',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }
}
export const guardarPrecioMetal = (objeto) => {
    Swal.fire({
        title: 'Espere por favor',
        timer: 200000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    return async( dispatch ) => {
        const resp = await fetchPrecioMetal( 'precio/set-precio', objeto, 'POST' );
        const body = await resp.json();
        if( body.ok ) {         
            let texta = '';
            for(let item of body.data){
        
                texta += `*Sucursal ${item.sucursal}  => <span class="badge ${(item.ok == 1)? 'badge-info': 'badge-danger'} badge-pill"> ${item.texto}</span> <br>`;
               //texto += <span className="<span className="badge 'badge '+(item.ok)? 'badge-success': 'badge-danger'+' badge-pill"> '+ item.texto +'</span>;
            }   
            Swal.fire({
                title: 'Transacción exitosa',
                html: texta,
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
            dispatch(setCamposLimpios());
        } else {
            let text = '';
            for(let item of body.data){
        
                text += `Sucursal ${item.sucursal}  => <span class="badge ${(item.ok == 1)? 'badge-info': (item.ok == 2)? 'badge-danger': 'badge-dark'} badge-pill"> ${item.texto}</span> <br>`;
               //texto += <span className="<span className="badge 'badge '+(item.ok)? 'badge-success': 'badge-danger'+' badge-pill"> '+ item.texto +'</span>;
            }   
            Swal.fire({
                title: 'Se detuvo el proceso por una conexión',
                html: text,
                confirmButtonColor: "#1d8cf8", 
                icon: 'warning',
              })
        }
    }     
}



export const setSucursalesConPrecio = (data, tipo) => ({
    type: types.setListadoSucReales,
    payload: {
        data: data,
        tipo: tipo
    }
});



const setCamposLimpios = () => ({
    type: types.precioSetCamposLimpios,
});
const getSucursalesPrecioFinanzas = (data) => ({
    type: types.precioGetSucursales,
    payload: {
        sucursales: data.data,
        kilatajes: data.kilatajes
    }
});
export const setTipoMovimiento = (tipo) => ({
    type: types.precioSetTipoMovimiento,
    payload: tipo
});




