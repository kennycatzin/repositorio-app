import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({children}) => {
    const {uid} = useSelector(state => state.auth)
    const rutaServidor = '';
    //const rutaServidor = '/repositorio-af';
    return ( !!uid
        ? <Navigate to={rutaServidor + "/"} />
        : children 
        
        )
        
}
 


