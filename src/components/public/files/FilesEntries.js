import React from 'react'
import { FilesComponent } from './FilesComponent'
import {useSelector} from 'react-redux'
export const FilesEntries = () => {
    const {filesData, checking} = useSelector(state => state.repo);
    return (
        <div className="row">
            {/* <ArchivoModal/> */}
            {                
                (checking)&&
                    filesData.map(files=>(
                        <FilesComponent key={files.id_archivo} data={files}/>
                    ))                
            }
            
        </div>
    )
}
