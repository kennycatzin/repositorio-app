import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { startChecking } from '../actions/actions';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

import { UserRoutes } from './UserRoutes';
import {PublicRoute} from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';
import { AdminRoutes } from './AdminRoutes';
export const AppRouter = () => {
    const dispatch = useDispatch();    
    const { checking, tipo} = useSelector(state => state.auth)
    console.log(checking, tipo);
    const rutaServidor = '';
    //const rutaServidor = '/repositorio-af';
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])
    if(checking){
        return(<h5>Espere....</h5>)
    }
    return (
        <BrowserRouter >
            <Routes>
            <Route path={rutaServidor + "/login"} element={
                    <PublicRoute>
                        <LoginScreen />,
                    </PublicRoute>
                    }
            />
            <Route path={rutaServidor + "/register"} element={
                    <PublicRoute>
                        <RegisterScreen />,
                    </PublicRoute>
                }     
            />

            <Route path={rutaServidor + "/*"}  element ={
                tipo === "ADMIN" ? 
                    <PrivateRoute>
                        <AdminRoutes/>
                    </PrivateRoute> :        
                    <PrivateRoute>
                        <UserRoutes/>
                    </PrivateRoute>
              }
          />
                {/* <Route path="/*" element={<UserRoutes />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} /> */}
                
                
                
            </Routes>
        </BrowserRouter>
    )
}
