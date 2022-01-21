import React from 'react'
import { Navbar } from '../components/shared/navbar'
import { Routes, Route } from "react-router-dom";
import { DashboardScreen } from '../components/public/dashboard/DashboardScreen';
import { CategoryScreen } from '../components/public/categorys/CategoryScreen';
import { Sidebar } from '../components/shared/sidebar';
import { SubcategoriesScreen } from '../components/public/subcategories/SubcategoriesScreen';
import { FilesScreen } from '../components/public/files/FilesScreen';
import { TableroScreen } from '../components/admin/catalogos/TableroScreen';
import { AsignacionScreen } from '../components/admin/AsignacionScreen';
import { ConfiruagionesScreen } from '../components/admin/ConfiruagionesScreen';
import { DepartamentosScreen } from '../components/admin/catalogos/DepartamentosScreen';
import { EstatusScreen } from '../components/admin/catalogos/EstatusScreen';
import { RolesScreen } from '../components/admin/catalogos/RolesScreen';
import { TiposScreen } from '../components/admin/catalogos/TiposScreen';
import { AdminRepositorio } from '../components/admin/AdminRepositorio';
import { ArchivoConf } from '../components/admin/catalogos/ArchivoConf';
import { UsuariosScreen } from '../components/admin/catalogos/UsuariosScreen';
export const AdminRoutes = () => {
    const rutaServidor = '';
    //const rutaServidor = '/repositorio-af';
    return (
        <div className="wrapper">
            
            <Sidebar/>
            <div className="main-panel ">
                <Navbar/>
                <div className="content">
                    <Routes>
                        
                            <Route path={rutaServidor + "/"} element={<DashboardScreen/>} />
                            <Route path={rutaServidor + "/tablero"} element={<TableroScreen/>} />
                            <Route path={rutaServidor + "/asignacion"} element={<AsignacionScreen/>} />               
                            <Route path={rutaServidor + "/category"} element={<CategoryScreen/>} />
                            <Route path={rutaServidor + "/subcategorie"} element={<SubcategoriesScreen/>} />               
                            <Route path={rutaServidor + "/files"} element={<FilesScreen/>} />      

                            <Route path={rutaServidor + "/configuraciones"} element={<ConfiruagionesScreen/>} />
                            <Route path={rutaServidor + "/departamentos"} element={<DepartamentosScreen/>} />
                            <Route path={rutaServidor + "/estatus"} element={<EstatusScreen/>} />               
                            <Route path={rutaServidor + "/roles"} element={<RolesScreen/>} />       
                            <Route path={rutaServidor + "/tipos"} element={<TiposScreen/>} />  
                            <Route path={rutaServidor + "/repositorio"} element={<AdminRepositorio/>} />       
                            <Route path={rutaServidor + "/configurar"} element={<ArchivoConf/>} />       
                            <Route path={rutaServidor + "/usuarios"} element={<UsuariosScreen/>} />       

                            
                            
                    </Routes>
                </div>
            </div>
        </div>
    )
}
