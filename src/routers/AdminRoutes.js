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
import { InventarioMenuScreen } from '../components/inventario/pages/InventarioMenuScreen';
import { InventarioArticulosScreen } from '../components/inventario/pages/solicitudes/InventarioArticulosScreen';
import { InventarioAsignacionesScreen } from '../components/inventario/pages/asignaciones/InventarioAsignacionesScreen';
import { InventarioLicenciasScreen } from '../components/inventario/pages/InventarioLicenciasScreen';
import { InventarioMarcasScreen } from '../components/inventario/pages/InventarioMarcasScreen';
import { InventarioTiposScreen } from '../components/inventario/pages/InventarioTiposScreen';
import { InventarioFormAsignacionScreen } from '../components/inventario/pages/asignaciones/InventarioFormAsignacionScreen';
import { EquipoScreen } from '../components/public/equipo/EquipoScreen';
import { PrecioMetalScreen } from '../components/precio_metal/pages/PrecioMetalScreen';
import { InventarioEquiposScreen } from '../components/inventario/pages/InventarioEquiposScreen';
import { OficalCumplimientoReportPage } from '../components/reports/oficial_cumplimiento/OficalCumplimientoReportPage';
import { RepositorioReportPage } from '../components/reports/repositorio/RepositorioReportPage';

export const AdminRoutes = () => {
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
                            <Route path={rutaServidor + "/tablero"} element={<TableroScreen/>} />
                            <Route path={rutaServidor + "/asignacion"} element={<AsignacionScreen/>} />               
                            <Route path={rutaServidor + "/category"} element={<CategoryScreen/>} />
                            <Route path={rutaServidor + "/subcategorie"} element={<SubcategoriesScreen/>} />               
                            <Route path={rutaServidor + "/files"} element={<FilesScreen/>} />      
                            <Route path={rutaServidor + "/equipo"} element={<EquipoScreen/>} />      

                            <Route path={rutaServidor + "/configuraciones"} element={<ConfiruagionesScreen/>} />
                            <Route path={rutaServidor + "/departamentos"} element={<DepartamentosScreen/>} />
                            <Route path={rutaServidor + "/estatus"} element={<EstatusScreen/>} />               
                            <Route path={rutaServidor + "/roles"} element={<RolesScreen/>} />       
                            <Route path={rutaServidor + "/tipos"} element={<TiposScreen/>} />  
                            <Route path={rutaServidor + "/repositorio"} element={<AdminRepositorio/>} />       
                            <Route path={rutaServidor + "/configurar"} element={<ArchivoConf/>} />       
                            <Route path={rutaServidor + "/usuarios"} element={<UsuariosScreen/>} />       
                            
                            <Route path={rutaServidor + "/menu-inventario"} element={<InventarioMenuScreen/>} />      
                            <Route path={rutaServidor + "/inventario-articulos"} element={<InventarioArticulosScreen/>} />      
                            <Route path={rutaServidor + "/inventario-asignaciones"} element={<InventarioAsignacionesScreen/>} />      
                            <Route path={rutaServidor + "/inventario-equipos"} element={<InventarioEquiposScreen/>} />      
                            <Route path={rutaServidor + "/inventario-marcas"} element={<InventarioMarcasScreen/>} />      
                            <Route path={rutaServidor + "/inventario-tipos"} element={<InventarioTiposScreen/>} />      
                            <Route path={rutaServidor + "/inventario-licencias"} element={<InventarioLicenciasScreen/>} />      
                            <Route path={rutaServidor + "/inventario-formulario-asignacion"} element={<InventarioFormAsignacionScreen/>} />      
                            
                            <Route path={rutaServidor + "/precio_metal"} element={<PrecioMetalScreen/>} />      
                            <Route path={rutaServidor + "/reportes-ofcu"} element={<OficalCumplimientoReportPage/>} />      
                            <Route path={rutaServidor + "/reportes-repoadmin"} element={<RepositorioReportPage/>} />      

                            
                    </Routes>
                </div>
            </div>
        </div>
    )
}
