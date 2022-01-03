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
    return (
        <div className="wrapper">
            
            <Sidebar/>
            <div className="main-panel ">
                <Navbar/>
                <div className="content">
                    <Routes>
                        
                            <Route path="/" element={<DashboardScreen/>} />
                            <Route path="/tablero" element={<TableroScreen/>} />
                            <Route path="/asignacion" element={<AsignacionScreen/>} />               
                            <Route path="/category" element={<CategoryScreen/>} />
                            <Route path="/subcategorie" element={<SubcategoriesScreen/>} />               
                            <Route path="/files" element={<FilesScreen/>} />      

                            <Route path="/configuraciones" element={<ConfiruagionesScreen/>} />
                            <Route path="/departamentos" element={<DepartamentosScreen/>} />
                            <Route path="/estatus" element={<EstatusScreen/>} />               
                            <Route path="/roles" element={<RolesScreen/>} />       
                            <Route path="/tipos" element={<TiposScreen/>} />  
                            <Route path="/repositorio" element={<AdminRepositorio/>} />       
                            <Route path="/configurar-rol" element={<ArchivoConf/>} />       
                            <Route path="/usuarios" element={<UsuariosScreen/>} />       

                            
                            
                    </Routes>
                </div>
            </div>
        </div>
    )
}
