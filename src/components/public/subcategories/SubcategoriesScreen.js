import React from 'react'
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { SubcategorieEntries } from './SubcategorieEntries';

export const SubcategoriesScreen = () => {
    // Agregar un useEffect()
    const valor = useSelector(state => state.repo.folder_active)

    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/category">Repositorio</Link>
                    </li>
                    <li className="breadcrumb-item active">{(!!valor)?valor.titulo : "Regresa..."}</li>
                </ol>
            </div>
            <SubcategorieEntries/>
        </>
    )
}
