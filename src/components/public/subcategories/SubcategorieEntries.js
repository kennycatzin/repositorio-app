import React from 'react'
import { useSelector } from 'react-redux';
import { FolderComponent } from '../../shared/folderComponent';
import { SubcategorieComponent } from './SubcategorieComponent';

export const SubcategorieEntries = () => {
    const subcategorias = useSelector(state => state.repo.folder_active.subcategorias);
    return (
        <div className="row">
            {
                (!!subcategorias) ?
                    subcategorias.map(sub => (
                        <SubcategorieComponent key={sub.id} subcategoria={sub}/>
                    )):
                        <h5>Cargando...</h5>
            }    
        </div>
    )
}
