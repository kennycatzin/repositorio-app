import React from 'react'
import { Navbar } from '../components/shared/navbar'
import { Routes, Route } from "react-router-dom";
import { DashboardScreen } from '../components/public/dashboard/DashboardScreen';
import { CategoryScreen } from '../components/public/categorys/CategoryScreen';
import { Sidebar } from '../components/shared/sidebar';
import { SubcategoriesScreen } from '../components/public/subcategories/SubcategoriesScreen';
import { FilesScreen } from '../components/public/files/FilesScreen';
import { TableroScreen } from '../components/admin/TableroScreen';
import { AsignacionScreen } from '../components/admin/AsignacionScreen';
import { DepartamentosScreen } from '../components/admin/DepartamentosScreen';
import { EstatusScreen } from '../components/admin/EstatusScreen';
import { RolesScreen } from '../components/admin/RolesScreen';
import { TiposScreen } from '../components/admin/TiposScreen';
import { ConfiruagionesScreen } from '../components/admin/ConfiruagionesScreen';
export const AdminRoutes = () => {
    return (
        <div className="wrapper">
            
            <Sidebar/>
            <div className="main-panel">
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
 
                    </Routes>
                </div>
            </div>
        </div>
    )
}
