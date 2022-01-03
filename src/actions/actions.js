import { fetchSinToken } from '../helpers/fetch';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'
export const startLoginEmailPAssword = (usuario, password) => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        const resp = await fetchSinToken( 'auth/login', {usuario, password}, 'POST' );
        const body = await resp.json();
        console.log(body);
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('id', body.usuario.id );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.usuario.id,
                name: body.usuario.name,
                tipo: body.usuario.tipo
            }) )
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Bienvenido al sistema',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
              })
            dispatch( finishLoading() );
        }
    }
     
}
export const register = (usuario, email, password, name) => {
    return async( dispatch ) => {
        dispatch( startLoading() );
        const resp = await fetchSinToken( 'auth/register', {email, password, name, password_confirmation: password, usuario}, 'POST' );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            // localStorage.setItem('token', body.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos correctos',
                text: 'Se ha registrado el usuario',
                confirmButtonColor: "#1d8cf8", 
                icon: 'success',
              })
        } else {
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Datos incorrectos',
                text: 'Ya existe el usuario',
                confirmButtonColor: "#1d8cf8", 
                icon: 'error',
            })
        }
    }
     
}
export const startChecking = () => {
    return async(dispatch) => {
        const miID = localStorage.getItem('id');
        console.log(miID);
        if(miID != null){        
            const resp = await fetchSinToken( 'auth/renovar/'+ miID);
            const body = await resp.json();
            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('id', body.usuario.id );
                localStorage.setItem('token-init-date', new Date().getTime() );
                dispatch( login({
                    uid: body.usuario.id,
                    name: body.usuario.name,
                    tipo: body.usuario.tipo
                }) )
            } else {
                dispatch( checkingFinish() );
            }
        }else{
            dispatch( checkingFinish() );
        }
    }
}
const checkingFinish = ()=>({type: types.authCheckingFinish});

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}
const logout = () => ({type: types.authLogout})
