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
import { DashboardScreen } from '../components/public/dashboard/DashboardScreen';
export const AppRouter = () => {
    const dispatch = useDispatch();    
    const { checking } = useSelector(state => state.auth)
    console.log(checking);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])
    if(checking){
        return(<h5>Espere....</h5>)
    }
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />,
                    </PublicRoute>
                    }
            />
            <Route path="/register" element={
                    <PublicRoute>
                        <RegisterScreen />,
                    </PublicRoute>
                }     
            />
            <Route path="/*"  element ={
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
