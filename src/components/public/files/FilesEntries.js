import React from 'react'
import { FilesComponent } from './FilesComponent'
import {useSelector} from 'react-redux'
export const FilesEntries = () => {
    const {filesData} = useSelector(state => state.repo);
    return (
        <div className="row">
            {/* <ArchivoModal/> */}
            {                
                (!!filesData)?
                    filesData.map(files=>(
                        <FilesComponent key={files.id_archivo} data={files}/>
                    ))        
                : <h5>Regresar...</h5>        
            }
            
        </div>
    )
}
