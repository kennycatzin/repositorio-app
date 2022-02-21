import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getRepositorioUsuario } from '../../../actions/repositorio';
import { CategoryEntries } from './CategoryEntries';

export const CategoryScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {        
        dispatch( getRepositorioUsuario() );
    }, [ dispatch ])

    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item active">Repositorio</li>
                </ol>
               
            </div>

            <CategoryEntries/>
           
        </>
    )
}
