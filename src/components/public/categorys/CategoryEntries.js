import React from 'react'
import { useSelector } from 'react-redux'
import { FolderComponent } from '../../shared/folderComponent';
import { CategoriaComponent } from './categoriaComponent';

export const CategoryEntries = () => {
    const {data, checking} = useSelector(state => state.repo);

    return (
        <div className="row">
        {
            (checking === false) ?
                data.map(rep => (
                    <CategoriaComponent key={rep.id} categoria={rep} />
                )):
                <h3>Cargando...</h3>
        }
        </div>
    )
}
