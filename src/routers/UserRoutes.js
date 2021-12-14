import React from 'react'
import { Navbar } from '../components/shared/navbar'
import { Routes, Route } from "react-router-dom";
import { DashboardScreen } from '../components/public/dashboard/DashboardScreen';
import { CategoryScreen } from '../components/public/categorys/CategoryScreen';
import { Sidebar } from '../components/shared/sidebar';
import { SubcategoriesScreen } from '../components/public/subcategories/SubcategoriesScreen';
import { FilesScreen } from '../components/public/files/FilesScreen';

export const UserRoutes = () => {
    return (
        <div className="wrapper">
            
            <Sidebar/>
            <div className="main-panel">
                <Navbar/>
                <div className="content">
                    <Routes>
                        
                            <Route path="/" element={<DashboardScreen/>} />
                            <Route path="/category" element={<CategoryScreen/>} />
                            <Route path="/subcategorie" element={<SubcategoriesScreen/>} />               
                            <Route path="/files" element={<FilesScreen/>} />               

                    </Routes>
                </div>
            </div>
        </div>
    )
}
