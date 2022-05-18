import React from 'react'
import { Navbar } from '../components/shared/navbar'
import { Routes, Route } from "react-router-dom";
import { DashboardScreen } from '../components/public/dashboard/DashboardScreen';
import { CategoryScreen } from '../components/public/categorys/CategoryScreen';
import { Sidebar } from '../components/shared/sidebar';
import { SubcategoriesScreen } from '../components/public/subcategories/SubcategoriesScreen';
import { FilesScreen } from '../components/public/files/FilesScreen';
import { OficalCumplimientoReportPage } from '../components/reports/oficial_cumplimiento/OficalCumplimientoReportPage';
import { TableroScreen } from '../components/admin/catalogos/TableroScreen';
import { ConfiruagionesScreen } from '../components/admin/ConfiruagionesScreen';

export const UserRoutes = () => {
    const rutaServidor = '';
    //const rutaServidor = '/repositorio-af';
    return (
        <div className="wrapper">
            
            <Sidebar/>
            <div className="main-panel">
                <Navbar/>
                <div className="content">
                    <Routes>
                        
                            <Route path={rutaServidor + "/"} element={<DashboardScreen/>} />
                            <Route path={rutaServidor + "/category"} element={<CategoryScreen/>} />
                            <Route path={rutaServidor + "/subcategorie"} element={<SubcategoriesScreen/>} />               
                            <Route path={rutaServidor + "/files"} element={<FilesScreen/>} />    

                            <Route path={rutaServidor + "/reportes-ofcu"} element={<OficalCumplimientoReportPage/>} />      
                            <Route path={rutaServidor + "/configuraciones"} element={<ConfiruagionesScreen/>} />
                            <Route path={rutaServidor + "/tablero"} element={<TableroScreen/>} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}
