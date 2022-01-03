import React from 'react'
import { useSelector } from 'react-redux'
import { FolderComponent } from '../../shared/folderComponent';

export const CategoryEntries = () => {
    const {data, checking} = useSelector(state => state.repo);

    return (
        <div className="row">
        {
            (checking === false) ?
            data.map(rep => (
                <FolderComponent key={rep.id} categoria={rep} tipo={1}/>
            )):
            <h3>Cargando...</h3>
        }
        </div>
    )
}
