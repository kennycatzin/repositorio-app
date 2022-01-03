import React from 'react'
import { useSelector } from 'react-redux';
import { FolderComponent } from '../../shared/folderComponent';

export const SubcategorieEntries = () => {
    const {data, checking} = useSelector(state => state.repo);
    console.log(data, checking);
    return (
        <div className="row">
            {
                (checking === false) ?
                    data.map(sub => (
                        <FolderComponent key={sub.id_subcategoria} categoria={sub} tipo={2} />
                    )):
                        <h5>Cargando...</h5>
            }    
        </div>
    )
}
