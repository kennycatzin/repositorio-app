import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
 
 
export const PrivateRoute = ({children}) => {
    
const {uid} = useSelector(state => state.auth)
const rutaServidor = '';
//const rutaServidor = '/repositorio-af';
console.log(uid)
    return (
        !!uid
        ?   children  
        :  <Navigate to="/login" />
    )              
}
 
 
